import { test, expect } from '@playwright/test';
import { computeAirFryerSetting, formatTempAdjustment, FOODS } from '../../src/lib/converter';
import { TEMP_STEPS, TIME_STEPS } from '../../src/lib/chart-data';
import { LIVE_PAGES } from '../../src/site.config';
import { LOCALES } from '../../src/i18n/locales';
import { localizedPath } from '../../src/i18n/utils';
import { getDictionary } from '../../src/i18n/dictionaries';

test.describe('/chart', () => {
  test('renders with zero page errors', async ({ page }) => {
    const pageErrors: Error[] = [];
    page.on('pageerror', (err) => pageErrors.push(err));

    const response = await page.goto('/chart');
    expect(response?.status()).toBe(200);

    await expect(page.locator('.chart-header h1')).toHaveText('Air Fryer Conversion Chart');
    await expect(page.getByRole('button', { name: 'Print this chart' })).toBeVisible();
    await expect(page.locator('.page-tag')).toContainText('No email');

    expect(pageErrors).toEqual([]);
  });

  test('temperature table matches computeAirFryerSetting output', async ({ page }) => {
    await page.goto('/chart');

    const tempRows = page.locator('.table-card').first().locator('tbody tr');

    const uncapped = computeAirFryerSetting({
      ovenTemp: 400,
      unit: 'F',
      ovenMinutes: 20,
      food: 'general',
      style: 'basket',
    });
    const row400 = tempRows.nth(TEMP_STEPS.indexOf(400));
    await expect(row400).toContainText(`${uncapped.outF}°F`);
    await expect(row400).toContainText(`${uncapped.outC}°C`);
    await expect(row400).toContainText(String(uncapped.gasMark));

    const capped = computeAirFryerSetting({
      ovenTemp: 450,
      unit: 'F',
      ovenMinutes: 20,
      food: 'general',
      style: 'basket',
    });
    expect(capped.capped).toBe(true);
    const row450 = tempRows.nth(TEMP_STEPS.indexOf(450));
    await expect(row450).toContainText(`${capped.outF}°F`);
    await expect(row450.locator('sup')).toHaveText('†');
  });

  test('time table matches computeAirFryerSetting output', async ({ page }) => {
    await page.goto('/chart');

    const result = computeAirFryerSetting({
      ovenTemp: 400,
      unit: 'F',
      ovenMinutes: 30,
      food: 'general',
      style: 'basket',
    });
    const row30 = page.locator('.table-card').nth(1).locator('tbody tr').nth(TIME_STEPS.indexOf(30));
    await expect(row30).toContainText(`${result.outMinutes} min`);
  });

  test('food-multiplier table matches the FOODS export', async ({ page }) => {
    await page.goto('/chart');

    const bakedRow = page.locator('.food-table tbody tr').filter({ hasText: 'Baked goods' });
    await expect(bakedRow).toContainText(formatTempAdjustment(FOODS.baked.dT));
    await expect(bakedRow).toContainText(`×${FOODS.baked.f}`);
  });

  test('formatTempAdjustment signs a zero and a negative dT correctly (regression)', () => {
    // Zero: no sign, not "−0°F".
    expect(formatTempAdjustment(0)).toBe('0°F');
    // Negative dT means the air fryer runs hotter than the oven — a "+", never a double negative.
    expect(formatTempAdjustment(-10)).toBe('+10°F');
    // Real data: a positive dT is a reduction, shown with the real minus sign (U+2212), not a hyphen.
    expect(formatTempAdjustment(25)).toBe('−25°F');
  });

  test('print stylesheet hides chrome and applies a 10pt-minimum black-on-white chart', async ({ page }) => {
    await page.goto('/chart');
    await page.emulateMedia({ media: 'print' });

    await expect(page.locator('.site-nav')).toHaveCSS('display', 'none');
    await expect(page.locator('.site-footer')).toHaveCSS('display', 'none');
    await expect(page.locator('.print-btn')).toHaveCSS('display', 'none');
    await expect(page.locator('.content-section').first()).toHaveCSS('display', 'none');

    const table = page.locator('.table-card table').first();
    await expect(table).toBeVisible();
    const fontSizePx = await table.evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
    // 10pt == 13.33px
    expect(fontSizePx).toBeGreaterThanOrEqual(13.3 - 0.5);

    const cellColor = await page
      .locator('.table-card td')
      .first()
      .evaluate((el) => getComputedStyle(el).color);
    expect(cellColor).toBe('rgb(0, 0, 0)');
  });

  test('related-links block has no anchor pointing at a non-live slug', async ({ page }) => {
    await page.goto('/chart');

    const hrefs = await page
      .locator('.related-links a')
      .evaluateAll((els) => els.map((el) => el.getAttribute('href')));

    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      expect(href).not.toBeNull();
      const slug = href!.replace(/^\/(es|pt|fr|de)(?=\/|$)/, '') || '/';
      expect(LIVE_PAGES.has(slug)).toBe(true);
    }

    // The gas-mark converter specifically doesn't exist yet — must not be linked.
    await expect(page.locator('.related-links a[href*="fahrenheit-celsius-gas-mark"]')).toHaveCount(0);
  });

  test('homepage gates every tool card on LIVE_PAGES, not a hardcoded slug', async ({ page }) => {
    test.setTimeout(90_000); // 5 homepages, run while the rest of the suite loads astro dev
    // Since the gas mark card moved to the live °C pages (eb327ae) the English homepage has no unbuilt card;
    // the translated homepages still show the English-only brand cards as Coming soon. So check every locale:
    // the rule (live → <a> to a LIVE_PAGES page, not live → inert div) applies to each, and across all five
    // there must still be disabled cards, so the disabled-card check is never vacuous.
    let disabledTotal = 0;
    for (const l of LOCALES) {
      await page.goto(localizedPath(l.code, '/'));

      // Every card link (grid cards and the Stage 4 list rows) — its own page or a fallback such as
      // /frozen?food=fries — points at a page in LIVE_PAGES.
      const liveHrefs = await page.locator('a.card, a.list-row').evaluateAll((els) => els.map((el) => el.getAttribute('href')));
      expect(liveHrefs.length, l.code).toBeGreaterThan(0);
      for (const href of liveHrefs) {
        expect(href, l.code).not.toBeNull();
        const path = href!.split('?')[0].replace(new RegExp(`^/${l.code}(?=/|$)`), '') || '/';
        expect(LIVE_PAGES.has(path), `${l.code} ${href}`).toBe(true);
      }

      // Every not-yet-live card renders as an inert div with the Coming soon stub — never an <a>.
      const disabledCards = page.locator('.card.disabled, .list-row.disabled');
      const disabledCount = await disabledCards.count();
      disabledTotal += disabledCount;
      for (let i = 0; i < disabledCount; i++) {
        const card = disabledCards.nth(i);
        expect(await card.evaluate((el) => el.tagName)).toBe('DIV');
        await expect(card).toHaveAttribute('aria-disabled', 'true');
        await expect(card).toContainText(getDictionary(l.code).home.comingSoon);
        await expect(card.locator('a')).toHaveCount(0);
      }
    }
    expect(disabledTotal).toBeGreaterThan(0); // the roadmap still has untranslated or unbuilt cards; never vacuous
  });

  test('print stays white-on-black even when the site is in dark mode', async ({ page }) => {
    await page.goto('/chart');
    await page.evaluate(() => document.documentElement.classList.add('dark'));
    await page.emulateMedia({ media: 'print' });

    const cardBg = await page
      .locator('.table-card')
      .first()
      .evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(cardBg).toMatch(/rgba?\(255,\s*255,\s*255/);

    const bodyBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(bodyBg).toMatch(/rgba?\(255,\s*255,\s*255/);
  });

  for (const [locale, heading] of [
    ['es', 'Tabla de conversión de freidora de aire'],
    ['pt', 'Tabela de conversão de air fryer'],
    ['fr', 'Tableau de conversion friteuse à air'],
    ['de', 'Umrechnungstabelle für die Heißluftfritteuse'],
  ] as const) {
    test(`/${locale}/chart renders translated with zero page errors`, async ({ page }) => {
      const pageErrors: Error[] = [];
      page.on('pageerror', (err) => pageErrors.push(err));

      const response = await page.goto(`/${locale}/chart`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('.chart-header h1')).toHaveText(heading);

      expect(pageErrors).toEqual([]);
    });
  }
});

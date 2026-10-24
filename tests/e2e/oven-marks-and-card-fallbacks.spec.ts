import { test, expect } from '@playwright/test';
import { computeAirFryerSetting, gasMarkFor, GAS_MARKS, thermostatFor } from '../../src/lib/converter';
import { TEMP_STEPS } from '../../src/lib/chart-data';
import { TEMP_LANDINGS, tempLandingSlug } from '../../src/lib/temp-landings';
import { LIVE_PAGES } from '../../src/site.config';
import { getDictionary } from '../../src/i18n/dictionaries';
import { LOCALES, OVEN_MARK_SCALE } from '../../src/i18n/locales';
import { localizedPath } from '../../src/i18n/utils';

/** The French thermostat, written out independently of the engine: exact °C ÷ 30, rounded, 1–10. */
const expectedThermostat = (tempF: number) => Math.min(10, Math.max(1, Math.round((tempF - 32) * 5 / 9 / 30)));
const expectedGasMark = (tempF: number) => GAS_MARKS.find(([f]) => Math.abs(f - tempF) <= 12)?.[1] ?? null;
const general = (tempF: number) => computeAirFryerSetting({ ovenTemp: tempF, unit: 'F', ovenMinutes: 25, food: 'general', style: 'basket' });

test.describe('oven-dial marks per locale', () => {
  test('only fr reads the thermostat; every other locale keeps the UK gas mark', () => {
    for (const l of LOCALES) expect(OVEN_MARK_SCALE[l.code]).toBe(l.code === 'fr' ? 'thermostat' : 'gasMark');
  });

  test('thermostat = round(°C / 30) and gas mark = UK table, at every TEMP_STEPS value', () => {
    let differs = 0;
    for (const tempF of TEMP_STEPS) {
      expect(thermostatFor(tempF)).toBe(expectedThermostat(tempF));
      expect(gasMarkFor(tempF)).toBe(expectedGasMark(tempF));
      if (thermostatFor(tempF) !== gasMarkFor(tempF)) differs++;
    }
    expect(thermostatFor(356)).toBe(6); // 180°C = Th. 6
    expect(differs).toBeGreaterThan(0); // the two scales really disagree, so the fr fix is not a no-op
  });

  for (const code of ['en', 'fr'] as const) {
    test(`/chart (${code}) mark column uses the ${OVEN_MARK_SCALE[code]} scale`, async ({ page }) => {
      await page.goto(localizedPath(code, '/chart'));
      const rows = page.locator('.table-card').first().locator('tbody tr');
      for (const [i, tempF] of TEMP_STEPS.entries()) {
        const outF = general(tempF).outF!;
        const mark = code === 'fr' ? expectedThermostat(outF) : expectedGasMark(outF);
        await expect(rows.nth(i).locator('td').nth(3)).toHaveText(mark === null ? '—' : String(mark));
      }
    });

    test(`widget (${code}) shows the ${OVEN_MARK_SCALE[code]} under the result`, async ({ page }) => {
      const label = getDictionary(code).converter.gasMark;
      await page.goto(localizedPath(code, '/oven-to-air-fryer'));
      for (const tempF of [350, 400, 450]) {
        await page.fill('#afk-temp', String(tempF));
        const outF = general(tempF).outF!;
        const mark = code === 'fr' ? expectedThermostat(outF) : expectedGasMark(outF);
        await expect(page.locator('#afk-gas-mark')).toHaveText(`${label} ${mark}`);
      }
    });
  }

  test('fr labels the mark "Th." and fr temp landing tables use the thermostat', async ({ page }) => {
    expect(getDictionary('fr').converter.gasMark).toBe('Th.');
    const { tempF } = TEMP_LANDINGS[0];
    await page.goto(localizedPath('fr', tempLandingSlug(tempF)));
    const outF = general(tempF).outF!;
    await expect(page.locator('#tl-food-table tr[data-food="general"] td[data-style="basket"] .cell-meta')).toContainText(
      `Th. ${expectedThermostat(outF)}`,
    );
    await expect(page.locator('#afk-gas-mark')).toHaveText(`Th. ${expectedThermostat(outF)}`);
    expect(await page.locator('body').innerText()).not.toMatch(/gas mark/i);
  });
});

test.describe('homepage card fallbacks', () => {
  const frozenCards = [
    { slug: '/frozen-fries', food: 'fries' },
    { slug: '/frozen-chicken-nuggets', food: 'nuggets' },
    { slug: '/frozen-chicken', food: 'rawChicken' },
    { slug: '/frozen-pizza', food: 'pizza' },
  ];

  for (const code of ['en', 'es'] as const) {
    test(`frozen cards (${code}) link to their page when live, else to /frozen?food=, never Coming soon`, async ({ page }) => {
      expect(LIVE_PAGES.has('/frozen')).toBe(true);
      await page.goto(localizedPath(code, '/'));
      const cards = page.locator('#frozen .card-grid > .card');
      await expect(cards).toHaveCount(frozenCards.length);
      for (const [i, { slug, food }] of frozenCards.entries()) {
        const expected = LIVE_PAGES.has(slug) ? localizedPath(code, slug) : `${localizedPath(code, '/frozen')}?food=${food}`;
        await expect(cards.nth(i)).toHaveAttribute('href', expected);
        await expect(cards.nth(i)).not.toContainText(getDictionary(code).home.comingSoon);
      }
    });
  }

  test('a fallback frozen card opens /frozen with its food preselected', async ({ page }) => {
    const { slug, food } = frozenCards[2];
    test.skip(LIVE_PAGES.has(slug), 'card already points at its own page');
    await page.goto('/');
    await page.locator('#frozen .card-grid > .card').nth(2).click();
    await expect(page).toHaveURL(new RegExp(`/frozen/?\\?food=${food}$`));
    await expect(page.locator('#afk-food')).toHaveValue(food);
  });
});

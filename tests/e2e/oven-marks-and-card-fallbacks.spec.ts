import { test, expect } from '@playwright/test';
import { computeAirFryerSetting, gasMarkFor, GAS_MARKS, thermostatFor } from '../../src/lib/converter';
import { TEMP_STEPS } from '../../src/lib/chart-data';
import { TEMP_LANDINGS, tempLandingSlug } from '../../src/lib/temp-landings';
import { HOME_FROZEN_CARDS, frozenCardEngineSpec } from '../../src/lib/home-cards';
import { PRESETS } from '../../src/data/presets';
import { presetPath, presetSpec, presetValues } from '../../src/lib/presets';
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
  const frozenCards = HOME_FROZEN_CARDS.map((c) => ({ slug: c.href, food: c.food }));

  test('frozen card specs: the live preset’s own spec, else the engine spec, in every locale', async ({ page }) => {
    // Engine spec (used until a card's page is live), pinned against the old hand-typed fries text.
    expect(frozenCardEngineSpec(HOME_FROZEN_CARDS[0], 'en')).toBe('400°F · 15 min · shake ×2');
    expect(frozenCardEngineSpec(HOME_FROZEN_CARDS[2], 'en')).toMatch(/· 165°F core$/);
    for (const { code } of LOCALES) {
      await page.goto(localizedPath(code, '/'));
      const specs = page.locator('#frozen .card-grid > .card .card-spec');
      await expect(specs).toHaveText(
        HOME_FROZEN_CARDS.map((c) => {
          const preset = PRESETS.find((p) => presetPath(p.slug) === c.href);
          return preset && LIVE_PAGES.has(c.href) ? presetSpec(preset, code) : frozenCardEngineSpec(c, code);
        }),
      );
    }
  });

  test('a live frozen card shows the same numbers as its page’s answer line', async ({ page }) => {
    const live = HOME_FROZEN_CARDS.filter((c) => LIVE_PAGES.has(c.href));
    expect(live.length).toBe(HOME_FROZEN_CARDS.length);
    await page.goto('/');
    const cardTexts = await page.locator('#frozen .card-grid > .card .card-spec').allInnerTexts();
    for (const [i, card] of HOME_FROZEN_CARDS.entries()) {
      if (!LIVE_PAGES.has(card.href)) continue;
      const preset = PRESETS.find((p) => presetPath(p.slug) === card.href)!;
      const v = presetValues(preset);
      await page.goto(card.href);
      const answer = await page.locator('#pr-answer').innerText();
      for (const n of (cardTexts[i].match(/\d+/g) ?? [])) expect(answer, `${card.href}: ${n} from "${cardTexts[i]}"`).toContain(n);
      expect(cardTexts[i]).toContain(`${v.AF_F}°F`);
      expect(cardTexts[i]).toContain(`${v.MIN} min`);
    }
  });

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

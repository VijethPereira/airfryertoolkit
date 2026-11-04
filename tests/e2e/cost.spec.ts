import { test, expect } from '@playwright/test';
import { CHOICE_TEST, COST_MODEL, TARIFFS, WHICH_MEASUREMENTS, WHICH_OVEN_RATED } from '../../src/data/energy';
import { MODELS } from '../../src/data/models';
import {
  COST_PATH, LOCALE_TARIFF, US_TIME_ZONES, choiceCheck, computeCost, expiredTariffs, fitCostModel, ratedOverstatement,
} from '../../src/lib/cost';
import { costValues, fillCost } from '../../src/lib/cost-page';
import { LIVE_PAGES, TRANSLATED_PAGES } from '../../src/site.config';
import { getDictionary } from '../../src/i18n/dictionaries';
import { LOCALES } from '../../src/i18n/locales';
import { localizedPath, localizedUrl } from '../../src/i18n/utils';
import type { LocaleCode } from '../../src/i18n/locales';

function shingles(text: string, n = 4): Set<string> {
  const words = text.toLowerCase().replace(/[0-9]+/g, '#').match(/[\p{L}#°%]+/gu) ?? [];
  const out = new Set<string>();
  for (let i = 0; i + n <= words.length; i++) out.add(words.slice(i, i + n).join(' '));
  return out;
}
function jaccard(a: Set<string>, b: Set<string>): number {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  return inter / (a.size + b.size - inter);
}
const wordCount = (text: string) => text.split(/\s+/).filter(Boolean).length;

/** The page's own prose, filled: intro, the four sections and the FAQs. */
function costCopy(locale: LocaleCode): string {
  const c = getDictionary(locale).cost;
  const v = costValues(locale, c);
  return [c.subDesc, c.leadBody, c.modelBody, c.exampleBody, c.ovenWinsBody, ...c.faqs.flatMap((f) => [f.q, f.a])].map((s) => fillCost(s, v)).join(' ');
}

test.describe('cost model data (src/data/energy.ts)', () => {
  test('COST_MODEL is the least-squares fit of all four Which? measurements, with its worst residuals', () => {
    const { params, residuals } = fitCostModel(WHICH_MEASUREMENTS);
    expect(WHICH_MEASUREMENTS).toHaveLength(4);
    expect(params.ovenWarmUpKwh).toBeCloseTo(COST_MODEL.oven.warmUpKwh, 4);
    expect(params.ovenHoldKw).toBeCloseTo(COST_MODEL.oven.holdKw, 4);
    expect(params.airFryerKw).toBeCloseTo(COST_MODEL.airFryer.averageKw, 4);
    expect(Math.min(...residuals.map((r) => r.oven))).toBeCloseTo(COST_MODEL.oven.residuals.min, 3);
    expect(Math.max(...residuals.map((r) => r.oven))).toBeCloseTo(COST_MODEL.oven.residuals.max, 3);
    expect(Math.min(...residuals.map((r) => r.airFryer))).toBeCloseTo(COST_MODEL.airFryer.residuals.min, 3);
    expect(Math.max(...residuals.map((r) => r.airFryer))).toBeCloseTo(COST_MODEL.airFryer.residuals.max, 3);
  });

  test('CHOICE is a check, not a fit: every model error is negative (the copy says "low"), saving within the stated points', () => {
    const check = choiceCheck();
    expect(check.rows).toHaveLength(CHOICE_TEST.meals.length);
    for (const r of check.rows) {
      expect(r.airFryerError, r.meal).toBeLessThan(0);
      expect(r.ovenError, r.meal).toBeLessThan(0);
    }
    // Refitting to CHOICE would move the parameters; the model must still be the Which? fit.
    expect(fitCostModel(WHICH_MEASUREMENTS).params.airFryerKw).toBeCloseTo(COST_MODEL.airFryer.averageKw, 4);
    expect(Math.round(check.errorMin * 100)).toBe(-35);
    expect(Math.round(check.errorMax * 100)).toBe(-18);
    expect(Math.round(check.savingGap * 100)).toBe(6);
  });

  test('the lead ratio comes from the data: 2.4 kW × time overstates Which?’s oven 1.5–3.2×', () => {
    const r = ratedOverstatement();
    expect(WHICH_OVEN_RATED.watts).toBe(2400);
    expect(r.min).toBeCloseTo(1.53, 2);
    expect(r.max).toBeCloseTo(3.15, 2);
    for (const l of LOCALES) {
      const c = getDictionary(l.code).cost;
      expect(c.leadBody, l.code).toContain('{OV_RATED_MIN}');
      expect(c.leadBody, l.code).toContain('{OV_RATED_MAX}');
    }
  });

  test('tariffs: every entry has an https source, a period, a checked date and a validUntil that has not passed', () => {
    const today = new Date().toISOString().slice(0, 10);
    for (const t of Object.values(TARIFFS)) {
      expect(t.source, t.id).toMatch(/^https:\/\//);
      expect(t.period, t.id).toMatch(/^(\d{4}-\d{2}-\d{2}\/\d{4}-\d{2}-\d{2}|\d{4}-\d{2}|\d{4}-S[12])$/);
      expect(t.checked, t.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(t.validUntil, t.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(t.perKwh, t.id).toBeGreaterThan(0);
      expect(t.perKwh, t.id).toBeLessThan(1);
      if (t.sourceName === 'Eurostat') expect(t.query, t.id).toMatch(/^https:\/\/ec\.europa\.eu\/eurostat\/api\/.*nrg_pc_204/);
    }
    expect(TARIFFS.uk.standingChargePerDay).toBe(0.5483);
    expect(TARIFFS.uk.vatRemoved).toEqual({ from: '2026-10-01', to: '2027-03-31' });
    // Fails once any default has expired: refresh the number, its period and validUntil.
    expect(expiredTariffs(today).map((t) => `${t.id} (valid until ${t.validUntil})`)).toEqual([]);
  });

  test('models.ts carries watts only for Cosori, where the manual states it', () => {
    for (const m of MODELS) {
      if (m.watts !== undefined) {
        expect(m.brand, m.id).toBe('cosori');
        expect(m.watts, m.id).toBeGreaterThanOrEqual(800);
        expect(m.watts, m.id).toBeLessThanOrEqual(2000);
      }
    }
    expect(MODELS.filter((m) => m.brand === 'cosori').every((m) => m.watts !== undefined)).toBe(true);
  });
});

test.describe('cost math, checked by hand (3 cases per locale, default tariff)', () => {
  // Hand-computed: air fryer kWh = 0.5473 × min/60; oven kWh = 0.5265 + 0.4398 × min/60; cost in minor units.
  const CASES = {
    F: [
      { ovenTemp: 400, ovenMinutes: 25, food: 'general', style: 'basket', pre: [10, 3], afMin: 23, ovMin: 35 },
      { ovenTemp: 425, ovenMinutes: 40, food: 'general', style: 'oven', pre: [10, 3], afMin: 37, ovMin: 50 },
      { ovenTemp: 350, ovenMinutes: 60, food: 'casserole', style: 'basket', pre: [15, 0], afMin: 51, ovMin: 75 },
    ],
    C: [
      { ovenTemp: 200, ovenMinutes: 25, food: 'general', style: 'basket', pre: [10, 3], afMin: 23, ovMin: 35 },
      { ovenTemp: 220, ovenMinutes: 40, food: 'general', style: 'oven', pre: [10, 3], afMin: 37, ovMin: 50 },
      { ovenTemp: 180, ovenMinutes: 60, food: 'casserole', style: 'basket', pre: [15, 0], afMin: 51, ovMin: 75 },
    ],
  } as const;
  const EXPECTED: Record<LocaleCode, [number, number][]> = {
    en: [[5.5, 20.6], [8.9, 23.5], [12.2, 28.3]],
    es: [[5.3, 19.6], [8.5, 22.4], [11.7, 27.0]],
    pt: [[5.0, 18.5], [8.0, 21.1], [11.0, 25.5]],
    fr: [[5.2, 19.5], [8.4, 22.2], [11.6, 26.7]],
    de: [[7.6, 28.3], [12.2, 32.3], [16.8, 38.9]],
  };
  for (const { code } of LOCALES) {
    test(`${code}: ${TARIFFS[LOCALE_TARIFF[code]].perKwh * 100} per kWh`, () => {
      const unit = code === 'en' ? 'F' : 'C';
      CASES[unit].forEach((k, i) => {
        const r = computeCost({
          ovenTemp: k.ovenTemp, unit, ovenMinutes: k.ovenMinutes, food: k.food, style: k.style,
          tariff: TARIFFS[LOCALE_TARIFF[code]].perKwh, ovenPreheat: k.pre[0], airFryerPreheat: k.pre[1], ovenWatts: 2400, airFryerWatts: 1500,
        })!;
        expect(r.airFryer.minutes, `${code} case ${i}`).toBe(k.afMin);
        expect(r.oven.minutes, `${code} case ${i}`).toBe(k.ovMin);
        expect(Math.round(r.airFryer.cost * 1000) / 10, `${code} case ${i} air fryer`).toBe(EXPECTED[code][i][0]);
        expect(Math.round(r.oven.cost * 1000) / 10, `${code} case ${i} oven`).toBe(EXPECTED[code][i][1]);
        // Likely range brackets the estimate: measured = model / (1 + residual).
        expect(r.airFryer.costLow).toBeLessThan(r.airFryer.cost);
        expect(r.airFryer.costHigh).toBeGreaterThan(r.airFryer.cost);
        expect(r.oven.costLow).toBeCloseTo(r.oven.cost / (1 + COST_MODEL.oven.residuals.max), 10);
        expect(r.oven.costHigh).toBeCloseTo(r.oven.cost / (1 + COST_MODEL.oven.residuals.min), 10);
      });
    });
  }

  test('rated watts feed only the comparison line, and out-of-range input gives null', () => {
    const base = { ovenTemp: 400, unit: 'F', ovenMinutes: 25, food: 'general', style: 'basket', tariff: 0.25, ovenPreheat: 10, airFryerPreheat: 3 } as const;
    const a = computeCost({ ...base, ovenWatts: 2400, airFryerWatts: 900 })!;
    const b = computeCost({ ...base, ovenWatts: 3500, airFryerWatts: 1800 })!;
    expect(b.airFryer.cost).toBe(a.airFryer.cost);
    expect(b.oven.cost).toBe(a.oven.cost);
    expect(b.airFryer.ratedKwh).toBeCloseTo(1.8 * (23 / 60), 10);
    for (const bad of [{ ovenMinutes: 0 }, { ovenTemp: 50 }, { tariff: -1 }, { tariff: Number.NaN }, { ovenPreheat: 90 }]) {
      expect(computeCost({ ...base, ovenWatts: 2400, airFryerWatts: 1500, ...bad }), JSON.stringify(bad)).toBeNull();
    }
  });
});

test.describe('cost page copy', () => {
  test('every locale fills with no unknown {KEY} and types no model or tariff number', () => {
    for (const { code } of LOCALES) {
      expect(() => costCopy(code)).not.toThrow();
      const c = getDictionary(code).cost;
      const raw = [c.subDesc, c.leadBody, c.modelBody, c.exampleBody, ...c.faqs.flatMap((f) => [f.q, f.a])].join(' ');
      // Numbers in the prose come from placeholders; the quoted "30 minutes" is Consumer NZ's own wording
      // and nrg_pc_204 is Eurostat's dataset code, not a figure.
      expect(raw.replace(/30 minutes’ cooking time/g, '').replace(/nrg_pc_204/g, ''), code).not.toMatch(/\d/);
    }
  });

  test('copy length: 500–600 words of prose per locale', () => {
    const counts = Object.fromEntries(LOCALES.map(({ code }) => [code, wordCount(costCopy(code))]));
    console.log(`cost words: ${JSON.stringify(counts)}`);
    for (const [code, n] of Object.entries(counts)) {
      expect(n, code).toBeGreaterThanOrEqual(500);
      expect(n, code).toBeLessThanOrEqual(600);
    }
  });

  test('no template of the flagship: 4-gram Jaccard < 0.15 in every locale', () => {
    for (const { code } of LOCALES) {
      const t = getDictionary(code).tool;
      const flagship = [t.subDesc, t.aboutBody, t.multipliersBody, t.basketVsOvenBody, t.whatHappensBody, ...t.faqs.flatMap((f) => [f.q, f.a])].join(' ');
      const j = jaccard(shingles(costCopy(code)), shingles(flagship));
      console.log(`cost ${code} vs flagship: ${j.toFixed(3)}`);
      expect(j, code).toBeLessThan(0.15);
    }
  });

  test('every FAQ answer names its source', () => {
    for (const { code } of LOCALES) {
      for (const f of getDictionary(code).cost.faqs) expect(f.a, `${code}: ${f.q}`).toMatch(/(Source|Sources|Fuente|Fuentes|Fonte|Fontes|Quelle|Quellen)\s?:/);
    }
  });

  test('the flagship answers the wattage question in all 5 locales, with no number', () => {
    const q: Record<LocaleCode, RegExp> = { en: /higher-wattage/, es: /más vatios/, pt: /mais watts/, fr: /plus puissante/, de: /mehr Watt/ };
    for (const { code } of LOCALES) {
      const faq = getDictionary(code).tool.faqs.find((f) => q[code].test(f.q));
      expect(faq, code).toBeTruthy();
      expect(faq!.a, code).not.toMatch(/\d/);
    }
  });
});

test.describe('registration', () => {
  test('live, translated, in the sitemap with hreflang, and the homepage card links it in every locale', async ({ page, request }) => {
    expect(LIVE_PAGES.has(COST_PATH)).toBe(true);
    expect(TRANSLATED_PAGES.some((p) => p.slug === COST_PATH)).toBe(true);
    expect(LIVE_PAGES.has('/wattage-adjustment')).toBe(false);
    const sitemap = await (await request.get('/sitemap.xml')).text();
    for (const { code } of LOCALES) expect(sitemap, code).toContain(`<loc>${localizedUrl(code, COST_PATH)}</loc>`);
    for (const { code } of LOCALES) {
      await page.goto(localizedPath(code, '/'));
      await expect(page.locator(`a[href="${localizedPath(code, COST_PATH)}"]`).first(), code).toBeVisible();
      await expect(page.locator('a[href$="/wattage-adjustment"]'), code).toHaveCount(0);
    }
  });
});

test.describe('the page', () => {
  for (const { code } of LOCALES) {
    test(`${code}: canonical, hreflang, JSON-LD (WebApplication, FAQPage, breadcrumbs) and the default tariff named by country`, async ({ page }) => {
      const errors: Error[] = [];
      page.on('pageerror', (e) => errors.push(e));
      await page.goto(localizedPath(code, COST_PATH));
      const c = getDictionary(code).cost;
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', localizedUrl(code, COST_PATH));
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(LOCALES.length + 1);
      const blocks = (await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap((j) => [JSON.parse(j)].flat().flatMap((b) => b['@graph'] ?? [b]));
      expect(blocks.map((b) => b['@type']).sort()).toEqual(['BreadcrumbList', 'FAQPage', 'WebApplication']);
      expect(blocks.find((b) => b['@type'] === 'FAQPage').mainEntity).toHaveLength(5);
      await expect(page.locator('main h1')).toHaveText(c.heading);
      await expect(page.locator('#afc-tariff-note')).toContainText(c.countries[LOCALE_TARIFF[code]]);
      await expect(page.locator('main')).not.toContainText(/\{[A-Z_0-9]+\}/);
      await expect(page.locator('#afc-reference tbody tr')).toHaveCount(4);
      expect(errors).toEqual([]);
    });
  }

  test.describe('English: UK tariff by default', () => {
    test.use({ timezoneId: 'Europe/London' });
    test('UK in the server HTML and in a UK browser; the toggle switches to US', async ({ page }) => {
      const res = await page.request.get(COST_PATH);
      expect(await res.text()).toContain('value="26.32"');
      await page.goto(COST_PATH);
      await expect(page.locator('#afc-tariff')).toHaveValue('26.32');
      await expect(page.locator('#afc-af-cost')).toHaveText('5.5p');
      await page.locator('#afc-region-us').click();
      await expect(page.locator('#afc-tariff')).toHaveValue('18.16');
      await expect(page.locator('#afc-af-cost')).toHaveText('3.8¢');
      await expect(page).toHaveURL(/region=us/);
    });
  });

  test.describe('English in a US time zone', () => {
    test.use({ timezoneId: 'America/Chicago' });
    test('starts on the US tariff; ?region=uk and ?tariff= override it', async ({ page }) => {
      expect(US_TIME_ZONES).toContain('America/Chicago');
      await page.goto(COST_PATH);
      await expect(page.locator('#afc-tariff')).toHaveValue('18.16');
      await expect(page.locator('#afc-region-us')).toHaveClass(/active/);
      await page.goto(`${COST_PATH}?region=uk`);
      await expect(page.locator('#afc-tariff')).toHaveValue('26.32');
      await page.goto(`${COST_PATH}?tariff=0.25`);
      await expect(page.locator('#afc-tariff')).toHaveValue('25.00');
      await expect(page.locator('#afc-tariff-note')).toHaveText(getDictionary('en').cost.tariffCustom);
    });
  });

  test('live output on every input, and the state round-trips through the query string', async ({ page }) => {
    await page.goto(COST_PATH);
    await page.locator('#afc-time').fill('40');
    await page.locator('#afc-style-oven').click();
    await expect(page.locator('#afc-af-cost')).toHaveText('8.9p');
    await expect(page.locator('#afc-ov-cost')).toHaveText('23.5p');
    const shared = page.url();
    expect(shared).toMatch(/t=40/);
    expect(shared).toMatch(/style=oven/);
    await page.goto(shared);
    await expect(page.locator('#afc-time')).toHaveValue('40');
    await expect(page.locator('#afc-ov-cost')).toHaveText('23.5p');
    await page.locator('#afc-time').fill('0');
    await expect(page.locator('#afc-af-cost')).toHaveText('—');
  });

  test('?af= and ?ov= set the rated watts; assumptions can be overridden and reset', async ({ page }) => {
    await page.goto(`${COST_PATH}?af=1800&ov=3000`);
    await expect(page.locator('#afc-af-w')).toHaveValue('1800');
    await expect(page.locator('#afc-ov-w')).toHaveValue('3000');
    await page.locator('.assumptions summary').click();
    await page.locator('#afc-p-af').fill('1');
    await expect(page.locator('#afc-af-kwh')).toHaveText('0.38 kWh');
    await page.locator('#afc-reset').click();
    await expect(page.locator('#afc-af-kwh')).toHaveText('0.21 kWh');
  });

  for (const width of [375, 412]) {
    test(`no horizontal scroll and 44px+ tap targets at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const { code } of LOCALES) {
        await page.goto(localizedPath(code, COST_PATH));
        await page.locator('.assumptions summary').click();
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(overflow, code).toBeLessThanOrEqual(0);
        // One evaluate per locale: per-element boundingBox calls ran past the timeout under full-suite load.
        const short = await page.evaluate(() =>
          [...document.querySelectorAll<HTMLElement>('#afc .seg-btn, #afc input, #afc select, .assumptions summary, .related-link a, .faq-q')]
            .filter((e) => e.getBoundingClientRect().height < 44)
            .map((e) => `${e.id || e.className} ${e.getBoundingClientRect().height}`));
        expect(short, code).toEqual([]);
      }
    });
  }
});

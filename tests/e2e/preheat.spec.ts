import { test, expect } from '@playwright/test';
import { MODELS } from '../../src/data/models';
import { MODEL_PREHEAT, PREHEAT_CHARTS } from '../../src/data/preheat';
import { PRESETS } from '../../src/data/presets';
import {
  DEFAULT_MINUTES, DEFAULT_RANGE_F, KIND_TO_MODE, PREHEAT_PATH, chartMinutes, defaultChartRows, defaultPreheatMinutes, preheatForSetting,
} from '../../src/lib/preheat';
import { SPLIT_EXAMPLES_F, preheatValues } from '../../src/lib/preheat-page';
import { presetValues } from '../../src/lib/presets';
import { TEMP_LANDINGS, fillPlaceholders, tempLandingValues } from '../../src/lib/temp-landings';
import { computeAirFryerSetting } from '../../src/lib/converter';
import { computeCost } from '../../src/lib/cost';
import { costValues, defaultCostInput, fillCost } from '../../src/lib/cost-page';
import { flagshipProse, flagshipValues } from '../../src/lib/flagship-copy';
import { modelMaxTempValues } from '../../src/lib/brands';
import { brands as brandsDict } from '../../src/i18n/dictionaries/brands/en';
import { preheatModels as modelCopy } from '../../src/i18n/dictionaries/preheat/en';
import { getDictionary } from '../../src/i18n/dictionaries';
import { LOCALES, type LocaleCode } from '../../src/i18n/locales';
import { localizedPath } from '../../src/i18n/utils';
import { LIVE_PAGES, TRANSLATED_PAGES } from '../../src/site.config';

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

/** The page's own prose, filled: intro, the five sections and the FAQs. */
function preheatCopy(locale: LocaleCode): string {
  const c = getDictionary(locale).preheat;
  const v = preheatValues();
  return [c.intro, c.leadBody, c.defaultBody, c.chartsBody, c.styleBody, c.skipBody, ...c.faqs.flatMap((f) => [f.q, f.a])].map((s) => fillPlaceholders(s, v)).join(' ');
}
function costProse(locale: LocaleCode): string {
  const c = getDictionary(locale).cost;
  const v = costValues(locale, c);
  return [c.subDesc, c.leadBody, c.modelBody, c.exampleBody, c.ovenWinsBody, ...c.faqs.flatMap((f) => [f.q, f.a])].map((s) => fillCost(s, v)).join(' ');
}
function maxTempProse(): string {
  const mt = brandsDict.maxTemp;
  const v = modelMaxTempValues();
  return [mt.intro, ...mt.sections.flatMap((s) => [s.heading, ...s.paragraphs]), ...mt.faqs.flatMap((f) => [f.q, f.a])].map((s) => fillPlaceholders(s, v)).join(' ');
}

test.describe('preheat data (src/data/preheat.ts)', () => {
  test('every model has exactly one entry, and every re-read entry names its read date and pages', () => {
    expect(MODEL_PREHEAT.map((p) => p.modelId).sort()).toEqual(MODELS.map((m) => m.id).sort());
    for (const p of MODEL_PREHEAT) {
      if (p.kind === 'notReread') {
        expect(p.read, p.modelId).toBeNull();
        expect(p.pages, p.modelId).toEqual([]);
        continue;
      }
      expect(p.read, p.modelId).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      // A document that says something cites the page; "not mentioned" has no page to cite.
      if (p.kind === 'notMentioned') expect(p.pages, p.modelId).toEqual([]);
      else expect(p.pages.length, p.modelId).toBeGreaterThan(0);
      if (p.kind === 'chart') expect(PREHEAT_CHARTS.some((c) => c.modelId === p.modelId), p.modelId).toBe(true);
      if (p.kind === 'fixed') expect(p.fixed, p.modelId).toBeTruthy();
      if (p.kind === 'none') expect(p.docType, p.modelId).toBe('specSheet');
    }
    // Ninja: the guides in manuals/ninja/ were re-read, so no Ninja entry is left as notReread.
    expect(MODEL_PREHEAT.filter((p) => p.modelId.startsWith('ninja-')).every((p) => p.kind !== 'notReread')).toBe(true);
  });

  test('the brand tables agree with what each document says', () => {
    for (const p of MODEL_PREHEAT) {
      if (p.kind === 'notReread') continue;
      expect(MODELS.find((m) => m.id === p.modelId)!.preheat, p.modelId).toBe(KIND_TO_MODE[p.kind]);
    }
  });

  test('both charts as printed: ascending, non-overlapping, and each chart page matches its model entry', () => {
    expect(PREHEAT_CHARTS).toHaveLength(2);
    for (const c of PREHEAT_CHARTS) {
      for (let i = 1; i < c.rows.length; i++) {
        expect(c.rows[i].minF, c.modelId).toBeGreaterThan(c.rows[i - 1].maxF);
        expect(c.rows[i].minutes, c.modelId).toBeGreaterThan(c.rows[i - 1].minutes);
      }
      expect(MODEL_PREHEAT.find((p) => p.modelId === c.modelId)!.pages, c.modelId).toContain(c.page);
    }
  });

  test('the default is the longer of the two charts at every dial step, and nothing outside them', () => {
    for (let t = DEFAULT_RANGE_F.min; t <= DEFAULT_RANGE_F.max; t += 5) {
      expect(defaultPreheatMinutes(t), String(t)).toBe(Math.max(...PREHEAT_CHARTS.map((c) => chartMinutes(c, t)!)));
    }
    expect(defaultPreheatMinutes(DEFAULT_RANGE_F.min - 5)).toBeNull();
    expect(defaultPreheatMinutes(DEFAULT_RANGE_F.max + 5)).toBeNull();
    const rows = defaultChartRows();
    expect(rows[0].minF).toBe(DEFAULT_RANGE_F.min);
    expect(rows.at(-1)!.maxF).toBe(DEFAULT_RANGE_F.max);
    expect([rows[0].minutes, rows.at(-1)!.minutes]).toEqual([DEFAULT_MINUTES.min, DEFAULT_MINUTES.max]);
    // The worked examples sit where the charts disagree.
    for (const t of Object.values(SPLIT_EXAMPLES_F)) {
      const [a, b] = PREHEAT_CHARTS.map((c) => chartMinutes(c, t));
      expect(a, String(t)).not.toBe(b);
    }
  });
});

test.describe('every preheat number on the site comes from the preheat data', () => {
  test('presets, temperature pages, converter, flagship and cost page', () => {
    for (const p of PRESETS) expect(presetValues(p, 'en').PREHEAT, p.slug).toBe(String(defaultPreheatMinutes(p.tempF)));
    for (const l of TEMP_LANDINGS) {
      const basket = computeAirFryerSetting({ ovenTemp: l.tempF, unit: 'F', ovenMinutes: 20, food: 'general', style: 'basket' });
      expect(tempLandingValues(l, 'en').PREHEAT, String(l.tempF)).toBe(String(defaultPreheatMinutes(basket.outF!)));
      expect('OS_PREHEAT' in tempLandingValues(l, 'en')).toBe(false);
    }
    expect(preheatForSetting(375, 'basket')).toEqual({ kind: 'minutes', minutes: defaultPreheatMinutes(375) });
    expect(preheatForSetting(375, 'oven')).toEqual({ kind: 'auto' });
    for (const { code } of LOCALES) {
      const f = flagshipValues(code);
      expect([f.PRE_MIN, f.PRE_MAX], code).toEqual([String(DEFAULT_MINUTES.min), String(DEFAULT_MINUTES.max)]);
      const v = costValues(code, getDictionary(code).cost);
      expect([v.PRE_AF_MIN, v.PRE_AF_MAX], code).toEqual([String(DEFAULT_MINUTES.min), String(DEFAULT_MINUTES.max)]);
      const input = defaultCostInput(code);
      expect(input.airFryerPreheat, code).toBeUndefined();
      const r = computeCost(input)!;
      expect(r.airFryerPreheat, code).toBe(defaultPreheatMinutes(r.airFryerF));
      expect(v.EX_AF_TOTAL, code).toBe(String(r.airFryerMinutes + r.airFryerPreheat));
    }
    // An explicit preheat still wins, so zero stays zero.
    expect(computeCost({ ...defaultCostInput('en'), airFryerPreheat: 0 })!.airFryerPreheat).toBe(0);
  });

  test('no preheat minutes are typed into any copy', () => {
    const PRE = /\b[2-4]\s*(?:–|-|to|a|à|bis)?\s*[2-4]?\s*(?:min|Min)/;
    for (const { code } of LOCALES) {
      const d = getDictionary(code);
      const texts = [
        ...d.home.guide.map((g) => g.body), ...d.tool.faqs.map((f) => f.a), d.reverseTool.ovenCaveatBody, ...d.frozenTool.faqs.map((f) => f.a),
        ...d.cost.faqs.map((f) => f.a), d.cost.modelBody,
      ];
      for (const t of texts) expect(t, code).not.toMatch(PRE);
    }
  });
});

test.describe('/preheat copy', () => {
  test('fills, and every number is a placeholder (5 locales; the English model copy too)', () => {
    for (const { code } of LOCALES) {
      expect(() => preheatCopy(code)).not.toThrow();
      const c = getDictionary(code).preheat;
      const raw = Object.values(c).flatMap((x) => (typeof x === 'string' ? [x] : Array.isArray(x) ? x.flatMap((f) => [f.q, f.a]) : []));
      for (const s of raw) expect(s.replace(/\{[A-Z0-9_]+\}/g, ''), code).not.toMatch(/\d/);
    }
    const m = JSON.stringify(modelCopy).replace(/\{[A-Z0-9_]+\}/g, '');
    expect(m).not.toMatch(/\d/);
  });

  test('copy length: 500–600 words of prose per locale', () => {
    const counts = Object.fromEntries(LOCALES.map(({ code }) => [code, wordCount(preheatCopy(code))]));
    console.log(`preheat words: ${JSON.stringify(counts)}`);
    for (const [code, n] of Object.entries(counts)) {
      expect(n, code).toBeGreaterThanOrEqual(500);
      expect(n, code).toBeLessThanOrEqual(600);
    }
  });

  test('no template of the flagship, the cost page or /model-max-temp: 4-gram Jaccard < 0.15', () => {
    const report: string[] = [];
    for (const { code } of LOCALES) {
      const own = shingles(preheatCopy(code));
      const pairs: [string, string][] = [['flagship', flagshipProse(code)], ['cost', costProse(code)]];
      if (code === 'en') pairs.push(['model-max-temp', maxTempProse()]);
      for (const [name, text] of pairs) {
        const j = jaccard(own, shingles(text));
        report.push(`${code} vs ${name}: ${j.toFixed(3)}`);
        expect(j, `${code} vs ${name}`).toBeLessThan(0.15);
      }
    }
    console.log(report.join('\n'));
  });

  test('live in all 5 locales, with the homepage card in place of the dropped batch scaler', () => {
    expect(LIVE_PAGES.has(PREHEAT_PATH)).toBe(true);
    expect(TRANSLATED_PAGES.some((p) => p.slug === PREHEAT_PATH)).toBe(true);
    expect(LIVE_PAGES.has('/batch-scaler')).toBe(false);
  });
});

test.describe('/preheat page', () => {
  test('English: live answer by temperature, style and model, shareable in the query string', async ({ page }) => {
    await page.goto(PREHEAT_PATH);
    const answer = page.locator('#aph-answer');
    await expect(answer).toContainText(`${defaultPreheatMinutes(400)} minutes at 400°F`);
    await page.fill('#aph-temp', '250');
    await expect(answer).toContainText(`${defaultPreheatMinutes(250)} minutes at 250°F`);
    await expect(page.locator('#aph-source')).toContainText('Pro LE 2 min, TurboBlaze 3 min');
    await page.fill('#aph-temp', '120');
    await expect(answer).toContainText('charts cover');
    await page.fill('#aph-temp', '700');
    await expect(answer).toHaveText(getDictionary('en').preheat.answerInvalid);
    await page.fill('#aph-temp', '375');
    await page.click('#aph-style-oven');
    await expect(answer).toHaveText(getDictionary('en').preheat.answerOvenStyle);
    await page.click('#aph-style-basket');

    await page.selectOption('#aph-model', 'cosori-pro-le-5');
    await expect(answer).toContainText(`${chartMinutes(PREHEAT_CHARTS[0], 375)} minutes at 375°F`);
    await expect(page.locator('#aph-source')).toContainText('manual, page 10');
    await page.selectOption('#aph-model', 'philips-premium-xxl-hd9650');
    await expect(answer).toContainText('No preheat needed');
    await expect(page.locator('#aph-source')).toContainText('spec sheet (not a manual), page 3');
    await page.selectOption('#aph-model', 'instant-vortex-6');
    await expect(answer).toContainText('Add Food');
    await page.selectOption('#aph-model', 'ninja-af101');
    await expect(answer).toContainText('400°F for 3 minutes');
    await expect(page.locator('#aph-source')).toHaveText('owner’s guide, page 7, read 2026-10-28');
    await page.selectOption('#aph-model', 'ninja-doublestack-sl401');
    await expect(answer).toContainText('does not mention preheating');
    await page.selectOption('#aph-model', 'cosori-oven-13');
    await expect(page.locator('#aph-style-oven')).toHaveClass(/active/);
    expect(new URL(page.url()).searchParams.get('model')).toBe('cosori-oven-13');

    await page.goto(`${PREHEAT_PATH}?temp=180&unit=C&model=cosori-turboblaze-6`);
    await expect(answer).toContainText('minutes at 180°C');
    await expect(page.locator('#aph-model')).toHaveValue('cosori-turboblaze-6');
  });

  test('English without JavaScript: the answer and the per-model table are in the HTML, filtered by plain links', async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto(PREHEAT_PATH);
    await expect(page.locator('#aph-answer')).toContainText(`${defaultPreheatMinutes(400)} minutes at 400°F`);
    await expect(page.locator('#aph-models tbody tr')).toHaveCount(MODELS.length);
    await expect(page.locator('#aph-default tbody tr')).toHaveCount(defaultChartRows().length);
    await expect(page.locator('figure[data-chart]')).toHaveCount(2);
    await page.locator('.filters a[data-brand="instant"]').click();
    await expect(page.locator('#aph-models tbody tr')).toHaveCount(MODELS.filter((m) => m.brand === 'instant').length);
    await page.locator('.filters a[data-kind="auto"]').click();
    await expect(page.locator('#aph-models tbody tr[data-kind="auto"]')).toHaveCount(MODELS.filter((m) => m.brand === 'instant').length);
    await page.goto(`${PREHEAT_PATH}?kind=notMentioned`);
    await expect(page.locator('#aph-models tbody tr')).toHaveCount(MODEL_PREHEAT.filter((p) => p.kind === 'notMentioned').length);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://airfryertoolkit.com/preheat');
    await ctx.close();
  });

  for (const { code } of LOCALES) {
    test(`${code}: JSON-LD, homepage card, and no model table outside English`, async ({ page }) => {
      await page.goto(localizedPath(code, PREHEAT_PATH));
      const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap((j) => [JSON.parse(j)].flat().flatMap((b) => b['@graph'] ?? [b]));
      const types = ld.map((b) => b['@type']);
      for (const t of ['WebApplication', 'FAQPage', 'BreadcrumbList']) expect(types, `${code} ${t}`).toContain(t);
      expect(ld.find((b) => b['@type'] === 'FAQPage').mainEntity).toHaveLength(5);
      await expect(page.locator('main'), code).not.toContainText(/\{[A-Z_0-9]+\}/);
      await expect(page.locator('#aph-model')).toHaveCount(code === 'en' ? 1 : 0);
      await expect(page.locator('#aph-models')).toHaveCount(code === 'en' ? 1 : 0);
      if (code !== 'en') await expect(page.locator('#aph-answer')).toContainText('200°C');
      await page.goto(localizedPath(code, '/'));
      await expect(page.locator(`#convert a.card[href="${localizedPath(code, PREHEAT_PATH)}"]`), code).toHaveCount(1);
    });
  }
});

test.describe('preheat elsewhere', () => {
  test('converter result panel: minutes for a basket, automatic for oven-style', async ({ page }) => {
    await page.goto('/oven-to-air-fryer');
    const out = computeAirFryerSetting({ ovenTemp: 400, unit: 'F', ovenMinutes: 25, food: 'general', style: 'basket' });
    await page.fill('#afk-temp', '400');
    await expect(page.locator('#afk-preheat')).toHaveText(`${defaultPreheatMinutes(out.outF!)} min`);
    await page.click('#afk-style-oven');
    await expect(page.locator('#afk-preheat')).toHaveText(getDictionary('en').converter.preheatAuto);
  });

  test('cost page: the air fryer preheat follows the temperature until someone types one, and the FAQ links to /preheat', async ({ page }) => {
    await page.goto('/air-fryer-vs-oven-cost');
    const pre = page.locator('#afc-pre-af');
    await expect(pre).toHaveValue(String(defaultPreheatMinutes(375)));
    await page.fill('#afc-temp', '300');
    await expect(pre).toHaveValue(String(defaultPreheatMinutes(275)));
    await pre.fill('0');
    await page.fill('#afc-temp', '425');
    await expect(pre).toHaveValue('0');
    await expect(page.locator(`.faq-link a[href="${PREHEAT_PATH}"]`)).toHaveCount(1);
  });
});

for (const width of [375, 412]) {
  test(`/preheat: no horizontal scroll and 44px+ tap targets at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const { code } of LOCALES) {
      await page.goto(localizedPath(code, PREHEAT_PATH));
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, code).toBeLessThanOrEqual(0);
      const short = await page.evaluate(() =>
        [...document.querySelectorAll<HTMLElement>('#aph .seg-btn, #aph input, #aph select, .chip, th a, .cell-link, .related-link a, .faq-q')]
          .filter((e) => e.offsetParent !== null && e.getBoundingClientRect().height < 44)
          .map((e) => `${e.id || e.className} ${e.getBoundingClientRect().height}`));
      expect(short, code).toEqual([]);
    }
  });
}

import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { buildBaseline } from '../fixtures/make-baseline';
import { MODELS, type BrandKey } from '../../src/data/models';
import {
  BRANDS, LIVE_BRANDS, BRAND_PATHS, MODEL_MAX_TEMP_PATH, brandModels, brandValues, modelStyle, modelCapacity,
  formatMax, fillBrand, modelMaxTempValues,
} from '../../src/lib/brands';
import { computeAirFryerSetting, computeAirFryerSettingFromFrozen, modelCeiling, FOODS, type FoodKey } from '../../src/lib/converter';
import { fillPlaceholders } from '../../src/lib/temp-landings';
import { TEMP_STEPS } from '../../src/lib/chart-data';
import { LIVE_PAGES, TRANSLATED_PAGES } from '../../src/site.config';
import { brands as dict } from '../../src/i18n/dictionaries/brands/en';
import { getDictionary } from '../../src/i18n/dictionaries';
import { LOCALES, DEFAULT_LOCALE } from '../../src/i18n/locales';
import { localizedPath } from '../../src/i18n/utils';

const FOOD_KEYS = Object.keys(FOODS) as FoodKey[];
const LIVE_KEYS = LIVE_BRANDS.map((b) => b.key);

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
/** The page's own prose, filled: intro, direct answer, widget note, sections and FAQs. */
function brandCopy(brand: BrandKey): string {
  const c = dict.pages[brand]!;
  return fillBrand(brand, [c.intro, c.answerTemplate, c.widgetNote, ...c.sections.flatMap((s) => [s.heading, ...s.paragraphs]), ...c.faqs.flatMap((f) => [f.q, f.a])].join(' '));
}
const wordCount = (text: string) => text.split(/\s+/).filter(Boolean).length;

test.describe('model data (src/data/models.ts)', () => {
  test('every model is sourced: https URL, a read date, valid enums, max above min, a name in the dictionary', () => {
    const ids = new Set<string>();
    for (const m of MODELS) {
      expect(ids.has(m.id), m.id).toBe(false);
      ids.add(m.id);
      expect(m.source, m.id).toMatch(/^https:\/\//);
      expect(m.sourced, m.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(['basket', 'oven-style', 'dual-zone', 'toaster-oven'], m.id).toContain(m.type);
      expect(['auto', 'manual', 'none', 'unknown'], m.id).toContain(m.preheat);
      expect(['F', 'C'], m.id).toContain(m.tempUnit);
      if (m.minF !== null) expect(m.maxF, m.id).toBeGreaterThan(m.minF);
      if (m.otherMax) {
        expect(['broil', 'maxCrisp'], m.id).toContain(m.otherMax.label);
        expect(m.otherMax.f, m.id).toBeGreaterThan(m.maxF);
      }
      for (const p of m.programs ?? []) {
        expect(p.minF, `${m.id} ${p.key}`).toBeLessThanOrEqual(p.defaultF);
        expect(p.defaultF, `${m.id} ${p.key}`).toBeLessThanOrEqual(p.maxF);
      }
      expect(dict.modelNames[m.id], m.id).toBeTruthy();
    }
  });

  test('°C sources keep the source value: Philips 200°C is stored as 392°F and shown as "200°C / 392°F"', () => {
    const na230 = MODELS.find((m) => m.id === 'philips-2000-na230')!;
    expect(na230.maxF).toBe(392);
    expect(formatMax(na230)).toBe('200°C / 392°F');
    expect(modelCeiling(na230.maxF)).toBe(390);
  });

  test('capacity: the stated unit is stored and the other derived; food load and missing volume show no volume', () => {
    for (const m of MODELS) {
      const c = modelCapacity(m);
      if (!c) continue;
      expect(Math.abs(c.L - c.qt * 0.946353), m.id).toBeLessThan(0.06);
    }
    const hd9650 = MODELS.find((m) => m.id.includes('hd9650'))!;
    expect(hd9650.capacity).toBeNull();
    expect(hd9650.capacityIsFoodLoad).toBe(true);
    expect(MODELS.find((m) => m.id.includes('hd9285'))!.capacity).toBeNull();
  });

  test('model counts per brand', () => {
    expect(brandModels('cosori').length).toBe(7);
    expect(brandModels('philips').length).toBe(8);
    expect(brandModels('instant').length).toBe(11);
    expect(brandModels('ninja').length).toBe(5);
  });
});

test.describe('engine: optional maxF', () => {
  test('a model ceiling floors to the dial step and never rounds up past the limit', () => {
    expect(modelCeiling(392)).toBe(390);
    expect(modelCeiling(450)).toBe(450);
    expect(modelCeiling(399)).toBe(395);
  });

  test('every model: no food, style, temperature or time gives a setting above its floored maxF', () => {
    for (const m of MODELS) {
      const ceiling = modelCeiling(m.maxF);
      for (const food of FOOD_KEYS) for (const t of [...TEMP_STEPS, 500, 550]) for (const min of [10, 30]) {
        const r = computeAirFryerSetting({ ovenTemp: t, unit: 'F', ovenMinutes: min, food, style: modelStyle(m), maxF: m.maxF });
        expect(r.outF!, `${m.id} ${food} ${t}`).toBeLessThanOrEqual(ceiling);
      }
    }
  });

  test('Cosori basket at 450 never goes above 450, and reaches settings a 400 basket cannot', () => {
    const turbo = MODELS.find((m) => m.id === 'cosori-turboblaze-6')!;
    expect(turbo.maxF).toBe(450);
    let above400 = 0;
    for (const food of FOOD_KEYS) for (const t of [...TEMP_STEPS, 500, 550]) {
      const r = computeAirFryerSetting({ ovenTemp: t, unit: 'F', ovenMinutes: 20, food, style: 'basket', maxF: 450 });
      expect(r.outF!).toBeLessThanOrEqual(450);
      if (r.outF! > 400) above400++;
    }
    expect(above400).toBeGreaterThan(0);
  });

  test('a 390 model caps at 390 and applies the capped-time bonus', () => {
    const input = { ovenTemp: 450, unit: 'F' as const, ovenMinutes: 20, food: 'general' as FoodKey, style: 'basket' as const };
    const capped = computeAirFryerSetting({ ...input, maxF: 392 });
    expect(capped.outF).toBe(390);
    expect(capped.capped).toBe(true);
    expect(capped.ceiling).toBe(390);
    // Same input below the cap: no bonus. The capped run takes longer than an uncapped run at a 450 ceiling.
    const uncapped = computeAirFryerSetting({ ...input, maxF: 450 });
    expect(uncapped.capped).toBe(false);
    expect(capped.outMinutes!).toBeGreaterThan(uncapped.outMinutes!);
    // The bonus is the engine's +0.08 on the time factor.
    const base = computeAirFryerSetting({ ...input, ovenTemp: 300, maxF: 392 });
    expect(base.capped).toBe(false);
    expect(capped.outMinutes! / 20 - base.outMinutes! / 20).toBeCloseTo(0.08, 1);
  });

  test('frozen input inherits maxF', () => {
    const r = computeAirFryerSettingFromFrozen({ ovenTemp: 450, unit: 'F', ovenMinutes: 20, food: 'fries', pack: 'conventional', style: 'basket', maxF: 392 });
    expect(r.outF!).toBeLessThanOrEqual(390);
  });

  test('without maxF every number is unchanged (tests/fixtures/no-model-baseline.json, generated before maxF existed)', () => {
    const before = readFileSync('tests/fixtures/no-model-baseline.json', 'utf8');
    expect(JSON.stringify(buildBaseline()) === before, 'engine output without maxF changed').toBe(true);
  });
});

test.describe('English-only pages', () => {
  test('brand pages and the model table are live but not translated', () => {
    for (const p of [...BRAND_PATHS, MODEL_MAX_TEMP_PATH]) {
      expect(LIVE_PAGES.has(p), p).toBe(true);
      expect(TRANSLATED_PAGES.some((t) => t.slug === p), p).toBe(false);
    }
    expect(BRAND_PATHS).toContain('/ninja');
  });

  test('sitemap: one entry each, no hreflang alternates', async ({ request }) => {
    const xml = await (await request.get('/sitemap.xml')).text();
    for (const p of [...BRAND_PATHS, MODEL_MAX_TEMP_PATH]) {
      const block = xml.match(new RegExp(`<url>\\s*<loc>https://airfryertoolkit\\.com${p}</loc>[\\s\\S]*?</url>`))?.[0];
      expect(block, p).toBeTruthy();
      expect(block, p).not.toContain('xhtml:link');
      for (const l of LOCALES.filter((x) => x.code !== DEFAULT_LOCALE)) expect(xml, p).not.toContain(`/${l.code}${p}<`);
    }
  });

  for (const path of [...BRAND_PATHS, MODEL_MAX_TEMP_PATH]) {
    test(`${path}: self canonical, no hreflang, breadcrumbs, zero page errors`, async ({ page }) => {
      const errors: Error[] = [];
      page.on('pageerror', (e) => errors.push(e));
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://airfryertoolkit.com${path}`);
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(0);
      const ld = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(ld.some((t) => t.includes('BreadcrumbList'))).toBe(true);
      expect(await page.content()).not.toMatch(/\{[A-Z_]+\}/);
      expect(errors).toEqual([]);
    });
  }

  test('translated homepages and nav never link the English-only pages; their brand cards are Coming soon', async ({ page }) => {
    for (const l of LOCALES.filter((x) => x.code !== DEFAULT_LOCALE)) {
      await page.goto(localizedPath(l.code, '/'));
      for (const p of [...BRAND_PATHS, MODEL_MAX_TEMP_PATH]) {
        await expect(page.locator(`a[href="${p}"], a[href="/${l.code}${p}"]`), `${l.code} ${p}`).toHaveCount(0);
      }
      const soon = getDictionary(l.code).home.comingSoon;
      for (const b of BRANDS) {
        const card = page.locator('.card.disabled', { hasText: getDictionary(l.code).home.brandCards[b.key].title });
        await expect(card.first(), `${l.code} ${b.key}`).toContainText(soon);
      }
    }
  });

  test('English homepage: every brand card links its page with a spec from the data', async ({ page }) => {
    await page.goto('/');
    const home = getDictionary('en').home;
    for (const b of LIVE_BRANDS) {
      const models = brandModels(b.key);
      const spec = fillPlaceholders(home.brandCardSpec, { MAX_F: String(Math.round(Math.max(...models.map((m) => m.maxF)))), N: String(models.length) });
      await expect(page.locator(`a.card[href="${b.path}"]`)).toContainText(spec);
    }
    await expect(page.locator(`a.card[href="${MODEL_MAX_TEMP_PATH}"]`)).toContainText(fillPlaceholders(home.modelTableSpec, { N: String(MODELS.length) }));
    for (const b of BRANDS) await expect(page.locator('.card.disabled', { hasText: home.brandCards[b.key].title })).toHaveCount(0);
  });
});

test.describe('brand pages', () => {
  test('each page leads with a different failure mode, and no page is a template (4-gram Jaccard < 0.15 vs each other and the flagship)', () => {
    const en = getDictionary('en');
    const flagship = [en.tool.subDesc, en.tool.aboutBody, en.tool.multipliersBody, en.tool.basketVsOvenBody, en.tool.whatHappensBody, ...en.tool.faqs.flatMap((f) => [f.q, f.a])].join(' ');
    const sets = LIVE_KEYS.map((k) => shingles(brandCopy(k)));
    const flag = shingles(flagship);
    for (let i = 0; i < sets.length; i++) {
      expect(jaccard(sets[i], flag), `${LIVE_KEYS[i]} vs flagship`).toBeLessThan(0.15);
      for (let j = i + 1; j < sets.length; j++) expect(jaccard(sets[i], sets[j]), `${LIVE_KEYS[i]} vs ${LIVE_KEYS[j]}`).toBeLessThan(0.15);
    }
    const intros = LIVE_KEYS.map((k) => dict.pages[k]!.intro);
    expect(new Set(intros).size).toBe(intros.length);
  });

  test('copy fills with no unknown {KEY} and types no engine number', () => {
    for (const k of LIVE_KEYS) {
      expect(() => brandCopy(k)).not.toThrow();
      const c = dict.pages[k]!;
      const raw = [c.intro, c.answerTemplate, ...c.sections.flatMap((s) => s.paragraphs), ...c.faqs.flatMap((f) => [f.q, f.a])].join(' ');
      expect(raw, k).not.toMatch(/\d{3}°[FC]/);
    }
    expect(() => fillPlaceholders(dict.maxTemp.intro, modelMaxTempValues())).not.toThrow();
  });

  test('copy length: 500–600 words of prose per page', () => {
    for (const k of LIVE_KEYS) {
      const n = wordCount(brandCopy(k));
      expect(n, k).toBeGreaterThanOrEqual(500);
      expect(n, k).toBeLessThanOrEqual(600);
    }
  });

  test('worked example values come from the engine', () => {
    const v = brandValues('philips');
    expect(Number(v.EX_MODEL_F)).toBeLessThanOrEqual(390);
  });

  for (const b of LIVE_BRANDS) {
    test(`${b.path}: every model in the picker caps the output at its floored maxF`, async ({ page }) => {
      await page.goto(b.path);
      await page.fill('#afk-temp', '550');
      await page.fill('#afk-time', '20');
      for (const m of brandModels(b.key)) {
        await page.selectOption('#afk-model', m.id);
        await expect(page.locator('#afk-out-main')).not.toHaveText('—');
        const outF = Number((await page.locator('#afk-out-main').textContent())!.match(/\d+/)![0]);
        expect(outF, m.id).toBe(modelCeiling(m.maxF));
        await expect(page.locator('#afk-capped'), m.id).toBeVisible();
      }
    });
  }
});

test.describe('/model-max-temp', () => {
  test('every model is a row, each with its source link and read date', async ({ page }) => {
    await page.goto(MODEL_MAX_TEMP_PATH);
    await expect(page.locator('tbody tr')).toHaveCount(MODELS.length);
    for (const m of MODELS) await expect(page.locator(`a[href="${m.source}"]`).first(), m.id).toBeAttached();
  });

  test('filter and sort work as plain links, with JavaScript off', async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto(MODEL_MAX_TEMP_PATH);
    await page.locator(`a[href*="brand=philips"]`).first().click();
    await expect(page).toHaveURL(/brand=philips/);
    await expect(page.locator('tbody tr')).toHaveCount(brandModels('philips').length);
    await page.goto(`${MODEL_MAX_TEMP_PATH}?sort=maxF&dir=asc`);
    const firsts = await page.locator('tbody tr').first().textContent();
    expect(firsts).toContain('392');
    await page.goto(`${MODEL_MAX_TEMP_PATH}?type=dual-zone`);
    await expect(page.locator('tbody tr')).toHaveCount(MODELS.filter((m) => m.type === 'dual-zone').length);
    // Filtered views point their canonical at the bare page.
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://airfryertoolkit.com${MODEL_MAX_TEMP_PATH}`);
    await ctx.close();
  });

  test('Dataset JSON-LD', async ({ page }) => {
    await page.goto(MODEL_MAX_TEMP_PATH);
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(' ');
    expect(ld).toContain('"Dataset"');
  });
});

test.describe('layout', () => {
  for (const path of [...BRAND_PATHS, MODEL_MAX_TEMP_PATH]) {
    for (const width of [375, 412]) {
      test(`${path} at ${width}px: no horizontal overflow`, async ({ page }) => {
        await page.setViewportSize({ width, height: 860 });
        await page.goto(path);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(overflow).toBeLessThanOrEqual(0);
      });
    }
  }
});

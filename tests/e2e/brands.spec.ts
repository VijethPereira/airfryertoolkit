import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { buildBaseline } from '../fixtures/make-baseline';
import { MODELS, type BrandKey } from '../../src/data/models';
import {
  BRANDS, LIVE_BRANDS, BRAND_PATHS, MODEL_MAX_TEMP_PATH, brandModels, brandModelsFor, brandValues, modelStyle, modelCapacity,
  formatMax, fillBrand, marketOf, marketOrder, modelRow, modelMaxC, modelMaxTempValues, widgetModels,
} from '../../src/lib/brands';
import { getBrandsDictionary } from '../../src/i18n/dictionaries/brands';
import { computeAirFryerSetting, computeAirFryerSettingFromFrozen, modelCeiling, FOODS, type FoodKey } from '../../src/lib/converter';
import { fillPlaceholders } from '../../src/lib/temp-landings';
import { TEMP_STEPS } from '../../src/lib/chart-data';
import siteConfig, { LIVE_PAGES, TRANSLATED_PAGES } from '../../src/site.config';
import { brands as dict } from '../../src/i18n/dictionaries/brands/en';
import { getDictionary } from '../../src/i18n/dictionaries';
import { flagshipProse } from '../../src/lib/flagship-copy';
import { LOCALES, DEFAULT_LOCALE, type LocaleCode } from '../../src/i18n/locales';
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
const TRANSLATED = LOCALES.filter((l) => l.code !== DEFAULT_LOCALE).map((l) => l.code);
/** The page's own prose, filled: intro, direct answer, widget note, sections and FAQs. */
function brandCopy(brand: BrandKey, locale: LocaleCode = 'en'): string {
  const c = getBrandsDictionary(locale).pages[brand]!;
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
    expect(brandModels('cosori').length).toBe(9);
    expect(brandModels('philips').length).toBe(14);
    expect(brandModels('instant').length).toBe(11);
    expect(brandModels('ninja').length).toBe(6);
  });

  test('EU rows: read from a European manufacturer page in °C, on the approved list only', () => {
    const eu = MODELS.filter((m) => marketOf(m) === 'eu');
    expect(eu.map((m) => m.modelNumber).sort()).toEqual(
      ['AF140EU', 'CAF-DC601-KEU', 'CAF-L501-KEU', 'HD9285/90', 'HD9650/90', 'NA230/00', 'NA350/00', 'NA351/00', 'NA555/00'].sort(),
    );
    for (const m of eu) {
      expect(m.tempUnit, m.id).toBe('C');
      expect(m.source, m.id).not.toMatch(/usa\.philips|cosori\.com|ninjakitchen\.com\/|\.co\.uk/);
      expect(m.source, m.id).toMatch(/[./](de|fr|es)\//);
      expect(m.sourced, m.id).toBe('2026-11-18');
    }
    // No Instant Vortex EU row (no model number on the EU pages); every row without a market is a US source.
    expect(eu.some((m) => m.brand === 'instant')).toBe(false);
    // One UK row: the NA350/03 spec sheet, a leaflet "Released United Kingdom (English)" (220-240 V, 50 Hz).
    expect(MODELS.filter((m) => m.market === 'uk').map((m) => m.modelNumber)).toEqual(['NA350/03']);
  });

  test('market order: English lists US rows first, es/pt/fr/de list EU rows first, stable within a market', () => {
    for (const b of LIVE_BRANDS) {
      const data = brandModels(b.key);
      const en = brandModelsFor(b.key, 'en').map(marketOf);
      expect(en, b.key).toEqual([...en].sort((x, y) => ['us', 'uk', 'eu'].indexOf(x) - ['us', 'uk', 'eu'].indexOf(y)));
      for (const l of TRANSLATED) {
        const rows = brandModelsFor(b.key, l);
        const markets = rows.map(marketOf);
        expect(markets, `${l} ${b.key}`).toEqual([...markets].sort((x, y) => ['eu', 'uk', 'us'].indexOf(x) - ['eu', 'uk', 'us'].indexOf(y)));
        expect(rows.length).toBe(data.length);
        // Within a market the data order is kept.
        for (const mk of ['eu', 'us'] as const) {
          expect(rows.filter((m) => marketOf(m) === mk).map((m) => m.id)).toEqual(data.filter((m) => marketOf(m) === mk).map((m) => m.id));
        }
        expect(widgetModels(b.key, l).map((w) => w.id), `${l} ${b.key} picker`).toEqual(rows.map((m) => m.id));
      }
    }
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

test.describe('translated brand pages and the model table', () => {
  test('brand pages and /model-max-temp are live and in TRANSLATED_PAGES', () => {
    for (const p of [...BRAND_PATHS, MODEL_MAX_TEMP_PATH]) {
      expect(LIVE_PAGES.has(p), p).toBe(true);
      expect(TRANSLATED_PAGES.some((t) => t.slug === p), p).toBe(true);
    }
    expect(BRAND_PATHS).toContain('/ninja');
  });

  test('sitemap: each brand page and the model table in all five locales with reciprocal hreflang', async ({ request }) => {
    const xml = await (await request.get('/sitemap.xml')).text();
    for (const p of [...BRAND_PATHS, MODEL_MAX_TEMP_PATH]) {
      for (const l of LOCALES) {
        const loc = `https://airfryertoolkit.com${localizedPath(l.code, p)}`;
        const block = xml.match(new RegExp(`<url>\\s*<loc>${loc.replace(/[.]/g, '\\.')}</loc>[\\s\\S]*?</url>`))?.[0];
        expect(block, loc).toBeTruthy();
        for (const alt of LOCALES) expect(block, `${loc} → ${alt.code}`).toContain(`hreflang="${alt.code}" href="https://airfryertoolkit.com${localizedPath(alt.code, p)}"`);
        expect(block, loc).toContain('hreflang="x-default"');
      }
    }
  });

  for (const l of LOCALES) {
    const path = localizedPath(l.code, MODEL_MAX_TEMP_PATH);
    test(`${path}: 200, self canonical (also for filtered variants), hreflang, translated copy, JSON-LD, market order, zero page errors`, async ({ page }) => {
      const errors: Error[] = [];
      page.on('pageerror', (e) => errors.push(e));
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', new RegExp(`^${l.code}`));
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://airfryertoolkit.com${path}`);
      for (const alt of LOCALES) {
        await expect(page.locator(`link[rel="alternate"][hreflang="${alt.code}"]`)).toHaveAttribute('href', `https://airfryertoolkit.com${localizedPath(alt.code, MODEL_MAX_TEMP_PATH)}`);
      }
      const mt = getBrandsDictionary(l.code).maxTemp;
      await expect(page.locator('main h1')).toHaveText(mt.heading);
      await expect(page).toHaveTitle(`${mt.metaTitle} | ${siteConfig.siteName}`);
      const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap((t) => { const j = JSON.parse(t); return j['@graph'] ?? [j]; });
      for (const type of ['WebApplication', 'Dataset', 'FAQPage', 'BreadcrumbList']) expect(ld.map((n: { '@type': string }) => n['@type']), type).toContain(type);
      const faq = ld.find((n: { '@type': string }) => n['@type'] === 'FAQPage');
      expect(faq.mainEntity.length).toBeGreaterThanOrEqual(5);
      expect(faq.mainEntity.length).toBeLessThanOrEqual(6);
      expect(ld.find((n: { '@type': string }) => n['@type'] === 'Dataset').variableMeasured).toEqual(mt.datasetVariables);
      // Every model; /es … /de in market order (EU first), °C first and a decimal comma.
      const markets = await page.locator('#mt-table tbody tr').evaluateAll((rows) => rows.map((r) => r.getAttribute('data-market')));
      expect(markets).toHaveLength(MODELS.length);
      if (l.code !== DEFAULT_LOCALE) {
        expect(markets).toEqual([...markets].sort((a, b) => marketOrder(l.code).indexOf(a as never) - marketOrder(l.code).indexOf(b as never)));
        expect(markets[0]).toBe('eu');
        for (const cell of await page.locator('#mt-table tbody tr td:nth-child(2)').allTextContents()) expect(cell.trim(), l.code).toMatch(/^\d+°C \/ \d+°F/);
        const caps = (await page.locator('#mt-table tbody tr td:nth-child(3)').allTextContents()).join(' ');
        expect(caps).toMatch(/\d,\d L/);
        expect(caps).not.toMatch(/\d\.\d/);
      }
      expect(await page.content()).not.toMatch(/\{[A-Z_]+\}/);
      // A filtered, sorted variant still canonicals to the bare locale URL, and its links stay in the locale.
      await page.goto(`${path}?brand=philips&sort=capacity&dir=asc`);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://airfryertoolkit.com${path}`);
      await expect(page.locator('#mt-table tbody tr')).toHaveCount(brandModels('philips').length);
      for (const h of await page.locator('.filters a').evaluateAll((as) => as.map((a) => a.getAttribute('href')!))) expect(h.startsWith(path), h).toBe(true);
      expect(errors).toEqual([]);
    });
  }

  for (const l of LOCALES) {
    for (const b of LIVE_BRANDS) {
      const path = localizedPath(l.code, b.path);
      test(`${path}: 200, self canonical, hreflang, translated copy, JSON-LD and breadcrumbs, zero page errors`, async ({ page }) => {
        const errors: Error[] = [];
        page.on('pageerror', (e) => errors.push(e));
        const res = await page.goto(path);
        expect(res?.status()).toBe(200);
        await expect(page.locator('html')).toHaveAttribute('lang', new RegExp(`^${l.code}`));
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://airfryertoolkit.com${path}`);
        for (const alt of LOCALES) {
          await expect(page.locator(`link[rel="alternate"][hreflang="${alt.code}"]`)).toHaveAttribute('href', `https://airfryertoolkit.com${localizedPath(alt.code, b.path)}`);
        }
        const copy = getBrandsDictionary(l.code).pages[b.key]!;
        await expect(page.locator('main h1')).toHaveText(copy.heading);
        await expect(page).toHaveTitle(`${fillBrand(b.key, copy.metaTitle)} | ${siteConfig.siteName}`);
        const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(' ');
        for (const type of ['WebApplication', 'FAQPage', 'BreadcrumbList']) expect(ld, type).toContain(`"${type}"`);
        const faqNames = (await page.locator('script[type="application/ld+json"]').allTextContents())
          .flatMap((t) => { const j = JSON.parse(t); return Array.isArray(j) ? j : j['@graph'] ?? [j]; })
          .filter((n: { '@type'?: string }) => n['@type'] === 'FAQPage')
          .flatMap((n: { mainEntity: { name: string }[] }) => n.mainEntity.map((q) => q.name));
        expect(faqNames).toContain(fillBrand(b.key, copy.faqs[0].q));
        await expect(page.locator('#br-models tbody tr')).toHaveCount(brandModels(b.key).length);
        expect(await page.content()).not.toMatch(/\{[A-Z_]+\}/);
        expect(errors).toEqual([]);
      });
    }
  }

  test('es/pt/fr/de tables: EU rows first, every maximum in °C first; English keeps US rows first', async ({ page }) => {
    test.setTimeout(120_000); // visits 16-20 pages in one test
    for (const b of LIVE_BRANDS) {
      for (const l of LOCALES) {
        await page.goto(localizedPath(l.code, b.path));
        const markets = await page.locator('#br-models tbody tr').evaluateAll((rows) => rows.map((r) => r.getAttribute('data-market')));
        expect(markets, `${l.code} ${b.key}`).toEqual(brandModelsFor(b.key, l.code).map(marketOf));
        const maxCells = await page.locator('#br-models tbody tr td:nth-child(2)').allTextContents();
        if (l.code !== DEFAULT_LOCALE) {
          for (const cell of maxCells) expect(cell.trim(), `${l.code} ${b.key}`).toMatch(/^\d+°C \/ \d+°F/);
          const picker = await page.locator('#afk-model option').evaluateAll((os) => os.map((o) => (o as HTMLOptionElement).value).filter(Boolean));
          expect(picker, `${l.code} ${b.key} picker`).toEqual(brandModelsFor(b.key, l.code).map((m) => m.id));
        }
      }
    }
  });

  test('capacity cells use a decimal comma on es/pt/fr/de and a decimal point in English', () => {
    const decimal = MODELS.filter((m) => modelCapacity(m) && !Number.isInteger(modelCapacity(m)!.L));
    expect(decimal.length).toBeGreaterThan(0);
    for (const m of decimal) {
      expect(modelRow(m, 'en').capacity, m.id).toMatch(/\d\.\d/);
      for (const l of TRANSLATED) {
        const cap = modelRow(m, l).capacity;
        expect(cap, `${l} ${m.id}`).toMatch(/^\d+(,\d)? L \/ \d+(,\d)? qt$/);
        expect(cap, `${l} ${m.id}`).toMatch(/\d,\d/);
      }
    }
  });

  test('a brand with no EU rows (Instant Vortex) says so in one line on es/pt/fr/de; brands with EU rows do not', async ({ page }) => {
    test.setTimeout(120_000); // visits 16-20 pages in one test
    for (const l of TRANSLATED) {
      for (const b of LIVE_BRANDS) {
        await page.goto(localizedPath(l, b.path));
        const hasEu = brandModels(b.key).some((m) => marketOf(m) === 'eu');
        await expect(page.locator('#br-eu-note'), `${l} ${b.key}`).toHaveCount(hasEu ? 0 : 1);
        if (!hasEu) await expect(page.locator('#br-eu-note')).toHaveText(getBrandsDictionary(l).euNote);
      }
    }
    expect(brandModels('instant').some((m) => marketOf(m) === 'eu')).toBe(false);
    await page.goto('/instant-vortex');
    await expect(page.locator('#br-eu-note')).toHaveCount(0);
  });

  test('every brand page links the model table in its own locale, with no "in English" label', async ({ page }) => {
    test.setTimeout(120_000); // visits 20 pages in one test
    for (const l of LOCALES) {
      const link = getBrandsDictionary(l.code).maxTempLink;
      expect(link, l.code).not.toMatch(/ingl[eé]s|anglais|Englisch|English\)/i);
      for (const b of LIVE_BRANDS) {
        await page.goto(localizedPath(l.code, b.path));
        await expect(page.locator(`a[href="${localizedPath(l.code, MODEL_MAX_TEMP_PATH)}"]`), `${l.code} ${b.key}`).toHaveText(link);
      }
    }
  });

  test('es/pt/fr/de widget starts at the worked example in °C', async ({ page }) => {
    for (const l of TRANSLATED) {
      const b = LIVE_BRANDS[0];
      await page.goto(localizedPath(l, b.path));
      await expect(page.locator('#afk-unit-c')).toHaveAttribute('aria-pressed', 'true');
      await expect(page.locator('#afk-temp')).toHaveValue(brandValues(b.key).EX_OVEN_C);
    }
  });

  test('translated homepages: brand cards and the model table card link the locale pages with specs from the data', async ({ page }) => {
    for (const l of TRANSLATED) {
      await page.goto(localizedPath(l, '/'));
      const home = getDictionary(l).home;
      await expect(page.locator(`a[href="${MODEL_MAX_TEMP_PATH}"]`), l).toHaveCount(0);
      await expect(page.locator(`a.card[href="/${l}${MODEL_MAX_TEMP_PATH}"]`), l).toContainText(fillPlaceholders(home.modelTableSpec, { N: String(MODELS.length) }));
      await expect(page.locator('.card.disabled', { hasText: home.brandCards.modelMaxTemp.title }), l).toHaveCount(0);
      for (const b of LIVE_BRANDS) {
        const models = brandModels(b.key);
        const top = models.reduce((a, m) => (m.maxF > a.maxF ? m : a));
        const spec = fillPlaceholders(home.brandCardSpec, { MAX_F: String(Math.round(top.maxF)), MAX_C: String(modelMaxC(top)), N: String(models.length) });
        expect(spec, l).toMatch(/°C/);
        await expect(page.locator(`a.card[href="/${l}${b.path}"]`), `${l} ${b.key}`).toContainText(spec);
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
  test('each page leads with a different failure mode, and no page is a template (4-gram Jaccard < 0.15 vs each other, the flagship and the English page)', () => {
    for (const l of LOCALES.map((x) => x.code)) {
      const flag = shingles(flagshipProse(l));
      const sets = LIVE_KEYS.map((k) => shingles(brandCopy(k, l)));
      for (let i = 0; i < sets.length; i++) {
        expect(jaccard(sets[i], flag), `${l} ${LIVE_KEYS[i]} vs flagship`).toBeLessThan(0.15);
        if (l !== DEFAULT_LOCALE) expect(jaccard(sets[i], shingles(brandCopy(LIVE_KEYS[i]))), `${l} ${LIVE_KEYS[i]} vs en`).toBeLessThan(0.15);
        for (let j = i + 1; j < sets.length; j++) expect(jaccard(sets[i], sets[j]), `${l} ${LIVE_KEYS[i]} vs ${LIVE_KEYS[j]}`).toBeLessThan(0.15);
      }
      const intros = LIVE_KEYS.map((k) => getBrandsDictionary(l).pages[k]!.intro);
      expect(new Set(intros).size, l).toBe(intros.length);
    }
  });

  test('copy fills with no unknown {KEY} and types no engine number, in every locale; es/pt/fr/de give °C before °F', () => {
    for (const l of LOCALES.map((x) => x.code)) {
      for (const k of LIVE_KEYS) {
        expect(() => brandCopy(k, l)).not.toThrow();
        const c = getBrandsDictionary(l).pages[k]!;
        expect(() => fillBrand(k, [c.metaTitle, c.metaDescription, c.heading, c.cardDesc].join(' '))).not.toThrow();
        const raw = [c.intro, c.answerTemplate, ...c.sections.flatMap((s) => s.paragraphs), ...c.faqs.flatMap((f) => [f.q, f.a])].join(' ');
        expect(raw, `${l} ${k}`).not.toMatch(/\d{3}°[FC]/);
        if (l !== DEFAULT_LOCALE) {
          // °C first: every °F figure is written "{X_C}°C ({X}°F" or "{X_C}°C / {X}°F", straight after its °C value.
          const all = [c.metaTitle, c.metaDescription, raw, c.widgetNote].join(' ');
          const fFigures = all.match(/\}°F/g) ?? [];
          const paired = all.match(/°C (\(|\/ )\{[A-Z_]+\}°F/g) ?? [];
          expect(paired.length, `${l} ${k}: °F figure not after its °C value`).toBe(fFigures.length);
        }
      }
    }
    expect(() => fillPlaceholders(dict.maxTemp.intro, modelMaxTempValues())).not.toThrow();
  });

  test('copy length: 500–600 words of prose per page (German at least 510), 5–6 FAQs', () => {
    for (const l of LOCALES.map((x) => x.code)) {
      for (const k of LIVE_KEYS) {
        const n = wordCount(brandCopy(k, l));
        expect(n, `${l} ${k}`).toBeGreaterThanOrEqual(l === 'de' ? 510 : 500);
        expect(n, `${l} ${k}`).toBeLessThanOrEqual(600);
        const faqs = getBrandsDictionary(l).pages[k]!.faqs.length;
        expect(faqs, `${l} ${k}`).toBeGreaterThanOrEqual(5);
        expect(faqs, `${l} ${k}`).toBeLessThanOrEqual(6);
      }
    }
  });

  test('every translated dictionary has the same shape and model names as English', () => {
    for (const l of TRANSLATED) {
      const d = getBrandsDictionary(l);
      expect(d).not.toBe(dict);
      expect(Object.keys(d).sort(), l).toEqual(Object.keys(dict).sort());
      expect(Object.keys(d.pages).sort(), l).toEqual(Object.keys(dict.pages).sort());
      for (const m of MODELS) expect(d.modelNames[m.id], `${l} ${m.id}`).toBeTruthy();
    }
  });

  test('worked example values come from the engine', () => {
    const v = brandValues('philips');
    expect(Number(v.EX_MODEL_F)).toBeLessThanOrEqual(390);
    // The °C example (es/pt/fr/de) is the same recipe entered in °C and run through the engine in °C.
    for (const b of LIVE_BRANDS) {
      const bv = brandValues(b.key);
      const featured = MODELS.find((m) => m.id === b.featured)!;
      const input = { ovenTemp: Number(bv.EX_OVEN_C), unit: 'C' as const, ovenMinutes: b.example.ovenMinutes, food: b.example.food, style: modelStyle(featured) };
      const gen = computeAirFryerSetting(input);
      const mod = computeAirFryerSetting({ ...input, maxF: featured.maxF });
      expect(bv.EX_GEN_C, b.key).toBe(String(gen.outC));
      expect(bv.EX_GEN_MIN_C, b.key).toBe(String(gen.outMinutes));
      expect(bv.EX_MODEL_C, b.key).toBe(String(mod.outC));
      expect(bv.EX_MODEL_MIN_C, b.key).toBe(String(mod.outMinutes));
      expect(bv.EX_MODEL_CHECK_C, b.key).toBe(String(mod.checkAtMinutes));
    }
    expect(brandValues('instant').INT_C).toBe('74');
    expect(brandValues('philips').EU_MAX_HI_C).toBe('200');
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

test.describe('/model-max-temp copy (5 locales)', () => {
  const prose = (l: LocaleCode) => {
    const mt = getBrandsDictionary(l).maxTemp;
    return [mt.intro, ...mt.sections.flatMap((x) => [x.heading, ...x.paragraphs]), ...mt.faqs.flatMap((f) => [f.q, f.a])].map((t) => fillPlaceholders(t, modelMaxTempValues())).join(' ');
  };
  test('fills, no typed numbers, °F only straight after its °C value, 5–6 FAQs', () => {
    for (const l of LOCALES.map((x) => x.code)) {
      const mt = getBrandsDictionary(l).maxTemp;
      expect(() => prose(l), l).not.toThrow();
      const raw = [mt.metaTitle, mt.metaDescription, mt.heading, mt.intro, ...mt.sections.flatMap((x) => [x.heading, ...x.paragraphs]), ...mt.faqs.flatMap((f) => [f.q, f.a]), mt.cardDesc, mt.cardSpecTemplate, mt.showing];
      for (const t of raw) expect(t.replace(/\{[A-Z0-9_]+\}/g, ''), l).not.toMatch(/\d/);
      expect(mt.faqs.length, l).toBeGreaterThanOrEqual(5);
      expect(mt.faqs.length, l).toBeLessThanOrEqual(6);
      if (l !== DEFAULT_LOCALE) {
        const all = raw.join(' ');
        expect((all.match(/°C (\(|\/ )\{[A-Z_]+\}°F/g) ?? []).length, l).toBe((all.match(/\}°F/g) ?? []).length);
      }
    }
  });
  test('not a template: 4-gram Jaccard ≤ 0.15 against English and between locales', () => {
    const codes = LOCALES.map((x) => x.code);
    for (const a of codes) for (const b of codes) if (a < b) expect(jaccard(shingles(prose(a)), shingles(prose(b))), `${a} vs ${b}`).toBeLessThanOrEqual(0.15);
  });
});

test.describe('/model-max-temp', () => {
  test('every model is a row, each with its source link and read date', async ({ page }) => {
    await page.goto(MODEL_MAX_TEMP_PATH);
    await expect(page.locator('tbody tr')).toHaveCount(MODELS.length);
    for (const m of MODELS) await expect(page.locator(`a[href="${m.source}"]`).first(), m.id).toBeAttached();
  });

  test('a maximum read from a default setting is marked in its row, and only there', async ({ page }) => {
    await page.goto(MODEL_MAX_TEMP_PATH);
    const marked = MODELS.filter((m) => m.maxIsDefault).map((m) => m.id);
    expect(marked).toEqual(['ninja-doublestack-sl401']);
    await expect(page.locator('tbody tr', { hasText: dict.maxDefaultNote })).toHaveCount(marked.length);
    await expect(page.locator(`tr[data-model="${marked[0]}"]`)).toContainText(dict.maxDefaultNote);
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
  for (const path of [...LOCALES.flatMap((l) => BRAND_PATHS.map((p) => localizedPath(l.code, p))), MODEL_MAX_TEMP_PATH]) {
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

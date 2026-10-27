import { test, expect, type Page } from '@playwright/test';
import {
  computeAirFryerSetting,
  computeConvectionSetting,
  computeOvenSetting,
  convertTempUnit,
  type FoodKey,
} from '../../src/lib/converter';
import { PRESETS, type FoodPreset, type PresetSlug } from '../../src/data/presets';
import {
  PRESETS_INDEX_PATH,
  PRESET_CATEGORY_ORDER,
  presetPath,
  presetValues,
  relatedPresets,
} from '../../src/lib/presets';
import { TEMP_LANDINGS, fillPlaceholders, tempLandingSlug } from '../../src/lib/temp-landings';
import { LIVE_PAGES, TRANSLATED_PAGES } from '../../src/site.config';
import { getDictionary } from '../../src/i18n/dictionaries';
import { LOCALES, DEFAULT_LOCALE, type LocaleCode } from '../../src/i18n/locales';
import { localizedPath, localizedUrl } from '../../src/i18n/utils';

const ALL: readonly FoodPreset[] = PRESETS;
const PROTEINS = ['poultry', 'meat', 'fish'];
const en = getDictionary('en');

async function collectPageErrors(page: Page): Promise<Error[]> {
  const pageErrors: Error[] = [];
  page.on('pageerror', (err) => pageErrors.push(err));
  return pageErrors;
}

/** Straight from the engine, independent of src/lib/presets.ts, so a bug there can't hide behind itself. */
const food = (p: FoodPreset) => (p.engine as { food: FoodKey }).food;
const ovenOf = (p: FoodPreset, tempF = p.tempF, minutes = p.minutes) =>
  computeOvenSetting({ airFryerTemp: tempF, unit: 'F', airFryerMinutes: minutes, food: food(p), style: 'basket' });
const fanOf = (p: FoodPreset) =>
  computeConvectionSetting({ airFryerTemp: p.tempF, unit: 'F', airFryerMinutes: p.minutes, food: food(p), style: 'basket' });
const label = (code: LocaleCode, p: FoodPreset) => getDictionary(code).presets.pages[p.slug as PresetSlug].label;

function expectedAnswer(code: LocaleCode, p: FoodPreset): string {
  const d = getDictionary(code).presets;
  const base = d.answerTemplate
    .replace('{LABEL}', label(code, p))
    .replace('{AF_F}', String(p.tempF))
    .replace('{AF_C}', String(convertTempUnit(p.tempF, 'F')))
    .replace('{MIN}', String(p.minutes));
  if (p.flipAt !== undefined) return base + d.answerFlipSuffix.replace('{FLIP}', String(p.flipAt));
  if (p.shakes !== undefined) return base + d.answerShakeSuffix.replace('{SHAKES}', String(p.shakes));
  return base;
}

function expectedSpec(code: LocaleCode, p: FoodPreset): string {
  const d = getDictionary(code).presets;
  const base = d.specTemplate.replace('{AF_F}', String(p.tempF)).replace('{MIN}', String(p.minutes));
  if (p.flipAt !== undefined) return base + d.specFlipSuffix.replace('{FLIP}', String(p.flipAt));
  if (p.shakes !== undefined) return base + d.specShakeSuffix.replace('{SHAKES}', String(p.shakes));
  return base;
}

/** Every string a preset page fills from its own copy. */
function copyStrings(code: LocaleCode, p: FoodPreset): string[] {
  const c = getDictionary(code).presets.pages[p.slug as PresetSlug];
  return [
    c.metaTitle, c.metaDescription, c.heading, c.subDesc, c.cardDesc, c.failureBody, c.workedExampleTemplate,
    c.donenessBody, c.prepBody, ...c.faqs.flatMap((f) => [f.q, f.a]),
  ];
}

/** The page's own prose (not the shared templates) — what the similarity check compares. */
function pageCopy(code: LocaleCode, p: FoodPreset): string {
  const values = presetValues(p, code);
  const c = getDictionary(code).presets.pages[p.slug as PresetSlug];
  return [c.subDesc, c.failureBody, c.workedExampleTemplate, c.donenessBody, c.prepBody, ...c.faqs.flatMap((f) => [f.q, f.a])]
    .map((s) => fillPlaceholders(s, values))
    .join(' ');
}

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

/** Landing page whose oven temperature is closest to the preset's oven equivalent. */
const nearestLanding = (p: FoodPreset) =>
  [...TEMP_LANDINGS].sort((a, b) => Math.abs(a.tempF - ovenOf(p).outF!) - Math.abs(b.tempF - ovenOf(p).outF!))[0];

test.describe('food presets: data and copy', () => {
  test('every protein has an internal temperature (or is judged by crispness); the rest may omit it', () => {
    for (const p of ALL) {
      if (PROTEINS.includes(p.category)) expect(p.internalF !== undefined || p.doneBy === 'crisp', p.slug).toBe(true);
    }
    expect(ALL.filter((p) => p.internalF !== undefined).length).toBeGreaterThan(0);
  });

  test('every preset has a medium/standard size row equal to its own setting', () => {
    for (const p of ALL) {
      const medium = p.sizes.find((s) => s.id === 'medium');
      expect(medium?.minutes, p.slug).toBe(p.minutes);
    }
  });

  test('copy in every locale fills with no unknown {KEY}, and an unknown key throws', () => {
    for (const l of LOCALES) {
      for (const p of ALL) {
        const values = { ...presetValues(p, l.code), LABEL: label(l.code, p) };
        for (const s of copyStrings(l.code, p)) expect(() => fillPlaceholders(s, values), `${l.code} ${p.slug}`).not.toThrow();
        const c = getDictionary(l.code).presets.pages[p.slug as PresetSlug];
        for (const s of p.sizes) expect(c.sizeLabels[s.id], `${l.code} ${p.slug} ${s.id}`).toBeTruthy();
        expect(c.faqs, `${l.code} ${p.slug}`).toHaveLength(5);
      }
    }
    expect(() => fillPlaceholders('{NOT_A_KEY}', presetValues(ALL[0]))).toThrow(/NOT_A_KEY/);
  });

  test('no engine number is typed into the copy: every °F in the prose comes from a placeholder or is a doneness range', () => {
    // Stripping placeholders leaves only fixed food-science figures (175–190°F wings, 145°F USDA, etc.), never the setting.
    for (const p of ALL) {
      const prose = copyStrings('en', p).join(' ').replace(/\{[A-Z_]+\}/g, '');
      for (const n of [p.tempF, ovenOf(p).outF!]) expect(prose, `${p.slug} ${n}`).not.toContain(`${n}°F`);
    }
  });

  test('each preset’s copy is its own, not a template with the food swapped (4-gram Jaccard < 0.15)', () => {
    let maxSimilarity = 0;
    for (const l of LOCALES) {
      const sets = ALL.map((p) => shingles(pageCopy(l.code, p)));
      for (let i = 0; i < sets.length; i++) {
        for (let j = i + 1; j < sets.length; j++) {
          const sim = jaccard(sets[i], sets[j]);
          maxSimilarity = Math.max(maxSimilarity, sim);
          expect(sim, `${l.code}: ${ALL[i].slug} vs ${ALL[j].slug}`).toBeLessThan(0.15);
        }
      }
    }
    expect(maxSimilarity).toBeGreaterThan(0);
  });

  test('every preset path and /presets are in LIVE_PAGES and TRANSLATED_PAGES', () => {
    const translated = TRANSLATED_PAGES.map((p) => p.slug);
    for (const slug of [PRESETS_INDEX_PATH, ...ALL.map((p) => presetPath(p.slug))]) {
      expect(LIVE_PAGES.has(slug), slug).toBe(true);
      expect(translated, slug).toContain(slug);
    }
  });

  test('sitemap lists every locale of every preset and the index', async ({ request }) => {
    const xml = await (await request.get('/sitemap.xml')).text();
    for (const slug of [PRESETS_INDEX_PATH, ...ALL.map((p) => presetPath(p.slug))]) {
      for (const l of LOCALES) expect(xml).toContain(`<loc>${localizedUrl(l.code, slug)}</loc>`);
    }
  });
});

test.describe('food preset pages', () => {
  for (const p of ALL) {
    const slug = presetPath(p.slug);
    const copy = en.presets.pages[p.slug as PresetSlug];
    const values = { ...presetValues(p), LABEL: copy.label };

    test(`${slug} renders with zero page errors, self canonical and hreflang`, async ({ page }) => {
      const pageErrors = await collectPageErrors(page);
      const response = await page.goto(slug);
      expect(response?.status()).toBe(200);
      await expect(page.locator('.tool-header h1')).toHaveText(fillPlaceholders(copy.heading, values));
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', localizedUrl('en', slug));
      for (const alt of LOCALES) {
        await expect(page.locator(`link[rel="alternate"][hreflang="${alt.code}"]`)).toHaveAttribute('href', localizedUrl(alt.code, slug));
      }
      expect(await page.locator('body').innerText()).not.toMatch(/\{[A-Z_]+\}/);
      expect(await page.title()).not.toMatch(/\{[A-Z_]+\}/);
      expect(pageErrors).toEqual([]);
    });

    test(`${slug} direct answer, internal temperature and oven equivalents match the engine`, async ({ page }) => {
      await page.goto(slug);
      await expect(page.locator('#pr-answer')).toHaveText(expectedAnswer('en', p));
      const internal = page.locator('#pr-internal');
      if (p.internalF !== undefined) {
        await expect(internal).toBeVisible();
        await expect(internal).toContainText(`${p.internalF}°F`);
      } else if (p.doneBy === 'crisp') {
        await expect(internal).toHaveText(en.presets.internalCrisp);
      } else {
        await expect(internal).toHaveCount(0);
      }
      const oven = ovenOf(p);
      await expect(page.locator('#pr-oven-conventional')).toContainText(`${oven.outF}°F (${oven.outC}°C`);
      await expect(page.locator('#pr-oven-conventional')).toContainText(`${oven.outMinutes} min`);
      if (oven.gasMark) await expect(page.locator('#pr-oven-conventional')).toContainText(`gas mark ${oven.gasMark}`);
      const fan = fanOf(p);
      await expect(page.locator('#pr-oven-fan')).toContainText(`${fan.outF}°F (${fan.outC}°C) for ${fan.outMinutes} min`);
    });

    test(`${slug} widget is pre-filled with this food's oven equivalent, round-trips within 25°F and stays live`, async ({ page }) => {
      await page.goto(slug);
      const oven = ovenOf(p);
      await expect(page.locator('#afk-temp')).toHaveValue(String(oven.outF));
      await expect(page.locator('#afk-time')).toHaveValue(String(oven.outMinutes));
      await expect(page.locator('#afk-food')).toHaveValue(food(p));
      const back = computeAirFryerSetting({ ovenTemp: oven.outF!, unit: 'F', ovenMinutes: oven.outMinutes!, food: food(p), style: 'basket' });
      await expect(page.locator('#afk-out-main')).toHaveText(`${back.outF}°F`);
      await expect(page.locator('#afk-out-time')).toHaveText(String(back.outMinutes));
      expect(Math.abs(back.outF! - p.tempF), `${p.slug} round trip`).toBeLessThanOrEqual(25);

      // Editable and live: a different temperature recomputes without a button.
      await page.fill('#afk-temp', '350');
      const edited = computeAirFryerSetting({ ovenTemp: 350, unit: 'F', ovenMinutes: oven.outMinutes!, food: food(p), style: 'basket' });
      await expect(page.locator('#afk-out-main')).toHaveText(`${edited.outF}°F`);
    });

    test(`${slug} sizing table comes from the engine`, async ({ page }) => {
      await page.goto(slug);
      await expect(page.locator('#pr-sizes tbody tr')).toHaveCount(p.sizes.length);
      for (const s of p.sizes) {
        const tempF = s.tempF ?? p.tempF;
        const row = page.locator(`#pr-sizes tr[data-size="${s.id}"]`);
        await expect(row.locator('.food-cell')).toHaveText(copy.sizeLabels[s.id]!);
        await expect(row.locator('td[data-style="air-fryer"]')).toHaveText(`${tempF}°F / ${convertTempUnit(tempF, 'F')}°C · ${s.minutes} min`);
        const o = ovenOf(p, tempF, s.minutes);
        await expect(row.locator('td[data-style="oven"]')).toHaveText(`${o.outF}°F / ${o.outC}°C · ${o.outMinutes} min`);
      }
    });

    test(`${slug} cross-links the flagship, /presets, /chart, its nearest temperature page and 3 related presets`, async ({ page }) => {
      await page.goto(slug);
      for (const target of ['/oven-to-air-fryer', PRESETS_INDEX_PATH, '/chart']) {
        await expect(page.locator(`.related-link a[href="${target}"]`)).toHaveCount(1);
      }
      const landing = nearestLanding(p);
      await expect(page.locator(`.landing-link a[href="${tempLandingSlug(landing.tempF)}"]`)).toHaveCount(LIVE_PAGES.has(tempLandingSlug(landing.tempF)) ? 1 : 0);

      const related = page.locator('.related-preset');
      await expect(related).toHaveCount(3);
      const expected = relatedPresets(p, 3);
      const sameCategory = ALL.filter((o) => o.slug !== p.slug && o.category === p.category).length;
      for (const [i, r] of expected.entries()) {
        await expect(related.nth(i)).toHaveAttribute('href', presetPath(r.slug));
        await expect(related.nth(i).locator('.rp-spec')).toHaveText(expectedSpec('en', r));
        if (i < sameCategory) expect(r.category).toBe(p.category); // same category comes first
      }
      await expect(page.locator(`.related-preset[href="${slug}"]`)).toHaveCount(0);
    });

    test(`${slug} emits WebApplication + FAQPage JSON-LD with every FAQ filled`, async ({ page }) => {
      await page.goto(slug);
      const raw = await page.locator('script[type="application/ld+json"]').first().textContent();
      expect(raw).not.toMatch(/\{[A-Z_]+\}/);
      const graph = JSON.parse(raw!)['@graph'] as { '@type': string; url?: string; mainEntity?: { name: string }[] }[];
      expect(graph.map((n) => n['@type'])).toEqual(['WebApplication', 'FAQPage']);
      expect(graph[0].url).toBe(localizedUrl('en', slug));
      expect(graph[1].mainEntity).toHaveLength(5);
    });
  }
});

test.describe('food presets: index, homepage and locales', () => {
  for (const { code } of LOCALES) {
    test(`/presets (${code}) lists every preset once, grouped by category in order`, async ({ page }) => {
      const pageErrors = await collectPageErrors(page);
      const dict = getDictionary(code).presetsIndex;
      const response = await page.goto(localizedPath(code, PRESETS_INDEX_PATH));
      expect(response?.status()).toBe(200);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', localizedUrl(code, PRESETS_INDEX_PATH));
      const expectedGroups = PRESET_CATEGORY_ORDER.filter((c) => ALL.some((p) => p.category === c));
      const groups = page.locator('section.group');
      await expect(groups).toHaveCount(expectedGroups.length);
      for (const [i, category] of expectedGroups.entries()) {
        const group = groups.nth(i);
        await expect(group).toHaveAttribute('data-category', category);
        await expect(group.locator('h2')).toHaveText(dict.categories[category]);
        const inCategory = ALL.filter((p) => p.category === category);
        await expect(group.locator('.card')).toHaveCount(inCategory.length);
        for (const [j, p] of inCategory.entries()) {
          const card = group.locator('.card').nth(j);
          await expect(card).toHaveAttribute('href', localizedPath(code, presetPath(p.slug)));
          await expect(card.locator('.card-title')).toHaveText(label(code, p));
          await expect(card.locator('.card-spec')).toHaveText(expectedSpec(code, p));
        }
      }
      await expect(page.locator('main .card')).toHaveCount(ALL.length);
      // Empty categories (reheat, baked until batch 3) render no heading anywhere on the page.
      for (const g of await groups.all()) expect(await g.locator('.card').count()).toBeGreaterThan(0);
      const headings = await page.locator('main h2').allTextContents();
      for (const empty of PRESET_CATEGORY_ORDER.filter((c) => !expectedGroups.includes(c))) {
        expect(headings).not.toContain(dict.categories[empty]);
      }
      const ld = JSON.parse((await page.locator('script[type="application/ld+json"]').first().textContent())!);
      expect(ld.mainEntity.itemListElement).toHaveLength(ALL.length);
      expect(pageErrors).toEqual([]);
    });
  }

  for (const code of [DEFAULT_LOCALE, 'es'] as const) {
    test(`homepage preset cards (${code}) come from PRESETS and obey the card fallback rule`, async ({ page }) => {
      const home = getDictionary(code).home;
      await page.goto(localizedPath(code, '/'));
      const cards = page.locator('#presets .card-grid > .card:not(.outline)');
      await expect(cards).toHaveCount(4);
      for (const [i, p] of ALL.slice(0, 4).entries()) {
        const card = cards.nth(i);
        const path = presetPath(p.slug);
        const expected = LIVE_PAGES.has(path) ? localizedPath(code, path) : `${localizedPath(code, '/oven-to-air-fryer')}?food=${food(p)}`;
        await expect(card).toHaveAttribute('href', expected);
        await expect(card.locator('.card-title')).toHaveText(label(code, p));
        await expect(card.locator('.card-spec')).toHaveText(expectedSpec(code, p));
        await expect(card).not.toContainText(home.comingSoon);
      }
      await expect(page.locator('#presets .card.outline')).toHaveAttribute('href', localizedPath(code, PRESETS_INDEX_PATH));
      await expect(page.locator('#presets .card.outline')).not.toContainText(/\d/); // no hard-coded preset count
    });
  }

  test('homepage preset dropdown lists every preset and Go opens the chosen one', async ({ page }) => {
    await page.goto('/');
    const select = page.locator('#preset-teaser select');
    await expect(select.locator('option')).toHaveCount(ALL.length);
    const target = ALL[3];
    await select.selectOption(presetPath(target.slug));
    await page.locator('#preset-teaser button[type="submit"]').click();
    await expect(page).toHaveURL(new RegExp(`${presetPath(target.slug)}/?$`));
    await expect(page.locator('#pr-answer')).toHaveText(expectedAnswer('en', target));
  });

  for (const l of LOCALES.filter((x) => x.code !== DEFAULT_LOCALE)) {
    test(`/${l.code} preset pages render translated with canonical, hreflang, engine answers and pre-filled widget`, async ({ page }) => {
      test.setTimeout(180_000); // ten pages per test
      const pageErrors = await collectPageErrors(page);
      const dict = getDictionary(l.code).presets;
      for (const p of ALL) {
        const slug = presetPath(p.slug);
        const response = await page.goto(localizedPath(l.code, slug));
        expect(response?.status()).toBe(200);
        const values = { ...presetValues(p, l.code), LABEL: label(l.code, p) };
        await expect(page.locator('.tool-header h1')).toHaveText(fillPlaceholders(dict.pages[p.slug as PresetSlug].heading, values));
        await expect(page.locator('#pr-answer')).toHaveText(expectedAnswer(l.code, p));
        await expect(page.locator('#afk-temp')).toHaveValue(String(ovenOf(p).outF));
        await expect(page.locator('#afk-food')).toHaveValue(food(p));
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', localizedUrl(l.code, slug));
        await expect(page.locator(`link[rel="alternate"][hreflang="${DEFAULT_LOCALE}"]`)).toHaveAttribute('href', localizedUrl(DEFAULT_LOCALE, slug));
        await expect(page.locator(`.related-link a[href="${localizedPath(l.code, PRESETS_INDEX_PATH)}"]`)).toHaveCount(1);
        const text = await page.locator('body').innerText();
        expect(text).not.toMatch(/\{[A-Z_]+\}/);
        if (l.code === 'fr') expect(text, p.slug).not.toMatch(/gas mark|nivel de gas/i);
      }
      expect(pageErrors).toEqual([]);
    });
  }

  test('fr oven equivalent uses the thermostat, not the gas mark', async ({ page }) => {
    const p = ALL[0];
    await page.goto(localizedPath('fr', presetPath(p.slug)));
    const outF = ovenOf(p).outF!;
    const th = Math.min(10, Math.max(1, Math.round(((outF - 32) * 5) / 9 / 30)));
    await expect(page.locator('#pr-oven-conventional')).toContainText(`Th. ${th}`);
  });

  for (const width of [375, 412]) {
    test(`preset pages and /presets have no horizontal scroll and 44px+ tap targets at ${width}px`, async ({ page }) => {
      test.setTimeout(180_000); // eleven pages per test
      await page.setViewportSize({ width, height: 860 });
      for (const path of [PRESETS_INDEX_PATH, ...ALL.map((p) => presetPath(p.slug))]) {
        await page.goto(path);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(overflow, `${path} at ${width}px`).toBeLessThanOrEqual(0);
        for (const box of await page
          .locator('.widget-card .seg-btn, .widget-card input, .widget-card select, .related-link a, .related-preset, .faq-toggle, main .card')
          .all()) {
          expect((await box.boundingBox())!.height, path).toBeGreaterThanOrEqual(44);
        }
      }
    });
  }
});

import { test, expect, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import {
  CONVECTION_FOODS,
  FOODS,
  FROZEN_FOODS,
  computeAirFryerSetting,
  computeAirFryerSettingFromFrozen,
  computeConvectionSetting,
  computeOvenSetting,
  computePackSetting,
  convertTempUnit,
  gasMarkFor,
  type FoodKey,
  type FrozenFoodKey,
} from '../../src/lib/converter';
import { PRESETS, type FoodPreset, type PresetSlug } from '../../src/data/presets';
import {
  PRESETS_INDEX_PATH,
  PRESET_CATEGORY_ORDER,
  presetFan,
  presetInternalF,
  presetOven,
  presetPath,
  presetRaw,
  presetRoundTrip,
  presetTurns,
  presetValues,
  presetWidget,
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
const isFrozen = (p: FoodPreset) => p.engine.kind === 'frozen';
const frozenFood = (p: FoodPreset) => p.engine.food as FrozenFoodKey;
const isReheat = (p: FoodPreset) => p.engine.kind === 'reheat';
const reheatOf = (p: FoodPreset) => p.engine as { food: FoodKey; ovenF: number; ovenMinutes: number };
/**
 * Reheat presets: the stored oven reheat, scaled to the row (same °F offset, minutes in proportion);
 * the fan oven shifts it by the FOODS vs CONVECTION_FOODS gap, snapped to 25°F, and scales the time by their ratio.
 */
function reheatOvenOf(p: FoodPreset, tempF: number, minutes: number, fan: boolean) {
  const { food: k, ovenF, ovenMinutes } = reheatOf(p);
  let outF = ovenF + (tempF - p.tempF);
  let outMinutes = Math.round((ovenMinutes * minutes) / p.minutes);
  if (fan) {
    outF = Math.round((outF - (FOODS[k].dT - CONVECTION_FOODS[k].dT)) / 25) * 25;
    outMinutes = Math.round((outMinutes * FOODS[k].f) / CONVECTION_FOODS[k].f);
  }
  return { outF, outC: convertTempUnit(outF, 'F'), outMinutes, gasMark: gasMarkFor(outF) };
}
// Frozen presets: the "oven" equivalent is the pack instruction (conventional / fan pack).
const ovenOf = (p: FoodPreset, tempF = p.tempF, minutes = p.minutes) =>
  isReheat(p)
    ? reheatOvenOf(p, tempF, minutes, false)
    : isFrozen(p)
      ? computePackSetting({ tempF, minutes, food: frozenFood(p), pack: 'conventional', style: 'basket' })
      : computeOvenSetting({ airFryerTemp: tempF, unit: 'F', airFryerMinutes: minutes, food: food(p), style: 'basket' });
const fanOf = (p: FoodPreset) =>
  isReheat(p)
    ? reheatOvenOf(p, p.tempF, p.minutes, true)
    : isFrozen(p)
      ? computePackSetting({ tempF: p.tempF, minutes: p.minutes, food: frozenFood(p), pack: 'fan', style: 'basket' })
      : computeConvectionSetting({ airFryerTemp: p.tempF, unit: 'F', airFryerMinutes: p.minutes, food: food(p), style: 'basket' });
/** Forward conversion of an oven (or pack) setting, as the pre-filled widget runs it. */
const forwardOf = (p: FoodPreset, ovenTemp: number, ovenMinutes: number) =>
  isFrozen(p)
    ? computeAirFryerSettingFromFrozen({
        ovenTemp, unit: 'F', ovenMinutes, food: frozenFood(p), pack: 'conventional', style: 'basket',
        turnOverride: p.shakes !== undefined ? { turn: 'shake', turns: p.shakes } : undefined,
      })
    : computeAirFryerSetting({ ovenTemp, unit: 'F', ovenMinutes, food: food(p), style: 'basket' });
/** Flip / shakes: the preset's own, else (frozen) FROZEN_FOODS', a flip at the halfway mark. */
function turnsOf(p: FoodPreset): { flipAt?: number; shakes?: number } {
  if (p.flipAt !== undefined || p.shakes !== undefined) return { flipAt: p.flipAt, shakes: p.shakes };
  if (!isFrozen(p)) return {};
  const f = FROZEN_FOODS[frozenFood(p)];
  if (f.turns === 0) return {};
  return f.turn === 'flip' ? { flipAt: Math.round(p.minutes / 2) } : { shakes: f.turns };
}
const internalOf = (p: FoodPreset) => p.internalF ?? (isFrozen(p) ? (FROZEN_FOODS[frozenFood(p)].internalF ?? undefined) : undefined);
const toolHrefOf = (p: FoodPreset) => (isFrozen(p) ? `/frozen?food=${frozenFood(p)}` : '/oven-to-air-fryer');
const label = (code: LocaleCode, p: FoodPreset) => getDictionary(code).presets.pages[p.slug as PresetSlug].label;

function expectedAnswer(code: LocaleCode, p: FoodPreset): string {
  const d = getDictionary(code).presets;
  const base = d.answerTemplate
    .replace('{LABEL}', label(code, p))
    .replace('{AF_F}', String(p.tempF))
    .replace('{AF_C}', String(convertTempUnit(p.tempF, 'F')))
    .replace('{MIN}', String(p.minutes));
  const { flipAt, shakes } = turnsOf(p);
  if (flipAt !== undefined) return base + d.answerFlipSuffix.replace('{FLIP}', String(flipAt));
  if (shakes !== undefined) return base + d.answerShakeSuffix.replace('{SHAKES}', String(shakes));
  return base;
}

function expectedSpec(code: LocaleCode, p: FoodPreset): string {
  const d = getDictionary(code).presets;
  const base = d.specTemplate.replace('{AF_F}', String(p.tempF)).replace('{MIN}', String(p.minutes));
  const { flipAt, shakes } = turnsOf(p);
  if (flipAt !== undefined) return base + d.specFlipSuffix.replace('{FLIP}', String(flipAt));
  if (shakes !== undefined) return base + d.specShakeSuffix.replace('{SHAKES}', String(shakes));
  return base;
}

/** Every string a preset page fills from its own copy. */
function copyStrings(code: LocaleCode, p: FoodPreset): string[] {
  const c = getDictionary(code).presets.pages[p.slug as PresetSlug];
  return [
    c.metaTitle, c.metaDescription, c.heading, c.subDesc, c.cardDesc, c.failureBody, c.workedExampleTemplate,
    c.donenessBody, c.prepBody, ...c.faqs.flatMap((f) => [f.q, f.a]), ...(c.internalAltLine ? [c.internalAltLine] : []),
    ...(c.internalLine ? [c.internalLine] : []),
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

  test('ground meat is never given steak doneness: burgers target 160°F', () => {
    const burgers = ALL.find((p) => p.slug === 'burgers')!;
    const steak = ALL.find((p) => p.slug === 'steak')!;
    expect(burgers.engine).toEqual(steak.engine); // same engine food…
    expect(burgers.internalF).toBe(160); // …but its own doneness, from presets.ts
    expect(presetValues(burgers).INT_F).toBe('160');
  });

  test('internalAlt is display only: every locale has its line, and the engine, answer and JSON-LD description never use it', () => {
    const withAlt = ALL.filter((p) => p.internalAlt !== undefined);
    expect(withAlt.map((p) => p.slug).sort()).toEqual(['chicken-drumsticks', 'reheat-steak', 'sausages']);
    for (const l of LOCALES) {
      const d = getDictionary(l.code).presets;
      expect(d.answerTemplate + d.answerFlipSuffix + d.answerShakeSuffix).not.toMatch(/INT_ALT_/);
      for (const p of ALL) {
        const c = d.pages[p.slug as PresetSlug];
        expect(Boolean(c.internalAltLine), `${l.code} ${p.slug} internalAltLine`).toBe(p.internalAlt !== undefined);
        expect(c.metaDescription, `${l.code} ${p.slug} metaDescription`).not.toMatch(/INT_ALT_/);
      }
    }
    for (const file of ['src/lib/converter.ts', 'src/components/ConverterWidget.astro', 'src/pages/air-fryer/[food].astro']) {
      expect(readFileSync(file, 'utf8'), file).not.toContain('internalAlt');
    }
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
      const prose = copyStrings('en', p).join(' ').replace(/\{[A-Z][A-Z0-9_]*\}/g, '');
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

test.describe('food presets: reheat engine branch', () => {
  // Synthetic entries, one per FOODS key, so the branch is covered before any reheat preset ships.
  const reheatPreset = (k: FoodKey): FoodPreset => ({
    slug: `reheat-${k}`,
    category: 'reheat',
    engine: { kind: 'reheat', food: k, ovenF: 375, ovenMinutes: 12 },
    tempF: 360,
    minutes: 5,
    sizes: [
      { id: 'small', minutes: 4 },
      { id: 'medium', minutes: 5 },
      { id: 'large', minutes: 7, tempF: 350 },
    ],
  });
  const FOOD_KEYS = Object.keys(FOODS) as FoodKey[];

  test('why the branch exists: the oven engine misses typical reheats (15°F / 25% of minutes rule, 10.6 A1)', () => {
    // [FOODS key, oven reheat °F, oven min (range midpoint), typical air fryer reheat °F, min (midpoint)]
    const MEASURED: [FoodKey, number, number, number, number][] = [
      ['pizza', 375, 10, 350, 3.5],
      ['fries', 400, 9, 375, 4],
      ['thigh', 375, 17.5, 375, 7],
      ['wings', 375, 10, 375, 5],
      ['steak', 250, 25, 300, 4],
    ];
    const misses = MEASURED.filter(([k, ovenF, ovenMin, afF, afMin]) => {
      const r = computeAirFryerSetting({ ovenTemp: ovenF, unit: 'F', ovenMinutes: ovenMin, food: k, style: 'basket' });
      return Math.abs(r.outF! - afF) > 15 || Math.abs(r.outMinutes! - afMin) > afMin * 0.25;
    });
    expect(misses.length).toBeGreaterThan(0);
  });

  test('the equivalent is the stored oven reheat; fan and sizing rows derive from it', () => {
    for (const k of FOOD_KEYS) {
      const p = reheatPreset(k);
      expect(presetOven(p), k).toMatchObject({ outF: 375, outC: 190, outMinutes: 12 });
      expect(presetOven(p), k).toMatchObject(reheatOvenOf(p, 360, 5, false));
      expect(presetFan(p), k).toMatchObject(reheatOvenOf(p, 360, 5, true));
      expect(presetFan(p).outF! % 25, k).toBe(0);
      expect(presetFan(p).outF!, k).toBeLessThanOrEqual(375);
      const large = reheatOvenOf(p, 350, 7, false);
      expect(large, k).toMatchObject({ outF: 365, outC: 185, outMinutes: 17 });
    }
  });

  test('the widget is left in its default state, not pre-filled with the reheat values', () => {
    for (const k of FOOD_KEYS) expect(presetWidget(reheatPreset(k)), k).toEqual({ source: 'oven' });
  });

  test('basket round trip returns the reheat setting itself; oven-style gets the engine style shift', () => {
    for (const k of FOOD_KEYS) {
      const p = reheatPreset(k);
      const basket = presetRoundTrip(p);
      expect([basket.outF, basket.outMinutes], k).toEqual([360, 5]);
      const os = presetRoundTrip(p, 'oven');
      expect(os.outF, k).toBe(365);
      expect(os.outMinutes, k).toBe(Math.round((5 / FOODS[k].f) * (FOODS[k].f + 0.05)));
    }
  });

  test('every shipped reheat preset is sane: oven ≥ air fryer − 25°F, oven slower, both inside the ceilings', () => {
    for (const p of ALL.filter(isReheat)) {
      const { ovenF, ovenMinutes } = reheatOf(p);
      expect(ovenF, p.slug).toBeGreaterThanOrEqual(p.tempF - 25);
      expect(ovenMinutes, p.slug).toBeGreaterThan(p.minutes);
      expect(p.tempF, p.slug).toBeLessThanOrEqual(400);
      expect(ovenF, p.slug).toBeLessThanOrEqual(500);
      for (const s of p.sizes) {
        const row = ovenOf(p, s.tempF ?? p.tempF, s.minutes);
        expect(row.outMinutes!, `${p.slug} ${s.id}`).toBeGreaterThan(s.minutes);
      }
    }
  });

  test('reheat labels exist in every locale, keep the oven templates’ placeholders and introduce the widget', () => {
    for (const l of LOCALES) {
      const d = getDictionary(l.code).presets;
      for (const key of ['ovenTemplate', 'fanTemplate'] as const) {
        const ph = (t: string) => [...t.matchAll(/\{([A-Z_]+)\}/g)].map((m) => m[1]).sort();
        expect(ph(d.reheat[key]), `${l.code} ${key}`).toEqual(ph(d[key]));
      }
      expect(d.reheat.widgetHeading.length, l.code).toBeGreaterThan(0);
      expect(d.reheat.widgetNote.length, l.code).toBeGreaterThan(0);
    }
  });
});

test.describe('food presets: batch 3 (reheating, baking, corn, frozen vegetables)', () => {
  const bySlug = (slug: string) => ALL.find((p) => p.slug === slug)!;

  test('every fresh slug exists in PRESETS, never points to itself, and leads the related presets', () => {
    const withFresh = ALL.filter((p) => p.fresh !== undefined);
    expect(withFresh.map((p) => p.slug).sort()).toEqual(['reheat-fried-chicken', 'reheat-fries', 'reheat-pizza', 'reheat-steak', 'reheat-wings']);
    for (const p of withFresh) {
      expect(p.fresh, p.slug).not.toBe(p.slug);
      expect(ALL.some((x) => x.slug === p.fresh), `${p.slug} -> ${p.fresh}`).toBe(true);
      const related = relatedPresets(p, 3);
      expect(related[0].slug, p.slug).toBe(p.fresh);
      expect(related.filter((x) => x.slug === p.fresh), p.slug).toHaveLength(1);
      expect(related[1].category, p.slug).toBe('reheat');
    }
    expect(Object.fromEntries(withFresh.map((p) => [p.slug, p.fresh]))).toEqual({
      'reheat-pizza': 'frozen-pizza',
      'reheat-fries': 'homemade-fries',
      'reheat-fried-chicken': 'chicken-thighs',
      'reheat-wings': 'chicken-wings',
      'reheat-steak': 'steak',
    });
  });

  test('reheat meats target 165°F (USDA leftovers); pizza and fries are judged by crispness', () => {
    for (const slug of ['reheat-fried-chicken', 'reheat-wings', 'reheat-steak']) expect(bySlug(slug).internalF, slug).toBe(165);
    for (const slug of ['reheat-pizza', 'reheat-fries']) {
      expect(bySlug(slug).internalF, slug).toBeUndefined();
      expect(bySlug(slug).doneBy, slug).toBe('crisp');
    }
  });

  test('reheat-steak: 165°F in the answer data and JSON-LD description, the warm-through range as internalAlt, the time flagged as an estimate', () => {
    const steak = bySlug('reheat-steak');
    expect(steak.internalAlt).toEqual({ f: 110, toF: 120 });
    for (const { code } of LOCALES) {
      const c = getDictionary(code).presets.pages['reheat-steak'];
      expect(fillPlaceholders(c.metaDescription, { ...presetValues(steak, code), LABEL: c.label }), code).toContain('165°F');
      expect(c.internalAltLine, code).toContain('{FLIP}');
      expect(c.faqs.length, code).toBe(5);
    }
    const c = en.presets.pages['reheat-steak'];
    expect(c.faqs.some((f) => f.a.startsWith('Slice before reheating if you want it hot through without overcooking.'))).toBe(true);
    expect(c.failureBody).toMatch(/estimate/);
    expect(c.failureBody).toMatch(/thermometer at the flip/);
  });

  test('baked goods: cookies, muffins and brownies are judged by toothpick; garlic bread is baked; corn is veg', () => {
    for (const slug of ['cookies', 'muffins', 'brownies']) {
      expect(bySlug(slug).doneBy, slug).toBe('toothpick');
      expect(bySlug(slug).category, slug).toBe('baked');
    }
    expect(bySlug('garlic-bread').category).toBe('baked');
    expect(bySlug('corn-on-the-cob').category).toBe('veg');
    for (const { code } of LOCALES) expect(getDictionary(code).presets.internalToothpick.length, code).toBeGreaterThan(0);
  });

  test('cookies round-trip near the 325–330°F range from a 350°F oven', () => {
    expect(computeAirFryerSetting({ ovenTemp: 350, unit: 'F', ovenMinutes: 10, food: 'baked', style: 'basket' }).outF).toBeGreaterThanOrEqual(325);
    expect(computeAirFryerSetting({ ovenTemp: 350, unit: 'F', ovenMinutes: 10, food: 'baked', style: 'basket' }).outF).toBeLessThanOrEqual(330);
    const cookies = bySlug('cookies');
    const back = forwardOf(cookies, ovenOf(cookies).outF!, ovenOf(cookies).outMinutes!);
    expect(Math.abs(back.outF! - cookies.tempF)).toBeLessThanOrEqual(5);
  });

  test('fit and size copy: muffin tin, brownie pan, long cobs, fresh vs frozen garlic bread', () => {
    const p = en.presets.pages;
    expect(p.muffins.prepBody).toMatch(/12-cup tin will not fit a 5 qt basket/);
    expect(p.muffins.prepBody).toMatch(/silicone/i);
    expect(p.brownies.failureBody).toMatch(/8 to 8½ inches/);
    expect(p.brownies.failureBody).toMatch(/9×9-inch recipe has to be halved or baked in two rounds/);
    expect(p['corn-on-the-cob'].failureBody).toMatch(/Halve any cob longer than the basket/);
    expect(p['garlic-bread'].faqs.some((f) => /fresh or frozen/i.test(f.q))).toBe(true);
    expect(p.cookies.failureBody).toMatch(/parchment/);
  });

  test('lead failure modes differ across the overlap groups', () => {
    const lead = (slug: PresetSlug) => en.presets.pages[slug].failureHeading;
    for (const group of [
      ['reheat-wings', 'frozen-chicken-wings', 'chicken-wings'],
      ['reheat-fries', 'frozen-fries', 'homemade-fries'],
      ['garlic-bread', 'reheat-pizza'],
      ['frozen-vegetables', 'broccoli', 'frozen-fries'],
      ['reheat-fried-chicken', 'chicken-thighs'],
    ] as PresetSlug[][]) {
      expect(new Set(group.map(lead)).size, group.join(' / ')).toBe(group.length);
    }
  });
});

test.describe('food presets: frozen engine branch', () => {
  // Synthetic entries: one per FROZEN_FOODS key, so the branch is covered before any frozen preset ships.
  const frozenPreset = (food: FrozenFoodKey): FoodPreset => ({
    slug: `frozen-${food}`,
    category: 'frozen',
    engine: { kind: 'frozen', food },
    tempF: 380,
    minutes: 14,
    sizes: [{ id: 'medium', minutes: 14 }],
  });
  const FROZEN_KEYS = Object.keys(FROZEN_FOODS) as FrozenFoodKey[];

  test('the equivalent is the pack instruction, conventional and fan, from computePackSetting', () => {
    for (const food of FROZEN_KEYS) {
      const p = frozenPreset(food);
      expect(presetOven(p), food).toEqual(computePackSetting({ tempF: 380, minutes: 14, food, pack: 'conventional', style: 'basket' }));
      expect(presetFan(p), food).toEqual(computePackSetting({ tempF: 380, minutes: 14, food, pack: 'fan', style: 'basket' }));
      const pack = presetOven(p);
      expect(presetRoundTrip(p), food).toEqual(
        computeAirFryerSettingFromFrozen({ ovenTemp: pack.outF!, unit: 'F', ovenMinutes: pack.outMinutes!, food, pack: 'conventional', style: 'basket' }),
      );
      expect(presetWidget(p), food).toEqual({ source: 'frozen', initialFood: food, initialTemp: pack.outF, initialTime: pack.outMinutes });
    }
  });

  test('turns and internal temperature come from FROZEN_FOODS unless the preset overrides them', () => {
    for (const food of FROZEN_KEYS) {
      const p = frozenPreset(food);
      const profile = FROZEN_FOODS[food];
      const turns = presetTurns(p);
      if (profile.turns === 0) expect(turns, food).toEqual({});
      else if (profile.turn === 'shake') expect(turns, food).toEqual({ shakes: profile.turns });
      else expect(turns, food).toEqual({ flipAt: Math.round(14 / (profile.turns + 1)) });
      expect(presetInternalF(p), food).toBe(profile.internalF ?? undefined);
      expect(presetRaw(p), food).toBe(profile.raw && profile.internalF !== null);
      const v = presetValues(p);
      expect(v.INT_F, food).toBe(profile.internalF === null ? undefined : String(profile.internalF));
    }
    const override = { ...frozenPreset('nuggets'), flipAt: 6, internalF: 170 };
    expect(presetTurns(override)).toEqual({ flipAt: 6, shakes: undefined });
    expect(presetInternalF(override)).toBe(170);
  });

  test('oven presets are unchanged: same oven/fan equivalents and turns as before the branch', () => {
    for (const p of ALL.filter((x) => x.engine.kind === 'oven')) {
      const food = p.engine.food as FoodKey;
      const input = { airFryerTemp: p.tempF, unit: 'F' as const, airFryerMinutes: p.minutes, food, style: 'basket' as const };
      expect(presetOven(p), p.slug).toEqual(computeOvenSetting(input));
      expect(presetFan(p), p.slug).toEqual(computeConvectionSetting(input));
      expect(presetTurns(p), p.slug).toEqual({ flipAt: p.flipAt, shakes: p.shakes });
      expect(presetInternalF(p), p.slug).toBe(p.internalF);
      expect(presetRaw(p), p.slug).toBe(false);
      expect(presetWidget(p).source, p.slug).toBe('oven');
    }
  });

  test('the frozen presets: eleven entries, turn overrides, heated-through nuggets, pre-cooked wings, pizza sizes', () => {
    const frozen = ALL.filter(isFrozen);
    expect(frozen.map((p) => p.slug)).toEqual([
      'frozen-fries', 'frozen-chicken-wings', 'frozen-chicken-breast', 'frozen-chicken-nuggets', 'frozen-tater-tots',
      'frozen-pizza', 'frozen-fish-sticks', 'frozen-chicken-tenders', 'frozen-hash-browns', 'frozen-egg-rolls',
      'frozen-vegetables',
    ]);
    for (const p of frozen) expect(p.category, p.slug).toBe('frozen');
    const bySlug = (slug: string) => frozen.find((p) => p.slug === slug)!;

    // Tots run on the hash-brown profile (a flip) but override both the turn type and the count.
    const tots = bySlug('frozen-tater-tots');
    expect(FROZEN_FOODS[frozenFood(tots)].turn).toBe('flip');
    expect(presetTurns(tots)).toEqual({ flipAt: undefined, shakes: 2 });
    expect(presetWidget(tots).initialTurn).toEqual({ turn: 'shake', turns: 2 });
    const rt = presetRoundTrip(tots) as ReturnType<typeof computeAirFryerSettingFromFrozen>;
    expect([rt.turn, rt.turns]).toEqual(['shake', 2]);
    // Presets that inherit their turns pass no override.
    for (const p of frozen.filter((x) => x.flipAt === undefined && x.shakes === undefined)) expect(presetWidget(p).initialTurn, p.slug).toBeUndefined();

    // Nuggets: 165°F is a heated-through check, worded as such in every locale, with no raw warning.
    const nuggets = bySlug('frozen-chicken-nuggets');
    expect(presetRaw(nuggets)).toBe(false);
    for (const { code } of LOCALES) expect(getDictionary(code).presets.pages['frozen-chicken-nuggets'].internalLine, code).toBeTruthy();

    // Wings: the pre-cooked setting is data, shorter than raw, and only wings carry it.
    const wings = bySlug('frozen-chicken-wings');
    expect(wings.precooked!.minutes).toBeLessThan(wings.minutes);
    expect(presetValues(wings).PRE_MIN).toBe(String(wings.precooked!.minutes));
    expect(ALL.filter((p) => p.precooked !== undefined).map((p) => p.slug)).toEqual(['frozen-chicken-wings']);
    for (const { code } of LOCALES) {
      expect(getDictionary(code).presets.pages['frozen-chicken-wings'].faqs.some((f) => f.a.includes('{PRE_MIN}')), code).toBe(true);
    }

    // Pizza: mini / personal 7–8" / 10–12" oven-style or 8 qt+ only.
    const pizza = getDictionary('en').presets.pages['frozen-pizza'];
    expect(pizza.sizeLabels.medium).toContain('7–8"');
    expect(pizza.sizeLabels.large).toMatch(/10–12".*8 qt/);
    expect(pizza.prepBody).toMatch(/8 to 8½ inches/);
    expect(pizza.faqs.some((f) => /8 to 8½ inches/.test(f.a))).toBe(true);
  });

  test('frozen labels exist in every locale and keep the oven templates’ placeholders', () => {
    for (const { code } of LOCALES) {
      const d = getDictionary(code).presets;
      const keys = (t: string) => [...t.matchAll(/\{([A-Z_]+)\}/g)].map((m) => m[1]).sort();
      expect(keys(d.frozen.ovenTemplate), code).toEqual(keys(d.ovenTemplate));
      expect(keys(d.frozen.fanTemplate), code).toEqual(keys(d.fanTemplate));
      expect(d.frozen.ovenHeading, code).not.toBe(d.ovenHeading);
      expect(d.frozen.sizingHeaders.oven, code).not.toBe(d.sizingHeaders.oven);
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
      expect(await page.locator('body').innerText()).not.toMatch(/\{[A-Z][A-Z0-9_]*\}/);
      expect(await page.title()).not.toMatch(/\{[A-Z][A-Z0-9_]*\}/);
      expect(pageErrors).toEqual([]);
    });

    test(`${slug} direct answer, internal temperature and oven equivalents match the engine`, async ({ page }) => {
      await page.goto(slug);
      await expect(page.locator('#pr-answer')).toHaveText(expectedAnswer('en', p));
      const internal = page.locator('#pr-internal');
      if (internalOf(p) !== undefined) {
        await expect(internal).toBeVisible();
        await expect(internal).toContainText(`${internalOf(p)}°F`);
      } else if (p.doneBy === 'crisp') {
        await expect(internal).toHaveText(en.presets.internalCrisp);
        await expect(internal).not.toContainText('°F');
      } else if (p.doneBy === 'toothpick') {
        await expect(internal).toHaveText(en.presets.internalToothpick);
      } else {
        await expect(internal).toHaveCount(0);
      }
      const alt = page.locator('#pr-internal-alt');
      if (p.internalAlt !== undefined) {
        await expect(alt).toHaveText(fillPlaceholders(copy.internalAltLine!, values));
        await expect(alt).toContainText(`${p.internalAlt.f}`);
      } else {
        await expect(alt).toHaveCount(0);
      }
      if (p.slug === 'burgers') await expect(internal).not.toContainText('130°F');
      // Raw frozen products repeat /frozen's thermometer warning; nothing else shows it.
      const raw = page.locator('#pr-raw');
      if (isFrozen(p) && FROZEN_FOODS[frozenFood(p)].raw && internalOf(p) !== undefined) {
        const c = Math.round(((internalOf(p)! - 32) * 5) / 9);
        await expect(raw).toHaveText(en.frozenConverter.rawWarningTemplate.replace('{f}', String(internalOf(p))).replace('{c}', String(c)));
      } else {
        await expect(raw).toHaveCount(0);
      }
      const oven = ovenOf(p);
      await expect(page.locator('#pr-oven-conventional')).toContainText(`${oven.outF}°F (${oven.outC}°C`);
      await expect(page.locator('#pr-oven-conventional')).toContainText(`${oven.outMinutes} min`);
      if (oven.gasMark) await expect(page.locator('#pr-oven-conventional')).toContainText(`gas mark ${oven.gasMark}`);
      const fan = fanOf(p);
      await expect(page.locator('#pr-oven-fan')).toContainText(`${fan.outF}°F (${fan.outC}°C) for ${fan.outMinutes} min`);
    });

    if (p.slug === 'frozen-tater-tots' || p.slug === 'frozen-chicken-nuggets') {
      test(`${slug} widget and internal line follow the preset, not the frozen profile`, async ({ page }) => {
        await page.goto(slug);
        if (p.slug === 'frozen-tater-tots') await expect(page.locator('#afk-turns')).toContainText(en.frozenConverter.shake);
        if (p.slug === 'frozen-chicken-nuggets') {
          await expect(page.locator('#pr-internal')).toHaveText(fillPlaceholders(copy.internalLine!, values));
          await expect(page.locator('#pr-raw')).toHaveCount(0);
        }
      });
    }

    if (isReheat(p)) {
      test(`${slug} widget is not pre-filled with the reheat values: default state under the oven-recipe intro`, async ({ page }) => {
        await page.goto('/oven-to-air-fryer');
        const defaults = await Promise.all(['#afk-temp', '#afk-time', '#afk-food'].map((sel) => page.locator(sel).inputValue()));
        await page.goto(slug);
        await expect(page.locator('#pr-widget-intro h2')).toHaveText(en.presets.reheat.widgetHeading);
        await expect(page.locator('#pr-widget-intro p')).toHaveText(en.presets.reheat.widgetNote);
        for (const [i, sel] of ['#afk-temp', '#afk-time', '#afk-food'].entries()) {
          await expect(page.locator(sel)).toHaveValue(defaults[i]);
        }
        // Still live.
        await page.fill('#afk-temp', '350');
        await expect(page.locator('#afk-out-main')).not.toHaveText('');
      });
    } else
    test(`${slug} widget is pre-filled with this food's oven equivalent, round-trips within 25°F and stays live`, async ({ page }) => {
      await page.goto(slug);
      await expect(page.locator('#pr-widget-intro')).toHaveCount(0);
      const oven = ovenOf(p);
      await expect(page.locator('#afk-temp')).toHaveValue(String(oven.outF));
      await expect(page.locator('#afk-time')).toHaveValue(String(oven.outMinutes));
      await expect(page.locator('#afk-food')).toHaveValue(p.engine.food);
      const back = forwardOf(p, oven.outF!, oven.outMinutes!);
      await expect(page.locator('#afk-out-main')).toHaveText(`${back.outF}°F`);
      await expect(page.locator('#afk-out-time')).toHaveText(String(back.outMinutes));
      expect(Math.abs(back.outF! - p.tempF), `${p.slug} round trip`).toBeLessThanOrEqual(25);

      // Editable and live: a different temperature recomputes without a button.
      await page.fill('#afk-temp', '350');
      const edited = forwardOf(p, 350, oven.outMinutes!);
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
      for (const target of [toolHrefOf(p), PRESETS_INDEX_PATH, '/chart']) {
        await expect(page.locator(`.related-link a[href="${target}"]`)).toHaveCount(1);
      }
      const landing = nearestLanding(p);
      await expect(page.locator(`.landing-link a[href="${tempLandingSlug(landing.tempF)}"]`)).toHaveCount(LIVE_PAGES.has(tempLandingSlug(landing.tempF)) ? 1 : 0);

      const related = page.locator('.related-preset');
      await expect(related).toHaveCount(3);
      const expected = relatedPresets(p, 3);
      // A reheat preset's fresh version leads; then same category.
      const lead = p.fresh !== undefined ? 1 : 0;
      if (lead) expect(expected[0].slug).toBe(p.fresh);
      const sameCategory = ALL.filter((o) => o.slug !== p.slug && o.slug !== p.fresh && o.category === p.category).length;
      for (const [i, r] of expected.entries()) {
        await expect(related.nth(i)).toHaveAttribute('href', presetPath(r.slug));
        await expect(related.nth(i).locator('.rp-spec')).toHaveText(expectedSpec('en', r));
        if (i >= lead && i - lead < sameCategory) expect(r.category).toBe(p.category);
      }
      await expect(page.locator(`.related-preset[href="${slug}"]`)).toHaveCount(0);
    });

    test(`${slug} emits WebApplication + FAQPage JSON-LD with every FAQ filled`, async ({ page }) => {
      await page.goto(slug);
      const raw = await page.locator('script[type="application/ld+json"]').first().textContent();
      expect(raw).not.toMatch(/\{[A-Z][A-Z0-9_]*\}/);
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
      // Reheat and baked are live since batch 3: their headings show with at least one card each.
      for (const c of ['reheat', 'baked'] as const) {
        const g = page.locator(`section.group[data-category="${c}"]`);
        await expect(g.locator('h2')).toHaveText(dict.categories[c]);
        expect(await g.locator('.card').count(), `${code} ${c}`).toBeGreaterThan(0);
      }
      // Empty categories render no heading anywhere on the page.
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
        if (isReheat(p)) await expect(page.locator('#pr-widget-intro h2')).toHaveText(dict.reheat.widgetHeading);
        else {
          await expect(page.locator('#afk-temp')).toHaveValue(String(ovenOf(p).outF));
          await expect(page.locator('#afk-food')).toHaveValue(p.engine.food);
        }
        await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', localizedUrl(l.code, slug));
        await expect(page.locator(`link[rel="alternate"][hreflang="${DEFAULT_LOCALE}"]`)).toHaveAttribute('href', localizedUrl(DEFAULT_LOCALE, slug));
        await expect(page.locator(`.related-link a[href="${localizedPath(l.code, PRESETS_INDEX_PATH)}"]`)).toHaveCount(1);
        const text = await page.locator('body').innerText();
        expect(text).not.toMatch(/\{[A-Z][A-Z0-9_]*\}/);
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

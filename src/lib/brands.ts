/**
 * Brand pages (row 10) and /model-max-temp (row 11): everything derived from src/data/models.ts
 * and the engine. A brand page exists only once it has a sourced model, so a brand with no rows
 * (Ninja until its guides are read) has no page, no sitemap entry and a "Coming soon" card.
 *
 * Brand pages ship in all five locales (TRANSLATED_PAGES). Each locale's table lists its own market
 * first: US rows first in English, EU rows first on /es … /de, which also show °C first.
 * /model-max-temp is still English-only.
 */
import { MODELS, type BrandKey, type FryerModel, type Market, type ModelType } from '../data/models';
import { DIAL_STEP, computeAirFryerSetting, convertTempUnit, modelCeiling, type FoodKey, type FryerStyle } from './converter';
import { PRESETS, type FoodPreset, type PresetSlug } from '../data/presets';
import { fillPlaceholders } from './temp-landings';
import type { BrandsDictionary } from '../i18n/dictionaries/brands/en';
import { getBrandsDictionary } from '../i18n/dictionaries/brands';
import type { LocaleCode } from '../i18n/locales';

export const MODEL_MAX_TEMP_PATH = '/model-max-temp';

export interface BrandConfig {
  key: BrandKey;
  path: string;
  /** The model the page's worked example and program table use. */
  featured: string;
  /** Worked example: an oven recipe run through the engine with and without the featured model's ceiling. */
  example: { ovenF: number; ovenMinutes: number; food: FoodKey };
  /** Three presets the page links to. */
  related: PresetSlug[];
  /** A protein example: the preset whose internal temperature the copy cites ({INT_F} / {INT_C}). */
  internal?: PresetSlug;
}

export const BRANDS: BrandConfig[] = [
  { key: 'ninja', path: '/ninja', featured: 'ninja-max-xl-af161', example: { ovenF: 450, ovenMinutes: 20, food: 'fries' }, related: ['frozen-fries', 'chicken-wings', 'homemade-fries'] },
  { key: 'cosori', path: '/cosori', featured: 'cosori-turboblaze-6', example: { ovenF: 475, ovenMinutes: 15, food: 'fries' }, related: ['homemade-fries', 'chicken-wings', 'frozen-pizza'] },
  { key: 'philips', path: '/philips', featured: 'philips-2000-na230', example: { ovenF: 425, ovenMinutes: 20, food: 'veg' }, related: ['potato-wedges', 'broccoli', 'chicken-thighs'] },
  { key: 'instant', path: '/instant-vortex', featured: 'instant-vortex-plus-6-clearcook', example: { ovenF: 425, ovenMinutes: 35, food: 'thigh' }, related: ['chicken-thighs', 'salmon', 'reheat-pizza'], internal: 'chicken-thighs' },
];

/** Numbers the brand copy states that are not model specs (from the manuals, cited on the page). */
export const BRAND_FACTS = {
  /** Instant: seconds the Turn Food prompt waits before cooking resumes on its own. */
  instantTurnWaitSeconds: 10,
};

export const brandModels = (brand: BrandKey): FryerModel[] => MODELS.filter((m) => m.brand === brand);
export const LIVE_BRANDS: BrandConfig[] = BRANDS.filter((b) => brandModels(b.key).length > 0);
export const BRAND_PATHS: string[] = LIVE_BRANDS.map((b) => b.path);
export const brandConfig = (brand: BrandKey): BrandConfig => BRANDS.find((b) => b.key === brand)!;
export const modelById = (id: string): FryerModel | undefined => MODELS.find((m) => m.id === id);

/** The market a model's source is for: rows with no market are the US sources. */
export const marketOf = (m: FryerModel): Market => m.market ?? 'us';
/** Market order per locale: English lists US rows first; es/pt/fr/de list EU rows first. */
export const marketOrder = (locale: LocaleCode): Market[] => (locale === 'en' ? ['us', 'uk', 'eu'] : ['eu', 'uk', 'us']);
/** A brand's models in its locale's market order (stable: data order within a market). */
export function brandModelsFor(brand: BrandKey, locale: LocaleCode): FryerModel[] {
  const order = marketOrder(locale);
  return brandModels(brand)
    .map((m, i) => ({ m, i }))
    .sort((a, b) => order.indexOf(marketOf(a.m)) - order.indexOf(marketOf(b.m)) || a.i - b.i)
    .map(({ m }) => m);
}
/** True when a brand has rows from more than one market (its table and picker then label each row's market). */
export const brandHasMarkets = (brand: BrandKey) => new Set(brandModels(brand).map(marketOf)).size > 1;
/** Locales other than English show °C first everywhere on the brand pages. */
export const celsiusFirst = (locale: LocaleCode) => locale !== 'en';

/** The engine style a model converts with: oven-style and toaster-oven combos run as oven-style. */
export const modelStyle = (m: FryerModel): FryerStyle => (m.type === 'oven-style' || m.type === 'toaster-oven' ? 'oven' : 'basket');

const L_PER_QT = 0.946353;
/** Capacity in both units, the unstated one derived (0.1 precision); null when the source gives no volume. */
export function modelCapacity(m: FryerModel): { qt: number; L: number; stated: 'qt' | 'L' } | null {
  if (!m.capacity) return null;
  if ('qt' in m.capacity) return { qt: m.capacity.qt, L: Math.round(m.capacity.qt * L_PER_QT * 10) / 10, stated: 'qt' };
  return { qt: Math.round((m.capacity.L / L_PER_QT) * 10) / 10, L: m.capacity.L, stated: 'L' };
}

/** °C for display: exact for °C sources (200), rounded to 5 like the converter for °F sources. */
export const modelMaxC = (m: FryerModel) => (m.tempUnit === 'C' ? Math.round(((m.maxF - 32) * 5) / 9) : convertTempUnit(m.maxF, 'F'));
export const modelMinC = (m: FryerModel) => (m.minF === null ? null : m.tempUnit === 'C' ? Math.round(((m.minF - 32) * 5) / 9) : convertTempUnit(m.minF, 'F'));
/** "200°C / 392°F" for a °C source, "450°F / 230°C" for a °F source: the source's unit first (or °C first when asked). */
export function formatMax(m: FryerModel, cFirst = false): string {
  const f = `${Math.round(m.maxF)}°F`;
  const c = `${modelMaxC(m)}°C`;
  return cFirst || m.tempUnit === 'C' ? `${c} / ${f}` : `${f} / ${c}`;
}
export function formatMin(m: FryerModel, cFirst = false): string | null {
  if (m.minF === null) return null;
  const f = `${Math.round(m.minF)}°F`;
  const c = `${modelMinC(m)}°C`;
  return cFirst || m.tempUnit === 'C' ? `${c} / ${f}` : `${f} / ${c}`;
}
/** A °F program or preset value in °C, rounded to 5 like the converter. */
export const toC = (f: number) => convertTempUnit(f, 'F');

/** The ceiling the engine uses with no model: today's 400 basket / 450 oven-style. */
export const styleCeiling = (style: FryerStyle) => computeAirFryerSetting({ ovenTemp: 999, unit: 'F', ovenMinutes: 10, food: 'general', style }).ceiling;

/** Placeholder values for a brand page's copy: every number on the page comes from here. */
export function brandValues(brand: BrandKey): Record<string, string> {
  const cfg = brandConfig(brand);
  const models = brandModels(brand);
  const featured = modelById(cfg.featured)!;
  const style = modelStyle(featured);
  const input = { ovenTemp: cfg.example.ovenF, unit: 'F' as const, ovenMinutes: cfg.example.ovenMinutes, food: cfg.example.food, style };
  const generic = computeAirFryerSetting(input);
  const model = computeAirFryerSetting({ ...input, maxF: featured.maxF });
  const maxes = models.map((m) => m.maxF);
  const others = models.flatMap((m) => (m.otherMax ? [m.otherMax.f] : []));
  // The same example as a °C recipe (what the /es … /de widget starts at), run through the engine in °C.
  const ovenC = toC(cfg.example.ovenF);
  const inputC = { ...input, ovenTemp: ovenC, unit: 'C' as const };
  const genericC = computeAirFryerSetting(inputC);
  const modelC = computeAirFryerSetting({ ...inputC, maxF: featured.maxF });
  const lo = models.reduce((a, b) => (b.maxF < a.maxF ? b : a));
  const eu = models.filter((m) => marketOf(m) === 'eu');
  const values: Record<string, string> = {
    N_MODELS: String(models.length),
    MAX_HI: String(Math.round(Math.max(...maxes))),
    MAX_LO: String(Math.round(Math.min(...maxes))),
    MAX_HI_C: String(convertTempUnit(Math.max(...maxes), 'F')),
    BASKET_CEIL: String(styleCeiling('basket')),
    OVEN_CEIL: String(styleCeiling('oven')),
    F_MAX: String(Math.round(featured.maxF)),
    F_MAX_C: String(modelMaxC(featured)),
    F_DIAL: String(modelCeiling(featured.maxF)),
    F_MIN: featured.minF === null ? '' : String(Math.round(featured.minF)),
    EX_OVEN_F: String(cfg.example.ovenF),
    EX_OVEN_MIN: String(cfg.example.ovenMinutes),
    EX_GEN_F: String(generic.outF),
    EX_GEN_MIN: String(generic.outMinutes),
    EX_MODEL_F: String(model.outF),
    EX_MODEL_MIN: String(model.outMinutes),
    EX_MODEL_CHECK: String(model.checkAtMinutes),
    EX_HALF: String(Math.round((model.outMinutes ?? 0) / 2)),
    OTHER_MAX: others.length ? String(Math.max(...others)) : '',
    TURN_WAIT: String(BRAND_FACTS.instantTurnWaitSeconds),
    DIAL_STEP: String(DIAL_STEP),
    // °C versions, for the copy on /es … /de (°C first).
    MAX_LO_C: String(modelMaxC(lo)),
    BASKET_CEIL_C: String(toC(styleCeiling('basket'))),
    OVEN_CEIL_C: String(toC(styleCeiling('oven'))),
    F_DIAL_C: String(toC(modelCeiling(featured.maxF))),
    F_MIN_C: featured.minF === null ? '' : String(modelMinC(featured)),
    OTHER_MAX_C: others.length ? String(toC(Math.max(...others))) : '',
    EX_OVEN_C: String(ovenC),
    EX_GEN_C: String(genericC.outC),
    EX_GEN_MIN_C: String(genericC.outMinutes),
    EX_MODEL_C: String(modelC.outC),
    EX_MODEL_MIN_C: String(modelC.outMinutes),
    EX_MODEL_CHECK_C: String(modelC.checkAtMinutes),
    EX_HALF_C: String(Math.round((modelC.outMinutes ?? 0) / 2)),
    // EU rows (sourced from the manufacturer's European pages).
    EU_N: String(eu.length),
    US_N: String(models.length - eu.length),
    EU_MAX_HI_C: eu.length ? String(Math.max(...eu.map(modelMaxC))) : '',
    EU_MAX_LO_C: eu.length ? String(Math.min(...eu.map(modelMaxC))) : '',
  };
  const internalF = cfg.internal ? (PRESETS.find((p) => p.slug === cfg.internal) as FoodPreset).internalF : undefined;
  if (internalF !== undefined) {
    values.INT_F = String(internalF);
    values.INT_C = String(Math.round(((internalF - 32) * 5) / 9));
  }
  for (const p of featured.programs ?? []) {
    const k = p.key.replace(/[A-Z]/g, (c) => `_${c}`).toUpperCase();
    values[`${k}_DEFAULT`] = String(p.defaultF);
    values[`${k}_MIN`] = String(p.minF);
    values[`${k}_MAX`] = String(p.maxF);
    values[`${k}_DEFAULT_C`] = String(toC(p.defaultF));
    values[`${k}_MIN_C`] = String(toC(p.minF));
    values[`${k}_MAX_C`] = String(toC(p.maxF));
  }
  return values;
}

/** Placeholder values for /model-max-temp. */
export function modelMaxTempValues(): Record<string, string> {
  const maxes = MODELS.map((m) => m.maxF);
  const philips = brandModels('philips').filter((m) => m.tempUnit === 'C').map((m) => modelMaxC(m));
  return {
    N_MODELS: String(MODELS.length),
    MAX_HI: String(Math.round(Math.max(...maxes))),
    MAX_LO: String(Math.round(Math.min(...maxes))),
    BASKET_CEIL: String(styleCeiling('basket')),
    PH_MAX_C: String(Math.min(...philips)),
    DIAL_STEP: String(DIAL_STEP),
    // °C-first copy on /es … /de: the same limits, from each model's own °C figure.
    MAX_HI_C: String(Math.max(...MODELS.map(modelMaxC))),
    MAX_LO_C: String(Math.min(...MODELS.map(modelMaxC))),
    BASKET_CEIL_C: String(toC(styleCeiling('basket'))),
    N_EU: String(MODELS.filter((m) => marketOf(m) === 'eu').length),
  };
}

export const fillBrand = (brand: BrandKey, text: string) => fillPlaceholders(text, brandValues(brand));

export const MODEL_TYPES: ModelType[] = ['basket', 'oven-style', 'dual-zone', 'toaster-oven'];

export interface ModelRow {
  id: string;
  brand: BrandKey;
  name: string;
  type: string;
  capacity: string;
  /** For sorting: quarts, or -1 when the source gives no volume. */
  capacityQt: number;
  capacityNote: string | null;
  /** Where the source is for; the label is set only when the brand has rows from more than one market. */
  market: Market;
  marketLabel: string | null;
  max: string;
  maxF: number;
  min: string | null;
  other: string | null;
  /** Set when the stated temperature is a default, not a maximum. */
  maxNote: string | null;
  preheat: string;
  source: string;
  sourceLabel: string;
  sourced: string;
}

/** A model as the tables show it: every string from the data and the dictionary. */
export function modelRow(m: FryerModel, locale: LocaleCode = 'en'): ModelRow {
  const d: BrandsDictionary = getBrandsDictionary(locale);
  const cFirst = celsiusFirst(locale);
  const cap = modelCapacity(m);
  // es/pt/fr/de write decimals with a comma (7,2 L); English keeps the point.
  const dec = (n: number) => (cFirst ? String(n).replace('.', ',') : String(n));
  const capacity = cap ? (cap.stated === 'qt' && !cFirst ? `${cap.qt} qt / ${cap.L} L` : `${dec(cap.L)} L / ${dec(cap.qt)} qt`) : '—';
  const market = marketOf(m);
  return {
    id: m.id,
    brand: m.brand,
    name: d.modelNames[m.id] ?? m.modelNumber,
    type: d.types[m.type],
    capacity,
    capacityQt: cap ? cap.qt : -1,
    capacityNote: m.capacityIsFoodLoad ? d.foodLoadNote : null,
    market,
    marketLabel: brandHasMarkets(m.brand) ? d.markets[market] : null,
    max: formatMax(m, cFirst),
    maxF: m.maxF,
    min: formatMin(m, cFirst),
    other: m.otherMax
      ? fillPlaceholders(d.otherMaxTemplate, { LABEL: d.otherMax[m.otherMax.label], F: String(m.otherMax.f), C: String(toC(m.otherMax.f)) })
      : null,
    maxNote: m.maxIsDefault ? d.maxDefaultNote : null,
    preheat: d.preheat[m.preheat],
    source: m.source,
    sourceLabel: market === 'eu' ? d.sourceProduct : m.brand === 'philips' ? d.sourceSpec : d.sourceManual,
    sourced: m.sourced,
  };
}

/** The converter widget's model list for a brand page, in the locale's market order. */
export function widgetModels(brand: BrandKey, locale: LocaleCode = 'en') {
  const d: BrandsDictionary = getBrandsDictionary(locale);
  const tag = brandHasMarkets(brand);
  return brandModelsFor(brand, locale).map((m) => {
    const name = d.modelNames[m.id] ?? m.modelNumber;
    return { id: m.id, label: tag ? `${name} · ${d.markets[marketOf(m)]}` : name, style: modelStyle(m), maxF: m.maxF };
  });
}

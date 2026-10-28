/**
 * Brand pages (row 10) and /model-max-temp (row 11): everything derived from src/data/models.ts
 * and the engine. A brand page exists only once it has a sourced model, so a brand with no rows
 * (Ninja until its guides are read) has no page, no sitemap entry and a "Coming soon" card.
 *
 * Brand pages and /model-max-temp are English-only for now: live (LIVE_PAGES) but not in
 * TRANSLATED_PAGES, which is how the site already marks a page that has no /es … /de copy.
 */
import { MODELS, type BrandKey, type FryerModel, type ModelType } from '../data/models';
import { DIAL_STEP, computeAirFryerSetting, convertTempUnit, modelCeiling, type FoodKey, type FryerStyle } from './converter';
import type { PresetSlug } from '../data/presets';
import { fillPlaceholders } from './temp-landings';
import { brands as brandsDict } from '../i18n/dictionaries/brands/en';

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
}

export const BRANDS: BrandConfig[] = [
  { key: 'ninja', path: '/ninja', featured: 'ninja-max-xl-af161', example: { ovenF: 450, ovenMinutes: 20, food: 'fries' }, related: ['frozen-fries', 'chicken-wings', 'homemade-fries'] },
  { key: 'cosori', path: '/cosori', featured: 'cosori-turboblaze-6', example: { ovenF: 475, ovenMinutes: 15, food: 'fries' }, related: ['homemade-fries', 'chicken-wings', 'frozen-pizza'] },
  { key: 'philips', path: '/philips', featured: 'philips-2000-na230', example: { ovenF: 425, ovenMinutes: 20, food: 'veg' }, related: ['potato-wedges', 'broccoli', 'chicken-thighs'] },
  { key: 'instant', path: '/instant-vortex', featured: 'instant-vortex-plus-6-clearcook', example: { ovenF: 425, ovenMinutes: 35, food: 'thigh' }, related: ['chicken-thighs', 'salmon', 'reheat-pizza'] },
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
/** "200°C / 392°F" for a °C source, "450°F / 230°C" for a °F source: the source's unit first. */
export function formatMax(m: FryerModel): string {
  const f = `${Math.round(m.maxF)}°F`;
  const c = `${modelMaxC(m)}°C`;
  return m.tempUnit === 'C' ? `${c} / ${f}` : `${f} / ${c}`;
}
export function formatMin(m: FryerModel): string | null {
  if (m.minF === null) return null;
  const f = `${Math.round(m.minF)}°F`;
  const c = `${modelMinC(m)}°C`;
  return m.tempUnit === 'C' ? `${c} / ${f}` : `${f} / ${c}`;
}

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
  };
  for (const p of featured.programs ?? []) {
    const k = p.key.replace(/[A-Z]/g, (c) => `_${c}`).toUpperCase();
    values[`${k}_DEFAULT`] = String(p.defaultF);
    values[`${k}_MIN`] = String(p.minF);
    values[`${k}_MAX`] = String(p.maxF);
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
  max: string;
  maxF: number;
  min: string | null;
  other: string | null;
  preheat: string;
  source: string;
  sourceLabel: string;
  sourced: string;
}

/** A model as the tables show it: every string from the data and the dictionary. */
export function modelRow(m: FryerModel): ModelRow {
  const cap = modelCapacity(m);
  const capacity = cap ? (cap.stated === 'qt' ? `${cap.qt} qt / ${cap.L} L` : `${cap.L} L / ${cap.qt} qt`) : '—';
  return {
    id: m.id,
    brand: m.brand,
    name: brandsDict.modelNames[m.id] ?? m.modelNumber,
    type: brandsDict.types[m.type],
    capacity,
    capacityQt: cap ? cap.qt : -1,
    capacityNote: m.capacityIsFoodLoad ? brandsDict.foodLoadNote : null,
    max: formatMax(m),
    maxF: m.maxF,
    min: formatMin(m),
    other: m.otherMax ? fillPlaceholders(brandsDict.otherMaxTemplate, { LABEL: brandsDict.otherMax[m.otherMax.label], F: String(m.otherMax.f) }) : null,
    preheat: brandsDict.preheat[m.preheat],
    source: m.source,
    sourceLabel: m.brand === 'philips' ? brandsDict.sourceSpec : brandsDict.sourceManual,
    sourced: m.sourced,
  };
}

/** The converter widget's model list for a brand page. */
export const widgetModels = (brand: BrandKey) =>
  brandModels(brand).map((m) => ({ id: m.id, label: brandsDict.modelNames[m.id] ?? m.modelNumber, style: modelStyle(m), maxF: m.maxF }));

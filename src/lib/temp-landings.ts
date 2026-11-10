/**
 * Temperature landing pages (/350-to-air-fryer ... /450-to-air-fryer). Single source of
 * truth for which temperatures get a page — read by the dynamic routes, site.config
 * (LIVE_PAGES / TRANSLATED_PAGES), ChartBody's row links, HomeBody's rail, and the e2e
 * suite. Every number a page shows comes from `tempLandingValues`, never from copy.
 */
import { basketPreheatMinutes } from './preheat';
import { DEFAULT_LOCALE, OVEN_MARK_SCALE, type LocaleCode } from '../i18n/locales';
import {
  FOODS,
  CONVECTION_FOODS,
  computeAirFryerSetting,
  computeAirFryerSettingFromConvection,
  convertTempUnit,
  ovenMarkFor,
  type ConversionResult,
  type FoodKey,
  type FryerStyle,
} from './converter';

export interface TempLanding {
  /** Oven temperature the page is about, °F. */
  tempF: number;
  /** The worked example's food and oven time; its copy is written for this food. */
  example: { food: FoodKey; ovenMinutes: number };
}

export const TEMP_LANDINGS = [
  { tempF: 350, example: { food: 'baked', ovenMinutes: 20 } },
  { tempF: 375, example: { food: 'thigh', ovenMinutes: 40 } },
  { tempF: 400, example: { food: 'veg', ovenMinutes: 25 } },
  { tempF: 425, example: { food: 'fish', ovenMinutes: 15 } },
  { tempF: 450, example: { food: 'pizza', ovenMinutes: 14 } },
] as const satisfies readonly TempLanding[];

export type TempLandingF = (typeof TEMP_LANDINGS)[number]['tempF'];

/** The oven time the widget and the direct-answer line assume (the flagship widget's default). */
export const TEMP_LANDING_MINUTES = 25;

export const tempLandingSlug = (tempF: number) => `/${tempF}-to-air-fryer`;

export const TEMP_LANDING_SLUGS = TEMP_LANDINGS.map((l) => tempLandingSlug(l.tempF));

/** Percentage of the oven time the air fryer saves for this food/style at this temperature. */
export function timeCutPercent(tempF: number, food: FoodKey, style: FryerStyle): number {
  // f has two decimals, so a 100-minute reference reads the multiplier back exactly (incl. the capped bonus).
  const r = computeAirFryerSetting({ ovenTemp: tempF, unit: 'F', ovenMinutes: 100, food, style });
  return 100 - (r.outMinutes ?? 100);
}

export interface TempLandingRow {
  food: FoodKey;
  basket: ConversionResult & { pct: number };
  oven: ConversionResult & { pct: number };
}

/** Per-food table for one oven temperature: every FOODS key, basket and oven-style. */
export function tempLandingRows(tempF: number): TempLandingRow[] {
  const cell = (food: FoodKey, style: FryerStyle) => ({
    ...computeAirFryerSetting({ ovenTemp: tempF, unit: 'F', ovenMinutes: TEMP_LANDING_MINUTES, food, style }),
    pct: timeCutPercent(tempF, food, style),
  });
  return (Object.keys(FOODS) as FoodKey[]).map((food) => ({ food, basket: cell(food, 'basket'), oven: cell(food, 'oven') }));
}

/**
 * Placeholder values for one page's copy, in `locale` (which sets the oven-dial scale of {OVEN_MARK}/{AF_MARK}). Every {KEY} in a temp landing dictionary
 * entry is filled from here, so copy never carries an engine number of its own.
 */
export function tempLandingValues(landing: TempLanding, locale: LocaleCode = DEFAULT_LOCALE): Record<string, string> {
  const scale = OVEN_MARK_SCALE[locale];
  const { tempF, example } = landing;
  const general = (style: FryerStyle) =>
    computeAirFryerSetting({ ovenTemp: tempF, unit: 'F', ovenMinutes: TEMP_LANDING_MINUTES, food: 'general', style });
  const basket = general('basket');
  const oven = general('oven');
  const ex = (style: FryerStyle) =>
    computeAirFryerSetting({ ovenTemp: tempF, unit: 'F', ovenMinutes: example.ovenMinutes, food: example.food, style });
  const exBasket = ex('basket');
  const exOven = ex('oven');

  return {
    OVEN_F: String(tempF),
    OVEN_C: String(convertTempUnit(tempF, 'F')),
    OVEN_C_EXACT: String(Math.round(((tempF - 32) * 5) / 9)),
    OVEN_MARK: String(ovenMarkFor(tempF, scale) ?? '—'),
    AF_F: String(basket.outF),
    AF_C: String(basket.outC),
    AF_MARK: String(ovenMarkFor(basket.outF, scale) ?? '—'),
    PCT: String(timeCutPercent(tempF, 'general', 'basket')),
    OS_F: String(oven.outF),
    OS_C: String(oven.outC),
    OS_PCT: String(timeCutPercent(tempF, 'general', 'oven')),
    PREHEAT: String(basketPreheatMinutes(basket.outF!)),
    CEILING: String(basket.ceiling),
    OS_CEILING: String(oven.ceiling),
    EX_OVEN_MIN: String(example.ovenMinutes),
    EX_F: String(exBasket.outF),
    EX_C: String(exBasket.outC),
    EX_MIN: String(exBasket.outMinutes),
    EX_CHECK: String(exBasket.checkAtMinutes),
    EX_OS_F: String(exOven.outF),
    EX_OS_MIN: String(exOven.outMinutes),
  };
}

/** Replaces every {KEY} in `text` with `values[KEY]`; throws on an unknown key so a typo can't ship. */
export function fillPlaceholders(text: string, values: Record<string, string>): string {
  // Any {UPPER_CASE} key, digits included, is filled or throws; none can slip through unfilled.
  return text.replace(/\{([A-Z][A-Z0-9_]*)\}/g, (_, key: string) => {
    if (!(key in values)) throw new Error(`Unknown placeholder {${key}}`);
    return values[key];
  });
}

/** Previous / next landing page in TEMP_LANDINGS order (null at either end). */
export function tempLandingNeighbours(tempF: number): { prev: TempLanding | null; next: TempLanding | null } {
  const i = TEMP_LANDINGS.findIndex((l) => l.tempF === tempF);
  return { prev: TEMP_LANDINGS[i - 1] ?? null, next: TEMP_LANDINGS[i + 1] ?? null };
}

/**
 * Celsius temperature landing pages (row 6 replacement). UK/EU recipes print three figures:
 * conventional °C, fan °C, gas mark. These pages convert all three through the existing
 * conventional (flagship) and convection engines. Gas mark maps to °C via converter.ts.
 * Distinct from °F pages: °C-first copy, fan column, UK packaging-instructions angle.
 */
export interface CTempLanding {
  /** Oven temperature the page is about, °C (conventional). */
  tempC: number;
  /** The worked example's food and oven time; copy written for this food. */
  example: { food: FoodKey; ovenMinutes: number };
  /** Nearest °F landing page for cross-linking. */
  nearestF: number;
}

/** The four most common UK/EU recipe temperatures. */
export const C_TEMP_LANDINGS: readonly CTempLanding[] = [
  { tempC: 160, example: { food: 'baked', ovenMinutes: 30 }, nearestF: 325 },
  { tempC: 180, example: { food: 'baked', ovenMinutes: 25 }, nearestF: 350 },
  { tempC: 200, example: { food: 'veg', ovenMinutes: 25 }, nearestF: 400 },
  { tempC: 220, example: { food: 'pizza', ovenMinutes: 15 }, nearestF: 425 },
] as const;

export type CTempLandingC = (typeof C_TEMP_LANDINGS)[number]['tempC'];

export const cTempLandingSlug = (tempC: number) => `/${tempC}c-to-air-fryer`;

export const C_TEMP_LANDING_SLUGS = C_TEMP_LANDINGS.map((l) => cTempLandingSlug(l.tempC));

/** Fan offset for UK/EU recipes: conventional °C minus fan °C. The UK convention is 20°C. */
export const FAN_OFFSET_C = 20;

/**
 * Placeholder values for a °C landing page. Every {KEY} in a c-temp-landing dictionary entry
 * is filled from here. Supports three input modes: conventional °C, fan °C, gas mark.
 */
export function cTempLandingValues(landing: CTempLanding, locale: LocaleCode = DEFAULT_LOCALE): Record<string, string> {
  const scale = OVEN_MARK_SCALE[locale];
  const { tempC, example, nearestF } = landing;

  // Conventional °C input through flagship engine
  const generalConv = (style: FryerStyle) =>
    computeAirFryerSetting({ ovenTemp: tempC, unit: 'C', ovenMinutes: TEMP_LANDING_MINUTES, food: 'general', style });
  const basketConv = generalConv('basket');
  const ovenConv = generalConv('oven');

  // Fan °C input through convection engine (fan = conventional - 20°C)
  const fanC = tempC - FAN_OFFSET_C;
  const generalFan = (style: FryerStyle) =>
    computeAirFryerSettingFromConvection({ ovenTemp: fanC, unit: 'C', ovenMinutes: TEMP_LANDING_MINUTES, food: 'general', style });
  const basketFan = generalFan('basket');
  const ovenFan = generalFan('oven');

  // Worked example (conventional)
  const exConv = (style: FryerStyle) =>
    computeAirFryerSetting({ ovenTemp: tempC, unit: 'C', ovenMinutes: example.ovenMinutes, food: example.food, style });
  const exBasketConv = exConv('basket');
  const exOvenConv = exConv('oven');

  // Worked example (fan)
  const exFan = (style: FryerStyle) =>
    computeAirFryerSettingFromConvection({ ovenTemp: fanC, unit: 'C', ovenMinutes: example.ovenMinutes, food: example.food, style });
  const exBasketFan = exFan('basket');
  const exOvenFan = exFan('oven');

  // Gas mark for the conventional temperature
  const ovenF = (tempC * 9) / 5 + 32;
  const gasMark = ovenMarkFor(ovenF, scale);

  return {
    // Conventional column
    OVEN_C: String(tempC),
    OVEN_F: String(Math.round(ovenF)),
    OVEN_MARK: String(gasMark ?? '—'),
    AF_C: String(basketConv.outC),
    AF_F: String(basketConv.outF),
    AF_MARK: String(ovenMarkFor(basketConv.outF!, scale) ?? '—'),
    PCT: String(timeCutPercent(Math.round(ovenF), 'general', 'basket')),
    OS_C: String(ovenConv.outC),
    OS_F: String(ovenConv.outF),
    OS_PCT: String(timeCutPercent(Math.round(ovenF), 'general', 'oven')),
    // Fan column
    FAN_C: String(fanC),
    FAN_F: String(Math.round((fanC * 9) / 5 + 32)),
    FAN_AF_C: String(basketFan.outC),
    FAN_AF_F: String(basketFan.outF),
    FAN_AF_MARK: String(ovenMarkFor(basketFan.outF!, scale) ?? '—'),
    FAN_PCT: String(timeCutPercent(Math.round((fanC * 9) / 5 + 32), 'general', 'basket')),
    FAN_OS_C: String(ovenFan.outC),
    FAN_OS_F: String(ovenFan.outF),
    FAN_OS_PCT: String(timeCutPercent(Math.round((fanC * 9) / 5 + 32), 'general', 'oven')),
    // Worked example (conventional)
    EX_OVEN_MIN: String(example.ovenMinutes),
    EX_C: String(exBasketConv.outC),
    EX_F: String(exBasketConv.outF),
    EX_MIN: String(exBasketConv.outMinutes),
    EX_CHECK: String(exBasketConv.checkAtMinutes),
    EX_OS_C: String(exOvenConv.outC),
    EX_OS_F: String(exOvenConv.outF),
    EX_OS_MIN: String(exOvenConv.outMinutes),
    // Worked example (fan)
    EX_FAN_C: String(exBasketFan.outC),
    EX_FAN_F: String(exBasketFan.outF),
    EX_FAN_MIN: String(exBasketFan.outMinutes),
    EX_FAN_CHECK: String(exBasketFan.checkAtMinutes),
    EX_FAN_OS_C: String(exOvenFan.outC),
    EX_FAN_OS_F: String(exOvenFan.outF),
    EX_FAN_OS_MIN: String(exOvenFan.outMinutes),
    // Preheat
    PREHEAT: String(basketPreheatMinutes(basketConv.outF!)),
    // Ceilings
    CEILING: String(basketConv.ceiling),
    OS_CEILING: String(ovenConv.ceiling),
    // Nearest °F page for cross-link
    NEAREST_F: String(nearestF),
  };
}

/** Per-food table for one °C temperature: every FOODS key, basket and oven-style, conventional + fan columns. */
export interface CTempLandingRow {
  food: FoodKey;
  conv: { basket: ConversionResult & { pct: number }; oven: ConversionResult & { pct: number } };
  fan: { basket: ConversionResult & { pct: number }; oven: ConversionResult & { pct: number } };
}

export function cTempLandingRows(tempC: number): CTempLandingRow[] {
  const fanC = tempC - FAN_OFFSET_C;
  const ovenF = Math.round((tempC * 9) / 5 + 32);
  const fanF = Math.round((fanC * 9) / 5 + 32);

  const convCell = (food: FoodKey, style: FryerStyle) => {
    const r = computeAirFryerSetting({ ovenTemp: tempC, unit: 'C', ovenMinutes: TEMP_LANDING_MINUTES, food, style });
    return { ...r, pct: timeCutPercent(ovenF, food, style) };
  };
  const fanCell = (food: FoodKey, style: FryerStyle) => {
    const r = computeAirFryerSettingFromConvection({ ovenTemp: fanC, unit: 'C', ovenMinutes: TEMP_LANDING_MINUTES, food, style });
    return { ...r, pct: timeCutPercent(fanF, food, style) };
  };

  return (Object.keys(FOODS) as FoodKey[]).map((food) => ({
    food,
    conv: { basket: convCell(food, 'basket'), oven: convCell(food, 'oven') },
    fan: { basket: fanCell(food, 'basket'), oven: fanCell(food, 'oven') },
  }));
}

/** Previous / next °C landing page in C_TEMP_LANDINGS order (null at either end). */
export function cTempLandingNeighbours(tempC: number): { prev: CTempLanding | null; next: CTempLanding | null } {
  const i = C_TEMP_LANDINGS.findIndex((l) => l.tempC === tempC);
  return { prev: C_TEMP_LANDINGS[i - 1] ?? null, next: C_TEMP_LANDINGS[i + 1] ?? null };
}

/**
 * Temperature landing pages (/350-to-air-fryer ... /450-to-air-fryer). Single source of
 * truth for which temperatures get a page — read by the dynamic routes, site.config
 * (LIVE_PAGES / TRANSLATED_PAGES), ChartBody's row links, HomeBody's rail, and the e2e
 * suite. Every number a page shows comes from `tempLandingValues`, never from copy.
 */
import { DEFAULT_LOCALE, OVEN_MARK_SCALE, type LocaleCode } from '../i18n/locales';
import {
  FOODS,
  computeAirFryerSetting,
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
    PREHEAT: String(basket.preheatMinutes),
    OS_PREHEAT: String(oven.preheatMinutes),
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
  return text.replace(/\{([A-Z_]+)\}/g, (_, key: string) => {
    if (!(key in values)) throw new Error(`Unknown placeholder {${key}}`);
    return values[key];
  });
}

/** Previous / next landing page in TEMP_LANDINGS order (null at either end). */
export function tempLandingNeighbours(tempF: number): { prev: TempLanding | null; next: TempLanding | null } {
  const i = TEMP_LANDINGS.findIndex((l) => l.tempF === tempF);
  return { prev: TEMP_LANDINGS[i - 1] ?? null, next: TEMP_LANDINGS[i + 1] ?? null };
}

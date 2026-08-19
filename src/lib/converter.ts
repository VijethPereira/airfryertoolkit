/**
 * Shared oven-to-air-fryer conversion engine.
 * Ported 1:1 from the approved design's compute() logic — every page that
 * needs a conversion imports from here. Never duplicate this math elsewhere.
 */

export type FoodKey =
  | 'general'
  | 'fries'
  | 'wings'
  | 'breast'
  | 'thigh'
  | 'steak'
  | 'fish'
  | 'bacon'
  | 'veg'
  | 'baked'
  | 'pizza'
  | 'casserole';

export type FryerStyle = 'basket' | 'oven';
export type TempUnit = 'F' | 'C';

export interface FoodProfile {
  /** Degrees F subtracted from the oven temperature (basket baseline). */
  dT: number;
  /** Time multiplier applied to the oven minutes (basket baseline). */
  f: number;
}

export const FOODS: Record<FoodKey, FoodProfile> = {
  general: { dT: 25, f: 0.8 },
  fries: { dT: 25, f: 0.7 },
  wings: { dT: 25, f: 0.8 },
  breast: { dT: 25, f: 0.75 },
  thigh: { dT: 25, f: 0.8 },
  steak: { dT: 20, f: 0.8 },
  fish: { dT: 20, f: 0.8 },
  bacon: { dT: 25, f: 0.7 },
  veg: { dT: 25, f: 0.75 },
  baked: { dT: 20, f: 0.85 },
  pizza: { dT: 25, f: 0.75 },
  casserole: { dT: 20, f: 0.85 },
};

/** [air-fryer °F, UK gas mark] — used to surface the nearest gas mark for a result. */
export const GAS_MARKS: [number, number][] = [
  [275, 1],
  [300, 2],
  [325, 3],
  [350, 4],
  [375, 5],
  [400, 6],
  [425, 7],
  [450, 8],
  [475, 9],
];

export interface ConversionInput {
  /** Oven temperature, in `unit`. */
  ovenTemp: number;
  unit: TempUnit;
  /** Oven time in minutes. */
  ovenMinutes: number;
  food: FoodKey;
  style: FryerStyle;
}

export interface ConversionResult {
  outF: number | null;
  outC: number | null;
  outMinutes: number | null;
  /** True when the raw converted temperature exceeded the unit's ceiling and was clamped. */
  capped: boolean;
  /** The unit-style ceiling used (400°F basket / 450°F oven-style). */
  ceiling: number;
  checkAtMinutes: number | null;
  preheatMinutes: number;
  gasMark: number | null;
}

/** Rounds an °F/°C conversion to the nearest 5, matching the design's display rounding. */
export function convertTempUnit(value: number, from: TempUnit): number {
  return from === 'F'
    ? Math.round(((value - 32) * 5) / 9 / 5) * 5
    : Math.round(((value * 9) / 5 + 32) / 5) * 5;
}

export function computeAirFryerSetting(input: ConversionInput): ConversionResult {
  const food = FOODS[input.food] ?? FOODS.general;
  const ovenF = input.unit === 'C' ? (input.ovenTemp * 9) / 5 + 32 : input.ovenTemp;
  const ovenStyle = input.style === 'oven';
  const ceiling = ovenStyle ? 450 : 400;
  const dT = Math.max(10, food.dT - (ovenStyle ? 5 : 0));
  let f = food.f + (ovenStyle ? 0.05 : 0);

  let outF: number | null = Number.isFinite(ovenF) ? Math.round((ovenF - dT) / 5) * 5 : null;
  let capped = false;
  if (outF !== null && outF > ceiling) {
    outF = ceiling;
    capped = true;
  }
  if (capped) f += 0.08;

  const outMinutes: number | null = Number.isFinite(input.ovenMinutes)
    ? Math.max(1, Math.round(input.ovenMinutes * f))
    : null;
  const outC: number | null = outF !== null ? Math.round(((outF - 32) * 5) / 9 / 5) * 5 : null;

  const gasEntry = outF !== null ? GAS_MARKS.find(([tempF]) => Math.abs(tempF - outF!) <= 12) : undefined;

  return {
    outF,
    outC,
    outMinutes,
    capped,
    ceiling,
    checkAtMinutes: outMinutes !== null ? Math.max(2, Math.round(outMinutes * 0.7)) : null,
    preheatMinutes: ovenStyle ? 4 : 3,
    gasMark: gasEntry ? gasEntry[1] : null,
  };
}

/** Fills a locale's cappedNoteTemplate ("...{unit}...{ceiling}...") with the resolved unit label and ceiling value. */
export function cappedNote(
  template: string,
  unitLabel: string,
  result: ConversionResult,
): string {
  return template.replace('{unit}', unitLabel).replace('{ceiling}', String(result.ceiling));
}

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
  label: string;
  tip: string;
}

export const FOODS: Record<FoodKey, FoodProfile> = {
  general: { dT: 25, f: 0.8, label: 'General / mixed', tip: 'Shake or flip at the halfway mark.' },
  fries: { dT: 25, f: 0.7, label: 'Fries & potatoes', tip: 'Shake twice — once early, once at halfway. Keep to a single layer.' },
  wings: { dT: 25, f: 0.8, label: 'Chicken wings', tip: 'Pat dry before cooking and flip at halfway for even skin.' },
  breast: { dT: 25, f: 0.75, label: 'Chicken breast (boneless)', tip: 'Pull at 165°F internal — the temperature climbs while it rests.' },
  thigh: { dT: 25, f: 0.8, label: 'Chicken thighs / bone-in', tip: 'Skin side up the whole way. No flip needed.' },
  steak: { dT: 20, f: 0.8, label: 'Steak & thick cuts', tip: 'Flip once, then rest 5 minutes before slicing.' },
  fish: { dT: 20, f: 0.8, label: 'Fish & salmon', tip: 'No flip. Check at the low end — fish overcooks in under a minute.' },
  bacon: { dT: 25, f: 0.7, label: 'Bacon', tip: 'Single layer. Drain the fat at halfway if it starts to smoke.' },
  veg: { dT: 25, f: 0.75, label: 'Vegetables', tip: 'Cut pieces to an even size and toss at halfway.' },
  baked: { dT: 20, f: 0.85, label: 'Baked goods & cookies', tip: 'A gentler cut — batter sets more slowly than the top browns.' },
  pizza: { dT: 25, f: 0.75, label: 'Pizza & reheating', tip: 'No preheat needed for reheating. Watch the crust, not the clock.' },
  casserole: { dT: 20, f: 0.85, label: 'Casseroles & thick bakes', tip: 'Cover with foil if the top browns before the middle is hot.' },
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
  tip: string;
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
    tip: food.tip,
  };
}

export function cappedNote(result: ConversionResult, style: FryerStyle): string {
  const unitLabel = style === 'oven' ? 'oven-style unit' : 'basket model';
  return `Your recipe runs hotter than a ${unitLabel} can go. Held at ${result.ceiling}°F with time added back — check early and expect a slightly softer surface.`;
}

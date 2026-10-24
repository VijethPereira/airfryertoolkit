/**
 * Shared oven/convection <-> air fryer conversion engine.
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

/**
 * Convection oven -> air fryer profiles (basket baseline). A convection recipe is
 * already fan-adjusted (roughly 25°F below a conventional oven), so the remaining
 * gap to an air fryer is the smaller cavity and the food sitting closer to the fan
 * and element: a 0–15°F temperature cut and a 5–10% time cut, not the 20–25°F /
 * 15–30% the conventional-oven table above applies.
 */
export const CONVECTION_FOODS: Record<FoodKey, FoodProfile> = {
  general: { dT: 10, f: 0.9 },
  fries: { dT: 5, f: 0.9 },
  wings: { dT: 5, f: 0.9 },
  breast: { dT: 10, f: 0.9 },
  thigh: { dT: 10, f: 0.9 },
  steak: { dT: 5, f: 0.95 },
  fish: { dT: 10, f: 0.95 },
  bacon: { dT: 10, f: 0.9 },
  veg: { dT: 10, f: 0.9 },
  baked: { dT: 15, f: 0.95 },
  pizza: { dT: 10, f: 0.9 },
  casserole: { dT: 15, f: 0.95 },
};

/** Per-table style rules: oven-style units take 5°F less off and 0.05 more time than basket. */
interface ProfileRules {
  profiles: Record<FoodKey, FoodProfile>;
  /** Smallest temperature cut an oven-style unit can end up with. */
  dTFloor: number;
  /** Largest time multiplier an oven-style unit can end up with. */
  fCap: number;
}

const OVEN_RULES: ProfileRules = { profiles: FOODS, dTFloor: 10, fCap: Infinity };
// An oven-style air fryer is close to a small convection oven, so the cut can reach 0°F / 1:1 time.
const CONVECTION_RULES: ProfileRules = { profiles: CONVECTION_FOODS, dTFloor: 0, fCap: 1 };

function styleProfile(rules: ProfileRules, foodKey: FoodKey, style: FryerStyle): FoodProfile & { ceiling: number } {
  const food = rules.profiles[foodKey] ?? rules.profiles.general;
  const ovenStyle = style === 'oven';
  return {
    dT: Math.max(rules.dTFloor, food.dT - (ovenStyle ? 5 : 0)),
    f: Math.min(rules.fCap, food.f + (ovenStyle ? 0.05 : 0)),
    ceiling: ovenStyle ? 450 : 400,
  };
}

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

function toAirFryer(rules: ProfileRules, input: ConversionInput): ConversionResult {
  const ovenF = input.unit === 'C' ? (input.ovenTemp * 9) / 5 + 32 : input.ovenTemp;
  const ovenStyle = input.style === 'oven';
  const { dT, f: baseF, ceiling } = styleProfile(rules, input.food, input.style);
  let f = baseF;

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

export function computeAirFryerSetting(input: ConversionInput): ConversionResult {
  return toAirFryer(OVEN_RULES, input);
}

/**
 * Convection oven -> air fryer. Same pipeline as `computeAirFryerSetting` (ceiling
 * clamp, capped time bonus, °C, gas mark) on the gentler `CONVECTION_FOODS` table.
 * `input.ovenTemp` / `input.ovenMinutes` are the convection recipe's settings.
 */
export function computeAirFryerSettingFromConvection(input: ConversionInput): ConversionResult {
  return toAirFryer(CONVECTION_RULES, input);
}

/** Fills a locale's cappedNoteTemplate ("...{unit}...{ceiling}...") with the resolved unit label and ceiling value. */
export function cappedNote(
  template: string,
  unitLabel: string,
  result: { ceiling: number },
): string {
  return template.replace('{unit}', unitLabel).replace('{ceiling}', String(result.ceiling));
}

/** Real oven dials/digital controls step in 25°F increments, not the 5°F an air fryer uses. */
const OVEN_TEMP_STEP = 25;

export interface ReverseConversionInput {
  /** Air fryer temperature, in `unit`. */
  airFryerTemp: number;
  unit: TempUnit;
  /** Air fryer time in minutes. */
  airFryerMinutes: number;
  food: FoodKey;
  style: FryerStyle;
}

export interface ReverseConversionResult {
  outF: number | null;
  outC: number | null;
  outMinutes: number | null;
  gasMark: number | null;
  /** The unit-style ceiling this input is being checked against (400°F basket / 450°F oven-style) — same ceiling the forward function clamps to. */
  ceiling: number;
  /**
   * True when the air fryer input is at or above `ceiling`. An air fryer reading at its
   * own ceiling is ambiguous: it could be a genuine recipe at that temperature, or the
   * clamped result of a hotter oven recipe whose time was already inflated by the
   * forward function's capped bonus (+0.08 to `f`). This function can't tell those
   * apart, so it flags the ambiguity instead of guessing — the UI shows a note.
   */
  ceilingAmbiguous: boolean;
}

/**
 * Named inverse of `computeAirFryerSetting`: air fryer temperature/time in, oven
 * temperature/time out. Uses the same per-food/style `dT` and `f` as the forward
 * function, minus the ceiling-clamp adjustment — ovens run hotter than any air
 * fryer, so there is no ceiling to clamp against in this direction.
 *
 * The oven output is snapped to 25°F (real oven-dial steps), not the 5°F an air
 * fryer uses, so round-tripping oven -> air fryer -> oven lands back on a value
 * an oven dial can actually show instead of drifting off it.
 */
export function computeOvenSetting(input: ReverseConversionInput): ReverseConversionResult {
  return fromAirFryer(OVEN_RULES, input);
}

/**
 * Air fryer -> convection oven: the inverse of `computeAirFryerSettingFromConvection`.
 * Same 25°F dial snap and `ceilingAmbiguous` flag as `computeOvenSetting`. With a
 * 0–15°F cut, the snap often returns the air fryer temperature unchanged and only
 * the time grows — that is the expected result, not a rounding bug.
 */
export function computeConvectionSetting(input: ReverseConversionInput): ReverseConversionResult {
  return fromAirFryer(CONVECTION_RULES, input);
}

function fromAirFryer(rules: ProfileRules, input: ReverseConversionInput): ReverseConversionResult {
  const airFryerF = input.unit === 'C' ? (input.airFryerTemp * 9) / 5 + 32 : input.airFryerTemp;
  const { dT, f, ceiling } = styleProfile(rules, input.food, input.style);

  const outF: number | null = Number.isFinite(airFryerF)
    ? Math.round((airFryerF + dT) / OVEN_TEMP_STEP) * OVEN_TEMP_STEP
    : null;

  const outMinutes: number | null = Number.isFinite(input.airFryerMinutes)
    ? Math.max(1, Math.round(input.airFryerMinutes / f))
    : null;

  const outC: number | null = outF !== null ? Math.round(((outF - 32) * 5) / 9 / 5) * 5 : null;

  const gasEntry = outF !== null ? GAS_MARKS.find(([tempF]) => Math.abs(tempF - outF!) <= 12) : undefined;

  return {
    outF,
    outC,
    outMinutes,
    gasMark: gasEntry ? gasEntry[1] : null,
    ceiling,
    ceilingAmbiguous: Number.isFinite(airFryerF) && airFryerF >= ceiling,
  };
}

/**
 * Formats a FoodProfile.dT (degrees subtracted from the oven temperature) as a
 * signed display string for the food-multiplier table, e.g. 25 -> "−25°F",
 * 0 -> "0°F", -10 -> "+10°F" (a negative dT means the air fryer runs hotter,
 * not cooler, than the oven). Always uses the real minus sign (U+2212), never
 * a hyphen, and never double-signs a negative dT.
 */
export function formatTempAdjustment(dT: number): string {
  const adjustment = -dT;
  if (adjustment === 0) return '0°F';
  const sign = adjustment > 0 ? '+' : '−';
  return `${sign}${Math.abs(adjustment)}°F`;
}

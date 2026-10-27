/**
 * Shared oven/convection/frozen-pack <-> air fryer conversion engine.
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

export type FrozenFoodKey =
  | 'fries'
  | 'nuggets'
  | 'tenders'
  | 'fish'
  | 'pizza'
  | 'springRolls'
  | 'hashBrowns'
  | 'veg'
  | 'wings'
  | 'rawChicken';

/** What the pack's temperature is written for. UK/EU packs often print a separate, lower fan temperature. */
export type PackType = 'conventional' | 'fan';

export interface FrozenProfile extends FoodProfile {
  /** How many times to turn the food during the cook; 0 = leave it. */
  turns: number;
  turn: 'shake' | 'flip';
  /** Safe internal temperature to check, °F; null when the item only needs heating through. */
  internalF: number | null;
  /** Sold raw (or often sold uncooked): the UI warns to check `internalF` with a thermometer. */
  raw: boolean;
  /** Closest FOODS / CONVECTION_FOODS key — supplies the fan-pack offset. */
  like: FoodKey;
}

/**
 * Frozen packaging -> air fryer (conventional-oven pack, basket baseline). Inverted
 * relative to FOODS: the pack already assumes the food goes in frozen, so the
 * temperature mostly stays (0–15°F off) and the time takes the big cut (~30%).
 * Raw chicken breast is the exception — lower and slower, so the frozen centre is
 * safe before the outside dries.
 */
export const FROZEN_FOODS: Record<FrozenFoodKey, FrozenProfile> = {
  fries: { dT: 10, f: 0.65, turns: 2, turn: 'shake', internalF: null, raw: false, like: 'fries' },
  nuggets: { dT: 10, f: 0.65, turns: 1, turn: 'shake', internalF: 165, raw: false, like: 'general' },
  tenders: { dT: 10, f: 0.7, turns: 1, turn: 'flip', internalF: 165, raw: true, like: 'breast' },
  fish: { dT: 10, f: 0.7, turns: 1, turn: 'flip', internalF: 145, raw: false, like: 'fish' },
  pizza: { dT: 15, f: 0.75, turns: 0, turn: 'flip', internalF: null, raw: false, like: 'pizza' },
  springRolls: { dT: 10, f: 0.7, turns: 1, turn: 'flip', internalF: null, raw: false, like: 'general' },
  hashBrowns: { dT: 10, f: 0.7, turns: 1, turn: 'flip', internalF: null, raw: false, like: 'fries' },
  veg: { dT: 10, f: 0.75, turns: 2, turn: 'shake', internalF: null, raw: false, like: 'veg' },
  wings: { dT: 0, f: 0.75, turns: 2, turn: 'shake', internalF: 165, raw: true, like: 'wings' },
  rawChicken: { dT: 25, f: 0.85, turns: 1, turn: 'flip', internalF: 165, raw: true, like: 'breast' },
};

/** Per-table style rules: oven-style units take 5°F less off and 0.05 more time than basket. */
interface ProfileRules {
  /** Smallest temperature cut an oven-style unit can end up with. */
  dTFloor: number;
  /** Largest time multiplier an oven-style unit can end up with. */
  fCap: number;
}

const OVEN_RULES: ProfileRules = { dTFloor: 10, fCap: Infinity };
// An oven-style air fryer is close to a small convection oven, so the cut can reach 0°F / 1:1 time.
const CONVECTION_RULES: ProfileRules = { dTFloor: 0, fCap: 1 };
const FROZEN_RULES: ProfileRules = { dTFloor: 0, fCap: 1 };

interface StyledProfile extends FoodProfile {
  ceiling: number;
}

function styleProfile(rules: ProfileRules, food: FoodProfile, style: FryerStyle): StyledProfile {
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

/** Nearest UK gas mark for a °F value (±12°F), or null outside the gas-mark range. */
export function gasMarkFor(tempF: number): number | null {
  const entry = GAS_MARKS.find(([f]) => Math.abs(f - tempF) <= 12);
  return entry ? entry[1] : null;
}

/**
 * French oven thermostat for a °F value: exact °C ÷ 30, rounded (180°C = Th. 6),
 * clamped to the 1–10 range French dials print. Not the UK gas mark: gas mark 6 is ~200°C.
 */
export function thermostatFor(tempF: number): number {
  const c = ((tempF - 32) * 5) / 9;
  return Math.min(10, Math.max(1, Math.round(c / 30)));
}

/** Which oven-dial scale a locale reads: UK gas mark, or the French thermostat. */
export type OvenMarkScale = 'gasMark' | 'thermostat';

/** The oven-dial number for a °F value on the given scale (null when that scale has no mark for it). */
export function ovenMarkFor(tempF: number | null, scale: OvenMarkScale): number | null {
  if (tempF === null || !Number.isFinite(tempF)) return null;
  return scale === 'thermostat' ? thermostatFor(tempF) : gasMarkFor(tempF);
}

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

function toAirFryer(profile: StyledProfile, input: Omit<ConversionInput, 'food'>): ConversionResult {
  const ovenF = input.unit === 'C' ? (input.ovenTemp * 9) / 5 + 32 : input.ovenTemp;
  const ovenStyle = input.style === 'oven';
  const { dT, f: baseF, ceiling } = profile;
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


  return {
    outF,
    outC,
    outMinutes,
    capped,
    ceiling,
    checkAtMinutes: outMinutes !== null ? Math.max(2, Math.round(outMinutes * 0.7)) : null,
    preheatMinutes: ovenStyle ? 4 : 3,
    gasMark: outF !== null ? gasMarkFor(outF) : null,
  };
}

export function computeAirFryerSetting(input: ConversionInput): ConversionResult {
  return toAirFryer(styleProfile(OVEN_RULES, FOODS[input.food] ?? FOODS.general, input.style), input);
}

/**
 * Convection oven -> air fryer. Same pipeline as `computeAirFryerSetting` (ceiling
 * clamp, capped time bonus, °C, gas mark) on the gentler `CONVECTION_FOODS` table.
 * `input.ovenTemp` / `input.ovenMinutes` are the convection recipe's settings.
 */
export function computeAirFryerSettingFromConvection(input: ConversionInput): ConversionResult {
  return toAirFryer(styleProfile(CONVECTION_RULES, CONVECTION_FOODS[input.food] ?? CONVECTION_FOODS.general, input.style), input);
}

export interface FrozenConversionInput extends Omit<ConversionInput, 'food'> {
  /** `ovenTemp` / `ovenMinutes` are the pack's oven instructions. */
  food: FrozenFoodKey;
  pack: PackType;
}

export interface FrozenConversionResult extends ConversionResult {
  turns: number;
  turn: 'shake' | 'flip';
  /** Minutes into the air fryer cook at which to shake/flip, evenly spaced. */
  turnAtMinutes: number[];
  internalF: number | null;
  internalC: number | null;
  raw: boolean;
}

/**
 * The extra °F a fan-oven pack needs added back for this food: the gap between the
 * conventional and convection tables for its closest FOODS key. A fan temperature is
 * already fan-adjusted, so the conventional-pack cut would count the fan twice.
 */
export function fanPackOffset(food: FrozenFoodKey): number {
  const like = (FROZEN_FOODS[food] ?? FROZEN_FOODS.fries).like;
  return FOODS[like].dT - CONVECTION_FOODS[like].dT;
}

/**
 * Frozen packaging -> air fryer. Pack temperature/time in (conventional or fan), air
 * fryer setting out, through the same clamp/capped-bonus pipeline as the other
 * directions. A fan pack takes the conventional profile minus `fanPackOffset`, so
 * its dT can go negative (air fryer hotter than the printed fan temperature). The
 * time factor is the same for both pack types: UK/EU packs print one time for both.
 */
export function computeAirFryerSettingFromFrozen(input: FrozenConversionInput): FrozenConversionResult {
  const food = FROZEN_FOODS[input.food] ?? FROZEN_FOODS.fries;
  const styled = styleProfile(FROZEN_RULES, food, input.style);
  const profile = input.pack === 'fan' ? { ...styled, dT: styled.dT - fanPackOffset(input.food) } : styled;
  const result = toAirFryer(profile, input);
  const outMinutes = result.outMinutes;

  return {
    ...result,
    turns: food.turns,
    turn: food.turn,
    turnAtMinutes:
      outMinutes !== null
        ? Array.from({ length: food.turns }, (_, i) => Math.max(1, Math.round((outMinutes * (i + 1)) / (food.turns + 1))))
        : [],
    internalF: food.internalF,
    internalC: food.internalF !== null ? Math.round(((food.internalF - 32) * 5) / 9) : null,
    raw: food.raw,
  };
}

export interface PackSettingInput {
  /** Air fryer setting, °F, and its time in minutes. */
  tempF: number;
  minutes: number;
  food: FrozenFoodKey;
  pack: PackType;
  style: FryerStyle;
}

/**
 * Air fryer -> frozen pack: the inverse of `computeAirFryerSettingFromFrozen`. Returns
 * the pack instruction (conventional or fan) that converts to this air fryer setting,
 * snapped to 25°F oven-dial steps like the other reverse directions. When the snapped
 * pack temperature would hit the forward ceiling clamp, the time divides by the capped
 * multiplier (f + 0.08) so the forward trip lands back on `minutes`.
 */
export function computePackSetting(input: PackSettingInput): ReverseConversionResult {
  const food = FROZEN_FOODS[input.food] ?? FROZEN_FOODS.fries;
  const styled = styleProfile(FROZEN_RULES, food, input.style);
  const dT = input.pack === 'fan' ? styled.dT - fanPackOffset(input.food) : styled.dT;
  const { f, ceiling } = styled;

  const outF: number | null = Number.isFinite(input.tempF) ? Math.round((input.tempF + dT) / OVEN_TEMP_STEP) * OVEN_TEMP_STEP : null;
  const capped = outF !== null && Math.round((outF - dT) / 5) * 5 > ceiling;
  const outMinutes: number | null = Number.isFinite(input.minutes) ? Math.max(1, Math.round(input.minutes / (capped ? f + 0.08 : f))) : null;
  const outC: number | null = outF !== null ? Math.round(((outF - 32) * 5) / 9 / 5) * 5 : null;

  return {
    outF,
    outC,
    outMinutes,
    gasMark: outF !== null ? gasMarkFor(outF) : null,
    ceiling,
    ceilingAmbiguous: Number.isFinite(input.tempF) && input.tempF >= ceiling,
  };
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
  return fromAirFryer(styleProfile(OVEN_RULES, FOODS[input.food] ?? FOODS.general, input.style), input);
}

/**
 * Air fryer -> convection oven: the inverse of `computeAirFryerSettingFromConvection`.
 * Same 25°F dial snap and `ceilingAmbiguous` flag as `computeOvenSetting`. With a
 * 0–15°F cut, the snap often returns the air fryer temperature unchanged and only
 * the time grows — that is the expected result, not a rounding bug.
 */
export function computeConvectionSetting(input: ReverseConversionInput): ReverseConversionResult {
  return fromAirFryer(styleProfile(CONVECTION_RULES, CONVECTION_FOODS[input.food] ?? CONVECTION_FOODS.general, input.style), input);
}

function fromAirFryer(profile: StyledProfile, input: ReverseConversionInput): ReverseConversionResult {
  const airFryerF = input.unit === 'C' ? (input.airFryerTemp * 9) / 5 + 32 : input.airFryerTemp;
  const { dT, f, ceiling } = profile;

  const outF: number | null = Number.isFinite(airFryerF)
    ? Math.round((airFryerF + dT) / OVEN_TEMP_STEP) * OVEN_TEMP_STEP
    : null;

  const outMinutes: number | null = Number.isFinite(input.airFryerMinutes)
    ? Math.max(1, Math.round(input.airFryerMinutes / f))
    : null;

  const outC: number | null = outF !== null ? Math.round(((outF - 32) * 5) / 9 / 5) * 5 : null;


  return {
    outF,
    outC,
    outMinutes,
    gasMark: outF !== null ? gasMarkFor(outF) : null,
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

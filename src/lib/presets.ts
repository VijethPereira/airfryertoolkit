/**
 * Everything derived from src/data/presets.ts: paths, oven / fan-oven equivalents,
 * sizing rows, cross-links and the {KEY} placeholder values for preset copy. The data
 * file stores the authored air fryer baseline only; every other number comes from here.
 */
import { PRESETS, type FoodPreset, type PresetCategory, type PresetSlug } from '../data/presets';
import { getDictionary } from '../i18n/dictionaries';
import { DEFAULT_LOCALE, OVEN_MARK_SCALE, type LocaleCode } from '../i18n/locales';
import { localizedPath } from '../i18n/utils';
import {
  FROZEN_FOODS,
  computeAirFryerSetting,
  computeAirFryerSettingFromFrozen,
  computeConvectionSetting,
  computeOvenSetting,
  computePackSetting,
  convertTempUnit,
  ovenMarkFor,
  type ConversionResult,
  type FoodKey,
  type FrozenConversionInput,
  type FrozenFoodKey,
  type FryerStyle,
  type ReverseConversionResult,
} from './converter';
import { TEMP_LANDINGS, fillPlaceholders, type TempLanding } from './temp-landings';

import { presetPath } from './preset-paths';
export { PRESETS_INDEX_PATH, PRESET_PATHS, presetPath } from './preset-paths';

/** Index page grouping order. */
export const PRESET_CATEGORY_ORDER: PresetCategory[] = ['poultry', 'meat', 'fish', 'veg', 'baked', 'reheat', 'frozen'];

/** The engine food a preset converts through: a FOODS key, or a FROZEN_FOODS key for frozen presets. */
export function presetFood(preset: FoodPreset): FoodKey | FrozenFoodKey {
  return preset.engine.food;
}

/**
 * The "equivalent" a preset's air fryer setting converts back to. Oven presets: the
 * oven recipe (conventional or fan). Frozen presets: the pack instruction (conventional
 * or fan pack), through computePackSetting.
 */
const reverse = (preset: FoodPreset, tempF: number, minutes: number, target: 'oven' | 'convection'): ReverseConversionResult => {
  const { engine } = preset;
  if (engine.kind === 'frozen') {
    return computePackSetting({ tempF, minutes, food: engine.food, pack: target === 'oven' ? 'conventional' : 'fan', style: 'basket' });
  }
  return (target === 'oven' ? computeOvenSetting : computeConvectionSetting)({
    airFryerTemp: tempF,
    unit: 'F',
    airFryerMinutes: minutes,
    food: engine.food,
    style: 'basket',
  });
};

/** Conventional-oven equivalent of the preset's air fryer baseline (a frozen preset: the conventional-oven pack). */
export const presetOven = (preset: FoodPreset) => reverse(preset, preset.tempF, preset.minutes, 'oven');
/** Fan / convection-oven equivalent (a frozen preset: the fan-oven pack). */
export const presetFan = (preset: FoodPreset) => reverse(preset, preset.tempF, preset.minutes, 'convection');

/** Oven (or pack) equivalent run back through the forward converter — what the pre-filled widget shows. */
export function presetRoundTrip(preset: FoodPreset, style: FryerStyle = 'basket'): ConversionResult {
  const oven = presetOven(preset);
  const { engine } = preset;
  const input = { ovenTemp: oven.outF!, unit: 'F' as const, ovenMinutes: oven.outMinutes!, style };
  return engine.kind === 'frozen'
    ? computeAirFryerSettingFromFrozen({ ...input, food: engine.food, pack: 'conventional', turnOverride: presetTurnOverride(preset) })
    : computeAirFryerSetting({ ...input, food: engine.food });
}

/**
 * A frozen preset's own flip/shake, as the frozen engine's turn override (undefined when
 * it inherits FROZEN_FOODS'): shakes set the type to shake, flipAt to a single flip.
 */
export function presetTurnOverride(preset: FoodPreset): FrozenConversionInput['turnOverride'] {
  if (preset.engine.kind !== 'frozen') return undefined;
  if (preset.shakes !== undefined) return { turn: 'shake', turns: preset.shakes };
  if (preset.flipAt !== undefined) return { turn: 'flip', turns: 1 };
  return undefined;
}

/** The converter widget a preset page embeds, pre-filled with the oven (or pack) equivalent. */
export function presetWidget(preset: FoodPreset) {
  const oven = presetOven(preset);
  return {
    source: preset.engine.kind === 'frozen' ? ('frozen' as const) : ('oven' as const),
    initialFood: preset.engine.food,
    initialTemp: oven.outF!,
    initialTime: oven.outMinutes!,
    initialTurn: presetTurnOverride(preset),
  };
}

/** The full converter a preset page links to: /frozen with its food preselected, or the flagship. */
export function presetToolLink(preset: FoodPreset): { path: string; query: string } {
  return preset.engine.kind === 'frozen' ? { path: '/frozen', query: `?food=${preset.engine.food}` } : { path: '/oven-to-air-fryer', query: '' };
}

/** The frozen profile behind a frozen preset, or null for an oven preset. */
const frozenProfile = (preset: FoodPreset) => (preset.engine.kind === 'frozen' ? FROZEN_FOODS[preset.engine.food] : null);

/**
 * Flip point / shake count: the preset's own, else (frozen presets) from FROZEN_FOODS —
 * a flip lands at the halfway mark, shakes are counted.
 */
export function presetTurns(preset: FoodPreset): { flipAt?: number; shakes?: number } {
  if (preset.flipAt !== undefined || preset.shakes !== undefined) return { flipAt: preset.flipAt, shakes: preset.shakes };
  const profile = frozenProfile(preset);
  if (!profile || profile.turns === 0) return {};
  return profile.turn === 'flip'
    ? { flipAt: Math.max(1, Math.round(preset.minutes / (profile.turns + 1))) }
    : { shakes: profile.turns };
}

/** Internal temperature, °F: the preset's own, else (frozen presets) FROZEN_FOODS'. */
export function presetInternalF(preset: FoodPreset): number | undefined {
  return preset.internalF ?? frozenProfile(preset)?.internalF ?? undefined;
}

/** True for a frozen preset sold raw: the page shows the frozen converter's thermometer warning. */
export const presetRaw = (preset: FoodPreset) => (frozenProfile(preset)?.raw ?? false) && presetInternalF(preset) !== undefined;

export interface PresetSizeRow {
  id: FoodPreset['sizes'][number]['id'];
  tempF: number;
  tempC: number;
  minutes: number;
  oven: ReverseConversionResult;
}

export function presetSizeRows(preset: FoodPreset): PresetSizeRow[] {
  return preset.sizes.map((s) => {
    const tempF = 'tempF' in s && s.tempF ? s.tempF : preset.tempF;
    return { id: s.id, tempF, tempC: convertTempUnit(tempF, 'F'), minutes: s.minutes, oven: reverse(preset, tempF, s.minutes, 'oven') };
  });
}

/** The temperature landing page whose oven temperature is nearest this preset's oven equivalent. */
export function presetTempLanding(preset: FoodPreset): TempLanding {
  const ovenF = presetOven(preset).outF!;
  return [...TEMP_LANDINGS].sort((a, b) => Math.abs(a.tempF - ovenF) - Math.abs(b.tempF - ovenF))[0];
}

/** `n` related presets: same category first, then the rest in PRESETS order. */
export function relatedPresets(preset: FoodPreset, n = 3): FoodPreset[] {
  const others = PRESETS.filter((p) => p.slug !== preset.slug) as readonly FoodPreset[];
  return [...others.filter((p) => p.category === preset.category), ...others.filter((p) => p.category !== preset.category)].slice(0, n);
}

const toC = (f: number) => Math.round(((f - 32) * 5) / 9);

/** Placeholder values for one preset's copy, in `locale` (sets the oven-dial scale of {OVEN_MARK}). */
export function presetValues(preset: FoodPreset, locale: LocaleCode = DEFAULT_LOCALE): Record<string, string> {
  const oven = presetOven(preset);
  const fan = presetFan(preset);
  const ovenStyle = presetRoundTrip(preset, 'oven');
  const values: Record<string, string> = {
    AF_F: String(preset.tempF),
    AF_C: String(convertTempUnit(preset.tempF, 'F')),
    MIN: String(preset.minutes),
    OVEN_F: String(oven.outF),
    OVEN_C: String(oven.outC),
    OVEN_MIN: String(oven.outMinutes),
    OVEN_MARK: String(ovenMarkFor(oven.outF, OVEN_MARK_SCALE[locale]) ?? '—'),
    FAN_F: String(fan.outF),
    FAN_C: String(fan.outC),
    FAN_MIN: String(fan.outMinutes),
    OS_F: String(ovenStyle.outF),
    OS_MIN: String(ovenStyle.outMinutes),
    PREHEAT: String(presetRoundTrip(preset).preheatMinutes),
  };
  const { flipAt, shakes } = presetTurns(preset);
  if (flipAt !== undefined) values.FLIP = String(flipAt);
  if (shakes !== undefined) values.SHAKES = String(shakes);
  const internalF = presetInternalF(preset);
  if (internalF !== undefined) {
    values.INT_F = String(internalF);
    values.INT_C = String(toC(internalF));
  }
  if (preset.internalAlt !== undefined) {
    values.INT_ALT_F = String(preset.internalAlt.f);
    values.INT_ALT_C = String(toC(preset.internalAlt.f));
    if (preset.internalAlt.toF !== undefined) {
      values.INT_ALT_TO_F = String(preset.internalAlt.toF);
      values.INT_ALT_TO_C = String(toC(preset.internalAlt.toF));
    }
  }
  if (preset.precooked !== undefined) {
    values.PRE_F = String(preset.precooked.tempF);
    values.PRE_C = String(convertTempUnit(preset.precooked.tempF, 'F'));
    values.PRE_MIN = String(preset.precooked.minutes);
  }
  for (const row of presetSizeRows(preset)) {
    const id = row.id.toUpperCase();
    values[`${id}_MIN`] = String(row.minutes);
    values[`${id}_F`] = String(row.tempF);
    values[`${id}_OVEN_MIN`] = String(row.oven.outMinutes);
  }
  return values;
}

/** A preset's own copy plus a filler bound to its engine values. */
export function presetCopy(preset: FoodPreset, locale: LocaleCode = DEFAULT_LOCALE) {
  const dict = getDictionary(locale).presets;
  const values = presetValues(preset, locale);
  const copy = dict.pages[preset.slug as PresetSlug];
  // A frozen preset's equivalent is the pack instruction, so it reads the pack-side labels; every other key is shared.
  const labels = preset.engine.kind === 'frozen' ? { ...dict, ...dict.frozen } : dict;
  return { dict, labels, copy, values: { ...values, LABEL: copy.label }, fill: (text: string) => fillPlaceholders(text, { ...values, LABEL: copy.label }) };
}

/** The direct-answer line: "{food} in the air fryer: 375°F / 190°C for 16 min, flip at 8 min". */
export function presetAnswer(preset: FoodPreset, locale: LocaleCode = DEFAULT_LOCALE): string {
  const { dict, fill } = presetCopy(preset, locale);
  const { flipAt, shakes } = presetTurns(preset);
  const suffix = flipAt !== undefined ? dict.answerFlipSuffix : shakes !== undefined ? dict.answerShakeSuffix : '';
  return fill(dict.answerTemplate + suffix);
}

/** Short "375°F · 16 min · flip at 8" spec used on cards. */
export function presetSpec(preset: FoodPreset, locale: LocaleCode = DEFAULT_LOCALE): string {
  const { dict, fill } = presetCopy(preset, locale);
  const { flipAt, shakes } = presetTurns(preset);
  const suffix = flipAt !== undefined ? dict.specFlipSuffix : shakes !== undefined ? dict.specShakeSuffix : '';
  return fill(dict.specTemplate + suffix);
}

/** Card data for the homepage and /presets: label, spec and one-line description, all engine-filled. */
export function presetCard(preset: FoodPreset, locale: LocaleCode = DEFAULT_LOCALE) {
  const { copy, fill } = presetCopy(preset, locale);
  return { slug: preset.slug, path: presetPath(preset.slug), href: localizedPath(locale, presetPath(preset.slug)), label: copy.label, spec: presetSpec(preset, locale), desc: fill(copy.cardDesc) };
}

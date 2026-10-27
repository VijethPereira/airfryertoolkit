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
  computeAirFryerSetting,
  computeConvectionSetting,
  computeOvenSetting,
  convertTempUnit,
  ovenMarkFor,
  type FoodKey,
  type FryerStyle,
  type ReverseConversionResult,
} from './converter';
import { TEMP_LANDINGS, fillPlaceholders, type TempLanding } from './temp-landings';

import { presetPath } from './preset-paths';
export { PRESETS_INDEX_PATH, PRESET_PATHS, presetPath } from './preset-paths';

/** Index page grouping order. */
export const PRESET_CATEGORY_ORDER: PresetCategory[] = ['poultry', 'meat', 'fish', 'veg', 'baked', 'reheat', 'frozen'];

/** The FOODS key a preset converts through. Frozen presets (row 8) are not wired in yet. */
export function presetFood(preset: FoodPreset): FoodKey {
  if (preset.engine.kind !== 'oven') throw new Error(`Preset ${preset.slug}: frozen presets need the frozen engine`);
  return preset.engine.food;
}

const reverse = (preset: FoodPreset, tempF: number, minutes: number, target: 'oven' | 'convection'): ReverseConversionResult =>
  (target === 'oven' ? computeOvenSetting : computeConvectionSetting)({
    airFryerTemp: tempF,
    unit: 'F',
    airFryerMinutes: minutes,
    food: presetFood(preset),
    style: 'basket',
  });

/** Conventional-oven equivalent of the preset's air fryer baseline. */
export const presetOven = (preset: FoodPreset) => reverse(preset, preset.tempF, preset.minutes, 'oven');
/** Fan / convection-oven equivalent. */
export const presetFan = (preset: FoodPreset) => reverse(preset, preset.tempF, preset.minutes, 'convection');

/** Oven equivalent run back through the forward converter — what the pre-filled widget shows. */
export function presetRoundTrip(preset: FoodPreset, style: FryerStyle = 'basket') {
  const oven = presetOven(preset);
  return computeAirFryerSetting({ ovenTemp: oven.outF!, unit: 'F', ovenMinutes: oven.outMinutes!, food: presetFood(preset), style });
}

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
    PREHEAT: String(computeAirFryerSetting({ ovenTemp: oven.outF!, unit: 'F', ovenMinutes: 1, food: presetFood(preset), style: 'basket' }).preheatMinutes),
  };
  if (preset.flipAt !== undefined) values.FLIP = String(preset.flipAt);
  if (preset.shakes !== undefined) values.SHAKES = String(preset.shakes);
  if (preset.internalF !== undefined) {
    values.INT_F = String(preset.internalF);
    values.INT_C = String(toC(preset.internalF));
  }
  if (preset.internalAlt !== undefined) {
    values.INT_ALT_F = String(preset.internalAlt.f);
    values.INT_ALT_C = String(toC(preset.internalAlt.f));
    if (preset.internalAlt.toF !== undefined) {
      values.INT_ALT_TO_F = String(preset.internalAlt.toF);
      values.INT_ALT_TO_C = String(toC(preset.internalAlt.toF));
    }
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
  return { dict, copy, values: { ...values, LABEL: copy.label }, fill: (text: string) => fillPlaceholders(text, { ...values, LABEL: copy.label }) };
}

/** The direct-answer line: "{food} in the air fryer: 375°F / 190°C for 16 min, flip at 8 min". */
export function presetAnswer(preset: FoodPreset, locale: LocaleCode = DEFAULT_LOCALE): string {
  const { dict, fill } = presetCopy(preset, locale);
  const suffix = preset.flipAt !== undefined ? dict.answerFlipSuffix : preset.shakes !== undefined ? dict.answerShakeSuffix : '';
  return fill(dict.answerTemplate + suffix);
}

/** Short "375°F · 16 min · flip at 8" spec used on cards. */
export function presetSpec(preset: FoodPreset, locale: LocaleCode = DEFAULT_LOCALE): string {
  const { dict, fill } = presetCopy(preset, locale);
  const suffix = preset.flipAt !== undefined ? dict.specFlipSuffix : preset.shakes !== undefined ? dict.specShakeSuffix : '';
  return fill(dict.specTemplate + suffix);
}

/** Card data for the homepage and /presets: label, spec and one-line description, all engine-filled. */
export function presetCard(preset: FoodPreset, locale: LocaleCode = DEFAULT_LOCALE) {
  const { copy, fill } = presetCopy(preset, locale);
  return { slug: preset.slug, path: presetPath(preset.slug), href: localizedPath(locale, presetPath(preset.slug)), label: copy.label, spec: presetSpec(preset, locale), desc: fill(copy.cardDesc) };
}

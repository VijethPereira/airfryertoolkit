/** Preset URLs only — kept free of i18n imports so site.config can read them without a cycle. */
import { PRESETS } from '../data/presets';

export const PRESETS_INDEX_PATH = '/presets';
export const presetPath = (slug: string) => `/air-fryer/${slug}`;
export const PRESET_PATHS = PRESETS.map((p) => presetPath(p.slug));

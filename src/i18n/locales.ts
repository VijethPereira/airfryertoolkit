import type { OvenMarkScale } from '../lib/converter';

export const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
] as const;

export type LocaleCode = (typeof LOCALES)[number]['code'];

export const DEFAULT_LOCALE: LocaleCode = 'en';

export const OG_LOCALE_MAP: Record<LocaleCode, string> = {
  en: 'en_US',
  es: 'es_ES',
  pt: 'pt_BR',
  fr: 'fr_FR',
  de: 'de_DE',
};

/** Oven-dial scale shown beside every °F/°C result: French readers get the thermostat (°C ÷ 30), everyone else the UK gas mark. */
export const OVEN_MARK_SCALE: Record<LocaleCode, OvenMarkScale> = {
  en: 'gasMark',
  es: 'gasMark',
  pt: 'gasMark',
  fr: 'thermostat',
  de: 'gasMark',
};

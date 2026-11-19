/** The brand-page dictionary for a locale (same shape as brands/en.ts). */
import type { LocaleCode } from '../../locales';
import { brands as en, type BrandsDictionary } from './en';
import { brands as es } from './es';
import { brands as pt } from './pt';
import { brands as fr } from './fr';
import { brands as de } from './de';

const BY_LOCALE: Partial<Record<LocaleCode, BrandsDictionary>> = { en, es, pt, fr, de };

export function getBrandsDictionary(locale: LocaleCode): BrandsDictionary {
  return BY_LOCALE[locale] ?? en;
}

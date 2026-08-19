import type { LocaleCode } from '../locales';
import type { Dictionary } from '../types';
import en from './en';
import es from './es';
import pt from './pt';
import fr from './fr';
import de from './de';

const DICTIONARIES: Record<LocaleCode, Dictionary> = { en, es, pt, fr, de };

export function getDictionary(locale: LocaleCode): Dictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES.en;
}

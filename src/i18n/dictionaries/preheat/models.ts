/** The /preheat model picker and per-model table copy for each locale. */
import type { LocaleCode } from '../../locales';
import { preheatModels as en, type PreheatModelCopy } from './en';
import { preheatModels as es } from './es';
import { preheatModels as pt } from './pt';
import { preheatModels as fr } from './fr';
import { preheatModels as de } from './de';

const BY_LOCALE: Record<LocaleCode, PreheatModelCopy> = { en, es, pt, fr, de };

export const getPreheatModelCopy = (locale: LocaleCode): PreheatModelCopy => BY_LOCALE[locale];

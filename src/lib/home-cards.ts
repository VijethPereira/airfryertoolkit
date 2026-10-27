/**
 * Homepage frozen cards: each card's page, its fallback until that page ships, and a
 * typical bag's conventional-oven instruction. The spec line is that pack run through
 * the frozen engine, so it can't drift from /frozen.
 */
import { getDictionary } from '../i18n/dictionaries';
import { DEFAULT_LOCALE, type LocaleCode } from '../i18n/locales';
import { PRESETS } from '../data/presets';
import { LIVE_PAGES } from '../site.config';
import { computeAirFryerSettingFromFrozen, type FrozenFoodKey } from './converter';
import { presetPath, presetSpec } from './presets';
import { fillPlaceholders } from './temp-landings';

export interface FrozenCard {
  href: string;
  fallback: string;
  food: FrozenFoodKey;
  pack: { tempF: number; minutes: number };
}

// Until each frozen preset (row 8) ships, its card opens /frozen with that food preselected.
export const HOME_FROZEN_CARDS: FrozenCard[] = [
  { href: presetPath('frozen-fries'), fallback: '/frozen?food=fries', food: 'fries', pack: { tempF: 425, minutes: 20 } },
  { href: presetPath('frozen-chicken-nuggets'), fallback: '/frozen?food=nuggets', food: 'nuggets', pack: { tempF: 400, minutes: 15 } },
  { href: presetPath('frozen-chicken-breast'), fallback: '/frozen?food=rawChicken', food: 'rawChicken', pack: { tempF: 375, minutes: 26 } },
  { href: presetPath('frozen-pizza'), fallback: '/frozen?food=pizza', food: 'pizza', pack: { tempF: 400, minutes: 12 } },
];

/** The card's spec line: its preset's own spec once that page is live (so card and page agree), the engine spec before. */
export function frozenCardSpec(card: FrozenCard, locale: LocaleCode = DEFAULT_LOCALE): string {
  const preset = PRESETS.find((p) => presetPath(p.slug) === card.href);
  return preset && LIVE_PAGES.has(card.href) ? presetSpec(preset, locale) : frozenCardEngineSpec(card, locale);
}

/** "400°F · 15 min · shake ×2" from a typical bag: raw foods show the internal temperature instead of the turn. */
export function frozenCardEngineSpec({ food, pack }: FrozenCard, locale: LocaleCode = DEFAULT_LOCALE): string {
  const r = computeAirFryerSettingFromFrozen({ ovenTemp: pack.tempF, unit: 'F', ovenMinutes: pack.minutes, food, pack: 'conventional', style: 'basket' });
  const t = getDictionary(locale).home.frozenCardSpec;
  const turn = r.turns === 0 ? t.noTurn : r.turn === 'shake' ? (r.turns === 1 ? t.shakeOnce : t.shake) : r.turns === 1 ? t.flipOnce : t.flip;
  const extra = r.raw && r.internalF !== null ? t.internal : turn;
  return fillPlaceholders(t.template.replace('{EXTRA}', extra), { AF_F: String(r.outF), MIN: String(r.outMinutes), N: String(r.turns), INT_F: String(r.internalF) });
}

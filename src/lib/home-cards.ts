/**
 * Homepage frozen cards: each card's page, its fallback until that page ships, and a
 * typical bag's conventional-oven instruction. The spec line is that pack run through
 * the frozen engine, so it can't drift from /frozen.
 */
import { getDictionary } from '../i18n/dictionaries';
import { DEFAULT_LOCALE, type LocaleCode } from '../i18n/locales';
import { computeAirFryerSettingFromFrozen, type FrozenFoodKey } from './converter';
import { fillPlaceholders } from './temp-landings';

export interface FrozenCard {
  href: string;
  fallback: string;
  food: FrozenFoodKey;
  pack: { tempF: number; minutes: number };
}

// Until each frozen preset (row 8) ships, its card opens /frozen with that food preselected.
export const HOME_FROZEN_CARDS: FrozenCard[] = [
  { href: '/frozen-fries', fallback: '/frozen?food=fries', food: 'fries', pack: { tempF: 425, minutes: 20 } },
  { href: '/frozen-chicken-nuggets', fallback: '/frozen?food=nuggets', food: 'nuggets', pack: { tempF: 400, minutes: 15 } },
  { href: '/frozen-chicken', fallback: '/frozen?food=rawChicken', food: 'rawChicken', pack: { tempF: 375, minutes: 26 } },
  { href: '/frozen-pizza', fallback: '/frozen?food=pizza', food: 'pizza', pack: { tempF: 400, minutes: 12 } },
];

/** "400°F · 15 min · shake ×2": raw foods show the internal temperature instead of the turn. */
export function frozenCardSpec({ food, pack }: FrozenCard, locale: LocaleCode = DEFAULT_LOCALE): string {
  const r = computeAirFryerSettingFromFrozen({ ovenTemp: pack.tempF, unit: 'F', ovenMinutes: pack.minutes, food, pack: 'conventional', style: 'basket' });
  const t = getDictionary(locale).home.frozenCardSpec;
  const turn = r.turns === 0 ? t.noTurn : r.turn === 'shake' ? (r.turns === 1 ? t.shakeOnce : t.shake) : r.turns === 1 ? t.flipOnce : t.flip;
  const extra = r.raw && r.internalF !== null ? t.internal : turn;
  return fillPlaceholders(t.template.replace('{EXTRA}', extra), { AF_F: String(r.outF), MIN: String(r.outMinutes), N: String(r.turns), INT_F: String(r.internalF) });
}

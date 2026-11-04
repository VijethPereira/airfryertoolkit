/**
 * Server-side values for the flagship (/oven-to-air-fryer) copy: every {KEY} in Dictionary['tool']
 * prose is filled from the converter engine or src/data/energy.ts, never typed.
 *
 * Numbers that stay typed in the copy, on purpose:
 * - the flat "subtract 25°F, cut 20%" rule and the "20/20 rule": other calculators' shortcuts, quoted
 *   by name (Section 1), not our data; the 450°F → 425°F flat-rule example follows from them;
 * - inputs a question asks about ("30 minutes", "200°C for 15 minutes", "200 degrees"), repeated in
 *   its answer. FAQ_INPUTS holds them and tests check the question text matches;
 * - the preheat minutes, until row 15 sources them.
 */
import { DIAL_STEP, FOODS, FROZEN_FOODS, OVEN_STYLE_ADJUST, STYLE_CEILING_F, computeAirFryerSetting, type FoodKey } from './converter';
import { COST_PATH, formatDate, whichSavingRange } from './cost';
import { pct } from './cost-page';
import { fillPlaceholders } from './temp-landings';
import { WHICH_TEST } from '../data/energy';
import { getDictionary } from '../i18n/dictionaries';
import { localizedPath } from '../i18n/utils';
import type { LocaleCode } from '../i18n/locales';
import { LIVE_PAGES } from '../site.config';

/** The inputs the worked-number FAQs ask about (the question text carries them). */
export const FAQ_INPUTS = {
  thirtyMinutes: 30,
  twentyMinutes: 20,
  celsius: { ovenTemp: 200, ovenMinutes: 15 },
} as const;

const foodsBy = (pick: (a: number, b: number) => boolean): FoodKey =>
  (Object.keys(FOODS) as FoodKey[]).reduce((best, k) => (pick(FOODS[k].f, FOODS[best].f) ? k : best));

/** The food with the biggest time cut (lowest multiplier) and the one with the smallest. */
export const FASTEST_FOOD = foodsBy((a, b) => a < b);
export const SLOWEST_FOOD = foodsBy((a, b) => a > b);

const basketMinutes = (ovenMinutes: number, food: FoodKey) =>
  computeAirFryerSetting({ ovenTemp: 350, unit: 'F', ovenMinutes, food, style: 'basket' }).outMinutes!;

export function flagshipValues(locale: LocaleCode): Record<string, string> {
  const cut = (f: number) => String(Math.round((1 - f) * 100));
  const frozenF = Object.values(FROZEN_FOODS).map((p) => p.f);
  const c200 = computeAirFryerSetting({ ...FAQ_INPUTS.celsius, unit: 'C', food: 'general', style: 'basket' });
  const saving = whichSavingRange();
  return {
    MAX_CUT: cut(FOODS[FASTEST_FOOD].f),
    MIN_CUT: cut(FOODS[SLOWEST_FOOD].f),
    CEIL_BASKET: String(STYLE_CEILING_F.basket),
    CEIL_OVEN: String(STYLE_CEILING_F.oven),
    OS_DT: String(OVEN_STYLE_ADJUST.dT),
    DIAL: String(DIAL_STEP),
    FZ_CUT_MIN: cut(Math.max(...frozenF)),
    FZ_CUT_MAX: cut(Math.min(...frozenF)),
    GEN_DT: String(FOODS.general.dT),
    GEN_CUT: cut(FOODS.general.f),
    C200_AF: String(c200.outC),
    C200_MIN: String(c200.outMinutes),
    C200_DROP: String(FAQ_INPUTS.celsius.ovenTemp - c200.outC!),
    T30_LO: String(basketMinutes(FAQ_INPUTS.thirtyMinutes, FASTEST_FOOD)),
    T30_HI: String(basketMinutes(FAQ_INPUTS.thirtyMinutes, SLOWEST_FOOD)),
    T20_LO: String(basketMinutes(FAQ_INPUTS.twentyMinutes, FASTEST_FOOD)),
    T20_HI: String(basketMinutes(FAQ_INPUTS.twentyMinutes, SLOWEST_FOOD)),
    WHICH_SAVE_MIN: pct(saving.min),
    WHICH_SAVE_MAX: pct(saving.max),
    WHICH_DATE: formatDate(WHICH_TEST.published, locale),
  };
}

export interface FlagshipFaq {
  q: string;
  a: string;
  link?: { href: string; label: string };
}

/** The flagship prose with every {KEY} filled (throws on an unknown key). */
export function flagshipCopy(locale: LocaleCode) {
  const dict = getDictionary(locale);
  const t = dict.tool;
  const v = flagshipValues(locale);
  const fill = (s: string) => fillPlaceholders(s, v);
  const costLive = LIVE_PAGES.has(COST_PATH);
  const faqs: FlagshipFaq[] = t.faqs.map(({ q, a, link }) => ({
    q: fill(q),
    a: fill(a),
    ...(link === 'cost' && costLive ? { link: { href: localizedPath(locale, COST_PATH), label: dict.cost.heading } } : {}),
  }));
  return {
    subDesc: fill(t.subDesc),
    aboutBody: fill(t.aboutBody),
    multipliersBody: fill(t.multipliersBody),
    basketVsOvenBody: fill(t.basketVsOvenBody),
    whatHappensBody: fill(t.whatHappensBody),
    faqs,
  };
}

/** FAQPage JSON-LD entries for the flagship, the same strings the page renders. */
export const flagshipFaqJsonLd = (locale: LocaleCode) =>
  flagshipCopy(locale).faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }));

/** The flagship's own prose as one string (overlap checks against other pages). */
export function flagshipProse(locale: LocaleCode): string {
  const c = flagshipCopy(locale);
  return [c.subDesc, c.aboutBody, c.multipliersBody, c.basketVsOvenBody, c.whatHappensBody, ...c.faqs.flatMap((f) => [f.q, f.a])].join(' ');
}

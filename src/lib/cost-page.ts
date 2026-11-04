/**
 * Server-side values for the /air-fryer-vs-oven-cost copy: every {KEY} in Dictionary['cost'] prose
 * is filled from here (src/data/energy.ts, the cost model and the converter engine), never typed.
 */
import { CHOICE_TEST, CONSUMER_NZ, COST_MODEL, EUROSTAT_BAND, TARIFFS, WHICH_MEASUREMENTS, WHICH_OVEN_RATED, WHICH_TEST, type Tariff } from '../data/energy';
import type { CostCopy } from '../i18n/types';
import type { LocaleCode } from '../i18n/locales';
import {
  LOCALE_TARIFF,
  choiceCheck,
  computeCost,
  defaultAirFryerWatts,
  formatDate,
  formatMinor,
  formatNumber,
  formatPeriod,
  ratedOverstatement,
  ratedWattsRange,
  whichSavingRange,
  type CostInput,
} from './cost';
import { computeAirFryerSetting } from './converter';
import { fillPlaceholders } from './temp-landings';

/** The worked example's oven recipe: the flagship default, in the locale's oven unit. */
export function exampleRecipe(locale: LocaleCode): Pick<CostInput, 'ovenTemp' | 'unit' | 'ovenMinutes' | 'food' | 'style'> {
  return locale === 'en'
    ? { ovenTemp: 400, unit: 'F', ovenMinutes: 25, food: 'general', style: 'basket' }
    : { ovenTemp: 200, unit: 'C', ovenMinutes: 25, food: 'general', style: 'basket' };
}

export function defaultCostInput(locale: LocaleCode, tariff: Tariff = TARIFFS[LOCALE_TARIFF[locale]]): CostInput {
  return {
    ...exampleRecipe(locale),
    tariff: tariff.perKwh,
    ovenPreheat: COST_MODEL.preheatMinutes.oven,
    airFryerPreheat: COST_MODEL.preheatMinutes.airFryer,
    ovenWatts: WHICH_OVEN_RATED.watts,
    airFryerWatts: defaultAirFryerWatts(),
  };
}

export const money = (major: number, t: Tariff, locale: LocaleCode, c: CostCopy) =>
  fillPlaceholders(c.costTemplate, { N: formatMinor(major, locale), MINOR: c.minor[t.currency] });

export const rate = (t: Tariff, locale: LocaleCode, c: CostCopy) =>
  fillPlaceholders(c.tariffRateCell, { RATE: formatNumber(t.perKwh * 100, locale, 2), MINOR: c.minor[t.currency] });

export const pct = (x: number) => String(Math.round(Math.abs(x) * 100));
const signedPct = (x: number) => `${x < 0 ? '−' : '+'}${pct(x)}`;

export function costValues(locale: LocaleCode, c: CostCopy): Record<string, string> {
  const tariff = TARIFFS[LOCALE_TARIFF[locale]];
  const over = ratedOverstatement();
  const chips = WHICH_MEASUREMENTS.find((m) => m.food === 'chips')!;
  const choice = choiceCheck();
  const savings = whichSavingRange();
  const watts = ratedWattsRange();
  const input = defaultCostInput(locale, tariff);
  const ex = computeCost(input)!;
  const exSetting = computeAirFryerSetting(input);
  const temp = (f: number | null, cDeg: number | null) => (input.unit === 'F' ? `${f}°F` : `${cDeg}°C`);
  const uk = TARIFFS.uk;
  return {
    OV_W: formatNumber(WHICH_OVEN_RATED.watts, locale, 0),
    OV_RATED_MIN: formatNumber(over.min, locale, 1),
    OV_RATED_MAX: formatNumber(over.max, locale, 1),
    LEAD_MIN: String(chips.oven.minutes),
    LEAD_OV_RATED: formatNumber(((WHICH_OVEN_RATED.watts / 1000) * chips.oven.minutes) / 60, locale, 2),
    LEAD_OV_KWH: formatNumber(chips.oven.kwh, locale, 3),
    OV_WARM: formatNumber(COST_MODEL.oven.warmUpKwh, locale, 2),
    OV_HOLD: formatNumber(COST_MODEL.oven.holdKw, locale, 2),
    AF_KW: formatNumber(COST_MODEL.airFryer.averageKw, locale, 2),
    PRE_OV: String(COST_MODEL.preheatMinutes.oven),
    PRE_AF: String(COST_MODEL.preheatMinutes.airFryer),
    OV_RES_MIN: signedPct(COST_MODEL.oven.residuals.which.min),
    OV_RES_MAX: signedPct(COST_MODEL.oven.residuals.which.max),
    AF_RES_MIN: signedPct(COST_MODEL.airFryer.residuals.which.min),
    AF_RES_MAX: signedPct(COST_MODEL.airFryer.residuals.which.max),
    // Every CHOICE error is negative (tested), so the copy says "low".
    CHOICE_LOW_MIN: pct(choice.errorMax),
    CHOICE_LOW_MAX: pct(choice.errorMin),
    CHOICE_GAP: pct(choice.savingGap),
    CHOICE_YEAR: CHOICE_TEST.updated.slice(0, 4),
    WHICH_DATE: formatDate(WHICH_TEST.published, locale),
    CNZ_DATE: formatDate(CONSUMER_NZ.published, locale),
    WHICH_SAVE_MIN: pct(savings.min),
    WHICH_SAVE_MAX: pct(savings.max),
    UK_STANDING: fillPlaceholders(c.costTemplate, { N: formatNumber(uk.standingChargePerDay! * 100, locale, 2), MINOR: c.minor.GBP }),
    UK_PERIOD: formatPeriod(uk.period, locale, c.halfYearTemplate),
    UK_RATE: rate(uk, locale, c),
    TARIFF_COUNTRY: c.countries[tariff.id],
    TARIFF_RATE: rate(tariff, locale, c),
    TARIFF_PERIOD: formatPeriod(tariff.period, locale, c.halfYearTemplate),
    BAND_MIN: formatNumber(EUROSTAT_BAND.minKwh, locale, 0),
    BAND_MAX: formatNumber(EUROSTAT_BAND.maxKwh, locale, 0),
    W_MIN: formatNumber(watts.min, locale, 0),
    W_MAX: formatNumber(watts.max, locale, 0),
    W_N: String(watts.n),
    EX_OVEN_TEMP: temp(input.unit === 'F' ? input.ovenTemp : null, input.unit === 'C' ? input.ovenTemp : null),
    EX_OVEN_MIN: String(input.ovenMinutes),
    EX_AF_TEMP: temp(exSetting.outF, exSetting.outC),
    EX_AF_MIN: String(ex.airFryerMinutes),
    EX_AF_TOTAL: String(ex.airFryer.minutes),
    EX_OV_TOTAL: String(ex.oven.minutes),
    EX_AF_KWH: formatNumber(ex.airFryer.kwh, locale, 2),
    EX_OV_KWH: formatNumber(ex.oven.kwh, locale, 2),
    EX_AF_COST: money(ex.airFryer.cost, tariff, locale, c),
    EX_OV_COST: money(ex.oven.cost, tariff, locale, c),
    EX_PCT: pct(ex.savingPct),
  };
}

/** Fill a cost-copy string; throws on any unknown {KEY}. */
export const fillCost = (text: string, values: Record<string, string>) => fillPlaceholders(text, values);

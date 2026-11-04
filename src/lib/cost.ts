/**
 * Air fryer vs oven running cost (/air-fryer-vs-oven-cost). Energy comes from the measured-energy
 * model in src/data/energy.ts; the air fryer minutes come from the shared converter engine.
 */
import {
  CHOICE_TEST,
  COST_MODEL,
  TARIFFS,
  WHICH_MEASUREMENTS,
  WHICH_OVEN_RATED,
  type EnergyMeasurement,
  type TariffId,
} from '../data/energy';
import { MODELS } from '../data/models';
import { computeAirFryerSetting, type FoodKey, type FryerStyle, type TempUnit } from './converter';
import type { LocaleCode } from '../i18n/locales';

export const COST_PATH = '/air-fryer-vs-oven-cost';

export interface CostParams {
  ovenWarmUpKwh: number;
  ovenHoldKw: number;
  airFryerKw: number;
}

export const DEFAULT_PARAMS: CostParams = {
  ovenWarmUpKwh: COST_MODEL.oven.warmUpKwh,
  ovenHoldKw: COST_MODEL.oven.holdKw,
  airFryerKw: COST_MODEL.airFryer.averageKw,
};

/** Least squares on measurements: oven kWh = a + b·h, air fryer kWh = c·h (through zero). */
export function fitCostModel(ms: EnergyMeasurement[]) {
  const hours = (m: number) => m / 60;
  const xs = ms.map((m) => hours(m.oven.minutes));
  const ys = ms.map((m) => m.oven.kwh);
  const mx = xs.reduce((s, x) => s + x, 0) / xs.length;
  const my = ys.reduce((s, y) => s + y, 0) / ys.length;
  const holdKw = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0) / xs.reduce((s, x) => s + (x - mx) ** 2, 0);
  const warmUpKwh = my - holdKw * mx;
  const airFryerKw =
    ms.reduce((s, m) => s + hours(m.airFryer.minutes) * m.airFryer.kwh, 0) / ms.reduce((s, m) => s + hours(m.airFryer.minutes) ** 2, 0);
  const params: CostParams = { ovenWarmUpKwh: warmUpKwh, ovenHoldKw: holdKw, airFryerKw };
  const residuals = ms.map((m) => ({
    food: m.food,
    oven: ovenKwh(m.oven.minutes, params) / m.oven.kwh - 1,
    airFryer: airFryerKwh(m.airFryer.minutes, params) / m.airFryer.kwh - 1,
  }));
  return { params, residuals };
}

export const ovenKwh = (totalMinutes: number, p: CostParams = DEFAULT_PARAMS) => p.ovenWarmUpKwh + (p.ovenHoldKw * totalMinutes) / 60;
export const airFryerKwh = (totalMinutes: number, p: CostParams = DEFAULT_PARAMS) => (p.airFryerKw * totalMinutes) / 60;

/** Likely measured range for a model estimate, from the worst residuals: measured = model / (1 + r). */
export function likelyRange(kwh: number, r: { min: number; max: number }): { low: number; high: number } {
  return { low: kwh / (1 + r.max), high: kwh / (1 + r.min) };
}

/** Which?'s oven: rated watts × time over measured kWh, per food (the lead misconception). */
export function ratedOverstatement(): { min: number; max: number } {
  const ratios = WHICH_MEASUREMENTS.map((m) => ((WHICH_OVEN_RATED.watts / 1000) * m.oven.minutes) / 60 / m.oven.kwh);
  return { min: Math.min(...ratios), max: Math.max(...ratios) };
}

/** The fitted model against CHOICE's meals (kWh back-calculated from cents), without refitting. */
export function choiceCheck(p: CostParams = DEFAULT_PARAMS) {
  const rows = CHOICE_TEST.meals.map((m) => {
    const afMeasured = m.airFryer.cents / CHOICE_TEST.tariffAudCents;
    const ovMeasured = m.oven.cents / CHOICE_TEST.tariffAudCents;
    const af = airFryerKwh(m.airFryer.minutes, p);
    const ov = ovenKwh(m.oven.minutes, p);
    return { meal: m.meal, airFryerError: af / afMeasured - 1, ovenError: ov / ovMeasured - 1, savingMeasured: 1 - afMeasured / ovMeasured, savingModel: 1 - af / ov };
  });
  const errors = rows.flatMap((r) => [r.airFryerError, r.ovenError]);
  const savingGap = Math.max(...rows.map((r) => Math.abs(r.savingModel - r.savingMeasured)));
  return { rows, errorMin: Math.min(...errors), errorMax: Math.max(...errors), savingGap };
}

/** Median rated power of the models whose manual states one (the rated-watts field's default). */
export function defaultAirFryerWatts(): number {
  const w = MODELS.flatMap((m) => (m.watts ? [m.watts] : [])).sort((a, b) => a - b);
  return w[Math.floor((w.length - 1) / 2)];
}

export function ratedWattsRange(): { min: number; max: number; n: number } {
  const w = MODELS.flatMap((m) => (m.watts ? [m.watts] : []));
  return { min: Math.min(...w), max: Math.max(...w), n: w.length };
}

/** Default tariff per locale; English starts on the UK in the server HTML (US by time zone in the browser). */
export const LOCALE_TARIFF: Record<LocaleCode, TariffId> = { en: 'uk', es: 'es', pt: 'pt', fr: 'fr', de: 'de' };

/** Today (YYYY-MM-DD) past validUntil: the entry must be refreshed. */
export const expiredTariffs = (today: string) => Object.values(TARIFFS).filter((t) => t.validUntil < today);

export interface CostInput {
  ovenTemp: number;
  unit: TempUnit;
  ovenMinutes: number;
  food: FoodKey;
  style: FryerStyle;
  /** Major currency units per kWh. */
  tariff: number;
  ovenPreheat: number;
  airFryerPreheat: number;
  /** Rated watts: only for the "rated watts × time" comparison. */
  ovenWatts: number;
  airFryerWatts: number;
  params?: CostParams;
}

export interface ApplianceCost {
  /** Recipe minutes + preheat minutes. */
  minutes: number;
  kwh: number;
  kwhLow: number;
  kwhHigh: number;
  cost: number;
  costLow: number;
  costHigh: number;
  /** Rated watts × minutes, and how many times the estimate it is. */
  ratedKwh: number;
  ratedRatio: number;
}

export interface CostResult {
  airFryerMinutes: number;
  airFryerF: number;
  airFryerC: number;
  airFryer: ApplianceCost;
  oven: ApplianceCost;
  saving: number;
  savingPct: number;
}

const finite = (n: number, lo: number, hi: number) => Number.isFinite(n) && n >= lo && n <= hi;

/** Null when an input is out of range (temp 100–600°F via the engine, time 1–480 min, tariff 0–5/kWh, preheat 0–60, watts 100–6000). */
export function computeCost(input: CostInput): CostResult | null {
  const p = input.params ?? DEFAULT_PARAMS;
  if (
    // Oven recipes run 200–550°F (about 95–290°C); outside that the engine would extrapolate.
    !finite(input.unit === 'F' ? input.ovenTemp : input.ovenTemp * 9 / 5 + 32, 200, 550) ||
    !finite(input.ovenMinutes, 1, 480) || !finite(input.tariff, 0, 5) || !finite(input.ovenPreheat, 0, 60) || !finite(input.airFryerPreheat, 0, 60) ||
    !finite(input.ovenWatts, 100, 6000) || !finite(input.airFryerWatts, 100, 6000) ||
    !finite(p.ovenWarmUpKwh, 0, 10) || !finite(p.ovenHoldKw, 0, 10) || !finite(p.airFryerKw, 0, 10)
  ) return null;
  const setting = computeAirFryerSetting({ ovenTemp: input.ovenTemp, unit: input.unit, ovenMinutes: input.ovenMinutes, food: input.food, style: input.style });
  if (setting.outF === null || setting.outMinutes === null) return null;

  const appliance = (minutes: number, kwh: number, r: { min: number; max: number }, watts: number): ApplianceCost => {
    const { low, high } = likelyRange(kwh, r);
    const ratedKwh = (watts / 1000) * (minutes / 60);
    return { minutes, kwh, kwhLow: low, kwhHigh: high, cost: kwh * input.tariff, costLow: low * input.tariff, costHigh: high * input.tariff, ratedKwh, ratedRatio: kwh > 0 ? ratedKwh / kwh : 0 };
  };
  const afMinutes = setting.outMinutes + input.airFryerPreheat;
  const ovMinutes = input.ovenMinutes + input.ovenPreheat;
  const airFryer = appliance(afMinutes, airFryerKwh(afMinutes, p), COST_MODEL.airFryer.residuals, input.airFryerWatts);
  const oven = appliance(ovMinutes, ovenKwh(ovMinutes, p), COST_MODEL.oven.residuals, input.ovenWatts);
  const saving = oven.cost - airFryer.cost;
  return { airFryerMinutes: setting.outMinutes, airFryerF: setting.outF, airFryerC: setting.outC ?? 0, airFryer, oven, saving, savingPct: oven.cost > 0 ? saving / oven.cost : 0 };
}

/** Intl locale: English formats as en-GB, since the UK is its default tariff and reference data. */
const intl = (locale: LocaleCode) => (locale === 'en' ? 'en-GB' : locale);

/** A cost in minor units with one decimal, in the locale's number format ("7.2", "7,2"). */
export function formatMinor(major: number, locale: LocaleCode): string {
  return new Intl.NumberFormat(intl(locale), { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(major * 100);
}

export function formatNumber(n: number, locale: LocaleCode, digits: number): string {
  return new Intl.NumberFormat(intl(locale), { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(n);
}

/** 'YYYY-MM-DD/YYYY-MM-DD' → "1 Oct – 31 Dec 2026", 'YYYY-MM' → "August 2026", 'YYYY-Sn' → halfYear template. */
export function formatPeriod(period: string, locale: LocaleCode, halfYearTemplate: string): string {
  const half = period.match(/^(\d{4})-S([12])$/);
  if (half) return halfYearTemplate.replace('{N}', half[2]).replace('{YEAR}', half[1]);
  const month = period.match(/^(\d{4})-(\d{2})$/);
  if (month) return new Intl.DateTimeFormat(intl(locale), { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(+month[1], +month[2] - 1, 1)));
  const [from, to] = period.split('/').map((d) => new Date(`${d}T00:00:00Z`));
  return new Intl.DateTimeFormat(intl(locale), { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).formatRange(from, to);
}

/** 'YYYY-MM-DD' → "23 October 2026" in the locale. */
export function formatDate(iso: string, locale: LocaleCode): string {
  return new Intl.DateTimeFormat(intl(locale), { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`));
}

/** US IANA zones: an English visitor in one of these starts on the US tariff. */
export const US_TIME_ZONES = [
  'America/New_York', 'America/Detroit', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello', 'America/Indiana/Indianapolis',
  'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Vevay',
  'America/Chicago', 'America/Indiana/Tell_City', 'America/Indiana/Knox', 'America/Menominee', 'America/North_Dakota/Center',
  'America/North_Dakota/New_Salem', 'America/North_Dakota/Beulah', 'America/Denver', 'America/Boise', 'America/Phoenix',
  'America/Los_Angeles', 'America/Anchorage', 'America/Juneau', 'America/Sitka', 'America/Metlakatla', 'America/Yakutat',
  'America/Nome', 'America/Adak', 'Pacific/Honolulu', 'US/Eastern', 'US/Central', 'US/Mountain', 'US/Pacific', 'US/Alaska',
  'US/Hawaii', 'US/Arizona',
];

/**
 * Energy and tariff data for /air-fryer-vs-oven-cost (row 14). Numbers and source URLs only:
 * all prose lives in src/i18n/dictionaries/cost/{locale}.ts.
 *
 * The cost model is fitted to measured energy, never to rated watts × duty cycle: a thermostat
 * appliance's energy is set by its heat loss, not by the size of its element. Rated watts feed only
 * the "rated watts × time" comparison figure.
 */

/** Which?'s lab test: same food in both appliances, energy measured, times and kWh including preheat. */
export const WHICH_TEST = {
  url: 'https://www.which.co.uk/reviews/air-fryers/article/air-fryer-vs-oven-energy-cost-cooking-results-compared-aPpAt8D1Agy5',
  published: '2026-10-23',
  checked: '2026-11-04',
  /** The tariff Which? priced its results at (GBP per kWh). */
  tariffGbp: 0.2632,
} as const;

export type WhichFood = 'roastChicken' | 'chips' | 'jacketPotato' | 'cake';

export interface EnergyMeasurement {
  food: WhichFood;
  airFryer: { minutes: number; kwh: number };
  oven: { minutes: number; kwh: number };
}

/** As published (minutes include preheat where required; kWh include preheating and cooking). */
export const WHICH_MEASUREMENTS: EnergyMeasurement[] = [
  { food: 'roastChicken', airFryer: { minutes: 53, kwh: 0.54 }, oven: { minutes: 76, kwh: 1.157 } },
  { food: 'chips', airFryer: { minutes: 23, kwh: 0.287 }, oven: { minutes: 33, kwh: 0.863 } },
  { food: 'jacketPotato', airFryer: { minutes: 48, kwh: 0.392 }, oven: { minutes: 68, kwh: 1.084 } },
  { food: 'cake', airFryer: { minutes: 33, kwh: 0.223 }, oven: { minutes: 56, kwh: 0.71 } },
];

/**
 * Least-squares fit to all four WHICH_MEASUREMENTS (tests/e2e/cost.spec.ts refits and checks these):
 * oven kWh = warmUpKwh + holdKw × hours, air fryer kWh = airFryerKw × hours.
 * `residuals` are (model − measured) / measured, per measurement set, rounded outward:
 * `which` are the fit's own misses; `choice` are the same model against CHOICE_TEST (no refit).
 * The likely range spans the worst of both sets (cost.ts `rangeResiduals`).
 */
export const COST_MODEL = {
  oven: {
    warmUpKwh: 0.5265, holdKw: 0.4398,
    residuals: { which: { min: -0.1097, max: 0.3197 }, choice: { min: -0.3355, max: -0.1841 } },
  },
  airFryer: {
    averageKw: 0.5473,
    residuals: { which: { min: -0.2690, max: 0.3499 }, choice: { min: -0.3514, max: -0.3189 } },
  },
  /** Preheat minutes added to the recipe time (the presets' baseline: oven 10, basket 3). */
  preheatMinutes: { oven: 10, airFryer: 3 },
} as const;

/**
 * Second, independent measurement set, used only to report the model's error (never refitted to).
 * CHOICE published cents at 32c/kWh, not kWh: kWh = cents / 32 (±0.016 kWh from rounding to the cent).
 * Both appliances at 170°C; energy from a smart meter app.
 */
export const CHOICE_TEST = {
  url: 'https://www.choice.com.au/home-and-living/kitchen/benchtop-cooking/articles/air-fryer-energy-costs-vs-oven',
  updated: '2023-10-27',
  checked: '2026-11-04',
  tariffAudCents: 32,
  meals: [
    { meal: 'sausagesVeg', airFryer: { minutes: 20, cents: 9 }, oven: { minutes: 36, cents: 31 } },
    { meal: 'frozenSnacks', airFryer: { minutes: 18, cents: 8 }, oven: { minutes: 40, cents: 34 } },
    { meal: 'applePie', airFryer: { minutes: 35, cents: 15 }, oven: { minutes: 50, cents: 43 } },
  ],
} as const;

/** Consumer NZ, quoted in the "when the oven wins" FAQ (it publishes no per-food kWh, so it is not a validation set). */
export const CONSUMER_NZ = {
  url: 'https://consumer.org.nz/articles/air-fryer-vs-oven-do-air-fryers-really-save-you-money',
  published: '2024-01-11',
  checked: '2026-11-04',
} as const;

/** The oven in Which?'s test (Bosch Serie 2 HHF113BR0B): connected load from the retailer listing. */
export const WHICH_OVEN_RATED = {
  watts: 2400,
  url: 'https://www.johnlewis.com/-/p3747174',
  checked: '2026-10-28',
} as const;

export type TariffId = 'uk' | 'us' | 'es' | 'pt' | 'fr' | 'de';

export interface Tariff {
  id: TariffId;
  currency: 'GBP' | 'USD' | 'EUR';
  /** Major currency units per kWh (0.2632 = 26.32p). */
  perKwh: number;
  /** Major units per day; only where the source states one for this rate. */
  standingChargePerDay?: number;
  /**
   * Period the rate covers: 'YYYY-MM-DD/YYYY-MM-DD' (a price-cap quarter), 'YYYY-MM' (a month) or
   * 'YYYY-Sn' (Eurostat half-year).
   */
  period: string;
  /** Last day the entry may be shown; a test fails after it, so the number is refreshed. */
  validUntil: string;
  sourceName: 'Ofgem' | 'EIA' | 'Eurostat';
  source: string;
  /** Eurostat only: the API query the value was read from. */
  query?: string;
  /** UK only: the rate excludes VAT, which is removed from electricity bills for this window. */
  vatRemoved?: { from: string; to: string };
  checked: string;
}

/** Eurostat consumption band DC (kWh a year) the EU defaults are read for. */
export const EUROSTAT_BAND = { minKwh: 2500, maxKwh: 4999 } as const;

const EUROSTAT = 'https://ec.europa.eu/eurostat/databrowser/view/nrg_pc_204/default/table';
const eurostatQuery = (geo: string) =>
  `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/nrg_pc_204?format=JSON&lang=en&geo=${geo}&nrg_cons=KWH2500-4999&unit=KWH&tax=I_TAX&currency=EUR&time=2026-S1`;

/**
 * Default tariffs. UK: Ofgem default tariff, Direct Debit, average of England, Scotland and Wales.
 * US: EIA residential average (monthly; refreshed with the UK cap). EU: Eurostat household price,
 * band DC (2,500–4,999 kWh a year), all taxes included; the next half-year is due in spring 2027.
 */
export const TARIFFS: Record<TariffId, Tariff> = {
  uk: {
    id: 'uk', currency: 'GBP', perKwh: 0.2632, standingChargePerDay: 0.5483, period: '2026-10-01/2026-12-31', validUntil: '2026-12-31',
    sourceName: 'Ofgem', source: 'https://www.ofgem.gov.uk/news/changes-energy-price-cap-between-1-october-and-31-december-2026',
    vatRemoved: { from: '2026-10-01', to: '2027-03-31' }, checked: '2026-11-04',
  },
  us: {
    id: 'us', currency: 'USD', perKwh: 0.1816, period: '2026-08', validUntil: '2026-12-31',
    sourceName: 'EIA', source: 'https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_3', checked: '2026-11-04',
  },
  es: { id: 'es', currency: 'EUR', perKwh: 0.2509, period: '2026-S1', validUntil: '2027-05-31', sourceName: 'Eurostat', source: EUROSTAT, query: eurostatQuery('ES'), checked: '2026-11-04' },
  pt: { id: 'pt', currency: 'EUR', perKwh: 0.2367, period: '2026-S1', validUntil: '2027-05-31', sourceName: 'Eurostat', source: EUROSTAT, query: eurostatQuery('PT'), checked: '2026-11-04' },
  fr: { id: 'fr', currency: 'EUR', perKwh: 0.2485, period: '2026-S1', validUntil: '2027-05-31', sourceName: 'Eurostat', source: EUROSTAT, query: eurostatQuery('FR'), checked: '2026-11-04' },
  de: { id: 'de', currency: 'EUR', perKwh: 0.3618, period: '2026-S1', validUntil: '2027-05-31', sourceName: 'Eurostat', source: EUROSTAT, query: eurostatQuery('DE'), checked: '2026-11-04' },
};

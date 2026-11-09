/**
 * Preheat guidance (row 15): the default minutes by temperature and what each model's document says.
 * Every preheat number on the site comes from here: the converter result panel, the presets'
 * {PREHEAT}, the temperature pages, the flagship and homepage copy, the cost page's air fryer
 * default and /preheat itself. The data and its sources are in src/data/preheat.ts.
 */
import { MODEL_PREHEAT, PREHEAT_CHARTS, type ModelPreheat, type PreheatChart } from '../data/preheat';
import { MODELS, type FryerModel } from '../data/models';
import type { FryerStyle } from './converter';

export const PREHEAT_PATH = '/preheat';

/** A chart's minutes at a temperature: the first row whose top reaches it (a temperature in a printed gap takes the row above). */
export function chartMinutes(chart: PreheatChart, tempF: number): number | null {
  if (!Number.isFinite(tempF) || tempF < chart.rows[0].minF || tempF > chart.rows.at(-1)!.maxF) return null;
  return chart.rows.find((r) => tempF <= r.maxF)!.minutes;
}

/** The temperatures both charts cover. */
export const DEFAULT_RANGE_F = {
  min: Math.max(...PREHEAT_CHARTS.map((c) => c.rows[0].minF)),
  max: Math.min(...PREHEAT_CHARTS.map((c) => c.rows.at(-1)!.maxF)),
};

/** The default for a basket with no stated time: the longer of Cosori's two charts at this temperature. Null outside both charts. */
export function defaultPreheatMinutes(tempF: number): number | null {
  if (!Number.isFinite(tempF) || tempF < DEFAULT_RANGE_F.min || tempF > DEFAULT_RANGE_F.max) return null;
  return Math.max(...PREHEAT_CHARTS.map((c) => chartMinutes(c, tempF)!));
}

/** Shortest and longest default minutes across the charted range. */
export const DEFAULT_MINUTES = {
  min: Math.min(...PREHEAT_CHARTS.flatMap((c) => c.rows.map((r) => r.minutes))),
  max: Math.max(...PREHEAT_CHARTS.flatMap((c) => c.rows.map((r) => r.minutes))),
};

/**
 * The default chart: one row per band where the longer-of-two minutes is constant, read off the
 * printed ranges at the 5°F dial step.
 */
export function defaultChartRows(): { minF: number; maxF: number; minutes: number }[] {
  const rows: { minF: number; maxF: number; minutes: number }[] = [];
  for (let t = DEFAULT_RANGE_F.min; t <= DEFAULT_RANGE_F.max; t += 5) {
    const m = defaultPreheatMinutes(t)!;
    const last = rows.at(-1);
    if (last && last.minutes === m) last.maxF = t;
    else rows.push({ minF: t, maxF: t, minutes: m });
  }
  return rows;
}

/**
 * The preheat a converted setting shows: basket → the default minutes at the air fryer temperature;
 * oven-style → automatic (every oven-style model read has a built-in preheat with no stated minutes).
 */
export type SettingPreheat = { kind: 'minutes'; minutes: number } | { kind: 'auto' } | { kind: 'outOfRange' };

export function preheatForSetting(outF: number | null, style: FryerStyle): SettingPreheat {
  if (style === 'oven') return { kind: 'auto' };
  const minutes = outF === null ? null : defaultPreheatMinutes(outF);
  return minutes === null ? { kind: 'outOfRange' } : { kind: 'minutes', minutes };
}

/** Basket minutes for a setting, for copy that needs a number ({PREHEAT}); throws outside the charts. */
export function basketPreheatMinutes(outF: number): number {
  const m = defaultPreheatMinutes(outF);
  if (m === null) throw new Error(`preheat: ${outF}°F is outside the charted ${DEFAULT_RANGE_F.min}–${DEFAULT_RANGE_F.max}°F`);
  return m;
}

export const modelPreheat = (id: string): ModelPreheat | undefined => MODEL_PREHEAT.find((p) => p.modelId === id);

/** The manual a chart is printed in. */
export const chartSource = (c: PreheatChart): string => MODELS.find((m) => m.id === c.modelId)!.source;

/** The document a model's preheat entry was read from: its own URL, or the model's source. */
export const preheatSource = (p: ModelPreheat): string => p.source ?? MODELS.find((m) => m.id === p.modelId)!.source;

export type ModelAnswer =
  | { kind: 'chart'; minutes: number; chart: PreheatChart }
  | { kind: 'fixed'; minutes: number; tempF: number }
  | { kind: 'auto' }
  | { kind: 'none' }
  | { kind: 'notMentioned'; defaultMinutes: number | null }
  | { kind: 'notReread'; defaultMinutes: number | null };

/** What to do for this model at this temperature, from its document only. */
export function modelAnswer(model: FryerModel, tempF: number): ModelAnswer {
  const p = modelPreheat(model.id);
  if (!p) throw new Error(`preheat: no entry for ${model.id}`);
  switch (p.kind) {
    case 'chart': {
      const chart = PREHEAT_CHARTS.find((c) => c.modelId === model.id)!;
      const minutes = chartMinutes(chart, tempF);
      return minutes === null ? { kind: 'notMentioned', defaultMinutes: defaultPreheatMinutes(tempF) } : { kind: 'chart', minutes, chart };
    }
    case 'fixed':
      return { kind: 'fixed', minutes: p.fixed!.minutes, tempF: p.fixed!.tempF };
    case 'auto':
      return { kind: 'auto' };
    case 'none':
      return { kind: 'none' };
    case 'notMentioned':
      return { kind: 'notMentioned', defaultMinutes: defaultPreheatMinutes(tempF) };
    case 'notReread':
      return { kind: 'notReread', defaultMinutes: defaultPreheatMinutes(tempF) };
  }
}

/** The models.ts `preheat` enum each preheat kind corresponds to (tested, so the brand tables agree with /preheat). */
export const KIND_TO_MODE = { chart: 'auto', fixed: 'manual', auto: 'auto', none: 'none', notMentioned: 'unknown' } as const;

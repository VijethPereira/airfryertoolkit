/**
 * /preheat (row 15): every {KEY} in Dictionary['preheat'] and PreheatModelCopy is filled from here,
 * and the answer line is built here for both the server HTML and the live widget.
 */
import { MODELS, type FryerModel } from '../data/models';
import { MODEL_PREHEAT, PREHEAT_CHARTS, type ModelPreheat, type PreheatChart } from '../data/preheat';
import type { PreheatCopy } from '../i18n/types';
import type { PreheatModelCopy } from '../i18n/dictionaries/preheat/en';
import type { FryerStyle, TempUnit } from './converter';
import {
  DEFAULT_MINUTES, DEFAULT_RANGE_F, chartMinutes, defaultChartRows, defaultPreheatMinutes, modelAnswer, modelPreheat, preheatSource,
} from './preheat';
import { fillPlaceholders } from './temp-landings';

/** Worked-example temperatures: one in each band where the two charts disagree (tested). */
export const SPLIT_EXAMPLES_F = { high: 375, low: 250 } as const;

/** Input validation, as on every tool: 100–600°F (or the °C equivalent). */
export const INPUT_RANGE_F = { min: 100, max: 600 } as const;

const PRO = () => PREHEAT_CHARTS.find((c) => c.modelId === 'cosori-pro-le-5')!;
const TB = () => PREHEAT_CHARTS.find((c) => c.modelId === 'cosori-turboblaze-6')!;

/** °F → °C, rounded to 5 like the converter. */
export const toC5 = (f: number) => Math.round(((f - 32) * 5) / 9 / 5) * 5;
/** °C → °F, exact to the degree (what the charts are read at). */
export const cToF = (c: number) => Math.round((c * 9) / 5 + 32);

export const tempLabel = (f: number, unit: TempUnit) => (unit === 'C' ? `${toC5(f)}°C` : `${f}°F`);
const rangeLabel = (a: number, b: number) => `${a}–${b}°F (${toC5(a)}–${toC5(b)}°C)`;

export function preheatValues(): Record<string, string> {
  const rows = defaultChartRows();
  const ex = (f: number) => ({ pro: chartMinutes(PRO(), f)!, tb: chartMinutes(TB(), f)! });
  const hi = ex(SPLIT_EXAMPLES_F.high);
  const lo = ex(SPLIT_EXAMPLES_F.low);
  return {
    PRE_MIN: String(DEFAULT_MINUTES.min),
    PRE_MAX: String(DEFAULT_MINUTES.max),
    MIN_F: String(DEFAULT_RANGE_F.min),
    MAX_F: String(DEFAULT_RANGE_F.max),
    MIN_C: String(toC5(DEFAULT_RANGE_F.min)),
    MAX_C: String(toC5(DEFAULT_RANGE_F.max)),
    TOP_F: String(rows.at(-1)!.minF),
    TOP_C: String(toC5(rows.at(-1)!.minF)),
    EX_F: String(SPLIT_EXAMPLES_F.high),
    EX_C: String(toC5(SPLIT_EXAMPLES_F.high)),
    EX_PRO: String(hi.pro),
    EX_TB: String(hi.tb),
    EX2_F: String(SPLIT_EXAMPLES_F.low),
    EX2_C: String(toC5(SPLIT_EXAMPLES_F.low)),
    EX2_PRO: String(lo.pro),
    EX2_TB: String(lo.tb),
    N_MODELS: String(MODEL_PREHEAT.length),
    N_READ: String(MODEL_PREHEAT.filter((p) => p.kind !== 'notReread').length),
  };
}

/** The default table: one row per band of the longer-of-two chart. */
export const defaultTable = () => defaultChartRows().map((r) => ({ range: rangeLabel(r.minF, r.maxF), minutes: r.minutes }));
/** A printed chart, as printed. */
export const chartTable = (c: PreheatChart) => c.rows.map((r) => ({ range: rangeLabel(r.minF, r.maxF), minutes: r.minutes }));

export type Answer = { answer: string; source: string; minutes: number | null };

/** Parse the widget input to °F at the dial; null when out of the accepted input range. */
export function inputToF(value: number, unit: TempUnit): number | null {
  if (!Number.isFinite(value)) return null;
  const f = unit === 'C' ? cToF(value) : Math.round(value);
  return f >= INPUT_RANGE_F.min && f <= INPUT_RANGE_F.max ? f : null;
}

/** The answer with no model chosen: basket → the default minutes; oven-style → automatic. */
export function defaultAnswer(c: PreheatCopy, tempF: number | null, style: FryerStyle, unit: TempUnit): Answer {
  const v = preheatValues();
  if (style === 'oven') return { answer: c.answerOvenStyle, source: c.sourceOvenStyle, minutes: null };
  if (tempF === null) return { answer: c.answerInvalid, source: '', minutes: null };
  const min = defaultPreheatMinutes(tempF);
  if (min === null) return { answer: fillPlaceholders(c.answerOutOfRange, v), source: '', minutes: null };
  return {
    answer: fillPlaceholders(c.answerBasket, { MIN: String(min), TEMP: tempLabel(tempF, unit) }),
    source: fillPlaceholders(c.sourceBasket, { PRO: String(chartMinutes(PRO(), tempF)), TB: String(chartMinutes(TB(), tempF)) }),
    minutes: min,
  };
}

const formatPages = (pages: number[]) => pages.join(', ');
const join = (items: string[], and: string) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} ${and} ${items.at(-1)}`);

/** Where a model's entry comes from: document type, pages and read date. */
export function sourceLine(m: PreheatModelCopy, p: ModelPreheat): string {
  if (p.kind === 'notReread') return m.sourceNotReread;
  const doc = m.docTypes[p.docType];
  return p.pages.length
    ? fillPlaceholders(m.sourcePages, { DOC: doc, PAGES: formatPages(p.pages), DATE: p.read! })
    : fillPlaceholders(m.sourceNoPage, { DOC: doc, DATE: p.read! });
}

/** The answer for a chosen model (English only): from its own document, falling back to the default where it says nothing. */
export function modelAnswerText(c: PreheatCopy, m: PreheatModelCopy, model: FryerModel, tempF: number | null, unit: TempUnit, style: FryerStyle): Answer {
  const p = modelPreheat(model.id)!;
  const source = sourceLine(m, p);
  if (tempF === null) return { answer: c.answerInvalid, source, minutes: null };
  const a = modelAnswer(model, tempF);
  const temp = tempLabel(tempF, unit);
  const fallback = (template: string, minutes: number | null): Answer =>
    style === 'oven'
      ? { answer: fillPlaceholders(template, { DEFAULT: c.answerOvenStyle }), source, minutes: null }
      : minutes === null
        ? { answer: fillPlaceholders(template, { DEFAULT: fillPlaceholders(c.answerOutOfRange, preheatValues()) }), source, minutes: null }
        : { answer: fillPlaceholders(template, { DEFAULT: fillPlaceholders(c.answerBasket, { MIN: String(minutes), TEMP: temp }) }), source, minutes };
  switch (a.kind) {
    case 'chart':
      return { answer: fillPlaceholders(m.answers.chart, { MIN: String(a.minutes), TEMP: temp }), source, minutes: a.minutes };
    case 'fixed':
      return { answer: fillPlaceholders(m.answers.fixed, { MIN: String(a.minutes), TEMP: tempLabel(a.tempF, unit) }), source, minutes: a.minutes };
    case 'auto': {
      const progs = p.programs ? fillPlaceholders(m.answers.autoPrograms, { PROGRAMS: join(p.programs.map((k) => m.programs[k]), m.and) }) : '';
      const skips = p.skips ? fillPlaceholders(m.answers.autoSkips, { PROGRAMS: join(p.skips.map((k) => m.programs[k]), m.and) }) : '';
      return { answer: [m.answers.auto, progs, skips, p.skippable ? m.answers.autoSkippable : ''].filter(Boolean).join(' '), source, minutes: null };
    }
    case 'none':
      return { answer: m.answers.none, source, minutes: 0 };
    case 'notMentioned':
      return fallback(fillPlaceholders(m.answers.notMentioned, { DOC: m.docTypes[p.docType], DEFAULT: '{DEFAULT}' }), a.defaultMinutes);
    case 'notReread':
      return fallback(m.answers.notReread, a.defaultMinutes);
  }
}

/** The models the picker and table list, in models.ts order. */
export const preheatModels = (): { model: FryerModel; preheat: ModelPreheat; url: string }[] =>
  MODELS.map((model) => ({ model, preheat: modelPreheat(model.id)!, url: preheatSource(modelPreheat(model.id)!) }));

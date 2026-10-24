/**
 * Food presets (/air-fryer/[food]). Numbers only: each entry is the authored air fryer
 * baseline (basket, 4–6 qt, preheated). Labels, failure-mode copy and FAQs live in the
 * dictionaries keyed by slug; oven and fan-oven equivalents are derived with the engine
 * (src/lib/presets.ts), never stored here.
 */
import type { FoodKey, FrozenFoodKey } from '../lib/converter';

export type PresetCategory = 'meat' | 'poultry' | 'fish' | 'veg' | 'frozen' | 'baked' | 'reheat';

/** Portion sizes a preset's sizing table can list; labels are in the dictionary per slug. */
export type PresetSizeId = 'small' | 'medium' | 'large' | 'thin' | 'thick';

export interface FoodPreset {
  slug: string;
  category: PresetCategory;
  engine: { kind: 'oven'; food: FoodKey } | { kind: 'frozen'; food: FrozenFoodKey };
  /** Air fryer setting for the medium/standard portion. */
  tempF: number;
  minutes: number;
  flipAt?: number;
  shakes?: number;
  /** Safe or target internal temperature, °F. */
  internalF?: number;
  /** Doneness is judged by eye instead of a thermometer (bacon). */
  doneBy?: 'crisp';
  /** Sizing table rows; `minutes` is the air fryer time at `tempF` unless the row sets its own `tempF`. */
  sizes: { id: PresetSizeId; minutes: number; tempF?: number }[];
}

export const PRESETS = [
  {
    slug: 'chicken-breast',
    category: 'poultry',
    engine: { kind: 'oven', food: 'breast' },
    tempF: 375,
    minutes: 16,
    flipAt: 8,
    internalF: 165,
    sizes: [
      { id: 'small', minutes: 13 },
      { id: 'medium', minutes: 16 },
      { id: 'large', minutes: 20 },
    ],
  },
  {
    slug: 'chicken-wings',
    category: 'poultry',
    engine: { kind: 'oven', food: 'wings' },
    tempF: 400,
    minutes: 22,
    flipAt: 11,
    internalF: 165,
    sizes: [
      { id: 'small', minutes: 18 },
      { id: 'medium', minutes: 22 },
      { id: 'large', minutes: 26 },
    ],
  },
  {
    slug: 'chicken-thighs',
    category: 'poultry',
    engine: { kind: 'oven', food: 'thigh' },
    tempF: 380,
    minutes: 24,
    flipAt: 12,
    internalF: 165,
    sizes: [
      { id: 'small', minutes: 20 },
      { id: 'medium', minutes: 24 },
      { id: 'large', minutes: 28 },
    ],
  },
  {
    slug: 'salmon',
    category: 'fish',
    engine: { kind: 'oven', food: 'fish' },
    tempF: 390,
    minutes: 9,
    internalF: 145,
    sizes: [
      { id: 'thin', minutes: 7 },
      { id: 'medium', minutes: 9 },
      { id: 'thick', minutes: 12 },
    ],
  },
  {
    slug: 'bacon',
    category: 'meat',
    engine: { kind: 'oven', food: 'bacon' },
    tempF: 350,
    minutes: 9,
    doneBy: 'crisp',
    sizes: [
      { id: 'thin', minutes: 7 },
      { id: 'medium', minutes: 9 },
      { id: 'thick', minutes: 13 },
    ],
  },
  {
    slug: 'steak',
    category: 'meat',
    engine: { kind: 'oven', food: 'steak' },
    tempF: 400,
    minutes: 10,
    flipAt: 5,
    internalF: 130,
    sizes: [
      { id: 'thin', minutes: 7 },
      { id: 'medium', minutes: 10 },
      { id: 'thick', minutes: 14 },
    ],
  },
  {
    slug: 'pork-chops',
    category: 'meat',
    engine: { kind: 'oven', food: 'steak' },
    tempF: 400,
    minutes: 12,
    flipAt: 6,
    internalF: 145,
    sizes: [
      { id: 'thin', minutes: 8 },
      { id: 'medium', minutes: 12 },
      { id: 'thick', minutes: 16 },
    ],
  },
  {
    slug: 'shrimp',
    category: 'fish',
    engine: { kind: 'oven', food: 'fish' },
    tempF: 400,
    minutes: 7,
    shakes: 1,
    internalF: 145,
    sizes: [
      { id: 'small', minutes: 5 },
      { id: 'medium', minutes: 7 },
      { id: 'large', minutes: 9 },
    ],
  },
  {
    slug: 'baked-potato',
    category: 'veg',
    engine: { kind: 'oven', food: 'veg' },
    tempF: 400,
    minutes: 40,
    flipAt: 20,
    internalF: 205,
    sizes: [
      { id: 'small', minutes: 32 },
      { id: 'medium', minutes: 40 },
      { id: 'large', minutes: 50 },
    ],
  },
  {
    slug: 'homemade-fries',
    category: 'veg',
    engine: { kind: 'oven', food: 'fries' },
    tempF: 380,
    minutes: 18,
    shakes: 2,
    sizes: [
      { id: 'thin', minutes: 14 },
      { id: 'medium', minutes: 18 },
      { id: 'thick', minutes: 22 },
    ],
  },
] as const satisfies readonly FoodPreset[];

export type PresetSlug = (typeof PRESETS)[number]['slug'];

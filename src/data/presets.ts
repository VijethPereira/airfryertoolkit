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
  /**
   * 'reheat': the engine converts an oven *cooking* recipe and misses reheats (2026-10-27
   * measurement, 10.6 A1), so the oven reheat setting is stored here — the one exception to
   * "equivalents are derived, never stored". Fan-oven and sizing equivalents still derive from it.
   */
  engine:
    | { kind: 'oven'; food: FoodKey }
    | { kind: 'frozen'; food: FrozenFoodKey }
    | { kind: 'reheat'; food: FoodKey; ovenF: number; ovenMinutes: number };
  /** Air fryer setting for the medium/standard portion. */
  tempF: number;
  minutes: number;
  flipAt?: number;
  shakes?: number;
  /** Safe or target internal temperature, °F. */
  internalF?: number;
  /**
   * A second internal temperature shown under the main one (chicken sausages, the drumstick
   * texture range). Display only: the engine, converter, answer line and JSON-LD use internalF.
   * The page's dictionary `internalAltLine` says what it means.
   */
  internalAlt?: { f: number; toF?: number };
  /**
   * Frozen presets: the fully cooked version of a raw product (pre-cooked or sauced wings).
   * Heat-through setting for the copy ({PRE_F}, {PRE_C}, {PRE_MIN}); no raw warning applies to it.
   */
  precooked?: { tempF: number; minutes: number };
  /** Doneness is judged by eye instead of a thermometer (bacon), or by a toothpick (muffins, brownies, cookies). */
  doneBy?: 'crisp' | 'toothpick';
  /** Reheat presets: the slug of the fresh (or frozen) version, listed first among the related presets. */
  fresh?: string;
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
  {
    slug: 'chicken-drumsticks',
    category: 'poultry',
    engine: { kind: 'oven', food: 'thigh' },
    tempF: 380,
    minutes: 22,
    flipAt: 11,
    internalF: 165,
    internalAlt: { f: 175, toF: 185 },
    sizes: [
      { id: 'small', minutes: 18 },
      { id: 'medium', minutes: 22 },
      { id: 'large', minutes: 26 },
    ],
  },
  {
    slug: 'chicken-tenders',
    category: 'poultry',
    engine: { kind: 'oven', food: 'breast' },
    tempF: 400,
    minutes: 10,
    flipAt: 5,
    internalF: 165,
    sizes: [
      { id: 'small', minutes: 8 },
      { id: 'medium', minutes: 10 },
      { id: 'large', minutes: 12 },
    ],
  },
  {
    slug: 'sausages',
    category: 'meat',
    engine: { kind: 'oven', food: 'thigh' },
    tempF: 370,
    minutes: 12,
    flipAt: 6,
    internalF: 160,
    internalAlt: { f: 165 },
    sizes: [
      { id: 'thin', minutes: 8 },
      { id: 'medium', minutes: 12 },
      { id: 'thick', minutes: 16 },
    ],
  },
  {
    slug: 'burgers',
    category: 'meat',
    engine: { kind: 'oven', food: 'steak' },
    tempF: 375,
    minutes: 10,
    flipAt: 5,
    internalF: 160,
    sizes: [
      { id: 'thin', minutes: 8 },
      { id: 'medium', minutes: 10 },
      { id: 'thick', minutes: 14 },
    ],
  },
  {
    slug: 'pork-tenderloin',
    category: 'meat',
    engine: { kind: 'oven', food: 'steak' },
    tempF: 400,
    minutes: 20,
    flipAt: 10,
    internalF: 145,
    sizes: [
      { id: 'small', minutes: 16 },
      { id: 'medium', minutes: 20 },
      { id: 'large', minutes: 24 },
    ],
  },
  {
    slug: 'white-fish',
    category: 'fish',
    engine: { kind: 'oven', food: 'fish' },
    tempF: 400,
    minutes: 10,
    internalF: 145,
    sizes: [
      { id: 'thin', minutes: 7 },
      { id: 'medium', minutes: 10 },
      { id: 'thick', minutes: 13 },
    ],
  },
  {
    slug: 'broccoli',
    category: 'veg',
    engine: { kind: 'oven', food: 'veg' },
    tempF: 375,
    minutes: 8,
    shakes: 1,
    sizes: [
      { id: 'small', minutes: 6 },
      { id: 'medium', minutes: 8 },
      { id: 'large', minutes: 10 },
    ],
  },
  {
    slug: 'brussels-sprouts',
    category: 'veg',
    engine: { kind: 'oven', food: 'veg' },
    tempF: 375,
    minutes: 15,
    shakes: 2,
    sizes: [
      { id: 'small', minutes: 12 },
      { id: 'medium', minutes: 15 },
      { id: 'large', minutes: 18 },
    ],
  },
  {
    slug: 'sweet-potato-fries',
    category: 'veg',
    engine: { kind: 'oven', food: 'fries' },
    tempF: 375,
    minutes: 16,
    shakes: 2,
    sizes: [
      { id: 'thin', minutes: 12 },
      { id: 'medium', minutes: 16 },
      { id: 'thick', minutes: 20 },
    ],
  },
  {
    slug: 'potato-wedges',
    category: 'veg',
    engine: { kind: 'oven', food: 'fries' },
    tempF: 390,
    minutes: 20,
    shakes: 1,
    sizes: [
      { id: 'small', minutes: 16 },
      { id: 'medium', minutes: 20 },
      { id: 'large', minutes: 25 },
    ],
  },
  {
    slug: 'frozen-fries',
    category: 'frozen',
    engine: { kind: 'frozen', food: 'fries' },
    tempF: 400,
    minutes: 15,
    doneBy: 'crisp',
    sizes: [
      { id: 'thin', minutes: 11 },
      { id: 'medium', minutes: 15 },
      { id: 'thick', minutes: 19 },
    ],
  },
  {
    slug: 'frozen-chicken-wings',
    category: 'frozen',
    engine: { kind: 'frozen', food: 'wings' },
    tempF: 390,
    minutes: 26,
    precooked: { tempF: 380, minutes: 12 },
    sizes: [
      { id: 'small', minutes: 22 },
      { id: 'medium', minutes: 26 },
      { id: 'large', minutes: 30 },
    ],
  },
  {
    slug: 'frozen-chicken-breast',
    category: 'frozen',
    engine: { kind: 'frozen', food: 'rawChicken' },
    tempF: 360,
    minutes: 24,
    sizes: [
      { id: 'small', minutes: 20 },
      { id: 'medium', minutes: 24 },
      { id: 'large', minutes: 30 },
    ],
  },
  {
    slug: 'frozen-chicken-nuggets',
    category: 'frozen',
    engine: { kind: 'frozen', food: 'nuggets' },
    tempF: 400,
    minutes: 10,
    sizes: [
      { id: 'small', minutes: 8 },
      { id: 'medium', minutes: 10 },
      { id: 'large', minutes: 12 },
    ],
  },
  {
    slug: 'frozen-tater-tots',
    category: 'frozen',
    engine: { kind: 'frozen', food: 'hashBrowns' },
    tempF: 400,
    minutes: 14,
    // Tots tumble like fries: shake twice, not the hash-brown flip.
    shakes: 2,
    doneBy: 'crisp',
    sizes: [
      { id: 'small', minutes: 12 },
      { id: 'medium', minutes: 14 },
      { id: 'large', minutes: 16 },
    ],
  },
  {
    slug: 'frozen-pizza',
    category: 'frozen',
    engine: { kind: 'frozen', food: 'pizza' },
    tempF: 380,
    minutes: 9,
    doneBy: 'crisp',
    sizes: [
      { id: 'small', minutes: 6 },
      { id: 'medium', minutes: 9 },
      { id: 'large', minutes: 12 },
    ],
  },
  {
    slug: 'frozen-fish-sticks',
    category: 'frozen',
    engine: { kind: 'frozen', food: 'fish' },
    tempF: 400,
    minutes: 10,
    sizes: [
      { id: 'small', minutes: 8 },
      { id: 'medium', minutes: 10 },
      { id: 'large', minutes: 14 },
    ],
  },
  {
    slug: 'frozen-chicken-tenders',
    category: 'frozen',
    engine: { kind: 'frozen', food: 'tenders' },
    tempF: 400,
    minutes: 12,
    sizes: [
      { id: 'small', minutes: 10 },
      { id: 'medium', minutes: 12 },
      { id: 'large', minutes: 15 },
    ],
  },
  {
    slug: 'frozen-hash-browns',
    category: 'frozen',
    engine: { kind: 'frozen', food: 'hashBrowns' },
    tempF: 400,
    minutes: 12,
    doneBy: 'crisp',
    sizes: [
      { id: 'small', minutes: 10 },
      { id: 'medium', minutes: 12 },
      { id: 'large', minutes: 15 },
    ],
  },
  {
    slug: 'frozen-egg-rolls',
    category: 'frozen',
    engine: { kind: 'frozen', food: 'springRolls' },
    tempF: 390,
    minutes: 11,
    doneBy: 'crisp',
    sizes: [
      { id: 'small', minutes: 8 },
      { id: 'medium', minutes: 11 },
      { id: 'large', minutes: 13 },
    ],
  },
  {
    slug: 'reheat-pizza',
    category: 'reheat',
    engine: { kind: 'reheat', food: 'pizza', ovenF: 375, ovenMinutes: 10 },
    tempF: 350,
    minutes: 4,
    doneBy: 'crisp',
    fresh: 'frozen-pizza',
    sizes: [
      { id: 'thin', minutes: 3 },
      { id: 'medium', minutes: 4 },
      { id: 'thick', minutes: 6 },
    ],
  },
  {
    slug: 'reheat-fries',
    category: 'reheat',
    engine: { kind: 'reheat', food: 'fries', ovenF: 400, ovenMinutes: 9 },
    tempF: 375,
    minutes: 4,
    shakes: 1,
    doneBy: 'crisp',
    fresh: 'homemade-fries',
    sizes: [
      { id: 'small', minutes: 3 },
      { id: 'medium', minutes: 4 },
      { id: 'large', minutes: 6 },
    ],
  },
  {
    slug: 'reheat-fried-chicken',
    category: 'reheat',
    engine: { kind: 'reheat', food: 'thigh', ovenF: 375, ovenMinutes: 20 },
    tempF: 375,
    minutes: 8,
    flipAt: 4,
    internalF: 165,
    fresh: 'chicken-thighs',
    sizes: [
      { id: 'small', minutes: 6 },
      { id: 'medium', minutes: 8 },
      { id: 'large', minutes: 11 },
    ],
  },
  {
    slug: 'reheat-wings',
    category: 'reheat',
    engine: { kind: 'reheat', food: 'wings', ovenF: 375, ovenMinutes: 10 },
    tempF: 375,
    minutes: 5,
    shakes: 1,
    internalF: 165,
    fresh: 'chicken-wings',
    sizes: [
      { id: 'small', minutes: 4 },
      { id: 'medium', minutes: 5 },
      { id: 'large', minutes: 7 },
    ],
  },
  {
    slug: 'reheat-steak',
    category: 'reheat',
    engine: { kind: 'reheat', food: 'steak', ovenF: 275, ovenMinutes: 30 },
    tempF: 300,
    // An estimate for a 1-inch steak from the fridge to 165°F, not a tested time: the copy says to start checking at the flip.
    minutes: 8,
    flipAt: 4,
    internalF: 165,
    internalAlt: { f: 110, toF: 120 },
    fresh: 'steak',
    sizes: [
      { id: 'thin', minutes: 4 },
      { id: 'medium', minutes: 8 },
      { id: 'thick', minutes: 11 },
    ],
  },
  {
    slug: 'cookies',
    category: 'baked',
    engine: { kind: 'oven', food: 'baked' },
    tempF: 325,
    minutes: 8,
    doneBy: 'toothpick',
    sizes: [
      { id: 'small', minutes: 6 },
      { id: 'medium', minutes: 8 },
      { id: 'large', minutes: 10 },
    ],
  },
  {
    slug: 'muffins',
    category: 'baked',
    engine: { kind: 'oven', food: 'baked' },
    tempF: 325,
    minutes: 15,
    doneBy: 'toothpick',
    sizes: [
      { id: 'small', minutes: 8 },
      { id: 'medium', minutes: 15 },
      { id: 'large', minutes: 20 },
    ],
  },
  {
    slug: 'brownies',
    category: 'baked',
    engine: { kind: 'oven', food: 'baked' },
    tempF: 325,
    minutes: 22,
    doneBy: 'toothpick',
    sizes: [
      { id: 'small', minutes: 18 },
      { id: 'medium', minutes: 22 },
      { id: 'thick', minutes: 26 },
    ],
  },
  {
    slug: 'garlic-bread',
    category: 'baked',
    engine: { kind: 'oven', food: 'pizza' },
    tempF: 375,
    minutes: 6,
    doneBy: 'crisp',
    sizes: [
      { id: 'thin', minutes: 4 },
      { id: 'medium', minutes: 6 },
      { id: 'thick', minutes: 8 },
    ],
  },
  {
    slug: 'corn-on-the-cob',
    category: 'veg',
    engine: { kind: 'oven', food: 'veg' },
    tempF: 400,
    minutes: 12,
    flipAt: 6,
    sizes: [
      { id: 'small', minutes: 10 },
      { id: 'medium', minutes: 12 },
      { id: 'large', minutes: 15 },
    ],
  },
  {
    slug: 'frozen-vegetables',
    category: 'frozen',
    engine: { kind: 'frozen', food: 'veg' },
    tempF: 400,
    minutes: 12,
    sizes: [
      { id: 'small', minutes: 10 },
      { id: 'medium', minutes: 12 },
      { id: 'large', minutes: 15 },
    ],
  },
] as const satisfies readonly FoodPreset[];

export type PresetSlug = (typeof PRESETS)[number]['slug'];

/**
 * Preheat guidance (row 15, /preheat). Numbers, page references and source URLs only: all prose
 * lives in src/i18n/dictionaries/preheat/{locale}.ts.
 *
 * Every entry is what the model's own document says about preheating, read on `read`, with the PDF
 * page (as the PDF viewer numbers it, not the printed folio). Nothing is estimated: a model whose
 * document gives no minutes has no minutes here.
 *
 * The site-wide default (a basket with no stated time) is the longer of Cosori's two preheat
 * charts at each temperature (src/lib/preheat.ts). Both charts are stored as printed.
 */

const READ = '2026-11-09';
const NINJA_READ = '2026-10-28, page not recorded';

export interface PreheatChartRow {
  /** Inclusive °F range, as printed. */
  minF: number;
  maxF: number;
  minutes: number;
}

export interface PreheatChart {
  /** The model whose manual prints the chart (src/data/models.ts id; the manual is that model's `source`). */
  modelId: string;
  page: number;
  read: string;
  /** Ascending by temperature. */
  rows: PreheatChartRow[];
}

/** Cosori's two printed charts: the Preheat button sets the time from the temperature. */
export const PREHEAT_CHARTS: PreheatChart[] = [
  {
    // "We recommend preheating before placing food inside the air fryer ... Food will not cook thoroughly without preheating."
    modelId: 'cosori-pro-le-5', page: 10, read: READ,
    rows: [
      { minF: 170, maxF: 280, minutes: 2 },
      { minF: 290, maxF: 390, minutes: 3 },
      { minF: 400, maxF: 450, minutes: 4 },
    ],
  },
  {
    // Same recommendation; "the time will automatically adjust based on the chart below".
    modelId: 'cosori-turboblaze-6', page: 12, read: READ,
    rows: [
      { minF: 170, maxF: 235, minutes: 2 },
      { minF: 240, maxF: 340, minutes: 3 },
      { minF: 345, maxF: 450, minutes: 4 },
    ],
  },
];

/**
 * What a model's document says:
 * - `chart`: it prints a preheat chart (PREHEAT_CHARTS);
 * - `fixed`: it gives one preheat setting (temperature and minutes);
 * - `auto`: preheating is built into the cooking programs and the unit signals when to add food; no minutes given;
 * - `none`: the document says the unit needs no preheat;
 * - `notMentioned`: the document was read and does not mention preheating;
 * - `notReread`: the document was not re-read for this page (no copy on file), so nothing is claimed.
 */
export type PreheatKind = 'chart' | 'fixed' | 'auto' | 'none' | 'notMentioned' | 'notReread';
export type PreheatDocType = 'manual' | 'specSheet' | 'productPage' | 'ownersGuide';
/** Programs a document names as preheating, or as skipping the preheat. */
export type PreheatProgram = 'airFry' | 'roast' | 'bake' | 'broil' | 'pizza' | 'reheat' | 'dehydrate';

export interface ModelPreheat {
  modelId: string;
  kind: PreheatKind;
  docType: PreheatDocType;
  /** The document read, when it is not the model's `source` in models.ts. */
  source?: string;
  /** PDF pages that say it; empty for a product page or a document not re-read. */
  pages: number[];
  read: string | null;
  fixed?: { tempF: number; minutes: number };
  /** `auto`: the programs the document says preheat and then signal Add Food (omitted: it says every program but `skips`). */
  programs?: PreheatProgram[];
  /** `auto`: programs the document's function table marks as not preheating. */
  skips?: PreheatProgram[];
  /** `auto`: the preheat can be switched off or skipped. */
  skippable?: true;
}

const instant = (modelId: string, pages: number[], programs: PreheatProgram[]): ModelPreheat =>
  ({ modelId, kind: 'auto', docType: 'manual', pages, read: READ, programs });

export const MODEL_PREHEAT: ModelPreheat[] = [
  // Ninja: owner's guides read 2026-10-28 (manuals/ninja/). AF101 p7: "recommended to let the unit preheat for 3 minutes". AF141 p3: "3 MIN Preheat ... always preheat ... for 3 minutes". AF161 p8 (Air Fry): "For best results, let the unit preheat for 3 minutes". SL401: no preheat mentioned. SP101: Air Fry, Roast, Grill, Bake, Dehydrate preheat automatically (PRE flashes, timer starts after preheat).
  { modelId: 'ninja-af101', kind: 'fixed', docType: 'ownersGuide', pages: [7], read: NINJA_READ, fixed: { tempF: 400, minutes: 3 } },
  { modelId: 'ninja-pro-af141', kind: 'fixed', docType: 'ownersGuide', pages: [3], read: NINJA_READ, fixed: { tempF: 400, minutes: 3 } },
  { modelId: 'ninja-max-xl-af161', kind: 'fixed', docType: 'ownersGuide', pages: [8], read: NINJA_READ, fixed: { tempF: 400, minutes: 3 } },
  { modelId: 'ninja-doublestack-sl401', kind: 'none', docType: 'ownersGuide', pages: [], read: NINJA_READ },
  { modelId: 'ninja-foodi-oven-sp101', kind: 'auto', docType: 'ownersGuide', pages: [10, 11, 12, 13, 15], read: NINJA_READ, programs: ['airFry', 'roast', 'bake', 'broil', 'pizza', 'dehydrate'] },

  // Cosori
  { modelId: 'cosori-pro-le-5', kind: 'chart', docType: 'manual', pages: [10], read: READ },
  { modelId: 'cosori-turboblaze-6', kind: 'chart', docType: 'manual', pages: [12], read: READ },
  // "To preheat, tap AIR FRY, adjust temperature to 450°F and time to 4 minutes".
  { modelId: 'cosori-stainless-6-5', kind: 'fixed', docType: 'manual', pages: [8], read: READ, fixed: { tempF: 450, minutes: 4 } },
  { modelId: 'cosori-lite-2-1', kind: 'notMentioned', docType: 'manual', pages: [], read: READ },
  { modelId: 'cosori-twinfry-9', kind: 'notMentioned', docType: 'manual', pages: [], read: READ },
  // Function table: Preheat "Yes" for every function but Dehydrate; it can be added or removed; "Add Food" when done.
  { modelId: 'cosori-dual-basket-9', kind: 'auto', docType: 'manual', pages: [12, 13], read: READ, skips: ['dehydrate'], skippable: true },
  // "Preheating is automatically included in the Air Fry, Roast, Bake, and Pizza cooking functions"; tap to skip.
  { modelId: 'cosori-oven-13', kind: 'auto', docType: 'manual', pages: [11, 16], read: READ, programs: ['airFry', 'roast', 'bake', 'pizza'], skippable: true },

  // Philips: only the HD9650 spec sheet says anything ("Instant on/no pre-heat"). The other sources are
  // product pages and spec sheets that do not mention preheating; the HD9650 line is not carried over to them.
  ...['philips-1000-na110', 'philips-2000-na220', 'philips-2000-na230', 'philips-3000-dual-na351', 'philips-5000-dual-na555'].map(
    (modelId): ModelPreheat => ({ modelId, kind: 'notMentioned', docType: 'productPage', pages: [], read: READ }),
  ),
  { modelId: 'philips-3000-dual-na350', kind: 'notMentioned', docType: 'specSheet', pages: [], read: READ },
  { modelId: 'philips-5000-xxl-hd9285', kind: 'notMentioned', docType: 'specSheet', pages: [], read: READ },
  { modelId: 'philips-premium-xxl-hd9650', kind: 'none', docType: 'specSheet', pages: [3], read: READ },

  // Instant: Air Fry, Roast and Bake (Broil too on the newer manuals) preheat, then show Add Food.
  instant('instant-vortex-plus-6-clearcook', [16], ['airFry', 'roast', 'bake']),
  instant('instant-vortex-plus-6', [15, 16], ['airFry', 'roast', 'bake']),
  instant('instant-vortex-plus-6-odorerase', [17, 18], ['airFry', 'roast', 'bake', 'broil']),
  instant('instant-vortex-plus-4', [16], ['airFry', 'roast', 'bake', 'broil']),
  instant('instant-vortex-5-7', [15, 16], ['airFry', 'roast', 'bake']),
  instant('instant-vortex-6', [15, 16], ['airFry', 'roast', 'bake']),
  instant('instant-vortex-slim-6', [16], ['airFry', 'roast', 'bake']),
  instant('instant-vortex-slim-chef-6', [16], ['airFry', 'roast', 'bake']),
  instant('instant-vortex-mini-4', [11, 18, 19], ['airFry', 'roast', 'bake', 'broil']),
  instant('instant-vortex-plus-dual-8', [15, 16], ['airFry', 'roast', 'bake', 'broil']),
  instant('instant-vortex-xl-versazone-9', [16, 17, 19], ['airFry', 'roast', 'bake', 'broil']),
];

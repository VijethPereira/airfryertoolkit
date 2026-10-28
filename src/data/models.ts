/**
 * Air fryer models with a sourced maximum temperature (rows 10 and 11). Numbers and source
 * URLs only: names of functions, notes and all prose live in src/i18n/dictionaries/brands/en.ts.
 *
 * Every number is as the manufacturer's manual or spec page states it, read on `sourced`.
 * `maxF` is the air-fry function's maximum (what the converter clamps to, floored to the 5°F
 * dial step by the engine); a higher limit on another function (broil, Max Crisp) goes in
 * `otherMax` and the engine never uses it. A source that states °C keeps `tempUnit: 'C'` and
 * its °F equivalent unrounded (200°C -> 392°F), so the table can show it as the source does.
 * Unsourced models are left out.
 */

export type BrandKey = 'ninja' | 'cosori' | 'philips' | 'instant';
export type ModelType = 'basket' | 'oven-style' | 'dual-zone' | 'toaster-oven';
export type PreheatMode = 'auto' | 'manual' | 'none' | 'unknown';
export type OtherMaxLabel = 'broil' | 'maxCrisp';
export type ProgramKey = 'airFry' | 'roast' | 'bake' | 'broil' | 'reheat' | 'dehydrate' | 'frozen' | 'proof' | 'preheat';

export interface ModelProgram {
  key: ProgramKey;
  defaultF: number;
  minF: number;
  maxF: number;
}

export interface FryerModel {
  id: string;
  brand: BrandKey;
  /** The model number as printed on the source (the display name is in the dictionary). */
  modelNumber: string;
  type: ModelType;
  /** Capacity in the unit the source states; the other unit is derived. null: the source gives no volume. */
  capacity: { qt: number } | { L: number } | null;
  /** The source's "capacity" is a food load (kg), not a volume: shown as "—" with a note. */
  capacityIsFoodLoad?: true;
  /** Air-fry maximum, °F (°C sources converted exactly, not rounded to the dial). */
  maxF: number;
  /** Lowest setting on any function, °F; null when the source doesn't state one. */
  minF: number | null;
  /** The unit the source states temperatures in. */
  tempUnit: 'F' | 'C';
  otherMax?: { f: number; label: OtherMaxLabel };
  /** `maxF` is the function's default setting; the source states no maximum (a default cannot exceed it). */
  maxIsDefault?: true;
  preheat: PreheatMode;
  /** Built-in programs as the manual's program table lists them (only where the table is unambiguous). */
  programs?: ModelProgram[];
  /** Manufacturer manual or spec page. */
  source: string;
  /** Date the source was read (YYYY-MM-DD). */
  sourced: string;
}

const C = (c: number) => (c * 9) / 5 + 32;
const COSORI = 'https://cosori.com/cdn/shop/files/';
const INSTANT = 'https://p.widencdn.net/';
const NINJA = 'https://support.sharkninja.com/article/';
const READ = '2026-10-28';

export const MODELS: FryerModel[] = [
  // Ninja — owner's guides and quick start guides on support.sharkninja.com (the article page, not the PDF host).
  // DZ201, DZ401 and DZ550 are left out: neither their owner's guides nor their quick start guides
  // state an Air Fry maximum (only chart settings and probe doneness targets).
  { id: 'ninja-af101', brand: 'ninja', modelNumber: 'AF101', type: 'basket', capacity: null, maxF: 400, minF: null, tempUnit: 'F', preheat: 'manual', source: `${NINJA}AF100-Series-Ninja-Air-Fryer-Owner-s-Guide`, sourced: READ },
  // "The max temperature is 400°F for all functions", Max Crisp included.
  { id: 'ninja-pro-af141', brand: 'ninja', modelNumber: 'AF141', type: 'basket', capacity: null, maxF: 400, minF: null, tempUnit: 'F', preheat: 'manual', source: `${NINJA}AF140-Series-Ninja-Air-Fryer-Pro-3-in-1-Owner-s-Guide`, sourced: READ },
  // "450°F for Max Crisp and Air Broil ... 400°F for all other functions"; Max Crisp cannot be adjusted.
  { id: 'ninja-max-xl-af161', brand: 'ninja', modelNumber: 'AF161', type: 'basket', capacity: null, maxF: 400, minF: null, tempUnit: 'F', otherMax: { f: 450, label: 'maxCrisp' }, preheat: 'manual', source: `${NINJA}AF160-Series-Ninja-Air-Fryer-Max-XL-Owner-s-Guide`, sourced: READ },
  // Quick start guide: Air Fry defaults to 450°F, "full 10-qt cooking capacity". Owner's guide: "does not need to preheat".
  // Source note: default setting, max not stated.
  { id: 'ninja-doublestack-sl401', brand: 'ninja', modelNumber: 'SL401', type: 'dual-zone', capacity: { qt: 10 }, maxF: 450, maxIsDefault: true, minF: null, tempUnit: 'F', preheat: 'none', source: `${NINJA}SL401-Series-Ninja-DoubleStack-XL-10-QT-2-Basket-Air-Fryer-Quick-Start-Guide`, sourced: READ },
  // Air Fry, Air Roast and Bake 250–450°F; Dehydrate 105–195°F; PRE flashes while it preheats.
  { id: 'ninja-foodi-oven-sp101', brand: 'ninja', modelNumber: 'SP101', type: 'toaster-oven', capacity: null, maxF: 450, minF: 105, tempUnit: 'F', preheat: 'auto', source: `${NINJA}SP100-Series-Ninja-Foodi-Digital-Air-Fry-Oven-Owner-s-Guide`, sourced: READ },
  // Cosori — cosori.com/pages/user-manuals
  { id: 'cosori-pro-le-5', brand: 'cosori', modelNumber: 'CAF-L501-KUS', type: 'basket', capacity: { qt: 5.0 }, maxF: 450, minF: 170, tempUnit: 'F', preheat: 'auto', source: `${COSORI}Pro_LE_manual.pdf`, sourced: READ },
  {
    id: 'cosori-turboblaze-6', brand: 'cosori', modelNumber: 'CAF-DC601-KUS', type: 'basket', capacity: { qt: 6 }, maxF: 450, minF: 90, tempUnit: 'F', preheat: 'auto',
    programs: [
      { key: 'airFry', defaultF: 385, minF: 300, maxF: 450 },
      { key: 'roast', defaultF: 425, minF: 350, maxF: 450 },
      { key: 'broil', defaultF: 450, minF: 425, maxF: 450 },
      { key: 'frozen', defaultF: 390, minF: 300, maxF: 450 },
      { key: 'reheat', defaultF: 390, minF: 300, maxF: 425 },
      { key: 'bake', defaultF: 330, minF: 260, maxF: 400 },
      { key: 'dehydrate', defaultF: 135, minF: 100, maxF: 200 },
      { key: 'proof', defaultF: 90, minF: 90, maxF: 110 },
    ],
    source: `${COSORI}TurboBlaze_Manual_US.pdf`, sourced: READ,
  },
  { id: 'cosori-stainless-6-5', brand: 'cosori', modelNumber: 'CAF-SE601S-CUS', type: 'basket', capacity: { qt: 6.5 }, maxF: 450, minF: 90, tempUnit: 'F', preheat: 'auto', source: `${COSORI}CPDV_2412_CAF-SE601S-CUS_M1__Shake_Reminder__us_Preview_v7.pdf`, sourced: READ },
  { id: 'cosori-lite-2-1', brand: 'cosori', modelNumber: 'CAF-LI211', type: 'basket', capacity: { qt: 2.1 }, maxF: 400, minF: 170, tempUnit: 'F', preheat: 'none', source: `${COSORI}D2_01.00_M1_CAF-LI211_2022-11-29_US_en.pdf`, sourced: READ },
  { id: 'cosori-twinfry-9', brand: 'cosori', modelNumber: 'CAF-TF901-KUS', type: 'dual-zone', capacity: { qt: 9.0 }, maxF: 400, minF: 95, tempUnit: 'F', otherMax: { f: 465, label: 'broil' }, preheat: 'none', source: `${COSORI}6100000107_Air_Fryer_Manual_US_A1-260528.pdf`, sourced: READ },
  { id: 'cosori-dual-basket-9', brand: 'cosori', modelNumber: 'CAF-R901-AUS', type: 'dual-zone', capacity: { qt: 9.0 }, maxF: 450, minF: 95, tempUnit: 'F', preheat: 'auto', source: `${COSORI}CPDV_2308_CAF-R901-AUS_M1_print_en_V7.pdf`, sourced: READ },
  { id: 'cosori-oven-13', brand: 'cosori', modelNumber: 'CAF-R121-SUS', type: 'toaster-oven', capacity: { qt: 13 }, maxF: 450, minF: 90, tempUnit: 'F', preheat: 'auto', source: `${COSORI}D2_01.00_M1_CAF-R121-SUS_2022-11-02_US_en.pdf`, sourced: READ },

  // Philips — usa.philips.com product pages and documents.philips.com spec sheets
  { id: 'philips-1000-na110', brand: 'philips', modelNumber: 'NA110/00', type: 'basket', capacity: { qt: 3.4 }, maxF: 392, minF: null, tempUnit: 'F', preheat: 'unknown', source: 'https://www.usa.philips.com/c-p/NA110_00/1000-series-airfryer-1000-series-32l', sourced: READ },
  { id: 'philips-2000-na220', brand: 'philips', modelNumber: 'NA220/00', type: 'basket', capacity: { L: 4.2 }, maxF: C(200), minF: null, tempUnit: 'C', preheat: 'unknown', source: 'https://www.usa.philips.com/c-p/NA220_00/2000-series-airfryer-2000-series-44qt', sourced: READ },
  { id: 'philips-2000-na230', brand: 'philips', modelNumber: 'NA230/00', type: 'basket', capacity: { L: 6.2 }, maxF: C(200), minF: null, tempUnit: 'C', preheat: 'unknown', source: 'https://www.usa.philips.com/c-p/NA230_00/2000-series-airfryer-2000-series-66qt', sourced: READ },
  { id: 'philips-3000-dual-na351', brand: 'philips', modelNumber: 'NA351/00', type: 'dual-zone', capacity: { L: 9 }, maxF: C(200), minF: null, tempUnit: 'C', preheat: 'unknown', source: 'https://www.usa.philips.com/c-p/NA351_00/3000-series-dual-basket-airfryer', sourced: READ },
  { id: 'philips-3000-dual-na350', brand: 'philips', modelNumber: 'NA350/03', type: 'dual-zone', capacity: { L: 9 }, maxF: C(200), minF: C(40), tempUnit: 'C', preheat: 'unknown', source: 'https://www.documents.philips.com/assets/20240111/dd265518eef34313afe9b0f4006336b3.pdf', sourced: READ },
  { id: 'philips-5000-dual-na555', brand: 'philips', modelNumber: 'NA555/00', type: 'dual-zone', capacity: { qt: 9.6 }, maxF: 400, minF: null, tempUnit: 'F', preheat: 'unknown', source: 'https://www.usa.philips.com/c-p/NA555_00/5000-series', sourced: READ },
  { id: 'philips-premium-xxl-hd9650', brand: 'philips', modelNumber: 'HD9650', type: 'basket', capacity: null, capacityIsFoodLoad: true, maxF: C(200), minF: C(40), tempUnit: 'C', preheat: 'unknown', source: 'https://www.documents.philips.com/assets/20220207/59e4c869c4054da68f53ae350120bc70.pdf', sourced: READ },
  { id: 'philips-5000-xxl-hd9285', brand: 'philips', modelNumber: 'HD9285', type: 'basket', capacity: null, maxF: C(200), minF: C(40), tempUnit: 'C', preheat: 'unknown', source: 'https://www.documents.philips.com/assets/20230118/21a8e3001a6c4cfc937daf8e014f2039.pdf', sourced: READ },

  // Instant — manuals linked from instantpot.com/pages/air-fryer-product-manuals
  {
    id: 'instant-vortex-plus-6-clearcook', brand: 'instant', modelNumber: '140-3088-01', type: 'basket', capacity: { qt: 6 }, maxF: 400, minF: 95, tempUnit: 'F', preheat: 'auto',
    programs: [
      { key: 'airFry', defaultF: 385, minF: 180, maxF: 400 },
      { key: 'roast', defaultF: 380, minF: 180, maxF: 400 },
      { key: 'bake', defaultF: 365, minF: 180, maxF: 400 },
      { key: 'broil', defaultF: 400, minF: 350, maxF: 400 },
      { key: 'reheat', defaultF: 280, minF: 120, maxF: 360 },
      { key: 'dehydrate', defaultF: 130, minF: 95, maxF: 175 },
    ],
    source: `${INSTANT}hq1x3b/140-3088-01_140-3093-01_IB_VortexPlus_6QT_CC_US_Manual_399-1265-03US_R22_FINAL-08-22-2025_LoRes.pdf`, sourced: READ,
  },
  { id: 'instant-vortex-plus-6', brand: 'instant', modelNumber: '140-3006-01', type: 'basket', capacity: { qt: 6 }, maxF: 400, minF: 95, tempUnit: 'F', preheat: 'auto', source: `${INSTANT}3oixts/140-3006-01_IB_VortexPlusAF_6Qt_SS_US_Manual_R10-FINAL-05-21-2024_LoRes.pdf`, sourced: READ },
  { id: 'instant-vortex-plus-6-odorerase', brand: 'instant', modelNumber: '140-3089-01', type: 'basket', capacity: { qt: 6 }, maxF: 400, minF: 95, tempUnit: 'F', preheat: 'auto', source: `${INSTANT}2aqk60/140-3089-01_140-3113-01_IB_Vortex_CC_OE_US_Manual_399-1262-03US_R30-FINAL-06-25-2025_LoRes.pdf`, sourced: READ },
  { id: 'instant-vortex-plus-4', brand: 'instant', modelNumber: '140-3079-01', type: 'basket', capacity: { qt: 4 }, maxF: 400, minF: 95, tempUnit: 'F', preheat: 'auto', source: `${INSTANT}qg3xxt/140-3079-01_VortexPlus_4QT_Manual_US_FINAL_03-05-2024_LoRes.pdf`, sourced: READ },
  { id: 'instant-vortex-5-7', brand: 'instant', modelNumber: '140-3082-01', type: 'basket', capacity: { qt: 5.7 }, maxF: 400, minF: 120, tempUnit: 'F', preheat: 'auto', source: `${INSTANT}8f58el/140-3082-01_IB_Vortex_5-7QT_US_Manual_R7-FINAL-04-05-2024_LoRes.pdf`, sourced: READ },
  { id: 'instant-vortex-6', brand: 'instant', modelNumber: '140-3001-01', type: 'basket', capacity: { qt: 6 }, maxF: 400, minF: 120, tempUnit: 'F', preheat: 'auto', source: `${INSTANT}kzcqav/140-3001-01_140-3040-01_IB_VortexAF_BK_6QT_US_Manual_399-1266-03US_R23-FINAL-07-17-2025_LoRes.pdf`, sourced: READ },
  { id: 'instant-vortex-slim-6', brand: 'instant', modelNumber: '140-3100-01', type: 'basket', capacity: { qt: 6 }, maxF: 400, minF: 120, tempUnit: 'F', preheat: 'auto', source: `${INSTANT}njr1v7/140-3100-01_IB_Vortex_Slim_6QT_US_Manual_R27-FINAL-04-19-2024_LoRes.pdf`, sourced: READ },
  { id: 'instant-vortex-slim-chef-6', brand: 'instant', modelNumber: '140-3155-01', type: 'basket', capacity: { qt: 6 }, maxF: 400, minF: 120, tempUnit: 'F', preheat: 'auto', source: `${INSTANT}1eaiaz/140-3155-01_IB_VortexSlimCHEF_6QT_WM_US_Manual_R9-FINAL-04-15-2024_LoRes.pdf`, sourced: READ },
  { id: 'instant-vortex-mini-4', brand: 'instant', modelNumber: '140-3221-01', type: 'basket', capacity: { qt: 4 }, maxF: 400, minF: 105, tempUnit: 'F', preheat: 'auto', source: `${INSTANT}yf36cj/140-3221-01_140-3230-01_140-3231-01_140-3232-01_140-3233-01_VortexMini_4QT_Manual_399-1475-03US_R16_FINAL-09-12-2025_LoRes.pdf`, sourced: READ },
  { id: 'instant-vortex-plus-dual-8', brand: 'instant', modelNumber: '140-3090-01', type: 'dual-zone', capacity: { qt: 8 }, maxF: 400, minF: 95, tempUnit: 'F', otherMax: { f: 450, label: 'broil' }, preheat: 'auto', source: `${INSTANT}m5r6us/140-3090-01_140-3118-01_IB_VortexPlus_8QT_DualAirFry_US_Manual_FINAL_04-29-2024_LoRes.pdf`, sourced: READ },
  { id: 'instant-vortex-xl-versazone-9', brand: 'instant', modelNumber: '140-3092-01', type: 'dual-zone', capacity: { qt: 9 }, maxF: 400, minF: 95, tempUnit: 'F', otherMax: { f: 450, label: 'broil' }, preheat: 'auto', source: `${INSTANT}iutvk3/140-3092-01_IB_Vortex%20XL_VersaZone_9QT_MANUAL_US_R15-FINAL-03-20-2024_LoRes.pdf`, sourced: READ },
];

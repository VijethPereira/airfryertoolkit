import type { PreheatCopy } from '../../types';
import type { PreheatDocType, PreheatKind, PreheatProgram } from '../../../data/preheat';
import type { BrandKey } from '../../../data/models';

const preheat: PreheatCopy = {
  metaTitle: 'How Long to Preheat an Air Fryer (by Temperature and Model)',
  metaDescription:
    'Preheat time by the temperature you set, from Cosori’s printed charts, and what each Cosori, Instant, Philips and Ninja manual says. Oven-style units preheat themselves.',
  metaKeywords: 'how long to preheat air fryer, do you need to preheat an air fryer, should you preheat an air fryer, cosori air fryer preheat, instant vortex preheat, ninja air fryer preheat, philips air fryer preheat',
  heading: 'How Long to Preheat an Air Fryer',
  intro:
    'Enter the temperature you are about to cook at. The answer comes from the preheat charts Cosori prints in its manuals, and it changes with the setting.',
  widgetLabel: 'Preheat time',
  temperature: 'Set temperature',
  style: 'Air fryer type',
  basket: 'Basket',
  ovenStyle: 'Oven-style',
  answerLabel: 'Preheat',
  answerBasket: 'Preheat for {MIN} minutes at {TEMP}, then add the food.',
  answerOvenStyle: 'Oven-style units preheat on their own: start the program and add the food when it signals.',
  answerOutOfRange: 'The preheat charts cover {MIN_F}–{MAX_F}°F ({MIN_C}–{MAX_C}°C); outside that, no manual gives a time.',
  answerInvalid: 'Enter a temperature.',
  sourceBasket: 'The longer of Cosori’s two charts at this setting: Pro LE {PRO} min, TurboBlaze {TB} min.',
  sourceOvenStyle: 'Every oven-style manual read for this page builds the preheat into its programs and states no time.',
  leadHeading: 'Preheat time is not one number',
  leadBody:
    'Most advice gives one figure for every recipe. The two Cosori manuals that print a preheat chart both tie it to the temperature: {PRE_MIN} minutes at the bottom of the dial and {PRE_MAX} at the top. The same manuals say why it matters: “Food will not cook thoroughly without preheating.” The times in this site’s converter and presets assume the basket is already hot, so a cold start runs long.',
  defaultHeading: 'The default by temperature',
  defaultBody:
    'The Pro LE and TurboBlaze charts disagree in two bands. At {EX_F}°F ({EX_C}°C) the Pro LE says {EX_PRO} minutes and the TurboBlaze {EX_TB}; lower down, at {EX2_F}°F ({EX2_C}°C), they say {EX2_PRO} and {EX2_TB}. Where they differ, this page takes the longer of the two, so the basket is never short of heat. Below {MIN_F}°F or above {MAX_F}°F neither chart has a row, and the tool says so instead of guessing. Any basket whose manual gives no time gets this default.',
  chartsHeading: 'Cosori’s two charts, as printed',
  chartsBody:
    'Both sit next to the instructions for the Preheat button: pressing it fills in the time for the chosen temperature, and the air fryer beeps when it is done. None of the other manuals read for this page prints one.',
  chartCaption: 'Cosori {MODEL} manual, page {PAGE}',
  tableTemp: 'Temperature',
  tableMinutes: 'Minutes',
  styleHeading: 'Basket vs oven-style',
  styleBody:
    'Oven-style units handle it themselves. Cosori’s air fryer oven includes a preheat in Air Fry, Roast, Bake and Pizza, and every Instant Vortex manual read here does the same on Air Fry, Roast and Bake: the display shows Add Food when it is ready. None states a time, so wait for the signal, not a stopwatch. Some baskets work this way too: Cosori’s dual-basket model preheats on every function except Dehydrate, and the step can be switched off. Philips is the outlier. Its Premium XXL spec sheet lists “Instant on/no pre-heat”.',
  skipHeading: 'When to skip it',
  skipBody:
    'Cosori’s wording is a good rule: preheat “unless your air fryer is already hot”. A second batch straight after the first goes in without waiting. Bacon renders its own fat and starts well in a cold basket. If you skip it for food that wants a hot start, such as breaded fish or frozen pizza, add a minute or two and check early.',
  relatedHeading: 'Related',
  relatedFlagshipLink: 'Oven to air fryer converter',
  relatedCostLink: 'Air fryer vs oven running cost',
  relatedPresetsLink: 'Air fryer cooking presets',
  faqHeading: 'Frequently asked questions',
  faqs: [
    {
      q: 'How long should you preheat an air fryer?',
      a: '{PRE_MIN} to {PRE_MAX} minutes for a basket, depending on the temperature: {PRE_MAX} minutes from {TOP_F}°F ({TOP_C}°C) up, on the longer of Cosori’s two charts. Oven-style units preheat themselves and signal when to add the food.',
    },
    {
      q: 'Do you need to preheat an air fryer?',
      a: 'For most food, yes. Cosori’s manuals say food will not cook thoroughly without it. Philips’ Premium XXL spec sheet says that model needs none, so check your own manual.',
    },
    {
      q: 'Should you preheat an air fryer every time?',
      a: 'No. Skip it when the air fryer is still hot from the last batch, the exception Cosori’s manuals make, and for bacon, which starts fine cold. Breaded and frozen food browns more evenly in a hot basket.',
    },
    {
      q: 'Does an oven-style air fryer need preheating?',
      a: 'It does it on its own. Cosori’s air fryer oven and the Instant Vortex models show Add Food once they are hot. Neither manual gives a time, so wait for the signal rather than setting a timer.',
    },
    {
      q: 'How do Cosori, Instant, Philips and Ninja air fryers preheat?',
      a: 'Cosori baskets with a Preheat button set the time from their chart; Instant Vortex models preheat automatically and show Add Food; Philips states “no pre-heat” for its Premium XXL; Ninja’s guides were not re-read for this page.',
    },
  ],
};

export default preheat;

/** English only (US model numbers): the model picker and the per-model table. */
export interface PreheatModelCopy {
  pickerIntro: string;
  model: string;
  modelNone: string;
  and: string;
  answers: {
    /** {MIN}, {TEMP}. */
    chart: string;
    /** {MIN}, {TEMP}: the manual's one preheat setting. */
    fixed: string;
    auto: string;
    /** {PROGRAMS}. */
    autoPrograms: string;
    autoSkips: string;
    autoSkippable: string;
    none: string;
    /** {DOC}: document type; {DEFAULT}: the default answer. */
    notMentioned: string;
    /** {DEFAULT}. */
    notReread: string;
  };
  docTypes: Record<PreheatDocType, string>;
  programs: Record<PreheatProgram, string>;
  /** {DOC}, {PAGES}, {DATE}. */
  sourcePages: string;
  /** {DOC}, {DATE}. */
  sourceNoPage: string;
  sourceNotReread: string;
  tableHeading: string;
  tableIntro: string;
  headers: { model: string; says: string; minutes: string; source: string };
  kinds: Record<PreheatKind, string>;
  /** Minutes cell per kind; {MIN_MIN}, {MIN_MAX} for a chart, {MIN}, {TEMP} for a fixed setting. */
  minutesCell: { chart: string; fixed: string; auto: string; none: string; default: string };
  filterBrand: string;
  filterKind: string;
  all: string;
  /** {N}, {TOTAL}. */
  showing: string;
  none: string;
  brandNames: Record<BrandKey, string>;
}

export const preheatModels: PreheatModelCopy = {
  pickerIntro: 'Or pick your model to see what its own manual says.',
  model: 'Your model',
  modelNone: 'No model: use the default',
  and: 'and',
  answers: {
    chart: 'Preheat for {MIN} minutes at {TEMP}: the Preheat button sets this from the manual’s chart.',
    fixed: 'The manual’s preheat is Air Fry at {TEMP} for {MIN} minutes; add the food when it shows End.',
    auto: 'It preheats automatically: add the food when the display says Add Food.',
    autoPrograms: 'The manual names {PROGRAMS}.',
    autoSkips: '{PROGRAMS} has no preheat.',
    autoSkippable: 'The preheat can be skipped.',
    none: 'No preheat needed: the spec sheet lists “Instant on/no pre-heat”.',
    notMentioned: 'The {DOC} does not mention preheating, so use the default. {DEFAULT}',
    notReread: 'This guide was not re-read for this page, so use the default. {DEFAULT}',
  },
  docTypes: { manual: 'manual', specSheet: 'spec sheet (not a manual)', productPage: 'product page', ownersGuide: 'owner’s guide' },
  programs: { airFry: 'Air Fry', roast: 'Roast', bake: 'Bake', broil: 'Broil', pizza: 'Pizza', reheat: 'Reheat', dehydrate: 'Dehydrate' },
  sourcePages: '{DOC}, page {PAGES}, read {DATE}',
  sourceNoPage: '{DOC}, read {DATE}',
  sourceNotReread: 'Not re-read',
  tableHeading: 'What each manual says',
  tableIntro: 'Every model in the max-temperature table, with what its own document says about preheating and the page it says it on.',
  headers: { model: 'Model', says: 'The document says', minutes: 'Minutes', source: 'Source' },
  kinds: {
    chart: 'Preheat button with a chart',
    fixed: 'One preheat setting',
    auto: 'Preheats automatically',
    none: 'No preheat',
    notMentioned: 'Not mentioned',
    notReread: 'Not re-read',
  },
  minutesCell: { chart: '{MIN_MIN}–{MIN_MAX} by temperature', fixed: '{MIN} at {TEMP}', auto: 'Until Add Food', none: 'None', default: 'Default' },
  filterBrand: 'Brand',
  filterKind: 'Says',
  all: 'All',
  showing: 'Showing {N} of {TOTAL} models',
  none: 'No models match these filters.',
  brandNames: { ninja: 'Ninja', cosori: 'Cosori', philips: 'Philips', instant: 'Instant' },
};

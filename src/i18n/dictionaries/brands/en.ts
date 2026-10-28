/**
 * Brand pages and /model-max-temp copy. English only for now (see src/lib/brands.ts).
 * Every number is a {KEY} placeholder filled from src/data/models.ts and the engine (brandValues / modelMaxTempValues).
 */
import type { BrandKey, ModelType, OtherMaxLabel, PreheatMode, ProgramKey } from '../../../data/models';

export interface BrandPageCopy {
  name: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  heading: string;
  /** The brand's lead failure mode. */
  intro: string;
  answerTemplate: string;
  widgetHeading: string;
  widgetNote: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
  /** Homepage brand card. */
  cardDesc: string;
}

export interface BrandsDictionary {
  backLink: string;
  modelPicker: string;
  anyModel: string;
  modelsHeading: string;
  modelsIntro: string;
  programsHeading: string;
  programsIntro: string;
  tableHeaders: { model: string; type: string; capacity: string; max: string; min: string; preheat: string; source: string; sourced: string; brand: string };
  programHeaders: { program: string; default: string; range: string };
  types: Record<ModelType, string>;
  preheat: Record<PreheatMode, string>;
  otherMax: Record<OtherMaxLabel, string>;
  otherMaxTemplate: string;
  programs: Record<ProgramKey, string>;
  sourceManual: string;
  sourceSpec: string;
  foodLoadNote: string;
  relatedHeading: string;
  flagshipLink: string;
  maxTempLink: string;
  faqHeading: string;
  cardSpecTemplate: string;
  brandNames: Record<BrandKey, string>;
  modelNames: Record<string, string>;
  pages: Partial<Record<BrandKey, BrandPageCopy>>;
  maxTemp: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    heading: string;
    intro: string;
    filterBrand: string;
    filterType: string;
    all: string;
    sortBy: string;
    sortLabels: { maxF: string; capacity: string; brand: string };
    showing: string;
    none: string;
    brandPageLink: string;
    sections: { heading: string; paragraphs: string[] }[];
    faqs: { q: string; a: string }[];
    cardDesc: string;
    cardSpecTemplate: string;
    datasetName: string;
  };
}

export const brands: BrandsDictionary = {
  backLink: 'All tools',
  modelPicker: 'Your model',
  anyModel: 'Not listed / not sure (standard ceiling)',
  modelsHeading: 'Models and their limits',
  modelsIntro: 'Every limit below is copied from the manufacturer’s manual or spec page, with the link, and the date we read it. Models we could not source are left out.',
  programsHeading: 'Built-in programs on the {MODEL}',
  programsIntro: 'The program table from the manual: the default each button starts at, and how far you can move it.',
  tableHeaders: { model: 'Model', type: 'Type', capacity: 'Capacity', max: 'Air fry max', min: 'Lowest setting', preheat: 'Preheat', source: 'Source', sourced: 'Read', brand: 'Brand' },
  programHeaders: { program: 'Program', default: 'Starts at', range: 'Range' },
  types: { basket: 'Basket', 'oven-style': 'Oven-style', 'dual-zone': 'Dual-zone', 'toaster-oven': 'Toaster-oven combo' },
  preheat: { auto: 'Built-in step', manual: 'Manual', none: 'None', unknown: 'Not stated' },
  otherMax: { broil: 'Broil', maxCrisp: 'Max Crisp' },
  otherMaxTemplate: '{LABEL} to {F}°F',
  programs: { airFry: 'Air Fry', roast: 'Roast', bake: 'Bake', broil: 'Broil', reheat: 'Reheat', dehydrate: 'Dehydrate', frozen: 'Frozen', proof: 'Proof', preheat: 'Preheat' },
  sourceManual: 'Manual',
  sourceSpec: 'Spec page',
  foodLoadNote: 'The source gives a food load in kilograms, not a volume.',
  relatedHeading: 'Related',
  flagshipLink: 'Oven to air fryer converter',
  maxTempLink: 'Max temperature of every sourced model',
  faqHeading: 'Frequently asked questions',
  cardSpecTemplate: 'Up to {MAX_HI}°F · {N_MODELS} models',
  brandNames: { ninja: 'Ninja', cosori: 'Cosori', philips: 'Philips', instant: 'Instant Vortex' },
  modelNames: {
    'ninja-af101': 'Ninja Air Fryer AF101',
    'ninja-pro-af141': 'Ninja Air Fryer Pro AF141',
    'ninja-max-xl-af161': 'Ninja Air Fryer Max XL AF161',
    'ninja-doublestack-sl401': 'Ninja DoubleStack XL SL401',
    'ninja-foodi-oven-sp101': 'Ninja Foodi Digital Air Fry Oven SP101',
    'cosori-pro-le-5': 'Cosori Pro LE 5.0-Quart',
    'cosori-turboblaze-6': 'Cosori TurboBlaze 6.0-Quart',
    'cosori-stainless-6-5': 'Cosori Stainless Steel 6.5-Quart Smart',
    'cosori-lite-2-1': 'Cosori Lite 2.1-Quart Mini',
    'cosori-twinfry-9': 'Cosori TwinFry 9.0-Quart',
    'cosori-dual-basket-9': 'Cosori 9.0-Quart Dual Basket',
    'cosori-oven-13': 'Cosori 13-Quart Air Fryer Oven',
    'philips-1000-na110': 'Philips 1000 Series NA110',
    'philips-2000-na220': 'Philips 2000 Series NA220',
    'philips-2000-na230': 'Philips 2000 Series NA230',
    'philips-3000-dual-na351': 'Philips 3000 Series Dual Basket NA351',
    'philips-3000-dual-na350': 'Philips 3000 Series Dual Basket NA350 (EU)',
    'philips-5000-dual-na555': 'Philips 5000 Series Dual Basket with Steam NA555',
    'philips-premium-xxl-hd9650': 'Philips Premium Airfryer XXL HD9650',
    'philips-5000-xxl-hd9285': 'Philips 5000 Series XXL Connected HD9285',
    'instant-vortex-plus-6-clearcook': 'Instant Vortex Plus 6-Quart with ClearCook',
    'instant-vortex-plus-6': 'Instant Vortex Plus 6-Quart',
    'instant-vortex-plus-6-odorerase': 'Instant Vortex Plus 6-Quart with ClearCook and OdorErase',
    'instant-vortex-plus-4': 'Instant Vortex Plus 4-Quart',
    'instant-vortex-5-7': 'Instant Vortex 5.7-Quart',
    'instant-vortex-6': 'Instant Vortex 6-Quart',
    'instant-vortex-slim-6': 'Instant Vortex Slim 6-Quart',
    'instant-vortex-slim-chef-6': 'Instant Vortex Slim Chef Series 6-Quart',
    'instant-vortex-mini-4': 'Instant Vortex Mini and Mini Plus 4-Quart',
    'instant-vortex-plus-dual-8': 'Instant Vortex Plus Dual 8-Quart',
    'instant-vortex-xl-versazone-9': 'Instant Vortex XL VersaZone 9-Quart',
  },
  pages: {
    ninja: {
      name: 'Ninja',
      metaTitle: 'Ninja Air Fryer Conversion: Oven to Ninja Time & Temp, Max Crisp Explained',
      metaDescription:
        'Convert oven recipes for your Ninja: Air Fry stops at {MAX_LO}°F on the basket models, Max Crisp is a fixed {OTHER_MAX}°F preset, and the DoubleStack XL and Foodi oven reach {MAX_HI}°F.',
      metaKeywords: 'ninja air fryer conversion, ninja air fryer temperature, ninja max crisp temperature, ninja air fryer max temperature',
      heading: 'Ninja air fryer conversion',
      intro:
        'On a Ninja, {OTHER_MAX}°F almost always means Max Crisp. On the Max XL it is a fixed preset, not a setting you dial in: Max Crisp runs at {OTHER_MAX}°F and cannot be changed, while Air Fry and every other function stop at {F_MAX}°F. A recipe that says {OTHER_MAX}°F on your Ninja is a Max Crisp recipe, usually frozen fries or nuggets. An oven recipe converted for the basket belongs on Air Fry.',
      answerTemplate:
        'The Ninja basket models we have sourced air fry up to {MAX_LO}°F; Max Crisp on the Max XL runs at {OTHER_MAX}°F. The DoubleStack XL and the Foodi oven air fry up to {MAX_HI}°F. Pick your model below.',
      widgetHeading: 'Convert an oven recipe for your Ninja',
      widgetNote: 'Choose your model to use its own Air Fry limit. Max Crisp is never used for a converted recipe, because you cannot set its temperature.',
      sections: [
        {
          heading: 'When Max Crisp is the right button',
          paragraphs: [
            'Take oven fries baked at {EX_OVEN_F}°F for {EX_OVEN_MIN} minutes. On the Max XL’s Air Fry they convert to {EX_MODEL_F}°F for {EX_MODEL_MIN} minutes, checked from minute {EX_MODEL_CHECK}. The oven temperature is above what Air Fry reaches, so the converter holds at the limit and gives the time back. Shake the basket around minute {EX_HALF}.',
            'Max Crisp is right when the bag of frozen food says to air fry it, or when Ninja’s own chart lists Max Crisp. It suits food that is already cooked and only needs a hard, fast finish. It is wrong for raw chicken, a tray bake or anything that has to cook through: you cannot turn it down, and the outside races ahead of the middle.',
          ],
        },
        {
          heading: 'The button name is not the number',
          paragraphs: [
            'The Air Fryer Pro has a Max Crisp button too, but its guide puts every function, Max Crisp included, at {MAX_LO}°F. The name tells you what the button is for, not how hot it gets, so our table lists what each owner’s guide states.',
            'The DoubleStack XL and the Foodi Digital Air Fry Oven are different again: Air Fry itself goes to {MAX_HI}°F, so a hot oven recipe converts without being held back. The oven counts as oven-style, with racks and a larger cavity, and gets the gentler oven-style conversion.',
          ],
        },
        {
          heading: 'Preheating a Ninja',
          paragraphs: [
            'The basket models do not preheat on their own. Their guides recommend {PREHEAT_MIN} minutes: choose the function and temperature, run it empty, then add the food. The converted times assume a hot basket. The DoubleStack XL’s guide says it needs no preheat, and the Foodi oven preheats by itself, showing PRE until it is ready.',
          ],
        },
      ],
      faqs: [
        { q: 'What is the maximum temperature on a Ninja air fryer?', a: 'Air Fry stops at {MAX_LO}°F on the Ninja basket models we have sourced. Max Crisp on the Max XL runs at {OTHER_MAX}°F, and the DoubleStack XL and Foodi oven air fry up to {MAX_HI}°F. The table links each model’s guide.' },
        { q: 'Can I set Max Crisp to a lower temperature?', a: 'No. The Max XL guide says the temperature cannot be adjusted in Max Crisp. If you need less heat, use Air Fry and set it yourself.' },
        { q: 'Should I use Max Crisp for oven recipes?', a: 'Usually not. Convert the recipe for Air Fry instead. Max Crisp is meant for frozen, pre-cooked food that only needs crisping.' },
        { q: 'Do I need to preheat my Ninja?', a: 'On the basket models, yes: the guides recommend {PREHEAT_MIN} minutes. The DoubleStack XL does not need it, and the Foodi oven preheats on its own.' },
        { q: 'Why are the Foodi 2-Basket models not in the table?', a: 'Their owner’s guides do not state an Air Fry maximum, so we have left them out rather than guess. Until they are listed, choose "not sure" in the converter.' },
      ],
      cardDesc: 'Max Crisp is a fixed preset: what that means for oven recipes.',
    },
    cosori: {
      name: 'Cosori',
      metaTitle: 'Cosori Air Fryer Conversion: Oven to Cosori Time & Temp by Model',
      metaDescription:
        'Convert oven recipes for your Cosori air fryer: pick your model and the converter uses its real maximum from the manual, up to {MAX_HI}°F on several basket models instead of the usual {BASKET_CEIL}°F.',
      metaKeywords: 'cosori air fryer conversion, cosori air fryer temperature, cosori max temperature, cosori turboblaze settings',
      heading: 'Cosori air fryer conversion',
      intro:
        'Most conversion charts and calculators assume a basket air fryer stops at {BASKET_CEIL}°F, so they hold any hot recipe there and add time. Several Cosori basket models go to {MAX_HI}°F. On those, a hot oven recipe does not need holding back: it converts to a hotter, shorter setting, and the extra time a generic converter adds will overcook it.',
      answerTemplate:
        'The Cosori models we have sourced air fry up to {MAX_HI}°F ({MAX_HI_C}°C); the smallest and the dual-zone TwinFry stop at {MAX_LO}°F. Pick your model below and the converter uses its own limit.',
      widgetHeading: 'Convert an oven recipe for your Cosori',
      widgetNote: 'Choose your model first: it sets basket or oven-style and the real maximum from its manual. Leave it on "not sure" for the standard ceiling.',
      sections: [
        {
          heading: 'Why a {MAX_HI}°F basket changes the answer',
          paragraphs: [
            'Take an oven recipe at {EX_OVEN_F}°F for {EX_OVEN_MIN} minutes, such as oven fries. A converter built around a {BASKET_CEIL}°F basket gives {EX_GEN_F}°F for {EX_GEN_MIN} minutes: it cannot go hotter, so it adds time to make up the heat. On a TurboBlaze the same recipe converts to {EX_MODEL_F}°F for {EX_MODEL_MIN} minutes, because the basket can actually reach the converted temperature. Check from minute {EX_MODEL_CHECK}.',
            'The difference matters most for fries, wings and anything you want browned fast. Following the longer generic time at the higher Cosori temperature dries the inside out before the timer ends.',
          ],
        },
        {
          heading: 'Cosori programs are not the same as a recipe temperature',
          paragraphs: [
            'Cosori’s buttons start at their own defaults, and those defaults are often lower than the maximum. On the TurboBlaze, Air Fry starts at {AIR_FRY_DEFAULT}°F and goes up to {AIR_FRY_MAX}°F, Bake tops out at {BAKE_MAX}°F, and Reheat at {REHEAT_MAX}°F. If a converted setting is above what a program allows, use Air Fry and set the temperature by hand; the program will not accept it.',
            'Models with a Preheat button run it as its own step before cooking. The Lite mini has none, so add a minute or two to the first batch or let it run empty briefly.',
          ],
        },
        {
          heading: 'Dual baskets and the oven',
          paragraphs: [
            'The TwinFry air fries to {MAX_LO}°F; only its Broil goes to {OTHER_MAX}°F, and the converter never uses Broil for a converted recipe. The 13-quart oven runs as an oven-style unit: a larger cavity with racks, so it gets the gentler oven-style conversion.',
          ],
        },
      ],
      faqs: [
        { q: 'What is the maximum temperature on a Cosori air fryer?', a: 'It depends on the model. The Cosori models in our table air fry up to {MAX_HI}°F, and the Lite mini and TwinFry stop at {MAX_LO}°F. The table on this page lists each one with a link to its manual.' },
        { q: 'Should I use the Cosori preset buttons for oven recipes?', a: 'Use Air Fry and set the converted temperature and time yourself. Each preset starts at its own default and some cap lower than Air Fry, so a preset can quietly give you a cooler setting than the recipe needs.' },
        { q: 'Do I need to preheat a Cosori?', a: 'Models with a Preheat button run it as a separate step, and the manual recommends it. Models without one simply start cooking, so the first batch can take slightly longer.' },
        { q: 'Why is the Cosori time shorter than other converters give?', a: 'Because the basket can reach the hotter setting. Converters that assume a lower ceiling add time to make up for the missing heat; on a model that reaches the temperature, that extra time overcooks.' },
        { q: 'Does the TwinFry get the same higher limit?', a: 'No. Its manual lists Air Fry up to {MAX_LO}°F. Only Broil goes higher, and broiling is not a substitute for converting an oven recipe.' },
      ],
      cardDesc: 'Several basket models reach a higher maximum than most converters assume.',
    },
    philips: {
      name: 'Philips',
      metaTitle: 'Philips Airfryer Conversion: Oven to Philips Time & Temp ({F_MAX_C}°C Limit)',
      metaDescription:
        'Convert oven recipes for your Philips Airfryer: most models stop at {F_MAX_C}°C ({F_MAX}°F), so hot recipes are held at {F_DIAL}°F with time added back. Pick your model for its real limit.',
      metaKeywords: 'philips airfryer conversion, philips airfryer temperature, philips airfryer max temperature, philips airfryer xxl settings',
      heading: 'Philips Airfryer conversion',
      intro:
        'Most Philips Airfryers stop at {F_MAX_C}°C, which is {F_MAX}°F. Recipes written for {BASKET_CEIL}°F air fryers, and oven recipes that convert to {BASKET_CEIL}°F or above, ask for more heat than the basket can give. The fix is not to cook at the limit for the recipe’s time: it is to hold at the limit and add time back, then check early.',
      answerTemplate:
        'Most Philips models we have sourced top out at {F_MAX_C}°C / {F_MAX}°F, so the converter holds hot recipes at {F_DIAL}°F and adds time. The US 5000 Series dual basket lists {MAX_HI}°F.',
      widgetHeading: 'Convert an oven recipe for your Philips',
      widgetNote: 'Choose your model to use its own limit. With "not sure", the converter assumes a standard basket at {BASKET_CEIL}°F, which is above most Philips models.',
      sections: [
        {
          heading: 'Why a {BASKET_CEIL}°F recipe needs more time in a Philips',
          paragraphs: [
            'Take a tray of vegetables roasted in the oven at {EX_OVEN_F}°F for {EX_OVEN_MIN} minutes. For a standard basket that converts to {EX_GEN_F}°F for {EX_GEN_MIN} minutes. A Philips NA230 cannot reach that, so the converter holds it at {F_DIAL}°F and gives {EX_MODEL_MIN} minutes instead: the lower heat needs a little longer to brown the same amount. Check from minute {EX_MODEL_CHECK}.',
            'Recipes written for other brands do the same thing silently. If a recipe says {BASKET_CEIL}°F for a set time, a Philips at its limit will be a shade paler at that time. Give it the extra minutes rather than raising anything, since there is nothing higher to raise.',
          ],
        },
        {
          heading: 'Reading Philips settings in °C',
          paragraphs: [
            'Philips states its limits in °C. {F_MAX_C}°C is {F_MAX}°F, and a {DIAL_STEP}° dial lands on {F_DIAL}°F, never above the limit. The converter floors to that step for the same reason: a setting the appliance cannot accept is no use.',
            'The Premium Airfryer XXL spec sheet gives its size as a food load in kilograms rather than a volume, so our table shows no capacity for it instead of guessing.',
          ],
        },
        {
          heading: 'Dual-basket Philips models',
          paragraphs: [
            'The 3000 Series dual basket has the same {F_MAX_C}°C limit in both drawers. The US 5000 Series dual basket with steam lists {MAX_HI}°F on its product page, so pick it from the list and the converter allows the full standard ceiling.',
          ],
        },
      ],
      faqs: [
        { q: 'What is the maximum temperature of a Philips Airfryer?', a: 'Most Philips models we have sourced stop at {F_MAX_C}°C, which is {F_MAX}°F. The US 5000 Series dual basket lists {MAX_HI}°F. Each model’s limit is linked to its Philips spec page in the table.' },
        { q: 'My recipe says {BASKET_CEIL}°F. What do I set on a Philips?', a: 'Set {F_DIAL}°F, the highest setting below the limit, and add a few minutes. Pick your model in the converter and it gives you the adjusted time.' },
        { q: 'Why does the converter give longer times for Philips?', a: 'When a recipe needs more heat than the model can reach, the converter holds at the limit and adds time back so the food still browns. Without that, food comes out pale at the recipe’s time.' },
        { q: 'Does the Philips Airfryer XXL hold more than the regular size?', a: 'Philips gives the XXL’s capacity as a food load in kilograms, not a volume, so we do not list it in quarts or litres. Cook in a single layer either way.' },
        { q: 'Is the temperature the same in both baskets of a Philips dual model?', a: 'Yes, each drawer has the same limit. The difference is that you can run two settings at once, so convert each food on its own.' },
      ],
      cardDesc: 'A lower ceiling than most: hot recipes are held there with time added back.',
    },
    instant: {
      name: 'Instant Vortex',
      metaTitle: 'Instant Vortex Air Fryer Conversion: Oven to Vortex Time & Temp',
      metaDescription:
        'Convert oven recipes for your Instant Vortex: up to {F_MAX}°F on Air Fry, when the Turn Food prompt appears, and how to use the ClearCook window instead of opening the basket.',
      metaKeywords: 'instant vortex conversion, instant vortex air fryer temperature, instant vortex turn food, instant vortex plus settings',
      heading: 'Instant Vortex air fryer conversion',
      intro:
        'Instant Vortex air fryers interrupt the cook with a Turn Food prompt partway through. If you are not there, it waits {TURN_WAIT} seconds and carries on without the turn, and food meant to be flipped comes out pale on one side. On ClearCook models you can watch through the window instead of pulling the basket, which loses heat every time.',
      answerTemplate:
        'Every Instant Vortex we have sourced air fries up to {F_MAX}°F ({F_MAX_C}°C); the dual-zone models broil to {OTHER_MAX}°F, which the converter does not use. Pick your model below.',
      widgetHeading: 'Convert an oven recipe for your Instant Vortex',
      widgetNote: 'Choose your model to set its type and limit. The Vortex limit matches the standard basket ceiling, so the main difference is how you handle the turn.',
      sections: [
        {
          heading: 'The Turn Food prompt',
          paragraphs: [
            'Take chicken thighs roasted at {EX_OVEN_F}°F for {EX_OVEN_MIN} minutes. On a Vortex Plus they convert to {EX_MODEL_F}°F for {EX_MODEL_MIN} minutes, checked from minute {EX_MODEL_CHECK}. Flip them around minute {EX_HALF}. Air Fry and Roast show Turn Food partway through; pull the basket, turn, and slide it back. If you miss the prompt, cooking resumes after {TURN_WAIT} seconds, so set a phone timer for the flip if you will be away.',
            'Broil and Dehydrate do not prompt a turn, and Reheat starts without preheating, so it shows no Add Food step.',
          ],
        },
        {
          heading: 'Use the ClearCook window, not the basket',
          paragraphs: [
            'On ClearCook models, press Light and check browning through the window. Every time you pull the basket the chamber cools and the Vortex has to recover, which stretches the time. Open it for the turn and for the final check, not in between.',
            'Models without a window give you no way to look in, so trust the converted time: open the basket once for the turn and once at the check time the converter shows.',
          ],
        },
        {
          heading: 'Vortex programs and their limits',
          paragraphs: [
            'Air Fry on the Vortex Plus 6-quart starts at {AIR_FRY_DEFAULT}°F and goes to {AIR_FRY_MAX}°F. Broil runs from {BROIL_MIN}°F to {BROIL_MAX}°F, and Reheat stops at {REHEAT_MAX}°F. When you convert an oven recipe, use Air Fry or Roast and set the converted temperature yourself; Reheat cannot reach a full cooking setting.',
            'Models with Plus in the name go down to {F_MIN}°F for dehydrating. The plain Vortex starts higher, which only matters for drying fruit or jerky.',
          ],
        },
      ],
      faqs: [
        { q: 'What is the maximum temperature on an Instant Vortex?', a: 'Air Fry goes up to {F_MAX}°F ({F_MAX_C}°C) on every Vortex in our table. The dual-zone models broil higher, to {OTHER_MAX}°F, but Air Fry still stops at {F_MAX}°F.' },
        { q: 'What happens if I ignore Turn Food?', a: 'The Vortex waits {TURN_WAIT} seconds and then keeps cooking without the turn. Food that needed flipping will be browner on top than underneath.' },
        { q: 'Does the Instant Vortex preheat?', a: 'Yes. Air Fry, Roast and Bake show Preheating first and then Add Food when it is ready. Reheat skips the preheat.' },
        { q: 'Can I check food without opening the basket?', a: 'On ClearCook models, turn on the light and look through the window. Opening the basket cools the chamber and adds time.' },
        { q: 'Do I convert differently for the VersaZone or Dual models?', a: 'Convert each food on its own, since each zone runs its own setting. Their Air Fry limit is the same {F_MAX}°F as the single-basket models.' },
      ],
      cardDesc: 'When the Turn Food prompt comes, and checking through the window.',
    },
  },
  maxTemp: {
    metaTitle: 'Air Fryer Max Temperature by Model: Ninja, Cosori, Philips, Instant',
    metaDescription:
      'The maximum air fry temperature of {N_MODELS} air fryer models, each copied from the manufacturer’s manual or spec page with the link. Filter by brand and type, sort by limit or size.',
    metaKeywords: 'air fryer max temperature, air fryer maximum temperature by model, cosori max temp, philips airfryer max temperature, instant vortex max temperature',
    heading: 'Air fryer maximum temperature by model',
    intro:
      'The highest setting on Air Fry, model by model, from the manufacturer’s own manual or spec page. It ranges from {MAX_LO}°F to {MAX_HI}°F across the {N_MODELS} models we have sourced. That limit decides how a hot oven recipe converts: a model that cannot reach the converted temperature needs time added back.',
    filterBrand: 'Brand',
    filterType: 'Type',
    all: 'All',
    sortBy: 'Sort by',
    sortLabels: { maxF: 'Max temperature', capacity: 'Capacity', brand: 'Brand' },
    showing: '{N} of {TOTAL} models',
    none: 'No sourced model matches this filter.',
    brandPageLink: 'Converter',
    sections: [
      {
        heading: 'What the maximum means',
        paragraphs: [
          'Each figure is the Air Fry maximum, because that is what you use to cook a converted recipe. Some dual-zone models broil hotter; that is noted next to the model, and the converter never uses it.',
          'Where the manufacturer states the limit in °C, the table shows °C first, as the source does. A {DIAL_STEP}° dial lands on the step below the limit, never above it.',
        ],
      },
      {
        heading: 'How the limit changes a conversion',
        paragraphs: [
          'A recipe that converts to a temperature above your model’s limit is held at the limit, and the time is lengthened to make up for it. A model with a higher limit than the standard {BASKET_CEIL}°F basket can take the hotter, shorter setting instead. The brand pages run the converter with your model’s own limit.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the highest temperature an air fryer goes to?', a: 'Among the models we have sourced, Air Fry tops out at {MAX_HI}°F. Most basket models stop at {BASKET_CEIL}°F, and several Philips models stop lower, at {PH_MAX_C}°C.' },
      { q: 'Where do these numbers come from?', a: 'From each manufacturer’s manual or product specification page, linked on every row with the date we read it. Models we could not source from the manufacturer are left out.' },
      { q: 'Why is my model missing?', a: 'Either we could not find its manual or spec page from the manufacturer, or the source does not state a temperature range. We add models only when the source states the limit.' },
      { q: 'Does a higher maximum make an air fryer better?', a: 'Not by itself. It means hot recipes convert without added time, which helps with fries and wings. A lower limit still cooks well with the extra minutes.' },
    ],
    cardDesc: 'The ceiling table that feeds the converter, with the source for every row.',
    cardSpecTemplate: '{N_MODELS} sourced models',
    datasetName: 'Air fryer maximum air fry temperature by model',
  },
};

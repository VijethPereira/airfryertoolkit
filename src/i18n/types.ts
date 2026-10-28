import type { FoodKey, FrozenFoodKey } from '../lib/converter';
import type { TempLandingF } from '../lib/temp-landings';
import type { PresetCategory, PresetSizeId, PresetSlug } from '../data/presets';

/** One food preset page's own copy (Dictionary['presets'].pages). Numbers are {KEY} placeholders from presetValues. */
export interface PresetCopy {
  /** Food name as used in the answer line, cards and links. */
  label: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  heading: string;
  subDesc: string;
  /** One line under the card on the homepage and /presets. */
  cardDesc: string;
  /** Sizing-table row labels for this preset's PresetSizeIds. */
  sizeLabels: Partial<Record<PresetSizeId, string>>;
  /** Replaces the shared internalTemplate on this page ({INT_F}, {INT_C}): e.g. nuggets are a heated-through check, not a kill step. */
  internalLine?: string;
  /** Second internal-temperature line, required when the preset has internalAlt ({INT_ALT_F}, {INT_ALT_C}, {INT_ALT_TO_F}, {INT_ALT_TO_C}). */
  internalAltLine?: string;
  failureHeading: string;
  failureBody: string;
  workedExampleHeading: string;
  workedExampleTemplate: string;
  donenessHeading: string;
  donenessBody: string;
  prepHeading: string;
  prepBody: string;
  faqs: { q: string; a: string }[];
}

/** One temperature landing page's own copy (Dictionary['tempLanding'].pages). */
export interface TempLandingCopy {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  heading: string;
  subDesc: string;
  recipesHeading: string;
  recipesBody: string;
  failureHeading: string;
  failureBody: string;
  workedExampleHeading: string;
  /** {EX_OVEN_MIN}, {EX_F}, {EX_C}, {EX_MIN}, {EX_CHECK}, {EX_OS_F}, {EX_OS_MIN}: TEMP_LANDINGS example food, basket and oven-style. */
  workedExampleTemplate: string;
  styleHeading: string;
  styleBody: string;
  faqs: { q: string; a: string }[];
}

export interface Dictionary {
  nav: {
    /** Breadcrumb name of the homepage (not a nav item). */
    home: string;
    convert: string;
    reverse: string;
    foodPresets: string;
    brands: string;
    chart: string;
    guide: string;
  };
  footer: {
    converter: string;
    foodPresets: string;
    frozen: string;
    conversionChart: string;
    about: string;
    contact: string;
    privacyPolicy: string;
    termsConditions: string;
    moreFreeTools: string;
    copyrightSuffix: string;
  };
  converter: {
    widgetLabel: string;
    live: string;
    ovenTemperature: string;
    ovenTime: string;
    min: string;
    foodType: string;
    airFryerStyle: string;
    basket: string;
    ovenStyle: string;
    airFryerSetting: string;
    checkAt: string;
    preheat: string;
    gasMark: string;
    gasMarkDash: string;
    unitBasket: string;
    unitOven: string;
    cappedNoteTemplate: string;
    foods: Record<FoodKey, { label: string; tip: string }>;
  };
  reverseConverter: {
    widgetLabel: string;
    airFryerTemperature: string;
    airFryerTime: string;
    ovenSetting: string;
    stepNote: string;
    ovenCaveat: string;
    /** {unit} and {ceiling} are replaced the same way as converter.cappedNoteTemplate, via cappedNote(). */
    ambiguousCeilingNoteTemplate: string;
  };
  /** Overrides merged over `converter` when ConverterWidget runs in convection mode. */
  convectionConverter: Pick<Dictionary['converter'], 'widgetLabel' | 'ovenTemperature' | 'ovenTime'>;
  /** Same shape as `reverseConverter`, used when ReverseConverterWidget runs in convection mode. */
  reverseConvectionConverter: Dictionary['reverseConverter'];
  /** Widget labels when ConverterWidget runs in frozen-pack mode. */
  frozenConverter: Pick<Dictionary['converter'], 'widgetLabel' | 'ovenTemperature' | 'ovenTime'> & {
    packType: string;
    packConventional: string;
    packFan: string;
    shake: string;
    flip: string;
    /** {action} is shake/flip, {times} the joined minute marks. */
    turnAtTemplate: string;
    noTurn: string;
    /** Joins the last two minute marks, e.g. " and ". */
    listJoin: string;
    /** {f} and {c} are the internal target. */
    internalTemplate: string;
    /** {f} and {c} are the internal target; shown for raw chicken. */
    rawWarningTemplate: string;
    foods: Record<FrozenFoodKey, { label: string; tip: string }>;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    eyebrow: string;
    heroTitle: string;
    heroSub: string;
    ctaLabel: string;
    commonConversionsHeading: string;
    /** Rail note per landing temperature: the time cut ({PCT}), or the ceiling label where the output is capped. */
    commonConversions: { timeCut: string; ceiling: string };
    railFootnote: string;
    comingSoon: string;
    sectionTitles: {
      convert: string;
      reverse: string;
      frozen: string;
      presets: string;
      brands: string;
    };
    convertCards: { title: string; desc: string }[];
    reverseCards: { title: string; desc: string }[];
    frozenTeaser: { heading: string; desc: string; selectLabel: string; options: string[]; goLabel: string };
    frozenCards: { title: string; desc: string }[];
    /**
     * Frozen card spec line, filled from the engine: template {AF_F}, {MIN}, {EXTRA}. EXTRA is
     * `internal` ({INT_F}) for raw foods, else the turn phrase ({N} = count) or noTurn.
     */
    frozenCardSpec: { template: string; shake: string; shakeOnce: string; flip: string; flipOnce: string; noTurn: string; internal: string };
    presetsTeaser: { heading: string; desc: string; selectLabel: string; goLabel: string };
    allPresetsCard: { title: string; desc: string };
    /** Brand cards: the spec line is built from src/data/models.ts (brandCardSpec / modelTableSpec), never typed in. */
    brandCards: Record<'ninja' | 'cosori' | 'philips' | 'instant' | 'modelMaxTemp', { title: string; desc: string }>;
    brandCardSpec: string;
    modelTableSpec: string;
    chartStrip: [string, string, string, string];
    guide: { heading: string; body: string }[];
  };
  tool: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    backLink: string;
    heading: string;
    subDesc: string;
    aboutHeading: string;
    aboutBody: string;
    multipliersHeading: string;
    multipliersBody: string;
    basketVsOvenHeading: string;
    basketVsOvenBody: string;
    whatHappensHeading: string;
    whatHappensBody: string;
    relatedChartLink: string;
    relatedReverseLink: string;
    relatedConvectionLink: string;
    relatedFrozenLink: string;
    faqHeading: string;
    faqs: { q: string; a: string }[];
  };
  reverseTool: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    backLink: string;
    heading: string;
    subDesc: string;
    aboutHeading: string;
    aboutBody: string;
    roundingHeading: string;
    roundingBody: string;
    workedExampleHeading: string;
    /** {GENERAL_OVEN_F}, {GENERAL_OVEN_MIN}, {FRIES_OVEN_F}, {FRIES_OVEN_MIN} are replaced with computeOvenSetting() output. */
    workedExampleTemplate: string;
    whenOvenBetterHeading: string;
    whenOvenBetterBody: string;
    ovenCaveatHeading: string;
    ovenCaveatBody: string;
    relatedFlagshipLink: string;
    relatedChartLink: string;
    relatedConvectionLink: string;
    faqHeading: string;
    faqs: { q: string; a: string }[];
  };
  convectionTool: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    backLink: string;
    heading: string;
    subDesc: string;
    aboutHeading: string;
    aboutBody: string;
    whyGentlerHeading: string;
    whyGentlerBody: string;
    workedExampleHeading: string;
    /**
     * {GENERAL_AF_F}, {GENERAL_AF_MIN} (computeAirFryerSettingFromConvection, general 350°F/30 min),
     * {FLAGSHIP_AF_F}, {FLAGSHIP_AF_MIN} (computeAirFryerSetting, same input),
     * {WINGS_AF_F}, {WINGS_AF_MIN} (computeAirFryerSettingFromConvection, wings 425°F/40 min, capped).
     */
    workedExampleTemplate: string;
    spotHeading: string;
    spotBody: string;
    conventionalHeading: string;
    conventionalBody: string;
    relatedFlagshipLink: string;
    relatedReverseLink: string;
    relatedSiblingLink: string;
    relatedChartLink: string;
    relatedFrozenLink: string;
    faqHeading: string;
    faqs: { q: string; a: string }[];
  };
  reverseConvectionTool: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    backLink: string;
    heading: string;
    subDesc: string;
    aboutHeading: string;
    aboutBody: string;
    whenConvectionHeading: string;
    whenConvectionBody: string;
    roundingHeading: string;
    roundingBody: string;
    workedExampleHeading: string;
    /** {GENERAL_CONV_F}, {GENERAL_CONV_MIN} (general 340°F/27 min), {FRIES_CONV_F}, {FRIES_CONV_MIN} (fries 390°F/18 min) from computeConvectionSetting(). */
    workedExampleTemplate: string;
    ceilingHeading: string;
    ceilingBody: string;
    relatedFlagshipLink: string;
    relatedReverseLink: string;
    relatedSiblingLink: string;
    relatedChartLink: string;
    relatedFrozenLink: string;
    faqHeading: string;
    faqs: { q: string; a: string }[];
  };
  frozenTool: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    backLink: string;
    heading: string;
    subDesc: string;
    aboutHeading: string;
    aboutBody: string;
    packHeading: string;
    packBody: string;
    workedExampleHeading: string;
    /**
     * {US_AF_F}, {US_AF_MIN} (computeAirFryerSettingFromFrozen: fries, 425°F conventional pack, 20 min, basket — capped);
     * {UK_AF_F}, {UK_AF_C}, {UK_AF_MIN} (fries, 200°C fan pack, 20 min, basket).
     */
    workedExampleTemplate: string;
    crowdingHeading: string;
    crowdingBody: string;
    rawHeading: string;
    rawBody: string;
    relatedFlagshipLink: string;
    relatedConvectionLink: string;
    relatedReverseConvectionLink: string;
    relatedChartLink: string;
    presetsHeading: string;
    faqHeading: string;
    faqs: { q: string; a: string }[];
  };
  presets: {
    backLink: string;
    pageTag: string;
    /** {LABEL}, {AF_F}, {AF_C}, {MIN}; followed by answerFlipSuffix / answerShakeSuffix when the preset has them. */
    answerTemplate: string;
    answerFlipSuffix: string;
    answerShakeSuffix: string;
    /** {INT_F}, {INT_C}. */
    internalTemplate: string;
    /** Shown instead of internalTemplate for doneBy: 'crisp'. */
    internalCrisp: string;
    /** Cakes and bakes (doneBy 'toothpick'). */
    internalToothpick: string;
    ovenHeading: string;
    /** {OVEN_F}, {OVEN_C}, {OVEN_MARK}, {OVEN_MIN}. */
    ovenTemplate: string;
    /** {FAN_F}, {FAN_C}, {FAN_MIN}. */
    fanTemplate: string;
    ovenNote: string;
    sizingHeading: string;
    sizingIntro: string;
    sizingHeaders: { size: string; airFryer: string; oven: string };
    /** {MIN}. */
    minutesTemplate: string;
    /** Card / index spec line: {AF_F}, {MIN}, plus the flip/shake suffix. */
    specTemplate: string;
    specFlipSuffix: string;
    specShakeSuffix: string;
    relatedPresetsHeading: string;
    /** {OVEN_F}: link to the nearest /[temp]-to-air-fryer page. */
    tempLandingLinkTemplate: string;
    relatedFlagshipLink: string;
    relatedIndexLink: string;
    relatedChartLink: string;
    faqHeading: string;
    /** Frozen presets (engine.kind 'frozen') read these instead: the equivalent is the pack instruction, not an oven recipe. Same placeholders. */
    frozen: {
      ovenHeading: string;
      ovenTemplate: string;
      fanTemplate: string;
      ovenNote: string;
      sizingHeaders: { size: string; airFryer: string; oven: string };
      /** Link to /frozen with this food preselected (replaces the flagship link). */
      relatedFlagshipLink: string;
    };
    /**
     * Reheat presets (engine.kind 'reheat') read these instead: the equivalent is the oven reheat,
     * and the converter (which converts cooking recipes) sits in its default state under its own intro.
     */
    reheat: {
      ovenHeading: string;
      ovenTemplate: string;
      fanTemplate: string;
      ovenNote: string;
      sizingHeaders: { size: string; airFryer: string; oven: string };
      relatedFlagshipLink: string;
      widgetHeading: string;
      widgetNote: string;
    };
    pages: Record<PresetSlug, PresetCopy>;
  };
  presetsIndex: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    backLink: string;
    heading: string;
    intro: string;
    categories: Record<PresetCategory, string>;
    howHeading: string;
    howBody: string;
    relatedFlagshipLink: string;
    relatedChartLink: string;
  };
  tempLanding: {
    backLink: string;
    pageTag: string;
    /** Direct answer above the widget. {OVEN_F}, {AF_F}, {AF_C}, {PCT} from tempLandingValues (general, basket). */
    answerTemplate: string;
    /** Same, when the basket result is clamped: adds {CEILING}. */
    answerCappedTemplate: string;
    /** {OS_F}, {OS_C}, {OS_PCT} (general, oven-style). */
    answerOvenStyleTemplate: string;
    /** {OVEN_F}. */
    tableHeading: string;
    tableIntro: string;
    tableHeaders: { food: string; basket: string; ovenStyle: string };
    /** {PCT}: share of the oven time saved for that cell. */
    timeLessTemplate: string;
    cappedCell: string;
    /** Shown under the table when any cell is clamped. {CEILING}, {OS_CEILING}. */
    cappedFootnote: string;
    neighboursHeading: string;
    /** {OVEN_F} is the neighbouring page's temperature. */
    neighbourLinkTemplate: string;
    relatedFlagshipLink: string;
    relatedChartLink: string;
    relatedFrozenLink: string;
    faqHeading: string;
    /** Copy written per temperature; every engine number is a {KEY} placeholder filled by tempLandingValues. */
    pages: Record<TempLandingF, TempLandingCopy>;
  };
  chart: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    backLink: string;
    pageTag: string;
    heading: string;
    lead: string;
    printButton: string;
    tempTableHeading: string;
    tempHeaders: { ovenF: string; airFryerF: string; airFryerC: string; gasMark: string };
    tempFootnote: string;
    timeTableHeading: string;
    timeHeaders: { ovenTime: string; airFryerTime: string };
    foodTableHeading: string;
    foodHeaders: { food: string; tempAdjustment: string; timeMultiplier: string; note: string };
    /** {link} is replaced with an anchor to /oven-to-air-fryer using liveConverterLabel as its text. */
    ceilingNoteTemplate: string;
    liveConverterLabel: string;
    howToReadHeading: string;
    howToReadBody: string;
    whyFlatRuleHeading: string;
    whyFlatRuleBody: string;
    /** {FLAT_F}, {FLAT_MIN}, {BAKED_F}, {BAKED_MIN} are replaced with computeAirFryerSetting() output. */
    workedExampleTemplate: string;
    faqHeading: string;
    faqs: { q: string; a: string }[];
    relatedHeading: string;
    relatedConverterLabel: string;
    relatedConverterDesc: string;
    relatedGasMarkLabel: string;
    relatedGasMarkDesc: string;
    relatedReverseLabel: string;
    relatedReverseDesc: string;
    relatedConvectionLabel: string;
    relatedConvectionDesc: string;
    relatedReverseConvectionLabel: string;
    relatedReverseConvectionDesc: string;
    relatedFrozenLabel: string;
    relatedFrozenDesc: string;
  };
}

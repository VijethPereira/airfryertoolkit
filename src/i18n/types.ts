import type { FoodKey } from '../lib/converter';

export interface Dictionary {
  nav: {
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
  home: {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    eyebrow: string;
    heroTitle: string;
    heroSub: string;
    ctaLabel: string;
    commonConversionsHeading: string;
    commonConversions: [string, string, string, string];
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
    frozenCards: { title: string; spec: string; desc: string }[];
    presetsTeaser: { heading: string; desc: string; selectLabel: string; options: string[]; goLabel: string };
    presetCards: { title: string; spec: string; desc: string }[];
    allPresetsCard: { title: string; desc: string };
    brandCards: { title: string; spec: string; desc: string }[];
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
    faqHeading: string;
    faqs: { q: string; a: string }[];
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
  };
}

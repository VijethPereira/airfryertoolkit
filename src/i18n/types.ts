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
    faqHeading: string;
    faqs: { q: string; a: string }[];
  };
}

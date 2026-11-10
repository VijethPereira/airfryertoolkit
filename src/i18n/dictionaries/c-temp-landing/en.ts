import type { CTempLandingC } from '../../../lib/temp-landings';

const cTempLanding: {
  backLink: string;
  pageTag: string;
  answerTemplate: string;
  answerCappedTemplate: string;
  answerFanTemplate: string;
  answerFanCappedTemplate: string;
  answerOvenStyleTemplate: string;
  tableHeading: string;
  tableIntro: string;
  tableHeaders: { food: string; conventional: string; fan: string; basket: string; ovenStyle: string };
  timeLessTemplate: string;
  cappedCell: string;
  cappedFootnote: string;
  neighboursHeading: string;
  neighbourLinkTemplate: string;
  relatedFlagshipLink: string;
  relatedChartLink: string;
  relatedFrozenLink: string;
  relatedConvectionLink: string;
  relatedNearestFLink: string;
  faqHeading: string;
  widgetHeading: string;
  widgetNote: string;
  pages: Record<CTempLandingC, {
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
    workedExampleTemplate: string;
    fanWorkedExampleHeading: string;
    fanWorkedExampleTemplate: string;
    styleHeading: string;
    styleBody: string;
    faqs: { q: string; a: string }[];
  }>;
} = {
  backLink: 'All tools',
  pageTag: 'Oven temperature',
  answerTemplate: '{OVEN_C}°C oven = {AF_C}°C ({AF_F}°F) in a basket air fryer, about {PCT}% less time.',
  answerCappedTemplate: '{OVEN_C}°C oven = {AF_C}°C ({AF_F}°F) in a basket air fryer — its {CEILING}°F maximum — about {PCT}% less time.',
  answerFanTemplate: 'Fan {FAN_C}°C oven = {FAN_AF_C}°C ({FAN_AF_F}°F) in a basket air fryer, about {FAN_PCT}% less time.',
  answerFanCappedTemplate: 'Fan {FAN_C}°C oven = {FAN_AF_C}°C ({FAN_AF_F}°F) in a basket air fryer — its {CEILING}°F maximum — about {FAN_PCT}% less time.',
  answerOvenStyleTemplate: 'Oven-style air fryer: {OS_C}°C ({OS_F}°F), about {OS_PCT}% less time.',
  tableHeading: 'Every food at {OVEN_C}°C (conventional) / {FAN_C}°C fan',
  tableIntro: 'UK/EU recipes print three figures: conventional °C, fan °C, and gas mark. Each column gives the air fryer temperature (°C/°F/gas mark) and the share of the oven time you save.',
  tableHeaders: { food: 'Food', conventional: 'Conventional °C', fan: 'Fan °C', basket: 'Basket', ovenStyle: 'Oven-style' },
  timeLessTemplate: '{PCT}% less time',
  cappedCell: 'Capped',
  cappedFootnote: 'Capped: the converted temperature is above what the unit can reach ({CEILING}°F basket, {OS_CEILING}°F oven-style), so it is held at the maximum and part of the time cut is given back.',
  neighboursHeading: 'Nearby temperatures',
  neighbourLinkTemplate: '{OVEN_C}°C oven to air fryer',
  relatedFlagshipLink: 'Oven to air fryer converter (any temperature)',
  relatedChartLink: 'Printable conversion chart',
  relatedFrozenLink: 'Frozen food mode (packaging instructions)',
  relatedConvectionLink: 'Convection oven to air fryer',
  relatedNearestFLink: '{F}°F oven to air fryer',
  faqHeading: 'Frequently asked questions',
  widgetHeading: 'Convert an oven recipe for your air fryer',
  widgetNote: 'Switch between conventional, fan, and gas mark inputs. The converter uses the flagship engine for conventional, the convection engine for fan, and maps gas mark to conventional °C.',
  pages: {
    160: {
      metaTitle: '{OVEN_C}°C Oven to Air Fryer — Temperature & Time',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, gas mark {OVEN_MARK}) in the oven is {AF_C}°C ({AF_F}°F) in a basket air fryer with about {PCT}% less time. Per-food table for cakes, custards and slow bakes, with a live converter.',
      metaKeywords: '160c to air fryer, 160c oven to air fryer, 160 celsius air fryer, gas mark {OVEN_MARK} air fryer',
      heading: '{OVEN_C}°C oven to air fryer',
      subDesc: 'A gentle baking temperature for custards, meringues and slow-cooked dishes. The converter below is already set to {OVEN_C}°C conventional — switch to fan or gas mark if your recipe uses those.',
      recipesHeading: 'What recipes use {OVEN_C}°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, gas mark {OVEN_MARK}) is the low, gentle heat for anything that must set slowly without browning: baked custards, cheesecakes, meringues, terrines, and slow-roasted tomatoes. It is also the temperature for reheating delicate leftovers in the oven. A general recipe converts to {AF_C}°C in a basket air fryer. The cut is smaller than at higher temperatures because these foods need the heat to reach the centre gently.',
      failureHeading: 'The failure mode at {OVEN_C}°C: unset centre, browned top',
      failureBody: 'At this temperature the risk is not burning — it is that the moving air browns the top before the centre sets. A cheesecake or custard will crack and dome while the middle is still liquid. Use a water bath if the recipe calls for one, tent loosely with foil, and test the centre at the check time with a skewer or thermometer. In a basket air fryer the fan is closer to the food, so the tent is essential.',
      workedExampleHeading: 'Worked example (conventional)',
      workedExampleTemplate: 'A cheesecake recipe says {OVEN_C}°C for {EX_OVEN_MIN} minutes. Baked custards take a small cut, so a basket air fryer runs it at {EX_C}°C ({EX_F}°F) for {EX_MIN} minutes; test the centre at {EX_CHECK} minutes. An oven-style unit blows less directly onto the top, so it takes {EX_OS_C}°C ({EX_OS_F}°F) for {EX_OS_MIN} minutes. Bake in a springform pan set on the crisper plate, tented with foil.',
      fanWorkedExampleHeading: 'Worked example (fan)',
      fanWorkedExampleTemplate: 'If the recipe gives a fan temperature of {FAN_C}°C, the same cheesecake converts to {EX_FAN_C}°C ({EX_FAN_F}°F) in a basket air fryer for {EX_FAN_MIN} minutes, checked at {EX_FAN_CHECK} minutes. An oven-style unit runs {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) for {EX_FAN_OS_MIN} minutes. The fan input goes through the convection engine, which takes a gentler cut because the recipe is already fan-adjusted.',
      styleHeading: 'Why the recipe prints three temperatures',
      styleBody: 'UK and EU recipes often write "{OVEN_C}°C / {FAN_C}°C fan / gas mark {OVEN_MARK}". The conventional figure is for a non-fan oven; the fan figure is roughly {FAN_OFFSET_C}°C lower because the fan moves heat faster. gas mark {OVEN_MARK} is the UK dial setting (~{OVEN_C}°C). Pick the one your recipe uses: conventional goes through the flagship engine, fan goes through the convection engine, gas mark maps to the conventional °C. The converter widget on this page lets you switch between them. For frozen food packs (which print one time for both conventional and fan), use the frozen mode instead — it keeps the temperature and cuts the time by {FROZEN_PCT}%.',
      faqs: [
        { q: 'What is {OVEN_C}°C in an air fryer?', a: 'For a general recipe, {AF_C}°C ({AF_F}°F) in a basket air fryer with about {PCT}% less time, or {OS_C}°C in an oven-style unit. Custards and slow bakes take a smaller cut; see the table.' },
        { q: 'My recipe says {FAN_C}°C fan — is that the same as {OVEN_C}°C conventional?', a: 'Yes, that is the UK convention: fan = conventional − {FAN_OFFSET_C}°C. Use the fan input on this page (or the convection converter) for a fan-oven recipe; it takes a gentler cut because the recipe is already adjusted for the fan.' },
        { q: 'What gas mark is {OVEN_C}°C?', a: 'gas mark {OVEN_MARK}. The UK dial marks {OVEN_C}°C as gas mark {OVEN_MARK}.' },
        { q: 'Can I use this for a frozen food pack that says {OVEN_C}°C?', a: 'No — frozen packs follow different rules (keep the temperature, cut {FROZEN_PCT}% time). Use the frozen mode on this site instead; it handles conventional and fan pack temperatures correctly.' },
        { q: 'Why does the fan column give a different answer from the conventional column?', a: 'A fan-oven recipe is already {FAN_OFFSET_C}°C lower than its conventional equivalent. The convection engine applies a smaller cut (0–15°F, 5–10% time) because the fan has already done part of the work. The conventional engine applies the full cut (20–25°F, 20–30% time).' },
      ],
    },
    180: {
      metaTitle: '{OVEN_C}°C Oven to Air Fryer — Temperature & Time',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, gas mark {OVEN_MARK}) in the oven is {AF_C}°C ({AF_F}°F) in a basket air fryer with about {PCT}% less time. Per-food table for cakes, breads, chicken and fish, with a live converter.',
      metaKeywords: '180c to air fryer, 180c oven to air fryer, 180 celsius air fryer, 180c fan to air fryer, gas mark {OVEN_MARK} air fryer',
      heading: '{OVEN_C}°C oven to air fryer',
      subDesc: 'The most common baking and roasting temperature in UK/EU recipes. The converter below is already set to {OVEN_C}°C conventional — switch to fan or gas mark if your recipe uses those.',
      recipesHeading: 'What recipes use {OVEN_C}°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, gas mark {OVEN_MARK}) is the default for cakes, quick breads, brownies, cookies, roast chicken, fish fillets, and tray bakes. It is the temperature recipes fall back to when the writer is not sure, so plenty of dishes sit here. A general recipe converts to {AF_C}°C in a basket air fryer. Baked goods take a smaller cut (dense batters need the heat to reach the centre); chicken and fish take the standard cut.',
      failureHeading: 'The failure mode at {OVEN_C}°C: domed cake, raw middle',
      failureBody: 'The fan blows straight onto the top of a cake or bread, which browns and crusts while the middle is still liquid. The result is a cracked, domed top over a gummy centre. Three things fix it: use a shallower tin than the recipe calls for, tent the top loosely with foil for the first half of the cook (tuck the edges under so the fan cannot lift it), and test the middle with a skewer at the check time instead of trusting the colour. Paper liners must be weighed down by the batter; a loose sheet will lift into the element.',
      workedExampleHeading: 'Worked example (conventional)',
      workedExampleTemplate: 'A Victoria sponge recipe says {OVEN_C}°C for {EX_OVEN_MIN} minutes. Cakes take a smaller cut, so a basket air fryer runs it at {EX_C}°C ({EX_F}°F) for {EX_MIN} minutes; test with a skewer at {EX_CHECK} minutes. An oven-style unit takes {EX_OS_C}°C ({EX_OS_F}°F) for {EX_OS_MIN} minutes. Use a 15–18 cm tin on the crisper plate, filled halfway.',
      fanWorkedExampleHeading: 'Worked example (fan)',
      fanWorkedExampleTemplate: 'If the recipe gives {FAN_C}°C fan, the same cake converts to {EX_FAN_C}°C ({EX_FAN_F}°F) in a basket air fryer for {EX_FAN_MIN} minutes, checked at {EX_FAN_CHECK} minutes. An oven-style unit runs {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) for {EX_FAN_OS_MIN} minutes.',
      styleHeading: 'Conventional vs fan at {OVEN_C}°C',
      styleBody: 'UK/EU recipes print "{OVEN_C}°C / {FAN_C}°C fan / gas mark {OVEN_MARK}". The conventional figure goes through the flagship engine (20–25°F cut), the fan figure through the convection engine (0–15°F cut). The gap between the two air fryer results is the fan offset: a fan-oven recipe is already part-way there, so the remaining cut is smaller. The converter widget on this page lets you switch. For frozen food packs, use the frozen mode — it keeps the temperature and cuts {FROZEN_PCT}% time.',
      faqs: [
        { q: 'What is {OVEN_C}°C in an air fryer?', a: 'For a general recipe, {AF_C}°C ({AF_F}°F) in a basket air fryer with about {PCT}% less time, or {OS_C}°C in an oven-style unit. Cakes and casseroles take a smaller cut; see the table.' },
        { q: 'My recipe says {FAN_C}°C fan — is that the same as {OVEN_C}°C conventional?', a: 'Yes, that is the UK convention: fan = conventional − {FAN_OFFSET_C}°C. Use the fan input on this page for a fan-oven recipe; it takes a gentler cut.' },
        { q: 'What gas mark is {OVEN_C}°C?', a: 'gas mark {OVEN_MARK}. The UK dial marks {OVEN_C}°C as gas mark {OVEN_MARK}.' },
        { q: 'Can I use this for a frozen food pack that says {OVEN_C}°C?', a: 'No — frozen packs follow different rules (keep the temperature, cut {FROZEN_PCT}% time). Use the frozen mode instead.' },
        { q: 'Why does the fan column give a different answer?', a: 'A fan-oven recipe is already {FAN_OFFSET_C}°C lower. The convection engine applies a smaller remaining cut (0–15°F, 5–10% time) because the fan has already done part of the work.' },
      ],
    },
    200: {
      metaTitle: '{OVEN_C}°C Oven to Air Fryer — Temperature & Time',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, gas mark {OVEN_MARK}) in the oven is {AF_C}°C ({AF_F}°F) in a basket air fryer with about {PCT}% less time. Per-food table for roast vegetables, chicken breast, fries, with a live converter.',
      metaKeywords: '200c to air fryer, 200c oven to air fryer, 200 celsius air fryer, 180c fan to air fryer, gas mark {OVEN_MARK} air fryer',
      heading: '{OVEN_C}°C oven to air fryer',
      subDesc: 'The classic roasting temperature, and the one most often printed in °C on European packs. The converter below is already set to {OVEN_C}°C conventional — switch to fan or gas mark if your recipe uses those.',
      recipesHeading: 'What recipes use {OVEN_C}°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, gas mark {OVEN_MARK}) is the standard roasting setting for vegetables, potato wedges, chicken breast, sausages, salmon, homemade fries, and anything finished with a crisp edge. An air fryer is a roaster at heart, so this is where it most clearly beats the oven: a general recipe drops to {AF_C}°C, and fries take the largest time cut in the table because they have lots of surface and little depth. Notice the conversion never asks the basket to reach {OVEN_C}°C itself — the air fryer gets the same browning about {PCT}% faster at a lower setting.',
      failureHeading: 'The failure mode at {OVEN_C}°C: steamed, not roasted',
      failureBody: 'High heat in a small space only works if the moisture can get away. Cut vegetables and potatoes release water as they heat, and in a full basket that steam stays around the food, so instead of browning it softens and goes pale. It is the most common complaint about air-fried vegetables, and more time does not fix it. Cook in a single layer with gaps, or in two batches; the second batch is usually a minute or two faster because the basket is already hot. Dry vegetables well after washing, toss them in a teaspoon of oil rather than a spoonful, and shake the basket at the check time so the pieces at the bottom come up into the air.',
      workedExampleHeading: 'Worked example (conventional)',
      workedExampleTemplate: 'A recipe roasts mixed vegetables at {OVEN_C}°C for {EX_OVEN_MIN} minutes. A basket air fryer does it at {EX_C}°C ({EX_F}°F) in {EX_MIN} minutes, with a shake at {EX_CHECK} minutes to check the colour. An oven-style air fryer takes {EX_OS_C}°C ({EX_OS_F}°F) for {EX_OS_MIN} minutes; spread the vegetables over two racks and swap halfway.',
      fanWorkedExampleHeading: 'Worked example (fan)',
      fanWorkedExampleTemplate: 'If the recipe gives {FAN_C}°C fan, the same vegetables convert to {EX_FAN_C}°C ({EX_FAN_F}°F) in a basket air fryer for {EX_FAN_MIN} minutes, shake at {EX_FAN_CHECK} minutes. An oven-style unit runs {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) for {EX_FAN_OS_MIN} minutes.',
      styleHeading: '{OVEN_C}°C in °F and gas mark',
      styleBody: '{OVEN_C}°C is {OVEN_F}°F (often rounded to 200°C on European dials) and gas mark {OVEN_MARK}. The air fryer setting is {AF_C}°C in a basket unit, {OS_C}°C in an oven-style one. If your air fryer only moves in 10°C steps, pick the lower step for vegetables and the higher one for chicken skin. Entering the recipe in °C in the converter gives you both numbers at once. For frozen packs, use the frozen mode.',
      faqs: [
        { q: 'What is {OVEN_C}°C in an air fryer?', a: 'About {AF_C}°C ({AF_F}°F) in a basket air fryer, with about {PCT}% less time. In an oven-style unit, {OS_C}°C. Fries and bacon save the most time; baked goods take the smallest cut.' },
        { q: 'My recipe says {FAN_C}°C fan — is that the same as {OVEN_C}°C conventional?', a: 'Yes, fan = conventional − {FAN_OFFSET_C}°C. Use the fan input on this page for a fan-oven recipe; it takes a gentler cut.' },
        { q: 'What gas mark is {OVEN_C}°C?', a: 'gas mark {OVEN_MARK}. The UK dial marks {OVEN_C}°C as gas mark {OVEN_MARK}.' },
        { q: 'Can I use this for a frozen food pack that says {OVEN_C}°C?', a: 'No — frozen packs follow different rules (keep the temperature, cut {FROZEN_PCT}% time). Use the frozen mode instead.' },
        { q: 'Why are my air fryer vegetables soggy at {AF_C}°C?', a: 'Almost always overcrowding. The steam from the vegetables cannot escape. Use a single layer, dry them well, use less oil; a hotter setting will not rescue a full basket.' },
      ],
    },
    220: {
      metaTitle: '{OVEN_C}°C Oven to Air Fryer — Setting, Time & the Max-Temp Limit',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, gas mark {OVEN_MARK}) in the oven = {AF_C}°C ({AF_F}°F) in a basket air fryer, right at its maximum. See which foods are capped, how much time is added back, and convert live.',
      metaKeywords: '220c to air fryer, 220c oven to air fryer, 220 celsius air fryer, 200c fan to air fryer, gas mark {OVEN_MARK} air fryer',
      heading: '{OVEN_C}°C oven to air fryer',
      subDesc: 'The crisping temperature, and the first one where a basket air fryer meets its ceiling. The converter below is already set to {OVEN_C}°C conventional — switch to fan or gas mark if your recipe uses those.',
      recipesHeading: 'What recipes use {OVEN_C}°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, gas mark {OVEN_MARK}) is where recipes go for crunch: crispy wings, roast potatoes with a shattering edge, salmon with a firm top, pizza, flatbreads, blistered vegetables. Frozen chips often say it too, but those follow different rules — use frozen mode for them. In the oven it takes this much heat to drive moisture off the surface quickly. An air fryer gets there sooner, so a general recipe converts to {AF_C}°C — exactly the {CEILING}°F top of a typical basket unit. Everything with the normal cut lands on the ceiling; steak, fish, baked goods and casseroles take a smaller cut, so their converted temperature is above what the basket can reach. The table marks those rows.',
      failureHeading: 'The failure mode at {OVEN_C}°C: the ceiling',
      failureBody: 'Most converters subtract and print the result, even when it is a temperature your air fryer cannot reach. At {OVEN_C}°C that happens for the foods with a gentler cut: the calculation asks for more than {CEILING}°F, the basket gives you {CEILING}°F, and the food comes out underdone because the time was cut as if the heat were there. This converter clamps the temperature to the ceiling and adds part of the time back, so the capped rows save less time than the rest. The other risk at this heat is smoke. Fat from wings and salmon skin drips onto a very hot drawer, so use an oil with a high smoke point, add marinades with sugar or honey only for the last few minutes, and empty the drawer between batches.',
      workedExampleHeading: 'Worked example (conventional)',
      workedExampleTemplate: 'A recipe roasts salmon at {OVEN_C}°C for {EX_OVEN_MIN} minutes. Fish takes a smaller cut, so its converted temperature is over the basket limit and is held at {EX_C}°C ({EX_F}°F), with the time trimmed only to {EX_MIN} minutes. Check at {EX_CHECK} minutes: salmon is done at 145°F (63°C) in the thickest part, or when it flakes. An oven-style air fryer has a higher ceiling, so it runs the full {EX_OS_C}°C ({EX_OS_F}°F) for {EX_OS_MIN} minutes.',
      fanWorkedExampleHeading: 'Worked example (fan)',
      fanWorkedExampleTemplate: 'If the recipe gives {FAN_C}°C fan, the same salmon converts to {EX_FAN_C}°C ({EX_FAN_F}°F) in a basket air fryer for {EX_FAN_MIN} minutes, checked at {EX_FAN_CHECK} minutes. An oven-style unit runs {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) for {EX_FAN_OS_MIN} minutes. The fan input is lower, so more rows may avoid the ceiling.',
      styleHeading: 'Why oven-style units differ at {OVEN_C}°C',
      styleBody: 'An oven-style air fryer usually reaches {OS_CEILING}°F, so at {OVEN_C}°C nothing is capped: a general recipe is {OS_C}°C ({OS_F}°F) with about {OS_PCT}% less time, and the gentler-cut foods simply run hotter. The capped rows only appear in the basket column, so check which kind you have before you trust any chart. The converter uses {CEILING}°F for basket units and {OS_CEILING}°F for oven-style ones. If the dial on yours stops lower, cook at its maximum and allow a little extra time. In °C the recipe is {OVEN_C}°C, and the basket setting is {AF_C}°C. For frozen packs, use the frozen mode.',
      faqs: [
        { q: 'What is {OVEN_C}°C in an air fryer?', a: '{AF_C}°C ({AF_F}°F) in a basket air fryer for most foods — the basket maximum — with about {PCT}% less time. In an oven-style unit, {OS_C}°C ({OS_F}°F) with about {OS_PCT}% less time. Steak, fish, cakes and casseroles are capped in a basket and keep more of their time.' },
        { q: 'My recipe says {FAN_C}°C fan — is that the same as {OVEN_C}°C conventional?', a: 'Yes, fan = conventional − {FAN_OFFSET_C}°C. The fan input is lower, so more foods avoid the ceiling.' },
        { q: 'What gas mark is {OVEN_C}°C?', a: 'gas mark {OVEN_MARK}. The UK dial marks {OVEN_C}°C as gas mark {OVEN_MARK}.' },
        { q: 'Can I use this for a frozen food pack that says {OVEN_C}°C?', a: 'No — frozen packs follow different rules (keep the temperature, cut {FROZEN_PCT}% time). Use the frozen mode instead.' },
        { q: 'Why does my air fryer smoke at high temperatures?', a: 'Fat and sugary marinade drip onto the hot drawer and burn. Use a high-smoke-point oil, add sticky glazes near the end, and empty or wipe the drawer between batches.' },
      ],
    },
  },
};

export default cTempLanding;
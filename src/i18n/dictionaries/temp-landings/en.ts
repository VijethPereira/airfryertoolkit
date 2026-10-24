import type { Dictionary } from '../../types';

const tempLanding: Dictionary['tempLanding'] = {
  backLink: 'All tools',
  pageTag: 'Oven temperature',
  answerTemplate: '{OVEN_F}°F oven = {AF_F}°F ({AF_C}°C) in a basket air fryer, about {PCT}% less time.',
  answerCappedTemplate:
    '{OVEN_F}°F oven = {AF_F}°F ({AF_C}°C) in a basket air fryer — its {CEILING}°F maximum — about {PCT}% less time.',
  answerOvenStyleTemplate: 'Oven-style air fryer: {OS_F}°F ({OS_C}°C), about {OS_PCT}% less time.',
  tableHeading: 'Every food at {OVEN_F}°F',
  tableIntro:
    'The cut depends on the food, so one number is never the whole answer. Each cell gives the air fryer temperature, °C, gas mark and the share of the oven time you save.',
  tableHeaders: { food: 'Food', basket: 'Basket', ovenStyle: 'Oven-style' },
  timeLessTemplate: '{PCT}% less time',
  cappedCell: 'Capped',
  cappedFootnote:
    'Capped: the converted temperature is above what the unit can reach ({CEILING}°F basket, {OS_CEILING}°F oven-style), so it is held at the maximum and part of the time cut is given back.',
  neighboursHeading: 'Nearby temperatures',
  neighbourLinkTemplate: '{OVEN_F}°F oven to air fryer',
  relatedFlagshipLink: 'Oven to air fryer converter (any temperature)',
  relatedChartLink: 'Printable conversion chart',
  relatedFrozenLink: 'Frozen food mode (packaging instructions)',
  faqHeading: 'Frequently asked questions',
  pages: {
    350: {
      metaTitle: '350°F Oven to Air Fryer — Temperature & Time',
      metaDescription:
        '{OVEN_F}°F in the oven is {AF_F}°F ({AF_C}°C) in a basket air fryer with about {PCT}% less time. Per-food table for cakes, casseroles and chicken, plus a live converter set to {OVEN_F}°F.',
      metaKeywords: '350 to air fryer, 350 oven to air fryer, 350f to c air fryer, 350 degrees air fryer time',
      heading: '{OVEN_F}°F oven to air fryer',
      subDesc:
        'The most common temperature in baking and casserole recipes. The converter below is already set to {OVEN_F}°F — change the time and the food to get your exact setting.',
      recipesHeading: 'What recipes use 350°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, gas mark {OVEN_MARK}) is the default for anything that has to set in the middle before the outside darkens: muffins, quick breads, brownies, cookies, cheesecake, meatloaf, baked pasta and most casseroles. It is also where older recipes land when the writer was not sure, so plenty of chicken and pork recipes say {OVEN_F}°F for an hour when they would brown better hotter. The recipes that use this temperature are the ones that suffer most when an air fryer is treated as a small oven. A flat rule turns every one of them into {AF_F}°F, but baked goods and casseroles take a smaller cut: a dense batter or a deep dish needs the heat to reach its centre, and the gentler number stops the crust from setting first.',
      failureHeading: 'The failure mode at 350°F: done outside, raw inside',
      failureBody:
        'At this heat the problem is not burning, it is speed on the surface. The fan blows straight onto the top of a muffin or a cake, which browns and crusts while the middle is still liquid. The result is a domed, cracked top over a gummy centre, and adding time only darkens the top further. Three things fix it. Use a shallower pan than the recipe calls for, so the centre has less distance to cover. Tent the top loosely with foil for the first half of the cook, tucking the edges under the pan so the fan cannot lift it. And test the middle with a skewer at the check time instead of trusting the colour. Paper and foil liners must be weighed down by the food; a loose sheet will lift into the element at any temperature.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'A muffin recipe says {OVEN_F}°F for {EX_OVEN_MIN} minutes. Baked goods get one of the smallest cuts in the table, so a basket air fryer runs them at {EX_F}°F ({EX_C}°C) for {EX_MIN} minutes, and you should test with a skewer at {EX_CHECK} minutes. An oven-style unit blows less directly onto the tops, so it takes {EX_OS_F}°F for {EX_OS_MIN} minutes. Bake in silicone or paper cups set in the basket, filled halfway rather than to the brim.',
      styleHeading: 'Converting 350°F to °C and gas mark',
      styleBody:
        '{OVEN_F}°F is {OVEN_C}°C rounded to the nearest five, which is how most European recipes print it, and gas mark {OVEN_MARK}. In the air fryer the general setting is {AF_F}°F, or {AF_C}°C — gas mark {AF_MARK} if you are reading the result against a UK recipe. Many air fryers sold in Europe step in 10°C rather than 5°C. If yours does, round down for cakes and casseroles and up for chicken: the dense foods are safe from a dark crust and the poultry gets the extra colour. The converter accepts °C directly if your recipe started there.',
      faqs: [
        {
          q: 'What is {OVEN_F}°F in an air fryer?',
          a: 'For a general recipe, {AF_F}°F ({AF_C}°C) in a basket air fryer with about {PCT}% less time, or {OS_F}°F in an oven-style unit. Cakes, casseroles, steak and fish take a smaller cut; the table above lists every food.',
        },
        {
          q: 'What is {OVEN_F}°F in Celsius for an air fryer?',
          a: '{OVEN_F}°F is {OVEN_C}°C. Converted for a basket air fryer it becomes {AF_C}°C. If your air fryer only shows °C, enter the recipe in °C in the converter and it does both steps at once.',
        },
        {
          q: 'How much shorter is the air fryer time at {OVEN_F}°F?',
          a: 'About {PCT}% shorter for most foods in a basket unit. Fries and bacon save the most, cakes and casseroles the least. The first time you cook a recipe, check at the time the converter shows rather than waiting for the end, since basket size and wattage vary.',
        },
        {
          q: 'Can I bake a cake in an air fryer at {OVEN_F}°F?',
          a: 'Yes, but use the converted temperature rather than {OVEN_F}°F, and a pan that leaves space around its sides for air. Cover the top loosely with foil if it browns before a skewer comes out clean. A cake deeper than about 5 cm is better in the oven.',
        },
        {
          q: 'Why not just subtract 25°F from {OVEN_F}°F?',
          a: 'Because it is only right for some foods. A flat 25°F works for chicken and general recipes, but dense batters and deep casseroles need the heat to reach the middle and get a smaller cut — the difference between a set centre and a raw one.',
        },
      ],
    },
    375: {
      metaTitle: '375°F to Air Fryer: Converted Temperature & Time',
      metaDescription:
        '{OVEN_F}°F oven recipe? Use {AF_F}°F ({AF_C}°C) in a basket air fryer, about {PCT}% less time. Per-food table for chicken thighs, pork chops, pastry and more, with a live converter.',
      metaKeywords: '375 to air fryer, 375 oven to air fryer, 375f to c air fryer, 375 degrees air fryer time',
      heading: '{OVEN_F}°F oven to air fryer',
      subDesc:
        'The temperature for chicken pieces, chops and pastry. The converter is set to {OVEN_F}°F; change the time and the food to match your recipe.',
      recipesHeading: 'What recipes use 375°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, gas mark {OVEN_MARK}) is the working temperature for food that has to brown and cook through at the same pace. Bone-in chicken thighs and drumsticks, pork chops, meatballs, sausages, stuffed peppers, puff pastry, hand pies and sheet-pan chicken with vegetables all sit here. It is hot enough for colour without the smoke you get higher up, and it is close to the temperatures air fryer recipes are written at natively, which makes it the easiest setting to convert. A general recipe drops to {AF_F}°F. The cut is the same as at lower temperatures, but food reaches the end of the cook in a different state: at this heat a piece of chicken is browned outside well before its centre is done, so the doneness check matters more than the clock.',
      failureHeading: 'The failure mode at 375°F: brown skin, underdone bone',
      failureBody:
        'Bone-in chicken is the trap. Skin and the thin end of a drumstick colour quickly in the moving air, so the piece looks ready while the meat against the bone is still pink. Thighs are forgiving because they stay juicy well past 165°F, which is why many cooks take them to 175–185°F; breasts are not, and dry out quickly once they pass 165°F. Arrange pieces skin side up with the thickest part towards the outside of the basket, where the air moves fastest, and turn them once halfway. With pastry the same speed works the other way: the top puffs and browns before the layers underneath have baked. Put pastry on the lowest rack of an oven-style unit, or bake it on a perforated liner so the heat reaches the base.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'A recipe roasts bone-in chicken thighs at {OVEN_F}°F for {EX_OVEN_MIN} minutes. In a basket air fryer that becomes {EX_F}°F ({EX_C}°C) for {EX_MIN} minutes; start checking the thickest thigh at {EX_CHECK} minutes and keep going until it reads at least 165°F next to the bone. In an oven-style air fryer, which behaves more like a small convection oven, it is {EX_OS_F}°F for {EX_OS_MIN} minutes. Turn the pieces once at the halfway point in either style.',
      styleHeading: 'Basket or oven-style at 375°F',
      styleBody:
        'Here the two styles differ by only a few degrees — {AF_F}°F in a basket, {OS_F}°F in an oven-style unit — but the time differs more: about {PCT}% less than the oven in a basket and about {OS_PCT}% less in an oven-style unit. A basket moves air faster around a smaller load, so it finishes sooner; an oven-style unit spreads food over racks and cooks more like a fan oven. If yours has two racks, swap them halfway, because the rack nearer the element browns faster. Preheat for {PREHEAT} minutes in a basket or {OS_PREHEAT} in an oven-style unit. {OVEN_F}°F is {OVEN_C}°C, and the converter accepts either unit.',
      faqs: [
        {
          q: 'What is {OVEN_F}°F in an air fryer?',
          a: 'Usually {AF_F}°F ({AF_C}°C) in a basket air fryer, with about {PCT}% less time than the oven recipe. An oven-style air fryer needs {OS_F}°F. Steak, fish and baked goods are cut less; see the table for each food.',
        },
        {
          q: 'What is {OVEN_F}°F in °C, and what do I set on my air fryer?',
          a: '{OVEN_F}°F is {OVEN_C}°C, the figure European recipes and packs usually print. For a basket air fryer set {AF_C}°C. If your dial steps in 10°C, round towards the higher setting for chicken and the lower one for pastry.',
        },
        {
          q: 'How long do chicken thighs take in the air fryer from a {OVEN_F}°F recipe?',
          a: 'Do not set {OVEN_F}°F: set {EX_F}°F. Bone-in thighs that take {EX_OVEN_MIN} minutes in the oven need about {EX_MIN} in a basket air fryer. Always confirm with a thermometer — at least 165°F at the bone.',
        },
        {
          q: 'Do I need to preheat the air fryer for a {OVEN_F}°F recipe?',
          a: 'A short preheat — {PREHEAT} minutes for a basket, {OS_PREHEAT} for an oven-style unit — helps pastry rise and skin crisp. For meatballs and stuffed peppers it makes little difference; add a minute to the time instead.',
        },
        {
          q: 'Can I cook a whole sheet-pan dinner from a {OVEN_F}°F recipe?',
          a: 'Yes, in batches or on two racks of an oven-style unit. Start the chicken first and add the vegetables for the last part of the time, because cut vegetables finish faster than bone-in meat at the same setting.',
        },
      ],
    },
    400: {
      metaTitle: '400°F Oven to Air Fryer (and 400°F to °C)',
      metaDescription:
        '{OVEN_F}°F in the oven = {AF_F}°F ({AF_C}°C) in a basket air fryer, about {PCT}% less time. Roast vegetables, potatoes and chicken breast — per-food table and live converter.',
      metaKeywords: '400 to air fryer, 400f to c air fryer, 400 degrees oven to air fryer, 400 oven air fryer time',
      heading: '{OVEN_F}°F oven to air fryer',
      subDesc:
        'The roasting temperature, and the one most often printed in °C on a European pack. The converter starts at {OVEN_F}°F — set your time and food.',
      recipesHeading: 'What recipes use 400°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, gas mark {OVEN_MARK}) is the classic roasting setting. Recipes use it for vegetables, potato wedges, chicken breast, sausages, salmon fillets, roasted chickpeas, homemade fries and anything finished with a crisp edge. An air fryer is a roaster at heart, so this is where it most clearly beats the oven: a general recipe drops to {AF_F}°F, and fries take the largest time cut in the table, with roast vegetables close behind, because they have lots of surface and little depth. Notice that the conversion never asks the basket to reach {OVEN_F}°F itself. The air fryer gets the same browning about {PCT}% faster at a lower setting, which leaves headroom below the {CEILING}°F maximum most basket units have.',
      failureHeading: 'The failure mode at 400°F: steamed, not roasted',
      failureBody:
        'High heat in a small space only works if the moisture can get away. Cut vegetables and potatoes release water as they heat, and in a full basket that steam stays around the food, so instead of browning it softens and goes pale. It is the most common complaint about air-fried vegetables, and more time does not fix it. Cook in a single layer with gaps, or in two batches; the second batch is usually a minute or two faster because the basket is already hot. Dry vegetables well after washing, toss them in a teaspoon of oil rather than a spoonful, and shake the basket at the check time so the pieces at the bottom come up into the air. Fat dripping from sausages or chicken skin can smoke at this heat, so empty the drawer between batches.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'A recipe roasts mixed vegetables at {OVEN_F}°F for {EX_OVEN_MIN} minutes. A basket air fryer does it at {EX_F}°F ({EX_C}°C) in {EX_MIN} minutes, with a shake at {EX_CHECK} minutes to check the colour. An oven-style air fryer takes {EX_OS_F}°F for {EX_OS_MIN} minutes; spread the vegetables over two racks rather than piling one, and swap the racks halfway.',
      styleHeading: '400°F to °C in an air fryer',
      styleBody:
        'The exact conversion of {OVEN_F}°F is {OVEN_C_EXACT}°C, rounded here to {OVEN_C}°C, while European recipes and oven dials usually round it to 200°C. That small gap does not matter in a roast. What matters is that the air fryer setting is lower: {AF_C}°C in a basket unit, {OS_C}°C in an oven-style one. If your air fryer only moves in 10°C steps, pick the lower step for potatoes and vegetables, which brown well anyway, and the higher one for chicken skin. Entering the recipe in °C in the converter gives you both numbers at once.',
      faqs: [
        {
          q: 'What is {OVEN_F}°F in an air fryer?',
          a: 'About {AF_F}°F ({AF_C}°C) in a basket air fryer, with about {PCT}% less time. In an oven-style unit, {OS_F}°F. Fries and bacon save the most time; baked goods and casseroles take the smallest cut.',
        },
        {
          q: '{OVEN_F}°F to °C: what do I set on my air fryer?',
          a: 'The recipe temperature is {OVEN_C}°C, often printed as 200°C. Set a basket air fryer to {AF_C}°C or an oven-style one to {OS_C}°C, and cut the time by roughly {PCT}%.',
        },
        {
          q: 'Can my air fryer go to {OVEN_F}°F?',
          a: 'Most basket units reach {CEILING}°F and oven-style units {OS_CEILING}°F, so yes, but you rarely need to. A {OVEN_F}°F oven recipe converts to a lower setting because the air fryer browns faster; set {OVEN_F}°F only when an air fryer recipe itself asks for it.',
        },
        {
          q: 'How long do roast potatoes take in the air fryer from a {OVEN_F}°F recipe?',
          a: 'Roughly a quarter less than the oven time for cut potatoes and other vegetables, at {AF_F}°F. Chunks cook faster than small whole potatoes. Shake twice, and judge by colour and a knife through the thickest piece.',
        },
        {
          q: 'Why are my air fryer vegetables soggy at {AF_F}°F?',
          a: 'Almost always overcrowding. The steam from the vegetables cannot escape, so they cook in it. Use a single layer, dry them well and use less oil; a hotter setting will not rescue a full basket.',
        },
      ],
    },
    425: {
      metaTitle: '425°F to Air Fryer: Setting, Time & the Max-Temp Limit',
      metaDescription:
        '{OVEN_F}°F in the oven = {AF_F}°F ({AF_C}°C) in a basket air fryer, right at its maximum. See which foods are capped, how much time is added back, and convert live.',
      metaKeywords: '425 to air fryer, 425 oven to air fryer, 425f to c air fryer, 425 degrees air fryer time',
      heading: '{OVEN_F}°F oven to air fryer',
      subDesc:
        'The crisping temperature, and the first one where a basket air fryer meets its ceiling. The converter is set to {OVEN_F}°F; pick the food to see whether it is capped.',
      recipesHeading: 'What recipes use 425°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, gas mark {OVEN_MARK}) is where recipes go for crunch: crispy wings, roast potatoes with a shattering edge, salmon with a firm top, sheet-pan gnocchi, croutons and broccoli with charred tips. Frozen chips and nuggets often say it too, but those follow different rules, so use frozen mode for them. In the oven it takes this much heat to drive moisture off the surface quickly. An air fryer gets there sooner, so a general recipe converts to {AF_F}°F — exactly the {CEILING}°F top of a typical basket unit. Everything with the normal cut lands on the ceiling and converts as usual, but steak, fish, baked goods and casseroles take a smaller cut, so their converted temperature is above what the basket can reach. The table marks those rows.',
      failureHeading: 'The failure mode at 425°F: the ceiling',
      failureBody:
        'Most converters subtract and print the result, even when it is a temperature your air fryer cannot reach. At {OVEN_F}°F that happens for the foods with a gentler cut: the calculation asks for more than {CEILING}°F, the basket gives you {CEILING}°F, and the food comes out underdone because the time was cut as if the heat were there. This converter clamps the temperature to the ceiling and adds part of the time back, so the capped rows save less time than the rest. The other risk at this heat is smoke. Fat from wings and salmon skin drips onto a very hot drawer, so use an oil with a high smoke point, add marinades with sugar or honey only for the last few minutes, and empty the drawer between batches.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'A recipe roasts salmon fillets at {OVEN_F}°F for {EX_OVEN_MIN} minutes. Fish takes a smaller cut than most foods, so its converted temperature is over the basket limit and is held at {EX_F}°F ({EX_C}°C), with the time trimmed only to {EX_MIN} minutes. Check at {EX_CHECK} minutes: salmon is done at 145°F in the thickest part, or when it flakes. An oven-style air fryer has a higher ceiling, so it runs the full {EX_OS_F}°F for {EX_OS_MIN} minutes.',
      styleHeading: 'Why oven-style units differ at 425°F',
      styleBody:
        'An oven-style air fryer usually reaches {OS_CEILING}°F, so at {OVEN_F}°F nothing is capped: a general recipe is {OS_F}°F with about {OS_PCT}% less time, and the gentler-cut foods simply run hotter. The capped rows only appear in the basket column, so check which kind you have before you trust any chart. The converter uses {CEILING}°F for basket units and {OS_CEILING}°F for oven-style ones, the common limits; if the dial on yours stops lower, cook at its maximum and allow a little extra time. In °C the recipe is {OVEN_C}°C and a basket air fryer is set to {AF_C}°C.',
      faqs: [
        {
          q: 'What is {OVEN_F}°F in an air fryer?',
          a: '{AF_F}°F ({AF_C}°C) in a basket air fryer for most foods — the basket maximum — with about {PCT}% less time. An oven-style unit uses {OS_F}°F. Steak, fish, cakes and casseroles are capped in a basket and keep more of their time.',
        },
        {
          q: 'What is {OVEN_F}°F in Celsius?',
          a: '{OVEN_F}°F is {OVEN_C}°C, or gas mark {OVEN_MARK}. A basket air fryer cannot go that high, so set {AF_C}°C and use the converted time.',
        },
        {
          q: 'My air fryer only goes to {CEILING}°F. Can I still cook a {OVEN_F}°F recipe?',
          a: 'Yes. For most foods the converted setting is {CEILING}°F anyway. For the foods that would need more, cook at {CEILING}°F and allow a little more time; the table shows how much less time each food saves when it is capped.',
        },
        {
          q: 'How long do wings take in the air fryer from a {OVEN_F}°F recipe?',
          a: 'At {AF_F}°F, wings save about a fifth of the oven time. Dry them well, leave space between them, shake halfway and cook until the skin is crisp and the meat reaches at least 165°F.',
        },
        {
          q: 'Why does my air fryer smoke at high temperatures?',
          a: 'Fat and sugary marinade drip onto the hot drawer and burn. Use a high-smoke-point oil, add sticky glazes near the end, and empty or wipe the drawer between batches.',
        },
      ],
    },
    450: {
      metaTitle: '450°F to Air Fryer: What to Set When the Basket Maxes Out',
      metaDescription:
        '{OVEN_F}°F is above a basket air fryer’s {CEILING}°F limit. Set {AF_F}°F and save about {PCT}% of the time, not the usual cut — per-food table and live converter.',
      metaKeywords: '450 to air fryer, 450 oven to air fryer, 450f to c air fryer, 450 degrees air fryer',
      heading: '{OVEN_F}°F oven to air fryer',
      subDesc:
        'Hotter than a basket air fryer goes. The converter starts at {OVEN_F}°F and shows the capped setting with the time added back, which most charts leave out.',
      recipesHeading: 'What recipes use 450°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, gas mark {OVEN_MARK}) is the top end of home cooking: pizza on a stone, flatbreads, blistered tomatoes and peppers, smashed potatoes, hasselback potatoes, quick-roasted asparagus, and steak or chops seared at the end of a reverse sear. Recipes ask for it when the outside has to colour before the inside overcooks. A flat rule subtracts 25°F and stops there, but the result is not a setting a basket air fryer has. Every food in the table is capped at the basket maximum of {CEILING}°F, so the basket column shows the same temperature on every row and only the time varies. That is the honest answer: a basket air fryer cannot do {OVEN_F}°F, and the time has to make up the difference.',
      failureHeading: 'The failure mode at 450°F: burnt top, wrong time',
      failureBody:
        'Two things go wrong. The first is time. A chart that prints a basket temperature it cannot reach also cuts the time as if that heat existed, so the food comes out pale and underdone. Because the temperature is held at {CEILING}°F here, this converter gives back part of the cut: a general recipe saves about {PCT}% of the oven time rather than the usual amount. The second is the surface. At the maximum the element runs flat out a few centimetres from the food, so tall items scorch on top, cheese and breadcrumbs burn before the base is crisp, and paper that is not pinned down can touch the element. Keep pizza and flatbreads thin, add cheese for the final few minutes if it browns early, and trim liners to the base of the basket.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'A pizza recipe says {OVEN_F}°F for {EX_OVEN_MIN} minutes. A basket air fryer is held at {EX_F}°F ({EX_C}°C), so it takes {EX_MIN} minutes; check the base at {EX_CHECK} minutes. An oven-style air fryer can run {EX_OS_F}°F, below its own ceiling, and finishes in {EX_OS_MIN} minutes. The basket is the slower of the two here because it is the cooler one, the reverse of what happens at lower temperatures.',
      styleHeading: '450°F in an oven-style air fryer',
      styleBody:
        'Oven-style air fryers usually reach {OS_CEILING}°F, so {OVEN_F}°F converts normally there: {OS_F}°F ({OS_C}°C) with about {OS_PCT}% less time for a general recipe. If you own both kinds, or are choosing between them, this is the temperature where the difference shows. For pizza, flatbreads and anything you want charred, the oven-style unit is the better tool. A basket unit still makes good pizza and potatoes; it just needs the extra minutes the converter adds. In °C the recipe reads {OVEN_C}°C, and the basket setting is {AF_C}°C.',
      faqs: [
        {
          q: 'What is {OVEN_F}°F in an air fryer?',
          a: 'In a basket air fryer, {AF_F}°F ({AF_C}°C) — its maximum — with about {PCT}% less time. In an oven-style air fryer, {OS_F}°F with about {OS_PCT}% less time. Every food is capped in a basket unit.',
        },
        {
          q: 'What is {OVEN_F}°F in Celsius for an air fryer?',
          a: '{OVEN_F}°F is {OVEN_C}°C, or gas mark {OVEN_MARK}. A basket air fryer tops out at {AF_C}°C, so set that and use the converted time.',
        },
        {
          q: 'Why not subtract 25°F and set the result?',
          a: 'Because a basket air fryer cannot reach it. The dial stops at {CEILING}°F, so the food cooks cooler than the chart assumed while the time was cut in full. Set {AF_F}°F and use the longer time the converter gives.',
        },
        {
          q: 'Can I make pizza in the air fryer from a {OVEN_F}°F recipe?',
          a: 'Yes. Use a pizza that fits flat, set {EX_F}°F in a basket unit and, for a {EX_OVEN_MIN}-minute recipe, check the base at {EX_CHECK} minutes. Add the cheese part-way if the top browns before the crust is crisp.',
        },
        {
          q: 'Is it safe to run an air fryer at its maximum temperature?',
          a: 'Yes, it is designed for it. Keep it on a heat-proof surface with space behind the vent, never cover the basket completely with foil or paper, and empty the fat from the drawer so it does not smoke.',
        },
      ],
    },
  },
};

export default tempLanding;

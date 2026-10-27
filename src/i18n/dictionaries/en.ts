import type { Dictionary } from '../types';
import tempLanding from './temp-landings/en';
import { presets, presetsIndex } from './presets/en';

const en: Dictionary = {
  nav: {
    convert: 'Convert',
    reverse: 'Reverse',
    foodPresets: 'Food presets',
    brands: 'Brands',
    chart: 'Chart',
    guide: 'Guide',
  },
  footer: {
    converter: 'Converter',
    foodPresets: 'Food presets',
    conversionChart: 'Conversion chart',
    about: 'About',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    moreFreeTools: 'More free tools:',
    copyrightSuffix: 'free browser-based cooking conversion tools',
  },
  converter: {
    widgetLabel: 'Oven → Air fryer',
    live: 'Live',
    ovenTemperature: 'Oven temperature',
    ovenTime: 'Oven time',
    min: 'min',
    foodType: 'Food type',
    airFryerStyle: 'Air fryer style',
    basket: 'Basket',
    ovenStyle: 'Oven-style',
    airFryerSetting: 'Air fryer setting',
    checkAt: 'Check at',
    preheat: 'Preheat',
    gasMark: 'Gas mark',
    gasMarkDash: 'Gas mark —',
    unitBasket: 'basket model',
    unitOven: 'oven-style unit',
    cappedNoteTemplate:
      'Your recipe runs hotter than a {unit} can go. Held at {ceiling}°F with time added back — check early and expect a slightly softer surface.',
    foods: {
      general: { label: 'General / mixed', tip: 'Shake or flip at the halfway mark.' },
      fries: { label: 'Fries & potatoes', tip: 'Shake twice — once early, once at halfway. Keep to a single layer.' },
      wings: { label: 'Chicken wings', tip: 'Pat dry before cooking and flip at halfway for even skin.' },
      breast: { label: 'Chicken breast (boneless)', tip: 'Pull at 165°F internal — the temperature climbs while it rests.' },
      thigh: { label: 'Chicken thighs / bone-in', tip: 'Skin side up the whole way. No flip needed.' },
      steak: { label: 'Steak & thick cuts', tip: 'Flip once, then rest 5 minutes before slicing.' },
      fish: { label: 'Fish & salmon', tip: 'No flip. Check at the low end — fish overcooks in under a minute.' },
      bacon: { label: 'Bacon', tip: 'Single layer. Drain the fat at halfway if it starts to smoke.' },
      veg: { label: 'Vegetables', tip: 'Cut pieces to an even size and toss at halfway.' },
      baked: { label: 'Baked goods & cookies', tip: 'A gentler cut — batter sets more slowly than the top browns.' },
      pizza: { label: 'Pizza & reheating', tip: 'No preheat needed for reheating. Watch the crust, not the clock.' },
      casserole: { label: 'Casseroles & thick bakes', tip: 'Cover with foil if the top browns before the middle is hot.' },
    },
  },
  reverseConverter: {
    widgetLabel: 'Air fryer → Oven',
    airFryerTemperature: 'Air fryer temperature',
    airFryerTime: 'Air fryer time',
    ovenSetting: 'Oven setting',
    stepNote: 'Rounded to 25°F oven-dial steps',
    ovenCaveat:
      "A standard oven doesn't circulate air the way a fryer basket does — preheat fully before adding food, and expect single-layer crisping to fall a little short of the air-fried result.",
    ambiguousCeilingNoteTemplate:
      'This is at the {unit} ceiling ({ceiling}°F). If it was itself converted down from a hotter oven, the time already includes about 8% extra — subtract that back out for a more accurate result.',
  },
  convectionConverter: {
    widgetLabel: "Convection → Air fryer",
    ovenTemperature: "Convection temperature",
    ovenTime: "Convection time",
  },
  reverseConvectionConverter: {
    widgetLabel: "Air fryer → Convection",
    airFryerTemperature: "Air fryer temperature",
    airFryerTime: "Air fryer time",
    ovenSetting: "Convection oven setting",
    stepNote: "Rounded to 25°F oven-dial steps",
    ovenCaveat: "Keep the fan on and spread the food in a single layer with space around each piece — a crowded convection tray loses the airflow these times assume.",
    ambiguousCeilingNoteTemplate: "This is at the {unit} ceiling ({ceiling}°F). If it was converted down from a hotter convection recipe, the time already includes about 8% extra — subtract that back out, or go back to the original recipe.",
  },
  frozenConverter: {
    widgetLabel: "Frozen pack → Air fryer",
    ovenTemperature: "Pack temperature",
    ovenTime: "Pack time",
    packType: "Pack instructions are for",
    packConventional: "Conventional oven",
    packFan: "Fan oven",
    shake: "Shake",
    flip: "Flip",
    turnAtTemplate: "{action} at {times} min",
    noTurn: "No turning needed",
    listJoin: " and ",
    internalTemplate: "Internal {f}°F / {c}°C",
    rawWarningTemplate: "Cooking raw chicken from frozen: check the thickest piece reaches {f}°F ({c}°C) with a thermometer before eating. The outside browns well before a frozen center is safe.",
    foods: {
      fries: {
        label: "Fries & chips",
        tip: "Keep it to a single layer or close to it, and shake apart any pieces frozen together.",
      },
      nuggets: {
        label: "Chicken nuggets",
        tip: "Spread them out — pieces that touch steam instead of crisping.",
      },
      tenders: {
        label: "Breaded chicken, tenders & Kievs",
        tip: "Check the pack: many breaded chicken products are sold uncooked, not just reheated.",
      },
      fish: {
        label: "Fish fingers & breaded fillets",
        tip: "Flip gently with tongs — the coating sets before the fish is firm.",
      },
      pizza: {
        label: "Pizza (personal size)",
        tip: "Only a pizza that lies flat in the basket. Check the base at the low end of the time.",
      },
      springRolls: {
        label: "Spring rolls & samosas",
        tip: "A light spray of oil helps the pastry blister evenly.",
      },
      hashBrowns: {
        label: "Hash browns & potato shapes",
        tip: "Flat patties brown one side at a time, so flip them at halfway. Round shapes like tots roll, so shake those instead.",
      },
      veg: {
        label: "Frozen vegetables",
        tip: "Don't thaw first. Shaking lets the steam out; skip it and they go soggy.",
      },
      wings: {
        label: "Chicken wings (raw, frozen)",
        tip: "Pull apart wings frozen together at the first shake.",
      },
      rawChicken: {
        label: "Raw chicken breast (from frozen)",
        tip: "Lower and slower than fresh — the center has to thaw and cook through.",
      },
    },
  },
  home: {
    metaTitle: 'Oven to Air Fryer Converter',
    metaDescription:
      'Free oven to air fryer converter. Convert oven temperature and time to air fryer settings by food type and basket vs. oven-style — no flat 25° guesswork, no sign-up.',
    metaKeywords:
      'oven to air fryer converter, oven to air fryer conversion, conventional oven to air fryer conversion, convert oven to air fryer, oven to air fryer cooking time conversion, air fryer to oven conversion, convert air fryer to oven, air fryer to oven calculator, air fryer conversion chart, air fryer temperature chart, air fryer cooking times, air fryer calculator',
    eyebrow: 'Free / No sign-up / Works offline',
    heroTitle: 'Oven to Air Fryer Converter',
    heroSub:
      'Enter the temperature and time on the recipe. Get the air fryer setting for your food, adjusted for basket or oven-style — not a flat 25° rule.',
    ctaLabel: 'Open the full converter',
    commonConversionsHeading: 'Common conversions',
    commonConversions: ['−20% time', '−20% time', '−20% time', 'basket ceiling'],
    railFootnote: 'Multipliers tuned for basket and oven-style air fryers, per food type.',
    comingSoon: 'Coming soon',
    sectionTitles: {
      convert: 'Convert',
      reverse: 'Reverse convert',
      frozen: 'Frozen food mode',
      presets: 'Food presets',
      brands: 'Brand presets',
    },
    convertCards: [
      { title: 'Oven → Air Fryer', desc: 'The flagship. Food-type multipliers, basket vs. oven-style, max-temp ceiling, °F/°C/gas mark.' },
      { title: 'Convection → Air Fryer', desc: 'Convection recipes are already fan-adjusted, so they need a gentler cut. Most tools get this wrong.' },
      { title: 'Batch & serving scaler', desc: 'Adjust time when the basket is crowded or you are cooking in two loads.' },
      { title: 'Wattage adjustment', desc: 'Compact 1,200 W baskets run slower than 1,700 W models. Correct for yours.' },
    ],
    reverseCards: [
      { title: 'Air Fryer → Oven', desc: 'Cooking for a crowd, or the basket is busy. Go back the other way.' },
      { title: 'Air Fryer → Convection', desc: 'Same fan principle, larger cavity. Adds back time, not temperature.' },
      { title: '°F / °C / gas mark', desc: 'Straight temperature conversion for UK, EU, and US recipes.' },
      { title: 'Printable conversion chart', desc: 'Full °F and °C table for the fridge door. One page, no email signup.' },
    ],
    frozenTeaser: {
      heading: 'Frozen straight from the bag',
      desc: 'Keep the package temperature, cut about 30% of the time — the opposite of the standard rule. Pick what you are cooking.',
      selectLabel: 'Select a frozen food',
      options: ['Frozen french fries', 'Frozen chicken nuggets', 'Frozen chicken breast', 'Frozen pizza', 'Frozen fish sticks'],
      goLabel: 'Go',
    },
    frozenCards: [
      { title: 'Frozen fries', desc: 'Single layer, no oil needed.' },
      { title: 'Frozen nuggets', desc: 'Breaded coating browns fast.' },
      { title: 'Frozen chicken breast', desc: 'Lower and slower than you expect.' },
      { title: 'Frozen pizza', desc: 'Personal size only in a basket.' },
    ],
    frozenCardSpec: {
      template: '{AF_F}°F · {MIN} min · {EXTRA}',
      shake: 'shake ×{N}',
      shakeOnce: 'shake once',
      flip: 'flip ×{N}',
      flipOnce: 'flip once',
      noTurn: 'no turning',
      internal: '{INT_F}°F core',
    },
    presetsTeaser: {
      heading: 'Time and temperature for one specific food',
      desc: 'Every preset gives temperature, time, shake or flip points, and doneness cues. No recipe blog to scroll.',
      selectLabel: 'Select a food preset',
      goLabel: 'Go',
    },
    allPresetsCard: { title: 'All presets →', desc: 'Meat, fish, vegetables, baking, reheating.' },
    brandCards: [
      { title: 'Ninja', spec: 'Max 400°F · basket & dual', desc: 'AF101, AF161, DZ201 and Foodi settings.' },
      { title: 'Cosori', spec: 'Max 450°F · 11 presets', desc: 'Maps the built-in preset buttons to real times.' },
      { title: 'Philips', spec: 'Max 390°F · Rapid Air', desc: 'Lower ceiling than most — times run longer.' },
      { title: 'Model max-temp reference', spec: '60+ models', desc: 'The ceiling table that feeds the converter above.' },
    ],
    chartStrip: ['Food-type multipliers', 'Basket & oven-style', '°F · °C · gas mark', 'Free — no account'],
    guide: [
      {
        heading: 'What Is an Oven to Air Fryer Converter?',
        body: "An oven to air fryer converter takes the temperature and time from a conventional oven recipe and translates it into the matching air fryer setting — so a recipe written for a 425°F oven doesn't come out with burnt edges and a raw center just because it was cooked in a basket instead. It's built for the moment every home cook eventually hits: a favorite recipe lists an oven temperature and bake time, but firing up the whole oven feels like overkill for four chicken thighs or a tray of fries, and the air fryer on the counter can do the job faster and with less energy — if you know what settings to use. That's the gap this tool closes. Enter the oven temperature and time from the recipe, say what you're cooking and whether your unit is a basket or an oven-style air fryer, and it returns a setting that actually matches how air fryers cook.",
      },
      {
        heading: 'How Oven to Air Fryer Conversion Works',
        body: "Most oven to air fryer conversion advice online reduces to one line: subtract 25°F and cut the time by a fifth. That rule isn't wrong exactly — air fryers are small, forced-air convection ovens, so they transfer heat faster and need both a lower temperature and a shorter cook time than a conventional oven. But treating every food the same way is where flat rules break down. A flat rule assumes a tray of thin-cut fries and a dense loaf of banana bread respond to faster airflow identically. They don't. Thin, high-surface-area foods like fries, bacon, and chicken wings are surrounded by hot air on nearly every side, so they cook dramatically faster — often needing 25–30% less time. A dense casserole or a thick cut of meat still has to conduct heat to its center the same way it would in an oven, so the savings are smaller, closer to 10–15%. Apply the fries multiplier to the casserole and you'll pull it out underdone; apply the casserole multiplier to the fries and you'll dry them out. That's why a proper conventional oven to air fryer conversion needs a multiplier per food category instead of one number for everything — the converter above looks at what you selected and applies the time reduction that food type actually needs, alongside the standard temperature drop.",
      },
      {
        heading: 'Step by Step: How to Convert Oven to Air Fryer',
        body: 'To convert oven to air fryer settings for any recipe: enter the oven temperature exactly as written, enter the oven bake time, pick the closest food type, then select whether your appliance is a basket-style air fryer or an oven-style unit (an air fryer oven or toaster-oven hybrid). The tool drops the temperature, applies the correct food-type time multiplier, and checks the result against what your specific appliance can actually reach — so you never get a number that doesn\'t exist on your dial.',
      },
      {
        heading: 'Oven to Air Fryer Cooking Time Conversion',
        body: "Temperature is only half the job — oven to air fryer cooking time conversion matters just as much, and it's the part flat-rule calculators usually get wrong. Because air fryers circulate hot air directly around food in a small chamber, heat reaches the surface faster and cooking finishes sooner even at a lower temperature. That's why a 45-minute oven bake might become a 32-minute air fryer cook rather than a simple percentage of the original number: the time reduction scales with how much surface area the food exposes to that airflow, not just with the temperature change.",
      },
      {
        heading: 'Air Fryer to Oven Conversion (Going the Other Way)',
        body: "Conversion works in both directions. Sometimes you have an air fryer recipe or a preset from your appliance's manual and need to convert air fryer to oven settings instead — because you're cooking a bigger batch than the basket can hold, the air fryer is already busy with something else, or you're feeding a table using the full-size oven. Air fryer to oven conversion generally means raising the temperature and adding back cooking time, since a conventional oven's larger cavity and slower airflow can't match the air fryer's concentrated heat. An air fryer to oven calculator applies this in reverse: add roughly 25°F back to the air fryer temperature, then extend the time by the same food-type-aware percentage the forward conversion subtracted. It's the same underlying logic, run backward, and it's just as sensitive to food type — a batch of nuggets scaled up for the oven needs a different time adjustment than a whole chicken would.",
      },
      {
        heading: 'Basket vs. Oven-Style Air Fryers',
        body: "Not all air fryers behave the same, which is why this converter asks which type you own before finishing the conversion. Basket-style air fryers pack food into a small, sealed chamber with air moving on every side — that's what makes them fast, but it also means most models cap out around 400°F, and pushing past that ceiling isn't realistic no matter what a generic calculator suggests. Oven-style air fryers (including air fryer ovens and toaster-oven-style baskets) have more air volume around the food, so the effect is gentler: temperatures can run a little higher, up to around 450°F, before hitting a practical ceiling. Feeding your appliance type into the conversion, instead of ignoring it, is what keeps the output realistic.",
      },
      {
        heading: 'Tips for Getting the Best Results',
        body: "A few things help any oven to air fryer converter output land closer to right on the first try. Preheat briefly — about 3 minutes for a basket, 4 for oven-style — since air fryers lose more relative heat than an oven does when the door or drawer opens. Don't overcrowd the basket; a single, mostly uncrowded layer is what the food-type multipliers assume, and a packed basket needs extra time closer to what a full oven would. Check food a few minutes before the converted time suggests, especially the first time you're converting a new recipe, since wattage and calibration vary between air fryer models. And treat frozen food differently — it follows the opposite pattern from a fresh recipe, keeping close to the package temperature while still cutting time, since the food needs the initial heat just to thaw before it can cook through.",
      },
    ],
  },
  tool: {
    metaTitle: 'Oven to Air Fryer Converter',
    metaDescription:
      "Enter the oven temperature and time from any recipe. Get the matching air fryer setting, adjusted for food type and basket vs. oven-style — with a ceiling clamp so it never suggests a temperature your unit can't reach.",
    metaKeywords: 'oven to air fryer conversion, oven to air fryer calculator, air fryer conversion calculator, air fryer conversion chart',
    backLink: 'All tools',
    heading: 'Oven to Air Fryer Converter',
    subDesc:
      "Enter the oven temperature and time from any recipe. Get the matching air fryer setting, adjusted for food type and basket vs. oven-style — with a ceiling clamp so it never suggests a temperature your unit can't reach.",
    aboutHeading: 'About oven-to-air-fryer conversion',
    aboutBody:
      "Most oven-to-air-fryer calculators apply one flat rule to every food: subtract 25°F, cut the time by 20%. It's a reasonable starting point, but it treats a tray of thin fries the same as a dense casserole, and it never checks whether the result is a temperature your air fryer can actually reach. This tool does two things differently: it adjusts the multiplier per food type, and it clamps the output to your unit's real ceiling instead of returning a number that doesn't exist on your dial.",
    multipliersHeading: 'How the food-type multipliers work',
    multipliersBody:
      "An air fryer's compact chamber and forced air move heat onto food far faster than a full-size oven, so cook times always drop — but by how much depends on the food's surface area and density. Thin, high-surface-area foods like fries or bacon lose the most time (roughly a 30% cut) because the hot air reaches every side almost immediately. Dense foods like casseroles or baked goods lose the least (roughly 15%) because heat still has to work its way to the center. Chicken, fish, and vegetables fall in between. The converter looks up the right multiplier for your selected food instead of applying one number to everything.",
    basketVsOvenHeading: 'Basket vs. oven-style airflow',
    basketVsOvenBody:
      "A basket-style air fryer packs food into a small chamber with air circulating on every side, which cooks fast but has a lower safe ceiling — most baskets top out around 400°F. Oven-style units (air fryer ovens and toaster-oven-style baskets) have more air volume around the food, so the effect is slightly gentler: this tool cuts 5°F less off the oven temperature and adds a small time bump for oven-style units, and allows the result to run up to 450°F before clamping.",
    whatHappensHeading: 'What happens when a recipe runs hotter than your air fryer can go',
    whatHappensBody:
      "A 450°F recipe converted with a flat rule on a 400°F-max basket air fryer would return 425°F — a setting that doesn't exist on the dial. This tool clamps the result to the unit's real ceiling (400°F basket, 450°F oven-style) and adds time back to compensate for the lower heat, with a plain-language note explaining what happened and what to expect (a slightly softer surface, so check a little early). It's the single most common gap across other air fryer calculators, and the reason this tool exists.",
    relatedChartLink: 'Printable conversion chart',
    relatedReverseLink: 'Air Fryer → Oven converter',
    relatedConvectionLink: "Convection → Air Fryer converter",
    relatedFrozenLink: "Frozen food mode (packaging instructions)",
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Why not just subtract 25°F and cut the time by 20% for everything?',
        a: "Because different foods respond differently to the air fryer's faster airflow. Thin, high-surface-area food like fries needs a bigger time cut (about 30%) or it dries out; a dense casserole barely needs one (about 15%). This converter applies a separate multiplier per food type instead of one flat rule.",
      },
      {
        q: 'What happens if the converted temperature is higher than my air fryer can reach?',
        a: "The result is clamped to your unit's realistic ceiling — 400°F for a basket-style air fryer, 450°F for oven-style — and a few extra minutes are added back to compensate, with a note explaining why. Most calculators silently return a number your appliance can't actually hit.",
      },
      {
        q: "What's the difference between basket and oven-style settings?",
        a: 'A basket air fryer surrounds food with hot air on all sides in a small chamber, so it cooks faster and has a lower practical temperature ceiling. Oven-style units (air fryer ovens, toaster-oven-style baskets) have more air volume around the food, so they run a touch cooler relative to the oven and can go a little hotter before clamping.',
      },
      {
        q: 'Does this work for food straight from the freezer?',
        a: 'Frozen food follows different logic than a fresh-from-the-fridge recipe — keep the package temperature roughly as-is and cut the time by about 30%, the opposite of the usual rule, since the food needs the full heat just to thaw before it can cook through.',
      },
      {
        q: 'How precise is the result?',
        a: 'Temperatures round to the nearest 5° to match how air fryer dials and digital controls actually step. Treat the result as a starting point, not a guarantee — check food a little before the suggested time, especially the first time you cook something in a new appliance.',
      },
      {
        q: 'Do I need to preheat?',
        a: 'A short preheat helps the result land on target: about 3 minutes for a basket-style unit, 4 minutes for oven-style (shown in the result panel above). Skipping preheat generally just means adding a minute or two to the cook time.',
      },
      {
        q: 'Can you convert an oven to an air fryer?',
        a: "You can't turn a conventional oven into an air fryer appliance — they're different pieces of hardware. What you can do is convert a recipe's oven temperature and time into the equivalent air fryer setting, which is exactly what this tool does: it accounts for the air fryer's faster, forced-air cooking so the same dish comes out right in either appliance.",
      },
      {
        q: 'Is 200 degrees in an air fryer the same as an oven?',
        a: 'No. Air fryers circulate hot air directly around food in a small chamber, so 200° in an air fryer cooks noticeably faster and browns more than 200° in a conventional oven. As a rule of thumb, drop the temperature by about 20°F (or roughly 20°C to 180°C) and shorten the time to compensate — use the calculator above for a number tuned to your specific food.',
      },
      {
        q: 'What is the 20/20 rule for air fryers?',
        a: "The 20/20 rule is a popular shorthand for oven-to-air-fryer conversion: lower the oven temperature by 20°F and cut the cooking time by 20%. It's a reasonable quick estimate, but it applies the same adjustment to every food — this converter refines it with a separate time multiplier per food type instead of one flat number.",
      },
      {
        q: 'What is 30 minutes in the oven in an air fryer?',
        a: "Roughly 21–25 minutes, depending on what you're cooking. Thin, high-surface-area foods like fries or wings lose closer to 30% of the time (about 21 minutes), while dense foods like casseroles lose closer to 15% (about 25 minutes). Enter 30 minutes and your food type above for an exact figure.",
      },
      {
        q: 'How do I convert oven 200°C for 15 minutes to air fryer?',
        a: 'As a starting point, 200°C for 15 minutes in the oven becomes roughly 180°C for 12 minutes in an air fryer — a 20° drop and a 20% time cut. The exact numbers shift with food type and whether you have a basket or oven-style unit, which is what the calculator above accounts for.',
      },
      {
        q: 'Is an air fryer faster than an oven?',
        a: "Yes, typically 20–30% faster. An air fryer's small cooking chamber, closer heating element, and forced-air circulation transfer heat to food much faster than a full-size oven, and it needs little to no preheat time compared to an oven's 10–15 minutes.",
      },
      {
        q: 'Can I replace my oven with an air fryer?',
        a: "For everyday small-batch cooking — chicken, fish, vegetables, fries, reheating leftovers — an air fryer can replace the oven most of the time, faster and with less energy. It won't replace it entirely: large roasts, sheet-pan meals, multi-rack baking, and anything too big for the basket still need a full-size oven.",
      },
      {
        q: 'How to turn an oven into an air fryer?',
        a: 'You can\'t convert the appliance itself, but many modern ovens include a convection or "air fry" setting that approximates one — turning on the fan lowers the effective cooking time and temperature similarly to an air fryer. Otherwise, use this converter to translate any oven recipe into air fryer settings and cook it in a separate air fryer.',
      },
      {
        q: 'How long is 20 minutes in an oven in an air fryer?',
        a: 'Around 14–17 minutes for most foods — roughly a 15–30% cut depending on food type. Thin foods like fries or bacon land closer to 14 minutes; dense foods like baked goods land closer to 17. Use the calculator above with your specific food for a precise number.',
      },
      {
        q: 'Can I use aluminum foil in an air fryer?',
        a: "Yes, most air fryers can safely use aluminum foil as long as it doesn't block airflow around the food or touch the heating element. Weigh it down with food so it doesn't blow into the coil, leave gaps for air to circulate, and avoid foil with very acidic foods (tomato, citrus, vinegar-based marinades) for extended cook times, since acid can react with the metal.",
      },
      {
        q: 'Which is healthier, an air fryer or an oven?',
        a: "They're roughly equivalent — both cook with little to no added oil, unlike deep frying. An air fryer's health advantage is specifically over deep frying (up to 70–80% less oil), not over oven baking, which already uses minimal oil. The main difference versus an oven is convenience and speed, not nutrition.",
      },
      {
        q: "What's the difference between an air fryer and a convection oven?",
        a: "They use the same principle — a fan circulating hot air — but an air fryer's chamber is much smaller and the food sits closer to both the fan and the heating element, so it cooks faster and crisps more aggressively. A convection oven applies the same fan-assisted airflow across a much larger cavity, which is why convection recipes need a gentler adjustment than standard oven recipes when converting to an air fryer.",
      },
      {
        q: 'Do air fryers use less energy than an oven?',
        a: 'Yes. A typical air fryer draws 1,200–1,800 watts and runs for a fraction of the time an oven needs (no lengthy preheat, smaller volume to heat), so a single meal generally costs noticeably less energy than heating a full-size oven for the same food.',
      },
      {
        q: 'Can I put a metal pan or oven-safe dish in an air fryer?',
        a: "Yes, as long as it's oven-safe and fits in the basket or tray with room for air to circulate on all sides. Metal, oven-safe glass, and ceramic all work; avoid anything that blocks airflow or is too tall to let the basket close properly.",
      },
    ],
  },
  reverseTool: {
    metaTitle: 'Air Fryer to Oven Converter',
    metaDescription:
      "Enter the air fryer temperature and time from a recipe, a preset, or your appliance's manual. Get the matching oven setting, adjusted for food type and basket vs. oven-style, rounded to the 25° steps a real oven dial uses.",
    metaKeywords:
      'air fryer to oven conversion, air fryer to oven calculator, convert air fryer to oven, air fryer to oven cooking time conversion, air fryer to conventional oven, air fryer setting to oven temperature',
    backLink: 'All tools',
    heading: 'Air Fryer to Oven Converter',
    subDesc:
      "Enter the air fryer temperature and time from a recipe, a preset, or your appliance's manual. Get the matching oven setting, adjusted for food type and basket vs. oven-style, rounded to the 25° steps a real oven dial uses.",
    aboutHeading: 'About air-fryer-to-oven conversion',
    aboutBody:
      "Most oven-to-air-fryer tools only run in one direction, but the reverse trip comes up just as often. A recipe card, a preset from your air fryer's manual, or a tip from a friend gives you an air fryer temperature and time, and you need the conventional-oven numbers instead — because you're cooking for more people than the basket holds, the air fryer is already busy with something else, or the oven is simply the right tool for what you're making today. This converter runs the flagship oven-to-air-fryer engine backward: enter the air fryer temperature and time, pick the food type and whether your unit is basket or oven-style, and it returns the oven setting that recipe would need — using the same per-food multipliers as the forward converter, not a flat number reversed.",
    roundingHeading: 'Why the oven result rounds to 25°F, not 5°F',
    roundingBody:
      "An air fryer's digital display can show any 5° step, but a real oven dial or knob only clicks in 25° increments — 325, 350, 375, 400, and so on. Round a reverse conversion to the air fryer's finer 5° grid and you'd get numbers like 405°F or 415°F that don't exist on an oven dial, and running a recipe both ways — oven to air fryer and back to oven — would drift a little further off the original number every time it changed hands. Snapping the oven result to the nearest 25° instead keeps every result a setting you can actually turn a dial to, and it's why converting the same recipe in both directions lands back close to where it started instead of wandering off.",
    workedExampleHeading: 'Worked example',
    workedExampleTemplate:
      "Take a basket air fryer recipe running general food at 375°F for 20 minutes: convert it back and the oven setting comes out to {GENERAL_OVEN_F}°F for {GENERAL_OVEN_MIN} minutes — the air fryer's usual 25° temperature cut and 20% time savings added back. Fries behave differently: 400°F for 12 minutes in a basket becomes {FRIES_OVEN_F}°F for {FRIES_OVEN_MIN} minutes in the oven, a bigger time increase, because fries lose more time than average going into the air fryer and need more of it back coming out.",
    whenOvenBetterHeading: 'When the oven is actually the better choice',
    whenOvenBetterBody:
      'The air fryer wins on speed for a single crowded-free layer of food, but the oven is still the better tool in a few common situations: cooking more than the basket holds in one load, running two dishes on different racks at the same time, an air fryer that is mid-cycle on something else, or a cut too large to fit a basket at all — a whole chicken, a full sheet of cookies, a big tray of vegetables for a crowd. In any of those, converting the air fryer setting you already know back to an oven number is faster than guessing from scratch, and it keeps the food-type logic — fries needing more time back than a casserole does — intact in both directions.',
    ovenCaveatHeading: "One thing to know: a standard oven isn't built to fry",
    ovenCaveatBody:
      "A conventional oven doesn't have the forced-air circulation a fryer basket does, so two things change. Preheat matters more, since the oven needs its full ramp-up time to reach the target temperature evenly rather than the 3–4 minute head start an air fryer needs. And a single layer of food won't crisp quite as aggressively as it did in the basket, since there's less concentrated airflow hitting every side at once. Neither is a problem to work around — just don't expect an oven tray of wings to look identical to the air-fried version, and lean on a convection or \"air fry\" oven setting if yours has one, since that closes most of the gap.",
    relatedFlagshipLink: 'Oven → Air Fryer converter',
    relatedChartLink: 'Printable conversion chart',
    relatedConvectionLink: "Air Fryer → Convection converter",
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'How do I convert air fryer settings to a conventional oven?',
        a: "Add the same per-food temperature offset back to the air fryer temperature (25°F for most foods, 20°F for steak, fish, baked goods, and casseroles), and divide the air fryer time by that food's time multiplier instead of multiplying by it. The calculator above does this automatically and rounds the oven temperature to a real 25° dial step.",
      },
      {
        q: 'Why does the oven temperature round to a 25° step instead of an exact number?',
        a: "Because a real oven dial or digital control only clicks in 25°F increments — 350, 375, 400 — not the finer 5° steps an air fryer uses. Rounding to what the dial can actually show is also what keeps a recipe converted both directions (oven to air fryer, then back to oven) landing close to the number it started at instead of drifting.",
      },
      {
        q: 'Will the oven give exactly the same result as the air fryer did?',
        a: "Close, but not identical. A conventional oven lacks the forced-air circulation of a fryer basket, so preheat matters more and a single layer of food won't crisp quite as much. If your oven has a convection or \"air fry\" fan setting, use it — that closes most of the difference.",
      },
      {
        q: 'When should I use the oven instead of the air fryer?',
        a: "Whenever the basket can't do the job in one load: a batch bigger than the basket holds, two dishes cooking on separate racks at once, an air fryer that's already busy, or food too large to fit a basket at all, like a whole chicken or a full tray of cookies.",
      },
      {
        q: 'Does the food-type multiplier still matter converting this direction?',
        a: "Yes — it inverts rather than disappears. Thin, high-surface-area foods like fries and bacon needed the biggest time cut going into the air fryer, so they need the biggest time increase coming back out to the oven. Dense foods like casseroles need the smallest adjustment either way.",
      },
      {
        q: 'What internal temperature should I still check for, regardless of appliance?',
        a: 'Internal temperature targets don\'t change between an air fryer and an oven — pull poultry at 165°F internal and fish, steak, or chops at 145°F. The appliance changes the time and dial setting to get there; it doesn\'t change what "done" means.',
      },
    ],
  },
  convectionTool: {
    metaTitle: "Convection Oven to Air Fryer Converter",
    metaDescription: "Convert a convection or fan-oven recipe to air fryer settings. A gentler cut than the oven rule — fan recipes are already adjusted — by food type and basket vs. oven-style.",
    metaKeywords: "convection to air fryer, convection oven to air fryer conversion, fan oven to air fryer, convert convection recipe to air fryer, convection bake to air fryer, fan forced to air fryer",
    backLink: "All tools",
    heading: "Convection to Air Fryer Converter",
    subDesc: "Enter the temperature and time from a convection or fan-oven recipe. Get the air fryer setting with the smaller cut a fan-adjusted recipe needs, by food type and basket vs. oven-style.",
    aboutHeading: "Why convection recipes need their own conversion",
    aboutBody: "A convection oven and an air fryer work on the same principle: a fan pushes hot air around the food so heat reaches it faster than it would in still air. That means a recipe written for convection already has most of the air fryer's advantage built in — it is usually set about 25°F lower than the conventional-oven version of the same dish, and often runs a little shorter. Put that recipe through a standard oven-to-air-fryer conversion and you take the 25°F off a second time, which is how fan-oven recipes come out of an air fryer basket pale and underdone. This converter starts from the convection number and applies only the gap that is actually left.",
    whyGentlerHeading: "Why the cut is smaller",
    whyGentlerBody: "What remains between a convection oven and an air fryer is size and distance. An air fryer's cavity is a fraction of the volume, and the food sits a few inches from both the fan and the heating element, so the air reaches it faster and the surface browns sooner. That is worth roughly 0–15°F and 5–10% of the time, depending on the food. Fries and wings keep almost all of their heat — they need it to crisp and render fat — and save time instead. Baked goods and casseroles take the biggest temperature cut, 15°F, because in a small cavity the top browns before the center sets. Oven-style air fryers are closer still to a convection oven, so their cut shrinks by another 5°F.",
    workedExampleHeading: "Worked example",
    workedExampleTemplate: "A fan-oven recipe at 350°F for 30 minutes, general food, in a basket air fryer, comes out at {GENERAL_AF_F}°F for {GENERAL_AF_MIN} minutes. Put the same numbers through the conventional oven-to-air-fryer converter and you would get {FLAGSHIP_AF_F}°F for {FLAGSHIP_AF_MIN} minutes — too low and too short for a recipe that was already fan-adjusted. Wings at 425°F convection for 40 minutes run hotter than a 400°F basket can go, so the converter holds them at {WINGS_AF_F}°F and adds time back: {WINGS_AF_MIN} minutes, with a note telling you it did.",
    spotHeading: "How to tell if a recipe is written for convection",
    spotBody: "Look for the words first: \"fan\", \"fan-forced\", \"fan oven\", \"convection bake\", \"convection roast\", or a temperature written as \"180°C fan\". UK and Australian recipes and food packaging often print two numbers, one conventional and one fan, and the fan one is the lower. If there is no label, compare the temperature with what the dish usually takes: roast potatoes at 400°F rather than 425°F, or cookies at 325°F rather than 350°F, suggest the recipe already assumes a fan. Recipe books that come with an oven are usually written for its convection setting.",
    conventionalHeading: "If the recipe isn't convection",
    conventionalBody: "A recipe for a standard, fan-off oven needs the full conversion — the larger temperature drop and bigger time cut the oven-to-air-fryer converter applies. Using this page for a conventional recipe leaves food slightly hot and long; using the conventional converter for a convection recipe leaves it underdone. Match the converter to the recipe, not to your appliance.",
    relatedFlagshipLink: "Oven → Air Fryer converter (conventional recipes)",
    relatedReverseLink: "Air Fryer → Oven converter",
    relatedSiblingLink: "Air Fryer → Convection converter",
    relatedChartLink: "Printable conversion chart",
    relatedFrozenLink: "Frozen food mode (packaging instructions)",
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "How do I convert a convection oven recipe to an air fryer?",
        a: "Lower the temperature by 0–15°F depending on the food and cut the time by 5–10%. Crisping foods like fries and wings keep their heat and lose a little time; baked goods and casseroles take the biggest temperature cut. The converter above applies the per-food numbers and checks the result against your air fryer's maximum temperature.",
      },
      {
        q: "Do I subtract 25°F from a convection recipe for the air fryer?",
        a: "No. That 25°F is the usual conventional-to-convection adjustment, and a convection recipe has already made it. Subtracting it again double-counts the fan and leaves food underdone. From convection, the remaining cut is 15°F at most.",
      },
      {
        q: "Is a fan oven the same as a convection oven?",
        a: "Yes. \"Fan oven\" and \"fan-forced\" are the UK and Australian names for a convection oven. When packaging lists a conventional and a fan temperature, enter the fan one here.",
      },
      {
        q: "What if the convection recipe is hotter than my air fryer can go?",
        a: "The converter holds the temperature at your unit's ceiling — 400°F for most basket models, 450°F for oven-style units — and adds about 8% of the time back to make up the difference, with a note under the result. Check early; the surface may brown a little less.",
      },
      {
        q: "Can I use convection settings unchanged in an oven-style air fryer?",
        a: "Almost. An oven-style air fryer is essentially a small convection oven, so the cut shrinks: 0–10°F and close to the original time. Fries and wings can run at the convection temperature with only a few minutes off.",
      },
      {
        q: "Do internal temperature targets change between convection and air frying?",
        a: "No. Pull poultry at 165°F internal and fish, steak, or chops at 145°F, whichever appliance you use. The converter changes the setting and time to get there, not what done means.",
      },
    ],
  },
  reverseConvectionTool: {
    metaTitle: "Air Fryer to Convection Oven Converter",
    metaDescription: "Convert air fryer temperature and time to a convection (fan) oven setting, by food type and basket vs. oven-style, rounded to 25° dial steps. For batches the basket cannot hold.",
    metaKeywords: "air fryer to convection, air fryer to convection oven conversion, air fryer to fan oven, convert air fryer recipe to convection oven, air fryer time to convection oven time",
    backLink: "All tools",
    heading: "Air Fryer to Convection Oven Converter",
    subDesc: "Enter an air fryer temperature and time. Get the convection (fan) oven setting, adjusted for food type and basket vs. oven-style, rounded to the 25° steps a real oven dial uses.",
    aboutHeading: "About air-fryer-to-convection conversion",
    aboutBody: "An air fryer recipe scales badly. The basket holds one layer, and the moment you are feeding six instead of two, a convection oven — the same fan-driven heat in a cavity big enough for two sheet pans — is the faster route. Because both appliances move hot air with a fan, going from an air fryer to a convection oven is a small adjustment, not the full trip back to a conventional oven. This converter adds back only the per-food gap between the two: a few degrees and a little time, using the same table as the convection-to-air-fryer converter, run backward.",
    whenConvectionHeading: "When a convection oven beats the basket",
    whenConvectionBody: "Batch size is the main one: a convection oven cooks two or three trays at once, with the fan keeping every rack close to the same temperature, where an air fryer would need three loads back to back. Large items — a whole chicken, a sheet of cookies, a tray bake — fit an oven and not a basket. And when the air fryer is busy with a side dish, moving the main to the fan oven gets both to the table at the same time. Sheet-pan dinners, where vegetables and a protein share one tray and finish together, are easier to time in an oven too. For one portion of fries or wings, the air fryer still wins on speed and crispness.",
    roundingHeading: "Why the temperature often doesn't change",
    roundingBody: "The gap between an air fryer and a convection oven is 0–15°F, and an oven dial clicks in 25°F steps. Add 10°F to a 375°F air fryer setting and the nearest step on the dial is still 375°F. So for many foods this converter gives the same temperature back and puts the whole adjustment into time. That is the honest answer: the difference between the two appliances is mostly how fast the air reaches the food, and a slightly longer cook in the bigger cavity is how the oven makes it up. Snapping to dial steps also means a recipe converted there and back lands on the number it started from.",
    workedExampleHeading: "Worked example",
    workedExampleTemplate: "A general air fryer setting of 340°F for 27 minutes in a basket becomes {GENERAL_CONV_F}°F for {GENERAL_CONV_MIN} minutes in a convection oven — the fan-oven recipe it most likely started as. Fries at 390°F for 18 minutes become {FRIES_CONV_F}°F for {FRIES_CONV_MIN} minutes: the dial lands on the next step up, and the oven gets a couple of extra minutes because air moves more slowly across a full tray than through a basket.",
    ceilingHeading: "Settings at your air fryer's maximum",
    ceilingBody: "If the air fryer setting sits at the unit's ceiling — 400°F on most baskets, 450°F on oven-style units — it may itself be a converted number: a hotter convection recipe held down to what the air fryer can reach, with about 8% extra time added. The converter can't tell which, so it shows a note. If you know the recipe started out hotter, use the original convection setting instead of converting back.",
    relatedFlagshipLink: "Oven → Air Fryer converter",
    relatedReverseLink: "Air Fryer → Oven converter (conventional oven)",
    relatedSiblingLink: "Convection → Air Fryer converter",
    relatedChartLink: "Printable conversion chart",
    relatedFrozenLink: "Frozen food mode (packaging instructions)",
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "How do I convert air fryer time and temperature to a convection oven?",
        a: "Add 0–15°F depending on the food, round to the nearest 25°F dial step, and add 5–10% to the time. The converter above does all three, using the same per-food table as the convection-to-air-fryer converter so the two directions agree.",
      },
      {
        q: "Is air fryer to convection the same as air fryer to oven?",
        a: "No. A conventional, fan-off oven needs 20–25°F and 15–30% of the time added back. A convection oven already has a fan, so it needs much less. If your oven has no fan setting, use the Air Fryer → Oven converter instead.",
      },
      {
        q: "Why did the temperature come out the same as my air fryer setting?",
        a: "Because the gap between the two appliances is smaller than one 25°F step on an oven dial. Rounding to a setting your oven can actually show often lands back on the air fryer number, so the adjustment goes into the time instead.",
      },
      {
        q: "Should I use convection bake or convection roast?",
        a: "Convection bake suits most foods. Convection roast, which adds the top element, helps wings, potatoes, and anything you want crisp. Use the temperature the converter gives either way.",
      },
      {
        q: "Do I need extra time with two trays in the oven?",
        a: "Often a few minutes, yes. The converted time assumes one tray with room around it. With two or more, rotate the trays halfway and check a minute or two after the converted time.",
      },
      {
        q: "Do internal temperature targets change?",
        a: "No. Poultry is done at 165°F internal and fish, steak, or chops at 145°F, in an air fryer or a convection oven.",
      },
    ],
  },
  frozenTool: {
    metaTitle: "Frozen Food Air Fryer Converter",
    metaDescription: "Convert frozen packaging instructions to air fryer time and temperature. Keep most of the heat, cut about 30% of the time, shake on schedule — conventional or fan-oven pack, basket or oven-style.",
    metaKeywords: "packaging instructions to air fryer, air fryer frozen fries time, frozen chicken air fryer time, frozen food air fryer converter, frozen chips air fryer, oven instructions to air fryer frozen",
    backLink: "All tools",
    heading: "Frozen Food Air Fryer Converter",
    subDesc: "Enter the oven temperature and time from the pack. Get the air fryer setting for food straight from the freezer, with shake or flip times and an internal-temperature check where it matters.",
    aboutHeading: "Why frozen food converts differently",
    aboutBody: "Most converters treat frozen as one more food type and apply the usual rule: take 25°F off and cut the time by a fifth. That is backwards for food straight from the freezer. The pack's oven instructions were written for food that goes in frozen, so the temperature on the box is already the one the coating needs to crisp before the inside overcooks. What the air fryer changes is speed: a small cavity and fast air drive the ice out of the surface quickly. So this converter keeps most of the pack temperature — usually 10°F off — and takes the big cut on time, around 30%. Raw frozen chicken is the exception and goes lower and slower.",
    packHeading: "Reading a UK pack vs. a US pack",
    packBody: "US packs give one oven temperature in °F, written for a conventional oven. UK and European packs usually give °C and often two numbers: a conventional temperature and a lower \"fan\" temperature, typically 20°C apart, with the same time for both. Pick the line you are reading from with the pack toggle. A fan temperature is already fan-adjusted, so the converter adds back the gap between conventional and fan cooking for that food instead of cutting again — the same per-food gap the convection converter uses. Gas mark packs are conventional: convert the mark to a temperature first, or use the gas mark shown under each result to check you are close.",
    workedExampleHeading: "Worked example",
    workedExampleTemplate: "A US bag of frozen fries says 425°F for 20 minutes. A basket air fryer tops out at 400°F, so the converter holds it there and adds a little time back: {US_AF_F}°F for {US_AF_MIN} minutes, with two shakes. A UK bag of the same fries reads 200°C fan for 20 minutes; with the fan toggle that becomes {UK_AF_F}°F ({UK_AF_C}°C) for {UK_AF_MIN} minutes — slightly shorter, because it no longer needs the time the ceiling clamp added back.",
    crowdingHeading: "Don't overcrowd the basket",
    crowdingBody: "Frozen food releases water as it thaws, and in a full basket that water has nowhere to go. Pieces stacked on each other steam instead of crisping, and the bottom layer stays pale however long you cook it. Keep fries, nuggets, and wings to one layer, or close to it, and cook a large bag in two batches — the second batch is usually a minute or two faster because the basket is already hot. The shake times in the result break up pieces frozen together and turn the bottom layer up into the air.",
    rawHeading: "Raw chicken from frozen",
    rawBody: "Raw frozen breasts, wings, and many breaded chicken products have to reach 165°F (74°C) in the thickest part, not just look brown. These get a smaller time cut and a lower temperature so the center catches up with the outside, and the result shows a reminder to check with a thermometer. Fully cooked products, like most nuggets, only need heating through, so they show the target without the warning.",
    relatedFlagshipLink: "Oven → Air Fryer converter (fresh recipes)",
    relatedConvectionLink: "Convection → Air Fryer converter",
    relatedReverseConvectionLink: "Air Fryer → Convection converter",
    relatedChartLink: "Printable conversion chart",
    presetsHeading: "Frozen food presets",
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        q: "How do I convert frozen packaging instructions to an air fryer?",
        a: "Keep the pack temperature or take about 10°F off, cut the time by around 30%, and shake or flip at the marks the converter shows. If the pack temperature is above what your air fryer can reach, the converter holds it at the maximum and adds a little time back.",
      },
      {
        q: "How long do frozen fries take in an air fryer?",
        a: "Usually 12–16 minutes at 400°F for a standard bag that says 425°F for 20 minutes in the oven, shaken twice. Thick-cut fries take longer than shoestring. Enter your pack numbers above for the exact setting.",
      },
      {
        q: "How long does frozen raw chicken take in an air fryer?",
        a: "Longer than you would expect from the 30% rule. Raw frozen breast cooks at a lower temperature with only about 15% off the pack time, so the center reaches 165°F before the outside dries. Always check with a thermometer.",
      },
      {
        q: "Should I thaw frozen food before air frying?",
        a: "No. Pack instructions and this converter both assume the food goes in frozen. Thawing first makes coatings soggy and changes the timing. The exception is a large raw roast, which should be thawed in the fridge.",
      },
      {
        q: "My pack gives a fan oven temperature. Which one do I enter?",
        a: "Either works — just set the pack toggle to match. If you enter the fan temperature, choose \"Fan oven\" and the converter adds back the right amount for that food.",
      },
      {
        q: "Do I need to preheat the air fryer for frozen food?",
        a: "A short preheat of 3 minutes for a basket, or 4 for oven-style, gives more even browning on fries and breaded food. Frozen pizza and reheated items do fine without one.",
      },
    ],
  },
  presets,
  presetsIndex,
  tempLanding,
  chart: {
    metaTitle: 'Free Printable Air Fryer Conversion Chart',
    metaDescription:
      'A printable oven-to-air-fryer temperature, time, and food-multiplier chart — one page, °F and °C, no email address, no popup.',
    metaKeywords:
      'air fryer conversion chart, air fryer temperature chart, printable air fryer chart, oven to air fryer chart, air fryer cooking times chart, air fryer conversion chart printable',
    backLink: 'Full converter',
    pageTag: 'Printable · No email · No popup',
    heading: 'Air Fryer Conversion Chart',
    lead:
      "Oven-to-air-fryer temperature, time, and food-multiplier tables on one printable page. Every dedicated chart site in this niche gates its printable version behind an email signup — this one doesn't.",
    printButton: 'Print this chart',
    tempTableHeading: 'Temperature — Oven → Air Fryer (Basket)',
    tempHeaders: { ovenF: 'Oven °F', airFryerF: 'Air fryer °F', airFryerC: 'Air fryer °C', gasMark: 'Gas mark' },
    tempFootnote: '† Held at the 400°F basket ceiling — see the note below.',
    timeTableHeading: 'Time — General / Mixed, Basket',
    timeHeaders: { ovenTime: 'Oven time', airFryerTime: 'Air fryer time' },
    foodTableHeading: 'Food-type multipliers',
    foodHeaders: { food: 'Food', tempAdjustment: 'Temp adjustment', timeMultiplier: 'Time multiplier', note: 'Note' },
    ceilingNoteTemplate:
      "Basket-style air fryers cap around 400°F; oven-style units cap around 450°F. If this chart shows a temperature your unit can't reach, use the {link} — it clamps to your unit's real ceiling and adds the time back automatically.",
    liveConverterLabel: 'live converter',
    howToReadHeading: 'How to Read This Chart',
    howToReadBody:
      'Each table above assumes a basket-style air fryer on the "general / mixed" setting, the same baseline the live converter starts from. Find your oven temperature or time in the left column and read across for the air fryer equivalent in Fahrenheit, Celsius, and UK gas mark. The food-type table adjusts that baseline for twelve categories, from fries to casseroles, because one flat offset undersells how differently those foods behave in a fan-forced chamber. A dagger next to a temperature means the conversion landed above what a basket unit can reach — the chart holds it at the ceiling instead of printing a setting that doesn\'t exist on your dial.',
    whyFlatRuleHeading: 'Why the Flat −25°F / −20% Rule Fails Wet Batter and Baked Goods',
    whyFlatRuleBody:
      'Most printable charts in this niche apply one rule to every food: subtract 25°F, cut the time by a fifth. That\'s a fine average for vegetables, but it breaks down for anything with a wet interior that still has to finish setting before it\'s done — cake batter, muffins, casseroles, dense baked goods. A basket air fryer\'s forced air browns the surface of batter almost immediately, and a flat 20% time cut mistakes that early browning for "done" well before the center has set, leaving a cooked crust over a raw middle.',
    workedExampleTemplate:
      "Take a 350°F, 30-minute baked-good recipe. The flat rule converts it to {FLAT_F}°F for {FLAT_MIN} minutes. This chart's baked-goods multiplier holds it closer to the original heat, at {BAKED_F}°F for {BAKED_MIN} minutes instead — a smaller time cut and a few degrees warmer, because batter needs those extra minutes to finish setting even as the surface browns fast. The same logic runs across every category: thin, high-surface-area food like fries and bacon gives up close to 30% of its time, while dense food like casseroles and baked goods gives up closer to 15%, since heat still has to reach the center before it's done.",
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Do I need an email address to print this chart?',
        a: "No. Every dedicated chart site in this niche gates its printable version behind an email signup or a popup. This one doesn't — the tables above are the whole chart, and the print button sends them straight to your printer.",
      },
      {
        q: 'Why does the chart show 400°F for both a 425°F and a 450°F oven?',
        a: "A basket-style air fryer tops out around 400°F, so once the raw conversion lands above that, the chart holds the result at the ceiling instead of printing a setting your unit can't reach. The dagger marks which rows were held this way.",
      },
      {
        q: 'Does this chart apply to oven-style air fryers too?',
        a: 'These tables are tuned for basket-style units, which cap around 400°F. Oven-style units circulate air more gently and can run up to about 450°F before clamping — for exact oven-style numbers, use the live converter and switch the style toggle.',
      },
      {
        q: 'Why is the time cut different for fries than for a casserole?',
        a: 'Time savings track surface area and density, not category alone. Fries and bacon give hot air nearly every side at once, so they lose close to 30% of the oven time; a dense casserole loses closer to 15%.',
      },
      {
        q: 'Can I use this chart for food straight from the freezer?',
        a: 'Not directly. Frozen food follows inverted logic — keep the package temperature and cut the time by about 30%, since it needs the full heat just to thaw before it can cook through.',
      },
      {
        q: "What if my exact oven temperature or time isn't on the chart?",
        a: 'This chart covers common values in 25°F and round-number time steps to keep it to one page. For an exact number, the live converter takes any oven temperature and time and adjusts on every keystroke.',
      },
    ],
    relatedHeading: 'Related tools',
    relatedConverterLabel: 'Oven → Air Fryer converter',
    relatedConverterDesc:
      "— the live tool, adjusts for food type and basket vs. oven-style, with the ceiling clamp this chart's dagger rows point back to.",
    relatedGasMarkLabel: '°F / °C / gas mark converter',
    relatedGasMarkDesc: '— a straight temperature conversion for UK, EU, and US recipes.',
    relatedReverseLabel: 'Air Fryer → Oven converter',
    relatedReverseDesc: '— the reverse direction, for when the oven is the better choice.',
    relatedConvectionLabel: "Convection → Air Fryer converter",
    relatedConvectionDesc: "— a gentler cut for fan-oven recipes that are already adjusted.",
    relatedReverseConvectionLabel: "Air Fryer → Convection converter",
    relatedReverseConvectionDesc: "— scale an air fryer setting up to a fan oven for bigger batches.",
    relatedFrozenLabel: "Frozen food mode",
    relatedFrozenDesc: "— packaging instructions to air fryer: keep the heat, cut the time, shake on schedule.",
  },
};

export default en;

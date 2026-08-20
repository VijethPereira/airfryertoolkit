import type { Dictionary } from '../types';

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
      { title: 'Printable conversion chart', desc: 'Full °F and °C table for the fridge door. One page, no email, no ads.' },
    ],
    frozenTeaser: {
      heading: 'Frozen straight from the bag',
      desc: 'Keep the package temperature, cut about 30% of the time — the opposite of the standard rule. Pick what you are cooking.',
      selectLabel: 'Select a frozen food',
      options: ['Frozen french fries', 'Frozen chicken nuggets', 'Frozen chicken breast', 'Frozen pizza', 'Frozen fish sticks'],
      goLabel: 'Go',
    },
    frozenCards: [
      { title: 'Frozen fries', spec: '400°F · 15 min · shake ×2', desc: 'Single layer, no oil needed.' },
      { title: 'Frozen nuggets', spec: '380°F · 10 min · flip once', desc: 'Breaded coating browns fast.' },
      { title: 'Frozen chicken breast', spec: '360°F · 22 min · 165°F core', desc: 'Lower and slower than you expect.' },
      { title: 'Frozen pizza', spec: '375°F · 8 min · no preheat', desc: 'Personal size only in a basket.' },
    ],
    presetsTeaser: {
      heading: 'Time and temperature for one specific food',
      desc: 'Every preset gives temperature, time, shake or flip points, and doneness cues. No recipe blog to scroll.',
      selectLabel: 'Select a food preset',
      options: ['Chicken breast', 'Chicken wings', 'Salmon fillet', 'Bacon', 'Steak'],
      goLabel: 'Go',
    },
    presetCards: [
      { title: 'Chicken breast', spec: '375°F · 16 min · flip at 8', desc: 'Highest-volume preset. Pull at 165°F internal.' },
      { title: 'Chicken wings', spec: '400°F · 22 min · flip at 12', desc: 'Pat dry first. Two-stage temp option.' },
      { title: 'Salmon fillet', spec: '390°F · 9 min · no flip', desc: 'Skin down. Thickness table included.' },
      { title: 'Bacon', spec: '350°F · 9 min · drain at 5', desc: 'Lower temp stops the fat smoking.' },
    ],
    allPresetsCard: { title: 'All 40 presets →', desc: 'Meat, fish, vegetables, baking, reheating.' },
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
};

export default en;

import type { Dictionary } from '../../types';

export const presets: Dictionary['presets'] = {
  backLink: 'All presets',
  pageTag: 'Food preset',
  answerTemplate: '{LABEL} in the air fryer: {AF_F}°F / {AF_C}°C for {MIN} min',
  answerFlipSuffix: ', flip at {FLIP} min',
  answerShakeSuffix: ', shake {SHAKES}×',
  internalTemplate: 'Done at {INT_F}°F ({INT_C}°C) in the thickest part',
  internalCrisp: 'Done by colour and crispness, not a thermometer',
  ovenHeading: 'Oven equivalent',
  ovenTemplate: 'Conventional oven: {OVEN_F}°F ({OVEN_C}°C, gas mark {OVEN_MARK}) for {OVEN_MIN} min',
  fanTemplate: 'Fan / convection oven: {FAN_F}°F ({FAN_C}°C) for {FAN_MIN} min',
  ovenNote: 'Starting from an oven recipe instead? The converter below is set to this food — enter the recipe’s temperature and time.',
  sizingHeading: 'Time by size',
  sizingIntro: 'Same temperature, different time: thickness decides how long the heat takes to reach the middle.',
  sizingHeaders: { size: 'Size', airFryer: 'Air fryer', oven: 'Oven' },
  minutesTemplate: '{MIN} min',
  specTemplate: '{AF_F}°F · {MIN} min',
  specFlipSuffix: ' · flip at {FLIP}',
  specShakeSuffix: ' · shake ×{SHAKES}',
  relatedPresetsHeading: 'Related presets',
  tempLandingLinkTemplate: '{OVEN_F}°F oven to air fryer, every food',
  relatedFlagshipLink: 'Oven to air fryer converter',
  relatedIndexLink: 'All food presets',
  relatedChartLink: 'Printable conversion chart',
  faqHeading: 'Frequently asked questions',
  pages: {
    'chicken-breast': {
      label: 'Chicken breast',
      metaTitle: 'Chicken Breast in the Air Fryer: Time, Temp & Internal Temp',
      metaDescription:
        'Boneless chicken breast in the air fryer: {AF_F}°F for {MIN} minutes, flip at {FLIP}, done at {INT_F}°F. Times by size, oven equivalent and a live converter.',
      metaKeywords: 'chicken breast air fryer time and temp, air fryer chicken breast, how long to cook chicken breast in air fryer',
      heading: 'Chicken breast in the air fryer',
      subDesc:
        'Boneless, skinless breast, cooked from fresh. The setting, the flip, the internal temperature, and how to keep it from drying out.',
      cardDesc: 'The most-searched preset. Pull it at {INT_F}°F internal.',
      sizeLabels: { small: 'Small, 5–6 oz (150 g)', medium: 'Medium, 7–8 oz (220 g)', large: 'Large, 10–12 oz (300 g)' },
      failureHeading: 'Why air-fried chicken breast dries out',
      failureBody:
        'A chicken breast is a wedge: thick at one end and thin at the other. In the fast-moving air of a basket the thin end reaches {INT_F}°F minutes before the thick end, and by the time the centre is safe the tip is dry and stringy. Even the thickness out before cooking. Either pound the thick end under cling film until the whole breast is roughly the same depth, or slice a large breast horizontally into two thinner cutlets. Then take it out as soon as the thickest part reads {INT_F}°F, not later. Every extra minute squeezes out juice.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'Two medium breasts, about 8 oz each, brushed with oil and seasoned. Preheat for {PREHEAT} minutes, then cook at {AF_F}°F for {MEDIUM_MIN} minutes, turning them at {FLIP} minutes so both sides colour. A larger 12 oz breast needs about {LARGE_MIN} minutes at the same temperature. The same breasts would take {OVEN_MIN} minutes at {OVEN_F}°F in a conventional oven, so the air fryer saves a few minutes and gives a browner outside.',
      donenessHeading: 'How to tell it is done',
      donenessBody:
        'Use a thermometer in the thickest part, held sideways so the tip sits in the centre rather than poking through. {INT_F}°F ({INT_C}°C) is safe instantly; the reading climbs a few degrees more while it rests. Without a thermometer, cut into the thickest part: the meat should be white all the way through with clear juices, not pink or glassy. Rest the chicken for five minutes on a board before slicing, or the juice ends up on the board instead of in the meat.',
      prepHeading: 'Before it goes in',
      prepBody:
        'Pat the breast dry with paper towel so the surface browns instead of steaming, then rub it with a teaspoon of oil and season. A quick brine of 30 minutes in salted water makes a noticeable difference to juiciness. Leave space between breasts in the basket; two that touch steam where they meet. Breaded breasts take the same temperature but a minute or two longer for the coating to set.',
      faqs: [
        {
          q: 'How long does chicken breast take in the air fryer?',
          a: 'About {MIN} minutes at {AF_F}°F for a medium 7–8 oz breast, turned at {FLIP} minutes. Small breasts take around {SMALL_MIN} minutes and large ones around {LARGE_MIN}. Always finish by temperature, not time.',
        },
        {
          q: 'What temperature should chicken breast be when it is done?',
          a: '{INT_F}°F ({INT_C}°C) in the thickest part. Take it out as soon as it reads that; it keeps rising slightly while it rests.',
        },
        {
          q: 'Do I need to flip chicken breast in the air fryer?',
          a: 'Yes, once, at about the halfway point. The underside gets less direct air and stays paler; turning it gives an even colour on both sides.',
        },
        {
          q: 'Can I cook frozen chicken breast in the air fryer?',
          a: 'Yes, but it needs a lower temperature and a longer time so the centre is safe before the outside dries. Use frozen mode for frozen chicken rather than this fresh setting.',
        },
        {
          q: 'What is the oven equivalent of this air fryer setting?',
          a: '{OVEN_F}°F for about {OVEN_MIN} minutes in a conventional oven, or {FAN_F}°F for {FAN_MIN} minutes in a fan oven.',
        },
      ],
    },
    'chicken-wings': {
      label: 'Chicken wings',
      metaTitle: 'Air Fryer Chicken Wings: Time, Temperature & Crispy Skin',
      metaDescription:
        'Crispy chicken wings in the air fryer: {AF_F}°F for {MIN} minutes, turned at {FLIP}. Why skin goes soggy, times by size, and the oven equivalent.',
      metaKeywords: 'air fryer chicken wings time, chicken wings air fryer temp, crispy air fryer wings',
      heading: 'Chicken wings in the air fryer',
      subDesc:
        'Fresh flats and drumettes, cooked until the skin crackles. The setting, the turn, and why sauce goes on last.',
      cardDesc: 'Pat dry first; sauce only after cooking.',
      sizeLabels: { small: 'Small wings', medium: 'Standard flats and drumettes', large: 'Large or jumbo wings' },
      failureHeading: 'Why air fryer wings come out soggy',
      failureBody:
        'Wing skin is mostly water and fat. To crisp, the water has to evaporate and the fat has to render out, and both need a dry surface and space around each piece. Wings straight from the pack are wet, so the first several minutes go into steaming them; a crowded basket keeps that steam trapped, and the skin ends up leathery and pale however long it cooks. Sauce added before cooking makes it worse, because the sugar burns while the skin underneath stays soft. The fix is mostly preparation: dry the wings thoroughly, give them a single layer with gaps, and toss them in sauce only once they come out. Two uncrowded batches beat one crowded one.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'A pound of standard flats and drumettes, patted dry and tossed with salt and a teaspoon of baking powder. Preheat {PREHEAT} minutes, cook at {AF_F}°F for {MEDIUM_MIN} minutes and shake or turn them at {FLIP} minutes. Jumbo wings need about {LARGE_MIN} minutes. Toss in sauce straight out of the basket. The oven version of the same tray is {OVEN_F}°F for around {OVEN_MIN} minutes, with much less crunch.',
      donenessHeading: 'How to tell they are done',
      donenessBody:
        'Wings are safe at {INT_F}°F ({INT_C}°C), but they are better well past that: dark meat and the connective tissue around the joint soften at 175–190°F, which is why a properly crispy wing is never undercooked. Look for skin that is deep golden, tight and blistered, and meat that pulls away from the bone at the joint. If the skin is still pale and soft at the end of the time, give them three more minutes rather than raising the temperature.',
      prepHeading: 'Before they go in',
      prepBody:
        'Dry the wings with paper towel, or leave them uncovered on a rack in the fridge for a few hours. A light dusting of baking powder (not soda) raises the pH of the skin and helps it blister. Salt them, but skip oil: wings carry enough fat of their own. Separate wings that have been sold joined at the tip, and arrange the pieces skin side up without overlapping.',
      faqs: [
        {
          q: 'How long do chicken wings take in the air fryer?',
          a: 'About {MIN} minutes at {AF_F}°F for standard fresh wings, shaken or turned at {FLIP} minutes. Small wings take around {SMALL_MIN} minutes, jumbo wings around {LARGE_MIN}.',
        },
        {
          q: 'What temperature are chicken wings done at?',
          a: 'They are safe at {INT_F}°F ({INT_C}°C), but most cooks take wings higher, to 175–190°F, for tender meat and crisp skin.',
        },
        {
          q: 'Should I sauce wings before or after air frying?',
          a: 'After. Sauce on raw wings burns before the skin crisps underneath. Toss the cooked wings in warm sauce in a bowl and serve straight away.',
        },
        {
          q: 'Why use baking powder on air fryer wings?',
          a: 'A light coat of baking powder makes the skin more alkaline, which helps it brown and blister. Use about a teaspoon per pound, and make sure it is baking powder, not baking soda.',
        },
        {
          q: 'Can I cook frozen wings with this setting?',
          a: 'No. Frozen wings need their own time; use frozen mode, which keeps the heat high and adds shakes to separate pieces that froze together.',
        },
      ],
    },
    'chicken-thighs': {
      label: 'Chicken thighs',
      metaTitle: 'Bone-In Chicken Thighs in the Air Fryer: Time & Temp',
      metaDescription:
        'Bone-in, skin-on chicken thighs in the air fryer: {AF_F}°F for {MIN} minutes, flipped at {FLIP}. Crisp skin, juicy meat, times by size and oven equivalent.',
      metaKeywords: 'chicken thighs air fryer time, bone in chicken thighs air fryer, air fryer chicken thighs temp',
      heading: 'Chicken thighs in the air fryer',
      subDesc:
        'Bone-in, skin-on thighs. The setting, which side goes down first, and why thighs want a higher internal temperature than breast.',
      cardDesc: 'Skin down first, skin up to finish.',
      sizeLabels: { small: 'Small, 4–5 oz', medium: 'Medium, 6–7 oz', large: 'Large, 8 oz and over' },
      failureHeading: 'The thigh problem: rubbery skin, pink bone',
      failureBody:
        'Thighs fail in two ways at once. The skin on top crisps quickly, but the fat under it needs time to render, so a thigh that looks done often has a rubbery layer under its crust. Meanwhile the meat closest to the bone is the last part to heat, and can still be pink when the outside is perfect. Starting skin side down solves most of it. With the skin against the basket, the fat renders slowly into the drawer while the meat cooks through; turning skin side up for the second half then crisps the now-thin skin in the direct air. Thighs are forgiving in one respect: dark meat stays moist well above the safe temperature, so a few extra minutes for the bone costs you almost nothing.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'Four medium bone-in thighs, around 6 oz each. Preheat {PREHEAT} minutes, place them skin side down and cook at {AF_F}°F; turn them skin side up at {FLIP} minutes and finish at {MEDIUM_MIN} minutes. Larger thighs need about {LARGE_MIN} minutes. In an oven-style air fryer the converter gives {OS_F}°F for {OS_MIN} minutes. A conventional oven needs {OVEN_F}°F for around {OVEN_MIN} minutes.',
      donenessHeading: 'How to tell they are done',
      donenessBody:
        'Measure next to the bone without touching it: {INT_F}°F ({INT_C}°C) is safe, but thighs are at their best at 175–185°F, when the connective tissue has softened and the meat pulls cleanly from the bone. Juices should run clear when you pierce the thickest part. The skin should be deep golden and crisp all the way to the edges; if the edges are still soft, give them two more minutes skin side up.',
      prepHeading: 'Before they go in',
      prepBody:
        'Trim any large flaps of skin that hang over the sides, since they will burn before the rest is crisp. Dry the skin well and salt it; an hour uncovered in the fridge helps. No oil is needed on the skin side. If your thighs vary a lot in size, put the biggest pieces at the edges of the basket, where the air moves fastest.',
      faqs: [
        {
          q: 'How long do bone-in chicken thighs take in the air fryer?',
          a: 'About {MIN} minutes at {AF_F}°F for medium thighs, turned at {FLIP} minutes. Small thighs take around {SMALL_MIN} minutes, large ones around {LARGE_MIN}.',
        },
        {
          q: 'What internal temperature should chicken thighs reach?',
          a: '{INT_F}°F ({INT_C}°C) is the safe minimum. For tender thighs that come off the bone, aim for 175–185°F.',
        },
        {
          q: 'Should I cook chicken thighs skin side up or down?',
          a: 'Start skin side down to render the fat, then turn skin side up for the second half so the skin crisps in the direct air.',
        },
        {
          q: 'Do boneless thighs take the same time?',
          a: 'No, boneless thighs are thinner and cook faster, usually about the time in the small row of the table. Check the temperature early.',
        },
        {
          q: 'What is the oven equivalent for chicken thighs?',
          a: '{OVEN_F}°F for around {OVEN_MIN} minutes in a conventional oven, or {FAN_F}°F for {FAN_MIN} minutes in a fan oven.',
        },
      ],
    },
    salmon: {
      label: 'Salmon',
      metaTitle: 'Salmon in the Air Fryer: Time, Temp & How Not to Overcook It',
      metaDescription:
        'Salmon fillets in the air fryer: {AF_F}°F for {MIN} minutes, no flip, done at {INT_F}°F. Times by thickness, doneness signs and the oven equivalent.',
      metaKeywords: 'salmon air fryer time, air fryer salmon temp, how long to cook salmon in air fryer',
      heading: 'Salmon in the air fryer',
      subDesc:
        'Fresh salmon fillets, skin on or off. The setting, time by thickness, and the sign that tells you it has gone too far.',
      cardDesc: 'Skin down, no flip. Time it by thickness.',
      sizeLabels: { thin: 'Thin, about ¾ inch (2 cm)', medium: 'Standard, about 1 inch (2.5 cm)', thick: 'Thick, about 1½ inches (4 cm)' },
      failureHeading: 'The white stuff means it is overcooked',
      failureBody:
        'Salmon has very little margin. It goes from silky to dry in a couple of minutes, and the air fryer is fast enough that those minutes pass quickly. The warning sign is the white curd that appears on the surface: that is albumin, a protein pushed out of the muscle as the fibres tighten. A little is normal; a lot means the fish went past done. Because salmon cooks from the outside in, the only reliable way to time it is by thickness, which is why the table sorts fillets by depth rather than weight. A thin tail piece and a thick centre cut from the same side can need very different times, so cook pieces of similar thickness together, or put the thin pieces in a few minutes later.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'Two 1-inch fillets, skin on. Brush the flesh with oil, season, and lay them skin side down. Cook at {AF_F}°F for {MEDIUM_MIN} minutes without turning them; a thin ¾-inch fillet needs about {THIN_MIN} minutes and a thick 1½-inch piece about {THICK_MIN}. An oven-style air fryer gives {OS_F}°F for {OS_MIN} minutes. A conventional oven takes {OVEN_F}°F for around {OVEN_MIN} minutes.',
      donenessHeading: 'How to tell it is done',
      donenessBody:
        'Food safety guidance is {INT_F}°F ({INT_C}°C) in the thickest part, where the flesh turns opaque and flakes easily with a fork. Many cooks prefer salmon a little less done, at 125–130°F, where the centre is still slightly translucent and very moist; that is a matter of taste for fish bought fresh and handled well. Press gently on the top: done salmon separates along its natural lines. If you see a lot of white albumin, take it out immediately.',
      prepHeading: 'Before it goes in',
      prepBody:
        'Let the fillets sit out for ten minutes so the centre is not fridge-cold. Pat them dry and brush the flesh, not the skin, with oil. Skin-on fillets do not need turning: the skin protects the underside and peels off easily afterwards if you do not want it. A piece of perforated parchment stops skinless fillets from sticking to the basket.',
      faqs: [
        {
          q: 'How long does salmon take in the air fryer?',
          a: 'About {MIN} minutes at {AF_F}°F for a 1-inch fillet. Thin pieces take around {THIN_MIN} minutes and thick centre cuts around {THICK_MIN}.',
        },
        {
          q: 'Do I flip salmon in the air fryer?',
          a: 'No. Cook it skin side down the whole time; turning a delicate fillet tends to break it, and the top colours well in the direct air.',
        },
        {
          q: 'What temperature is salmon done at?',
          a: '{INT_F}°F ({INT_C}°C) by food-safety guidance, when it flakes easily. Many people prefer it at 125–130°F, slightly translucent in the middle.',
        },
        {
          q: 'Why is there white stuff on my salmon?',
          a: 'It is albumin, a protein squeezed out as the fish cooks. A lot of it means the salmon is overcooked; next time take it out a minute or two sooner.',
        },
        {
          q: 'What is the oven equivalent for salmon?',
          a: '{OVEN_F}°F for around {OVEN_MIN} minutes in a conventional oven, or {FAN_F}°F for {FAN_MIN} minutes in a fan oven.',
        },
      ],
    },
    bacon: {
      label: 'Bacon',
      metaTitle: 'Bacon in the Air Fryer: Time, Temp & No Smoke',
      metaDescription:
        'Bacon in the air fryer: {AF_F}°F for {MIN} minutes for regular slices. Why a lower temperature stops the smoke, times for thin and thick cut, oven equivalent.',
      metaKeywords: 'bacon air fryer time, air fryer bacon temperature, how long to cook bacon in air fryer',
      heading: 'Bacon in the air fryer',
      subDesc:
        'Streaky bacon, cooked until crisp. A lower setting than most foods, and the reason for it.',
      cardDesc: 'A lower temperature stops the fat smoking.',
      sizeLabels: { thin: 'Thin-cut slices', medium: 'Regular slices', thick: 'Thick-cut slices' },
      failureHeading: 'Why bacon smokes in the air fryer',
      failureBody:
        'Bacon is the one food where the usual air fryer instinct, hotter and faster, backfires. As it cooks, the fat renders and drips into the drawer below the basket, and at high settings that pool of fat gets hot enough to smoke and spit. The kitchen fills with smoke, the alarm goes off, and the bacon tastes acrid. That is why this preset sits at {AF_F}°F rather than the higher temperatures most meats use: the fat renders steadily instead of burning, and the slices still crisp because they are so thin. Two habits finish the job. Lay the slices flat without overlapping, since overlapped parts stay flabby, and pour off or wipe out the fat between batches.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'Six regular slices laid flat across the basket, cut in half if they are too long to lie flat. Cook at {AF_F}°F for {MEDIUM_MIN} minutes; thin-cut bacon is ready in about {THIN_MIN}, thick-cut in around {THICK_MIN}. There is no need to turn it. For comparison, the same bacon on a tray in a conventional oven takes {OVEN_F}°F for about {OVEN_MIN} minutes.',
      donenessHeading: 'How to tell it is done',
      donenessBody:
        'Bacon is cured, so it is judged by colour and texture rather than a thermometer. Take it out when the fat has turned from white to translucent and golden and the lean has darkened. It firms up as it cools, so slices that still bend slightly in the basket will be crisp a minute later on paper towel. For chewy bacon, take it out a minute or two early; for shatter-crisp, leave it until the edges just begin to darken.',
      prepHeading: 'Before it goes in',
      prepBody:
        'There is no need to preheat or oil anything; bacon brings its own fat. Use the basket, not a solid tray, so fat can drain away from the slices. A slice of bread or a splash of water in the drawer under the basket catches the fat and reduces smoke. Thick-cut bacon can be laid in a slightly overlapping row, but separate the slices halfway through.',
      faqs: [
        {
          q: 'How long does bacon take in the air fryer?',
          a: 'About {MIN} minutes at {AF_F}°F for regular slices. Thin-cut takes around {THIN_MIN} minutes and thick-cut around {THICK_MIN}.',
        },
        {
          q: 'Why does my air fryer smoke when I cook bacon?',
          a: 'Fat drips into the drawer and burns at high temperatures. Cook at {AF_F}°F, empty the fat between batches and put a little water or a slice of bread in the drawer.',
        },
        {
          q: 'Do I need to flip bacon in the air fryer?',
          a: 'No. The air reaches both sides of thin slices. Only thick-cut bacon laid overlapping needs separating halfway through.',
        },
        {
          q: 'Do I need to preheat the air fryer for bacon?',
          a: 'No. Starting cold lets the fat render more gently, which helps the bacon cook evenly.',
        },
        {
          q: 'What is the oven equivalent for bacon?',
          a: '{OVEN_F}°F for around {OVEN_MIN} minutes on a rack in a conventional oven.',
        },
      ],
    },
    steak: {
      label: 'Steak',
      metaTitle: 'Steak in the Air Fryer: Time, Temp & Doneness Chart',
      metaDescription:
        'A 1-inch steak in the air fryer: {AF_F}°F for {MIN} minutes, flipped at {FLIP}, medium-rare at {INT_F}°F. Times by thickness and how to get a crust.',
      metaKeywords: 'steak air fryer time, air fryer steak temp, how long to cook steak in air fryer',
      heading: 'Steak in the air fryer',
      subDesc:
        'Ribeye, sirloin or strip steak. The setting for medium-rare, how thickness changes the time, and how to get colour on the outside.',
      cardDesc: 'Dry the surface and rest it for a real crust.',
      sizeLabels: { thin: 'Thin, about ¾ inch (2 cm)', medium: 'Standard, about 1 inch (2.5 cm)', thick: 'Thick, about 1½ inches (4 cm)' },
      failureHeading: 'The grey-band problem',
      failureBody:
        'An air fryer does not sear the way a cast-iron pan does. Hot air carries far less heat than metal, so a wet steak spends its first minutes drying, and by the time the surface browns, heat has crept inwards and left a thick band of grey, overcooked meat under a pale crust. The fix is to make the surface brown faster. Pat the steak completely dry, salt it well ahead of time so the surface dries further, preheat the basket fully, and use the highest setting your unit has. Cook one or two steaks at a time with space around them. The result will not match a smoking-hot pan, but it gets close, with much less mess.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'A 1-inch ribeye, salted an hour ahead and patted dry. Preheat the air fryer for {PREHEAT} minutes, cook at {AF_F}°F and turn it at {FLIP} minutes; at {MEDIUM_MIN} minutes it should read about {INT_F}°F for medium-rare. A thin ¾-inch steak needs about {THIN_MIN} minutes, a thick 1½-inch cut about {THICK_MIN}. Rest it for five minutes before cutting.',
      donenessHeading: 'Doneness by temperature',
      donenessBody:
        'Use an instant-read thermometer from the side into the centre. Rare is about 120–125°F, medium-rare {INT_F}°F ({INT_C}°C), medium 140°F and well done 155°F and above; the USDA guideline for whole cuts of beef is 145°F followed by a three-minute rest. Take the steak out about five degrees before your target, since the temperature keeps rising as it rests. Cutting into it to check lets the juices run out.',
      prepHeading: 'Before it goes in',
      prepBody:
        'Take the steak out of the fridge 30 minutes before cooking so the centre is not cold. Salt it at least 40 minutes ahead, or just before; anything in between leaves the surface wet. Brush with a little high-smoke-point oil rather than butter, which burns. Add butter, garlic or herbs while the steak rests.',
      faqs: [
        {
          q: 'How long does steak take in the air fryer?',
          a: 'About {MIN} minutes at {AF_F}°F for a 1-inch steak cooked to medium-rare, turned at {FLIP} minutes. Thin steaks take around {THIN_MIN} minutes, thick ones around {THICK_MIN}.',
        },
        {
          q: 'What temperature is medium-rare steak?',
          a: 'About {INT_F}°F ({INT_C}°C). The USDA guideline for whole cuts is 145°F with a three-minute rest, which is closer to medium.',
        },
        {
          q: 'Can you get a crust on steak in an air fryer?',
          a: 'A good one, if the surface is completely dry and the basket is fully preheated. It will not quite match a cast-iron sear, but it comes close.',
        },
        {
          q: 'Should I rest steak after air frying?',
          a: 'Yes, for about five minutes. The juices settle back into the meat and the temperature rises a few degrees to finish cooking.',
        },
        {
          q: 'What is the oven equivalent for steak?',
          a: '{OVEN_F}°F for around {OVEN_MIN} minutes in a conventional oven, though a pan or grill gives a better crust.',
        },
      ],
    },
    'pork-chops': {
      label: 'Pork chops',
      metaTitle: 'Pork Chops in the Air Fryer: Time, Temp & Juicy Every Time',
      metaDescription:
        'Pork chops in the air fryer: {AF_F}°F for {MIN} minutes for 1-inch chops, flipped at {FLIP}, done at {INT_F}°F. Times by thickness and oven equivalent.',
      metaKeywords: 'pork chops air fryer time, air fryer pork chops temp, how long to cook pork chops in air fryer',
      heading: 'Pork chops in the air fryer',
      subDesc:
        'Bone-in or boneless chops. The setting, the flip, and the temperature that keeps them from turning chalky.',
      cardDesc: 'Pull at {INT_F}°F and rest; brine if you can.',
      sizeLabels: { thin: 'Thin, about ½ inch (1 cm)', medium: 'Standard, about 1 inch (2.5 cm)', thick: 'Thick, about 1½ inches (4 cm)' },
      failureHeading: 'Why pork chops turn dry and chalky',
      failureBody:
        'Modern pork is lean. With little fat running through the meat, a chop has nothing to protect it once it goes past done, and it turns dry, tight and chalky within a few minutes. The habit of cooking pork until it is grey all the way through comes from old guidance; today a chop is safe at {INT_F}°F with a short rest, when the centre is still faintly pink and juicy. Thin chops are the hardest to get right in an air fryer because they overcook before the outside browns. Buy chops at least an inch thick if you can, and if you only have thin ones, cook them at the top of the time range and check early.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'Two 1-inch boneless chops, brined for an hour, dried and rubbed with oil and spices. Preheat for {PREHEAT} minutes, cook at {AF_F}°F and flip at {FLIP} minutes; they should reach {INT_F}°F at around {MEDIUM_MIN} minutes. Thin ½-inch chops need about {THIN_MIN} minutes, thick 1½-inch ones about {THICK_MIN}. In a conventional oven the same chops take {OVEN_F}°F for around {OVEN_MIN} minutes.',
      donenessHeading: 'How to tell they are done',
      donenessBody:
        'Measure from the side into the thickest part, away from any bone. {INT_F}°F ({INT_C}°C) followed by a three-minute rest is the safe target; the centre will be a pale blush and the juices clear. Bone-in chops cook a little slower near the bone, so check there last. If you cut into a chop, the meat should be moist and just opaque, not grey and fibrous.',
      prepHeading: 'Before they go in',
      prepBody:
        'A simple brine of a tablespoon of salt to two cups of water for 30–60 minutes makes the biggest difference to juiciness. Dry the chops well afterwards. Snip through the fat around the edge in two or three places so the chop does not curl as it cooks. A spice rub with a little sugar browns nicely but watch it in the last minutes.',
      faqs: [
        {
          q: 'How long do pork chops take in the air fryer?',
          a: 'About {MIN} minutes at {AF_F}°F for 1-inch chops, flipped at {FLIP} minutes. Thin chops take around {THIN_MIN} minutes and thick ones around {THICK_MIN}.',
        },
        {
          q: 'What temperature should pork chops reach?',
          a: '{INT_F}°F ({INT_C}°C), then rest for three minutes. A faint pink centre at that temperature is safe and much juicier.',
        },
        {
          q: 'Should I brine pork chops for the air fryer?',
          a: 'If you have 30 minutes, yes. Lean chops gain a lot of moisture from a short brine, and it makes them more forgiving if they cook a minute too long.',
        },
        {
          q: 'Bone-in or boneless pork chops in the air fryer?',
          a: 'Both work at the same temperature. Bone-in chops take a minute or two longer and stay slightly juicier near the bone.',
        },
        {
          q: 'What is the oven equivalent for pork chops?',
          a: '{OVEN_F}°F for around {OVEN_MIN} minutes in a conventional oven, or {FAN_F}°F for {FAN_MIN} minutes in a fan oven.',
        },
      ],
    },
    shrimp: {
      label: 'Shrimp',
      metaTitle: 'Shrimp in the Air Fryer: Time & Temp by Size',
      metaDescription:
        'Shrimp in the air fryer: {AF_F}°F for {MIN} minutes for large shrimp, shaken once. Times by size, how to spot done, and the oven equivalent.',
      metaKeywords: 'shrimp air fryer time, air fryer shrimp temp, how long to cook shrimp in air fryer',
      heading: 'Shrimp in the air fryer',
      subDesc:
        'Raw, peeled shrimp, thawed. The setting, time by size, and the colour change that tells you to stop.',
      cardDesc: 'Minutes matter: time it by size.',
      sizeLabels: { small: 'Small (51–60 per lb)', medium: 'Large (31–40 per lb)', large: 'Jumbo (16–20 per lb)' },
      failureHeading: 'The one-minute window',
      failureBody:
        'Shrimp cook in minutes and overcook in one. Their muscle tightens quickly in heat, so the gap between tender and rubbery is very short, and in an air fryer it is easy to miss while you are preparing the sauce. Size is the main variable, which is why shrimp are sold by count per pound: small shrimp can be done before jumbo ones have even turned pink. Cook one size at a time, set a timer for the shortest time in the table, and look at them rather than waiting for the end. The other common mistake is cooking shrimp that are still partly frozen, which leaves the outside tough and the centre underdone.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'A pound of large (31–40 count) shrimp, peeled, deveined and patted dry, tossed with a tablespoon of oil, garlic and paprika. Preheat for {PREHEAT} minutes, spread them in one layer and cook at {AF_F}°F for {MEDIUM_MIN} minutes, shaking once halfway. Small shrimp need about {SMALL_MIN} minutes and jumbo shrimp about {LARGE_MIN}. On a tray in a conventional oven they take {OVEN_F}°F for around {OVEN_MIN} minutes.',
      donenessHeading: 'How to tell they are done',
      donenessBody:
        'Look at the shape and colour. Raw shrimp are grey and translucent; cooked shrimp are pink-orange and opaque all the way through. A shrimp that has curled into a loose C is done, while a tight O means it has gone too far. The food-safety figure is {INT_F}°F ({INT_C}°C), but shrimp are too small to measure easily; colour is the practical test. Take them out the moment the last grey patch disappears.',
      prepHeading: 'Before they go in',
      prepBody:
        'Thaw frozen shrimp completely, in the fridge overnight or in a bowl of cold water for about 20 minutes, then dry them well. Peeled shrimp cook more evenly than shell-on ones and take seasoning better. Add a little oil so the spices stick, and do not crowd the basket: a single layer cooks evenly, a heap steams.',
      faqs: [
        {
          q: 'How long does shrimp take in the air fryer?',
          a: 'About {MIN} minutes at {AF_F}°F for large (31–40 count) shrimp, shaken once. Small shrimp take around {SMALL_MIN} minutes and jumbo shrimp around {LARGE_MIN}.',
        },
        {
          q: 'How do I know when air fryer shrimp are done?',
          a: 'They turn pink and opaque and curl into a loose C shape. A tight O shape means they are overcooked.',
        },
        {
          q: 'Can I cook frozen shrimp in the air fryer?',
          a: 'It is better to thaw them first. Cooked from frozen, the outside toughens before the centre is done. Twenty minutes in cold water is enough.',
        },
        {
          q: 'Do I need to shake shrimp in the air fryer?',
          a: 'Once, halfway through, so the pieces underneath get the same colour as the ones on top.',
        },
        {
          q: 'What is the oven equivalent for shrimp?',
          a: '{OVEN_F}°F for around {OVEN_MIN} minutes on a tray in a conventional oven.',
        },
      ],
    },
    'baked-potato': {
      label: 'Baked potato',
      metaTitle: 'Baked Potato in the Air Fryer: Time, Temp & Crispy Skin',
      metaDescription:
        'Baked potato in the air fryer: {AF_F}°F for {MIN} minutes for a medium potato, turned at {FLIP}, done at {INT_F}°F inside. Times by size and oven equivalent.',
      metaKeywords: 'air fryer baked potato time, baked potato air fryer temp, jacket potato air fryer',
      heading: 'Baked potato in the air fryer',
      subDesc:
        'Whole russet or baking potatoes with crisp, salty skin. The setting, time by size, and the internal temperature for a fluffy middle.',
      cardDesc: 'Check with a thermometer, not a fork.',
      sizeLabels: { small: 'Small, 5–6 oz (170 g)', medium: 'Medium, 8–10 oz (250 g)', large: 'Large, 12 oz (350 g) and over' },
      failureHeading: 'Crisp skin, hard middle',
      failureBody:
        'A potato is dense, and heat moves slowly through it. In an air fryer the skin crisps and darkens long before the centre is cooked, so a potato can look finished while the middle is still waxy and firm. A fork is a poor test because it slides into a partly cooked potato almost as easily as a done one. The reliable test is temperature: starch only turns fluffy when the centre reaches about {INT_F}°F. The table times assume potatoes of similar size cooked together. If you mix sizes, the small ones will be done first; take them out and give the large ones the extra minutes.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'Two medium russets, about 9 oz each, scrubbed, dried, rubbed with oil and coarse salt, and pricked a few times. Cook at {AF_F}°F for {MEDIUM_MIN} minutes, turning them at {FLIP} minutes. Small potatoes need about {SMALL_MIN} minutes and large ones about {LARGE_MIN}. The same potatoes take {OVEN_F}°F for around {OVEN_MIN} minutes in a conventional oven, so the air fryer saves a good quarter of an hour.',
      donenessHeading: 'How to tell it is done',
      donenessBody:
        'Push a thermometer into the centre: {INT_F}–210°F ({INT_C}°C) means the starch has cooked through and the inside will be fluffy. Without a thermometer, squeeze the potato gently in a towel; it should give easily all the way through. The skin should be dry, crisp and slightly blistered. Cut it open straight away to let the steam out, or the inside turns gummy.',
      prepHeading: 'Before it goes in',
      prepBody:
        'Choose floury potatoes such as russets or Maris Pipers; waxy potatoes stay dense. Scrub and dry them completely, then rub with a little oil and plenty of coarse salt, which draws moisture from the skin. Prick each potato a few times with a fork. Do not wrap them in foil: foil traps steam and gives soft skin.',
      faqs: [
        {
          q: 'How long does a baked potato take in the air fryer?',
          a: 'About {MIN} minutes at {AF_F}°F for a medium 8–10 oz potato, turned at {FLIP} minutes. Small potatoes take around {SMALL_MIN} minutes, large ones around {LARGE_MIN}.',
        },
        {
          q: 'What internal temperature is a baked potato done at?',
          a: '{INT_F}–210°F ({INT_C}°C) in the centre. Below that the middle stays waxy, however crisp the skin looks.',
        },
        {
          q: 'Should I wrap potatoes in foil in the air fryer?',
          a: 'No. Foil traps steam and leaves the skin soft. Oil and coarse salt on bare skin gives the crisp jacket the air fryer is good at.',
        },
        {
          q: 'Do I need to prick potatoes before air frying?',
          a: 'Yes, a few times with a fork. It lets steam escape and stops the occasional potato from splitting.',
        },
        {
          q: 'What is the oven equivalent for a baked potato?',
          a: '{OVEN_F}°F for around {OVEN_MIN} minutes in a conventional oven, or {FAN_F}°F for {FAN_MIN} minutes in a fan oven.',
        },
      ],
    },
    'homemade-fries': {
      label: 'Homemade fries',
      metaTitle: 'Homemade Fries in the Air Fryer: Time, Temp & Crispy Results',
      metaDescription:
        'Fresh-cut fries in the air fryer: {AF_F}°F for {MIN} minutes, shaken twice. Why fries go limp, how to soak them, and times by thickness.',
      metaKeywords: 'homemade fries air fryer, fresh cut fries air fryer time, air fryer french fries from scratch',
      heading: 'Homemade fries in the air fryer',
      subDesc:
        'Fries cut from fresh potatoes, not frozen. The setting, the soak, and how thickness changes the time.',
      cardDesc: 'Soak, dry, one layer, two shakes.',
      sizeLabels: { thin: 'Shoestring, ¼ inch (6 mm)', medium: 'Standard, ⅜ inch (1 cm)', thick: 'Steak fries, ½ inch (1.3 cm) and over' },
      failureHeading: 'Why fresh fries go limp or burn',
      failureBody:
        'Fresh potatoes are full of water and surface starch. Put cut fries straight into the basket and the starch on the outside browns and catches while the inside is still raw, or the water steams them limp if the basket is crowded. Frozen fries avoid both problems because the factory has already blanched and dried them, which is why the frozen setting is different. At home, a soak does the same job: it rinses off loose starch, so the outside browns evenly instead of scorching in patches. Drying afterwards matters just as much. A wet fry spends its first minutes steaming, and a fry that has steamed never fully crisps.',
      workedExampleHeading: 'Worked example',
      workedExampleTemplate:
        'Two medium russets cut into ⅜-inch sticks, soaked in cold water for 30 minutes, dried thoroughly and tossed with a tablespoon of oil and salt. Cook in a single layer at {AF_F}°F for {MEDIUM_MIN} minutes, shaking the basket twice. Shoestring fries need about {THIN_MIN} minutes and thick steak fries about {THICK_MIN}. The oven version, on a tray at {OVEN_F}°F, takes around {OVEN_MIN} minutes.',
      donenessHeading: 'How to tell they are done',
      donenessBody:
        'Look for an even golden colour with slightly darker edges, and listen: a done fry sounds hollow and crisp when it hits the others. Take one out and break it; the inside should be soft and floury, not translucent. If the outside is brown but the inside is still firm, the fries were cut too thick for the time, so give them three more minutes and lower the heat slightly next time.',
      prepHeading: 'Before they go in',
      prepBody:
        'Use floury potatoes such as russets or Maris Pipers. Cut the fries to an even thickness so they finish together; uneven batches always have burnt thin pieces and raw thick ones. Soak in cold water for at least 30 minutes, then dry them completely with a clean towel. A tablespoon of oil per two potatoes is enough. Salt after cooking, not before, or the salt draws out water.',
      faqs: [
        {
          q: 'How long do homemade fries take in the air fryer?',
          a: 'About {MIN} minutes at {AF_F}°F for standard ⅜-inch fries, shaken twice. Shoestring fries take around {THIN_MIN} minutes and steak fries around {THICK_MIN}.',
        },
        {
          q: 'Do I need to soak potatoes before air frying?',
          a: 'It helps a lot. A 30-minute soak in cold water removes surface starch, so the fries brown evenly and crisp instead of scorching in patches.',
        },
        {
          q: 'Why are my air fryer fries soggy?',
          a: 'Usually they were still wet or the basket was too full. Dry them thoroughly and cook in a single layer, in batches if needed.',
        },
        {
          q: 'Is this setting right for frozen fries?',
          a: 'No. Frozen fries are already blanched and follow different rules; use frozen mode with the temperature from the bag.',
        },
        {
          q: 'What is the oven equivalent for homemade fries?',
          a: '{OVEN_F}°F for around {OVEN_MIN} minutes on a tray in a conventional oven, or {FAN_F}°F for {FAN_MIN} minutes in a fan oven.',
        },
      ],
    },
  },
};

export const presetsIndex: Dictionary['presetsIndex'] = {
  metaTitle: 'Air Fryer Food Presets: Time & Temperature for Each Food',
  metaDescription:
    'Air fryer time and temperature for chicken, wings, salmon, bacon, steak, potatoes and more — each preset with the internal temperature, times by size and the oven equivalent.',
  metaKeywords: 'air fryer cooking times, air fryer time and temperature chart, air fryer food presets',
  backLink: 'All tools',
  heading: 'Air fryer food presets',
  intro:
    'One page per food, each a working tool rather than a chart row: the setting, when to flip or shake, the internal temperature for every protein, times by size, and the oven equivalent both ways.',
  categories: {
    poultry: 'Poultry',
    meat: 'Meat',
    fish: 'Fish and seafood',
    veg: 'Vegetables and potatoes',
    baked: 'Baking',
    reheat: 'Reheating',
    frozen: 'Frozen food',
  },
  howHeading: 'How these presets are set',
  howBody:
    'Every preset starts from a basket air fryer of 4–6 quarts, preheated, with the food in a single layer. The oven and fan-oven equivalents on each page are calculated by the same engine as the converter, so they agree with each other, and the converter on every preset page is already set to that food if you are starting from an oven recipe. Each page leads with the specific way that food goes wrong in an air fryer, because that is what decides the result more than the number on the dial. No email, no sign-up, nothing to install.',
  relatedFlagshipLink: 'Oven to air fryer converter',
  relatedChartLink: 'Printable conversion chart',
};

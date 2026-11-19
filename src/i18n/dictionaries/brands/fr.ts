/**
 * Brand pages in French: same shape as brands/en.ts. Every number is a {KEY} placeholder filled from
 * src/data/models.ts and the engine (brandValues), °C first. Model names, button names and the English-only
 * /model-max-temp copy are shared with en.ts.
 */
import { brands as en, type BrandsDictionary } from './en';

export const brands: BrandsDictionary = {
  backLink: 'Tous les outils',
  modelPicker: 'Votre modèle',
  anyModel: 'Absent de la liste / je ne sais pas (plafond standard)',
  modelsHeading: 'Les modèles et leurs limites',
  modelsIntro:
    'Chaque limite est recopiée de la page ou du manuel du fabricant, avec le lien et la date de lecture. Les modèles européens passent en premier quand il y en a. Ceux que nous n’avons pas pu vérifier n’y figurent pas.',
  programsHeading: 'Programmes de la {MODEL}',
  programsIntro: 'Le tableau des programmes du manuel américain : la valeur de départ de chaque touche et jusqu’où on peut la régler.',
  tableHeaders: { model: 'Modèle', type: 'Type', capacity: 'Capacité', max: 'Max. Air Fry', min: 'Minimum', preheat: 'Préchauffage', source: 'Source', sourced: 'Lu le', brand: 'Marque' },
  programHeaders: { program: 'Programme', default: 'Démarre à', range: 'Plage' },
  types: { basket: 'Panier', 'oven-style': 'Type four', 'dual-zone': 'Deux zones', 'toaster-oven': 'Mini-four combiné' },
  preheat: { auto: 'Étape intégrée', manual: 'Manuel', none: 'Aucun', unknown: 'Non précisé' },
  otherMax: en.otherMax,
  otherMaxTemplate: '{LABEL} jusqu’à {C}°C / {F}°F',
  programs: en.programs,
  sourceManual: 'Manuel',
  sourceSpec: 'Fiche technique',
  sourceProduct: 'Page produit',
  markets: { us: 'Modèle américain', uk: 'Modèle britannique', eu: 'Modèle européen' },
  euNote: 'Ce sont les modèles américains. Les références européennes sont différentes : vérifiez le sélecteur de votre appareil.',
  foodLoadNote: 'La source donne une charge d’aliments en kilos, pas un volume.',
  maxDefaultNote: 'Réglage par défaut ; maximum non précisé',
  relatedHeading: 'À voir aussi',
  flagshipLink: 'Convertisseur four vers friteuse à air',
  maxTempLink: 'Température maximale de chaque modèle',
  faqHeading: 'Questions fréquentes',
  cardSpecTemplate: 'Jusqu’à {MAX_HI_C}°C · {N_MODELS} modèles',
  brandNames: en.brandNames,
  modelNames: en.modelNames,
  pages: {
    ninja: {
      name: 'Ninja',
      metaTitle: 'Friteuse à air Ninja : convertir une recette du four et comprendre Max Crisp',
      metaDescription:
        'Convertissez vos recettes du four pour votre Ninja : l’AF140EU européenne monte à {EU_MAX_HI_C}°C, Air Fry s’arrête à {MAX_LO_C}°C sur les paniers américains et Max Crisp est un réglage fixe de {OTHER_MAX_C}°C.',
      metaKeywords: 'friteuse à air ninja température, ninja max crisp, ninja af140eu température maximale, convertir recette four ninja',
      heading: 'Conversion pour friteuse à air Ninja',
      intro:
        'Sur une Ninja, {OTHER_MAX_C}°C veut presque toujours dire Max Crisp. Sur la Max XL, c’est un programme figé : il chauffe à {OTHER_MAX_C}°C ({OTHER_MAX}°F) sans réglage possible, alors qu’Air Fry et les autres fonctions s’arrêtent à {F_MAX_C}°C. Une recette à {OTHER_MAX_C}°C est une recette Max Crisp, presque toujours pour du surgelé ; une recette du four convertie se fait en Air Fry.',
      answerTemplate:
        'La Ninja Pro AF140EU vendue en Europe monte à {EU_MAX_HI_C}°C selon sa page produit. Sur les paniers américains, Air Fry plafonne à {MAX_LO_C}°C, et la DoubleStack XL et le four Foodi atteignent {MAX_HI_C}°C.',
      widgetHeading: 'Convertir une recette du four pour votre Ninja',
      widgetNote: 'Choisissez votre modèle : le convertisseur prend sa limite Air Fry. Max Crisp n’entre jamais dans une recette convertie, car sa température ne se règle pas.',
      sections: [
        {
          heading: 'Quand Max Crisp est la bonne touche',
          paragraphs: [
            'Prenez des frites au four à {EX_OVEN_C}°C pendant {EX_OVEN_MIN} minutes. En Air Fry sur la Max XL, cela donne {EX_MODEL_C}°C pendant {EX_MODEL_MIN_C} minutes, premier contrôle à la minute {EX_MODEL_CHECK_C}. Le convertisseur reste à la limite d’Air Fry et compense par le temps. Secouez le panier vers la minute {EX_HALF_C}.',
            'Max Crisp convient quand le sachet de surgelés indique la friteuse à air, ou quand le tableau de Ninja cite la touche : un aliment déjà cuit qui demande seulement une finition vive. Il ne convient pas à ce qui doit cuire à cœur, comme le poulet cru : impossible de baisser.',
          ],
        },
        {
          heading: 'Le modèle européen a sa propre limite',
          paragraphs: [
            'L’AF140EU est la Ninja Pro de 4,7 litres vendue en Europe. Sa page produit donne une plage qui s’arrête à {EU_MAX_HI_C}°C, un peu au-dessus des {MAX_LO_C}°C ({MAX_LO}°F) des paniers américains. Choisissez sa ligne et le convertisseur applique cette limite.',
            'Le nom de la touche ne dit pas la température non plus : l’Air Fryer Pro américaine a un Max Crisp, mais son guide met toutes les fonctions à {MAX_LO_C}°C. Sur la DoubleStack XL et le four Foodi, Air Fry atteint {MAX_HI_C}°C ; le four, avec ses grilles et son volume, reçoit la conversion type four, plus douce.',
          ],
        },
        {
          heading: 'Préchauffer une Ninja',
          paragraphs: [
            'Les paniers ne préchauffent pas seuls : les guides conseillent 3 minutes à vide avant d’ajouter les aliments, et les temps convertis supposent un panier chaud. La page européenne de l’AF140EU ne parle pas de préchauffage, pas plus que le guide de la DoubleStack XL ; le four Foodi préchauffe tout seul et affiche PRE.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Quelle est la température maximale d’une friteuse à air Ninja ?',
          a: 'Cela dépend du modèle. L’AF140EU européenne monte à {EU_MAX_HI_C}°C. Sur les paniers américains, Air Fry s’arrête à {MAX_LO_C}°C ; Max Crisp sur la Max XL chauffe à {OTHER_MAX_C}°C, et la DoubleStack XL et le four Foodi atteignent {MAX_HI_C}°C.',
        },
        { q: 'Peut-on baisser la température de Max Crisp ?', a: 'Non : le guide de la Max XL indique qu’en Max Crisp la température ne se règle pas. Pour moins de chaleur, passez en Air Fry.' },
        { q: 'Faut-il utiliser Max Crisp pour une recette du four ?', a: 'En général non : convertissez-la pour Air Fry. Max Crisp sert aux surgelés précuits qui ont seulement besoin de dorer.' },
        {
          q: 'Pourquoi ma Ninja européenne n’est-elle pas dans le tableau ?',
          a: 'Nous ajoutons un modèle européen seulement si la page du fabricant donne sa référence et sa température en °C, ce qui manquait pour les SL400EU et SP101EU. Sinon, laissez le sélecteur sur « je ne sais pas ».',
        },
        {
          q: 'Pourquoi les Foodi à deux paniers sont-elles absentes ?',
          a: 'Nous avons lu en entier les guides des DZ201, DZ401 et DZ550 : ils donnent des réglages de tableau et des températures de sonde, jamais de maximum Air Fry.',
        },
      ],
      cardDesc: 'Max Crisp est un réglage fixe, et l’AF140EU européenne a sa propre limite.',
    },
    cosori: {
      name: 'Cosori',
      metaTitle: 'Friteuse à air Cosori : convertir une recette du four selon le modèle',
      metaDescription:
        'Convertissez vos recettes du four pour votre Cosori : plusieurs modèles à panier, y compris les européens -KEU, montent à {MAX_HI_C}°C au lieu des {BASKET_CEIL_C}°C que supposent presque tous les convertisseurs.',
      metaKeywords: 'friteuse à air cosori température, cosori turbo blaze température maximale, cosori caf-dc601-keu, convertir recette four cosori',
      heading: 'Conversion pour friteuse à air Cosori',
      intro:
        'Presque tous les tableaux et calculateurs partent du principe qu’une friteuse à panier s’arrête à {BASKET_CEIL_C}°C : ils bloquent toute recette chaude à ce niveau et ajoutent du temps. Plusieurs Cosori à panier, dont les deux européennes du tableau, montent à {MAX_HI_C}°C. Sur celles-là, une recette du four très chaude devient un réglage plus chaud et plus court, et le temps en plus d’un convertisseur générique dessèche le plat.',
      answerTemplate:
        'Les deux Cosori européennes du tableau, CAF-DC601-KEU et CAF-L501-KEU, montent à {EU_MAX_HI_C}°C selon leurs pages produit, comme plusieurs modèles américains ; la mini Lite et la TwinFry restent à {MAX_LO_C}°C.',
      widgetHeading: 'Convertir une recette du four pour votre Cosori',
      widgetNote: 'Choisissez d’abord le modèle : il fixe panier ou type four et le vrai maximum de sa source. Avec « je ne sais pas », le plafond standard s’applique.',
      sections: [
        {
          heading: 'Pourquoi un panier à {MAX_HI_C}°C change la réponse',
          paragraphs: [
            'Prenez une recette du four à {EX_OVEN_C}°C pendant {EX_OVEN_MIN} minutes, par exemple des frites maison. Un convertisseur pensé pour un panier à {BASKET_CEIL_C}°C donne {EX_GEN_C}°C pendant {EX_GEN_MIN_C} minutes : il ne peut pas monter, alors il rallonge. Sur une Turbo Blaze, on obtient {EX_MODEL_C}°C pendant {EX_MODEL_MIN_C} minutes, car le panier atteint vraiment cette température. Contrôlez dès la minute {EX_MODEL_CHECK_C}.',
            'L’écart se voit surtout sur les frites et les ailes de poulet : avec le temps générique, plus long, à la température élevée de la Cosori, l’intérieur sèche avant la sonnerie.',
          ],
        },
        {
          heading: 'Un programme n’est pas la température de la recette',
          paragraphs: [
            'Chaque touche Cosori démarre à sa propre valeur, souvent sous le maximum. Dans le manuel américain de la Turbo Blaze, Air Fry part de {AIR_FRY_DEFAULT_C}°C et monte à {AIR_FRY_MAX_C}°C, Bake plafonne à {BAKE_MAX_C}°C et Reheat à {REHEAT_MAX_C}°C. Si le réglage converti dépasse ce qu’accepte un programme, passez en Air Fry et réglez la température à la main.',
            'La page européenne de la CAF-DC601-KEU cite une fonction de préchauffage sans durée ni température, et nous n’avons pas lu son manuel européen. La mini Lite n’a pas de préchauffage : ajoutez une ou deux minutes à la première fournée.',
          ],
        },
        {
          heading: 'Deux paniers et le four',
          paragraphs: [
            'La TwinFry fait de l’Air Fry jusqu’à {MAX_LO_C}°C ; seul son Broil monte à {OTHER_MAX_C}°C, et le convertisseur n’utilise jamais Broil pour une recette convertie. Le four Cosori du tableau fonctionne comme un appareil type four : plus de volume et des grilles, donc la conversion la plus douce.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Quelle est la température maximale d’une Cosori ?',
          a: 'Cela dépend du modèle. Les Cosori de notre tableau font de l’Air Fry jusqu’à {MAX_HI_C}°C, y compris les deux européennes, et la mini Lite et la TwinFry restent à {MAX_LO_C}°C.',
        },
        {
          q: 'Faut-il utiliser les programmes Cosori pour une recette du four ?',
          a: 'Utilisez Air Fry avec la température et le temps convertis. Chaque programme démarre à sa propre valeur et certains plafonnent plus bas : ils peuvent vous donner un réglage plus froid que la recette.',
        },
        {
          q: 'Faut-il préchauffer une Cosori ?',
          a: 'Les modèles américains avec une touche Preheat le font comme une étape à part, et le manuel le conseille. Pour les européennes, nous n’avons lu que la page produit, qui ne donne pas de durée.',
        },
        {
          q: 'Pourquoi le temps Cosori est-il plus court qu’ailleurs ?',
          a: 'Parce que le panier atteint la température plus haute. Les convertisseurs qui supposent un plafond plus bas ajoutent du temps pour compenser ; sur un modèle qui y arrive, ce temps en trop fait trop cuire.',
        },
        {
          q: 'Pourquoi d’autres Cosori européennes ne figurent-elles pas ?',
          a: 'Nous ajoutons une ligne seulement quand la page européenne affiche la référence -KEU et la température. D’autres pages montraient une référence américaine.',
        },
      ],
      cardDesc: 'Plusieurs modèles à panier, européens compris, dépassent le plafond des convertisseurs.',
    },
    philips: {
      name: 'Philips',
      metaTitle: 'Airfryer Philips : convertir une recette du four avec sa limite de {EU_MAX_HI_C}°C',
      metaDescription:
        'Convertissez vos recettes du four pour votre Airfryer Philips : les modèles européens du tableau s’arrêtent à {EU_MAX_HI_C}°C, donc les recettes chaudes restent à cette limite. Choisissez votre modèle pour sa vraie limite.',
      metaKeywords: 'airfryer philips température maximale, philips airfryer xxl, philips na230 température, convertir recette four airfryer philips',
      heading: 'Conversion pour Airfryer Philips',
      intro:
        'Les six Airfryer Philips européennes du tableau s’arrêtent à {EU_MAX_HI_C}°C selon leurs pages produit. Les recettes américaines, et beaucoup de recettes du four une fois converties, demandent {BASKET_CEIL_C}°C ({BASKET_CEIL}°F) ou plus : une chaleur que le panier ne donne pas. La solution n’est pas de cuire à la limite pendant le temps de la recette : c’est de rester à la limite, de vérifier plus tôt et d’ajouter les minutes qui manquent.',
      answerTemplate:
        'Les Philips européennes que nous avons montent à {EU_MAX_HI_C}°C, donc le convertisseur garde les recettes chaudes à {F_DIAL_C}°C. Attention à la référence : la NA555 américaine monte à {MAX_HI_C}°C ({MAX_HI}°F sur sa page), l’européenne NA555/00 à {EU_MAX_HI_C}°C.',
      widgetHeading: 'Convertir une recette du four pour votre Philips',
      widgetNote: 'Choisissez votre modèle pour appliquer sa limite. Avec « je ne sais pas », le convertisseur suppose un panier standard à {BASKET_CEIL_C}°C, au-dessus de toutes les Philips européennes du tableau.',
      sections: [
        {
          heading: 'Pourquoi une recette à {BASKET_CEIL_C}°C ne tient pas dans une Philips',
          paragraphs: [
            'Prenez une plaque de légumes rôtis au four à {EX_OVEN_C}°C pendant {EX_OVEN_MIN} minutes. Pour un panier standard, cela donne {EX_GEN_C}°C pendant {EX_GEN_MIN_C} minutes. Une NA230 ne monte pas jusque-là : le convertisseur reste à {EX_MODEL_C}°C pendant {EX_MODEL_MIN_C} minutes et vous dit de vérifier dès la minute {EX_MODEL_CHECK_C}.',
            'Les recettes écrites pour d’autres marques font pareil sans prévenir. Si une recette dit {BASKET_CEIL_C}°C pendant un temps donné, une Philips au maximum sortira un plat un peu plus pâle à ce moment-là. Donnez quelques minutes de plus : il n’y a rien au-dessus.',
          ],
        },
        {
          heading: 'Même référence, autre marché',
          paragraphs: [
            'Philips vend plusieurs modèles sous la même référence en Europe et aux États-Unis. Pour la NA555, la page américaine donne {MAX_HI_C}°C ({MAX_HI}°F dans l’original), alors que la page française de la NA555/00 donne {EU_MAX_HI_C}°C. Le tableau montre donc d’abord les lignes européennes, puis les américaines. Choisissez la ligne du pays où vous avez acheté la vôtre.',
            'Philips donne ses limites en °C : sur les lignes européennes, le °C est celui de la page et le °F une conversion. Le convertisseur arrondit vers le bas au pas de son sélecteur, pour ne jamais proposer un réglage que l’appareil refuse.',
          ],
        },
        {
          heading: 'Les modèles à deux paniers',
          paragraphs: [
            'La Série 3000 à deux paniers, NA351/00 et NA350/00, a la même limite de {EU_MAX_HI_C}°C dans les deux tiroirs selon ses pages européennes. Chaque tiroir a son propre réglage : convertissez chaque aliment séparément.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Quelle est la température maximale d’un Airfryer Philips ?',
          a: 'Sur les six Philips européennes du tableau, {EU_MAX_HI_C}°C selon leurs pages produit. La NA555 américaine monte à {MAX_HI_C}°C ({MAX_HI}°F). Chaque ligne renvoie à sa page d’origine.',
        },
        {
          q: 'Ma recette dit {BASKET_CEIL_C}°C. Que régler sur une Philips ?',
          a: 'Réglez le maximum, {F_DIAL_C}°C, et vérifiez avant la fin ; s’il manque de la couleur, ajoutez quelques minutes. Choisissez votre modèle dans le convertisseur pour obtenir le temps à cette limite.',
        },
        {
          q: 'Pourquoi la NA555 européenne n’a-t-elle pas la même limite que l’américaine ?',
          a: 'Ce sont deux fiches pour deux marchés : l’européenne donne {EU_MAX_HI_C}°C et l’américaine {MAX_HI_C}°C ({MAX_HI}°F), et nous gardons celle de chaque marché.',
        },
        {
          q: 'L’Airfryer XXL contient-il plus que le modèle normal ?',
          a: 'En Europe, les pages des HD9650/90 et HD9285/90 donnent une capacité en litres. La fiche américaine de la HD9650 donne une charge d’aliments en kilos, donc cette ligne n’a pas de volume.',
        },
        { q: 'La température est-elle la même dans les deux paniers ?', a: 'Oui, chaque tiroir a la même limite. La différence, c’est qu’on peut lancer deux réglages à la fois : convertissez chaque aliment à part.' },
      ],
      cardDesc: 'Un plafond plus bas que la plupart : les recettes chaudes restent à la limite.',
    },
    instant: {
      name: 'Instant Vortex',
      metaTitle: 'Instant Vortex : convertir une recette du four, temps et température',
      metaDescription:
        'Convertissez vos recettes du four pour votre Instant Vortex : Air Fry monte à {F_MAX_C}°C, quand apparaît l’alerte Turn Food et comment utiliser la fenêtre ClearCook au lieu d’ouvrir le panier.',
      metaKeywords: 'instant vortex température, instant vortex turn food, friteuse à air instant vortex plus, convertir recette four instant vortex',
      heading: 'Conversion pour friteuse à air Instant Vortex',
      intro:
        'Les Instant Vortex interrompent la cuisson avec une alerte Turn Food à mi-parcours. Si vous n’êtes pas là, elles attendent {TURN_WAIT} secondes puis reprennent sans retournement, et l’aliment sort pâle d’un côté. Sur les modèles ClearCook, on regarde par la fenêtre au lieu de tirer le panier, qui perd de la chaleur à chaque ouverture.',
      answerTemplate:
        'Toutes les Instant Vortex que nous avons font de l’Air Fry jusqu’à {F_MAX_C}°C ({F_MAX}°F) ; les modèles à deux zones gratinent jusqu’à {OTHER_MAX_C}°C, ce que le convertisseur n’utilise pas. Ce sont des modèles américains : choisissez le vôtre ci-dessous.',
      widgetHeading: 'Convertir une recette du four pour votre Instant Vortex',
      widgetNote: 'Choisissez votre modèle pour fixer son type et sa limite. Cette limite égale le plafond standard du panier : la différence tient à la façon de gérer le retournement.',
      sections: [
        {
          heading: 'L’alerte Turn Food',
          paragraphs: [
            'Prenez des hauts de cuisse de poulet rôtis à {EX_OVEN_C}°C pendant {EX_OVEN_MIN} minutes. Sur une Vortex Plus, cela donne {EX_MODEL_C}°C pendant {EX_MODEL_MIN_C} minutes, premier contrôle à la minute {EX_MODEL_CHECK_C}. Retournez vers la minute {EX_HALF_C} et sortez-les quand le cœur atteint {INT_C}°C. Air Fry et Roast affichent Turn Food en cours de cuisson : tirez le panier, retournez, remettez-le.',
            'Si vous ratez l’alerte, la cuisson reprend après {TURN_WAIT} secondes : mettez un minuteur sur votre téléphone si vous vous éloignez. Broil et Dehydrate ne demandent pas de retournement, et Reheat démarre sans préchauffage, donc sans étape Add Food.',
          ],
        },
        {
          heading: 'La fenêtre ClearCook plutôt que le panier',
          paragraphs: [
            'Sur les modèles ClearCook, appuyez sur Light et surveillez la coloration par la fenêtre. Chaque ouverture du panier refroidit la cuve, que la Vortex doit ensuite rattraper, ce qui rallonge la cuisson. Ouvrez pour le retournement et le contrôle final, pas entre les deux.',
            'Sans fenêtre, fiez-vous au temps converti : ouvrez le panier pour le retournement et à la minute de contrôle.',
          ],
        },
        {
          heading: 'Les programmes Vortex et leurs limites',
          paragraphs: [
            'Sur la Vortex Plus de 6 quarts, Air Fry part de {AIR_FRY_DEFAULT_C}°C et monte à {AIR_FRY_MAX_C}°C. Broil va de {BROIL_MIN_C}°C à {BROIL_MAX_C}°C et Reheat s’arrête à {REHEAT_MAX_C}°C. Pour une recette du four, prenez Air Fry ou Roast et réglez vous-même la température convertie ; Reheat n’atteint pas un vrai réglage de cuisson.',
            'Les modèles dont le nom contient Plus descendent à {F_MIN_C}°C pour la déshydratation. La Vortex de base démarre plus haut, ce qui ne compte que pour les fruits secs ou le bœuf séché.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Quelle est la température maximale d’une Instant Vortex ?',
          a: 'Air Fry monte à {F_MAX_C}°C ({F_MAX}°F) sur toutes les Vortex de notre tableau. Les modèles à deux zones gratinent plus haut, jusqu’à {OTHER_MAX_C}°C, mais Air Fry reste à {F_MAX_C}°C.',
        },
        { q: 'Que se passe-t-il si j’ignore Turn Food ?', a: 'La Vortex attend {TURN_WAIT} secondes puis continue sans retournement. Ce qu’il fallait retourner sera plus doré dessus que dessous.' },
        { q: 'L’Instant Vortex préchauffe-t-elle ?', a: 'Oui. Air Fry, Roast et Bake affichent d’abord le préchauffage, puis Add Food quand elle est prête. Reheat saute le préchauffage.' },
        { q: 'Peut-on surveiller sans ouvrir le panier ?', a: 'Sur les modèles ClearCook, allumez la lumière et regardez par la fenêtre ; ouvrir le panier refroidit la cuve.' },
        {
          q: 'Ce tableau vaut-il pour une Vortex achetée en Europe ?',
          a: 'Les pages européennes d’Instant que nous avons lues n’affichent pas la référence du modèle, donc impossible de les relier à une ligne. Vérifiez le sélecteur de votre appareil : s’il monte à {F_MAX_C}°C, le convertisseur avec le plafond standard convient.',
        },
        {
          q: 'Convertit-on autrement pour les VersaZone ou Dual ?',
          a: 'Convertissez chaque aliment séparément : chaque zone a son réglage, avec la même limite Air Fry de {F_MAX_C}°C.',
        },
      ],
      cardDesc: 'Quand arrive l’alerte Turn Food et comment surveiller par la fenêtre.',
    },
  },
  maxTemp: {
    metaTitle: 'Température maximale du air fryer par modèle : Ninja, Cosori, Philips, Instant',
    metaDescription:
      'La température maximale en mode Air Fry de {N_MODELS} modèles de friteuse à air, recopiée du manuel ou de la fiche du fabricant avec son lien. Modèles européens d’abord ; filtrez par marque et type, triez par limite ou taille.',
    metaKeywords: 'température maximale air fryer, température max friteuse sans huile par modèle, cosori température maximale, philips airfryer température maximale, ninja température maximale',
    heading: 'Température maximale du air fryer par modèle',
    intro:
      'Le réglage le plus haut du mode Air Fry, modèle par modèle, tiré du manuel ou de la fiche technique du fabricant lui-même. Il va de {MAX_LO_C}°C ({MAX_LO}°F) à {MAX_HI_C}°C ({MAX_HI}°F) sur les {N_MODELS} modèles que nous avons sourcés. C’est cette limite qui décide de la conversion d’une recette au four très chaude : si votre modèle n’atteint pas la température convertie, il faut lui rendre du temps.',
    filterBrand: 'Marque',
    filterType: 'Type',
    all: 'Tous',
    sortBy: 'Trier par',
    sortLabels: { maxF: 'Température maximale', capacity: 'Capacité', brand: 'Marque' },
    showing: '{N} modèles sur {TOTAL}',
    none: 'Aucun modèle sourcé ne correspond à ce filtre.',
    brandPageLink: 'Convertisseur',
    sections: [
      {
        heading: 'Ce que veut dire le maximum',
        paragraphs: [
          'Chaque valeur est le maximum du mode Air Fry, parce que c’est le mode qui sert à cuire une recette convertie. Certains modèles à deux zones gratinent plus chaud ; c’est indiqué à côté du modèle et le convertisseur ne s’en sert jamais.',
          'Les {N_EU} modèles européens passent en premier, chacun avec la fiche produit européenne d’où vient sa limite ; viennent ensuite ceux du Royaume-Uni et des États-Unis. Toutes les lignes affichent les °C en premier. Quand la source donne la limite en °F, la valeur en °C est convertie, et un bouton à pas de {DIAL_STEP}° s’arrête au cran sous la limite, jamais au-dessus.',
        ],
      },
      {
        heading: 'Comment la limite change une conversion',
        paragraphs: [
          'Si une recette se convertit à une température au-dessus de la limite de votre modèle, elle reste à la limite et le temps s’allonge pour compenser. Un modèle dont la limite dépasse celle du panier standard à {BASKET_CEIL_C}°C ({BASKET_CEIL}°F) peut prendre le réglage plus chaud et plus court. Les pages de chaque marque font tourner le convertisseur avec la limite de votre modèle.',
        ],
      },
    ],
    faqs: [
      { q: 'Quelle est la température la plus haute d’un air fryer ?', a: 'Parmi les modèles que nous avons sourcés, le mode Air Fry monte au plus à {MAX_HI_C}°C ({MAX_HI}°F). La plupart des paniers s’arrêtent à {BASKET_CEIL_C}°C ({BASKET_CEIL}°F), et plusieurs Philips plus bas, à {PH_MAX_C}°C.' },
      { q: 'D’où viennent ces valeurs ?', a: 'Du manuel ou de la fiche produit de chaque fabricant, en lien sur chaque ligne avec la date à laquelle nous l’avons lu. Les modèles que nous n’avons pas pu sourcer chez le fabricant sont exclus.' },
      { q: 'Pourquoi mon modèle n’y est-il pas ?', a: 'Soit nous n’avons trouvé ni son manuel ni sa fiche chez le fabricant, soit la source n’indique pas de plage de température. Nous n’ajoutons un modèle que si la source donne la limite.' },
      { q: 'Pourquoi la même série apparaît-elle plusieurs fois ?', a: 'Les modèles vendus en Europe ou au Royaume-Uni ont leur propre numéro de modèle et leur propre fiche, et le tableau indique le marché de chaque ligne. Chaque version a sa ligne et sa source, car la même série peut annoncer une autre limite sur un autre marché.' },
      { q: 'Un maximum plus élevé rend-il un air fryer meilleur ?', a: 'Pas à lui seul. Cela veut dire que les recettes très chaudes se convertissent sans temps ajouté, ce qui aide pour les frites et les ailes de poulet. Une limite plus basse cuit tout aussi bien, avec quelques minutes de plus.' },
    ],
    cardDesc: 'Le tableau des limites qui alimente le convertisseur, avec la source de chaque ligne.',
    cardSpecTemplate: '{N_MODELS} modèles sourcés',
    datasetName: 'Température maximale en mode Air Fry du air fryer par modèle',
    datasetVariables: ['Température maximale Air Fry (°C)', 'Capacité', 'Préchauffage'],
  },
};

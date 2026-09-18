import type { Dictionary } from '../types';

const fr: Dictionary = {
  nav: {
    convert: 'Convertir',
    reverse: 'Inverse',
    foodPresets: 'Aliments',
    brands: 'Marques',
    chart: 'Tableau',
    guide: 'Guide',
  },
  footer: {
    converter: 'Convertisseur',
    foodPresets: 'Aliments préréglés',
    conversionChart: 'Tableau de conversion',
    about: 'À propos',
    contact: 'Contact',
    privacyPolicy: 'Politique de confidentialité',
    termsConditions: 'Conditions d’utilisation',
    moreFreeTools: 'Plus d’outils gratuits :',
    copyrightSuffix: 'outils gratuits de conversion culinaire dans le navigateur',
  },
  converter: {
    widgetLabel: 'Four → Friteuse à air',
    live: 'En direct',
    ovenTemperature: 'Température du four',
    ovenTime: 'Temps de cuisson au four',
    min: 'min',
    foodType: 'Type d’aliment',
    airFryerStyle: 'Type de friteuse à air',
    basket: 'Panier',
    ovenStyle: 'Type four',
    airFryerSetting: 'Réglage de la friteuse à air',
    checkAt: 'Vérifier à',
    preheat: 'Préchauffage',
    gasMark: 'Thermostat',
    gasMarkDash: 'Thermostat —',
    unitBasket: 'friteuse à panier',
    unitOven: 'appareil type four',
    cappedNoteTemplate:
      'Votre recette demande plus de chaleur qu’une {unit} ne peut atteindre. Le réglage a été limité à {ceiling}°F avec du temps ajouté en compensation — vérifiez la cuisson un peu plus tôt et attendez-vous à une surface légèrement moins croustillante.',
    foods: {
      general: { label: 'Général / mixte', tip: 'Secouez ou retournez à mi-cuisson.' },
      fries: { label: 'Frites et pommes de terre', tip: 'Secouez deux fois — une fois tôt, une fois à mi-cuisson. Gardez une seule couche.' },
      wings: { label: 'Ailes de poulet', tip: 'Séchez-les avant cuisson et retournez à mi-cuisson pour une peau uniforme.' },
      breast: { label: 'Blanc de poulet (désossé)', tip: 'Retirez à 165°F à cœur — la température continue de grimper pendant le repos.' },
      thigh: { label: 'Cuisses de poulet / avec os', tip: 'Peau vers le haut du début à la fin. Pas besoin de retourner.' },
      steak: { label: 'Steak et pièces épaisses', tip: 'Retournez une fois, puis laissez reposer 5 minutes avant de trancher.' },
      fish: { label: 'Poisson et saumon', tip: 'Ne pas retourner. Vérifiez au temps minimum — le poisson est trop cuit en moins d’une minute.' },
      bacon: { label: 'Lard / bacon', tip: 'Une seule couche. Égouttez la graisse à mi-cuisson si elle commence à fumer.' },
      veg: { label: 'Légumes', tip: 'Coupez en morceaux de taille égale et remuez à mi-cuisson.' },
      baked: { label: 'Pâtisseries et biscuits', tip: 'Une réduction plus douce — la pâte prend plus lentement que le dessus ne dore.' },
      pizza: { label: 'Pizza et réchauffage', tip: 'Pas besoin de préchauffer pour réchauffer. Surveillez la croûte, pas l’horloge.' },
      casserole: { label: 'Gratins et plats épais', tip: 'Couvrez de papier aluminium si le dessus dore avant que le centre soit chaud.' },
    },
  },
  reverseConverter: {
    widgetLabel: 'Friteuse à air → Four',
    airFryerTemperature: 'Température de la friteuse à air',
    airFryerTime: 'Temps de friteuse à air',
    ovenSetting: 'Réglage du four',
    stepNote: 'Arrondi aux paliers de 25°F d’un four',
    ovenCaveat:
      'Un four classique ne fait pas circuler l’air comme le panier d’une friteuse à air — préchauffez-le complètement avant d’enfourner, et attendez-vous à ce qu’une seule couche d’aliments croustille un peu moins qu’à la friteuse à air.',
    ambiguousCeilingNoteTemplate:
      'Ceci est au plafond de votre {unit} ({ceiling}°F). Si ce réglage vient de la conversion à la baisse d’une recette de four plus chaude, le temps inclut déjà environ 8 % en plus — retirez-le pour un résultat plus précis.',
  },
  home: {
    metaTitle: 'Convertisseur four vers friteuse à air',
    metaDescription:
      'Convertisseur gratuit four vers friteuse à air. Convertissez la température et le temps de cuisson du four en réglages de friteuse à air selon le type d’aliment et panier vs. type four — sans règle fixe de 25°, sans inscription.',
    metaKeywords:
      'convertisseur four vers friteuse à air, conversion four vers friteuse à air, convertir four en friteuse à air, temps de cuisson four vers friteuse à air, conversion friteuse à air vers four, calculateur friteuse à air vers four, tableau de conversion friteuse à air, tableau de température friteuse à air, temps de cuisson friteuse à air, calculateur friteuse à air',
    eyebrow: 'Gratuit / Sans inscription / Fonctionne hors ligne',
    heroTitle: 'Convertisseur four vers friteuse à air',
    heroSub:
      'Entrez la température et le temps indiqués sur la recette. Obtenez le réglage de friteuse à air pour votre aliment, adapté au panier ou au type four — pas une règle fixe de 25°.',
    ctaLabel: 'Ouvrir le convertisseur complet',
    commonConversionsHeading: 'Conversions courantes',
    commonConversions: ['−20 % de temps', '−20 % de temps', '−20 % de temps', 'plafond panier'],
    railFootnote: 'Multiplicateurs ajustés pour les friteuses à air à panier et de type four, par type d’aliment.',
    comingSoon: 'Bientôt disponible',
    sectionTitles: {
      convert: 'Convertir',
      reverse: 'Conversion inverse',
      frozen: 'Mode surgelés',
      presets: 'Aliments préréglés',
      brands: 'Réglages par marque',
    },
    convertCards: [
      { title: 'Four → Friteuse à air', desc: 'L’outil phare. Multiplicateurs par type d’aliment, panier vs. type four, plafond de température, °F/°C/thermostat.' },
      { title: 'Convection → Friteuse à air', desc: 'Les recettes à convection sont déjà ajustées pour le ventilateur, elles ont donc besoin d’une réduction plus douce. La plupart des outils se trompent ici.' },
      { title: 'Ajustement par portions et lots', desc: 'Ajustez le temps quand le panier est chargé ou que vous cuisinez en deux fournées.' },
      { title: 'Ajustement par puissance', desc: 'Les paniers compacts de 1200 W cuisent plus lentement que les modèles de 1700 W. Corrigez pour le vôtre.' },
    ],
    reverseCards: [
      { title: 'Friteuse à air → Four', desc: 'Vous cuisinez pour beaucoup de monde, ou le panier est occupé. Revenez au four.' },
      { title: 'Friteuse à air → Convection', desc: 'Même principe de ventilateur, cavité plus grande. Ajoute du temps, pas de la température.' },
      { title: '°F / °C / thermostat', desc: 'Conversion directe de température pour les recettes britanniques, européennes et américaines.' },
      { title: 'Tableau de conversion imprimable', desc: 'Tableau complet en °F et °C à coller sur le frigo. Une page, sans inscription par e-mail.' },
    ],
    frozenTeaser: {
      heading: 'Directement du congélateur à la friteuse',
      desc: 'Gardez la température indiquée sur l’emballage, réduisez le temps d’environ 30 % — l’inverse de la règle habituelle. Choisissez ce que vous cuisinez.',
      selectLabel: 'Sélectionnez un aliment surgelé',
      options: ['Frites surgelées', 'Nuggets de poulet surgelés', 'Blanc de poulet surgelé', 'Pizza surgelée', 'Bâtonnets de poisson surgelés'],
      goLabel: 'Aller',
    },
    frozenCards: [
      { title: 'Frites surgelées', spec: '400°F · 15 min · secouer ×2', desc: 'Une seule couche, pas besoin d’huile.' },
      { title: 'Nuggets surgelés', spec: '380°F · 10 min · retourner une fois', desc: 'La panure dore rapidement.' },
      { title: 'Blanc de poulet surgelé', spec: '360°F · 22 min · 165°F à cœur', desc: 'Plus bas et plus lent que ce à quoi vous vous attendez.' },
      { title: 'Pizza surgelée', spec: '375°F · 8 min · sans préchauffage', desc: 'Format individuel uniquement dans un panier.' },
    ],
    presetsTeaser: {
      heading: 'Temps et température pour un aliment précis',
      desc: 'Chaque préréglage donne la température, le temps, les moments de secouer ou retourner, et les signes de cuisson. Pas de blog de recettes à faire défiler.',
      selectLabel: 'Sélectionnez un aliment préréglé',
      options: ['Blanc de poulet', 'Ailes de poulet', 'Filet de saumon', 'Lard / bacon', 'Steak'],
      goLabel: 'Aller',
    },
    presetCards: [
      { title: 'Blanc de poulet', spec: '375°F · 16 min · retourner à 8', desc: 'Préréglage le plus utilisé. Retirez à 165°F à cœur.' },
      { title: 'Ailes de poulet', spec: '400°F · 22 min · retourner à 12', desc: 'Séchez-les d’abord. Option température en deux étapes.' },
      { title: 'Filet de saumon', spec: '390°F · 9 min · sans retourner', desc: 'Peau vers le bas. Tableau d’épaisseur inclus.' },
      { title: 'Lard / bacon', spec: '350°F · 9 min · égoutter à 5', desc: 'Une température plus basse évite que la graisse ne fume.' },
    ],
    allPresetsCard: { title: 'Les 40 préréglages →', desc: 'Viande, poisson, légumes, pâtisserie, réchauffage.' },
    brandCards: [
      { title: 'Ninja', spec: 'Max 400°F · panier et double', desc: 'Réglages pour AF101, AF161, DZ201 et Foodi.' },
      { title: 'Cosori', spec: 'Max 450°F · 11 préréglages', desc: 'Traduit les boutons préréglés en temps réels.' },
      { title: 'Philips', spec: 'Max 390°F · Rapid Air', desc: 'Plafond plus bas que la plupart — les temps sont plus longs.' },
      { title: 'Référence de température max par modèle', spec: '60+ modèles', desc: 'Le tableau de plafonds qui alimente le convertisseur ci-dessus.' },
    ],
    chartStrip: ['Multiplicateurs par aliment', 'Panier et type four', '°F · °C · thermostat', 'Gratuit — sans compte'],
    guide: [
      {
        heading: 'Qu’est-ce qu’un convertisseur four vers friteuse à air ?',
        body: 'Un convertisseur four vers friteuse à air prend la température et le temps d’une recette de four classique et les traduit en réglage équivalent pour friteuse à air — pour qu’une recette écrite pour un four à 425°F ne ressorte pas avec des bords brûlés et un centre cru simplement parce qu’elle a été cuite dans un panier plutôt qu’au four. Il est conçu pour ce moment que tout cuisinier amateur finit par rencontrer : une recette préférée indique une température et un temps de four, mais allumer tout le four semble excessif pour quatre cuisses de poulet ou une plaque de frites, et la friteuse à air posée sur le plan de travail peut faire le travail plus vite et avec moins d’énergie — si l’on connaît les bons réglages. C’est cet écart que cet outil comble. Entrez la température et le temps de four de la recette, indiquez ce que vous cuisinez et si votre appareil est de type panier ou de type four, et il retourne un réglage qui correspond réellement à la façon dont cuisent les friteuses à air.',
      },
      {
        heading: 'Comment fonctionne la conversion four vers friteuse à air',
        body: 'La plupart des conseils de conversion four vers friteuse à air en ligne se résument à une phrase : retirez 25°F et réduisez le temps d’un cinquième. Cette règle n’est pas totalement fausse — les friteuses à air sont de petits fours à convection à air pulsé, elles transfèrent donc la chaleur plus vite et ont besoin d’une température plus basse et d’un temps de cuisson plus court qu’un four classique. Mais traiter tous les aliments de la même façon, c’est là que les règles fixes échouent. Une règle fixe suppose qu’une plaque de frites fines et un pain de banane dense réagissent de façon identique à un flux d’air plus rapide. Ce n’est pas le cas. Les aliments fins à grande surface comme les frites, le bacon et les ailes de poulet sont entourés d’air chaud sur presque toutes les faces, donc ils cuisent nettement plus vite — souvent avec 25 à 30 % de temps en moins. Un gratin dense ou une pièce de viande épaisse doit encore conduire la chaleur jusqu’au centre comme dans un four, donc l’économie de temps est plus faible, plus proche de 10 à 15 %. Appliquez le multiplicateur des frites à un gratin et vous le sortirez pas assez cuit ; appliquez le multiplicateur du gratin aux frites et vous les dessécherez. C’est pourquoi une conversion correcte du four classique vers la friteuse à air nécessite un multiplicateur par catégorie d’aliment plutôt qu’un seul chiffre pour tout — le convertisseur ci-dessus regarde ce que vous avez sélectionné et applique la réduction de temps que ce type d’aliment nécessite réellement, en plus de la baisse de température standard.',
      },
      {
        heading: 'Étape par étape : comment convertir du four vers la friteuse à air',
        body: 'Pour convertir des réglages de four vers la friteuse à air pour n’importe quelle recette : entrez la température du four exactement telle qu’écrite, entrez le temps de cuisson au four, choisissez le type d’aliment le plus proche, puis indiquez si votre appareil est une friteuse à air à panier ou une unité de type four (un four friteuse à air ou un hybride four grille-pain). L’outil abaisse la température, applique le bon multiplicateur de temps selon le type d’aliment, et vérifie le résultat par rapport à ce que votre appareil peut réellement atteindre — vous n’obtenez donc jamais un chiffre qui n’existe pas sur votre cadran.',
      },
      {
        heading: 'Conversion du temps de cuisson four vers friteuse à air',
        body: 'La température n’est que la moitié du travail — la conversion du temps de cuisson four vers friteuse à air compte tout autant, et c’est la partie que les calculateurs à règle fixe ratent généralement. Comme les friteuses à air font circuler l’air chaud directement autour de l’aliment dans une petite chambre, la chaleur atteint la surface plus vite et la cuisson se termine plus tôt même à température plus basse. C’est pourquoi une cuisson au four de 45 minutes peut devenir une cuisson de 32 minutes à la friteuse à air plutôt qu’un simple pourcentage du chiffre d’origine : la réduction de temps dépend de la surface que l’aliment expose à ce flux d’air, pas seulement du changement de température.',
      },
      {
        heading: 'Conversion friteuse à air vers four (dans l’autre sens)',
        body: 'La conversion fonctionne dans les deux sens. Parfois vous avez une recette de friteuse à air ou un préréglage du manuel de votre appareil et vous devez le convertir en réglages de four — parce que vous cuisinez un lot plus grand que ce que contient le panier, que la friteuse à air est déjà occupée avec autre chose, ou que vous nourrissez une tablée avec le four complet. La conversion friteuse à air vers four signifie généralement augmenter la température et rajouter du temps de cuisson, car la cavité plus grande et le flux d’air plus lent d’un four classique ne peuvent pas égaler la chaleur concentrée de la friteuse à air. Un calculateur friteuse à air vers four applique cela à l’inverse : rajoutez environ 25°F à la température de la friteuse à air, puis prolongez le temps du même pourcentage, sensible au type d’aliment, que la conversion directe avait soustrait. C’est la même logique de base, exécutée à l’envers, et elle est tout aussi sensible au type d’aliment — un lot de nuggets agrandi pour le four nécessite un ajustement de temps différent de celui d’un poulet entier.',
      },
      {
        heading: 'Friteuses à air à panier vs. de type four',
        body: 'Toutes les friteuses à air ne se comportent pas de la même façon, c’est pourquoi ce convertisseur demande quel type vous possédez avant de terminer la conversion. Les friteuses à panier compactent l’aliment dans une petite chambre fermée avec de l’air circulant de tous les côtés — c’est ce qui les rend rapides, mais cela signifie aussi que la plupart des modèles plafonnent autour de 400°F, et dépasser ce plafond n’est pas réaliste, peu importe ce que suggère un calculateur générique. Les unités de type four (y compris les fours friteuse à air et les paniers de type four grille-pain) ont plus de volume d’air autour de l’aliment, donc l’effet est plus doux : les températures peuvent monter un peu plus haut, jusqu’à environ 450°F, avant d’atteindre un plafond pratique. Prendre en compte le type de votre appareil dans la conversion, plutôt que de l’ignorer, est ce qui garde le résultat réaliste.',
      },
      {
        heading: 'Conseils pour de meilleurs résultats',
        body: 'Quelques éléments aident tout résultat de convertisseur four vers friteuse à air à être plus juste dès le premier essai. Préchauffez brièvement — environ 3 minutes pour un panier, 4 pour un type four — car les friteuses à air perdent proportionnellement plus de chaleur qu’un four quand la porte ou le tiroir s’ouvre. Ne surchargez pas le panier ; une seule couche, sans trop serrer, c’est ce que supposent les multiplicateurs par type d’aliment, et un panier bondé a besoin de temps supplémentaire, plus proche de ce que demanderait un four complet. Vérifiez la cuisson quelques minutes avant le temps converti suggéré, surtout la première fois que vous convertissez une nouvelle recette, car la puissance et le calibrage varient selon les modèles de friteuse à air. Et traitez les aliments surgelés différemment — ils suivent le schéma inverse d’une recette fraîche, en gardant la température de l’emballage tout en réduisant quand même le temps, car l’aliment a besoin de la chaleur initiale simplement pour décongeler avant de pouvoir cuire.',
      },
    ],
  },
  tool: {
    metaTitle: 'Convertisseur four vers friteuse à air',
    metaDescription:
      'Entrez la température et le temps de four de n’importe quelle recette. Obtenez le réglage équivalent de friteuse à air, adapté au type d’aliment et au panier vs. type four — avec un plafond pour ne jamais suggérer une température que votre appareil ne peut pas atteindre.',
    metaKeywords: 'conversion four vers friteuse à air, calculateur four vers friteuse à air, calculateur de conversion friteuse à air, tableau de conversion friteuse à air',
    backLink: 'Tous les outils',
    heading: 'Convertisseur four vers friteuse à air',
    subDesc:
      'Entrez la température et le temps de four de n’importe quelle recette. Obtenez le réglage équivalent de friteuse à air, adapté au type d’aliment et au panier vs. type four — avec un plafond pour ne jamais suggérer une température que votre appareil ne peut pas atteindre.',
    aboutHeading: 'À propos de la conversion four vers friteuse à air',
    aboutBody:
      'La plupart des calculateurs four vers friteuse à air appliquent une seule règle fixe à tout aliment : retirez 25°F, réduisez le temps de 20 %. C’est un point de départ raisonnable, mais cela traite une plaque de frites fines comme un gratin dense, et cela ne vérifie jamais si le résultat est une température que votre friteuse à air peut réellement atteindre. Cet outil fait deux choses différemment : il ajuste le multiplicateur selon le type d’aliment, et il plafonne le résultat au vrai maximum de votre appareil au lieu de renvoyer un chiffre qui n’existe pas sur votre cadran.',
    multipliersHeading: 'Comment fonctionnent les multiplicateurs par type d’aliment',
    multipliersBody:
      'La chambre compacte et l’air pulsé d’une friteuse à air transfèrent la chaleur à l’aliment bien plus vite qu’un four de taille normale, donc les temps de cuisson baissent toujours — mais de combien dépend de la surface et de la densité de l’aliment. Les aliments fins à grande surface comme les frites ou le bacon perdent le plus de temps (une réduction d’environ 30 %) car l’air chaud atteint chaque face presque immédiatement. Les aliments denses comme les gratins ou les pâtisseries en perdent le moins (environ 15 %) car la chaleur doit encore se frayer un chemin jusqu’au centre. Le poulet, le poisson et les légumes se situent entre les deux. Le convertisseur recherche le bon multiplicateur pour l’aliment que vous avez sélectionné plutôt que d’appliquer un seul chiffre à tout.',
    basketVsOvenHeading: 'Flux d’air : panier vs. type four',
    basketVsOvenBody:
      'Une friteuse à panier compacte l’aliment dans une petite chambre avec de l’air circulant de tous les côtés, ce qui cuit vite mais a un plafond sûr plus bas — la plupart des paniers plafonnent autour de 400°F. Les unités de type four (fours friteuse à air et paniers type four grille-pain) ont plus de volume d’air autour de l’aliment, donc l’effet est un peu plus doux : cet outil retire 5°F de moins à la température du four et ajoute un petit supplément de temps pour les unités de type four, et permet au résultat de monter jusqu’à 450°F avant de plafonner.',
    whatHappensHeading: 'Que se passe-t-il quand une recette demande plus de chaleur que votre friteuse à air ne peut donner',
    whatHappensBody:
      'Une recette à 450°F convertie avec une règle fixe sur une friteuse à panier plafonnée à 400°F donnerait 425°F — un réglage qui n’existe pas sur le cadran. Cet outil plafonne le résultat au vrai maximum de l’appareil (400°F panier, 450°F type four) et rajoute du temps pour compenser la chaleur plus faible, avec une note en langage clair expliquant ce qui s’est passé et à quoi s’attendre (une surface légèrement moins croustillante, donc vérifiez un peu plus tôt). C’est la lacune la plus fréquente chez les autres calculateurs de friteuse à air, et la raison d’être de cet outil.',
    relatedChartLink: 'Tableau de conversion imprimable',
    relatedReverseLink: 'Convertisseur friteuse à air vers four',
    faqHeading: 'Questions fréquentes',
    faqs: [
      {
        q: 'Pourquoi ne pas simplement retirer 25°F et réduire le temps de 20 % pour tout ?',
        a: 'Parce que les aliments réagissent différemment au flux d’air plus rapide de la friteuse à air. Un aliment fin à grande surface comme les frites a besoin d’une réduction de temps plus importante (environ 30 %) sinon il se dessèche ; un gratin dense en a à peine besoin (environ 15 %). Ce convertisseur applique un multiplicateur différent par type d’aliment plutôt qu’une seule règle fixe.',
      },
      {
        q: 'Que se passe-t-il si la température convertie est plus élevée que ce que ma friteuse à air peut atteindre ?',
        a: 'Le résultat est plafonné au maximum réaliste de votre appareil — 400°F pour une friteuse à panier, 450°F pour un type four — et quelques minutes supplémentaires sont rajoutées en compensation, avec une note expliquant pourquoi. La plupart des calculateurs renvoient silencieusement un chiffre que votre appareil ne peut en réalité pas atteindre.',
      },
      {
        q: 'Quelle est la différence entre les réglages panier et type four ?',
        a: 'Une friteuse à panier entoure l’aliment d’air chaud sur toutes les faces dans une petite chambre, donc elle cuit plus vite et a un plafond de température pratique plus bas. Les unités de type four (fours friteuse à air, paniers type four grille-pain) ont plus de volume d’air autour de l’aliment, donc elles tournent un peu plus fraîches par rapport au four et peuvent monter un peu plus haut avant de plafonner.',
      },
      {
        q: 'Est-ce que ça fonctionne pour un aliment sorti directement du congélateur ?',
        a: 'Les aliments surgelés suivent une logique différente d’une recette fraîche sortie du réfrigérateur — gardez à peu près la température de l’emballage et réduisez le temps d’environ 30 %, l’inverse de la règle habituelle, car l’aliment a besoin de toute la chaleur juste pour décongeler avant de pouvoir cuire.',
      },
      {
        q: 'Quelle est la précision du résultat ?',
        a: 'Les températures sont arrondies au multiple de 5 le plus proche, comme progressent réellement les cadrans et commandes numériques des friteuses à air. Considérez le résultat comme un point de départ, pas une garantie — vérifiez la cuisson un peu avant le temps suggéré, surtout la première fois que vous cuisinez quelque chose dans un nouvel appareil.',
      },
      {
        q: 'Dois-je préchauffer ?',
        a: 'Un court préchauffage aide le résultat à tomber juste : environ 3 minutes pour une unité à panier, 4 minutes pour un type four (affiché dans le panneau de résultat ci-dessus). Sauter le préchauffage signifie généralement juste rajouter une ou deux minutes au temps de cuisson.',
      },
      {
        q: 'Peut-on convertir un four en friteuse à air ?',
        a: 'Vous ne pouvez pas transformer l’appareil lui-même — ce sont des matériels différents. Ce que vous pouvez faire, c’est convertir la température et le temps de four d’une recette en réglage équivalent de friteuse à air, ce qui est exactement ce que fait cet outil : il tient compte de la cuisson plus rapide et à air pulsé de la friteuse à air pour que le même plat réussisse dans l’un ou l’autre appareil.',
      },
      {
        q: '200 degrés dans une friteuse à air, est-ce pareil qu’au four ?',
        a: 'Non. Les friteuses à air font circuler l’air chaud directement autour de l’aliment dans une petite chambre, donc 200° dans une friteuse à air cuit nettement plus vite et dore davantage que 200° dans un four classique. En règle générale, baissez la température d’environ 20°F (ou d’environ 20°C à 180°C) et raccourcissez le temps en compensation — utilisez le calculateur ci-dessus pour un chiffre ajusté à votre aliment précis.',
      },
      {
        q: 'Qu’est-ce que la règle du 20/20 pour les friteuses à air ?',
        a: 'La règle du 20/20 est un raccourci populaire pour la conversion four vers friteuse à air : baissez la température du four de 20°F et réduisez le temps de cuisson de 20 %. C’est une estimation rapide raisonnable, mais elle applique le même ajustement à tous les aliments — ce convertisseur l’affine avec un multiplicateur de temps différent par type d’aliment plutôt qu’un seul chiffre fixe.',
      },
      {
        q: 'Combien font 30 minutes de four à la friteuse à air ?',
        a: 'Environ 21 à 25 minutes, selon ce que vous cuisinez. Les aliments fins à grande surface comme les frites ou les ailes perdent plus près de 30 % du temps (environ 21 minutes), tandis que les aliments denses comme les gratins en perdent plus près de 15 % (environ 25 minutes). Entrez 30 minutes et votre type d’aliment ci-dessus pour un chiffre exact.',
      },
      {
        q: 'Comment convertir 200°C pendant 15 minutes au four en friteuse à air ?',
        a: 'Comme point de départ, 200°C pendant 15 minutes au four deviennent environ 180°C pendant 12 minutes en friteuse à air — une baisse de 20° et une réduction de temps de 20 %. Les chiffres exacts varient selon le type d’aliment et selon que vous avez une unité à panier ou de type four, ce dont tient compte le calculateur ci-dessus.',
      },
      {
        q: 'Une friteuse à air est-elle plus rapide qu’un four ?',
        a: 'Oui, généralement 20 à 30 % plus rapide. La petite chambre de cuisson, la résistance plus proche et la circulation d’air pulsé d’une friteuse à air transfèrent la chaleur à l’aliment bien plus vite qu’un four de taille normale, et elle nécessite peu ou pas de préchauffage comparé aux 10 à 15 minutes d’un four.',
      },
      {
        q: 'Puis-je remplacer mon four par une friteuse à air ?',
        a: 'Pour la cuisine quotidienne en petites quantités — poulet, poisson, légumes, frites, réchauffage de restes — une friteuse à air peut remplacer le four la plupart du temps, plus vite et avec moins d’énergie. Elle ne le remplace pas entièrement : les gros rôtis, les repas sur plaque, la cuisson sur plusieurs grilles, et tout ce qui est trop grand pour le panier ont encore besoin d’un four de taille normale.',
      },
      {
        q: 'Comment transformer un four en friteuse à air ?',
        a: 'Vous ne pouvez pas convertir l’appareil lui-même, mais beaucoup de fours modernes incluent un réglage convection ou « air fry » qui s’en approche — activer le ventilateur réduit le temps et la température effectifs de cuisson de façon similaire à une friteuse à air. Sinon, utilisez ce convertisseur pour traduire n’importe quelle recette de four en réglages de friteuse à air et cuisinez-la dans une friteuse à air séparée.',
      },
      {
        q: 'Combien font 20 minutes de four à la friteuse à air ?',
        a: 'Environ 14 à 17 minutes pour la plupart des aliments — une réduction d’environ 15 à 30 % selon le type d’aliment. Les aliments fins comme les frites ou le bacon se rapprochent de 14 minutes ; les aliments denses comme les pâtisseries se rapprochent de 17. Utilisez le calculateur ci-dessus avec votre aliment précis pour un chiffre exact.',
      },
      {
        q: 'Puis-je utiliser du papier aluminium dans une friteuse à air ?',
        a: 'Oui, la plupart des friteuses à air peuvent utiliser du papier aluminium en toute sécurité tant qu’il ne bloque pas la circulation de l’air autour de l’aliment et ne touche pas la résistance. Lestez-le avec l’aliment pour qu’il ne s’envole pas vers la résistance, laissez des espaces pour la circulation de l’air, et évitez le papier aluminium avec des aliments très acides (tomate, agrumes, marinades au vinaigre) pour des cuissons prolongées, car l’acide peut réagir avec le métal.',
      },
      {
        q: 'Qu’est-ce qui est plus sain, une friteuse à air ou un four ?',
        a: 'Ils sont à peu près équivalents — tous deux cuisent avec peu ou pas d’huile ajoutée, contrairement à la friture par immersion. L’avantage santé d’une friteuse à air se situe spécifiquement par rapport à la friture par immersion (jusqu’à 70 à 80 % d’huile en moins), pas par rapport à la cuisson au four, qui utilise déjà très peu d’huile. La principale différence par rapport à un four est la commodité et la rapidité, pas la nutrition.',
      },
      {
        q: 'Quelle est la différence entre une friteuse à air et un four à convection ?',
        a: 'Elles utilisent le même principe — un ventilateur qui fait circuler l’air chaud — mais la chambre d’une friteuse à air est bien plus petite et l’aliment se trouve plus près à la fois du ventilateur et de la résistance, donc elle cuit plus vite et croustille plus fortement. Un four à convection applique le même flux d’air assisté par ventilateur sur une cavité bien plus grande, c’est pourquoi les recettes à convection ont besoin d’un ajustement plus doux que les recettes de four standard lors de la conversion vers une friteuse à air.',
      },
      {
        q: 'Les friteuses à air consomment-elles moins d’énergie qu’un four ?',
        a: 'Oui. Une friteuse à air typique consomme entre 1200 et 1800 watts et fonctionne pendant une fraction du temps qu’un four nécessite (pas de long préchauffage, moins de volume à chauffer), donc un seul repas coûte généralement nettement moins d’énergie que de chauffer un four de taille normale pour le même aliment.',
      },
      {
        q: 'Puis-je mettre un plat métallique ou un récipient allant au four dans une friteuse à air ?',
        a: 'Oui, tant qu’il va au four et qu’il tient dans le panier ou le plateau avec de l’espace pour que l’air circule de tous les côtés. Le métal, le verre allant au four et la céramique fonctionnent tous bien ; évitez tout ce qui bloque la circulation de l’air ou qui est trop haut pour que le panier se ferme correctement.',
      },
    ],
  },
  reverseTool: {
    metaTitle: 'Convertisseur friteuse à air vers four',
    metaDescription:
      'Entrez la température et le temps de friteuse à air d’une recette, d’un préréglage ou du manuel de votre appareil. Obtenez le réglage de four équivalent, adapté au type d’aliment et au panier vs. type four, arrondi aux paliers de 25° d’un vrai four.',
    metaKeywords:
      'conversion friteuse à air vers four, calculateur friteuse à air vers four, convertir friteuse à air vers four, conversion du temps de cuisson friteuse à air vers four, friteuse à air vers four classique, réglage friteuse à air vers température de four',
    backLink: 'Tous les outils',
    heading: 'Convertisseur friteuse à air vers four',
    subDesc:
      'Entrez la température et le temps de friteuse à air d’une recette, d’un préréglage ou du manuel de votre appareil. Obtenez le réglage de four équivalent, adapté au type d’aliment et au panier vs. type four, arrondi aux paliers de 25° d’un vrai four.',
    aboutHeading: 'À propos de la conversion friteuse à air vers four',
    aboutBody:
      'La plupart des outils four vers friteuse à air ne fonctionnent que dans un sens, mais le trajet inverse se présente tout aussi souvent. Une fiche recette, un préréglage tiré du manuel de votre friteuse à air, ou le conseil d’un ami vous donne une température et un temps de friteuse à air, et vous avez besoin des chiffres du four classique à la place — parce que vous cuisinez pour plus de monde que le panier n’en contient, que la friteuse à air est déjà occupée par autre chose, ou que le four est tout simplement le bon outil pour ce que vous préparez aujourd’hui. Ce convertisseur fait fonctionner à l’envers le moteur du convertisseur principal four vers friteuse à air : entrez la température et le temps de friteuse à air, choisissez le type d’aliment et si votre appareil est de type panier ou type four, et vous obtenez le réglage de four que cette recette demanderait — avec les mêmes multiplicateurs par aliment que le convertisseur direct, pas un chiffre fixe inversé.',
    roundingHeading: 'Pourquoi le résultat du four est arrondi à 25°F, pas à 5°F',
    roundingBody:
      'L’écran numérique d’une friteuse à air peut afficher n’importe quel palier de 5°, mais un vrai cadran ou bouton de four n’avance que par paliers de 25° — 325, 350, 375, 400, et ainsi de suite. Arrondir une conversion inverse à la grille plus fine de 5° de la friteuse à air donnerait des chiffres comme 405°F ou 415°F qui n’existent pas sur un cadran de four, et convertir une recette dans les deux sens — du four vers la friteuse à air, puis retour au four — s’éloignerait un peu plus du chiffre d’origine à chaque changement de sens. Arrondir plutôt le résultat du four au 25° le plus proche garde chaque résultat comme un réglage que l’on peut vraiment afficher sur un cadran, et c’est pour cela que convertir la même recette dans les deux sens revient près de son point de départ au lieu de dériver.',
    workedExampleHeading: 'Exemple concret',
    workedExampleTemplate:
      'Prenez une recette de friteuse à panier avec un aliment général à 375°F pendant 20 minutes : convertissez-la à l’envers et le réglage de four ressort à {GENERAL_OVEN_F}°F pendant {GENERAL_OVEN_MIN} minutes — la baisse habituelle de 25° et le gain de temps de 20 % de la friteuse à air, rajoutés. Les frites se comportent différemment : 400°F pendant 12 minutes dans un panier deviennent {FRIES_OVEN_F}°F pendant {FRIES_OVEN_MIN} minutes au four, une hausse de temps plus importante, car les frites perdent plus de temps que la moyenne en entrant dans la friteuse à air et doivent en récupérer davantage en sortant.',
    whenOvenBetterHeading: 'Quand le four est vraiment le meilleur choix',
    whenOvenBetterBody:
      'La friteuse à air gagne en rapidité pour une seule couche d’aliments non tassés, mais le four reste le meilleur outil dans plusieurs situations courantes : cuisiner plus que ce que le panier contient en une seule fournée, préparer deux plats sur des grilles différentes en même temps, une friteuse à air déjà occupée en plein cycle, ou une pièce trop grande pour tenir dans un panier — un poulet entier, une plaque entière de biscuits, un grand plateau de légumes pour beaucoup de monde. Dans tous ces cas, reconvertir le réglage de friteuse à air que vous connaissez déjà vers un chiffre de four est plus rapide que de deviner à partir de zéro, et cela garde intacte la logique par type d’aliment — les frites doivent récupérer plus de temps qu’un gratin — dans les deux sens.',
    ovenCaveatHeading: 'À savoir : un four standard n’est pas fait pour frire',
    ovenCaveatBody:
      'Un four classique n’a pas la circulation d’air pulsé d’un panier de friteuse à air, donc deux choses changent. Le préchauffage compte davantage, car le four a besoin de tout son temps de montée en température pour l’atteindre uniformément, contrairement aux 3 à 4 minutes que demande une friteuse à air. Et une seule couche d’aliments ne croustillera pas aussi fort qu’au panier, faute d’un flux d’air aussi concentré frappant chaque face à la fois. Aucun des deux n’est un problème à contourner — attendez-vous simplement à ce qu’une plaque d’ailes au four ne soit pas identique à la version faite à la friteuse à air, et misez sur un réglage convection ou « air fry » du four si le vôtre en a un, car cela comble l’essentiel de l’écart.',
    relatedFlagshipLink: 'Convertisseur four vers friteuse à air',
    relatedChartLink: 'Tableau de conversion imprimable',
    faqHeading: 'Questions fréquentes',
    faqs: [
      {
        q: 'Comment convertir les réglages de la friteuse à air vers un four classique ?',
        a: 'Rajoutez le même écart de température par type d’aliment à la température de la friteuse à air (25°F pour la plupart des aliments, 20°F pour le steak, le poisson, la pâtisserie et les gratins), et divisez le temps de friteuse à air par le multiplicateur de temps de cet aliment au lieu de le multiplier. Le calculateur ci-dessus le fait automatiquement et arrondit la température du four à un vrai palier de 25° du cadran.',
      },
      {
        q: 'Pourquoi la température du four est-elle arrondie à un palier de 25° plutôt qu’à un chiffre exact ?',
        a: 'Parce qu’un vrai cadran ou contrôle numérique de four n’avance que par paliers de 25°F — 350, 375, 400 — pas par les paliers de 5° plus fins d’une friteuse à air. Arrondir à ce que le cadran peut réellement afficher est aussi ce qui garde une recette convertie dans les deux sens (four vers friteuse à air, puis retour au four) proche du chiffre de départ au lieu de dériver.',
      },
      {
        q: 'Le four donnera-t-il exactement le même résultat que la friteuse à air ?',
        a: 'Proche, mais pas identique. Un four classique n’a pas la circulation d’air pulsé d’un panier de friteuse à air, donc le préchauffage compte davantage et une seule couche d’aliments ne croustillera pas autant. Si votre four a un réglage de ventilation par convection ou « air fry », utilisez-le — cela comble l’essentiel de l’écart.',
      },
      {
        q: 'Quand faut-il utiliser le four plutôt que la friteuse à air ?',
        a: 'Dès que le panier ne peut pas faire le travail en une seule fournée : une quantité plus grande que ce que le panier contient, deux plats qui cuisent sur des grilles séparées en même temps, une friteuse à air déjà occupée, ou un aliment trop grand pour tenir dans un panier, comme un poulet entier ou une plaque entière de biscuits.',
      },
      {
        q: 'Le multiplicateur par type d’aliment compte-t-il encore dans ce sens ?',
        a: 'Oui — il s’inverse au lieu de disparaître. Les aliments fins à grande surface comme les frites et le bacon avaient besoin de la plus grande réduction de temps en entrant dans la friteuse à air, ils ont donc besoin de la plus grande augmentation de temps en revenant au four. Les aliments denses comme les gratins ont besoin du plus petit ajustement dans les deux sens.',
      },
      {
        q: 'Quelle température à cœur dois-je encore vérifier, quel que soit l’appareil ?',
        a: 'Les températures à cœur visées ne changent pas entre une friteuse à air et un four — retirez la volaille à 165°F à cœur, et le poisson, le steak ou les côtelettes à 145°F. L’appareil change le temps et le réglage du cadran pour y arriver ; il ne change pas ce que « cuit » veut dire.',
      },
    ],
  },
  chart: {
    metaTitle: 'Tableau de conversion friteuse à air imprimable gratuit',
    metaDescription:
      'Un tableau imprimable de température, de temps et de multiplicateurs par aliment pour convertir du four à la friteuse à air — une page, °F et °C, sans e-mail, sans fenêtre pop-up.',
    metaKeywords:
      'tableau de conversion friteuse à air, tableau de température friteuse à air, tableau imprimable friteuse à air, tableau four vers friteuse à air, tableau des temps de cuisson friteuse à air, tableau de conversion friteuse à air imprimable',
    backLink: 'Convertisseur complet',
    pageTag: 'Imprimable · Sans e-mail · Sans fenêtre pop-up',
    heading: 'Tableau de conversion friteuse à air',
    lead:
      'Tableaux de température, de temps et de multiplicateurs par aliment pour convertir du four à la friteuse à air, sur une seule page imprimable. Tous les sites de tableaux dédiés de ce secteur verrouillent leur version imprimable derrière une inscription par e-mail — pas celui-ci.',
    printButton: 'Imprimer ce tableau',
    tempTableHeading: 'Température — Four → Friteuse à air (panier)',
    tempHeaders: { ovenF: 'Four °F', airFryerF: 'Friteuse °F', airFryerC: 'Friteuse °C', gasMark: 'Thermostat' },
    tempFootnote: '† Maintenu au plafond de 400°F pour panier — voir la note ci-dessous.',
    timeTableHeading: 'Temps — Général / mixte, panier',
    timeHeaders: { ovenTime: 'Temps au four', airFryerTime: 'Temps friteuse à air' },
    foodTableHeading: 'Multiplicateurs par type d’aliment',
    foodHeaders: { food: 'Aliment', tempAdjustment: 'Ajustement temp.', timeMultiplier: 'Multiplicateur de temps', note: 'Remarque' },
    ceilingNoteTemplate:
      'Les friteuses à air à panier plafonnent autour de 400°F ; les modèles type four plafonnent autour de 450°F. Si ce tableau indique une température que votre appareil ne peut pas atteindre, utilisez le {link} — il limite le résultat au plafond réel de votre appareil et rajoute le temps automatiquement.',
    liveConverterLabel: 'convertisseur en direct',
    howToReadHeading: 'Comment lire ce tableau',
    howToReadBody:
      'Chaque tableau ci-dessus suppose une friteuse à air à panier sur le réglage « général / mixte », la même base que celle du convertisseur en direct. Trouvez votre température ou votre temps de four dans la colonne de gauche et lisez la ligne pour l’équivalent en friteuse à air, en Fahrenheit, Celsius et thermostat britannique. Le tableau par type d’aliment ajuste cette base pour douze catégories, des frites aux gratins, parce qu’un seul ajustement fixe ne rend pas compte de la façon très différente dont ces aliments se comportent dans une chambre à air pulsé. Une croix à côté d’une température signifie que la conversion a dépassé ce qu’un appareil à panier peut atteindre — le tableau la maintient au plafond plutôt que d’imprimer un réglage qui n’existe pas sur votre appareil.',
    whyFlatRuleHeading: 'Pourquoi la règle fixe de −25°F / −20% échoue avec les pâtes liquides et la pâtisserie',
    whyFlatRuleBody:
      'La plupart des tableaux imprimables de ce secteur appliquent une seule règle à tous les aliments : retirer 25°F, réduire le temps d’un cinquième. C’est une bonne moyenne pour les légumes, mais cela échoue pour tout ce qui a un intérieur liquide qui doit encore prendre avant d’être cuit — pâte à gâteau, muffins, gratins, pâtisserie dense. L’air pulsé d’une friteuse à panier dore la surface de la pâte presque immédiatement, et une réduction fixe de 20% confond ce brunissement précoce avec « cuit » bien avant que le centre n’ait pris, laissant une croûte cuite sur un centre cru.',
    workedExampleTemplate:
      'Prenez une recette de pâtisserie à 350°F pendant 30 minutes. La règle fixe la convertit à {FLAT_F}°F pendant {FLAT_MIN} minutes. Le multiplicateur pâtisserie de ce tableau la maintient plus proche de la chaleur d’origine, à {BAKED_F}°F pendant {BAKED_MIN} minutes — une réduction de temps moindre et quelques degrés de plus, parce que la pâte a besoin de ces minutes supplémentaires pour finir de prendre pendant que la surface dore vite. La même logique s’applique à chaque catégorie : les aliments fins à grande surface comme les frites et le bacon perdent près de 30% de leur temps, tandis que les aliments denses comme les gratins et la pâtisserie perdent plutôt 15%, car la chaleur doit encore atteindre le centre avant que ce soit cuit.',
    faqHeading: 'Questions fréquentes',
    faqs: [
      {
        q: 'Dois-je fournir un e-mail pour imprimer ce tableau ?',
        a: 'Non. Tous les sites de tableaux dédiés de ce secteur verrouillent leur version imprimable derrière une inscription par e-mail ou une fenêtre pop-up. Pas celui-ci — les tableaux ci-dessus sont l’intégralité du tableau, et le bouton d’impression les envoie directement à votre imprimante.',
      },
      {
        q: 'Pourquoi le tableau affiche-t-il 400°F à la fois pour un four à 425°F et à 450°F ?',
        a: 'Une friteuse à air à panier plafonne autour de 400°F, donc dès que la conversion brute dépasse ce seuil, le tableau maintient le résultat au plafond plutôt que d’imprimer un réglage que votre appareil ne peut pas atteindre. La croix indique quelles lignes ont été maintenues ainsi.',
      },
      {
        q: 'Ce tableau s’applique-t-il aussi aux friteuses à air type four ?',
        a: 'Ces tableaux sont calibrés pour les modèles à panier, qui plafonnent autour de 400°F. Les modèles type four font circuler l’air plus doucement et peuvent monter jusqu’à environ 450°F avant de plafonner — pour des chiffres exacts type four, utilisez le convertisseur en direct et changez le type d’appareil.',
      },
      {
        q: 'Pourquoi la réduction de temps est-elle différente pour des frites que pour un gratin ?',
        a: 'Les économies de temps dépendent de la surface et de la densité, pas seulement de la catégorie. Les frites et le bacon reçoivent de l’air chaud sur presque toutes les faces à la fois, donc ils perdent près de 30% du temps au four ; un gratin dense perd plutôt 15%.',
      },
      {
        q: 'Puis-je utiliser ce tableau pour des aliments directement sortis du congélateur ?',
        a: 'Pas directement. Les aliments congelés suivent une logique inversée — gardez la température de l’emballage et réduisez le temps d’environ 30%, car l’aliment a besoin de toute la chaleur juste pour dégeler avant de pouvoir cuire.',
      },
      {
        q: 'Que faire si ma température ou mon temps de four exact ne figure pas dans le tableau ?',
        a: 'Ce tableau couvre des valeurs courantes par paliers de 25°F et des temps arrondis pour tenir sur une page. Pour un chiffre exact, le convertisseur en direct accepte n’importe quelle température et temps de four et s’ajuste à chaque frappe.',
      },
    ],
    relatedHeading: 'Outils associés',
    relatedConverterLabel: 'Convertisseur four → friteuse à air',
    relatedConverterDesc:
      '— l’outil en direct, s’ajuste selon le type d’aliment et panier vs. type four, avec le plafond que les lignes marquées d’une croix de ce tableau renvoient.',
    relatedGasMarkLabel: 'Convertisseur °F / °C / thermostat',
    relatedGasMarkDesc: '— une conversion de température directe pour les recettes du Royaume-Uni, de l’UE et des États-Unis.',
    relatedReverseLabel: 'Convertisseur friteuse à air vers four',
    relatedReverseDesc: '— le sens inverse, pour les cas où le four est le meilleur choix.',
  },
};

export default fr;

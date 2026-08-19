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
      { title: 'Tableau de conversion imprimable', desc: 'Tableau complet en °F et °C à coller sur le frigo. Une page, sans e-mail, sans publicité.' },
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
};

export default fr;

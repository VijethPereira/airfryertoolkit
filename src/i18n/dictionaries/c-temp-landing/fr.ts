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
  backLink: 'Toutes les outils',
  pageTag: 'Température du four',
  answerTemplate: '{OVEN_C}°C four = {AF_C}°C ({AF_F}°F) en friteuse à air panier, environ {PCT}% moins de temps.',
  answerCappedTemplate: '{OVEN_C}°C four = {AF_C}°C ({AF_F}°F) en friteuse à air panier — son maximum {CEILING}°F — environ {PCT}% moins de temps.',
  answerFanTemplate: 'Ventilation {FAN_C}°C four = {FAN_AF_C}°C ({FAN_AF_F}°F) en friteuse à air panier, environ {FAN_PCT}% moins de temps.',
  answerFanCappedTemplate: 'Ventilation {FAN_C}°C four = {FAN_AF_C}°C ({FAN_AF_F}°F) en friteuse à air panier — son maximum {CEILING}°F — environ {FAN_PCT}% moins de temps.',
  answerOvenStyleTemplate: 'Friteuse à air type four: {OS_C}°C ({OS_F}°F), environ {OS_PCT}% moins de temps.',
  tableHeading: 'Chaque aliment à {OVEN_C}°C (conventionnel) / {FAN_C}°C ventilation',
  tableIntro: 'Les recettes UK/UE indiquent trois valeurs: °C conventionnel, °C ventilation, et thermostat. Chaque colonne donne la température friteuse (°C/°F/thermostat) et la part du temps four économisée.',
  tableHeaders: { food: 'Aliment', conventional: 'Conventionnel °C', fan: 'Ventilation °C', basket: 'Panier', ovenStyle: 'Type four' },
  timeLessTemplate: '{PCT}% moins de temps',
  cappedCell: 'Plafonné',
  cappedFootnote: 'Plafonné: la température convertie dépasse ce que l\'appareil peut atteindre ({CEILING}°F panier, {OS_CEILING}°F type four), elle est donc maintenue au maximum et une partie du gain de temps est restituée.',
  neighboursHeading: 'Températures voisines',
  neighbourLinkTemplate: '{OVEN_C}°C four vers friteuse à air',
  relatedFlagshipLink: 'Convertisseur four vers friteuse à air (toute température)',
  relatedChartLink: 'Tableau de conversion imprimable',
  relatedFrozenLink: 'Mode aliments surgelés (instructions emballage)',
  relatedConvectionLink: 'Four convection vers friteuse à air',
  relatedNearestFLink: '{F}°F four vers friteuse à air',
  faqHeading: 'Questions fréquentes',
  widgetHeading: 'Convertir une recette de four pour votre friteuse à air',
  widgetNote: 'Basculez entre entrées conventionnel, ventilation et thermostat. Le convertisseur utilise le moteur principal pour conventionnel, le moteur convection pour ventilation, et mappe le thermostat au °C conventionnel.',
  pages: {
    160: {
      metaTitle: '{OVEN_C}°C Oven to Air Fryer — Temperature & Time',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, thermostat {OVEN_MARK}) au four font {AF_C}°C ({AF_F}°F) en friteuse panier avec environ {PCT}% moins de temps. Table par aliment pour gâteaux, crèmes et cuissons lentes, convertisseur en direct.',
      metaKeywords: '160c friteuse à air, 160c four friteuse à air, 160 celsius friteuse à air, thermostat {OVEN_MARK} friteuse à air',
      heading: '{OVEN_C}°C four vers friteuse à air',
      subDesc: 'Température douce pour crèmes, meringues et plats mijotés. Le convertisseur ci-dessous est déjà sur {OVEN_C}°C conventionnel — passez en ventilation ou thermostat si votre recette les utilise.',
      recipesHeading: 'Quelles recettes utilisent 160°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, thermostat {OVEN_MARK}) est le feu doux pour ce qui doit prendre sans dorer: flans, cheesecakes, meringues, terrines, tomates confites. C\'est aussi la température pour réchauffer des restes délicats au four. Une recette générale convertit à {AF_C}°C en friteuse panier. Le gain est moindre qu\'à plus haute température car ces aliments ont besoin que la chaleur atteigne le centre doucement.',
      failureHeading: 'L\'échec à 160°C: centre pas pris, dessus doré',
      failureBody: 'À cette température le risque n\'est pas de brûler — c\'est que l\'air en mouvement dore le dessus avant que le centre ne prenne. Un cheesecake ou un flan va craquer et bomber pendant que le milieu est encore liquide. Utilisez un bain-marie si la recette le demande, couvrez légèrement de papier alu, et testez le centre au moment de contrôle avec une brochette ou thermomètre. Dans une friteuse panier le ventilateur est plus près, donc la couverture est essentielle.',
      workedExampleHeading: 'Exemple travaillé (conventionnel)',
      workedExampleTemplate: 'Une recette de cheesecake dit {OVEN_C}°C pendant {EX_OVEN_MIN} minutes. Les crèmes prennent un petit gain, donc une friteuse panier la fait à {EX_C}°C ({EX_F}°F) pendant {EX_MIN} minutes; testez le centre à {EX_CHECK} minutes. Une friteuse type four souffle moins direct sur le dessus, donc elle utilise {EX_OS_C}°C ({EX_OS_F}°F) pendant {EX_OS_MIN} minutes. Cuisez dans un moule à charnière sur la plaque croustillante, couvert d\'alu.',
      fanWorkedExampleHeading: 'Exemple travaillé (ventilation)',
      fanWorkedExampleTemplate: 'Si la recette donne {FAN_C}°C ventilation, le même cheesecake convertit à {EX_FAN_C}°C ({EX_FAN_F}°F) en friteuse panier pendant {EX_FAN_MIN} minutes, contrôle à {EX_FAN_CHECK} minutes. Une friteuse type four utilise {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) pendant {EX_FAN_OS_MIN} minutes. L\'entrée ventilation passe par le moteur convection, qui prend un gain plus doux car la recette est déjà ajustée pour le ventilateur.',
      styleHeading: 'Pourquoi la recette imprime trois températures',
      styleBody: 'Les recettes UK/UE écrivent souvent "{OVEN_C}°C / {FAN_C}°C ventilation / thermostat {OVEN_MARK}". La valeur conventionnelle est pour four sans ventilateur; la ventilation est ~{FAN_OFFSET_C}°C plus basse car le ventilateur déplace la chaleur plus vite. Le thermostat {OVEN_MARK} est le cran du four français (~{OVEN_C}°C). Choisissez celle de votre recette: conventionnel passe par le moteur principal, ventilation par le moteur convection, thermostat mappe au °C conventionnel. Le widget convertisseur sur cette page permet de basculer. Pour emballages surgelés (qui donnent un temps pour conventionnel et ventilation), utilisez le mode surgelés — garde la température et coupe {FROZEN_PCT}% du temps.',
      faqs: [
        { q: 'Qu\'est-ce que 160°C en friteuse à air?', a: 'Pour une recette générale, {AF_C}°C ({AF_F}°F) en friteuse panier avec environ {PCT}% moins de temps, ou {OS_C}°C en type four. Crèmes et cuissons lentes prennent un gain moindre; voir le tableau.' },
        { q: 'Ma recette dit 140°C ventilation — est-ce la même chose que {OVEN_C}°C conventionnel?', a: 'Oui, c\'est la convention UK: ventilation = conventionnel − {FAN_OFFSET_C}°C. Utilisez l\'entrée ventilation sur cette page (ou le convertisseur convection) pour une recette four ventilé; elle prend un gain plus doux car la recette est déjà ajustée au ventilateur.' },
        { q: 'Quel thermostat est {OVEN_C}°C?', a: 'thermostat {OVEN_MARK}. Le four français marque {OVEN_C}°C comme thermostat {OVEN_MARK}.' },
        { q: 'Puis-je utiliser ceci pour un emballage surgelé qui dit 160°C?', a: 'Non — les emballages surgelés suivent d\'autres règles (gardent la température, coupent {FROZEN_PCT}% temps). Utilisez le mode surgelés sur ce site; il gère correctement températures conventionnel et ventilation d\'emballage.' },
        { q: 'Pourquoi la colonne ventilation donne une réponse différente de la conventionnelle?', a: 'Une recette four ventilé est déjà {FAN_OFFSET_C}°C sous son équivalent conventionnel. Le moteur convection applique un gain restant moindre (0–15°F, 5–10% temps) car le ventilateur a déjà fait partie du travail. Le moteur principal applique le gain complet (20–25°F, 20–30% temps).' },
      ],
    },
    180: {
      metaTitle: '{OVEN_C}°C Oven to Air Fryer — Temperature & Time',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, thermostat {OVEN_MARK}) au four font {AF_C}°C ({AF_F}°F) en friteuse panier avec environ {PCT}% moins de temps. Table par aliment pour gâteaux, pains, poulet et poisson, convertisseur en direct.',
      metaKeywords: '180c friteuse à air, 180c four friteuse à air, 180 celsius friteuse à air, 180c ventilation friteuse à air, thermostat {OVEN_MARK} friteuse à air',
      heading: '{OVEN_C}°C four vers friteuse à air',
      subDesc: 'La température de cuisson la plus courante en recettes UK/UE. Le convertisseur ci-dessous est déjà sur {OVEN_C}°C conventionnel — passez en ventilation ou thermostat si votre recette les utilise.',
      recipesHeading: 'Quelles recettes utilisent 180°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, thermostat {OVEN_MARK}) est le standard pour gâteaux, pains rapides, brownies, cookies, poulet rôti, filets de poisson, et plats au plateau. C\'est la température de repli quand l\'auteur n\'est pas sûr, donc beaucoup de plats s\'y trouvent. Une recette générale convertit à {AF_C}°C en friteuse panier. Les gâteaux prennent un gain moindre (pâtes denses ont besoin de chaleur pour atteindre le centre); poulet et poisson prennent le gain standard.',
      failureHeading: 'L\'échec à 180°C: gâteau bombé, centre cru',
      failureBody: 'Le ventilateur souffle droit sur le dessus d\'un gâteau ou pain, qui dore et croûte pendant que le milieu est encore liquide. Résultat: dessus fissuré et bombé sur centre pâteux. Trois choses l\'arrangent: moule moins profond que la recette, couvrez légèrement d\'alu la première moitié (rentrez les bords sous le moule pour que le ventilateur ne le soulève pas), et testez le milieu avec une brochette au moment de contrôle au lieu de faire confiance à la couleur. Les caissettes papier doivent être lestées par la pâte; une feuille libre montera à la résistance.',
      workedExampleHeading: 'Exemple travaillé (conventionnel)',
      workedExampleTemplate: 'Une recette de gâteau Victoria dit {OVEN_C}°C pendant {EX_OVEN_MIN} minutes. Les gâteaux prennent un gain moindre, donc une friteuse panier la fait à {EX_C}°C ({EX_F}°F) pendant {EX_MIN} minutes; testez avec brochette à {EX_CHECK} minutes. Une friteuse type four utilise {EX_OS_C}°C ({EX_OS_F}°F) pendant {EX_OS_MIN} minutes. Utilisez moule 15–18 cm sur plaque croustillante, rempli à moitié.',
      fanWorkedExampleHeading: 'Exemple travaillé (ventilation)',
      fanWorkedExampleTemplate: 'Si la recette donne {FAN_C}°C ventilation, le même gâteau convertit à {EX_FAN_C}°C ({EX_FAN_F}°F) en friteuse panier pendant {EX_FAN_MIN} minutes, contrôle à {EX_FAN_CHECK} minutes. Une friteuse type four utilise {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) pendant {EX_FAN_OS_MIN} minutes.',
      styleHeading: 'Conventionnel vs ventilation à 180°C',
      styleBody: 'Les recettes UK/UE impriment "{OVEN_C}°C / {FAN_C}°C ventilation / thermostat {OVEN_MARK}". La valeur conventionnelle passe par le moteur principal (gain 20–25°F), la ventilation par le moteur convection (gain 0–15°F). L\'écart entre les deux résultats friteuse est l\'offset ventilation: une recette four ventilé est déjà en chemin, donc le gain restant est plus petit. Le widget convertisseur permet de basculer. Pour emballages surgelés, utilisez le mode surgelés — garde température, coupe {FROZEN_PCT}% temps.',
      faqs: [
        { q: 'Qu\'est-ce que 180°C en friteuse à air?', a: 'Pour une recette générale, {AF_C}°C ({AF_F}°F) en friteuse panier avec environ {PCT}% moins de temps, ou {OS_C}°C en type four. Gâteaux et cazuelles prennent gain moindre; voir tableau.' },
        { q: 'Ma recette dit 160°C ventilation — est-ce la même chose que {OVEN_C}°C conventionnel?', a: 'Oui, convention UK: ventilation = conventionnel − {FAN_OFFSET_C}°C. Utilisez l\'entrée ventilation pour recette four ventilé; gain plus doux.' },
        { q: 'Quel thermostat est {OVEN_C}°C?', a: 'thermostat {OVEN_MARK}. Le four français marque {OVEN_C}°C comme thermostat {OVEN_MARK}.' },
        { q: 'Puis-je utiliser ceci pour un emballage surgelé qui dit 180°C?', a: 'Non — emballages surgelés suivent d\'autres règles (gardent température, coupent {FROZEN_PCT}% temps). Utilisez le mode surgelés.' },
        { q: 'Pourquoi la colonne ventilation donne réponse différente?', a: 'Recette four ventilé déjà {FAN_OFFSET_C}°C plus bas. Moteur convection applique gain restant moindre (0–15°F, 5–10% temps) car ventilateur a déjà fait partie du travail.' },
      ],
    },
    200: {
      metaTitle: '{OVEN_C}°C Oven to Air Fryer — Temperature & Time',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, thermostat {OVEN_MARK}) au four font {AF_C}°C ({AF_F}°F) en friteuse panier avec environ {PCT}% moins de temps. Table par aliment pour légumes rôtis, blanc de poulet, frites, convertisseur en direct.',
      metaKeywords: '200c friteuse à air, 200c four friteuse à air, 200 celsius friteuse à air, 180c ventilation friteuse à air, thermostat {OVEN_MARK} friteuse à air',
      heading: '{OVEN_C}°C four vers friteuse à air',
      subDesc: 'La température classique de rôtissage, et celle qu\'on voit le plus en °C sur emballages européens. Le convertisseur ci-dessous est déjà sur {OVEN_C}°C conventionnel — passez en ventilation ou thermostat si votre recette les utilise.',
      recipesHeading: 'Quelles recettes utilisent 200°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, thermostat {OVEN_MARK}) est le rôtissage standard pour légumes, quartiers de pommes de terre, blanc de poulet, saucisses, saumon, frites maison, et tout ce qui finit croustillant. Une friteuse à air est un rôtisseur de cœur, donc ici elle bat le four: recette générale descend à {AF_C}°C, et frites prennent le plus grand gain de temps car beaucoup de surface et peu de profondeur. La conversion ne demande jamais au panier d\'atteindre {OVEN_C}°C — la friteuse obtient le même doré ~{PCT}% plus vite à température plus basse.',
      failureHeading: 'L\'échec à 200°C: vapeur, pas rôtissage',
      failureBody: 'Feu fort en petit espace ne marche que si l\'humidité peut partir. Légumes et pommes de terre coupées rendent de l\'eau en chauffant, et dans un panier plein cette vapeur reste autour, donc au lieu de dorer ça ramollit et pâlit. Plaindre n°1 des légumes en friteuse, et plus de temps n\'arrange pas. Cuisez en couche unique avec espaces, ou en deux fournées; la deuxième est souvent 1–2 min plus vite car le panier est déjà chaud. Séchez bien légumes après lavage, jetez une c.à.c. d\'huile pas une c.à.s., et secouez le panier au contrôle pour que les morceaux du bas remontent dans l\'air.',
      workedExampleHeading: 'Exemple travaillé (conventionnel)',
      workedExampleTemplate: 'Une recette rôtit légumes mixtes à {OVEN_C}°C pendant {EX_OVEN_MIN} minutes. Une friteuse panier le fait à {EX_C}°C ({EX_F}°F) en {EX_MIN} minutes, avec secousse à {EX_CHECK} minutes pour voir la couleur. Une friteuse type four utilise {EX_OS_C}°C ({EX_OS_F}°F) pendant {EX_OS_MIN} minutes; étalez les légumes sur deux grilles et échangez à mi-cuisson.',
      fanWorkedExampleHeading: 'Exemple travaillé (ventilation)',
      fanWorkedExampleTemplate: 'Si la recette donne {FAN_C}°C ventilation, les mêmes légumes convertissent à {EX_FAN_C}°C ({EX_FAN_F}°F) en friteuse panier pendant {EX_FAN_MIN} minutes, secousse à {EX_FAN_CHECK} minutes. Une friteuse type four utilise {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) pendant {EX_FAN_OS_MIN} minutes.',
      styleHeading: '200°C en °F et thermostat',
      styleBody: '{OVEN_C}°C font {OVEN_F}°F (souvent arrondi 200°C sur cadrans européens) et thermostat {OVEN_MARK}. Le réglage friteuse est {AF_C}°C en panier, {OS_C}°C en type four. Si votre friteuse saute par 10°C, prenez le cran bas pour légumes et le haut pour peau de poulet. Entrer la recette en °C dans le convertisseur donne les deux nombres. Pour emballages surgelés, utilisez le mode surgelés.',
      faqs: [
        { q: 'Qu\'est-ce que 200°C en friteuse à air?', a: 'Environ {AF_C}°C ({AF_F}°F) en friteuse panier, avec environ {PCT}% moins de temps. En type four, {OS_C}°C. Frites et bacon gagnent le plus de temps; gâteaux le gain moindre.' },
        { q: 'Ma recette dit 180°C ventilation — est-ce la même chose que {OVEN_C}°C conventionnel?', a: 'Oui, ventilation = conventionnel − {FAN_OFFSET_C}°C. Utilisez l\'entrée ventilation pour recette four ventilé; gain plus doux.' },
        { q: 'Quel thermostat est {OVEN_C}°C?', a: 'thermostat {OVEN_MARK}. Le four français marque {OVEN_C}°C comme thermostat {OVEN_MARK}.' },
        { q: 'Puis-je utiliser ceci pour un emballage surgelé qui dit 200°C?', a: 'Non — emballages surgelés suivent d\'autres règles (gardent température, coupent {FROZEN_PCT}% temps). Utilisez le mode surgelés.' },
        { q: 'Pourquoi mes légumes friteuse sont mous à {AF_C}°C?', a: 'Presque toujours surcharge. La vapeur des légumes ne peut pas s\'échapper. Couche unique, séchez bien, moins d\'huile; température plus haute ne sauvera pas un panier plein.' },
      ],
    },
    220: {
      metaTitle: '{OVEN_C}°C Four vers Friteuse à Air — Réglage, Temps et Plafond Température',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, thermostat {OVEN_MARK}) au four = {AF_C}°C ({AF_F}°F) en friteuse panier, à son maximum. Voyez quels aliments sont plafonnés, combien de temps restitué, convertissez en direct.',
      metaKeywords: '220c friteuse à air, 220c four friteuse à air, 220 celsius friteuse à air, 200c ventilation friteuse à air, thermostat {OVEN_MARK} friteuse à air',
      heading: '{OVEN_C}°C four vers friteuse à air',
      subDesc: 'La température de croustillant, et la première où une friteuse panier atteint son plafond. Le convertisseur ci-dessous est déjà sur {OVEN_C}°C conventionnel — passez en ventilation ou thermostat si votre recette les utilise.',
      recipesHeading: 'Quelles recettes utilisent {OVEN_C}°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, thermostat {OVEN_MARK}) est où vont les recettes pour croustiller: ailes croustillantes, pommes de terre rôties bord net, saumon surface ferme, pizza, pains plats, légumes grillés. Frites surgelées le disent aussi, mais suivent autres règles — utilisez mode surgelés. Au four il faut cette chaleur pour chasser l\'humidité de surface vite. Friteuse y arrive plus tôt, donc recette générale convertit à {AF_C}°C — exactement le plafond {CEILING}°F d\'une panier type. Tout avec gain normal touche le plafond; bœuf, poisson, gâteaux, cazuelles prennent gain moindre, donc leur température convertie dépasse ce que le panier atteint. Le tableau marque ces lignes.',
      failureHeading: 'L\'échec à {OVEN_C}°C: le plafond',
      failureBody: 'La plupart convertisseurs soustraient et impriment, même quand c\'est température que votre friteuse n\'atteint pas. À {OVEN_C}°C ça arrive pour aliments à gain moindre: le calcul demande plus de {CEILING}°F, le panier donne {CEILING}°F, et l\'aliment sort pas cuit car le temps fut coupé comme si la chaleur existait. Ce convertisseur plafonne la température au plafond et restitue partie du temps, donc les lignes plafonnées gagnent moins de temps. L\'autre risque à ce feu est la fumée. Graisse ailes et peau saumon goutte sur tiroir très chaud, donc huile point de fumée haut, marinades sucre/miel seulement derniers minutes, et videz tiroir entre fournées.',
      workedExampleHeading: 'Exemple travaillé (conventionnel)',
      workedExampleTemplate: 'Une recette rôtit saumon à {OVEN_C}°C pendant {EX_OVEN_MIN} minutes. Poisson prend gain moindre, donc sa température convertie dépasse limite panier et reste à {EX_C}°C ({EX_F}°F), temps réduit à {EX_MIN} minutes. Contrôlez à {EX_CHECK} minutes: saumon cuit à 63°C (145°F) partie épaisse, ou quand s\'effeuille. Friteuse type four a plafond plus haut, donc elle court le {EX_OS_C}°C ({EX_OS_F}°F) complet pendant {EX_OS_MIN} minutes.',
      fanWorkedExampleHeading: 'Exemple travaillé (ventilation)',
      fanWorkedExampleTemplate: 'Si la recette donne {FAN_C}°C ventilation, le même saumon convertit à {EX_FAN_C}°C ({EX_FAN_F}°F) en friteuse panier pendant {EX_FAN_MIN} minutes, contrôle à {EX_FAN_CHECK} minutes. Friteuse type four utilise {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) pendant {EX_FAN_OS_MIN} minutes. L\'entrée ventilation est plus basse, donc plus de lignes évitent le plafond.',
      styleHeading: 'Pourquoi friteuses type four diffèrent à {OVEN_C}°C',
      styleBody: 'Friteuse type four atteint 보통 {OS_CEILING}°F, donc à {OVEN_C}°C rien n\'est plafonné: recette générale est {OS_C}°C ({OS_F}°F) avec ~{OS_PCT}% moins temps, et aliments gain moindre courent plus chaud. Lignes plafonnées seulement en colonne panier, donc vérifiez votre type avant de croire toute table. Convertisseur utilise {CEILING}°F panier et {OS_CEILING}°F type four. Si votre cadran s\'arrête plus bas, cuisez à son maximum et donnez un peu plus de temps. En °C recette est {OVEN_C}°C, réglage panier {AF_C}°C. Pour emballages surgelés, mode surgelés.',
      faqs: [
        { q: 'Qu\'est-ce que {OVEN_C}°C en friteuse à air?', a: '{AF_C}°C ({AF_F}°F) en friteuse panier pour la plupart aliments — le maximum panier — avec ~{PCT}% moins temps. En type four, {OS_C}°C ({OS_F}°F) avec ~{OS_PCT}% moins temps. Bœuf, poisson, gâteaux, cazuelles plafonnés en panier gardent plus temps.' },
        { q: 'Ma recette dit 200°C ventilation — est-ce la même chose que {OVEN_C}°C conventionnel?', a: 'Oui, ventilation = conventionnel − {FAN_OFFSET_C}°C. L\'entrée ventilation est plus basse, donc plus d\'aliments évitent le plafond.' },
        { q: 'Quel thermostat est {OVEN_C}°C?', a: 'thermostat {OVEN_MARK}. Le four français marque {OVEN_C}°C comme thermostat {OVEN_MARK}.' },
        { q: 'Puis-je utiliser ceci pour un emballage surgelé qui dit {OVEN_C}°C?', a: 'Non — emballages surgelés suivent d\'autres règles (gardent température, coupent {FROZEN_PCT}% temps). Utilisez le mode surgelés.' },
        { q: 'Pourquoi ma friteuse fume aux hautes températures?', a: 'Graisse et marinades sucrées gouttent sur tiroir chaud et brûlent. Huile point fumée haut, glaces collantes à la fin, videz ou essuyez tiroir entre fournées.' },
      ],
    },
  },
};

export default cTempLanding;
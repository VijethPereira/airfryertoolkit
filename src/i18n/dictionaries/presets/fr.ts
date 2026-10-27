import type { Dictionary } from '../../types';

export const presets: Dictionary['presets'] = {
  backLink: 'Tous les préréglages',
  pageTag: 'Préréglage aliment',
  answerTemplate: '{LABEL} à la friteuse à air : {AF_F}°F / {AF_C}°C pendant {MIN} min',
  answerFlipSuffix: ', retourner à {FLIP} min',
  answerShakeSuffix: ', secouer {SHAKES}×',
  internalTemplate: 'Cuit à {INT_F}°F ({INT_C}°C) au cœur de la partie la plus épaisse',
  internalCrisp: 'Cuit à la couleur et au croustillant, pas au thermomètre',
  ovenHeading: 'Équivalent au four',
  ovenTemplate: 'Four traditionnel : {OVEN_F}°F ({OVEN_C}°C, Th. {OVEN_MARK}) pendant {OVEN_MIN} min',
  fanTemplate: 'Four à chaleur tournante : {FAN_F}°F ({FAN_C}°C) pendant {FAN_MIN} min',
  ovenNote: 'Vous partez d’une recette au four ? Le convertisseur ci-dessous est déjà réglé sur cet aliment : saisissez la température et la durée de la recette.',
  sizingHeading: 'Durée selon la taille',
  sizingIntro: 'Même température, durée différente : l’épaisseur décide du temps qu’il faut à la chaleur pour atteindre le cœur.',
  sizingHeaders: { size: 'Taille', airFryer: 'Friteuse à air', oven: 'Four' },
  minutesTemplate: '{MIN} min',
  specTemplate: '{AF_F}°F · {MIN} min',
  specFlipSuffix: ' · retourner à {FLIP}',
  specShakeSuffix: ' · secouer ×{SHAKES}',
  relatedPresetsHeading: 'Préréglages associés',
  tempLandingLinkTemplate: 'Four à {OVEN_F}°F vers friteuse à air, tous les aliments',
  relatedFlagshipLink: 'Convertisseur four vers friteuse à air',
  relatedIndexLink: 'Tous les préréglages d’aliments',
  relatedChartLink: 'Tableau de conversion à imprimer',
  faqHeading: 'Questions fréquentes',
  frozen: {
    ovenHeading: 'Ce que dit l’emballage',
    ovenTemplate: 'Emballage four traditionnel : {OVEN_F}°F ({OVEN_C}°C, Th. {OVEN_MARK}) pendant {OVEN_MIN} min',
    fanTemplate: 'Emballage chaleur tournante : {FAN_F}°F ({FAN_C}°C) pendant {FAN_MIN} min',
    ovenNote: 'Votre sachet indique d’autres valeurs ? Le convertisseur ci-dessous est déjà réglé sur cet aliment : saisissez la température et la durée de l’emballage.',
    sizingHeaders: { size: 'Taille', airFryer: 'Friteuse à air', oven: 'L’emballage dit' },
  },
  pages: {
    'chicken-breast': {
      label: 'Blanc de poulet',
      metaTitle: 'Blanc de poulet à la friteuse à air : temps, température et cuisson à cœur',
      metaDescription:
        'Blanc de poulet sans os à la friteuse à air : {AF_F}°F pendant {MIN} minutes, retourné à {FLIP}, cuit à {INT_F}°F à cœur. Durées par taille, équivalent au four et convertisseur en direct.',
      metaKeywords: 'blanc de poulet air fryer temps, filet de poulet air fryer, combien de temps blanc de poulet air fryer',
      heading: 'Blanc de poulet à la friteuse à air',
      subDesc:
        'Blanc sans os ni peau, cuit à partir du frais. Le réglage, le retournement, la température à cœur et comment éviter qu’il se dessèche.',
      cardDesc: 'Le préréglage le plus recherché. Sortez-le à {INT_F}°F à cœur.',
      sizeLabels: { small: 'Petit, 150 g', medium: 'Moyen, 220 g', large: 'Gros, 300 g' },
      failureHeading: 'Pourquoi le blanc de poulet se dessèche à la friteuse à air',
      failureBody:
        'Un blanc de poulet a la forme d’un coin : épais d’un côté, fin de l’autre. Dans l’air rapide du panier, l’extrémité fine atteint {INT_F}°F plusieurs minutes avant l’extrémité épaisse, et quand le cœur est enfin sûr, la pointe est sèche et filandreuse. C’est cette forme, et non l’appareil, qui donne au blanc sa réputation de viande dure. Égalisez l’épaisseur avant la cuisson. Aplatissez l’extrémité épaisse sous un film alimentaire jusqu’à ce que tout le blanc ait à peu près la même hauteur, ou coupez un gros blanc en deux escalopes plus fines dans l’épaisseur, ce qui ramène aussi la durée à la ligne « petit » du tableau. Ensuite, sortez-le dès que la partie la plus épaisse affiche {INT_F}°F, pas plus tard. Chaque minute de trop chasse du jus, et aucune marinade ne le remet.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Deux blancs moyens d’environ 220 g chacun, badigeonnés d’huile et assaisonnés. Préchauffez {PREHEAT} minutes, puis faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes en les retournant à {FLIP} minutes pour colorer les deux faces. Un gros blanc de 300 g demande environ {LARGE_MIN} minutes à la même température. Les mêmes blancs prendraient {OVEN_MIN} minutes à {OVEN_F}°F dans un four traditionnel : la friteuse à air gagne quelques minutes et dore mieux l’extérieur.',
      donenessHeading: 'Comment savoir s’il est cuit',
      donenessBody:
        'Utilisez un thermomètre dans la partie la plus épaisse, piqué par le côté pour que la pointe reste au centre sans traverser. {INT_F}°F ({INT_C}°C) est sûr immédiatement ; la lecture monte encore de quelques degrés pendant le repos. Sans thermomètre, entaillez la partie la plus épaisse : la chair doit être blanche de part en part avec un jus clair, ni rosée ni translucide. Laissez reposer le poulet cinq minutes sur une planche avant de le trancher, sinon le jus finit sur la planche plutôt que dans la viande.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Séchez le blanc avec du papier absorbant pour que la surface dore au lieu de cuire à la vapeur, puis frottez-le d’une cuillère à café d’huile et assaisonnez. Une saumure rapide de 30 minutes dans de l’eau salée change nettement le moelleux. Laissez de l’espace entre les blancs dans le panier ; deux morceaux qui se touchent cuisent à la vapeur au point de contact. Les blancs panés se cuisent à la même température, mais une ou deux minutes de plus pour que la panure prenne.',
      faqs: [
        {
          q: 'Combien de temps faut-il pour un blanc de poulet à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour un blanc moyen d’environ 220 g, retourné à {FLIP} minutes. Les petits blancs demandent environ {SMALL_MIN} minutes et les gros environ {LARGE_MIN}. Finissez toujours à la température, pas au chrono.',
        },
        {
          q: 'Quelle température à cœur pour un blanc de poulet cuit ?',
          a: '{INT_F}°F ({INT_C}°C) dans la partie la plus épaisse. Sortez-le dès cette lecture ; elle monte encore un peu au repos.',
        },
        {
          q: 'Faut-il retourner le blanc de poulet à la friteuse à air ?',
          a: 'Oui, une fois, vers la mi-cuisson. La face du dessous reçoit moins d’air direct et reste plus pâle ; la retourner donne une couleur égale des deux côtés.',
        },
        {
          q: 'Peut-on cuire un blanc de poulet surgelé à la friteuse à air ?',
          a: 'Oui, mais il lui faut une température plus basse et une durée plus longue pour que le cœur soit sûr avant que l’extérieur ne sèche. Utilisez le mode surgelés pour le poulet surgelé plutôt que ce réglage pour le frais.',
        },
        {
          q: 'Quel est l’équivalent au four de ce réglage ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes dans un four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
    'chicken-wings': {
      label: 'Ailes de poulet',
      metaTitle: 'Ailes de poulet à la friteuse à air : temps, température et peau croustillante',
      metaDescription:
        'Ailes de poulet croustillantes à la friteuse à air : {AF_F}°F pendant {MIN} minutes, retournées à {FLIP}. Pourquoi la peau ramollit, durées par taille et équivalent au four.',
      metaKeywords: 'ailes de poulet air fryer temps, wings air fryer température, ailes croustillantes air fryer',
      heading: 'Ailes de poulet à la friteuse à air',
      subDesc:
        'Ailes fraîches, en manchons et pilons, cuites jusqu’à ce que la peau craque. Le réglage, le retournement et pourquoi la sauce vient en dernier.',
      cardDesc: 'Séchez-les d’abord ; la sauce seulement après cuisson.',
      sizeLabels: { small: 'Petites ailes', medium: 'Manchons et pilons standard', large: 'Grosses ailes' },
      failureHeading: 'Pourquoi les ailes sortent molles',
      failureBody:
        'La peau des ailes est surtout faite d’eau et de gras. Pour croustiller, l’eau doit s’évaporer et le gras doit fondre, et les deux demandent une surface sèche et de l’espace autour de chaque morceau. Des ailes sorties directement de la barquette sont humides, si bien que les premières minutes servent à les cuire à la vapeur ; un panier trop plein retient cette vapeur, et la peau finit caoutchouteuse et pâle quelle que soit la durée. Mettre la sauce avant la cuisson aggrave les choses, car le sucre brûle pendant que la peau dessous reste molle. La solution tient surtout à la préparation : bien sécher les ailes, les disposer en une seule couche espacée et ne les enrober de sauce qu’à la sortie. Deux fournées donnent de meilleures ailes qu’une fournée serrée, et la seconde va plus vite car le panier est déjà chaud.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Un demi-kilo de manchons et pilons, séchés au papier et mélangés avec du sel et une cuillère à café de levure chimique. Préchauffez {PREHEAT} minutes, faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes et secouez ou retournez à {FLIP} minutes. Les grosses ailes demandent environ {LARGE_MIN} minutes. Enrobez de sauce dès la sortie du panier. Au four traditionnel, la même plaque se cuit à {OVEN_F}°F pendant environ {OVEN_MIN} minutes, avec beaucoup moins de croustillant.',
      donenessHeading: 'Comment savoir si elles sont cuites',
      donenessBody:
        'Les ailes sont sûres à {INT_F}°F ({INT_C}°C), mais elles sont meilleures bien au-delà : la viande brune et le tissu conjonctif autour de l’articulation s’attendrissent vers 175–190°F, ce qui explique qu’une aile bien croustillante n’est jamais crue. Cherchez une peau d’un doré profond, tendue et cloquée, et une chair qui se détache de l’os à l’articulation. Si la peau est encore pâle et molle à la fin, donnez trois minutes de plus plutôt que d’augmenter la température.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Séchez les ailes avec du papier absorbant, ou laissez-les à découvert sur une grille au réfrigérateur quelques heures. Une fine couche de levure chimique (pas de bicarbonate) relève le pH de la peau et l’aide à cloquer. Salez, mais sans huile : les ailes ont assez de gras. Séparez les ailes vendues entières à l’articulation et posez les morceaux peau vers le haut, sans qu’ils se chevauchent.',
      faqs: [
        {
          q: 'Combien de temps pour des ailes de poulet à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des ailes fraîches standard, secouées ou retournées à {FLIP} minutes. Les petites demandent environ {SMALL_MIN} minutes et les grosses environ {LARGE_MIN}.',
        },
        {
          q: 'À quelle température les ailes sont-elles cuites ?',
          a: 'Elles sont sûres à {INT_F}°F ({INT_C}°C), mais la plupart des cuisiniers les montent plus haut, vers 175–190°F, pour une chair tendre et une peau croustillante.',
        },
        {
          q: 'La sauce se met avant ou après la friteuse à air ?',
          a: 'Après. Une sauce sur des ailes crues brûle avant que la peau dessous ne croustille. Enrobez les ailes cuites de sauce chaude dans un saladier et servez aussitôt.',
        },
        {
          q: 'Pourquoi de la levure chimique sur les ailes ?',
          a: 'Une fine couche rend la peau plus alcaline, ce qui l’aide à dorer et à cloquer. Comptez une cuillère à café par demi-kilo, et vérifiez que c’est bien de la levure chimique, pas du bicarbonate.',
        },
        {
          q: 'Ce réglage convient-il aux ailes surgelées ?',
          a: 'Non. Les ailes surgelées ont leur propre durée ; utilisez le mode surgelés, qui garde une chaleur élevée et ajoute des secousses pour séparer les morceaux collés.',
        },
      ],
    },
    'chicken-thighs': {
      label: 'Cuisses de poulet',
      metaTitle: 'Hauts de cuisse de poulet avec os à la friteuse à air : temps et température',
      metaDescription:
        'Hauts de cuisse avec os et peau à la friteuse à air : {AF_F}°F pendant {MIN} minutes, retournés à {FLIP}. Peau croustillante, chair juteuse, durées par taille et équivalent au four.',
      metaKeywords: 'cuisses de poulet air fryer temps, haut de cuisse air fryer, cuisse de poulet avec os air fryer',
      heading: 'Cuisses de poulet à la friteuse à air',
      subDesc:
        'Hauts de cuisse avec os et peau. Le réglage, la face à poser en premier et pourquoi la cuisse demande une température à cœur plus haute que le blanc.',
      cardDesc: 'Peau dessous d’abord, peau dessus pour finir.',
      sizeLabels: { small: 'Petites, 120–140 g', medium: 'Moyennes, 170–200 g', large: 'Grosses, 225 g et plus' },
      failureHeading: 'Le problème de la cuisse : peau caoutchouteuse, os rosé',
      failureBody:
        'Les cuisses ratent de deux façons à la fois. La peau du dessus dore vite, mais le gras en dessous a besoin de temps pour fondre, si bien qu’une cuisse qui semble prête cache souvent une couche caoutchouteuse sous sa croûte. Pendant ce temps, la chair contre l’os chauffe en dernier et peut rester rosée quand l’extérieur est parfait. Commencer peau vers le bas règle presque tout. Peau contre le panier, le gras fond lentement dans le tiroir pendant que la chair cuit à cœur ; en retournant peau vers le haut pour la seconde moitié, cette peau déjà amincie croustille dans l’air direct. La cuisse pardonne sur un point : la viande brune reste juteuse bien au-dessus de la température de sécurité, donc quelques minutes de plus pour l’os ne coûtent presque rien.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Quatre hauts de cuisse moyens avec os, d’environ 180 g chacun. Préchauffez {PREHEAT} minutes, posez-les peau vers le bas et faites cuire à {AF_F}°F ; retournez-les peau vers le haut à {FLIP} minutes et terminez à {MEDIUM_MIN} minutes. Les grosses cuisses demandent environ {LARGE_MIN} minutes. Dans une friteuse à air de type four, le convertisseur donne {OS_F}°F pendant {OS_MIN} minutes. Un four traditionnel demande {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir si elles sont cuites',
      donenessBody:
        'Mesurez près de l’os sans le toucher : {INT_F}°F ({INT_C}°C) est sûr, mais les cuisses sont à leur meilleur vers 175–185°F, quand le tissu conjonctif s’est attendri et que la chair se détache proprement de l’os. Le jus doit couler clair quand on pique la partie la plus épaisse. La peau doit être d’un doré profond et croustillante jusqu’aux bords ; si les bords sont encore mous, donnez deux minutes de plus peau vers le haut.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Coupez les grands lambeaux de peau qui dépassent sur les côtés, car ils brûleront avant que le reste ne croustille. Séchez bien la peau et salez-la ; une heure à découvert au réfrigérateur aide. Pas besoin d’huile côté peau. Si vos cuisses sont de tailles très différentes, placez les plus grosses sur les bords du panier, là où l’air circule le plus vite.',
      faqs: [
        {
          q: 'Combien de temps pour des cuisses de poulet avec os à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des cuisses moyennes, retournées à {FLIP} minutes. Les petites demandent environ {SMALL_MIN} minutes et les grosses environ {LARGE_MIN}.',
        },
        {
          q: 'Quelle température à cœur pour des cuisses de poulet ?',
          a: '{INT_F}°F ({INT_C}°C) est le minimum sûr. Pour des cuisses tendres qui se détachent de l’os, visez 175–185°F.',
        },
        {
          q: 'Cuisses de poulet peau vers le haut ou vers le bas ?',
          a: 'Commencez peau vers le bas pour faire fondre le gras, puis retournez peau vers le haut pour la seconde moitié afin que la peau croustille dans l’air direct.',
        },
        {
          q: 'Les cuisses désossées cuisent-elles aussi longtemps ?',
          a: 'Non, elles sont plus fines et cuisent plus vite, généralement dans la durée de la ligne « petites » du tableau. Vérifiez la température tôt.',
        },
        {
          q: 'Quel est l’équivalent au four pour des cuisses de poulet ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes dans un four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
    salmon: {
      label: 'Saumon',
      metaTitle: 'Saumon à la friteuse à air : temps, température et comment ne pas le dessécher',
      metaDescription:
        'Pavés de saumon à la friteuse à air : {AF_F}°F pendant {MIN} minutes, sans retourner, cuit à {INT_F}°F. Durées par épaisseur, signes de cuisson et équivalent au four.',
      metaKeywords: 'saumon air fryer temps, pavé de saumon air fryer température, combien de temps saumon air fryer',
      heading: 'Saumon à la friteuse à air',
      subDesc:
        'Pavés de saumon frais, avec ou sans peau. Le réglage, la durée selon l’épaisseur et le signe qui montre qu’il est allé trop loin.',
      cardDesc: 'Peau dessous, sans retourner. Durée selon l’épaisseur.',
      sizeLabels: { thin: 'Fin, environ 2 cm', medium: 'Standard, environ 2,5 cm', thick: 'Épais, environ 4 cm' },
      failureHeading: 'Le dépôt blanc signifie qu’il est trop cuit',
      failureBody:
        'Le saumon a très peu de marge. Il passe de soyeux à sec en une ou deux minutes, et la friteuse à air est assez rapide pour que ces minutes filent. Le signal d’alerte est le dépôt blanc caillé qui apparaît en surface : c’est de l’albumine, une protéine chassée du muscle quand les fibres se resserrent. Un peu, c’est normal ; beaucoup signifie que le poisson a dépassé la cuisson. Comme le saumon cuit de l’extérieur vers l’intérieur, la seule façon fiable de régler la durée est l’épaisseur, c’est pourquoi le tableau classe les pavés par hauteur et non par poids. Un morceau fin de la queue et un pavé épais du centre du même poisson peuvent demander des durées très différentes : cuisez ensemble des morceaux d’épaisseur semblable, ou ajoutez les plus fins quelques minutes plus tard.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Deux pavés de 2,5 cm avec la peau. Badigeonnez la chair d’huile, assaisonnez et posez-les peau vers le bas. Faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes sans les retourner ; un pavé fin de 2 cm demande environ {THIN_MIN} minutes et un pavé épais de 4 cm environ {THICK_MIN}. Une friteuse à air de type four donne {OS_F}°F pendant {OS_MIN} minutes. Un four traditionnel demande {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir s’il est cuit',
      donenessBody:
        'La recommandation sanitaire est {INT_F}°F ({INT_C}°C) dans la partie la plus épaisse, quand la chair devient opaque et s’effeuille facilement à la fourchette. Beaucoup de cuisiniers préfèrent le saumon un peu moins cuit, vers 125–130°F, avec le centre encore légèrement nacré et très moelleux ; c’est une affaire de goût pour un poisson acheté frais et bien conservé. Appuyez doucement sur le dessus : un saumon cuit se sépare le long de ses lignes naturelles. Si vous voyez beaucoup d’albumine blanche, sortez-le immédiatement.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Laissez les pavés dix minutes hors du réfrigérateur pour que le centre ne soit pas glacé. Séchez-les et huilez la chair, pas la peau. Les pavés avec peau n’ont pas besoin d’être retournés : la peau protège le dessous et se retire facilement ensuite si vous n’en voulez pas. Une feuille de papier cuisson perforée empêche les pavés sans peau d’accrocher au panier.',
      faqs: [
        {
          q: 'Combien de temps pour un saumon à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour un pavé de 2,5 cm. Les morceaux fins demandent environ {THIN_MIN} minutes et les pavés épais du centre environ {THICK_MIN}.',
        },
        {
          q: 'Faut-il retourner le saumon à la friteuse à air ?',
          a: 'Non. Cuisez-le peau vers le bas tout du long ; retourner un pavé fragile le casse souvent, et le dessus dore bien dans l’air direct.',
        },
        {
          q: 'À quelle température le saumon est-il cuit ?',
          a: '{INT_F}°F ({INT_C}°C) selon la recommandation sanitaire, quand il s’effeuille facilement. Beaucoup le préfèrent vers 125–130°F, légèrement nacré au centre.',
        },
        {
          q: 'Quel est ce dépôt blanc sur mon saumon ?',
          a: 'C’est de l’albumine, une protéine expulsée pendant la cuisson. Beaucoup de dépôt signifie que le saumon est trop cuit ; la prochaine fois, sortez-le une ou deux minutes plus tôt.',
        },
        {
          q: 'Quel est l’équivalent au four pour le saumon ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes dans un four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
    bacon: {
      label: 'Bacon',
      metaTitle: 'Bacon à la friteuse à air : temps, température et sans fumée',
      metaDescription:
        'Bacon à la friteuse à air : {AF_F}°F pendant {MIN} minutes pour des tranches standard. Pourquoi une température plus basse évite la fumée, durées fines et épaisses, et four.',
      metaKeywords: 'bacon air fryer temps, bacon air fryer température, poitrine fumée air fryer',
      heading: 'Bacon à la friteuse à air',
      subDesc:
        'Tranches de bacon ou de poitrine fumée, cuites jusqu’à croustiller. Un réglage plus bas que pour la plupart des aliments, et pourquoi.',
      cardDesc: 'Une température plus basse empêche le gras de fumer.',
      sizeLabels: { thin: 'Tranches fines', medium: 'Tranches standard', thick: 'Tranches épaisses' },
      failureHeading: 'Pourquoi le bacon fume à la friteuse à air',
      failureBody:
        'Le bacon est le seul aliment où le réflexe habituel avec une friteuse à air, plus chaud et plus vite, se retourne contre vous. Pendant la cuisson, le gras fond et coule dans le tiroir sous le panier, et à réglage élevé cette flaque devient assez chaude pour fumer et crépiter. La cuisine s’enfume, le détecteur se déclenche et le bacon prend un goût âcre. C’est pourquoi ce préréglage reste à {AF_F}°F et non aux températures plus hautes de la plupart des viandes : le gras fond régulièrement au lieu de brûler, et les tranches croustillent quand même car elles sont très fines. Deux habitudes complètent le travail. Posez les tranches à plat sans chevauchement, car les parties superposées restent molles, et videz ou essuyez le gras entre les fournées.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Six tranches standard étalées dans le panier, coupées en deux si elles sont trop longues pour rester à plat. Faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes ; le bacon fin est prêt en environ {THIN_MIN} minutes et l’épais en environ {THICK_MIN}. Inutile de le retourner. Pour comparer, le même bacon sur une plaque dans un four traditionnel cuit à {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir s’il est cuit',
      donenessBody:
        'Le bacon est salé et fumé, on le juge donc à la couleur et à la texture plutôt qu’au thermomètre. Sortez-le quand le gras est passé du blanc au translucide doré et que le maigre a foncé. Il raffermit en refroidissant : des tranches qui plient encore un peu dans le panier seront croustillantes une minute plus tard sur du papier absorbant. Pour un bacon moelleux, sortez-le une ou deux minutes plus tôt ; pour un bacon cassant, attendez que les bords commencent à brunir.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Inutile de préchauffer ou d’huiler quoi que ce soit ; le bacon apporte son propre gras. Utilisez le panier et non une plaque pleine, pour que le gras s’égoutte loin des tranches. Une tranche de pain ou un peu d’eau dans le tiroir sous le panier recueille le gras et limite la fumée. Le bacon épais peut être posé en rang légèrement chevauchant, mais séparez les tranches à mi-cuisson.',
      faqs: [
        {
          q: 'Combien de temps pour du bacon à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des tranches standard. Le bacon fin demande environ {THIN_MIN} minutes et l’épais environ {THICK_MIN}.',
        },
        {
          q: 'Pourquoi ma friteuse à air fume-t-elle avec du bacon ?',
          a: 'Le gras coule dans le tiroir et brûle à haute température. Cuisez à {AF_F}°F, videz le gras entre les fournées et mettez un peu d’eau ou une tranche de pain dans le tiroir.',
        },
        {
          q: 'Faut-il retourner le bacon à la friteuse à air ?',
          a: 'Non. L’air atteint les deux faces des tranches fines. Seul le bacon épais posé en chevauchement doit être séparé à mi-cuisson.',
        },
        {
          q: 'Faut-il préchauffer la friteuse à air pour le bacon ?',
          a: 'Non. Démarrer à froid laisse le gras fondre plus doucement, ce qui aide le bacon à cuire uniformément.',
        },
        {
          q: 'Quel est l’équivalent au four pour le bacon ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes sur une grille dans un four traditionnel.',
        },
      ],
    },
    steak: {
      label: 'Steak',
      metaTitle: 'Steak à la friteuse à air : temps, température et cuissons',
      metaDescription:
        'Un steak de 2,5 cm à la friteuse à air : {AF_F}°F pendant {MIN} minutes, retourné à {FLIP}, saignant à {INT_F}°F. Durées par épaisseur et comment obtenir une croûte.',
      metaKeywords: 'steak air fryer temps, entrecôte air fryer, faux-filet air fryer température',
      heading: 'Steak à la friteuse à air',
      subDesc:
        'Entrecôte, faux-filet ou rumsteck. Le réglage pour une cuisson saignante, comment l’épaisseur change la durée et comment colorer l’extérieur.',
      cardDesc: 'Séchez la surface et laissez reposer pour une vraie croûte.',
      sizeLabels: { thin: 'Fin, environ 2 cm', medium: 'Standard, environ 2,5 cm', thick: 'Épais, environ 4 cm' },
      failureHeading: 'Le problème de la bande grise',
      failureBody:
        'Une friteuse à air ne saisit pas comme une poêle en fonte. L’air chaud transporte bien moins de chaleur que le métal, si bien qu’un steak humide passe ses premières minutes à sécher, et quand la surface brunit enfin, la chaleur a déjà progressé vers l’intérieur et laissé une épaisse bande de viande grise et trop cuite sous une croûte pâle. La solution consiste à faire brunir la surface plus vite. Séchez entièrement le steak, salez-le à l’avance pour que la surface sèche encore, préchauffez complètement le panier et utilisez le réglage le plus haut de votre appareil. Cuisez un ou deux steaks à la fois avec de l’espace autour. Le résultat n’égale pas une poêle fumante, mais il s’en approche, avec beaucoup moins d’éclaboussures.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Une entrecôte de 2,5 cm, salée une heure avant et séchée. Préchauffez la friteuse à air {PREHEAT} minutes, faites cuire à {AF_F}°F et retournez-la à {FLIP} minutes ; à {MEDIUM_MIN} minutes, elle devrait afficher environ {INT_F}°F, une cuisson saignante. Un steak fin de 2 cm demande environ {THIN_MIN} minutes et une pièce épaisse de 4 cm environ {THICK_MIN}. Laissez reposer cinq minutes avant de couper.',
      donenessHeading: 'La cuisson selon la température',
      donenessBody:
        'Utilisez un thermomètre à lecture instantanée, piqué par le côté jusqu’au centre. Bleu correspond à environ 120–125°F, saignant à {INT_F}°F ({INT_C}°C), à point à 140°F et bien cuit à 155°F et plus ; la recommandation de l’USDA pour les pièces de bœuf entières est 145°F suivis de trois minutes de repos. Sortez le steak environ cinq degrés avant votre objectif, car la température continue de monter au repos. L’entailler pour vérifier laisse s’échapper le jus.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Sortez le steak du réfrigérateur 30 minutes avant la cuisson pour que le cœur ne soit pas froid. Salez-le au moins 40 minutes avant, ou juste avant ; entre les deux, la surface reste humide. Badigeonnez d’un peu d’huile qui supporte la chaleur plutôt que de beurre, qui brûle. Ajoutez beurre, ail ou herbes pendant le repos.',
      faqs: [
        {
          q: 'Combien de temps pour un steak à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour un steak de 2,5 cm saignant, retourné à {FLIP} minutes. Les steaks fins demandent environ {THIN_MIN} minutes et les épais environ {THICK_MIN}.',
        },
        {
          q: 'Quelle température pour un steak saignant ?',
          a: 'Environ {INT_F}°F ({INT_C}°C). La recommandation de l’USDA pour les pièces entières est 145°F avec trois minutes de repos, plus proche d’une cuisson à point.',
        },
        {
          q: 'Peut-on obtenir une croûte sur un steak à la friteuse à air ?',
          a: 'Une bonne croûte, si la surface est parfaitement sèche et le panier bien préchauffé. Elle n’égale pas tout à fait une saisie en fonte, mais s’en approche.',
        },
        {
          q: 'Faut-il laisser reposer le steak ?',
          a: 'Oui, environ cinq minutes. Le jus se répartit dans la viande et la température monte de quelques degrés pour finir la cuisson.',
        },
        {
          q: 'Quel est l’équivalent au four pour un steak ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes dans un four traditionnel, même si une poêle ou un gril donnent une meilleure croûte.',
        },
      ],
    },
    'pork-chops': {
      label: 'Côtes de porc',
      metaTitle: 'Côtes de porc à la friteuse à air : temps, température et moelleuses',
      metaDescription:
        'Côtes de porc à la friteuse à air : {AF_F}°F pendant {MIN} minutes pour des côtes de 2,5 cm, retournées à {FLIP}, cuites à {INT_F}°F. Durées par épaisseur et four.',
      metaKeywords: 'côtes de porc air fryer temps, côtelette de porc air fryer, combien de temps côte de porc air fryer',
      heading: 'Côtes de porc à la friteuse à air',
      subDesc:
        'Côtes avec ou sans os. Le réglage, le retournement et la température qui les empêche de devenir farineuses.',
      cardDesc: 'Sortez-les à {INT_F}°F et laissez reposer ; saumurez si possible.',
      sizeLabels: { thin: 'Fines, 1 cm', medium: 'Standard, 2,5 cm', thick: 'Épaisses, 4 cm' },
      failureHeading: 'Pourquoi les côtes de porc deviennent sèches et farineuses',
      failureBody:
        'Le porc d’aujourd’hui est maigre. Avec peu de gras entre les fibres, une côte n’a plus rien pour la protéger une fois la cuisson dépassée, et elle devient sèche, serrée et farineuse en quelques minutes. L’habitude de cuire le porc jusqu’à ce qu’il soit gris de part en part vient d’anciennes recommandations ; aujourd’hui une côte est sûre à {INT_F}°F avec un court repos, quand le centre est encore légèrement rosé et juteux. Les côtes fines sont les plus délicates à la friteuse à air, car elles sont trop cuites avant que l’extérieur ne dore. Achetez des côtes d’au moins 2,5 cm si vous le pouvez, et si vous n’avez que des fines, cuisez-les dans le haut de la fourchette de temps et vérifiez tôt.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Deux côtes désossées de 2,5 cm, saumurées une heure, séchées et frottées d’huile et d’épices. Préchauffez {PREHEAT} minutes, faites cuire à {AF_F}°F et retournez à {FLIP} minutes ; elles devraient atteindre {INT_F}°F vers {MEDIUM_MIN} minutes. Les côtes fines de 1 cm demandent environ {THIN_MIN} minutes et les épaisses de 4 cm environ {THICK_MIN}. Dans un four traditionnel, les mêmes côtes cuisent à {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir si elles sont cuites',
      donenessBody:
        'Mesurez par le côté dans la partie la plus épaisse, loin de l’os. {INT_F}°F ({INT_C}°C) suivis de trois minutes de repos est l’objectif sûr ; le centre aura une teinte rosée pâle et le jus sera clair. Les côtes avec os cuisent un peu plus lentement près de l’os, vérifiez donc là en dernier. Si vous entaillez une côte, la chair doit être moelleuse et à peine opaque, ni grise ni fibreuse.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Une saumure simple, une cuillère à soupe de sel pour un demi-litre d’eau pendant 30 à 60 minutes, est ce qui change le plus le moelleux. Séchez bien les côtes ensuite. Incisez le gras du bord en deux ou trois endroits pour que la côte ne se recourbe pas à la cuisson. Un mélange d’épices avec un peu de sucre dore joliment, mais surveillez-le dans les dernières minutes.',
      faqs: [
        {
          q: 'Combien de temps pour des côtes de porc à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des côtes de 2,5 cm, retournées à {FLIP} minutes. Les fines demandent environ {THIN_MIN} minutes et les épaisses environ {THICK_MIN}.',
        },
        {
          q: 'Quelle température à cœur pour des côtes de porc ?',
          a: '{INT_F}°F ({INT_C}°C), puis trois minutes de repos. Un centre légèrement rosé à cette température est sûr et bien plus juteux.',
        },
        {
          q: 'Faut-il saumurer les côtes de porc pour la friteuse à air ?',
          a: 'Si vous avez 30 minutes, oui. Les côtes maigres gagnent beaucoup d’humidité avec une courte saumure, et pardonnent mieux une minute de trop.',
        },
        {
          q: 'Côtes avec ou sans os à la friteuse à air ?',
          a: 'Les deux fonctionnent à la même température. Les côtes avec os demandent une ou deux minutes de plus et restent un peu plus juteuses près de l’os.',
        },
        {
          q: 'Quel est l’équivalent au four pour des côtes de porc ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes dans un four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
    shrimp: {
      label: 'Crevettes',
      metaTitle: 'Crevettes à la friteuse à air : temps et température selon la taille',
      metaDescription:
        'Crevettes à la friteuse à air : {AF_F}°F pendant {MIN} minutes pour de grosses crevettes, secouées une fois. Durées par taille, signes de cuisson et équivalent au four.',
      metaKeywords: 'crevettes air fryer temps, crevettes air fryer température, gambas air fryer',
      heading: 'Crevettes à la friteuse à air',
      subDesc:
        'Crevettes crues, décortiquées et décongelées. Le réglage, la durée selon la taille et le changement de couleur qui dit d’arrêter.',
      cardDesc: 'Chaque minute compte : réglez la durée selon la taille.',
      sizeLabels: { small: 'Petites (110–130 au kg)', medium: 'Grosses (70–90 au kg)', large: 'Très grosses (35–45 au kg)' },
      failureHeading: 'La fenêtre d’une minute',
      failureBody:
        'Les crevettes cuisent en quelques minutes et sont trop cuites en une. Leur muscle se resserre vite à la chaleur, l’écart entre tendre et caoutchouteux est donc très court, et à la friteuse à air il est facile de le manquer pendant que vous préparez la sauce. La taille est la variable principale, c’est pourquoi les crevettes se vendent au nombre de pièces par kilo : les petites peuvent être cuites avant que les très grosses n’aient rosi. Cuisez une seule taille à la fois, réglez une minuterie sur la durée la plus courte du tableau et regardez-les plutôt que d’attendre la fin. L’autre erreur fréquente consiste à cuire des crevettes encore à moitié congelées, ce qui durcit l’extérieur et laisse le centre cru.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Un demi-kilo de grosses crevettes, décortiquées, déveinées et séchées, mélangées avec une cuillère à soupe d’huile, de l’ail et du paprika. Préchauffez {PREHEAT} minutes, étalez-les en une couche et faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes, en secouant une fois à mi-cuisson. Les petites crevettes demandent environ {SMALL_MIN} minutes et les très grosses environ {LARGE_MIN}. Sur une plaque dans un four traditionnel, elles cuisent à {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir si elles sont cuites',
      donenessBody:
        'Regardez la forme et la couleur. Les crevettes crues sont grises et translucides ; cuites, elles sont rose orangé et opaques de bout en bout. Une crevette courbée en C ouvert est cuite, alors qu’un O fermé signifie qu’elle est allée trop loin. Le repère sanitaire est {INT_F}°F ({INT_C}°C), mais les crevettes sont trop petites pour être mesurées facilement ; la couleur est le test pratique. Sortez-les dès que la dernière tache grise disparaît.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Décongelez entièrement les crevettes, au réfrigérateur pendant la nuit ou dans un bol d’eau froide environ 20 minutes, puis séchez-les bien. Décortiquées, elles cuisent plus uniformément qu’avec la carapace et prennent mieux l’assaisonnement. Ajoutez un peu d’huile pour que les épices accrochent et ne surchargez pas le panier : une seule couche cuit uniformément, un tas cuit à la vapeur.',
      faqs: [
        {
          q: 'Combien de temps pour des crevettes à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour de grosses crevettes, secouées une fois. Les petites demandent environ {SMALL_MIN} minutes et les très grosses environ {LARGE_MIN}.',
        },
        {
          q: 'Comment savoir si les crevettes sont cuites ?',
          a: 'Elles deviennent roses et opaques et se courbent en C ouvert. Un O fermé signifie qu’elles sont trop cuites.',
        },
        {
          q: 'Peut-on cuire des crevettes surgelées à la friteuse à air ?',
          a: 'Mieux vaut les décongeler d’abord. Cuites surgelées, l’extérieur durcit avant que le centre ne cuise. Vingt minutes dans l’eau froide suffisent.',
        },
        {
          q: 'Faut-il secouer les crevettes à la friteuse à air ?',
          a: 'Une fois, à mi-cuisson, pour que celles du dessous prennent la même couleur que celles du dessus.',
        },
        {
          q: 'Quel est l’équivalent au four pour des crevettes ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes sur une plaque dans un four traditionnel.',
        },
      ],
    },
    'baked-potato': {
      label: 'Pomme de terre au four',
      metaTitle: 'Pomme de terre au four à la friteuse à air : temps, température et peau croustillante',
      metaDescription:
        'Pomme de terre entière à la friteuse à air : {AF_F}°F pendant {MIN} minutes pour une pomme de terre moyenne, retournée à {FLIP}, cuite à {INT_F}°F à cœur. Durées par taille et four.',
      metaKeywords: 'pomme de terre air fryer, pomme de terre entière air fryer temps, pomme de terre en robe des champs air fryer',
      heading: 'Pomme de terre au four à la friteuse à air',
      subDesc:
        'Pommes de terre entières à la peau croustillante et salée. Le réglage, la durée selon la taille et la température à cœur pour une chair fondante.',
      cardDesc: 'Vérifiez au thermomètre, pas à la fourchette.',
      sizeLabels: { small: 'Petite, 170 g', medium: 'Moyenne, 250 g', large: 'Grosse, 350 g et plus' },
      failureHeading: 'Peau croustillante, cœur dur',
      failureBody:
        'Une pomme de terre est dense, et la chaleur la traverse lentement. À la friteuse à air, la peau croustille et fonce bien avant que le centre ne soit cuit, si bien qu’une pomme de terre peut sembler prête alors que le cœur est encore ferme et cireux. La fourchette est un mauvais test, car elle entre dans une pomme de terre à moitié cuite presque aussi facilement que dans une cuite. Le test fiable est la température : l’amidon ne devient fondant que lorsque le cœur atteint environ {INT_F}°F. Les durées du tableau supposent des pommes de terre de taille semblable cuites ensemble. Si vous mélangez les tailles, les petites seront prêtes avant ; sortez-les et laissez aux grosses les minutes en plus.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Deux pommes de terre moyennes d’environ 250 g chacune, brossées, séchées, frottées d’huile et de gros sel et piquées plusieurs fois. Faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes en les retournant à {FLIP} minutes. Les petites demandent environ {SMALL_MIN} minutes et les grosses environ {LARGE_MIN}. Les mêmes pommes de terre cuisent à {OVEN_F}°F pendant environ {OVEN_MIN} minutes dans un four traditionnel : la friteuse à air gagne un bon quart d’heure.',
      donenessHeading: 'Comment savoir si elle est cuite',
      donenessBody:
        'Piquez un thermomètre au centre : {INT_F}–210°F ({INT_C}°C) signifie que l’amidon est cuit et que la chair sera fondante. Sans thermomètre, pressez doucement la pomme de terre dans un torchon ; elle doit céder facilement de part en part. La peau doit être sèche, croustillante et légèrement cloquée. Ouvrez-la aussitôt pour laisser sortir la vapeur, sinon la chair devient pâteuse.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Choisissez des pommes de terre farineuses, comme la bintje ; les variétés à chair ferme restent denses. Brossez-les et séchez-les entièrement, puis frottez-les d’un peu d’huile et de beaucoup de gros sel, qui tire l’humidité de la peau. Piquez chaque pomme de terre plusieurs fois à la fourchette. Ne les emballez pas dans du papier aluminium : l’aluminium retient la vapeur et ramollit la peau.',
      faqs: [
        {
          q: 'Combien de temps pour une pomme de terre à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour une pomme de terre moyenne d’environ 250 g, retournée à {FLIP} minutes. Les petites demandent environ {SMALL_MIN} minutes et les grosses environ {LARGE_MIN}.',
        },
        {
          q: 'Quelle température à cœur pour une pomme de terre cuite ?',
          a: '{INT_F}–210°F ({INT_C}°C) au centre. En dessous, le cœur reste cireux, aussi croustillante que paraisse la peau.',
        },
        {
          q: 'Faut-il emballer les pommes de terre dans l’aluminium à la friteuse à air ?',
          a: 'Non. L’aluminium retient la vapeur et laisse la peau molle. De l’huile et du gros sel sur la peau nue donnent la robe croustillante que la friteuse à air réussit si bien.',
        },
        {
          q: 'Faut-il piquer les pommes de terre avant la friteuse à air ?',
          a: 'Oui, plusieurs fois à la fourchette. Cela laisse s’échapper la vapeur et évite qu’une pomme de terre n’éclate.',
        },
        {
          q: 'Quel est l’équivalent au four pour une pomme de terre ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes dans un four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
    'homemade-fries': {
      label: 'Frites maison',
      metaTitle: 'Frites maison à la friteuse à air : temps, température et croustillant',
      metaDescription:
        'Frites fraîches à la friteuse à air : {AF_F}°F pendant {MIN} minutes, secouées deux fois. Pourquoi elles ramollissent, comment les faire tremper et durées selon l’épaisseur.',
      metaKeywords: 'frites maison air fryer, frites fraîches air fryer temps, frites sans huile air fryer',
      heading: 'Frites maison à la friteuse à air',
      subDesc:
        'Frites taillées dans des pommes de terre fraîches, pas surgelées. Le réglage, le trempage et comment l’épaisseur change la durée.',
      cardDesc: 'Tremper, sécher, une couche, deux secousses.',
      sizeLabels: { thin: 'Allumettes, 6 mm', medium: 'Standard, 1 cm', thick: 'Pont-Neuf, 1,3 cm et plus' },
      failureHeading: 'Pourquoi les frites fraîches ramollissent ou brûlent',
      failureBody:
        'Les pommes de terre fraîches sont pleines d’eau et d’amidon en surface. Mettez les frites taillées directement dans le panier et l’amidon extérieur dore puis brûle pendant que l’intérieur reste cru, ou l’eau les cuit à la vapeur et les ramollit si le panier est trop plein. Les frites surgelées évitent ces deux problèmes car l’usine les a déjà blanchies et séchées, d’où un réglage différent pour les surgelés. À la maison, un trempage fait le même travail : il rince l’amidon libre, si bien que l’extérieur dore uniformément au lieu de brûler par plaques. Le séchage qui suit compte tout autant. Une frite mouillée passe ses premières minutes à la vapeur, et une frite qui a cuit à la vapeur ne croustille jamais complètement.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Deux pommes de terre moyennes taillées en bâtonnets de 1 cm, trempées 30 minutes dans l’eau froide, bien séchées et mélangées avec une cuillère à soupe d’huile et du sel. Faites cuire en une couche à {AF_F}°F pendant {MEDIUM_MIN} minutes, en secouant le panier deux fois. Les allumettes demandent environ {THIN_MIN} minutes et les Pont-Neuf environ {THICK_MIN}. La version au four, sur une plaque à {OVEN_F}°F, prend environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir si elles sont cuites',
      donenessBody:
        'Cherchez une couleur dorée uniforme avec des bords un peu plus foncés, et écoutez : une frite cuite sonne creux et croustillant en heurtant les autres. Sortez-en une et cassez-la ; l’intérieur doit être tendre et farineux, pas translucide. Si l’extérieur est doré mais l’intérieur encore ferme, les frites étaient trop épaisses pour la durée : donnez trois minutes de plus et baissez un peu la chaleur la prochaine fois.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Utilisez des pommes de terre farineuses, comme la bintje. Taillez les frites d’une épaisseur régulière pour qu’elles finissent ensemble ; une fournée inégale a toujours des fines brûlées et des épaisses crues. Faites-les tremper au moins 30 minutes dans l’eau froide, puis séchez-les entièrement avec un torchon propre. Une cuillère à soupe d’huile pour deux pommes de terre suffit. Salez après la cuisson, pas avant, sinon le sel fait sortir l’eau.',
      faqs: [
        {
          q: 'Combien de temps pour des frites maison à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des frites standard de 1 cm, secouées deux fois. Les allumettes demandent environ {THIN_MIN} minutes et les Pont-Neuf environ {THICK_MIN}.',
        },
        {
          q: 'Faut-il faire tremper les pommes de terre avant la friteuse à air ?',
          a: 'Cela aide beaucoup. Un trempage de 30 minutes dans l’eau froide retire l’amidon de surface, si bien que les frites dorent uniformément et croustillent au lieu de brûler par plaques.',
        },
        {
          q: 'Pourquoi mes frites sont-elles molles à la friteuse à air ?',
          a: 'En général, elles étaient encore humides ou le panier était trop plein. Séchez-les bien et cuisez-les en une seule couche, en plusieurs fournées si besoin.',
        },
        {
          q: 'Ce réglage convient-il aux frites surgelées ?',
          a: 'Non. Les frites surgelées sont déjà blanchies et suivent d’autres règles ; utilisez le mode surgelés avec la température du paquet.',
        },
        {
          q: 'Quel est l’équivalent au four pour des frites maison ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes sur une plaque dans un four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
    'chicken-drumsticks': {
      label: 'Pilons de poulet',
      metaTitle: 'Pilons de poulet à la friteuse à air : temps, température et viande tendre',
      metaDescription:
        'Pilons de poulet à la friteuse à air : {AF_F}°F pendant {MIN} minutes, retournés à {FLIP}, sûrs à {INT_F}°F. Pourquoi aller plus loin, temps selon la taille et équivalent au four.',
      metaKeywords: 'pilons de poulet friteuse à air, pilon de poulet airfryer temps, cuisson pilons poulet air fryer',
      heading: 'Pilons de poulet à la friteuse à air',
      subDesc:
        'Pilons frais, avec os et peau. Le réglage, le retournement et pourquoi un pilon simplement sûr n’est pas encore terminé.',
      cardDesc: 'Sûr à {INT_F}°F, fondant vers {INT_ALT_TO_F}°F.',
      sizeLabels: { small: 'Petits, environ 90 g', medium: 'Moyens, environ 130 g', large: 'Gros, à partir de 170 g' },
      internalAltLine: 'Plus tendres à {INT_ALT_F}–{INT_ALT_TO_F}°F ({INT_ALT_C}–{INT_ALT_TO_C}°C), mesuré contre l’os',
      failureHeading: 'Sûr mais caoutchouteux : le piège du pilon',
      failureBody:
        'Le pilon est le muscle qui travaille le plus chez la volaille, entouré de tendons et de tissu conjonctif. À {INT_F}°F il est sans danger, mais ce tissu reste tendu : la chair colle à l’os, paraît élastique et peut rester un peu rosée près de l’articulation alors qu’elle est entièrement cuite. Ceux qui sortent les pilons à la température du blanc croient qu’ils sont crus ; ceux qui continuent jusqu’à ce que la peau soit très foncée les trouvent souvent secs à l’extérieur. La solution est de dépasser volontairement le seuil de sécurité. Le collagène commence à se transformer en gélatine vers {INT_ALT_F}°F, et entre ce point et {INT_ALT_TO_F}°F la chair se détend, devient soyeuse et se détache de l’os.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Six pilons moyens, environ 700 g au total, séchés et frottés d’huile, d’ail en poudre et de paprika fumé. Préchauffez {PREHEAT} minutes, disposez-les en une couche avec de l’espace et faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes en les retournant à {FLIP}. Mesurez le plus épais contre l’os. Les petits sont prêts en environ {SMALL_MIN} minutes, les gros demandent environ {LARGE_MIN}. Au four traditionnel, la même plaque demande {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir s’ils sont cuits',
      donenessBody:
        'Enfoncez le thermomètre par le haut charnu jusqu’à toucher l’os, puis reculez légèrement. {INT_F}°F ({INT_C}°C) est la limite de sécurité ; {INT_ALT_F}–{INT_ALT_TO_F}°F est la zone où les pilons sont les meilleurs. À l’œil, la peau est tendue et bien dorée, la chair s’est rétractée et dégage un peu d’os au bout étroit, et le pilon tourne facilement à l’articulation. Le rose près de l’os à la bonne température est un pigment, pas de la chair crue.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Séchez bien la peau et assaisonnez généreusement ; les pilons sont assez épais pour être salés une heure à l’avance. Entaillez une ou deux fois jusqu’à l’os du côté le plus épais pour que la chaleur atteigne le cœur plus vite. Alternez gros bout et petit bout pour qu’ils s’emboîtent sans se toucher. Une sauce barbecue ou un glaçage ne s’ajoute qu’à deux ou trois minutes de la fin.',
      faqs: [
        {
          q: 'Combien de temps pour des pilons de poulet à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des pilons frais moyens, retournés à {FLIP} minutes. Les petits demandent environ {SMALL_MIN} minutes et les gros environ {LARGE_MIN}.',
        },
        {
          q: 'Quelle température à cœur pour des pilons ?',
          a: 'Ils sont sûrs à {INT_F}°F ({INT_C}°C), mais la plupart des cuisiniers les montent à {INT_ALT_F}–{INT_ALT_TO_F}°F, quand le tissu conjonctif fond et que la chair se détache de l’os.',
        },
        {
          q: 'Pourquoi mon pilon est-il rose près de l’os ?',
          a: 'Les os des jeunes poulets libèrent un peu de pigment dans la chair voisine. Si le thermomètre indique {INT_F}°F ou plus, la couleur est sans danger.',
        },
        {
          q: 'Quand mettre la sauce barbecue ?',
          a: 'Dans les deux ou trois dernières minutes. Le sucre de la sauce brûle bien avant que les pilons soient cuits s’il est là dès le départ.',
        },
        {
          q: 'Comment cela se compare-t-il au four ?',
          a: 'Un four traditionnel demande {OVEN_F}°F pendant environ {OVEN_MIN} minutes, un four à chaleur tournante {FAN_F}°F pendant environ {FAN_MIN}. La friteuse à air rend la peau nettement plus croustillante.',
        },
      ],
    },
    'chicken-tenders': {
      label: 'Aiguillettes de poulet',
      metaTitle: 'Aiguillettes de poulet à la friteuse à air : temps et température (fraîches)',
      metaDescription:
        'Aiguillettes et lanières de poulet fraîches à la friteuse à air : {AF_F}°F pendant {MIN} minutes, retournées à {FLIP}, cuites à {INT_F}°F. Nature ou panées, temps selon la taille.',
      metaKeywords: 'aiguillettes de poulet friteuse à air, tenders poulet airfryer, lanières de poulet air fryer temps',
      heading: 'Aiguillettes de poulet à la friteuse à air',
      subDesc:
        'Aiguillettes fraîches ou lanières taillées dans le blanc, nature ou panées maison. Le réglage court, le retournement et comment éviter qu’elles sèchent.',
      cardDesc: 'Petites et rapides : minuteur sur le temps le plus court.',
      sizeLabels: { small: 'Lanières fines, environ 30 g', medium: 'Aiguillettes entières, environ 60 g', large: 'Lanières épaisses, à partir de 90 g' },
      failureHeading: 'Cuites une minute, sèches la suivante',
      failureBody:
        'Une aiguillette est un morceau étroit, presque sans gras et avec beaucoup de surface. L’air chaud atteint tous les côtés à la fois, si bien que le morceau entier cuit en quelques minutes et qu’aucun cœur épais n’amortit une erreur. Laissez un panier d’aiguillettes deux minutes de trop pendant que vous préparez une sauce et elles rétrécissent, se resserrent et deviennent filandreuses. Le tendon blanc qui traverse l’aiguillette aggrave les choses, car il se contracte à la chaleur et fait se courber la lanière. Traitez-les comme une cuisson éclair, pas comme un rôti : retirez le tendon, coupez toutes les lanières à la même épaisseur, commencez à vérifier une minute avant la fin et sortez-les dès que la plus épaisse est cuite. La panure protège un peu la viande, mais elle a besoin d’un léger voile d’huile pour dorer avant que l’intérieur ne cuise trop.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        '450 g d’aiguillettes entières, tendons retirés, passées dans l’œuf et le panko puis vaporisées d’un peu d’huile. Préchauffez {PREHEAT} minutes, posez-les à plat sans les superposer et faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes en retournant à {FLIP}. Des lanières fines taillées dans le blanc sont prêtes en environ {SMALL_MIN} minutes, des épaisses en environ {LARGE_MIN}. Sur une grille au four traditionnel, la même fournée demande {OVEN_F}°F pendant environ {OVEN_MIN} minutes et ressort plus pâle.',
      donenessHeading: 'Comment savoir si elles sont cuites',
      donenessBody:
        'Mesurez l’aiguillette la plus épaisse par le bout, en poussant la sonde dans la longueur jusqu’au centre : à {INT_F}°F ({INT_C}°C), elle est cuite. Les lanières sont trop fines pour garder beaucoup de chaleur résiduelle, elles ne montent donc presque plus une fois sorties. Sans thermomètre, cassez la plus épaisse en deux ; elle doit être blanche, sans cœur translucide, avec un jus clair. La panure doit être dorée partout, pas pâle là où les morceaux se touchaient.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Retirez le tendon blanc en pinçant son extrémité avec une fourchette et en faisant glisser la viande. Pour paner, préparez farine, œuf battu et panko, et pressez bien la chapelure pour que le ventilateur ne l’emporte pas. Quinze minutes dans du babeurre salé gardent les aiguillettes nature plus juteuses. Laissez un doigt d’espace entre les lanières.',
      faqs: [
        {
          q: 'Combien de temps pour des aiguillettes de poulet à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des aiguillettes fraîches entières, retournées à {FLIP} minutes. Les lanières fines demandent environ {SMALL_MIN} minutes et les épaisses environ {LARGE_MIN}.',
        },
        {
          q: 'À quelle température les aiguillettes sont-elles cuites ?',
          a: '{INT_F}°F ({INT_C}°C) dans le morceau le plus épais. Comme elles sont fines, sortez-les dès cette lecture.',
        },
        {
          q: 'Les aiguillettes panées ont-elles besoin d’huile ?',
          a: 'Un léger voile, oui. Une chapelure sèche reste pâle et farineuse sans un peu de matière grasse pour l’aider à dorer.',
        },
        {
          q: 'Ce réglage convient-il aux aiguillettes panées surgelées ?',
          a: 'Non. Les aiguillettes surgelées du commerce sont précuites et suivent les indications du paquet ; utilisez le mode surgelés.',
        },
        {
          q: 'Quel serait le réglage au four ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes au four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
    sausages: {
      label: 'Saucisses',
      metaTitle: 'Saucisses à la friteuse à air : temps, température et sans éclater',
      metaDescription:
        'Saucisses fraîches à la friteuse à air : {AF_F}°F pendant {MIN} minutes, retournées à {FLIP}, cuites à {INT_F}°F pour le porc ou le bœuf. Chipolatas, saucisses de Toulouse et saucisses précuites.',
      metaKeywords: 'saucisses friteuse à air, chipolatas airfryer temps, saucisse de Toulouse air fryer',
      heading: 'Saucisses à la friteuse à air',
      subDesc:
        'Saucisses fraîches de porc, de bœuf ou de volaille, de la chipolata à la saucisse de Toulouse, plus les saucisses précuites. Le réglage et comment garder la peau intacte.',
      cardDesc: 'Chaleur modérée pour que le boyau n’éclate pas.',
      sizeLabels: { thin: 'Chipolatas ou merguez fines', medium: 'Saucisses classiques, environ 2,5 cm', thick: 'Saucisse de Toulouse ou bratwurst' },
      internalAltLine: 'Saucisses de poulet ou de dinde : {INT_ALT_F}°F ({INT_ALT_C}°C). Les saucisses précuites doivent seulement être réchauffées à {INT_ALT_F}°F.',
      failureHeading: 'Pourquoi les saucisses éclatent à la friteuse à air',
      failureBody:
        'Une saucisse est un tube fermé de gras, d’eau et d’assaisonnement. En chauffant, l’eau se transforme en vapeur et le gras fond, et la pression à l’intérieur monte plus vite que le boyau ne peut s’étirer. Trop de chaleur, et la peau se fend sur toute la longueur, le gras coule dans le tiroir et fume, et la chair se dessèche. Beaucoup piquent les saucisses pour l’éviter, mais cela ne fait que laisser partir le jus plus tôt. Mieux vaut une température modérée, qui laisse le boyau se tendre et dorer au même rythme que la farce cuit, et un retournement à mi-cuisson pour colorer les deux faces. Les saucisses qui sortent du réfrigérateur éclatent plus facilement que celles qui ont attendu dix minutes, et celles qui se touchent dans le panier se déchirent souvent là où elles collent.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Six saucisses de porc fraîches d’épaisseur classique, sorties du réfrigérateur dix minutes avant. Posez-les dans le panier en les espaçant, faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes et retournez-les à {FLIP}. Des chipolatas demandent environ {THIN_MIN} minutes ; une saucisse de Toulouse fraîche environ {THICK_MIN}. Les saucisses précuites sont déjà sûres et doivent seulement chauffer à cœur, ce qui prend quelques minutes de moins. Au four traditionnel, les mêmes saucisses fraîches demandent {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir si elles sont cuites',
      donenessBody:
        'Enfoncez un thermomètre par une extrémité vers le centre. Les saucisses de porc et de bœuf sont cuites à {INT_F}°F ({INT_C}°C) ; celles de poulet et de dinde demandent {INT_ALT_F}°F ({INT_ALT_C}°C). Les saucisses précuites, comme les saucisses de Strasbourg et de nombreuses saucisses fumées, sont cuites en usine : il s’agit seulement de les réchauffer à {INT_ALT_F}°F. À l’œil, une saucisse fraîche est ferme au toucher, dorée des deux côtés et sans rose à la coupe.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Séparez les saucisses attachées aux ciseaux plutôt qu’en tirant. Ne les piquez pas. Inutile d’ajouter de l’huile : elles rendent largement assez de gras, et une feuille de papier cuisson perforé dessous évite qu’il fume si votre tiroir chauffe fort. Pour des oignons avec vos saucisses, ajoutez des oignons émincés dans le tiroir pendant la seconde moitié de la cuisson.',
      faqs: [
        {
          q: 'Combien de temps pour des saucisses à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des saucisses fraîches classiques, retournées à {FLIP} minutes. Les chipolatas demandent environ {THIN_MIN} minutes, la saucisse de Toulouse environ {THICK_MIN}.',
        },
        {
          q: 'À quelle température les saucisses sont-elles cuites ?',
          a: '{INT_F}°F ({INT_C}°C) pour le porc et le bœuf. Les saucisses de poulet et de dinde demandent {INT_ALT_F}°F ({INT_ALT_C}°C).',
        },
        {
          q: 'Comment cuire des saucisses précuites à la friteuse à air ?',
          a: 'À la même température, mais elles sont prêtes quelques minutes plus tôt. Elles sont déjà cuites : réchauffez-les jusqu’à {INT_ALT_F}°F à cœur et une peau dorée.',
        },
        {
          q: 'Faut-il piquer les saucisses avant la cuisson ?',
          a: 'Non. Les piquer laisse s’échapper le gras et le jus, et la saucisse se dessèche. Une température modérée empêche la peau d’éclater sans cela.',
        },
        {
          q: 'Quel est l’équivalent au four pour des saucisses ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes sur une plaque au four traditionnel, en les retournant une fois.',
        },
      ],
    },
    burgers: {
      label: 'Steaks hachés',
      metaTitle: 'Burgers à la friteuse à air : temps, température et cuisson à cœur',
      metaDescription:
        'Steaks hachés de bœuf à la friteuse à air : {AF_F}°F pendant {MIN} minutes, retournés à {FLIP}, cuits à {INT_F}°F. Temps selon l’épaisseur, steaks surgelés et équivalent au four.',
      metaKeywords: 'steak haché friteuse à air, burger airfryer temps, steak haché surgelé friteuse à air',
      heading: 'Burgers à la friteuse à air',
      subDesc:
        'Steaks hachés frais de bœuf, maison ou du commerce. Le réglage, le retournement et pourquoi la viande hachée n’a pas la même cible qu’un steak.',
      cardDesc: 'Viande hachée : {INT_F}°F, pas la cuisson d’un steak.',
      sizeLabels: { thin: 'Fins, environ 8 mm', medium: 'Classiques, environ 1,3 cm', thick: 'Épais, environ 2 cm' },
      failureHeading: 'Bombés, rétrécis et fumants',
      failureBody:
        'La viande hachée ne se comporte pas du tout comme un steak. En chauffant, ses protéines se contractent et tirent les bords vers l’intérieur, si bien que le centre se bombe, cuit de façon inégale et ne tient plus à plat dans le pain. Pendant ce temps le gras fond, goutte sur le tiroir brûlant et peut fumer. Un creux peu profond au centre de chaque steak cru le garde à plat pendant qu’il rétrécit ; un tiroir essuyé entre deux fournées, et sur certains modèles un filet d’eau sous le panier, limitent la fumée. L’autre erreur consiste à reprendre la cuisson du steak. Le hachage répartit les bactéries de surface dans toute la viande, si bien qu’un steak haché doit atteindre {INT_F}°F à cœur, et non la valeur saignante qui convient à une pièce entière.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Quatre steaks hachés de 1,3 cm à 20 % de matière grasse, environ 150 g chacun, avec un creux au centre et salés juste avant la cuisson. Préchauffez {PREHEAT} minutes, faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes en retournant à {FLIP}. Des steaks fins façon smash demandent environ {THIN_MIN} minutes et des épais de 2 cm environ {THICK_MIN}. Ajoutez le fromage la dernière minute. Au four traditionnel, les mêmes steaks demandent {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir s’ils sont cuits',
      donenessBody:
        'Enfoncez le thermomètre par le côté jusqu’au centre : {INT_F}°F ({INT_C}°C) est la cible de sécurité pour le bœuf haché, et à ce stade le jus est clair et le centre brun, sans rouge. La couleur seule peut tromper, car certaines viandes brunissent tôt et d’autres restent roses une fois cuites. Un steak qui s’est bombé cuit plus vite sur les bords qu’au centre, mesurez donc au point le plus épais.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Choisissez un bœuf haché à environ 20 % de matière grasse ; plus maigre, il devient sec. Travaillez-le peu et façonnez des steaks un peu plus larges que le pain, car ils rétrécissent. Creusez au pouce, à mi-épaisseur du steak. Salez seulement l’extérieur, juste avant la cuisson, sinon la viande prend une texture de saucisse. Pas besoin d’huile.',
      faqs: [
        {
          q: 'Combien de temps pour des burgers à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des steaks hachés frais de 1,3 cm, retournés à {FLIP} minutes. Les fins demandent environ {THIN_MIN} minutes et les épais de 2 cm environ {THICK_MIN}.',
        },
        {
          q: 'À quelle température cuire un steak haché ?',
          a: '{INT_F}°F ({INT_C}°C) à cœur. C’est plus qu’un steak, car le hachage fait passer les bactéries de surface à l’intérieur.',
        },
        {
          q: 'Peut-on cuire des steaks hachés surgelés à la friteuse à air ?',
          a: 'Oui, à la même température. Ajoutez environ 4–6 minutes au temps des steaks frais, retournez à mi-cuisson et vérifiez quand même {INT_F}°F à cœur. Séparez d’abord ceux qui ont congelé collés.',
        },
        {
          q: 'Pourquoi mes burgers gonflent-ils à la friteuse à air ?',
          a: 'Les bords rétrécissent plus vite que le centre et le poussent vers le haut. Un creux au pouce dans chaque steak cru les garde à plat.',
        },
        {
          q: 'Quel est l’équivalent au four pour des burgers ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes sur une grille au four traditionnel, retournés une fois.',
        },
      ],
    },
    'pork-tenderloin': {
      label: 'Filet mignon de porc',
      metaTitle: 'Filet mignon de porc à la friteuse à air : temps, température et repos',
      metaDescription:
        'Filet mignon de porc entier à la friteuse à air : {AF_F}°F pendant {MIN} minutes, retourné à {FLIP}, {INT_F}°F après repos. Temps selon la taille et équivalent au four.',
      metaKeywords: 'filet mignon de porc friteuse à air, filet mignon airfryer temps, filet mignon porc température à cœur',
      heading: 'Filet mignon de porc à la friteuse à air',
      subDesc:
        'Un filet mignon de porc entier, rôti d’un seul tenant. Le réglage, le retournement et comment le repos termine le travail.',
      cardDesc: 'Repliez la pointe, le repos fait le reste.',
      sizeLabels: { small: 'Petit, environ 340 g', medium: 'Moyen, environ 450 g', large: 'Gros, à partir de 570 g' },
      failureHeading: 'Pointe sèche, centre pas cuit',
      failureBody:
        'Un filet mignon s’affine d’une tête épaisse jusqu’à une pointe de deux ou trois centimètres à peine. À la friteuse à air, la pointe est cuite bien avant la tête, et quand la partie la plus épaisse est enfin sûre, l’extrémité étroite est grise et sèche. Replier les derniers centimètres de la pointe sous le filet et les maintenir avec de la ficelle ou une pique donne à toute la pièce une épaisseur plus régulière. L’autre moitié de la solution, c’est le repos. Sortez le filet un peu avant {INT_F}°F et laissez-le trois minutes sur une planche ; la chaleur stockée dans les couches extérieures continue d’avancer vers l’intérieur et le centre monte d’environ 5°F pendant le repos. Ce repos fait partie de l’atteinte de la température sûre, ce n’est pas un bonus, et il laisse le jus se poser pour qu’il reste dans la viande à la découpe.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Un filet de 450 g, membrane argentée retirée, pointe repliée, frotté d’huile, de moutarde et d’herbes. Préchauffez {PREHEAT} minutes, faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes en retournant à {FLIP}. Sortez-le quand le gros bout indique environ 140°F, puis laissez reposer trois minutes pour atteindre {INT_F}°F. Un petit filet de 340 g demande environ {SMALL_MIN} minutes et un gros environ {LARGE_MIN}. L’équivalent au four traditionnel est de {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir s’il est cuit',
      donenessBody:
        'Mesurez dans la partie la plus épaisse de la tête, par le côté. Après les trois minutes de repos, le centre doit indiquer {INT_F}°F ({INT_C}°C) : rosé pâle, juteux et sûr. S’il dépasse déjà nettement 145°F à la sortie du panier, il sera ferme et sec après le repos ; la prochaine fois, sortez-le plus tôt. Tranchez contre le grain en médaillons d’un peu plus de 1 cm.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Glissez un couteau fin sous la membrane argentée, la pellicule brillante d’un côté, et retirez-la ; elle rétrécit à la chaleur et fait se courber le filet. Séchez, frottez d’un peu d’huile et d’un mélange d’épices. Si votre panier est petit, coupez le filet en deux plutôt que de le courber. Un glaçage sucré ne s’ajoute que dans les dernières minutes.',
      faqs: [
        {
          q: 'Combien de temps pour un filet mignon de porc à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour un filet de 450 g, retourné à {FLIP} minutes, plus trois minutes de repos. Les petits demandent environ {SMALL_MIN} minutes et les gros environ {LARGE_MIN}.',
        },
        {
          q: 'À quelle température le filet mignon de porc est-il cuit ?',
          a: '{INT_F}°F ({INT_C}°C) après trois minutes de repos. Sortez-le environ 5°F avant, car il monte pendant le repos.',
        },
        {
          q: 'Pourquoi faire reposer le filet mignon ?',
          a: 'L’extérieur garde une chaleur qui continue de cuire le centre quelques minutes, et le jus se pose pour rester dans les tranches.',
        },
        {
          q: 'Faut-il retirer la membrane argentée ?',
          a: 'Oui. Elle ne s’attendrit pas à la cuisson et se rétracte, ce qui courbe le filet et le rend caoutchouteux d’un côté.',
        },
        {
          q: 'Quel est l’équivalent dans un four classique ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes au four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
    'white-fish': {
      label: 'Poisson blanc',
      metaTitle: 'Cabillaud et colin à la friteuse à air : poisson blanc, temps et température',
      metaDescription:
        'Filets de poisson blanc à la friteuse à air : {AF_F}°F pendant {MIN} minutes sans retourner, cuits à {INT_F}°F. Cabillaud, colin, lieu, tilapia, temps selon l’épaisseur.',
      metaKeywords: 'cabillaud friteuse à air, filet de poisson airfryer temps, colin friteuse à air',
      heading: 'Poisson blanc à la friteuse à air',
      subDesc:
        'Cabillaud, colin, lieu, tilapia et filets semblables, frais ou décongelés. Le réglage, pourquoi ne pas le retourner et comment le sortir entier.',
      cardDesc: 'Ne le retournez pas : sortez-le entier sur le papier.',
      sizeLabels: { thin: 'Filets fins, tilapia ou sole', medium: 'Filets classiques, environ 2,5 cm', thick: 'Dos épais de cabillaud' },
      failureHeading: 'Collé au panier, cassé au retournement',
      failureBody:
        'Le poisson blanc a de grands feuillets lâches, tenus par très peu de gras et de tissu conjonctif. Une fois cuits, ces feuillets se séparent au moindre contact : c’est la texture qu’on veut dans l’assiette, et la raison pour laquelle il se défait en chemin. Les filets posés à nu collent aussi à la grille, car les protéines de la face inférieure s’accrochent au métal chaud avant de se raffermir. Vouloir retourner un filet à mi-cuisson, c’est là que presque tout le monde échoue : il se déchire, laisse sa face inférieure sur le panier et finit en morceaux. Alors ne le retournez pas. L’air qui circule cuit le dessus et la chaleur du panier suffit pour le dessous sur des filets d’épaisseur normale. Faites-le cuire sur du papier cuisson perforé ou un fond huilé et sortez la feuille entière à la fin.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Deux filets de cabillaud d’environ 170 g et 2,5 cm d’épaisseur, séchés, badigeonnés de beurre fondu et parsemés de zeste de citron et de paprika. Préchauffez {PREHEAT} minutes, posez-les sur du papier perforé et faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes sans les retourner. Un tilapia fin demande environ {THIN_MIN} minutes et un dos épais de cabillaud environ {THICK_MIN}. Au four traditionnel, les mêmes filets demandent {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir s’il est cuit',
      donenessBody:
        'Appuyez doucement sur la partie la plus épaisse avec une fourchette : le poisson blanc cuit passe du translucide à un blanc opaque et brillant, et se sépare en feuillets moelleux. La température à cœur sûre est de {INT_F}°F ({INT_C}°C). Les filets fins passent vite de cuits à secs, vérifiez donc deux minutes avant la fin. Si les feuillets paraissent crayeux et secs sur les bords, le poisson est trop cuit.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Décongelez entièrement les filets surgelés au réfrigérateur et séchez-les bien, car le poisson décongelé rend beaucoup d’eau. Repliez une queue fine en dessous pour que le filet ait une épaisseur régulière. Un peu de gras sur le dessus aide la couleur et le goût : un peu de beurre, d’huile ou de mayonnaise aux herbes. Pour une croûte, pressez le panko sur le dessus seulement.',
      faqs: [
        {
          q: 'Combien de temps pour du poisson blanc à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des filets de cabillaud ou de colin de 2,5 cm, sans retourner. Un tilapia fin demande environ {THIN_MIN} minutes et un dos épais environ {THICK_MIN}.',
        },
        {
          q: 'Faut-il retourner le poisson à la friteuse à air ?',
          a: 'Non. Les filets délicats cassent quand on les retourne, et l’air chaud cuit bien le dessus à lui seul.',
        },
        {
          q: 'Comment éviter que le poisson colle au panier ?',
          a: 'Faites-le cuire sur du papier cuisson perforé ou un fond huilé et sortez la feuille entière. Sécher le poisson et huiler le dessous aide aussi.',
        },
        {
          q: 'À quelle température le cabillaud est-il cuit ?',
          a: '{INT_F}°F ({INT_C}°C) au point le plus épais, quand la chair est opaque et se sépare facilement en feuillets.',
        },
        {
          q: 'Quel est l’équivalent au four pour du poisson blanc ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes au four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
    broccoli: {
      label: 'Brocoli',
      metaTitle: 'Brocoli à la friteuse à air : temps, température et bouquets croustillants',
      metaDescription:
        'Brocoli frais à la friteuse à air : {AF_F}°F pendant {MIN} minutes, secoué une fois. Têtes croustillantes et tiges tendres, temps selon la taille des bouquets et équivalent au four.',
      metaKeywords: 'brocoli friteuse à air, brocoli airfryer temps, brocoli rôti friteuse à air',
      heading: 'Brocoli à la friteuse à air',
      subDesc:
        'Bouquets de brocoli frais, rôtis jusqu’à ce que les bords croustillent. Le réglage court, le secouage et comment couper pour que têtes et tiges finissent ensemble.',
      cardDesc: 'Coupez les tiges fines pour que les têtes ne brûlent pas.',
      sizeLabels: { small: 'Petits bouquets, une bouchée', medium: 'Bouquets moyens, environ 4 cm', large: 'Gros bouquets ou têtes en deux' },
      failureHeading: 'Têtes brûlées, tiges dures',
      failureBody:
        'Un bouquet de brocoli, ce sont deux aliments réunis. Le dessus est une grappe de minuscules boutons secs à l’immense surface, et dans l’air chaud en mouvement ces boutons perdent leur eau en quelques minutes, deviennent croustillants, puis noirs et amers. La tige en dessous est dense et humide et demande plusieurs minutes de plus pour s’attendrir. Cuit entier, un bouquet vous oblige à choisir entre des têtes carbonisées sur une tige crue et une tige tendre sous des miettes brûlées. La solution est au couteau. Coupez des bouquets à tige courte et fendez les tiges épaisses dans la longueur, pour que chaque morceau ait une tige fine. Épluchez le tronc principal et coupez-le en rondelles ; cuit, il est sucré. L’autre problème est le poids : les bouquets secs sont si légers que le ventilateur peut soulever les petits morceaux jusqu’à la résistance, alors enrobez-les d’huile d’abord.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Une tête moyenne de brocoli coupée en bouquets d’environ 4 cm aux tiges fendues, mélangée à une cuillère à soupe d’huile d’olive, du sel et de l’ail. Préchauffez {PREHEAT} minutes, faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes et secouez une fois à mi-cuisson. Les bouquets d’une bouchée sont prêts en environ {SMALL_MIN} minutes, les gros en environ {LARGE_MIN}. Rôtie sur une plaque au four traditionnel, la même tête demande {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir s’il est cuit',
      donenessBody:
        'Les têtes doivent être dorées sur les bords, avec quelques points sombres et croustillants, tandis que le reste du bouquet reste d’un vert vif. Piquez une tige avec un couteau : il doit entrer avec une légère résistance. Des bouquets vert-gris et mous étaient trop serrés et ont cuit à la vapeur ; des têtes noires et amères signifient que les morceaux étaient trop gros pour le temps ou manquaient d’huile.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Lavez le brocoli à l’avance et laissez-le sécher complètement, ou passez-le à l’essoreuse à salade ; des bouquets mouillés cuisent à la vapeur au lieu de rôtir. Enrobez chaque morceau d’huile de façon régulière, ce qui protège les têtes et les alourdit. Le fromage râpé ou le jus de citron s’ajoutent après la cuisson. Ne remplissez pas le panier sur plus d’une couche.',
      faqs: [
        {
          q: 'Combien de temps pour du brocoli à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des bouquets frais moyens, secoués une fois. Les petits demandent environ {SMALL_MIN} minutes et les gros environ {LARGE_MIN}.',
        },
        {
          q: 'Pourquoi mon brocoli brûle-t-il à la friteuse à air ?',
          a: 'Les boutons fins du dessus sèchent bien plus vite que la tige ne s’attendrit. Coupez des bouquets plus petits aux tiges fines et enrobez-les d’huile.',
        },
        {
          q: 'Peut-on cuire du brocoli surgelé à la friteuse à air ?',
          a: 'Oui, mais il rend beaucoup d’eau et reste plus mou. Utilisez le mode surgelés, qui tient compte de cette humidité, plutôt que ce réglage pour le frais.',
        },
        {
          q: 'Pourquoi le brocoli s’envole-t-il dans ma friteuse à air ?',
          a: 'Les bouquets secs sont assez légers pour que le ventilateur les soulève. Une couche d’huile les alourdit et les garde dans le panier.',
        },
        {
          q: 'Quel est l’équivalent au four pour le brocoli ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes sur une plaque au four traditionnel.',
        },
      ],
    },
    'brussels-sprouts': {
      label: 'Choux de Bruxelles',
      metaTitle: 'Choux de Bruxelles à la friteuse à air : temps, température et feuilles croustillantes',
      metaDescription:
        'Choux de Bruxelles coupés en deux à la friteuse à air : {AF_F}°F pendant {MIN} minutes, secoués deux fois. Cœur tendre, face caramélisée, temps selon la taille et équivalent au four.',
      metaKeywords: 'choux de bruxelles friteuse à air, choux de bruxelles airfryer temps, choux de bruxelles croustillants',
      heading: 'Choux de Bruxelles à la friteuse à air',
      subDesc:
        'Choux de Bruxelles frais, coupés en deux et rôtis. Le réglage, les deux secouages et comment obtenir un cœur fondant avec une face caramélisée.',
      cardDesc: 'Coupez-les en deux, face coupée vers le bas.',
      sizeLabels: { small: 'Petits, coupés en deux', medium: 'Moyens, environ 2,5 cm, coupés en deux', large: 'Gros, coupés en quatre' },
      failureHeading: 'Cœur cru et feuilles brûlées',
      failureBody:
        'Un chou de Bruxelles est un faisceau serré de feuilles autour d’un cœur dense et compact. Les feuilles extérieures, lâches, sèchent et grillent presque aussitôt à la friteuse à air, mais la chaleur doit traverser couche après couche pour atteindre le centre, si bien qu’un chou entier peut être roussi dehors et encore dur et soufré au cœur. Le couper en deux est la solution principale, car cela expose le cœur et divise par deux le chemin de la chaleur. Ensuite, la face coupée compte. Posée à plat contre le panier chaud, elle caramélise en une croûte sucrée aux notes de noisette, tandis que le côté bombé gagne des feuilles croustillantes grâce à l’air. Placez-les face coupée vers le bas pour la première partie, et seulement ensuite commencez à secouer. Les gros choux doivent être coupés en quatre, sinon le centre reste en retard.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        '450 g de choux moyens, parés et coupés en deux, mélangés à une cuillère à soupe et demie d’huile et du sel. Préchauffez {PREHEAT} minutes, posez-les face coupée vers le bas et faites cuire à {AF_F}°F pendant {MEDIUM_MIN} minutes en secouant deux fois dans la seconde moitié. Les petits coupés en deux demandent environ {SMALL_MIN} minutes et les gros en quartiers environ {LARGE_MIN}. Au four traditionnel, la même plaque demande {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir s’ils sont cuits',
      donenessBody:
        'Enfoncez un couteau dans la partie la plus épaisse du cœur : il doit entrer facilement, comme dans une pomme de terre cuite. La face coupée doit être d’un doré profond à brun foncé, et quelques feuilles extérieures se seront détachées, croustillantes et presque noires ; ce sont les meilleures. Une couleur grise ou une forte odeur de chou signifient qu’ils ont cuit trop longtemps à trop basse température, ou à la vapeur dans un panier trop plein.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Coupez la base sèche du trognon et retirez les feuilles jaunies. Coupez à travers le trognon pour que chaque moitié tienne. Mélangez avec l’huile jusqu’à ce que chaque face coupée brille. Crème de balsamique, miel ou filet de citron s’ajoutent après la cuisson, car le sucre brûle en fin de cuisson vive.',
      faqs: [
        {
          q: 'Combien de temps pour des choux de Bruxelles à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des choux moyens coupés en deux, secoués deux fois. Les petits demandent environ {SMALL_MIN} minutes et les gros en quartiers environ {LARGE_MIN}.',
        },
        {
          q: 'Faut-il couper les choux de Bruxelles en deux ?',
          a: 'Oui. Entiers, ils brûlent dehors avant que le cœur dense ne cuise ; coupés en deux, le cœur est exposé et une face plate peut dorer.',
        },
        {
          q: 'Pourquoi mes choux restent-ils durs au centre ?',
          a: 'Ils étaient trop gros pour le temps. Coupez les gros en quatre et vérifiez le cœur au couteau avant de les sortir.',
        },
        {
          q: 'Face coupée vers le haut ou vers le bas ?',
          a: 'Vers le bas. La face plate caramélise contre le panier chaud, puis les secouages rendent les feuilles croustillantes.',
        },
        {
          q: 'Quel est l’équivalent au four pour les choux de Bruxelles ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes sur une plaque au four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
    'sweet-potato-fries': {
      label: 'Frites de patate douce',
      metaTitle: 'Frites de patate douce à la friteuse à air : temps, température et croustillant',
      metaDescription:
        'Frites de patate douce maison à la friteuse à air : {AF_F}°F pendant {MIN} minutes, secouées deux fois. Pourquoi elles brûlent et restent molles, l’astuce de la fécule, temps selon l’épaisseur.',
      metaKeywords: 'frites de patate douce friteuse à air, patate douce airfryer temps, frites patate douce croustillantes',
      heading: 'Frites de patate douce à la friteuse à air',
      subDesc:
        'Frites taillées dans des patates douces fraîches. Un réglage plus bas que pour les frites classiques, l’enrobage qui aide à croustiller et les temps selon l’épaisseur.',
      cardDesc: 'Plus bas que les frites : le sucre brûle d’abord.',
      sizeLabels: { thin: 'Fines, 6 mm', medium: 'Classiques, 1 cm', thick: 'Épaisses, 1,3 cm' },
      failureHeading: 'Bords foncés, cœur mou',
      failureBody:
        'La patate douce n’est pas une pomme de terre orange. Elle contient beaucoup plus de sucre et beaucoup moins de l’amidon qui rend une frite croustillante. À la chaleur, ce sucre caramélise puis brûle à une température plus basse que celle où l’amidon dore, si bien que les pointes foncent et deviennent amères pendant que le reste est encore mou. Ce moelleux est l’autre moitié du problème : avec peu d’amidon pour former une croûte rigide, la frite de patate douce a tendance à rester molle, quelle que soit la durée de cuisson. C’est pourquoi ce réglage est plus bas que celui des frites classiques et un peu plus court, et pourquoi une fine couche de fécule de maïs change tout. La fécule apporte la couche d’amidon sec qui manque à la patate douce, et elle croustille dans l’air avant que les sucres en dessous n’aient le temps de brûler.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Deux patates douces moyennes taillées en bâtonnets de 1 cm, séchées, mélangées d’abord à une cuillère à soupe de fécule de maïs, puis à une cuillère à soupe d’huile et une pincée de sel. Faites cuire en une couche à {AF_F}°F pendant {MEDIUM_MIN} minutes en secouant deux fois. Les fines demandent environ {THIN_MIN} minutes et les épaisses environ {THICK_MIN}. Procédez en plusieurs fournées ; elles croustillent un peu plus en refroidissant une minute. Sur une plaque au four traditionnel : {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir si elles sont cuites',
      donenessBody:
        'Cherchez des bords dorés et légèrement cloqués, mais pas noirs, et des frites qui gardent leur forme quand on les soulève par un bout au lieu de pendre. Elles restent plus tendres à l’intérieur qu’une frite classique ; c’est leur nature. Si les pointes foncent avant que le centre ne cuise, coupez la fournée suivante un peu plus épaisse et plus régulière plutôt que de monter la chaleur.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Les éplucher est facultatif ; la peau croustille bien. Taillez des bâtonnets d’épaisseur régulière et sautez le long trempage des pommes de terre, car il y a peu d’amidon de surface à rincer. Séchez-les, saupoudrez d’abord de fécule, puis ajoutez l’huile pour que la poudre adhère. Assaisonnez au paprika fumé ou à la cannelle et salez de nouveau après la cuisson.',
      faqs: [
        {
          q: 'Combien de temps pour des frites de patate douce à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des frites de 1 cm, secouées deux fois. Les fines demandent environ {THIN_MIN} minutes et les épaisses environ {THICK_MIN}.',
        },
        {
          q: 'Pourquoi cuire les frites de patate douce plus bas que les frites classiques ?',
          a: 'Elles contiennent beaucoup plus de sucre, qui brûle à une température plus basse que celle où l’amidon de pomme de terre dore. Un réglage un peu plus bas laisse cuire l’intérieur avant que les bords ne noircissent.',
        },
        {
          q: 'Comment rendre les frites de patate douce croustillantes ?',
          a: 'Saupoudrez-les de fécule avant l’huile, faites-les cuire en une couche et laissez-les reposer une minute après la cuisson. Elles ne seront jamais aussi rigides que des frites classiques.',
        },
        {
          q: 'Faut-il faire tremper les frites de patate douce ?',
          a: 'Non. Le trempage des frites classiques rince l’amidon de surface, et la patate douce en a très peu.',
        },
        {
          q: 'Quel est l’équivalent au four pour des frites de patate douce ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes sur une plaque au four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
    'potato-wedges': {
      label: 'Potatoes',
      metaTitle: 'Potatoes à la friteuse à air : temps, température et cœur fondant',
      metaDescription:
        'Quartiers de pommes de terre avec la peau à la friteuse à air : {AF_F}°F pendant {MIN} minutes, retournés une fois. Croustillants dehors, fondants dedans, temps selon la taille et équivalent au four.',
      metaKeywords: 'potatoes friteuse à air, quartiers de pommes de terre airfryer, potatoes maison air fryer temps',
      heading: 'Potatoes à la friteuse à air',
      subDesc:
        'Quartiers épais avec la peau, taillés dans des pommes de terre fraîches. Le réglage, le seul retournement et comment cuire le cœur avant que l’extérieur ne fonce trop.',
      cardDesc: 'Morceaux épais : espacez-les et retournez une fois.',
      sizeLabels: { small: 'Petits quartiers, de petites pommes de terre', medium: 'Moyens, pomme de terre en 8', large: 'Gros, pomme de terre en 6' },
      failureHeading: 'Doré dehors, compact dedans',
      failureBody:
        'Un quartier est épais côté peau et tranchant côté intérieur, il cuit donc de façon inégale par sa seule forme. L’arête fine dore en premier pendant que le cœur du quartier, souvent large de plus de deux centimètres, reste ferme et cireux. Contrairement à une frite fine, un quartier a assez de masse pour que l’extérieur paraisse cuit bien avant le centre. Deux choses règlent le problème. D’abord, laissez de la place à chaque quartier : entassés dans le panier, ils se font de l’ombre, les faces cachées cuisent à la vapeur et l’extérieur est mou par endroits et brûlé ailleurs. Ensuite, retournez-les une fois sur l’autre face coupée, pour que les deux faces planes colorent contre le panier pendant que la peau fait face au ventilateur. Pour un cœur vraiment fondant, faites-les frémir cinq minutes avant la cuisson.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Deux pommes de terre farineuses moyennes, coupées chacune en huit quartiers dans la longueur, séchées et mélangées à une cuillère à soupe d’huile, du sel, de l’ail en poudre et du paprika. Faites cuire en une couche, peau vers le bas, à {AF_F}°F pendant {MEDIUM_MIN} minutes en retournant une fois à mi-cuisson. Les quartiers de petites pommes de terre demandent environ {SMALL_MIN} minutes ; les gros sixièmes environ {LARGE_MIN}. Sur une plaque au four traditionnel, comptez {OVEN_F}°F pendant environ {OVEN_MIN} minutes.',
      donenessHeading: 'Comment savoir s’ils sont cuits',
      donenessBody:
        'Enfoncez un couteau dans la partie la plus épaisse, près de la peau : il doit entrer sans résistance, et l’intérieur doit paraître blanc et moelleux, pas translucide. Les faces coupées doivent être dorées avec des bords plus foncés et la peau ridée et croustillante. Si l’extérieur est prêt et pas le centre, baissez un peu la chaleur pour les dernières minutes plutôt que de sacrifier la croûte.',
      prepHeading: 'Avant la cuisson',
      prepBody:
        'Prenez des pommes de terre farineuses pour un cœur moelleux ; les fermes donnent un quartier plus crémeux. Brossez-les sans les éplucher. Coupez chaque pomme de terre en autant de quartiers pour qu’ils finissent ensemble. Un rinçage rapide suffit ; séchez bien. Un peu de parmesan râpé dans les deux dernières minutes va très bien.',
      faqs: [
        {
          q: 'Combien de temps pour des potatoes à la friteuse à air ?',
          a: 'Environ {MIN} minutes à {AF_F}°F pour des quartiers moyens, retournés une fois. Les petits demandent environ {SMALL_MIN} minutes et les gros environ {LARGE_MIN}.',
        },
        {
          q: 'Faut-il précuire les quartiers avant la friteuse à air ?',
          a: 'C’est facultatif. Cinq minutes dans l’eau frémissante donnent un cœur plus moelleux et une surface plus rugueuse qui croustille mieux ; séchez bien ensuite.',
        },
        {
          q: 'Quelle différence entre potatoes et frites à la friteuse à air ?',
          a: 'Les quartiers sont bien plus épais : le défi est de cuire le cœur avant que l’extérieur ne dore trop. Ils demandent plus de temps et un seul retournement.',
        },
        {
          q: 'Quelles pommes de terre pour des potatoes ?',
          a: 'Des variétés farineuses comme la bintje pour un intérieur moelleux ; des chairs fermes pour un intérieur plus crémeux.',
        },
        {
          q: 'Quel est l’équivalent au four pour des potatoes ?',
          a: '{OVEN_F}°F pendant environ {OVEN_MIN} minutes sur une plaque au four traditionnel, ou {FAN_F}°F pendant {FAN_MIN} minutes en chaleur tournante.',
        },
      ],
    },
  },
};

export const presetsIndex: Dictionary['presetsIndex'] = {
  metaTitle: 'Préréglages friteuse à air : temps et température pour chaque aliment',
  metaDescription:
    'Temps et température à la friteuse à air pour le poulet, les ailes, le saumon, le bacon, le steak, les pommes de terre et plus : chaque préréglage avec la température à cœur, les durées par taille et l’équivalent au four.',
  metaKeywords: 'temps de cuisson air fryer, tableau temps température air fryer, préréglages air fryer',
  backLink: 'Tous les outils',
  heading: 'Préréglages d’aliments pour friteuse à air',
  intro:
    'Une page par aliment, chacune un véritable outil plutôt qu’une ligne de tableau : le réglage, quand retourner ou secouer, la température à cœur de chaque protéine, les durées par taille et l’équivalent au four dans les deux sens.',
  categories: {
    poultry: 'Volaille',
    meat: 'Viande',
    fish: 'Poissons et fruits de mer',
    veg: 'Légumes et pommes de terre',
    baked: 'Pâtisserie',
    reheat: 'Réchauffer',
    frozen: 'Surgelés',
  },
  howHeading: 'Comment ces préréglages sont établis',
  howBody:
    'Chaque préréglage part d’une friteuse à air à panier de 4 à 6 litres, préchauffé, avec l’aliment en une seule couche. Les équivalents au four traditionnel et à chaleur tournante de chaque page sont calculés par le même moteur que le convertisseur, ils concordent donc entre eux, et le convertisseur de chaque page est déjà réglé sur cet aliment si vous partez d’une recette au four. Chaque page commence par la façon précise dont cet aliment rate à la friteuse à air, car c’est cela qui décide du résultat plus que le chiffre sur le cadran. Pas d’e-mail, pas d’inscription, rien à installer.',
  relatedFlagshipLink: 'Convertisseur four vers friteuse à air',
  relatedChartLink: 'Tableau de conversion à imprimer',
};

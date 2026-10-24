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

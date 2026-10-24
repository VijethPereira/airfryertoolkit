import type { Dictionary } from '../../types';

const tempLanding: Dictionary['tempLanding'] = {
  backLink: 'Tous les outils',
  pageTag: 'Température du four',
  answerTemplate: 'Four à {OVEN_F}°F = {AF_F}°F ({AF_C}°C) dans une friteuse à air à panier, environ {PCT} % de temps en moins.',
  answerCappedTemplate:
    'Four à {OVEN_F}°F = {AF_F}°F ({AF_C}°C) dans une friteuse à air à panier — son maximum de {CEILING}°F — environ {PCT} % de temps en moins.',
  answerOvenStyleTemplate: 'Friteuse type four : {OS_F}°F ({OS_C}°C), environ {OS_PCT} % de temps en moins.',
  tableHeading: 'Chaque aliment à {OVEN_F}°F',
  tableIntro:
    'L’ajustement dépend de l’aliment : un seul chiffre ne donne jamais toute la réponse. Chaque case indique la température de la friteuse, les °C, le thermostat et la part du temps de four que vous gagnez.',
  tableHeaders: { food: 'Aliment', basket: 'Panier', ovenStyle: 'Type four' },
  timeLessTemplate: '{PCT} % de temps en moins',
  cappedCell: 'Au maximum',
  cappedFootnote:
    'Au maximum : la température convertie dépasse ce que l’appareil atteint ({CEILING}°F en panier, {OS_CEILING}°F en type four). Elle est donc maintenue au maximum et une partie de la réduction de temps est rendue.',
  neighboursHeading: 'Températures voisines',
  neighbourLinkTemplate: 'Four à {OVEN_F}°F en friteuse à air',
  relatedFlagshipLink: 'Convertisseur four vers friteuse à air (toute température)',
  relatedChartLink: 'Tableau de conversion imprimable',
  relatedFrozenLink: 'Mode surgelés (instructions de l’emballage)',
  faqHeading: 'Questions fréquentes',
  pages: {
    350: {
      metaTitle: '350°F (175°C) du four à la friteuse à air : température et temps',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) au four, c’est {AF_F}°F ({AF_C}°C) dans une friteuse à air à panier, avec environ {PCT} % de temps en moins. Tableau par aliment pour gâteaux, gratins et poulet, et convertisseur en direct.',
      metaKeywords: '350 degrés friteuse à air, 180 degrés airfryer, 350f en c friteuse à air, four 180 degrés en airfryer',
      heading: 'Four à {OVEN_F}°F ({OVEN_C}°C) en friteuse à air',
      subDesc:
        'La température la plus courante en pâtisserie et pour les plats au four. Le convertisseur est déjà réglé sur {OVEN_F}°F : changez le temps et l’aliment pour obtenir votre réglage exact.',
      recipesHeading: 'Quelles recettes utilisent 350°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, gas mark {OVEN_GAS} au Royaume-Uni) est la température par défaut de tout ce qui doit prendre à cœur avant que l’extérieur ne fonce : muffins, cakes, brownies, cookies, cheesecake, pain de viande, pâtes gratinées et la plupart des plats au four. C’est aussi là que tombent les vieilles recettes quand l’auteur hésitait, si bien que beaucoup de recettes de poulet ou de porc demandent {OVEN_F}°F pendant une heure alors qu’elles doreraient mieux plus chaud. Ce sont les recettes qui souffrent le plus quand on traite la friteuse comme un petit four. Une règle fixe les ramène toutes à {AF_F}°F, mais la pâtisserie et les gratins ont droit à une réduction plus faible : une pâte dense ou un plat profond a besoin que la chaleur atteigne le centre, et ce chiffre plus doux empêche la croûte de se former la première.',
      failureHeading: 'L’échec typique à 350°F : cuit dehors, cru dedans',
      failureBody:
        'À cette température, le problème n’est pas de brûler, c’est la vitesse en surface. Le ventilateur souffle droit sur le dessus d’un muffin ou d’un gâteau, qui dore et croûte alors que le centre est encore liquide. Résultat : un dôme fendu sur un cœur pâteux, et rajouter du temps ne fait que foncer davantage le dessus. Trois gestes règlent le problème. Prenez un moule moins haut que celui de la recette, pour que le centre ait moins de chemin à faire. Couvrez le dessus d’une feuille d’aluminium posée lâche pendant la première moitié, en glissant les bords sous le moule pour que l’air ne la soulève pas. Et testez le centre avec une pique au moment indiqué au lieu de vous fier à la couleur. Le papier cuisson et l’aluminium doivent être tenus par les aliments : une feuille libre peut se soulever jusqu’à la résistance à n’importe quelle température.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Une recette de muffins indique {OVEN_F}°F pendant {EX_OVEN_MIN} minutes. La pâtisserie a l’une des plus petites réductions du tableau : une friteuse à panier la cuit à {EX_F}°F ({EX_C}°C) pendant {EX_MIN} minutes, et il faut piquer à {EX_CHECK} minutes. Un appareil type four souffle moins directement sur le dessus, il demande donc {EX_OS_F}°F pendant {EX_OS_MIN} minutes. Cuisez dans des caissettes en silicone ou en papier posées dans le panier, remplies à moitié et non à ras bord.',
      styleHeading: 'Convertir 350°F en °C et en thermostat',
      styleBody:
        '{OVEN_F}°F font {OVEN_C}°C arrondis à cinq près, ce que beaucoup de recettes européennes impriment, même si en France on lit plus souvent 180°C ; au Royaume-Uni c’est le gas mark {OVEN_GAS}. Dans la friteuse, le réglage général est {AF_F}°F, soit {AF_C}°C — gas mark {AF_GAS} si vous comparez avec une recette britannique. Beaucoup de friteuses vendues en Europe montent par paliers de 10°C et non de 5°C. Si c’est le cas de la vôtre, arrondissez vers le bas pour les gâteaux et les gratins et vers le haut pour le poulet : les préparations denses évitent une croûte trop foncée et la volaille gagne de la couleur. Le convertisseur accepte directement les °C si votre recette est écrite ainsi.',
      faqs: [
        {
          q: 'Combien font {OVEN_F}°F dans une friteuse à air ?',
          a: 'Pour une recette générale, {AF_F}°F ({AF_C}°C) dans une friteuse à panier avec environ {PCT} % de temps en moins, ou {OS_F}°F dans un appareil type four. Gâteaux, gratins, steak et poisson ont une réduction plus faible ; le tableau ci-dessus donne chaque aliment.',
        },
        {
          q: 'Combien de degrés Celsius font {OVEN_F}°F pour une friteuse à air ?',
          a: '{OVEN_F}°F font {OVEN_C}°C. Convertis pour une friteuse à panier, cela donne {AF_C}°C. Si votre friteuse n’affiche que des °C, saisissez la recette en °C dans le convertisseur : il fait les deux étapes d’un coup.',
        },
        {
          q: 'De combien le temps diminue-t-il en friteuse à {OVEN_F}°F ?',
          a: 'D’environ {PCT} % pour la plupart des aliments dans une friteuse à panier. Les frites et le bacon gagnent le plus, les gâteaux et les gratins le moins. La première fois que vous faites une recette, vérifiez au moment indiqué par le convertisseur plutôt qu’à la fin, car la taille du panier et la puissance varient.',
        },
        {
          q: 'Peut-on cuire un gâteau en friteuse à air à {OVEN_F}°F ?',
          a: 'Oui, mais avec la température convertie plutôt que {OVEN_F}°F, et un moule qui laisse de l’espace sur les côtés pour l’air. Couvrez le dessus d’aluminium lâche s’il dore avant que la pique ressorte sèche. Un gâteau de plus de 5 cm de haut environ réussit mieux au four.',
        },
        {
          q: 'Pourquoi ne pas simplement retirer 25°F à {OVEN_F}°F ?',
          a: 'Parce que cela ne vaut que pour certains aliments. Retirer 25°F convient au poulet et aux recettes générales, mais les pâtes denses et les gratins profonds ont besoin que la chaleur atteigne le centre et ont droit à une réduction plus faible — c’est la différence entre un cœur pris et un cœur cru.',
        },
      ],
    },
    375: {
      metaTitle: '375°F (190°C) en friteuse à air : température et temps convertis',
      metaDescription:
        'Recette au four à {OVEN_F}°F ({OVEN_C}°C) ? Réglez {AF_F}°F ({AF_C}°C) sur une friteuse à panier, environ {PCT} % de temps en moins. Tableau par aliment pour cuisses de poulet, côtes de porc, pâte feuilletée et plus, avec convertisseur en direct.',
      metaKeywords: '375 degrés friteuse à air, 190 degrés airfryer, 375f en c friteuse à air, four 190 degrés en airfryer',
      heading: 'Four à {OVEN_F}°F ({OVEN_C}°C) en friteuse à air',
      subDesc:
        'La température des morceaux de poulet, des côtes et de la pâte feuilletée. Le convertisseur est réglé sur {OVEN_F}°F ; adaptez le temps et l’aliment à votre recette.',
      recipesHeading: 'Quelles recettes utilisent 375°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, gas mark {OVEN_GAS} au Royaume-Uni) est la température de travail pour ce qui doit dorer et cuire à cœur au même rythme. Hauts de cuisse et pilons de poulet avec os, côtes de porc, boulettes, saucisses, poivrons farcis, pâte feuilletée, chaussons et plaques de poulet aux légumes se trouvent ici. Elle donne de la couleur sans la fumée qui apparaît plus haut, et elle est proche des températures auxquelles les recettes de friteuse sont écrites, ce qui en fait la plus simple à convertir. Une recette générale descend à {AF_F}°F. La réduction est la même qu’aux températures plus basses, mais les aliments arrivent en fin de cuisson dans un autre état : à cette chaleur, un morceau de poulet est doré dehors bien avant que son centre soit cuit, donc le contrôle compte plus que la minuterie.',
      failureHeading: 'L’échec typique à 375°F : peau dorée, os pas cuit',
      failureBody:
        'Le poulet avec os est le piège. La peau et le bout fin d’un pilon colorent vite dans l’air brassé : le morceau paraît prêt alors que la chair contre l’os est encore rosée. Les hauts de cuisse pardonnent, car ils restent juteux bien au-delà de 165°F (74°C), c’est pourquoi beaucoup les mènent à 175–185°F ; le blanc non, il sèche vite passé 165°F. Disposez les morceaux peau vers le haut, la partie la plus épaisse vers le bord du panier, là où l’air circule le plus vite, et retournez-les une fois à mi-cuisson. Avec la pâte feuilletée, cette vitesse joue dans l’autre sens : le dessus gonfle et dore avant que les couches du dessous soient cuites. Placez-la sur la grille la plus basse d’un appareil type four, ou sur un papier perforé pour que la chaleur atteigne le fond.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Une recette rôtit des hauts de cuisse de poulet avec os à {OVEN_F}°F pendant {EX_OVEN_MIN} minutes. Dans une friteuse à panier, cela devient {EX_F}°F ({EX_C}°C) pendant {EX_MIN} minutes ; commencez à contrôler le plus épais à {EX_CHECK} minutes et continuez jusqu’à au moins 165°F près de l’os. Dans une friteuse type four, qui se comporte davantage comme un petit four à chaleur tournante, c’est {EX_OS_F}°F pendant {EX_OS_MIN} minutes. Retournez les morceaux une fois à mi-cuisson dans les deux cas.',
      styleHeading: 'Panier ou type four à 375°F',
      styleBody:
        'Ici, les deux types ne diffèrent que de quelques degrés — {AF_F}°F en panier, {OS_F}°F en type four — mais le temps varie davantage : environ {PCT} % de moins que le four en panier et environ {OS_PCT} % de moins en type four. Le panier brasse l’air plus vite autour d’une petite charge et finit plus tôt ; le type four répartit les aliments sur des grilles et cuit plutôt comme un four à chaleur tournante. Si le vôtre a deux grilles, intervertissez-les à mi-cuisson, car celle qui est près de la résistance dore plus vite. Préchauffez {PREHEAT} minutes en panier ou {OS_PREHEAT} en type four. {OVEN_F}°F font {OVEN_C}°C, et le convertisseur accepte les deux unités.',
      faqs: [
        {
          q: 'Combien font {OVEN_F}°F dans une friteuse à air ?',
          a: 'En général {AF_F}°F ({AF_C}°C) dans une friteuse à panier, avec environ {PCT} % de temps en moins que la recette au four. Une friteuse type four demande {OS_F}°F. Steak, poisson et pâtisserie sont moins réduits ; voyez le tableau pour chaque aliment.',
        },
        {
          q: 'Combien font {OVEN_F}°F en °C, et que régler sur ma friteuse ?',
          a: '{OVEN_F}°F font {OVEN_C}°C, le chiffre qu’impriment le plus souvent les recettes et emballages européens. Sur une friteuse à panier, réglez {AF_C}°C. Si votre bouton avance par paliers de 10°C, arrondissez vers le haut pour le poulet et vers le bas pour la pâte feuilletée.',
        },
        {
          q: 'Combien de temps pour des hauts de cuisse en friteuse à partir d’une recette à {OVEN_F}°F ?',
          a: 'Ne réglez pas {OVEN_F}°F mais {EX_F}°F. Des hauts de cuisse avec os qui demandent {EX_OVEN_MIN} minutes au four en demandent environ {EX_MIN} dans une friteuse à panier. Vérifiez toujours au thermomètre : au moins 165°F près de l’os.',
        },
        {
          q: 'Faut-il préchauffer la friteuse pour une recette à {OVEN_F}°F ?',
          a: 'Un court préchauffage — {PREHEAT} minutes en panier, {OS_PREHEAT} en type four — aide la pâte feuilletée à monter et la peau à croustiller. Pour les boulettes et les poivrons farcis, cela change peu de chose ; ajoutez plutôt une minute au temps.',
        },
        {
          q: 'Peut-on faire tout un dîner sur plaque à partir d’une recette à {OVEN_F}°F ?',
          a: 'Oui, en plusieurs fournées ou sur les deux grilles d’un appareil type four. Commencez par le poulet et ajoutez les légumes pour la dernière partie du temps, car des légumes coupés cuisent plus vite que de la viande avec os au même réglage.',
        },
      ],
    },
    400: {
      metaTitle: '400°F (200°C) du four à la friteuse à air, et 400°F en °C',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) au four = {AF_F}°F ({AF_C}°C) dans une friteuse à panier, environ {PCT} % de temps en moins. Légumes rôtis, pommes de terre et blanc de poulet : tableau par aliment et convertisseur en direct.',
      metaKeywords: '400 degrés friteuse à air, 200 degrés airfryer, 400f en c friteuse à air, four 200 degrés en airfryer',
      heading: 'Four à {OVEN_F}°F ({OVEN_C}°C) en friteuse à air',
      subDesc:
        'La température du rôti, et celle qu’on lit le plus souvent en °C sur un emballage européen. Le convertisseur part de {OVEN_F}°F : indiquez votre temps et votre aliment.',
      recipesHeading: 'Quelles recettes utilisent 400°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, gas mark {OVEN_GAS} au Royaume-Uni) est le réglage classique pour rôtir. Les recettes l’utilisent pour les légumes, les potatoes, le blanc de poulet, les saucisses, les pavés de saumon, les pois chiches grillés, les frites maison et tout ce qui finit avec un bord croustillant. Une friteuse à air est avant tout une rôtissoire : c’est donc ici qu’elle bat le plus nettement le four. Une recette générale descend à {AF_F}°F, et les frites ont la plus forte réduction de temps du tableau, suivies de près par les légumes rôtis, car elles ont beaucoup de surface et peu d’épaisseur. Notez que la conversion ne demande jamais au panier d’atteindre {OVEN_F}°F. La friteuse obtient la même coloration environ {PCT} % plus vite avec un réglage plus bas, ce qui laisse de la marge sous le maximum de {CEILING}°F de la plupart des friteuses à panier.',
      failureHeading: 'L’échec typique à 400°F : étuvé au lieu de rôti',
      failureBody:
        'Une forte chaleur dans un petit espace ne marche que si l’humidité peut s’échapper. Les légumes coupés et les pommes de terre rendent de l’eau en chauffant ; dans un panier plein, cette vapeur reste autour des aliments, qui ramollissent et restent pâles au lieu de dorer. C’est le reproche le plus courant fait aux légumes en friteuse, et plus de temps n’y change rien. Cuisez en une seule couche avec des espaces, ou en deux fournées ; la seconde va souvent une ou deux minutes plus vite, car le panier est déjà chaud. Séchez bien les légumes après lavage, enrobez-les d’une cuillère à café d’huile plutôt que d’une cuillère à soupe, et secouez le panier au moment du contrôle pour que les morceaux du fond remontent dans l’air. La graisse des saucisses ou de la peau du poulet peut fumer à cette chaleur : videz le tiroir entre les fournées.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Une recette rôtit des légumes variés à {OVEN_F}°F pendant {EX_OVEN_MIN} minutes. Une friteuse à panier les cuit à {EX_F}°F ({EX_C}°C) en {EX_MIN} minutes, en secouant à {EX_CHECK} minutes pour vérifier la couleur. Une friteuse type four demande {EX_OS_F}°F pendant {EX_OS_MIN} minutes ; répartissez les légumes sur deux grilles au lieu de les entasser sur une seule, et intervertissez-les à mi-cuisson.',
      styleHeading: '400°F en °C dans une friteuse à air',
      styleBody:
        'La conversion exacte de {OVEN_F}°F est {OVEN_C_EXACT}°C, arrondie ici à {OVEN_C}°C, alors que les recettes et les fours européens indiquent généralement 200°C. Ce petit écart ne compte pas pour un rôti. Ce qui compte, c’est que le réglage de la friteuse est plus bas : {AF_C}°C en panier, {OS_C}°C en type four. Si votre friteuse avance par paliers de 10°C, prenez le palier inférieur pour les pommes de terre et les légumes, qui dorent bien de toute façon, et le palier supérieur pour la peau du poulet. En saisissant la recette en °C dans le convertisseur, vous obtenez les deux chiffres d’un coup.',
      faqs: [
        {
          q: 'Combien font {OVEN_F}°F dans une friteuse à air ?',
          a: 'Environ {AF_F}°F ({AF_C}°C) dans une friteuse à panier, avec environ {PCT} % de temps en moins. Dans un appareil type four, {OS_F}°F. Les frites et le bacon gagnent le plus de temps ; la pâtisserie et les gratins ont la plus petite réduction.',
        },
        {
          q: '{OVEN_F}°F en °C : que régler sur ma friteuse ?',
          a: 'La température de la recette est de {OVEN_C}°C, souvent imprimée 200°C. Réglez une friteuse à panier sur {AF_C}°C ou une friteuse type four sur {OS_C}°C, et réduisez le temps d’environ {PCT} %.',
        },
        {
          q: 'Ma friteuse peut-elle monter à {OVEN_F}°F ?',
          a: 'La plupart des friteuses à panier atteignent {CEILING}°F et les modèles type four {OS_CEILING}°F, donc oui, mais c’est rarement nécessaire. Une recette au four à {OVEN_F}°F se convertit en un réglage plus bas, car la friteuse dore plus vite ; ne réglez {OVEN_F}°F que si une recette de friteuse le demande.',
        },
        {
          q: 'Combien de temps pour des pommes de terre rôties en friteuse à partir d’une recette à {OVEN_F}°F ?',
          a: 'À peu près un quart de moins qu’au four pour des pommes de terre coupées et autres légumes, à {AF_F}°F. Les morceaux cuisent plus vite que les petites pommes de terre entières. Secouez deux fois et fiez-vous à la couleur et à un couteau planté dans le plus gros morceau.',
        },
        {
          q: 'Pourquoi mes légumes sont-ils mous en friteuse à {AF_F}°F ?',
          a: 'Presque toujours parce que le panier est trop rempli. La vapeur des légumes ne peut pas sortir et ils cuisent dedans. Une seule couche, des légumes bien secs et moins d’huile ; une température plus haute ne sauvera pas un panier plein.',
        },
      ],
    },
    425: {
      metaTitle: '425°F (220°C) en friteuse à air : réglage, temps et limite maximale',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) au four = {AF_F}°F ({AF_C}°C) dans une friteuse à panier, pile à son maximum. Voyez quels aliments sont plafonnés, combien de temps est rendu, et convertissez en direct.',
      metaKeywords: '425 degrés friteuse à air, 220 degrés airfryer, 425f en c friteuse à air, four 220 degrés en airfryer',
      heading: 'Four à {OVEN_F}°F ({OVEN_C}°C) en friteuse à air',
      subDesc:
        'La température du croustillant, et la première où une friteuse à panier touche son plafond. Le convertisseur est réglé sur {OVEN_F}°F ; choisissez l’aliment pour voir s’il est plafonné.',
      recipesHeading: 'Quelles recettes utilisent 425°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, gas mark {OVEN_GAS} au Royaume-Uni) est la température des recettes qui cherchent le croustillant : ailes de poulet, pommes de terre rôties au bord cassant, saumon au dessus ferme, gnocchis sur plaque, croûtons et brocolis aux pointes grillées. Les frites et nuggets surgelés l’indiquent souvent aussi, mais ils obéissent à d’autres règles : utilisez le mode surgelés pour eux. Au four, il faut autant de chaleur pour chasser vite l’humidité de la surface. La friteuse y arrive plus tôt, donc une recette générale se convertit en {AF_F}°F — exactement le plafond de {CEILING}°F d’une friteuse à panier courante. Tout ce qui a la réduction normale tombe sur le plafond et se convertit comme d’habitude, mais le steak, le poisson, la pâtisserie et les gratins ont une réduction plus faible : leur température convertie dépasse ce que le panier peut atteindre. Le tableau signale ces lignes.',
      failureHeading: 'L’échec typique à 425°F : le plafond',
      failureBody:
        'La plupart des convertisseurs soustraient et affichent le résultat, même quand c’est une température que votre friteuse ne peut pas atteindre. À {OVEN_F}°F, cela arrive pour les aliments à réduction douce : le calcul demande plus de {CEILING}°F, le panier donne {CEILING}°F, et l’aliment sort pas assez cuit parce que le temps a été réduit comme si cette chaleur existait. Ce convertisseur bloque la température au plafond et rend une partie du temps, si bien que les lignes plafonnées gagnent moins de temps que les autres. L’autre risque à cette chaleur, c’est la fumée. La graisse des ailes et de la peau du saumon coule sur un tiroir très chaud : prenez une huile à point de fumée élevé, n’ajoutez les marinades sucrées ou au miel que pour les dernières minutes, et videz le tiroir entre les fournées.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Une recette rôtit des pavés de saumon à {OVEN_F}°F pendant {EX_OVEN_MIN} minutes. Le poisson a une réduction plus faible que la plupart des aliments : sa température convertie dépasse la limite du panier et reste à {EX_F}°F ({EX_C}°C), avec un temps ramené seulement à {EX_MIN} minutes. Vérifiez à {EX_CHECK} minutes : le saumon est cuit à 145°F (63°C) au plus épais, ou quand il s’effeuille. Une friteuse type four a un plafond plus haut, elle cuit donc à {EX_OS_F}°F pleins pendant {EX_OS_MIN} minutes.',
      styleHeading: 'Pourquoi le type four diffère à 425°F',
      styleBody:
        'Une friteuse type four atteint généralement {OS_CEILING}°F : à {OVEN_F}°F, rien n’est donc plafonné. Une recette générale passe à {OS_F}°F avec environ {OS_PCT} % de temps en moins, et les aliments à réduction douce cuisent simplement plus chaud. Les lignes plafonnées n’apparaissent que dans la colonne panier : vérifiez quel type vous avez avant de vous fier à un tableau. Le convertisseur utilise {CEILING}°F pour les friteuses à panier et {OS_CEILING}°F pour les modèles type four, les limites courantes ; si le bouton de la vôtre s’arrête plus bas, cuisez à son maximum et prévoyez un peu plus de temps. En °C, la recette est à {OVEN_C}°C et une friteuse à panier se règle sur {AF_C}°C.',
      faqs: [
        {
          q: 'Combien font {OVEN_F}°F dans une friteuse à air ?',
          a: '{AF_F}°F ({AF_C}°C) dans une friteuse à panier pour la plupart des aliments — le maximum du panier — avec environ {PCT} % de temps en moins. Un appareil type four utilise {OS_F}°F. Steak, poisson, gâteaux et gratins sont plafonnés en panier et gardent davantage de temps.',
        },
        {
          q: 'Combien de degrés Celsius font {OVEN_F}°F ?',
          a: '{OVEN_F}°F font {OVEN_C}°C, soit le gas mark {OVEN_GAS}. Une friteuse à panier ne monte pas si haut : réglez {AF_C}°C et utilisez le temps converti.',
        },
        {
          q: 'Ma friteuse ne dépasse pas {CEILING}°F. Puis-je faire une recette à {OVEN_F}°F ?',
          a: 'Oui. Pour la plupart des aliments, le réglage converti est déjà {CEILING}°F. Pour ceux qui demanderaient plus, cuisez à {CEILING}°F et prévoyez un peu plus de temps ; le tableau montre combien de temps en moins chaque aliment gagne quand il est plafonné.',
        },
        {
          q: 'Combien de temps pour des ailes de poulet en friteuse à partir d’une recette à {OVEN_F}°F ?',
          a: 'À {AF_F}°F, les ailes gagnent environ un cinquième du temps de four. Séchez-les bien, laissez de l’espace entre elles, secouez à mi-cuisson et cuisez jusqu’à ce que la peau croustille et que la chair atteigne au moins 165°F (74°C).',
        },
        {
          q: 'Pourquoi ma friteuse fume-t-elle à haute température ?',
          a: 'La graisse et les marinades sucrées coulent sur le tiroir chaud et brûlent. Prenez une huile à point de fumée élevé, ajoutez les glaçages collants à la fin, et videz ou essuyez le tiroir entre les fournées.',
        },
      ],
    },
    450: {
      metaTitle: '450°F (230°C) en friteuse à air : que régler quand le panier est au maximum',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) dépasse la limite de {CEILING}°F d’une friteuse à panier. Réglez {AF_F}°F et gagnez environ {PCT} % du temps, pas la réduction habituelle : tableau par aliment et convertisseur en direct.',
      metaKeywords: '450 degrés friteuse à air, 230 degrés airfryer, 450f en c friteuse à air, four 230 degrés en airfryer',
      heading: 'Four à {OVEN_F}°F ({OVEN_C}°C) en friteuse à air',
      subDesc:
        'Plus chaud que ce qu’une friteuse à panier peut faire. Le convertisseur part de {OVEN_F}°F et affiche le réglage plafonné avec le temps rendu, ce que la plupart des tableaux oublient.',
      recipesHeading: 'Quelles recettes utilisent 450°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, gas mark {OVEN_GAS} au Royaume-Uni) est le haut de gamme de la cuisine maison : pizza sur pierre, pains plats, tomates et poivrons cloqués, pommes de terre écrasées, pommes de terre hasselback, asperges rôties minute, et steak ou côtes saisis en fin de cuisson inversée. Les recettes le demandent quand l’extérieur doit colorer avant que l’intérieur ne cuise trop. Une règle fixe retire 25°F et s’arrête là, mais le résultat n’est pas un réglage qu’une friteuse à panier possède. Chaque aliment du tableau est plafonné au maximum du panier, {CEILING}°F : la colonne panier affiche donc la même température à chaque ligne, et seul le temps change. C’est la réponse honnête : une friteuse à panier ne peut pas faire {OVEN_F}°F, et le temps doit compenser la différence.',
      failureHeading: 'L’échec typique à 450°F : dessus brûlé, mauvais temps',
      failureBody:
        'Deux choses tournent mal. La première, c’est le temps. Un tableau qui affiche une température de panier impossible réduit aussi le temps comme si cette chaleur existait, et l’aliment sort pâle et pas assez cuit. Comme la température reste ici à {CEILING}°F, ce convertisseur rend une partie de la réduction : une recette générale gagne environ {PCT} % du temps de four, et non la part habituelle. La seconde, c’est la surface. Au maximum, la résistance chauffe à plein à quelques centimètres des aliments : ce qui est haut brûle sur le dessus, le fromage et la chapelure brûlent avant que le fond croustille, et un papier mal tenu peut toucher la résistance. Faites des pizzas et des pains plats fins, ajoutez le fromage dans les dernières minutes s’il dore trop tôt, et coupez le papier à la taille du fond du panier.',
      workedExampleHeading: 'Exemple concret',
      workedExampleTemplate:
        'Une recette de pizza indique {OVEN_F}°F pendant {EX_OVEN_MIN} minutes. Une friteuse à panier reste à {EX_F}°F ({EX_C}°C) et met donc {EX_MIN} minutes ; vérifiez le dessous à {EX_CHECK} minutes. Une friteuse type four peut monter à {EX_OS_F}°F, sous son propre plafond, et termine en {EX_OS_MIN} minutes. Ici, le panier est le plus lent des deux parce qu’il est le moins chaud, à l’inverse de ce qui se passe aux températures plus basses.',
      styleHeading: '450°F dans une friteuse type four',
      styleBody:
        'Les friteuses type four atteignent généralement {OS_CEILING}°F : {OVEN_F}°F s’y convertit normalement, en {OS_F}°F ({OS_C}°C) avec environ {OS_PCT} % de temps en moins pour une recette générale. Si vous avez les deux types, ou si vous hésitez entre eux, c’est à cette température que la différence se voit. Pour la pizza, les pains plats et tout ce que vous voulez bien grillé, le type four est le meilleur outil. Une friteuse à panier fait quand même de bonnes pizzas et de bonnes pommes de terre ; il lui faut seulement les minutes en plus que le convertisseur ajoute. En °C, la recette indique {OVEN_C}°C et le réglage panier est {AF_C}°C.',
      faqs: [
        {
          q: 'Combien font {OVEN_F}°F dans une friteuse à air ?',
          a: 'Dans une friteuse à panier, {AF_F}°F ({AF_C}°C) — son maximum — avec environ {PCT} % de temps en moins. Dans une friteuse type four, {OS_F}°F avec environ {OS_PCT} % de temps en moins. Tous les aliments sont plafonnés en panier.',
        },
        {
          q: 'Combien de degrés Celsius font {OVEN_F}°F pour une friteuse à air ?',
          a: '{OVEN_F}°F font {OVEN_C}°C, soit le gas mark {OVEN_GAS}. Une friteuse à panier plafonne à {AF_C}°C : réglez cette valeur et utilisez le temps converti.',
        },
        {
          q: 'Pourquoi ne pas retirer 25°F et régler le résultat ?',
          a: 'Parce qu’une friteuse à panier ne l’atteint pas. Le bouton s’arrête à {CEILING}°F : l’aliment cuit moins chaud que ce que le tableau supposait, alors que le temps a été réduit en entier. Réglez {AF_F}°F et utilisez le temps plus long donné par le convertisseur.',
        },
        {
          q: 'Peut-on faire une pizza en friteuse à partir d’une recette à {OVEN_F}°F ?',
          a: 'Oui. Prenez une pizza qui tient à plat, réglez {EX_F}°F sur une friteuse à panier et, pour une recette de {EX_OVEN_MIN} minutes, vérifiez le dessous à {EX_CHECK} minutes. Ajoutez le fromage en cours de cuisson si le dessus dore avant que la pâte croustille.',
        },
        {
          q: 'Est-il sûr d’utiliser une friteuse à sa température maximale ?',
          a: 'Oui, elle est conçue pour cela. Posez-la sur une surface résistante à la chaleur avec de l’espace derrière la sortie d’air, ne couvrez jamais tout le panier d’aluminium ou de papier, et videz la graisse du tiroir pour éviter la fumée.',
        },
      ],
    },
  },
};

export default tempLanding;

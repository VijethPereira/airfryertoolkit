import type { Dictionary } from '../../types';

const tempLanding: Dictionary['tempLanding'] = {
  backLink: 'Todas las herramientas',
  pageTag: 'Temperatura del horno',
  answerTemplate: 'Horno a {OVEN_F}°F = {AF_F}°F ({AF_C}°C) en una freidora de aire de cesta, con un {PCT}% menos de tiempo.',
  answerCappedTemplate:
    'Horno a {OVEN_F}°F = {AF_F}°F ({AF_C}°C) en una freidora de aire de cesta — su máximo de {CEILING}°F — con un {PCT}% menos de tiempo.',
  answerOvenStyleTemplate: 'Freidora tipo horno: {OS_F}°F ({OS_C}°C), con un {OS_PCT}% menos de tiempo.',
  tableHeading: 'Cada alimento a {OVEN_F}°F',
  tableIntro:
    'El ajuste depende del alimento, así que un solo número nunca es la respuesta completa. Cada celda indica la temperatura de la freidora, los °C, el nivel de gas y la parte del tiempo de horno que te ahorras.',
  tableHeaders: { food: 'Alimento', basket: 'Cesta', ovenStyle: 'Tipo horno' },
  timeLessTemplate: '{PCT}% menos tiempo',
  cappedCell: 'Al máximo',
  cappedFootnote:
    'Al máximo: la temperatura convertida supera lo que alcanza el aparato ({CEILING}°F en cesta, {OS_CEILING}°F tipo horno), así que se mantiene en el máximo y se devuelve parte del tiempo recortado.',
  neighboursHeading: 'Temperaturas cercanas',
  neighbourLinkTemplate: 'Horno a {OVEN_F}°F en freidora de aire',
  relatedFlagshipLink: 'Conversor de horno a freidora de aire (cualquier temperatura)',
  relatedChartLink: 'Tabla de conversión imprimible',
  relatedFrozenLink: 'Modo congelados (instrucciones del envase)',
  faqHeading: 'Preguntas frecuentes',
  pages: {
    350: {
      metaTitle: '350°F (175°C) del horno a la freidora de aire: temperatura y tiempo',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) en el horno son {AF_F}°F ({AF_C}°C) en una freidora de aire de cesta, con un {PCT}% menos de tiempo. Tabla por alimento para bizcochos, guisos al horno y pollo, y conversor en vivo.',
      metaKeywords: '350 grados freidora de aire, 175 grados freidora de aire, 350f a c freidora de aire, horno 180 grados a freidora de aire',
      heading: 'Horno a {OVEN_F}°F ({OVEN_C}°C) en freidora de aire',
      subDesc:
        'La temperatura más habitual en repostería y platos al horno. El conversor ya está a {OVEN_F}°F: cambia el tiempo y el alimento para obtener tu ajuste exacto.',
      recipesHeading: 'Qué recetas usan 350°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, nivel de gas {OVEN_GAS}) es la temperatura por defecto para todo lo que tiene que cuajar por dentro antes de que se oscurezca por fuera: magdalenas, panes rápidos, brownies, galletas, tarta de queso, pastel de carne, pasta gratinada y casi todos los guisos al horno. También es donde acaban las recetas antiguas cuando quien las escribió no estaba seguro, así que muchas recetas de pollo y cerdo piden {OVEN_F}°F durante una hora cuando dorarían mejor más calientes. Las recetas de esta temperatura son las que más sufren cuando se trata la freidora como un horno pequeño. Una regla fija las convierte todas en {AF_F}°F, pero la repostería y los guisos reciben un recorte menor: una masa densa o una fuente honda necesitan que el calor llegue al centro, y el número más suave evita que la corteza se forme primero.',
      failureHeading: 'El fallo típico a 350°F: hecho por fuera, crudo por dentro',
      failureBody:
        'A esta temperatura el problema no es quemar, sino la velocidad en la superficie. El ventilador sopla directamente sobre la parte de arriba de una magdalena o un bizcocho, que se dora y hace costra mientras el centro sigue líquido. El resultado es una cúpula agrietada sobre un centro gomoso, y añadir tiempo solo oscurece más la superficie. Hay tres soluciones. Usa un molde menos hondo que el de la receta, para que el centro tenga menos distancia que recorrer. Cubre la parte de arriba con papel de aluminio suelto durante la primera mitad, metiendo los bordes bajo el molde para que el aire no lo levante. Y comprueba el centro con un palillo en el momento indicado, en lugar de fiarte del color. El papel de horno y el aluminio deben quedar sujetos por la comida: una hoja suelta puede levantarse hasta la resistencia a cualquier temperatura.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Una receta de magdalenas pide {OVEN_F}°F durante {EX_OVEN_MIN} minutos. La repostería tiene uno de los recortes más pequeños de la tabla, así que una freidora de cesta la hace a {EX_F}°F ({EX_C}°C) durante {EX_MIN} minutos, y conviene pinchar con un palillo a los {EX_CHECK} minutos. Un aparato tipo horno sopla menos directamente sobre la superficie, así que necesita {EX_OS_F}°F durante {EX_OS_MIN} minutos. Hornea en cápsulas de silicona o de papel dentro de la cesta, llenas hasta la mitad y no hasta el borde.',
      styleHeading: 'Pasar 350°F a °C y nivel de gas',
      styleBody:
        '{OVEN_F}°F son {OVEN_C}°C redondeando a cinco, que es como lo imprimen la mayoría de recetas europeas, aunque muchas lo dejan en 180°C; en el Reino Unido es el nivel de gas {OVEN_GAS}. En la freidora el ajuste general es {AF_F}°F, o {AF_C}°C, nivel de gas {AF_GAS} si comparas con una receta británica. Muchas freidoras vendidas en Europa suben de 10 en 10°C y no de 5 en 5. Si la tuya es así, redondea hacia abajo para bizcochos y guisos y hacia arriba para el pollo: lo denso queda a salvo de una corteza oscura y el pollo gana color. El conversor acepta °C directamente si tu receta venía así.',
      faqs: [
        {
          q: '¿A cuánto equivalen {OVEN_F}°F en una freidora de aire?',
          a: 'Para una receta general, {AF_F}°F ({AF_C}°C) en una freidora de cesta con un {PCT}% menos de tiempo, o {OS_F}°F en un aparato tipo horno. Bizcochos, guisos, filetes y pescado reciben un recorte menor; la tabla de arriba muestra cada alimento.',
        },
        {
          q: '¿Cuántos grados Celsius son {OVEN_F}°F en la freidora de aire?',
          a: '{OVEN_F}°F son {OVEN_C}°C. Convertidos para una freidora de cesta quedan en {AF_C}°C. Si tu freidora solo muestra °C, introduce la receta en °C en el conversor y hará los dos pasos a la vez.',
        },
        {
          q: '¿Cuánto se acorta el tiempo en la freidora a {OVEN_F}°F?',
          a: 'Un {PCT}% para la mayoría de alimentos en una freidora de cesta. Las patatas fritas y el beicon ahorran más; bizcochos y guisos, menos. La primera vez que hagas una receta, comprueba en el momento que indica el conversor en vez de esperar al final, porque el tamaño de la cesta y la potencia varían.',
        },
        {
          q: '¿Puedo hacer un bizcocho en la freidora a {OVEN_F}°F?',
          a: 'Sí, pero usa la temperatura convertida y no {OVEN_F}°F, con un molde que deje espacio alrededor para el aire. Cubre la parte de arriba con aluminio suelto si se dora antes de que el palillo salga limpio. Un bizcocho de más de unos 5 cm de alto queda mejor en el horno.',
        },
        {
          q: '¿Por qué no restar simplemente 25°F a {OVEN_F}°F?',
          a: 'Porque solo funciona para algunos alimentos. Restar 25°F va bien para el pollo y las recetas generales, pero las masas densas y los guisos hondos necesitan que el calor llegue al centro y reciben un recorte menor: es la diferencia entre un centro cuajado y uno crudo.',
        },
      ],
    },
    375: {
      metaTitle: '375°F (190°C) a freidora de aire: temperatura y tiempo convertidos',
      metaDescription:
        '¿Receta de horno a {OVEN_F}°F ({OVEN_C}°C)? Usa {AF_F}°F ({AF_C}°C) en una freidora de cesta, con un {PCT}% menos de tiempo. Tabla por alimento para muslos de pollo, chuletas, hojaldre y más, con conversor en vivo.',
      metaKeywords: '375 grados freidora de aire, 190 grados freidora de aire, 375f a c freidora de aire, horno 190 a freidora de aire',
      heading: 'Horno a {OVEN_F}°F ({OVEN_C}°C) en freidora de aire',
      subDesc:
        'La temperatura de las piezas de pollo, las chuletas y el hojaldre. El conversor está a {OVEN_F}°F; cambia el tiempo y el alimento según tu receta.',
      recipesHeading: 'Qué recetas usan 375°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, nivel de gas {OVEN_GAS}) es la temperatura de trabajo para lo que tiene que dorarse y hacerse por dentro al mismo ritmo. Muslos y contramuslos de pollo con hueso, chuletas de cerdo, albóndigas, salchichas, pimientos rellenos, hojaldre, empanadillas y bandejas de pollo con verduras están aquí. Da color sin el humo que aparece más arriba y está cerca de las temperaturas a las que se escriben las recetas propias de freidora, así que es la más fácil de convertir. Una receta general baja a {AF_F}°F. El recorte es el mismo que a temperaturas más bajas, pero la comida llega al final en otro estado: a este calor una pieza de pollo está dorada por fuera mucho antes de que su centro esté hecho, así que la comprobación importa más que el reloj.',
      failureHeading: 'El fallo típico a 375°F: piel dorada, hueso poco hecho',
      failureBody:
        'El pollo con hueso es la trampa. La piel y la parte fina del muslo toman color rápido con el aire en movimiento, así que la pieza parece lista mientras la carne pegada al hueso sigue rosada. Los contramuslos perdonan porque siguen jugosos bastante por encima de 165°F (74°C), y por eso mucha gente los lleva a 175–185°F; la pechuga no, y se seca enseguida al pasar de 165°F. Coloca las piezas con la piel hacia arriba y la parte más gruesa hacia el borde de la cesta, donde el aire corre más, y dales la vuelta una vez a mitad. Con el hojaldre la misma velocidad juega en contra: la parte de arriba sube y se dora antes de que se hagan las capas de abajo. Ponlo en la bandeja más baja de un aparato tipo horno, o sobre un papel perforado para que el calor llegue a la base.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Una receta asa contramuslos de pollo con hueso a {OVEN_F}°F durante {EX_OVEN_MIN} minutos. En una freidora de cesta pasa a {EX_F}°F ({EX_C}°C) durante {EX_MIN} minutos; empieza a comprobar el más grueso a los {EX_CHECK} minutos y sigue hasta que marque al menos 165°F junto al hueso. En una freidora tipo horno, que se parece más a un pequeño horno de convección, son {EX_OS_F}°F durante {EX_OS_MIN} minutos. Dales la vuelta una vez a mitad de cocción en los dos tipos.',
      styleHeading: 'Cesta o tipo horno a 375°F',
      styleBody:
        'Aquí los dos tipos solo se separan unos grados — {AF_F}°F en cesta, {OS_F}°F tipo horno — pero el tiempo cambia más: un {PCT}% menos que el horno en una cesta y un {OS_PCT}% menos en un aparato tipo horno. La cesta mueve el aire más rápido alrededor de una carga pequeña y termina antes; el tipo horno reparte la comida en bandejas y cocina más como un horno con ventilador. Si el tuyo tiene dos bandejas, cámbialas a mitad, porque la más cercana a la resistencia dora más. Precalienta {PREHEAT} minutos en una cesta o {OS_PREHEAT} en un tipo horno. {OVEN_F}°F son {OVEN_C}°C, y el conversor acepta las dos unidades.',
      faqs: [
        {
          q: '¿A cuánto equivalen {OVEN_F}°F en una freidora de aire?',
          a: 'Normalmente a {AF_F}°F ({AF_C}°C) en una freidora de cesta, con un {PCT}% menos de tiempo que en el horno. Una freidora tipo horno necesita {OS_F}°F. Filetes, pescado y repostería se recortan menos; mira la tabla para cada alimento.',
        },
        {
          q: '¿Cuántos °C son {OVEN_F}°F y qué pongo en la freidora?',
          a: '{OVEN_F}°F son {OVEN_C}°C, la cifra que suelen imprimir las recetas y envases europeos. En una freidora de cesta pon {AF_C}°C. Si tu mando va de 10 en 10°C, redondea hacia arriba para el pollo y hacia abajo para el hojaldre.',
        },
        {
          q: '¿Cuánto tardan los contramuslos de pollo en la freidora con una receta a {OVEN_F}°F?',
          a: 'No pongas {OVEN_F}°F: pon {EX_F}°F. Los contramuslos con hueso que tardan {EX_OVEN_MIN} minutos en el horno necesitan unos {EX_MIN} en una freidora de cesta. Confirma siempre con un termómetro: al menos 165°F junto al hueso.',
        },
        {
          q: '¿Hay que precalentar la freidora para una receta a {OVEN_F}°F?',
          a: 'Un precalentado corto — {PREHEAT} minutos en cesta, {OS_PREHEAT} en tipo horno — ayuda a que el hojaldre suba y la piel quede crujiente. En albóndigas y pimientos rellenos apenas cambia nada; mejor añade un minuto al tiempo.',
        },
        {
          q: '¿Puedo hacer una cena completa de bandeja con una receta a {OVEN_F}°F?',
          a: 'Sí, por tandas o en las dos bandejas de un aparato tipo horno. Empieza por el pollo y añade las verduras en la última parte del tiempo, porque la verdura troceada se hace antes que la carne con hueso con el mismo ajuste.',
        },
      ],
    },
    400: {
      metaTitle: '400°F (200°C) del horno a la freidora de aire, y 400°F a °C',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) en el horno = {AF_F}°F ({AF_C}°C) en una freidora de cesta, con un {PCT}% menos de tiempo. Verduras asadas, patatas y pechuga de pollo: tabla por alimento y conversor en vivo.',
      metaKeywords: '400 grados freidora de aire, 200 grados freidora de aire, 400f a c freidora de aire, horno 200 grados a freidora de aire',
      heading: 'Horno a {OVEN_F}°F ({OVEN_C}°C) en freidora de aire',
      subDesc:
        'La temperatura de asar, y la que más a menudo aparece en °C en un envase europeo. El conversor empieza en {OVEN_F}°F: pon tu tiempo y tu alimento.',
      recipesHeading: 'Qué recetas usan 400°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, nivel de gas {OVEN_GAS}) es el ajuste clásico para asar. Las recetas lo usan para verduras, patatas en gajos, pechuga de pollo, salchichas, filetes de salmón, garbanzos tostados, patatas fritas caseras y todo lo que termina con un borde crujiente. Una freidora de aire es, en el fondo, un asador, así que aquí es donde más claramente gana al horno: una receta general baja a {AF_F}°F, y las patatas fritas tienen el mayor recorte de tiempo de la tabla, con las verduras asadas justo detrás, porque tienen mucha superficie y poco grosor. Fíjate en que la conversión nunca pide a la cesta que llegue a {OVEN_F}°F. La freidora consigue el mismo dorado un {PCT}% más rápido con un ajuste menor, lo que deja margen por debajo del máximo de {CEILING}°F que tienen casi todas las freidoras de cesta.',
      failureHeading: 'El fallo típico a 400°F: cocido al vapor, no asado',
      failureBody:
        'Mucho calor en un espacio pequeño solo funciona si la humedad puede salir. Las verduras troceadas y las patatas sueltan agua al calentarse, y en una cesta llena ese vapor se queda alrededor de la comida, así que en vez de dorarse se ablanda y queda pálida. Es la queja más común sobre las verduras en freidora, y más tiempo no lo arregla. Cocina en una sola capa con huecos, o en dos tandas; la segunda suele ir uno o dos minutos más rápida porque la cesta ya está caliente. Seca bien las verduras después de lavarlas, mézclalas con una cucharadita de aceite y no con una cucharada, y agita la cesta en el momento de comprobar para que las piezas de abajo suban al aire. La grasa que gotea de las salchichas o de la piel del pollo puede humear a este calor, así que vacía la bandeja entre tandas.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Una receta asa verduras variadas a {OVEN_F}°F durante {EX_OVEN_MIN} minutos. Una freidora de cesta lo hace a {EX_F}°F ({EX_C}°C) en {EX_MIN} minutos, agitando a los {EX_CHECK} minutos para mirar el color. Una freidora tipo horno necesita {EX_OS_F}°F durante {EX_OS_MIN} minutos; reparte las verduras en dos bandejas en vez de amontonarlas en una, y cámbialas a mitad.',
      styleHeading: '400°F a °C en una freidora de aire',
      styleBody:
        'La conversión exacta de {OVEN_F}°F es {OVEN_C_EXACT}°C, aquí redondeada a {OVEN_C}°C, mientras que las recetas y los hornos europeos suelen dejarla en 200°C. Esa pequeña diferencia no importa en un asado. Lo que importa es que el ajuste de la freidora es más bajo: {AF_C}°C en cesta, {OS_C}°C en tipo horno. Si tu freidora solo sube de 10 en 10°C, elige el paso más bajo para patatas y verduras, que doran bien de todos modos, y el más alto para la piel del pollo. Si introduces la receta en °C en el conversor, obtienes los dos números a la vez.',
      faqs: [
        {
          q: '¿A cuánto equivalen {OVEN_F}°F en una freidora de aire?',
          a: 'A unos {AF_F}°F ({AF_C}°C) en una freidora de cesta, con un {PCT}% menos de tiempo. En un aparato tipo horno, {OS_F}°F. Las patatas fritas y el beicon ahorran más tiempo; la repostería y los guisos reciben el recorte más pequeño.',
        },
        {
          q: '{OVEN_F}°F a °C: ¿qué pongo en la freidora?',
          a: 'La temperatura de la receta es {OVEN_C}°C, que a menudo se imprime como 200°C. Pon una freidora de cesta a {AF_C}°C o una tipo horno a {OS_C}°C, y recorta el tiempo cerca de un {PCT}%.',
        },
        {
          q: '¿Mi freidora llega a {OVEN_F}°F?',
          a: 'Casi todas las de cesta llegan a {CEILING}°F y las tipo horno a {OS_CEILING}°F, así que sí, pero rara vez hace falta. Una receta de horno a {OVEN_F}°F pasa a un ajuste menor porque la freidora dora más rápido; pon {OVEN_F}°F solo cuando lo pida una receta propia de freidora.',
        },
        {
          q: '¿Cuánto tardan las patatas asadas en la freidora con una receta a {OVEN_F}°F?',
          a: 'Más o menos una cuarta parte menos que en el horno para patatas troceadas y otras verduras, a {AF_F}°F. Los trozos se hacen antes que las patatas pequeñas enteras. Agita dos veces y guíate por el color y por un cuchillo en la pieza más gruesa.',
        },
        {
          q: '¿Por qué mis verduras salen blandas en la freidora a {AF_F}°F?',
          a: 'Casi siempre por llenar demasiado la cesta. El vapor de las verduras no puede salir y se cuecen en él. Usa una sola capa, sécalas bien y pon menos aceite; subir la temperatura no salva una cesta llena.',
        },
      ],
    },
    425: {
      metaTitle: '425°F (220°C) a freidora de aire: ajuste, tiempo y límite máximo',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) en el horno = {AF_F}°F ({AF_C}°C) en una freidora de cesta, justo en su máximo. Mira qué alimentos quedan al límite, cuánto tiempo se devuelve, y convierte en vivo.',
      metaKeywords: '425 grados freidora de aire, 220 grados freidora de aire, 425f a c freidora de aire, horno 220 grados a freidora de aire',
      heading: 'Horno a {OVEN_F}°F ({OVEN_C}°C) en freidora de aire',
      subDesc:
        'La temperatura del crujiente, y la primera en la que una freidora de cesta toca su techo. El conversor está a {OVEN_F}°F; elige el alimento para ver si queda al máximo.',
      recipesHeading: 'Qué recetas usan 425°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, nivel de gas {OVEN_GAS}) es donde van las recetas que buscan crujiente: alitas, patatas asadas con borde quebradizo, salmón con la superficie firme, ñoquis en bandeja, picatostes y brócoli con las puntas tostadas. Las patatas y los nuggets congelados también lo piden a menudo, pero siguen otras reglas, así que usa el modo congelados para ellos. En el horno hace falta tanto calor para sacar rápido la humedad de la superficie. La freidora llega antes, así que una receta general pasa a {AF_F}°F, justo el techo de {CEILING}°F de una freidora de cesta típica. Todo lo que tiene el recorte normal cae en el techo y se convierte como siempre, pero filetes, pescado, repostería y guisos reciben un recorte menor, así que su temperatura convertida supera lo que alcanza la cesta. La tabla marca esas filas.',
      failureHeading: 'El fallo típico a 425°F: el techo',
      failureBody:
        'La mayoría de conversores restan e imprimen el resultado aunque sea una temperatura que tu freidora no puede alcanzar. A {OVEN_F}°F eso pasa con los alimentos de recorte suave: el cálculo pide más de {CEILING}°F, la cesta da {CEILING}°F, y la comida sale poco hecha porque el tiempo se recortó como si ese calor existiera. Este conversor fija la temperatura en el techo y devuelve parte del tiempo, así que las filas al máximo ahorran menos tiempo que las demás. El otro riesgo a este calor es el humo. La grasa de las alitas y de la piel del salmón gotea sobre una bandeja muy caliente: usa un aceite con punto de humo alto, añade las marinadas con azúcar o miel solo en los últimos minutos y vacía la bandeja entre tandas.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Una receta asa filetes de salmón a {OVEN_F}°F durante {EX_OVEN_MIN} minutos. El pescado recibe un recorte menor que la mayoría de alimentos, así que su temperatura convertida pasa del límite de la cesta y se queda en {EX_F}°F ({EX_C}°C), con el tiempo recortado solo hasta {EX_MIN} minutos. Comprueba a los {EX_CHECK} minutos: el salmón está hecho a 145°F (63°C) en la parte más gruesa, o cuando se separa en láminas. Una freidora tipo horno tiene un techo más alto, así que trabaja a los {EX_OS_F}°F completos durante {EX_OS_MIN} minutos.',
      styleHeading: 'Por qué el tipo horno es distinto a 425°F',
      styleBody:
        'Una freidora tipo horno suele llegar a {OS_CEILING}°F, así que a {OVEN_F}°F nada queda al máximo: una receta general va a {OS_F}°F con un {OS_PCT}% menos de tiempo, y los alimentos de recorte suave simplemente van más calientes. Las filas al máximo solo aparecen en la columna de cesta, así que comprueba qué tipo tienes antes de fiarte de cualquier tabla. El conversor usa {CEILING}°F para las de cesta y {OS_CEILING}°F para las tipo horno, los límites habituales; si tu mando se queda más bajo, cocina a su máximo y deja algo más de tiempo. En °C la receta es {OVEN_C}°C y una freidora de cesta se pone a {AF_C}°C.',
      faqs: [
        {
          q: '¿A cuánto equivalen {OVEN_F}°F en una freidora de aire?',
          a: 'A {AF_F}°F ({AF_C}°C) en una freidora de cesta para la mayoría de alimentos — el máximo de la cesta — con un {PCT}% menos de tiempo. Un aparato tipo horno usa {OS_F}°F. Filetes, pescado, bizcochos y guisos quedan al máximo en cesta y conservan más tiempo.',
        },
        {
          q: '¿Cuántos grados Celsius son {OVEN_F}°F?',
          a: '{OVEN_F}°F son {OVEN_C}°C, o nivel de gas {OVEN_GAS}. Una freidora de cesta no llega tan alto, así que pon {AF_C}°C y usa el tiempo convertido.',
        },
        {
          q: 'Mi freidora solo llega a {CEILING}°F. ¿Puedo hacer una receta a {OVEN_F}°F?',
          a: 'Sí. Para la mayoría de alimentos el ajuste convertido ya es {CEILING}°F. Para los que necesitarían más, cocina a {CEILING}°F y deja un poco más de tiempo; la tabla muestra cuánto menos tiempo ahorra cada alimento cuando queda al máximo.',
        },
        {
          q: '¿Cuánto tardan las alitas en la freidora con una receta a {OVEN_F}°F?',
          a: 'A {AF_F}°F las alitas ahorran alrededor de una quinta parte del tiempo de horno. Sécalas bien, deja espacio entre ellas, agita a mitad y cocina hasta que la piel cruja y la carne llegue al menos a 165°F (74°C).',
        },
        {
          q: '¿Por qué humea mi freidora a temperaturas altas?',
          a: 'La grasa y las marinadas con azúcar gotean sobre la bandeja caliente y se queman. Usa un aceite con punto de humo alto, añade los glaseados pegajosos al final y vacía o limpia la bandeja entre tandas.',
        },
      ],
    },
    450: {
      metaTitle: '450°F (230°C) a freidora de aire: qué poner cuando la cesta llega al máximo',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) supera el límite de {CEILING}°F de una freidora de cesta. Pon {AF_F}°F y ahorra un {PCT}% del tiempo, no el recorte habitual: tabla por alimento y conversor en vivo.',
      metaKeywords: '450 grados freidora de aire, 230 grados freidora de aire, 450f a c freidora de aire, horno 230 grados a freidora de aire',
      heading: 'Horno a {OVEN_F}°F ({OVEN_C}°C) en freidora de aire',
      subDesc:
        'Más calor del que da una freidora de cesta. El conversor empieza en {OVEN_F}°F y muestra el ajuste al máximo con el tiempo devuelto, algo que casi ninguna tabla incluye.',
      recipesHeading: 'Qué recetas usan 450°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, nivel de gas {OVEN_GAS}) es lo más alto de la cocina doméstica: pizza sobre piedra, panes planos, tomates y pimientos ampollados, patatas aplastadas, patatas hasselback, espárragos asados rápido, y filetes o chuletas sellados al final de un sellado inverso. Las recetas lo piden cuando el exterior tiene que tomar color antes de que el interior se pase. Una regla fija resta 25°F y se queda ahí, pero el resultado no es un ajuste que tenga una freidora de cesta. Todos los alimentos de la tabla quedan al máximo de la cesta, {CEILING}°F, así que la columna de cesta muestra la misma temperatura en cada fila y solo cambia el tiempo. Esa es la respuesta honesta: una freidora de cesta no puede hacer {OVEN_F}°F, y el tiempo tiene que compensar la diferencia.',
      failureHeading: 'El fallo típico a 450°F: arriba quemado, tiempo equivocado',
      failureBody:
        'Fallan dos cosas. La primera es el tiempo. Una tabla que imprime una temperatura de cesta inalcanzable también recorta el tiempo como si ese calor existiera, y la comida sale pálida y poco hecha. Como aquí la temperatura se fija en {CEILING}°F, este conversor devuelve parte del recorte: una receta general ahorra un {PCT}% del tiempo de horno y no lo habitual. La segunda es la superficie. Al máximo, la resistencia trabaja a tope a pocos centímetros de la comida, así que lo alto se quema por arriba, el queso y el pan rallado se queman antes de que la base cruja, y el papel que no está sujeto puede tocar la resistencia. Haz la pizza y los panes planos finos, añade el queso en los últimos minutos si se dora pronto, y recorta el papel al tamaño de la base de la cesta.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Una receta de pizza pide {OVEN_F}°F durante {EX_OVEN_MIN} minutos. Una freidora de cesta se queda en {EX_F}°F ({EX_C}°C), así que tarda {EX_MIN} minutos; mira la base a los {EX_CHECK} minutos. Una freidora tipo horno puede ir a {EX_OS_F}°F, por debajo de su propio techo, y termina en {EX_OS_MIN} minutos. Aquí la cesta es la más lenta de las dos porque es la más fría, justo al revés que a temperaturas más bajas.',
      styleHeading: '450°F en una freidora tipo horno',
      styleBody:
        'Las freidoras tipo horno suelen llegar a {OS_CEILING}°F, así que ahí {OVEN_F}°F se convierte con normalidad: {OS_F}°F ({OS_C}°C) con un {OS_PCT}% menos de tiempo para una receta general. Si tienes los dos tipos, o estás eligiendo, esta es la temperatura donde se nota la diferencia. Para pizza, panes planos y todo lo que quieras tostado, el tipo horno es la mejor herramienta. Una freidora de cesta sigue haciendo buena pizza y buenas patatas; solo necesita los minutos extra que añade el conversor. En °C la receta dice {OVEN_C}°C, y el ajuste de cesta es {AF_C}°C.',
      faqs: [
        {
          q: '¿A cuánto equivalen {OVEN_F}°F en una freidora de aire?',
          a: 'En una freidora de cesta, {AF_F}°F ({AF_C}°C) — su máximo — con un {PCT}% menos de tiempo. En una tipo horno, {OS_F}°F con un {OS_PCT}% menos de tiempo. Todos los alimentos quedan al máximo en una cesta.',
        },
        {
          q: '¿Cuántos grados Celsius son {OVEN_F}°F en la freidora de aire?',
          a: '{OVEN_F}°F son {OVEN_C}°C, o nivel de gas {OVEN_GAS}. Una freidora de cesta se queda en {AF_C}°C, así que pon eso y usa el tiempo convertido.',
        },
        {
          q: '¿Por qué no restar 25°F y poner el resultado?',
          a: 'Porque una freidora de cesta no llega. El mando se para en {CEILING}°F, así que la comida se hace más fría de lo que suponía la tabla mientras el tiempo se recortaba entero. Pon {AF_F}°F y usa el tiempo más largo que da el conversor.',
        },
        {
          q: '¿Puedo hacer pizza en la freidora con una receta a {OVEN_F}°F?',
          a: 'Sí. Usa una pizza que quepa plana, pon {EX_F}°F en una freidora de cesta y, para una receta de {EX_OVEN_MIN} minutos, mira la base a los {EX_CHECK} minutos. Añade el queso a mitad si la parte de arriba se dora antes de que la masa cruja.',
        },
        {
          q: '¿Es seguro usar la freidora a su temperatura máxima?',
          a: 'Sí, está hecha para eso. Ponla sobre una superficie resistente al calor con espacio detrás de la salida de aire, no tapes nunca la cesta entera con aluminio o papel, y vacía la grasa de la bandeja para que no humee.',
        },
      ],
    },
  },
};

export default tempLanding;

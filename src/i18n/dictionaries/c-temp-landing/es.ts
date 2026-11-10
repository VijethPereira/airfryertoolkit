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
  backLink: 'Todas las herramientas',
  pageTag: 'Temperatura del horno',
  answerTemplate: '{OVEN_C}°C horno = {AF_C}°C ({AF_F}°F) en freidora de aire tipo cesta, aproximadamente {PCT}% menos tiempo.',
  answerCappedTemplate: '{OVEN_C}°C horno = {AF_C}°C ({AF_F}°F) en freidora de aire tipo cesta — su máximo de {CEILING}°F — aproximadamente {PCT}% menos tiempo.',
  answerFanTemplate: 'Ventilador {FAN_C}°C horno = {FAN_AF_C}°C ({FAN_AF_F}°F) en freidora de aire tipo cesta, aproximadamente {FAN_PCT}% menos tiempo.',
  answerFanCappedTemplate: 'Ventilador {FAN_C}°C horno = {FAN_AF_C}°C ({FAN_AF_F}°F) en freidora de aire tipo cesta — su máximo de {CEILING}°F — aproximadamente {FAN_PCT}% menos tiempo.',
  answerOvenStyleTemplate: 'Freidora de aire tipo horno: {OS_C}°C ({OS_F}°F), aproximadamente {OS_PCT}% menos tiempo.',
  tableHeading: 'Cada alimento a {OVEN_C}°C (convencional) / {FAN_C}°C ventilador',
  tableIntro: 'Las recetas UK/UE imprimen tres cifras: °C convencional, °C ventilador y marca de gas. Cada columna da la temperatura de la freidora (°C/°F/marca de gas) y la fracción del tiempo de horno que ahorra.',
  tableHeaders: { food: 'Alimento', conventional: 'Convencional °C', fan: 'Ventilador °C', basket: 'Cesta', ovenStyle: 'Tipo horno' },
  timeLessTemplate: '{PCT}% menos tiempo',
  cappedCell: 'Limitado',
  cappedFootnote: 'Limitado: la temperatura convertida supera lo que la unidad puede alcanzar ({CEILING}°F cesta, {OS_CEILING}°F tipo horno), así que se mantiene en el máximo y se devuelve parte del recorte de tiempo.',
  neighboursHeading: 'Temperaturas cercanas',
  neighbourLinkTemplate: '{OVEN_C}°C horno a freidora de aire',
  relatedFlagshipLink: 'Convertidor horno a freidora de aire (cualquier temperatura)',
  relatedChartLink: 'Tabla de conversión imprimible',
  relatedFrozenLink: 'Modo alimentos congelados (instrucciones del envase)',
  relatedConvectionLink: 'Horno de convección a freidora de aire',
  relatedNearestFLink: '{F}°F horno a freidora de aire',
  faqHeading: 'Preguntas frecuentes',
  widgetHeading: 'Convierte una receta de horno para tu freidora de aire',
  widgetNote: 'Cambia entre entradas convencional, ventilador y marca de gas. El convertidor usa el motor principal para convencional, el de convección para ventilador, y mapea marca de gas a °C convencional.',
  pages: {
    160: {
      metaTitle: '{OVEN_C}°C Horno a Freidora de Aire — Temperatura y Tiempo',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, marca de gas {OVEN_MARK}) en el horno son {AF_C}°C ({AF_F}°F) en freidora de aire tipo cesta con aproximadamente {PCT}% menos tiempo. Tabla por alimento para pasteles, natillas y cocciones lentas, con convertidor en vivo.',
      metaKeywords: '160c a freidora de aire, 160c horno a freidora de aire, 160 celsius freidora de aire, marca de gas {OVEN_MARK} freidora de aire',
      heading: '{OVEN_C}°C horno a freidora de aire',
      subDesc: 'Temperatura suave de horneado para natillas, merengues y platos de cocción lenta. El convertidor abajo ya está en {OVEN_C}°C convencional — cambie a ventilador o marca de gas si su receta los usa.',
      recipesHeading: 'Qué recetas usan 160°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, marca de gas {OVEN_MARK}) es el calor bajo y suave para lo que debe cuajar despacio sin dorar: natillas al horno, cheesecakes, merengues, terrinas y tomates asados lentamente. También es la temperatura para recalentar sobras delicadas en el horno. Una receta general convierte a {AF_C}°C en freidora de aire tipo cesta. El recorte es menor que a temperaturas más altas porque estos alimentos necesitan que el calor llegue al centro suavemente.',
      failureHeading: 'El fallo a 160°C: centro sin cuajar, superficie dorada',
      failureBody: 'A esta temperatura el riesgo no es quemar — es que el aire en movimiento dora la superficie antes de que el centro cuaje. Un cheesecake o natilla se agrieta y abomba mientras el centro sigue líquido. Use baño maría si la receta lo pide, cubra ligeramente con papel de aluminio y compruebe el centro en el momento de control con un palillo o termómetro. En una freidora de cesta el ventilador está más cerca del alimento, así que la cubierta es esencial.',
      workedExampleHeading: 'Ejemplo resuelto (convencional)',
      workedExampleTemplate: 'Una receta de cheesecake dice {OVEN_C}°C durante {EX_OVEN_MIN} minutos. Las natillas al horno llevan un recorte pequeño, así que una freidora de cesta la hace a {EX_C}°C ({EX_F}°F) durante {EX_MIN} minutos; compruebe el centro a los {EX_CHECK} minutos. Una freidora tipo horno sopla menos directo sobre la superficie, así que usa {EX_OS_C}°C ({EX_OS_F}°F) durante {EX_OS_MIN} minutos. Hornee en molde desmontable sobre la placa crujiente, cubierto con papel de aluminio.',
      fanWorkedExampleHeading: 'Ejemplo resuelto (ventilador)',
      fanWorkedExampleTemplate: 'Si la receta da {FAN_C}°C ventilador, el mismo cheesecake convierte a {EX_FAN_C}°C ({EX_FAN_F}°F) en freidora de cesta durante {EX_FAN_MIN} minutos, control a los {EX_FAN_CHECK} minutos. Una freidora tipo horno usa {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) durante {EX_FAN_OS_MIN} minutos. La entrada de ventilador pasa por el motor de convección, que aplica un recorte más suave porque la receta ya está ajustada al ventilador.',
      styleHeading: 'Por qué la receta imprime tres temperaturas',
      styleBody: 'Las recetas UK/UE suelen escribir "{OVEN_C}°C / {FAN_C}°C ventilador / marca de gas {OVEN_MARK}". La cifra convencional es para horno sin ventilador; la de ventilador es unos {FAN_OFFSET_C}°C más baja porque el ventilador mueve el calor más rápido. La marca de gas {OVEN_MARK} es el ajuste del dial UK (~{OVEN_C}°C). Elija la que use su receta: convencional va por el motor principal, ventilador por el de convección, marca de gas mapea al °C convencional. El widget convertidor en esta página le permite cambiar entre ellas. Para envases de congelados (que imprimen un tiempo para convencional y ventilador), use el modo congelados — mantiene la temperatura y recorta {FROZEN_PCT}% el tiempo.',
      faqs: [
        { q: '¿Qué es 160°C en una freidora de aire?', a: 'Para una receta general, {AF_C}°C ({AF_F}°F) en freidora de cesta con aproximadamente {PCT}% menos tiempo, o {OS_C}°C en tipo horno. Natillas y cocciones lentas llevan un recorte menor; véase la tabla.' },
        { q: 'Mi receta dice 140°C ventilador — ¿es lo mismo que {OVEN_C}°C convencional?', a: 'Sí, es la convención UK: ventilador = convencional − {FAN_OFFSET_C}°C. Use la entrada de ventilador en esta página (o el convertidor de convección) para una receta de horno con ventilador; aplica un recorte más suave porque la receta ya está ajustada al ventilador.' },
        { q: '¿Qué marca de gas es {OVEN_C}°C?', a: 'marca de gas {OVEN_MARK}. El dial UK marca {OVEN_C}°C como gas 3.' },
        { q: '¿Puedo usar esto para un envase de congelados que dice 160°C?', a: 'No — los envases de congelados siguen otras reglas (mantienen la temperatura, recortan {FROZEN_PCT}% el tiempo). Use el modo congelados en este sitio; maneja correctamente temperaturas convencional y ventilador de envase.' },
        { q: '¿Por qué la columna de ventilador da distinta respuesta que la convencional?', a: 'Una receta de horno con ventilador ya está {FAN_OFFSET_C}°C por debajo de su equivalente convencional. El motor de convección aplica un recorte restante menor (0–15°F, 5–10% tiempo) porque el ventilador ya hizo parte del trabajo. El motor principal aplica el recorte completo (20–25°F, 20–30% tiempo).' },
      ],
    },
    180: {
      metaTitle: '{OVEN_C}°C Horno a Freidora de Aire — Temperatura y Tiempo',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, marca de gas {OVEN_MARK}) en el horno son {AF_C}°C ({AF_F}°F) en freidora de aire tipo cesta con aproximadamente {PCT}% menos tiempo. Tabla por alimento para pasteles, panes, pollo y pescado, con convertidor en vivo.',
      metaKeywords: '180c a freidora de aire, 180c horno a freidora de aire, 180 celsius freidora de aire, 180c ventilador a freidora de aire, marca de gas {OVEN_MARK} freidora de aire',
      heading: '{OVEN_C}°C horno a freidora de aire',
      subDesc: 'La temperatura más común de horneado y asado en recetas UK/UE. El convertidor abajo ya está en {OVEN_C}°C convencional — cambie a ventilador o marca de gas si su receta los usa.',
      recipesHeading: 'Qué recetas usan 180°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, marca de gas {OVEN_MARK}) es el estándar para bizcochos, panes rápidos, brownies, galletas, pollo asado, filetes de pescado y bandejas de horno. Es la temperatura a la que recurren las recetas cuando el autor no está seguro, así que muchos platos caen aquí. Una receta general convierte a {AF_C}°C en freidora de cesta. Los bizcochos llevan un recorte menor (masas densas necesitan calor para llegar al centro); pollo y pescado el recorte estándar.',
      failureHeading: 'El fallo a 180°C: bizcocho abombado, centro crudo',
      failureBody: 'El ventilador sopla directo sobre la superficie de un bizcocho o pan, que dora y forma costra mientras el centro sigue líquido. Resultado: superficie agrietada y abombada sobre centro gomoso. Tres cosas lo arreglan: use molde menos profundo que el que pide la receta, cubra la superficie ligeramente con papel de aluminio la primera mitad de la cocción (meta los bordes bajo el molde para que el ventilador no lo levante) y compruebe el centro con un palillo en el momento de control en vez de fiarse del color. Los moldes de papel deben quedar sujetos por la masa; una hoja suelta subirá a la resistencia.',
      workedExampleHeading: 'Ejemplo resuelto (convencional)',
      workedExampleTemplate: 'Una receta de bizcocho Victoria dice {OVEN_C}°C durante {EX_OVEN_MIN} minutos. Los bizcochos llevan un recorte menor, así que una freidora de cesta la hace a {EX_C}°C ({EX_F}°F) durante {EX_MIN} minutos; compruebe con palillo a los {EX_CHECK} minutos. Una freidora tipo horno usa {EX_OS_C}°C ({EX_OS_F}°F) durante {EX_OS_MIN} minutos. Use molde de 15–18 cm sobre la placa crujiente, lleno a la mitad.',
      fanWorkedExampleHeading: 'Ejemplo resuelto (ventilador)',
      fanWorkedExampleTemplate: 'Si la receta da {FAN_C}°C ventilador, el mismo bizcocho convierte a {EX_FAN_C}°C ({EX_FAN_F}°F) en freidora de cesta durante {EX_FAN_MIN} minutos, control a los {EX_FAN_CHECK} minutos. Una freidora tipo horno usa {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) durante {EX_FAN_OS_MIN} minutos.',
      styleHeading: 'Convencional vs ventilador a 180°C',
      styleBody: 'Las recetas UK/UE imprimen "{OVEN_C}°C / {FAN_C}°C ventilador / marca de gas {OVEN_MARK}". La cifra convencional va por el motor principal (recorte 20–25°F), la de ventilador por el de convección (recorte 0–15°F). La diferencia entre los dos resultados de freidora es el offset del ventilador: una receta de horno con ventilador ya va camino, así que el recorte restante es menor. El widget convertidor en esta página permite cambiar. Para envases de congelados, use el modo congelados — mantiene la temperatura y recorta {FROZEN_PCT}% tiempo.',
      faqs: [
        { q: '¿Qué es 180°C en una freidora de aire?', a: 'Para una receta general, {AF_C}°C ({AF_F}°F) en freidora de cesta con aproximadamente {PCT}% menos tiempo, o {OS_C}°C en tipo horno. Bizcochos y cazuelas llevan recorte menor; véase la tabla.' },
        { q: 'Mi receta dice 160°C ventilador — ¿es lo mismo que {OVEN_C}°C convencional?', a: 'Sí, convención UK: ventilador = convencional − {FAN_OFFSET_C}°C. Use la entrada de ventilador en esta página para receta de horno con ventilador; aplica recorte más suave.' },
        { q: '¿Qué marca de gas es {OVEN_C}°C?', a: 'marca de gas {OVEN_MARK}. El dial UK marca {OVEN_C}°C como gas 4.' },
        { q: '¿Puedo usar esto para un envase de congelados que dice 180°C?', a: 'No — los envases de congelados siguen otras reglas (mantienen la temperatura, recortan {FROZEN_PCT}% tiempo). Use el modo congelados.' },
        { q: '¿Por qué la columna de ventilador da distinta respuesta?', a: 'Una receta de horno con ventilador ya está {FAN_OFFSET_C}°C más baja. El motor de convección aplica un recorte restante menor (0–15°F, 5–10% tiempo) porque el ventilador ya hizo parte del trabajo.' },
      ],
    },
    200: {
      metaTitle: '{OVEN_C}°C Horno a Freidora de Aire — Temperatura y Tiempo',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, marca de gas {OVEN_MARK}) en el horno son {AF_C}°C ({AF_F}°F) en freidora de aire tipo cesta con aproximadamente {PCT}% menos tiempo. Tabla por alimento para verduras asadas, pechuga de pollo, patatas fritas, con convertidor en vivo.',
      metaKeywords: '200c a freidora de aire, 200c horno a freidora de aire, 200 celsius freidora de aire, 180c ventilador a freidora de aire, marca de gas {OVEN_MARK} freidora de aire',
      heading: '{OVEN_C}°C horno a freidora de aire',
      subDesc: 'La temperatura clásica de asado, y la que más a menudo se imprime en °C en envases europeos. El convertidor abajo ya está en {OVEN_C}°C convencional — cambie a ventilador o marca de gas si su receta los usa.',
      recipesHeading: 'Qué recetas usan 200°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, marca de gas {OVEN_MARK}) es el asado estándar para verduras, gajos de patata, pechuga de pollo, salchichas, salmón, patatas fritas caseras y todo lo que acaba con borde crujiente. Una freidora de aire es un asador de corazón, así que aquí es donde más claramente gana al horno: una receta general baja a {AF_C}°C, y las patatas fritas llevan el mayor recorte de tiempo de la tabla porque tienen mucha superficie y poca profundidad. Observe que la conversión nunca pide a la cesta alcanzar {OVEN_C}°C — la freidora consigue el mismo dorado aproximadamente {PCT}% más rápido a una temperatura menor.',
      failureHeading: 'El fallo a 200°C: vapor, no asado',
      failureBody: 'El calor alto en espacio pequeño solo funciona si la humedad puede escapar. Verduras y patatas cortadas sueltan agua al calentar, y en una cesta llena ese vapor rodea el alimento, así que en lugar de dorar se ablanda y pálida. Es la queja más común de verduras en freidora, y más tiempo no lo arregla. Cocine en una sola capa con huecos, o en dos tandas; la segunda suele ser un minuto o dos más rápida porque la cesta ya está caliente. Seque bien las verduras tras lavar, écheles una cucharadita de aceite en vez de una cucharada, y agite la cesta en el momento de control para que las piezas de abajo suban al aire.',
      workedExampleHeading: 'Ejemplo resuelto (convencional)',
      workedExampleTemplate: 'Una receta asa verduras mixtas a {OVEN_C}°C durante {EX_OVEN_MIN} minutos. Una freidora de cesta lo hace a {EX_C}°C ({EX_F}°F) en {EX_MIN} minutos, con agitado a los {EX_CHECK} minutos para ver el color. Una freidora tipo horno usa {EX_OS_C}°C ({EX_OS_F}°F) durante {EX_OS_MIN} minutos; extienda las verduras en dos bandejas e intercámbielas a mitad.',
      fanWorkedExampleHeading: 'Ejemplo resuelto (ventilador)',
      fanWorkedExampleTemplate: 'Si la receta da {FAN_C}°C ventilador, las mismas verduras convierten a {EX_FAN_C}°C ({EX_FAN_F}°F) en freidora de cesta durante {EX_FAN_MIN} minutos, agitado a los {EX_FAN_CHECK} minutos. Una freidora tipo horno usa {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) durante {EX_FAN_OS_MIN} minutos.',
      styleHeading: '200°C en °F y marca de gas',
      styleBody: '{OVEN_C}°C son {OVEN_F}°F (a menudo redondeado a 200°C en diales europeos) y marca de gas {OVEN_MARK}. El ajuste de freidora es {AF_C}°C en cesta, {OS_C}°C en tipo horno. Si su freidora solo salta de 10 en 10°C, elija el paso inferior para verduras y el superior para piel de pollo. Introducir la receta en °C en el convertidor da las dos cifras a la vez. Para envases de congelados, use el modo congelados.',
      faqs: [
        { q: '¿Qué es 200°C en una freidora de aire?', a: 'Aproximadamente {AF_C}°C ({AF_F}°F) en freidora de cesta, con aproximadamente {PCT}% menos tiempo. En tipo horno, {OS_C}°C. Patatas fritas y bacon ahorran más tiempo; bizcochos el recorte menor.' },
        { q: 'Mi receta dice 180°C ventilador — ¿es lo mismo que {OVEN_C}°C convencional?', a: 'Sí, ventilador = convencional − {FAN_OFFSET_C}°C. Use la entrada de ventilador en esta página para receta de horno con ventilador; aplica recorte más suave.' },
        { q: '¿Qué marca de gas es {OVEN_C}°C?', a: 'marca de gas {OVEN_MARK}. El dial UK marca {OVEN_C}°C como gas 6.' },
        { q: '¿Puedo usar esto para un envase de congelados que dice 200°C?', a: 'No — los envases de congelados siguen otras reglas (mantienen la temperatura, recortan {FROZEN_PCT}% tiempo). Use el modo congelados.' },
        { q: '¿Por qué mis verduras en freidora quedan blandas a {AF_C}°C?', a: 'Casi siempre por amontonamiento. El vapor de las verduras no puede escapar. Use una sola capa, séquelas bien, use menos aceite; una temperatura más alta no rescatará una cesta llena.' },
      ],
    },
    220: {
      metaTitle: '{OVEN_C}°C Horno a Freidora de Aire — Ajuste, Tiempo y Límite de Temperatura',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, marca de gas {OVEN_MARK}) en el horno = {AF_C}°C ({AF_F}°F) en freidora de aire tipo cesta, en su máximo. Vea qué alimentos se limitan, cuánto tiempo se devuelve y convierta en vivo.',
      metaKeywords: '220c a freidora de aire, 220c horno a freidora de aire, 220 celsius freidora de aire, 200c ventilador a freidora de aire, marca de gas {OVEN_MARK} freidora de aire',
      heading: '{OVEN_C}°C horno a freidora de aire',
      subDesc: 'La temperatura de crujido, y la primera donde una freidora de cesta topa con su techo. El convertidor abajo ya está en {OVEN_C}°C convencional — cambie a ventilador o marca de gas si su receta los usa.',
      recipesHeading: 'Qué recetas usan {OVEN_C}°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, marca de gas {OVEN_MARK}) es donde van las recetas para crujir: alitas crujientes, patatas asadas con borde rotundo, salmón con superficie firme, pizza, panes planos, verduras chamuscadas. Las patatas fritas congeladas a menudo lo dicen también, pero siguen otras reglas — use modo congelados para ellas. En el horno hace falta tanto calor para expulsar la humedad de la superficie rápido. Una freidora llega antes, así que una receta general convierte a {AF_C}°C — exactamente el tope de {CEILING}°F de una cesta típica. Todo con el recorte normal topa en el techo; ternera, pescado, bizcochos y cazuelas llevan recorte menor, así que su temperatura convertida supera lo que la cesta alcanza. La tabla marca esas filas.',
      failureHeading: 'El fallo a {OVEN_C}°C: el techo',
      failureBody: 'La mayoría de convertidores restan e imprimen el resultado, aunque sea temperatura que su freidora no alcanza. A {OVEN_C}°C pasa para alimentos con recorte menor: el cálculo pide más de {CEILING}°F, la cesta da {CEILING}°F, y el alimento sale poco hecho porque el tiempo se recortó como si el calor estuviera. Este convertidor limita la temperatura al techo y devuelve parte del tiempo, así que las filas limitadas ahorran menos tiempo que el resto. El otro riesgo a este calor es el humo. Grasa de alitas y piel de salmón gotea en cajón muy caliente, así que use aceite de punto de humo alto, añada marinadas con azúcar o miel solo los últimos minutos, y vacíe el cajón entre tandas.',
      workedExampleHeading: 'Ejemplo resuelto (convencional)',
      workedExampleTemplate: 'Una receta asa salmón a {OVEN_C}°C durante {EX_OVEN_MIN} minutos. El pescado lleva recorte menor, así que su temperatura convertida supera el límite de la cesta y se mantiene en {EX_C}°C ({EX_F}°F), con el tiempo recortado solo a {EX_MIN} minutos. Controle a los {EX_CHECK} minutos: el salmón está a 63°C (145°F) en la parte más gruesa, o cuando se deshace. Una freidora tipo horno tiene techo más alto, así que corre el {EX_OS_C}°C ({EX_OS_F}°F) completo durante {EX_OS_MIN} minutos.',
      fanWorkedExampleHeading: 'Ejemplo resuelto (ventilador)',
      fanWorkedExampleTemplate: 'Si la receta da {FAN_C}°C ventilador, el mismo salmón convierte a {EX_FAN_C}°C ({EX_FAN_F}°F) en freidora de cesta durante {EX_FAN_MIN} minutos, control a los {EX_FAN_CHECK} minutos. Una freidora tipo horno usa {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) durante {EX_FAN_OS_MIN} minutos. La entrada de ventilador es más baja, así que más filas pueden evitar el techo.',
      styleHeading: 'Por qué las freidoras tipo horno difieren a {OVEN_C}°C',
      styleBody: 'Una freidora tipo horno suele alcanzar {OS_CEILING}°F, así que a {OVEN_C}°C nada se limita: una receta general es {OS_C}°C ({OS_F}°F) con aproximadamente {OS_PCT}% menos tiempo, y los alimentos de recorte menor simplemente corren más calientes. Las filas limitadas solo aparecen en la columna de cesta, así que compruebe qué tipo tiene antes de fiarse de cualquier tabla. El convertidor usa {CEILING}°F para cestas y {OS_CEILING}°F para tipo horno. Si su dial para más bajo, cocine a su máximo y dé algo más de tiempo. En °C la receta es {OVEN_C}°C, y el ajuste de cesta es {AF_C}°C. Para envases de congelados, use el modo congelados.',
      faqs: [
        { q: '¿Qué es {OVEN_C}°C en una freidora de aire?', a: '{AF_C}°C ({AF_F}°F) en freidora de cesta para la mayoría de alimentos — el máximo de la cesta — con aproximadamente {PCT}% menos tiempo. En tipo horno, {OS_C}°C ({OS_F}°F) con aproximadamente {OS_PCT}% menos tiempo. Ternera, pescado, bizcochos y cazuelas se limitan en cesta y conservan más tiempo.' },
        { q: 'Mi receta dice 200°C ventilador — ¿es lo mismo que {OVEN_C}°C convencional?', a: 'Sí, ventilador = convencional − {FAN_OFFSET_C}°C. La entrada de ventilador es más baja, así que más alimentos evitan el techo.' },
        { q: '¿Qué marca de gas es {OVEN_C}°C?', a: 'marca de gas {OVEN_MARK}. El dial UK marca {OVEN_C}°C como gas 7.' },
        { q: '¿Puedo usar esto para un envase de congelados que dice {OVEN_C}°C?', a: 'No — los envases de congelados siguen otras reglas (mantienen la temperatura, recortan {FROZEN_PCT}% tiempo). Use el modo congelados.' },
        { q: '¿Por qué mi freidora humea a temperaturas altas?', a: 'Grasa y marinadas azucaradas gotean en el cajón caliente y queman. Use aceite de punto de humo alto, añada glaseados pegajosos al final, y vacíe o limpie el cajón entre tandas.' },
      ],
    },
  },
};

export default cTempLanding;
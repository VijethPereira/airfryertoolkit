/**
 * Brand pages in Spanish: same shape as brands/en.ts. Every number is a {KEY} placeholder filled from
 * src/data/models.ts and the engine (brandValues), °C first. Model names, button names and the English-only
 * /model-max-temp copy are shared with en.ts.
 */
import { brands as en, type BrandsDictionary } from './en';

export const brands: BrandsDictionary = {
  backLink: 'Todas las herramientas',
  modelPicker: 'Tu modelo',
  anyModel: 'No aparece / no estoy seguro (techo estándar)',
  modelsHeading: 'Modelos y sus límites',
  modelsIntro:
    'Cada límite está copiado de la página o el manual del fabricante, con el enlace y la fecha en que lo leímos. Los modelos europeos van primero, cuando los hay. Los que no hemos podido comprobar no aparecen.',
  programsHeading: 'Programas integrados de la {MODEL}',
  programsIntro: 'La tabla de programas del manual de EE. UU.: el valor en que arranca cada botón y hasta dónde puedes moverlo.',
  tableHeaders: { model: 'Modelo', type: 'Tipo', capacity: 'Capacidad', max: 'Máx. Air Fry', min: 'Mínimo', preheat: 'Precalentado', source: 'Fuente', sourced: 'Leído', brand: 'Marca' },
  programHeaders: { program: 'Programa', default: 'Empieza en', range: 'Rango' },
  types: { basket: 'Cesta', 'oven-style': 'Tipo horno', 'dual-zone': 'Dos zonas', 'toaster-oven': 'Horno tostador combinado' },
  preheat: { auto: 'Paso integrado', manual: 'Manual', none: 'No', unknown: 'No se indica' },
  otherMax: en.otherMax,
  otherMaxTemplate: '{LABEL} hasta {C}°C / {F}°F',
  programs: en.programs,
  sourceManual: 'Manual',
  sourceSpec: 'Ficha técnica',
  sourceProduct: 'Página de producto',
  markets: { us: 'Modelo de EE. UU.', uk: 'Modelo del Reino Unido', eu: 'Modelo europeo' },
  euNote: 'Estos son los modelos de EE. UU. Los números de modelo europeos son distintos, así que comprueba el dial de tu aparato.',
  foodLoadNote: 'La fuente da una carga de comida en kilos, no un volumen.',
  maxDefaultNote: 'Valor por defecto; el máximo no se indica',
  relatedHeading: 'Relacionado',
  flagshipLink: 'Conversor de horno a freidora de aire',
  maxTempLink: 'Temperatura máxima de cada modelo (en inglés)',
  faqHeading: 'Preguntas frecuentes',
  cardSpecTemplate: 'Hasta {MAX_HI_C}°C · {N_MODELS} modelos',
  brandNames: en.brandNames,
  modelNames: en.modelNames,
  pages: {
    ninja: {
      name: 'Ninja',
      metaTitle: 'Freidora de aire Ninja: convertir recetas de horno y qué es Max Crisp',
      metaDescription:
        'Convierte recetas de horno para tu Ninja: la AF140EU europea llega a {EU_MAX_HI_C}°C, Air Fry se queda en {MAX_LO_C}°C en las cestas de EE. UU. y Max Crisp es un ajuste fijo de {OTHER_MAX_C}°C.',
      metaKeywords: 'freidora de aire ninja temperatura, ninja max crisp, ninja af140eu temperatura máxima, convertir receta de horno ninja',
      heading: 'Conversión para freidora de aire Ninja',
      intro:
        'En una Ninja, {OTHER_MAX_C}°C casi siempre significa Max Crisp. En la Max XL es un programa fijo: funciona a {OTHER_MAX_C}°C ({OTHER_MAX}°F) y no se puede cambiar, mientras que Air Fry y el resto de funciones se paran en {F_MAX_C}°C. Una receta que pide {OTHER_MAX_C}°C es de Max Crisp, casi siempre para congelados; una receta de horno convertida va en Air Fry.',
      answerTemplate:
        'La Ninja Pro AF140EU europea llega a {EU_MAX_HI_C}°C según su página de producto; en las cestas de EE. UU., Air Fry se queda en {MAX_LO_C}°C, y la DoubleStack XL y el horno Foodi llegan a {MAX_HI_C}°C.',
      widgetHeading: 'Convierte una receta de horno para tu Ninja',
      widgetNote:
        'Si eliges tu modelo, el conversor usa su límite de Air Fry. Max Crisp nunca entra en una receta convertida: su temperatura no se ajusta.',
      sections: [
        {
          heading: 'Cuándo Max Crisp es el botón correcto',
          paragraphs: [
            'Toma unas patatas de horno a {EX_OVEN_C}°C durante {EX_OVEN_MIN} minutos. En el Air Fry de la Max XL quedan en {EX_MODEL_C}°C durante {EX_MODEL_MIN_C} minutos, con la primera comprobación en el minuto {EX_MODEL_CHECK_C}. El conversor se queda en el límite de Air Fry y compensa con tiempo. Agita la cesta hacia el minuto {EX_HALF_C}.',
            'Max Crisp es lo indicado cuando la bolsa del congelado lo pide o la tabla de Ninja lo menciona: comida ya cocinada que solo necesita un acabado fuerte. No sirve para pollo crudo ni para nada que deba hacerse por dentro, porque no puedes bajarlo y el exterior se adelanta al centro.',
          ],
        },
        {
          heading: 'El modelo europeo tiene su propio límite',
          paragraphs: [
            'La AF140EU es la Ninja Pro de 4,7 litros que se vende en Europa. Su página de producto da un rango que termina en {EU_MAX_HI_C}°C, algo por encima de los {MAX_LO_C}°C ({MAX_LO}°F) de las cestas americanas. Por eso tiene su propia fila: si la eliges, el conversor usa ese límite y no el de EE. UU.',
            'El nombre del botón tampoco dice la temperatura: la Air Fryer Pro americana tiene Max Crisp, pero su guía pone todas las funciones en {MAX_LO_C}°C. En la DoubleStack XL y el horno Foodi, Air Fry llega a {MAX_HI_C}°C; el horno, con rejillas y más espacio, recibe la conversión tipo horno, más suave.',
          ],
        },
        {
          heading: 'Precalentar una Ninja',
          paragraphs: [
            'Las cestas no se precalientan solas: sus guías recomiendan 3 minutos en vacío antes de meter la comida, y los tiempos convertidos suponen una cesta caliente. La página europea de la AF140EU no habla del precalentado, igual que la guía de la DoubleStack XL; el horno Foodi se precalienta solo y muestra PRE.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Cuál es la temperatura máxima de una freidora de aire Ninja?',
          a: 'Depende del modelo. La AF140EU europea llega a {EU_MAX_HI_C}°C. En las cestas de EE. UU., Air Fry se para en {MAX_LO_C}°C; Max Crisp de la Max XL va a {OTHER_MAX_C}°C, y la DoubleStack XL y el horno Foodi llegan a {MAX_HI_C}°C.',
        },
        { q: '¿Puedo bajar la temperatura de Max Crisp?', a: 'No: la guía de la Max XL dice que en Max Crisp la temperatura no se ajusta. Si necesitas menos calor, usa Air Fry.' },
        { q: '¿Uso Max Crisp para recetas de horno?', a: 'Normalmente no: conviértela para Air Fry. Max Crisp es para congelados precocinados que solo necesitan dorarse.' },
        {
          q: '¿Por qué mi Ninja europea no aparece en la tabla?',
          a: 'Solo añadimos un modelo europeo cuando la página del fabricante da su número y su temperatura en °C. Las de la SL400EU y la SP101EU no daban la temperatura. Si el tuyo no está, deja el selector en «no estoy seguro».',
        },
        {
          q: '¿Por qué no están las Foodi de dos cestas?',
          a: 'Leímos enteras las guías de las DZ201, DZ401 y DZ550: dan ajustes de tabla y temperaturas de sonda, nunca un máximo de Air Fry.',
        },
      ],
      cardDesc: 'Max Crisp es un ajuste fijo, y la AF140EU europea tiene su propio límite.',
    },
    cosori: {
      name: 'Cosori',
      metaTitle: 'Freidora de aire Cosori: convertir recetas de horno según el modelo',
      metaDescription:
        'Convierte recetas de horno para tu Cosori: varios modelos de cesta, también los europeos -KEU, llegan a {MAX_HI_C}°C en vez de los {BASKET_CEIL_C}°C que suponen casi todos los conversores.',
      metaKeywords: 'freidora de aire cosori temperatura, cosori turbo blaze temperatura máxima, cosori caf-dc601-keu, convertir receta de horno cosori',
      heading: 'Conversión para freidora de aire Cosori',
      intro:
        'Casi todas las tablas y calculadoras suponen que una freidora de cesta se para en {BASKET_CEIL_C}°C: dejan cualquier receta caliente ahí y le suman tiempo. Varias Cosori de cesta, entre ellas las dos europeas de la tabla, llegan a {MAX_HI_C}°C. En esas, una receta de horno fuerte pasa a un ajuste más caliente y más corto, y el tiempo extra de un conversor genérico la reseca.',
      answerTemplate:
        'Las dos Cosori europeas de la tabla, CAF-DC601-KEU y CAF-L501-KEU, llegan a {EU_MAX_HI_C}°C según sus páginas de producto, como varias de EE. UU.; la mini Lite y la TwinFry se quedan en {MAX_LO_C}°C. Elige tu modelo y el conversor usa su límite.',
      widgetHeading: 'Convierte una receta de horno para tu Cosori',
      widgetNote: 'Elige primero el modelo: fija si es de cesta o tipo horno y el máximo real de su fuente. Con «no estoy seguro» se usa el techo estándar.',
      sections: [
        {
          heading: 'Por qué una cesta de {MAX_HI_C}°C cambia la respuesta',
          paragraphs: [
            'Toma una receta de horno a {EX_OVEN_C}°C durante {EX_OVEN_MIN} minutos, como unas patatas al horno. Un conversor pensado para una cesta de {BASKET_CEIL_C}°C da {EX_GEN_C}°C durante {EX_GEN_MIN_C} minutos: no puede subir, así que alarga el tiempo. En una Turbo Blaze queda en {EX_MODEL_C}°C durante {EX_MODEL_MIN_C} minutos, porque la cesta sí alcanza esa temperatura. Mira desde el minuto {EX_MODEL_CHECK_C}.',
            'Se nota sobre todo en patatas y alitas: con el tiempo genérico, más largo, a la temperatura alta de la Cosori, el interior se seca antes de que suene el temporizador.',
          ],
        },
        {
          heading: 'Los programas no son la temperatura de la receta',
          paragraphs: [
            'Cada botón de Cosori arranca en su propio valor, a menudo por debajo del máximo. En el manual americano de la Turbo Blaze, Air Fry empieza en {AIR_FRY_DEFAULT_C}°C y sube hasta {AIR_FRY_MAX_C}°C, Bake llega como mucho a {BAKE_MAX_C}°C y Reheat a {REHEAT_MAX_C}°C. Si el ajuste convertido supera lo que admite un programa, usa Air Fry y pon la temperatura a mano.',
            'La página europea de la CAF-DC601-KEU incluye una función de precalentado sin tiempo ni temperatura, y su manual europeo no lo hemos leído. La mini Lite no tiene precalentado: añade un minuto o dos a la primera tanda.',
          ],
        },
        {
          heading: 'Dos cestas y el horno',
          paragraphs: [
            'La TwinFry fríe con aire hasta {MAX_LO_C}°C; solo su Broil sube a {OTHER_MAX_C}°C, y el conversor nunca usa Broil para una receta convertida. El horno Cosori de la tabla funciona como unidad tipo horno: más espacio y rejillas, así que recibe la conversión más suave.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Cuál es la temperatura máxima de una Cosori?',
          a: 'Depende del modelo. Las Cosori de nuestra tabla fríen con aire hasta {MAX_HI_C}°C, incluidas las dos europeas, y la mini Lite y la TwinFry se quedan en {MAX_LO_C}°C.',
        },
        {
          q: '¿Uso los botones de programa de Cosori para recetas de horno?',
          a: 'Usa Air Fry con la temperatura y el tiempo convertidos. Cada programa arranca en su propio valor y algunos tienen un tope más bajo, así que pueden darte un ajuste más frío del que pide la receta.',
        },
        {
          q: '¿Hay que precalentar una Cosori?',
          a: 'Los modelos americanos con botón Preheat lo hacen como paso aparte, y el manual lo recomienda. De las europeas solo hemos leído la página de producto, que no da tiempos.',
        },
        {
          q: '¿Por qué el tiempo de Cosori es más corto que en otros conversores?',
          a: 'Porque la cesta llega a la temperatura más alta. Los conversores que suponen un techo más bajo añaden tiempo para compensar; en un modelo que sí llega, ese tiempo de más lo pasa.',
        },
        {
          q: '¿Por qué no aparecen otras Cosori europeas?',
          a: 'Solo añadimos una fila cuando la página europea muestra el número de modelo -KEU y su temperatura. En otras aparecía un número de EE. UU., así que las dejamos fuera.',
        },
      ],
      cardDesc: 'Varios modelos de cesta, también los europeos, superan el techo que suponen los conversores.',
    },
    philips: {
      name: 'Philips',
      metaTitle: 'Airfryer Philips: convertir recetas de horno con su límite de {EU_MAX_HI_C}°C',
      metaDescription:
        'Convierte recetas de horno para tu Airfryer Philips: los modelos europeos de la tabla se paran en {EU_MAX_HI_C}°C, así que las recetas calientes se quedan en ese límite. Elige tu modelo para ver su límite real.',
      metaKeywords: 'airfryer philips temperatura máxima, philips airfryer xxl, philips na230 temperatura, convertir receta de horno philips airfryer',
      heading: 'Conversión para Airfryer Philips',
      intro:
        'Las seis Airfryer Philips europeas de la tabla se paran en {EU_MAX_HI_C}°C según sus páginas de producto. Las recetas americanas, y muchas de horno convertidas, piden {BASKET_CEIL_C}°C ({BASKET_CEIL}°F) o más: un calor que la cesta no da. La solución no es cocinar en el límite el tiempo de la receta: es quedarse en el límite, mirar antes y dar los minutos que falten.',
      answerTemplate:
        'Los modelos Philips europeos que tenemos llegan a {EU_MAX_HI_C}°C, así que el conversor deja las recetas calientes en {F_DIAL_C}°C. Ojo con el número de modelo: la NA555 de EE. UU. llega a {MAX_HI_C}°C ({MAX_HI}°F en su página) y la europea NA555/00, a {EU_MAX_HI_C}°C.',
      widgetHeading: 'Convierte una receta de horno para tu Philips',
      widgetNote:
        'Elige tu modelo para usar su propio límite. Con «no estoy seguro», el conversor supone una cesta estándar de {BASKET_CEIL_C}°C, por encima de cualquier Philips europea de la tabla.',
      sections: [
        {
          heading: 'Por qué una receta de {BASKET_CEIL_C}°C no cabe en una Philips',
          paragraphs: [
            'Toma una bandeja de verduras asadas en el horno a {EX_OVEN_C}°C durante {EX_OVEN_MIN} minutos. Para una cesta estándar se convierte en {EX_GEN_C}°C durante {EX_GEN_MIN_C} minutos. Una NA230 no puede ponerse ahí, así que el conversor la deja en {EX_MODEL_C}°C durante {EX_MODEL_MIN_C} minutos y te dice que mires desde el minuto {EX_MODEL_CHECK_C}.',
            'Las recetas escritas para otras marcas hacen lo mismo sin avisar. Si una receta dice {BASKET_CEIL_C}°C durante un tiempo fijo, una Philips puesta al máximo la sacará algo más pálida en ese tiempo. Dale unos minutos más: no hay más arriba.',
          ],
        },
        {
          heading: 'El mismo número, otro mercado',
          paragraphs: [
            'Philips vende varios modelos con el mismo número en Europa y en EE. UU. Para la NA555, la página americana da {MAX_HI_C}°C ({MAX_HI}°F en el original), mientras que la página francesa de la NA555/00 da {EU_MAX_HI_C}°C. Por eso la tabla muestra primero las filas europeas y debajo las de EE. UU. Elige la fila del país donde compraste la tuya.',
            'Philips da sus límites en °C, así que en las filas europeas el valor en °C es el de la página y el °F es una conversión. El conversor redondea hacia abajo al paso de su dial, para no darte nunca un ajuste por encima del que acepta el aparato.',
          ],
        },
        {
          heading: 'Modelos de dos cestas',
          paragraphs: [
            'La Serie 3000 de dos cestas, NA351/00 y NA350/00, tiene el mismo límite de {EU_MAX_HI_C}°C en los dos cajones según sus páginas europeas. Cada cajón lleva su propio ajuste, así que convierte cada alimento por separado.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Cuál es la temperatura máxima de una Airfryer Philips?',
          a: 'En las seis Philips europeas de la tabla, {EU_MAX_HI_C}°C según sus páginas de producto. La NA555 de EE. UU. llega a {MAX_HI_C}°C ({MAX_HI}°F). Cada fila enlaza la página de la que sale.',
        },
        {
          q: 'Mi receta dice {BASKET_CEIL_C}°C. ¿Qué pongo en una Philips?',
          a: 'Pon el máximo, {F_DIAL_C}°C, y mira antes de que acabe el tiempo; si le falta color, dale unos minutos más. Elige tu modelo en el conversor y te da el tiempo para ese límite.',
        },
        {
          q: '¿Por qué la NA555 europea tiene otro límite que la americana?',
          a: 'Son fichas distintas para mercados distintos: la europea da {EU_MAX_HI_C}°C y la americana {MAX_HI_C}°C ({MAX_HI}°F), y usamos la de cada mercado.',
        },
        {
          q: '¿La Airfryer XXL tiene más capacidad que la normal?',
          a: 'En Europa, las páginas de la HD9650/90 y la HD9285/90 dan la capacidad en litros. La ficha americana de la HD9650 da una carga de comida en kilos, así que esa fila no tiene volumen.',
        },
        { q: '¿Es igual la temperatura en las dos cestas?', a: 'Sí, cada cajón tiene el mismo límite. La diferencia es que puedes usar dos ajustes a la vez, así que convierte cada alimento por su cuenta.' },
      ],
      cardDesc: 'Un techo más bajo que la mayoría: las recetas calientes se quedan en el límite.',
    },
    instant: {
      name: 'Instant Vortex',
      metaTitle: 'Instant Vortex: convertir recetas de horno, tiempo y temperatura',
      metaDescription:
        'Convierte recetas de horno para tu Instant Vortex: Air Fry llega a {F_MAX_C}°C, cuándo sale el aviso Turn Food y cómo usar la ventana ClearCook en lugar de abrir la cesta.',
      metaKeywords: 'instant vortex temperatura, instant vortex turn food, freidora instant vortex plus, convertir receta de horno instant vortex',
      heading: 'Conversión para freidora de aire Instant Vortex',
      intro:
        'Las Instant Vortex interrumpen la cocción con un aviso Turn Food a mitad de camino. Si no estás, esperan {TURN_WAIT} segundos y siguen sin la vuelta, y la comida sale pálida por un lado. En los modelos ClearCook puedes mirar por la ventana en vez de sacar la cesta, que pierde calor cada vez que la abres.',
      answerTemplate:
        'Todas las Instant Vortex que tenemos fríen con aire hasta {F_MAX_C}°C ({F_MAX}°F); los modelos de dos zonas gratinan hasta {OTHER_MAX_C}°C, algo que el conversor no usa. Son modelos de EE. UU.: elige el tuyo abajo.',
      widgetHeading: 'Convierte una receta de horno para tu Instant Vortex',
      widgetNote:
        'Elige tu modelo para fijar su tipo y su límite. Su límite coincide con el techo estándar de cesta; la diferencia está en cómo gestionas la vuelta.',
      sections: [
        {
          heading: 'El aviso Turn Food',
          paragraphs: [
            'Toma unos muslos de pollo asados a {EX_OVEN_C}°C durante {EX_OVEN_MIN} minutos. En una Vortex Plus quedan en {EX_MODEL_C}°C durante {EX_MODEL_MIN_C} minutos, con la primera comprobación en el minuto {EX_MODEL_CHECK_C}. Dales la vuelta hacia el minuto {EX_HALF_C} y sácalos cuando el interior marque {INT_C}°C. Air Fry y Roast muestran Turn Food a mitad de cocción: saca la cesta, gira y vuelve a meterla.',
            'Si te pierdes el aviso, la cocción sigue a los {TURN_WAIT} segundos, así que pon un temporizador en el móvil si vas a estar fuera. Broil y Dehydrate no piden vuelta, y Reheat empieza sin precalentar, por lo que no muestra el paso Add Food.',
          ],
        },
        {
          heading: 'Usa la ventana ClearCook, no la cesta',
          paragraphs: [
            'En los modelos ClearCook, pulsa Light y mira el dorado por la ventana. Cada vez que sacas la cesta la cámara se enfría y la Vortex tiene que recuperarse, y eso alarga el tiempo. Ábrela para la vuelta y para la comprobación final, no entre medias.',
            'Sin ventana, fíate del tiempo convertido: abre la cesta para la vuelta y en el minuto de comprobación.',
          ],
        },
        {
          heading: 'Programas de la Vortex y sus límites',
          paragraphs: [
            'En la Vortex Plus de 6 cuartos, Air Fry empieza en {AIR_FRY_DEFAULT_C}°C y llega a {AIR_FRY_MAX_C}°C. Broil va de {BROIL_MIN_C}°C a {BROIL_MAX_C}°C y Reheat se para en {REHEAT_MAX_C}°C. Para una receta de horno, usa Air Fry o Roast y pon tú la temperatura convertida; Reheat no llega a un ajuste de cocción completo.',
            'Los modelos con Plus en el nombre bajan hasta {F_MIN_C}°C para deshidratar. La Vortex básica empieza más arriba, algo que solo importa para fruta seca o cecina.',
          ],
        },
      ],
      faqs: [
        {
          q: '¿Cuál es la temperatura máxima de una Instant Vortex?',
          a: 'Air Fry llega a {F_MAX_C}°C ({F_MAX}°F) en todas las Vortex de nuestra tabla. Los modelos de dos zonas gratinan más alto, hasta {OTHER_MAX_C}°C, pero Air Fry sigue parándose en {F_MAX_C}°C.',
        },
        { q: '¿Qué pasa si ignoro Turn Food?', a: 'La Vortex espera {TURN_WAIT} segundos y sigue cocinando sin la vuelta. Lo que había que girar quedará más dorado por arriba que por abajo.' },
        { q: '¿La Instant Vortex se precalienta?', a: 'Sí. Air Fry, Roast y Bake muestran primero el precalentado y luego Add Food cuando está lista. Reheat se salta el precalentado.' },
        { q: '¿Puedo mirar la comida sin abrir la cesta?', a: 'En los modelos ClearCook, enciende la luz y mira por la ventana; abrir la cesta enfría la cámara.' },
        {
          q: '¿Sirve esta tabla para una Vortex comprada en Europa?',
          a: 'Las páginas europeas de Instant que leímos no muestran el número de modelo, así que no podemos emparejarlas con una fila. Mira el dial de tu aparato: si llega a {F_MAX_C}°C, el conversor con el techo estándar te sirve.',
        },
        {
          q: '¿Convierto distinto para los modelos VersaZone o Dual?',
          a: 'Convierte cada alimento por separado: cada zona lleva su ajuste, con el mismo límite de Air Fry, {F_MAX_C}°C.',
        },
      ],
      cardDesc: 'Cuándo sale el aviso Turn Food y cómo mirar por la ventana.',
    },
  },
  maxTemp: en.maxTemp,
};

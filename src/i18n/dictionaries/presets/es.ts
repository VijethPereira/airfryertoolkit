import type { Dictionary } from '../../types';

export const presets: Dictionary['presets'] = {
  backLink: 'Todas las preconfiguraciones',
  pageTag: 'Preconfiguración de alimento',
  answerTemplate: '{LABEL} en la freidora de aire: {AF_F}°F / {AF_C}°C durante {MIN} min',
  answerFlipSuffix: ', voltear a los {FLIP} min',
  answerShakeSuffix: ', agitar {SHAKES}×',
  internalTemplate: 'Listo a {INT_F}°F ({INT_C}°C) en la parte más gruesa',
  internalCrisp: 'Listo por color y textura crujiente, no por termómetro',
  internalToothpick: 'Se comprueba con un palillo, no por el color',
  ovenHeading: 'Equivalente en horno',
  ovenTemplate: 'Horno convencional: {OVEN_F}°F ({OVEN_C}°C, nivel de gas {OVEN_MARK}) durante {OVEN_MIN} min',
  fanTemplate: 'Horno con ventilador / convección: {FAN_F}°F ({FAN_C}°C) durante {FAN_MIN} min',
  ovenNote: '¿Partes de una receta de horno? El conversor de abajo ya tiene este alimento elegido: escribe la temperatura y el tiempo de la receta.',
  sizingHeading: 'Tiempo según tamaño',
  sizingIntro: 'Misma temperatura, distinto tiempo: el grosor decide cuánto tarda el calor en llegar al centro.',
  sizingHeaders: { size: 'Tamaño', airFryer: 'Freidora de aire', oven: 'Horno' },
  minutesTemplate: '{MIN} min',
  specTemplate: '{AF_F}°F · {MIN} min',
  specFlipSuffix: ' · voltear a los {FLIP}',
  specShakeSuffix: ' · agitar ×{SHAKES}',
  relatedPresetsHeading: 'Preconfiguraciones relacionadas',
  tempLandingLinkTemplate: 'Horno a {OVEN_F}°F a freidora de aire, todos los alimentos',
  relatedFlagshipLink: 'Conversor de horno a freidora de aire',
  relatedIndexLink: 'Todas las preconfiguraciones de alimentos',
  relatedChartLink: 'Tabla de conversión imprimible',
  faqHeading: 'Preguntas frecuentes',
  frozen: {
    ovenHeading: 'Lo que dice el paquete',
    ovenTemplate: 'Paquete para horno convencional: {OVEN_F}°F ({OVEN_C}°C, nivel de gas {OVEN_MARK}) durante {OVEN_MIN} min',
    fanTemplate: 'Paquete para horno con ventilador: {FAN_F}°F ({FAN_C}°C) durante {FAN_MIN} min',
    ovenNote: '¿Tu bolsa trae otras cifras? El conversor de abajo ya tiene este alimento elegido: escribe la temperatura y el tiempo del paquete.',
    sizingHeaders: { size: 'Tamaño', airFryer: 'Freidora de aire', oven: 'Dice el paquete' },
    relatedFlagshipLink: 'Conversor de paquetes congelados',
  },
  reheat: {
    ovenHeading: 'Si recalientas en el horno',
    ovenTemplate: 'Horno convencional: {OVEN_F}°F ({OVEN_C}°C, nivel de gas {OVEN_MARK}) durante {OVEN_MIN} min',
    fanTemplate: 'Horno con ventilador: {FAN_F}°F ({FAN_C}°C) durante {FAN_MIN} min',
    ovenNote: 'Las sobras ya están cocinadas, así que estos ajustes solo las calientan y les devuelven el crujiente; el horno tarda más porque primero calienta toda la cavidad.',
    sizingHeaders: { size: 'Ración', airFryer: 'Freidora de aire', oven: 'Recalentar en horno' },
    relatedFlagshipLink: 'Conversor de horno a freidora de aire',
    widgetHeading: '¿Cocinas a partir de una receta de horno?',
    widgetNote: 'Este conversor pasa recetas de horno a ajustes de freidora de aire. No sirve para recalentar, por eso empieza con sus valores por defecto; para las sobras usa el ajuste de arriba.',
  },
  pages: {
    'chicken-breast': {
      label: 'Pechuga de pollo',
      metaTitle: 'Pechuga de pollo en freidora de aire: tiempo, temperatura y punto',
      metaDescription:
        'Pechuga de pollo deshuesada en freidora de aire: {AF_F}°F durante {MIN} minutos, voltear a los {FLIP}, lista a {INT_F}°F. Tiempos por tamaño, equivalente en horno y conversor en vivo.',
      metaKeywords: 'pechuga de pollo freidora de aire tiempo, pechuga en air fryer, cuánto tiempo pechuga freidora de aire',
      heading: 'Pechuga de pollo en la freidora de aire',
      subDesc:
        'Pechuga deshuesada y sin piel, cocinada desde fresca. El ajuste, el volteo, la temperatura interna y cómo evitar que se seque.',
      cardDesc: 'La preconfiguración más buscada. Retírala a {INT_F}°F internos.',
      sizeLabels: { small: 'Pequeña, 150 g', medium: 'Mediana, 220 g', large: 'Grande, 300 g' },
      failureHeading: 'Por qué la pechuga se seca en la freidora de aire',
      failureBody:
        'Una pechuga de pollo tiene forma de cuña: gruesa en un extremo y fina en el otro. Con el aire rápido de la cesta, el extremo fino llega a {INT_F}°F varios minutos antes que el grueso, y cuando el centro ya es seguro la punta está seca y fibrosa. Esa forma, y no la freidora, es la razón de que la pechuga tenga fama de quedar dura. Iguala el grosor antes de cocinarla. Aplana el extremo grueso bajo film transparente hasta que toda la pechuga tenga más o menos la misma altura, o corta una pechuga grande en horizontal en dos filetes más finos, lo que además baja el tiempo a la fila pequeña de la tabla. Después sácala en cuanto la parte más gruesa marque {INT_F}°F, no más tarde. Cada minuto de más exprime jugo, y ningún adobo lo devuelve.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Dos pechugas medianas, de unos 220 g cada una, untadas con aceite y sazonadas. Precalienta {PREHEAT} minutos y cocina a {AF_F}°F durante {MEDIUM_MIN} minutos, dándoles la vuelta a los {FLIP} minutos para que se doren por ambos lados. Una pechuga grande de 300 g necesita unos {LARGE_MIN} minutos a la misma temperatura. Las mismas pechugas tardarían {OVEN_MIN} minutos a {OVEN_F}°F en un horno convencional, así que la freidora ahorra unos minutos y deja el exterior más dorado.',
      donenessHeading: 'Cómo saber si está lista',
      donenessBody:
        'Usa un termómetro en la parte más gruesa, metido de lado para que la punta quede en el centro sin atravesar la carne. {INT_F}°F ({INT_C}°C) es seguro al instante; la lectura sube unos grados más mientras reposa. Sin termómetro, corta la parte más gruesa: la carne debe estar blanca de principio a fin y con jugos claros, no rosada ni vidriosa. Deja reposar el pollo cinco minutos sobre una tabla antes de cortarlo, o el jugo acabará en la tabla y no en la carne.',
      prepHeading: 'Antes de meterla',
      prepBody:
        'Seca la pechuga con papel de cocina para que la superficie se dore en lugar de cocerse al vapor, úntala con una cucharadita de aceite y sazona. Una salmuera rápida de 30 minutos en agua con sal se nota mucho en la jugosidad. Deja espacio entre las pechugas en la cesta; dos que se tocan se cuecen al vapor donde se juntan. Las pechugas empanadas llevan la misma temperatura, pero uno o dos minutos más para que la cobertura cuaje.',
      faqs: [
        {
          q: '¿Cuánto tarda la pechuga de pollo en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para una pechuga mediana de unos 220 g, volteada a los {FLIP} minutos. Las pequeñas tardan unos {SMALL_MIN} minutos y las grandes unos {LARGE_MIN}. Termina siempre por temperatura, no por tiempo.',
        },
        {
          q: '¿A qué temperatura interna está lista la pechuga de pollo?',
          a: 'A {INT_F}°F ({INT_C}°C) en la parte más gruesa. Sácala en cuanto marque eso; sigue subiendo un poco mientras reposa.',
        },
        {
          q: '¿Hay que dar la vuelta a la pechuga en la freidora de aire?',
          a: 'Sí, una vez, hacia la mitad. La cara de abajo recibe menos aire directo y queda más pálida; girarla da un color uniforme por ambos lados.',
        },
        {
          q: '¿Puedo cocinar pechuga congelada en la freidora de aire?',
          a: 'Sí, pero necesita menos temperatura y más tiempo para que el centro sea seguro antes de que el exterior se seque. Usa el modo congelados para el pollo congelado en lugar de este ajuste para fresco.',
        },
        {
          q: '¿Cuál es el equivalente en horno de este ajuste?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos en horno con ventilador.',
        },
      ],
    },
    'chicken-wings': {
      label: 'Alitas de pollo',
      metaTitle: 'Alitas de pollo en freidora de aire: tiempo, temperatura y piel crujiente',
      metaDescription:
        'Alitas crujientes en freidora de aire: {AF_F}°F durante {MIN} minutos, volteadas a los {FLIP}. Por qué la piel queda blanda, tiempos por tamaño y equivalente en horno.',
      metaKeywords: 'alitas de pollo freidora de aire tiempo, alitas air fryer temperatura, alitas crujientes freidora de aire',
      heading: 'Alitas de pollo en la freidora de aire',
      subDesc:
        'Alitas frescas, en trozos de ala y muslito, cocinadas hasta que la piel cruje. El ajuste, la vuelta y por qué la salsa va al final.',
      cardDesc: 'Sécalas primero; la salsa, solo después de cocinar.',
      sizeLabels: { small: 'Alitas pequeñas', medium: 'Alitas normales', large: 'Alitas grandes o jumbo' },
      failureHeading: 'Por qué las alitas salen blandas',
      failureBody:
        'La piel de las alitas es sobre todo agua y grasa. Para que cruja, el agua tiene que evaporarse y la grasa tiene que derretirse, y las dos cosas necesitan una superficie seca y espacio alrededor de cada pieza. Las alitas recién sacadas del paquete están mojadas, así que los primeros minutos se van en cocerlas al vapor; una cesta llena atrapa ese vapor y la piel termina correosa y pálida por mucho que se cocine. Ponerles la salsa antes empeora las cosas, porque el azúcar se quema mientras la piel de debajo sigue blanda. La solución está casi toda en la preparación: secar bien las alitas, colocarlas en una sola capa con huecos y mezclarlas con la salsa solo al sacarlas. Dos tandas dan mejores alitas que una tanda apretada, y la segunda va más rápida porque la cesta ya está caliente.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Medio kilo de alitas normales, secadas con papel y mezcladas con sal y una cucharadita de levadura química. Precalienta {PREHEAT} minutos, cocina a {AF_F}°F durante {MEDIUM_MIN} minutos y agítalas o dales la vuelta a los {FLIP} minutos. Las alitas jumbo necesitan unos {LARGE_MIN} minutos. Mézclalas con la salsa nada más salir de la cesta. En horno convencional, la misma bandeja va a {OVEN_F}°F unos {OVEN_MIN} minutos, con mucho menos crujiente.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Las alitas son seguras a {INT_F}°F ({INT_C}°C), pero quedan mejor bastante por encima: la carne oscura y el tejido que rodea la articulación se ablandan a 175–190°F, y por eso una alita bien crujiente nunca está cruda. Busca una piel dorada intensa, tensa y con ampollas, y una carne que se separa del hueso en la articulación. Si al final del tiempo la piel sigue pálida y blanda, dales tres minutos más en lugar de subir la temperatura.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Seca las alitas con papel de cocina, o déjalas destapadas sobre una rejilla en la nevera unas horas. Una capa ligera de levadura química (no bicarbonato) sube el pH de la piel y la ayuda a formar ampollas. Sálalas, pero sin aceite: las alitas ya tienen grasa propia. Separa las alitas que vienen enteras por la articulación y coloca las piezas con la piel hacia arriba, sin que se monten.',
      faqs: [
        {
          q: '¿Cuánto tardan las alitas de pollo en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para alitas frescas normales, agitadas o volteadas a los {FLIP} minutos. Las pequeñas tardan unos {SMALL_MIN} minutos y las jumbo unos {LARGE_MIN}.',
        },
        {
          q: '¿A qué temperatura están hechas las alitas?',
          a: 'Son seguras a {INT_F}°F ({INT_C}°C), pero la mayoría de cocineros las lleva más arriba, a 175–190°F, para que la carne quede tierna y la piel crujiente.',
        },
        {
          q: '¿La salsa se pone antes o después de la freidora?',
          a: 'Después. La salsa sobre alitas crudas se quema antes de que la piel de debajo cruja. Mezcla las alitas cocinadas con salsa caliente en un bol y sirve enseguida.',
        },
        {
          q: '¿Para qué sirve la levadura química en las alitas?',
          a: 'Una capa ligera hace la piel más alcalina, lo que la ayuda a dorarse y formar ampollas. Usa una cucharadita por medio kilo y asegúrate de que sea levadura química, no bicarbonato.',
        },
        {
          q: '¿Sirve este ajuste para alitas congeladas?',
          a: 'No. Las alitas congeladas tienen su propio tiempo; usa el modo congelados, que mantiene el calor alto y añade agitados para separar las piezas que se congelaron juntas.',
        },
      ],
    },
    'chicken-thighs': {
      label: 'Muslos de pollo',
      metaTitle: 'Muslos de pollo con hueso en freidora de aire: tiempo y temperatura',
      metaDescription:
        'Muslos de pollo con hueso y piel en freidora de aire: {AF_F}°F durante {MIN} minutos, volteados a los {FLIP}. Piel crujiente, carne jugosa, tiempos por tamaño y horno.',
      metaKeywords: 'muslos de pollo freidora de aire tiempo, contramuslos air fryer, muslos con hueso freidora de aire',
      heading: 'Muslos de pollo en la freidora de aire',
      subDesc:
        'Muslos con hueso y piel. El ajuste, qué lado va abajo primero y por qué el muslo pide más temperatura interna que la pechuga.',
      cardDesc: 'Piel abajo primero, piel arriba para terminar.',
      sizeLabels: { small: 'Pequeños, 120–140 g', medium: 'Medianos, 170–200 g', large: 'Grandes, 225 g o más' },
      failureHeading: 'El problema del muslo: piel gomosa, hueso rosado',
      failureBody:
        'Los muslos fallan de dos maneras a la vez. La piel de arriba se dora rápido, pero la grasa de debajo necesita tiempo para derretirse, así que un muslo que parece hecho a menudo esconde una capa gomosa bajo la costra. Mientras tanto, la carne pegada al hueso es la última en calentarse y puede seguir rosada cuando el exterior está perfecto. Empezar con la piel hacia abajo resuelve casi todo. Con la piel contra la cesta, la grasa se derrite despacio hacia el cajón mientras la carne se hace por dentro; al girarlos con la piel hacia arriba para la segunda mitad, esa piel ya fina cruje con el aire directo. El muslo perdona en un aspecto: la carne oscura sigue jugosa muy por encima de la temperatura segura, así que unos minutos extra por el hueso apenas cuestan nada.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Cuatro muslos medianos con hueso, de unos 180 g cada uno. Precalienta {PREHEAT} minutos, colócalos con la piel hacia abajo y cocina a {AF_F}°F; dales la vuelta a los {FLIP} minutos y termina a los {MEDIUM_MIN} minutos. Los muslos grandes necesitan unos {LARGE_MIN} minutos. En una freidora tipo horno, el conversor da {OS_F}°F durante {OS_MIN} minutos. Un horno convencional pide {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber si están listos',
      donenessBody:
        'Mide junto al hueso sin tocarlo: {INT_F}°F ({INT_C}°C) es seguro, pero los muslos están en su mejor punto a 175–185°F, cuando el tejido conectivo se ha ablandado y la carne se suelta limpia del hueso. Los jugos deben salir claros al pinchar la parte más gruesa. La piel debe quedar dorada intensa y crujiente hasta los bordes; si los bordes siguen blandos, dales dos minutos más con la piel hacia arriba.',
      prepHeading: 'Antes de meterlos',
      prepBody:
        'Recorta los trozos grandes de piel que cuelgan por los lados, porque se quemarán antes de que el resto cruja. Seca bien la piel y sálala; una hora destapados en la nevera ayuda. No hace falta aceite en el lado de la piel. Si los muslos son de tamaños muy distintos, pon los más grandes en los bordes de la cesta, donde el aire circula más rápido.',
      faqs: [
        {
          q: '¿Cuánto tardan los muslos de pollo con hueso en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para muslos medianos, volteados a los {FLIP} minutos. Los pequeños tardan unos {SMALL_MIN} minutos y los grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Qué temperatura interna deben alcanzar los muslos de pollo?',
          a: '{INT_F}°F ({INT_C}°C) es el mínimo seguro. Para muslos tiernos que se separan del hueso, apunta a 175–185°F.',
        },
        {
          q: '¿Los muslos se cocinan con la piel hacia arriba o hacia abajo?',
          a: 'Empieza con la piel hacia abajo para derretir la grasa y gíralos con la piel hacia arriba en la segunda mitad para que cruja con el aire directo.',
        },
        {
          q: '¿Los muslos deshuesados tardan lo mismo?',
          a: 'No, son más finos y se hacen antes, normalmente en el tiempo de la fila pequeña de la tabla. Comprueba la temperatura pronto.',
        },
        {
          q: '¿Cuál es el equivalente en horno para muslos de pollo?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos en horno con ventilador.',
        },
      ],
    },
    salmon: {
      label: 'Salmón',
      metaTitle: 'Salmón en freidora de aire: tiempo, temperatura y cómo no pasarlo',
      metaDescription:
        'Lomos de salmón en freidora de aire: {AF_F}°F durante {MIN} minutos, sin voltear, listo a {INT_F}°F. Tiempos por grosor, señales de punto y equivalente en horno.',
      metaKeywords: 'salmón freidora de aire tiempo, salmón air fryer temperatura, cuánto tiempo salmón freidora de aire',
      heading: 'Salmón en la freidora de aire',
      subDesc:
        'Lomos de salmón fresco, con o sin piel. El ajuste, el tiempo según el grosor y la señal de que te has pasado.',
      cardDesc: 'Piel abajo, sin voltear. Cuenta el tiempo por grosor.',
      sizeLabels: { thin: 'Fino, unos 2 cm', medium: 'Normal, unos 2,5 cm', thick: 'Grueso, unos 4 cm' },
      failureHeading: 'Lo blanco significa que está pasado',
      failureBody:
        'El salmón tiene muy poco margen. Pasa de sedoso a seco en un par de minutos, y la freidora es tan rápida que esos minutos se van enseguida. La señal de alarma es la cuajada blanca que aparece en la superficie: es albúmina, una proteína que sale del músculo cuando las fibras se contraen. Un poco es normal; mucha significa que el pescado ha pasado de punto. Como el salmón se hace de fuera hacia dentro, la única forma fiable de calcular el tiempo es por grosor, y por eso la tabla ordena los lomos por altura y no por peso. Un trozo fino de la cola y un corte grueso del centro del mismo pescado pueden necesitar tiempos muy distintos, así que cocina juntos trozos de grosor parecido, o mete los finos unos minutos más tarde.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Dos lomos de 2,5 cm con piel. Unta la carne con aceite, sazona y colócalos con la piel hacia abajo. Cocina a {AF_F}°F durante {MEDIUM_MIN} minutos sin darles la vuelta; un lomo fino de 2 cm necesita unos {THIN_MIN} minutos y uno grueso de 4 cm unos {THICK_MIN}. Una freidora tipo horno da {OS_F}°F durante {OS_MIN} minutos. Un horno convencional pide {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber si está listo',
      donenessBody:
        'La guía de seguridad alimentaria es {INT_F}°F ({INT_C}°C) en la parte más gruesa, cuando la carne se vuelve opaca y se desmenuza fácilmente con un tenedor. Muchos cocineros prefieren el salmón algo menos hecho, a 125–130°F, con el centro aún un poco translúcido y muy jugoso; es cuestión de gusto con pescado comprado fresco y bien manipulado. Presiona suavemente la parte de arriba: el salmón hecho se separa por sus líneas naturales. Si ves mucha albúmina blanca, sácalo de inmediato.',
      prepHeading: 'Antes de meterlo',
      prepBody:
        'Deja los lomos fuera diez minutos para que el centro no esté frío de nevera. Sécalos y unta con aceite la carne, no la piel. Los lomos con piel no necesitan vuelta: la piel protege la parte de abajo y se desprende fácil después si no la quieres. Un papel de horno perforado evita que los lomos sin piel se peguen a la cesta.',
      faqs: [
        {
          q: '¿Cuánto tarda el salmón en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para un lomo de 2,5 cm. Los trozos finos tardan unos {THIN_MIN} minutos y los cortes gruesos del centro unos {THICK_MIN}.',
        },
        {
          q: '¿Hay que dar la vuelta al salmón en la freidora de aire?',
          a: 'No. Cocínalo con la piel hacia abajo todo el tiempo; girar un lomo delicado suele romperlo, y la parte de arriba se dora bien con el aire directo.',
        },
        {
          q: '¿A qué temperatura está hecho el salmón?',
          a: 'A {INT_F}°F ({INT_C}°C) según la guía de seguridad alimentaria, cuando se desmenuza con facilidad. Mucha gente lo prefiere a 125–130°F, algo translúcido en el centro.',
        },
        {
          q: '¿Qué es lo blanco que sale en el salmón?',
          a: 'Es albúmina, una proteína que sale al cocinarse el pescado. Mucha cantidad significa que el salmón está pasado; la próxima vez sácalo uno o dos minutos antes.',
        },
        {
          q: '¿Cuál es el equivalente en horno para el salmón?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos en horno con ventilador.',
        },
      ],
    },
    bacon: {
      label: 'Beicon',
      metaTitle: 'Beicon en freidora de aire: tiempo, temperatura y sin humo',
      metaDescription:
        'Beicon en freidora de aire: {AF_F}°F durante {MIN} minutos para lonchas normales. Por qué una temperatura más baja evita el humo, tiempos para fino y grueso, y horno.',
      metaKeywords: 'beicon freidora de aire tiempo, tocino air fryer temperatura, cuánto tiempo beicon freidora de aire',
      heading: 'Beicon en la freidora de aire',
      subDesc:
        'Beicon entreverado, cocinado hasta que cruje. Un ajuste más bajo que el de casi todos los alimentos, y el motivo.',
      cardDesc: 'Una temperatura más baja evita que la grasa humee.',
      sizeLabels: { thin: 'Lonchas finas', medium: 'Lonchas normales', thick: 'Lonchas gruesas' },
      failureHeading: 'Por qué el beicon echa humo en la freidora',
      failureBody:
        'El beicon es el único alimento en el que el instinto habitual con la freidora, más calor y más rápido, sale al revés. Mientras se cocina, la grasa se derrite y gotea al cajón bajo la cesta, y con ajustes altos ese charco se calienta tanto que humea y salpica. La cocina se llena de humo, salta la alarma y el beicon sabe acre. Por eso esta preconfiguración se queda en {AF_F}°F y no en las temperaturas más altas que usan casi todas las carnes: la grasa se derrite de forma constante en lugar de quemarse, y las lonchas crujen igual porque son muy finas. Dos costumbres completan el trabajo. Coloca las lonchas planas sin montarlas, porque las partes solapadas quedan blandas, y tira o limpia la grasa entre tandas.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Seis lonchas normales extendidas en la cesta, cortadas por la mitad si son demasiado largas para quedar planas. Cocina a {AF_F}°F durante {MEDIUM_MIN} minutos; el beicon fino está listo en unos {THIN_MIN} y el grueso en unos {THICK_MIN}. No hace falta darle la vuelta. Para comparar, el mismo beicon en una bandeja en horno convencional va a {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber si está listo',
      donenessBody:
        'El beicon está curado, así que se juzga por el color y la textura, no con termómetro. Sácalo cuando la grasa haya pasado de blanca a translúcida y dorada y la parte magra se haya oscurecido. Se endurece al enfriarse, así que las lonchas que aún se doblan un poco en la cesta estarán crujientes un minuto después sobre papel de cocina. Para un beicon más tierno, sácalo uno o dos minutos antes; para que quede quebradizo, déjalo hasta que los bordes empiecen a oscurecerse.',
      prepHeading: 'Antes de meterlo',
      prepBody:
        'No hace falta precalentar ni poner aceite; el beicon trae su propia grasa. Usa la cesta y no una bandeja sólida, para que la grasa escurra lejos de las lonchas. Una rebanada de pan o un chorrito de agua en el cajón bajo la cesta recoge la grasa y reduce el humo. El beicon grueso puede ir en una fila un poco solapada, pero separa las lonchas a mitad de cocción.',
      faqs: [
        {
          q: '¿Cuánto tarda el beicon en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para lonchas normales. El fino tarda unos {THIN_MIN} minutos y el grueso unos {THICK_MIN}.',
        },
        {
          q: '¿Por qué echa humo mi freidora cuando hago beicon?',
          a: 'La grasa gotea al cajón y se quema a temperaturas altas. Cocina a {AF_F}°F, vacía la grasa entre tandas y pon un poco de agua o una rebanada de pan en el cajón.',
        },
        {
          q: '¿Hay que dar la vuelta al beicon en la freidora?',
          a: 'No. El aire llega a ambos lados de las lonchas finas. Solo el beicon grueso colocado solapado necesita separarse a mitad de cocción.',
        },
        {
          q: '¿Hay que precalentar la freidora para el beicon?',
          a: 'No. Empezar en frío deja que la grasa se derrita con más suavidad, lo que ayuda a que el beicon se haga de forma uniforme.',
        },
        {
          q: '¿Cuál es el equivalente en horno para el beicon?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos sobre una rejilla en horno convencional.',
        },
      ],
    },
    steak: {
      label: 'Filete de ternera',
      metaTitle: 'Filete de ternera en freidora de aire: tiempo, temperatura y punto',
      metaDescription:
        'Un filete de 2,5 cm en freidora de aire: {AF_F}°F durante {MIN} minutos, volteado a los {FLIP}, poco hecho a {INT_F}°F. Tiempos por grosor y cómo lograr costra.',
      metaKeywords: 'filete freidora de aire tiempo, entrecot air fryer, chuletón freidora de aire temperatura',
      heading: 'Filete de ternera en la freidora de aire',
      subDesc:
        'Entrecot, solomillo bajo o lomo alto. El ajuste para un punto poco hecho, cómo cambia el tiempo con el grosor y cómo dar color al exterior.',
      cardDesc: 'Seca la superficie y deja reposar para una costra de verdad.',
      sizeLabels: { thin: 'Fino, unos 2 cm', medium: 'Normal, unos 2,5 cm', thick: 'Grueso, unos 4 cm' },
      failureHeading: 'El problema de la franja gris',
      failureBody:
        'Una freidora de aire no sella como una sartén de hierro. El aire caliente transporta mucho menos calor que el metal, así que un filete húmedo pasa sus primeros minutos secándose, y cuando la superficie por fin se dora el calor ya ha avanzado hacia dentro y ha dejado una franja gruesa de carne gris y pasada bajo una costra pálida. La solución es que la superficie se dore más rápido. Seca el filete por completo, sálalo con antelación para que la superficie se seque aún más, precalienta bien la cesta y usa el ajuste más alto de tu aparato. Cocina uno o dos filetes a la vez con espacio alrededor. El resultado no iguala una sartén humeante, pero se acerca, con mucho menos lío.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Un entrecot de 2,5 cm, salado una hora antes y secado. Precalienta la freidora {PREHEAT} minutos, cocina a {AF_F}°F y dale la vuelta a los {FLIP} minutos; a los {MEDIUM_MIN} minutos debería marcar unos {INT_F}°F, punto poco hecho. Un filete fino de 2 cm necesita unos {THIN_MIN} minutos y un corte grueso de 4 cm unos {THICK_MIN}. Déjalo reposar cinco minutos antes de cortarlo.',
      donenessHeading: 'El punto según la temperatura',
      donenessBody:
        'Usa un termómetro de lectura instantánea metido de lado hasta el centro. Vuelta y vuelta es unos 120–125°F, poco hecho {INT_F}°F ({INT_C}°C), al punto 140°F y muy hecho 155°F o más; la guía del USDA para piezas enteras de vacuno es 145°F seguidos de un reposo de tres minutos. Saca el filete unos cinco grados antes de tu objetivo, porque la temperatura sigue subiendo mientras reposa. Cortarlo para comprobarlo deja escapar los jugos.',
      prepHeading: 'Antes de meterlo',
      prepBody:
        'Saca el filete de la nevera 30 minutos antes para que el centro no esté frío. Sálalo al menos 40 minutos antes, o justo antes; cualquier momento intermedio deja la superficie mojada. Úntalo con un poco de aceite resistente al calor en lugar de mantequilla, que se quema. Añade mantequilla, ajo o hierbas durante el reposo.',
      faqs: [
        {
          q: '¿Cuánto tarda un filete en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para un filete de 2,5 cm poco hecho, volteado a los {FLIP} minutos. Los finos tardan unos {THIN_MIN} minutos y los gruesos unos {THICK_MIN}.',
        },
        {
          q: '¿A qué temperatura está un filete poco hecho?',
          a: 'A unos {INT_F}°F ({INT_C}°C). La guía del USDA para piezas enteras es 145°F con tres minutos de reposo, que se acerca más al punto.',
        },
        {
          q: '¿Se puede conseguir costra en la freidora de aire?',
          a: 'Una buena, si la superficie está completamente seca y la cesta bien precalentada. No llega del todo a un sellado en hierro, pero se acerca.',
        },
        {
          q: '¿Hay que dejar reposar el filete?',
          a: 'Sí, unos cinco minutos. Los jugos vuelven a repartirse por la carne y la temperatura sube unos grados para terminar la cocción.',
        },
        {
          q: '¿Cuál es el equivalente en horno para un filete?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en horno convencional, aunque una sartén o una parrilla dan mejor costra.',
        },
      ],
    },
    'pork-chops': {
      label: 'Chuletas de cerdo',
      metaTitle: 'Chuletas de cerdo en freidora de aire: tiempo, temperatura y jugosas',
      metaDescription:
        'Chuletas de cerdo en freidora de aire: {AF_F}°F durante {MIN} minutos para chuletas de 2,5 cm, volteadas a los {FLIP}, listas a {INT_F}°F. Tiempos por grosor y horno.',
      metaKeywords: 'chuletas de cerdo freidora de aire tiempo, chuletas air fryer temperatura, cuánto tiempo chuletas freidora de aire',
      heading: 'Chuletas de cerdo en la freidora de aire',
      subDesc:
        'Chuletas con o sin hueso. El ajuste, la vuelta y la temperatura que evita que queden harinosas.',
      cardDesc: 'Retíralas a {INT_F}°F y deja reposar; salmuera si puedes.',
      sizeLabels: { thin: 'Finas, 1 cm', medium: 'Normales, 2,5 cm', thick: 'Gruesas, 4 cm' },
      failureHeading: 'Por qué las chuletas quedan secas y harinosas',
      failureBody:
        'El cerdo actual es magro. Con poca grasa entre las fibras, una chuleta no tiene nada que la proteja en cuanto pasa de punto, y en pocos minutos queda seca, apretada y harinosa. La costumbre de cocinar el cerdo hasta que esté gris por completo viene de recomendaciones antiguas; hoy una chuleta es segura a {INT_F}°F con un reposo corto, cuando el centro aún está ligeramente rosado y jugoso. Las chuletas finas son las más difíciles en la freidora porque se pasan antes de que el exterior se dore. Compra chuletas de al menos 2,5 cm si puedes, y si solo tienes finas, cocínalas en la parte alta del rango de tiempo y compruébalas pronto.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Dos chuletas deshuesadas de 2,5 cm, en salmuera una hora, secadas y untadas con aceite y especias. Precalienta {PREHEAT} minutos, cocina a {AF_F}°F y dales la vuelta a los {FLIP} minutos; deberían llegar a {INT_F}°F hacia los {MEDIUM_MIN} minutos. Las chuletas finas de 1 cm necesitan unos {THIN_MIN} minutos y las gruesas de 4 cm unos {THICK_MIN}. En horno convencional, las mismas chuletas van a {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Mide de lado en la parte más gruesa, lejos del hueso. {INT_F}°F ({INT_C}°C) seguidos de un reposo de tres minutos es el objetivo seguro; el centro tendrá un rosa pálido y los jugos saldrán claros. Las chuletas con hueso se hacen algo más despacio junto al hueso, así que comprueba ahí al final. Si cortas una chuleta, la carne debe estar jugosa y apenas opaca, no gris y fibrosa.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Una salmuera sencilla, una cucharada de sal por medio litro de agua durante 30–60 minutos, es lo que más mejora la jugosidad. Seca bien las chuletas después. Corta la grasa del borde en dos o tres puntos para que la chuleta no se curve al cocinarse. Un adobo seco con algo de azúcar se dora muy bien, pero vigílalo en los últimos minutos.',
      faqs: [
        {
          q: '¿Cuánto tardan las chuletas de cerdo en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para chuletas de 2,5 cm, volteadas a los {FLIP} minutos. Las finas tardan unos {THIN_MIN} minutos y las gruesas unos {THICK_MIN}.',
        },
        {
          q: '¿Qué temperatura deben alcanzar las chuletas de cerdo?',
          a: '{INT_F}°F ({INT_C}°C) y después tres minutos de reposo. Un centro ligeramente rosado a esa temperatura es seguro y mucho más jugoso.',
        },
        {
          q: '¿Conviene poner en salmuera las chuletas para la freidora?',
          a: 'Si tienes 30 minutos, sí. Las chuletas magras ganan mucha humedad con una salmuera corta, y perdonan más si se cocinan un minuto de más.',
        },
        {
          q: '¿Chuletas con hueso o sin hueso en la freidora?',
          a: 'Las dos funcionan a la misma temperatura. Las de hueso tardan uno o dos minutos más y quedan algo más jugosas junto al hueso.',
        },
        {
          q: '¿Cuál es el equivalente en horno para chuletas de cerdo?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos en horno con ventilador.',
        },
      ],
    },
    shrimp: {
      label: 'Gambas',
      metaTitle: 'Gambas en freidora de aire: tiempo y temperatura por tamaño',
      metaDescription:
        'Gambas en freidora de aire: {AF_F}°F durante {MIN} minutos para gambas grandes, agitadas una vez. Tiempos por tamaño, cómo saber que están hechas y horno.',
      metaKeywords: 'gambas freidora de aire tiempo, camarones air fryer temperatura, langostinos freidora de aire',
      heading: 'Gambas en la freidora de aire',
      subDesc:
        'Gambas crudas, peladas y descongeladas. El ajuste, el tiempo según tamaño y el cambio de color que te dice que pares.',
      cardDesc: 'Cuentan los minutos: calcula el tiempo por tamaño.',
      sizeLabels: { small: 'Pequeñas (110–130 por kg)', medium: 'Grandes (70–90 por kg)', large: 'Jumbo (35–45 por kg)' },
      failureHeading: 'La ventana de un minuto',
      failureBody:
        'Las gambas se hacen en minutos y se pasan en uno. Su músculo se contrae rápido con el calor, así que el margen entre tiernas y gomosas es muy corto, y en una freidora es fácil perderlo mientras preparas la salsa. El tamaño es la variable principal, y por eso las gambas se venden por número de piezas por kilo: las pequeñas pueden estar hechas antes de que las jumbo se hayan puesto rosadas. Cocina un solo tamaño cada vez, pon un temporizador con el tiempo más corto de la tabla y míralas en lugar de esperar al final. El otro error habitual es cocinar gambas que siguen medio congeladas, lo que deja el exterior duro y el centro crudo.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Medio kilo de gambas grandes, peladas, sin el hilo y secadas, mezcladas con una cucharada de aceite, ajo y pimentón. Precalienta {PREHEAT} minutos, extiéndelas en una capa y cocina a {AF_F}°F durante {MEDIUM_MIN} minutos, agitando una vez a mitad. Las pequeñas necesitan unos {SMALL_MIN} minutos y las jumbo unos {LARGE_MIN}. En una bandeja en horno convencional van a {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Fíjate en la forma y el color. Las gambas crudas son grises y translúcidas; las cocinadas son rosado anaranjado y opacas de punta a punta. Una gamba curvada en una C abierta está hecha, mientras que una O cerrada significa que se ha pasado. La cifra de seguridad alimentaria es {INT_F}°F ({INT_C}°C), pero las gambas son demasiado pequeñas para medirlas con facilidad; el color es la prueba práctica. Sácalas en cuanto desaparezca la última mancha gris.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Descongela las gambas por completo, en la nevera durante la noche o en un bol con agua fría unos 20 minutos, y sécalas bien. Las gambas peladas se hacen de forma más uniforme que con cáscara y toman mejor el condimento. Añade un poco de aceite para que las especias se peguen y no llenes la cesta: una sola capa se hace por igual, un montón se cuece al vapor.',
      faqs: [
        {
          q: '¿Cuánto tardan las gambas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para gambas grandes, agitadas una vez. Las pequeñas tardan unos {SMALL_MIN} minutos y las jumbo unos {LARGE_MIN}.',
        },
        {
          q: '¿Cómo sé cuándo están hechas las gambas?',
          a: 'Se vuelven rosadas y opacas y se curvan en forma de C abierta. Una O cerrada significa que están pasadas.',
        },
        {
          q: '¿Puedo cocinar gambas congeladas en la freidora?',
          a: 'Es mejor descongelarlas antes. Cocinadas desde congeladas, el exterior se endurece antes de que el centro se haga. Veinte minutos en agua fría bastan.',
        },
        {
          q: '¿Hay que agitar las gambas en la freidora?',
          a: 'Una vez, a mitad de cocción, para que las de abajo cojan el mismo color que las de arriba.',
        },
        {
          q: '¿Cuál es el equivalente en horno para las gambas?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en una bandeja en horno convencional.',
        },
      ],
    },
    'baked-potato': {
      label: 'Patata asada',
      metaTitle: 'Patata asada en freidora de aire: tiempo, temperatura y piel crujiente',
      metaDescription:
        'Patata asada en freidora de aire: {AF_F}°F durante {MIN} minutos para una patata mediana, girada a los {FLIP}, lista a {INT_F}°F por dentro. Tiempos por tamaño y horno.',
      metaKeywords: 'patata asada freidora de aire, patata entera air fryer tiempo, papa asada freidora de aire',
      heading: 'Patata asada en la freidora de aire',
      subDesc:
        'Patatas enteras para asar, con la piel crujiente y salada. El ajuste, el tiempo según tamaño y la temperatura interna para un centro esponjoso.',
      cardDesc: 'Compruébala con termómetro, no con tenedor.',
      sizeLabels: { small: 'Pequeña, 170 g', medium: 'Mediana, 250 g', large: 'Grande, 350 g o más' },
      failureHeading: 'Piel crujiente, centro duro',
      failureBody:
        'Una patata es densa, y el calor avanza despacio por ella. En la freidora la piel se dora y se oscurece mucho antes de que el centro esté hecho, así que una patata puede parecer terminada con el centro todavía céreo y firme. El tenedor es una mala prueba, porque entra en una patata a medio hacer casi tan fácil como en una hecha. La prueba fiable es la temperatura: el almidón solo se vuelve esponjoso cuando el centro llega a unos {INT_F}°F. Los tiempos de la tabla suponen patatas de tamaño parecido cocinadas juntas. Si mezclas tamaños, las pequeñas estarán antes; sácalas y da a las grandes los minutos extra.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Dos patatas medianas para asar, de unos 250 g cada una, lavadas, secadas, untadas con aceite y sal gruesa y pinchadas varias veces. Cocina a {AF_F}°F durante {MEDIUM_MIN} minutos, girándolas a los {FLIP} minutos. Las pequeñas necesitan unos {SMALL_MIN} minutos y las grandes unos {LARGE_MIN}. Las mismas patatas van a {OVEN_F}°F durante unos {OVEN_MIN} minutos en horno convencional, así que la freidora ahorra un buen cuarto de hora.',
      donenessHeading: 'Cómo saber si está lista',
      donenessBody:
        'Clava un termómetro en el centro: {INT_F}–210°F ({INT_C}°C) significa que el almidón se ha cocinado y el interior quedará esponjoso. Sin termómetro, aprieta la patata con suavidad envuelta en un paño; debe ceder fácil de lado a lado. La piel debe quedar seca, crujiente y con alguna ampolla. Ábrela enseguida para que salga el vapor, o el interior se vuelve pastoso.',
      prepHeading: 'Antes de meterla',
      prepBody:
        'Elige patatas harinosas, de las que se usan para asar o puré; las patatas firmes quedan densas. Lávalas y sécalas por completo, úntalas con un poco de aceite y mucha sal gruesa, que saca humedad de la piel. Pincha cada patata varias veces con un tenedor. No las envuelvas en papel de aluminio: el aluminio atrapa el vapor y deja la piel blanda.',
      faqs: [
        {
          q: '¿Cuánto tarda una patata asada en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para una patata mediana de unos 250 g, girada a los {FLIP} minutos. Las pequeñas tardan unos {SMALL_MIN} minutos y las grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿A qué temperatura interna está hecha una patata asada?',
          a: 'A {INT_F}–210°F ({INT_C}°C) en el centro. Por debajo, el centro queda céreo por muy crujiente que se vea la piel.',
        },
        {
          q: '¿Hay que envolver las patatas en aluminio en la freidora?',
          a: 'No. El aluminio atrapa el vapor y deja la piel blanda. Aceite y sal gruesa sobre la piel desnuda dan la corteza crujiente que la freidora hace tan bien.',
        },
        {
          q: '¿Hay que pinchar las patatas antes de la freidora?',
          a: 'Sí, varias veces con un tenedor. Deja salir el vapor y evita que alguna patata se abra.',
        },
        {
          q: '¿Cuál es el equivalente en horno para una patata asada?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos en horno con ventilador.',
        },
      ],
    },
    'homemade-fries': {
      label: 'Patatas fritas caseras',
      metaTitle: 'Patatas fritas caseras en freidora de aire: tiempo, temperatura y crujientes',
      metaDescription:
        'Patatas recién cortadas en freidora de aire: {AF_F}°F durante {MIN} minutos, agitadas dos veces. Por qué quedan blandas, cómo remojarlas y tiempos por grosor.',
      metaKeywords: 'patatas fritas caseras freidora de aire, patatas naturales air fryer tiempo, papas fritas caseras freidora de aire',
      heading: 'Patatas fritas caseras en la freidora de aire',
      subDesc:
        'Patatas cortadas de patatas frescas, no congeladas. El ajuste, el remojo y cómo cambia el tiempo con el grosor.',
      cardDesc: 'Remojar, secar, una capa, dos agitados.',
      sizeLabels: { thin: 'Finas, 6 mm', medium: 'Normales, 1 cm', thick: 'Gruesas, 1,3 cm o más' },
      failureHeading: 'Por qué las patatas frescas quedan blandas o se queman',
      failureBody:
        'Las patatas frescas están llenas de agua y almidón en la superficie. Si metes las tiras cortadas directamente en la cesta, el almidón de fuera se dora y se quema mientras el interior sigue crudo, o el agua las cuece al vapor y quedan blandas si la cesta está llena. Las patatas congeladas evitan los dos problemas porque la fábrica ya las ha escaldado y secado, y por eso el ajuste para congeladas es distinto. En casa, un remojo hace el mismo trabajo: aclara el almidón suelto, así que el exterior se dora por igual en lugar de quemarse a manchas. Secarlas después importa igual. Una patata mojada pasa sus primeros minutos cociéndose al vapor, y una patata que se ha cocido al vapor nunca cruje del todo.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Dos patatas medianas cortadas en bastones de 1 cm, en remojo en agua fría 30 minutos, bien secas y mezcladas con una cucharada de aceite y sal. Cocina en una capa a {AF_F}°F durante {MEDIUM_MIN} minutos, agitando la cesta dos veces. Las patatas finas necesitan unos {THIN_MIN} minutos y las gruesas unos {THICK_MIN}. La versión de horno, en bandeja a {OVEN_F}°F, tarda unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Busca un dorado uniforme con los bordes algo más oscuros, y escucha: una patata hecha suena hueca y crujiente al chocar con las demás. Saca una y pártela; el interior debe estar tierno y harinoso, no translúcido. Si el exterior está dorado pero el interior sigue firme, las cortaste demasiado gruesas para el tiempo, así que dales tres minutos más y baja un poco el calor la próxima vez.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Usa patatas harinosas. Córtalas con un grosor uniforme para que terminen a la vez; las tandas desiguales siempre tienen trozos finos quemados y gruesos crudos. Remójalas en agua fría al menos 30 minutos y sécalas del todo con un paño limpio. Una cucharada de aceite por cada dos patatas es suficiente. Sala después de cocinar, no antes, o la sal saca agua.',
      faqs: [
        {
          q: '¿Cuánto tardan las patatas fritas caseras en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para patatas normales de 1 cm, agitadas dos veces. Las finas tardan unos {THIN_MIN} minutos y las gruesas unos {THICK_MIN}.',
        },
        {
          q: '¿Hay que remojar las patatas antes de la freidora de aire?',
          a: 'Ayuda mucho. Un remojo de 30 minutos en agua fría quita el almidón de la superficie, así que se doran por igual y crujen en lugar de quemarse a manchas.',
        },
        {
          q: '¿Por qué mis patatas quedan blandas en la freidora?',
          a: 'Normalmente estaban aún mojadas o la cesta iba demasiado llena. Sécalas bien y cocínalas en una sola capa, en tandas si hace falta.',
        },
        {
          q: '¿Sirve este ajuste para patatas congeladas?',
          a: 'No. Las patatas congeladas ya vienen escaldadas y siguen otras reglas; usa el modo congelados con la temperatura del envase.',
        },
        {
          q: '¿Cuál es el equivalente en horno para patatas fritas caseras?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en bandeja en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos en horno con ventilador.',
        },
      ],
    },
    'chicken-drumsticks': {
      label: 'Jamoncitos de pollo',
      metaTitle: 'Jamoncitos de pollo en la freidora de aire: tiempo, temperatura y carne tierna',
      metaDescription:
        'Jamoncitos de pollo en la freidora de aire: {AF_F}°F durante {MIN} minutos, voltear a los {FLIP}, seguros a {INT_F}°F. Por qué hay que pasar de ese punto, tiempos por tamaño y equivalente en horno.',
      metaKeywords: 'jamoncitos de pollo freidora de aire, muslitos de pollo air fryer tiempo, drumsticks freidora de aire',
      heading: 'Jamoncitos de pollo en la freidora de aire',
      subDesc:
        'Jamoncitos frescos, con hueso y piel. El ajuste, cuándo voltearlos y por qué un jamoncito que solo es seguro todavía no está terminado.',
      cardDesc: 'Seguro a {INT_F}°F, tierno cerca de {INT_ALT_TO_F}°F.',
      sizeLabels: { small: 'Pequeños, unos 90 g', medium: 'Medianos, unos 130 g', large: 'Grandes, desde 170 g' },
      internalAltLine: 'Más tiernos a {INT_ALT_F}–{INT_ALT_TO_F}°F ({INT_ALT_C}–{INT_ALT_TO_C}°C), medido junto al hueso',
      failureHeading: 'Seguro pero correoso: la trampa del jamoncito',
      failureBody:
        'El jamoncito es el músculo que más trabaja en el ave y está envuelto en tendones y tejido conectivo. A {INT_F}°F ya es seguro, pero ese tejido sigue tenso: la carne se pega al hueso, se nota elástica y puede verse algo rosada junto a la articulación aunque esté totalmente cocinada. Quien los saca a la temperatura de la pechuga cree que han quedado crudos; quien sigue hasta que la piel está muy oscura suele encontrarlos secos por fuera. La solución es pasar a propósito del número de seguridad. El colágeno empieza a convertirse en gelatina hacia los {INT_ALT_F}°F, y entre ese punto y {INT_ALT_TO_F}°F la carne se afloja, se vuelve sedosa y se separa del hueso sin esfuerzo.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Seis jamoncitos medianos, unos 700 g en total, secados y untados con aceite, ajo en polvo y pimentón ahumado. Precalienta {PREHEAT} minutos, colócalos en una sola capa con espacio entre ellos y cocina a {AF_F}°F durante {MEDIUM_MIN} minutos, volteando a los {FLIP}. Mide el más grueso junto al hueso. Los pequeños están en unos {SMALL_MIN} minutos y los grandes necesitan unos {LARGE_MIN}. En horno convencional la misma bandeja tarda unos {OVEN_MIN} minutos a {OVEN_F}°F.',
      donenessHeading: 'Cómo saber si están listos',
      donenessBody:
        'Introduce el termómetro por la parte carnosa de arriba hasta que toque el hueso y retíralo un poco. {INT_F}°F ({INT_C}°C) es el límite de seguridad; {INT_ALT_F}–{INT_ALT_TO_F}°F es donde los jamoncitos saben mejor. A la vista, la piel está tensa y bien dorada, la carne se ha retraído y deja ver un poco de hueso en el extremo estrecho, y la pieza gira con facilidad en la articulación. El rosa junto al hueso a la temperatura correcta es pigmento, no carne cruda.',
      prepHeading: 'Antes de meterlos',
      prepBody:
        'Seca bien la piel y sazona con generosidad; los jamoncitos son lo bastante gruesos para salarlos una hora antes. Haz uno o dos cortes hasta el hueso en el lado más grueso para que el calor llegue antes al centro. Colócalos alternando el extremo grueso y el fino para que encajen sin tocarse. La salsa barbacoa o cualquier glaseado se añade solo en los últimos dos o tres minutos.',
      faqs: [
        {
          q: '¿Cuánto tardan los jamoncitos de pollo en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para jamoncitos frescos medianos, volteados a los {FLIP} minutos. Los pequeños tardan unos {SMALL_MIN} minutos y los grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Qué temperatura interna deben alcanzar los jamoncitos?',
          a: 'Son seguros a {INT_F}°F ({INT_C}°C), pero la mayoría los lleva a {INT_ALT_F}–{INT_ALT_TO_F}°F, cuando el tejido conectivo se ablanda y la carne se suelta del hueso.',
        },
        {
          q: '¿Por qué mi jamoncito está rosado junto al hueso?',
          a: 'Los huesos de los pollos jóvenes sueltan algo de pigmento en la carne de alrededor. Si el termómetro marca {INT_F}°F o más, el color es inofensivo.',
        },
        {
          q: '¿Cuándo pongo la salsa barbacoa?',
          a: 'En los últimos dos o tres minutos. El azúcar de la salsa se quema mucho antes de que los jamoncitos estén hechos si va desde el principio.',
        },
        {
          q: '¿Cómo se compara con el horno?',
          a: 'Un horno convencional necesita {OVEN_F}°F durante unos {OVEN_MIN} minutos, y uno con ventilador {FAN_F}°F durante unos {FAN_MIN}. La freidora de aire deja la piel bastante más crujiente.',
        },
      ],
    },
    'chicken-tenders': {
      label: 'Tiras de pollo',
      metaTitle: 'Tiras de pollo en la freidora de aire: tiempo y temperatura (frescas)',
      metaDescription:
        'Tiras de pollo frescas y solomillos de pollo en la freidora de aire: {AF_F}°F durante {MIN} minutos, voltear a los {FLIP}, listas a {INT_F}°F. Al natural o empanadas, tiempos por tamaño.',
      metaKeywords: 'tiras de pollo freidora de aire, solomillo de pollo air fryer, tenders de pollo freidora de aire tiempo',
      heading: 'Tiras de pollo en la freidora de aire',
      subDesc:
        'Solomillos de pollo frescos o tiras cortadas de la pechuga, al natural o empanadas en casa. El ajuste corto, el volteo y cómo evitar que se sequen.',
      cardDesc: 'Pequeñas y rápidas: pon el temporizador al mínimo.',
      sizeLabels: { small: 'Tiras finas, unos 30 g', medium: 'Solomillos enteros, unos 60 g', large: 'Tiras gruesas, desde 90 g' },
      failureHeading: 'Hechas un minuto, secas al siguiente',
      failureBody:
        'Una tira de pollo es una pieza estrecha, casi sin grasa y con mucha superficie. El aire caliente llega a todos los lados a la vez, así que la pieza entera se hace en pocos minutos y no hay un centro grueso que amortigüe un error. Si dejas una cesta de tiras dos minutos de más mientras preparas la salsa, encogen, se endurecen y quedan fibrosas. El tendón blanco que recorre el solomillo empeora las cosas, porque se contrae con el calor y curva la tira. Trata las tiras como una cocción rápida y no como un asado: quita el tendón, corta todas del mismo grosor, empieza a comprobar un minuto antes del tiempo y sácalas en cuanto la más gruesa esté hecha. Las empanadas protegen algo la carne, pero necesitan un poco de aceite en spray para que el rebozado se dore antes de que el interior se pase.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        '450 g de solomillos enteros sin tendón, pasados por huevo y panko y rociados con un poco de aceite. Precalienta {PREHEAT} minutos, colócalos planos sin solaparse y cocina a {AF_F}°F durante {MEDIUM_MIN} minutos, volteando a los {FLIP}. Las tiras finas cortadas de la pechuga están en unos {SMALL_MIN} minutos y las gruesas en unos {LARGE_MIN}. Sobre una rejilla en horno convencional, la misma tanda tarda unos {OVEN_MIN} minutos a {OVEN_F}°F y sale más pálida.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Mide la tira más gruesa desde el extremo, metiendo la sonda a lo largo hasta el centro: a {INT_F}°F ({INT_C}°C) está hecha. Las tiras son demasiado finas para guardar mucho calor residual, así que apenas suben al sacarlas. Sin termómetro, parte la más gruesa por la mitad; debe estar blanca, sin centro vidrioso, y con jugos claros. El empanado debe quedar dorado por todas partes, no pálido donde se tocaban las piezas.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Quita el tendón blanco sujetando su extremo con un tenedor y deslizando la carne. Para empanar, prepara harina, huevo batido y panko, y presiona bien el pan rallado para que el ventilador no lo levante. Quince minutos en suero de leche con sal mantienen más jugosas las tiras al natural. Deja un dedo de espacio entre tiras.',
      faqs: [
        {
          q: '¿Cuánto tardan las tiras de pollo en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para solomillos frescos enteros, volteados a los {FLIP} minutos. Las tiras finas tardan unos {SMALL_MIN} minutos y las gruesas unos {LARGE_MIN}.',
        },
        {
          q: '¿A qué temperatura están hechas las tiras de pollo?',
          a: 'A {INT_F}°F ({INT_C}°C) en la pieza más gruesa. Como son finas, sácalas justo al llegar a esa lectura.',
        },
        {
          q: '¿Las tiras empanadas necesitan aceite?',
          a: 'Un poco en spray, sí. El pan rallado seco queda pálido y harinoso sin algo de grasa que lo ayude a dorarse.',
        },
        {
          q: '¿Sirve este ajuste para tiras empanadas congeladas?',
          a: 'No. Las tiras congeladas de supermercado vienen precocinadas y siguen las instrucciones del paquete; usa el modo congelados.',
        },
        {
          q: '¿Cuál sería el ajuste en el horno?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos con ventilador.',
        },
      ],
    },
    sausages: {
      label: 'Salchichas',
      metaTitle: 'Salchichas en la freidora de aire: tiempo, temperatura y sin reventar',
      metaDescription:
        'Salchichas frescas en la freidora de aire: {AF_F}°F durante {MIN} minutos, voltear a los {FLIP}, listas a {INT_F}°F las de cerdo o ternera. Bratwurst, salchichas finas y precocinadas.',
      metaKeywords: 'salchichas freidora de aire tiempo, bratwurst freidora de aire, salchichas frescas air fryer',
      heading: 'Salchichas en la freidora de aire',
      subDesc:
        'Salchichas frescas de cerdo, ternera o pollo, desde las finas de desayuno hasta la bratwurst, además de las precocinadas. El ajuste y cómo mantener la piel entera.',
      cardDesc: 'Calor moderado para que la tripa no reviente.',
      sizeLabels: { thin: 'Salchichas finas o de desayuno', medium: 'Salchichas normales, unos 2,5 cm', thick: 'Bratwurst o salchichas gruesas' },
      internalAltLine: 'Salchichas de pollo o pavo: {INT_ALT_F}°F ({INT_ALT_C}°C). Las precocinadas solo necesitan calentarse hasta {INT_ALT_F}°F.',
      failureHeading: 'Por qué revientan las salchichas en la freidora de aire',
      failureBody:
        'Una salchicha es un tubo cerrado de grasa, agua y especias. Al calentarse, el agua se convierte en vapor y la grasa se funde, y la presión interior sube más deprisa de lo que la tripa puede estirarse. Con demasiado calor, la piel se abre a lo largo, la grasa cae al cajón y humea, y la carne de dentro se seca. Mucha gente las pincha para evitarlo, pero así los jugos solo se escapan antes. Es mejor una temperatura moderada, con la que la tripa se tensa y se dora al mismo ritmo que se cocina el relleno, más un volteo a mitad para que ambos lados cojan color. Las salchichas recién sacadas de la nevera revientan con más facilidad que las que han reposado diez minutos, y las que se tocan en la cesta suelen romperse justo donde se pegan.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Seis salchichas frescas de cerdo de grosor normal, fuera de la nevera diez minutos. Colócalas en la cesta con espacio, cocina a {AF_F}°F durante {MEDIUM_MIN} minutos y dales la vuelta a los {FLIP}. Las salchichas finas de desayuno necesitan unos {THIN_MIN} minutos; una bratwurst fresca, unos {THICK_MIN}. Las bratwurst precocinadas ya son seguras y solo hay que calentarlas, lo que lleva unos minutos menos. En horno convencional las mismas salchichas frescas tardan unos {OVEN_MIN} minutos a {OVEN_F}°F.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Introduce el termómetro por un extremo hacia el centro. Las de cerdo y ternera están hechas a {INT_F}°F ({INT_C}°C); las de pollo y pavo necesitan {INT_ALT_F}°F ({INT_ALT_C}°C). Las precocinadas, como la mayoría de bratwurst de supermercado y las salchichas tipo Frankfurt, ya vienen cocinadas de fábrica, así que solo hay que calentarlas hasta {INT_ALT_F}°F. A la vista, una salchicha fresca está firme al tacto, dorada por ambos lados y sin rosa al cortarla.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Separa las salchichas unidas con tijeras en lugar de tirar de ellas. No las pinches. No hace falta aceite: sueltan grasa de sobra, y una hoja de papel de horno perforado debajo evita que humee si tu cajón se calienta mucho. Si quieres cebolla con la bratwurst, añade cebolla en tiras al cajón durante la segunda mitad del tiempo.',
      faqs: [
        {
          q: '¿Cuánto tardan las salchichas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para salchichas frescas normales, volteadas a los {FLIP} minutos. Las finas tardan unos {THIN_MIN} minutos y la bratwurst unos {THICK_MIN}.',
        },
        {
          q: '¿A qué temperatura están hechas las salchichas?',
          a: 'A {INT_F}°F ({INT_C}°C) las de cerdo y ternera. Las de pollo y pavo necesitan {INT_ALT_F}°F ({INT_ALT_C}°C).',
        },
        {
          q: '¿Cómo hago bratwurst precocinadas en la freidora de aire?',
          a: 'A la misma temperatura, pero estarán listas unos minutos antes. Ya vienen cocinadas, así que caliéntalas hasta que el centro llegue a {INT_ALT_F}°F y la piel esté dorada.',
        },
        {
          q: '¿Hay que pinchar las salchichas antes de hacerlas?',
          a: 'No. Al pincharlas se escapan la grasa y los jugos y la salchicha se seca. Una temperatura moderada evita que la piel reviente sin necesidad de pincharlas.',
        },
        {
          q: '¿Cuál es el equivalente en horno para salchichas?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en una bandeja en horno convencional, dándoles la vuelta una vez.',
        },
      ],
    },
    burgers: {
      label: 'Hamburguesas',
      metaTitle: 'Hamburguesas en la freidora de aire: tiempo, temperatura y punto',
      metaDescription:
        'Hamburguesas de ternera en la freidora de aire: {AF_F}°F durante {MIN} minutos, voltear a los {FLIP}, listas a {INT_F}°F. Tiempos por grosor, hamburguesas congeladas y equivalente en horno.',
      metaKeywords: 'hamburguesas freidora de aire, hamburguesa air fryer tiempo, hamburguesas congeladas freidora de aire',
      heading: 'Hamburguesas en la freidora de aire',
      subDesc:
        'Hamburguesas frescas de carne picada de ternera, caseras o de la tienda. El ajuste, el volteo y por qué la carne picada no tiene el mismo punto que un filete.',
      cardDesc: 'Carne picada: {INT_F}°F, no el punto del filete.',
      sizeLabels: { thin: 'Finas, unos 8 mm', medium: 'Normales, unos 1,3 cm', thick: 'Gruesas, unos 2 cm' },
      failureHeading: 'Abombadas, encogidas y con humo',
      failureBody:
        'La carne picada no se comporta como un filete. Al calentarse, sus proteínas se contraen y tiran de los bordes hacia dentro, de modo que el centro se abomba, se cocina de forma desigual y luego no queda plano en el pan. Mientras tanto la grasa se funde, gotea sobre el cajón caliente y puede echar humo. Hacer un hoyo poco profundo en el centro de cada hamburguesa cruda la mantiene plana mientras encoge; limpiar el cajón entre tandas, y en algunos modelos echar un chorrito de agua bajo la cesta, reduce el humo. El otro error es copiar el punto del filete. Al picar la carne, las bacterias de la superficie se reparten por toda la pieza, así que una hamburguesa tiene que llegar a {INT_F}°F en el centro, no a la cifra de poco hecho que sirve para un filete entero.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Cuatro hamburguesas de 1,3 cm de carne picada con un 20 % de grasa, unos 150 g cada una, con un hoyo en el centro y saladas justo antes. Precalienta {PREHEAT} minutos, cocina a {AF_F}°F durante {MEDIUM_MIN} minutos, volteando a los {FLIP}. Las finas tipo smash tardan unos {THIN_MIN} minutos y las gruesas de 2 cm unos {THICK_MIN}. Pon el queso en el último minuto. En horno convencional las mismas hamburguesas necesitan unos {OVEN_MIN} minutos a {OVEN_F}°F.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Mete el termómetro por un lado hasta el centro: {INT_F}°F ({INT_C}°C) es el objetivo de seguridad para la carne picada de ternera, y en ese punto los jugos salen claros y el centro está marrón, sin rojo. El color por sí solo puede engañar, porque hay carne que se dora pronto y otra que sigue rosada estando hecha. Una hamburguesa que se ha abombado se cocina antes en los bordes que en el centro, así que mide en el punto más grueso.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Elige carne con un 20 % de grasa más o menos; la más magra queda seca. Trabájala poco y forma las hamburguesas algo más anchas que el pan, porque encogen. Haz el hoyo con el pulgar, de la mitad de profundidad de la hamburguesa. Sala solo el exterior y justo antes de cocinar, o la carne queda con textura de salchicha. No hace falta aceite.',
      faqs: [
        {
          q: '¿Cuánto tardan las hamburguesas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para hamburguesas frescas de 1,3 cm, volteadas a los {FLIP} minutos. Las finas tardan unos {THIN_MIN} minutos y las gruesas de 2 cm unos {THICK_MIN}.',
        },
        {
          q: '¿A qué temperatura hay que cocinar una hamburguesa?',
          a: 'A {INT_F}°F ({INT_C}°C) en el centro. Es más que un filete porque al picar la carne las bacterias de la superficie pasan al interior.',
        },
        {
          q: '¿Puedo hacer hamburguesas congeladas en la freidora de aire?',
          a: 'Sí, a la misma temperatura. Suma unos 4–6 minutos al tiempo de las frescas, dales la vuelta a mitad y comprueba igualmente {INT_F}°F en el centro. Separa antes las que se hayan congelado juntas.',
        },
        {
          q: '¿Por qué se abomban mis hamburguesas en la freidora de aire?',
          a: 'Los bordes encogen más deprisa que el centro y lo empujan hacia arriba. Un hoyo hecho con el pulgar en cada hamburguesa cruda las mantiene planas.',
        },
        {
          q: '¿Cuál es el equivalente en horno para hamburguesas?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos sobre una rejilla en horno convencional, volteadas una vez.',
        },
      ],
    },
    'pork-tenderloin': {
      label: 'Solomillo de cerdo',
      metaTitle: 'Solomillo de cerdo en la freidora de aire: tiempo, temperatura y reposo',
      metaDescription:
        'Solomillo de cerdo entero en la freidora de aire: {AF_F}°F durante {MIN} minutos, voltear a los {FLIP}, {INT_F}°F tras el reposo. Tiempos por tamaño y equivalente en horno.',
      metaKeywords: 'solomillo de cerdo freidora de aire, solomillo de cerdo air fryer tiempo, solomillo de cerdo temperatura interna',
      heading: 'Solomillo de cerdo en la freidora de aire',
      subDesc:
        'Un solomillo de cerdo entero, asado en una pieza. El ajuste, el volteo y cómo el reposo termina el trabajo.',
      cardDesc: 'Dobla la punta y deja que el reposo lo termine.',
      sizeLabels: { small: 'Pequeño, unos 340 g', medium: 'Mediano, unos 450 g', large: 'Grande, desde 570 g' },
      failureHeading: 'Punta seca, centro crudo',
      failureBody:
        'Un solomillo se estrecha desde una cabeza gruesa hasta una punta fina de apenas dos o tres centímetros. En la freidora de aire la punta se hace mucho antes que la cabeza, y cuando la parte más gruesa por fin es segura, el extremo estrecho está gris y seco. Doblar los últimos centímetros de la punta bajo la pieza y sujetarlos con hilo o un palillo da a todo el solomillo un grosor más uniforme. La otra mitad de la solución es el reposo. Saca el solomillo un poco antes de {INT_F}°F y déjalo tres minutos sobre una tabla; el calor acumulado en las capas exteriores sigue avanzando hacia dentro y el centro sube unos 5°F mientras reposa. Ese reposo forma parte de llegar a la temperatura segura, no es un extra opcional, y además asienta los jugos para que se queden en la carne al cortarla.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Un solomillo de 450 g, sin la membrana plateada, con la punta doblada y untado con aceite, mostaza y hierbas. Precalienta {PREHEAT} minutos, cocina a {AF_F}°F durante {MEDIUM_MIN} minutos, volteando a los {FLIP}. Sácalo cuando la parte gruesa marque unos 140°F y déjalo reposar tres minutos hasta llegar a {INT_F}°F. Uno pequeño de 340 g tarda unos {SMALL_MIN} minutos y uno grande unos {LARGE_MIN}. El equivalente en horno convencional es {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber si está listo',
      donenessBody:
        'Mide en la parte más gruesa de la cabeza, por un lado. Tras los tres minutos de reposo, el centro debe marcar {INT_F}°F ({INT_C}°C): rosado claro, jugoso y seguro. Si al sacarlo de la cesta ya marca bastante más de 145°F, quedará firme y seco después del reposo, así que la próxima vez sácalo antes. Córtalo en contra de la fibra en medallones de algo más de 1 cm.',
      prepHeading: 'Antes de meterlo',
      prepBody:
        'Pasa un cuchillo fino bajo la membrana plateada, la capa brillante de un lado, y retírala; encoge con el calor y curva la pieza. Sécalo, úntalo con un poco de aceite y una mezcla de especias. Si tu cesta es pequeña, corta el solomillo por la mitad en lugar de curvarlo. Un glaseado dulce se añade solo en los últimos minutos.',
      faqs: [
        {
          q: '¿Cuánto tarda el solomillo de cerdo en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para un solomillo de 450 g, volteado a los {FLIP} minutos, más tres minutos de reposo. Los pequeños tardan unos {SMALL_MIN} minutos y los grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿A qué temperatura está hecho el solomillo de cerdo?',
          a: 'A {INT_F}°F ({INT_C}°C) tras tres minutos de reposo. Sácalo unos 5°F antes, porque sube mientras reposa.',
        },
        {
          q: '¿Por qué hay que dejar reposar el solomillo?',
          a: 'El exterior guarda calor que sigue cocinando el centro unos minutos, y los jugos se asientan para quedarse en las rodajas.',
        },
        {
          q: '¿Hay que quitar la membrana plateada?',
          a: 'Sí. No se ablanda al cocinarse y se contrae, curvando el solomillo y dejándolo correoso por un lado.',
        },
        {
          q: '¿Cuál es el equivalente en un horno normal?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos con ventilador.',
        },
      ],
    },
    'white-fish': {
      label: 'Pescado blanco',
      metaTitle: 'Bacalao y merluza en la freidora de aire: pescado blanco, tiempo y temperatura',
      metaDescription:
        'Filetes de pescado blanco en la freidora de aire: {AF_F}°F durante {MIN} minutos sin voltear, listos a {INT_F}°F. Bacalao, merluza, tilapia y abadejo, tiempos por grosor.',
      metaKeywords: 'bacalao freidora de aire, merluza freidora de aire tiempo, pescado blanco air fryer',
      heading: 'Pescado blanco en la freidora de aire',
      subDesc:
        'Bacalao, merluza, abadejo, tilapia y filetes parecidos, frescos o descongelados. El ajuste, por qué no conviene voltearlo y cómo sacarlo entero.',
      cardDesc: 'No lo voltees: sácalo entero sobre papel.',
      sizeLabels: { thin: 'Filetes finos, tilapia o lenguado', medium: 'Filetes normales, unos 2,5 cm', thick: 'Lomos gruesos de bacalao o merluza' },
      failureHeading: 'Pegado a la cesta, roto al voltear',
      failureBody:
        'El pescado blanco tiene lascas grandes y sueltas unidas por muy poca grasa y tejido conectivo. Una vez hecho, esas lascas se separan con solo tocarlas: es la textura que quieres en el plato y la razón de que se deshaga por el camino. Los filetes sin protección además se pegan a la rejilla, porque las proteínas de la cara inferior se adhieren al metal caliente antes de cuajar. Intentar voltear un filete a mitad de cocción es donde falla casi todo el mundo: se rompe, deja la piel o la base pegada a la cesta y termina en trozos. Así que no lo voltees. El aire que circula cocina la parte de arriba y el calor de la cesta basta para la de abajo en filetes de grosor normal. Cocínalo sobre papel de horno perforado o una base aceitada y saca la hoja entera al final.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Dos filetes de bacalao de unos 170 g y 2,5 cm de grosor, secados, pincelados con mantequilla derretida y cubiertos con ralladura de limón y pimentón. Precalienta {PREHEAT} minutos, colócalos sobre papel perforado y cocina a {AF_F}°F durante {MEDIUM_MIN} minutos sin darles la vuelta. La tilapia fina necesita unos {THIN_MIN} minutos y un lomo grueso de bacalao unos {THICK_MIN}. En horno convencional los mismos filetes tardan unos {OVEN_MIN} minutos a {OVEN_F}°F.',
      donenessHeading: 'Cómo saber si está listo',
      donenessBody:
        'Presiona con suavidad la parte más gruesa con un tenedor: el pescado blanco hecho pasa de translúcido a un blanco opaco y brillante y se separa en lascas jugosas. La temperatura interna segura es de {INT_F}°F ({INT_C}°C). Los filetes finos pasan de hechos a secos muy rápido, así que compruébalos dos minutos antes del tiempo. Si las lascas se ven calcáreas y secas en los bordes, el pescado se ha pasado.',
      prepHeading: 'Antes de meterlo',
      prepBody:
        'Descongela los filetes congelados por completo en la nevera y sécalos bien, porque el pescado descongelado suelta mucha agua. Dobla la cola fina hacia abajo para que el filete tenga un grosor uniforme. Un poco de grasa por encima ayuda al color y al sabor: algo de mantequilla, aceite o mayonesa con hierbas. Para un rebozado, presiona el panko solo por la parte de arriba.',
      faqs: [
        {
          q: '¿Cuánto tarda el pescado blanco en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para filetes de bacalao o merluza de 2,5 cm, sin voltear. La tilapia fina tarda unos {THIN_MIN} minutos y los lomos gruesos unos {THICK_MIN}.',
        },
        {
          q: '¿Hay que voltear el pescado en la freidora de aire?',
          a: 'No. Los filetes delicados se rompen al girarlos, y el aire caliente cocina bien la parte de arriba por sí solo.',
        },
        {
          q: '¿Cómo evito que el pescado se pegue a la cesta?',
          a: 'Cocínalo sobre papel de horno perforado o una base aceitada y saca la hoja entera. Secar bien el pescado y aceitar la parte de abajo también ayuda.',
        },
        {
          q: '¿A qué temperatura está hecho el bacalao?',
          a: 'A {INT_F}°F ({INT_C}°C) en la parte más gruesa, cuando la carne está opaca y se separa en lascas con facilidad.',
        },
        {
          q: '¿Cuál es el equivalente en horno para pescado blanco?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos con ventilador.',
        },
      ],
    },
    broccoli: {
      label: 'Brócoli',
      metaTitle: 'Brócoli en la freidora de aire: tiempo, temperatura y ramilletes crujientes',
      metaDescription:
        'Brócoli fresco en la freidora de aire: {AF_F}°F durante {MIN} minutos, agitando una vez. Puntas crujientes y tallos tiernos, tiempos por tamaño de ramillete y equivalente en horno.',
      metaKeywords: 'brócoli freidora de aire, brócoli air fryer tiempo, brócoli asado freidora de aire',
      heading: 'Brócoli en la freidora de aire',
      subDesc:
        'Ramilletes de brócoli fresco, asados hasta que los bordes crujen. El ajuste corto, cuándo agitar y cómo cortarlo para que puntas y tallos terminen a la vez.',
      cardDesc: 'Corta los tallos finos para que no se quemen las puntas.',
      sizeLabels: { small: 'Ramilletes pequeños, de un bocado', medium: 'Ramilletes medianos, unos 4 cm', large: 'Ramilletes grandes o cabezas en mitades' },
      failureHeading: 'Puntas quemadas, tallos duros',
      failureBody:
        'Un ramillete de brócoli son dos alimentos unidos. Arriba hay un racimo de yemas diminutas y secas con muchísima superficie, y en el aire caliente en movimiento esas yemas pierden el agua en pocos minutos, se vuelven crujientes, luego negras y amargas. El tallo de abajo es denso y húmedo y necesita varios minutos más para ablandarse. Si cocinas el ramillete entero tienes que elegir entre puntas carbonizadas con un tallo crudo o un tallo tierno bajo migas quemadas. La solución está en el cuchillo. Corta ramilletes con tallos cortos y parte los tallos gruesos a lo largo, para que cada pieza tenga un tallo fino. Pela el tronco principal y córtalo en rodajas; una vez hecho es dulce. El otro problema es el peso: los ramilletes secos son tan ligeros que el ventilador puede levantar los trozos pequeños hasta la resistencia, así que mézclalos antes con aceite.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Una cabeza mediana de brócoli cortada en ramilletes de unos 4 cm con los tallos partidos, mezclada con una cucharada de aceite de oliva, sal y ajo. Precalienta {PREHEAT} minutos, cocina a {AF_F}°F durante {MEDIUM_MIN} minutos y agita una vez a mitad. Los ramilletes de un bocado están en unos {SMALL_MIN} minutos y los grandes en unos {LARGE_MIN}. Asada en bandeja en horno convencional, la misma cabeza tarda unos {OVEN_MIN} minutos a {OVEN_F}°F.',
      donenessHeading: 'Cómo saber si está listo',
      donenessBody:
        'Las puntas deben estar doradas en los bordes, con algunos puntos oscuros y crujientes, mientras el resto del ramillete sigue de un verde intenso. Pincha un tallo con un cuchillo: debe entrar con una ligera resistencia. Los ramilletes de color verde grisáceo y blandos estaban demasiado juntos y se han cocido al vapor; las puntas negras y amargas indican que los trozos eran demasiado grandes para el tiempo o no llevaban aceite.',
      prepHeading: 'Antes de meterlo',
      prepBody:
        'Lava el brócoli con antelación y deja que se seque del todo, o pásalo por una centrifugadora de ensalada; los ramilletes mojados se cuecen al vapor en lugar de asarse. Cubre cada pieza de aceite de forma uniforme, porque protege las puntas y les da peso. El queso rallado o el zumo de limón van después de cocinar. No llenes la cesta más de una capa.',
      faqs: [
        {
          q: '¿Cuánto tarda el brócoli en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para ramilletes frescos medianos, agitando una vez. Los pequeños tardan unos {SMALL_MIN} minutos y los grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Por qué se quema el brócoli en la freidora de aire?',
          a: 'Las yemas finas de arriba se secan mucho antes de que el tallo se ablande. Corta ramilletes más pequeños con tallos finos y cúbrelos de aceite.',
        },
        {
          q: '¿Se puede hacer brócoli congelado en la freidora de aire?',
          a: 'Sí, pero suelta mucha agua y queda más blando. Usa el modo congelados, que tiene en cuenta esa humedad extra, en lugar de este ajuste para fresco.',
        },
        {
          q: '¿Por qué el brócoli sale volando en la freidora de aire?',
          a: 'Los ramilletes secos son lo bastante ligeros para que el ventilador los levante. Una capa de aceite les da peso y los mantiene en la cesta.',
        },
        {
          q: '¿Cuál es el equivalente en horno para el brócoli?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en una bandeja en horno convencional.',
        },
      ],
    },
    'brussels-sprouts': {
      label: 'Coles de Bruselas',
      metaTitle: 'Coles de Bruselas en la freidora de aire: tiempo, temperatura y hojas crujientes',
      metaDescription:
        'Coles de Bruselas en mitades en la freidora de aire: {AF_F}°F durante {MIN} minutos, agitando dos veces. Centro tierno, cara caramelizada, tiempos por tamaño y equivalente en horno.',
      metaKeywords: 'coles de bruselas freidora de aire, coles de bruselas air fryer tiempo, coles de bruselas crujientes',
      heading: 'Coles de Bruselas en la freidora de aire',
      subDesc:
        'Coles de Bruselas frescas, cortadas por la mitad y asadas. El ajuste, las dos agitadas y cómo lograr un centro tierno con la cara caramelizada.',
      cardDesc: 'Córtalas por la mitad y empieza con el corte abajo.',
      sizeLabels: { small: 'Pequeñas, en mitades', medium: 'Medianas, unos 2,5 cm, en mitades', large: 'Grandes, en cuartos' },
      failureHeading: 'Centro crudo y hojas quemadas',
      failureBody:
        'Una col de Bruselas es un manojo apretado de hojas alrededor de un corazón denso y macizo. Las hojas exteriores, sueltas, se secan y se tuestan casi al instante en la freidora de aire, pero el calor tiene que abrirse paso capa a capa hasta el centro, así que una col entera puede estar chamuscada por fuera y todavía dura y con sabor a azufre por dentro. Cortarlas por la mitad es la solución principal, porque deja el corazón al descubierto y reduce a la mitad el camino del calor. Después importa la cara del corte. Apoyada plana sobre la cesta caliente, esa cara se carameliza en una costra dulce y con sabor a fruto seco, mientras el lado redondeado gana hojas crujientes con el aire. Ponlas con el corte hacia abajo durante el primer tramo y solo entonces empieza a agitar. Las grandes conviene cortarlas en cuartos, o el centro seguirá rezagado.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        '450 g de coles medianas, limpias y en mitades, mezcladas con cucharada y media de aceite y sal. Precalienta {PREHEAT} minutos, colócalas con el corte hacia abajo y cocina a {AF_F}°F durante {MEDIUM_MIN} minutos, agitando dos veces en la segunda mitad. Las pequeñas en mitades necesitan unos {SMALL_MIN} minutos y las grandes en cuartos unos {LARGE_MIN}. En horno convencional la misma bandeja tarda unos {OVEN_MIN} minutos a {OVEN_F}°F.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Clava un cuchillo en la parte más gruesa del corazón: debe entrar con facilidad, como en una patata cocida. La cara del corte debe estar entre dorada intensa y marrón oscuro, y algunas hojas exteriores se habrán soltado y estarán crujientes y casi negras; son lo mejor. Un color gris o un olor fuerte a col indican que se cocinaron demasiado tiempo a poco calor, o al vapor en una cesta llena.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Recorta la base seca del tallo y quita las hojas amarillas. Corta a través del tallo para que cada mitad se mantenga unida. Mézclalas con aceite hasta que todas las caras del corte brillen. La crema de balsámico, la miel o un chorrito de limón van después de cocinar, porque el azúcar se quema al final de una cocción fuerte.',
      faqs: [
        {
          q: '¿Cuánto tardan las coles de Bruselas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para coles medianas en mitades, agitando dos veces. Las pequeñas tardan unos {SMALL_MIN} minutos y las grandes en cuartos unos {LARGE_MIN}.',
        },
        {
          q: '¿Hay que cortar las coles de Bruselas por la mitad?',
          a: 'Sí. Enteras se queman por fuera antes de que el corazón denso se haga; en mitades el corazón queda expuesto y tienen una cara plana que se dora.',
        },
        {
          q: '¿Por qué mis coles siguen duras por dentro?',
          a: 'Eran demasiado grandes para el tiempo. Corta las grandes en cuartos y comprueba el corazón con un cuchillo antes de sacarlas.',
        },
        {
          q: '¿Empiezo con el corte hacia arriba o hacia abajo?',
          a: 'Hacia abajo. La cara plana se carameliza contra la cesta caliente y luego las agitadas tuestan las hojas.',
        },
        {
          q: '¿Cuál es el equivalente en horno para las coles de Bruselas?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en una bandeja en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos con ventilador.',
        },
      ],
    },
    'sweet-potato-fries': {
      label: 'Boniato frito',
      metaTitle: 'Boniato frito en la freidora de aire: tiempo, temperatura y crujiente',
      metaDescription:
        'Bastones de boniato caseros en la freidora de aire: {AF_F}°F durante {MIN} minutos, agitando dos veces. Por qué se queman y quedan blandos, el truco de la maicena y tiempos por grosor.',
      metaKeywords: 'boniato freidora de aire, patatas de boniato air fryer, batata frita freidora de aire',
      heading: 'Boniato frito en la freidora de aire',
      subDesc:
        'Bastones de boniato fresco. Un ajuste más bajo que el de las patatas fritas, el rebozado que ayuda a que crujan y los tiempos por grosor.',
      cardDesc: 'Más bajo que las patatas: el azúcar se quema antes.',
      sizeLabels: { thin: 'Finos, 6 mm', medium: 'Normales, 1 cm', thick: 'Gruesos, 1,3 cm' },
      failureHeading: 'Bordes oscuros, centro blando',
      failureBody:
        'El boniato no es una patata de color naranja. Tiene mucho más azúcar y mucho menos del almidón que hace crujir una patata frita. Con el calor, ese azúcar se carameliza y luego se quema a una temperatura más baja de la que necesita el almidón para dorarse, así que las puntas se ponen oscuras y amargas mientras el resto sigue blando. La blandura es la otra mitad del problema: con poco almidón que pueda formar una costra rígida, el bastón de boniato tiende a quedar lacio por mucho que se cocine. Por eso este ajuste va más bajo que el de las patatas fritas y algo más corto, y por eso una capa fina de maicena cambia tanto el resultado. La maicena aporta la capa de almidón seco que le falta al boniato y se vuelve crujiente con el aire antes de que el azúcar de debajo tenga tiempo de quemarse.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Dos boniatos medianos cortados en bastones de 1 cm, secados y mezclados primero con una cucharada de maicena y luego con una cucharada de aceite y una pizca de sal. Cocina en una sola capa a {AF_F}°F durante {MEDIUM_MIN} minutos, agitando dos veces. Los finos tardan unos {THIN_MIN} minutos y los gruesos unos {THICK_MIN}. Hazlos por tandas; al enfriarse un minuto crujen un poco más. En bandeja en horno convencional: {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber si están listos',
      donenessBody:
        'Busca bordes dorados y con alguna ampolla, pero no negros, y bastones que mantengan la forma al levantarlos por un extremo en lugar de doblarse. Por dentro seguirán más blandos que una patata frita; es su naturaleza. Si las puntas se oscurecen antes de que el centro se haga, corta la siguiente tanda un poco más gruesa y más uniforme en lugar de subir el calor.',
      prepHeading: 'Antes de meterlos',
      prepBody:
        'Pelarlos es opcional; la piel queda crujiente. Corta los bastones de un grosor uniforme y sáltate el remojo largo de las patatas, porque apenas hay almidón en la superficie que eliminar. Sécalos, espolvorea primero la maicena y después el aceite, para que el polvo se adhiera. Condimenta con pimentón ahumado o canela y vuelve a salar al terminar.',
      faqs: [
        {
          q: '¿Cuánto tarda el boniato frito en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para bastones de 1 cm, agitando dos veces. Los finos tardan unos {THIN_MIN} minutos y los gruesos unos {THICK_MIN}.',
        },
        {
          q: '¿Por qué el boniato va a menos temperatura que las patatas?',
          a: 'Tiene mucho más azúcar, que se quema a una temperatura más baja de la que necesita el almidón de la patata para dorarse. Un ajuste algo más bajo deja que se haga el interior antes de que los bordes se pongan negros.',
        },
        {
          q: '¿Cómo consigo que el boniato quede crujiente?',
          a: 'Espolvoréalo con maicena antes del aceite, cocínalo en una sola capa y déjalo reposar un minuto al sacarlo. Nunca queda tan rígido como una patata frita.',
        },
        {
          q: '¿Hay que poner el boniato en remojo?',
          a: 'No. El remojo de las patatas elimina el almidón de la superficie, y el boniato tiene muy poco.',
        },
        {
          q: '¿Cuál es el equivalente en horno para el boniato frito?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en una bandeja en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos con ventilador.',
        },
      ],
    },
    'potato-wedges': {
      label: 'Patatas gajo',
      metaTitle: 'Patatas gajo en la freidora de aire: tiempo, temperatura y centro esponjoso',
      metaDescription:
        'Patatas gajo con piel en la freidora de aire: {AF_F}°F durante {MIN} minutos, girándolas una vez. Crujientes por fuera, esponjosas por dentro, tiempos por tamaño y equivalente en horno.',
      metaKeywords: 'patatas gajo freidora de aire, patatas deluxe air fryer, gajos de patata freidora de aire tiempo',
      heading: 'Patatas gajo en la freidora de aire',
      subDesc:
        'Gajos gruesos con piel cortados de patatas frescas. El ajuste, el único giro y cómo lograr que el centro se haga antes de que el exterior se oscurezca demasiado.',
      cardDesc: 'Piezas gruesas: repártelas y gíralas una vez.',
      sizeLabels: { small: 'Gajos pequeños, de patatas pequeñas', medium: 'Medianos, patata en 8 gajos', large: 'Grandes, patata en 6 gajos' },
      failureHeading: 'Dorados por fuera, densos por dentro',
      failureBody:
        'Un gajo es grueso por el lado de la piel y afilado por el borde interior, así que se cocina de forma desigual solo por su forma. La arista fina se dora primero mientras el corazón del gajo, a menudo de más de dos centímetros, sigue firme y céreo. A diferencia de una patata frita fina, el gajo tiene tanta masa que el exterior puede parecer hecho mucho antes que el centro. Hay dos soluciones. Primero, deja espacio a cada gajo: amontonados en la cesta se dan sombra, las caras ocultas se cuecen al vapor y el exterior queda blando en unos sitios y quemado en otros. Segundo, gíralos una vez sobre la otra cara cortada, para que ambas caras planas cojan color contra la cesta mientras la piel mira al ventilador. Para un centro muy esponjoso, hiérvelos cinco minutos antes de meterlos.',
      workedExampleHeading: 'Ejemplo práctico',
      workedExampleTemplate:
        'Dos patatas harinosas medianas, cada una cortada a lo largo en ocho gajos, secadas y mezcladas con una cucharada de aceite, sal, ajo en polvo y pimentón. Cocina en una sola capa, con la piel hacia abajo, a {AF_F}°F durante {MEDIUM_MIN} minutos, girándolas una vez a mitad. Los gajos de patatas pequeñas tardan unos {SMALL_MIN} minutos; los sextos gruesos, unos {LARGE_MIN}. En una bandeja en horno convencional, cuenta con {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Clava un cuchillo en la parte más gruesa, cerca de la piel: debe entrar sin resistencia, y el interior debe verse blanco y esponjoso, no vidrioso. Las caras cortadas deben estar doradas con bordes más oscuros y la piel arrugada y crujiente. Si el exterior está listo y el centro no, baja un poco el calor en los últimos minutos en lugar de renunciar a la costra.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Usa patatas harinosas para un centro esponjoso; las de piel fina y textura firme dan un gajo más cremoso. Frótalas pero no las peles. Corta cada patata en el mismo número de gajos para que terminen a la vez. Basta con un enjuague breve; sécalas bien. Un poco de parmesano rallado en los dos últimos minutos va muy bien.',
      faqs: [
        {
          q: '¿Cuánto tardan las patatas gajo en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para gajos medianos, girados una vez. Los pequeños tardan unos {SMALL_MIN} minutos y los grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Hay que hervir los gajos antes de la freidora?',
          a: 'Es opcional. Cinco minutos en agua hirviendo dan un centro más esponjoso y una superficie más rugosa que cruje mejor; sécalos bien después.',
        },
        {
          q: '¿En qué se diferencian los gajos de las patatas fritas?',
          a: 'Los gajos son mucho más gruesos, así que el reto es hacer el centro antes de que el exterior se dore demasiado. Necesitan más tiempo y un solo giro.',
        },
        {
          q: '¿Qué patatas son mejores para gajos?',
          a: 'Las harinosas para un interior esponjoso; las de carne amarilla y firme para uno más cremoso.',
        },
        {
          q: '¿Cuál es el equivalente en horno para las patatas gajo?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en una bandeja en horno convencional, o {FAN_F}°F durante {FAN_MIN} minutos con ventilador.',
        },
      ],
    },
    'frozen-fries': {
      label: 'Papas fritas congeladas',
      metaTitle: 'Papas fritas congeladas en freidora de aire: tiempo y temperatura',
      metaDescription:
        'Papas fritas congeladas en freidora de aire: {AF_F}°F durante {MIN} minutos, agitando {SHAKES} veces, directo de la bolsa. De papas finas a gruesas, y cómo convertir lo que dice el paquete.',
      metaKeywords: 'papas fritas congeladas freidora de aire, tiempo papas congeladas freidora de aire, cuánto tiempo papas fritas congeladas en freidora de aire',
      heading: 'Papas fritas congeladas en la freidora de aire',
      subDesc:
        'Papas de bolsa cocinadas directo del congelador, sin descongelar y sin aceite extra. El ajuste, cuándo agitar y cómo pasar las instrucciones del paquete a la freidora de aire.',
      cardDesc: 'Directo de la bolsa, una capa, dos agitadas.',
      sizeLabels: { thin: 'Papas finas tipo shoestring', medium: 'Papas rectas normales', thick: 'Papas gruesas tipo steak' },
      failureHeading: 'Por qué las papas congeladas salen blandas',
      failureBody:
        'Cada papa congelada lleva una capa fina de hielo, y en los primeros minutos ese hielo se derrite y se convierte en vapor. Si hay espacio alrededor de cada pieza, el ventilador se lleva el vapor y la superficie se dora en el aceite con el que la fábrica ya las frió. Si vacías la bolsa entera, el vapor queda atrapado: las papas de abajo se quedan en su propia agua y salen pálidas y lacias, por mucho que las dejes. Llena la cesta como mucho hasta la mitad y cocina una bolsa grande en dos tandas. Las {SHAKES} agitadas hacen el resto: separan las papas que se congelaron juntas y suben la capa húmeda de abajo hacia el aire caliente.',
      workedExampleHeading: 'Ejemplo práctico: del paquete a la freidora de aire',
      workedExampleTemplate:
        'Una bolsa típica de papas rectas dice {OVEN_F}°F durante {OVEN_MIN} minutos en el horno. Una freidora de cesta no llega a esa temperatura, así que funciona a {AF_F}°F y el tiempo baja a {MIN} minutos, porque el ventilador lleva el calor a las papas mucho más rápido que una bandeja. Precalienta {PREHEAT} minutos, echa media bolsa y agita más o menos a un tercio y a dos tercios del tiempo. Las papas finas están en unos {THIN_MIN} minutos; las gruesas necesitan unos {THICK_MIN}. Una bolsa europea pensada para horno con ventilador indica {FAN_F}°F ({FAN_C}°C) durante {FAN_MIN} minutos y termina en el mismo ajuste de freidora.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Las papas congeladas ya vienen cocidas, así que buscas color y crujido. Parte una: el exterior debe estar dorado y crujir, y el interior debe estar esponjoso y caliente. Si el fondo de la cesta sigue pálido, agita una vez más y dale dos minutos. Los cortes gruesos parecen listos antes de que el centro esté tierno, así que prueba una papa gruesa antes de sacar la tanda.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'No las descongeles y separa los grumos congelados antes de echarlas. El aceite es opcional porque las papas ya vienen prefritas, aunque un poco de aceite en spray ayuda a que las onduladas se doren parejo. Sala después de cocinar, no antes, para que la sal no saque más agua.',
      faqs: [
        {
          q: '¿Cuánto tardan las papas fritas congeladas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para papas normales, agitando {SHAKES} veces. Las finas tardan unos {THIN_MIN} minutos y las gruesas unos {THICK_MIN}.',
        },
        {
          q: '¿Hay que descongelar las papas antes?',
          a: 'No. Cocínalas directo del congelador. Al descongelarse la superficie se moja y se ablanda, y después nunca quedan bien crujientes.',
        },
        {
          q: '¿Las papas congeladas necesitan aceite?',
          a: 'Normalmente no. Se prefríen antes de congelarlas, así que se doran solas. Un poco de spray ayuda a que las papas sazonadas u onduladas tomen color parejo.',
        },
        {
          q: '¿Por qué mis papas congeladas siguen blandas?',
          a: 'Hay demasiadas en la cesta. El hielo de cada papa se vuelve vapor y una cesta llena lo atrapa. Cocina media bolsa cada vez y agita cuando lo indica el tiempo.',
        },
        {
          q: 'Mi bolsa dice {OVEN_F}°F durante {OVEN_MIN} minutos. ¿Qué pongo?',
          a: '{AF_F}°F durante unos {MIN} minutos en una freidora de cesta. El conversor de esta página acepta los números de cualquier bolsa, incluidos los de horno con ventilador.',
        },
      ],
    },
    'frozen-chicken-wings': {
      label: 'Alitas de pollo congeladas',
      metaTitle: 'Alitas de pollo congeladas en freidora de aire: crudas y precocidas',
      metaDescription:
        'Alitas de pollo crudas congeladas en freidora de aire: {AF_F}°F durante {MIN} minutos, agitando {SHAKES} veces, listas a {INT_F}°F. Las alitas precocidas o con salsa tardan unos {PRE_MIN} minutos.',
      metaKeywords: 'alitas de pollo congeladas freidora de aire, alitas congeladas freidora de aire tiempo, cocinar alitas congeladas en freidora de aire',
      heading: 'Alitas de pollo congeladas en la freidora de aire',
      subDesc:
        'Alitas crudas cocinadas desde congeladas, sin descongelar, más el ajuste corto para alitas ya cocidas o con salsa. Cómo separar el bloque y dejar la piel crujiente.',
      cardDesc: 'Crudas y congeladas: sepáralas en la primera agitada.',
      sizeLabels: { small: 'Alitas pequeñas, puntas y muslitos', medium: 'Alitas partidas normales', large: 'Alitas grandes o enteras' },
      failureHeading: 'Por qué las alitas congeladas se cocinan de forma desigual',
      failureBody:
        'Las alitas crudas suelen congelarse pegadas en grupos dentro de la bolsa. Donde dos alitas se tocan, ninguna de las dos caras recibe aire caliente, así que ese lado se queda pálido y la carne de debajo va por detrás del resto. Si dejas un bloque entero, obtienes alitas que parecen hechas por arriba y están crudas donde estaban pegadas. La piel tiene un segundo problema: las alitas congeladas llevan hielo, y el agua que sueltan tiene que irse antes de que la grasa bajo la piel se derrita y la vuelva crujiente. Por eso este ajuste es largo y constante, no corto y fuerte. Sepáralas con pinzas en la primera agitada, extiéndelas y deja que la segunda las voltee para que cada lado pase cerca del ventilador.',
      workedExampleHeading: 'Ejemplo práctico: una bolsa de alitas crudas congeladas',
      workedExampleTemplate:
        'Una bolsa de alitas crudas partidas indica hornear desde congeladas a {OVEN_F}°F durante {OVEN_MIN} minutos. En una freidora de cesta eso pasa a {AF_F}°F durante {MIN} minutos. Precalienta {PREHEAT} minutos, colócalas en una sola capa y agita dos veces; en la primera, separa las alitas que sigan congeladas juntas. Las alitas pequeñas terminan en unos {SMALL_MIN} minutos y las grandes en unos {LARGE_MIN}. Báñalas en salsa después de cocinarlas, no antes, o el azúcar se quema mucho antes de que la carne sea segura.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Las alitas crudas tienen que llegar a {INT_F}°F ({INT_C}°C) junto al hueso, así que mide el muslito más grueso con un termómetro; una bolsa congelada es justo el caso en que el color engaña, porque la piel puede dorarse mientras el centro sigue frío. Por encima de esa temperatura las alitas aguantan bien, y mucha gente las deja más tiempo para una textura más suelta y tierna. La piel debe estar crujiente y con ampollas, sin zonas blandas y pálidas donde se tocaban.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Lee la bolsa primero: las alitas crudas y las ya cocidas se parecen, pero necesitan ajustes distintos. Golpea la bolsa contra la encimera para romper los bloques grandes antes de abrirla. No hace falta aceite, la piel tiene grasa de sobra. Echa el adobo seco cuando ya estén separadas, en la primera agitada, para que se pegue a la superficie descongelada.',
      faqs: [
        {
          q: '¿Cuánto tardan las alitas crudas congeladas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F, agitando {SHAKES} veces, hasta llegar a {INT_F}°F. Las pequeñas tardan unos {SMALL_MIN} minutos y las grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Y las alitas congeladas ya cocidas o con salsa?',
          a: 'Solo necesitan calentarse, no cocinarse: unos {PRE_MIN} minutos a {PRE_F}°F ({PRE_C}°C), agitando una vez. Se cocinaron en fábrica, así que no hay riesgo de pollo crudo; sácalas cuando la salsa burbujee y esté pegajosa.',
        },
        {
          q: '¿Tengo que descongelar las alitas?',
          a: 'No. El ajuste de arriba es para alitas directo del congelador. Solo sepáralas en la primera agitada.',
        },
        {
          q: '¿Cuándo pongo la salsa?',
          a: 'Después de cocinarlas. Mezcla las alitas calientes con la salsa en un bol y, si quieres que se fije, devuélvelas uno o dos minutos.',
        },
        {
          q: '¿Puedo usar el ajuste de alitas frescas para las congeladas?',
          a: 'No. Las frescas se hacen más rápido y más calientes; las congeladas necesitan tiempo extra para que se vaya el hielo y el centro llegue a temperatura.',
        },
      ],
    },
    'frozen-chicken-breast': {
      label: 'Pechuga de pollo congelada',
      metaTitle: 'Pechuga de pollo congelada en freidora de aire: tiempo y temperatura segura',
      metaDescription:
        'Pechuga de pollo cruda directo del congelador en freidora de aire: {AF_F}°F durante {MIN} minutos, volteando a los {FLIP}, lista a {INT_F}°F. Tiempos por peso y equivalente en horno.',
      metaKeywords: 'pechuga de pollo congelada freidora de aire, cuánto tiempo pechuga congelada freidora de aire, pollo congelado freidora de aire',
      heading: 'Pechuga de pollo congelada en la freidora de aire',
      subDesc:
        'Pechugas crudas sin hueso cocinadas directo del congelador, sin descongelar. Un ajuste más bajo y más lento que el del pollo fresco, y por qué aquí el termómetro no es opcional.',
      cardDesc: 'Más baja y más lenta que la fresca: compruébala con termómetro.',
      sizeLabels: { small: 'Pequeña, 150 g (5–6 oz)', medium: 'Mediana, 220 g (7–8 oz)', large: 'Grande, 300 g (10–12 oz)' },
      failureHeading: 'Por qué el exterior se seca antes de que el centro sea seguro',
      failureBody:
        'Una pechuga congelada empieza con un bloque de hielo en el centro. El calor tiene que descongelar el centro antes de poder cocinarlo, mientras el exterior sigue recibiendo calor todo el tiempo. Si la pones al ajuste fuerte de una pechuga fresca, la superficie se vuelve correosa mientras el centro sigue por debajo de una temperatura segura. Por eso este ajuste es más bajo y más largo que el del pollo fresco: una temperatura más suave reduce la diferencia entre fuera y dentro, y el centro llega a una lectura segura antes de que los bordes se sequen. Lo que más importa es el grosor, así que cocina juntas piezas de tamaño parecido y mide la más grande.',
      workedExampleHeading: 'Ejemplo práctico: dos pechugas de una bolsa',
      workedExampleTemplate:
        'Una bolsa de pechugas crudas congeladas por separado dice {OVEN_F}°F durante {OVEN_MIN} minutos en el horno. En una freidora de cesta eso pasa a {AF_F}°F durante unos {MIN} minutos para una pechuga mediana. Precalienta {PREHEAT} minutos, coloca dos pechugas planas con espacio entre ellas y voltéalas a los {FLIP} minutos, que es también cuando añades los condimentos, porque la superficie ya descongelada los retiene. Las pequeñas suelen estar en unos {SMALL_MIN} minutos; las grandes necesitan unos {LARGE_MIN}. Mide la más gruesa antes de sacar ninguna.',
      donenessHeading: 'Cómo saber si está lista',
      donenessBody:
        'Aquí solo un termómetro es fiable: {INT_F}°F ({INT_C}°C) en la parte más gruesa, con la sonda metida de lado para que la punta quede en el centro. Una pechuga congelada puede estar dorada y firme por fuera con el centro aún rosado y frío, y cortarla para mirar deja escapar el jugo. Si una pechuga está lista y otra no, saca la terminada y dale a la otra unos minutos más. Déjala reposar tres minutos antes de cortarla.',
      prepHeading: 'Antes de meterla',
      prepBody:
        'Separa las pechugas que se congelaron juntas; ponlas unos segundos bajo agua fría si no se despegan. Quita la capa de hielo y seca la superficie. Úntalas con un poco de aceite para que luego se peguen los condimentos, pero guarda las especias para el momento de voltear, porque resbalan sobre una superficie congelada.',
      faqs: [
        {
          q: '¿Cuánto tarda una pechuga de pollo congelada en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para una pechuga mediana, volteando a los {FLIP} minutos. Las pequeñas tardan unos {SMALL_MIN} minutos y las grandes unos {LARGE_MIN}. Termina siempre comprobando con termómetro.',
        },
        {
          q: '¿Es seguro cocinar pechuga de pollo desde congelada?',
          a: 'Sí, siempre que la parte más gruesa llegue a {INT_F}°F ({INT_C}°C). Solo tarda más que la fresca, y el ajuste más bajo evita que el exterior se seque primero.',
        },
        {
          q: '¿Por qué no usar el ajuste de pechuga fresca?',
          a: 'El pollo fresco se hace más caliente y más corto. En una pechuga congelada eso dora el exterior mucho antes de que el centro se descongele y se cocine.',
        },
        {
          q: '¿Cuándo le pongo los condimentos?',
          a: 'Al voltearla. Para entonces la superficie se ha descongelado y el condimento se pega en lugar de resbalar sobre el hielo.',
        },
        {
          q: '¿Puedo cocinar igual pechugas empanizadas congeladas?',
          a: 'Mira el paquete. Muchos productos empanizados se venden crudos y siguen la página de tiras de pollo congeladas; los ya cocidos solo necesitan calentarse.',
        },
      ],
    },
    'frozen-chicken-nuggets': {
      label: 'Nuggets de pollo congelados',
      metaTitle: 'Nuggets de pollo congelados en freidora de aire: tiempo y temperatura',
      metaDescription:
        'Nuggets de pollo congelados en freidora de aire: {AF_F}°F durante {MIN} minutos, agitando una vez, calientes por dentro a {INT_F}°F. De pollo popcorn a dinosaurios, con la conversión del paquete.',
      metaKeywords: 'nuggets de pollo congelados freidora de aire, nuggets freidora de aire tiempo, cuánto tiempo nuggets congelados freidora de aire',
      heading: 'Nuggets de pollo congelados en la freidora de aire',
      subDesc:
        'Nuggets empanizados ya cocidos, directo de la bolsa. Estás recalentando, no cocinando, así que el objetivo es un rebozado crujiente sin un centro reseco.',
      cardDesc: 'Ya vienen cocidos: solo los recalientas.',
      sizeLabels: { small: 'Pollo popcorn o mini bocados', medium: 'Nuggets normales', large: 'Formas grandes o nuggets de dinosaurio' },
      internalLine: 'Calientes por dentro a {INT_F}°F ({INT_C}°C) en el centro; ya vienen cocidos',
      failureHeading: 'Por qué los nuggets quedan secos y duros',
      failureBody:
        'Casi todos los nuggets congelados de la tienda se cocinan por completo antes de congelarse. El pollo de dentro ya está hecho; lo que la freidora tiene que hacer es dejar crujiente el empanizado y devolver el calor al centro. Eso cambia lo que puede salir mal. El peligro no es quedarse corto sino pasarse: los nuggets son pequeños, así que un par de minutos de más secan el pollo hasta dejarlo firme y fibroso, y el rebozado pasa de crujiente a duro. Trátalos como un recalentado corto. Usa el tiempo de esta página, agita la cesta una vez a la mitad para dar la vuelta a las piezas que estaban planas y empieza a mirar uno o dos minutos antes. Los nuggets amontonados en dos capas también se cuecen al vapor entre sí, y el rebozado de abajo queda blando.',
      workedExampleHeading: 'Ejemplo práctico: media bolsa para dos',
      workedExampleTemplate:
        'Una bolsa de nuggets empanizados dice {OVEN_F}°F durante {OVEN_MIN} minutos en bandeja. En una freidora de cesta eso pasa a {AF_F}°F durante {MIN} minutos. Precalienta {PREHEAT} minutos, extiende unos veinte nuggets en una capa y agita una vez a la mitad. El pollo popcorn está listo en unos {SMALL_MIN} minutos y los dinosaurios grandes en unos {LARGE_MIN}. Si el paquete trae un ajuste para horno con ventilador, {FAN_F}°F durante {FAN_MIN} minutos, el resultado es el mismo ajuste de freidora.',
      donenessHeading: 'Cómo saber si están listos',
      donenessBody:
        'Como el pollo ya está cocido, lo que compruebas es que el centro esté caliente, no que alcance una temperatura de seguridad: {INT_F}°F ({INT_C}°C) en el nugget más grueso si quieres un número, o parte uno y busca vapor de punta a punta. El rebozado debe estar dorado de forma pareja y crujir al presionarlo. Si está duro en vez de crujiente, la próxima tanda necesita uno o dos minutos menos.',
      prepHeading: 'Antes de meterlos',
      prepBody:
        'Comprueba que el paquete dice totalmente cocido. Algunos productos de pollo empanizado se venden crudos, y esos van con la página de tiras de pollo congeladas y un termómetro. No los descongeles ni añadas aceite: el rebozado se frió en la fábrica. Deja un poco de espacio entre nuggets para que el aire llegue a todos los lados.',
      faqs: [
        {
          q: '¿Cuánto tardan los nuggets congelados en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F, agitando una vez. El pollo popcorn tarda unos {SMALL_MIN} minutos y las formas grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Los nuggets de pollo congelados ya vienen cocidos?',
          a: 'La mayoría sí. El paquete dirá “totalmente cocido”. Si dice “sin cocinar” o “crudo”, cocínalos hasta {INT_F}°F con termómetro, como el pollo crudo.',
        },
        {
          q: '¿Hay que voltear los nuggets?',
          a: 'Basta con agitar una vez a la mitad. Las piezas pequeñas se dan la vuelta solas al agitar; no hace falta voltearlas una por una.',
        },
        {
          q: '¿Por qué mis nuggets quedan duros?',
          a: 'Estuvieron demasiado tiempo. Los nuggets solo necesitan recalentarse, así que un par de minutos de más los resecan. Prueba con el tiempo más corto en la próxima tanda.',
        },
        {
          q: '¿Puedo hacer nuggets y papas a la vez?',
          a: 'Sí, si la cesta no va llena. Empieza con las papas y añade los nuggets para los últimos {MIN} minutos, así terminan juntos.',
        },
      ],
    },
    'frozen-tater-tots': {
      label: 'Tater tots congelados',
      metaTitle: 'Tater tots congelados en freidora de aire: tiempo, temperatura y crujido',
      metaDescription:
        'Tater tots congelados en freidora de aire: {AF_F}°F durante {MIN} minutos, agitando {SHAKES} veces. De mini tots a coronas de papa, crujientes por fuera y calientes por dentro.',
      metaKeywords: 'tater tots freidora de aire, tater tots congelados freidora de aire tiempo, croquetas de papa congeladas freidora de aire',
      heading: 'Tater tots congelados en la freidora de aire',
      subDesc:
        'Tots y bocados de papa de bolsa cocinados desde congelados. El ajuste, las agitadas y cómo lograr un centro caliente dentro del crujido.',
      cardDesc: 'Agita dos veces para que cada lado forme costra.',
      sizeLabels: { small: 'Mini tots', medium: 'Tater tots normales', large: 'Coronas de papa o bocados grandes' },
      failureHeading: 'Por qué los tots quedan crujientes por fuera y fríos por dentro',
      failureBody:
        'Un tot es un pequeño cilindro de papa rallada bien prensada, mucho más denso que una papa frita del mismo tamaño. El exterior se fríe rápido en el aire caliente y forma costra en pocos minutos, pero las tiras apretadas del centro tardan en calentarse, así que un tot que se ve dorado puede seguir tibio y pastoso por dentro. Si subes el calor para ir más rápido, la costra se oscurece antes de que el centro la alcance. La solución es un ajuste constante y tiempo suficiente, con la cesta agitada dos veces para que los tots rueden sobre una cara nueva cada vez. Como son redondos, ruedan en lugar de quedarse planos, y la agitada les da la vuelta por ti.',
      workedExampleHeading: 'Ejemplo práctico: una bolsa familiar',
      workedExampleTemplate:
        'Una bolsa de tots dice {OVEN_F}°F durante {OVEN_MIN} minutos en el horno, dándoles la vuelta una vez. En una freidora de cesta eso pasa a {AF_F}°F durante {MIN} minutos. Precalienta {PREHEAT} minutos, echa los suficientes para cubrir el fondo en una capa y agita dos veces, más o menos a un tercio y a dos tercios del tiempo. Los mini tots están en unos {SMALL_MIN} minutos y las coronas de papa en unos {LARGE_MIN}. Para mucha gente, cocina en dos tandas en vez de amontonarlos.',
      donenessHeading: 'Cómo saber si están listos',
      donenessBody:
        'Los tots vienen precocidos, así que juzgas el crujido y el calor. Deben estar bien dorados por todas partes y sonar huecos al chocar en la cesta. Muerde uno del centro de la tanda: el interior debe estar suave, esponjoso y caliente. Si el exterior está listo pero el centro sigue frío, no subas el calor; añade dos minutos y agita otra vez.',
      prepHeading: 'Antes de meterlos',
      prepBody:
        'Cocínalos directo del congelador y separa los que estén pegados. No necesitan aceite, aunque un poco de spray da una costra más oscura y pareja. Sazona con sal o con una mezcla de especias en la última agitada o justo después de cocinar, cuando la superficie sigue algo aceitosa y la retiene.',
      faqs: [
        {
          q: '¿Cuánto tardan los tater tots en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F, agitando {SHAKES} veces. Los mini tots tardan unos {SMALL_MIN} minutos y las coronas grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Agito o volteo los tater tots?',
          a: 'Agita. Los tots son redondos y ruedan sobre otra cara al agitar la cesta, así que dos agitadas los doran parejo sin voltearlos uno a uno.',
        },
        {
          q: '¿Por qué mis tots están fríos en el centro?',
          a: 'Son más densos que las papas fritas y necesitan el tiempo completo. Si los sacas en cuanto se ven dorados, el centro prensado queda frío.',
        },
        {
          q: '¿Los tater tots necesitan aceite?',
          a: 'No, se prefríen antes de congelarlos. Un poco de spray solo añade color.',
        },
        {
          q: '¿Puedo hacer tots cargados en la freidora de aire?',
          a: 'Sí. Cocina los tots por completo, añade queso y los toppings y devuélvelos uno o dos minutos hasta que el queso se derrita.',
        },
      ],
    },
    'frozen-pizza': {
      label: 'Pizza congelada',
      metaTitle: 'Pizza congelada en freidora de aire: tiempo, temperatura y qué tamaño cabe',
      metaDescription:
        'Pizza congelada en freidora de aire: {AF_F}°F durante {MIN} minutos para una pizza individual. Qué tamaños caben en la cesta y cómo lograr una base crujiente bajo el queso derretido.',
      metaKeywords: 'pizza congelada freidora de aire, pizza congelada freidora de aire tiempo, pizza individual freidora de aire',
      heading: 'Pizza congelada en la freidora de aire',
      subDesc:
        'Pizzas congeladas individuales y mini, cocinadas desde congeladas. El ajuste, qué tamaños caben en tu cesta y cómo evitar que la parte de arriba termine antes que la base.',
      cardDesc: 'La individual cabe en la cesta; la familiar no.',
      sizeLabels: { small: 'Mini pizza, 13 cm (5")', medium: 'Pizza individual, 18–20 cm (7–8")', large: '25–30 cm (10–12"): solo tipo horno u 8 qt o más' },
      failureHeading: 'Por qué la parte de arriba está lista antes que la base',
      failureBody:
        'En una freidora de aire el calor viene de arriba y el ventilador lo sopla justo sobre la pizza. El queso y los ingredientes quedan más cerca de la resistencia y empiezan a dorarse casi de inmediato, mientras la base sigue siendo masa congelada apoyada en la cesta. Si la pones muy caliente, obtienes pepperoni quemado sobre una base pálida y blanda. Un ajuste algo más bajo de lo que esperarías deja que el calor baje a través de la pizza, de modo que la base queda crujiente cuando el queso ya se derritió y burbujea. El tamaño es la otra mitad: una pizza encajada contra las paredes bloquea el aire y la base se cuece al vapor en vez de dorarse. Tiene que quedar plana y con hueco alrededor del borde.',
      workedExampleHeading: 'Ejemplo práctico: una pizza individual',
      workedExampleTemplate:
        'La caja de una pizza individual dice {OVEN_F}°F durante {OVEN_MIN} minutos, directo sobre la rejilla del horno. En una freidora de cesta eso pasa a {AF_F}°F durante {MIN} minutos. Precalienta {PREHEAT} minutos para que la base empiece sobre una superficie caliente, coloca la pizza plana y no la toques; no hay que darle la vuelta. Mira la base al final del tiempo más corto levantando un borde con una espátula. Una mini pizza está en unos {SMALL_MIN} minutos; una grande en una freidora tipo horno necesita unos {LARGE_MIN}.',
      donenessHeading: 'Cómo saber si está lista',
      donenessBody:
        'Levanta el borde: la parte de abajo debe estar dorada y firme, y la porción debe sostenerse recta en vez de doblarse. El queso tiene que estar derretido del todo y burbujeando en el centro, no solo en los bordes. Si la parte de arriba está lista pero la base sigue blanda, cubre la pizza sin apretar con papel de aluminio y dale dos minutos más.',
      prepHeading: '¿Cabe?',
      prepBody:
        'Mide la cesta antes de comprar. Una cesta redonda de 5 qt mide por dentro solo unos 20–22 cm (8 a 8½ pulgadas) de ancho, así que una pizza individual de 18 a 20 cm cabe con algo de margen. Una de 25 o 30 cm no cabe: necesita una freidora tipo horno o una cesta de unos 8 qt o más. Quita todo el envoltorio, incluido el disco de cartón.',
      faqs: [
        {
          q: '¿Cuánto tarda la pizza congelada en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para una pizza individual de 18–20 cm. Una mini de 13 cm tarda unos {SMALL_MIN} minutos.',
        },
        {
          q: '¿Qué tamaño de pizza congelada cabe en una freidora de aire?',
          a: 'En una cesta de 5 qt, unos 20 cm como máximo, porque por dentro mide solo unos 20–22 cm. Una pizza de 25–30 cm necesita una freidora tipo horno o una cesta de 8 qt o más; si no, córtala por la mitad y hazla en dos veces.',
        },
        {
          q: '¿Hay que precalentar para la pizza congelada?',
          a: 'Sí, {PREHEAT} minutos. Una cesta caliente da ventaja a la base congelada para que se dore antes de que el queso se pase.',
        },
        {
          q: '¿Por qué la base de mi pizza queda blanda?',
          a: 'La pizza es demasiado grande para la cesta y el aire no la rodea, o se quedó el cartón debajo. Tiene que quedar plana y con espacio en los bordes.',
        },
        {
          q: '¿Hay que darle la vuelta a la pizza congelada?',
          a: 'No. Los ingredientes se caen. Déjala plana y mira la base al final del tiempo más corto.',
        },
      ],
    },
    'frozen-fish-sticks': {
      label: 'Palitos de pescado congelados',
      metaTitle: 'Palitos de pescado congelados en freidora de aire: tiempo y temperatura',
      metaDescription:
        'Palitos de pescado congelados en freidora de aire: {AF_F}°F durante {MIN} minutos, volteando a los {FLIP}, listos a {INT_F}°F. Palitos, bocados y filetes empanizados de bolsa.',
      metaKeywords: 'palitos de pescado congelados freidora de aire, varitas de pescado freidora de aire, pescado empanizado congelado freidora de aire',
      heading: 'Palitos de pescado congelados en la freidora de aire',
      subDesc:
        'Palitos de pescado, varitas y filetes empanizados cocinados desde congelados. El ajuste, una vuelta con cuidado y cómo mantener el empanizado pegado al pescado.',
      cardDesc: 'Voltea con cuidado: el empanizado cuaja antes que el pescado.',
      sizeLabels: { small: 'Bocados o mini palitos', medium: 'Palitos de pescado', large: 'Filetes empanizados o rebozados' },
      failureHeading: 'Por qué el empanizado se rompe y el pescado se deshace',
      failureBody:
        'Un palito de pescado es un bloque de pescado blanco y escamoso sujeto solo por su empanizado. En la freidora, el pan rallado cuaja y se dora rápido en la cara que mira al ventilador, mientras el pescado de dentro sigue blando y el empanizado de abajo sigue húmedo contra la cesta. Si lo volteas demasiado pronto, la parte de abajo se queda pegada a la rejilla, el empanizado se arranca y el pescado se rompe. Si lo volteas con brusquedad, pasa lo mismo. Espera a la mitad del tiempo, cuando la base ya se ha afirmado, y pasa una espátula fina o unas pinzas por debajo de cada palito para girarlo de un solo movimiento. Los filetes rebozados son todavía más frágiles que los empanizados, así que un poco de aceite en la cesta ayuda a que se suelten.',
      workedExampleHeading: 'Ejemplo práctico: una caja de palitos de pescado',
      workedExampleTemplate:
        'Una caja de palitos de pescado empanizados dice {OVEN_F}°F durante {OVEN_MIN} minutos en el horno, dándoles la vuelta una vez. En una freidora de cesta eso pasa a {AF_F}°F durante {MIN} minutos. Precalienta {PREHEAT} minutos, coloca los palitos en una capa con un pequeño hueco entre ellos y voltéalos a los {FLIP} minutos. Los bocados necesitan unos {SMALL_MIN} minutos; los filetes gruesos empanizados, unos {LARGE_MIN}. Si la caja da un ajuste para horno con ventilador, {FAN_F}°F durante {FAN_MIN} minutos, el ajuste de freidora es el mismo.',
      donenessHeading: 'Cómo saber si están listos',
      donenessBody:
        'El empanizado debe estar dorado y crujiente por ambos lados, y el pescado de dentro blanco, opaco y desmenuzarse al presionarlo con un tenedor. Un termómetro en el centro de la pieza más gruesa debe marcar {INT_F}°F ({INT_C}°C). Si la segunda cara sigue pálida, faltan uno o dos minutos; un palito que se dobla en vez de mantenerse recto no está caliente por dentro.',
      prepHeading: 'Antes de meterlos',
      prepBody:
        'Cocínalos directo del congelador; los palitos descongelados se ablandan y pierden el empanizado. Pon un poco de aceite en la cesta o usa un papel perforado para que el pan rallado no se pegue. Separa los palitos congelados juntos antes de meterlos, porque separarlos después rompe el empanizado.',
      faqs: [
        {
          q: '¿Cuánto tardan los palitos de pescado en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F, volteando a los {FLIP} minutos. Los bocados tardan unos {SMALL_MIN} minutos y los filetes empanizados unos {LARGE_MIN}.',
        },
        {
          q: '¿Hay que voltear los palitos de pescado?',
          a: 'Sí, una vez a la mitad y con cuidado. Antes de eso la parte de abajo está demasiado blanda para levantarla limpia.',
        },
        {
          q: '¿Por qué el empanizado se pega a la cesta?',
          a: 'La base seguía húmeda al voltearlos o la cesta estaba seca. Ponle un poco de aceite y espera a la mitad para dar la vuelta.',
        },
        {
          q: '¿Los palitos de pescado necesitan aceite?',
          a: 'En el pescado no; el empanizado viene prefrito. Un poco de aceite en la cesta evita que se peguen.',
        },
        {
          q: '¿Puedo cocinar igual los filetes rebozados?',
          a: 'Sí, durante unos {LARGE_MIN} minutos. El rebozado es más blando que el empanizado, así que usa papel y gíralos con una espátula ancha.',
        },
      ],
    },
    'frozen-chicken-tenders': {
      label: 'Tiras de pollo congeladas',
      metaTitle: 'Tiras de pollo congeladas en freidora de aire: ¿crudas o cocidas?',
      metaDescription:
        'Tiras de pollo empanizadas congeladas en freidora de aire: {AF_F}°F durante {MIN} minutos, volteando a los {FLIP}, comprobadas a {INT_F}°F. Cómo distinguir crudas de cocidas en el paquete.',
      metaKeywords: 'tiras de pollo congeladas freidora de aire, chicken tenders congelados freidora de aire, dedos de pollo congelados freidora de aire',
      heading: 'Tiras de pollo congeladas en la freidora de aire',
      subDesc:
        'Tiras empanizadas, chicken tenders y dedos de pollo del congelador. El ajuste, la vuelta y la única línea del paquete que decide cuánto cuidado necesitas.',
      cardDesc: 'Lee el paquete: muchas se venden crudas.',
      sizeLabels: { small: 'Tiras finas o dedos de pollo', medium: 'Tiras empanizadas normales', large: 'Tiras gruesas o caseras' },
      failureHeading: 'El paquete dice crudo, el empanizado dice listo',
      failureBody:
        'Las tiras empanizadas vienen en dos tipos que se ven idénticos en la bolsa. Unas están totalmente cocidas y solo hay que recalentarlas. Muchas otras, sobre todo las de marca propia y las de estilo casero, son pollo crudo con un empanizado ya dorado, y el paquete lo dice en letra pequeña: sin cocinar, cocinar completamente o crudo. Ese empanizado se frió solo lo justo para fijarlo, así que se ve dorado antes de que la freidora empiece, y es fácil sacarlas cuando parecen listas con el pollo aún crudo por dentro. Una tira además es más gruesa que un nugget, así que el centro tarda más en llegar a temperatura. Trata cada bolsa como cruda salvo que diga claramente totalmente cocido, y usa un termómetro en la tira más gruesa.',
      workedExampleHeading: 'Ejemplo práctico: una bolsa de tiras empanizadas crudas',
      workedExampleTemplate:
        'Una bolsa de tiras empanizadas sin cocinar dice {OVEN_F}°F durante {OVEN_MIN} minutos, dándoles la vuelta una vez. En una freidora de cesta eso pasa a {AF_F}°F durante {MIN} minutos. Precalienta {PREHEAT} minutos, coloca de seis a ocho tiras planas sin que se toquen y voltéalas a los {FLIP} minutos. Los dedos de pollo finos tardan unos {SMALL_MIN} minutos; las tiras gruesas caseras necesitan unos {LARGE_MIN}. Mide la más gruesa antes de servir; las ya cocidas pueden salir unos minutos antes.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Para tiras crudas, {INT_F}°F ({INT_C}°C) en la más gruesa, con la sonda metida desde el extremo para que la punta quede en el centro. El color del empanizado aquí no dice nada, porque se doró antes de congelarse. Las tiras ya cocidas solo tienen que estar calientes de punta a punta. En los dos casos el empanizado debe quedar crujiente por ambos lados, sin zonas blandas donde se tocaban.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Busca primero la línea de cocción del paquete y fíjate si dice crudo o totalmente cocido. No las descongeles. Deja espacio entre tiras y, si el empanizado se ve seco y harinoso, dale un poco de aceite en spray. Lávate las manos después de tocar pollo empanizado crudo, aunque esté congelado.',
      faqs: [
        {
          q: '¿Cuánto tardan las tiras de pollo congeladas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F, volteando a los {FLIP} minutos. Las finas tardan unos {SMALL_MIN} minutos y las gruesas unos {LARGE_MIN}.',
        },
        {
          q: '¿Cómo sé si las tiras congeladas están crudas?',
          a: 'Lo dice el paquete. Busca “sin cocinar”, “crudo” o “cocinar completamente” cerca de las instrucciones. Si no está claro, trátalas como crudas y usa un termómetro.',
        },
        {
          q: '¿A qué temperatura deben llegar las tiras crudas?',
          a: '{INT_F}°F ({INT_C}°C) en la pieza más gruesa, medida con termómetro, no juzgada por el color.',
        },
        {
          q: '¿En qué se diferencian las tiras de los nuggets?',
          a: 'Los nuggets casi siempre vienen cocidos y son pequeños. Las tiras son más gruesas y a menudo crudas, así que necesitan más tiempo y un termómetro.',
        },
        {
          q: '¿Hay que voltear las tiras congeladas?',
          a: 'Sí, una vez a los {FLIP} minutos, para que el lado contra la cesta también quede crujiente.',
        },
      ],
    },
    'frozen-hash-browns': {
      label: 'Hash browns congelados',
      metaTitle: 'Hash browns congelados en freidora de aire: tortitas, tiempo y temperatura',
      metaDescription:
        'Tortitas de papa hash brown congeladas en freidora de aire: {AF_F}°F durante {MIN} minutos, volteando a los {FLIP}. De mini redondas a tortitas gruesas, doradas por las dos caras sin pegarse.',
      metaKeywords: 'hash browns congelados freidora de aire, tortitas de papa congeladas freidora de aire, hash browns freidora de aire tiempo',
      heading: 'Hash browns congelados en la freidora de aire',
      subDesc:
        'Tortitas y redondas de papa rallada del congelador. El ajuste, la única vuelta y cómo dorar las dos caras en lugar de una.',
      cardDesc: 'Tortitas planas: una vuelta a la mitad.',
      sizeLabels: { small: 'Mini redondas o bocados', medium: 'Tortitas normales', large: 'Tortitas gruesas o grandes' },
      failureHeading: 'Por qué una cara queda pálida y pegada',
      failureBody:
        'Una tortita de hash brown es plana, así que apoya toda una cara contra la rejilla de la cesta. La cara de arriba recibe todo el aire del ventilador y se dora, mientras la de abajo recibe mucho menos aire y se queda pálida. Agitar no sirve, porque una tortita plana solo se desliza sobre el mismo lado. La papa rallada además suelta almidón al calentarse, y sobre una cesta seca ese almidón pega la base al metal, así que la costra se arranca cuando por fin intentas moverla. La solución es una sola vuelta a la mitad, con espátula, y una película fina de aceite en la cesta o en las tortitas para que el almidón se dore en vez de pegarse. Tras la vuelta, la cara pálida mira al ventilador y se pone al día.',
      workedExampleHeading: 'Ejemplo práctico: desayuno para cuatro',
      workedExampleTemplate:
        'Una caja de tortitas hash brown dice {OVEN_F}°F durante {OVEN_MIN} minutos, dándoles la vuelta una vez. En una freidora de cesta eso pasa a {AF_F}°F durante {MIN} minutos. Precalienta {PREHEAT} minutos, coloca cuatro tortitas planas sin solaparse y voltéalas a los {FLIP} minutos. Las mini redondas necesitan unos {SMALL_MIN} minutos y las gruesas unos {LARGE_MIN}. No dejan sitio para nada más, así que cocina el tocino o las salchichas antes o después, no a la vez.',
      donenessHeading: 'Cómo saber si están listas',
      donenessBody:
        'Las dos caras deben estar bien doradas y crujientes, y los bordes algo más oscuros. Presiona el centro con una espátula: debe sentirse firme, no blando, y el interior debe estar caliente y tierno al cortar una. Si la segunda cara sigue pálida, dale uno o dos minutos más en vez de subir el calor.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Cocínalas desde congeladas y no las apiles. Pinta o rocía las tortitas con un poco de aceite, o engrasa la cesta, para que el almidón se dore en vez de soldarse a la rejilla. Salpimienta después de darles la vuelta.',
      faqs: [
        {
          q: '¿Cuánto tardan los hash browns congelados en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F, volteando a los {FLIP} minutos. Las mini redondas tardan unos {SMALL_MIN} minutos y las tortitas gruesas unos {LARGE_MIN}.',
        },
        {
          q: '¿Hay que voltear los hash browns?',
          a: 'Sí. Son planos, así que al agitar sigue abajo la misma cara. Una vuelta a la mitad dora los dos lados.',
        },
        {
          q: '¿Por qué los hash browns se pegan a la cesta?',
          a: 'El almidón de la papa los pega a una cesta seca. Un poco de aceite en spray lo evita.',
        },
        {
          q: '¿Puedo cocinar hash browns rallados sueltos?',
          a: 'Sí, en una capa fina sobre papel, bien prensados. Dales la vuelta por partes a la mitad; tardan unos minutos más que las tortitas.',
        },
        {
          q: '¿En qué se diferencian aquí los hash browns de los tater tots?',
          a: 'Las tortitas son planas y se voltean una vez. Los tots son redondos, así que se agitan y ruedan solos sobre caras nuevas.',
        },
      ],
    },
    'frozen-egg-rolls': {
      label: 'Rollitos de primavera congelados',
      metaTitle: 'Rollitos de primavera congelados en freidora de aire: tiempo y temperatura',
      metaDescription:
        'Rollitos de primavera y egg rolls congelados en freidora de aire: {AF_F}°F durante {MIN} minutos, volteando a los {FLIP}. Masa crujiente y con burbujas, relleno caliente.',
      metaKeywords: 'rollitos de primavera congelados freidora de aire, egg rolls congelados freidora de aire, samosas congeladas freidora de aire',
      heading: 'Rollitos de primavera congelados en la freidora de aire',
      subDesc:
        'Egg rolls, rollitos de primavera y bocados envueltos parecidos, cocinados desde congelados. El ajuste, la vuelta y cómo calentar el relleno antes de que se quemen las puntas.',
      cardDesc: 'Rocía la masa y dales una vuelta.',
      sizeLabels: { small: 'Mini rollitos de primavera', medium: 'Egg rolls normales', large: 'Egg rolls grandes o samosas' },
      failureHeading: 'Por qué las puntas se queman y el centro sigue frío',
      failureBody:
        'Un rollito es una masa fina y seca envuelta alrededor de un relleno grueso y húmedo. La masa toma color en minutos, y las puntas dobladas, donde la masa es más fina y sobresale hacia el aire, se llenan de burbujas y se oscurecen primero. Mientras tanto, el relleno de col y carne empezó congelado del todo y tarda en calentarse, así que un rollito que se ve perfecto por fuera puede seguir helado en el centro. Dos cosas lo arreglan. Un poco de aceite en spray sobre la masa deja que se dore de forma pareja y lenta en vez de secarse y quemarse en las puntas. Y una vuelta a la mitad sube la cara pálida hacia el ventilador mientras le da tiempo al relleno para ponerse al día. Deja espacio entre rollitos para que los lados también queden crujientes.',
      workedExampleHeading: 'Ejemplo práctico: una caja de egg rolls',
      workedExampleTemplate:
        'Una caja de egg rolls congelados dice {OVEN_F}°F durante {OVEN_MIN} minutos en bandeja, dándoles la vuelta una vez. En una freidora de cesta eso pasa a {AF_F}°F durante {MIN} minutos. Precalienta {PREHEAT} minutos, rocía los rollitos con un poco de aceite, colócalos en una capa con hueco entre cada uno y voltéalos a los {FLIP} minutos. Los mini rollitos de primavera necesitan unos {SMALL_MIN} minutos y los egg rolls grandes unos {LARGE_MIN}. Déjalos reposar dos minutos antes de morder: el relleno guarda mucho calor.',
      donenessHeading: 'Cómo saber si están listos',
      donenessBody:
        'La masa debe estar dorada y con burbujas por todas partes, sin zonas blancas y harinosas, y crujir al presionarla. La prueba de verdad es el relleno: corta uno por la mitad y comprueba que humea justo en el centro. Si la masa está lista pero el centro sigue frío, dales dos minutos más; las puntas toman algo más de color pero no deberían quemarse con este ajuste.',
      prepHeading: 'Antes de meterlos',
      prepBody:
        'Cocínalos desde congelados; la masa descongelada se ablanda y se rompe. Rocíalos o píntalos con un poco de aceite por todos los lados, algo que importa más en estos que en cualquier otra cosa del congelador. Separa con cuidado los que se congelaron juntos para que la masa no se abra. Sirve la salsa aparte para que la masa siga crujiente.',
      faqs: [
        {
          q: '¿Cuánto tardan los rollitos de primavera congelados en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F, volteando a los {FLIP} minutos. Los mini tardan unos {SMALL_MIN} minutos y los egg rolls grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Los rollitos congelados necesitan aceite en la freidora de aire?',
          a: 'Un poco en spray, sí. Sin él la masa se seca, queda harinosa y se quema en las puntas.',
        },
        {
          q: '¿Por qué mis rollitos están fríos por dentro?',
          a: 'El relleno empezó congelado y necesita el tiempo completo. Corta uno para comprobarlo en vez de fiarte del color.',
        },
        {
          q: '¿Sirve para samosas y rollitos de primavera?',
          a: 'Sí. Los mini rollitos son más rápidos y las samosas gruesas tardan más o menos lo mismo que los egg rolls grandes.',
        },
        {
          q: '¿Hay que descongelar los rollitos antes?',
          a: 'No. La masa descongelada absorbe la humedad del relleno y se rompe al moverla.',
        },
      ],
    },
    'reheat-pizza': {
      label: 'Pizza sobrante',
      metaTitle: 'Recalentar pizza en la freidora de aire: base crujiente',
      metaDescription:
        'Recalienta pizza sobrante en la freidora de aire: {AF_F}°F durante {MIN} minutos para una base crujiente y el queso fundido. Tiempos para masa fina, normal y gruesa, y el método en horno.',
      metaKeywords: 'recalentar pizza freidora de aire, cuánto tiempo recalentar pizza en freidora de aire, pizza sobrante air fryer, temperatura recalentar pizza',
      heading: 'Recalentar pizza en la freidora de aire',
      subDesc:
        'Porciones frías de la nevera, de vuelta a una base crujiente y un queso suave y fundido. El ajuste suave, por qué más calor lo empeora y en qué cambia la masa gruesa.',
      cardDesc: 'Con menos calor, la base alcanza al queso.',
      sizeLabels: { thin: 'Porción de masa fina', medium: 'Porción normal', thick: 'Porción de masa gruesa o deep-dish' },
      failureHeading: 'Por qué la base sigue blanda mientras el queso se pasa',
      failureBody:
        'Una porción recién salida de la nevera está fría de arriba abajo, y en la freidora de aire el calor llega desde arriba. El queso y los ingredientes están justo en esa corriente, así que se funden, sueltan aceite y se ponen correosos, mientras la masa de abajo sigue fría y algo húmeda tras una noche en la caja. Subir la temperatura solo agranda esa diferencia. La solución es una temperatura moderada y un tiempo corto, para que el calor baje a través de la porción y saque la humedad de la base antes de que la parte de arriba se pase. Pon las porciones directamente en la cesta, sin papel de aluminio, para que el aire llegue por debajo, y nunca las apiles: una porción encima cuece al vapor la de abajo.',
      workedExampleHeading: 'Ejemplo práctico: dos porciones normales',
      workedExampleTemplate:
        'Dos porciones de una pizza normal para llevar, recién sacadas de la nevera. Precalienta {PREHEAT} minutos, colócalas una junto a otra en la cesta y caliéntalas a {AF_F}°F durante {MEDIUM_MIN} minutos. Una porción de masa fina está lista en unos {THIN_MIN}, y una de masa gruesa necesita unos {THICK_MIN}, porque la base gruesa tarda más en calentarse. Si recalientas una bandeja entera en un horno convencional, son {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber que está lista',
      donenessBody:
        'Levanta una porción con unas pinzas: debe quedarse recta sin que la punta se doble, y la parte de abajo debe verse seca y ligeramente tostada. El queso debe estar fundido y brillante, empezando a burbujear por los bordes. Si el queso se dora a manchas mientras la base todavía se dobla, el ajuste era demasiado alto o la porción demasiado gruesa para ese tiempo.',
      prepHeading: 'Antes de meterla',
      prepBody:
        'Saca las porciones de la caja unos minutos antes para quitarles el frío más intenso. Retira los ingredientes frescos como la rúcula o la albahaca y vuelve a ponerlos después. Si la porción está muy seca, unas gotas de agua en la cesta, junto a ella y no encima, mantienen el queso suave.',
      faqs: [
        {
          q: '¿Cuánto tiempo se recalienta la pizza en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para una porción normal. La masa fina tarda unos {THIN_MIN} minutos y la gruesa unos {THICK_MIN}.',
        },
        {
          q: '¿Por qué no recalentar la pizza a más temperatura?',
          a: 'El calor llega desde arriba, así que un ajuste más alto pasa el queso antes de que la base fría se haya calentado y secado.',
        },
        {
          q: '¿Pongo papel de aluminio o de horno bajo la porción?',
          a: 'No. El aire tiene que llegar por debajo para que cruja. Usa un papel solo con porciones con mucho queso que gotean, y que sea más pequeño que la porción.',
        },
        {
          q: '¿Es lo mismo que cocinar una pizza congelada?',
          a: 'No. Una pizza congelada está cruda por arriba y congelada del todo, así que necesita otro ajuste; este solo calienta y devuelve el crujiente a una porción ya hecha.',
        },
        {
          q: '¿Cómo se recalienta la pizza en el horno?',
          a: 'Pon las porciones en una bandeja a {OVEN_F}°F durante unos {OVEN_MIN} minutos, o en una bandeja precalentada si quieres la base más crujiente.',
        },
      ],
    },
    'reheat-fries': {
      label: 'Patatas fritas sobrantes',
      metaTitle: 'Recalentar patatas fritas en la freidora de aire: crujientes',
      metaDescription:
        'Recalienta patatas fritas sobrantes en la freidora de aire: {AF_F}°F durante {MIN} minutos, agitando una vez. Por qué se ponen correosas de un día para otro y el método en horno.',
      metaKeywords: 'recalentar patatas fritas freidora de aire, cómo recalentar papas fritas en air fryer, patatas fritas sobrantes freidora de aire',
      heading: 'Recalentar patatas fritas en la freidora de aire',
      subDesc:
        'Patatas fritas del día anterior, para llevar o caseras, crujientes otra vez en pocos minutos. Por qué se ponen correosas en la nevera y el recalentado corto y fuerte que recupera la mayoría.',
      cardDesc: 'Corto y fuerte, con un poco de aceite, en una capa.',
      sizeLabels: { small: 'Un puñado pequeño', medium: 'Una ración para llevar', large: 'Una ración grande o familiar' },
      failureHeading: 'Por qué las patatas del día anterior se ponen correosas',
      failureBody:
        'Una patata frita recién hecha cruje porque su superficie está seca y su interior es almidón cocido y esponjoso. En la nevera ese almidón se recristaliza poco a poco y suelta agua, que empapa la costra desde dentro. Al día siguiente el exterior está blando y el centro se ha vuelto denso y gomoso. Un recalentado largo y suave lo empeora, porque seca el interior hasta dejarlo como cartón antes de que la superficie cruja. Lo que funciona es lo contrario: un golpe corto de aire caliente que seque y fría la superficie rápido, con una capa muy fina de aceite que ayude, mientras el interior solo se calienta. Las patatas finas se recuperan mejor; las gruesas nunca vuelven del todo a estar como recién hechas.',
      workedExampleHeading: 'Ejemplo práctico: una ración para llevar',
      workedExampleTemplate:
        'Una ración de patatas fritas sobrantes de la nevera, mezclada con media cucharadita de aceite. Precalienta {PREHEAT} minutos, extiéndelas en una sola capa y caliéntalas a {AF_F}°F durante {MEDIUM_MIN} minutos, agitando una vez a mitad. Un puñado pequeño está listo en unos {SMALL_MIN} minutos y una ración grande, en una sola capa, en unos {LARGE_MIN}. En una bandeja en un horno convencional, las mismas patatas necesitan {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber que están listas',
      donenessBody:
        'Coge una: debe mantenerse recta y sonar crujiente al golpearla contra la cesta. Ábrela y el interior debe estar caliente, no solo templado. Las patatas que se quiebran, parecen huecas o saben secas han estado demasiado tiempo; si siguen blandas, estaban amontonadas o la cesta no se precalentó.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Sacude la sal suelta o las migas, que se queman. Una cantidad muy pequeña de aceite marca la diferencia, porque la mayor parte del aceite de la fritura se ha absorbido. Separa las patatas que se hayan pegado en la caja. Vuelve a salar solo después de recalentar. Las patatas guardadas en una bolsa cerrada están más húmedas que las guardadas abiertas, así que dales el tiempo más largo.',
      faqs: [
        {
          q: '¿Cuánto tiempo se recalientan las patatas fritas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para una ración, agitando una vez. Un puñado pequeño tarda unos {SMALL_MIN} minutos y una ración grande unos {LARGE_MIN}.',
        },
        {
          q: '¿Se pueden recalentar las patatas de McDonald’s en la freidora de aire?',
          a: 'Sí. Las patatas finas de comida rápida se recuperan mejor que las gruesas; míralas un minuto antes, porque pasan de crujientes a secas muy rápido.',
        },
        {
          q: '¿Por qué mis patatas recalentadas quedan duras?',
          a: 'Se calentaron demasiado tiempo. Las patatas sobrantes solo necesitan un recalentado corto y fuerte; el interior ya ha perdido agua y se seca enseguida.',
        },
        {
          q: '¿Hace falta añadir aceite?',
          a: 'Un poco ayuda. La mayor parte del aceite de la fritura se ha absorbido durante la noche, así que una capa fina ayuda a que la superficie vuelva a crujir.',
        },
        {
          q: '¿Cómo se recalientan las patatas fritas en el horno?',
          a: 'Extiéndelas en una bandeja a {OVEN_F}°F durante unos {OVEN_MIN} minutos, dándoles la vuelta una vez. Una bandeja precalentada dora antes la parte de abajo.',
        },
      ],
    },
    'reheat-fried-chicken': {
      label: 'Pollo frito sobrante',
      metaTitle: 'Recalentar pollo frito en la freidora de aire: crujiente',
      metaDescription:
        'Recalienta pollo frito en la freidora de aire: {AF_F}°F durante {MIN} minutos, volteando a los {FLIP}, hasta {INT_F}°F. Tiempos para muslos, contramuslos y pechugas, y el método en horno.',
      metaKeywords: 'recalentar pollo frito freidora de aire, cuánto tiempo recalentar pollo frito en air fryer, pollo frito sobrante freidora de aire',
      heading: 'Recalentar pollo frito en la freidora de aire',
      subDesc:
        'Pollo frito sobrante, con hueso, de vuelta a un rebozado crujiente y un centro caliente. Por qué el rebozado se ablanda en la nevera y cómo secarlo antes de meterlo.',
      cardDesc: 'Déjalo fuera un rato para que la costra se seque.',
      sizeLabels: { small: 'Muslo (la parte baja)', medium: 'Contramuslo', large: 'Pechuga o pieza grande' },
      internalLine: 'Caliente del todo a {INT_F}°F ({INT_C}°C) en la parte más gruesa: la pauta del USDA para sobras',
      failureHeading: 'Por qué el rebozado se ablanda en la nevera',
      failureBody:
        'El pollo frito es una costra seca y crujiente alrededor de una carne húmeda. Tras una noche en un recipiente cerrado, la humedad pasa de la carne al rebozado, y el aire frío de dentro también se condensa sobre él. Por la mañana la costra está blanda y algo pegajosa. Si lo metes directamente en la freidora de aire, esa agua tiene que salir en forma de vapor antes de que el rebozado pueda crujir, así que el exterior sigue húmedo cuando por fin se calienta la zona del hueso. La solución empieza antes de recalentar. Saca las piezas del recipiente y déjalas sobre una rejilla mientras se precalienta la freidora, para que la superficie se seque y se les pase el frío. Después, un calor moderado termina el trabajo: dora la costra y lleva la carne junto al hueso a temperatura al mismo ritmo.',
      workedExampleHeading: 'Ejemplo práctico: dos contramuslos de la nevera',
      workedExampleTemplate:
        'Dos contramuslos de pollo frito sobrantes, reposados sin tapar en una rejilla mientras se calienta la freidora. Precalienta {PREHEAT} minutos, ponlos con la piel hacia arriba y caliéntalos a {AF_F}°F durante {MEDIUM_MIN} minutos, dándoles la vuelta a los {FLIP}. Un muslo necesita unos {SMALL_MIN} minutos y una pechuga grande unos {LARGE_MIN}. En un horno convencional, las mismas piezas se recalientan a {OVEN_F}°F durante unos {OVEN_MIN} minutos sobre una rejilla con bandeja debajo.',
      donenessHeading: 'Cómo saber que está listo',
      donenessBody:
        'Comprueba la pieza más gruesa con un termómetro junto al hueso, sin tocarlo: la pauta del USDA es {INT_F}°F ({INT_C}°C) para sobras recalentadas. El rebozado debe sonar crujiente al golpearlo y verse seco, con un poco de grasa chisporroteando alrededor. Una zona fría junto al hueso con la costra oscura indica que el calor era demasiado alto para ese tamaño.',
      prepHeading: 'Antes de meterlo',
      prepBody:
        'Deja las piezas destapadas mientras precalientas y quítales con papel la grasa que haya quedado del fondo del recipiente. No hace falta más aceite. Calienta juntas piezas de tamaño parecido, o añade las pequeñas unos minutos más tarde.',
      faqs: [
        {
          q: '¿Cuánto tiempo se recalienta el pollo frito en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para un contramuslo, volteándolo a los {FLIP}. Un muslo tarda unos {SMALL_MIN} minutos y una pechuga grande unos {LARGE_MIN}.',
        },
        {
          q: '¿Qué temperatura debe alcanzar el pollo recalentado?',
          a: '{INT_F}°F ({INT_C}°C) en la parte más gruesa, que es la pauta del USDA para cualquier sobra recalentada.',
        },
        {
          q: '¿Puedo recalentar así el pollo de KFC u otro pollo para llevar?',
          a: 'Sí. El pollo para llevar frito a presión tiene un rebozado más grueso, así que dale el tiempo más largo y compruébalo junto al hueso.',
        },
        {
          q: '¿Le pongo aceite en spray?',
          a: 'No. El rebozado todavía tiene mucho aceite de la fritura; más aceite solo lo deja grasiento.',
        },
        {
          q: '¿Cómo se recalienta el pollo frito en el horno?',
          a: 'Sobre una rejilla con bandeja debajo a {OVEN_F}°F durante unos {OVEN_MIN} minutos. La rejilla deja que el aire llegue por debajo para que no se ablande.',
        },
      ],
    },
    'reheat-wings': {
      label: 'Alitas sobrantes',
      metaTitle: 'Recalentar alitas de pollo en la freidora de aire',
      metaDescription:
        'Recalienta alitas de pollo sobrantes en la freidora de aire: {AF_F}°F durante {MIN} minutos, agitando una vez, hasta {INT_F}°F. Cómo evitar que la salsa se queme y el método en horno.',
      metaKeywords: 'recalentar alitas freidora de aire, cuánto tiempo recalentar alitas de pollo en air fryer, alitas sobrantes freidora de aire, alitas búfalo recalentar',
      heading: 'Recalentar alitas de pollo en la freidora de aire',
      subDesc:
        'Alitas sobrantes, con salsa o con especias secas, calientes y crujientes de nuevo. Por qué la salsa se quema antes de que la carne se caliente y el truco que evita que las alitas pegajosas se quemen.',
      cardDesc: 'Quita la salsa espesa antes y vuelve a ponerla después.',
      sizeLabels: { small: 'Alitas pequeñas, puntas y muslitos', medium: 'Alitas partidas normales', large: 'Alitas grandes' },
      internalLine: 'Calientes del todo a {INT_F}°F ({INT_C}°C) junto al hueso: la pauta del USDA para sobras',
      failureHeading: 'Por qué la salsa se quema antes de que la alita se caliente',
      failureBody:
        'La mayoría de las salsas para alitas llevan azúcar: miel, azúcar moreno, kétchup, salsa barbacoa o chile dulce. El azúcar empieza a caramelizarse a una temperatura mucho más baja de la necesaria para calentar una alita fría hasta el hueso, y en la freidora de aire la salsa está por fuera, justo en el aire caliente. Así que el glaseado se oscurece, luego amarga y se pone negro, mientras la carne de dentro sigue fría. La salsa búfalo tiene menos azúcar, pero se separa y deja un charco de mantequilla. La solución es recalentar la alita, no la salsa. Raspa o limpia el glaseado espeso, recalienta las alitas casi sin salsa y mézclalas al final con salsa nueva o templada. Las alitas con especias secas pueden ir directamente.',
      workedExampleHeading: 'Ejemplo práctico: una caja de alitas para llevar',
      workedExampleTemplate:
        'Ocho alitas barbacoa sobrantes, sin la parte más espesa de la salsa. Precalienta {PREHEAT} minutos, extiéndelas en una sola capa y caliéntalas a {AF_F}°F durante {MEDIUM_MIN} minutos, agitando una vez. Las puntas y muslitos pequeños necesitan unos {SMALL_MIN} minutos y las alitas grandes unos {LARGE_MIN}. Mézclalas con salsa templada y vuelve a meterlas un minuto para que se fije. En un horno convencional, las mismas alitas se recalientan a {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber que están listas',
      donenessBody:
        'Comprueba el muslito más carnoso junto al hueso: la pauta del USDA es {INT_F}°F ({INT_C}°C) para sobras recalentadas. La piel debe estar crujiente y chisporroteando, y la salsa que quede debe burbujear, no estar negra. Bordes oscuros con el centro frío significan que se quedó demasiada salsa.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Guarda la salsa que quede en la caja para calentarla aparte. Limpia las alitas pegajosas con papel de cocina; una capa fina no pasa nada. Separa las alitas que se hayan pegado para que el aire llegue por todos lados. No hace falta aceite. Las alitas que llevaban salsa desde la noche anterior la han absorbido en parte por la piel, así que nunca quedarán tan crujientes como las de especias secas; el recalentado corto y la salsa nueva las acercan mucho. Hazlas en una sola capa, en dos tandas si hace falta.',
      faqs: [
        {
          q: '¿Cuánto tiempo se recalientan las alitas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para alitas normales, agitando una vez. Las pequeñas tardan unos {SMALL_MIN} minutos y las grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Por qué se queman mis alitas recalentadas?',
          a: 'El azúcar de la salsa se carameliza mucho antes de que la carne esté caliente. Quita antes la salsa espesa y añade salsa nueva al final.',
        },
        {
          q: '¿Se pueden recalentar alitas búfalo en la freidora de aire?',
          a: 'Sí. La salsa búfalo se corta al recalentarse, así que recalienta las alitas sin salsa y mézclalas después con salsa templada.',
        },
        {
          q: '¿Qué temperatura deben alcanzar las alitas recalentadas?',
          a: '{INT_F}°F ({INT_C}°C) junto al hueso, que es la pauta del USDA para cualquier sobra recalentada.',
        },
        {
          q: '¿Cómo se recalientan las alitas en el horno?',
          a: 'Sobre una rejilla con bandeja debajo a {OVEN_F}°F durante unos {OVEN_MIN} minutos, y después mézclalas con la salsa.',
        },
      ],
    },
    'reheat-steak': {
      label: 'Filete sobrante',
      metaTitle: 'Recalentar filete en la freidora de aire: {INT_F}°F o rosado',
      metaDescription:
        'Recalienta un filete sobrante en la freidora de aire a {AF_F}°F: unos {MIN} minutos para llegar a los {INT_F}°F del USDA para sobras, o para antes y mantenlo al punto. Las dos opciones, claras.',
      metaKeywords: 'recalentar filete freidora de aire, cómo recalentar carne en air fryer, filete sobrante freidora de aire, recalentar filete sin que se pase',
      heading: 'Recalentar filete en la freidora de aire',
      subDesc:
        'Filete sobrante, entero o en tiras. El ajuste bajo, los dos objetivos distintos de punto y de seguridad, y por qué cortarlo antes te da lo mejor de ambos.',
      cardDesc: 'Calor bajo y termómetro a partir de la vuelta.',
      sizeLabels: { thin: 'Filete en tiras', medium: 'Filete entero, de unos 2,5 cm', thick: 'Filete entero, de unos 4 cm' },
      internalLine: 'Pauta del USDA para sobras: {INT_F}°F ({INT_C}°C) en el centro',
      internalAltLine:
        'Para mantenerlo al punto: {INT_ALT_F}–{INT_ALT_TO_F}°F ({INT_ALT_C}–{INT_ALT_TO_C}°C), que suele alcanzarse hacia los {FLIP} min. Parar ahí es decisión tuya.',
      failureHeading: 'Seguro o rosado: dos objetivos que no coinciden',
      failureBody:
        'Un filete hecho al punto terminó a unos {INT_ALT_TO_F}°F por dentro. La pauta del USDA para recalentar cualquier sobra es {INT_F}°F, y llevar el centro de un filete a esa temperatura lo deja muy hecho. No hay ajuste que consiga las dos cosas, así que esta página te da los dos números y te deja elegir. La temperatura baja es lo que hace que cualquiera de las dos opciones salga bien: con un calor suave, el exterior no se endurece ni se pone gris mientras el centro se calienta, así que el filete se calienta de forma pareja. El tiempo de aquí es una estimación para que un filete entero llegue a {INT_F}°F, no una cifra probada, porque el grosor y la temperatura de la nevera varían. Empieza a medir con un termómetro en la vuelta y decide según la lectura.',
      workedExampleHeading: 'Ejemplo práctico: un solomillo sobrante',
      workedExampleTemplate:
        'Un filete de lomo de unos 2,5 cm de la noche anterior, recién sacado de la nevera. Precalienta {PREHEAT} minutos y caliéntalo a {AF_F}°F, dándole la vuelta a los {FLIP} minutos y midiendo el centro en ese momento. Para los {INT_F}°F del USDA, cuenta con unos {MEDIUM_MIN} minutos en total; un filete de 4 cm tarda unos {THICK_MIN}. El filete en tiras está caliente del todo en unos {THIN_MIN}. En un horno convencional, el método lento es {OVEN_F}°F durante unos {OVEN_MIN} minutos sobre una rejilla.',
      donenessHeading: 'Cómo comprobarlo',
      donenessBody:
        'Usa un termómetro de lectura instantánea en el centro mismo de la parte más gruesa. En la vuelta, una lectura de {INT_ALT_F}–{INT_ALT_TO_F}°F indica que el filete está templado y todavía rosado; sigue hasta {INT_F}°F ({INT_C}°C) si aplicas la pauta del USDA para sobras. La superficie debe chisporrotear, pero sin secarse ni curvarse por los bordes.',
      prepHeading: 'Antes de meterlo',
      prepBody:
        'Deja el filete fuera mientras se calienta la freidora para que el centro esté menos frío. Úntalo con un poco de aceite o mantequilla para que la superficie no se reseque. Guarda los jugos del plato y échalos por encima antes de servir.',
      faqs: [
        {
          q: '¿Cómo caliento el filete del todo sin que se pase?',
          a: 'Córtalo antes de recalentarlo si lo quieres caliente del todo sin que se pase. Las tiras finas llegan a {INT_F}°F en unos {THIN_MIN} minutos, antes de que se pongan grises y duras.',
        },
        {
          q: '¿Qué temperatura debe alcanzar el filete recalentado?',
          a: 'La pauta del USDA para sobras es {INT_F}°F ({INT_C}°C). Mucha gente para en {INT_ALT_F}–{INT_ALT_TO_F}°F para mantenerlo rosado; es decisión tuya.',
        },
        {
          q: '¿El tiempo de esta página es exacto?',
          a: 'No. Es una estimación para un filete de 2,5 cm sacado de la nevera. Empieza a medir con un termómetro a los {FLIP} minutos y guíate por la lectura.',
        },
        {
          q: '¿Por qué una temperatura tan baja?',
          a: 'Un calor suave calienta el centro antes de que el exterior se seque, así que el filete conserva el mismo color de borde a centro.',
        },
        {
          q: '¿Cómo se recalienta el filete en el horno?',
          a: 'Sobre una rejilla a {OVEN_F}°F durante unos {OVEN_MIN} minutos, y después márcalo un momento en una sartén muy caliente si quieres recuperar la costra.',
        },
      ],
    },
    cookies: {
      label: 'Galletas',
      metaTitle: 'Galletas en la freidora de aire: tiempo, temperatura y papel',
      metaDescription:
        'Hornea galletas en la freidora de aire: {AF_F}°F durante {MIN} minutos a partir de la masa. Por qué la masa ligera y el papel se levantan con el ventilador, tiempos por tamaño y el equivalente en horno.',
      metaKeywords: 'galletas en freidora de aire, galletas air fryer tiempo y temperatura, cookies de chocolate freidora de aire, hornear galletas en freidora de aire',
      heading: 'Galletas en la freidora de aire',
      subDesc:
        'Galletas de cuchara horneadas de pocas en pocas, con masa fresca o congelada. El ajuste más bajo, cómo evitar que el papel se levante y cuándo sacarlas.',
      cardDesc: 'Sujeta el papel con la propia masa.',
      sizeLabels: { small: 'Pequeñas, una cucharada rasa', medium: 'Medianas, unas 2 cucharadas', large: 'Grandes, tamaño pastelería' },
      failureHeading: 'Por qué el papel y la masa se levantan con el ventilador',
      failureBody:
        'El ventilador de una freidora de aire es potente, y una hoja suelta de papel de horno pesa muy poco. Si metes el papel solo para precalentar, sale volando hacia la resistencia, donde puede chamuscarse. Incluso con masa encima, una esquina libre se levanta y se dobla sobre las galletas. La propia masa es el segundo problema: la masa blanda se extiende al calentarse, y el aire que pasa por encima endurece la superficie antes de tiempo, así que las galletas se abomban y se agrietan en lugar de extenderse por igual. Las soluciones son sencillas. Mete el papel solo con la masa ya encima, recórtalo para que no sobresalga ningún borde y deja espacio entre las bolas. El ajuste más bajo frena la parte de arriba para que la galleta se extienda antes de cuajar.',
      workedExampleHeading: 'Ejemplo práctico: galletas con pepitas de chocolate',
      workedExampleTemplate:
        'Una tanda de masa de galletas con pepitas de chocolate que indica {OVEN_F}°F durante {OVEN_MIN} minutos en el horno. En una freidora de aire de cesta, hornéalas a {AF_F}°F durante {MEDIUM_MIN} minutos. Precalienta {PREHEAT} minutos, coloca cuatro bolas de unas dos cucharadas sobre papel recortado y mételo. Las galletas pequeñas tardan unos {SMALL_MIN} minutos y las grandes, tipo pastelería, unos {LARGE_MIN}. Deja que cada tanda se asiente sobre el papel antes de moverla.',
      donenessHeading: 'Cómo saber que están hechas',
      donenessBody:
        'Los bordes deben estar cuajados y ligeramente dorados, mientras el centro todavía parece algo blando e hinchado; se endurece al enfriarse. Un palillo en el centro debe salir con migas húmedas, no con masa cruda. Si están marrón oscuro, se han pasado. Déjalas sobre el papel hasta que se asienten y pásalas luego a una rejilla, donde la base se mantiene crujiente.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Enfría un rato la masa muy blanda para que mantenga la forma. Recorta el papel al tamaño del fondo de la cesta, más pequeño que la base, o usa un papel perforado. Hornea de cuatro a seis a la vez, con espacio para extenderse. Las bolas de masa congelada van tal cual, con uno o dos minutos más.',
      faqs: [
        {
          q: '¿Cuánto tardan las galletas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para galletas medianas. Las pequeñas tardan unos {SMALL_MIN} minutos y las grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Necesito papel de horno para las galletas en la freidora de aire?',
          a: 'Ayuda a despegarlas limpias, pero mételo solo con masa encima y recortado a medida, para que el ventilador no lo lance contra la resistencia.',
        },
        {
          q: '¿Puedo hornear masa de galletas congelada en la freidora de aire?',
          a: 'Sí, directamente del congelador. Añade uno o dos minutos y comprueba el centro con un palillo.',
        },
        {
          q: '¿Por qué mis galletas salen abombadas y pálidas por debajo?',
          a: 'La parte de arriba cuajó antes de que la masa pudiera extenderse. Usa el ajuste más bajo y aplasta un poco las bolas.',
        },
        {
          q: '¿Cuál es el equivalente en horno?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en una bandeja forrada en un horno convencional.',
        },
      ],
    },
    muffins: {
      label: 'Magdalenas',
      metaTitle: 'Magdalenas en la freidora de aire: tiempo, temperatura y moldes',
      metaDescription:
        'Hornea magdalenas en la freidora de aire: {AF_F}°F durante {MIN} minutos. Moldes de silicona o un molde pequeño que quepa, por qué no cabe uno de 12 y cómo comprobar el centro.',
      metaKeywords: 'magdalenas en freidora de aire, muffins air fryer tiempo y temperatura, muffins de arándanos freidora de aire, hornear magdalenas en freidora de aire',
      heading: 'Magdalenas en la freidora de aire',
      subDesc:
        'Magdalenas horneadas por tandas en una freidora de aire de cesta. El ajuste, qué moldes caben y cómo evitar que la parte de arriba se dore antes de que el centro se haga.',
      cardDesc: 'Moldes de silicona, y juzga el centro, no el color.',
      sizeLabels: { small: 'Mini magdalenas', medium: 'Magdalenas normales', large: 'Magdalenas grandes o de pastelería' },
      failureHeading: 'Por qué la parte de arriba se dora y el centro sigue crudo',
      failureBody:
        'En un horno, una magdalena se calienta por todos lados en aire quieto. En una freidora de aire el calor cae sobre la parte de arriba, así que la copa se dora pronto y parece hecha mientras el centro todavía es masa. El color es la trampa: una magdalena dorada puede estar cruda por dentro. El ajuste más bajo de aquí frena la parte de arriba para que el interior la alcance, y el tiempo da por hecho que compruebas el centro, no el color. Las magdalenas con mucha masa, fruta o yogur tienen más agua y necesitan el tiempo completo. Si la parte de arriba está oscura mucho antes del final, pon encima una hoja pequeña de papel de aluminio sin apretar el resto del horneado, bien sujeta para que el ventilador no la levante.',
      workedExampleHeading: 'Ejemplo práctico: seis magdalenas de arándanos',
      workedExampleTemplate:
        'Una receta de magdalenas de arándanos que indica {OVEN_F}°F durante {OVEN_MIN} minutos en el horno. En una freidora de aire de cesta, hornéalas a {AF_F}°F durante {MEDIUM_MIN} minutos. Precalienta {PREHEAT} minutos, llena seis moldes de silicona hasta dos tercios y colócalos con espacio entre ellos. Las mini tardan unos {SMALL_MIN} minutos y las grandes unos {LARGE_MIN}. Hornea el resto de la masa en una segunda tanda.',
      donenessHeading: 'Cómo saber que están hechas',
      donenessBody:
        'Clava un palillo en el centro de la magdalena del medio: debe salir limpio o con unas pocas migas secas, nunca con masa húmeda. La parte de arriba debe recuperar la forma al presionarla con suavidad. Ignora el color, que va por delante del interior en una freidora de aire. Las magdalenas del borde de la cesta se hacen antes que las del centro, así que prueba la del medio y cámbialas de sitio a mitad si tu cesta dora de forma desigual. Déjalas reposar en sus moldes antes de desmoldarlas.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Usa moldes de silicona, moldes de aluminio metidos uno dentro de otro para que aguanten, o un molde pequeño para magdalenas que quede plano en el fondo de la cesta. Un molde normal de 12 no cabe en una cesta de 5 qt (unos 4,7 litros). Llénalos hasta dos tercios y deja huecos para que el aire circule entre ellos.',
      faqs: [
        {
          q: '¿Cuánto tardan las magdalenas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para magdalenas normales. Las mini tardan unos {SMALL_MIN} minutos y las grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Cabe un molde de magdalenas en mi freidora de aire?',
          a: 'Un molde de 12 no cabe en una cesta de 5 qt. Usa moldes de silicona o un molde pequeño de 4 o 6 huecos que quede plano en el fondo.',
        },
        {
          q: '¿Puedo usar cápsulas de papel?',
          a: 'Solo dentro de moldes de silicona o aluminio. Solas, las cápsulas de papel son demasiado blandas para sostener la masa y pueden volcarse con el aire.',
        },
        {
          q: '¿Por qué mis magdalenas quedan crudas por dentro?',
          a: 'La parte de arriba se doró antes y las sacaste por el color. Comprueba el centro con un palillo y baja el calor si la parte de arriba se oscurece pronto.',
        },
        {
          q: '¿Cuál es el equivalente en horno?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en un molde de 12 magdalenas en un horno convencional.',
        },
      ],
    },
    brownies: {
      label: 'Brownies',
      metaTitle: 'Brownies en la freidora de aire: molde, tiempo y temperatura',
      metaDescription:
        'Hornea brownies en la freidora de aire: {AF_F}°F durante {MIN} minutos en un molde de 18 cm. Qué moldes caben en una cesta de 5 qt, cómo reducir a la mitad una receta de 23×23 y el equivalente en horno.',
      metaKeywords: 'brownies en freidora de aire, brownie air fryer tiempo y temperatura, molde brownie freidora de aire, hornear brownie en freidora de aire',
      heading: 'Brownies en la freidora de aire',
      subDesc:
        'Un molde pequeño de brownies horneado en una freidora de aire de cesta. El molde que cabe, cómo adaptar una receta normal y cómo lograr un centro jugoso sin bordes duros.',
      cardDesc: 'Usa un molde de 15–18 cm y reduce a la mitad una receta de 23×23.',
      sizeLabels: { small: 'Molde redondo de 15 cm', medium: 'Molde cuadrado de 18 cm', thick: 'Tanda más alta o muy jugosa' },
      failureHeading: 'Por qué los bordes se pasan y el centro sigue húmedo',
      failureBody:
        'La masa de brownie es densa y pesada, y en un molde metálico los bordes reciben el calor más fuerte, pegados a las paredes calientes y justo bajo el ventilador. Cuajan y se secan mucho antes que el centro, que está aislado por masa por todos lados. Si subes el calor para acelerar el centro, obtienes un borde duro y una costra que se agrieta y se separa de un centro crudo. El ajuste más bajo da tiempo al calor para llegar al centro. El tamaño del molde importa igual: una cesta de 5 qt mide unos 20–22 cm de ancho, así que un molde de 15 o 18 cm cabe con espacio para que el aire circule alrededor. Una receta normal de 23×23 cm hay que reducirla a la mitad u hornearla en dos tandas; vertida más alta en un molde pequeño, no cuajará por el centro.',
      workedExampleHeading: 'Ejemplo práctico: media receta de 23×23',
      workedExampleTemplate:
        'Una receta de brownies de 23×23 cm que indica {OVEN_F}°F durante {OVEN_MIN} minutos, reducida a la mitad y vertida en un molde cuadrado forrado de 18 cm. Precalienta {PREHEAT} minutos y hornéalo a {AF_F}°F durante {MEDIUM_MIN} minutos. Un molde redondo de 15 cm tarda unos {SMALL_MIN} minutos, y una tanda más alta o muy jugosa unos {THICK_MIN}. Déjalo enfriar en el molde antes de cortarlo.',
      donenessHeading: 'Cómo saber que están hechos',
      donenessBody:
        'Un palillo clavado en el centro debe salir con migas húmedas, no con masa líquida. La superficie debe verse seca y algo agrietada por los bordes, con solo un ligero temblor en el centro. Los brownies siguen haciéndose en el molde caliente, así que sácalos un poco antes. Córtalos solo cuando estén del todo fríos, para que los cuadrados salgan limpios.',
      prepHeading: 'Antes de meterlos',
      prepBody:
        'Forra el molde con papel de horno y deja dos lados largos para poder sacar el brownie. Comprueba que el molde queda plano y con hueco alrededor. Si la superficie se oscurece pronto, cúbrela sin apretar con papel de aluminio, metido bajo el molde para que no salga volando.',
      faqs: [
        {
          q: '¿Cuánto tardan los brownies en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F en un molde cuadrado de 18 cm. Un molde redondo de 15 cm tarda unos {SMALL_MIN} minutos y una tanda más alta unos {THICK_MIN}.',
        },
        {
          q: '¿Qué tamaño de molde cabe en una freidora de aire de 5 qt?',
          a: 'Un molde redondo o cuadrado de 15 o 18 cm. La cesta mide unos 20–22 cm de ancho, y el aire necesita espacio alrededor del molde.',
        },
        {
          q: '¿Puedo hacer una receta de brownie de 23×23 en la freidora de aire?',
          a: 'Redúcela a la mitad u hornéala en dos tandas. Vertida en un solo molde pequeño, queda demasiado alta para cuajar por el centro.',
        },
        {
          q: '¿Puedo usar un preparado de brownie de caja?',
          a: 'Sí. La mayoría de las cajas son para un molde de 20 o 23 cm, así que usa la mitad de la masa por tanda y sigue los tiempos de aquí.',
        },
        {
          q: '¿Cuál es el equivalente en horno?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos para el mismo molde en un horno convencional.',
        },
      ],
    },
    'garlic-bread': {
      label: 'Pan de ajo',
      metaTitle: 'Pan de ajo en la freidora de aire: fresco o congelado',
      metaDescription:
        'Pan de ajo en la freidora de aire: {AF_F}°F durante {MIN} minutos, crujiente y dorado. Rebanadas, media barra o pan de ajo congelado, y el equivalente en horno.',
      metaKeywords: 'pan de ajo freidora de aire, pan de ajo air fryer tiempo, pan de ajo congelado freidora de aire, pan de ajo casero freidora de aire',
      heading: 'Pan de ajo en la freidora de aire',
      subDesc:
        'Pan de ajo casero o comprado, tostado y crujiente por los bordes y tierno por dentro. El ajuste y cómo evitar que el ajo se queme.',
      cardDesc: 'Deja el ajo bajo la mantequilla, no encima.',
      sizeLabels: { thin: 'Pan de ajo en rebanadas', medium: 'Media barra, con el corte hacia arriba', thick: 'Tostada gruesa o pan de ajo congelado' },
      failureHeading: 'Por qué el ajo se quema y amarga',
      failureBody:
        'El ajo picado es pequeño, seco y lleno de azúcares, y encima del pan queda justo en el aire más caliente. Pasa de dorado a marrón y a negro amargo en menos de un minuto, a menudo antes de que el pan de debajo se haya tostado. La mantequilla es parte del problema: se derrite y escurre por la superficie, y deja el ajo al descubierto y seco. La solución está en cómo lo untas. Machaca el ajo con mantequilla blanda para que cada trocito quede cubierto, úntalo hasta los bordes y apriétalo contra la miga. El ajo rallado se quema menos que el picado, y el ajo en polvo casi no se quema. Un ajuste medio tuesta el pan por completo mientras la parte de arriba se dora, sin oscurecerse.',
      workedExampleHeading: 'Ejemplo práctico: media barra de pan',
      workedExampleTemplate:
        'Media barra abierta a lo largo y untada con mantequilla de ajo. Una receta de horno indicaría {OVEN_F}°F durante unos {OVEN_MIN} minutos. En una freidora de aire de cesta, precalienta {PREHEAT} minutos y tuéstala con el corte hacia arriba a {AF_F}°F durante {MEDIUM_MIN} minutos. Las rebanadas sueltas tardan unos {THIN_MIN} minutos, y la tostada gruesa o el pan de ajo congelado unos {THICK_MIN}.',
      donenessHeading: 'Cómo saber que está hecho',
      donenessBody:
        'Los bordes deben estar crujientes y bien dorados, y la mantequilla debe burbujear metida en el pan, no encharcada encima. Presiona el centro: debe seguir tierno. Cualquier trozo de ajo marrón oscuro significa que la siguiente tanda necesita menos tiempo o que el ajo necesita más mantequilla alrededor.',
      prepHeading: 'Antes de meterlo',
      prepBody:
        'Usa mantequilla blanda, no derretida, para que se quede donde la untas. Añade el perejil o el queso rallado solo en el último minuto. Corta las barras largas para que quepan en la cesta y coloca los trozos en una sola capa. El pan del día anterior va muy bien, porque su miga más seca absorbe la mantequilla en lugar de ablandarse. El pan de ajo congelado va directamente del congelador, sin descongelar, o la mantequilla se sale antes de que la corteza cruja. Si viene envuelto en papel de aluminio, quítaselo para la freidora de aire.',
      faqs: [
        {
          q: '¿Cuánto tarda el pan de ajo en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para media barra. Las rebanadas tardan unos {THIN_MIN} minutos y los trozos gruesos o congelados unos {THICK_MIN}.',
        },
        {
          q: 'Pan de ajo fresco o congelado: ¿qué cambia?',
          a: 'El pan de ajo fresco solo necesita tostarse. El congelado va directamente del congelador y necesita el tiempo más largo, para que el centro se descongele y ablande antes de que la parte de arriba cruja.',
        },
        {
          q: '¿Por qué se me quema el ajo en la freidora de aire?',
          a: 'Queda al descubierto en el aire más caliente. Machácalo con mantequilla blanda y apriétalo contra el pan para protegerlo.',
        },
        {
          q: '¿Puedo añadir queso?',
          a: 'Sí, en el último minuto o dos. Si lo pones al principio, se dora antes de que el pan esté tostado.',
        },
        {
          q: '¿Cuál es el equivalente en horno?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en una bandeja en un horno convencional.',
        },
      ],
    },
    'corn-on-the-cob': {
      label: 'Mazorcas de maíz',
      metaTitle: 'Mazorcas de maíz en la freidora de aire: tiempo y tamaño',
      metaDescription:
        'Mazorcas de maíz en la freidora de aire: {AF_F}°F durante {MIN} minutos, girándolas a los {FLIP}. Granos jugosos con toques tostados, por qué hay que partir las largas y el equivalente en horno.',
      metaKeywords: 'mazorca de maíz freidora de aire, elote en freidora de aire, choclo air fryer tiempo, maíz asado freidora de aire',
      heading: 'Mazorcas de maíz en la freidora de aire',
      subDesc:
        'Maíz fresco asado hasta quedar dulce, jugoso y algo tostado. El ajuste, el único giro y cómo meter mazorcas enteras en una cesta.',
      cardDesc: 'Parte las mazorcas largas y úntalas con mantequilla o aceite.',
      sizeLabels: { small: 'Medias mazorcas o mazorcas pequeñas', medium: 'Mazorcas medianas, partidas para que quepan', large: 'Mazorcas grandes y gruesas, partidas' },
      failureHeading: 'Por qué los granos se secan y se arrugan',
      failureBody:
        'El maíz cocido está en agua, así que solo puede mojarse más. En una freidora de aire pasa lo contrario: el aire caliente en movimiento saca el agua de cada grano expuesto, y una mazorca desnuda que se deja demasiado tiempo acaba arrugada, gomosa y pálida. Lo que la protege es una capa de grasa. La mantequilla o el aceite sellan los granos para que se calienten y queden jugosos, mientras la grasa se dora a puntos y da ese sabor a asado a la parrilla. El tamaño también importa. La mayoría de las mazorcas enteras son más largas que una cesta de 5 qt, y una mazorca metida en diagonal toca las paredes, se cuece al vapor por los extremos y bloquea el aire. Parte cualquier mazorca más larga que la cesta para que los trozos queden planos en una capa.',
      workedExampleHeading: 'Ejemplo práctico: cuatro mazorcas',
      workedExampleTemplate:
        'Cuatro mazorcas medianas, sin hojas, partidas por la mitad y untadas con mantequilla derretida y sal. Precalienta {PREHEAT} minutos, coloca las mitades en una capa y ásalas a {AF_F}°F durante {MEDIUM_MIN} minutos, girándolas a los {FLIP}. Las mazorcas pequeñas o los trozos cortos tardan unos {SMALL_MIN} minutos, y las grandes y gruesas unos {LARGE_MIN}. En una bandeja en un horno convencional, el mismo maíz necesita {OVEN_F}°F durante unos {OVEN_MIN} minutos.',
      donenessHeading: 'Cómo saber que está hecho',
      donenessBody:
        'Los granos deben estar de un amarillo intenso, llenos y brillantes, con algunos puntos dorados. Aprieta uno con la uña: debe soltar jugo. Los granos apagados y hundidos indican que el maíz se secó por exceso de tiempo o falta de grasa.',
      prepHeading: 'Antes de meterlo',
      prepBody:
        'Quita del todo las hojas y las barbas. Parte cada mazorca con un cuchillo pesado, balanceándolo a través del centro en lugar de serrar. Úntala con mantequilla o aceite por todos lados y sazónala después de asarla si usas una mezcla de especias que se quema. El pimentón ahumado, el chile y el parmesano rallado van muy bien sobre el maíz caliente con un poco más de mantequilla. El maíz muy fresco y dulce necesita el tiempo más corto; las mazorcas más viejas y harinosas del final de temporada tardan algo más en ablandarse.',
      faqs: [
        {
          q: '¿Cuánto tardan las mazorcas de maíz en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para mazorcas medianas, girándolas a los {FLIP}. Las pequeñas tardan unos {SMALL_MIN} minutos y las grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Hay que partir el maíz para que quepa en la freidora de aire?',
          a: 'Normalmente sí. Parte cualquier mazorca más larga que la cesta para que quede plana; las mazorcas encajadas se hacen de forma desigual.',
        },
        {
          q: '¿Puedo asar el maíz con sus hojas?',
          a: 'Puedes, pero se cuece al vapor en lugar de asarse y las hojas secas pueden chamuscarse. Sin hojas y con mantequilla da el mejor resultado.',
        },
        {
          q: '¿Se pueden hacer mazorcas congeladas en la freidora de aire?',
          a: 'Sí, directamente congeladas. Añade unos minutos y úntalas con mantequilla a mitad, cuando el hielo haya desaparecido.',
        },
        {
          q: '¿Cuál es el equivalente en horno?',
          a: '{OVEN_F}°F durante unos {OVEN_MIN} minutos en una bandeja en un horno convencional, girándolas una vez.',
        },
      ],
    },
    'frozen-vegetables': {
      label: 'Verduras congeladas',
      metaTitle: 'Verduras congeladas en la freidora de aire: asadas, no blandas',
      metaDescription:
        'Verduras congeladas en la freidora de aire: {AF_F}°F durante {MIN} minutos, agitando {SHAKES} veces, directamente de la bolsa. Cómo asarlas en lugar de cocerlas al vapor y el equivalente del paquete.',
      metaKeywords: 'verduras congeladas freidora de aire, verduras congeladas air fryer, asar verduras congeladas freidora de aire, menestra congelada freidora de aire',
      heading: 'Verduras congeladas en la freidora de aire',
      subDesc:
        'Verduras mixtas, guisantes, maíz o ramilletes directamente del congelador, asados en lugar de cocidos al vapor. Sin descongelar, y por qué la cantidad en la cesta decide el resultado.',
      cardDesc: 'Nunca las descongeles: directas, media cesta como mucho.',
      sizeLabels: { small: 'Guisantes, maíz o mezcla en dados', medium: 'Verduras mixtas', large: 'Ramilletes de brócoli o coliflor' },
      failureHeading: 'Por qué las verduras congeladas salen blandas y aguadas',
      failureBody:
        'Las verduras congeladas se escaldan antes de congelarlas, y los cristales de hielo que se forman dentro rompen muchas de sus paredes celulares. Al calentarse, esa estructura rota suelta su agua de golpe, además de la escarcha de fuera. En una cesta llena el agua no tiene adónde ir: se encharca, se convierte en vapor y cuece las verduras hasta dejarlas blandas y grises antes de que ninguna pueda dorarse. La respuesta es menos cantidad y nada de descongelar. Las verduras descongeladas ya han soltado su agua, así que se ponen mustias enseguida; las congeladas mantienen la forma mientras el exterior se seca. Llena la cesta como mucho hasta la mitad, para que el vapor escape, y las verduras se asarán con el calor seco que viene después.',
      workedExampleHeading: 'Ejemplo práctico: una bolsa de verduras mixtas',
      workedExampleTemplate:
        'Media bolsa de verduras mixtas congeladas que indica asarlas a {OVEN_F}°F durante {OVEN_MIN} minutos. En una freidora de aire de cesta, precalienta {PREHEAT} minutos, échalas todavía congeladas con una cucharada de aceite y ásalas a {AF_F}°F durante {MEDIUM_MIN} minutos, agitando {SHAKES} veces. Los guisantes, el maíz y las mezclas en dados pequeños tardan unos {SMALL_MIN} minutos; los ramilletes grandes unos {LARGE_MIN}.',
      donenessHeading: 'Cómo saber que están hechas',
      donenessBody:
        'La cesta debe estar seca, sin agua en el fondo, y los bordes de las verduras deben tener puntos dorados. Las zanahorias y los ramilletes deben estar tiernos al pincharlos, pero no deshechos. Un charco bajo unas verduras pálidas y blandas significa que la cesta estaba demasiado llena.',
      prepHeading: 'Antes de meterlas',
      prepBody:
        'Deshaz los grumos congelados dentro de la bolsa. Mézclalas con aceite justo antes de asarlas; no se pega tan bien a las piezas escarchadas, así que vuelve a mezclar en el primer meneo. Sazona con sal y especias al final, porque el vapor del principio se las lleva. Las bolsas con piezas grandes y pequeñas juntas se hacen de forma desigual, así que retira las pequeñas si empiezan a quemarse, o haz la mezcla en dos tandas. Los paquetes de verduras con salsa o mantequilla suelen indicar solo microondas; la salsa se quema en la freidora de aire, así que usa bolsas de verduras solas.',
      faqs: [
        {
          q: '¿Cuánto tardan las verduras congeladas en la freidora de aire?',
          a: 'Unos {MIN} minutos a {AF_F}°F para verduras mixtas, agitando {SHAKES} veces. Las piezas pequeñas tardan unos {SMALL_MIN} minutos y los ramilletes grandes unos {LARGE_MIN}.',
        },
        {
          q: '¿Hay que descongelar las verduras antes de la freidora de aire?',
          a: 'No. Las verduras descongeladas ya han soltado su agua y se ponen mustias. Hazlas directamente congeladas.',
        },
        {
          q: '¿Por qué mis verduras congeladas salen blandas?',
          a: 'La cesta estaba demasiado llena y su agua las coció al vapor. Usa como mucho media cesta cada vez.',
        },
        {
          q: '¿Es distinto del brócoli fresco?',
          a: 'Sí. Los ramilletes frescos necesitan un ajuste más corto y suave; los congelados necesitan más calor y tiempo para eliminar antes el hielo.',
        },
        {
          q: '¿Qué dice el paquete para el horno?',
          a: 'La mayoría de las bolsas indican {OVEN_F}°F durante unos {OVEN_MIN} minutos en un horno convencional.',
        },
      ],
    },
  },
};

export const presetsIndex: Dictionary['presetsIndex'] = {
  metaTitle: 'Preconfiguraciones para freidora de aire: tiempo y temperatura por alimento',
  metaDescription:
    'Tiempo y temperatura en freidora de aire para pollo, salmón, filete, patatas, repostería, congelados y sobras: cada preconfiguración con temperatura interna o prueba de punto, tiempos por tamaño y equivalente en horno.',
  metaKeywords: 'tiempos freidora de aire, tabla tiempo temperatura freidora de aire, preconfiguraciones freidora de aire',
  backLink: 'Todas las herramientas',
  heading: 'Preconfiguraciones de alimentos para freidora de aire',
  intro:
    'Una página por alimento, cada una una herramienta que funciona y no una fila de tabla: el ajuste, cuándo voltear o agitar, la temperatura interna de cada proteína, los tiempos por tamaño y el equivalente en horno en ambos sentidos.',
  categories: {
    poultry: 'Aves',
    meat: 'Carne',
    fish: 'Pescado y marisco',
    veg: 'Verduras y patatas',
    baked: 'Repostería',
    reheat: 'Recalentar',
    frozen: 'Congelados',
  },
  howHeading: 'Cómo se fijan estas preconfiguraciones',
  howBody:
    'Cada preconfiguración parte de una freidora de cesta de 4–6 litros, precalentada, con el alimento en una sola capa. En las de cocinar, los equivalentes en horno y en horno con ventilador los calcula el mismo motor que el conversor, así que coinciden entre sí, y el conversor de la página ya tiene ese alimento elegido. Las de congelados muestran en su lugar lo que dice el paquete. Las de recalentar son distintas: el motor convierte recetas de cocción, no recalentados, así que los tiempos de recalentado y sus equivalentes en horno están escritos a mano, y el conversor de esas páginas convierte recetas de horno. Cada página empieza por la forma concreta en que ese alimento sale mal en la freidora, porque eso decide el resultado más que el número del dial. Sin correo, sin registro, nada que instalar.',
  relatedFlagshipLink: 'Conversor de horno a freidora de aire',
  relatedChartLink: 'Tabla de conversión imprimible',
};

import type { Dictionary } from '../../types';

export const presets: Dictionary['presets'] = {
  backLink: 'Todas las preconfiguraciones',
  pageTag: 'Preconfiguración de alimento',
  answerTemplate: '{LABEL} en la freidora de aire: {AF_F}°F / {AF_C}°C durante {MIN} min',
  answerFlipSuffix: ', voltear a los {FLIP} min',
  answerShakeSuffix: ', agitar {SHAKES}×',
  internalTemplate: 'Listo a {INT_F}°F ({INT_C}°C) en la parte más gruesa',
  internalCrisp: 'Listo por color y textura crujiente, no por termómetro',
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
  },
};

export const presetsIndex: Dictionary['presetsIndex'] = {
  metaTitle: 'Preconfiguraciones para freidora de aire: tiempo y temperatura por alimento',
  metaDescription:
    'Tiempo y temperatura en freidora de aire para pollo, alitas, salmón, beicon, filete, patatas y más: cada preconfiguración con temperatura interna, tiempos por tamaño y equivalente en horno.',
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
    'Cada preconfiguración parte de una freidora de cesta de 4–6 litros, precalentada, con el alimento en una sola capa. Los equivalentes en horno y en horno con ventilador de cada página los calcula el mismo motor que el conversor, así que coinciden entre sí, y el conversor de cada página ya tiene ese alimento elegido por si partes de una receta de horno. Cada página empieza por la forma concreta en que ese alimento sale mal en la freidora, porque eso decide el resultado más que el número del dial. Sin correo, sin registro, nada que instalar.',
  relatedFlagshipLink: 'Conversor de horno a freidora de aire',
  relatedChartLink: 'Tabla de conversión imprimible',
};

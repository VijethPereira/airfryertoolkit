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

import type { Dictionary } from '../types';
import tempLanding from './temp-landings/es';
import { presets, presetsIndex } from './presets/es';

const es: Dictionary = {
  nav: {
    convert: 'Convertir',
    reverse: 'Inverso',
    foodPresets: 'Alimentos',
    brands: 'Marcas',
    chart: 'Tabla',
    guide: 'Guía',
  },
  footer: {
    converter: 'Conversor',
    foodPresets: 'Alimentos preconfigurados',
    conversionChart: 'Tabla de conversión',
    about: 'Acerca de',
    contact: 'Contacto',
    privacyPolicy: 'Política de privacidad',
    termsConditions: 'Términos y condiciones',
    moreFreeTools: 'Más herramientas gratuitas:',
    copyrightSuffix: 'herramientas gratuitas de conversión de cocina en el navegador',
  },
  converter: {
    widgetLabel: 'Horno → Freidora de aire',
    live: 'En vivo',
    ovenTemperature: 'Temperatura del horno',
    ovenTime: 'Tiempo de horno',
    min: 'min',
    foodType: 'Tipo de alimento',
    airFryerStyle: 'Tipo de freidora de aire',
    basket: 'Cesta',
    ovenStyle: 'Tipo horno',
    airFryerSetting: 'Ajuste de la freidora de aire',
    checkAt: 'Revisar a los',
    preheat: 'Precalentar',
    gasMark: 'Nivel de gas',
    gasMarkDash: 'Nivel de gas —',
    unitBasket: 'freidora de cesta',
    unitOven: 'unidad tipo horno',
    cappedNoteTemplate:
      'Tu receta requiere más calor del que puede alcanzar una {unit}. Se limitó a {ceiling}°F y se añadió tiempo extra — revisa antes de tiempo y espera una superficie un poco menos crujiente.',
    foods: {
      general: { label: 'General / variado', tip: 'Agita o voltea a la mitad del tiempo.' },
      fries: { label: 'Papas fritas', tip: 'Agita dos veces — una al inicio, otra a la mitad. Mantén una sola capa.' },
      wings: { label: 'Alitas de pollo', tip: 'Sécalas antes de cocinar y voltéalas a la mitad para una piel pareja.' },
      breast: { label: 'Pechuga de pollo (deshuesada)', tip: 'Retira a 165°F internos — la temperatura sigue subiendo mientras reposa.' },
      thigh: { label: 'Muslos de pollo / con hueso', tip: 'Piel hacia arriba todo el tiempo. No necesita voltearse.' },
      steak: { label: 'Bistec y cortes gruesos', tip: 'Voltea una vez y deja reposar 5 minutos antes de cortar.' },
      fish: { label: 'Pescado y salmón', tip: 'No voltear. Revisa antes de tiempo — el pescado se pasa de cocción en menos de un minuto.' },
      bacon: { label: 'Tocino', tip: 'Una sola capa. Escurre la grasa a la mitad si empieza a humear.' },
      veg: { label: 'Verduras', tip: 'Corta las piezas de tamaño parejo y revuelve a la mitad.' },
      baked: { label: 'Repostería y galletas', tip: 'Un ajuste más suave — la masa se cuaja más lento de lo que dora la superficie.' },
      pizza: { label: 'Pizza y recalentado', tip: 'No hace falta precalentar para recalentar. Vigila la costra, no el reloj.' },
      casserole: { label: 'Guisos y horneados gruesos', tip: 'Cubre con papel aluminio si la superficie dora antes de que el centro esté caliente.' },
    },
  },
  reverseConverter: {
    widgetLabel: 'Freidora de aire → Horno',
    airFryerTemperature: 'Temperatura de la freidora de aire',
    airFryerTime: 'Tiempo de freidora de aire',
    ovenSetting: 'Ajuste del horno',
    stepNote: 'Redondeado a pasos de horno de 25°F',
    ovenCaveat:
      'Un horno convencional no hace circular el aire como una cesta de freidora — precalienta por completo antes de meter el alimento, y espera que una sola capa quede un poco menos crujiente que en la freidora de aire.',
    ambiguousCeilingNoteTemplate:
      'Esto está en el límite de tu {unit} ({ceiling}°F). Si este ajuste vino de convertir hacia abajo una receta de horno más caliente, el tiempo ya incluye cerca de un 8% extra — réstalo para un resultado más preciso.',
  },
  convectionConverter: {
    widgetLabel: "Convección → Freidora de aire",
    ovenTemperature: "Temperatura de convección",
    ovenTime: "Tiempo de convección",
  },
  reverseConvectionConverter: {
    widgetLabel: "Freidora de aire → Convección",
    airFryerTemperature: "Temperatura de la freidora de aire",
    airFryerTime: "Tiempo de freidora de aire",
    ovenSetting: "Ajuste del horno de convección",
    stepNote: "Redondeado a pasos de horno de 25°F",
    ovenCaveat: "Deja el ventilador encendido y reparte el alimento en una sola capa con espacio alrededor de cada pieza — una bandeja de convección llena pierde el flujo de aire que suponen estos tiempos.",
    ambiguousCeilingNoteTemplate: "Esto está en el límite del {unit} ({ceiling}°F). Si se convirtió a la baja desde una receta de convección más caliente, el tiempo ya incluye cerca de un 8% extra — réstalo, o vuelve a la receta original.",
  },
  frozenConverter: {
    widgetLabel: "Envase congelado → Freidora de aire",
    ovenTemperature: "Temperatura del envase",
    ovenTime: "Tiempo del envase",
    packType: "Las instrucciones del envase son para",
    packConventional: "Horno convencional",
    packFan: "Horno con ventilador",
    shake: "Agitar",
    flip: "Voltear",
    turnAtTemplate: "{action} a los {times} min",
    noTurn: "No hace falta voltear",
    listJoin: " y ",
    internalTemplate: "Interior {f}°F / {c}°C",
    rawWarningTemplate: "Pollo crudo desde congelado: comprueba con un termómetro que la pieza más gruesa llega a {f}°F ({c}°C) antes de comer. El exterior se dora mucho antes de que un centro congelado sea seguro.",
    foods: {
      fries: {
        label: "Papas fritas",
        tip: "Una sola capa o casi, y separa al agitar las piezas que se congelaron juntas.",
      },
      nuggets: {
        label: "Nuggets de pollo",
        tip: "Repártelos bien: las piezas que se tocan se cuecen al vapor en lugar de quedar crujientes.",
      },
      tenders: {
        label: "Pollo empanizado, tiras y Kiev",
        tip: "Revisa el envase: muchos productos de pollo empanizado se venden crudos, no solo para recalentar.",
      },
      fish: {
        label: "Palitos de pescado y filetes empanizados",
        tip: "Voltea con cuidado con pinzas: el rebozado cuaja antes de que el pescado esté firme.",
      },
      pizza: {
        label: "Pizza (individual)",
        tip: "Solo una pizza que quepa plana en la cesta. Revisa la base al inicio del rango de tiempo.",
      },
      springRolls: {
        label: "Rollitos primavera y samosas",
        tip: "Un ligero rocío de aceite ayuda a que la masa se dore de forma pareja.",
      },
      hashBrowns: {
        label: "Hash browns y formas de papa",
        tip: "Las piezas planas se doran de un lado a la vez: voltea una vez a la mitad.",
      },
      veg: {
        label: "Verduras congeladas",
        tip: "No las descongeles antes. Agitar deja salir el vapor; si no, quedan blandas.",
      },
      wings: {
        label: "Alitas de pollo (crudas, congeladas)",
        tip: "Separa en la primera agitada las alitas que se congelaron juntas.",
      },
      rawChicken: {
        label: "Pechuga de pollo cruda (desde congelado)",
        tip: "Más baja y más lenta que fresca: el centro tiene que descongelarse y cocinarse.",
      },
    },
  },
  home: {
    metaTitle: 'Conversor de horno a freidora de aire',
    metaDescription:
      'Conversor gratuito de horno a freidora de aire. Convierte temperatura y tiempo de horno a los ajustes de la freidora de aire según el tipo de alimento y si es de cesta o tipo horno — sin la regla plana de 25° ni registro.',
    metaKeywords:
      'conversor de horno a freidora de aire, conversión de horno a freidora de aire, convertir horno a freidora de aire, tiempo de cocción horno a freidora de aire, conversión de freidora de aire a horno, calculadora de freidora de aire a horno, tabla de conversión freidora de aire, tabla de temperatura freidora de aire, tiempos de cocción freidora de aire, calculadora freidora de aire',
    eyebrow: 'Gratis / Sin registro / Funciona sin conexión',
    heroTitle: 'Conversor de horno a freidora de aire',
    heroSub:
      'Ingresa la temperatura y el tiempo de la receta. Obtén el ajuste de la freidora de aire para tu alimento, adaptado a cesta o tipo horno — no una regla fija de 25°.',
    ctaLabel: 'Abrir el conversor completo',
    commonConversionsHeading: 'Conversiones comunes',
    commonConversions: ['−20% de tiempo', '−20% de tiempo', '−20% de tiempo', 'límite de cesta'],
    railFootnote: 'Multiplicadores ajustados para freidoras de aire de cesta y tipo horno, según el alimento.',
    comingSoon: 'Próximamente',
    sectionTitles: {
      convert: 'Convertir',
      reverse: 'Conversión inversa',
      frozen: 'Modo congelados',
      presets: 'Alimentos preconfigurados',
      brands: 'Ajustes por marca',
    },
    convertCards: [
      { title: 'Horno → Freidora de aire', desc: 'El principal. Multiplicadores por tipo de alimento, cesta vs. tipo horno, límite máximo de temperatura, °F/°C/nivel de gas.' },
      { title: 'Convección → Freidora de aire', desc: 'Las recetas de convección ya están ajustadas por ventilador, así que necesitan un recorte más suave. La mayoría de las herramientas se equivocan aquí.' },
      { title: 'Ajuste por porciones y lotes', desc: 'Ajusta el tiempo cuando la cesta está llena o cocinas en dos tandas.' },
      { title: 'Ajuste por vatiaje', desc: 'Las cestas compactas de 1200 W funcionan más lento que los modelos de 1700 W. Corrígelo para la tuya.' },
    ],
    reverseCards: [
      { title: 'Freidora de aire → Horno', desc: 'Cocinas para muchos o la cesta está ocupada. Vuelve al horno.' },
      { title: 'Freidora de aire → Convección', desc: 'Mismo principio de ventilador, cavidad más grande. Añade tiempo, no temperatura.' },
      { title: '°F / °C / nivel de gas', desc: 'Conversión directa de temperatura para recetas del Reino Unido, la UE y EE. UU.' },
      { title: 'Tabla de conversión imprimible', desc: 'Tabla completa en °F y °C para pegar en el refrigerador. Una hoja, sin registro por correo.' },
    ],
    frozenTeaser: {
      heading: 'Directo del congelador a la freidora',
      desc: 'Mantén la temperatura del empaque y recorta cerca de un 30% del tiempo — lo contrario de la regla habitual. Elige lo que estás cocinando.',
      selectLabel: 'Selecciona un alimento congelado',
      options: ['Papas fritas congeladas', 'Nuggets de pollo congelados', 'Pechuga de pollo congelada', 'Pizza congelada', 'Palitos de pescado congelados'],
      goLabel: 'Ir',
    },
    frozenCards: [
      { title: 'Papas fritas congeladas', desc: 'Una sola capa, no necesita aceite.' },
      { title: 'Nuggets congelados', desc: 'El empanizado dora rápido.' },
      { title: 'Pechuga de pollo congelada', desc: 'Más baja y más lenta de lo que esperas.' },
      { title: 'Pizza congelada', desc: 'Solo tamaño individual en una cesta.' },
    ],
    frozenCardSpec: {
      template: '{AF_F}°F · {MIN} min · {EXTRA}',
      shake: 'agitar ×{N}',
      shakeOnce: 'agitar una vez',
      flip: 'voltear ×{N}',
      flipOnce: 'voltear una vez',
      noTurn: 'sin voltear',
      internal: '{INT_F}°F al centro',
    },
    presetsTeaser: {
      heading: 'Tiempo y temperatura para un alimento específico',
      desc: 'Cada preconfiguración da temperatura, tiempo, puntos de agitado o volteo, y señales de cocción. Sin blog de recetas que desplazar.',
      selectLabel: 'Selecciona un alimento preconfigurado',
      goLabel: 'Ir',
    },
    allPresetsCard: { title: 'Todas las preconfiguraciones →', desc: 'Carne, pescado, verduras, repostería, recalentado.' },
    brandCards: [
      { title: 'Ninja', spec: 'Máx. 400°F · cesta y doble', desc: 'Ajustes para AF101, AF161, DZ201 y Foodi.' },
      { title: 'Cosori', spec: 'Máx. 450°F · 11 preconfiguraciones', desc: 'Traduce los botones preconfigurados a tiempos reales.' },
      { title: 'Philips', spec: 'Máx. 390°F · Rapid Air', desc: 'Límite más bajo que la mayoría — los tiempos se alargan.' },
      { title: 'Referencia de temperatura máxima por modelo', spec: '60+ modelos', desc: 'La tabla de límites que alimenta el conversor de arriba.' },
    ],
    chartStrip: ['Multiplicadores por alimento', 'Cesta y tipo horno', '°F · °C · nivel de gas', 'Gratis — sin cuenta'],
    guide: [
      {
        heading: '¿Qué es un conversor de horno a freidora de aire?',
        body: 'Un conversor de horno a freidora de aire toma la temperatura y el tiempo de una receta de horno convencional y los traduce al ajuste equivalente de freidora de aire — así una receta escrita para un horno a 425°F no termina con bordes quemados y el centro crudo solo por cocinarse en una cesta en vez del horno. Está pensado para el momento que todo cocinero casero enfrenta tarde o temprano: una receta favorita indica temperatura y tiempo de horno, pero encender todo el horno parece excesivo para cuatro muslos de pollo o una bandeja de papas fritas, y la freidora de aire sobre la encimera puede hacer el trabajo más rápido y con menos energía — si sabes qué ajustes usar. Ese es el vacío que cierra esta herramienta. Ingresa la temperatura y el tiempo de horno de la receta, indica qué estás cocinando y si tu equipo es de cesta o tipo horno, y obtendrás un ajuste que realmente coincide con cómo cocinan las freidoras de aire.',
      },
      {
        heading: 'Cómo funciona la conversión de horno a freidora de aire',
        body: 'La mayoría de los consejos de conversión de horno a freidora de aire en internet se reducen a una sola línea: resta 25°F y recorta el tiempo una quinta parte. Esa regla no está del todo mal — las freidoras de aire son hornos de convección pequeños con aire forzado, así que transfieren calor más rápido y necesitan menos temperatura y menos tiempo que un horno convencional. Pero tratar todos los alimentos igual es donde las reglas fijas fallan. Una regla fija asume que una bandeja de papas finas y un pan de plátano denso responden igual al flujo de aire más rápido. No es así. Los alimentos delgados y de mucha superficie, como papas fritas, tocino y alitas de pollo, quedan rodeados de aire caliente por casi todos lados, así que se cocinan mucho más rápido — a menudo necesitan 25–30% menos tiempo. Un guiso denso o un corte grueso de carne todavía tiene que conducir el calor hasta el centro igual que en un horno, así que el ahorro es menor, más cerca del 10–15%. Aplica el multiplicador de las papas fritas al guiso y lo sacarás crudo; aplica el multiplicador del guiso a las papas fritas y las resecarás. Por eso una conversión adecuada de horno convencional a freidora de aire necesita un multiplicador por categoría de alimento en vez de un solo número para todo — el conversor de arriba observa lo que seleccionaste y aplica la reducción de tiempo que ese alimento realmente necesita, junto con la caída estándar de temperatura.',
      },
      {
        heading: 'Paso a paso: cómo convertir de horno a freidora de aire',
        body: 'Para convertir ajustes de horno a freidora de aire en cualquier receta: ingresa la temperatura del horno tal como está escrita, ingresa el tiempo de horneado, elige el tipo de alimento más cercano y luego selecciona si tu equipo es una freidora de aire de cesta o una unidad tipo horno (un horno freidora o un híbrido de horno tostador). La herramienta baja la temperatura, aplica el multiplicador de tiempo correcto según el alimento, y verifica el resultado contra lo que tu equipo realmente puede alcanzar — así nunca obtienes un número que no existe en tu perilla.',
      },
      {
        heading: 'Conversión del tiempo de cocción de horno a freidora de aire',
        body: 'La temperatura es solo la mitad del trabajo — la conversión del tiempo de cocción de horno a freidora de aire importa igual, y es la parte que las calculadoras de regla fija suelen fallar. Como las freidoras de aire hacen circular aire caliente directamente alrededor del alimento en una cámara pequeña, el calor llega a la superficie más rápido y la cocción termina antes incluso a menor temperatura. Por eso un horneado de 45 minutos en el horno puede convertirse en una cocción de 32 minutos en la freidora de aire en lugar de un simple porcentaje del número original: la reducción de tiempo depende de cuánta superficie expone el alimento a ese flujo de aire, no solo del cambio de temperatura.',
      },
      {
        heading: 'Conversión de freidora de aire a horno (el camino inverso)',
        body: 'La conversión funciona en ambos sentidos. A veces tienes una receta de freidora de aire o una preconfiguración del manual de tu equipo y necesitas convertirla a ajustes de horno — porque cocinas un lote más grande de lo que cabe en la cesta, la freidora de aire ya está ocupada con otra cosa, o alimentas a la mesa usando el horno completo. La conversión de freidora de aire a horno generalmente implica subir la temperatura y añadir tiempo de cocción, ya que la cavidad más grande y el flujo de aire más lento de un horno convencional no pueden igualar el calor concentrado de la freidora de aire. Una calculadora de freidora de aire a horno aplica esto al revés: añade aproximadamente 25°F a la temperatura de la freidora de aire, luego extiende el tiempo con el mismo porcentaje según el tipo de alimento que la conversión hacia adelante había restado. Es la misma lógica de fondo, aplicada al revés, y es igual de sensible al tipo de alimento — un lote de nuggets ampliado para el horno necesita un ajuste de tiempo distinto al de un pollo entero.',
      },
      {
        heading: 'Freidoras de aire de cesta vs. tipo horno',
        body: 'No todas las freidoras de aire se comportan igual, por eso este conversor pregunta qué tipo tienes antes de terminar la conversión. Las freidoras de aire de cesta empacan el alimento en una cámara pequeña y sellada con aire moviéndose por todos lados — eso las hace rápidas, pero también significa que la mayoría de los modelos tienen un límite cercano a 400°F, y pasar ese límite no es realista sin importar lo que sugiera una calculadora genérica. Las unidades tipo horno (incluidos los hornos freidora y las cestas tipo horno tostador) tienen más volumen de aire alrededor del alimento, así que el efecto es más suave: las temperaturas pueden ser un poco más altas, hasta cerca de 450°F, antes de llegar a un límite práctico. Incluir el tipo de equipo en la conversión, en vez de ignorarlo, es lo que mantiene el resultado realista.',
      },
      {
        heading: 'Consejos para obtener los mejores resultados',
        body: 'Unas cuantas cosas ayudan a que cualquier resultado de un conversor de horno a freidora de aire quede más cerca de lo correcto desde el primer intento. Precalienta brevemente — unos 3 minutos para una cesta, 4 para tipo horno — ya que las freidoras de aire pierden más calor relativo que un horno cuando se abre la puerta o el cajón. No sobrecargues la cesta; una sola capa, sin apretar demasiado, es lo que asumen los multiplicadores por tipo de alimento, y una cesta llena necesita tiempo extra, más cercano a lo que necesitaría un horno completo. Revisa el alimento unos minutos antes de lo que sugiere el tiempo convertido, sobre todo la primera vez que conviertes una receta nueva, ya que el vatiaje y la calibración varían entre modelos de freidora de aire. Y trata los alimentos congelados de forma distinta — siguen el patrón opuesto al de una receta fresca, manteniendo cerca la temperatura del empaque mientras aun así se recorta el tiempo, ya que el alimento necesita el calor inicial solo para descongelarse antes de poder cocinarse.',
      },
    ],
  },
  tool: {
    metaTitle: 'Conversor de horno a freidora de aire',
    metaDescription:
      'Ingresa la temperatura y el tiempo de horno de cualquier receta. Obtén el ajuste equivalente de freidora de aire, adaptado al tipo de alimento y a cesta vs. tipo horno — con un límite máximo para que nunca sugiera una temperatura que tu equipo no pueda alcanzar.',
    metaKeywords: 'conversión de horno a freidora de aire, calculadora de horno a freidora de aire, calculadora de conversión freidora de aire, tabla de conversión freidora de aire',
    backLink: 'Todas las herramientas',
    heading: 'Conversor de horno a freidora de aire',
    subDesc:
      'Ingresa la temperatura y el tiempo de horno de cualquier receta. Obtén el ajuste equivalente de freidora de aire, adaptado al tipo de alimento y a cesta vs. tipo horno — con un límite máximo para que nunca sugiera una temperatura que tu equipo no pueda alcanzar.',
    aboutHeading: 'Sobre la conversión de horno a freidora de aire',
    aboutBody:
      'La mayoría de las calculadoras de horno a freidora de aire aplican una sola regla fija a todos los alimentos: resta 25°F, recorta el tiempo un 20%. Es un punto de partida razonable, pero trata una bandeja de papas finas igual que un guiso denso, y nunca verifica si el resultado es una temperatura que tu freidora de aire realmente puede alcanzar. Esta herramienta hace dos cosas distinto: ajusta el multiplicador según el tipo de alimento, y limita el resultado al techo real de tu equipo en vez de devolver un número que no existe en tu perilla.',
    multipliersHeading: 'Cómo funcionan los multiplicadores por tipo de alimento',
    multipliersBody:
      'La cámara compacta y el aire forzado de una freidora de aire transfieren calor al alimento mucho más rápido que un horno de tamaño completo, así que los tiempos de cocción siempre bajan — pero cuánto depende de la superficie y densidad del alimento. Los alimentos delgados y de mucha superficie, como papas fritas o tocino, pierden más tiempo (un recorte cercano al 30%) porque el aire caliente llega a todos los lados casi de inmediato. Los alimentos densos, como guisos o repostería, pierden menos (cerca del 15%) porque el calor todavía tiene que abrirse paso hasta el centro. El pollo, el pescado y las verduras quedan en un punto intermedio. El conversor busca el multiplicador correcto para el alimento que seleccionaste en vez de aplicar un solo número a todo.',
    basketVsOvenHeading: 'Flujo de aire: cesta vs. tipo horno',
    basketVsOvenBody:
      'Una freidora de aire de cesta empaca el alimento en una cámara pequeña con aire circulando por todos lados, lo que cocina rápido pero tiene un límite seguro más bajo — la mayoría de las cestas topan cerca de 400°F. Las unidades tipo horno (hornos freidora y cestas tipo horno tostador) tienen más volumen de aire alrededor del alimento, así que el efecto es un poco más suave: esta herramienta resta 5°F menos de la temperatura del horno y añade un pequeño extra de tiempo para las unidades tipo horno, y permite que el resultado llegue hasta 450°F antes de limitarlo.',
    whatHappensHeading: 'Qué pasa cuando una receta necesita más calor del que tu freidora de aire puede dar',
    whatHappensBody:
      'Una receta de 450°F convertida con una regla fija en una freidora de aire de cesta con máximo de 400°F devolvería 425°F — un ajuste que no existe en la perilla. Esta herramienta limita el resultado al techo real del equipo (400°F cesta, 450°F tipo horno) y añade tiempo de vuelta para compensar el menor calor, con una nota en lenguaje claro que explica qué pasó y qué esperar (una superficie un poco menos crujiente, así que revisa un poco antes). Es el vacío más común entre las demás calculadoras de freidora de aire, y la razón de ser de esta herramienta.',
    relatedChartLink: 'Tabla de conversión imprimible',
    relatedReverseLink: 'Conversor de freidora de aire a horno',
    relatedConvectionLink: "Conversor de convección a freidora de aire",
    relatedFrozenLink: "Modo de alimentos congelados (instrucciones del envase)",
    faqHeading: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Por qué no simplemente restar 25°F y recortar el tiempo un 20% para todo?',
        a: 'Porque los distintos alimentos responden de forma diferente al flujo de aire más rápido de la freidora de aire. Un alimento delgado y de mucha superficie como las papas fritas necesita un recorte de tiempo mayor (cerca del 30%) o se reseca; un guiso denso apenas necesita uno (cerca del 15%). Este conversor aplica un multiplicador distinto por tipo de alimento en vez de una sola regla fija.',
      },
      {
        q: '¿Qué pasa si la temperatura convertida es más alta de lo que mi freidora de aire puede alcanzar?',
        a: 'El resultado se limita al techo realista de tu equipo — 400°F para una freidora de aire de cesta, 450°F para tipo horno — y se añaden unos minutos extra para compensar, con una nota que explica por qué. La mayoría de las calculadoras devuelven en silencio un número que tu equipo en realidad no puede alcanzar.',
      },
      {
        q: '¿Cuál es la diferencia entre los ajustes de cesta y tipo horno?',
        a: 'Una freidora de aire de cesta rodea el alimento con aire caliente por todos lados en una cámara pequeña, así que cocina más rápido y tiene un límite práctico de temperatura más bajo. Las unidades tipo horno (hornos freidora, cestas tipo horno tostador) tienen más volumen de aire alrededor del alimento, así que funcionan un poco más frescas respecto al horno y pueden llegar un poco más alto antes de limitarse.',
      },
      {
        q: '¿Funciona para alimentos directo del congelador?',
        a: 'Los alimentos congelados siguen una lógica distinta a una receta fresca recién sacada del refrigerador — mantén la temperatura del empaque más o menos igual y recorta el tiempo cerca de un 30%, lo opuesto a la regla habitual, ya que el alimento necesita todo el calor solo para descongelarse antes de poder cocinarse.',
      },
      {
        q: '¿Qué tan preciso es el resultado?',
        a: 'Las temperaturas se redondean al múltiplo de 5 más cercano, igual que avanzan las perillas y controles digitales reales de las freidoras de aire. Trata el resultado como un punto de partida, no una garantía — revisa el alimento un poco antes del tiempo sugerido, sobre todo la primera vez que cocinas algo en un equipo nuevo.',
      },
      {
        q: '¿Necesito precalentar?',
        a: 'Un precalentado breve ayuda a que el resultado quede en el punto correcto: unos 3 minutos para una unidad de cesta, 4 minutos para tipo horno (se muestra en el panel de resultados de arriba). Saltarse el precalentado por lo general solo significa añadir uno o dos minutos al tiempo de cocción.',
      },
      {
        q: '¿Se puede convertir un horno en una freidora de aire?',
        a: 'No puedes convertir el electrodoméstico en sí — son piezas de hardware distintas. Lo que sí puedes hacer es convertir la temperatura y el tiempo de horno de una receta al ajuste equivalente de freidora de aire, que es exactamente lo que hace esta herramienta: toma en cuenta la cocción más rápida y con aire forzado de la freidora de aire para que el mismo platillo salga bien en cualquiera de los dos equipos.',
      },
      {
        q: '¿200 grados en una freidora de aire es lo mismo que en un horno?',
        a: 'No. Las freidoras de aire hacen circular aire caliente directamente alrededor del alimento en una cámara pequeña, así que 200° en una freidora de aire cocina notablemente más rápido y dora más que 200° en un horno convencional. Como regla general, baja la temperatura unos 20°F (o aproximadamente de 20°C a 180°C) y acorta el tiempo para compensar — usa la calculadora de arriba para un número ajustado a tu alimento específico.',
      },
      {
        q: '¿Qué es la regla 20/20 para freidoras de aire?',
        a: 'La regla 20/20 es un atajo popular para la conversión de horno a freidora de aire: baja la temperatura del horno 20°F y recorta el tiempo de cocción un 20%. Es una estimación rápida razonable, pero aplica el mismo ajuste a todos los alimentos — este conversor lo refina con un multiplicador de tiempo distinto por tipo de alimento en vez de un solo número fijo.',
      },
      {
        q: '¿Cuánto son 30 minutos de horno en una freidora de aire?',
        a: 'Aproximadamente 21–25 minutos, según lo que estés cocinando. Los alimentos delgados y de mucha superficie, como papas fritas o alitas, pierden más cerca del 30% del tiempo (unos 21 minutos), mientras que los alimentos densos, como guisos, pierden más cerca del 15% (unos 25 minutos). Ingresa 30 minutos y tu tipo de alimento arriba para una cifra exacta.',
      },
      {
        q: '¿Cómo convierto 200°C por 15 minutos en el horno a freidora de aire?',
        a: 'Como punto de partida, 200°C por 15 minutos en el horno se convierten en aproximadamente 180°C por 12 minutos en una freidora de aire — una caída de 20° y un recorte de tiempo del 20%. Los números exactos cambian según el tipo de alimento y si tienes una unidad de cesta o tipo horno, que es justo lo que toma en cuenta la calculadora de arriba.',
      },
      {
        q: '¿Es una freidora de aire más rápida que un horno?',
        a: 'Sí, típicamente entre un 20 y un 30% más rápida. La cámara de cocción pequeña de una freidora de aire, la resistencia más cercana y la circulación de aire forzado transfieren calor al alimento mucho más rápido que un horno de tamaño completo, y necesita poco o nada de tiempo de precalentado comparado con los 10–15 minutos de un horno.',
      },
      {
        q: '¿Puedo reemplazar mi horno con una freidora de aire?',
        a: 'Para la cocina diaria en porciones pequeñas — pollo, pescado, verduras, papas fritas, recalentar sobras — una freidora de aire puede reemplazar el horno la mayor parte del tiempo, más rápido y con menos energía. No lo reemplaza por completo: asados grandes, comidas en bandeja, horneado en varios niveles, y cualquier cosa demasiado grande para la cesta todavía necesitan un horno de tamaño completo.',
      },
      {
        q: '¿Cómo convierto un horno en una freidora de aire?',
        a: 'No puedes convertir el electrodoméstico en sí, pero muchos hornos modernos incluyen un ajuste de convección o "air fry" que se le aproxima — encender el ventilador reduce el tiempo y la temperatura de cocción de forma similar a una freidora de aire. De lo contrario, usa este conversor para traducir cualquier receta de horno a ajustes de freidora de aire y cocínala en una freidora de aire aparte.',
      },
      {
        q: '¿Cuánto son 20 minutos de horno en una freidora de aire?',
        a: 'Alrededor de 14–17 minutos para la mayoría de los alimentos — un recorte de aproximadamente 15–30% según el tipo de alimento. Los alimentos delgados como papas fritas o tocino quedan más cerca de 14 minutos; los alimentos densos como repostería quedan más cerca de 17. Usa la calculadora de arriba con tu alimento específico para una cifra precisa.',
      },
      {
        q: '¿Puedo usar papel aluminio en una freidora de aire?',
        a: 'Sí, la mayoría de las freidoras de aire pueden usar papel aluminio de forma segura siempre que no bloquee el flujo de aire alrededor del alimento ni toque la resistencia. Sujétalo con el alimento para que no vuele hacia la resistencia, deja espacios para que circule el aire, y evita el aluminio con alimentos muy ácidos (tomate, cítricos, marinados con vinagre) en cocciones prolongadas, ya que el ácido puede reaccionar con el metal.',
      },
      {
        q: '¿Qué es más saludable, una freidora de aire o un horno?',
        a: 'Son más o menos equivalentes — ambos cocinan con poco o nada de aceite añadido, a diferencia de freír en aceite profundo. La ventaja de salud de una freidora de aire es específicamente frente a freír en aceite profundo (hasta un 70–80% menos aceite), no frente al horneado, que ya usa poco aceite. La diferencia principal frente a un horno es conveniencia y velocidad, no nutrición.',
      },
      {
        q: '¿Cuál es la diferencia entre una freidora de aire y un horno de convección?',
        a: 'Usan el mismo principio — un ventilador que hace circular aire caliente — pero la cámara de una freidora de aire es mucho más pequeña y el alimento queda más cerca tanto del ventilador como de la resistencia, así que cocina más rápido y dora de forma más agresiva. Un horno de convección aplica el mismo flujo de aire asistido por ventilador en una cavidad mucho más grande, por eso las recetas de convección necesitan un ajuste más suave que las recetas de horno estándar al convertirlas a freidora de aire.',
      },
      {
        q: '¿Las freidoras de aire usan menos energía que un horno?',
        a: 'Sí. Una freidora de aire típica consume entre 1200 y 1800 vatios y funciona durante una fracción del tiempo que necesita un horno (sin precalentado largo, menos volumen que calentar), así que una sola comida generalmente cuesta notablemente menos energía que calentar un horno de tamaño completo para el mismo alimento.',
      },
      {
        q: '¿Puedo poner un molde metálico o un recipiente apto para horno en una freidora de aire?',
        a: 'Sí, siempre que sea apto para horno y quepa en la cesta o bandeja con espacio para que el aire circule por todos lados. El metal, el vidrio apto para horno y la cerámica funcionan bien; evita cualquier cosa que bloquee el flujo de aire o sea demasiado alta para que la cesta cierre correctamente.',
      },
    ],
  },
  reverseTool: {
    metaTitle: 'Conversor de freidora de aire a horno',
    metaDescription:
      'Ingresa la temperatura y el tiempo de la freidora de aire de una receta, una preconfiguración o el manual de tu equipo. Obtén el ajuste equivalente de horno, adaptado al tipo de alimento y a cesta vs. tipo horno, redondeado a los pasos de 25° que usa un horno real.',
    metaKeywords:
      'conversión de freidora de aire a horno, calculadora de freidora de aire a horno, convertir freidora de aire a horno, conversión de tiempo de cocción freidora de aire a horno, freidora de aire a horno convencional, ajuste de freidora de aire a temperatura de horno',
    backLink: 'Todas las herramientas',
    heading: 'Conversor de freidora de aire a horno',
    subDesc:
      'Ingresa la temperatura y el tiempo de la freidora de aire de una receta, una preconfiguración o el manual de tu equipo. Obtén el ajuste equivalente de horno, adaptado al tipo de alimento y a cesta vs. tipo horno, redondeado a los pasos de 25° que usa un horno real.',
    aboutHeading: 'Sobre la conversión de freidora de aire a horno',
    aboutBody:
      'La mayoría de las herramientas de horno a freidora de aire solo funcionan en una dirección, pero el camino inverso surge igual de seguido. Una receta, una preconfiguración del manual de tu freidora de aire, o un consejo de un amigo te da una temperatura y un tiempo de freidora de aire, y necesitas los números del horno convencional en su lugar — porque cocinas para más personas de las que caben en la cesta, la freidora de aire ya está ocupada con otra cosa, o el horno es simplemente la herramienta adecuada para lo que preparas hoy. Este conversor hace funcionar el motor del conversor principal de horno a freidora de aire al revés: ingresa la temperatura y el tiempo de la freidora de aire, elige el tipo de alimento y si tu equipo es de cesta o tipo horno, y obtendrás el ajuste de horno que esa receta necesitaría — usando los mismos multiplicadores por alimento que el conversor hacia adelante, no un número fijo invertido.',
    roundingHeading: 'Por qué el resultado del horno redondea a 25°F, no a 5°F',
    roundingBody:
      'La pantalla digital de una freidora de aire puede mostrar cualquier paso de 5°, pero una perilla o control de horno real solo avanza en incrementos de 25° — 325, 350, 375, 400, y así sucesivamente. Si redondeas una conversión inversa a la cuadrícula más fina de 5° de la freidora de aire, obtendrías números como 405°F o 415°F que no existen en la perilla de un horno, y convertir una receta en ambos sentidos — de horno a freidora de aire y de vuelta al horno — se alejaría un poco más del número original cada vez que cambiara de dirección. Redondear el resultado del horno al 25° más cercano en cambio mantiene cada resultado como un ajuste que realmente puedes marcar en una perilla, y por eso convertir la misma receta en ambas direcciones vuelve cerca de donde empezó en lugar de irse a la deriva.',
    workedExampleHeading: 'Ejemplo práctico',
    workedExampleTemplate:
      'Toma una receta de freidora de aire de cesta con alimento general a 375°F por 20 minutos: conviértela de vuelta y el ajuste de horno resulta en {GENERAL_OVEN_F}°F por {GENERAL_OVEN_MIN} minutos — la reducción habitual de 25° de temperatura y el ahorro del 20% de tiempo de la freidora de aire, añadidos de vuelta. Las papas fritas se comportan distinto: 400°F por 12 minutos en una cesta se convierten en {FRIES_OVEN_F}°F por {FRIES_OVEN_MIN} minutos en el horno, un aumento de tiempo mayor, porque las papas fritas pierden más tiempo que el promedio al entrar a la freidora de aire y necesitan recuperar más al salir.',
    whenOvenBetterHeading: 'Cuándo el horno es realmente la mejor opción',
    whenOvenBetterBody:
      'La freidora de aire gana en velocidad para una sola capa de alimento sin apretar, pero el horno sigue siendo la mejor herramienta en algunas situaciones comunes: cocinar más de lo que cabe en la cesta en una sola tanda, preparar dos platillos en rejillas distintas al mismo tiempo, una freidora de aire ocupada a mitad de otro ciclo, o un corte demasiado grande para caber en una cesta — un pollo entero, una bandeja completa de galletas, una gran bandeja de verduras para muchos comensales. En cualquiera de esos casos, convertir el ajuste de freidora de aire que ya conoces de vuelta a un número de horno es más rápido que adivinar desde cero, y mantiene intacta la lógica por tipo de alimento — las papas fritas necesitan recuperar más tiempo que un guiso — en ambas direcciones.',
    ovenCaveatHeading: 'Algo que debes saber: un horno estándar no está hecho para freír',
    ovenCaveatBody:
      'Un horno convencional no tiene la circulación de aire forzado que sí tiene una cesta de freidora, así que dos cosas cambian. El precalentado importa más, ya que el horno necesita todo su tiempo de calentamiento para llegar a la temperatura objetivo de forma pareja, en lugar de los 3–4 minutos que necesita una freidora de aire. Y una sola capa de alimento no quedará tan crujiente como en la cesta, ya que hay menos flujo de aire concentrado golpeando cada lado a la vez. Ninguno de los dos es un problema que evitar — solo no esperes que una bandeja de alitas al horno se vea idéntica a la versión hecha en freidora de aire, y apóyate en un ajuste de convección o "air fry" del horno si el tuyo lo tiene, ya que eso cierra la mayor parte de la diferencia.',
    relatedFlagshipLink: 'Conversor de horno a freidora de aire',
    relatedChartLink: 'Tabla de conversión imprimible',
    relatedConvectionLink: "Conversor de freidora de aire a convección",
    faqHeading: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Cómo convierto los ajustes de la freidora de aire a un horno convencional?',
        a: 'Suma de vuelta el mismo ajuste de temperatura por tipo de alimento a la temperatura de la freidora de aire (25°F para la mayoría de los alimentos, 20°F para bistec, pescado, repostería y guisos), y divide el tiempo de la freidora de aire entre el multiplicador de tiempo de ese alimento en vez de multiplicarlo. La calculadora de arriba hace esto automáticamente y redondea la temperatura del horno a un paso real de 25° de la perilla.',
      },
      {
        q: '¿Por qué la temperatura del horno redondea a un paso de 25° en vez de un número exacto?',
        a: 'Porque una perilla o control digital de horno real solo avanza en incrementos de 25°F — 350, 375, 400 — no en los pasos más finos de 5° que usa una freidora de aire. Redondear a lo que la perilla realmente puede mostrar es también lo que mantiene una receta convertida en ambas direcciones (de horno a freidora de aire y de vuelta al horno) cerca del número donde empezó en lugar de alejarse.',
      },
      {
        q: '¿El horno dará exactamente el mismo resultado que la freidora de aire?',
        a: 'Cercano, pero no idéntico. Un horno convencional no tiene la circulación de aire forzado de una cesta de freidora, así que el precalentado importa más y una sola capa de alimento no quedará tan crujiente. Si tu horno tiene un ajuste de ventilador de convección o "air fry", úsalo — eso cierra la mayor parte de la diferencia.',
      },
      {
        q: '¿Cuándo debería usar el horno en vez de la freidora de aire?',
        a: 'Cuando la cesta no puede hacer el trabajo en una sola tanda: un lote más grande de lo que cabe en la cesta, dos platillos cocinándose en rejillas separadas a la vez, una freidora de aire ya ocupada, o un alimento demasiado grande para caber en una cesta, como un pollo entero o una bandeja completa de galletas.',
      },
      {
        q: '¿El multiplicador por tipo de alimento sigue importando en esta dirección?',
        a: 'Sí — se invierte en vez de desaparecer. Los alimentos delgados y de mucha superficie, como las papas fritas y el tocino, necesitaron el mayor recorte de tiempo al entrar a la freidora de aire, así que necesitan el mayor aumento de tiempo al volver al horno. Los alimentos densos, como los guisos, necesitan el ajuste más pequeño en ambos sentidos.',
      },
      {
        q: '¿Qué temperatura interna debo seguir revisando, sin importar el equipo?',
        a: 'Los objetivos de temperatura interna no cambian entre una freidora de aire y un horno — retira las aves a 165°F internos y el pescado, bistec o chuletas a 145°F. El equipo cambia el tiempo y el ajuste de la perilla para llegar ahí; no cambia lo que significa "listo".',
      },
    ],
  },
  convectionTool: {
    metaTitle: "Conversor de horno de convección a freidora de aire",
    metaDescription: "Convierte una receta de horno de convección o con ventilador a ajustes de freidora de aire. Un recorte más suave que la regla del horno — las recetas con ventilador ya están ajustadas — por tipo de alimento y cesta o tipo horno.",
    metaKeywords: "convección a freidora de aire, horno de convección a freidora de aire, horno con ventilador a freidora de aire, convertir receta de convección a freidora de aire, aire caliente a freidora de aire",
    backLink: "Todas las herramientas",
    heading: "Conversor de convección a freidora de aire",
    subDesc: "Introduce la temperatura y el tiempo de una receta de horno de convección o con ventilador. Obtén el ajuste de freidora de aire con el recorte más pequeño que necesita una receta ya ajustada por ventilador, según el alimento y si es de cesta o tipo horno.",
    aboutHeading: "Por qué las recetas de convección necesitan su propia conversión",
    aboutBody: "Un horno de convección y una freidora de aire funcionan con el mismo principio: un ventilador mueve el aire caliente alrededor del alimento para que el calor llegue más rápido que con el aire quieto. Por eso una receta escrita para convección ya trae incorporada la mayor parte de la ventaja de la freidora de aire — suele estar unos 25°F por debajo de la versión para horno convencional del mismo plato, y a menudo es algo más corta. Si pasas esa receta por una conversión estándar de horno a freidora de aire, quitas esos 25°F por segunda vez, y así es como las recetas de horno con ventilador salen de la cesta pálidas y poco hechas. Este conversor parte del número de convección y aplica solo la diferencia que realmente queda.",
    whyGentlerHeading: "Por qué el recorte es menor",
    whyGentlerBody: "Lo que queda entre un horno de convección y una freidora de aire es el tamaño y la distancia. La cavidad de una freidora de aire es una fracción del volumen, y el alimento está a pocos centímetros del ventilador y de la resistencia, así que el aire lo alcanza antes y la superficie se dora antes. Eso equivale a unos 0–15°F y un 5–10% del tiempo, según el alimento. Las papas fritas y las alitas conservan casi todo el calor — lo necesitan para quedar crujientes y soltar la grasa — y ahorran tiempo en su lugar. La repostería y los guisos al horno reciben el mayor recorte de temperatura, 15°F, porque en una cavidad pequeña la superficie se dora antes de que cuaje el centro. Las freidoras tipo horno se parecen aún más a un horno de convección, así que su recorte baja otros 5°F.",
    workedExampleHeading: "Ejemplo práctico",
    workedExampleTemplate: "Una receta de horno con ventilador a 350°F durante 30 minutos, alimento general, en una freidora de cesta, da {GENERAL_AF_F}°F durante {GENERAL_AF_MIN} minutos. Con los mismos números en el conversor de horno convencional a freidora obtendrías {FLAGSHIP_AF_F}°F durante {FLAGSHIP_AF_MIN} minutos — demasiado bajo y demasiado corto para una receta que ya estaba ajustada por ventilador. Unas alitas a 425°F en convección durante 40 minutos superan lo que alcanza una cesta de 400°F, así que el conversor las mantiene en {WINGS_AF_F}°F y añade tiempo: {WINGS_AF_MIN} minutos, con una nota que te lo indica.",
    spotHeading: "Cómo saber si una receta está escrita para convección",
    spotBody: "Busca primero las palabras: \"ventilador\", \"aire caliente\", \"horno con ventilador\", \"convección\", \"hornear con convección\" o una temperatura escrita como \"180°C ventilador\". Las recetas británicas y australianas y muchos envases imprimen dos números, uno convencional y otro con ventilador, y el de ventilador es el más bajo. Si no hay etiqueta, compara la temperatura con la que suele llevar el plato: papas asadas a 400°F en lugar de 425°F, o galletas a 325°F en lugar de 350°F, indican que la receta ya da por hecho un ventilador. Los recetarios que vienen con un horno suelen estar escritos para su modo de convección.",
    conventionalHeading: "Si la receta no es de convección",
    conventionalBody: "Una receta para horno estándar, sin ventilador, necesita la conversión completa — la bajada de temperatura mayor y el recorte de tiempo más grande que aplica el conversor de horno a freidora de aire. Usar esta página para una receta convencional deja el alimento algo caliente y largo; usar el conversor convencional para una receta de convección lo deja poco hecho. Elige el conversor según la receta, no según tu aparato.",
    relatedFlagshipLink: "Conversor de horno a freidora de aire (recetas convencionales)",
    relatedReverseLink: "Conversor de freidora de aire a horno",
    relatedSiblingLink: "Conversor de freidora de aire a convección",
    relatedChartLink: "Tabla de conversión imprimible",
    relatedFrozenLink: "Modo de alimentos congelados (instrucciones del envase)",
    faqHeading: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Cómo convierto una receta de horno de convección a freidora de aire?",
        a: "Baja la temperatura entre 0 y 15°F según el alimento y recorta el tiempo un 5–10%. Los alimentos que deben quedar crujientes, como papas fritas y alitas, conservan el calor y pierden un poco de tiempo; la repostería y los guisos reciben el mayor recorte de temperatura. El conversor de arriba aplica los números por alimento y comprueba el resultado contra la temperatura máxima de tu freidora.",
      },
      {
        q: "¿Resto 25°F a una receta de convección para la freidora de aire?",
        a: "No. Esos 25°F son el ajuste habitual de horno convencional a convección, y una receta de convección ya lo ha hecho. Restarlo otra vez cuenta el ventilador dos veces y deja el alimento poco hecho. Desde convección, el recorte que queda es de 15°F como máximo.",
      },
      {
        q: "¿Un horno con ventilador es lo mismo que un horno de convección?",
        a: "Sí. \"Horno con ventilador\" y \"aire caliente\" son otros nombres del horno de convección. Cuando el envase indica una temperatura convencional y otra con ventilador, introduce aquí la de ventilador.",
      },
      {
        q: "¿Y si la receta de convección está más caliente de lo que alcanza mi freidora?",
        a: "El conversor mantiene la temperatura en el límite de tu aparato — 400°F en la mayoría de los modelos de cesta, 450°F en los de tipo horno — y añade cerca de un 8% de tiempo para compensar, con una nota bajo el resultado. Revisa antes; la superficie puede dorarse un poco menos.",
      },
      {
        q: "¿Puedo usar los ajustes de convección sin cambios en una freidora tipo horno?",
        a: "Casi. Una freidora tipo horno es básicamente un pequeño horno de convección, así que el recorte se reduce: 0–10°F y un tiempo cercano al original. Las papas fritas y las alitas pueden ir a la temperatura de convección con solo unos minutos menos.",
      },
      {
        q: "¿Cambian las temperaturas internas entre convección y freidora de aire?",
        a: "No. Retira las aves a 165°F internos y el pescado, el filete o las chuletas a 145°F, uses el aparato que uses. El conversor cambia el ajuste y el tiempo para llegar ahí, no lo que significa estar hecho.",
      },
    ],
  },
  reverseConvectionTool: {
    metaTitle: "Conversor de freidora de aire a horno de convección",
    metaDescription: "Convierte la temperatura y el tiempo de la freidora de aire a un ajuste de horno de convección (con ventilador), por tipo de alimento y cesta o tipo horno, redondeado a pasos de 25°. Para tandas que no caben en la cesta.",
    metaKeywords: "freidora de aire a convección, freidora de aire a horno de convección, freidora de aire a horno con ventilador, convertir receta de freidora de aire a horno de convección",
    backLink: "Todas las herramientas",
    heading: "Conversor de freidora de aire a horno de convección",
    subDesc: "Introduce una temperatura y un tiempo de freidora de aire. Obtén el ajuste del horno de convección (con ventilador), adaptado al alimento y a si es de cesta o tipo horno, redondeado a los pasos de 25° de un dial de horno real.",
    aboutHeading: "Sobre la conversión de freidora de aire a convección",
    aboutBody: "Una receta de freidora de aire escala mal. La cesta admite una sola capa, y en cuanto cocinas para seis en lugar de dos, un horno de convección — el mismo calor movido por ventilador en una cavidad donde caben dos bandejas — es el camino más rápido. Como los dos aparatos mueven aire caliente con un ventilador, pasar de la freidora de aire a un horno de convección es un ajuste pequeño, no el viaje completo de vuelta a un horno convencional. Este conversor devuelve solo la diferencia por alimento entre ambos: unos pocos grados y algo de tiempo, con la misma tabla que el conversor de convección a freidora de aire, aplicada a la inversa.",
    whenConvectionHeading: "Cuándo un horno de convección gana a la cesta",
    whenConvectionBody: "El tamaño de la tanda es lo principal: un horno de convección cocina dos o tres bandejas a la vez, con el ventilador manteniendo cada rejilla a casi la misma temperatura, donde una freidora de aire necesitaría tres tandas seguidas. Las piezas grandes — un pollo entero, una bandeja de galletas, un asado en bandeja — caben en un horno y no en una cesta. Y cuando la freidora está ocupada con una guarnición, pasar el plato principal al horno con ventilador hace que ambos lleguen a la mesa a la vez. Las cenas en una sola bandeja, donde verduras y proteína comparten bandeja y terminan juntas, también son más fáciles de calcular en un horno. Para una ración de papas fritas o alitas, la freidora sigue ganando en rapidez y textura crujiente.",
    roundingHeading: "Por qué la temperatura a menudo no cambia",
    roundingBody: "La diferencia entre una freidora de aire y un horno de convección es de 0–15°F, y el dial de un horno avanza en pasos de 25°F. Suma 10°F a un ajuste de freidora de 375°F y el paso más cercano del dial sigue siendo 375°F. Por eso, para muchos alimentos, este conversor devuelve la misma temperatura y pone todo el ajuste en el tiempo. Es la respuesta honesta: la diferencia entre los dos aparatos es sobre todo la rapidez con que el aire llega al alimento, y una cocción algo más larga en la cavidad grande es como el horno lo compensa. Redondear a pasos del dial también hace que una receta convertida de ida y vuelta vuelva al número del que partió.",
    workedExampleHeading: "Ejemplo práctico",
    workedExampleTemplate: "Un ajuste general de freidora de 340°F durante 27 minutos en cesta pasa a {GENERAL_CONV_F}°F durante {GENERAL_CONV_MIN} minutos en un horno de convección — probablemente la receta con ventilador de la que salió. Unas papas fritas a 390°F durante 18 minutos pasan a {FRIES_CONV_F}°F durante {FRIES_CONV_MIN} minutos: el dial cae en el siguiente paso, y el horno recibe un par de minutos más porque el aire se mueve más despacio sobre una bandeja llena que a través de una cesta.",
    ceilingHeading: "Ajustes en el máximo de tu freidora de aire",
    ceilingBody: "Si el ajuste de la freidora está en el límite del aparato — 400°F en la mayoría de las cestas, 450°F en los modelos tipo horno — puede ser en sí un número convertido: una receta de convección más caliente limitada a lo que alcanza la freidora, con cerca de un 8% de tiempo extra. El conversor no puede distinguirlo, así que muestra una nota. Si sabes que la receta partía más caliente, usa el ajuste de convección original en lugar de convertir de vuelta.",
    relatedFlagshipLink: "Conversor de horno a freidora de aire",
    relatedReverseLink: "Conversor de freidora de aire a horno (horno convencional)",
    relatedSiblingLink: "Conversor de convección a freidora de aire",
    relatedChartLink: "Tabla de conversión imprimible",
    relatedFrozenLink: "Modo de alimentos congelados (instrucciones del envase)",
    faqHeading: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Cómo convierto el tiempo y la temperatura de la freidora de aire a un horno de convección?",
        a: "Suma 0–15°F según el alimento, redondea al paso de 25°F más cercano del dial y añade un 5–10% al tiempo. El conversor de arriba hace las tres cosas con la misma tabla por alimento que el conversor de convección a freidora, para que ambas direcciones coincidan.",
      },
      {
        q: "¿Es lo mismo freidora de aire a convección que freidora de aire a horno?",
        a: "No. Un horno convencional, sin ventilador, necesita devolver 20–25°F y un 15–30% del tiempo. Un horno de convección ya tiene ventilador, así que necesita mucho menos. Si tu horno no tiene modo ventilador, usa el conversor de freidora de aire a horno.",
      },
      {
        q: "¿Por qué la temperatura salió igual que mi ajuste de freidora?",
        a: "Porque la diferencia entre los dos aparatos es menor que un paso de 25°F en el dial del horno. Redondear a un ajuste que tu horno pueda mostrar suele volver al número de la freidora, así que el ajuste va al tiempo.",
      },
      {
        q: "¿Uso convección para hornear o convección para asar?",
        a: "La convección para hornear sirve para la mayoría de los alimentos. La de asar, que añade la resistencia superior, ayuda con alitas, papas y todo lo que quieras crujiente. Usa la temperatura que da el conversor en ambos casos.",
      },
      {
        q: "¿Necesito más tiempo con dos bandejas en el horno?",
        a: "A menudo unos minutos, sí. El tiempo convertido supone una bandeja con espacio alrededor. Con dos o más, gíralas a mitad de cocción y revisa uno o dos minutos después del tiempo convertido.",
      },
      {
        q: "¿Cambian las temperaturas internas objetivo?",
        a: "No. Las aves están hechas a 165°F internos y el pescado, el filete o las chuletas a 145°F, en freidora de aire o en horno de convección.",
      },
    ],
  },
  frozenTool: {
    metaTitle: "Conversor de alimentos congelados para freidora de aire",
    metaDescription: "Convierte las instrucciones del envase congelado a tiempo y temperatura de freidora de aire. Mantén casi todo el calor, recorta cerca de un 30% del tiempo y agita a su hora — envase para horno convencional o con ventilador, cesta o tipo horno.",
    metaKeywords: "instrucciones del envase a freidora de aire, papas fritas congeladas freidora de aire tiempo, pollo congelado freidora de aire tiempo, conversor de congelados freidora de aire",
    backLink: "Todas las herramientas",
    heading: "Conversor de congelados para freidora de aire",
    subDesc: "Introduce la temperatura y el tiempo de horno del envase. Obtén el ajuste de freidora de aire para comida directa del congelador, con los momentos de agitar o voltear y la temperatura interior donde importa.",
    aboutHeading: "Por qué los congelados se convierten de otra forma",
    aboutBody: "La mayoría de los conversores tratan lo congelado como un tipo de alimento más y aplican la regla de siempre: restar 25°F y recortar el tiempo una quinta parte. Para la comida que sale del congelador eso va al revés. Las instrucciones de horno del envase se escribieron para alimentos que entran congelados, así que la temperatura de la caja ya es la que necesita el rebozado para quedar crujiente antes de que el interior se pase. Lo que cambia la freidora de aire es la velocidad: una cavidad pequeña y aire rápido sacan el hielo de la superficie enseguida. Por eso este conversor mantiene casi toda la temperatura del envase — normalmente 10°F menos — y hace el gran recorte en el tiempo, alrededor de un 30%. El pollo crudo congelado es la excepción y va más bajo y más lento.",
    packHeading: "Cómo leer un envase británico frente a uno estadounidense",
    packBody: "Los envases de EE. UU. dan una sola temperatura de horno en °F, pensada para horno convencional. Los envases británicos y europeos suelen dar °C y a menudo dos números: una temperatura convencional y otra más baja \"con ventilador\", normalmente 20°C menos, con el mismo tiempo para ambas. Elige la línea que estás leyendo con el selector del envase. Una temperatura con ventilador ya está ajustada al ventilador, así que el conversor devuelve la diferencia entre horno convencional y con ventilador para ese alimento en lugar de recortar otra vez — la misma diferencia por alimento que usa el conversor de convección. Los envases con gas mark son convencionales: convierte primero la marca a temperatura, o usa el gas mark que aparece bajo cada resultado para comprobar que te acercas.",
    workedExampleHeading: "Ejemplo práctico",
    workedExampleTemplate: "Una bolsa estadounidense de papas fritas congeladas indica 425°F durante 20 minutos. Una freidora de cesta llega como máximo a 400°F, así que el conversor la mantiene ahí y devuelve algo de tiempo: {US_AF_F}°F durante {US_AF_MIN} minutos, con dos agitadas. Una bolsa británica de las mismas papas indica 200°C con ventilador durante 20 minutos; con el selector de ventilador queda en {UK_AF_F}°F ({UK_AF_C}°C) durante {UK_AF_MIN} minutos — algo menos, porque ya no necesita el tiempo que añadía el límite de temperatura.",
    crowdingHeading: "No llenes demasiado la cesta",
    crowdingBody: "Los congelados sueltan agua al descongelarse, y en una cesta llena esa agua no tiene a dónde ir. Las piezas amontonadas se cuecen al vapor en lugar de quedar crujientes, y la capa de abajo sigue pálida por mucho que la cocines. Deja las papas, los nuggets y las alitas en una sola capa, o casi, y cocina una bolsa grande en dos tandas — la segunda suele tardar uno o dos minutos menos porque la cesta ya está caliente. Las agitadas que indica el resultado separan las piezas congeladas juntas y suben la capa de abajo hacia el aire.",
    rawHeading: "Pollo crudo desde congelado",
    rawBody: "Las pechugas crudas congeladas, las alitas y muchos productos de pollo empanizado tienen que llegar a 165°F (74°C) en la parte más gruesa, no solo verse dorados. Por eso reciben un recorte de tiempo menor y una temperatura más baja, para que el centro alcance al exterior, y el resultado muestra un recordatorio para comprobarlo con un termómetro. Los productos ya cocinados, como la mayoría de los nuggets, solo necesitan calentarse por dentro, así que muestran la temperatura objetivo sin la advertencia.",
    relatedFlagshipLink: "Conversor de horno a freidora de aire (recetas frescas)",
    relatedConvectionLink: "Conversor de convección a freidora de aire",
    relatedReverseConvectionLink: "Conversor de freidora de aire a convección",
    relatedChartLink: "Tabla de conversión imprimible",
    presetsHeading: "Ajustes para congelados",
    faqHeading: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Cómo convierto las instrucciones de un envase congelado a freidora de aire?",
        a: "Mantén la temperatura del envase o resta unos 10°F, recorta el tiempo alrededor de un 30% y agita o voltea en los momentos que muestra el conversor. Si la temperatura del envase supera lo que alcanza tu freidora, el conversor la mantiene en el máximo y devuelve un poco de tiempo.",
      },
      {
        q: "¿Cuánto tardan las papas fritas congeladas en la freidora de aire?",
        a: "Normalmente 12–16 minutos a 400°F para una bolsa estándar que indica 425°F durante 20 minutos en el horno, agitando dos veces. Las papas gruesas tardan más que las finas. Introduce los números de tu envase arriba para el ajuste exacto.",
      },
      {
        q: "¿Cuánto tarda el pollo crudo congelado en la freidora de aire?",
        a: "Más de lo que esperarías con la regla del 30%. La pechuga cruda congelada se cocina a menor temperatura y con solo un 15% menos del tiempo del envase, para que el centro llegue a 165°F antes de que el exterior se seque. Compruébalo siempre con un termómetro.",
      },
      {
        q: "¿Debo descongelar los alimentos antes de usar la freidora de aire?",
        a: "No. Las instrucciones del envase y este conversor suponen que el alimento entra congelado. Descongelar antes ablanda el rebozado y cambia los tiempos. La excepción es una pieza grande de carne cruda, que debe descongelarse en el refrigerador.",
      },
      {
        q: "Mi envase da una temperatura para horno con ventilador. ¿Cuál introduzco?",
        a: "Cualquiera sirve: solo ajusta el selector del envase. Si introduces la temperatura con ventilador, elige \"Horno con ventilador\" y el conversor devuelve la cantidad adecuada para ese alimento.",
      },
      {
        q: "¿Hay que precalentar la freidora de aire para congelados?",
        a: "Un precalentado corto de 3 minutos en cesta, o 4 en tipo horno, da un dorado más parejo a las papas y a lo empanizado. La pizza congelada y lo recalentado van bien sin él.",
      },
    ],
  },
  presets,
  presetsIndex,
  tempLanding,
  chart: {
    metaTitle: 'Tabla de conversión de freidora de aire imprimible gratis',
    metaDescription:
      'Una tabla imprimible de temperatura, tiempo y multiplicadores por alimento para convertir de horno a freidora de aire — una hoja, °F y °C, sin correo electrónico, sin ventana emergente.',
    metaKeywords:
      'tabla de conversión freidora de aire, tabla de temperatura freidora de aire, tabla imprimible freidora de aire, tabla de horno a freidora de aire, tabla de tiempos de cocción freidora de aire, tabla de conversión freidora de aire imprimible',
    backLink: 'Conversor completo',
    pageTag: 'Imprimible · Sin correo · Sin ventana emergente',
    heading: 'Tabla de conversión de freidora de aire',
    lead:
      'Tablas de temperatura, tiempo y multiplicadores por alimento para convertir de horno a freidora de aire, en una sola hoja imprimible. Todos los sitios de tablas dedicados en este nicho bloquean su versión imprimible detrás de un registro por correo — este no.',
    printButton: 'Imprimir esta tabla',
    tempTableHeading: 'Temperatura — Horno → Freidora de aire (cesta)',
    tempHeaders: { ovenF: 'Horno °F', airFryerF: 'Freidora °F', airFryerC: 'Freidora °C', gasMark: 'Nivel de gas' },
    tempFootnote: '† Se mantuvo en el límite de 400°F de cesta — mira la nota de abajo.',
    timeTableHeading: 'Tiempo — General / variado, cesta',
    timeHeaders: { ovenTime: 'Tiempo de horno', airFryerTime: 'Tiempo de freidora' },
    foodTableHeading: 'Multiplicadores por tipo de alimento',
    foodHeaders: { food: 'Alimento', tempAdjustment: 'Ajuste de temp.', timeMultiplier: 'Multiplicador de tiempo', note: 'Nota' },
    ceilingNoteTemplate:
      "Las freidoras de aire de cesta topan cerca de 400°F; las unidades tipo horno topan cerca de 450°F. Si esta tabla muestra una temperatura que tu equipo no puede alcanzar, usa el {link} — limita el resultado al techo real de tu equipo y añade el tiempo de vuelta automáticamente.",
    liveConverterLabel: 'conversor en vivo',
    howToReadHeading: 'Cómo leer esta tabla',
    howToReadBody:
      'Cada tabla de arriba asume una freidora de aire de cesta con el ajuste "general / variado", la misma base con la que empieza el conversor en vivo. Busca tu temperatura o tiempo de horno en la columna izquierda y lee hacia la derecha para el equivalente en la freidora de aire, en Fahrenheit, Celsius y nivel de gas del Reino Unido. La tabla por tipo de alimento ajusta esa base para doce categorías, de papas fritas a guisos, porque un solo ajuste fijo no refleja lo distinto que se comportan esos alimentos en una cámara con aire forzado. Una cruz junto a una temperatura significa que la conversión superó lo que puede alcanzar una unidad de cesta — la tabla la mantiene en el límite en vez de imprimir un ajuste que no existe en tu perilla.',
    whyFlatRuleHeading: 'Por qué la regla fija de −25°F / −20% falla con masas húmedas y repostería',
    whyFlatRuleBody:
      'La mayoría de las tablas imprimibles de este nicho aplican una sola regla a todo alimento: resta 25°F, recorta el tiempo una quinta parte. Es un buen promedio para las verduras, pero falla con cualquier cosa de interior húmedo que todavía tiene que cuajar antes de estar lista — masa de pastel, panecillos, guisos, repostería densa. El aire forzado de una freidora de cesta dora la superficie de la masa casi de inmediato, y un recorte fijo del 20% confunde ese dorado temprano con "listo" mucho antes de que el centro haya cuajado, dejando una costra cocida sobre un centro crudo.',
    workedExampleTemplate:
      'Toma una receta de repostería de 350°F por 30 minutos. La regla fija la convierte a {FLAT_F}°F por {FLAT_MIN} minutos. El multiplicador de repostería de esta tabla la mantiene más cerca del calor original, en {BAKED_F}°F por {BAKED_MIN} minutos — un recorte de tiempo menor y unos grados más de calor, porque la masa necesita esos minutos extra para terminar de cuajar mientras la superficie dora rápido. La misma lógica aplica a cada categoría: los alimentos delgados y de mucha superficie, como papas fritas y tocino, ceden cerca del 30% de su tiempo, mientras que los alimentos densos, como guisos y repostería, ceden más cerca del 15%, ya que el calor todavía tiene que llegar al centro antes de que esté listo.',
    faqHeading: 'Preguntas frecuentes',
    faqs: [
      {
        q: '¿Necesito dar un correo electrónico para imprimir esta tabla?',
        a: 'No. Todos los sitios de tablas dedicados en este nicho bloquean su versión imprimible detrás de un registro por correo o una ventana emergente. Este no — las tablas de arriba son toda la tabla, y el botón de imprimir las envía directo a tu impresora.',
      },
      {
        q: '¿Por qué la tabla muestra 400°F tanto para un horno a 425°F como a 450°F?',
        a: 'Una freidora de aire de cesta topa cerca de 400°F, así que en cuanto la conversión bruta supera eso, la tabla mantiene el resultado en el límite en vez de imprimir un ajuste que tu equipo no puede alcanzar. La cruz marca qué filas se mantuvieron así.',
      },
      {
        q: '¿Esta tabla aplica también a freidoras de aire tipo horno?',
        a: 'Estas tablas están ajustadas para unidades de cesta, que topan cerca de 400°F. Las unidades tipo horno hacen circular el aire de forma más suave y pueden llegar hasta cerca de 450°F antes de limitarse — para cifras exactas tipo horno, usa el conversor en vivo y cambia el interruptor de tipo.',
      },
      {
        q: '¿Por qué el recorte de tiempo es distinto para las papas fritas que para un guiso?',
        a: 'El ahorro de tiempo depende de la superficie y la densidad, no solo de la categoría. Las papas fritas y el tocino reciben aire caliente por casi todos lados a la vez, así que pierden cerca del 30% del tiempo de horno; un guiso denso pierde más cerca del 15%.',
      },
      {
        q: '¿Puedo usar esta tabla para alimentos directo del congelador?',
        a: 'No directamente. Los alimentos congelados siguen una lógica invertida — mantén la temperatura del empaque y recorta el tiempo cerca de un 30%, ya que el alimento necesita todo el calor solo para descongelarse antes de poder cocinarse.',
      },
      {
        q: '¿Qué pasa si mi temperatura o tiempo exacto de horno no está en la tabla?',
        a: 'Esta tabla cubre valores comunes en pasos de 25°F y tiempos redondos para mantenerla en una sola hoja. Para una cifra exacta, el conversor en vivo toma cualquier temperatura y tiempo de horno y se ajusta con cada tecla.',
      },
    ],
    relatedHeading: 'Herramientas relacionadas',
    relatedConverterLabel: 'Conversor de horno a freidora de aire',
    relatedConverterDesc:
      '— la herramienta en vivo, se ajusta por tipo de alimento y cesta vs. tipo horno, con el límite máximo al que apuntan las filas con cruz de esta tabla.',
    relatedGasMarkLabel: 'Conversor de °F / °C / nivel de gas',
    relatedGasMarkDesc: '— una conversión directa de temperatura para recetas del Reino Unido, la UE y EE. UU.',
    relatedReverseLabel: 'Conversor de freidora de aire a horno',
    relatedReverseDesc: '— la dirección inversa, para cuando el horno es la mejor opción.',
    relatedConvectionLabel: "Conversor de convección a freidora de aire",
    relatedConvectionDesc: "— un recorte más suave para recetas de horno con ventilador que ya están ajustadas.",
    relatedReverseConvectionLabel: "Conversor de freidora de aire a convección",
    relatedReverseConvectionDesc: "— lleva un ajuste de freidora a un horno con ventilador para tandas más grandes.",
    relatedFrozenLabel: "Modo de alimentos congelados",
    relatedFrozenDesc: "— de las instrucciones del envase a la freidora: mantén el calor, recorta el tiempo, agita a su hora.",
  },
};

export default es;

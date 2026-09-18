import type { Dictionary } from '../types';

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
      { title: 'Papas fritas congeladas', spec: '400°F · 15 min · agitar ×2', desc: 'Una sola capa, no necesita aceite.' },
      { title: 'Nuggets congelados', spec: '380°F · 10 min · voltear una vez', desc: 'El empanizado dora rápido.' },
      { title: 'Pechuga de pollo congelada', spec: '360°F · 22 min · 165°F al centro', desc: 'Más baja y más lenta de lo que esperas.' },
      { title: 'Pizza congelada', spec: '375°F · 8 min · sin precalentar', desc: 'Solo tamaño individual en una cesta.' },
    ],
    presetsTeaser: {
      heading: 'Tiempo y temperatura para un alimento específico',
      desc: 'Cada preconfiguración da temperatura, tiempo, puntos de agitado o volteo, y señales de cocción. Sin blog de recetas que desplazar.',
      selectLabel: 'Selecciona un alimento preconfigurado',
      options: ['Pechuga de pollo', 'Alitas de pollo', 'Filete de salmón', 'Tocino', 'Bistec'],
      goLabel: 'Ir',
    },
    presetCards: [
      { title: 'Pechuga de pollo', spec: '375°F · 16 min · voltear a los 8', desc: 'La preconfiguración más usada. Retira a 165°F internos.' },
      { title: 'Alitas de pollo', spec: '400°F · 22 min · voltear a los 12', desc: 'Sécalas primero. Opción de temperatura en dos etapas.' },
      { title: 'Filete de salmón', spec: '390°F · 9 min · sin voltear', desc: 'Piel hacia abajo. Incluye tabla de grosor.' },
      { title: 'Tocino', spec: '350°F · 9 min · escurrir a los 5', desc: 'La temperatura más baja evita que la grasa humee.' },
    ],
    allPresetsCard: { title: 'Las 40 preconfiguraciones →', desc: 'Carne, pescado, verduras, repostería, recalentado.' },
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
  },
};

export default es;

import type { PreheatCopy } from '../../types';

const preheat: PreheatCopy = {
  metaTitle: 'Cuánto precalentar una freidora de aire (según la temperatura)',
  metaDescription:
    'Tiempo de precalentado según la temperatura que pongas, sacado de las tablas impresas de Cosori, y qué hacen los modelos tipo horno. Sin cuenta, sin registro.',
  metaKeywords: 'cuánto precalentar freidora de aire, hay que precalentar la freidora de aire, precalentar freidora de aire, cosori precalentar, precalentado freidora de aire',
  heading: 'Cuánto precalentar una freidora de aire',
  intro:
    'Escribe la temperatura a la que vas a cocinar. La respuesta sale de las tablas de precalentado que Cosori imprime en sus manuales y cambia con el ajuste.',
  widgetLabel: 'Tiempo de precalentado',
  temperature: 'Temperatura',
  style: 'Tipo de freidora',
  basket: 'Cesta',
  ovenStyle: 'Tipo horno',
  answerLabel: 'Precalentado',
  answerBasket: 'Precalienta {MIN} minutos a {TEMP} y luego mete la comida.',
  answerOvenStyle: 'Los tipo horno se precalientan solos: inicia el programa y mete la comida cuando avise.',
  answerOutOfRange: 'Las tablas cubren de {MIN_F} a {MAX_F}°F ({MIN_C}–{MAX_C}°C); fuera de ahí ningún manual da un tiempo.',
  answerInvalid: 'Escribe una temperatura.',
  sourceBasket: 'La más larga de las dos tablas de Cosori a esta temperatura: Pro LE {PRO} min, TurboBlaze {TB} min.',
  sourceOvenStyle: 'Todos los manuales de tipo horno leídos para esta página incluyen el precalentado en sus programas y no dan un tiempo.',
  leadHeading: 'El precalentado no es un número fijo',
  leadBody:
    'Casi todos los consejos dan una sola cifra para cualquier receta. Los dos manuales de Cosori que imprimen una tabla de precalentado la ligan a la temperatura: {PRE_MIN} minutos en la parte baja del dial y {PRE_MAX} en la alta. Los mismos manuales explican por qué importa: sin precalentar, la comida no se cocina del todo. Los tiempos del conversor y de los presets de este sitio dan por hecho que la cesta ya está caliente.',
  defaultHeading: 'El tiempo por defecto según la temperatura',
  defaultBody:
    'Las tablas del Pro LE y del TurboBlaze no coinciden en dos tramos. A {EX_F}°F ({EX_C}°C) el Pro LE dice {EX_PRO} minutos y el TurboBlaze {EX_TB}; más abajo, a {EX2_F}°F ({EX2_C}°C), dicen {EX2_PRO} y {EX2_TB}. Donde difieren, esta página toma la más larga de las dos, para que a la cesta nunca le falte calor. Por debajo de {MIN_F}°F o por encima de {MAX_F}°F ninguna tabla tiene fila, y la herramienta lo dice en vez de adivinar.',
  chartsHeading: 'Las dos tablas de Cosori, tal como se imprimen',
  chartsBody:
    'Las dos acompañan las instrucciones del botón Preheat: al pulsarlo, el tiempo se ajusta solo a la temperatura elegida y la freidora pita al terminar. Ninguno de los demás manuales leídos para esta página imprime una tabla así.',
  chartCaption: 'Manual de Cosori {MODEL}, página {PAGE}',
  tableTemp: 'Temperatura',
  tableMinutes: 'Minutos',
  styleHeading: 'Cesta frente a tipo horno',
  styleBody:
    'Los modelos tipo horno lo resuelven solos. El horno freidora de Cosori incluye un precalentado en Air Fry, Roast, Bake y Pizza, y todos los manuales de Instant Vortex leídos hacen lo mismo en Air Fry, Roast y Bake: la pantalla muestra Add Food cuando está lista. Ninguno da un tiempo: hay que esperar el aviso. Algunas cestas funcionan igual: el modelo de dos cestas de Cosori precalienta en todas las funciones menos Dehydrate, y el paso se puede desactivar. Philips es la excepción: la ficha técnica de su Premium XXL indica “Instant on/no pre-heat”.',
  skipHeading: 'Cuándo saltárselo',
  skipBody:
    'La frase de Cosori sirve de regla: precalentar salvo que la freidora ya esté caliente. El tocino suelta su propia grasa y arranca bien en una cesta fría. Si te lo saltas con algo que pide calor desde el principio, como pescado empanizado o pizza congelada, añade uno o dos minutos y revisa antes.',
  relatedHeading: 'Relacionado',
  relatedFlagshipLink: 'Conversor de horno a freidora de aire',
  relatedCostLink: 'Freidora de aire vs horno: coste de uso',
  relatedPresetsLink: 'Presets de cocción para freidora de aire',
  faqHeading: 'Preguntas frecuentes',
  faqs: [
    {
      q: '¿Cuánto tiempo hay que precalentar una freidora de aire?',
      a: 'De {PRE_MIN} a {PRE_MAX} minutos en una cesta, según la temperatura: {PRE_MAX} minutos a partir de {TOP_F}°F ({TOP_C}°C), con la más larga de las dos tablas de Cosori. Los tipo horno se precalientan solos y avisan cuándo meter la comida.',
    },
    {
      q: '¿Hay que precalentar la freidora de aire?',
      a: 'Para casi todo, sí. Los manuales de Cosori dicen que sin precalentar la comida no se cocina del todo. La ficha técnica de la Philips Premium XXL dice que ese modelo no lo necesita, así que mira el manual del tuyo.',
    },
    {
      q: '¿Hay que precalentar siempre?',
      a: 'No. Sáltatelo cuando la freidora sigue caliente de la tanda anterior, la excepción que hacen los manuales de Cosori, y con el tocino, que arranca bien en frío.',
    },
    {
      q: '¿Una freidora tipo horno necesita precalentar?',
      a: 'Lo hace sola. El horno freidora de Cosori y los modelos Instant Vortex muestran Add Food cuando ya están calientes. Ninguno de los dos manuales da un tiempo, así que espera el aviso en lugar de poner un temporizador.',
    },
    {
      q: '¿Cómo precalientan las freidoras Cosori, Instant, Philips y Ninja?',
      a: 'Las cestas Cosori con botón Preheat fijan el tiempo con su tabla; los Instant Vortex precalientan solos y muestran Add Food; Philips indica que su Premium XXL no necesita precalentado; las guías de Ninja no se releyeron para esta página.',
    },
  ],
};

export default preheat;

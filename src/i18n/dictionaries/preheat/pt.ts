import type { PreheatCopy } from '../../types';
import { preheatModels as en, type PreheatModelCopy } from './en';

const preheat: PreheatCopy = {
  metaTitle: 'Quanto tempo pré-aquecer a air fryer (por temperatura)',
  metaDescription:
    'Tempo de pré-aquecimento pela temperatura que você usa, das tabelas impressas da Cosori, e o que fazem os modelos tipo forno. Sem conta, sem cadastro.',
  metaKeywords: 'quanto tempo pré-aquecer air fryer, precisa pré-aquecer a air fryer, pré-aquecer air fryer, cosori pré-aquecer, pré-aquecimento air fryer',
  heading: 'Quanto tempo pré-aquecer a air fryer',
  intro:
    'Digite a temperatura em que vai cozinhar. A resposta vem das tabelas de pré-aquecimento que a Cosori imprime nos seus manuais e muda conforme o ajuste.',
  widgetLabel: 'Tempo de pré-aquecimento',
  temperature: 'Temperatura',
  style: 'Tipo de air fryer',
  basket: 'Cesto',
  ovenStyle: 'Tipo forno',
  answerLabel: 'Pré-aquecimento',
  answerBasket: 'Pré-aqueça por {MIN} minutos a {TEMP} e depois coloque a comida.',
  answerOvenStyle: 'Os tipo forno preaquecem sozinhos: inicie o programa e coloque a comida quando ele avisar.',
  answerOutOfRange: 'As tabelas cobrem de {MIN_F} a {MAX_F}°F ({MIN_C}–{MAX_C}°C); fora disso, nenhum manual dá um tempo.',
  answerInvalid: 'Digite uma temperatura.',
  sourceBasket: 'A mais longa das duas tabelas da Cosori nesta temperatura: Pro LE {PRO} min, TurboBlaze {TB} min.',
  sourceOvenStyle: 'Todos os manuais de tipo forno lidos para esta página incluem o pré-aquecimento nos programas e não dão um tempo.',
  leadHeading: 'Pré-aquecer não é um número fixo',
  leadBody:
    'Quase todo conselho dá um único número para qualquer receita. Os dois manuais da Cosori que imprimem uma tabela de pré-aquecimento ligam o tempo à temperatura: {PRE_MIN} minutos na parte baixa do seletor e {PRE_MAX} na alta. Os mesmos manuais dizem por que isso importa: sem pré-aquecer, a comida não cozinha por completo. Os tempos do conversor e dos presets deste site supõem que o cesto já está quente.',
  defaultHeading: 'O tempo padrão por temperatura',
  defaultBody:
    'As tabelas do Pro LE e do TurboBlaze discordam em duas faixas. A {EX_F}°F ({EX_C}°C) o Pro LE diz {EX_PRO} minutos e o TurboBlaze {EX_TB}; mais abaixo, a {EX2_F}°F ({EX2_C}°C), dizem {EX2_PRO} e {EX2_TB}. Onde diferem, esta página usa a mais longa das duas, para que nunca falte calor ao cesto. Abaixo de {MIN_F}°F ou acima de {MAX_F}°F nenhuma tabela tem linha, e a ferramenta diz isso em vez de chutar. Qualquer cesto cujo manual não dá um tempo recebe este padrão.',
  chartsHeading: 'As duas tabelas da Cosori, como impressas',
  chartsBody:
    'As duas ficam ao lado das instruções do botão Preheat: ao apertá-lo, o tempo se ajusta à temperatura escolhida e a air fryer apita quando termina. Nenhum dos outros manuais lidos para esta página imprime uma tabela assim.',
  chartCaption: 'Manual Cosori {MODEL}, página {PAGE}',
  tableTemp: 'Temperatura',
  tableMinutes: 'Minutos',
  styleHeading: 'Cesto ou tipo forno',
  styleBody:
    'Os modelos tipo forno resolvem isso sozinhos. O forno air fryer da Cosori inclui pré-aquecimento em Air Fry, Roast, Bake e Pizza, e todos os manuais Instant Vortex lidos fazem o mesmo em Air Fry, Roast e Bake: o visor mostra Add Food quando está pronto. Nenhum dá um tempo, então num tipo forno espere o aviso, não o relógio. Alguns cestos funcionam assim também: o modelo de dois cestos da Cosori preaquece em todas as funções menos Dehydrate, e a etapa pode ser desligada. A Philips é a exceção: a ficha técnica da Premium XXL indica “Instant on/no pre-heat”.',
  skipHeading: 'Quando pular',
  skipBody:
    'A frase da Cosori serve de regra: pré-aquecer, a menos que a air fryer já esteja quente. O bacon solta a própria gordura e começa bem num cesto frio. Se você pular a etapa com algo que pede calor desde o início, como peixe empanado ou pizza congelada, acrescente um ou dois minutos e confira antes.',
  relatedHeading: 'Relacionados',
  relatedFlagshipLink: 'Conversor de forno para air fryer',
  relatedCostLink: 'Air fryer vs forno: custo de uso',
  relatedPresetsLink: 'Presets de cozimento para air fryer',
  faqHeading: 'Perguntas frequentes',
  faqs: [
    {
      q: 'Quanto tempo devo pré-aquecer a air fryer?',
      a: 'De {PRE_MIN} a {PRE_MAX} minutos num cesto, conforme a temperatura: {PRE_MAX} minutos a partir de {TOP_F}°F ({TOP_C}°C), pela mais longa das duas tabelas da Cosori. Os tipo forno preaquecem sozinhos e avisam quando colocar a comida.',
    },
    {
      q: 'Precisa pré-aquecer a air fryer?',
      a: 'Para quase tudo, sim. Os manuais da Cosori dizem que sem pré-aquecer a comida não cozinha por completo. A ficha técnica da Philips Premium XXL diz que esse modelo não precisa, então confira o manual do seu.',
    },
    {
      q: 'É preciso pré-aquecer toda vez?',
      a: 'Não. Pule quando a air fryer ainda está quente da leva anterior, a exceção que os manuais da Cosori fazem, e no bacon, que começa bem a frio.',
    },
    {
      q: 'Uma air fryer tipo forno precisa pré-aquecer?',
      a: 'Ela faz isso sozinha. O forno air fryer da Cosori e os modelos Instant Vortex mostram Add Food quando já estão quentes. Nenhum dos dois manuais dá um tempo, então espere o aviso em vez de usar um timer.',
    },
    {
      q: 'Como pré-aquecem as air fryers Cosori, Instant, Philips e Ninja?',
      a: 'Os cestos Cosori com botão Preheat definem o tempo pela tabela; os Instant Vortex preaquecem sozinhos e mostram Add Food; a Philips indica que a Premium XXL não precisa de pré-aquecimento; os guias da Ninja não foram relidos para esta página.',
    },
  ],
};

export default preheat;

/** The model picker and the per-model table (EU models first on this locale). */
export const preheatModels: PreheatModelCopy = {
  pickerIntro: 'Ou escolha o seu modelo para ver o que diz o próprio manual.',
  model: 'O seu modelo',
  modelNone: 'Sem modelo: usar o valor por defeito',
  and: 'e',
  answers: {
    chart: 'Pré-aqueça {MIN} minutos a {TEMP}: o botão de pré-aquecimento define isto a partir da tabela do manual.',
    fixed: 'O pré-aquecimento do manual é Air Fry a {TEMP} durante {MIN} minutos; junte a comida quando aparecer End.',
    auto: 'Pré-aquece sozinha: junte a comida quando o ecrã disser Add Food.',
    autoPrograms: 'O manual refere {PROGRAMS}.',
    autoSkips: '{PROGRAMS} não tem pré-aquecimento.',
    autoSkippable: 'O pré-aquecimento pode ser saltado.',
    none: 'Não é preciso pré-aquecer: a ficha técnica indica «Instant on/no pre-heat».',
    notMentioned: 'Este documento ({DOC}) não fala de pré-aquecimento, por isso use o valor por defeito. {DEFAULT}',
    notReread: 'Este guia não foi relido para esta página, por isso use o valor por defeito. {DEFAULT}',
  },
  docTypes: { manual: 'manual', specSheet: 'ficha técnica (não é um manual)', productPage: 'página de produto', ownersGuide: 'guia do utilizador' },
  programs: { airFry: 'Air Fry', roast: 'Assar', bake: 'Cozer no forno', broil: 'Gratinar', pizza: 'Pizza', reheat: 'Reaquecer', dehydrate: 'Desidratar' },
  sourcePages: '{DOC}, página {PAGES}, data de leitura {DATE}',
  sourceNoPage: '{DOC}, data de leitura {DATE}',
  sourceNotReread: 'Não relido',
  tableHeading: 'O que diz cada manual',
  tableIntro: 'Todos os modelos da tabela de temperaturas máximas, com o que o próprio documento diz sobre o pré-aquecimento e a página onde o diz. Primeiro os modelos europeus.',
  headers: { model: 'Modelo', says: 'O documento diz', minutes: 'Minutos', source: 'Fonte' },
  kinds: {
    chart: 'Botão de pré-aquecimento com tabela',
    fixed: 'Uma única regulação de pré-aquecimento',
    auto: 'Pré-aquece sozinha',
    none: 'Sem pré-aquecimento',
    notMentioned: 'Não menciona',
    notReread: 'Não relido',
  },
  minutesCell: { chart: '{MIN_MIN}–{MIN_MAX} conforme a temperatura', fixed: '{MIN} a {TEMP}', auto: 'Até Add Food', none: 'Nenhum', default: 'Por defeito' },
  filterBrand: 'Marca',
  filterKind: 'Diz',
  all: 'Todos',
  showing: 'A mostrar {N} de {TOTAL} modelos',
  none: 'Nenhum modelo corresponde a estes filtros.',
  brandNames: en.brandNames,
};

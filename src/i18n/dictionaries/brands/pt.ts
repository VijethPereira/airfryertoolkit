/**
 * Brand pages in Portuguese: same shape as brands/en.ts. Every number is a {KEY} placeholder filled from
 * src/data/models.ts and the engine (brandValues), °C first. Model names, button names and the English-only
 * /model-max-temp copy are shared with en.ts.
 */
import { brands as en, type BrandsDictionary } from './en';

export const brands: BrandsDictionary = {
  backLink: 'Todas as ferramentas',
  modelPicker: 'Seu modelo',
  anyModel: 'Não está na lista / não sei (teto padrão)',
  modelsHeading: 'Modelos e seus limites',
  modelsIntro:
    'Cada limite foi copiado da página ou do manual do fabricante, com o link e a data em que o lemos. Os modelos europeus vêm primeiro, quando existem. Os que não conseguimos confirmar ficam de fora.',
  programsHeading: 'Programas da {MODEL}',
  programsIntro: 'A tabela de programas do manual americano: o valor em que cada botão começa e até onde dá para ajustar.',
  tableHeaders: { model: 'Modelo', type: 'Tipo', capacity: 'Capacidade', max: 'Máx. Air Fry', min: 'Mínimo', preheat: 'Pré-aquecimento', source: 'Fonte', sourced: 'Lido em', brand: 'Marca' },
  programHeaders: { program: 'Programa', default: 'Começa em', range: 'Faixa' },
  types: { basket: 'Cesto', 'oven-style': 'Tipo forno', 'dual-zone': 'Duas zonas', 'toaster-oven': 'Forno elétrico combinado' },
  preheat: { auto: 'Etapa automática', manual: 'Manual', none: 'Não', unknown: 'Não informado' },
  otherMax: en.otherMax,
  otherMaxTemplate: '{LABEL} até {C}°C / {F}°F',
  programs: en.programs,
  sourceManual: 'Manual',
  sourceSpec: 'Ficha técnica',
  sourceProduct: 'Página do produto',
  markets: { us: 'Modelo dos EUA', uk: 'Modelo do Reino Unido', eu: 'Modelo europeu' },
  euNote: 'Estes são os modelos dos EUA. Os números de modelo europeus são diferentes, então confira o seletor do seu aparelho.',
  foodLoadNote: 'A fonte informa uma carga de alimento em quilos, não um volume.',
  maxDefaultNote: 'Valor padrão; o máximo não é informado',
  relatedHeading: 'Relacionados',
  flagshipLink: 'Conversor de forno para air fryer',
  maxTempLink: 'Temperatura máxima de cada modelo (em inglês)',
  faqHeading: 'Perguntas frequentes',
  cardSpecTemplate: 'Até {MAX_HI_C}°C · {N_MODELS} modelos',
  brandNames: en.brandNames,
  modelNames: en.modelNames,
  pages: {
    ninja: {
      name: 'Ninja',
      metaTitle: 'Air fryer Ninja: como converter receitas de forno e o que é o Max Crisp',
      metaDescription:
        'Converta receitas de forno para a sua Ninja: a AF140EU europeia vai até {EU_MAX_HI_C}°C, o Air Fry para em {MAX_LO_C}°C nos cestos dos EUA e o Max Crisp é um ajuste fixo de {OTHER_MAX_C}°C.',
      metaKeywords: 'air fryer ninja temperatura, ninja max crisp, ninja af140eu temperatura máxima, converter receita de forno ninja',
      heading: 'Conversão para air fryer Ninja',
      intro:
        'Numa Ninja, {OTHER_MAX_C}°C quase sempre quer dizer Max Crisp. Na Max XL ele é um programa fixo: roda a {OTHER_MAX_C}°C ({OTHER_MAX}°F) e não muda, enquanto o Air Fry e as outras funções param em {F_MAX_C}°C. Receita que pede {OTHER_MAX_C}°C é receita de Max Crisp, quase sempre de congelados; uma receita de forno convertida vai no Air Fry.',
      answerTemplate:
        'A Ninja Pro AF140EU vendida na Europa vai até {EU_MAX_HI_C}°C, segundo a página do produto. Nos cestos dos EUA, o Air Fry fica em {MAX_LO_C}°C, e a DoubleStack XL e o forno Foodi chegam a {MAX_HI_C}°C.',
      widgetHeading: 'Converta uma receita de forno para a sua Ninja',
      widgetNote: 'Escolha o seu modelo e o conversor usa o limite de Air Fry dele. O Max Crisp nunca entra numa receita convertida, porque a temperatura dele não se ajusta.',
      sections: [
        {
          heading: 'Quando o Max Crisp é o botão certo',
          paragraphs: [
            'Pegue batatas de forno a {EX_OVEN_C}°C por {EX_OVEN_MIN} minutos. No Air Fry da Max XL elas viram {EX_MODEL_C}°C por {EX_MODEL_MIN_C} minutos, com a primeira olhada no minuto {EX_MODEL_CHECK_C}. O conversor fica no limite do Air Fry e compensa com tempo. Sacuda o cesto perto do minuto {EX_HALF_C}.',
            'O Max Crisp é o certo quando o pacote do congelado manda usar a air fryer ou quando a tabela da própria Ninja cita o botão: comida já pronta que só precisa de um acabamento forte. Não serve para frango cru nem para nada que precise cozinhar por dentro, porque não dá para baixar e a casca fica pronta antes do miolo.',
          ],
        },
        {
          heading: 'O modelo europeu tem o próprio limite',
          paragraphs: [
            'A AF140EU é a Ninja Pro de 4,7 litros vendida na Europa. A página do produto informa uma faixa que termina em {EU_MAX_HI_C}°C, um pouco acima dos {MAX_LO_C}°C ({MAX_LO}°F) dos cestos americanos. Por isso ela tem linha própria: ao escolhê-la, o conversor usa esse limite, e não o dos EUA.',
            'O nome do botão também não diz a temperatura: a Air Fryer Pro americana tem Max Crisp, mas o guia coloca todas as funções em {MAX_LO_C}°C. Na DoubleStack XL e no forno Foodi, o Air Fry chega a {MAX_HI_C}°C; o forno, com grades e mais espaço, recebe a conversão tipo forno, mais suave.',
          ],
        },
        {
          heading: 'Pré-aquecer uma Ninja',
          paragraphs: [
            'Os cestos não pré-aquecem sozinhos: os guias recomendam 3 minutos vazios antes de pôr a comida, e os tempos convertidos contam com o cesto quente. A página europeia da AF140EU não fala de pré-aquecimento, nem o guia da DoubleStack XL; o forno Foodi pré-aquece sozinho e mostra PRE.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Qual é a temperatura máxima de uma air fryer Ninja?',
          a: 'Depende do modelo. A AF140EU europeia vai até {EU_MAX_HI_C}°C. Nos cestos dos EUA, o Air Fry para em {MAX_LO_C}°C; o Max Crisp da Max XL roda a {OTHER_MAX_C}°C, e a DoubleStack XL e o forno Foodi chegam a {MAX_HI_C}°C.',
        },
        { q: 'Posso baixar a temperatura do Max Crisp?', a: 'Não: o guia da Max XL diz que no Max Crisp a temperatura não se ajusta. Se precisar de menos calor, use o Air Fry.' },
        { q: 'Uso o Max Crisp em receitas de forno?', a: 'Normalmente não: converta a receita para o Air Fry. O Max Crisp é para congelados pré-cozidos que só precisam dourar.' },
        {
          q: 'Por que a minha Ninja europeia não está na tabela?',
          a: 'Só incluímos um modelo europeu quando a página do fabricante mostra o número e a temperatura em °C. As da SL400EU e da SP101EU não mostravam a temperatura. Se o seu não está, deixe o seletor em “não sei”.',
        },
        {
          q: 'Por que as Foodi de dois cestos ficaram de fora?',
          a: 'Lemos inteiros os guias das DZ201, DZ401 e DZ550: eles trazem ajustes de tabela e temperaturas de sonda, nunca um máximo de Air Fry.',
        },
      ],
      cardDesc: 'O Max Crisp é um ajuste fixo, e a AF140EU europeia tem o próprio limite.',
    },
    cosori: {
      name: 'Cosori',
      metaTitle: 'Air fryer Cosori: como converter receitas de forno por modelo',
      metaDescription:
        'Converta receitas de forno para a sua Cosori: vários modelos de cesto, inclusive os europeus -KEU, chegam a {MAX_HI_C}°C em vez dos {BASKET_CEIL_C}°C que quase todo conversor supõe.',
      metaKeywords: 'air fryer cosori temperatura, cosori turbo blaze temperatura máxima, cosori caf-dc601-keu, converter receita de forno cosori',
      heading: 'Conversão para air fryer Cosori',
      intro:
        'Quase toda tabela ou calculadora supõe que uma air fryer de cesto para em {BASKET_CEIL_C}°C: segura qualquer receita quente ali e soma tempo. Várias Cosori de cesto, entre elas as duas europeias da tabela, chegam a {MAX_HI_C}°C. Nelas, uma receita de forno bem quente vira um ajuste mais quente e mais curto, e o tempo extra de um conversor genérico resseca a comida.',
      answerTemplate:
        'As duas Cosori europeias da tabela, CAF-DC601-KEU e CAF-L501-KEU, chegam a {EU_MAX_HI_C}°C segundo as páginas do produto, como várias dos EUA; a mini Lite e a TwinFry ficam em {MAX_LO_C}°C. Escolha o seu modelo e o conversor usa o limite dele.',
      widgetHeading: 'Converta uma receita de forno para a sua Cosori',
      widgetNote: 'Escolha o modelo primeiro: ele define cesto ou tipo forno e o máximo real da fonte. Com “não sei”, vale o teto padrão.',
      sections: [
        {
          heading: 'Por que um cesto de {MAX_HI_C}°C muda a resposta',
          paragraphs: [
            'Pegue uma receita de forno a {EX_OVEN_C}°C por {EX_OVEN_MIN} minutos, como batatas assadas. Um conversor feito para um cesto de {BASKET_CEIL_C}°C dá {EX_GEN_C}°C por {EX_GEN_MIN_C} minutos: não pode subir, então alonga o tempo. Numa Turbo Blaze fica {EX_MODEL_C}°C por {EX_MODEL_MIN_C} minutos, porque o cesto alcança essa temperatura de verdade. Olhe a partir do minuto {EX_MODEL_CHECK_C}.',
            'A diferença aparece mais em batatas e asinhas: com o tempo genérico, mais longo, na temperatura alta da Cosori, o miolo seca antes de o timer tocar.',
          ],
        },
        {
          heading: 'Programa não é a temperatura da receita',
          paragraphs: [
            'Cada botão da Cosori começa num valor próprio, muitas vezes abaixo do máximo. No manual americano da Turbo Blaze, o Air Fry começa em {AIR_FRY_DEFAULT_C}°C e sobe até {AIR_FRY_MAX_C}°C, o Bake vai no máximo a {BAKE_MAX_C}°C e o Reheat a {REHEAT_MAX_C}°C. Se o ajuste convertido passar do que o programa aceita, use o Air Fry e regule a temperatura na mão.',
            'A página europeia da CAF-DC601-KEU lista uma função de pré-aquecimento sem tempo nem temperatura, e o manual europeu dela nós não lemos. A mini Lite não tem pré-aquecimento: some um ou dois minutos à primeira leva.',
          ],
        },
        {
          heading: 'Dois cestos e o forno',
          paragraphs: [
            'A TwinFry faz Air Fry até {MAX_LO_C}°C; só o Broil sobe a {OTHER_MAX_C}°C, e o conversor nunca usa o Broil numa receita convertida. O forno Cosori da tabela funciona como aparelho tipo forno: mais espaço e grades, por isso recebe a conversão mais suave.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Qual é a temperatura máxima de uma Cosori?',
          a: 'Depende do modelo. As Cosori da nossa tabela fazem Air Fry até {MAX_HI_C}°C, inclusive as duas europeias, e a mini Lite e a TwinFry ficam em {MAX_LO_C}°C.',
        },
        {
          q: 'Uso os botões de programa da Cosori em receitas de forno?',
          a: 'Use o Air Fry com a temperatura e o tempo convertidos. Cada programa começa num valor próprio e alguns têm teto mais baixo, então podem entregar um ajuste mais frio do que a receita pede.',
        },
        {
          q: 'Preciso pré-aquecer uma Cosori?',
          a: 'Os modelos americanos com botão Preheat fazem isso como etapa separada, e o manual recomenda. Das europeias só lemos a página do produto, que não traz tempos.',
        },
        {
          q: 'Por que o tempo da Cosori é mais curto que em outros conversores?',
          a: 'Porque o cesto alcança a temperatura mais alta. Conversores que supõem um teto mais baixo somam tempo para compensar; num modelo que chega lá, esse tempo a mais passa do ponto.',
        },
        {
          q: 'Por que outras Cosori europeias não aparecem?',
          a: 'Só incluímos uma linha quando a página europeia mostra o número de modelo -KEU e a temperatura. Em outras aparecia um número dos EUA, então ficaram de fora.',
        },
      ],
      cardDesc: 'Vários modelos de cesto, inclusive os europeus, passam do teto que os conversores supõem.',
    },
    philips: {
      name: 'Philips',
      metaTitle: 'Airfryer Philips: como converter receitas de forno com o limite de {EU_MAX_HI_C}°C',
      metaDescription:
        'Converta receitas de forno para a sua Airfryer Philips: os modelos europeus da tabela param em {EU_MAX_HI_C}°C, então receitas quentes ficam nesse limite. Escolha o seu modelo para ver o limite real.',
      metaKeywords: 'airfryer philips temperatura máxima, philips airfryer xxl, philips na230 temperatura, converter receita de forno philips airfryer',
      heading: 'Conversão para Airfryer Philips',
      intro:
        'As seis Airfryer Philips europeias da tabela param em {EU_MAX_HI_C}°C, segundo as páginas do produto. Receitas americanas, e muitas de forno depois de convertidas, pedem {BASKET_CEIL_C}°C ({BASKET_CEIL}°F) ou mais: um calor que o cesto não dá. A saída não é cozinhar no limite pelo tempo da receita: é ficar no limite, olhar antes e dar os minutos que faltarem.',
      answerTemplate:
        'Os modelos Philips europeus que temos chegam a {EU_MAX_HI_C}°C, então o conversor segura as receitas quentes em {F_DIAL_C}°C. Atenção ao número do modelo: a NA555 dos EUA vai a {MAX_HI_C}°C ({MAX_HI}°F na página dela) e a europeia NA555/00, a {EU_MAX_HI_C}°C.',
      widgetHeading: 'Converta uma receita de forno para a sua Philips',
      widgetNote: 'Escolha o seu modelo para usar o limite dele. Com “não sei”, o conversor supõe um cesto padrão de {BASKET_CEIL_C}°C, acima de qualquer Philips europeia da tabela.',
      sections: [
        {
          heading: 'Por que uma receita de {BASKET_CEIL_C}°C não cabe numa Philips',
          paragraphs: [
            'Pegue uma assadeira de legumes no forno a {EX_OVEN_C}°C por {EX_OVEN_MIN} minutos. Para um cesto padrão, isso vira {EX_GEN_C}°C por {EX_GEN_MIN_C} minutos. Uma NA230 não chega lá, então o conversor fica em {EX_MODEL_C}°C por {EX_MODEL_MIN_C} minutos e manda olhar a partir do minuto {EX_MODEL_CHECK_C}.',
            'Receitas escritas para outras marcas fazem o mesmo sem avisar. Se a receita diz {BASKET_CEIL_C}°C por um tempo fixo, uma Philips no máximo entrega a comida um pouco mais clara nesse tempo. Dê alguns minutos a mais: não há para onde subir.',
          ],
        },
        {
          heading: 'Mesmo número, outro mercado',
          paragraphs: [
            'A Philips vende vários modelos com o mesmo número na Europa e nos EUA. Para a NA555, a página americana dá {MAX_HI_C}°C ({MAX_HI}°F no original), enquanto a página francesa da NA555/00 dá {EU_MAX_HI_C}°C. Por isso a tabela mostra primeiro as linhas europeias e, abaixo, as dos EUA. Escolha a linha do país onde você comprou a sua.',
            'A Philips informa os limites em °C, então nas linhas europeias o °C é o da página e o °F é uma conversão. O conversor arredonda para baixo no passo do seletor dele, para nunca sugerir um ajuste acima do que o aparelho aceita.',
          ],
        },
        {
          heading: 'Modelos de dois cestos',
          paragraphs: [
            'A Série 3000 de dois cestos, NA351/00 e NA350/00, tem o mesmo limite de {EU_MAX_HI_C}°C nas duas gavetas, segundo as páginas europeias. Cada gaveta tem seu ajuste, então converta cada alimento separadamente.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Qual é a temperatura máxima de uma Airfryer Philips?',
          a: 'Nas seis Philips europeias da tabela, {EU_MAX_HI_C}°C, segundo as páginas do produto. A NA555 dos EUA vai a {MAX_HI_C}°C ({MAX_HI}°F). Cada linha tem o link da página de onde saiu.',
        },
        {
          q: 'A receita diz {BASKET_CEIL_C}°C. O que eu ponho numa Philips?',
          a: 'Ponha o máximo, {F_DIAL_C}°C, e olhe antes do fim do tempo; se faltar cor, dê alguns minutos a mais. Escolha o seu modelo no conversor e ele dá o tempo para esse limite.',
        },
        {
          q: 'Por que a NA555 europeia tem outro limite que a americana?',
          a: 'São fichas diferentes para mercados diferentes: a europeia dá {EU_MAX_HI_C}°C e a americana {MAX_HI_C}°C ({MAX_HI}°F), e usamos a de cada mercado.',
        },
        {
          q: 'A Airfryer XXL cabe mais que a normal?',
          a: 'Na Europa, as páginas da HD9650/90 e da HD9285/90 dão a capacidade em litros. A ficha americana da HD9650 dá uma carga de alimento em quilos, por isso essa linha não tem volume.',
        },
        { q: 'A temperatura é a mesma nos dois cestos?', a: 'Sim, cada gaveta tem o mesmo limite. A diferença é que dá para usar dois ajustes ao mesmo tempo, então converta cada alimento por conta própria.' },
      ],
      cardDesc: 'Um teto mais baixo que a maioria: receitas quentes ficam no limite.',
    },
    instant: {
      name: 'Instant Vortex',
      metaTitle: 'Instant Vortex: como converter receitas de forno, tempo e temperatura',
      metaDescription:
        'Converta receitas de forno para a sua Instant Vortex: o Air Fry vai até {F_MAX_C}°C, quando aparece o aviso Turn Food e como usar a janela ClearCook em vez de abrir o cesto.',
      metaKeywords: 'instant vortex temperatura, instant vortex turn food, air fryer instant vortex plus, converter receita de forno instant vortex',
      heading: 'Conversão para air fryer Instant Vortex',
      intro:
        'As Instant Vortex interrompem o preparo com um aviso Turn Food no meio do caminho. Se você não estiver lá, elas esperam {TURN_WAIT} segundos e seguem sem a virada, e a comida sai clara de um lado. Nos modelos ClearCook dá para olhar pela janela em vez de puxar o cesto, que perde calor toda vez que abre.',
      answerTemplate:
        'Todas as Instant Vortex que temos fazem Air Fry até {F_MAX_C}°C ({F_MAX}°F); os modelos de duas zonas gratinam até {OTHER_MAX_C}°C, o que o conversor não usa. São modelos dos EUA: escolha o seu abaixo.',
      widgetHeading: 'Converta uma receita de forno para a sua Instant Vortex',
      widgetNote: 'Escolha o seu modelo para definir o tipo e o limite. O limite coincide com o teto padrão de cesto; a diferença está em como você lida com a virada.',
      sections: [
        {
          heading: 'O aviso Turn Food',
          paragraphs: [
            'Pegue sobrecoxas de frango assadas a {EX_OVEN_C}°C por {EX_OVEN_MIN} minutos. Numa Vortex Plus elas viram {EX_MODEL_C}°C por {EX_MODEL_MIN_C} minutos, com a primeira olhada no minuto {EX_MODEL_CHECK_C}. Vire perto do minuto {EX_HALF_C} e tire quando o centro marcar {INT_C}°C. Air Fry e Roast mostram Turn Food no meio do preparo: puxe o cesto, vire e encaixe de volta.',
            'Se perder o aviso, o preparo continua depois de {TURN_WAIT} segundos, então ponha um timer no celular se for sair de perto. Broil e Dehydrate não pedem virada, e o Reheat começa sem pré-aquecer, por isso não mostra a etapa Add Food.',
          ],
        },
        {
          heading: 'Use a janela ClearCook, não o cesto',
          paragraphs: [
            'Nos modelos ClearCook, aperte Light e acompanhe o dourado pela janela. Cada vez que você puxa o cesto, a câmara esfria e a Vortex precisa se recuperar, o que alonga o tempo. Abra para a virada e para a conferência final, não entre uma e outra.',
            'Sem janela, confie no tempo convertido: abra o cesto para a virada e no minuto de conferência.',
          ],
        },
        {
          heading: 'Programas da Vortex e seus limites',
          paragraphs: [
            'Na Vortex Plus de 6 quartos, o Air Fry começa em {AIR_FRY_DEFAULT_C}°C e chega a {AIR_FRY_MAX_C}°C. O Broil vai de {BROIL_MIN_C}°C a {BROIL_MAX_C}°C e o Reheat para em {REHEAT_MAX_C}°C. Para uma receita de forno, use Air Fry ou Roast e regule você a temperatura convertida; o Reheat não chega a um ajuste de cozimento completo.',
            'Os modelos com Plus no nome descem até {F_MIN_C}°C para desidratar. A Vortex básica começa mais alto, o que só importa para fruta seca ou carne-seca.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Qual é a temperatura máxima de uma Instant Vortex?',
          a: 'O Air Fry vai até {F_MAX_C}°C ({F_MAX}°F) em todas as Vortex da nossa tabela. Os modelos de duas zonas gratinam mais alto, até {OTHER_MAX_C}°C, mas o Air Fry continua parando em {F_MAX_C}°C.',
        },
        { q: 'O que acontece se eu ignorar o Turn Food?', a: 'A Vortex espera {TURN_WAIT} segundos e continua sem a virada. O que precisava virar fica mais dourado em cima do que embaixo.' },
        { q: 'A Instant Vortex pré-aquece?', a: 'Sim. Air Fry, Roast e Bake mostram primeiro o pré-aquecimento e depois Add Food quando ela está pronta. O Reheat pula o pré-aquecimento.' },
        { q: 'Dá para ver a comida sem abrir o cesto?', a: 'Nos modelos ClearCook, acenda a luz e olhe pela janela; abrir o cesto esfria a câmara.' },
        {
          q: 'Esta tabela serve para uma Vortex comprada na Europa?',
          a: 'As páginas europeias da Instant que lemos não mostram o número do modelo, então não dá para ligá-las a uma linha. Confira o seletor do seu aparelho: se ele chega a {F_MAX_C}°C, o conversor com o teto padrão serve.',
        },
        {
          q: 'Converto diferente para os modelos VersaZone ou Dual?',
          a: 'Converta cada alimento separadamente: cada zona tem o seu ajuste, com o mesmo limite de Air Fry, {F_MAX_C}°C.',
        },
      ],
      cardDesc: 'Quando aparece o aviso Turn Food e como olhar pela janela.',
    },
  },
  maxTemp: en.maxTemp,
};

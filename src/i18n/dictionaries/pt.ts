import type { Dictionary } from '../types';
import tempLanding from './temp-landings/pt';
import { presets, presetsIndex } from './presets/pt';

const pt: Dictionary = {
  nav: {
    convert: 'Converter',
    reverse: 'Inverso',
    foodPresets: 'Alimentos',
    brands: 'Marcas',
    chart: 'Tabela',
    guide: 'Guia',
  },
  footer: {
    converter: 'Conversor',
    foodPresets: 'Alimentos predefinidos',
    conversionChart: 'Tabela de conversão',
    about: 'Sobre',
    contact: 'Contato',
    privacyPolicy: 'Política de privacidade',
    termsConditions: 'Termos e condições',
    moreFreeTools: 'Mais ferramentas gratuitas:',
    copyrightSuffix: 'ferramentas gratuitas de conversão culinária no navegador',
  },
  converter: {
    widgetLabel: 'Forno → Air fryer',
    live: 'Ao vivo',
    ovenTemperature: 'Temperatura do forno',
    ovenTime: 'Tempo de forno',
    min: 'min',
    foodType: 'Tipo de alimento',
    airFryerStyle: 'Tipo de air fryer',
    basket: 'Cesto',
    ovenStyle: 'Tipo forno',
    airFryerSetting: 'Ajuste da air fryer',
    checkAt: 'Verificar aos',
    preheat: 'Pré-aquecer',
    gasMark: 'Nível de gás',
    gasMarkDash: 'Nível de gás —',
    unitBasket: 'air fryer de cesto',
    unitOven: 'unidade tipo forno',
    cappedNoteTemplate:
      'Sua receita pede mais calor do que uma {unit} consegue atingir. Foi limitada a {ceiling}°F com tempo extra adicionado — verifique antes e espere uma superfície um pouco menos crocante.',
    foods: {
      general: { label: 'Geral / variado', tip: 'Agite ou vire na metade do tempo.' },
      fries: { label: 'Batata frita', tip: 'Agite duas vezes — uma no início, outra na metade. Mantenha em uma única camada.' },
      wings: { label: 'Asinhas de frango', tip: 'Seque bem antes de cozinhar e vire na metade para uma pele uniforme.' },
      breast: { label: 'Peito de frango (sem osso)', tip: 'Retire a 165°F internos — a temperatura continua subindo durante o descanso.' },
      thigh: { label: 'Coxa e sobrecoxa de frango', tip: 'Pele para cima o tempo todo. Não precisa virar.' },
      steak: { label: 'Bife e cortes grossos', tip: 'Vire uma vez e deixe descansar 5 minutos antes de fatiar.' },
      fish: { label: 'Peixe e salmão', tip: 'Não vire. Verifique no tempo mínimo — o peixe passa do ponto em menos de um minuto.' },
      bacon: { label: 'Bacon', tip: 'Uma única camada. Escorra a gordura na metade se começar a soltar fumaça.' },
      veg: { label: 'Legumes', tip: 'Corte em pedaços do mesmo tamanho e misture na metade.' },
      baked: { label: 'Assados e biscoitos', tip: 'Um corte mais suave — a massa firma mais devagar do que o topo doura.' },
      pizza: { label: 'Pizza e reaquecimento', tip: 'Não precisa pré-aquecer para reaquecer. Fique de olho na crosta, não no relógio.' },
      casserole: { label: 'Gratinados e assados espessos', tip: 'Cubra com papel-alumínio se o topo dourar antes do centro esquentar.' },
    },
  },
  reverseConverter: {
    widgetLabel: 'Air fryer → Forno',
    airFryerTemperature: 'Temperatura da air fryer',
    airFryerTime: 'Tempo de air fryer',
    ovenSetting: 'Ajuste do forno',
    stepNote: 'Arredondado a passos de 25°F do forno',
    ovenCaveat:
      'Um forno convencional não faz o ar circular como o cesto de uma air fryer — pré-aqueça por completo antes de colocar o alimento, e espere que uma única camada fique um pouco menos crocante do que na air fryer.',
    ambiguousCeilingNoteTemplate:
      'Isso está no limite da sua {unit} ({ceiling}°F). Se este ajuste veio de converter para baixo uma receita de forno mais quente, o tempo já inclui cerca de 8% a mais — subtraia isso para um resultado mais preciso.',
  },
  convectionConverter: {
    widgetLabel: "Convecção → Air fryer",
    ovenTemperature: "Temperatura de convecção",
    ovenTime: "Tempo de convecção",
  },
  reverseConvectionConverter: {
    widgetLabel: "Air fryer → Convecção",
    airFryerTemperature: "Temperatura da air fryer",
    airFryerTime: "Tempo de air fryer",
    ovenSetting: "Ajuste do forno de convecção",
    stepNote: "Arredondado a passos de 25°F do forno",
    ovenCaveat: "Mantenha o ventilador ligado e espalhe o alimento numa única camada, com espaço em volta de cada pedaço — uma assadeira de convecção lotada perde o fluxo de ar que estes tempos supõem.",
    ambiguousCeilingNoteTemplate: "Isto está no limite do {unit} ({ceiling}°F). Se foi convertido para baixo a partir de uma receita de convecção mais quente, o tempo já inclui cerca de 8% extra — desconte isso, ou volte à receita original.",
  },
  frozenConverter: {
    widgetLabel: "Embalagem congelada → Air fryer",
    ovenTemperature: "Temperatura da embalagem",
    ovenTime: "Tempo da embalagem",
    packType: "As instruções da embalagem são para",
    packConventional: "Forno convencional",
    packFan: "Forno ventilado",
    shake: "Agitar",
    flip: "Virar",
    turnAtTemplate: "{action} aos {times} min",
    noTurn: "Não precisa virar",
    listJoin: " e ",
    internalTemplate: "Interno {f}°F / {c}°C",
    rawWarningTemplate: "Frango cru direto do congelador: confira com um termômetro se o pedaço mais grosso chega a {f}°F ({c}°C) antes de comer. O lado de fora doura bem antes de um centro congelado ficar seguro.",
    foods: {
      fries: {
        label: "Batata frita",
        tip: "Uma camada só, ou quase, e solte ao agitar os pedaços que congelaram grudados.",
      },
      nuggets: {
        label: "Nuggets de frango",
        tip: "Espalhe bem: pedaços que se encostam cozinham no vapor em vez de ficar crocantes.",
      },
      tenders: {
        label: "Frango empanado, tiras e Kiev",
        tip: "Confira a embalagem: muitos produtos de frango empanado são vendidos crus, não só para reaquecer.",
      },
      fish: {
        label: "Iscas de peixe e filés empanados",
        tip: "Vire com cuidado usando uma pinça: a casquinha firma antes do peixe.",
      },
      pizza: {
        label: "Pizza (individual)",
        tip: "Só uma pizza que caiba deitada no cesto. Confira a massa no começo da faixa de tempo.",
      },
      springRolls: {
        label: "Rolinhos primavera e samosas",
        tip: "Um leve spray de óleo ajuda a massa a dourar por igual.",
      },
      hashBrowns: {
        label: "Hash browns e batatas em formato",
        tip: "Pedaços achatados douram um lado por vez: vire uma vez na metade.",
      },
      veg: {
        label: "Legumes congelados",
        tip: "Não descongele antes. Agitar deixa o vapor sair; sem isso, ficam moles.",
      },
      wings: {
        label: "Asinhas de frango (cruas, congeladas)",
        tip: "Separe na primeira agitada as asinhas que congelaram juntas.",
      },
      rawChicken: {
        label: "Peito de frango cru (direto do congelador)",
        tip: "Mais baixo e mais devagar que o fresco: o centro precisa descongelar e cozinhar.",
      },
    },
  },
  home: {
    metaTitle: 'Conversor de forno para air fryer',
    metaDescription:
      'Conversor gratuito de forno para air fryer. Converta temperatura e tempo de forno para os ajustes da air fryer por tipo de alimento e cesto vs. tipo forno — sem a regra fixa de 25° e sem cadastro.',
    metaKeywords:
      'conversor de forno para air fryer, conversão de forno para air fryer, converter forno para air fryer, tempo de cozimento forno para air fryer, conversão de air fryer para forno, calculadora de air fryer para forno, tabela de conversão air fryer, tabela de temperatura air fryer, tempos de cozimento air fryer, calculadora air fryer',
    eyebrow: 'Grátis / Sem cadastro / Funciona offline',
    heroTitle: 'Conversor de forno para air fryer',
    heroSub:
      'Digite a temperatura e o tempo da receita. Receba o ajuste da air fryer para o seu alimento, adaptado para cesto ou tipo forno — não uma regra fixa de 25°.',
    ctaLabel: 'Abrir o conversor completo',
    commonConversionsHeading: 'Conversões comuns',
    commonConversions: ['−20% de tempo', '−20% de tempo', '−20% de tempo', 'limite do cesto'],
    railFootnote: 'Multiplicadores ajustados para air fryers de cesto e tipo forno, por tipo de alimento.',
    comingSoon: 'Em breve',
    sectionTitles: {
      convert: 'Converter',
      reverse: 'Conversão inversa',
      frozen: 'Modo congelados',
      presets: 'Alimentos predefinidos',
      brands: 'Ajustes por marca',
    },
    convertCards: [
      { title: 'Forno → Air fryer', desc: 'O principal. Multiplicadores por tipo de alimento, cesto vs. tipo forno, limite máximo de temperatura, °F/°C/nível de gás.' },
      { title: 'Convecção → Air fryer', desc: 'Receitas de convecção já vêm ajustadas pelo ventilador, por isso precisam de um corte mais suave. A maioria das ferramentas erra isso.' },
      { title: 'Ajuste por lote e porções', desc: 'Ajuste o tempo quando o cesto está cheio ou você cozinha em duas leva.' },
      { title: 'Ajuste por wattagem', desc: 'Cestos compactos de 1200 W funcionam mais devagar que modelos de 1700 W. Corrija para o seu.' },
    ],
    reverseCards: [
      { title: 'Air fryer → Forno', desc: 'Cozinhando para muitas pessoas, ou o cesto está ocupado. Volte para o forno.' },
      { title: 'Air fryer → Convecção', desc: 'Mesmo princípio de ventilação, cavidade maior. Adiciona tempo, não temperatura.' },
      { title: '°F / °C / nível de gás', desc: 'Conversão direta de temperatura para receitas do Reino Unido, da UE e dos EUA.' },
      { title: 'Tabela de conversão para imprimir', desc: 'Tabela completa em °F e °C para colar na geladeira. Uma página, sem cadastro por e-mail.' },
    ],
    frozenTeaser: {
      heading: 'Direto do congelador para a air fryer',
      desc: 'Mantenha a temperatura da embalagem e reduza cerca de 30% do tempo — o oposto da regra padrão. Escolha o que você está cozinhando.',
      selectLabel: 'Selecione um alimento congelado',
      options: ['Batata frita congelada', 'Nuggets de frango congelados', 'Peito de frango congelado', 'Pizza congelada', 'Palitos de peixe congelados'],
      goLabel: 'Ir',
    },
    frozenCards: [
      { title: 'Batata frita congelada', spec: '400°F · 15 min · agitar 2x', desc: 'Uma única camada, sem precisar de óleo.' },
      { title: 'Nuggets congelados', spec: '380°F · 10 min · virar uma vez', desc: 'A cobertura empanada doura rápido.' },
      { title: 'Peito de frango congelado', spec: '360°F · 22 min · 165°F no centro', desc: 'Mais baixo e mais lento do que você imagina.' },
      { title: 'Pizza congelada', spec: '375°F · 8 min · sem pré-aquecer', desc: 'Só tamanho individual cabe no cesto.' },
    ],
    presetsTeaser: {
      heading: 'Tempo e temperatura para um alimento específico',
      desc: 'Cada predefinição traz temperatura, tempo, pontos de agitar ou virar, e sinais de ponto certo. Sem blog de receita para rolar a página.',
      selectLabel: 'Selecione um alimento predefinido',
      goLabel: 'Ir',
    },
    allPresetsCard: { title: 'Todas as predefinições →', desc: 'Carne, peixe, legumes, assados, reaquecimento.' },
    brandCards: [
      { title: 'Ninja', spec: 'Máx. 400°F · cesto e duplo', desc: 'Ajustes para AF101, AF161, DZ201 e Foodi.' },
      { title: 'Cosori', spec: 'Máx. 450°F · 11 predefinições', desc: 'Traduz os botões predefinidos em tempos reais.' },
      { title: 'Philips', spec: 'Máx. 390°F · Rapid Air', desc: 'Limite mais baixo que a maioria — os tempos ficam mais longos.' },
      { title: 'Referência de temperatura máxima por modelo', spec: '60+ modelos', desc: 'A tabela de limites que alimenta o conversor acima.' },
    ],
    chartStrip: ['Multiplicadores por alimento', 'Cesto e tipo forno', '°F · °C · nível de gás', 'Grátis — sem cadastro'],
    guide: [
      {
        heading: 'O que é um conversor de forno para air fryer?',
        body: 'Um conversor de forno para air fryer pega a temperatura e o tempo de uma receita de forno convencional e os traduz para o ajuste equivalente na air fryer — assim, uma receita escrita para um forno a 425°F não sai com as bordas queimadas e o centro cru só por ter sido feita em um cesto em vez do forno. Foi feito para o momento que todo cozinheiro caseiro enfrenta mais cedo ou mais tarde: uma receita favorita traz temperatura e tempo de forno, mas ligar o forno inteiro parece exagero para quatro coxas de frango ou uma forma de batata frita, e a air fryer na bancada pode fazer o trabalho mais rápido e com menos energia — se você souber quais ajustes usar. É essa lacuna que esta ferramenta preenche. Digite a temperatura e o tempo de forno da receita, diga o que está cozinhando e se o seu aparelho é de cesto ou tipo forno, e ela retorna um ajuste que realmente combina com o jeito que a air fryer cozinha.',
      },
      {
        heading: 'Como funciona a conversão de forno para air fryer',
        body: 'A maioria dos conselhos de conversão de forno para air fryer na internet se resume a uma linha: subtraia 25°F e corte o tempo em um quinto. Essa regra não está exatamente errada — air fryers são pequenos fornos de convecção com ar forçado, então transferem calor mais rápido e precisam de menos temperatura e menos tempo do que um forno convencional. Mas tratar todo alimento da mesma forma é onde as regras fixas falham. Uma regra fixa assume que uma forma de batata frita fina e um bolo denso de banana respondem igual ao fluxo de ar mais rápido. Não respondem. Alimentos finos e com muita superfície, como batata frita, bacon e asinhas de frango, ficam cercados de ar quente em quase todos os lados, então cozinham muito mais rápido — geralmente precisando de 25–30% menos tempo. Um gratinado denso ou um corte grosso de carne ainda precisa conduzir o calor até o centro do mesmo jeito que faria no forno, então a economia é menor, mais perto de 10–15%. Aplique o multiplicador da batata frita no gratinado e ele sairá mal passado; aplique o multiplicador do gratinado na batata frita e ela vai ressecar. É por isso que uma conversão adequada de forno convencional para air fryer precisa de um multiplicador por categoria de alimento em vez de um único número para tudo — o conversor acima observa o que você selecionou e aplica a redução de tempo que aquele tipo de alimento realmente precisa, junto com a queda padrão de temperatura.',
      },
      {
        heading: 'Passo a passo: como converter de forno para air fryer',
        body: 'Para converter ajustes de forno para air fryer em qualquer receita: digite a temperatura do forno exatamente como está escrita, digite o tempo de forno, escolha o tipo de alimento mais próximo e selecione se seu aparelho é uma air fryer de cesto ou uma unidade tipo forno (um forno air fryer ou um híbrido de forno tostadeira). A ferramenta reduz a temperatura, aplica o multiplicador de tempo correto para o tipo de alimento, e verifica o resultado contra o que o seu aparelho realmente consegue atingir — assim você nunca recebe um número que não existe no seu mostrador.',
      },
      {
        heading: 'Conversão do tempo de cozimento de forno para air fryer',
        body: 'A temperatura é só metade do trabalho — a conversão do tempo de cozimento de forno para air fryer importa igualmente, e é a parte que as calculadoras de regra fixa costumam errar. Como as air fryers fazem o ar quente circular diretamente ao redor do alimento em uma câmara pequena, o calor chega à superfície mais rápido e o cozimento termina antes mesmo em uma temperatura menor. É por isso que um assado de 45 minutos no forno pode virar um cozimento de 32 minutos na air fryer, em vez de uma simples porcentagem do número original: a redução de tempo depende de quanta superfície o alimento expõe àquele fluxo de ar, não só da mudança de temperatura.',
      },
      {
        heading: 'Conversão de air fryer para forno (o caminho inverso)',
        body: 'A conversão funciona nos dois sentidos. Às vezes você tem uma receita de air fryer ou uma predefinição do manual do seu aparelho e precisa converter para ajustes de forno — porque está cozinhando um lote maior do que o cesto comporta, a air fryer já está ocupada com outra coisa, ou você está servindo a mesa toda usando o forno completo. A conversão de air fryer para forno geralmente significa aumentar a temperatura e adicionar tempo de cozimento de volta, já que a cavidade maior e o fluxo de ar mais lento de um forno convencional não conseguem igualar o calor concentrado da air fryer. Uma calculadora de air fryer para forno aplica isso ao contrário: soma cerca de 25°F de volta à temperatura da air fryer, depois estende o tempo pela mesma porcentagem sensível ao tipo de alimento que a conversão direta havia subtraído. É a mesma lógica de base, aplicada ao contrário, e é igualmente sensível ao tipo de alimento — um lote de nuggets ampliado para o forno precisa de um ajuste de tempo diferente do de um frango inteiro.',
      },
      {
        heading: 'Air fryer de cesto vs. tipo forno',
        body: 'Nem toda air fryer se comporta da mesma forma, por isso este conversor pergunta qual tipo você tem antes de terminar a conversão. Air fryers de cesto empacotam o alimento em uma câmara pequena e fechada com ar circulando por todos os lados — é isso que as torna rápidas, mas também significa que a maioria dos modelos tem um limite perto de 400°F, e ultrapassar esse limite não é realista, não importa o que uma calculadora genérica sugira. Unidades tipo forno (incluindo fornos air fryer e cestos tipo forno tostadeira) têm mais volume de ar ao redor do alimento, então o efeito é mais suave: as temperaturas podem ser um pouco mais altas, até perto de 450°F, antes de atingir um limite prático. Levar o tipo do seu aparelho em conta na conversão, em vez de ignorá-lo, é o que mantém o resultado realista.',
      },
      {
        heading: 'Dicas para obter os melhores resultados',
        body: 'Algumas coisas ajudam qualquer resultado de conversor de forno para air fryer a ficar mais certo já na primeira tentativa. Pré-aqueça rapidamente — cerca de 3 minutos para um cesto, 4 para tipo forno — já que as air fryers perdem mais calor relativo do que um forno quando a porta ou a gaveta é aberta. Não sobrecarregue o cesto; uma única camada, sem apertar demais, é o que os multiplicadores por tipo de alimento assumem, e um cesto lotado precisa de tempo extra, mais próximo do que um forno completo precisaria. Verifique o alimento alguns minutos antes do tempo convertido sugerido, principalmente na primeira vez que você converte uma receita nova, já que a potência e a calibração variam entre modelos de air fryer. E trate alimentos congelados de forma diferente — eles seguem o padrão oposto de uma receita fresca, mantendo a temperatura da embalagem enquanto ainda reduz o tempo, já que o alimento precisa do calor inicial só para descongelar antes de poder cozinhar.',
      },
    ],
  },
  tool: {
    metaTitle: 'Conversor de forno para air fryer',
    metaDescription:
      'Digite a temperatura e o tempo de forno de qualquer receita. Receba o ajuste equivalente da air fryer, adaptado por tipo de alimento e cesto vs. tipo forno — com um limite máximo para nunca sugerir uma temperatura que o seu aparelho não consiga atingir.',
    metaKeywords: 'conversão de forno para air fryer, calculadora de forno para air fryer, calculadora de conversão air fryer, tabela de conversão air fryer',
    backLink: 'Todas as ferramentas',
    heading: 'Conversor de forno para air fryer',
    subDesc:
      'Digite a temperatura e o tempo de forno de qualquer receita. Receba o ajuste equivalente da air fryer, adaptado por tipo de alimento e cesto vs. tipo forno — com um limite máximo para nunca sugerir uma temperatura que o seu aparelho não consiga atingir.',
    aboutHeading: 'Sobre a conversão de forno para air fryer',
    aboutBody:
      'A maioria das calculadoras de forno para air fryer aplica uma única regra fixa a todo alimento: subtrai 25°F, corta o tempo em 20%. É um ponto de partida razoável, mas trata uma forma de batata fina do mesmo jeito que um gratinado denso, e nunca verifica se o resultado é uma temperatura que a sua air fryer realmente consegue atingir. Esta ferramenta faz duas coisas de forma diferente: ajusta o multiplicador por tipo de alimento, e limita o resultado ao teto real do seu aparelho em vez de devolver um número que não existe no seu mostrador.',
    multipliersHeading: 'Como funcionam os multiplicadores por tipo de alimento',
    multipliersBody:
      'A câmara compacta e o ar forçado de uma air fryer transferem calor para o alimento muito mais rápido do que um forno de tamanho normal, então os tempos de cozimento sempre caem — mas o quanto depende da superfície e da densidade do alimento. Alimentos finos e com muita superfície, como batata frita ou bacon, perdem mais tempo (um corte de cerca de 30%) porque o ar quente chega a todos os lados quase imediatamente. Alimentos densos, como gratinados ou assados, perdem menos (cerca de 15%) porque o calor ainda precisa avançar até o centro. Frango, peixe e legumes ficam no meio termo. O conversor busca o multiplicador certo para o alimento que você selecionou em vez de aplicar um único número para tudo.',
    basketVsOvenHeading: 'Fluxo de ar: cesto vs. tipo forno',
    basketVsOvenBody:
      'Uma air fryer de cesto empacota o alimento em uma câmara pequena com ar circulando por todos os lados, o que cozinha rápido mas tem um teto seguro mais baixo — a maioria dos cestos para perto de 400°F. Unidades tipo forno (fornos air fryer e cestos tipo forno tostadeira) têm mais volume de ar ao redor do alimento, então o efeito é um pouco mais suave: esta ferramenta reduz 5°F a menos da temperatura do forno e adiciona um pequeno extra de tempo para unidades tipo forno, e permite que o resultado chegue até 450°F antes de limitar.',
    whatHappensHeading: 'O que acontece quando uma receita pede mais calor do que a sua air fryer consegue dar',
    whatHappensBody:
      'Uma receita de 450°F convertida com uma regra fixa em uma air fryer de cesto com máximo de 400°F retornaria 425°F — um ajuste que não existe no mostrador. Esta ferramenta limita o resultado ao teto real do aparelho (400°F cesto, 450°F tipo forno) e adiciona tempo de volta para compensar o calor menor, com uma nota em linguagem simples explicando o que aconteceu e o que esperar (uma superfície um pouco menos crocante, então verifique um pouco antes). É a lacuna mais comum entre as demais calculadoras de air fryer, e o motivo desta ferramenta existir.',
    relatedChartLink: 'Tabela de conversão para imprimir',
    relatedReverseLink: 'Conversor de air fryer para forno',
    relatedConvectionLink: "Conversor de convecção para air fryer",
    relatedFrozenLink: "Modo de congelados (instruções da embalagem)",
    faqHeading: 'Perguntas frequentes',
    faqs: [
      {
        q: 'Por que não simplesmente subtrair 25°F e cortar o tempo em 20% para tudo?',
        a: 'Porque alimentos diferentes respondem de forma diferente ao fluxo de ar mais rápido da air fryer. Um alimento fino e com muita superfície, como batata frita, precisa de um corte de tempo maior (cerca de 30%) ou resseca; um gratinado denso quase não precisa de corte (cerca de 15%). Este conversor aplica um multiplicador diferente por tipo de alimento em vez de uma única regra fixa.',
      },
      {
        q: 'O que acontece se a temperatura convertida for maior do que a minha air fryer consegue atingir?',
        a: 'O resultado é limitado ao teto realista do seu aparelho — 400°F para uma air fryer de cesto, 450°F para tipo forno — e alguns minutos extras são adicionados de volta para compensar, com uma nota explicando o motivo. A maioria das calculadoras devolve silenciosamente um número que o seu aparelho na verdade não consegue atingir.',
      },
      {
        q: 'Qual a diferença entre os ajustes de cesto e tipo forno?',
        a: 'Uma air fryer de cesto envolve o alimento com ar quente por todos os lados em uma câmara pequena, então cozinha mais rápido e tem um teto de temperatura prático mais baixo. Unidades tipo forno (fornos air fryer, cestos tipo forno tostadeira) têm mais volume de ar ao redor do alimento, então funcionam um pouco mais frias em relação ao forno e podem chegar um pouco mais quentes antes de limitar.',
      },
      {
        q: 'Funciona para alimentos direto do congelador?',
        a: 'Alimentos congelados seguem uma lógica diferente de uma receita fresca tirada da geladeira — mantenha a temperatura da embalagem praticamente igual e corte o tempo em cerca de 30%, o oposto da regra habitual, já que o alimento precisa do calor total só para descongelar antes de poder cozinhar.',
      },
      {
        q: 'Quão preciso é o resultado?',
        a: 'As temperaturas são arredondadas para o múltiplo de 5 mais próximo, do jeito que os mostradores e controles digitais das air fryers realmente avançam. Trate o resultado como um ponto de partida, não uma garantia — verifique o alimento um pouco antes do tempo sugerido, principalmente na primeira vez que você cozinha algo em um aparelho novo.',
      },
      {
        q: 'Preciso pré-aquecer?',
        a: 'Um pré-aquecimento curto ajuda o resultado a ficar no alvo: cerca de 3 minutos para uma unidade de cesto, 4 minutos para tipo forno (mostrado no painel de resultado acima). Pular o pré-aquecimento geralmente só significa adicionar um ou dois minutos ao tempo de cozimento.',
      },
      {
        q: 'Dá para converter um forno em uma air fryer?',
        a: 'Você não pode transformar o aparelho em si — são hardwares diferentes. O que você pode fazer é converter a temperatura e o tempo de forno de uma receita para o ajuste equivalente de air fryer, que é exatamente o que esta ferramenta faz: ela leva em conta o cozimento mais rápido e com ar forçado da air fryer para que o mesmo prato saia certo em qualquer um dos dois aparelhos.',
      },
      {
        q: '200 graus na air fryer é o mesmo que no forno?',
        a: 'Não. As air fryers fazem o ar quente circular diretamente ao redor do alimento em uma câmara pequena, então 200° na air fryer cozinha visivelmente mais rápido e doura mais do que 200° em um forno convencional. Como regra geral, reduza a temperatura em cerca de 20°F (ou aproximadamente de 20°C para 180°C) e diminua o tempo para compensar — use a calculadora acima para um número ajustado ao seu alimento específico.',
      },
      {
        q: 'O que é a regra 20/20 para air fryers?',
        a: 'A regra 20/20 é um atalho popular para a conversão de forno para air fryer: reduza a temperatura do forno em 20°F e corte o tempo de cozimento em 20%. É uma estimativa rápida razoável, mas aplica o mesmo ajuste a todo alimento — este conversor refina isso com um multiplicador de tempo diferente por tipo de alimento em vez de um único número fixo.',
      },
      {
        q: 'Quanto são 30 minutos de forno em uma air fryer?',
        a: 'Aproximadamente 21–25 minutos, dependendo do que você está cozinhando. Alimentos finos e com muita superfície, como batata frita ou asinhas, perdem mais perto de 30% do tempo (cerca de 21 minutos), enquanto alimentos densos, como gratinados, perdem mais perto de 15% (cerca de 25 minutos). Digite 30 minutos e o seu tipo de alimento acima para um número exato.',
      },
      {
        q: 'Como converto 200°C por 15 minutos no forno para air fryer?',
        a: 'Como ponto de partida, 200°C por 15 minutos no forno viram aproximadamente 180°C por 12 minutos na air fryer — uma queda de 20° e um corte de tempo de 20%. Os números exatos mudam conforme o tipo de alimento e se você tem uma unidade de cesto ou tipo forno, que é exatamente o que a calculadora acima leva em conta.',
      },
      {
        q: 'A air fryer é mais rápida do que o forno?',
        a: 'Sim, tipicamente 20–30% mais rápida. A câmara de cozimento pequena da air fryer, a resistência mais próxima e a circulação de ar forçado transferem calor ao alimento muito mais rápido do que um forno de tamanho normal, e ela precisa de pouco ou nenhum tempo de pré-aquecimento comparado aos 10–15 minutos de um forno.',
      },
      {
        q: 'Posso substituir meu forno por uma air fryer?',
        a: 'Para o cozimento diário em pequenas porções — frango, peixe, legumes, batata frita, reaquecer sobras — uma air fryer pode substituir o forno na maior parte do tempo, mais rápido e com menos energia. Ela não substitui totalmente: assados grandes, refeições em forma, assados em várias grades, e qualquer coisa grande demais para o cesto ainda precisam de um forno de tamanho normal.',
      },
      {
        q: 'Como transformo um forno em uma air fryer?',
        a: 'Você não pode converter o aparelho em si, mas muitos fornos modernos incluem um ajuste de convecção ou "air fry" que se aproxima disso — ligar o ventilador reduz o tempo e a temperatura efetivos de cozimento de forma parecida com uma air fryer. Caso contrário, use este conversor para traduzir qualquer receita de forno em ajustes de air fryer e cozinhe em uma air fryer separada.',
      },
      {
        q: 'Quanto são 20 minutos de forno em uma air fryer?',
        a: 'Cerca de 14–17 minutos para a maioria dos alimentos — um corte de aproximadamente 15–30% dependendo do tipo de alimento. Alimentos finos como batata frita ou bacon ficam mais perto de 14 minutos; alimentos densos como assados ficam mais perto de 17. Use a calculadora acima com o seu alimento específico para um número preciso.',
      },
      {
        q: 'Posso usar papel-alumínio na air fryer?',
        a: 'Sim, a maioria das air fryers pode usar papel-alumínio com segurança, desde que ele não bloqueie o fluxo de ar ao redor do alimento nem toque na resistência. Prenda-o com o alimento para que não voe até a resistência, deixe espaços para o ar circular, e evite alumínio com alimentos muito ácidos (tomate, cítricos, marinadas com vinagre) em cozimentos longos, já que o ácido pode reagir com o metal.',
      },
      {
        q: 'O que é mais saudável, air fryer ou forno?',
        a: 'São mais ou menos equivalentes — os dois cozinham com pouco ou nenhum óleo adicionado, ao contrário da fritura por imersão. A vantagem de saúde da air fryer é especificamente em relação à fritura por imersão (até 70–80% menos óleo), não em relação a assar no forno, que já usa pouco óleo. A principal diferença em relação ao forno é conveniência e velocidade, não nutrição.',
      },
      {
        q: 'Qual a diferença entre air fryer e forno de convecção?',
        a: 'Usam o mesmo princípio — um ventilador que faz o ar quente circular — mas a câmara de uma air fryer é muito menor e o alimento fica mais perto tanto do ventilador quanto da resistência, então cozinha mais rápido e doura de forma mais intensa. Um forno de convecção aplica o mesmo fluxo de ar assistido por ventilador em uma cavidade muito maior, por isso receitas de convecção precisam de um ajuste mais suave do que receitas de forno padrão ao converter para air fryer.',
      },
      {
        q: 'Air fryers usam menos energia do que um forno?',
        a: 'Sim. Uma air fryer típica consome entre 1200 e 1800 watts e funciona por uma fração do tempo que um forno precisa (sem pré-aquecimento longo, menos volume para aquecer), então uma única refeição geralmente custa visivelmente menos energia do que aquecer um forno de tamanho normal para o mesmo alimento.',
      },
      {
        q: 'Posso colocar uma forma de metal ou um recipiente próprio para forno na air fryer?',
        a: 'Sim, desde que seja próprio para forno e caiba no cesto ou na bandeja com espaço para o ar circular por todos os lados. Metal, vidro próprio para forno e cerâmica funcionam bem; evite qualquer coisa que bloqueie o fluxo de ar ou seja alta demais para o cesto fechar direito.',
      },
    ],
  },
  reverseTool: {
    metaTitle: 'Conversor de air fryer para forno',
    metaDescription:
      'Digite a temperatura e o tempo da air fryer de uma receita, um ajuste predefinido ou o manual do seu aparelho. Receba o ajuste equivalente de forno, adaptado por tipo de alimento e cesto vs. tipo forno, arredondado aos passos de 25° que um forno real usa.',
    metaKeywords:
      'conversão de air fryer para forno, calculadora de air fryer para forno, converter air fryer para forno, conversão de tempo de cozimento air fryer para forno, air fryer para forno convencional, ajuste de air fryer para temperatura de forno',
    backLink: 'Todas as ferramentas',
    heading: 'Conversor de air fryer para forno',
    subDesc:
      'Digite a temperatura e o tempo da air fryer de uma receita, um ajuste predefinido ou o manual do seu aparelho. Receba o ajuste equivalente de forno, adaptado por tipo de alimento e cesto vs. tipo forno, arredondado aos passos de 25° que um forno real usa.',
    aboutHeading: 'Sobre a conversão de air fryer para forno',
    aboutBody:
      'A maioria das ferramentas de forno para air fryer funciona só em uma direção, mas o caminho inverso aparece com a mesma frequência. Uma receita, um ajuste predefinido do manual da sua air fryer, ou uma dica de um amigo te dá uma temperatura e um tempo de air fryer, e você precisa dos números do forno convencional em vez disso — porque está cozinhando para mais gente do que o cesto comporta, a air fryer já está ocupada com outra coisa, ou o forno é simplesmente a ferramenta certa para o que você está preparando hoje. Este conversor roda o motor do conversor principal de forno para air fryer ao contrário: digite a temperatura e o tempo da air fryer, escolha o tipo de alimento e se o seu aparelho é de cesto ou tipo forno, e você recebe o ajuste de forno que essa receita precisaria — usando os mesmos multiplicadores por alimento do conversor direto, não um número fixo invertido.',
    roundingHeading: 'Por que o resultado do forno arredonda para 25°F, não para 5°F',
    roundingBody:
      'O visor digital de uma air fryer pode mostrar qualquer passo de 5°, mas um mostrador ou controle de forno real avança apenas em incrementos de 25° — 325, 350, 375, 400, e assim por diante. Arredondar uma conversão inversa à grade mais fina de 5° da air fryer daria números como 405°F ou 415°F que não existem no mostrador de um forno, e converter uma receita nos dois sentidos — de forno para air fryer e de volta para o forno — se afastaria um pouco mais do número original a cada troca de direção. Arredondar o resultado do forno para o 25° mais próximo, em vez disso, mantém cada resultado como um ajuste que dá para realmente marcar no mostrador, e é por isso que converter a mesma receita nas duas direções volta perto de onde começou em vez de se distanciar.',
    workedExampleHeading: 'Exemplo prático',
    workedExampleTemplate:
      'Pegue uma receita de air fryer de cesto com alimento geral a 375°F por 20 minutos: converta de volta e o ajuste de forno sai em {GENERAL_OVEN_F}°F por {GENERAL_OVEN_MIN} minutos — o corte habitual de 25° de temperatura e a economia de 20% de tempo da air fryer, somados de volta. A batata frita se comporta diferente: 400°F por 12 minutos em um cesto vira {FRIES_OVEN_F}°F por {FRIES_OVEN_MIN} minutos no forno, um aumento de tempo maior, porque a batata frita perde mais tempo do que a média ao entrar na air fryer e precisa recuperar mais ao sair.',
    whenOvenBetterHeading: 'Quando o forno é realmente a melhor escolha',
    whenOvenBetterBody:
      'A air fryer ganha em velocidade para uma única camada de alimento sem apertar, mas o forno ainda é a melhor ferramenta em algumas situações comuns: cozinhar mais do que o cesto comporta em uma única leva, preparar dois pratos em grades diferentes ao mesmo tempo, uma air fryer ocupada no meio de outro ciclo, ou um corte grande demais para caber em um cesto — um frango inteiro, uma assadeira cheia de biscoitos, uma bandeja grande de legumes para muita gente. Em qualquer um desses casos, converter o ajuste de air fryer que você já conhece de volta para um número de forno é mais rápido do que chutar do zero, e mantém intacta a lógica por tipo de alimento — a batata frita precisa recuperar mais tempo do que um gratinado — nas duas direções.',
    ovenCaveatHeading: 'Uma coisa para saber: um forno padrão não foi feito para fritar',
    ovenCaveatBody:
      'Um forno convencional não tem a circulação de ar forçado que o cesto de uma air fryer tem, então duas coisas mudam. O pré-aquecimento importa mais, já que o forno precisa de todo o seu tempo de aquecimento para chegar à temperatura alvo de forma uniforme, em vez dos 3–4 minutos que uma air fryer precisa. E uma única camada de alimento não vai ficar tão crocante quanto no cesto, já que há menos fluxo de ar concentrado batendo em cada lado ao mesmo tempo. Nenhum dos dois é um problema para contornar — só não espere que uma assadeira de asinhas no forno fique idêntica à versão feita na air fryer, e use um ajuste de convecção ou "air fry" do forno se o seu tiver, já que isso fecha a maior parte da diferença.',
    relatedFlagshipLink: 'Conversor de forno para air fryer',
    relatedChartLink: 'Tabela de conversão para imprimir',
    relatedConvectionLink: "Conversor de air fryer para convecção",
    faqHeading: 'Perguntas frequentes',
    faqs: [
      {
        q: 'Como converto os ajustes da air fryer para um forno convencional?',
        a: 'Some de volta o mesmo ajuste de temperatura por tipo de alimento à temperatura da air fryer (25°F para a maioria dos alimentos, 20°F para bife, peixe, assados e gratinados), e divida o tempo da air fryer pelo multiplicador de tempo daquele alimento em vez de multiplicar. A calculadora acima faz isso automaticamente e arredonda a temperatura do forno para um passo real de 25° do mostrador.',
      },
      {
        q: 'Por que a temperatura do forno arredonda para um passo de 25° em vez de um número exato?',
        a: 'Porque um mostrador ou controle digital de forno real só avança em incrementos de 25°F — 350, 375, 400 — não nos passos mais finos de 5° que uma air fryer usa. Arredondar para o que o mostrador realmente consegue exibir também é o que mantém uma receita convertida nas duas direções (de forno para air fryer e de volta para o forno) perto do número onde começou, em vez de se afastar.',
      },
      {
        q: 'O forno vai dar exatamente o mesmo resultado que a air fryer?',
        a: 'Perto, mas não idêntico. Um forno convencional não tem a circulação de ar forçado de um cesto de air fryer, então o pré-aquecimento importa mais e uma única camada de alimento não vai ficar tão crocante. Se o seu forno tiver um ajuste de ventilação por convecção ou "air fry", use-o — isso fecha a maior parte da diferença.',
      },
      {
        q: 'Quando devo usar o forno em vez da air fryer?',
        a: 'Sempre que o cesto não conseguir fazer o trabalho em uma única leva: um lote maior do que o cesto comporta, dois pratos cozinhando em grades separadas ao mesmo tempo, uma air fryer já ocupada, ou um alimento grande demais para caber em um cesto, como um frango inteiro ou uma assadeira cheia de biscoitos.',
      },
      {
        q: 'O multiplicador por tipo de alimento ainda importa nessa direção?',
        a: 'Sim — ele se inverte em vez de desaparecer. Alimentos finos e com muita superfície, como batata frita e bacon, precisaram do maior corte de tempo ao entrar na air fryer, então precisam do maior aumento de tempo ao voltar para o forno. Alimentos densos, como gratinados, precisam do menor ajuste nos dois sentidos.',
      },
      {
        q: 'Qual temperatura interna eu ainda devo verificar, independentemente do aparelho?',
        a: 'Os alvos de temperatura interna não mudam entre uma air fryer e um forno — retire aves a 165°F internos e peixe, bife ou costeletas a 145°F. O aparelho muda o tempo e o ajuste do mostrador para chegar lá; não muda o que significa "pronto".',
      },
    ],
  },
  convectionTool: {
    metaTitle: "Conversor de forno de convecção para air fryer",
    metaDescription: "Converta uma receita de forno de convecção ou com ventilação para ajustes de air fryer. Um corte mais suave que a regra do forno — receitas com ventilador já vêm ajustadas — por tipo de alimento e cesto ou tipo forno.",
    metaKeywords: "convecção para air fryer, forno de convecção para air fryer, forno com ventilação para air fryer, converter receita de convecção para air fryer, forno turbo para air fryer",
    backLink: "Todas as ferramentas",
    heading: "Conversor de convecção para air fryer",
    subDesc: "Digite a temperatura e o tempo de uma receita de forno de convecção ou com ventilação. Receba o ajuste de air fryer com o corte menor de que uma receita já ajustada pelo ventilador precisa, por tipo de alimento e cesto ou tipo forno.",
    aboutHeading: "Por que receitas de convecção precisam de uma conversão própria",
    aboutBody: "Um forno de convecção e uma air fryer funcionam pelo mesmo princípio: um ventilador movimenta o ar quente em volta do alimento para que o calor chegue mais rápido do que chegaria com o ar parado. Por isso uma receita escrita para convecção já traz embutida a maior parte da vantagem da air fryer — costuma estar cerca de 25°F abaixo da versão para forno convencional do mesmo prato, e muitas vezes é um pouco mais curta. Passe essa receita por uma conversão padrão de forno para air fryer e você tira os 25°F pela segunda vez, e é assim que receitas de forno com ventilação saem do cesto pálidas e cruas por dentro. Este conversor parte do número de convecção e aplica apenas a diferença que realmente sobra.",
    whyGentlerHeading: "Por que o corte é menor",
    whyGentlerBody: "O que sobra entre um forno de convecção e uma air fryer é tamanho e distância. A cavidade de uma air fryer é uma fração do volume, e o alimento fica a poucos centímetros do ventilador e da resistência, então o ar chega mais rápido e a superfície doura antes. Isso vale cerca de 0–15°F e 5–10% do tempo, conforme o alimento. Batata frita e asinhas mantêm quase todo o calor — precisam dele para ficar crocantes e soltar a gordura — e economizam tempo no lugar. Bolos, biscoitos e gratinados levam o maior corte de temperatura, 15°F, porque numa cavidade pequena a superfície doura antes de o centro firmar. As air fryers tipo forno são ainda mais parecidas com um forno de convecção, então o corte delas diminui mais 5°F.",
    workedExampleHeading: "Exemplo prático",
    workedExampleTemplate: "Uma receita de forno com ventilação a 350°F por 30 minutos, alimento geral, numa air fryer de cesto, sai a {GENERAL_AF_F}°F por {GENERAL_AF_MIN} minutos. Com os mesmos números no conversor de forno convencional para air fryer você teria {FLAGSHIP_AF_F}°F por {FLAGSHIP_AF_MIN} minutos — baixo demais e curto demais para uma receita que já vinha ajustada pelo ventilador. Asinhas a 425°F em convecção por 40 minutos passam do que um cesto de 400°F alcança, então o conversor as segura em {WINGS_AF_F}°F e devolve tempo: {WINGS_AF_MIN} minutos, com uma nota avisando.",
    spotHeading: "Como saber se uma receita foi escrita para convecção",
    spotBody: "Procure primeiro as palavras: \"ventilação\", \"ventilador\", \"forno turbo\", \"convecção\", \"assar com convecção\" ou uma temperatura escrita como \"180°C ventilado\". Receitas britânicas e australianas e muitas embalagens trazem dois números, um convencional e outro com ventilador, e o com ventilador é o menor. Se não houver indicação, compare a temperatura com a que o prato costuma levar: batatas assadas a 400°F em vez de 425°F, ou biscoitos a 325°F em vez de 350°F, sugerem que a receita já pressupõe um ventilador. Livros de receitas que acompanham um forno costumam ser escritos para o modo de convecção dele.",
    conventionalHeading: "Se a receita não for de convecção",
    conventionalBody: "Uma receita para forno comum, sem ventilador, precisa da conversão completa — a queda de temperatura maior e o corte de tempo maior que o conversor de forno para air fryer aplica. Usar esta página para uma receita convencional deixa o alimento um pouco quente e longo demais; usar o conversor convencional para uma receita de convecção o deixa cru. Escolha o conversor pela receita, não pelo aparelho.",
    relatedFlagshipLink: "Conversor de forno para air fryer (receitas convencionais)",
    relatedReverseLink: "Conversor de air fryer para forno",
    relatedSiblingLink: "Conversor de air fryer para convecção",
    relatedChartLink: "Tabela de conversão para imprimir",
    relatedFrozenLink: "Modo de congelados (instruções da embalagem)",
    faqHeading: "Perguntas frequentes",
    faqs: [
      {
        q: "Como converter uma receita de forno de convecção para air fryer?",
        a: "Baixe a temperatura de 0 a 15°F conforme o alimento e corte o tempo em 5–10%. Alimentos que precisam ficar crocantes, como batata frita e asinhas, mantêm o calor e perdem um pouco de tempo; bolos e gratinados levam o maior corte de temperatura. O conversor acima aplica os números por alimento e confere o resultado com a temperatura máxima da sua air fryer.",
      },
      {
        q: "Devo tirar 25°F de uma receita de convecção para a air fryer?",
        a: "Não. Esses 25°F são o ajuste usual de forno convencional para convecção, e uma receita de convecção já o fez. Tirar de novo conta o ventilador duas vezes e deixa o alimento cru. A partir da convecção, o corte que sobra é de no máximo 15°F.",
      },
      {
        q: "Forno com ventilação é o mesmo que forno de convecção?",
        a: "Sim. \"Forno com ventilação\", \"forno turbo\" e \"fan oven\" são nomes do forno de convecção. Quando a embalagem traz uma temperatura convencional e outra ventilada, digite aqui a ventilada.",
      },
      {
        q: "E se a receita de convecção for mais quente do que minha air fryer alcança?",
        a: "O conversor segura a temperatura no limite do aparelho — 400°F na maioria dos modelos de cesto, 450°F nos de tipo forno — e devolve cerca de 8% do tempo para compensar, com uma nota abaixo do resultado. Confira antes; a superfície pode dourar um pouco menos.",
      },
      {
        q: "Posso usar os ajustes de convecção sem mudar numa air fryer tipo forno?",
        a: "Quase. Uma air fryer tipo forno é basicamente um pequeno forno de convecção, então o corte diminui: 0–10°F e tempo próximo do original. Batata frita e asinhas podem ir à temperatura de convecção com só alguns minutos a menos.",
      },
      {
        q: "As temperaturas internas mudam entre convecção e air fryer?",
        a: "Não. Retire aves a 165°F internos e peixe, bife ou costeletas a 145°F, seja qual for o aparelho. O conversor muda o ajuste e o tempo para chegar lá, não o que significa estar pronto.",
      },
    ],
  },
  reverseConvectionTool: {
    metaTitle: "Conversor de air fryer para forno de convecção",
    metaDescription: "Converta temperatura e tempo da air fryer para um ajuste de forno de convecção (com ventilação), por tipo de alimento e cesto ou tipo forno, arredondado a passos de 25°. Para porções que não cabem no cesto.",
    metaKeywords: "air fryer para convecção, air fryer para forno de convecção, air fryer para forno com ventilação, converter receita de air fryer para forno de convecção, air fryer para forno turbo",
    backLink: "Todas as ferramentas",
    heading: "Conversor de air fryer para forno de convecção",
    subDesc: "Digite uma temperatura e um tempo de air fryer. Receba o ajuste do forno de convecção (com ventilação), adaptado ao alimento e ao tipo cesto ou forno, arredondado aos passos de 25° de um botão de forno real.",
    aboutHeading: "Sobre a conversão de air fryer para convecção",
    aboutBody: "Uma receita de air fryer escala mal. O cesto comporta uma camada, e assim que você cozinha para seis em vez de dois, um forno de convecção — o mesmo calor movido por ventilador numa cavidade onde cabem duas assadeiras — é o caminho mais rápido. Como os dois aparelhos movem ar quente com um ventilador, passar da air fryer para um forno de convecção é um ajuste pequeno, não a volta inteira a um forno convencional. Este conversor devolve só a diferença por alimento entre os dois: alguns graus e um pouco de tempo, com a mesma tabela do conversor de convecção para air fryer, aplicada ao contrário.",
    whenConvectionHeading: "Quando um forno de convecção vence o cesto",
    whenConvectionBody: "O tamanho da porção é o principal: um forno de convecção cozinha duas ou três assadeiras de uma vez, com o ventilador mantendo cada grade quase na mesma temperatura, enquanto uma air fryer precisaria de três rodadas seguidas. Peças grandes — um frango inteiro, uma assadeira de biscoitos, um assado de travessa — cabem num forno e não num cesto. E quando a air fryer está ocupada com um acompanhamento, levar o prato principal para o forno ventilado faz os dois chegarem à mesa ao mesmo tempo. Jantares de uma assadeira só, em que legumes e proteína dividem a mesma bandeja e terminam juntos, também são mais fáceis de acertar no forno. Para uma porção de batata frita ou asinhas, a air fryer ainda ganha em rapidez e crocância.",
    roundingHeading: "Por que a temperatura muitas vezes não muda",
    roundingBody: "A diferença entre uma air fryer e um forno de convecção é de 0–15°F, e o botão de um forno avança em passos de 25°F. Some 10°F a um ajuste de air fryer de 375°F e o passo mais próximo do botão continua sendo 375°F. Por isso, para muitos alimentos, este conversor devolve a mesma temperatura e põe todo o ajuste no tempo. É a resposta honesta: a diferença entre os dois aparelhos é sobretudo a rapidez com que o ar chega ao alimento, e um cozimento um pouco mais longo na cavidade maior é como o forno compensa. Arredondar a passos do botão também faz uma receita convertida de ida e volta cair no número de onde partiu.",
    workedExampleHeading: "Exemplo prático",
    workedExampleTemplate: "Um ajuste geral de air fryer de 340°F por 27 minutos no cesto vira {GENERAL_CONV_F}°F por {GENERAL_CONV_MIN} minutos num forno de convecção — provavelmente a receita ventilada de onde ele veio. Batata frita a 390°F por 18 minutos vira {FRIES_CONV_F}°F por {FRIES_CONV_MIN} minutos: o botão cai no passo seguinte, e o forno ganha alguns minutos a mais porque o ar se move mais devagar sobre uma assadeira cheia do que dentro de um cesto.",
    ceilingHeading: "Ajustes no máximo da sua air fryer",
    ceilingBody: "Se o ajuste da air fryer está no limite do aparelho — 400°F na maioria dos cestos, 450°F nos modelos tipo forno — ele pode ser um número já convertido: uma receita de convecção mais quente segurada no que a air fryer alcança, com cerca de 8% de tempo extra. O conversor não consegue saber qual é o caso, então mostra uma nota. Se você sabe que a receita começou mais quente, use o ajuste de convecção original em vez de converter de volta.",
    relatedFlagshipLink: "Conversor de forno para air fryer",
    relatedReverseLink: "Conversor de air fryer para forno (forno convencional)",
    relatedSiblingLink: "Conversor de convecção para air fryer",
    relatedChartLink: "Tabela de conversão para imprimir",
    relatedFrozenLink: "Modo de congelados (instruções da embalagem)",
    faqHeading: "Perguntas frequentes",
    faqs: [
      {
        q: "Como converter tempo e temperatura da air fryer para um forno de convecção?",
        a: "Some 0–15°F conforme o alimento, arredonde para o passo de 25°F mais próximo do botão e acrescente 5–10% ao tempo. O conversor acima faz as três coisas com a mesma tabela por alimento do conversor de convecção para air fryer, para que os dois sentidos concordem.",
      },
      {
        q: "Air fryer para convecção é o mesmo que air fryer para forno?",
        a: "Não. Um forno convencional, sem ventilador, precisa de 20–25°F e 15–30% do tempo de volta. Um forno de convecção já tem ventilador, então precisa de bem menos. Se o seu forno não tem modo ventilado, use o conversor de air fryer para forno.",
      },
      {
        q: "Por que a temperatura saiu igual ao meu ajuste de air fryer?",
        a: "Porque a diferença entre os dois aparelhos é menor que um passo de 25°F no botão do forno. Arredondar para um ajuste que o forno consegue mostrar muitas vezes volta ao número da air fryer, então o ajuste vai para o tempo.",
      },
      {
        q: "Uso convecção para assar bolos ou convecção para grelhar?",
        a: "A convecção comum serve para a maioria dos alimentos. A convecção com resistência superior ajuda asinhas, batatas e tudo o que você quer crocante. Use a temperatura que o conversor dá em qualquer um dos casos.",
      },
      {
        q: "Preciso de mais tempo com duas assadeiras no forno?",
        a: "Muitas vezes alguns minutos, sim. O tempo convertido supõe uma assadeira com espaço em volta. Com duas ou mais, troque-as de posição na metade e confira um ou dois minutos depois do tempo convertido.",
      },
      {
        q: "As temperaturas internas de referência mudam?",
        a: "Não. Aves ficam prontas a 165°F internos e peixe, bife ou costeletas a 145°F, na air fryer ou no forno de convecção.",
      },
    ],
  },
  frozenTool: {
    metaTitle: "Conversor de congelados para air fryer",
    metaDescription: "Converta as instruções da embalagem congelada para tempo e temperatura de air fryer. Mantenha quase todo o calor, corte cerca de 30% do tempo e agite na hora certa — embalagem para forno convencional ou ventilado, cesto ou tipo forno.",
    metaKeywords: "instruções da embalagem para air fryer, batata frita congelada air fryer tempo, frango congelado air fryer tempo, conversor de congelados air fryer",
    backLink: "Todas as ferramentas",
    heading: "Conversor de congelados para air fryer",
    subDesc: "Digite a temperatura e o tempo de forno da embalagem. Receba o ajuste de air fryer para comida direto do congelador, com os momentos de agitar ou virar e a temperatura interna onde ela importa.",
    aboutHeading: "Por que congelados se convertem de outro jeito",
    aboutBody: "A maioria dos conversores trata congelado como mais um tipo de alimento e aplica a regra de sempre: tirar 25°F e cortar o tempo em um quinto. Para comida que sai do congelador isso é o contrário. As instruções de forno da embalagem foram escritas para alimentos que entram congelados, então a temperatura da caixa já é a que a casquinha precisa para ficar crocante antes de o interior passar do ponto. O que a air fryer muda é a velocidade: uma cavidade pequena e ar rápido tiram o gelo da superfície logo. Por isso este conversor mantém quase toda a temperatura da embalagem — geralmente 10°F a menos — e faz o grande corte no tempo, cerca de 30%. Frango cru congelado é a exceção e vai mais baixo e mais devagar.",
    packHeading: "Como ler uma embalagem europeia e uma americana",
    packBody: "Embalagens dos EUA dão uma só temperatura de forno em °F, pensada para forno convencional. Embalagens britânicas e europeias costumam dar °C e muitas vezes dois números: uma temperatura convencional e outra mais baixa \"ventilada\", em geral 20°C a menos, com o mesmo tempo para as duas. Escolha a linha que você está lendo no seletor da embalagem. Uma temperatura ventilada já está ajustada ao ventilador, então o conversor devolve a diferença entre forno convencional e ventilado para aquele alimento em vez de cortar de novo — a mesma diferença por alimento que o conversor de convecção usa. Embalagens com gas mark são convencionais: converta a marca em temperatura primeiro, ou use o gas mark mostrado em cada resultado para conferir que está perto.",
    workedExampleHeading: "Exemplo prático",
    workedExampleTemplate: "Um pacote americano de batata frita congelada diz 425°F por 20 minutos. Uma air fryer de cesto chega no máximo a 400°F, então o conversor segura nela e devolve um pouco de tempo: {US_AF_F}°F por {US_AF_MIN} minutos, com duas agitadas. Um pacote britânico da mesma batata diz 200°C ventilado por 20 minutos; com o seletor ventilado vira {UK_AF_F}°F ({UK_AF_C}°C) por {UK_AF_MIN} minutos — um pouco menos, porque já não precisa do tempo que o limite de temperatura acrescentava.",
    crowdingHeading: "Não lote o cesto",
    crowdingBody: "Congelados soltam água ao descongelar, e num cesto cheio essa água não tem para onde ir. Pedaços empilhados cozinham no vapor em vez de ficar crocantes, e a camada de baixo continua pálida por mais que você cozinhe. Deixe batata, nuggets e asinhas numa camada só, ou quase, e faça um pacote grande em duas rodadas — a segunda costuma levar um ou dois minutos a menos porque o cesto já está quente. As agitadas indicadas no resultado soltam os pedaços congelados juntos e levam a camada de baixo para o ar.",
    rawHeading: "Frango cru direto do congelador",
    rawBody: "Peito cru congelado, asinhas e muitos produtos de frango empanado precisam chegar a 165°F (74°C) na parte mais grossa, não só parecer dourados. Por isso recebem um corte de tempo menor e uma temperatura mais baixa, para o centro alcançar o lado de fora, e o resultado mostra um lembrete para conferir com um termômetro. Produtos já cozidos, como a maioria dos nuggets, só precisam esquentar por dentro, então mostram a temperatura alvo sem o aviso.",
    relatedFlagshipLink: "Conversor de forno para air fryer (receitas frescas)",
    relatedConvectionLink: "Conversor de convecção para air fryer",
    relatedReverseConvectionLink: "Conversor de air fryer para convecção",
    relatedChartLink: "Tabela de conversão para imprimir",
    presetsHeading: "Ajustes para congelados",
    faqHeading: "Perguntas frequentes",
    faqs: [
      {
        q: "Como converter as instruções de uma embalagem congelada para air fryer?",
        a: "Mantenha a temperatura da embalagem ou tire uns 10°F, corte o tempo em cerca de 30% e agite ou vire nos momentos que o conversor mostra. Se a temperatura da embalagem passar do que sua air fryer alcança, o conversor segura no máximo e devolve um pouco de tempo.",
      },
      {
        q: "Quanto tempo leva batata frita congelada na air fryer?",
        a: "Normalmente 12–16 minutos a 400°F para um pacote padrão que diz 425°F por 20 minutos no forno, agitando duas vezes. Batata grossa leva mais que a fina. Digite os números da sua embalagem acima para o ajuste exato.",
      },
      {
        q: "Quanto tempo leva frango cru congelado na air fryer?",
        a: "Mais do que a regra dos 30% sugere. Peito cru congelado cozinha a uma temperatura menor e com só cerca de 15% a menos do tempo da embalagem, para o centro chegar a 165°F antes de o lado de fora ressecar. Confira sempre com um termômetro.",
      },
      {
        q: "Devo descongelar antes de usar a air fryer?",
        a: "Não. As instruções da embalagem e este conversor supõem que o alimento entra congelado. Descongelar antes amolece a casquinha e muda os tempos. A exceção é uma peça grande de carne crua, que deve descongelar na geladeira.",
      },
      {
        q: "Minha embalagem dá uma temperatura para forno ventilado. Qual eu digito?",
        a: "Qualquer uma serve: só ajuste o seletor da embalagem. Se digitar a temperatura ventilada, escolha \"Forno ventilado\" e o conversor devolve a quantidade certa para aquele alimento.",
      },
      {
        q: "Preciso preaquecer a air fryer para congelados?",
        a: "Um preaquecimento curto de 3 minutos no cesto, ou 4 no tipo forno, dá um dourado mais uniforme à batata e aos empanados. Pizza congelada e itens reaquecidos vão bem sem ele.",
      },
    ],
  },
  presets,
  presetsIndex,
  tempLanding,
  chart: {
    metaTitle: 'Tabela de conversão de air fryer para imprimir grátis',
    metaDescription:
      'Uma tabela para imprimir de temperatura, tempo e multiplicadores por alimento para converter forno em air fryer — uma página, °F e °C, sem e-mail, sem pop-up.',
    metaKeywords:
      'tabela de conversão air fryer, tabela de temperatura air fryer, tabela para imprimir air fryer, tabela de forno para air fryer, tabela de tempos de cozimento air fryer, tabela de conversão air fryer para imprimir',
    backLink: 'Conversor completo',
    pageTag: 'Para imprimir · Sem e-mail · Sem pop-up',
    heading: 'Tabela de conversão de air fryer',
    lead:
      'Tabelas de temperatura, tempo e multiplicadores por alimento para converter forno em air fryer, em uma única página para imprimir. Todo site de tabela dedicado desse nicho bloqueia sua versão para imprimir atrás de um cadastro por e-mail — este não.',
    printButton: 'Imprimir esta tabela',
    tempTableHeading: 'Temperatura — Forno → Air fryer (cesto)',
    tempHeaders: { ovenF: 'Forno °F', airFryerF: 'Air fryer °F', airFryerC: 'Air fryer °C', gasMark: 'Nível de gás' },
    tempFootnote: '† Mantido no limite de 400°F do cesto — veja a nota abaixo.',
    timeTableHeading: 'Tempo — Geral / variado, cesto',
    timeHeaders: { ovenTime: 'Tempo de forno', airFryerTime: 'Tempo de air fryer' },
    foodTableHeading: 'Multiplicadores por tipo de alimento',
    foodHeaders: { food: 'Alimento', tempAdjustment: 'Ajuste de temp.', timeMultiplier: 'Multiplicador de tempo', note: 'Nota' },
    ceilingNoteTemplate:
      'Air fryers de cesto chegam a cerca de 400°F; unidades tipo forno chegam a cerca de 450°F. Se esta tabela mostrar uma temperatura que seu aparelho não alcança, use o {link} — ele limita o resultado ao teto real do seu aparelho e adiciona o tempo de volta automaticamente.',
    liveConverterLabel: 'conversor ao vivo',
    howToReadHeading: 'Como ler esta tabela',
    howToReadBody:
      'Cada tabela acima assume uma air fryer de cesto no ajuste "geral / variado", a mesma base usada pelo conversor ao vivo. Encontre sua temperatura ou tempo de forno na coluna da esquerda e leia à direita para o equivalente na air fryer, em Fahrenheit, Celsius e nível de gás do Reino Unido. A tabela por tipo de alimento ajusta essa base para doze categorias, de batata frita a gratinados, porque um único ajuste fixo não reflete o quanto esses alimentos se comportam de forma diferente numa câmara com ar forçado. Um símbolo de cruz ao lado de uma temperatura significa que a conversão passou do que uma unidade de cesto alcança — a tabela mantém no limite em vez de imprimir um ajuste que não existe no seu aparelho.',
    whyFlatRuleHeading: 'Por que a regra fixa de −25°F / −20% falha com massas úmidas e assados',
    whyFlatRuleBody:
      'A maioria das tabelas para imprimir desse nicho aplica uma única regra para todo alimento: tire 25°F, corte o tempo em um quinto. É uma boa média para legumes, mas falha para qualquer coisa com interior úmido que ainda precisa firmar antes de ficar pronta — massa de bolo, muffins, gratinados, assados densos. O ar forçado de uma air fryer de cesto doura a superfície da massa quase de imediato, e um corte fixo de 20% confunde esse douramento precoce com "pronto" bem antes do centro ter firmado, deixando uma crosta cozida sobre um centro cru.',
    workedExampleTemplate:
      'Pegue uma receita de assado de 350°F por 30 minutos. A regra fixa a converte para {FLAT_F}°F por {FLAT_MIN} minutos. O multiplicador de assados desta tabela a mantém mais perto do calor original, em {BAKED_F}°F por {BAKED_MIN} minutos — um corte de tempo menor e alguns graus a mais, porque a massa precisa desses minutos extras para terminar de firmar enquanto a superfície doura rápido. A mesma lógica vale para cada categoria: alimentos finos e com muita superfície, como batata frita e bacon, perdem perto de 30% do tempo, enquanto alimentos densos, como gratinados e assados, perdem mais perto de 15%, já que o calor ainda precisa chegar ao centro antes de estar pronto.',
    faqHeading: 'Perguntas frequentes',
    faqs: [
      {
        q: 'Preciso dar um e-mail para imprimir esta tabela?',
        a: 'Não. Todo site de tabela dedicado desse nicho bloqueia sua versão para imprimir atrás de um cadastro por e-mail ou um pop-up. Este não — as tabelas acima são a tabela inteira, e o botão de imprimir as envia direto para sua impressora.',
      },
      {
        q: 'Por que a tabela mostra 400°F tanto para um forno a 425°F quanto a 450°F?',
        a: 'Uma air fryer de cesto chega a cerca de 400°F, então assim que a conversão bruta passa disso, a tabela mantém o resultado no limite em vez de imprimir um ajuste que seu aparelho não alcança. A cruz marca quais linhas foram mantidas assim.',
      },
      {
        q: 'Esta tabela vale também para air fryers tipo forno?',
        a: 'Estas tabelas são ajustadas para unidades de cesto, que chegam a cerca de 400°F. Unidades tipo forno circulam o ar de forma mais suave e podem chegar a cerca de 450°F antes de limitar — para números exatos tipo forno, use o conversor ao vivo e troque a chave de tipo.',
      },
      {
        q: 'Por que o corte de tempo é diferente para batata frita e para um gratinado?',
        a: 'A economia de tempo depende da superfície e da densidade, não só da categoria. Batata frita e bacon recebem ar quente em quase todos os lados de uma vez, então perdem perto de 30% do tempo de forno; um gratinado denso perde mais perto de 15%.',
      },
      {
        q: 'Posso usar esta tabela para alimentos direto do congelador?',
        a: 'Não diretamente. Alimentos congelados seguem uma lógica invertida — mantenha a temperatura da embalagem e corte o tempo em cerca de 30%, já que o alimento precisa de todo o calor só para descongelar antes de poder cozinhar.',
      },
      {
        q: 'E se minha temperatura ou tempo exato de forno não estiver na tabela?',
        a: 'Esta tabela cobre valores comuns em passos de 25°F e tempos redondos para caber em uma página. Para um número exato, o conversor ao vivo aceita qualquer temperatura e tempo de forno e se ajusta a cada tecla.',
      },
    ],
    relatedHeading: 'Ferramentas relacionadas',
    relatedConverterLabel: 'Conversor de forno para air fryer',
    relatedConverterDesc:
      '— a ferramenta ao vivo, ajusta por tipo de alimento e cesto vs. tipo forno, com o limite máximo para o qual as linhas com cruz desta tabela apontam.',
    relatedGasMarkLabel: 'Conversor de °F / °C / nível de gás',
    relatedGasMarkDesc: '— uma conversão direta de temperatura para receitas do Reino Unido, da UE e dos EUA.',
    relatedReverseLabel: 'Conversor de air fryer para forno',
    relatedReverseDesc: '— o sentido inverso, para quando o forno é a melhor escolha.',
    relatedConvectionLabel: "Conversor de convecção para air fryer",
    relatedConvectionDesc: "— um corte mais suave para receitas de forno ventilado que já vêm ajustadas.",
    relatedReverseConvectionLabel: "Conversor de air fryer para convecção",
    relatedReverseConvectionDesc: "— leve um ajuste de air fryer para um forno ventilado em porções maiores.",
    relatedFrozenLabel: "Modo de congelados",
    relatedFrozenDesc: "— das instruções da embalagem para a air fryer: mantenha o calor, corte o tempo, agite na hora certa.",
  },
};

export default pt;

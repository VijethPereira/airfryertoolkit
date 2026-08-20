import type { Dictionary } from '../types';

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
      { title: 'Tabela de conversão para imprimir', desc: 'Tabela completa em °F e °C para colar na geladeira. Uma página, sem e-mail, sem anúncios.' },
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
      options: ['Peito de frango', 'Asinhas de frango', 'Filé de salmão', 'Bacon', 'Bife'],
      goLabel: 'Ir',
    },
    presetCards: [
      { title: 'Peito de frango', spec: '375°F · 16 min · virar aos 8', desc: 'Predefinição mais usada. Retire a 165°F internos.' },
      { title: 'Asinhas de frango', spec: '400°F · 22 min · virar aos 12', desc: 'Seque bem antes. Opção de temperatura em duas etapas.' },
      { title: 'Filé de salmão', spec: '390°F · 9 min · sem virar', desc: 'Pele para baixo. Inclui tabela de espessura.' },
      { title: 'Bacon', spec: '350°F · 9 min · escorrer aos 5', desc: 'Temperatura mais baixa evita que a gordura solte fumaça.' },
    ],
    allPresetsCard: { title: 'Todas as 40 predefinições →', desc: 'Carne, peixe, legumes, assados, reaquecimento.' },
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
};

export default pt;

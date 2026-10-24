import type { Dictionary } from '../../types';

const tempLanding: Dictionary['tempLanding'] = {
  backLink: 'Todas as ferramentas',
  pageTag: 'Temperatura do forno',
  answerTemplate: 'Forno a {OVEN_F}°F = {AF_F}°F ({AF_C}°C) numa air fryer de cesto, com cerca de {PCT}% menos tempo.',
  answerCappedTemplate:
    'Forno a {OVEN_F}°F = {AF_F}°F ({AF_C}°C) numa air fryer de cesto — o máximo dela, {CEILING}°F — com cerca de {PCT}% menos tempo.',
  answerOvenStyleTemplate: 'Air fryer tipo forno: {OS_F}°F ({OS_C}°C), com cerca de {OS_PCT}% menos tempo.',
  tableHeading: 'Cada alimento a {OVEN_F}°F',
  tableIntro:
    'O ajuste depende do alimento, por isso um único número nunca é a resposta completa. Cada célula mostra a temperatura da air fryer, os °C, o nível de gás e a parte do tempo de forno que você economiza.',
  tableHeaders: { food: 'Alimento', basket: 'Cesto', ovenStyle: 'Tipo forno' },
  timeLessTemplate: '{PCT}% menos tempo',
  cappedCell: 'No máximo',
  cappedFootnote:
    'No máximo: a temperatura convertida passa do que o aparelho alcança ({CEILING}°F no cesto, {OS_CEILING}°F no tipo forno), então ela fica no máximo e parte do corte de tempo é devolvida.',
  neighboursHeading: 'Temperaturas próximas',
  neighbourLinkTemplate: 'Forno a {OVEN_F}°F na air fryer',
  relatedFlagshipLink: 'Conversor de forno para air fryer (qualquer temperatura)',
  relatedChartLink: 'Tabela de conversão para imprimir',
  relatedFrozenLink: 'Modo de congelados (instruções da embalagem)',
  faqHeading: 'Perguntas frequentes',
  pages: {
    350: {
      metaTitle: '350°F (175°C) do forno para a air fryer: temperatura e tempo',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) no forno são {AF_F}°F ({AF_C}°C) numa air fryer de cesto, com cerca de {PCT}% menos tempo. Tabela por alimento para bolos, gratinados e frango, e conversor ao vivo.',
      metaKeywords: '350 graus air fryer, 180 graus air fryer, 350f para c air fryer, forno 180 graus para air fryer',
      heading: 'Forno a {OVEN_F}°F ({OVEN_C}°C) na air fryer',
      subDesc:
        'A temperatura mais comum em receitas de bolo e de forno. O conversor já está em {OVEN_F}°F — mude o tempo e o alimento para ter o ajuste exato.',
      recipesHeading: 'Que receitas usam 350°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, nível de gás {OVEN_GAS}) é o padrão para tudo o que precisa firmar no meio antes de escurecer por fora: muffins, bolos rápidos, brownies, biscoitos, cheesecake, bolo de carne, massa gratinada e quase todos os pratos de forno. Também é onde as receitas antigas param quando quem escreveu não tinha certeza, por isso muitas receitas de frango e de porco pedem {OVEN_F}°F por uma hora quando dourariam melhor mais quentes. As receitas desta temperatura são as que mais sofrem quando a air fryer é tratada como um forno pequeno. Uma regra fixa transforma todas em {AF_F}°F, mas bolos e gratinados recebem um corte menor: uma massa densa ou um refratário fundo precisam que o calor chegue ao centro, e o número mais suave impede que a casca se forme primeiro.',
      failureHeading: 'O erro típico a 350°F: pronto por fora, cru por dentro',
      failureBody:
        'Nesta temperatura o problema não é queimar, e sim a velocidade na superfície. O ventilador sopra direto no topo de um muffin ou de um bolo, que doura e forma casca enquanto o meio ainda está líquido. O resultado é um topo rachado e alto sobre um centro embatumado, e pôr mais tempo só escurece mais o topo. Três coisas resolvem. Use uma forma mais rasa do que a da receita, para o centro ter menos distância a percorrer. Cubra o topo com papel-alumínio solto durante a primeira metade, prendendo as pontas por baixo da forma para o ar não levantar. E teste o meio com um palito no momento indicado, em vez de confiar na cor. Papel-manteiga e alumínio precisam ficar presos pela comida; uma folha solta pode subir até a resistência em qualquer temperatura.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Uma receita de muffins pede {OVEN_F}°F por {EX_OVEN_MIN} minutos. Bolos e massas têm um dos menores cortes da tabela, então uma air fryer de cesto faz a {EX_F}°F ({EX_C}°C) por {EX_MIN} minutos, e vale testar com um palito aos {EX_CHECK} minutos. Um aparelho tipo forno sopra menos direto sobre o topo, então precisa de {EX_OS_F}°F por {EX_OS_MIN} minutos. Asse em forminhas de silicone ou de papel dentro do cesto, cheias até a metade e não até a borda.',
      styleHeading: 'Converter 350°F em °C e nível de gás',
      styleBody:
        '{OVEN_F}°F são {OVEN_C}°C arredondando a cinco, como imprimem muitas receitas europeias, embora no Brasil e em Portugal o forno costume ser marcado em 180°C; no Reino Unido é o nível de gás {OVEN_GAS}. Na air fryer o ajuste geral é {AF_F}°F, ou {AF_C}°C — nível de gás {AF_GAS} se você for comparar com uma receita britânica. Muitas air fryers sobem de 10 em 10°C, e não de 5 em 5. Se a sua for assim, arredonde para baixo em bolos e gratinados e para cima no frango: o que é denso fica protegido de uma casca escura e o frango ganha cor. O conversor aceita °C direto se a sua receita veio assim.',
      faqs: [
        {
          q: 'Quanto é {OVEN_F}°F na air fryer?',
          a: 'Para uma receita geral, {AF_F}°F ({AF_C}°C) numa air fryer de cesto com cerca de {PCT}% menos tempo, ou {OS_F}°F num aparelho tipo forno. Bolos, gratinados, bife e peixe recebem um corte menor; a tabela acima mostra cada alimento.',
        },
        {
          q: 'Quantos graus Celsius são {OVEN_F}°F na air fryer?',
          a: '{OVEN_F}°F são {OVEN_C}°C. Convertidos para uma air fryer de cesto, viram {AF_C}°C. Se a sua air fryer só mostra °C, digite a receita em °C no conversor e ele faz os dois passos de uma vez.',
        },
        {
          q: 'Quanto o tempo diminui na air fryer a {OVEN_F}°F?',
          a: 'Cerca de {PCT}% para a maioria dos alimentos numa air fryer de cesto. Batata frita e bacon economizam mais; bolos e gratinados, menos. Na primeira vez que fizer uma receita, confira no momento que o conversor mostra em vez de esperar o fim, porque o tamanho do cesto e a potência variam.',
        },
        {
          q: 'Dá para fazer bolo na air fryer a {OVEN_F}°F?',
          a: 'Dá, mas use a temperatura convertida e não {OVEN_F}°F, com uma forma que deixe espaço nas laterais para o ar. Cubra o topo com alumínio solto se dourar antes de o palito sair limpo. Um bolo com mais de uns 5 cm de altura fica melhor no forno.',
        },
        {
          q: 'Por que não tirar só 25°F de {OVEN_F}°F?',
          a: 'Porque isso só serve para alguns alimentos. Tirar 25°F funciona para frango e receitas gerais, mas massas densas e gratinados fundos precisam que o calor chegue ao meio e recebem um corte menor — é a diferença entre um centro firme e um cru.',
        },
      ],
    },
    375: {
      metaTitle: '375°F (190°C) para air fryer: temperatura e tempo convertidos',
      metaDescription:
        'Receita de forno a {OVEN_F}°F ({OVEN_C}°C)? Use {AF_F}°F ({AF_C}°C) numa air fryer de cesto, com cerca de {PCT}% menos tempo. Tabela por alimento para sobrecoxa, costeletas, massa folhada e mais, com conversor ao vivo.',
      metaKeywords: '375 graus air fryer, 190 graus air fryer, 375f para c air fryer, forno 190 graus para air fryer',
      heading: 'Forno a {OVEN_F}°F ({OVEN_C}°C) na air fryer',
      subDesc:
        'A temperatura de pedaços de frango, costeletas e massa folhada. O conversor está em {OVEN_F}°F; mude o tempo e o alimento conforme a sua receita.',
      recipesHeading: 'Que receitas usam 375°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, nível de gás {OVEN_GAS}) é a temperatura de trabalho para o que precisa dourar e cozinhar por dentro no mesmo ritmo. Sobrecoxas e coxas de frango com osso, costeletas de porco, almôndegas, linguiças, pimentões recheados, massa folhada, pastéis assados e assadeiras de frango com legumes ficam aqui. Dá cor sem a fumaça que aparece mais acima e está perto das temperaturas em que as receitas próprias de air fryer são escritas, por isso é a mais fácil de converter. Uma receita geral cai para {AF_F}°F. O corte é o mesmo das temperaturas mais baixas, mas a comida chega ao fim num estado diferente: com esse calor um pedaço de frango fica dourado por fora muito antes de o centro estar pronto, então conferir importa mais do que o relógio.',
      failureHeading: 'O erro típico a 375°F: pele dourada, osso malpassado',
      failureBody:
        'O frango com osso é a armadilha. A pele e a ponta fina da coxa ganham cor depressa com o ar em movimento, então o pedaço parece pronto enquanto a carne junto ao osso ainda está rosada. A sobrecoxa perdoa porque continua suculenta bem acima de 165°F (74°C), e por isso muita gente a leva a 175–185°F; o peito não, e resseca logo depois de 165°F. Arrume os pedaços com a pele para cima e a parte mais grossa virada para a borda do cesto, onde o ar corre mais, e vire uma vez na metade. Com massa folhada a mesma velocidade joga contra: o topo cresce e doura antes de as camadas de baixo assarem. Coloque na grade mais baixa de um aparelho tipo forno, ou sobre um papel perfurado para o calor chegar à base.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Uma receita assa sobrecoxas de frango com osso a {OVEN_F}°F por {EX_OVEN_MIN} minutos. Numa air fryer de cesto isso vira {EX_F}°F ({EX_C}°C) por {EX_MIN} minutos; comece a conferir a mais grossa aos {EX_CHECK} minutos e continue até marcar pelo menos 165°F junto ao osso. Numa air fryer tipo forno, que funciona mais como um pequeno forno de convecção, são {EX_OS_F}°F por {EX_OS_MIN} minutos. Vire os pedaços uma vez na metade do tempo nos dois tipos.',
      styleHeading: 'Cesto ou tipo forno a 375°F',
      styleBody:
        'Aqui os dois tipos ficam a poucos graus um do outro — {AF_F}°F no cesto, {OS_F}°F no tipo forno — mas o tempo muda mais: cerca de {PCT}% menos que o forno num cesto e cerca de {OS_PCT}% menos num aparelho tipo forno. O cesto movimenta o ar mais rápido em volta de uma carga pequena e termina antes; o tipo forno espalha a comida em grades e cozinha mais como um forno com ventilador. Se o seu tiver duas grades, troque-as na metade, porque a que fica mais perto da resistência doura mais. Preaqueça {PREHEAT} minutos no cesto ou {OS_PREHEAT} no tipo forno. {OVEN_F}°F são {OVEN_C}°C, e o conversor aceita as duas unidades.',
      faqs: [
        {
          q: 'Quanto é {OVEN_F}°F na air fryer?',
          a: 'Normalmente {AF_F}°F ({AF_C}°C) numa air fryer de cesto, com cerca de {PCT}% menos tempo que a receita de forno. Uma air fryer tipo forno precisa de {OS_F}°F. Bife, peixe e bolos têm corte menor; veja a tabela para cada alimento.',
        },
        {
          q: 'Quanto é {OVEN_F}°F em °C, e o que coloco na air fryer?',
          a: '{OVEN_F}°F são {OVEN_C}°C, o número que receitas e embalagens europeias costumam trazer. Numa air fryer de cesto, coloque {AF_C}°C. Se o seu botão vai de 10 em 10°C, arredonde para cima no frango e para baixo na massa folhada.',
        },
        {
          q: 'Quanto tempo leva a sobrecoxa na air fryer a partir de uma receita a {OVEN_F}°F?',
          a: 'Não coloque {OVEN_F}°F: coloque {EX_F}°F. Sobrecoxas com osso que levam {EX_OVEN_MIN} minutos no forno precisam de uns {EX_MIN} numa air fryer de cesto. Confirme sempre com um termômetro — pelo menos 165°F junto ao osso.',
        },
        {
          q: 'Preciso preaquecer a air fryer para uma receita a {OVEN_F}°F?',
          a: 'Um preaquecimento curto — {PREHEAT} minutos no cesto, {OS_PREHEAT} no tipo forno — ajuda a massa folhada a crescer e a pele a ficar crocante. Em almôndegas e pimentões recheados quase não faz diferença; acrescente um minuto ao tempo.',
        },
        {
          q: 'Dá para fazer um jantar inteiro de assadeira a partir de uma receita a {OVEN_F}°F?',
          a: 'Dá, em levas ou nas duas grades de um aparelho tipo forno. Comece pelo frango e junte os legumes na parte final do tempo, porque legumes cortados ficam prontos antes da carne com osso no mesmo ajuste.',
        },
      ],
    },
    400: {
      metaTitle: '400°F (200°C) do forno para a air fryer, e 400°F em °C',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) no forno = {AF_F}°F ({AF_C}°C) numa air fryer de cesto, com cerca de {PCT}% menos tempo. Legumes assados, batatas e peito de frango — tabela por alimento e conversor ao vivo.',
      metaKeywords: '400 graus air fryer, 200 graus air fryer, 400f para c air fryer, forno 200 graus para air fryer',
      heading: 'Forno a {OVEN_F}°F ({OVEN_C}°C) na air fryer',
      subDesc:
        'A temperatura de assar, e a que mais aparece em °C numa embalagem europeia. O conversor começa em {OVEN_F}°F — coloque o seu tempo e o seu alimento.',
      recipesHeading: 'Que receitas usam 400°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, nível de gás {OVEN_GAS}) é o ajuste clássico de assar. As receitas usam para legumes, batata em gomos, peito de frango, linguiças, filés de salmão, grão-de-bico tostado, batata frita caseira e tudo o que termina com uma borda crocante. Uma air fryer é, no fundo, um assador, então é aqui que ela mais claramente ganha do forno: uma receita geral cai para {AF_F}°F, e a batata frita tem o maior corte de tempo da tabela, com os legumes assados logo atrás, porque têm muita superfície e pouca espessura. Repare que a conversão nunca pede ao cesto que chegue a {OVEN_F}°F. A air fryer consegue o mesmo dourado cerca de {PCT}% mais rápido num ajuste menor, o que deixa folga abaixo do máximo de {CEILING}°F que a maioria das air fryers de cesto tem.',
      failureHeading: 'O erro típico a 400°F: cozido no vapor, não assado',
      failureBody:
        'Muito calor num espaço pequeno só funciona se a umidade puder sair. Legumes cortados e batatas soltam água ao esquentar, e num cesto cheio esse vapor fica em volta da comida, então em vez de dourar ela amolece e fica pálida. É a reclamação mais comum sobre legumes na air fryer, e mais tempo não resolve. Cozinhe numa camada só, com espaços, ou em duas levas; a segunda costuma levar um ou dois minutos a menos porque o cesto já está quente. Seque bem os legumes depois de lavar, misture com uma colher de chá de óleo e não uma colher de sopa, e chacoalhe o cesto no momento de conferir para os pedaços de baixo subirem para o ar. A gordura que pinga de linguiças ou da pele do frango pode soltar fumaça nesse calor, então esvazie a gaveta entre as levas.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Uma receita assa legumes variados a {OVEN_F}°F por {EX_OVEN_MIN} minutos. Uma air fryer de cesto faz a {EX_F}°F ({EX_C}°C) em {EX_MIN} minutos, chacoalhando aos {EX_CHECK} minutos para ver a cor. Uma air fryer tipo forno precisa de {EX_OS_F}°F por {EX_OS_MIN} minutos; espalhe os legumes em duas grades em vez de empilhar numa, e troque as grades na metade.',
      styleHeading: '400°F em °C na air fryer',
      styleBody:
        'A conversão exata de {OVEN_F}°F é {OVEN_C_EXACT}°C, aqui arredondada para {OVEN_C}°C, enquanto receitas e fornos europeus e brasileiros costumam marcar 200°C. Essa pequena diferença não importa num assado. O que importa é que o ajuste da air fryer é mais baixo: {AF_C}°C no cesto, {OS_C}°C no tipo forno. Se a sua air fryer só sobe de 10 em 10°C, escolha o passo mais baixo para batatas e legumes, que douram bem de qualquer jeito, e o mais alto para a pele do frango. Digitando a receita em °C no conversor, você recebe os dois números de uma vez.',
      faqs: [
        {
          q: 'Quanto é {OVEN_F}°F na air fryer?',
          a: 'Cerca de {AF_F}°F ({AF_C}°C) numa air fryer de cesto, com cerca de {PCT}% menos tempo. Num aparelho tipo forno, {OS_F}°F. Batata frita e bacon economizam mais tempo; bolos e gratinados recebem o menor corte.',
        },
        {
          q: '{OVEN_F}°F em °C: o que coloco na air fryer?',
          a: 'A temperatura da receita é {OVEN_C}°C, muitas vezes impressa como 200°C. Coloque uma air fryer de cesto em {AF_C}°C ou uma tipo forno em {OS_C}°C, e corte o tempo em cerca de {PCT}%.',
        },
        {
          q: 'Minha air fryer chega a {OVEN_F}°F?',
          a: 'A maioria das de cesto chega a {CEILING}°F e as tipo forno a {OS_CEILING}°F, então sim, mas raramente é preciso. Uma receita de forno a {OVEN_F}°F vira um ajuste menor porque a air fryer doura mais rápido; use {OVEN_F}°F só quando uma receita própria de air fryer pedir.',
        },
        {
          q: 'Quanto tempo leva batata assada na air fryer a partir de uma receita a {OVEN_F}°F?',
          a: 'Mais ou menos um quarto a menos que no forno para batatas cortadas e outros legumes, a {AF_F}°F. Pedaços ficam prontos antes de batatinhas inteiras. Chacoalhe duas vezes e guie-se pela cor e por uma faca no pedaço mais grosso.',
        },
        {
          q: 'Por que meus legumes ficam moles na air fryer a {AF_F}°F?',
          a: 'Quase sempre por encher demais o cesto. O vapor dos legumes não consegue sair e eles cozinham nele. Use uma camada só, seque bem e use menos óleo; aumentar a temperatura não salva um cesto cheio.',
        },
      ],
    },
    425: {
      metaTitle: '425°F (220°C) para air fryer: ajuste, tempo e limite máximo',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) no forno = {AF_F}°F ({AF_C}°C) numa air fryer de cesto, bem no máximo dela. Veja quais alimentos ficam no limite, quanto tempo é devolvido, e converta ao vivo.',
      metaKeywords: '425 graus air fryer, 220 graus air fryer, 425f para c air fryer, forno 220 graus para air fryer',
      heading: 'Forno a {OVEN_F}°F ({OVEN_C}°C) na air fryer',
      subDesc:
        'A temperatura da crocância, e a primeira em que uma air fryer de cesto bate no teto. O conversor está em {OVEN_F}°F; escolha o alimento para ver se ele fica no máximo.',
      recipesHeading: 'Que receitas usam 425°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, nível de gás {OVEN_GAS}) é para onde vão as receitas que querem crocância: asinhas, batatas assadas com borda quebradiça, salmão com o topo firme, nhoque na assadeira, croutons e brócolis com as pontas tostadas. Batata frita e nuggets congelados também costumam pedir isso, mas seguem outras regras, então use o modo de congelados para eles. No forno é preciso esse calor todo para tirar rápido a umidade da superfície. A air fryer chega lá antes, então uma receita geral vira {AF_F}°F — exatamente o teto de {CEILING}°F de uma air fryer de cesto típica. Tudo o que tem o corte normal cai no teto e converte como sempre, mas bife, peixe, bolos e gratinados recebem um corte menor, e a temperatura convertida deles passa do que o cesto alcança. A tabela marca essas linhas.',
      failureHeading: 'O erro típico a 425°F: o teto',
      failureBody:
        'A maioria dos conversores subtrai e imprime o resultado, mesmo quando é uma temperatura que a sua air fryer não alcança. A {OVEN_F}°F isso acontece com os alimentos de corte suave: a conta pede mais de {CEILING}°F, o cesto entrega {CEILING}°F, e a comida sai malpassada porque o tempo foi cortado como se esse calor existisse. Este conversor fixa a temperatura no teto e devolve parte do tempo, então as linhas no máximo economizam menos tempo que as outras. O outro risco nesse calor é a fumaça. A gordura das asinhas e da pele do salmão pinga numa gaveta muito quente: use um óleo com ponto de fumaça alto, acrescente marinadas com açúcar ou mel só nos últimos minutos e esvazie a gaveta entre as levas.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Uma receita assa filés de salmão a {OVEN_F}°F por {EX_OVEN_MIN} minutos. O peixe recebe um corte menor que a maioria dos alimentos, então a temperatura convertida passa do limite do cesto e fica em {EX_F}°F ({EX_C}°C), com o tempo reduzido só para {EX_MIN} minutos. Confira aos {EX_CHECK} minutos: o salmão está pronto a 145°F (63°C) na parte mais grossa, ou quando lasca. Uma air fryer tipo forno tem um teto mais alto, então trabalha nos {EX_OS_F}°F completos por {EX_OS_MIN} minutos.',
      styleHeading: 'Por que o tipo forno é diferente a 425°F',
      styleBody:
        'Uma air fryer tipo forno costuma chegar a {OS_CEILING}°F, então a {OVEN_F}°F nada fica no máximo: uma receita geral vai a {OS_F}°F com cerca de {OS_PCT}% menos tempo, e os alimentos de corte suave simplesmente ficam mais quentes. As linhas no máximo só aparecem na coluna do cesto, então confira qual tipo você tem antes de confiar em qualquer tabela. O conversor usa {CEILING}°F para as de cesto e {OS_CEILING}°F para as tipo forno, os limites comuns; se o botão da sua para antes, cozinhe no máximo dela e dê um pouco mais de tempo. Em °C a receita é {OVEN_C}°C e uma air fryer de cesto fica em {AF_C}°C.',
      faqs: [
        {
          q: 'Quanto é {OVEN_F}°F na air fryer?',
          a: '{AF_F}°F ({AF_C}°C) numa air fryer de cesto para a maioria dos alimentos — o máximo do cesto — com cerca de {PCT}% menos tempo. Um aparelho tipo forno usa {OS_F}°F. Bife, peixe, bolos e gratinados ficam no máximo no cesto e mantêm mais do tempo.',
        },
        {
          q: 'Quantos graus Celsius são {OVEN_F}°F?',
          a: '{OVEN_F}°F são {OVEN_C}°C, ou nível de gás {OVEN_GAS}. Uma air fryer de cesto não chega tão alto, então coloque {AF_C}°C e use o tempo convertido.',
        },
        {
          q: 'Minha air fryer só vai até {CEILING}°F. Ainda posso fazer uma receita a {OVEN_F}°F?',
          a: 'Pode. Para a maioria dos alimentos o ajuste convertido já é {CEILING}°F. Para os que precisariam de mais, cozinhe a {CEILING}°F e dê um pouco mais de tempo; a tabela mostra quanto menos tempo cada alimento economiza quando fica no máximo.',
        },
        {
          q: 'Quanto tempo levam as asinhas na air fryer a partir de uma receita a {OVEN_F}°F?',
          a: 'A {AF_F}°F as asinhas economizam cerca de um quinto do tempo de forno. Seque bem, deixe espaço entre elas, chacoalhe na metade e cozinhe até a pele ficar crocante e a carne chegar a pelo menos 165°F (74°C).',
        },
        {
          q: 'Por que minha air fryer solta fumaça em temperaturas altas?',
          a: 'Gordura e marinadas com açúcar pingam na gaveta quente e queimam. Use um óleo com ponto de fumaça alto, acrescente as caldas grudentas no fim e esvazie ou limpe a gaveta entre as levas.',
        },
      ],
    },
    450: {
      metaTitle: '450°F (230°C) para air fryer: o que colocar quando o cesto chega ao máximo',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) passa do limite de {CEILING}°F de uma air fryer de cesto. Coloque {AF_F}°F e economize cerca de {PCT}% do tempo, não o corte de sempre — tabela por alimento e conversor ao vivo.',
      metaKeywords: '450 graus air fryer, 230 graus air fryer, 450f para c air fryer, forno 230 graus para air fryer',
      heading: 'Forno a {OVEN_F}°F ({OVEN_C}°C) na air fryer',
      subDesc:
        'Mais quente do que uma air fryer de cesto vai. O conversor começa em {OVEN_F}°F e mostra o ajuste no máximo com o tempo devolvido, algo que quase nenhuma tabela traz.',
      recipesHeading: 'Que receitas usam 450°F',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, nível de gás {OVEN_GAS}) é o topo da cozinha de casa: pizza na pedra, pães achatados, tomates e pimentões tostados, batatas amassadas, batatas hasselback, aspargos assados rápido, e bife ou costeletas selados no fim de uma selagem invertida. As receitas pedem isso quando o lado de fora precisa ganhar cor antes de o de dentro passar do ponto. Uma regra fixa tira 25°F e para aí, mas o resultado não é um ajuste que uma air fryer de cesto tenha. Todos os alimentos da tabela ficam no máximo do cesto, {CEILING}°F, então a coluna do cesto mostra a mesma temperatura em todas as linhas e só o tempo muda. Essa é a resposta honesta: uma air fryer de cesto não faz {OVEN_F}°F, e o tempo precisa compensar a diferença.',
      failureHeading: 'O erro típico a 450°F: topo queimado, tempo errado',
      failureBody:
        'Duas coisas dão errado. A primeira é o tempo. Uma tabela que imprime uma temperatura de cesto impossível também corta o tempo como se esse calor existisse, e a comida sai pálida e malpassada. Como aqui a temperatura fica em {CEILING}°F, este conversor devolve parte do corte: uma receita geral economiza cerca de {PCT}% do tempo de forno e não o de sempre. A segunda é a superfície. No máximo, a resistência trabalha a toda a poucos centímetros da comida, então o que é alto queima em cima, queijo e farinha de rosca queimam antes de a base ficar crocante, e o papel que não está preso pode tocar a resistência. Faça pizza e pães achatados finos, coloque o queijo nos minutos finais se dourar cedo, e corte o papel no tamanho do fundo do cesto.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Uma receita de pizza pede {OVEN_F}°F por {EX_OVEN_MIN} minutos. Uma air fryer de cesto fica em {EX_F}°F ({EX_C}°C), então leva {EX_MIN} minutos; olhe a base aos {EX_CHECK} minutos. Uma air fryer tipo forno pode ir a {EX_OS_F}°F, abaixo do próprio teto, e termina em {EX_OS_MIN} minutos. Aqui o cesto é o mais lento dos dois porque é o mais frio, o contrário do que acontece em temperaturas mais baixas.',
      styleHeading: '450°F numa air fryer tipo forno',
      styleBody:
        'As air fryers tipo forno costumam chegar a {OS_CEILING}°F, então nelas {OVEN_F}°F converte normalmente: {OS_F}°F ({OS_C}°C) com cerca de {OS_PCT}% menos tempo para uma receita geral. Se você tem os dois tipos, ou está escolhendo, é nesta temperatura que a diferença aparece. Para pizza, pães achatados e tudo o que você quer tostado, o tipo forno é a ferramenta melhor. Uma air fryer de cesto continua fazendo boa pizza e boas batatas; só precisa dos minutos a mais que o conversor acrescenta. Em °C a receita diz {OVEN_C}°C, e o ajuste do cesto é {AF_C}°C.',
      faqs: [
        {
          q: 'Quanto é {OVEN_F}°F na air fryer?',
          a: 'Numa air fryer de cesto, {AF_F}°F ({AF_C}°C) — o máximo dela — com cerca de {PCT}% menos tempo. Numa tipo forno, {OS_F}°F com cerca de {OS_PCT}% menos tempo. Todos os alimentos ficam no máximo num cesto.',
        },
        {
          q: 'Quantos graus Celsius são {OVEN_F}°F na air fryer?',
          a: '{OVEN_F}°F são {OVEN_C}°C, ou nível de gás {OVEN_GAS}. Uma air fryer de cesto para em {AF_C}°C, então coloque isso e use o tempo convertido.',
        },
        {
          q: 'Por que não tirar 25°F e colocar o resultado?',
          a: 'Porque uma air fryer de cesto não chega lá. O botão para em {CEILING}°F, então a comida cozinha mais fria do que a tabela supunha enquanto o tempo foi cortado inteiro. Coloque {AF_F}°F e use o tempo mais longo que o conversor dá.',
        },
        {
          q: 'Dá para fazer pizza na air fryer a partir de uma receita a {OVEN_F}°F?',
          a: 'Dá. Use uma pizza que caiba deitada, coloque {EX_F}°F numa air fryer de cesto e, para uma receita de {EX_OVEN_MIN} minutos, olhe a base aos {EX_CHECK} minutos. Coloque o queijo no meio do tempo se o topo dourar antes de a massa ficar crocante.',
        },
        {
          q: 'É seguro usar a air fryer na temperatura máxima?',
          a: 'É, ela foi feita para isso. Deixe-a numa superfície resistente ao calor com espaço atrás da saída de ar, nunca cubra o cesto inteiro com alumínio ou papel, e esvazie a gordura da gaveta para não soltar fumaça.',
        },
      ],
    },
  },
};

export default tempLanding;

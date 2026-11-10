import type { CTempLandingC } from '../../../lib/temp-landings';

const cTempLanding: {
  backLink: string;
  pageTag: string;
  answerTemplate: string;
  answerCappedTemplate: string;
  answerFanTemplate: string;
  answerFanCappedTemplate: string;
  answerOvenStyleTemplate: string;
  tableHeading: string;
  tableIntro: string;
  tableHeaders: { food: string; conventional: string; fan: string; basket: string; ovenStyle: string };
  timeLessTemplate: string;
  cappedCell: string;
  cappedFootnote: string;
  neighboursHeading: string;
  neighbourLinkTemplate: string;
  relatedFlagshipLink: string;
  relatedChartLink: string;
  relatedFrozenLink: string;
  relatedConvectionLink: string;
  relatedNearestFLink: string;
  faqHeading: string;
  pages: Record<CTempLandingC, {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    heading: string;
    subDesc: string;
    recipesHeading: string;
    recipesBody: string;
    failureHeading: string;
    failureBody: string;
    workedExampleHeading: string;
    workedExampleTemplate: string;
    fanWorkedExampleHeading: string;
    fanWorkedExampleTemplate: string;
    styleHeading: string;
    styleBody: string;
    faqs: { q: string; a: string }[];
  }>;
} = {
  backLink: 'Todas as ferramentas',
  pageTag: 'Temperatura do forno',
  answerTemplate: '{OVEN_C}°C forno = {AF_C}°C ({AF_F}°F) na air fryer tipo cesto, cerca de {PCT}% menos tempo.',
  answerCappedTemplate: '{OVEN_C}°C forno = {AF_C}°C ({AF_F}°F) na air fryer tipo cesto — seu máximo de {CEILING}°F — cerca de {PCT}% menos tempo.',
  answerFanTemplate: 'Ventilador {FAN_C}°C forno = {FAN_AF_C}°C ({FAN_AF_F}°F) na air fryer tipo cesto, cerca de {FAN_PCT}% menos tempo.',
  answerFanCappedTemplate: 'Ventilador {FAN_C}°C forno = {FAN_AF_C}°C ({FAN_AF_F}°F) na air fryer tipo cesto — seu máximo de {CEILING}°F — cerca de {FAN_PCT}% menos tempo.',
  answerOvenStyleTemplate: 'Air fryer tipo forno: {OS_C}°C ({OS_F}°F), cerca de {OS_PCT}% menos tempo.',
  tableHeading: 'Cada alimento a {OVEN_C}°C (convencional) / {FAN_C}°C ventilador',
  tableIntro: 'Receitas UK/UE mostram três valores: °C convencional, °C ventilador e marca de gás. Cada coluna dá a temperatura da air fryer (°C/°F/marca de gás) e a fatia do tempo de forno que economiza.',
  tableHeaders: { food: 'Alimento', conventional: 'Convencional °C', fan: 'Ventilador °C', basket: 'Cesto', ovenStyle: 'Tipo forno' },
  timeLessTemplate: '{PCT}% menos tempo',
  cappedCell: 'Limitado',
  cappedFootnote: 'Limitado: a temperatura convertida excede o que o aparelho atinge ({CEILING}°F cesto, {OS_CEILING}°F tipo forno), então fica no máximo e parte do ganho de tempo é devolvida.',
  neighboursHeading: 'Temperaturas próximas',
  neighbourLinkTemplate: '{OVEN_C}°C forno para air fryer',
  relatedFlagshipLink: 'Conversor forno para air fryer (qualquer temperatura)',
  relatedChartLink: 'Tabela de conversão imprimível',
  relatedFrozenLink: 'Modo alimentos congelados (instruções da embalagem)',
  relatedConvectionLink: 'Forno de convecção para air fryer',
  relatedNearestFLink: '{F}°F forno para air fryer',
  faqHeading: 'Perguntas frequentes',
  widgetHeading: 'Converta uma receita de forno para sua air fryer',
  widgetNote: 'Alterne entre entradas convencional, ventilador e marca de gás. O conversor usa o motor principal para convencional, o de convecção para ventilador, e mapeia marca de gás para °C convencional.',
  pages: {
    160: {
      metaTitle: '160°C Forno para Air Fryer — Temperatura e Tempo',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, marca de gás {OVEN_MARK}) no forno são {AF_C}°C ({AF_F}°F) na air fryer cesto com cerca de {PCT}% menos tempo. Tabela por alimento para bolos, cremes e cozimentos lentos, com conversor ao vivo.',
      metaKeywords: '160c air fryer, 160c forno air fryer, 160 celsius air fryer, marca de gás 3 air fryer',
      heading: '{OVEN_C}°C forno para air fryer',
      subDesc: 'Temperatura suave para cremes, merengues e pratos de cozimento lento. O conversor abaixo já está em {OVEN_C}°C convencional — mude para ventilador ou marca de gás se sua receita usar esses.',
      recipesHeading: 'Quais receitas usam 160°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, marca de gás {OVEN_MARK}) é o calor baixo para o que deve firmar devagar sem dourar: cremes assados, cheesecakes, merengues, terrinas, tomates assados lento. Também é a temperatura para reaquecer sobras delicadas no forno. Receita geral converte a {AF_C}°C na air fryer cesto. O corte é menor que em temperaturas mais altas porque esses alimentos precisam do calor chegando ao centro suavemente.',
      failureHeading: 'A falha a 160°C: centro não firmado, topo dourado',
      failureBody: 'Nesta temperatura o risco não é queimar — é que o ar em movimento doura o topo antes do centro firmar. Cheesecake ou creme racha e aboba enquanto o meio segue líquido. Use banho-maria se a receita pedir, cubra levemente com papel alumínio e teste o centro no momento de controle com palito ou termômetro. Na air fryer cesto o ventilador fica mais perto do alimento, então a cobertura é essencial.',
      workedExampleHeading: 'Exemplo resolvido (convencional)',
      workedExampleTemplate: 'Receita de cheesecake diz {OVEN_C}°C por {EX_OVEN_MIN} minutos. Cremes assados levam corte pequeno, então air fryer cesto faz a {EX_C}°C ({EX_F}°F) por {EX_MIN} minutos; teste o centro a {EX_CHECK} minutos. Air fryer tipo forno sopra menos direto no topo, então usa {EX_OS_C}°C ({EX_OS_F}°F) por {EX_OS_MIN} minutos. Asse em forma desmontável sobre a placa crocante, coberta com alumínio.',
      fanWorkedExampleHeading: 'Exemplo resolvido (ventilador)',
      fanWorkedExampleTemplate: 'Se a receita dá {FAN_C}°C ventilador, o mesmo cheesecake converte a {EX_FAN_C}°C ({EX_FAN_F}°F) na air fryer cesto por {EX_FAN_MIN} minutos, controle a {EX_FAN_CHECK} minutos. Air fryer tipo forno usa {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) por {EX_FAN_OS_MIN} minutos. A entrada ventilador passa pelo motor de convecção, que aplica corte mais suave pois a receita já está ajustada ao ventilador.',
      styleHeading: 'Por que a receita imprime três temperaturas',
      styleBody: 'Receitas UK/UE costumam escrever "160°C / 140°C ventilador / marca de gás 3". O valor convencional é para forno sem ventilador; o de ventilador é ~20°C mais baixo porque o ventilador move calor mais rápido. Marca de gás 3 é o botão UK (~160°C). Escolha o que sua receita usa: convencional vai pelo motor principal, ventilador pelo de convecção, marca de gás mapeia ao °C convencional. O widget conversor nesta página permite alternar. Para embalagens de congelados (que dão um tempo para convencional e ventilador), use o modo congelados — mantém a temperatura e corta ~30% do tempo.',
      faqs: [
        { q: 'O que é 160°C numa air fryer?', a: 'Para receita geral, {AF_C}°C ({AF_F}°F) na air fryer cesto com cerca de {PCT}% menos tempo, ou {OS_C}°C no tipo forno. Cremes e cozimentos lentos levam corte menor; veja a tabela.' },
        { q: 'Minha receita diz 140°C ventilador — é o mesmo que 160°C convencional?', a: 'Sim, convenção UK: ventilador = convencional − 20°C. Use a entrada ventilador nesta página (ou o conversor de convecção) para receita de forno ventilado; aplica corte mais suave pois a receita já está ajustada ao ventilador.' },
        { q: 'Qual marca de gás é 160°C?', a: 'Marca de gás 3. O botão UK marca 160°C como gás 3.' },
        { q: 'Posso usar isso para embalagem de congelados que diz 160°C?', a: 'Não — embalagens de congelados seguem outras regras (mantêm temperatura, cortam ~30% tempo). Use o modo congelados neste site; ele lida corretamente com temperaturas convencional e ventilador de embalagem.' },
        { q: 'Por que a coluna ventilador dá resposta diferente da convencional?', a: 'Receita de forno ventilado já está 20°C abaixo do equivalente convencional. O motor de convecção aplica corte restante menor (0–15°F, 5–10% tempo) porque o ventilador já fez parte do trabalho. O motor principal aplica corte completo (20–25°F, 20–30% tempo).' },
      ],
    },
    180: {
      metaTitle: '180°C Forno para Air Fryer — Temperatura e Tempo',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, marca de gás {OVEN_MARK}) no forno são {AF_C}°C ({AF_F}°F) na air fryer cesto com cerca de {PCT}% menos tempo. Tabela por alimento para bolos, pães, frango e peixe, com conversor ao vivo.',
      metaKeywords: '180c air fryer, 180c forno air fryer, 180 celsius air fryer, 180c ventilador air fryer, marca de gás 4 air fryer',
      heading: '{OVEN_C}°C forno para air fryer',
      subDesc: 'A temperatura mais comum de assar em receitas UK/UE. O conversor abaixo já está em {OVEN_C}°C convencional — mude para ventilador ou marca de gás se sua receita usar esses.',
      recipesHeading: 'Quais receitas usam 180°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, marca de gás {OVEN_MARK}) é o padrão para bolos, pães rápidos, brownies, cookies, frango assado, filés de peixe e assados em bandeja. É a temperatura de fallback quando o autor não tem certeza, então muitos pratos caem aqui. Receita geral converte a {AF_C}°C na air fryer cesto. Bolos levam corte menor (massas densas precisam calor para chegar ao centro); frango e peixe levam o corte padrão.',
      failureHeading: 'A falha a 180°C: bolo abobado, centro cru',
      failureBody: 'O ventilador sopra direto no topo de bolo ou pão, que doura e forma crosta enquanto o meio segue líquido. Resultado: topo rachado e abobado sobre centro pegajoso. Três coisas resolvem: use forma menos funda que a receita pede, cubra o topo levemente com alumínio na primeira metade (enfie as bordas sob a forma para o ventilador não levantar) e teste o meio com palito no momento de controle em vez de confiar na cor. Forminhas de papel devem ficar presas pela massa; folha solta sobe à resistência.',
      workedExampleHeading: 'Exemplo resolvido (convencional)',
      workedExampleTemplate: 'Receita de bolo Victoria diz {OVEN_C}°C por {EX_OVEN_MIN} minutos. Bolos levam corte menor, então air fryer cesto faz a {EX_C}°C ({EX_F}°F) por {EX_MIN} minutos; teste com palito a {EX_CHECK} minutos. Air fryer tipo forno usa {EX_OS_C}°C ({EX_OS_F}°F) por {EX_OS_MIN} minutos. Use forma 15–18 cm sobre a placa crocante, cheia até a metade.',
      fanWorkedExampleHeading: 'Exemplo resolvido (ventilador)',
      fanWorkedExampleTemplate: 'Se a receita dá {FAN_C}°C ventilador, o mesmo bolo converte a {EX_FAN_C}°C ({EX_FAN_F}°F) na air fryer cesto por {EX_FAN_MIN} minutos, controle a {EX_FAN_CHECK} minutos. Air fryer tipo forno usa {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) por {EX_FAN_OS_MIN} minutos.',
      styleHeading: 'Convencional vs ventilador a 180°C',
      styleBody: 'Receitas UK/UE imprimem "180°C / 160°C ventilador / marca de gás 4". O convencional vai pelo motor principal (corte 20–25°F), ventilador pelo de convecção (corte 0–15°F). A diferença entre os dois resultados air fryer é o offset do ventilador: receita de forno ventilado já está a caminho, então o corte restante é menor. O widget conversor permite alternar. Para embalagens de congelados, use modo congelados — mantém temperatura, corta ~30% tempo.',
      faqs: [
        { q: 'O que é 180°C numa air fryer?', a: 'Para receita geral, {AF_C}°C ({AF_F}°F) na air fryer cesto com cerca de {PCT}% menos tempo, ou {OS_C}°C no tipo forno. Bolos e assados levam corte menor; veja a tabela.' },
        { q: 'Minha receita diz 160°C ventilador — é o mesmo que 180°C convencional?', a: 'Sim, convenção UK: ventilador = convencional − 20°C. Use a entrada ventilador nesta página para receita de forno ventilado; aplica corte mais suave.' },
        { q: 'Qual marca de gás é 180°C?', a: 'Marca de gás 4. O botão UK marca 180°C como gás 4.' },
        { q: 'Posso usar isso para embalagem de congelados que diz 180°C?', a: 'Não — embalagens de congelados seguem outras regras (mantêm temperatura, cortam ~30% tempo). Use o modo congelados.' },
        { q: 'Por que a coluna ventilador dá resposta diferente?', a: 'Receita de forno ventilado já está 20°C mais baixa. O motor de convecção aplica corte restante menor (0–15°F, 5–10% tempo) porque o ventilador já fez parte do trabalho.' },
      ],
    },
    200: {
      metaTitle: '200°C Forno para Air Fryer — Temperatura e Tempo',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, marca de gás {OVEN_MARK}) no forno são {AF_C}°C ({AF_F}°F) na air fryer cesto com cerca de {PCT}% menos tempo. Tabela por alimento para legumes assados, peito de frango, batatas fritas, com conversor ao vivo.',
      metaKeywords: '200c air fryer, 200c forno air fryer, 200 celsius air fryer, 180c ventilador air fryer, marca de gás 6 air fryer',
      heading: '{OVEN_C}°C forno para air fryer',
      subDesc: 'A temperatura clássica de assar, e a que mais aparece em °C em embalagens europeias. O conversor abaixo já está em {OVEN_C}°C convencional — mude para ventilador ou marca de gás se sua receita usar esses.',
      recipesHeading: 'Quais receitas usam 200°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, marca de gás {OVEN_MARK}) é o assado padrão para legumes, gomos de batata, peito de frango, salsichas, salmão, batatas fritas caseiras e tudo que acaba com borda crocante. Air fryer é um assador de coração, então aqui ela mais claramente ganha do forno: receita geral desce a {AF_C}°C, e batatas fritas levam o maior corte de tempo da tabela porque têm muita superfície e pouca profundidade. A conversão nunca pede ao cesto atingir {OVEN_C}°C — a air fryer consegue o mesmo dourado ~{PCT}% mais rápido a temperatura menor.',
      failureHeading: 'A falha a 200°C: vapor, não assado',
      failureBody: 'Calor alto em espaço pequeno só funciona se a umidade puder escapar. Legumes e batatas cortadas soltam água ao aquecer, e num cesto cheio esse vapor fica em volta, então em vez de dourar amolece e empalidece. Reclamação nº1 de legumes em air fryer, e mais tempo não resolve. Cozinhe em camada única com espaços, ou em duas fornadas; a segunda costuma ser 1–2 min mais rápida pois o cesto já está quente. Seque bem legumes após lavar, jogue uma colher de chá de óleo não uma colher de sopa, e agite o cesto no controle para que pedaços de baixo subam ao ar.',
      workedExampleHeading: 'Exemplo resolvido (convencional)',
      workedExampleTemplate: 'Receita assa legumes mistos a {OVEN_C}°C por {EX_OVEN_MIN} minutos. Air fryer cesto faz a {EX_C}°C ({EX_F}°F) em {EX_MIN} minutos, com agitação a {EX_CHECK} minutos para ver a cor. Air fryer tipo forno usa {EX_OS_C}°C ({EX_OS_F}°F) por {EX_OS_MIN} minutos; espalhe legumes em duas grades e troque na metade.',
      fanWorkedExampleHeading: 'Exemplo resolvido (ventilador)',
      fanWorkedExampleTemplate: 'Se a receita dá {FAN_C}°C ventilador, os mesmos legumes convertem a {EX_FAN_C}°C ({EX_FAN_F}°F) na air fryer cesto por {EX_FAN_MIN} minutos, agitação a {EX_FAN_CHECK} minutos. Air fryer tipo forno usa {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) por {EX_FAN_OS_MIN} minutos.',
      styleHeading: '200°C em °F e marca de gás',
      styleBody: '{OVEN_C}°C são {OVEN_F}°F (costuma arredondar 200°C em botões europeus) e marca de gás {OVEN_MARK}. O ajuste da air fryer é {AF_C}°C no cesto, {OS_C}°C no tipo forno. Se sua air fryer só salta de 10 em 10°C, escolha o degrau inferior para legumes e o superior para pele de frango. Colocar a receita em °C no conversor dá os dois números de vez. Para embalagens de congelados, use modo congelados.',
      faqs: [
        { q: 'O que é 200°C numa air fryer?', a: 'Aproximadamente {AF_C}°C ({AF_F}°F) na air fryer cesto, com cerca de {PCT}% menos tempo. No tipo forno, {OS_C}°C. Batatas fritas e bacon economizam mais tempo; bolos levam o corte menor.' },
        { q: 'Minha receita diz 180°C ventilador — é o mesmo que 200°C convencional?', a: 'Sim, ventilador = convencional − 20°C. Use a entrada ventilador nesta página para receita de forno ventilado; aplica corte mais suave.' },
        { q: 'Qual marca de gás é 200°C?', a: 'Marca de gás 6. O botão UK marca 200°C como gás 6.' },
        { q: 'Posso usar isso para embalagem de congelados que diz 200°C?', a: 'Não — embalagens de congelados seguem outras regras (mantêm temperatura, cortam ~30% tempo). Use o modo congelados.' },
        { q: 'Por que meus legumes na air fryer ficam moles a {AF_C}°C?', a: 'Quase sempre superlotação. O vapor dos legumes não escapa. Camada única, seque bem, use menos óleo; temperatura mais alta não salva cesto cheio.' },
      ],
    },
    220: {
      metaTitle: '220°C Forno para Air Fryer — Ajuste, Tempo e Limite de Temperatura',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, marca de gás {OVEN_MARK}) no forno = {AF_C}°C ({AF_F}°F) na air fryer cesto, no seu máximo. Veja quais alimentos limitam, quanto tempo devolvido, converta ao vivo.',
      metaKeywords: '220c air fryer, 220c forno air fryer, 220 celsius air fryer, 200c ventilador air fryer, marca de gás 7 air fryer',
      heading: '{OVEN_C}°C forno para air fryer',
      subDesc: 'A temperatura de crocante, e a primeira onde air fryer cesto bate no teto. O conversor abaixo já está em {OVEN_C}°C convencional — mude para ventilador ou marca de gás se sua receita usar esses.',
      recipesHeading: 'Quais receitas usam 220°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, marca de gás {OVEN_MARK}) é onde receitas vão para crocância: asinhas crocantes, batatas assadas borda nítida, salmão superfície firme, pizza, pães planos, legumes chamuscados. Batatas fritas congeladas dizem também, mas seguem outras regras — use modo congelados. No forno precisa desse calor para expulsar umidade da superfície rápido. Air fryer chega antes, então receita geral converte a {AF_C}°C — exatamente o teto de {CEILING}°F de cesto típico. Tudo com corte normal toca o teto; carne, peixe, bolos, assados levam corte menor, então sua temperatura convertida excede o que o cesto atinge. A tabela marca essas linhas.',
      failureHeading: 'A falha a 220°C: o teto',
      failureBody: 'Maioria conversores subtraem e imprimem, mesmo quando é temperatura que sua air fryer não atinge. A {OVEN_C}°C acontece para alimentos com corte menor: o cálculo pede mais de {CEILING}°F, o cesto dá {CEILING}°F, e o alimento sai mal passado pois o tempo foi cortado como se o calor existisse. Este conversor limita a temperatura ao teto e devolve parte do tempo, então linhas limitadas economizam menos que o resto. Outro risco neste calor é fumaça. Gordura de asinhas e pele de salmão pinga em gaveta bem quente, então use óleo de ponto de fumaça alto, marinadas com açúcar/mel só últimos minutos, e esvazie gaveta entre fornadas.',
      workedExampleHeading: 'Exemplo resolvido (convencional)',
      workedExampleTemplate: 'Receita assa salmão a {OVEN_C}°C por {EX_OVEN_MIN} minutos. Peixe leva corte menor, então sua temperatura convertida passa do limite do cesto e fica em {EX_C}°C ({EX_F}°F), tempo reduzido a {EX_MIN} minutos. Controle a {EX_CHECK} minutos: salmão pronto a 63°C (145°F) na parte grossa, ou quando desmancha. Air fryer tipo forno tem teto mais alto, então roda o {EX_OS_C}°C ({EX_OS_F}°F) completo por {EX_OS_MIN} minutos.',
      fanWorkedExampleHeading: 'Exemplo resolvido (ventilador)',
      fanWorkedExampleTemplate: 'Se a receita dá {FAN_C}°C ventilador, o mesmo salmão converte a {EX_FAN_C}°C ({EX_FAN_F}°F) na air fryer cesto por {EX_FAN_MIN} minutos, controle a {EX_FAN_CHECK} minutos. Air fryer tipo forno usa {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) por {EX_FAN_OS_MIN} minutos. A entrada ventilador é mais baixa, então mais linhas evitam o teto.',
      styleHeading: 'Por que air fryers tipo forno diferem a 220°C',
      styleBody: 'Air fryer tipo costuma atingir {OS_CEILING}°F, então a {OVEN_C}°C nada limita: receita geral é {OS_C}°C ({OS_F}°F) com ~{OS_PCT}% menos tempo, e alimentos de corte menor simplesmente correm mais quentes. Linhas limitadas só aparecem na coluna cesto, então veja qual tipo tem antes de confiar em qualquer tabela. Conversor usa {CEILING}°F para cestos e {OS_CEILING}°F para tipo forno. Se seu botão para mais baixo, cozinhe no máximo e dê um pouco mais de tempo. Em °C receita é {OVEN_C}°C, ajuste cesto {AF_C}°C. Para embalagens congelados, modo congelados.',
      faqs: [
        { q: 'O que é 220°C numa air fryer?', a: '{AF_C}°C ({AF_F}°F) na air fryer cesto para a maioria alimentos — o máximo do cesto — com ~{PCT}% menos tempo. No tipo forno, {OS_C}°C ({OS_F}°F) com ~{OS_PCT}% menos tempo. Carne, peixe, bolos, assados limitados no cesto guardam mais tempo.' },
        { q: 'Minha receita diz 200°C ventilador — é o mesmo que 220°C convencional?', a: 'Sim, ventilador = convencional − 20°C. A entrada ventilador é mais baixa, então mais alimentos evitam o teto.' },
        { q: 'Qual marca de gás é 220°C?', a: 'Marca de gás 7. O botão UK marca 220°C como gás 7.' },
        { q: 'Posso usar isso para embalagem de congelados que diz 220°C?', a: 'Não — embalagens de congelados seguem outras regras (mantêm temperatura, cortam ~30% tempo). Use o modo congelados.' },
        { q: 'Por que minha air fryer fuma em temperaturas altas?', a: 'Gordura e marinadas açucaradas pingam na gaveta quente e queimam. Use óleo de ponto de fumaça alto, glaces pegajosas no final, esvazie ou limpe gaveta entre fornadas.' },
      ],
    },
  },
};

export default cTempLanding;
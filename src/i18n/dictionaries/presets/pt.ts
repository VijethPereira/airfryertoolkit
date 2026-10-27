import type { Dictionary } from '../../types';

export const presets: Dictionary['presets'] = {
  backLink: 'Todas as predefinições',
  pageTag: 'Predefinição de alimento',
  answerTemplate: '{LABEL} na air fryer: {AF_F}°F / {AF_C}°C por {MIN} min',
  answerFlipSuffix: ', virar aos {FLIP} min',
  answerShakeSuffix: ', chacoalhar {SHAKES}×',
  internalTemplate: 'Pronto a {INT_F}°F ({INT_C}°C) na parte mais grossa',
  internalCrisp: 'Pronto pela cor e crocância, não pelo termômetro',
  ovenHeading: 'Equivalente no forno',
  ovenTemplate: 'Forno convencional: {OVEN_F}°F ({OVEN_C}°C, nível de gás {OVEN_MARK}) por {OVEN_MIN} min',
  fanTemplate: 'Forno com ventilação / convecção: {FAN_F}°F ({FAN_C}°C) por {FAN_MIN} min',
  ovenNote: 'Vai partir de uma receita de forno? O conversor abaixo já está com este alimento: digite a temperatura e o tempo da receita.',
  sizingHeading: 'Tempo por tamanho',
  sizingIntro: 'Mesma temperatura, tempo diferente: a espessura decide quanto o calor demora para chegar ao centro.',
  sizingHeaders: { size: 'Tamanho', airFryer: 'Air fryer', oven: 'Forno' },
  minutesTemplate: '{MIN} min',
  specTemplate: '{AF_F}°F · {MIN} min',
  specFlipSuffix: ' · virar aos {FLIP}',
  specShakeSuffix: ' · chacoalhar ×{SHAKES}',
  relatedPresetsHeading: 'Predefinições relacionadas',
  tempLandingLinkTemplate: 'Forno a {OVEN_F}°F para air fryer, todos os alimentos',
  relatedFlagshipLink: 'Conversor de forno para air fryer',
  relatedIndexLink: 'Todas as predefinições de alimentos',
  relatedChartLink: 'Tabela de conversão para imprimir',
  faqHeading: 'Perguntas frequentes',
  frozen: {
    ovenHeading: 'O que diz a embalagem',
    ovenTemplate: 'Embalagem para forno convencional: {OVEN_F}°F ({OVEN_C}°C, nível de gás {OVEN_MARK}) por {OVEN_MIN} min',
    fanTemplate: 'Embalagem para forno ventilado: {FAN_F}°F ({FAN_C}°C) por {FAN_MIN} min',
    ovenNote: 'Sua embalagem traz outros números? O conversor abaixo já está com este alimento: digite a temperatura e o tempo da embalagem.',
    sizingHeaders: { size: 'Tamanho', airFryer: 'Air fryer', oven: 'Diz a embalagem' },
    relatedFlagshipLink: 'Conversor de embalagens congeladas',
  },
  reheat: {
    ovenHeading: 'Se for reaquecer no forno',
    ovenTemplate: 'Forno convencional: {OVEN_F}°F ({OVEN_C}°C, nível de gás {OVEN_MARK}) por {OVEN_MIN} min',
    fanTemplate: 'Forno ventilado: {FAN_F}°F ({FAN_C}°C) por {FAN_MIN} min',
    ovenNote: 'As sobras já estão cozidas, então estes ajustes só aquecem e devolvem a crocância; o forno demora mais porque aquece a cavidade inteira primeiro.',
    sizingHeaders: { size: 'Porção', airFryer: 'Air fryer', oven: 'Reaquecer no forno' },
    relatedFlagshipLink: 'Conversor de forno para air fryer',
    widgetHeading: 'Vai cozinhar a partir de uma receita de forno?',
    widgetNote: 'Este conversor transforma receitas de forno em ajustes de air fryer. Ele não serve para reaquecer, por isso começa vazio; para sobras, use o ajuste acima.',
  },
  pages: {
    'chicken-breast': {
      label: 'Peito de frango',
      metaTitle: 'Peito de frango na air fryer: tempo, temperatura e ponto',
      metaDescription:
        'Peito de frango sem osso na air fryer: {AF_F}°F por {MIN} minutos, virar aos {FLIP}, pronto a {INT_F}°F. Tempos por tamanho, equivalente no forno e conversor ao vivo.',
      metaKeywords: 'peito de frango air fryer tempo, filé de frango air fryer, quanto tempo peito de frango na air fryer',
      heading: 'Peito de frango na air fryer',
      subDesc:
        'Peito sem osso e sem pele, preparado a partir do fresco. O ajuste, a virada, a temperatura interna e como evitar que resseque.',
      cardDesc: 'A predefinição mais buscada. Retire a {INT_F}°F internos.',
      sizeLabels: { small: 'Pequeno, 150 g', medium: 'Médio, 220 g', large: 'Grande, 300 g' },
      failureHeading: 'Por que o peito de frango resseca na air fryer',
      failureBody:
        'Um peito de frango tem formato de cunha: grosso numa ponta e fino na outra. No ar rápido do cesto, a ponta fina chega a {INT_F}°F vários minutos antes da grossa, e quando o centro fica seguro a ponta já está seca e fibrosa. É esse formato, e não a air fryer, que dá ao peito a fama de ficar duro. Iguale a espessura antes de cozinhar. Bata a ponta grossa sob filme plástico até o peito inteiro ter mais ou menos a mesma altura, ou corte um peito grande na horizontal em dois filés mais finos, o que também leva o tempo para a linha pequena da tabela. Depois tire assim que a parte mais grossa marcar {INT_F}°F, não depois. Cada minuto a mais espreme suco, e nenhuma marinada devolve.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Dois peitos médios, de uns 220 g cada, pincelados com óleo e temperados. Preaqueça por {PREHEAT} minutos e cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos, virando aos {FLIP} minutos para dourar dos dois lados. Um peito grande de 300 g precisa de uns {LARGE_MIN} minutos na mesma temperatura. Os mesmos peitos levariam {OVEN_MIN} minutos a {OVEN_F}°F num forno convencional, então a air fryer economiza alguns minutos e deixa o lado de fora mais dourado.',
      donenessHeading: 'Como saber se está pronto',
      donenessBody:
        'Use um termômetro na parte mais grossa, inserido de lado para a ponta ficar no centro sem atravessar a carne. {INT_F}°F ({INT_C}°C) é seguro na hora; a leitura sobe mais alguns graus enquanto descansa. Sem termômetro, corte a parte mais grossa: a carne deve estar branca de ponta a ponta, com suco claro, sem rosado nem aspecto vítreo. Deixe o frango descansar cinco minutos numa tábua antes de fatiar, ou o suco fica na tábua e não na carne.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Seque o peito com papel-toalha para a superfície dourar em vez de cozinhar no vapor, depois esfregue uma colher de chá de óleo e tempere. Uma salmoura rápida de 30 minutos em água com sal faz diferença visível na suculência. Deixe espaço entre os peitos no cesto; dois que se encostam cozinham no vapor onde se tocam. Peitos empanados usam a mesma temperatura, mas um ou dois minutos a mais para a casquinha firmar.',
      faqs: [
        {
          q: 'Quanto tempo leva o peito de frango na air fryer?',
          a: 'Uns {MIN} minutos a {AF_F}°F para um peito médio de uns 220 g, virado aos {FLIP} minutos. Os pequenos levam uns {SMALL_MIN} minutos e os grandes uns {LARGE_MIN}. Termine sempre pela temperatura, não pelo tempo.',
        },
        {
          q: 'Qual a temperatura interna do peito de frango pronto?',
          a: '{INT_F}°F ({INT_C}°C) na parte mais grossa. Tire assim que marcar isso; ela ainda sobe um pouco enquanto descansa.',
        },
        {
          q: 'Preciso virar o peito de frango na air fryer?',
          a: 'Sim, uma vez, perto da metade. O lado de baixo recebe menos ar direto e fica mais pálido; virar dá cor uniforme dos dois lados.',
        },
        {
          q: 'Posso fazer peito de frango congelado na air fryer?',
          a: 'Sim, mas ele precisa de temperatura mais baixa e mais tempo para o centro ficar seguro antes que o lado de fora resseque. Use o modo de congelados para frango congelado em vez deste ajuste para fresco.',
        },
        {
          q: 'Qual o equivalente no forno deste ajuste?',
          a: '{OVEN_F}°F por uns {OVEN_MIN} minutos no forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos no forno com ventilação.',
        },
      ],
    },
    'chicken-wings': {
      label: 'Asinhas de frango',
      metaTitle: 'Asinhas de frango na air fryer: tempo, temperatura e pele crocante',
      metaDescription:
        'Asinhas crocantes na air fryer: {AF_F}°F por {MIN} minutos, viradas aos {FLIP}. Por que a pele fica mole, tempos por tamanho e o equivalente no forno.',
      metaKeywords: 'asinha de frango air fryer tempo, asa de frango air fryer temperatura, asinha crocante air fryer',
      heading: 'Asinhas de frango na air fryer',
      subDesc:
        'Asinhas e coxinhas da asa frescas, cozidas até a pele estalar. O ajuste, a virada e por que o molho vai por último.',
      cardDesc: 'Seque antes; molho só depois de cozinhar.',
      sizeLabels: { small: 'Asinhas pequenas', medium: 'Asinhas e coxinhas normais', large: 'Asas grandes ou jumbo' },
      failureHeading: 'Por que as asinhas saem moles da air fryer',
      failureBody:
        'A pele da asinha é basicamente água e gordura. Para ficar crocante, a água tem que evaporar e a gordura tem que derreter, e as duas coisas pedem superfície seca e espaço em volta de cada pedaço. Asinhas tiradas direto da embalagem estão molhadas, então os primeiros minutos vão para cozinhá-las no vapor; um cesto lotado prende esse vapor, e a pele termina borrachuda e pálida por mais tempo que cozinhe. Molho antes de cozinhar piora, porque o açúcar queima enquanto a pele por baixo continua mole. A solução está quase toda no preparo: secar bem as asinhas, arrumar numa camada só com espaços e misturar ao molho só quando saírem. Duas levas dão asinhas melhores que uma leva apertada, e a segunda é mais rápida porque o cesto já está quente.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Meio quilo de asinhas e coxinhas da asa, secas com papel e misturadas com sal e uma colher de chá de fermento químico. Preaqueça {PREHEAT} minutos, cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos e chacoalhe ou vire aos {FLIP} minutos. Asas jumbo precisam de uns {LARGE_MIN} minutos. Misture ao molho assim que saírem do cesto. A versão no forno da mesma assadeira é {OVEN_F}°F por uns {OVEN_MIN} minutos, com muito menos crocância.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'As asinhas são seguras a {INT_F}°F ({INT_C}°C), mas ficam melhores bem acima disso: a carne escura e o tecido em volta da articulação amolecem a 175–190°F, e é por isso que uma asinha bem crocante nunca está crua. Procure pele dourada intensa, esticada e com bolhinhas, e carne que se solta do osso na articulação. Se no fim do tempo a pele ainda estiver pálida e mole, dê mais três minutos em vez de subir a temperatura.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Seque as asinhas com papel-toalha, ou deixe descobertas sobre uma grade na geladeira por algumas horas. Uma camada leve de fermento químico (não bicarbonato) aumenta o pH da pele e ajuda a formar bolhinhas. Salgue, mas sem óleo: as asinhas já têm gordura própria. Separe as asas vendidas inteiras na articulação e arrume os pedaços com a pele para cima, sem sobrepor.',
      faqs: [
        {
          q: 'Quanto tempo levam as asinhas de frango na air fryer?',
          a: 'Uns {MIN} minutos a {AF_F}°F para asinhas frescas normais, chacoalhadas ou viradas aos {FLIP} minutos. As pequenas levam uns {SMALL_MIN} minutos e as jumbo uns {LARGE_MIN}.',
        },
        {
          q: 'Com que temperatura as asinhas estão prontas?',
          a: 'São seguras a {INT_F}°F ({INT_C}°C), mas a maioria dos cozinheiros leva as asinhas mais alto, a 175–190°F, para carne macia e pele crocante.',
        },
        {
          q: 'O molho vai antes ou depois da air fryer?',
          a: 'Depois. Molho em asinha crua queima antes de a pele de baixo ficar crocante. Misture as asinhas prontas com molho quente numa tigela e sirva na hora.',
        },
        {
          q: 'Para que serve o fermento químico nas asinhas?',
          a: 'Uma camada leve deixa a pele mais alcalina, o que ajuda a dourar e formar bolhinhas. Use uma colher de chá por meio quilo e confira que é fermento químico, não bicarbonato.',
        },
        {
          q: 'Este ajuste serve para asinhas congeladas?',
          a: 'Não. Asinhas congeladas têm tempo próprio; use o modo de congelados, que mantém o calor alto e acrescenta chacoalhadas para separar pedaços que congelaram juntos.',
        },
      ],
    },
    'chicken-thighs': {
      label: 'Sobrecoxas de frango',
      metaTitle: 'Sobrecoxa de frango com osso na air fryer: tempo e temperatura',
      metaDescription:
        'Sobrecoxas com osso e pele na air fryer: {AF_F}°F por {MIN} minutos, viradas aos {FLIP}. Pele crocante, carne suculenta, tempos por tamanho e equivalente no forno.',
      metaKeywords: 'sobrecoxa air fryer tempo, sobrecoxa com osso air fryer, quanto tempo sobrecoxa na air fryer',
      heading: 'Sobrecoxas de frango na air fryer',
      subDesc:
        'Sobrecoxas com osso e pele. O ajuste, qual lado vai para baixo primeiro e por que a sobrecoxa pede temperatura interna maior que o peito.',
      cardDesc: 'Pele para baixo primeiro, pele para cima no fim.',
      sizeLabels: { small: 'Pequenas, 120–140 g', medium: 'Médias, 170–200 g', large: 'Grandes, 225 g ou mais' },
      failureHeading: 'O problema da sobrecoxa: pele borrachuda, osso rosado',
      failureBody:
        'As sobrecoxas falham de dois jeitos ao mesmo tempo. A pele de cima doura rápido, mas a gordura embaixo dela precisa de tempo para derreter, então uma sobrecoxa que parece pronta muitas vezes esconde uma camada borrachuda sob a casca. Enquanto isso, a carne junto ao osso é a última a esquentar e pode continuar rosada quando o lado de fora está perfeito. Começar com a pele para baixo resolve quase tudo. Com a pele contra o cesto, a gordura derrete devagar para a gaveta enquanto a carne cozinha por dentro; virar com a pele para cima na segunda metade deixa essa pele já fina crocante no ar direto. A sobrecoxa perdoa num ponto: a carne escura continua suculenta bem acima da temperatura segura, então alguns minutos a mais pelo osso quase não custam nada.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Quatro sobrecoxas médias com osso, de uns 180 g cada. Preaqueça {PREHEAT} minutos, coloque com a pele para baixo e cozinhe a {AF_F}°F; vire com a pele para cima aos {FLIP} minutos e termine aos {MEDIUM_MIN} minutos. Sobrecoxas grandes precisam de uns {LARGE_MIN} minutos. Numa air fryer tipo forno, o conversor dá {OS_F}°F por {OS_MIN} minutos. Um forno convencional pede {OVEN_F}°F por uns {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'Meça ao lado do osso sem encostar nele: {INT_F}°F ({INT_C}°C) é seguro, mas as sobrecoxas ficam no melhor ponto a 175–185°F, quando o tecido conjuntivo amoleceu e a carne se solta limpa do osso. O suco deve sair claro ao furar a parte mais grossa. A pele deve ficar dourada intensa e crocante até as bordas; se as bordas ainda estiverem moles, dê mais dois minutos com a pele para cima.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Corte as abas grandes de pele que caem pelos lados, porque vão queimar antes de o resto ficar crocante. Seque bem a pele e salgue; uma hora descoberta na geladeira ajuda. Não precisa de óleo no lado da pele. Se as sobrecoxas variam muito de tamanho, coloque as maiores nas bordas do cesto, onde o ar circula mais rápido.',
      faqs: [
        {
          q: 'Quanto tempo levam as sobrecoxas com osso na air fryer?',
          a: 'Uns {MIN} minutos a {AF_F}°F para sobrecoxas médias, viradas aos {FLIP} minutos. As pequenas levam uns {SMALL_MIN} minutos e as grandes uns {LARGE_MIN}.',
        },
        {
          q: 'Que temperatura interna a sobrecoxa deve atingir?',
          a: '{INT_F}°F ({INT_C}°C) é o mínimo seguro. Para sobrecoxas macias que soltam do osso, mire em 175–185°F.',
        },
        {
          q: 'Sobrecoxa vai com a pele para cima ou para baixo?',
          a: 'Comece com a pele para baixo para derreter a gordura e vire com a pele para cima na segunda metade, para a pele ficar crocante no ar direto.',
        },
        {
          q: 'Sobrecoxa sem osso leva o mesmo tempo?',
          a: 'Não, ela é mais fina e cozinha mais rápido, geralmente no tempo da linha pequena da tabela. Confira a temperatura cedo.',
        },
        {
          q: 'Qual o equivalente no forno para sobrecoxas?',
          a: '{OVEN_F}°F por uns {OVEN_MIN} minutos no forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos no forno com ventilação.',
        },
      ],
    },
    salmon: {
      label: 'Salmão',
      metaTitle: 'Salmão na air fryer: tempo, temperatura e como não passar do ponto',
      metaDescription:
        'Filé de salmão na air fryer: {AF_F}°F por {MIN} minutos, sem virar, pronto a {INT_F}°F. Tempos por espessura, sinais de ponto e o equivalente no forno.',
      metaKeywords: 'salmão air fryer tempo, salmão na air fryer temperatura, quanto tempo salmão na air fryer',
      heading: 'Salmão na air fryer',
      subDesc:
        'Filés de salmão fresco, com ou sem pele. O ajuste, o tempo pela espessura e o sinal de que passou do ponto.',
      cardDesc: 'Pele para baixo, sem virar. Tempo pela espessura.',
      sizeLabels: { thin: 'Fino, cerca de 2 cm', medium: 'Normal, cerca de 2,5 cm', thick: 'Grosso, cerca de 4 cm' },
      failureHeading: 'A parte branca quer dizer que passou do ponto',
      failureBody:
        'O salmão tem pouquíssima margem. Vai de sedoso a seco em um ou dois minutos, e a air fryer é tão rápida que esses minutos passam num instante. O sinal de alerta é a coalhada branca que aparece na superfície: é albumina, uma proteína empurrada para fora do músculo quando as fibras se contraem. Um pouco é normal; muita significa que o peixe passou do ponto. Como o salmão cozinha de fora para dentro, a única forma confiável de calcular o tempo é pela espessura, e por isso a tabela ordena os filés pela altura e não pelo peso. Um pedaço fino do rabo e um corte grosso do centro do mesmo peixe podem pedir tempos bem diferentes, então cozinhe juntos pedaços de espessura parecida, ou coloque os finos alguns minutos depois.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Dois filés de 2,5 cm com pele. Pincele a carne com óleo, tempere e coloque com a pele para baixo. Cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos sem virar; um filé fino de 2 cm precisa de uns {THIN_MIN} minutos e um grosso de 4 cm de uns {THICK_MIN}. Uma air fryer tipo forno dá {OS_F}°F por {OS_MIN} minutos. Um forno convencional pede {OVEN_F}°F por uns {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se está pronto',
      donenessBody:
        'A orientação de segurança alimentar é {INT_F}°F ({INT_C}°C) na parte mais grossa, quando a carne fica opaca e lasca fácil com o garfo. Muitos cozinheiros preferem o salmão um pouco menos passado, a 125–130°F, com o centro ainda levemente translúcido e bem úmido; é questão de gosto para peixe comprado fresco e bem manuseado. Pressione de leve o topo: o salmão pronto se separa pelas linhas naturais. Se aparecer muita albumina branca, tire na hora.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Deixe os filés fora da geladeira por dez minutos para o centro não estar gelado. Seque e pincele óleo na carne, não na pele. Filés com pele não precisam ser virados: a pele protege o lado de baixo e sai fácil depois se você não quiser. Um papel-manteiga perfurado evita que filés sem pele grudem no cesto.',
      faqs: [
        {
          q: 'Quanto tempo leva o salmão na air fryer?',
          a: 'Uns {MIN} minutos a {AF_F}°F para um filé de 2,5 cm. Pedaços finos levam uns {THIN_MIN} minutos e cortes grossos do centro uns {THICK_MIN}.',
        },
        {
          q: 'Preciso virar o salmão na air fryer?',
          a: 'Não. Cozinhe com a pele para baixo o tempo todo; virar um filé delicado costuma quebrá-lo, e o topo doura bem no ar direto.',
        },
        {
          q: 'Com que temperatura o salmão está pronto?',
          a: '{INT_F}°F ({INT_C}°C) pela orientação de segurança alimentar, quando lasca fácil. Muita gente prefere a 125–130°F, levemente translúcido no meio.',
        },
        {
          q: 'O que é a parte branca que sai do salmão?',
          a: 'É albumina, uma proteína espremida para fora conforme o peixe cozinha. Muita quantidade significa salmão passado; da próxima vez tire um ou dois minutos antes.',
        },
        {
          q: 'Qual o equivalente no forno para salmão?',
          a: '{OVEN_F}°F por uns {OVEN_MIN} minutos no forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos no forno com ventilação.',
        },
      ],
    },
    bacon: {
      label: 'Bacon',
      metaTitle: 'Bacon na air fryer: tempo, temperatura e sem fumaça',
      metaDescription:
        'Bacon na air fryer: {AF_F}°F por {MIN} minutos para fatias normais. Por que uma temperatura mais baixa evita fumaça, tempos para fino e grosso, e o forno.',
      metaKeywords: 'bacon air fryer tempo, bacon na air fryer temperatura, quanto tempo bacon na air fryer',
      heading: 'Bacon na air fryer',
      subDesc:
        'Bacon em fatias, cozido até ficar crocante. Um ajuste mais baixo que o da maioria dos alimentos, e o motivo.',
      cardDesc: 'Temperatura mais baixa evita que a gordura solte fumaça.',
      sizeLabels: { thin: 'Fatias finas', medium: 'Fatias normais', thick: 'Fatias grossas' },
      failureHeading: 'Por que o bacon solta fumaça na air fryer',
      failureBody:
        'O bacon é o único alimento em que o instinto comum com a air fryer, mais quente e mais rápido, dá errado. Enquanto cozinha, a gordura derrete e pinga na gaveta sob o cesto, e em ajustes altos essa poça esquenta a ponto de soltar fumaça e respingar. A cozinha enche de fumaça, o alarme dispara e o bacon fica com gosto acre. Por isso esta predefinição fica em {AF_F}°F e não nas temperaturas mais altas que a maioria das carnes usa: a gordura derrete de forma constante em vez de queimar, e as fatias ficam crocantes mesmo assim porque são finas. Dois hábitos completam o serviço. Arrume as fatias retas sem sobrepor, porque as partes sobrepostas ficam moles, e descarte ou limpe a gordura entre as levas.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Seis fatias normais esticadas no cesto, cortadas ao meio se forem compridas demais para ficar retas. Cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos; o bacon fino fica pronto em uns {THIN_MIN} e o grosso em uns {THICK_MIN}. Não precisa virar. Para comparar, o mesmo bacon numa assadeira em forno convencional leva {OVEN_F}°F por uns {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se está pronto',
      donenessBody:
        'O bacon é curado, então se avalia pela cor e textura, não pelo termômetro. Tire quando a gordura passar de branca para translúcida e dourada e a parte magra escurecer. Ele firma ao esfriar, então fatias que ainda dobram um pouco no cesto estarão crocantes um minuto depois no papel-toalha. Para bacon mais macio, tire um ou dois minutos antes; para quebradiço, deixe até as bordas começarem a escurecer.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Não precisa preaquecer nem usar óleo; o bacon traz a própria gordura. Use o cesto, não uma bandeja sólida, para a gordura escorrer longe das fatias. Uma fatia de pão ou um pouco de água na gaveta sob o cesto segura a gordura e reduz a fumaça. Bacon grosso pode ir numa fileira levemente sobreposta, mas separe as fatias na metade do tempo.',
      faqs: [
        {
          q: 'Quanto tempo leva o bacon na air fryer?',
          a: 'Uns {MIN} minutos a {AF_F}°F para fatias normais. O fino leva uns {THIN_MIN} minutos e o grosso uns {THICK_MIN}.',
        },
        {
          q: 'Por que minha air fryer solta fumaça com bacon?',
          a: 'A gordura pinga na gaveta e queima em temperaturas altas. Cozinhe a {AF_F}°F, esvazie a gordura entre as levas e coloque um pouco de água ou uma fatia de pão na gaveta.',
        },
        {
          q: 'Preciso virar o bacon na air fryer?',
          a: 'Não. O ar chega aos dois lados das fatias finas. Só o bacon grosso colocado sobreposto precisa ser separado na metade do tempo.',
        },
        {
          q: 'Preciso preaquecer a air fryer para o bacon?',
          a: 'Não. Começar a frio deixa a gordura derreter com mais calma, o que ajuda o bacon a cozinhar por igual.',
        },
        {
          q: 'Qual o equivalente no forno para bacon?',
          a: '{OVEN_F}°F por uns {OVEN_MIN} minutos sobre uma grade no forno convencional.',
        },
      ],
    },
    steak: {
      label: 'Bife',
      metaTitle: 'Bife na air fryer: tempo, temperatura e ponto da carne',
      metaDescription:
        'Um bife de 2,5 cm na air fryer: {AF_F}°F por {MIN} minutos, virado aos {FLIP}, mal passado a {INT_F}°F. Tempos por espessura e como fazer uma crosta.',
      metaKeywords: 'bife air fryer tempo, contrafilé air fryer, picanha na air fryer temperatura',
      heading: 'Bife na air fryer',
      subDesc:
        'Ancho, contrafilé ou bife de chorizo. O ajuste para ao ponto para mal, como a espessura muda o tempo e como dar cor ao lado de fora.',
      cardDesc: 'Seque a superfície e deixe descansar para uma crosta de verdade.',
      sizeLabels: { thin: 'Fino, cerca de 2 cm', medium: 'Normal, cerca de 2,5 cm', thick: 'Grosso, cerca de 4 cm' },
      failureHeading: 'O problema da faixa cinza',
      failureBody:
        'Uma air fryer não sela como uma frigideira de ferro. O ar quente transporta bem menos calor que o metal, então um bife úmido passa os primeiros minutos secando, e quando a superfície enfim doura o calor já avançou para dentro e deixou uma faixa grossa de carne cinza e passada sob uma crosta pálida. A solução é fazer a superfície dourar mais rápido. Seque o bife por completo, salgue com antecedência para a superfície secar ainda mais, preaqueça bem o cesto e use o ajuste mais alto do aparelho. Faça um ou dois bifes por vez com espaço em volta. O resultado não iguala uma frigideira soltando fumaça, mas chega perto, com muito menos sujeira.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Um ancho de 2,5 cm, salgado uma hora antes e seco com papel. Preaqueça a air fryer por {PREHEAT} minutos, cozinhe a {AF_F}°F e vire aos {FLIP} minutos; aos {MEDIUM_MIN} minutos ele deve marcar uns {INT_F}°F, ao ponto para mal. Um bife fino de 2 cm precisa de uns {THIN_MIN} minutos e um corte grosso de 4 cm de uns {THICK_MIN}. Deixe descansar cinco minutos antes de cortar.',
      donenessHeading: 'Ponto pela temperatura',
      donenessBody:
        'Use um termômetro de leitura instantânea pelo lado até o centro. Mal passado fica em uns 120–125°F, ao ponto para mal {INT_F}°F ({INT_C}°C), ao ponto 140°F e bem passado 155°F ou mais; a orientação do USDA para cortes inteiros de carne bovina é 145°F seguidos de três minutos de descanso. Tire o bife uns cinco graus antes do seu alvo, porque a temperatura continua subindo enquanto descansa. Cortar para conferir deixa o suco escapar.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Tire o bife da geladeira 30 minutos antes para o centro não estar frio. Salgue pelo menos 40 minutos antes, ou logo antes; qualquer momento no meio deixa a superfície molhada. Pincele um pouco de óleo resistente ao calor em vez de manteiga, que queima. Acrescente manteiga, alho ou ervas durante o descanso.',
      faqs: [
        {
          q: 'Quanto tempo leva um bife na air fryer?',
          a: 'Uns {MIN} minutos a {AF_F}°F para um bife de 2,5 cm ao ponto para mal, virado aos {FLIP} minutos. Bifes finos levam uns {THIN_MIN} minutos e grossos uns {THICK_MIN}.',
        },
        {
          q: 'Qual a temperatura do bife ao ponto para mal?',
          a: 'Cerca de {INT_F}°F ({INT_C}°C). A orientação do USDA para cortes inteiros é 145°F com três minutos de descanso, mais perto de ao ponto.',
        },
        {
          q: 'Dá para fazer crosta no bife na air fryer?',
          a: 'Uma boa crosta, se a superfície estiver totalmente seca e o cesto bem preaquecido. Não chega a igualar a selagem no ferro, mas chega perto.',
        },
        {
          q: 'Devo deixar o bife descansar depois da air fryer?',
          a: 'Sim, por uns cinco minutos. O suco volta a se espalhar pela carne e a temperatura sobe alguns graus para terminar o cozimento.',
        },
        {
          q: 'Qual o equivalente no forno para bife?',
          a: '{OVEN_F}°F por uns {OVEN_MIN} minutos no forno convencional, embora frigideira ou grelha deem uma crosta melhor.',
        },
      ],
    },
    'pork-chops': {
      label: 'Bisteca de porco',
      metaTitle: 'Bisteca de porco na air fryer: tempo, temperatura e suculenta',
      metaDescription:
        'Bisteca de porco na air fryer: {AF_F}°F por {MIN} minutos para bistecas de 2,5 cm, virada aos {FLIP}, pronta a {INT_F}°F. Tempos por espessura e forno.',
      metaKeywords: 'bisteca de porco air fryer tempo, costeleta de porco air fryer, quanto tempo bisteca na air fryer',
      heading: 'Bisteca de porco na air fryer',
      subDesc:
        'Bistecas com ou sem osso. O ajuste, a virada e a temperatura que impede que fiquem farinhentas.',
      cardDesc: 'Tire a {INT_F}°F e deixe descansar; salmoura se puder.',
      sizeLabels: { thin: 'Finas, 1 cm', medium: 'Normais, 2,5 cm', thick: 'Grossas, 4 cm' },
      failureHeading: 'Por que a bisteca fica seca e farinhenta',
      failureBody:
        'A carne de porco de hoje é magra. Com pouca gordura entre as fibras, uma bisteca não tem nada que a proteja depois que passa do ponto, e em poucos minutos fica seca, dura e farinhenta. O hábito de cozinhar porco até ficar cinza por inteiro vem de orientações antigas; hoje uma bisteca é segura a {INT_F}°F com um descanso curto, quando o centro ainda está levemente rosado e suculento. As bistecas finas são as mais difíceis na air fryer porque passam do ponto antes de o lado de fora dourar. Compre bistecas de pelo menos 2,5 cm se puder, e se só tiver finas, cozinhe no topo da faixa de tempo e confira cedo.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Duas bistecas sem osso de 2,5 cm, em salmoura por uma hora, secas e esfregadas com óleo e temperos. Preaqueça {PREHEAT} minutos, cozinhe a {AF_F}°F e vire aos {FLIP} minutos; elas devem chegar a {INT_F}°F por volta dos {MEDIUM_MIN} minutos. Bistecas finas de 1 cm precisam de uns {THIN_MIN} minutos e grossas de 4 cm de uns {THICK_MIN}. No forno convencional, as mesmas bistecas levam {OVEN_F}°F por uns {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'Meça pelo lado na parte mais grossa, longe do osso. {INT_F}°F ({INT_C}°C) seguidos de três minutos de descanso é o alvo seguro; o centro terá um rosado claro e o suco sairá limpo. Bistecas com osso cozinham um pouco mais devagar junto ao osso, então confira ali por último. Se cortar uma bisteca, a carne deve estar úmida e mal opaca, não cinza e fibrosa.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Uma salmoura simples, uma colher de sopa de sal para meio litro de água por 30–60 minutos, é o que mais melhora a suculência. Seque bem as bistecas depois. Corte a gordura da borda em dois ou três pontos para a bisteca não curvar ao cozinhar. Um tempero seco com um pouco de açúcar doura muito bem, mas fique de olho nos últimos minutos.',
      faqs: [
        {
          q: 'Quanto tempo leva a bisteca de porco na air fryer?',
          a: 'Uns {MIN} minutos a {AF_F}°F para bistecas de 2,5 cm, viradas aos {FLIP} minutos. As finas levam uns {THIN_MIN} minutos e as grossas uns {THICK_MIN}.',
        },
        {
          q: 'Que temperatura a bisteca de porco deve atingir?',
          a: '{INT_F}°F ({INT_C}°C) e depois três minutos de descanso. Um centro levemente rosado nessa temperatura é seguro e bem mais suculento.',
        },
        {
          q: 'Vale fazer salmoura na bisteca para a air fryer?',
          a: 'Se tiver 30 minutos, sim. Bistecas magras ganham muita umidade com uma salmoura curta, e perdoam mais se passarem um minuto do ponto.',
        },
        {
          q: 'Bisteca com osso ou sem osso na air fryer?',
          a: 'As duas funcionam na mesma temperatura. As com osso levam um ou dois minutos a mais e ficam um pouco mais suculentas junto ao osso.',
        },
        {
          q: 'Qual o equivalente no forno para bisteca de porco?',
          a: '{OVEN_F}°F por uns {OVEN_MIN} minutos no forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos no forno com ventilação.',
        },
      ],
    },
    shrimp: {
      label: 'Camarão',
      metaTitle: 'Camarão na air fryer: tempo e temperatura por tamanho',
      metaDescription:
        'Camarão na air fryer: {AF_F}°F por {MIN} minutos para camarão grande, chacoalhado uma vez. Tempos por tamanho, como saber o ponto e o equivalente no forno.',
      metaKeywords: 'camarão air fryer tempo, camarão na air fryer temperatura, quanto tempo camarão na air fryer',
      heading: 'Camarão na air fryer',
      subDesc:
        'Camarão cru, descascado e descongelado. O ajuste, o tempo por tamanho e a mudança de cor que diz para parar.',
      cardDesc: 'Cada minuto conta: calcule o tempo pelo tamanho.',
      sizeLabels: { small: 'Pequeno (110–130 por kg)', medium: 'Grande (70–90 por kg)', large: 'Jumbo (35–45 por kg)' },
      failureHeading: 'A janela de um minuto',
      failureBody:
        'Camarão cozinha em minutos e passa do ponto em um. O músculo dele se contrai rápido no calor, então a distância entre macio e borrachudo é muito curta, e na air fryer é fácil perder isso enquanto você prepara o molho. O tamanho é a variável principal, e é por isso que o camarão é vendido por número de peças por quilo: os pequenos podem estar prontos antes de os jumbo ficarem rosados. Cozinhe um tamanho de cada vez, ajuste o timer para o tempo mais curto da tabela e olhe os camarões em vez de esperar o fim. O outro erro comum é cozinhar camarão ainda meio congelado, o que deixa o lado de fora duro e o centro cru.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Meio quilo de camarão grande, descascado, limpo e seco, misturado com uma colher de sopa de óleo, alho e páprica. Preaqueça {PREHEAT} minutos, espalhe numa camada e cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos, chacoalhando uma vez na metade. Camarão pequeno precisa de uns {SMALL_MIN} minutos e jumbo de uns {LARGE_MIN}. Numa assadeira em forno convencional, leva {OVEN_F}°F por uns {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se está pronto',
      donenessBody:
        'Repare no formato e na cor. Camarão cru é cinza e translúcido; o cozido é rosa-alaranjado e opaco de ponta a ponta. Um camarão curvado num C aberto está pronto, enquanto um O fechado significa que passou. A referência de segurança alimentar é {INT_F}°F ({INT_C}°C), mas camarão é pequeno demais para medir com facilidade; a cor é o teste prático. Tire assim que a última mancha cinza sumir.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Descongele o camarão por completo, na geladeira durante a noite ou numa tigela com água fria por uns 20 minutos, e seque bem. Camarão descascado cozinha de forma mais uniforme que com casca e pega melhor o tempero. Use um pouco de óleo para os temperos grudarem e não lote o cesto: uma camada só cozinha por igual, um monte cozinha no vapor.',
      faqs: [
        {
          q: 'Quanto tempo leva o camarão na air fryer?',
          a: 'Uns {MIN} minutos a {AF_F}°F para camarão grande, chacoalhado uma vez. O pequeno leva uns {SMALL_MIN} minutos e o jumbo uns {LARGE_MIN}.',
        },
        {
          q: 'Como sei quando o camarão está pronto na air fryer?',
          a: 'Ele fica rosado e opaco e se curva num C aberto. Um O fechado significa que passou do ponto.',
        },
        {
          q: 'Posso fazer camarão congelado na air fryer?',
          a: 'É melhor descongelar antes. Direto do congelador, o lado de fora endurece antes de o centro cozinhar. Vinte minutos em água fria bastam.',
        },
        {
          q: 'Preciso chacoalhar o camarão na air fryer?',
          a: 'Uma vez, na metade do tempo, para os de baixo pegarem a mesma cor dos de cima.',
        },
        {
          q: 'Qual o equivalente no forno para camarão?',
          a: '{OVEN_F}°F por uns {OVEN_MIN} minutos numa assadeira em forno convencional.',
        },
      ],
    },
    'baked-potato': {
      label: 'Batata assada',
      metaTitle: 'Batata assada na air fryer: tempo, temperatura e casca crocante',
      metaDescription:
        'Batata assada inteira na air fryer: {AF_F}°F por {MIN} minutos para uma batata média, virada aos {FLIP}, pronta a {INT_F}°F por dentro. Tempos por tamanho e forno.',
      metaKeywords: 'batata assada air fryer, batata inteira na air fryer tempo, batata com casca air fryer',
      heading: 'Batata assada na air fryer',
      subDesc:
        'Batatas inteiras com casca crocante e salgada. O ajuste, o tempo por tamanho e a temperatura interna para um miolo fofo.',
      cardDesc: 'Confira com termômetro, não com garfo.',
      sizeLabels: { small: 'Pequena, 170 g', medium: 'Média, 250 g', large: 'Grande, 350 g ou mais' },
      failureHeading: 'Casca crocante, miolo duro',
      failureBody:
        'A batata é densa, e o calor avança devagar por ela. Na air fryer a casca fica crocante e escura bem antes de o centro cozinhar, então uma batata pode parecer pronta com o miolo ainda firme e ceroso. O garfo é um teste ruim, porque entra numa batata meio cozida quase tão fácil quanto numa pronta. O teste confiável é a temperatura: o amido só fica fofo quando o centro chega a cerca de {INT_F}°F. Os tempos da tabela supõem batatas de tamanho parecido cozidas juntas. Se misturar tamanhos, as pequenas ficam prontas antes; tire-as e dê às grandes os minutos a mais.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Duas batatas médias, de uns 250 g cada, lavadas, secas, esfregadas com óleo e sal grosso e furadas algumas vezes. Cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos, virando aos {FLIP} minutos. Batatas pequenas precisam de uns {SMALL_MIN} minutos e grandes de uns {LARGE_MIN}. As mesmas batatas levam {OVEN_F}°F por uns {OVEN_MIN} minutos no forno convencional, então a air fryer economiza um bom quarto de hora.',
      donenessHeading: 'Como saber se está pronta',
      donenessBody:
        'Espete um termômetro no centro: {INT_F}–210°F ({INT_C}°C) quer dizer que o amido cozinhou e o miolo vai ficar fofo. Sem termômetro, aperte a batata de leve envolvida num pano; ela deve ceder fácil de um lado a outro. A casca deve ficar seca, crocante e com algumas bolhinhas. Abra logo para o vapor sair, ou o miolo fica empapado.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Escolha batatas farinhentas, como a asterix ou as próprias para assar; batatas firmes ficam densas. Lave e seque por completo, depois esfregue um pouco de óleo e bastante sal grosso, que puxa umidade da casca. Fure cada batata algumas vezes com o garfo. Não embrulhe em papel-alumínio: o alumínio prende o vapor e deixa a casca mole.',
      faqs: [
        {
          q: 'Quanto tempo leva uma batata assada na air fryer?',
          a: 'Uns {MIN} minutos a {AF_F}°F para uma batata média de uns 250 g, virada aos {FLIP} minutos. As pequenas levam uns {SMALL_MIN} minutos e as grandes uns {LARGE_MIN}.',
        },
        {
          q: 'Com que temperatura interna a batata assada está pronta?',
          a: '{INT_F}–210°F ({INT_C}°C) no centro. Abaixo disso o miolo fica ceroso, por mais crocante que a casca pareça.',
        },
        {
          q: 'Devo embrulhar a batata em papel-alumínio na air fryer?',
          a: 'Não. O alumínio prende o vapor e deixa a casca mole. Óleo e sal grosso na casca nua dão a casca crocante que a air fryer faz tão bem.',
        },
        {
          q: 'Preciso furar a batata antes da air fryer?',
          a: 'Sim, algumas vezes com o garfo. Isso deixa o vapor sair e evita que alguma batata rache.',
        },
        {
          q: 'Qual o equivalente no forno para batata assada?',
          a: '{OVEN_F}°F por uns {OVEN_MIN} minutos no forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos no forno com ventilação.',
        },
      ],
    },
    'homemade-fries': {
      label: 'Batata frita caseira',
      metaTitle: 'Batata frita caseira na air fryer: tempo, temperatura e crocância',
      metaDescription:
        'Batata frita cortada na hora na air fryer: {AF_F}°F por {MIN} minutos, chacoalhada duas vezes. Por que amolece, como deixar de molho e tempos por espessura.',
      metaKeywords: 'batata frita caseira air fryer, batata frita fresca air fryer tempo, batata palito air fryer',
      heading: 'Batata frita caseira na air fryer',
      subDesc:
        'Batata frita cortada de batatas frescas, não congeladas. O ajuste, o molho em água e como a espessura muda o tempo.',
      cardDesc: 'Molho, secar, uma camada, duas chacoalhadas.',
      sizeLabels: { thin: 'Palito fino, 6 mm', medium: 'Normal, 1 cm', thick: 'Grossa, 1,3 cm ou mais' },
      failureHeading: 'Por que a batata fresca amolece ou queima',
      failureBody:
        'Batatas frescas são cheias de água e de amido na superfície. Coloque os palitos direto no cesto e o amido de fora doura e queima enquanto o miolo continua cru, ou a água cozinha tudo no vapor e a batata amolece se o cesto estiver cheio. A batata congelada evita os dois problemas porque a fábrica já a branqueou e secou, e é por isso que o ajuste para congelados é diferente. Em casa, deixar de molho faz o mesmo trabalho: lava o amido solto, então o lado de fora doura por igual em vez de queimar em manchas. Secar depois importa do mesmo jeito. Uma batata molhada passa os primeiros minutos no vapor, e uma batata que cozinhou no vapor nunca fica totalmente crocante.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Duas batatas médias cortadas em palitos de 1 cm, de molho em água fria por 30 minutos, bem secas e misturadas com uma colher de sopa de óleo e sal. Cozinhe numa camada a {AF_F}°F por {MEDIUM_MIN} minutos, chacoalhando o cesto duas vezes. Palitos finos precisam de uns {THIN_MIN} minutos e os grossos de uns {THICK_MIN}. A versão no forno, numa assadeira a {OVEN_F}°F, leva uns {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'Procure um dourado uniforme com as bordas um pouco mais escuras, e escute: uma batata pronta soa oca e crocante ao bater nas outras. Tire uma e quebre; o miolo deve estar macio e farinhento, não translúcido. Se o lado de fora está dourado mas o miolo ainda firme, os palitos ficaram grossos demais para o tempo, então dê mais três minutos e baixe um pouco o calor da próxima vez.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Use batatas farinhentas. Corte numa espessura uniforme para terminarem juntas; levas desiguais sempre têm pedaços finos queimados e grossos crus. Deixe de molho em água fria por pelo menos 30 minutos e seque totalmente com um pano limpo. Uma colher de sopa de óleo para cada duas batatas basta. Salgue depois de cozinhar, não antes, ou o sal puxa água.',
      faqs: [
        {
          q: 'Quanto tempo leva a batata frita caseira na air fryer?',
          a: 'Uns {MIN} minutos a {AF_F}°F para palitos normais de 1 cm, chacoalhados duas vezes. Palitos finos levam uns {THIN_MIN} minutos e os grossos uns {THICK_MIN}.',
        },
        {
          q: 'Preciso deixar a batata de molho antes da air fryer?',
          a: 'Ajuda muito. Um molho de 30 minutos em água fria tira o amido da superfície, então a batata doura por igual e fica crocante em vez de queimar em manchas.',
        },
        {
          q: 'Por que minha batata frita fica mole na air fryer?',
          a: 'Geralmente ainda estava molhada ou o cesto estava cheio demais. Seque bem e cozinhe numa camada só, em levas se precisar.',
        },
        {
          q: 'Este ajuste serve para batata frita congelada?',
          a: 'Não. A batata congelada já vem branqueada e segue outras regras; use o modo de congelados com a temperatura da embalagem.',
        },
        {
          q: 'Qual o equivalente no forno para batata frita caseira?',
          a: '{OVEN_F}°F por uns {OVEN_MIN} minutos numa assadeira em forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos no forno com ventilação.',
        },
      ],
    },
    'chicken-drumsticks': {
      label: 'Coxa de frango',
      metaTitle: 'Coxa de frango na air fryer: tempo, temperatura e carne macia',
      metaDescription:
        'Coxa de frango (drumstick) na air fryer: {AF_F}°F por {MIN} minutos, virar aos {FLIP}, segura a {INT_F}°F. Por que a coxa precisa ir além, tempos por tamanho e equivalente no forno.',
      metaKeywords: 'coxa de frango air fryer tempo, drumstick air fryer, coxa de frango na air fryer quanto tempo',
      heading: 'Coxa de frango na air fryer',
      subDesc:
        'Coxas frescas, com osso e pele. O ajuste, a virada e por que uma coxa que só está segura ainda não está pronta.',
      cardDesc: 'Segura a {INT_F}°F, macia perto de {INT_ALT_TO_F}°F.',
      sizeLabels: { small: 'Pequena, cerca de 90 g', medium: 'Média, cerca de 130 g', large: 'Grande, a partir de 170 g' },
      internalAltLine: 'Mais macia a {INT_ALT_F}–{INT_ALT_TO_F}°F ({INT_ALT_C}–{INT_ALT_TO_C}°C), medida junto ao osso',
      failureHeading: 'Segura, mas borrachuda: a armadilha da coxa',
      failureBody:
        'A coxa é o músculo que mais trabalha na ave e vem envolvida em tendões e tecido conjuntivo. A {INT_F}°F ela já é segura, mas esse tecido ainda está tenso: a carne gruda no osso, parece elástica e pode ficar levemente rosada na articulação mesmo totalmente cozida. Quem tira a coxa na temperatura do peito acha que ela ficou crua; quem continua até a pele ficar muito escura costuma encontrar a parte de fora seca. A saída é passar de propósito do número de segurança. O colágeno começa a virar gelatina por volta de {INT_ALT_F}°F, e entre esse ponto e {INT_ALT_TO_F}°F a carne se solta, fica sedosa e desliza do osso.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Seis coxas médias, cerca de 700 g no total, secas e esfregadas com óleo, alho em pó e páprica defumada. Preaqueça por {PREHEAT} minutos, coloque em uma camada com espaço entre elas e cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos, virando aos {FLIP}. Meça a mais grossa junto ao osso. As pequenas ficam prontas em cerca de {SMALL_MIN} minutos e as grandes precisam de uns {LARGE_MIN}. No forno convencional, a mesma assadeira leva {OVEN_F}°F por cerca de {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se está pronta',
      donenessBody:
        'Insira o termômetro pela parte carnuda de cima até encostar no osso e puxe um pouco para trás. {INT_F}°F ({INT_C}°C) é o limite de segurança; {INT_ALT_F}–{INT_ALT_TO_F}°F é onde a coxa fica mais saborosa. Visualmente, a pele está esticada e bem dourada, a carne recuou e mostra um pouco do osso na ponta fina, e a coxa gira com facilidade na articulação. Rosado junto ao osso na temperatura certa é pigmento, não carne crua.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Seque bem a pele e tempere com generosidade; as coxas são grossas o bastante para receber sal uma hora antes. Faça um ou dois cortes até o osso no lado mais grosso, para o calor chegar mais rápido ao centro. Arrume alternando a ponta grossa e a fina para que encaixem sem se tocar. Molho barbecue ou qualquer glaçado só entra nos últimos dois ou três minutos.',
      faqs: [
        {
          q: 'Quanto tempo leva a coxa de frango na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para coxas frescas médias, viradas aos {FLIP} minutos. As pequenas levam uns {SMALL_MIN} minutos e as grandes uns {LARGE_MIN}.',
        },
        {
          q: 'Qual temperatura interna a coxa deve atingir?',
          a: 'Ela é segura a {INT_F}°F ({INT_C}°C), mas a maioria das pessoas leva a {INT_ALT_F}–{INT_ALT_TO_F}°F, quando o tecido conjuntivo amolece e a carne se solta do osso.',
        },
        {
          q: 'Por que minha coxa está rosada perto do osso?',
          a: 'Os ossos de frangos jovens liberam um pouco de pigmento na carne ao redor. Se o termômetro marca {INT_F}°F ou mais, a cor é inofensiva.',
        },
        {
          q: 'Quando passo o molho barbecue?',
          a: 'Nos últimos dois ou três minutos. O açúcar do molho queima muito antes de as coxas ficarem prontas se for colocado no início.',
        },
        {
          q: 'Como fica a comparação com o forno?',
          a: 'O forno convencional precisa de {OVEN_F}°F por cerca de {OVEN_MIN} minutos, e o forno com ventilação {FAN_F}°F por cerca de {FAN_MIN}. A air fryer deixa a pele bem mais crocante.',
        },
      ],
    },
    'chicken-tenders': {
      label: 'Tiras de frango',
      metaTitle: 'Tiras de frango na air fryer: tempo e temperatura (frescas)',
      metaDescription:
        'Tiras de frango e filezinhos frescos na air fryer: {AF_F}°F por {MIN} minutos, virar aos {FLIP}, prontas a {INT_F}°F. Ao natural ou empanadas, tempos por tamanho.',
      metaKeywords: 'tiras de frango air fryer, filezinho de frango air fryer, iscas de frango air fryer tempo',
      heading: 'Tiras de frango na air fryer',
      subDesc:
        'Filezinhos (sassami) frescos ou tiras cortadas do peito, ao natural ou empanadas em casa. O ajuste curto, a virada e como evitar que ressequem.',
      cardDesc: 'Pequenas e rápidas: ponha o timer no mínimo.',
      sizeLabels: { small: 'Tiras finas, cerca de 30 g', medium: 'Filezinhos inteiros, cerca de 60 g', large: 'Tiras grossas, a partir de 90 g' },
      failureHeading: 'Pronta num minuto, seca no seguinte',
      failureBody:
        'Uma tira de frango é um pedaço estreito, quase sem gordura e com muita superfície. O ar quente chega a todos os lados ao mesmo tempo, então o pedaço inteiro cozinha em poucos minutos, e não existe um centro grosso que amorteça um erro. Deixe um cesto de tiras dois minutos a mais enquanto prepara o molho e elas encolhem, endurecem e ficam fibrosas. O tendão branco que corre pelo filezinho piora tudo, porque se contrai no calor e entorta a tira. Trate as tiras como um preparo rápido, não como um assado: tire o tendão, corte tudo na mesma espessura, comece a conferir um minuto antes do tempo e retire assim que a mais grossa estiver pronta. As empanadas protegem um pouco a carne, mas precisam de um leve spray de óleo para a farinha dourar antes de o interior passar do ponto.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        '450 g de filezinhos inteiros, sem tendão, passados no ovo e no panko e borrifados com um pouco de óleo. Preaqueça por {PREHEAT} minutos, arrume-os deitados sem sobrepor e cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos, virando aos {FLIP}. Tiras finas cortadas do peito ficam prontas em cerca de {SMALL_MIN} minutos e as grossas em uns {LARGE_MIN}. Numa grade no forno convencional, a mesma porção leva {OVEN_F}°F por cerca de {OVEN_MIN} minutos e sai mais pálida.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'Meça a tira mais grossa pela ponta, empurrando a sonda no sentido do comprimento até o centro: a {INT_F}°F ({INT_C}°C) está pronta. As tiras são finas demais para guardar muito calor residual, então quase não sobem depois de sair. Sem termômetro, parta a mais grossa ao meio; ela deve estar branca, sem centro vítreo, com o suco claro. A cobertura empanada deve estar dourada por inteiro, não pálida onde os pedaços se encostavam.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Tire o tendão branco segurando a ponta com um garfo e deslizando a carne. Para empanar, separe farinha de trigo, ovo batido e panko, e pressione bem a farinha para o ventilador não espalhá-la. Quinze minutos em leitelho com sal deixam as tiras ao natural mais suculentas. Deixe um dedo de espaço entre as tiras.',
      faqs: [
        {
          q: 'Quanto tempo levam as tiras de frango na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para filezinhos frescos inteiros, virados aos {FLIP} minutos. Tiras finas levam uns {SMALL_MIN} minutos e as grossas uns {LARGE_MIN}.',
        },
        {
          q: 'Com que temperatura as tiras de frango ficam prontas?',
          a: '{INT_F}°F ({INT_C}°C) no pedaço mais grosso. Como são finas, retire exatamente nessa leitura.',
        },
        {
          q: 'Tiras empanadas precisam de óleo na air fryer?',
          a: 'Um leve spray, sim. A farinha seca fica pálida e com aspecto de pó sem um pouco de gordura para ajudar a dourar.',
        },
        {
          q: 'Este ajuste serve para tiras empanadas congeladas?',
          a: 'Não. As tiras congeladas de mercado vêm pré-cozidas e seguem a embalagem; use o modo congelados.',
        },
        {
          q: 'Como seria o ajuste no forno?',
          a: '{OVEN_F}°F por cerca de {OVEN_MIN} minutos no forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos com ventilação.',
        },
      ],
    },
    sausages: {
      label: 'Linguiças e salsichas',
      metaTitle: 'Linguiça na air fryer: tempo, temperatura e sem estourar',
      metaDescription:
        'Linguiças frescas na air fryer: {AF_F}°F por {MIN} minutos, virar aos {FLIP}, prontas a {INT_F}°F as de porco ou boi. Linguiça fina, bratwurst e salsichas pré-cozidas.',
      metaKeywords: 'linguiça na air fryer tempo, linguiça toscana air fryer, salsicha air fryer, bratwurst air fryer',
      heading: 'Linguiças na air fryer',
      subDesc:
        'Linguiças frescas de porco, boi ou frango, da fininha à bratwurst, além das pré-cozidas. O ajuste e como manter a pele inteira.',
      cardDesc: 'Calor moderado para a pele não estourar.',
      sizeLabels: { thin: 'Linguiças finas ou de café da manhã', medium: 'Linguiça toscana, cerca de 2,5 cm', thick: 'Bratwurst ou linguiças grossas' },
      internalAltLine: 'Linguiças de frango ou peru: {INT_ALT_F}°F ({INT_ALT_C}°C). As pré-cozidas só precisam ser aquecidas até {INT_ALT_F}°F.',
      failureHeading: 'Por que a linguiça estoura na air fryer',
      failureBody:
        'Uma linguiça é um tubo fechado de gordura, água e tempero. Ao aquecer, a água vira vapor e a gordura derrete, e a pressão interna sobe mais rápido do que a pele consegue esticar. Com calor demais, a pele racha no comprimento, a gordura escorre para a gaveta e solta fumaça, e o recheio resseca. Muita gente fura a linguiça para evitar isso, mas só faz o suco escapar mais cedo. O melhor é uma temperatura moderada, em que a pele firma e doura no mesmo ritmo em que o recheio cozinha, mais uma virada no meio para os dois lados pegarem cor. Linguiças que saem direto da geladeira estouram com mais facilidade do que as que descansaram dez minutos, e as que se encostam no cesto costumam rasgar justamente onde grudam.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Seis linguiças toscanas frescas de espessura normal, fora da geladeira por dez minutos. Coloque no cesto com espaço, cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos e vire aos {FLIP}. Linguiças finas precisam de uns {THIN_MIN} minutos; uma bratwurst fresca, uns {THICK_MIN}. Salsichas e bratwursts pré-cozidas já são seguras e só precisam aquecer, o que leva alguns minutos a menos. No forno convencional, as mesmas linguiças frescas levam {OVEN_F}°F por cerca de {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'Insira o termômetro por uma ponta em direção ao centro. Linguiças de porco e de boi ficam prontas a {INT_F}°F ({INT_C}°C); as de frango e peru precisam de {INT_ALT_F}°F ({INT_ALT_C}°C). As pré-cozidas, como a maioria das salsichas e de muitas bratwursts de mercado, já vêm cozidas da fábrica, então o objetivo é só aquecê-las até {INT_ALT_F}°F. Visualmente, uma linguiça fresca fica firme ao toque, dourada dos dois lados e sem rosado ao cortar.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Separe as linguiças emendadas com tesoura em vez de puxar. Não fure. Dispense o óleo: elas soltam gordura de sobra, e uma folha de papel-manteiga perfurado por baixo evita fumaça se a sua gaveta esquenta muito. Se quiser cebola com a linguiça, coloque cebola fatiada na gaveta na segunda metade do tempo.',
      faqs: [
        {
          q: 'Quanto tempo leva a linguiça na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para linguiças frescas normais, viradas aos {FLIP} minutos. As finas levam uns {THIN_MIN} minutos e a bratwurst uns {THICK_MIN}.',
        },
        {
          q: 'Com que temperatura a linguiça fica pronta?',
          a: '{INT_F}°F ({INT_C}°C) para porco e boi. Linguiças de frango e peru precisam de {INT_ALT_F}°F ({INT_ALT_C}°C).',
        },
        {
          q: 'Como faço bratwurst pré-cozida na air fryer?',
          a: 'Na mesma temperatura, mas ela fica pronta alguns minutos antes. Já vem cozida, então aqueça até o centro chegar a {INT_ALT_F}°F e a pele dourar.',
        },
        {
          q: 'Devo furar a linguiça antes da air fryer?',
          a: 'Não. Furar deixa a gordura e o suco escaparem, e a linguiça resseca. Uma temperatura moderada evita que a pele estoure sem precisar furar.',
        },
        {
          q: 'Qual o equivalente no forno para linguiças?',
          a: '{OVEN_F}°F por cerca de {OVEN_MIN} minutos numa assadeira no forno convencional, virando uma vez.',
        },
      ],
    },
    burgers: {
      label: 'Hambúrgueres',
      metaTitle: 'Hambúrguer na air fryer: tempo, temperatura e ponto',
      metaDescription:
        'Hambúrguer de carne bovina na air fryer: {AF_F}°F por {MIN} minutos, virar aos {FLIP}, pronto a {INT_F}°F. Tempos por espessura, hambúrguer congelado e equivalente no forno.',
      metaKeywords: 'hambúrguer na air fryer tempo, hambúrguer caseiro air fryer, hambúrguer congelado air fryer',
      heading: 'Hambúrguer na air fryer',
      subDesc:
        'Hambúrgueres frescos de carne moída, caseiros ou de mercado. O ajuste, a virada e por que carne moída tem um ponto diferente do bife.',
      cardDesc: 'Carne moída: {INT_F}°F, não o ponto do bife.',
      sizeLabels: { thin: 'Fino, cerca de 8 mm', medium: 'Normal, cerca de 1,3 cm', thick: 'Grosso, cerca de 2 cm' },
      failureHeading: 'Estufado, encolhido e com fumaça',
      failureBody:
        'Carne moída não se comporta como um bife. Ao esquentar, as proteínas se contraem e puxam as bordas para dentro, então o centro estufa num domo que cozinha de forma desigual e depois não fica reto no pão. Ao mesmo tempo, a gordura derrete, pinga na gaveta quente e pode soltar fumaça. Fazer uma cavidade rasa no centro de cada hambúrguer cru o mantém reto enquanto encolhe; limpar a gaveta entre as levas, e em alguns modelos pôr um pouco de água sob o cesto, diminui a fumaça. O outro erro é copiar o ponto do bife. Ao moer a carne, as bactérias da superfície se espalham por tudo, então o hambúrguer precisa chegar a {INT_F}°F no centro, não ao número de malpassado que serve para um bife inteiro.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Quatro hambúrgueres de 1,3 cm de carne moída com 20 % de gordura, cerca de 150 g cada, com uma cavidade no centro e sal só na hora. Preaqueça por {PREHEAT} minutos, cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos, virando aos {FLIP}. Os finos estilo smash levam uns {THIN_MIN} minutos e os grossos de 2 cm uns {THICK_MIN}. Coloque o queijo no último minuto. No forno convencional, os mesmos hambúrgueres precisam de {OVEN_F}°F por cerca de {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se está pronto',
      donenessBody:
        'Insira o termômetro pela lateral até o centro: {INT_F}°F ({INT_C}°C) é a meta de segurança para carne bovina moída, e nesse ponto o suco sai claro e o meio fica marrom, sem vermelho. A cor sozinha engana, porque há carne que escurece cedo e carne que continua rosada mesmo pronta. Um hambúrguer que estufou no meio cozinha antes nas bordas que no centro, então meça no ponto mais grosso.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Escolha carne com uns 20 % de gordura; a mais magra fica seca. Manuseie pouco e modele os hambúrgueres um pouco mais largos que o pão, porque encolhem. Faça a cavidade com o polegar, com metade da altura do hambúrguer. Salgue só por fora e só na hora de cozinhar, senão a carne fica com textura de linguiça. Não precisa de óleo.',
      faqs: [
        {
          q: 'Quanto tempo leva o hambúrguer na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para hambúrgueres frescos de 1,3 cm, virados aos {FLIP} minutos. Os finos levam uns {THIN_MIN} minutos e os grossos de 2 cm uns {THICK_MIN}.',
        },
        {
          q: 'Em que temperatura o hambúrguer deve ficar?',
          a: '{INT_F}°F ({INT_C}°C) no centro. É mais que o bife porque, ao moer a carne, as bactérias da superfície vão para dentro.',
        },
        {
          q: 'Posso fazer hambúrguer congelado na air fryer?',
          a: 'Sim, na mesma temperatura. Acrescente uns 4–6 minutos ao tempo do fresco, vire na metade e confira mesmo assim {INT_F}°F no centro. Separe antes os que congelaram grudados.',
        },
        {
          q: 'Por que meu hambúrguer estufa na air fryer?',
          a: 'As bordas encolhem mais rápido que o centro e o empurram para cima. Uma cavidade feita com o polegar em cada hambúrguer cru o mantém reto.',
        },
        {
          q: 'Qual o equivalente no forno para hambúrguer?',
          a: '{OVEN_F}°F por cerca de {OVEN_MIN} minutos numa grade no forno convencional, virando uma vez.',
        },
      ],
    },
    'pork-tenderloin': {
      label: 'Filé-mignon suíno',
      metaTitle: 'Filé-mignon suíno na air fryer: tempo, temperatura e descanso',
      metaDescription:
        'Filé-mignon suíno inteiro na air fryer: {AF_F}°F por {MIN} minutos, virar aos {FLIP}, {INT_F}°F após o descanso. Tempos por tamanho e equivalente no forno.',
      metaKeywords: 'filé mignon suíno air fryer, lombinho na air fryer tempo, filé suíno air fryer temperatura',
      heading: 'Filé-mignon suíno na air fryer',
      subDesc:
        'Um filé-mignon suíno inteiro, assado numa peça só. O ajuste, a virada e como o descanso termina o trabalho.',
      cardDesc: 'Dobre a ponta e deixe o descanso terminar.',
      sizeLabels: { small: 'Pequeno, cerca de 340 g', medium: 'Médio, cerca de 450 g', large: 'Grande, a partir de 570 g' },
      failureHeading: 'Ponta seca, centro cru',
      failureBody:
        'O filé-mignon suíno afina de uma cabeça grossa até uma ponta fina de dois ou três centímetros. Na air fryer, a ponta cozinha muito antes da cabeça, e quando a parte mais grossa finalmente fica segura, a extremidade estreita já está cinza e seca. Dobrar os últimos centímetros da ponta por baixo da peça e prender com barbante ou palito dá ao filé uma espessura mais uniforme. A outra metade da solução é o descanso. Retire o filé um pouco antes de {INT_F}°F e deixe-o três minutos numa tábua; o calor guardado nas camadas de fora continua avançando para dentro e o centro sobe uns 5°F enquanto descansa. Esse descanso faz parte de chegar à temperatura segura, não é um extra opcional, e ainda acomoda o suco para que ele fique na carne na hora de fatiar.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Um filé de 450 g, sem a membrana prateada, com a ponta dobrada, esfregado com óleo, mostarda e ervas. Preaqueça por {PREHEAT} minutos, cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos, virando aos {FLIP}. Retire quando a parte grossa marcar uns 140°F e deixe descansar três minutos até chegar a {INT_F}°F. Um pequeno de 340 g leva uns {SMALL_MIN} minutos e um grande uns {LARGE_MIN}. O equivalente no forno convencional é {OVEN_F}°F por cerca de {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se está pronto',
      donenessBody:
        'Meça na parte mais grossa da cabeça, pela lateral. Depois dos três minutos de descanso, o centro deve marcar {INT_F}°F ({INT_C}°C): rosado claro, suculento e seguro. Se já marcar bem mais que 145°F ao sair do cesto, vai ficar firme e seco depois do descanso, então da próxima vez retire antes. Fatie contra a fibra em medalhões de pouco mais de 1 cm.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Passe uma faca fina por baixo da membrana prateada, a película brilhante de um dos lados, e retire; ela encolhe no calor e entorta a peça. Seque, passe um pouco de óleo e uma mistura de temperos. Se o cesto for pequeno, corte o filé ao meio em vez de curvá-lo. Um glaçado doce entra só nos últimos minutos.',
      faqs: [
        {
          q: 'Quanto tempo leva o filé-mignon suíno na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para um filé de 450 g, virado aos {FLIP} minutos, mais três minutos de descanso. Os pequenos levam uns {SMALL_MIN} minutos e os grandes uns {LARGE_MIN}.',
        },
        {
          q: 'Com que temperatura o filé suíno fica pronto?',
          a: '{INT_F}°F ({INT_C}°C) após três minutos de descanso. Retire uns 5°F antes, porque a temperatura sobe enquanto descansa.',
        },
        {
          q: 'Por que o filé suíno precisa descansar?',
          a: 'A parte de fora guarda calor que continua cozinhando o centro por alguns minutos, e o suco se acomoda para ficar nas fatias.',
        },
        {
          q: 'Preciso tirar a membrana prateada?',
          a: 'Sim. Ela não amolece no cozimento e se contrai, entortando o filé e deixando um dos lados borrachudo.',
        },
        {
          q: 'Qual o equivalente num forno comum?',
          a: '{OVEN_F}°F por cerca de {OVEN_MIN} minutos no forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos com ventilação.',
        },
      ],
    },
    'white-fish': {
      label: 'Peixe branco',
      metaTitle: 'Tilápia e merluza na air fryer: peixe branco, tempo e temperatura',
      metaDescription:
        'Filés de peixe branco na air fryer: {AF_F}°F por {MIN} minutos sem virar, prontos a {INT_F}°F. Tilápia, merluza, pescada e bacalhau fresco, tempos por espessura.',
      metaKeywords: 'tilápia na air fryer tempo, filé de peixe air fryer, merluza air fryer, pescada air fryer',
      heading: 'Peixe branco na air fryer',
      subDesc:
        'Tilápia, merluza, pescada, bacalhau fresco e filés parecidos, frescos ou descongelados. O ajuste, por que não virar e como tirá-lo inteiro.',
      cardDesc: 'Não vire: retire inteiro sobre o papel.',
      sizeLabels: { thin: 'Filés finos, tilápia ou linguado', medium: 'Filés normais, cerca de 2,5 cm', thick: 'Postas grossas de bacalhau fresco ou pescada' },
      failureHeading: 'Grudado no cesto, quebrado na virada',
      failureBody:
        'O peixe branco tem lascas grandes e soltas, presas por muito pouca gordura e tecido conjuntivo. Depois de cozido, essas lascas se separam com um toque: é a textura que você quer no prato e o motivo de ele se desmanchar no caminho. Filés sem proteção também grudam na grade, porque as proteínas da face de baixo se prendem ao metal quente antes de firmar. Tentar virar o filé no meio do preparo é onde quase todo mundo erra: ele rasga, deixa a parte de baixo no cesto e vira pedaços. Então não vire. O ar circulando cozinha a parte de cima e o calor do cesto basta para a de baixo em filés de espessura normal. Cozinhe sobre papel-manteiga perfurado ou uma base untada e retire a folha inteira no fim.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Dois filés de merluza de cerca de 170 g e 2,5 cm de espessura, secos, pincelados com manteiga derretida e cobertos com raspas de limão e páprica. Preaqueça por {PREHEAT} minutos, coloque sobre papel perfurado e cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos sem virar. Tilápia fina precisa de uns {THIN_MIN} minutos e uma posta grossa uns {THICK_MIN}. No forno convencional, os mesmos filés levam {OVEN_F}°F por cerca de {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se está pronto',
      donenessBody:
        'Pressione de leve a parte mais grossa com um garfo: o peixe branco cozido passa de translúcido para um branco opaco e brilhante e se separa em lascas úmidas. A temperatura interna segura é {INT_F}°F ({INT_C}°C). Filés finos passam de prontos a secos muito rápido, então confira dois minutos antes do tempo. Se as lascas parecerem esbranquiçadas e secas nas bordas, o peixe passou do ponto.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Descongele os filés congelados por completo na geladeira e seque bem, porque peixe descongelado solta muita água. Dobre a ponta fina por baixo para o filé ficar com espessura uniforme. Um pouco de gordura por cima ajuda na cor e no sabor: um pouco de manteiga, azeite ou maionese com ervas. Para uma crosta, pressione o panko só na parte de cima.',
      faqs: [
        {
          q: 'Quanto tempo leva o peixe branco na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para filés de merluza ou pescada de 2,5 cm, sem virar. Tilápia fina leva uns {THIN_MIN} minutos e postas grossas uns {THICK_MIN}.',
        },
        {
          q: 'Preciso virar o peixe na air fryer?',
          a: 'Não. Filés delicados quebram ao virar, e o ar quente cozinha bem a parte de cima sozinho.',
        },
        {
          q: 'Como evito que o peixe grude no cesto?',
          a: 'Cozinhe sobre papel-manteiga perfurado ou uma base untada e retire a folha inteira. Secar bem o peixe e untar a parte de baixo também ajuda.',
        },
        {
          q: 'Com que temperatura a tilápia fica pronta?',
          a: '{INT_F}°F ({INT_C}°C) na parte mais grossa, quando a carne fica opaca e se separa em lascas com facilidade.',
        },
        {
          q: 'Qual o equivalente no forno para peixe branco?',
          a: '{OVEN_F}°F por cerca de {OVEN_MIN} minutos no forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos com ventilação.',
        },
      ],
    },
    broccoli: {
      label: 'Brócolis',
      metaTitle: 'Brócolis na air fryer: tempo, temperatura e floretes crocantes',
      metaDescription:
        'Brócolis fresco na air fryer: {AF_F}°F por {MIN} minutos, chacoalhando uma vez. Pontas crocantes e talos macios, tempos por tamanho de florete e equivalente no forno.',
      metaKeywords: 'brócolis na air fryer, brócolis air fryer tempo, brócolis assado air fryer',
      heading: 'Brócolis na air fryer',
      subDesc:
        'Floretes de brócolis fresco, assados até as bordas ficarem crocantes. O ajuste curto, a chacoalhada e como cortar para pontas e talos ficarem prontos juntos.',
      cardDesc: 'Corte os talos finos para as pontas não queimarem.',
      sizeLabels: { small: 'Floretes pequenos, de um bocado', medium: 'Floretes médios, cerca de 4 cm', large: 'Floretes grandes ou cabeças em metades' },
      failureHeading: 'Pontas queimadas, talos duros',
      failureBody:
        'Um florete de brócolis são dois alimentos grudados. Em cima há um cacho de botõezinhos secos com uma superfície enorme, e no ar quente em movimento esses botões perdem a água em poucos minutos, ficam crocantes, depois pretos e amargos. O talo de baixo é denso e úmido e precisa de vários minutos a mais para amaciar. Se você cozinha o florete inteiro, tem que escolher entre pontas carbonizadas com talo cru ou talo macio sob farelos queimados. A solução está na faca. Corte floretes com talos curtos e divida os talos grossos no comprimento, para cada pedaço ter um talo fino. Descasque o talo principal e corte em rodelas; cozido, ele é doce. O outro problema é o peso: floretes secos são tão leves que o ventilador pode levantar os pedaços pequenos até a resistência, então misture-os antes com óleo.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Uma cabeça média de brócolis cortada em floretes de cerca de 4 cm com os talos divididos, misturada com uma colher de sopa de azeite, sal e alho. Preaqueça por {PREHEAT} minutos, cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos e chacoalhe uma vez na metade. Floretes de um bocado ficam prontos em uns {SMALL_MIN} minutos e os grandes em uns {LARGE_MIN}. Assada numa assadeira no forno convencional, a mesma cabeça leva {OVEN_F}°F por cerca de {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se está pronto',
      donenessBody:
        'As pontas devem estar douradas nas bordas, com alguns pontos escuros e crocantes, enquanto o resto do florete continua verde vivo. Espete um talo com uma faca: ela deve entrar com uma leve resistência. Floretes verde-acinzentados e moles ficaram apertados demais e cozinharam no vapor; pontas pretas e amargas indicam que os pedaços eram grandes demais para o tempo ou ficaram sem óleo.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Lave o brócolis com antecedência e deixe secar por completo, ou passe numa centrífuga de salada; floretes molhados cozinham no vapor em vez de assar. Cubra cada pedaço de óleo por igual, o que protege as pontas e dá peso. Queijo ralado ou suco de limão entram depois de cozinhar. Não encha o cesto com mais de uma camada.',
      faqs: [
        {
          q: 'Quanto tempo leva o brócolis na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para floretes frescos médios, chacoalhando uma vez. Os pequenos levam uns {SMALL_MIN} minutos e os grandes uns {LARGE_MIN}.',
        },
        {
          q: 'Por que meu brócolis queima na air fryer?',
          a: 'Os botões finos de cima secam muito antes de o talo amaciar. Corte floretes menores com talos finos e cubra-os de óleo.',
        },
        {
          q: 'Dá para fazer brócolis congelado na air fryer?',
          a: 'Dá, mas ele solta muita água e fica mais mole. Use o modo congelados, que considera essa umidade extra, em vez deste ajuste para fresco.',
        },
        {
          q: 'Por que o brócolis voa dentro da air fryer?',
          a: 'Floretes secos são leves o suficiente para o ventilador levantá-los. Uma camada de óleo dá peso e os mantém no cesto.',
        },
        {
          q: 'Qual o equivalente no forno para brócolis?',
          a: '{OVEN_F}°F por cerca de {OVEN_MIN} minutos numa assadeira no forno convencional.',
        },
      ],
    },
    'brussels-sprouts': {
      label: 'Couve-de-bruxelas',
      metaTitle: 'Couve-de-bruxelas na air fryer: tempo, temperatura e folhas crocantes',
      metaDescription:
        'Couve-de-bruxelas em metades na air fryer: {AF_F}°F por {MIN} minutos, chacoalhando duas vezes. Miolo macio, face caramelizada, tempos por tamanho e equivalente no forno.',
      metaKeywords: 'couve de bruxelas air fryer, couve de bruxelas na air fryer tempo, couve de bruxelas crocante',
      heading: 'Couve-de-bruxelas na air fryer',
      subDesc:
        'Couves-de-bruxelas frescas, cortadas ao meio e assadas. O ajuste, as duas chacoalhadas e como chegar a um miolo macio com a face caramelizada.',
      cardDesc: 'Corte ao meio e comece com o corte para baixo.',
      sizeLabels: { small: 'Pequenas, em metades', medium: 'Médias, cerca de 2,5 cm, em metades', large: 'Grandes, em quartos' },
      failureHeading: 'Miolo cru e folhas queimadas',
      failureBody:
        'Uma couve-de-bruxelas é um feixe apertado de folhas em volta de um miolo denso e maciço. As folhas de fora, soltas, secam e tostam quase na hora na air fryer, mas o calor precisa atravessar camada por camada até o centro, então uma couve inteira pode estar chamuscada por fora e ainda dura e com gosto de enxofre por dentro. Cortar ao meio é a principal solução, porque expõe o miolo e reduz pela metade o caminho do calor. Depois, a face do corte faz diferença. Apoiada reta no cesto quente, essa face carameliza numa crosta doce, com sabor de castanha, enquanto o lado arredondado ganha folhas crocantes com o ar. Coloque com o corte para baixo no primeiro trecho e só então comece a chacoalhar. As grandes devem ser cortadas em quartos, senão o centro continua atrasado.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        '450 g de couves médias, limpas e em metades, misturadas com uma colher e meia de sopa de óleo e sal. Preaqueça por {PREHEAT} minutos, coloque com o corte para baixo e cozinhe a {AF_F}°F por {MEDIUM_MIN} minutos, chacoalhando duas vezes na segunda metade. As pequenas em metades precisam de uns {SMALL_MIN} minutos e as grandes em quartos de uns {LARGE_MIN}. No forno convencional, a mesma assadeira leva {OVEN_F}°F por cerca de {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'Espete uma faca na parte mais grossa do miolo: ela deve entrar fácil, como numa batata cozida. A face do corte deve estar de dourado intenso a marrom-escuro, e algumas folhas de fora terão se soltado e ficado crocantes e quase pretas; é a melhor parte. Cor acinzentada ou cheiro forte de repolho indicam que cozinharam tempo demais em calor baixo, ou no vapor num cesto cheio.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Apare a base seca do talo e retire as folhas amareladas. Corte atravessando o talo para cada metade ficar inteira. Misture com óleo até todas as faces cortadas brilharem. Redução de balsâmico, mel ou um pouco de limão entram depois de cozinhar, porque o açúcar queima no fim de um preparo em calor alto.',
      faqs: [
        {
          q: 'Quanto tempo leva a couve-de-bruxelas na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para couves médias em metades, chacoalhando duas vezes. As pequenas levam uns {SMALL_MIN} minutos e as grandes em quartos uns {LARGE_MIN}.',
        },
        {
          q: 'Preciso cortar a couve-de-bruxelas ao meio?',
          a: 'Sim. Inteiras, elas queimam por fora antes de o miolo denso cozinhar; em metades o miolo fica exposto e há uma face reta que doura.',
        },
        {
          q: 'Por que minhas couves continuam duras no meio?',
          a: 'Eram grandes demais para o tempo. Corte as grandes em quartos e confira o miolo com uma faca antes de tirar.',
        },
        {
          q: 'Começo com o corte para cima ou para baixo?',
          a: 'Para baixo. A face reta carameliza no cesto quente, e depois as chacoalhadas deixam as folhas crocantes.',
        },
        {
          q: 'Qual o equivalente no forno para couve-de-bruxelas?',
          a: '{OVEN_F}°F por cerca de {OVEN_MIN} minutos numa assadeira no forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos com ventilação.',
        },
      ],
    },
    'sweet-potato-fries': {
      label: 'Batata-doce frita',
      metaTitle: 'Batata-doce frita na air fryer: tempo, temperatura e crocância',
      metaDescription:
        'Batata-doce em palitos caseira na air fryer: {AF_F}°F por {MIN} minutos, chacoalhando duas vezes. Por que queima e fica mole, o truque do amido de milho, tempos por espessura.',
      metaKeywords: 'batata doce na air fryer, batata doce frita air fryer tempo, batata doce crocante air fryer',
      heading: 'Batata-doce frita na air fryer',
      subDesc:
        'Palitos de batata-doce fresca. Um ajuste mais baixo que o da batata frita comum, a cobertura que ajuda a crocância e tempos por espessura.',
      cardDesc: 'Mais baixo que a batata comum: o açúcar queima antes.',
      sizeLabels: { thin: 'Finos, 6 mm', medium: 'Normais, 1 cm', thick: 'Grossos, 1,3 cm' },
      failureHeading: 'Bordas escuras, meio mole',
      failureBody:
        'Batata-doce não é uma batata laranja. Ela tem muito mais açúcar e bem menos do amido que deixa a batata frita crocante. No calor, esse açúcar carameliza e depois queima numa temperatura mais baixa do que a que o amido precisa para dourar, então as pontas escurecem e amargam enquanto o resto continua mole. A moleza é a outra metade do problema: com pouco amido para formar uma casca firme, o palito de batata-doce tende a ficar murcho, por mais que cozinhe. Por isso este ajuste é mais baixo que o da batata comum e um pouco mais curto, e por isso uma camada fina de amido de milho faz tanta diferença. O amido fornece a camada seca que falta à batata-doce e fica crocante no ar antes de o açúcar por baixo ter tempo de queimar.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Duas batatas-doces médias cortadas em palitos de 1 cm, secas e misturadas primeiro com uma colher de sopa de amido de milho e depois com uma colher de sopa de óleo e uma pitada de sal. Cozinhe em uma camada a {AF_F}°F por {MEDIUM_MIN} minutos, chacoalhando duas vezes. Os finos levam uns {THIN_MIN} minutos e os grossos uns {THICK_MIN}. Faça em levas; ao esfriar um minuto ficam um pouco mais crocantes. Numa assadeira no forno convencional: {OVEN_F}°F por cerca de {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'Procure bordas douradas e com algumas bolhinhas, mas não pretas, e palitos que mantenham a forma quando levantados por uma ponta, sem dobrar. Por dentro continuam mais macios que a batata comum; é da natureza deles. Se as pontas escurecem antes de o meio cozinhar, corte a próxima leva um pouco mais grossa e mais uniforme em vez de aumentar o calor.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Descascar é opcional; a casca fica crocante. Corte os palitos com espessura uniforme e pule o molho longo usado para a batata comum, porque quase não há amido na superfície para tirar. Seque, polvilhe primeiro o amido de milho e depois o óleo, para o pó aderir. Tempere com páprica defumada ou canela e salgue de novo no fim.',
      faqs: [
        {
          q: 'Quanto tempo leva a batata-doce frita na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para palitos de 1 cm, chacoalhando duas vezes. Os finos levam uns {THIN_MIN} minutos e os grossos uns {THICK_MIN}.',
        },
        {
          q: 'Por que a batata-doce vai em temperatura mais baixa que a batata comum?',
          a: 'Ela tem muito mais açúcar, que queima numa temperatura mais baixa do que a que o amido da batata precisa para dourar. Um ajuste um pouco mais baixo deixa o interior cozinhar antes de as bordas escurecerem.',
        },
        {
          q: 'Como deixar a batata-doce crocante?',
          a: 'Polvilhe amido de milho antes do óleo, cozinhe em uma camada e deixe descansar um minuto depois. Ela nunca fica tão firme quanto a batata comum.',
        },
        {
          q: 'Preciso deixar a batata-doce de molho?',
          a: 'Não. O molho da batata comum tira o amido da superfície, e a batata-doce tem muito pouco.',
        },
        {
          q: 'Qual o equivalente no forno para batata-doce frita?',
          a: '{OVEN_F}°F por cerca de {OVEN_MIN} minutos numa assadeira no forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos com ventilação.',
        },
      ],
    },
    'potato-wedges': {
      label: 'Batatas rústicas',
      metaTitle: 'Batata rústica na air fryer: tempo, temperatura e miolo macio',
      metaDescription:
        'Batata rústica com casca na air fryer: {AF_F}°F por {MIN} minutos, virando uma vez. Crocante por fora, macia por dentro, tempos por tamanho e equivalente no forno.',
      metaKeywords: 'batata rústica air fryer, batata em gomos air fryer tempo, batata canoa air fryer',
      heading: 'Batata rústica na air fryer',
      subDesc:
        'Gomos grossos com casca, cortados de batatas frescas. O ajuste, a única virada e como cozinhar o miolo antes de o lado de fora escurecer demais.',
      cardDesc: 'Pedaços grossos: espalhe e vire uma vez.',
      sizeLabels: { small: 'Gomos pequenos, de batatas pequenas', medium: 'Médios, batata em 8 gomos', large: 'Grandes, batata em 6 gomos' },
      failureHeading: 'Dourada por fora, densa por dentro',
      failureBody:
        'Um gomo é grosso do lado da casca e afiado na borda interna, então cozinha de forma desigual só pelo formato. A aresta fina doura primeiro, enquanto o coração do gomo, muitas vezes com mais de dois centímetros, continua firme e com textura de cera. Diferente de uma batata frita fina, o gomo tem tanta massa que o lado de fora pode parecer pronto muito antes do meio. Duas coisas resolvem. Primeiro, dê espaço a cada gomo: amontoados no cesto, eles fazem sombra uns nos outros, as faces escondidas cozinham no vapor e o lado de fora fica mole em alguns pontos e queimado em outros. Segundo, vire uma vez para a outra face cortada, para as duas faces retas pegarem cor no cesto enquanto a casca fica voltada para o ventilador. Para um miolo bem macio, ferva os gomos por cinco minutos antes.',
      workedExampleHeading: 'Exemplo prático',
      workedExampleTemplate:
        'Duas batatas médias farinhentas, cada uma cortada no comprimento em oito gomos, secas e misturadas com uma colher de sopa de óleo, sal, alho em pó e páprica. Cozinhe em uma camada, com a casca para baixo, a {AF_F}°F por {MEDIUM_MIN} minutos, virando uma vez na metade. Gomos de batatas pequenas levam uns {SMALL_MIN} minutos; sextos mais grossos, uns {LARGE_MIN}. Numa assadeira no forno convencional, conte com {OVEN_F}°F por cerca de {OVEN_MIN} minutos.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'Espete uma faca na parte mais grossa, perto da casca: ela deve entrar sem resistência, e o interior deve parecer branco e fofo, não vítreo. As faces cortadas devem estar douradas com bordas mais escuras e a casca enrugada e crocante. Se o lado de fora está pronto e o meio não, baixe um pouco o calor nos últimos minutos em vez de abrir mão da crosta.',
      prepHeading: 'Antes de ir para o cesto',
      prepBody:
        'Use batatas farinhentas para um miolo fofo; as mais firmes dão um gomo mais cremoso. Esfregue, mas não descasque. Corte cada batata no mesmo número de gomos para ficarem prontos juntos. Uma lavada rápida basta; seque bem. Parmesão ralado nos dois últimos minutos combina muito.',
      faqs: [
        {
          q: 'Quanto tempo leva a batata rústica na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para gomos médios, virados uma vez. Os pequenos levam uns {SMALL_MIN} minutos e os grandes uns {LARGE_MIN}.',
        },
        {
          q: 'Preciso pré-cozinhar os gomos antes da air fryer?',
          a: 'É opcional. Cinco minutos em água fervente dão um miolo mais fofo e uma superfície mais áspera que fica mais crocante; seque bem depois.',
        },
        {
          q: 'Qual a diferença entre batata rústica e batata frita na air fryer?',
          a: 'Os gomos são bem mais grossos, então o desafio é cozinhar o miolo antes de o lado de fora dourar demais. Precisam de mais tempo e de uma só virada.',
        },
        {
          q: 'Quais batatas são melhores para gomos?',
          a: 'As farinhentas, como a asterix, para um interior fofo; as mais firmes, como a ágata, para um interior mais cremoso.',
        },
        {
          q: 'Qual o equivalente no forno para batata rústica?',
          a: '{OVEN_F}°F por cerca de {OVEN_MIN} minutos numa assadeira no forno convencional, ou {FAN_F}°F por {FAN_MIN} minutos com ventilação.',
        },
      ],
    },
    'frozen-fries': {
      label: 'Batata frita congelada',
      metaTitle: 'Batata frita congelada na air fryer: tempo, temperatura e embalagem',
      metaDescription:
        'Batata frita congelada na air fryer: {AF_F}°F por {MIN} minutos, agitando {SHAKES} vezes, direto do pacote. Da palito fina à rústica grossa, e como converter o que diz a embalagem.',
      metaKeywords: 'batata frita congelada air fryer, tempo batata congelada air fryer, quanto tempo batata frita congelada na air fryer',
      heading: 'Batata frita congelada na air fryer',
      subDesc:
        'Batata de pacote feita direto do congelador, sem descongelar e sem óleo extra. A configuração, quando agitar e como passar as instruções da embalagem para a air fryer.',
      cardDesc: 'Direto do pacote, uma camada, duas agitadas.',
      sizeLabels: { thin: 'Batata palito fina', medium: 'Batata palito comum', thick: 'Batata grossa ou rústica' },
      failureHeading: 'Por que a batata congelada fica mole',
      failureBody:
        'Toda batata congelada tem uma camada fina de gelo, e nos primeiros minutos esse gelo derrete e vira vapor. Com espaço em volta de cada pedaço, o ventilador leva o vapor embora e a superfície doura no óleo em que a fábrica já fritou as batatas. Se você despeja o pacote inteiro, o vapor fica preso: as batatas de baixo ficam na própria água e saem pálidas e murchas, não importa quanto tempo fiquem lá. Encha o cesto no máximo até a metade e faça um pacote grande em duas levas. As {SHAKES} agitadas fazem o resto: soltam as batatas que congelaram grudadas e levam a camada úmida de baixo para o ar quente.',
      workedExampleHeading: 'Exemplo prático: da embalagem para a air fryer',
      workedExampleTemplate:
        'Um pacote típico de batata palito diz {OVEN_F}°F por {OVEN_MIN} minutos no forno. Uma air fryer de cesto não chega a essa temperatura, então trabalha a {AF_F}°F e o tempo cai para {MIN} minutos, porque o ventilador leva calor às batatas muito mais rápido que uma assadeira. Preaqueça {PREHEAT} minutos, coloque meio pacote e agite mais ou menos a um terço e a dois terços do tempo. A palito fina fica pronta em cerca de {THIN_MIN} minutos; a grossa precisa de uns {THICK_MIN}. Um pacote europeu feito para forno ventilado indica {FAN_F}°F ({FAN_C}°C) por {FAN_MIN} minutos e chega à mesma configuração da air fryer.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'A batata congelada já vem cozida, então o que você busca é cor e crocância. Quebre uma: por fora deve estar dourada e estalar, por dentro macia e quente. Se o fundo do cesto ainda estiver pálido, agite mais uma vez e dê dois minutos. Cortes grossos parecem prontos antes de o centro amolecer, então prove uma batata grossa antes de tirar a leva.',
      prepHeading: 'Antes de colocar',
      prepBody:
        'Não descongele e solte os blocos congelados antes de despejar. O óleo é opcional porque as batatas já vêm pré-fritas, embora um spray leve ajude as onduladas a dourar por igual. Coloque sal depois de pronto, não antes, para o sal não puxar mais água.',
      faqs: [
        {
          q: 'Quanto tempo leva a batata frita congelada na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para batata comum, agitando {SHAKES} vezes. A palito fina leva uns {THIN_MIN} minutos e a grossa uns {THICK_MIN}.',
        },
        {
          q: 'Preciso descongelar a batata antes?',
          a: 'Não. Faça direto do congelador. Ao descongelar, a superfície fica molhada e mole, e depois nunca fica bem crocante.',
        },
        {
          q: 'Batata congelada precisa de óleo na air fryer?',
          a: 'Normalmente não. Ela é pré-frita antes de congelar, então doura sozinha. Um spray leve ajuda batatas temperadas ou onduladas a pegar cor por igual.',
        },
        {
          q: 'Por que minha batata congelada continua mole?',
          a: 'Tem batata demais no cesto. O gelo de cada uma vira vapor e um cesto cheio prende esse vapor. Faça meio pacote por vez e agite quando o tempo indicar.',
        },
        {
          q: 'Meu pacote diz {OVEN_F}°F por {OVEN_MIN} minutos. O que eu coloco?',
          a: '{AF_F}°F por cerca de {MIN} minutos numa air fryer de cesto. O conversor desta página aceita os números de qualquer pacote, inclusive os de forno ventilado.',
        },
      ],
    },
    'frozen-chicken-wings': {
      label: 'Asinhas de frango congeladas',
      metaTitle: 'Asinhas de frango congeladas na air fryer: cruas e pré-cozidas',
      metaDescription:
        'Asinhas de frango cruas congeladas na air fryer: {AF_F}°F por {MIN} minutos, agitando {SHAKES} vezes, prontas a {INT_F}°F. Asinhas pré-cozidas ou com molho levam cerca de {PRE_MIN} minutos.',
      metaKeywords: 'asinha de frango congelada air fryer, asas congeladas air fryer tempo, como fazer asinha congelada na air fryer',
      heading: 'Asinhas de frango congeladas na air fryer',
      subDesc:
        'Asinhas cruas feitas direto do congelador, sem descongelar, mais a configuração curta para asinhas já cozidas ou com molho. Como soltar o bloco e deixar a pele crocante.',
      cardDesc: 'Cruas e congeladas: solte na primeira agitada.',
      sizeLabels: { small: 'Asinhas pequenas, meio da asa e coxinha da asa', medium: 'Asinhas cortadas comuns', large: 'Asas grandes ou inteiras' },
      failureHeading: 'Por que asinhas congeladas cozinham de forma desigual',
      failureBody:
        'As asinhas cruas costumam congelar grudadas em blocos dentro do pacote. Onde duas asinhas se tocam, nenhuma das faces recebe ar quente, então esse lado fica pálido e a carne embaixo fica atrás do resto. Se você deixa um bloco inteiro, sai uma asinha que parece pronta por cima e está crua onde estava grudada. A pele tem um segundo problema: asinhas congeladas trazem gelo, e a água que soltam precisa sair antes de a gordura sob a pele derreter e deixá-la crocante. Por isso esta configuração é longa e constante, não curta e forte. Separe as asinhas com uma pinça na primeira agitada, espalhe-as e deixe a segunda virá-las para que cada lado passe perto do ventilador.',
      workedExampleHeading: 'Exemplo prático: um pacote de asinhas cruas congeladas',
      workedExampleTemplate:
        'Um pacote de asinhas cruas cortadas manda assar direto do congelador a {OVEN_F}°F por {OVEN_MIN} minutos. Numa air fryer de cesto isso vira {AF_F}°F por {MIN} minutos. Preaqueça {PREHEAT} minutos, coloque em uma única camada e agite duas vezes; na primeira, separe as asinhas que ainda estiverem congeladas juntas. As pequenas ficam prontas em cerca de {SMALL_MIN} minutos e as grandes em uns {LARGE_MIN}. Passe no molho depois de prontas, não antes, ou o açúcar queima muito antes de a carne ficar segura.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'Asinhas cruas precisam chegar a {INT_F}°F ({INT_C}°C) junto ao osso, então meça a coxinha da asa mais grossa com um termômetro; um pacote congelado é justamente o caso em que a cor engana, porque a pele pode dourar enquanto o centro ainda está frio. Acima dessa temperatura as asinhas aguentam bem, e muita gente deixa mais tempo para uma textura mais solta e macia. A pele deve estar crocante e com bolhas, sem partes moles e pálidas onde se tocavam.',
      prepHeading: 'Antes de colocar',
      prepBody:
        'Leia o pacote primeiro: asinhas cruas e já cozidas parecem iguais, mas precisam de configurações diferentes. Bata o pacote na bancada para quebrar os blocos grandes antes de abrir. Não precisa de óleo, a pele tem gordura de sobra. Use o tempero seco depois de separar as asinhas, na primeira agitada, para ele grudar na superfície já descongelada.',
      faqs: [
        {
          q: 'Quanto tempo levam as asinhas cruas congeladas na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F, agitando {SHAKES} vezes, até chegar a {INT_F}°F. As pequenas levam uns {SMALL_MIN} minutos e as grandes uns {LARGE_MIN}.',
        },
        {
          q: 'E as asinhas congeladas já cozidas ou com molho?',
          a: 'Só precisam esquentar, não cozinhar: cerca de {PRE_MIN} minutos a {PRE_F}°F ({PRE_C}°C), agitando uma vez. Foram cozidas na fábrica, então não há risco de frango cru; tire quando o molho estiver borbulhando e pegajoso.',
        },
        {
          q: 'Preciso descongelar as asinhas?',
          a: 'Não. A configuração acima é para asinhas direto do congelador. Só separe na primeira agitada.',
        },
        {
          q: 'Quando coloco o molho?',
          a: 'Depois de prontas. Misture as asinhas quentes com o molho numa tigela e, se quiser que ele firme, volte com elas por um ou dois minutos.',
        },
        {
          q: 'Posso usar a configuração de asinha fresca para a congelada?',
          a: 'Não. As frescas cozinham mais rápido e mais quentes; as congeladas precisam de tempo extra para o gelo sair e o centro chegar à temperatura.',
        },
      ],
    },
    'frozen-chicken-breast': {
      label: 'Peito de frango congelado',
      metaTitle: 'Peito de frango congelado na air fryer: tempo e temperatura segura',
      metaDescription:
        'Peito de frango cru direto do congelador na air fryer: {AF_F}°F por {MIN} minutos, virando aos {FLIP}, pronto a {INT_F}°F. Tempos por peso e equivalente no forno.',
      metaKeywords: 'peito de frango congelado air fryer, quanto tempo peito congelado air fryer, frango congelado na air fryer',
      heading: 'Peito de frango congelado na air fryer',
      subDesc:
        'Peitos crus sem osso feitos direto do congelador, sem descongelar. Uma configuração mais baixa e mais lenta que a do frango fresco, e por que aqui o termômetro não é opcional.',
      cardDesc: 'Mais baixo e mais lento que o fresco: confira com termômetro.',
      sizeLabels: { small: 'Pequeno, 150 g (5–6 oz)', medium: 'Médio, 220 g (7–8 oz)', large: 'Grande, 300 g (10–12 oz)' },
      failureHeading: 'Por que o lado de fora resseca antes de o centro ficar seguro',
      failureBody:
        'Um peito congelado começa com um bloco de gelo no meio. O calor precisa descongelar o centro antes de conseguir cozinhá-lo, enquanto o lado de fora continua recebendo calor o tempo todo. Se você usa a configuração forte de um peito fresco, a superfície fica borrachuda enquanto o centro ainda está abaixo de uma temperatura segura. Por isso esta configuração é mais baixa e mais longa que a do frango fresco: uma temperatura mais suave diminui a diferença entre fora e dentro, e o centro chega a uma leitura segura antes de as bordas ressecarem. O que mais importa é a espessura, então cozinhe juntos pedaços de tamanho parecido e meça o maior.',
      workedExampleHeading: 'Exemplo prático: dois peitos de um pacote',
      workedExampleTemplate:
        'Um pacote de peitos crus congelados um a um diz {OVEN_F}°F por {OVEN_MIN} minutos no forno. Numa air fryer de cesto isso vira {AF_F}°F por cerca de {MIN} minutos para um peito médio. Preaqueça {PREHEAT} minutos, coloque dois peitos deitados com espaço entre eles e vire aos {FLIP} minutos, que é também quando você tempera, porque a superfície já descongelada segura o tempero. Os pequenos costumam ficar prontos em uns {SMALL_MIN} minutos; os grandes precisam de uns {LARGE_MIN}. Meça o mais grosso antes de tirar qualquer um.',
      donenessHeading: 'Como saber se está pronto',
      donenessBody:
        'Aqui só o termômetro é confiável: {INT_F}°F ({INT_C}°C) na parte mais grossa, com a sonda entrando pela lateral para a ponta ficar bem no meio. Um peito congelado pode estar dourado e firme por fora com o centro ainda rosado e frio, e cortar para olhar deixa o suco escapar. Se um peito estiver pronto e outro não, tire o pronto e dê mais alguns minutos ao outro. Deixe descansar três minutos antes de fatiar.',
      prepHeading: 'Antes de colocar',
      prepBody:
        'Separe os peitos que congelaram juntos; passe alguns segundos sob água fria se não soltarem. Tire a camada de gelo e seque a superfície. Pincele um pouco de óleo para o tempero grudar depois, mas guarde as especiarias para a hora de virar, porque elas escorregam numa superfície congelada.',
      faqs: [
        {
          q: 'Quanto tempo leva um peito de frango congelado na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para um peito médio, virando aos {FLIP} minutos. Os pequenos levam uns {SMALL_MIN} minutos e os grandes uns {LARGE_MIN}. Termine sempre conferindo com termômetro.',
        },
        {
          q: 'É seguro fazer peito de frango direto do congelador?',
          a: 'Sim, desde que a parte mais grossa chegue a {INT_F}°F ({INT_C}°C). Só demora mais que o fresco, e a configuração mais baixa evita que o lado de fora resseque primeiro.',
        },
        {
          q: 'Por que não usar a configuração do peito fresco?',
          a: 'O frango fresco vai mais quente e mais rápido. Num peito congelado isso doura o lado de fora muito antes de o centro descongelar e cozinhar.',
        },
        {
          q: 'Quando devo temperar?',
          a: 'Na hora de virar. Nesse momento a superfície já descongelou e o tempero gruda em vez de escorregar no gelo.',
        },
        {
          q: 'Posso fazer peito empanado congelado do mesmo jeito?',
          a: 'Veja a embalagem. Muitos empanados são vendidos crus e seguem a página de tiras de frango congeladas; os já cozidos só precisam esquentar.',
        },
      ],
    },
    'frozen-chicken-nuggets': {
      label: 'Nuggets de frango congelados',
      metaTitle: 'Nuggets de frango congelados na air fryer: tempo e temperatura',
      metaDescription:
        'Nuggets de frango congelados na air fryer: {AF_F}°F por {MIN} minutos, agitando uma vez, quentes por dentro a {INT_F}°F. Do frango pipoca aos dinossauros, com a conversão da embalagem.',
      metaKeywords: 'nuggets congelados air fryer, nuggets air fryer tempo, quanto tempo nuggets congelados na air fryer',
      heading: 'Nuggets de frango congelados na air fryer',
      subDesc:
        'Nuggets empanados já cozidos, direto do pacote. Você está reaquecendo, não cozinhando, então o objetivo é uma casquinha crocante sem um miolo ressecado.',
      cardDesc: 'Já vêm cozidos: você só reaquece.',
      sizeLabels: { small: 'Frango pipoca ou mini bocados', medium: 'Nuggets comuns', large: 'Formatos grandes ou nuggets de dinossauro' },
      internalLine: 'Quentes por dentro a {INT_F}°F ({INT_C}°C) no centro; já vêm cozidos',
      failureHeading: 'Por que os nuggets ficam secos e duros',
      failureBody:
        'Quase todo nugget congelado do mercado é totalmente cozido antes de congelar. O frango de dentro já está pronto; o que a air fryer precisa fazer é deixar a casquinha crocante e devolver o calor ao centro. Isso muda o que pode dar errado. O perigo não é ficar cru, e sim passar do ponto: nuggets são pequenos, então dois minutos a mais secam o frango até ele ficar firme e fibroso, e a casquinha passa de crocante a dura. Trate como um reaquecimento curto. Use o tempo desta página, agite o cesto uma vez na metade para virar os pedaços que estavam deitados e comece a olhar um ou dois minutos antes. Nuggets amontoados em duas camadas também se cozinham no vapor uns dos outros, e a casquinha de baixo fica mole.',
      workedExampleHeading: 'Exemplo prático: meio pacote para dois',
      workedExampleTemplate:
        'Um pacote de nuggets empanados diz {OVEN_F}°F por {OVEN_MIN} minutos na assadeira. Numa air fryer de cesto isso vira {AF_F}°F por {MIN} minutos. Preaqueça {PREHEAT} minutos, espalhe uns vinte nuggets em uma camada e agite uma vez na metade. O frango pipoca fica pronto em cerca de {SMALL_MIN} minutos e os dinossauros grandes em uns {LARGE_MIN}. Se a embalagem trouxer uma configuração para forno ventilado, {FAN_F}°F por {FAN_MIN} minutos, o resultado é a mesma configuração da air fryer.',
      donenessHeading: 'Como saber se estão prontos',
      donenessBody:
        'Como o frango já está cozido, o que você confere é se o centro está quente, não se chegou a uma temperatura de segurança: {INT_F}°F ({INT_C}°C) no nugget mais grosso se quiser um número, ou abra um e procure vapor de ponta a ponta. A casquinha deve estar dourada por igual e estalar ao apertar. Se estiver dura em vez de crocante, a próxima leva precisa de um ou dois minutos a menos.',
      prepHeading: 'Antes de colocar',
      prepBody:
        'Confira se a embalagem diz totalmente cozido. Alguns empanados de frango são vendidos crus, e esses seguem a página de tiras de frango congeladas, com termômetro. Não descongele nem coloque óleo: a casquinha foi frita na fábrica. Deixe um pouco de espaço entre os nuggets para o ar chegar a todos os lados.',
      faqs: [
        {
          q: 'Quanto tempo levam os nuggets congelados na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F, agitando uma vez. O frango pipoca leva uns {SMALL_MIN} minutos e os formatos grandes uns {LARGE_MIN}.',
        },
        {
          q: 'Nuggets de frango congelados já vêm cozidos?',
          a: 'A maioria sim. A embalagem vai dizer “totalmente cozido”. Se disser “cru” ou “não cozido”, cozinhe até {INT_F}°F com termômetro, como frango cru.',
        },
        {
          q: 'Preciso virar os nuggets?',
          a: 'Uma agitada na metade basta. Pedaços pequenos se viram sozinhos quando você agita; não precisa virar um por um.',
        },
        {
          q: 'Por que meus nuggets ficam duros?',
          a: 'Ficaram tempo demais. Nuggets só precisam reaquecer, então dois minutos a mais ressecam. Tente o tempo mais curto na próxima leva.',
        },
        {
          q: 'Posso fazer nuggets e batata juntos?',
          a: 'Sim, se o cesto não estiver cheio. Comece pela batata e coloque os nuggets nos últimos {MIN} minutos para os dois terminarem juntos.',
        },
      ],
    },
    'frozen-tater-tots': {
      label: 'Tater tots congelados',
      metaTitle: 'Tater tots congelados na air fryer: tempo, temperatura e crocância',
      metaDescription:
        'Tater tots congelados na air fryer: {AF_F}°F por {MIN} minutos, agitando {SHAKES} vezes. Dos mini tots às coroas de batata, crocantes por fora e quentes por dentro.',
      metaKeywords: 'tater tots air fryer, tater tots congelados air fryer tempo, bolinhas de batata congeladas air fryer',
      heading: 'Tater tots congelados na air fryer',
      subDesc:
        'Tots e bolinhas de batata de pacote feitos direto do congelador. A configuração, as agitadas e como conseguir um centro quente dentro da crocância.',
      cardDesc: 'Agite duas vezes para cada lado criar casquinha.',
      sizeLabels: { small: 'Mini tots', medium: 'Tater tots comuns', large: 'Coroas de batata ou bolinhas grandes' },
      failureHeading: 'Por que os tots ficam crocantes por fora e frios por dentro',
      failureBody:
        'Um tot é um cilindro pequeno de batata ralada bem prensada, muito mais denso que uma batata frita do mesmo tamanho. O lado de fora frita rápido no ar quente e forma casquinha em poucos minutos, mas os fios apertados do centro demoram a esquentar, então um tot que parece dourado ainda pode estar morno e pastoso por dentro. Se você aumenta o calor para apressar, a casquinha escurece antes de o centro alcançar. A saída é uma configuração constante e tempo suficiente, com o cesto agitado duas vezes para os tots rolarem para uma face nova a cada vez. Como são redondos, eles rolam em vez de ficar deitados, e a agitada faz a virada por você.',
      workedExampleHeading: 'Exemplo prático: um pacote família',
      workedExampleTemplate:
        'Um pacote de tots diz {OVEN_F}°F por {OVEN_MIN} minutos no forno, virando uma vez. Numa air fryer de cesto isso vira {AF_F}°F por {MIN} minutos. Preaqueça {PREHEAT} minutos, coloque o suficiente para cobrir o fundo em uma camada e agite duas vezes, mais ou menos a um terço e a dois terços do tempo. Os mini tots ficam prontos em cerca de {SMALL_MIN} minutos e as coroas de batata em uns {LARGE_MIN}. Para muita gente, faça em duas levas em vez de amontoar.',
      donenessHeading: 'Como saber se estão prontos',
      donenessBody:
        'Os tots vêm pré-cozidos, então você julga a crocância e o calor. Devem estar bem dourados por todo lado e soar ocos quando batem um no outro no cesto. Morda um do meio da leva: o interior deve estar macio, fofo e quente. Se o lado de fora estiver pronto mas o centro ainda frio, não aumente o calor; dê mais dois minutos e agite de novo.',
      prepHeading: 'Antes de colocar',
      prepBody:
        'Faça direto do congelador e solte os que estiverem grudados. Não precisam de óleo, mas um spray leve dá uma casquinha mais escura e uniforme. Tempere com sal ou uma mistura de temperos na última agitada ou logo depois de pronto, quando a superfície ainda está um pouco oleosa e segura o tempero.',
      faqs: [
        {
          q: 'Quanto tempo levam os tater tots na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F, agitando {SHAKES} vezes. Os mini tots levam uns {SMALL_MIN} minutos e as coroas grandes uns {LARGE_MIN}.',
        },
        {
          q: 'Devo agitar ou virar os tater tots?',
          a: 'Agitar. Os tots são redondos e rolam para outra face quando você agita o cesto, então duas agitadas douram por igual sem virar um por um.',
        },
        {
          q: 'Por que meus tots ficam frios no meio?',
          a: 'São mais densos que a batata frita e precisam do tempo todo. Se você tira assim que parecem dourados, o centro prensado fica frio.',
        },
        {
          q: 'Tater tots precisam de óleo?',
          a: 'Não, são pré-fritos antes de congelar. Um spray leve só adiciona cor.',
        },
        {
          q: 'Posso fazer tots recheados na air fryer?',
          a: 'Sim. Faça os tots por completo, coloque queijo e coberturas e volte por um ou dois minutos até o queijo derreter.',
        },
      ],
    },
    'frozen-pizza': {
      label: 'Pizza congelada',
      metaTitle: 'Pizza congelada na air fryer: tempo, temperatura e que tamanho cabe',
      metaDescription:
        'Pizza congelada na air fryer: {AF_F}°F por {MIN} minutos para uma pizza individual. Que tamanhos cabem no cesto e como conseguir uma massa crocante sob o queijo derretido.',
      metaKeywords: 'pizza congelada air fryer, pizza congelada air fryer tempo, pizza individual air fryer',
      heading: 'Pizza congelada na air fryer',
      subDesc:
        'Pizzas congeladas individuais e mini, feitas direto do congelador. A configuração, que tamanhos cabem no seu cesto e como evitar que a cobertura fique pronta antes da massa.',
      cardDesc: 'A individual cabe no cesto; a família não.',
      sizeLabels: { small: 'Mini pizza, 13 cm (5")', medium: 'Pizza individual, 18–20 cm (7–8")', large: '25–30 cm (10–12"): só tipo forno ou 8 qt ou mais' },
      failureHeading: 'Por que a cobertura fica pronta antes da massa',
      failureBody:
        'Numa air fryer o calor vem de cima e o ventilador o sopra direto sobre a pizza. Queijo e cobertura ficam mais perto da resistência e começam a dourar quase na hora, enquanto a massa embaixo ainda é massa congelada apoiada no cesto. Se você coloca muito quente, sai calabresa queimada sobre uma massa pálida e mole. Uma configuração um pouco mais baixa do que você esperaria deixa o calor descer pela pizza, e a massa fica crocante quando o queijo já derreteu e borbulhou. O tamanho é a outra metade: uma pizza encostada nas paredes bloqueia o ar e a massa cozinha no vapor em vez de dourar. Ela precisa ficar deitada, com folga em volta da borda.',
      workedExampleHeading: 'Exemplo prático: uma pizza individual',
      workedExampleTemplate:
        'A caixa de uma pizza individual diz {OVEN_F}°F por {OVEN_MIN} minutos, direto na grade do forno. Numa air fryer de cesto isso vira {AF_F}°F por {MIN} minutos. Preaqueça {PREHEAT} minutos para a massa começar numa superfície quente, coloque a pizza deitada e não mexa; não há nada para virar. Olhe embaixo no fim do tempo mais curto levantando uma borda com a espátula. Uma mini pizza fica pronta em cerca de {SMALL_MIN} minutos; uma grande numa air fryer tipo forno precisa de uns {LARGE_MIN}.',
      donenessHeading: 'Como saber se está pronta',
      donenessBody:
        'Levante a borda: a parte de baixo deve estar dourada e firme, e a fatia deve ficar reta em vez de cair. O queijo precisa estar todo derretido e borbulhando no centro, não só nas bordas. Se a cobertura estiver pronta mas a massa ainda mole, cubra a pizza de leve com papel-alumínio e dê mais dois minutos.',
      prepHeading: 'Cabe?',
      prepBody:
        'Meça o cesto antes de comprar. Um cesto redondo de 5 qt tem por dentro só uns 20–22 cm (8 a 8½ polegadas) de largura, então uma pizza individual de 18 a 20 cm cabe com um pouco de folga. Uma de 25 ou 30 cm não cabe: precisa de uma air fryer tipo forno ou de um cesto de uns 8 qt ou mais. Tire toda a embalagem, inclusive o disco de papelão.',
      faqs: [
        {
          q: 'Quanto tempo leva a pizza congelada na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F para uma pizza individual de 18–20 cm. Uma mini de 13 cm leva uns {SMALL_MIN} minutos.',
        },
        {
          q: 'Que tamanho de pizza congelada cabe na air fryer?',
          a: 'Num cesto de 5 qt, uns 20 cm no máximo, porque por dentro ele tem só uns 20–22 cm. Uma pizza de 25–30 cm precisa de uma air fryer tipo forno ou de um cesto de 8 qt ou mais; senão, corte ao meio e faça em duas vezes.',
        },
        {
          q: 'Preciso preaquecer para a pizza congelada?',
          a: 'Sim, por {PREHEAT} minutos. Um cesto quente dá vantagem à massa congelada para ela dourar antes de o queijo passar do ponto.',
        },
        {
          q: 'Por que a massa da minha pizza fica mole?',
          a: 'A pizza é grande demais para o cesto e o ar não circula, ou o papelão ficou embaixo. Ela precisa ficar deitada e com espaço nas bordas.',
        },
        {
          q: 'Devo virar a pizza congelada?',
          a: 'Não. A cobertura cai. Deixe deitada e olhe a parte de baixo no fim do tempo mais curto.',
        },
      ],
    },
    'frozen-fish-sticks': {
      label: 'Iscas de peixe congeladas',
      metaTitle: 'Iscas de peixe congeladas na air fryer: tempo e temperatura',
      metaDescription:
        'Iscas de peixe congeladas na air fryer: {AF_F}°F por {MIN} minutos, virando aos {FLIP}, prontas a {INT_F}°F. Iscas, bocados e filés empanados de pacote.',
      metaKeywords: 'iscas de peixe congeladas air fryer, peixe empanado congelado air fryer, fish sticks air fryer tempo',
      heading: 'Iscas de peixe congeladas na air fryer',
      subDesc:
        'Iscas de peixe, fish sticks e filés empanados feitos direto do congelador. A configuração, uma virada com cuidado e como manter o empanado preso ao peixe.',
      cardDesc: 'Vire com cuidado: o empanado firma antes do peixe.',
      sizeLabels: { small: 'Bocados ou mini iscas', medium: 'Iscas de peixe', large: 'Filés empanados ou à milanesa' },
      failureHeading: 'Por que o empanado rasga e o peixe desmancha',
      failureBody:
        'Uma isca de peixe é um bloco de peixe branco e lascado preso só pelo empanado. Na air fryer, a farinha de rosca firma e doura rápido na face voltada para o ventilador, enquanto o peixe por dentro ainda está mole e o empanado de baixo continua úmido contra o cesto. Se você vira cedo demais, a parte de baixo fica presa na grade, o empanado arranca e o peixe quebra. Se vira sem cuidado, acontece o mesmo. Espere a metade do tempo, quando a base já firmou, e passe uma espátula fina ou uma pinça por baixo de cada isca para girá-la de uma vez. Filés à milanesa com massa são ainda mais frágeis que os empanados, então um pouco de óleo no cesto ajuda a soltar.',
      workedExampleHeading: 'Exemplo prático: uma caixa de iscas de peixe',
      workedExampleTemplate:
        'Uma caixa de iscas de peixe empanadas diz {OVEN_F}°F por {OVEN_MIN} minutos no forno, virando uma vez. Numa air fryer de cesto isso vira {AF_F}°F por {MIN} minutos. Preaqueça {PREHEAT} minutos, coloque as iscas em uma camada com um pequeno espaço entre elas e vire aos {FLIP} minutos. Os bocados precisam de uns {SMALL_MIN} minutos; os filés empanados grossos, de uns {LARGE_MIN}. Se a caixa trouxer uma configuração para forno ventilado, {FAN_F}°F por {FAN_MIN} minutos, a configuração da air fryer é a mesma.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'O empanado deve estar dourado e crocante dos dois lados, e o peixe por dentro branco, opaco e soltando em lascas ao apertar com um garfo. Um termômetro no centro da peça mais grossa deve marcar {INT_F}°F ({INT_C}°C). Se a segunda face ainda estiver pálida, faltam um ou dois minutos; uma isca que dobra em vez de ficar reta não está quente por dentro.',
      prepHeading: 'Antes de colocar',
      prepBody:
        'Faça direto do congelador; iscas descongeladas amolecem e perdem o empanado. Passe um pouco de óleo no cesto ou use um papel perfurado para a farinha de rosca não grudar. Separe as iscas congeladas juntas antes de colocar, porque separar depois rasga o empanado.',
      faqs: [
        {
          q: 'Quanto tempo levam as iscas de peixe na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F, virando aos {FLIP} minutos. Os bocados levam uns {SMALL_MIN} minutos e os filés empanados uns {LARGE_MIN}.',
        },
        {
          q: 'Preciso virar as iscas de peixe?',
          a: 'Sim, uma vez na metade e com cuidado. Antes disso a parte de baixo está mole demais para levantar inteira.',
        },
        {
          q: 'Por que o empanado gruda no cesto?',
          a: 'A base ainda estava úmida na hora de virar ou o cesto estava seco. Passe um pouco de óleo e espere a metade para virar.',
        },
        {
          q: 'Iscas de peixe precisam de óleo?',
          a: 'No peixe não; o empanado já vem pré-frito. Um pouco de óleo no cesto evita que grudem.',
        },
        {
          q: 'Posso fazer filés à milanesa com massa do mesmo jeito?',
          a: 'Sim, por cerca de {LARGE_MIN} minutos. A massa é mais mole que a farinha de rosca, então use papel e vire com uma espátula larga.',
        },
      ],
    },
    'frozen-chicken-tenders': {
      label: 'Tiras de frango congeladas',
      metaTitle: 'Tiras de frango congeladas na air fryer: cruas ou cozidas?',
      metaDescription:
        'Tiras de frango empanadas congeladas na air fryer: {AF_F}°F por {MIN} minutos, virando aos {FLIP}, conferidas a {INT_F}°F. Como saber pela embalagem se são cruas ou cozidas.',
      metaKeywords: 'tiras de frango congeladas air fryer, frango empanado congelado air fryer, chicken tenders congelado air fryer',
      heading: 'Tiras de frango congeladas na air fryer',
      subDesc:
        'Tiras empanadas, chicken tenders e dedinhos de frango do congelador. A configuração, a virada e a única linha da embalagem que decide quanto cuidado você precisa ter.',
      cardDesc: 'Leia a embalagem: muitas são vendidas cruas.',
      sizeLabels: { small: 'Tiras finas ou dedinhos de frango', medium: 'Tiras empanadas comuns', large: 'Tiras grossas ou caseiras' },
      failureHeading: 'A embalagem diz cru, o empanado diz pronto',
      failureBody:
        'Tiras empanadas vêm em dois tipos que parecem idênticos no pacote. Umas são totalmente cozidas e só precisam reaquecer. Muitas outras, principalmente as de marca própria e as caseiras, são frango cru num empanado já dourado, e a embalagem diz isso em letra miúda: não cozido, cozinhar completamente ou cru. Esse empanado foi frito só o bastante para firmar, então parece dourado antes de a air fryer começar, e é fácil tirar quando parece pronto com o frango ainda cru por dentro. Uma tira também é mais grossa que um nugget, então o centro demora mais para chegar à temperatura. Trate todo pacote como cru, a não ser que diga claramente totalmente cozido, e use um termômetro na tira mais grossa.',
      workedExampleHeading: 'Exemplo prático: um pacote de tiras empanadas cruas',
      workedExampleTemplate:
        'Um pacote de tiras empanadas não cozidas diz {OVEN_F}°F por {OVEN_MIN} minutos, virando uma vez. Numa air fryer de cesto isso vira {AF_F}°F por {MIN} minutos. Preaqueça {PREHEAT} minutos, coloque de seis a oito tiras deitadas sem encostar e vire aos {FLIP} minutos. Dedinhos de frango finos levam uns {SMALL_MIN} minutos; tiras grossas caseiras precisam de uns {LARGE_MIN}. Meça a mais grossa antes de servir; as já cozidas podem sair alguns minutos antes.',
      donenessHeading: 'Como saber se estão prontas',
      donenessBody:
        'Para tiras cruas, {INT_F}°F ({INT_C}°C) na mais grossa, com a sonda entrando pela ponta para ficar bem no meio. A cor do empanado aqui não diz nada, porque ele foi dourado antes de congelar. Tiras já cozidas só precisam estar quentes de ponta a ponta. Nos dois casos o empanado deve ficar crocante dos dois lados, sem partes moles onde se tocavam.',
      prepHeading: 'Antes de colocar',
      prepBody:
        'Procure primeiro a linha de preparo na embalagem e veja se diz cru ou totalmente cozido. Não descongele. Deixe espaço entre as tiras e, se o empanado parecer seco e farinhento, dê um spray leve de óleo. Lave as mãos depois de mexer em frango empanado cru, mesmo congelado.',
      faqs: [
        {
          q: 'Quanto tempo levam as tiras de frango congeladas na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F, virando aos {FLIP} minutos. As finas levam uns {SMALL_MIN} minutos e as grossas uns {LARGE_MIN}.',
        },
        {
          q: 'Como sei se as tiras congeladas são cruas?',
          a: 'A embalagem diz. Procure “não cozido”, “cru” ou “cozinhar completamente” perto das instruções. Se não estiver claro, trate como cru e use um termômetro.',
        },
        {
          q: 'A que temperatura as tiras cruas devem chegar?',
          a: '{INT_F}°F ({INT_C}°C) na peça mais grossa, medida com termômetro, não pela cor.',
        },
        {
          q: 'Qual a diferença entre tiras e nuggets?',
          a: 'Nuggets quase sempre vêm cozidos e são pequenos. Tiras são mais grossas e muitas vezes cruas, então precisam de mais tempo e de termômetro.',
        },
        {
          q: 'Preciso virar as tiras congeladas?',
          a: 'Sim, uma vez aos {FLIP} minutos, para o lado encostado no cesto também ficar crocante.',
        },
      ],
    },
    'frozen-hash-browns': {
      label: 'Hash browns congelados',
      metaTitle: 'Hash browns congelados na air fryer: rösti, tempo e temperatura',
      metaDescription:
        'Hash browns congelados na air fryer: {AF_F}°F por {MIN} minutos, virando aos {FLIP}. Das mini redondas às mais grossas, douradas dos dois lados sem grudar.',
      metaKeywords: 'hash brown congelado air fryer, batata rösti congelada air fryer, hash brown air fryer tempo',
      heading: 'Hash browns congelados na air fryer',
      subDesc:
        'Discos e redondinhas de batata ralada do congelador. A configuração, a única virada e como dourar as duas faces em vez de uma.',
      cardDesc: 'Discos achatados: uma virada na metade.',
      sizeLabels: { small: 'Mini redondas ou bocados', medium: 'Discos comuns', large: 'Discos grossos ou grandes' },
      failureHeading: 'Por que uma face fica pálida e gruda',
      failureBody:
        'Um hash brown é achatado, então apoia uma face inteira na grade do cesto. A face de cima recebe todo o ar do ventilador e doura, enquanto a de baixo recebe bem menos ar e fica pálida. Agitar não resolve, porque um disco achatado só desliza sobre o mesmo lado. A batata ralada também solta amido ao esquentar, e num cesto seco esse amido cola a base no metal, então a casquinha arranca quando você finalmente tenta mexer. A solução é uma única virada na metade, com espátula, e uma película fina de óleo no cesto ou nos discos para o amido dourar em vez de grudar. Depois da virada, a face pálida fica de frente para o ventilador e alcança a outra.',
      workedExampleHeading: 'Exemplo prático: café da manhã para quatro',
      workedExampleTemplate:
        'Uma caixa de hash browns diz {OVEN_F}°F por {OVEN_MIN} minutos, virando uma vez. Numa air fryer de cesto isso vira {AF_F}°F por {MIN} minutos. Preaqueça {PREHEAT} minutos, coloque quatro discos deitados sem sobrepor e vire aos {FLIP} minutos. As mini redondas precisam de uns {SMALL_MIN} minutos e os discos grossos de uns {LARGE_MIN}. Não sobra espaço para mais nada, então faça o bacon ou as linguiças antes ou depois, não junto.',
      donenessHeading: 'Como saber se estão prontos',
      donenessBody:
        'As duas faces devem estar bem douradas e crocantes, com as bordas um pouco mais escuras. Aperte o centro com uma espátula: deve estar firme, não mole, e o interior deve estar quente e macio ao cortar um. Se a segunda face ainda estiver pálida, dê um ou dois minutos a mais em vez de aumentar o calor.',
      prepHeading: 'Antes de colocar',
      prepBody:
        'Faça direto do congelador e não empilhe. Pincele ou borrife um pouco de óleo nos discos, ou unte o cesto, para o amido dourar em vez de soldar na grade. Tempere com sal e pimenta depois de virar.',
      faqs: [
        {
          q: 'Quanto tempo levam os hash browns congelados na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F, virando aos {FLIP} minutos. As mini redondas levam uns {SMALL_MIN} minutos e os discos grossos uns {LARGE_MIN}.',
        },
        {
          q: 'Preciso virar os hash browns?',
          a: 'Sim. Eles são achatados, então ao agitar a mesma face continua embaixo. Uma virada na metade doura os dois lados.',
        },
        {
          q: 'Por que os hash browns grudam no cesto?',
          a: 'O amido da batata cola num cesto seco. Um spray leve de óleo evita isso.',
        },
        {
          q: 'Posso fazer batata ralada solta congelada?',
          a: 'Sim, numa camada fina sobre papel, bem apertada. Vire por partes na metade; leva alguns minutos a mais que os discos.',
        },
        {
          q: 'Qual a diferença entre hash browns e tater tots aqui?',
          a: 'Os discos são achatados e viram uma vez. Os tots são redondos, então são agitados e rolam sozinhos para faces novas.',
        },
      ],
    },
    'frozen-egg-rolls': {
      label: 'Rolinhos primavera congelados',
      metaTitle: 'Rolinhos primavera congelados na air fryer: tempo e temperatura',
      metaDescription:
        'Rolinhos primavera e egg rolls congelados na air fryer: {AF_F}°F por {MIN} minutos, virando aos {FLIP}. Massa crocante e com bolhas, recheio quente.',
      metaKeywords: 'rolinho primavera congelado air fryer, egg roll congelado air fryer, samosa congelada air fryer',
      heading: 'Rolinhos primavera congelados na air fryer',
      subDesc:
        'Egg rolls, rolinhos primavera e salgadinhos enrolados parecidos, feitos direto do congelador. A configuração, a virada e como esquentar o recheio antes de as pontas queimarem.',
      cardDesc: 'Borrife a massa e vire uma vez.',
      sizeLabels: { small: 'Mini rolinhos primavera', medium: 'Egg rolls comuns', large: 'Egg rolls grandes ou samosas' },
      failureHeading: 'Por que as pontas queimam e o meio fica frio',
      failureBody:
        'Um rolinho é uma massa fina e seca enrolada em volta de um recheio grosso e úmido. A massa pega cor em minutos, e as pontas dobradas, onde a massa é mais fina e fica exposta ao ar, criam bolhas e escurecem primeiro. Enquanto isso, o recheio de repolho e carne começou totalmente congelado e demora a esquentar, então um rolinho que parece perfeito por fora pode estar gelado no meio. Duas coisas resolvem. Um spray leve de óleo sobre a massa deixa ela dourar por igual e devagar, em vez de ressecar e queimar nas pontas. E uma virada na metade leva a face pálida para o ventilador enquanto dá tempo para o recheio alcançar. Deixe espaço entre os rolinhos para os lados também ficarem crocantes.',
      workedExampleHeading: 'Exemplo prático: uma caixa de egg rolls',
      workedExampleTemplate:
        'Uma caixa de egg rolls congelados diz {OVEN_F}°F por {OVEN_MIN} minutos na assadeira, virando uma vez. Numa air fryer de cesto isso vira {AF_F}°F por {MIN} minutos. Preaqueça {PREHEAT} minutos, borrife os rolinhos com um pouco de óleo, coloque em uma camada com espaço entre cada um e vire aos {FLIP} minutos. Os mini rolinhos primavera precisam de uns {SMALL_MIN} minutos e os egg rolls grandes de uns {LARGE_MIN}. Espere dois minutos antes de morder: o recheio guarda muito calor.',
      donenessHeading: 'Como saber se estão prontos',
      donenessBody:
        'A massa deve estar dourada e com bolhas por todo lado, sem partes brancas e farinhentas, e estalar ao apertar. O teste de verdade é o recheio: corte um ao meio e veja se está soltando vapor bem no centro. Se a massa estiver pronta mas o centro ainda frio, dê mais dois minutos; as pontas pegam um pouco mais de cor, mas não devem queimar nesta configuração.',
      prepHeading: 'Antes de colocar',
      prepBody:
        'Faça direto do congelador; a massa descongelada amolece e rasga. Borrife ou pincele um pouco de óleo em todos os lados, o que importa mais nestes do que em qualquer outra coisa do congelador. Separe com cuidado os que congelaram juntos para a massa não abrir. Sirva o molho à parte para a massa continuar crocante.',
      faqs: [
        {
          q: 'Quanto tempo levam os rolinhos primavera congelados na air fryer?',
          a: 'Cerca de {MIN} minutos a {AF_F}°F, virando aos {FLIP} minutos. Os mini levam uns {SMALL_MIN} minutos e os egg rolls grandes uns {LARGE_MIN}.',
        },
        {
          q: 'Rolinhos congelados precisam de óleo na air fryer?',
          a: 'Um spray leve, sim. Sem ele a massa resseca, fica farinhenta e queima nas pontas.',
        },
        {
          q: 'Por que meus rolinhos ficam frios por dentro?',
          a: 'O recheio começou congelado e precisa do tempo todo. Corte um para conferir em vez de confiar na cor.',
        },
        {
          q: 'Funciona para samosas e rolinhos primavera?',
          a: 'Sim. Os mini rolinhos são mais rápidos e as samosas grossas levam mais ou menos o mesmo que os egg rolls grandes.',
        },
        {
          q: 'Preciso descongelar os rolinhos antes?',
          a: 'Não. A massa descongelada absorve a umidade do recheio e rasga quando você mexe.',
        },
      ],
    },
  },
};

export const presetsIndex: Dictionary['presetsIndex'] = {
  metaTitle: 'Predefinições para air fryer: tempo e temperatura de cada alimento',
  metaDescription:
    'Tempo e temperatura na air fryer para frango, asinhas, salmão, bacon, bife, batatas e mais: cada predefinição com temperatura interna, tempos por tamanho e equivalente no forno.',
  metaKeywords: 'tempos air fryer, tabela tempo temperatura air fryer, predefinições air fryer',
  backLink: 'Todas as ferramentas',
  heading: 'Predefinições de alimentos para air fryer',
  intro:
    'Uma página por alimento, cada uma uma ferramenta que funciona e não uma linha de tabela: o ajuste, quando virar ou chacoalhar, a temperatura interna de cada proteína, os tempos por tamanho e o equivalente no forno nos dois sentidos.',
  categories: {
    poultry: 'Aves',
    meat: 'Carnes',
    fish: 'Peixes e frutos do mar',
    veg: 'Legumes e batatas',
    baked: 'Forno e confeitaria',
    reheat: 'Reaquecer',
    frozen: 'Congelados',
  },
  howHeading: 'Como estas predefinições são definidas',
  howBody:
    'Cada predefinição parte de uma air fryer de cesto de 4–6 litros, preaquecida, com o alimento numa camada só. Os equivalentes em forno convencional e com ventilação de cada página são calculados pelo mesmo motor do conversor, então batem entre si, e o conversor de cada página já vem com esse alimento escolhido caso você parta de uma receita de forno. Cada página começa pelo jeito específico como aquele alimento dá errado na air fryer, porque isso decide o resultado mais do que o número no seletor. Sem e-mail, sem cadastro, nada para instalar.',
  relatedFlagshipLink: 'Conversor de forno para air fryer',
  relatedChartLink: 'Tabela de conversão para imprimir',
};

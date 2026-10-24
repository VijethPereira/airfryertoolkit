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

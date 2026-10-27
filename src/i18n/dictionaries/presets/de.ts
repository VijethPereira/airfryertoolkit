import type { Dictionary } from '../../types';

export const presets: Dictionary['presets'] = {
  backLink: 'Alle Voreinstellungen',
  pageTag: 'Lebensmittel-Voreinstellung',
  answerTemplate: '{LABEL} in der Heißluftfritteuse: {AF_F}°F / {AF_C}°C für {MIN} Min.',
  answerFlipSuffix: ', nach {FLIP} Min. wenden',
  answerShakeSuffix: ', {SHAKES}× schütteln',
  internalTemplate: 'Gar bei {INT_F}°F ({INT_C}°C) an der dicksten Stelle',
  internalCrisp: 'Gar nach Farbe und Knusprigkeit, nicht nach Thermometer',
  internalToothpick: 'Garprobe mit dem Holzstäbchen, nicht nach der Farbe',
  ovenHeading: 'Entsprechung im Backofen',
  ovenTemplate: 'Ober-/Unterhitze: {OVEN_F}°F ({OVEN_C}°C, britische Gasstufe {OVEN_MARK}) für {OVEN_MIN} Min.',
  fanTemplate: 'Umluft: {FAN_F}°F ({FAN_C}°C) für {FAN_MIN} Min.',
  ovenNote: 'Du gehst von einem Ofenrezept aus? Der Umrechner unten ist schon auf dieses Lebensmittel eingestellt – gib Temperatur und Zeit aus dem Rezept ein.',
  sizingHeading: 'Zeit nach Größe',
  sizingIntro: 'Gleiche Temperatur, andere Zeit: Die Dicke entscheidet, wie lange die Hitze bis in die Mitte braucht.',
  sizingHeaders: { size: 'Größe', airFryer: 'Heißluftfritteuse', oven: 'Backofen' },
  minutesTemplate: '{MIN} Min.',
  specTemplate: '{AF_F}°F · {MIN} Min.',
  specFlipSuffix: ' · wenden nach {FLIP}',
  specShakeSuffix: ' · ×{SHAKES} schütteln',
  relatedPresetsHeading: 'Ähnliche Voreinstellungen',
  tempLandingLinkTemplate: '{OVEN_F}°F im Ofen in der Heißluftfritteuse, alle Lebensmittel',
  relatedFlagshipLink: 'Umrechner Backofen zu Heißluftfritteuse',
  relatedIndexLink: 'Alle Lebensmittel-Voreinstellungen',
  relatedChartLink: 'Umrechnungstabelle zum Ausdrucken',
  faqHeading: 'Häufige Fragen',
  frozen: {
    ovenHeading: 'Was auf der Packung steht',
    ovenTemplate: 'Packung für Ober-/Unterhitze: {OVEN_F}°F ({OVEN_C}°C, britische Gasstufe {OVEN_MARK}) für {OVEN_MIN} Min.',
    fanTemplate: 'Packung für Umluft: {FAN_F}°F ({FAN_C}°C) für {FAN_MIN} Min.',
    ovenNote: 'Auf deiner Packung stehen andere Werte? Der Umrechner unten ist schon auf dieses Lebensmittel eingestellt – gib Temperatur und Zeit von der Packung ein.',
    sizingHeaders: { size: 'Größe', airFryer: 'Heißluftfritteuse', oven: 'Laut Packung' },
    relatedFlagshipLink: 'Tiefkühlpackungs-Umrechner',
  },
  reheat: {
    ovenHeading: 'Stattdessen im Backofen aufwärmen',
    ovenTemplate: 'Ober-/Unterhitze: {OVEN_F}°F ({OVEN_C}°C, britische Gasstufe {OVEN_MARK}) für {OVEN_MIN} Min.',
    fanTemplate: 'Umluft: {FAN_F}°F ({FAN_C}°C) für {FAN_MIN} Min.',
    ovenNote: 'Reste sind schon gar, diese Einstellungen wärmen sie also nur auf und machen sie wieder knusprig; der Backofen braucht länger, weil er erst den ganzen Garraum aufheizt.',
    sizingHeaders: { size: 'Portion', airFryer: 'Heißluftfritteuse', oven: 'Im Ofen aufwärmen' },
    relatedFlagshipLink: 'Umrechner Backofen zu Heißluftfritteuse',
    widgetHeading: 'Du kochst nach einem Backofenrezept?',
    widgetNote: 'Dieser Umrechner macht aus Backofenrezepten Einstellungen für die Heißluftfritteuse. Zum Aufwärmen ist er nicht gedacht, deshalb startet er mit den Standardwerten; für Reste gilt die Einstellung oben.',
  },
  pages: {
    'chicken-breast': {
      label: 'Hähnchenbrust',
      metaTitle: 'Hähnchenbrust in der Heißluftfritteuse: Zeit, Temperatur, Kerntemperatur',
      metaDescription:
        'Hähnchenbrust ohne Knochen in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} wenden, gar bei {INT_F}°F. Zeiten nach Größe, Ofen-Entsprechung und Live-Umrechner.',
      metaKeywords: 'Hähnchenbrust Heißluftfritteuse Zeit, Hähnchenbrustfilet Airfryer, wie lange Hähnchenbrust Heißluftfritteuse',
      heading: 'Hähnchenbrust in der Heißluftfritteuse',
      subDesc:
        'Hähnchenbrustfilet ohne Haut, frisch zubereitet. Die Einstellung, das Wenden, die Kerntemperatur und wie sie nicht trocken wird.',
      cardDesc: 'Die meistgesuchte Voreinstellung. Bei {INT_F}°F Kerntemperatur herausnehmen.',
      sizeLabels: { small: 'Klein, 150 g', medium: 'Mittel, 220 g', large: 'Groß, 300 g' },
      failureHeading: 'Warum Hähnchenbrust in der Heißluftfritteuse trocken wird',
      failureBody:
        'Eine Hähnchenbrust ist ein Keil: dick an einem Ende, dünn am anderen. In der schnellen Luft des Korbs erreicht das dünne Ende {INT_F}°F Minuten vor dem dicken, und wenn die Mitte endlich sicher ist, ist die Spitze trocken und faserig. Diese Form, nicht das Gerät, gibt der Hähnchenbrust ihren Ruf, zäh zu werden. Gleiche die Dicke vor dem Garen aus. Klopf das dicke Ende unter Frischhaltefolie flach, bis die ganze Brust ungefähr gleich hoch ist, oder schneide eine große Brust waagerecht in zwei dünnere Schnitzel, was die Zeit außerdem auf die kleine Zeile der Tabelle senkt. Nimm sie dann heraus, sobald die dickste Stelle {INT_F}°F zeigt, nicht später. Jede Minute darüber drückt Saft heraus, und keine Marinade bringt ihn zurück.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Zwei mittlere Brustfilets von je etwa 220 g, mit Öl bestrichen und gewürzt. {PREHEAT} Minuten vorheizen, dann bei {AF_F}°F für {MEDIUM_MIN} Minuten garen und nach {FLIP} Minuten wenden, damit beide Seiten Farbe bekommen. Eine große Brust von 300 g braucht bei gleicher Temperatur etwa {LARGE_MIN} Minuten. Dieselben Filets bräuchten im Backofen mit Ober-/Unterhitze {OVEN_MIN} Minuten bei {OVEN_F}°F, die Heißluftfritteuse spart also ein paar Minuten und bräunt die Außenseite stärker.',
      donenessHeading: 'Woran du erkennst, dass sie gar ist',
      donenessBody:
        'Miss mit einem Thermometer an der dicksten Stelle, seitlich eingestochen, damit die Spitze in der Mitte sitzt und nicht durchsticht. {INT_F}°F ({INT_C}°C) ist sofort sicher; beim Ruhen steigt der Wert noch um ein paar Grad. Ohne Thermometer schneidest du die dickste Stelle an: Das Fleisch sollte durchgehend weiß sein und klaren Saft haben, nicht rosa oder glasig. Lass das Hähnchen fünf Minuten auf einem Brett ruhen, bevor du es aufschneidest, sonst landet der Saft auf dem Brett statt im Fleisch.',
      prepHeading: 'Bevor sie hineinkommt',
      prepBody:
        'Tupf die Brust mit Küchenpapier trocken, damit die Oberfläche bräunt statt zu dämpfen, reib sie dann mit einem Teelöffel Öl ein und würze sie. Eine kurze Salzlake von 30 Minuten macht einen deutlichen Unterschied bei der Saftigkeit. Lass Platz zwischen den Filets im Korb; zwei, die sich berühren, dämpfen an der Kontaktstelle. Panierte Filets brauchen dieselbe Temperatur, aber ein bis zwei Minuten länger, bis die Panade fest ist.',
      faqs: [
        {
          q: 'Wie lange braucht Hähnchenbrust in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für ein mittleres Filet von etwa 220 g, nach {FLIP} Minuten gewendet. Kleine Filets brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}. Entscheide immer nach Temperatur, nicht nach Zeit.',
        },
        {
          q: 'Welche Kerntemperatur braucht Hähnchenbrust?',
          a: '{INT_F}°F ({INT_C}°C) an der dicksten Stelle. Nimm sie heraus, sobald der Wert erreicht ist; beim Ruhen steigt er noch etwas.',
        },
        {
          q: 'Muss ich Hähnchenbrust in der Heißluftfritteuse wenden?',
          a: 'Ja, einmal, etwa zur Hälfte der Zeit. Die Unterseite bekommt weniger direkte Luft und bleibt blasser; durch das Wenden wird die Farbe auf beiden Seiten gleichmäßig.',
        },
        {
          q: 'Kann ich gefrorene Hähnchenbrust in der Heißluftfritteuse garen?',
          a: 'Ja, aber sie braucht eine niedrigere Temperatur und mehr Zeit, damit die Mitte sicher gar ist, bevor die Außenseite austrocknet. Nutze für gefrorenes Hähnchen den Tiefkühlmodus statt dieser Einstellung für frisches.',
        },
        {
          q: 'Was entspricht dieser Einstellung im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    'chicken-wings': {
      label: 'Chicken Wings',
      metaTitle: 'Chicken Wings in der Heißluftfritteuse: Zeit, Temperatur, knusprige Haut',
      metaDescription:
        'Knusprige Chicken Wings in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} gewendet. Warum die Haut weich bleibt, Zeiten nach Größe und Ofen-Entsprechung.',
      metaKeywords: 'Chicken Wings Heißluftfritteuse Zeit, Hähnchenflügel Airfryer, knusprige Wings Heißluftfritteuse',
      heading: 'Chicken Wings in der Heißluftfritteuse',
      subDesc:
        'Frische Flügelstücke, gegart, bis die Haut knackt. Die Einstellung, das Wenden und warum die Soße zuletzt kommt.',
      cardDesc: 'Erst trocken tupfen; Soße erst nach dem Garen.',
      sizeLabels: { small: 'Kleine Wings', medium: 'Normale Flügelstücke', large: 'Große Wings' },
      failureHeading: 'Warum Wings aus der Heißluftfritteuse weich bleiben',
      failureBody:
        'Die Haut von Hähnchenflügeln besteht vor allem aus Wasser und Fett. Damit sie knusprig wird, muss das Wasser verdampfen und das Fett ausbraten, und beides braucht eine trockene Oberfläche und Platz um jedes Stück. Wings direkt aus der Packung sind nass, also gehen die ersten Minuten fürs Dämpfen drauf; ein voller Korb hält diesen Dampf fest, und die Haut wird ledrig und blass, egal wie lange sie gart. Soße vor dem Garen macht es schlimmer, weil der Zucker verbrennt, während die Haut darunter weich bleibt. Die Lösung liegt fast ganz in der Vorbereitung: Wings gründlich trocknen, in einer Lage mit Lücken auslegen und erst nach dem Garen in Soße schwenken. Zwei Durchgänge ergeben bessere Wings als ein voller, und der zweite geht schneller, weil der Korb schon heiß ist.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Ein Pfund normale Flügelstücke, trocken getupft und mit Salz und einem Teelöffel Backpulver vermischt. {PREHEAT} Minuten vorheizen, bei {AF_F}°F für {MEDIUM_MIN} Minuten garen und nach {FLIP} Minuten schütteln oder wenden. Große Wings brauchen etwa {LARGE_MIN} Minuten. Direkt aus dem Korb in Soße schwenken. Im Backofen braucht dasselbe Blech {OVEN_F}°F für etwa {OVEN_MIN} Minuten, mit deutlich weniger Knusprigkeit.',
      donenessHeading: 'Woran du erkennst, dass sie gar sind',
      donenessBody:
        'Wings sind bei {INT_F}°F ({INT_C}°C) sicher, schmecken aber deutlich darüber besser: Dunkles Fleisch und das Bindegewebe ums Gelenk werden bei 175–190°F weich, weshalb ein richtig knuspriger Wing nie roh ist. Achte auf tiefgoldene, straffe Haut mit Bläschen und Fleisch, das sich am Gelenk vom Knochen löst. Ist die Haut am Ende noch blass und weich, gib drei Minuten dazu, statt die Temperatur zu erhöhen.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Tupf die Wings mit Küchenpapier trocken oder lass sie ein paar Stunden offen auf einem Gitter im Kühlschrank liegen. Eine dünne Schicht Backpulver (kein Natron) hebt den pH-Wert der Haut und hilft ihr, Blasen zu werfen. Salzen ja, Öl nein: Wings bringen genug eigenes Fett mit. Trenne ganze Flügel am Gelenk und lege die Stücke mit der Haut nach oben aus, ohne dass sie sich überlappen.',
      faqs: [
        {
          q: 'Wie lange brauchen Chicken Wings in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für normale frische Wings, nach {FLIP} Minuten geschüttelt oder gewendet. Kleine brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}.',
        },
        {
          q: 'Bei welcher Temperatur sind Chicken Wings gar?',
          a: 'Sicher sind sie bei {INT_F}°F ({INT_C}°C), aber die meisten garen Wings höher, auf 175–190°F, für zartes Fleisch und knusprige Haut.',
        },
        {
          q: 'Soße vor oder nach der Heißluftfritteuse?',
          a: 'Danach. Soße auf rohen Wings verbrennt, bevor die Haut darunter knusprig wird. Schwenk die fertigen Wings in einer Schüssel in warmer Soße und serviere sie sofort.',
        },
        {
          q: 'Wozu Backpulver auf den Wings?',
          a: 'Eine dünne Schicht macht die Haut basischer, sodass sie besser bräunt und Blasen wirft. Nimm etwa einen Teelöffel pro Pfund, und achte darauf, dass es Backpulver ist, kein Natron.',
        },
        {
          q: 'Gilt diese Einstellung auch für gefrorene Wings?',
          a: 'Nein. Gefrorene Wings haben ihre eigene Zeit; nutze den Tiefkühlmodus, der die Hitze hoch hält und Schüttelpunkte ergänzt, damit zusammengefrorene Stücke sich trennen.',
        },
      ],
    },
    'chicken-thighs': {
      label: 'Hähnchenschenkel',
      metaTitle: 'Hähnchenschenkel mit Knochen in der Heißluftfritteuse: Zeit und Temperatur',
      metaDescription:
        'Hähnchenschenkel mit Knochen und Haut in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} gewendet. Knusprige Haut, saftiges Fleisch, Zeiten nach Größe.',
      metaKeywords: 'Hähnchenschenkel Heißluftfritteuse Zeit, Hähnchenoberschenkel Airfryer, Hähnchenschenkel mit Knochen Heißluftfritteuse',
      heading: 'Hähnchenschenkel in der Heißluftfritteuse',
      subDesc:
        'Oberschenkel mit Knochen und Haut. Die Einstellung, welche Seite zuerst nach unten kommt, und warum Schenkel eine höhere Kerntemperatur wollen als Brust.',
      cardDesc: 'Erst mit der Haut nach unten, zum Schluss nach oben.',
      sizeLabels: { small: 'Klein, 120–140 g', medium: 'Mittel, 170–200 g', large: 'Groß, ab 225 g' },
      failureHeading: 'Das Schenkel-Problem: gummiartige Haut, rosa am Knochen',
      failureBody:
        'Schenkel misslingen auf zwei Arten zugleich. Die Haut oben bräunt schnell, aber das Fett darunter braucht Zeit zum Ausbraten, deshalb versteckt ein Schenkel, der fertig aussieht, oft eine gummiartige Schicht unter der Kruste. Gleichzeitig wird das Fleisch direkt am Knochen als Letztes heiß und kann noch rosa sein, wenn die Außenseite perfekt ist. Mit der Haut nach unten zu beginnen löst das meiste. Liegt die Haut am Korb, brät das Fett langsam in die Schublade aus, während das Fleisch durchgart; dreht man den Schenkel für die zweite Hälfte mit der Haut nach oben, wird die nun dünne Haut in der direkten Luft knusprig. In einem Punkt ist der Schenkel gnädig: Dunkles Fleisch bleibt weit über der sicheren Temperatur saftig, ein paar Extraminuten für den Knochen kosten also kaum etwas.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Vier mittlere Schenkel mit Knochen, je etwa 180 g. {PREHEAT} Minuten vorheizen, mit der Haut nach unten einlegen und bei {AF_F}°F garen; nach {FLIP} Minuten mit der Haut nach oben wenden und nach {MEDIUM_MIN} Minuten fertig garen. Große Schenkel brauchen etwa {LARGE_MIN} Minuten. In einer Heißluftfritteuse im Ofenformat gibt der Umrechner {OS_F}°F für {OS_MIN} Minuten an. Ober-/Unterhitze braucht {OVEN_F}°F für etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass sie gar sind',
      donenessBody:
        'Miss neben dem Knochen, ohne ihn zu berühren: {INT_F}°F ({INT_C}°C) ist sicher, am besten sind Schenkel aber bei 175–185°F, wenn das Bindegewebe weich ist und sich das Fleisch sauber vom Knochen löst. Beim Einstechen an der dicksten Stelle sollte klarer Saft austreten. Die Haut sollte bis zu den Rändern tiefgolden und knusprig sein; sind die Ränder noch weich, gib zwei Minuten mit der Haut nach oben dazu.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Schneide große Hautlappen ab, die über die Seiten hängen, denn sie verbrennen, bevor der Rest knusprig ist. Trockne die Haut gut ab und salze sie; eine Stunde offen im Kühlschrank hilft. Auf der Hautseite ist kein Öl nötig. Wenn deine Schenkel sehr unterschiedlich groß sind, leg die größten an den Rand des Korbs, wo die Luft am schnellsten strömt.',
      faqs: [
        {
          q: 'Wie lange brauchen Hähnchenschenkel mit Knochen in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für mittlere Schenkel, nach {FLIP} Minuten gewendet. Kleine brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}.',
        },
        {
          q: 'Welche Kerntemperatur sollten Hähnchenschenkel erreichen?',
          a: '{INT_F}°F ({INT_C}°C) ist das sichere Minimum. Für zarte Schenkel, die sich vom Knochen lösen, ziel auf 175–185°F.',
        },
        {
          q: 'Hähnchenschenkel mit der Haut nach oben oder nach unten?',
          a: 'Beginn mit der Haut nach unten, damit das Fett ausbrät, und dreh sie für die zweite Hälfte mit der Haut nach oben, damit sie in der direkten Luft knusprig wird.',
        },
        {
          q: 'Brauchen Schenkel ohne Knochen genauso lange?',
          a: 'Nein, sie sind dünner und garen schneller, meist in der Zeit der kleinen Zeile der Tabelle. Prüf die Temperatur früh.',
        },
        {
          q: 'Was entspricht Hähnchenschenkeln im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    salmon: {
      label: 'Lachs',
      metaTitle: 'Lachs in der Heißluftfritteuse: Zeit, Temperatur und nicht übergaren',
      metaDescription:
        'Lachsfilet in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, ohne Wenden, gar bei {INT_F}°F. Zeiten nach Dicke, Garzeichen und Ofen-Entsprechung.',
      metaKeywords: 'Lachs Heißluftfritteuse Zeit, Lachsfilet Airfryer Temperatur, wie lange Lachs Heißluftfritteuse',
      heading: 'Lachs in der Heißluftfritteuse',
      subDesc:
        'Frische Lachsfilets, mit oder ohne Haut. Die Einstellung, die Zeit nach Dicke und das Zeichen, dass es zu weit gegangen ist.',
      cardDesc: 'Haut nach unten, nicht wenden. Zeit nach Dicke.',
      sizeLabels: { thin: 'Dünn, etwa 2 cm', medium: 'Normal, etwa 2,5 cm', thick: 'Dick, etwa 4 cm' },
      failureHeading: 'Das Weiße heißt: übergart',
      failureBody:
        'Lachs hat sehr wenig Spielraum. Er wird in ein, zwei Minuten von seidig zu trocken, und die Heißluftfritteuse ist schnell genug, dass diese Minuten rasch vergehen. Das Warnzeichen ist der weiße Belag auf der Oberfläche: Das ist Albumin, ein Eiweiß, das aus dem Muskel gedrückt wird, wenn sich die Fasern zusammenziehen. Ein wenig ist normal; viel heißt, der Fisch ist übergart. Weil Lachs von außen nach innen gart, lässt sich die Zeit nur über die Dicke zuverlässig bestimmen, deshalb sortiert die Tabelle Filets nach Höhe statt nach Gewicht. Ein dünnes Schwanzstück und ein dickes Mittelstück vom selben Fisch können sehr unterschiedliche Zeiten brauchen, also gare ähnlich dicke Stücke zusammen oder leg die dünnen ein paar Minuten später dazu.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Zwei Filets von 2,5 cm mit Haut. Das Fleisch mit Öl bestreichen, würzen und mit der Haut nach unten einlegen. Bei {AF_F}°F für {MEDIUM_MIN} Minuten garen, ohne zu wenden; ein dünnes Filet von 2 cm braucht etwa {THIN_MIN} Minuten, ein dickes von 4 cm etwa {THICK_MIN}. Eine Heißluftfritteuse im Ofenformat ergibt {OS_F}°F für {OS_MIN} Minuten. Ober-/Unterhitze braucht {OVEN_F}°F für etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass er gar ist',
      donenessBody:
        'Die Empfehlung zur Lebensmittelsicherheit lautet {INT_F}°F ({INT_C}°C) an der dicksten Stelle, wenn das Fleisch undurchsichtig wird und sich mit der Gabel leicht zerteilen lässt. Viele mögen Lachs etwas weniger gegart, bei 125–130°F, mit noch leicht glasiger, sehr saftiger Mitte; bei frisch gekauftem, gut gelagertem Fisch ist das Geschmackssache. Drück sanft auf die Oberseite: Garer Lachs teilt sich entlang seiner natürlichen Linien. Siehst du viel weißes Albumin, nimm ihn sofort heraus.',
      prepHeading: 'Bevor er hineinkommt',
      prepBody:
        'Lass die Filets zehn Minuten draußen liegen, damit die Mitte nicht kühlschrankkalt ist. Tupf sie trocken und bestreich das Fleisch, nicht die Haut, mit Öl. Filets mit Haut müssen nicht gewendet werden: Die Haut schützt die Unterseite und lässt sich danach leicht abziehen, wenn du sie nicht magst. Gelochtes Backpapier verhindert, dass Filets ohne Haut am Korb kleben.',
      faqs: [
        {
          q: 'Wie lange braucht Lachs in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für ein Filet von 2,5 cm. Dünne Stücke brauchen etwa {THIN_MIN} Minuten, dicke Mittelstücke etwa {THICK_MIN}.',
        },
        {
          q: 'Muss ich Lachs in der Heißluftfritteuse wenden?',
          a: 'Nein. Gare ihn die ganze Zeit mit der Haut nach unten; ein zartes Filet bricht beim Wenden leicht, und die Oberseite bräunt in der direkten Luft gut.',
        },
        {
          q: 'Bei welcher Temperatur ist Lachs gar?',
          a: '{INT_F}°F ({INT_C}°C) laut Empfehlung zur Lebensmittelsicherheit, wenn er sich leicht zerteilen lässt. Viele mögen ihn bei 125–130°F, in der Mitte leicht glasig.',
        },
        {
          q: 'Was ist das Weiße auf meinem Lachs?',
          a: 'Das ist Albumin, ein Eiweiß, das beim Garen herausgedrückt wird. Viel davon heißt, der Lachs ist übergart; nimm ihn nächstes Mal ein bis zwei Minuten früher heraus.',
        },
        {
          q: 'Was entspricht Lachs im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    bacon: {
      label: 'Bacon',
      metaTitle: 'Bacon in der Heißluftfritteuse: Zeit, Temperatur und kein Rauch',
      metaDescription:
        'Bacon in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten bei normalen Scheiben. Warum eine niedrigere Temperatur Rauch verhindert, Zeiten für dünn und dick, Backofen.',
      metaKeywords: 'Bacon Heißluftfritteuse Zeit, Frühstücksspeck Airfryer, wie lange Bacon Heißluftfritteuse',
      heading: 'Bacon in der Heißluftfritteuse',
      subDesc:
        'Durchwachsener Bacon, gegart, bis er knusprig ist. Eine niedrigere Einstellung als bei den meisten Lebensmitteln, und der Grund dafür.',
      cardDesc: 'Eine niedrigere Temperatur verhindert, dass das Fett raucht.',
      sizeLabels: { thin: 'Dünne Scheiben', medium: 'Normale Scheiben', thick: 'Dicke Scheiben' },
      failureHeading: 'Warum Bacon in der Heißluftfritteuse raucht',
      failureBody:
        'Bacon ist das eine Lebensmittel, bei dem der übliche Reflex mit der Heißluftfritteuse, heißer und schneller, nach hinten losgeht. Beim Garen schmilzt das Fett und tropft in die Schublade unter dem Korb, und bei hohen Einstellungen wird diese Fettlache so heiß, dass sie raucht und spritzt. Die Küche füllt sich mit Rauch, der Melder geht los, und der Bacon schmeckt bitter. Deshalb liegt diese Voreinstellung bei {AF_F}°F statt bei den höheren Temperaturen der meisten Fleischsorten: Das Fett schmilzt gleichmäßig, statt zu verbrennen, und die Scheiben werden trotzdem knusprig, weil sie so dünn sind. Zwei Gewohnheiten erledigen den Rest. Leg die Scheiben flach und ohne Überlappung aus, denn überlappende Stellen bleiben schlaff, und gieß das Fett zwischen den Durchgängen ab oder wisch es aus.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Sechs normale Scheiben flach im Korb, halbiert, wenn sie zu lang sind, um flach zu liegen. Bei {AF_F}°F für {MEDIUM_MIN} Minuten garen; dünner Bacon ist nach etwa {THIN_MIN} fertig, dicker nach etwa {THICK_MIN}. Wenden ist nicht nötig. Zum Vergleich: Derselbe Bacon braucht auf einem Blech mit Ober-/Unterhitze {OVEN_F}°F für etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass er fertig ist',
      donenessBody:
        'Bacon ist gepökelt, deshalb beurteilt man ihn nach Farbe und Textur statt mit dem Thermometer. Nimm ihn heraus, wenn das Fett von weiß zu durchscheinend golden geworden und das Magere dunkler ist. Beim Abkühlen wird er fester, Scheiben, die sich im Korb noch leicht biegen, sind also eine Minute später auf Küchenpapier knusprig. Für zähen Bacon nimm ihn ein bis zwei Minuten früher heraus; für splitternd knusprigen warte, bis die Ränder gerade dunkler werden.',
      prepHeading: 'Bevor er hineinkommt',
      prepBody:
        'Weder Vorheizen noch Öl ist nötig; Bacon bringt sein eigenes Fett mit. Nutze den Korb, kein geschlossenes Blech, damit das Fett von den Scheiben abläuft. Eine Scheibe Brot oder ein Schuss Wasser in der Schublade unter dem Korb fängt das Fett auf und reduziert Rauch. Dicker Bacon kann leicht überlappend in einer Reihe liegen, aber trenn die Scheiben nach der halben Zeit. Durchwachsener Frühstücksspeck mit viel Fett braucht etwas länger als magerer Bacon, bis der Fettrand glasig und knusprig ist; dünn geschnittener Speck aus dem Kühlregal wird dagegen schnell zu dunkel.',
      faqs: [
        {
          q: 'Wie lange braucht Bacon in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für normale Scheiben. Dünner Bacon braucht etwa {THIN_MIN} Minuten, dicker etwa {THICK_MIN}.',
        },
        {
          q: 'Warum raucht meine Heißluftfritteuse bei Bacon?',
          a: 'Fett tropft in die Schublade und verbrennt bei hohen Temperaturen. Gare bei {AF_F}°F, leere das Fett zwischen den Durchgängen und gib etwas Wasser oder eine Scheibe Brot in die Schublade.',
        },
        {
          q: 'Muss ich Bacon in der Heißluftfritteuse wenden?',
          a: 'Nein. Die Luft erreicht beide Seiten dünner Scheiben. Nur überlappend gelegter dicker Bacon muss nach der halben Zeit getrennt werden.',
        },
        {
          q: 'Muss ich die Heißluftfritteuse für Bacon vorheizen?',
          a: 'Nein. Kalt zu starten lässt das Fett sanfter ausbraten, was dem Bacon hilft, gleichmäßig zu garen.',
        },
        {
          q: 'Was entspricht Bacon im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Gitter mit Ober-/Unterhitze.',
        },
      ],
    },
    steak: {
      label: 'Steak',
      metaTitle: 'Steak in der Heißluftfritteuse: Zeit, Temperatur und Garstufen',
      metaDescription:
        'Ein 2,5 cm dickes Steak in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} gewendet, medium-rare bei {INT_F}°F. Zeiten nach Dicke und wie es eine Kruste bekommt.',
      metaKeywords: 'Steak Heißluftfritteuse Zeit, Rumpsteak Airfryer, Entrecôte Heißluftfritteuse Temperatur',
      heading: 'Steak in der Heißluftfritteuse',
      subDesc:
        'Ribeye, Rumpsteak oder Strip Loin. Die Einstellung für medium-rare, wie die Dicke die Zeit verändert und wie die Außenseite Farbe bekommt.',
      cardDesc: 'Oberfläche trocknen und ruhen lassen für eine echte Kruste.',
      sizeLabels: { thin: 'Dünn, etwa 2 cm', medium: 'Normal, etwa 2,5 cm', thick: 'Dick, etwa 4 cm' },
      failureHeading: 'Das Problem mit dem grauen Rand',
      failureBody:
        'Eine Heißluftfritteuse brät nicht scharf an wie eine Gusseisenpfanne. Heiße Luft überträgt viel weniger Wärme als Metall, deshalb verbringt ein feuchtes Steak seine ersten Minuten mit Trocknen, und bis die Oberfläche bräunt, ist die Hitze schon nach innen gewandert und hat unter einer blassen Kruste einen dicken Rand aus grauem, übergartem Fleisch hinterlassen. Die Lösung: Die Oberfläche muss schneller bräunen. Tupf das Steak vollständig trocken, salze es früh, damit die Oberfläche weiter austrocknet, heiz den Korb vollständig vor und nutze die höchste Einstellung deines Geräts. Gare ein oder zwei Steaks auf einmal mit Platz drumherum. Das Ergebnis erreicht keine rauchend heiße Pfanne, kommt aber nah heran, mit viel weniger Spritzern.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Ein 2,5 cm dickes Ribeye, eine Stunde vorher gesalzen und trocken getupft. Die Heißluftfritteuse {PREHEAT} Minuten vorheizen, bei {AF_F}°F garen und nach {FLIP} Minuten wenden; nach {MEDIUM_MIN} Minuten sollte es etwa {INT_F}°F zeigen, also medium-rare. Ein dünnes Steak von 2 cm braucht etwa {THIN_MIN} Minuten, ein dickes von 4 cm etwa {THICK_MIN}. Vor dem Anschneiden fünf Minuten ruhen lassen.',
      donenessHeading: 'Garstufen nach Temperatur',
      donenessBody:
        'Stich ein Sofortthermometer von der Seite bis in die Mitte. Rare liegt bei etwa 120–125°F, medium-rare bei {INT_F}°F ({INT_C}°C), medium bei 140°F und well done ab 155°F; die USDA-Empfehlung für ganze Rindfleischstücke ist 145°F mit drei Minuten Ruhezeit. Nimm das Steak etwa fünf Grad vor deinem Ziel heraus, denn beim Ruhen steigt die Temperatur weiter. Wer zum Prüfen anschneidet, lässt den Saft herauslaufen.',
      prepHeading: 'Bevor es hineinkommt',
      prepBody:
        'Nimm das Steak 30 Minuten vor dem Garen aus dem Kühlschrank, damit die Mitte nicht kalt ist. Salze es mindestens 40 Minuten vorher oder direkt davor; alles dazwischen lässt die Oberfläche nass. Bestreich es mit etwas hitzebeständigem Öl statt mit Butter, die verbrennt. Butter, Knoblauch oder Kräuter kommen während der Ruhezeit dazu. Tupf das Steak vor dem Garen mit Küchenpapier trocken; eine trockene Oberfläche bräunt in der Heißluftfritteuse deutlich besser. Rumpsteak mit Fettrand schneidest du am Rand ein paarmal ein, damit es sich nicht wölbt.',
      faqs: [
        {
          q: 'Wie lange braucht ein Steak in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für ein 2,5 cm dickes Steak medium-rare, nach {FLIP} Minuten gewendet. Dünne Steaks brauchen etwa {THIN_MIN} Minuten, dicke etwa {THICK_MIN}.',
        },
        {
          q: 'Welche Temperatur hat ein Steak medium-rare?',
          a: 'Etwa {INT_F}°F ({INT_C}°C). Die USDA-Empfehlung für ganze Stücke ist 145°F mit drei Minuten Ruhezeit, was eher medium entspricht.',
        },
        {
          q: 'Bekommt ein Steak in der Heißluftfritteuse eine Kruste?',
          a: 'Eine gute, wenn die Oberfläche völlig trocken und der Korb vollständig vorgeheizt ist. Ganz wie in der Gusseisenpfanne wird sie nicht, aber nah dran.',
        },
        {
          q: 'Sollte ein Steak nach der Heißluftfritteuse ruhen?',
          a: 'Ja, etwa fünf Minuten. Der Saft verteilt sich wieder im Fleisch, und die Temperatur steigt um ein paar Grad, um das Garen abzuschließen.',
        },
        {
          q: 'Was entspricht einem Steak im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten mit Ober-/Unterhitze, auch wenn Pfanne oder Grill eine bessere Kruste geben.',
        },
      ],
    },
    'pork-chops': {
      label: 'Schweinekoteletts',
      metaTitle: 'Schweinekotelett in der Heißluftfritteuse: Zeit, Temperatur, saftig',
      metaDescription:
        'Schweinekoteletts in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten bei 2,5 cm Dicke, nach {FLIP} gewendet, gar bei {INT_F}°F. Zeiten nach Dicke und Backofen.',
      metaKeywords: 'Schweinekotelett Heißluftfritteuse Zeit, Kotelett Airfryer Temperatur, wie lange Kotelett Heißluftfritteuse',
      heading: 'Schweinekoteletts in der Heißluftfritteuse',
      subDesc:
        'Koteletts mit oder ohne Knochen. Die Einstellung, das Wenden und die Temperatur, die sie davor bewahrt, mehlig zu werden.',
      cardDesc: 'Bei {INT_F}°F herausnehmen und ruhen lassen; wenn möglich vorher in Salzlake.',
      sizeLabels: { thin: 'Dünn, 1 cm', medium: 'Normal, 2,5 cm', thick: 'Dick, 4 cm' },
      failureHeading: 'Warum Schweinekoteletts trocken und mehlig werden',
      failureBody:
        'Heutiges Schweinefleisch ist mager. Mit wenig Fett zwischen den Fasern hat ein Kotelett nichts, was es schützt, sobald es über den Garpunkt geht, und innerhalb weniger Minuten wird es trocken, fest und mehlig. Die Gewohnheit, Schwein durchgehend grau zu garen, stammt aus alten Empfehlungen; heute ist ein Kotelett bei {INT_F}°F mit kurzer Ruhezeit sicher, wenn die Mitte noch zartrosa und saftig ist. Dünne Koteletts sind in der Heißluftfritteuse am schwierigsten, weil sie übergaren, bevor die Außenseite bräunt. Kauf möglichst Koteletts von mindestens 2,5 cm, und wenn du nur dünne hast, gare sie am oberen Ende der Zeitspanne und prüf früh.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Zwei 2,5 cm dicke Koteletts ohne Knochen, eine Stunde in Salzlake, trocken getupft und mit Öl und Gewürzen eingerieben. {PREHEAT} Minuten vorheizen, bei {AF_F}°F garen und nach {FLIP} Minuten wenden; nach etwa {MEDIUM_MIN} Minuten sollten sie {INT_F}°F erreichen. Dünne Koteletts von 1 cm brauchen etwa {THIN_MIN} Minuten, dicke von 4 cm etwa {THICK_MIN}. Mit Ober-/Unterhitze brauchen dieselben Koteletts {OVEN_F}°F für etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass sie gar sind',
      donenessBody:
        'Miss von der Seite an der dicksten Stelle, weg vom Knochen. {INT_F}°F ({INT_C}°C) mit anschließend drei Minuten Ruhezeit ist das sichere Ziel; die Mitte ist dann zartrosa und der Saft klar. Koteletts mit Knochen garen am Knochen etwas langsamer, prüf dort also zuletzt. Schneidest du ein Kotelett an, sollte das Fleisch saftig und gerade undurchsichtig sein, nicht grau und faserig.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Eine einfache Salzlake, ein Esslöffel Salz auf einen halben Liter Wasser für 30–60 Minuten, macht den größten Unterschied bei der Saftigkeit. Danach gut trocken tupfen. Schneide den Fettrand an zwei, drei Stellen ein, damit sich das Kotelett beim Garen nicht wölbt. Eine Gewürzmischung mit etwas Zucker bräunt schön, aber behalte sie in den letzten Minuten im Auge. Nimm die Koteletts etwa 20 Minuten vor dem Garen aus dem Kühlschrank, damit die Mitte nicht eiskalt ist und die Außenseite nicht übergart, während du auf den Kern wartest. Leg sie nebeneinander und nie übereinander, sonst bleibt die verdeckte Seite blass.',
      faqs: [
        {
          q: 'Wie lange brauchen Schweinekoteletts in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für 2,5 cm dicke Koteletts, nach {FLIP} Minuten gewendet. Dünne brauchen etwa {THIN_MIN} Minuten, dicke etwa {THICK_MIN}.',
        },
        {
          q: 'Welche Kerntemperatur sollten Schweinekoteletts erreichen?',
          a: '{INT_F}°F ({INT_C}°C), danach drei Minuten ruhen. Eine zartrosa Mitte bei dieser Temperatur ist sicher und viel saftiger.',
        },
        {
          q: 'Sollte ich Koteletts für die Heißluftfritteuse in Salzlake legen?',
          a: 'Wenn du 30 Minuten hast, ja. Magere Koteletts gewinnen durch eine kurze Salzlake viel Feuchtigkeit und verzeihen eine Minute zu viel eher.',
        },
        {
          q: 'Koteletts mit oder ohne Knochen in der Heißluftfritteuse?',
          a: 'Beide funktionieren bei derselben Temperatur. Mit Knochen brauchen sie ein bis zwei Minuten länger und bleiben am Knochen etwas saftiger.',
        },
        {
          q: 'Was entspricht Schweinekoteletts im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    shrimp: {
      label: 'Garnelen',
      metaTitle: 'Garnelen in der Heißluftfritteuse: Zeit und Temperatur nach Größe',
      metaDescription:
        'Garnelen in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten bei großen Garnelen, einmal geschüttelt. Zeiten nach Größe, Garzeichen und Ofen-Entsprechung.',
      metaKeywords: 'Garnelen Heißluftfritteuse Zeit, Shrimps Airfryer Temperatur, Riesengarnelen Heißluftfritteuse',
      heading: 'Garnelen in der Heißluftfritteuse',
      subDesc:
        'Rohe, geschälte, aufgetaute Garnelen. Die Einstellung, die Zeit nach Größe und der Farbwechsel, der dir sagt: aufhören.',
      cardDesc: 'Jede Minute zählt: Zeit nach Größe wählen.',
      sizeLabels: { small: 'Klein (110–130 pro kg)', medium: 'Groß (70–90 pro kg)', large: 'Riesengarnelen (35–45 pro kg)' },
      failureHeading: 'Das Ein-Minuten-Fenster',
      failureBody:
        'Garnelen garen in Minuten und übergaren in einer. Ihr Muskel zieht sich in der Hitze schnell zusammen, deshalb ist der Abstand zwischen zart und gummiartig sehr kurz, und in der Heißluftfritteuse verpasst man ihn leicht, während man die Soße macht. Die Größe ist die wichtigste Variable, deshalb werden Garnelen nach Stückzahl pro Kilo verkauft: Kleine können fertig sein, bevor Riesengarnelen überhaupt rosa werden. Gare immer nur eine Größe, stell einen Timer auf die kürzeste Zeit der Tabelle und schau hin, statt aufs Ende zu warten. Der andere häufige Fehler ist, Garnelen zu garen, die noch halb gefroren sind; dann wird die Außenseite zäh und die Mitte bleibt roh.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Ein Pfund große Garnelen, geschält, vom Darm befreit und trocken getupft, mit einem Esslöffel Öl, Knoblauch und Paprika vermischt. {PREHEAT} Minuten vorheizen, in einer Lage verteilen und bei {AF_F}°F für {MEDIUM_MIN} Minuten garen, nach der Hälfte einmal schütteln. Kleine Garnelen brauchen etwa {SMALL_MIN} Minuten, Riesengarnelen etwa {LARGE_MIN}. Auf einem Blech mit Ober-/Unterhitze brauchen sie {OVEN_F}°F für etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass sie gar sind',
      donenessBody:
        'Achte auf Form und Farbe. Rohe Garnelen sind grau und durchscheinend; gegarte sind rosa-orange und durchgehend undurchsichtig. Eine Garnele, die sich zu einem lockeren C gebogen hat, ist gar, ein enges O heißt, sie ist zu weit. Der Wert zur Lebensmittelsicherheit liegt bei {INT_F}°F ({INT_C}°C), aber Garnelen sind zu klein, um sie leicht zu messen; die Farbe ist der praktische Test. Nimm sie heraus, sobald der letzte graue Fleck verschwunden ist.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Tau gefrorene Garnelen vollständig auf, über Nacht im Kühlschrank oder etwa 20 Minuten in einer Schüssel mit kaltem Wasser, und trockne sie gut ab. Geschälte Garnelen garen gleichmäßiger als ungeschälte und nehmen Gewürze besser an. Gib etwas Öl dazu, damit die Gewürze haften, und überfüll den Korb nicht: Eine Lage gart gleichmäßig, ein Haufen dämpft. Den dunklen Darm am Rücken entfernst du mit einem flachen Schnitt; er ist nicht schädlich, kann aber sandig schmecken. Marinaden mit Zitrone oder Essig sollten höchstens 20 Minuten einwirken, sonst beginnt die Säure das Eiweiß zu garen und die Garnelen werden mehlig.',
      faqs: [
        {
          q: 'Wie lange brauchen Garnelen in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für große Garnelen, einmal geschüttelt. Kleine brauchen etwa {SMALL_MIN} Minuten, Riesengarnelen etwa {LARGE_MIN}.',
        },
        {
          q: 'Woran erkenne ich, dass Garnelen aus der Heißluftfritteuse gar sind?',
          a: 'Sie werden rosa und undurchsichtig und biegen sich zu einem lockeren C. Ein enges O heißt, sie sind übergart.',
        },
        {
          q: 'Kann ich gefrorene Garnelen in der Heißluftfritteuse garen?',
          a: 'Besser vorher auftauen. Direkt aus dem Gefrierfach wird die Außenseite zäh, bevor die Mitte gar ist. Zwanzig Minuten in kaltem Wasser reichen.',
        },
        {
          q: 'Muss ich Garnelen in der Heißluftfritteuse schütteln?',
          a: 'Einmal, nach der Hälfte der Zeit, damit die unteren dieselbe Farbe bekommen wie die oberen.',
        },
        {
          q: 'Was entspricht Garnelen im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Blech mit Ober-/Unterhitze.',
        },
      ],
    },
    'baked-potato': {
      label: 'Ofenkartoffel',
      metaTitle: 'Ofenkartoffel in der Heißluftfritteuse: Zeit, Temperatur, knusprige Schale',
      metaDescription:
        'Ganze Ofenkartoffel in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten bei mittlerer Größe, nach {FLIP} gewendet, gar bei {INT_F}°F innen. Zeiten nach Größe und Backofen.',
      metaKeywords: 'Ofenkartoffel Heißluftfritteuse, ganze Kartoffel Airfryer Zeit, Backkartoffel Heißluftfritteuse',
      heading: 'Ofenkartoffel in der Heißluftfritteuse',
      subDesc:
        'Ganze mehligkochende Kartoffeln mit knuspriger, salziger Schale. Die Einstellung, die Zeit nach Größe und die Kerntemperatur für ein lockeres Inneres.',
      cardDesc: 'Mit dem Thermometer prüfen, nicht mit der Gabel.',
      sizeLabels: { small: 'Klein, 170 g', medium: 'Mittel, 250 g', large: 'Groß, ab 350 g' },
      failureHeading: 'Knusprige Schale, harter Kern',
      failureBody:
        'Eine Kartoffel ist dicht, und Wärme wandert langsam durch sie hindurch. In der Heißluftfritteuse wird die Schale knusprig und dunkel, lange bevor die Mitte gar ist, deshalb kann eine Kartoffel fertig aussehen, während der Kern noch speckig und fest ist. Die Gabel ist ein schlechter Test, weil sie in eine halb gare Kartoffel fast so leicht hineingeht wie in eine fertige. Zuverlässig ist die Temperatur: Die Stärke wird erst locker, wenn die Mitte etwa {INT_F}°F erreicht. Die Zeiten der Tabelle setzen ähnlich große Kartoffeln voraus, die zusammen garen. Mischst du Größen, sind die kleinen zuerst fertig; nimm sie heraus und gib den großen die zusätzlichen Minuten.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Zwei mittlere mehligkochende Kartoffeln von je etwa 250 g, geschrubbt, getrocknet, mit Öl und grobem Salz eingerieben und ein paarmal eingestochen. Bei {AF_F}°F für {MEDIUM_MIN} Minuten garen und nach {FLIP} Minuten wenden. Kleine Kartoffeln brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}. Dieselben Kartoffeln brauchen mit Ober-/Unterhitze {OVEN_F}°F für etwa {OVEN_MIN} Minuten, die Heißluftfritteuse spart also eine gute Viertelstunde.',
      donenessHeading: 'Woran du erkennst, dass sie gar ist',
      donenessBody:
        'Stich ein Thermometer in die Mitte: {INT_F}–210°F ({INT_C}°C) heißt, die Stärke ist durchgegart und das Innere wird locker. Ohne Thermometer drückst du die Kartoffel in einem Tuch sanft zusammen; sie sollte durchgehend leicht nachgeben. Die Schale sollte trocken, knusprig und leicht blasig sein. Schneide sie sofort auf, damit der Dampf entweicht, sonst wird das Innere klebrig.',
      prepHeading: 'Bevor sie hineinkommt',
      prepBody:
        'Nimm mehligkochende Kartoffeln; festkochende bleiben dicht. Schrubbe und trockne sie vollständig, reib sie dann mit etwas Öl und reichlich grobem Salz ein, das der Schale Feuchtigkeit entzieht. Stich jede Kartoffel ein paarmal mit der Gabel ein. Wickle sie nicht in Alufolie: Folie hält Dampf fest und macht die Schale weich. Wenn es schnell gehen muss, kannst du die Kartoffeln vier bis fünf Minuten in der Mikrowelle vorgaren und in der Heißluftfritteuse nur noch die Schale knusprig machen; die Zeit wird dann deutlich kürzer, das Ziel für die Kerntemperatur bleibt aber dasselbe.',
      faqs: [
        {
          q: 'Wie lange braucht eine Ofenkartoffel in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für eine mittlere Kartoffel von etwa 250 g, nach {FLIP} Minuten gewendet. Kleine brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}.',
        },
        {
          q: 'Bei welcher Kerntemperatur ist eine Ofenkartoffel gar?',
          a: '{INT_F}–210°F ({INT_C}°C) in der Mitte. Darunter bleibt der Kern speckig, egal wie knusprig die Schale aussieht.',
        },
        {
          q: 'Soll ich Kartoffeln in der Heißluftfritteuse in Alufolie wickeln?',
          a: 'Nein. Folie hält Dampf fest und lässt die Schale weich. Öl und grobes Salz auf der nackten Schale ergeben die knusprige Hülle, die die Heißluftfritteuse so gut kann.',
        },
        {
          q: 'Muss ich Kartoffeln vor der Heißluftfritteuse einstechen?',
          a: 'Ja, ein paarmal mit der Gabel. So entweicht Dampf, und keine Kartoffel platzt.',
        },
        {
          q: 'Was entspricht einer Ofenkartoffel im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    'homemade-fries': {
      label: 'Selbstgemachte Pommes',
      metaTitle: 'Selbstgemachte Pommes in der Heißluftfritteuse: Zeit, Temperatur, knusprig',
      metaDescription:
        'Frisch geschnittene Pommes in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, zweimal geschüttelt. Warum sie weich werden, wie man sie wässert und Zeiten nach Dicke.',
      metaKeywords: 'selbstgemachte Pommes Heißluftfritteuse, frische Pommes Airfryer Zeit, Pommes aus frischen Kartoffeln Heißluftfritteuse',
      heading: 'Selbstgemachte Pommes in der Heißluftfritteuse',
      subDesc:
        'Pommes aus frischen Kartoffeln, nicht aus der Tiefkühltruhe. Die Einstellung, das Wässern und wie die Dicke die Zeit verändert.',
      cardDesc: 'Wässern, trocknen, eine Lage, zweimal schütteln.',
      sizeLabels: { thin: 'Dünn, 6 mm', medium: 'Normal, 1 cm', thick: 'Dick, ab 1,3 cm' },
      failureHeading: 'Warum frische Pommes weich werden oder verbrennen',
      failureBody:
        'Frische Kartoffeln stecken voller Wasser und haben Stärke an der Oberfläche. Kommen geschnittene Pommes direkt in den Korb, bräunt und verbrennt die Stärke außen, während das Innere noch roh ist, oder das Wasser dämpft sie weich, wenn der Korb voll ist. Tiefkühlpommes vermeiden beide Probleme, weil sie im Werk schon blanchiert und getrocknet wurden, deshalb gilt für sie eine andere Einstellung. Zu Hause erledigt das Wässern dieselbe Arbeit: Es spült lose Stärke ab, sodass die Außenseite gleichmäßig bräunt, statt fleckig zu verbrennen. Das Trocknen danach ist genauso wichtig. Eine nasse Pommes verbringt ihre ersten Minuten mit Dämpfen, und eine Pommes, die gedämpft hat, wird nie ganz knusprig.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Zwei mittlere mehligkochende Kartoffeln, in 1 cm dicke Stifte geschnitten, 30 Minuten in kaltem Wasser gewässert, gründlich getrocknet und mit einem Esslöffel Öl und Salz vermischt. In einer Lage bei {AF_F}°F für {MEDIUM_MIN} Minuten garen und den Korb zweimal schütteln. Dünne Pommes brauchen etwa {THIN_MIN} Minuten, dicke etwa {THICK_MIN}. Die Ofenvariante auf einem Blech bei {OVEN_F}°F braucht etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Achte auf eine gleichmäßig goldene Farbe mit etwas dunkleren Rändern, und hör hin: Eine fertige Pommes klingt hohl und knusprig, wenn sie an die anderen stößt. Nimm eine heraus und brich sie durch; innen sollte sie weich und mehlig sein, nicht glasig. Ist die Außenseite braun, aber das Innere noch fest, waren die Pommes für die Zeit zu dick geschnitten: Gib drei Minuten dazu und nimm die Hitze beim nächsten Mal etwas zurück.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Nimm mehligkochende Kartoffeln. Schneide die Pommes gleichmäßig dick, damit sie zusammen fertig werden; ungleichmäßige Durchgänge haben immer verbrannte dünne und rohe dicke Stücke. Wässere sie mindestens 30 Minuten in kaltem Wasser und trockne sie dann mit einem sauberen Tuch vollständig ab. Ein Esslöffel Öl auf zwei Kartoffeln reicht. Salze nach dem Garen, nicht vorher, sonst zieht das Salz Wasser heraus. Festkochende Sorten wie Linda oder Nicola werden außen nicht so knusprig, behalten aber ihre Form; für klassische Pommes sind mehligkochende Kartoffeln wie Bintje die bessere Wahl.',
      faqs: [
        {
          q: 'Wie lange brauchen selbstgemachte Pommes in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für normale 1-cm-Pommes, zweimal geschüttelt. Dünne Pommes brauchen etwa {THIN_MIN} Minuten, dicke etwa {THICK_MIN}.',
        },
        {
          q: 'Muss ich Kartoffeln vor der Heißluftfritteuse wässern?',
          a: 'Es hilft sehr. 30 Minuten in kaltem Wasser entfernen die Stärke an der Oberfläche, sodass die Pommes gleichmäßig bräunen und knusprig werden, statt fleckig zu verbrennen.',
        },
        {
          q: 'Warum werden meine Pommes in der Heißluftfritteuse weich?',
          a: 'Meist waren sie noch nass oder der Korb war zu voll. Trockne sie gründlich und gare sie in einer Lage, bei Bedarf in mehreren Durchgängen.',
        },
        {
          q: 'Gilt diese Einstellung auch für Tiefkühlpommes?',
          a: 'Nein. Tiefkühlpommes sind schon blanchiert und folgen anderen Regeln; nutze den Tiefkühlmodus mit der Temperatur von der Packung.',
        },
        {
          q: 'Was entspricht selbstgemachten Pommes im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Blech mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    'chicken-drumsticks': {
      label: 'Hähnchenunterschenkel',
      metaTitle: 'Hähnchenunterschenkel in der Heißluftfritteuse: Zeit, Temperatur, zartes Fleisch',
      metaDescription:
        'Hähnchenunterschenkel (Drumsticks) in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} wenden, sicher bei {INT_F}°F. Warum Keulen weiter gegart werden, Zeiten nach Größe und Ofen-Entsprechung.',
      metaKeywords: 'Hähnchenunterschenkel Heißluftfritteuse Zeit, Drumsticks Airfryer, Hähnchenkeulen Heißluftfritteuse wie lange',
      heading: 'Hähnchenunterschenkel in der Heißluftfritteuse',
      subDesc:
        'Frische Unterschenkel mit Knochen und Haut. Die Einstellung, das Wenden und warum ein Drumstick, der nur sicher ist, noch nicht fertig ist.',
      cardDesc: 'Sicher bei {INT_F}°F, zart erst gegen {INT_ALT_TO_F}°F.',
      sizeLabels: { small: 'Klein, etwa 90 g', medium: 'Mittel, etwa 130 g', large: 'Groß, ab 170 g' },
      internalAltLine: 'Am zartesten bei {INT_ALT_F}–{INT_ALT_TO_F}°F ({INT_ALT_C}–{INT_ALT_TO_C}°C), gemessen direkt am Knochen',
      failureHeading: 'Sicher, aber zäh: die Falle beim Unterschenkel',
      failureBody:
        'Der Unterschenkel ist der Muskel, der beim Huhn am meisten arbeitet, und er ist von Sehnen und Bindegewebe durchzogen. Bei {INT_F}°F ist er sicher zu essen, aber dieses Gewebe ist dann noch straff: Das Fleisch klebt am Knochen, fühlt sich federnd an und kann am Gelenk leicht rosa wirken, obwohl es vollständig gegart ist. Wer Unterschenkel bei der Temperatur für Brust herausnimmt, glaubt, sie seien roh geblieben; wer weitergart, bis die Haut sehr dunkel ist, bekommt oft eine trockene Außenseite. Die Lösung ist, absichtlich über den Sicherheitswert hinauszugehen. Kollagen beginnt bei etwa {INT_ALT_F}°F zu Gelatine zu schmelzen, und zwischen diesem Wert und {INT_ALT_TO_F}°F lockert sich das Fleisch, wird seidig und löst sich vom Knochen. Dunkles Fleisch verzeiht diese zusätzlichen Grad, weil es viel mehr Fett und Bindegewebe enthält als Brust.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Sechs mittlere Unterschenkel, zusammen etwa 700 g, trocken getupft und mit Öl, Knoblauchpulver und geräuchertem Paprika eingerieben. {PREHEAT} Minuten vorheizen, in einer Lage mit Abstand einlegen und bei {AF_F}°F für {MEDIUM_MIN} Minuten garen, nach {FLIP} Minuten wenden. Miss den dicksten direkt am Knochen. Kleine Keulen sind nach etwa {SMALL_MIN} Minuten fertig, große brauchen etwa {LARGE_MIN}. Im Backofen mit Ober-/Unterhitze dauert dasselbe Blech bei {OVEN_F}°F ungefähr {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass sie gar sind',
      donenessBody:
        'Schieb das Thermometer von der fleischigen Oberseite ein, bis es den Knochen gerade berührt, und zieh es dann ein Stück zurück. {INT_F}°F ({INT_C}°C) ist die Sicherheitsgrenze, {INT_ALT_F}–{INT_ALT_TO_F}°F der Bereich, in dem Unterschenkel am besten schmecken. Optisch ist die Haut straff und tief braun, das Fleisch hat sich am schmalen Ende etwas zurückgezogen und gibt den Knochen frei, und die Keule lässt sich am Gelenk leicht drehen. Rosa Farbe am Knochen bei der richtigen Temperatur ist Farbstoff, kein rohes Fleisch.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Tupf die Haut gründlich trocken und würze kräftig; Unterschenkel sind dick genug, um schon eine Stunde vorher gesalzen zu werden. Schneide das Fleisch an der dicksten Seite ein- oder zweimal bis zum Knochen ein, damit die Hitze schneller in die Mitte kommt. Leg sie abwechselnd mit dem dicken und dem dünnen Ende nebeneinander, damit sie sich nicht berühren. Glasur oder Barbecuesoße kommt erst in den letzten zwei, drei Minuten dazu.',
      faqs: [
        {
          q: 'Wie lange brauchen Hähnchenunterschenkel in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für mittlere frische Unterschenkel, nach {FLIP} Minuten gewendet. Kleine brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}.',
        },
        {
          q: 'Welche Kerntemperatur sollten Unterschenkel erreichen?',
          a: 'Sicher sind sie bei {INT_F}°F ({INT_C}°C), aber die meisten garen sie auf {INT_ALT_F}–{INT_ALT_TO_F}°F, weil dann das Bindegewebe weich wird und sich das Fleisch vom Knochen löst.',
        },
        {
          q: 'Warum ist mein Unterschenkel am Knochen rosa?',
          a: 'Die Knochen junger Hähnchen geben etwas Farbstoff an das umliegende Fleisch ab. Zeigt das Thermometer {INT_F}°F oder mehr, ist die Farbe harmlos.',
        },
        {
          q: 'Wann kommt die Barbecuesoße auf die Unterschenkel?',
          a: 'In den letzten zwei oder drei Minuten. Der Zucker in der Soße verbrennt lange, bevor die Keulen gar sind, wenn sie von Anfang an darauf ist.',
        },
        {
          q: 'Wie sieht der Vergleich mit dem Backofen aus?',
          a: 'Mit Ober-/Unterhitze brauchst du {OVEN_F}°F für etwa {OVEN_MIN} Minuten, mit Umluft {FAN_F}°F für etwa {FAN_MIN}. Die Heißluftfritteuse macht die Haut deutlich knuspriger.',
        },
      ],
    },
    'chicken-tenders': {
      label: 'Hähnchenstreifen',
      metaTitle: 'Hähnchenstreifen in der Heißluftfritteuse: Zeit und Temperatur (frisch)',
      metaDescription:
        'Frische Hähnchenstreifen und Innenfilets in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} wenden, gar bei {INT_F}°F. Natur oder paniert, Zeiten nach Größe.',
      metaKeywords: 'Hähnchenstreifen Heißluftfritteuse, Hähnchen Innenfilet Airfryer, Chicken Tenders Heißluftfritteuse Zeit',
      heading: 'Hähnchenstreifen in der Heißluftfritteuse',
      subDesc:
        'Frische Innenfilets oder Streifen aus der Brust, natur oder selbst paniert. Die kurze Einstellung, das Wenden und wie sie nicht trocken werden.',
      cardDesc: 'Klein und schnell: Timer auf die kürzeste Zeit.',
      sizeLabels: { small: 'Dünne Streifen, je etwa 30 g', medium: 'Ganze Innenfilets, je etwa 60 g', large: 'Dicke Streifen, ab 90 g' },
      failureHeading: 'Eine Minute gar, die nächste trocken',
      failureBody:
        'Ein Hähnchenstreifen ist ein schmales Stück mit fast keinem Fett und sehr viel Oberfläche. Die heiße Luft erreicht alle Seiten gleichzeitig, deshalb ist das ganze Stück in wenigen Minuten durch, und es gibt keine dicke Mitte, die einen Fehler abfedert. Lässt du einen Korb voller Streifen zwei Minuten länger drin, während du einen Dip anrührst, schrumpfen sie, ziehen sich zusammen und werden faserig. Die weiße Sehne in einem ganzen Innenfilet macht es schlimmer, weil sie sich in der Hitze zusammenzieht und den Streifen krümmt. Behandle Streifen also wie ein schnelles Gericht und nicht wie einen Braten: Sehne herausziehen, alle Streifen gleich dick schneiden, eine Minute vor Ablauf der Zeit zu prüfen beginnen und herausnehmen, sobald der dickste gar ist. Panierte Streifen schützen das Fleisch etwas, brauchen aber einen Hauch Öl, damit die Panade bräunt, bevor das Innere übergart.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        '450 g ganze Innenfilets, Sehnen entfernt, in Ei und Panko gewendet und leicht mit Öl besprüht. {PREHEAT} Minuten vorheizen, flach und ohne Überlappen einlegen und bei {AF_F}°F für {MEDIUM_MIN} Minuten garen, nach {FLIP} wenden. Dünne Streifen aus der Brust sind nach etwa {SMALL_MIN} Minuten fertig, dicke nach etwa {LARGE_MIN}. Auf einem Rost im Backofen mit Ober-/Unterhitze braucht dieselbe Menge bei {OVEN_F}°F ungefähr {OVEN_MIN} Minuten und wird blasser.',
      donenessHeading: 'Woran du erkennst, dass sie gar sind',
      donenessBody:
        'Miss den dicksten Streifen von der Stirnseite aus und schieb die Spitze der Länge nach in die Mitte: Bei {INT_F}°F ({INT_C}°C) ist er gar. Streifen sind zu dünn, um viel Restwärme zu speichern, sie steigen nach dem Herausnehmen also kaum noch. Ohne Thermometer brichst du den dicksten in der Mitte durch; er sollte weiß sein, ohne glasigen Kern, und der Saft klar. Eine Panade sollte rundum golden sein und nicht blass an Stellen, wo sich Stücke berührt haben.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Zieh die weiße Sehne heraus, indem du ihr Ende mit einer Gabel festhältst und das Fleisch davon wegschiebst. Zum Panieren stellst du Mehl, verquirltes Ei und Panko bereit und drückst die Brösel fest an, damit der Ventilator sie nicht herumwirbelt. 15 Minuten in gesalzener Buttermilch halten Streifen ohne Panade saftiger. Lass zwischen den Streifen einen Finger breit Platz.',
      faqs: [
        {
          q: 'Wie lange brauchen Hähnchenstreifen in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für ganze frische Innenfilets, nach {FLIP} Minuten gewendet. Dünne Streifen brauchen etwa {SMALL_MIN} Minuten, dicke etwa {LARGE_MIN}.',
        },
        {
          q: 'Bei welcher Temperatur sind Hähnchenstreifen gar?',
          a: '{INT_F}°F ({INT_C}°C) im dicksten Stück. Weil sie so dünn sind, nimm sie genau bei diesem Wert heraus.',
        },
        {
          q: 'Brauchen panierte Streifen Öl in der Heißluftfritteuse?',
          a: 'Ein leichtes Besprühen, ja. Trockene Brösel bleiben ohne etwas Fett blass und staubig.',
        },
        {
          q: 'Gilt diese Einstellung für gefrorene panierte Streifen?',
          a: 'Nein. Gekaufte Tiefkühlstreifen sind vorgegart und folgen der Packungsangabe; nimm dafür den Tiefkühlmodus.',
        },
        {
          q: 'Wie wäre die Einstellung im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    sausages: {
      label: 'Würstchen',
      metaTitle: 'Würstchen in der Heißluftfritteuse: Zeit, Temperatur, ohne geplatzte Haut',
      metaDescription:
        'Frische Würstchen und Bratwurst in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} wenden, gar bei {INT_F}°F für Schwein oder Rind. Auch vorgegarte Würstchen.',
      metaKeywords: 'Bratwurst Heißluftfritteuse, Würstchen Airfryer Zeit, wie lange Bratwurst Heißluftfritteuse',
      heading: 'Würstchen in der Heißluftfritteuse',
      subDesc:
        'Frische Würstchen aus Schwein, Rind oder Hähnchen, von dünnen Nürnbergern bis zur groben Bratwurst, dazu vorgegarte. Die Einstellung und wie die Haut ganz bleibt.',
      cardDesc: 'Mäßige Hitze, damit die Haut nicht platzt.',
      sizeLabels: { thin: 'Dünne Würstchen, Nürnberger oder Cocktail', medium: 'Normale Bratwurst, etwa 2,5 cm dick', thick: 'Grobe Bratwurst oder Riesenwurst' },
      internalAltLine: 'Hähnchen- oder Putenwürstchen: {INT_ALT_F}°F ({INT_ALT_C}°C). Vorgegarte Würstchen müssen nur auf {INT_ALT_F}°F durcherhitzt werden.',
      failureHeading: 'Warum Würstchen in der Heißluftfritteuse platzen',
      failureBody:
        'Ein Würstchen ist ein geschlossener Schlauch aus Fett, Wasser und Gewürzen. Beim Erhitzen wird das Wasser zu Dampf und das Fett schmilzt, und der Druck im Inneren steigt schneller, als sich die Haut dehnen kann. Ist die Hitze zu hoch, reißt die Haut der Länge nach auf, das Fett läuft in die Schublade und raucht, und das Brät trocknet aus. Viele stechen Würstchen deshalb vorher ein, aber dadurch läuft der Saft nur früher heraus. Besser ist eine mäßige Temperatur, bei der die Haut im gleichen Tempo strafft und bräunt, wie die Füllung gart, und ein Wenden zur Hälfte, damit beide Seiten Farbe bekommen. Würstchen direkt aus dem Kühlschrank platzen leichter als solche, die zehn Minuten gelegen haben, und Würstchen, die sich im Korb berühren, reißen oft genau dort, wo sie aneinanderkleben.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Sechs frische Bratwürste aus Schweinefleisch in normaler Dicke, zehn Minuten vorher aus dem Kühlschrank genommen. Mit Abstand in den Korb legen, bei {AF_F}°F für {MEDIUM_MIN} Minuten garen und nach {FLIP} Minuten umdrehen. Dünne Würstchen brauchen etwa {THIN_MIN} Minuten, eine grobe frische Bratwurst etwa {THICK_MIN}. Vorgegarte Brühwürste sind schon sicher und müssen nur durchheizen, das geht ein paar Minuten schneller. Im Backofen mit Ober-/Unterhitze brauchen dieselben frischen Würste bei {OVEN_F}°F etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass sie gar sind',
      donenessBody:
        'Schieb ein Thermometer von einem Ende her bis in die Mitte. Würstchen aus Schwein und Rind sind bei {INT_F}°F ({INT_C}°C) gar; Hähnchen- und Putenwürstchen brauchen {INT_ALT_F}°F ({INT_ALT_C}°C). Vorgegarte Würstchen, darunter die meisten Brühwürste, Wiener und viele Bratwürste aus dem Supermarkt, sind schon im Betrieb gegart, hier geht es nur darum, sie auf {INT_ALT_F}°F durchzuerhitzen. Optisch ist ein frisches Würstchen fest, auf beiden Seiten gebräunt und innen nicht mehr rosa.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Trenn zusammenhängende Würstchen mit der Schere, statt sie auseinanderzureißen. Stich sie nicht ein. Öl brauchst du nicht, Würstchen geben mehr als genug Fett ab, und ein Bogen gelochtes Backpapier darunter verhindert, dass es raucht, wenn deine Schublade sehr heiß wird. Wenn du Zwiebeln zur Bratwurst willst, gib Zwiebelringe für die zweite Hälfte der Garzeit mit in die Schublade.',
      faqs: [
        {
          q: 'Wie lange brauchen Würstchen in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für normale frische Würstchen, nach {FLIP} Minuten gewendet. Dünne Würstchen brauchen etwa {THIN_MIN} Minuten, grobe Bratwurst etwa {THICK_MIN}.',
        },
        {
          q: 'Bei welcher Temperatur sind Würstchen gar?',
          a: '{INT_F}°F ({INT_C}°C) für Schwein und Rind. Hähnchen- und Putenwürstchen brauchen {INT_ALT_F}°F ({INT_ALT_C}°C).',
        },
        {
          q: 'Wie gare ich vorgegarte Bratwurst in der Heißluftfritteuse?',
          a: 'Mit derselben Temperatur, aber rechne damit, dass sie ein paar Minuten früher fertig ist. Sie ist schon gegart, also erhitze sie, bis die Mitte {INT_ALT_F}°F erreicht und die Haut gebräunt ist.',
        },
        {
          q: 'Sollte ich Würstchen vor dem Garen einstechen?',
          a: 'Nein. Durch das Einstechen laufen Fett und Saft heraus, und das Würstchen wird trocken. Eine mäßige Temperatur verhindert das Platzen auch ohne.',
        },
        {
          q: 'Was entspricht dem im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Blech mit Ober-/Unterhitze, einmal gewendet.',
        },
      ],
    },
    burgers: {
      label: 'Burger-Patties',
      metaTitle: 'Burger in der Heißluftfritteuse: Zeit, Temperatur und Garpunkt',
      metaDescription:
        'Burger-Patties aus Rindfleisch in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} wenden, gar bei {INT_F}°F. Zeiten nach Dicke, gefrorene Patties und Ofen-Entsprechung.',
      metaKeywords: 'Burger Heißluftfritteuse, Burger Patty Airfryer Zeit, gefrorene Burger Heißluftfritteuse',
      heading: 'Burger in der Heißluftfritteuse',
      subDesc:
        'Frische Patties aus Rinderhack, selbst geformt oder gekauft. Die Einstellung, das Wenden und warum Hackfleisch ein anderes Ziel hat als Steak.',
      cardDesc: 'Hackfleisch: {INT_F}°F, nicht Steak-Garpunkt.',
      sizeLabels: { thin: 'Dünn, etwa 8 mm', medium: 'Normal, etwa 1,3 cm', thick: 'Dick, etwa 2 cm' },
      failureHeading: 'Gewölbt, geschrumpft und verraucht',
      failureBody:
        'Hackfleisch verhält sich ganz anders als ein Steak. Beim Erhitzen ziehen sich die Eiweiße zusammen und den Rand nach innen, die Mitte wölbt sich zu einer Kuppel, gart ungleichmäßig und liegt hinterher nicht flach im Brötchen. Gleichzeitig schmilzt das Fett heraus und tropft auf die heiße Schublade, wo es rauchen kann. Eine flache Mulde, die du in die Mitte jedes rohen Patties drückst, hält es flach, während es schrumpft; eine Schublade, die zwischen zwei Durchgängen ausgewischt wird, und bei manchen Modellen ein Schluck Wasser unter dem Korb, halten den Rauch klein. Der andere Fehler ist, den Garpunkt vom Steak zu übernehmen. Beim Wolfen werden Keime von der Oberfläche durch das ganze Fleisch verteilt, deshalb muss ein Burger in der Mitte {INT_F}°F erreichen und nicht den Medium-rare-Wert, der für ein ganzes Steak in Ordnung ist.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Vier Patties von etwa 1,3 cm aus Rinderhack mit rund 20 % Fett, je etwa 150 g, mit einer Mulde in der Mitte und kurz vor dem Garen gesalzen. {PREHEAT} Minuten vorheizen, bei {AF_F}°F für {MEDIUM_MIN} Minuten garen und nach {FLIP} wenden. Dünne Smash-Patties brauchen etwa {THIN_MIN} Minuten, dicke von 2 cm etwa {THICK_MIN}. Den Käse legst du in der letzten Minute auf. Im Backofen mit Ober-/Unterhitze brauchen dieselben Patties bei {OVEN_F}°F etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass sie gar sind',
      donenessBody:
        'Stich das Thermometer seitlich in die Mitte des Patties: {INT_F}°F ({INT_C}°C) ist bei Rinderhack das Ziel für die Lebensmittelsicherheit, und dann ist der Saft klar und die Mitte braun ohne Rot. Die Farbe allein kann täuschen, weil manches Hack früh braun wird und anderes rosa bleibt, obwohl es durch ist. Ein Patty, das sich in der Mitte gewölbt hat, ist am Rand früher gar als im Kern, also miss an der dicksten Stelle.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Nimm Rinderhack mit etwa 20 % Fett; mageres Hack wird trocken. Knete es nur kurz und forme die Patties etwas breiter als das Brötchen, weil sie schrumpfen. Drück die Mulde mit dem Daumen ein, etwa halb so tief wie das Patty dick ist. Salz nur die Außenseite und erst direkt vor dem Garen, sonst wird das Fleisch fest wie Wurstbrät. Öl ist nicht nötig.',
      faqs: [
        {
          q: 'Wie lange brauchen Burger in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für frische Patties von 1,3 cm, nach {FLIP} Minuten gewendet. Dünne Patties brauchen etwa {THIN_MIN} Minuten, dicke von 2 cm etwa {THICK_MIN}.',
        },
        {
          q: 'Auf welche Kerntemperatur gart man einen Burger?',
          a: '{INT_F}°F ({INT_C}°C) in der Mitte. Das ist mehr als beim Steak, weil beim Wolfen Keime von der Oberfläche ins Fleisch gelangen.',
        },
        {
          q: 'Kann ich gefrorene Burger-Patties in der Heißluftfritteuse garen?',
          a: 'Ja, bei derselben Temperatur. Rechne etwa 4–6 Minuten zur Zeit für frische Patties dazu, wende sie zur Hälfte und prüf trotzdem auf {INT_F}°F in der Mitte. Zusammengefrorene Patties vorher trennen.',
        },
        {
          q: 'Warum wölben sich meine Burger in der Heißluftfritteuse?',
          a: 'Der Rand schrumpft schneller als die Mitte und drückt sie nach oben. Eine Daumenmulde in jedem rohen Patty hält sie flach.',
        },
        {
          q: 'Was entspricht dem im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Rost mit Ober-/Unterhitze, einmal gewendet.',
        },
      ],
    },
    'pork-tenderloin': {
      label: 'Schweinefilet',
      metaTitle: 'Schweinefilet in der Heißluftfritteuse: Zeit, Temperatur und Ruhezeit',
      metaDescription:
        'Ganzes Schweinefilet in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} wenden, {INT_F}°F nach dem Ruhen. Zeiten nach Größe und Ofen-Entsprechung.',
      metaKeywords: 'Schweinefilet Heißluftfritteuse, Schweinefilet Airfryer Zeit, Schweinefilet Kerntemperatur Heißluftfritteuse',
      heading: 'Schweinefilet in der Heißluftfritteuse',
      subDesc:
        'Ein ganzes Schweinefilet am Stück. Die Einstellung, das Wenden und wie die Ruhezeit die Arbeit zu Ende bringt.',
      cardDesc: 'Spitze einschlagen, dann gart die Ruhezeit fertig.',
      sizeLabels: { small: 'Klein, etwa 340 g', medium: 'Mittel, etwa 450 g', large: 'Groß, ab 570 g' },
      failureHeading: 'Trockene Spitze, rohe Mitte',
      failureBody:
        'Ein Schweinefilet läuft von einem dicken Kopf zu einer dünnen Spitze aus, die nur zwei, drei Zentimeter breit ist. In der Heißluftfritteuse ist die Spitze lange vor dem Kopf durchgegart, und wenn die dickste Stelle endlich sicher ist, ist das schmale Ende grau und trocken. Schlägst du die letzten Zentimeter der Spitze unter das Filet und fixierst sie mit Küchengarn oder einem Zahnstocher, wird das ganze Stück gleichmäßiger dick. Die zweite Hälfte der Lösung ist die Ruhezeit. Nimm das Filet kurz vor {INT_F}°F heraus und lass es drei Minuten auf einem Brett liegen; die Wärme in den äußeren Schichten wandert weiter nach innen, und die Mitte steigt beim Ruhen um etwa 5°F. Diese Ruhezeit gehört dazu, um die sichere Temperatur zu erreichen, sie ist kein Extra, und sie lässt den Saft zur Ruhe kommen, damit er beim Aufschneiden im Fleisch bleibt.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Ein Filet von 450 g, Silberhaut entfernt, Spitze untergeschlagen, mit Öl, Senf und Kräutern eingerieben. {PREHEAT} Minuten vorheizen, bei {AF_F}°F für {MEDIUM_MIN} Minuten garen, nach {FLIP} wenden. Nimm es heraus, wenn das dicke Ende etwa 140°F zeigt, und lass es drei Minuten ruhen, bis es {INT_F}°F erreicht. Ein kleines Filet von 340 g braucht etwa {SMALL_MIN} Minuten, ein großes etwa {LARGE_MIN}. Im Backofen mit Ober-/Unterhitze entspricht das {OVEN_F}°F für etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass es gar ist',
      donenessBody:
        'Miss seitlich an der dicksten Stelle des Kopfes. Nach den drei Minuten Ruhezeit sollte die Mitte {INT_F}°F ({INT_C}°C) zeigen: zartrosa, saftig und sicher. Zeigt es direkt aus dem Korb schon deutlich mehr als 145°F, wird es nach dem Ruhen fest und trocken sein, nimm es beim nächsten Mal also früher heraus. Schneide es quer zur Faser in etwa 1 cm dicke Medaillons.',
      prepHeading: 'Bevor es hineinkommt',
      prepBody:
        'Schieb ein dünnes Messer unter die Silberhaut, die glänzende Haut an einer Seite, und schneide sie ab; sie schrumpft in der Hitze und biegt das Filet. Trocken tupfen, mit etwas Öl und einer Gewürzmischung einreiben. Ist dein Korb klein, halbiere das Filet quer, statt es zu krümmen. Eine süße Glasur kommt erst in den letzten Minuten darauf, sonst verbrennt sie, bevor der Kern gar ist.',
      faqs: [
        {
          q: 'Wie lange braucht Schweinefilet in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für ein Filet von 450 g, nach {FLIP} Minuten gewendet, plus drei Minuten Ruhezeit. Kleine brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}.',
        },
        {
          q: 'Bei welcher Temperatur ist Schweinefilet gar?',
          a: '{INT_F}°F ({INT_C}°C) nach drei Minuten Ruhezeit. Nimm es etwa 5°F vorher heraus, weil es beim Ruhen noch steigt.',
        },
        {
          q: 'Warum muss Schweinefilet ruhen?',
          a: 'Die Außenseite speichert Wärme, die die Mitte noch ein paar Minuten weitergart, und der Saft verteilt sich, damit er in den Scheiben bleibt.',
        },
        {
          q: 'Muss die Silberhaut ab?',
          a: 'Ja. Sie wird beim Garen nicht weich, zieht sich zusammen, krümmt das Filet und macht es an einer Seite zäh.',
        },
        {
          q: 'Was entspricht dem im normalen Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    'white-fish': {
      label: 'Weißfisch',
      metaTitle: 'Kabeljau und Seelachs in der Heißluftfritteuse: Weißfisch, Zeit und Temperatur',
      metaDescription:
        'Weißfischfilets in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten ohne Wenden, gar bei {INT_F}°F. Kabeljau, Seelachs, Tilapia und Schellfisch, Zeiten nach Dicke.',
      metaKeywords: 'Kabeljau Heißluftfritteuse, Seelachs Airfryer, Fischfilet Heißluftfritteuse Zeit',
      heading: 'Weißfisch in der Heißluftfritteuse',
      subDesc:
        'Kabeljau, Seelachs, Schellfisch, Tilapia und ähnliche Filets, frisch oder aufgetaut. Die Einstellung, warum du ihn nicht wenden solltest und wie er ganz bleibt.',
      cardDesc: 'Nicht wenden: auf Backpapier ganz herausheben.',
      sizeLabels: { thin: 'Dünne Filets, Tilapia oder Scholle', medium: 'Normale Filets, etwa 2,5 cm', thick: 'Dicke Rückenstücke vom Kabeljau' },
      failureHeading: 'Am Korb kleben geblieben, beim Wenden zerbrochen',
      failureBody:
        'Weißfisch hat große, lockere Lamellen, die von sehr wenig Fett und Bindegewebe zusammengehalten werden. Ist er gar, fallen diese Lamellen bei der kleinsten Berührung auseinander: genau die Textur, die du auf dem Teller willst, und genau der Grund, warum er auf dem Weg dorthin zerfällt. Ohne Unterlage klebt das Filet außerdem am Gitter, weil sich das Eiweiß an der Unterseite mit dem heißen Metall verbindet, bevor es fest wird. Der Versuch, ein Filet zur Hälfte zu wenden, ist der häufigste Fehler: Es reißt, lässt seine Unterseite auf dem Korb und endet in Stücken. Wende es also nicht. Die zirkulierende Luft gart die Oberseite, und die Hitze des Korbs reicht für die Unterseite bei normal dicken Filets völlig aus. Gare ihn auf gelochtem Backpapier oder einer geölten Einlage und heb am Ende das ganze Blatt heraus.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Zwei Kabeljaufilets von je etwa 170 g und 2,5 cm Dicke, trocken getupft, mit geschmolzener Butter bestrichen und mit Zitronenabrieb und Paprika bestreut. {PREHEAT} Minuten vorheizen, auf gelochtes Backpapier legen und bei {AF_F}°F für {MEDIUM_MIN} Minuten garen, ohne zu wenden. Dünne Tilapia braucht etwa {THIN_MIN} Minuten, ein dickes Rückenstück etwa {THICK_MIN}. Im Backofen mit Ober-/Unterhitze brauchen dieselben Filets bei {OVEN_F}°F etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass er gar ist',
      donenessBody:
        'Drück mit einer Gabel sanft auf die dickste Stelle: Gegarter Weißfisch wechselt von durchscheinend zu strahlend undurchsichtigem Weiß und zerfällt in saftige Lamellen. Die sichere Kerntemperatur liegt bei {INT_F}°F ({INT_C}°C). Dünne Filets werden schnell trocken, prüf also zwei Minuten vor Ablauf der Zeit. Sehen die Lamellen am Rand kreidig und trocken aus, ist der Fisch zu weit gegart.',
      prepHeading: 'Bevor er hineinkommt',
      prepBody:
        'Tau gefrorene Filets vollständig im Kühlschrank auf und tupf sie gut trocken, denn aufgetauter Fisch enthält viel Wasser. Schlag ein dünnes Schwanzende unter, damit das Filet gleichmäßig dick ist. Etwas Fett obendrauf hilft bei Farbe und Geschmack: ein wenig Butter, Öl oder Mayonnaise mit Kräutern. Für eine Kruste drückst du Panko nur auf die Oberseite.',
      faqs: [
        {
          q: 'Wie lange braucht Weißfisch in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für 2,5 cm dicke Filets von Kabeljau oder Schellfisch, ohne Wenden. Dünne Tilapia braucht etwa {THIN_MIN} Minuten, dicke Rückenstücke etwa {THICK_MIN}.',
        },
        {
          q: 'Muss ich Fisch in der Heißluftfritteuse wenden?',
          a: 'Nein. Zarte Filets brechen beim Wenden, und die heiße Luft gart die Oberseite allein gut genug.',
        },
        {
          q: 'Wie verhindere ich, dass Fisch am Korb klebt?',
          a: 'Gare ihn auf gelochtem Backpapier oder einer geölten Einlage und heb das Blatt heraus. Trockentupfen und die Unterseite einölen hilft ebenfalls.',
        },
        {
          q: 'Welche Kerntemperatur hat gegarter Kabeljau?',
          a: '{INT_F}°F ({INT_C}°C) an der dicksten Stelle, wenn das Fleisch undurchsichtig ist und leicht zerfällt.',
        },
        {
          q: 'Was entspricht dem im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    broccoli: {
      label: 'Brokkoli',
      metaTitle: 'Brokkoli in der Heißluftfritteuse: Zeit, Temperatur, knusprige Röschen',
      metaDescription:
        'Frischer Brokkoli in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, einmal schütteln. Knusprige Spitzen und zarte Stiele, Zeiten nach Röschengröße und Ofen-Entsprechung.',
      metaKeywords: 'Brokkoli Heißluftfritteuse, Brokkoli Airfryer Zeit, gerösteter Brokkoli Heißluftfritteuse',
      heading: 'Brokkoli in der Heißluftfritteuse',
      subDesc:
        'Frische Brokkoliröschen, geröstet, bis die Ränder knusprig sind. Die kurze Einstellung, das Schütteln und wie du schneidest, damit Spitzen und Stiele zusammen fertig werden.',
      cardDesc: 'Stiele dünn schneiden, sonst verbrennen die Spitzen zuerst.',
      sizeLabels: { small: 'Kleine Röschen, mundgerecht', medium: 'Mittlere Röschen, etwa 4 cm', large: 'Große Röschen oder halbierte Köpfe' },
      failureHeading: 'Verbrannte Spitzen, harte Stiele',
      failureBody:
        'Ein Brokkoliröschen sind eigentlich zwei Lebensmittel in einem. Oben sitzt ein Büschel winziger, trockener Knospen mit riesiger Oberfläche, und in der bewegten heißen Luft verlieren diese Knospen in wenigen Minuten ihr Wasser, werden knusprig, dann schwarz und bitter. Der Stiel darunter ist dicht und saftig und braucht noch einige Minuten mehr, bis er weich ist. Garst du ein Röschen im Ganzen, musst du dich zwischen verkohlten Spitzen mit rohem, knackigem Stiel und einem weichen Stiel unter verbrannten Krümeln entscheiden. Die Lösung liegt beim Schneiden. Schneide Röschen mit kurzen Stielen und spalte dicke Stiele der Länge nach, damit jedes Stück einen dünnen Stiel hat. Den Hauptstrunk schälst du und schneidest ihn in Scheiben; gegart ist er süß. Das zweite Problem ist das Gewicht: Trockene Röschen sind so leicht, dass der Ventilator kleine Stücke bis an das Heizelement heben kann, wende sie deshalb vorher in Öl.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Ein mittlerer Brokkolikopf, in Röschen von etwa 4 cm mit gespaltenen Stielen geschnitten und mit einem Esslöffel Olivenöl, Salz und Knoblauch vermischt. {PREHEAT} Minuten vorheizen, bei {AF_F}°F für {MEDIUM_MIN} Minuten garen und zur Hälfte einmal schütteln. Mundgerechte Röschen sind nach etwa {SMALL_MIN} Minuten fertig, große nach etwa {LARGE_MIN}. Auf einem Blech im Backofen mit Ober-/Unterhitze braucht derselbe Kopf bei {OVEN_F}°F etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass er gar ist',
      donenessBody:
        'Die Spitzen sollten an den Rändern gebräunt sein, mit ein paar knusprigen dunklen Stellen, während der Rest des Röschens leuchtend grün bleibt. Stich mit einem Messer in einen Stiel: Es sollte mit leichtem Widerstand hineingleiten. Graugrüne, weiche Röschen lagen zu dicht und haben gedämpft; schwarze, bittere Spitzen heißen, dass die Stücke für die Zeit zu groß waren oder ohne Öl gegart wurden.',
      prepHeading: 'Bevor er hineinkommt',
      prepBody:
        'Wasch den Brokkoli rechtzeitig und lass ihn vollständig abtrocknen, oder schleudere ihn in einer Salatschleuder; nasse Röschen dämpfen statt zu rösten. Überzieh jedes Stück gleichmäßig mit Öl, das schützt die Spitzen und beschwert sie. Geriebenen Käse oder Zitronensaft gibst du erst nach dem Garen dazu. Füll den Korb nicht höher als eine Lage.',
      faqs: [
        {
          q: 'Wie lange braucht Brokkoli in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für mittlere frische Röschen, einmal geschüttelt. Kleine Röschen brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}.',
        },
        {
          q: 'Warum verbrennt mein Brokkoli in der Heißluftfritteuse?',
          a: 'Die feinen Knospen oben trocknen viel schneller aus, als der Stiel weich wird. Schneide kleinere Röschen mit dünnen Stielen und überzieh sie mit Öl.',
        },
        {
          q: 'Kann ich gefrorenen Brokkoli in der Heißluftfritteuse garen?',
          a: 'Ja, aber er gibt viel Wasser ab und wird weicher. Nimm den Tiefkühlmodus, der die zusätzliche Feuchtigkeit berücksichtigt, statt dieser Einstellung für frischen.',
        },
        {
          q: 'Warum fliegt Brokkoli in meiner Heißluftfritteuse herum?',
          a: 'Trockene Röschen sind leicht genug, dass der Ventilator sie anhebt. Ein Überzug aus Öl beschwert sie und hält sie im Korb.',
        },
        {
          q: 'Was entspricht dem im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Blech mit Ober-/Unterhitze.',
        },
      ],
    },
    'brussels-sprouts': {
      label: 'Rosenkohl',
      metaTitle: 'Rosenkohl in der Heißluftfritteuse: Zeit, Temperatur, knusprige Blätter',
      metaDescription:
        'Halbierter Rosenkohl in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, zweimal schütteln. Zarter Kern, karamellisierte Schnittfläche, Zeiten nach Größe und Ofen-Entsprechung.',
      metaKeywords: 'Rosenkohl Heißluftfritteuse, Rosenkohl Airfryer Zeit, knuspriger Rosenkohl Heißluftfritteuse',
      heading: 'Rosenkohl in der Heißluftfritteuse',
      subDesc:
        'Frischer Rosenkohl, halbiert und geröstet. Die Einstellung, das zweimalige Schütteln und wie du einen weichen Kern mit karamellisierter Schnittfläche bekommst.',
      cardDesc: 'Halbieren und mit der Schnittfläche nach unten starten.',
      sizeLabels: { small: 'Kleine Röschen, halbiert', medium: 'Mittlere Röschen, etwa 2,5 cm, halbiert', large: 'Große Röschen, geviertelt' },
      failureHeading: 'Roher Kern, verbrannte Blätter',
      failureBody:
        'Ein Rosenkohlröschen ist ein festes Bündel Blätter um einen dichten, massiven Kern. Die lockeren äußeren Blätter trocknen in der Heißluftfritteuse fast sofort und werden knusprig, aber die Hitze muss sich Schicht für Schicht bis in die Mitte vorarbeiten, deshalb kann ein ganzes Röschen außen verbrannt und im Herzen noch hart und schwefelig sein. Das Halbieren ist die wichtigste Lösung, weil es den Kern freilegt und den Weg der Hitze halbiert. Danach kommt es auf die Schnittfläche an. Liegt sie flach auf dem heißen Korb, karamellisiert sie zu einer süßen, nussigen Kruste, während die gewölbte Seite von der bewegten Luft knusprige Blätter bekommt. Leg sie für den ersten Abschnitt mit der Schnittfläche nach unten und fang erst dann an zu schütteln. Große Röschen solltest du vierteln, sonst hinkt die Mitte immer noch hinterher.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        '450 g mittlerer Rosenkohl, geputzt und halbiert, mit anderthalb Esslöffeln Öl und Salz vermischt. {PREHEAT} Minuten vorheizen, mit der Schnittfläche nach unten einlegen und bei {AF_F}°F für {MEDIUM_MIN} Minuten garen, in der zweiten Hälfte zweimal schütteln. Kleine halbierte Röschen brauchen etwa {SMALL_MIN} Minuten, geviertelte große etwa {LARGE_MIN}. Im Backofen mit Ober-/Unterhitze braucht dasselbe Blech bei {OVEN_F}°F etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass er gar ist',
      donenessBody:
        'Stich ein Messer in die dickste Stelle des Kerns: Es sollte so leicht hineingehen wie in eine gegarte Kartoffel. Die Schnittfläche sollte tiefgolden bis dunkelbraun sein, und einige äußere Blätter haben sich gelöst und sind knusprig und fast schwarz geworden; das ist das Beste daran. Graue Farbe oder ein starker Kohlgeruch heißt, dass er zu lange bei zu niedriger Hitze gegart oder in einem vollen Korb gedämpft wurde.',
      prepHeading: 'Bevor er hineinkommt',
      prepBody:
        'Schneide das trockene Strunkende ab und entferne gelbe Blätter. Halbiere durch den Strunk, damit jede Hälfte zusammenhält. Vermisch die Röschen mit Öl, bis jede Schnittfläche glänzt. Balsamico-Creme, Honig oder ein Spritzer Zitrone kommen erst nach dem Garen dazu, weil Zucker am Ende einer heißen Garzeit verbrennt. Kleine, feste Röschen mit dicht anliegenden Blättern schmecken süßer als große, lockere; kauf möglichst gleich große, damit alle zur selben Zeit gar sind.',
      faqs: [
        {
          q: 'Wie lange braucht Rosenkohl in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für halbierte mittlere Röschen, zweimal geschüttelt. Kleine brauchen etwa {SMALL_MIN} Minuten, geviertelte große etwa {LARGE_MIN}.',
        },
        {
          q: 'Sollte ich Rosenkohl für die Heißluftfritteuse halbieren?',
          a: 'Ja. Ganze Röschen verbrennen außen, bevor der dichte Kern gar ist; das Halbieren legt den Kern frei und gibt eine flache Seite, die bräunt.',
        },
        {
          q: 'Warum ist mein Rosenkohl in der Mitte noch hart?',
          a: 'Die Röschen waren für die Zeit zu groß. Viertel große Röschen und prüf den Kern mit einem Messer, bevor du sie herausnimmst.',
        },
        {
          q: 'Schnittfläche nach oben oder nach unten?',
          a: 'Nach unten. Die flache Seite karamellisiert auf dem heißen Korb, danach machen die Schüttelgänge die Blätter knusprig.',
        },
        {
          q: 'Was entspricht dem im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Blech mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    'sweet-potato-fries': {
      label: 'Süßkartoffelpommes',
      metaTitle: 'Süßkartoffelpommes in der Heißluftfritteuse: Zeit, Temperatur, knusprig',
      metaDescription:
        'Selbstgemachte Süßkartoffelpommes in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, zweimal schütteln. Warum sie verbrennen und weich bleiben, der Stärke-Trick, Zeiten nach Dicke.',
      metaKeywords: 'Süßkartoffelpommes Heißluftfritteuse, Süßkartoffel Pommes Airfryer Zeit, knusprige Süßkartoffelpommes',
      heading: 'Süßkartoffelpommes in der Heißluftfritteuse',
      subDesc:
        'Pommes aus frischen Süßkartoffeln. Eine niedrigere Einstellung als bei normalen Pommes, der Überzug, der beim Knusprigwerden hilft, und Zeiten nach Dicke.',
      cardDesc: 'Kühler als normale Pommes: Zucker verbrennt zuerst.',
      sizeLabels: { thin: 'Dünn, 6 mm', medium: 'Normal, 1 cm', thick: 'Dick, 1,3 cm' },
      failureHeading: 'Dunkle Ränder, weiche Mitte',
      failureBody:
        'Süßkartoffeln sind keine orangefarbenen Kartoffeln. Sie enthalten viel mehr Zucker und viel weniger von der Stärke, die normale Pommes knusprig macht. In der Hitze karamellisiert dieser Zucker und verbrennt dann bei einer niedrigeren Temperatur, als Stärke bräunt, deshalb werden die Spitzen dunkel und bitter, während der Rest noch weich ist. Die weiche Mitte ist die andere Hälfte des Problems: Mit wenig Stärke, die zu einer festen Kruste werden könnte, bleibt eine Süßkartoffelpommes gern schlapp, egal wie lange sie gart. Deshalb läuft diese Voreinstellung kühler als die für normale Pommes und etwas kürzer, und deshalb macht ein leichter Überzug aus Speisestärke so viel aus. Die Speisestärke liefert die trockene Stärkeschicht, die der Süßkartoffel fehlt, und sie wird in der Luft knusprig, bevor der Zucker darunter Zeit hat zu verbrennen.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Zwei mittlere Süßkartoffeln, in 1 cm dicke Stifte geschnitten, trocken getupft, erst mit einem Esslöffel Speisestärke und dann mit einem Esslöffel Öl und einer Prise Salz vermischt. In einer Lage bei {AF_F}°F für {MEDIUM_MIN} Minuten garen und zweimal schütteln. Dünne Pommes brauchen etwa {THIN_MIN} Minuten, dicke etwa {THICK_MIN}. Gare in mehreren Durchgängen; beim Abkühlen für eine Minute werden sie noch etwas knuspriger. Auf einem Blech im Backofen mit Ober-/Unterhitze: {OVEN_F}°F für etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Achte auf Ränder, die gebräunt und leicht blasig, aber nicht schwarz sind, und auf Pommes, die ihre Form halten, wenn du sie an einem Ende hochhebst, statt herunterzuhängen. Innen bleiben sie weicher als normale Pommes; das liegt in ihrer Natur. Werden die Spitzen dunkel, bevor die Mitte gar ist, schneide den nächsten Durchgang etwas dicker und gleichmäßiger, statt die Hitze zu erhöhen.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Schälen ist freiwillig, die Schale wird gut knusprig. Schneide die Stifte gleichmäßig dick und lass das lange Wässern weg, das du von normalen Kartoffeln kennst, denn es gibt kaum Stärke an der Oberfläche, die man abspülen müsste. Trockne sie ab, bestäube sie zuerst mit Speisestärke und gib dann das Öl dazu, damit das Pulver haftet. Würz mit geräuchertem Paprika oder Zimt und salze nach dem Garen noch einmal.',
      faqs: [
        {
          q: 'Wie lange brauchen Süßkartoffelpommes in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für 1 cm dicke Pommes, zweimal geschüttelt. Dünne brauchen etwa {THIN_MIN} Minuten, dicke etwa {THICK_MIN}.',
        },
        {
          q: 'Warum gart man Süßkartoffelpommes kühler als normale Pommes?',
          a: 'Sie enthalten viel mehr Zucker, und der verbrennt bei einer niedrigeren Temperatur, als Kartoffelstärke bräunt. Eine etwas kühlere Einstellung lässt das Innere garen, bevor die Ränder schwarz werden.',
        },
        {
          q: 'Wie werden Süßkartoffelpommes knusprig?',
          a: 'Bestäube sie vor dem Öl mit Speisestärke, gare sie in einer Lage und lass sie nach dem Garen eine Minute ruhen. Ganz so fest wie normale Pommes werden sie nie.',
        },
        {
          q: 'Muss ich Süßkartoffelpommes wässern?',
          a: 'Nein. Das Wässern bei normalen Pommes spült Stärke von der Oberfläche, und Süßkartoffeln haben davon sehr wenig.',
        },
        {
          q: 'Was entspricht dem im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Blech mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    'potato-wedges': {
      label: 'Kartoffelspalten',
      metaTitle: 'Kartoffelspalten in der Heißluftfritteuse: Zeit, Temperatur, lockerer Kern',
      metaDescription:
        'Kartoffelspalten mit Schale in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, einmal wenden. Knusprig außen, locker innen, Zeiten nach Größe und Ofen-Entsprechung.',
      metaKeywords: 'Kartoffelspalten Heißluftfritteuse, Kartoffelecken Airfryer Zeit, Wedges Heißluftfritteuse',
      heading: 'Kartoffelspalten in der Heißluftfritteuse',
      subDesc:
        'Dicke Spalten mit Schale aus frischen Kartoffeln. Die Einstellung, das einmalige Wenden und wie die Mitte gar wird, bevor die Außenseite zu dunkel ist.',
      cardDesc: 'Dicke Stücke: verteilen und einmal wenden.',
      sizeLabels: { small: 'Kleine Spalten aus kleinen Kartoffeln', medium: 'Mittel, Kartoffel in 8 Spalten', large: 'Groß, Kartoffel in 6 Spalten' },
      failureHeading: 'Außen braun, innen fest',
      failureBody:
        'Eine Spalte ist an der Schalenseite dick und an der inneren Kante spitz, sie gart also schon wegen ihrer Form ungleichmäßig. Die dünne Kante bräunt zuerst, während das Herz der Spalte, oft mehr als zwei Zentimeter breit, noch fest und speckig ist. Anders als eine dünne Pommes hat eine Spalte so viel Masse, dass die Außenseite fertig aussehen kann, lange bevor die Mitte es ist. Zwei Dinge helfen. Erstens: Gib jeder Spalte Platz. Übereinanderliegende Spalten beschatten sich, die verdeckten Flächen dämpfen, und die Außenseite ist an manchen Stellen weich und an anderen verbrannt. Zweitens: Wende sie einmal auf die andere Schnittfläche, damit beide flachen Seiten auf dem Korb Farbe bekommen, während die Schalenseite zum Ventilator zeigt. Für eine besonders lockere Mitte kochst du die Spalten vorher fünf Minuten in siedendem Wasser vor.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Zwei mittlere mehligkochende Kartoffeln, jeweils der Länge nach in acht Spalten geschnitten, trocken getupft und mit einem Esslöffel Öl, Salz, Knoblauchpulver und Paprika vermischt. In einer Lage mit der Schale nach unten bei {AF_F}°F für {MEDIUM_MIN} Minuten garen und zur Hälfte einmal wenden. Spalten aus kleinen Kartoffeln brauchen etwa {SMALL_MIN} Minuten, kräftige Sechstel etwa {LARGE_MIN}. Auf einem Blech im Backofen mit Ober-/Unterhitze rechnest du mit {OVEN_F}°F für etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass sie gar sind',
      donenessBody:
        'Stich ein Messer in die dickste Stelle nahe der Schale: Es sollte ohne Widerstand hineingleiten, und das Innere sollte weiß und locker aussehen, nicht glasig. Die Schnittflächen sollten golden mit dunkleren Rändern sein und die Schale runzlig und knusprig. Ist die Außenseite fertig und die Mitte noch nicht, nimm die Hitze für die letzten Minuten etwas zurück, statt die Kruste aufzugeben.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Nimm mehligkochende Kartoffeln für eine lockere Mitte; festkochende geben eine festere, cremigere Spalte. Schrubben, aber nicht schälen. Schneide jede Kartoffel in gleich viele Spalten, damit alle zusammen fertig werden. Kurzes Abspülen reicht, danach gut trocknen. Geriebener Parmesan in den letzten zwei Minuten passt sehr gut. Geschnittene Spalten, die lange an der Luft liegen, werden an der Schnittfläche braun; schneide sie also erst kurz vor dem Garen oder leg sie bis dahin in kaltes Wasser.',
      faqs: [
        {
          q: 'Wie lange brauchen Kartoffelspalten in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für mittlere Spalten, einmal gewendet. Kleine Spalten brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}.',
        },
        {
          q: 'Sollte ich Kartoffelspalten vor dem Garen vorkochen?',
          a: 'Das ist freiwillig. Fünf Minuten in siedendem Wasser geben eine lockerere Mitte und eine rauere Oberfläche, die knuspriger wird; danach gut trocknen.',
        },
        {
          q: 'Was ist bei Spalten anders als bei Pommes?',
          a: 'Spalten sind viel dicker, die Herausforderung ist also, die Mitte zu garen, bevor die Außenseite zu dunkel wird. Sie brauchen mehr Zeit und nur ein Wenden.',
        },
        {
          q: 'Welche Kartoffeln eignen sich am besten für Spalten?',
          a: 'Mehligkochende Sorten für ein lockeres Inneres, vorwiegend festkochende für ein cremigeres.',
        },
        {
          q: 'Was entspricht dem im Backofen?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Blech mit Ober-/Unterhitze oder {FAN_F}°F für {FAN_MIN} Minuten mit Umluft.',
        },
      ],
    },
    'frozen-fries': {
      label: 'Tiefkühl-Pommes',
      metaTitle: 'Tiefkühl-Pommes in der Heißluftfritteuse: Zeit, Temperatur & Packung',
      metaDescription:
        'Tiefkühl-Pommes in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, {SHAKES}× geschüttelt, direkt aus dem Beutel. Von dünnen bis dicken Pommes, und wie du die Packungsangabe umrechnest.',
      metaKeywords: 'tiefkühl pommes heißluftfritteuse, pommes airfryer zeit, wie lange tiefkühl pommes heißluftfritteuse, gefrorene pommes airfryer',
      heading: 'Tiefkühl-Pommes in der Heißluftfritteuse',
      subDesc:
        'Pommes aus dem Beutel, direkt aus dem Tiefkühler gegart, ohne Auftauen und ohne zusätzliches Öl. Die Einstellung, wann du schüttelst, und wie aus der Angabe auf der Packung eine Einstellung für die Heißluftfritteuse wird.',
      cardDesc: 'Direkt aus dem Beutel, eine Lage, zweimal schütteln.',
      sizeLabels: { thin: 'Dünne Pommes (Shoestring)', medium: 'Normale Pommes', thick: 'Dicke Pommes oder Steakhouse-Pommes' },
      failureHeading: 'Warum Tiefkühl-Pommes labbrig werden',
      failureBody:
        'Jedes Stück Tiefkühl-Pommes trägt eine dünne Eisschicht, und in den ersten Minuten schmilzt dieses Eis und wird zu Dampf. Hat jedes Stück Platz um sich herum, bläst der Ventilator den Dampf weg, und die Oberfläche bräunt in dem Öl, in dem die Fabrik die Pommes schon vorfrittiert hat. Kippst du den ganzen Beutel hinein, bleibt der Dampf gefangen: Die unteren Pommes liegen in ihrem eigenen Wasser und kommen blass und schlaff heraus, ganz egal, wie lange sie drin sind. Füll den Korb höchstens zur Hälfte und gare einen großen Beutel lieber in zwei Durchgängen. Das {SHAKES}-malige Schütteln erledigt den Rest: Es löst Pommes, die aneinander festgefroren sind, und bringt die feuchte untere Lage nach oben in den heißen Luftstrom.',
      workedExampleHeading: 'Rechenbeispiel: von der Packung zur Heißluftfritteuse',
      workedExampleTemplate:
        'Ein typischer Beutel Pommes gibt {OVEN_F}°F für {OVEN_MIN} Minuten im Backofen an. Eine Korb-Heißluftfritteuse wird so heiß gar nicht, also läuft sie mit {AF_F}°F, und die Zeit sinkt auf {MIN} Minuten, weil der Ventilator die Hitze viel schneller an die Pommes bringt als ein Backblech. Heize {PREHEAT} Minuten vor, gib einen halben Beutel hinein und schüttle ungefähr nach einem Drittel und nach zwei Dritteln der Zeit. Dünne Pommes sind nach etwa {THIN_MIN} Minuten fertig, dicke brauchen ungefähr {THICK_MIN}. Ein europäischer Beutel mit Umluftangabe nennt {FAN_F}°F ({FAN_C}°C) für {FAN_MIN} Minuten und führt zur selben Einstellung.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Tiefkühl-Pommes sind schon vorgegart, es geht also nur um Farbe und Knusprigkeit. Brich eine durch: Außen sollte sie goldbraun sein und knacken, innen locker und heiß. Ist der Boden des Korbs noch blass, schüttle noch einmal und gib zwei Minuten dazu. Dicke Pommes sehen fertig aus, bevor der Kern weich ist, also probier eine dicke, bevor du alles herausnimmst.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Nicht auftauen, und gefrorene Klumpen im Beutel lösen, bevor du sie hineinkippst. Öl ist nicht nötig, weil die Pommes vorfrittiert sind, aber ein kurzer Sprühstoß hilft Wellenschnitt-Pommes, gleichmäßig zu bräunen. Salze erst nach dem Garen, nicht vorher, damit das Salz nicht noch mehr Wasser herauszieht.',
      faqs: [
        {
          q: 'Wie lange brauchen Tiefkühl-Pommes in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für normale Pommes, {SHAKES}× geschüttelt. Dünne Pommes brauchen ungefähr {THIN_MIN} Minuten, dicke ungefähr {THICK_MIN}.',
        },
        {
          q: 'Muss ich Tiefkühl-Pommes vorher auftauen?',
          a: 'Nein. Gare sie direkt aus dem Tiefkühler. Beim Auftauen wird die Oberfläche nass und weich, und danach werden sie nie mehr richtig knusprig.',
        },
        {
          q: 'Brauchen Tiefkühl-Pommes Öl in der Heißluftfritteuse?',
          a: 'Normalerweise nicht. Sie werden vor dem Einfrieren vorfrittiert und bräunen von selbst. Ein leichter Sprühstoß hilft gewürzten oder gewellten Pommes, gleichmäßiger Farbe zu bekommen.',
        },
        {
          q: 'Warum sind meine Tiefkühl-Pommes immer noch labbrig?',
          a: 'Es sind zu viele im Korb. Das Eis an jeder Pommes wird zu Dampf, und ein voller Korb hält ihn fest. Gare einen halben Beutel auf einmal und schüttle, wenn die Zeit es vorgibt.',
        },
        {
          q: 'Auf meinem Beutel steht {OVEN_F}°F für {OVEN_MIN} Minuten. Was stelle ich ein?',
          a: '{AF_F}°F für etwa {MIN} Minuten in einer Korb-Heißluftfritteuse. Der Umrechner auf dieser Seite nimmt die Zahlen von jedem Beutel, auch Umluftangaben.',
        },
      ],
    },
    'frozen-chicken-wings': {
      label: 'Tiefkühl-Chicken-Wings',
      metaTitle: 'Tiefkühl-Chicken-Wings in der Heißluftfritteuse: roh & vorgegart',
      metaDescription:
        'Rohe Tiefkühl-Chicken-Wings in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, {SHAKES}× geschüttelt, gar bei {INT_F}°F. Vorgegarte oder marinierte Wings brauchen etwa {PRE_MIN} Minuten.',
      metaKeywords: 'tiefkühl chicken wings heißluftfritteuse, gefrorene chicken wings airfryer, chicken wings tiefgefroren heißluftfritteuse zeit',
      heading: 'Tiefkühl-Chicken-Wings in der Heißluftfritteuse',
      subDesc:
        'Rohe Wings direkt aus dem Tiefkühler, ohne Auftauen, dazu die kürzere Einstellung für vorgegarte oder schon marinierte Wings. Wie du den Block löst und die Haut knusprig bekommst.',
      cardDesc: 'Roh und gefroren: beim ersten Schütteln trennen.',
      sizeLabels: { small: 'Kleine Wings, Flügelspitzen und Drumettes', medium: 'Normale geteilte Wings', large: 'Große oder ganze Flügel' },
      failureHeading: 'Warum Tiefkühl-Wings ungleichmäßig garen',
      failureBody:
        'Rohe Wings frieren im Beutel meist zu Klumpen zusammen. Wo sich zwei Wings berühren, bekommt keine der beiden Seiten heiße Luft ab, also bleibt diese Seite blass, und das Fleisch darunter hinkt dem Rest hinterher. Lässt du einen Klumpen zusammen, bekommst du Wings, die oben fertig aussehen und dort, wo sie aneinanderklebten, noch roh sind. Die Haut hat ein zweites Problem: Gefrorene Wings tragen Eis, und das Wasser daraus muss verdampfen, bevor das Fett unter der Haut schmelzen und sie knusprig machen kann. Darum ist diese Einstellung lang und gleichmäßig statt kurz und scharf. Trenne die Wings beim ersten Schütteln mit einer Zange, verteile sie, und lass sie beim zweiten Schütteln wenden, damit jede Seite einmal nah am Ventilator liegt.',
      workedExampleHeading: 'Rechenbeispiel: ein Beutel rohe Tiefkühl-Wings',
      workedExampleTemplate:
        'Ein Beutel roher, geteilter Wings sagt: gefroren bei {OVEN_F}°F für {OVEN_MIN} Minuten backen. In einer Korb-Heißluftfritteuse wird daraus {AF_F}°F für {MIN} Minuten. Heize {PREHEAT} Minuten vor, leg die Wings in eine einzige Lage und schüttle zweimal; beim ersten Mal trennst du alle Wings, die noch zusammengefroren sind. Kleine Wings sind nach etwa {SMALL_MIN} Minuten fertig, große nach ungefähr {LARGE_MIN}. Schwenk sie erst nach dem Garen in Soße, nicht vorher, sonst verbrennt der Zucker, lange bevor das Fleisch sicher ist.',
      donenessHeading: 'Woran du erkennst, dass sie gar sind',
      donenessBody:
        'Rohe Wings müssen am Knochen {INT_F}°F ({INT_C}°C) erreichen, also miss das dickste Drumette mit einem Thermometer. Ein Tiefkühlbeutel ist genau der Fall, in dem die Farbe täuscht, weil die Haut bräunen kann, während die Mitte noch kalt ist. Oberhalb dieser Temperatur sind Wings sehr gutmütig, und viele garen sie weiter, damit das Fleisch lockerer und zarter wird. Die Haut sollte knusprig und leicht blasig sein, ohne weiche, blasse Stellen, wo sich Wings berührt haben.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Lies zuerst den Beutel: Rohe und vorgegarte Wings sehen gleich aus, brauchen aber unterschiedliche Einstellungen. Klopf den Beutel vor dem Öffnen auf die Arbeitsfläche, um große Klumpen zu lösen. Öl brauchst du nicht, die Haut hat genug eigenes Fett. Streu eine trockene Würzmischung erst darüber, wenn die Wings beim ersten Schütteln getrennt sind, dann haftet sie an der angetauten Oberfläche.',
      faqs: [
        {
          q: 'Wie lange brauchen rohe Tiefkühl-Wings in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F, {SHAKES}× geschüttelt, bis sie {INT_F}°F erreichen. Kleine Wings brauchen ungefähr {SMALL_MIN} Minuten, große ungefähr {LARGE_MIN}.',
        },
        {
          q: 'Und vorgegarte oder schon marinierte Tiefkühl-Wings?',
          a: 'Die müssen nur durchgewärmt, nicht gegart werden: etwa {PRE_MIN} Minuten bei {PRE_F}°F ({PRE_C}°C), einmal geschüttelt. Sie wurden schon in der Fabrik gegart, es gibt also kein Risiko durch rohes Hähnchen; hör auf, wenn die Soße blubbert und klebrig wird.',
        },
        {
          q: 'Muss ich die Wings vorher auftauen?',
          a: 'Nein. Die Einstellung oben gilt für Wings direkt aus dem Tiefkühler. Trenne sie einfach beim ersten Schütteln.',
        },
        {
          q: 'Wann kommt die Soße dazu?',
          a: 'Nach dem Garen. Schwenk die heißen Wings in einer Schüssel in der Soße und gib sie dann noch ein, zwei Minuten zurück, wenn die Soße anziehen soll.',
        },
        {
          q: 'Kann ich die Einstellung für frische Wings nehmen?',
          a: 'Nein. Frische Wings garen schneller und heißer; gefrorene brauchen zusätzliche Zeit, damit das Eis verschwindet und die Mitte auf Temperatur kommt.',
        },
      ],
    },
    'frozen-chicken-breast': {
      label: 'Tiefkühl-Hähnchenbrust',
      metaTitle: 'Tiefkühl-Hähnchenbrust in der Heißluftfritteuse: Zeit & sichere Temperatur',
      metaDescription:
        'Rohe Hähnchenbrust direkt aus dem Tiefkühler in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} gewendet, gar bei {INT_F}°F. Zeiten nach Gewicht und das Backofen-Pendant.',
      metaKeywords: 'tiefkühl hähnchenbrust heißluftfritteuse, gefrorene hähnchenbrust airfryer, hähnchenbrust gefroren heißluftfritteuse zeit',
      heading: 'Tiefkühl-Hähnchenbrust in der Heißluftfritteuse',
      subDesc:
        'Rohe Hähnchenbrustfilets ohne Knochen, direkt aus dem Tiefkühler gegart und nicht aufgetaut. Eine niedrigere, langsamere Einstellung als bei frischem Hähnchen, und warum das Thermometer hier keine Kür ist.',
      cardDesc: 'Niedriger und langsamer als frisch: mit Thermometer prüfen.',
      sizeLabels: { small: 'Klein, 150 g (5–6 oz)', medium: 'Mittel, 220 g (7–8 oz)', large: 'Groß, 300 g (10–12 oz)' },
      failureHeading: 'Warum außen alles austrocknet, bevor die Mitte sicher ist',
      failureBody:
        'Eine gefrorene Hähnchenbrust beginnt mit einem Eisblock in der Mitte. Die Hitze muss den Kern erst auftauen, bevor sie ihn garen kann, während die Außenseite die ganze Zeit weiter Hitze abbekommt. Gibst du ihr die kräftige Einstellung einer frischen Brust, wird die Oberfläche zäh, während der Kern noch unter einer sicheren Temperatur liegt. Deshalb liegt diese Voreinstellung niedriger und läuft länger als bei frischem Hähnchen: Eine sanftere Temperatur verkleinert den Abstand zwischen außen und innen, und der Kern erreicht eine sichere Temperatur, bevor die Ränder austrocknen. Am wichtigsten ist die Dicke. Gare deshalb Stücke ähnlicher Größe zusammen und miss immer das größte.',
      workedExampleHeading: 'Rechenbeispiel: zwei Filets aus dem Beutel',
      workedExampleTemplate:
        'Ein Beutel einzeln gefrorener roher Filets gibt {OVEN_F}°F für {OVEN_MIN} Minuten im Backofen an. In einer Korb-Heißluftfritteuse wird daraus {AF_F}°F für etwa {MIN} Minuten bei einer mittelgroßen Brust. Heize {PREHEAT} Minuten vor, leg zwei Filets flach mit Abstand hinein und wende sie nach {FLIP} Minuten. Dann würzt du auch, weil die aufgetaute Oberfläche die Gewürze jetzt hält. Kleine Filets sind meist nach etwa {SMALL_MIN} Minuten fertig, große brauchen ungefähr {LARGE_MIN}. Miss das dickste, bevor du irgendeines herausnimmst.',
      donenessHeading: 'Woran du erkennst, dass sie gar ist',
      donenessBody:
        'Verlässlich ist hier nur ein Thermometer: {INT_F}°F ({INT_C}°C) an der dicksten Stelle, den Fühler von der Seite eingestochen, damit die Spitze genau in der Mitte sitzt. Eine gefrorene Brust kann außen goldbraun und fest sein, während der Kern noch rosa und kalt ist, und wer sie zum Nachsehen aufschneidet, lässt den Saft auslaufen. Ist ein Filet fertig und das andere nicht, nimm das fertige heraus und gib dem anderen noch ein paar Minuten. Lass es vor dem Aufschneiden drei Minuten ruhen.',
      prepHeading: 'Bevor sie hineinkommt',
      prepBody:
        'Trenne Filets, die aneinander festgefroren sind; halte sie ein paar Sekunden unter kaltes Wasser, wenn sie nicht nachgeben. Spül die Eisglasur ab und tupf die Oberfläche trocken. Pinsel sie mit etwas Öl ein, damit die Würze später haftet, aber heb die Gewürze bis zum Wenden auf, denn auf einer gefrorenen Oberfläche rutschen sie ab.',
      faqs: [
        {
          q: 'Wie lange braucht eine gefrorene Hähnchenbrust in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für eine mittlere Brust, nach {FLIP} Minuten gewendet. Kleine brauchen ungefähr {SMALL_MIN} Minuten, große ungefähr {LARGE_MIN}. Zum Schluss immer mit dem Thermometer prüfen.',
        },
        {
          q: 'Ist es sicher, Hähnchenbrust gefroren zu garen?',
          a: 'Ja, solange die dickste Stelle {INT_F}°F ({INT_C}°C) erreicht. Es dauert nur länger als bei frischem Fleisch, und die niedrigere Einstellung verhindert, dass die Außenseite zuerst austrocknet.',
        },
        {
          q: 'Warum nicht die Einstellung für frische Hähnchenbrust?',
          a: 'Frisches Hähnchen gart heißer und kürzer. Bei einer gefrorenen Brust bräunt das die Außenseite, lange bevor der Kern aufgetaut und durchgegart ist.',
        },
        {
          q: 'Wann soll ich würzen?',
          a: 'Beim Wenden. Dann ist die Oberfläche aufgetaut, und die Würze haftet, statt auf dem Eis abzurutschen.',
        },
        {
          q: 'Kann ich panierte Tiefkühl-Hähnchenbrust genauso garen?',
          a: 'Schau auf die Packung. Viele panierte Produkte werden roh verkauft und folgen der Seite für Tiefkühl-Hähnchenstreifen; vorgegarte müssen nur durchgewärmt werden.',
        },
      ],
    },
    'frozen-chicken-nuggets': {
      label: 'Tiefkühl-Chicken-Nuggets',
      metaTitle: 'Tiefkühl-Chicken-Nuggets in der Heißluftfritteuse: Zeit & Temperatur',
      metaDescription:
        'Tiefkühl-Chicken-Nuggets in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, einmal geschüttelt, bei {INT_F}°F durchgewärmt. Von Popcorn Chicken bis Dino-Nuggets, mit Umrechnung der Packung.',
      metaKeywords: 'tiefkühl chicken nuggets heißluftfritteuse, nuggets airfryer zeit, wie lange nuggets heißluftfritteuse, gefrorene nuggets airfryer',
      heading: 'Tiefkühl-Chicken-Nuggets in der Heißluftfritteuse',
      subDesc:
        'Panierte Nuggets, die schon durchgegart sind, direkt aus dem Beutel. Du wärmst auf, du garst nicht, also geht es um eine knusprige Panade ohne ausgetrocknete Mitte.',
      cardDesc: 'Schon gegart: du wärmst sie nur auf.',
      sizeLabels: { small: 'Popcorn Chicken oder Mini-Bites', medium: 'Normale Nuggets', large: 'Große Formen oder Dino-Nuggets' },
      internalLine: 'Durchgewärmt bei {INT_F}°F ({INT_C}°C) in der Mitte; sie sind schon gegart',
      failureHeading: 'Warum Nuggets trocken und hart werden',
      failureBody:
        'Fast alle Tiefkühl-Nuggets aus dem Supermarkt werden vor dem Einfrieren vollständig gegart. Das Hähnchen innen ist fertig; die Heißluftfritteuse muss nur die Panade knusprig machen und die Mitte wieder auf Temperatur bringen. Das verändert, was schiefgehen kann. Die Gefahr ist nicht, dass etwas roh bleibt, sondern dass es zu lange gart: Nuggets sind klein, also trocknen zwei Minuten zu viel das Hähnchen aus, bis es fest und faserig ist, und die Panade wird von knusprig zu hart. Behandle sie wie ein kurzes Aufwärmen. Nimm die Zeit von dieser Seite, schüttle den Korb einmal zur Hälfte, damit die flach liegenden Stücke umgedreht werden, und schau ein, zwei Minuten früher nach. In zwei Lagen gestapelte Nuggets dämpfen sich außerdem gegenseitig, und die Panade der unteren Lage bleibt weich.',
      workedExampleHeading: 'Rechenbeispiel: ein halber Beutel für zwei',
      workedExampleTemplate:
        'Ein Beutel panierter Nuggets gibt {OVEN_F}°F für {OVEN_MIN} Minuten auf dem Blech an. In einer Korb-Heißluftfritteuse wird daraus {AF_F}°F für {MIN} Minuten. Heize {PREHEAT} Minuten vor, verteile etwa zwanzig Nuggets in einer Lage und schüttle einmal zur Hälfte. Popcorn Chicken ist nach etwa {SMALL_MIN} Minuten fertig, große Dino-Formen nach ungefähr {LARGE_MIN}. Steht auf der Packung eine Umluftangabe, {FAN_F}°F für {FAN_MIN} Minuten, landest du bei derselben Einstellung für die Heißluftfritteuse.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Weil das Hähnchen schon gegart ist, prüfst du, ob die Mitte heiß ist, nicht, ob eine Sicherheitstemperatur erreicht ist: {INT_F}°F ({INT_C}°C) im dicksten Nugget, wenn du eine Zahl willst, oder brich eines auf und schau, ob es bis innen dampft. Die Panade sollte gleichmäßig goldbraun sein und beim Drücken knacken. Ist sie hart statt knusprig, braucht die nächste Portion ein, zwei Minuten weniger.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Prüf, ob auf der Packung vollständig gegart steht. Einige panierte Hähnchenprodukte werden roh verkauft, und die gehören auf die Seite für Tiefkühl-Hähnchenstreifen, mit Thermometer. Nicht auftauen und kein Öl dazugeben: Die Panade wurde schon in der Fabrik frittiert. Lass etwas Platz zwischen den Nuggets, damit die Luft an jede Seite kommt.',
      faqs: [
        {
          q: 'Wie lange brauchen Tiefkühl-Nuggets in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F, einmal geschüttelt. Popcorn Chicken braucht ungefähr {SMALL_MIN} Minuten, große Formen ungefähr {LARGE_MIN}.',
        },
        {
          q: 'Sind Tiefkühl-Chicken-Nuggets schon gegart?',
          a: 'Die meisten ja. Auf der Packung steht dann „vollständig gegart“. Steht dort „roh“ oder „ungegart“, gare sie mit Thermometer auf {INT_F}°F, wie rohes Hähnchen.',
        },
        {
          q: 'Muss ich Nuggets wenden?',
          a: 'Einmal Schütteln zur Hälfte genügt. Kleine Stücke drehen sich beim Schütteln von selbst um; du musst sie nicht einzeln wenden.',
        },
        {
          q: 'Warum werden meine Nuggets hart?',
          a: 'Sie waren zu lange drin. Nuggets müssen nur aufgewärmt werden, also trocknen zwei Minuten zu viel sie aus. Nimm beim nächsten Mal die kürzere Zeit.',
        },
        {
          q: 'Kann ich Nuggets und Pommes zusammen machen?',
          a: 'Ja, wenn der Korb nicht voll ist. Starte mit den Pommes und gib die Nuggets für die letzten {MIN} Minuten dazu, dann werden beide gleichzeitig fertig.',
        },
      ],
    },
    'frozen-tater-tots': {
      label: 'Tiefkühl-Tater-Tots',
      metaTitle: 'Tiefkühl-Tater-Tots in der Heißluftfritteuse: Zeit, Temperatur & Kruste',
      metaDescription:
        'Tiefkühl-Tater-Tots in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, {SHAKES}× geschüttelt. Von Mini-Tots bis Kartoffelkronen, außen knusprig und innen durch und durch heiß.',
      metaKeywords: 'tater tots heißluftfritteuse, tiefkühl tater tots airfryer zeit, kartoffel tots heißluftfritteuse, kroketten airfryer',
      heading: 'Tiefkühl-Tater-Tots in der Heißluftfritteuse',
      subDesc:
        'Tots und Kartoffelhäppchen aus dem Beutel, direkt aus dem Tiefkühler gegart. Die Einstellung, das Schütteln und wie du eine heiße Mitte unter die Kruste bekommst.',
      cardDesc: 'Zweimal schütteln, damit jede Seite Kruste bekommt.',
      sizeLabels: { small: 'Mini-Tots', medium: 'Normale Tater Tots', large: 'Kartoffelkronen oder große Häppchen' },
      failureHeading: 'Warum Tots außen knusprig und innen kalt sind',
      failureBody:
        'Ein Tot ist ein kleiner Zylinder aus fest gepresster, geriebener Kartoffel und damit viel dichter als eine Pommes derselben Größe. Die Außenseite frittiert in der heißen Luft schnell und bildet in wenigen Minuten eine Kruste, aber die dicht gepackten Raspel in der Mitte werden nur langsam warm. Ein Tot, der goldbraun aussieht, kann innen also noch lauwarm und pappig sein. Drehst du die Hitze hoch, um es zu beschleunigen, wird die Kruste dunkel, bevor die Mitte aufholt. Die Lösung ist eine gleichmäßige Einstellung und genug Zeit, mit zweimaligem Schütteln, damit die Tots jedes Mal auf eine neue Seite rollen. Weil sie rund sind, rollen sie, statt flach liegen zu bleiben, und das Schütteln übernimmt das Wenden für dich.',
      workedExampleHeading: 'Rechenbeispiel: ein Familienbeutel',
      workedExampleTemplate:
        'Ein Beutel Tots gibt {OVEN_F}°F für {OVEN_MIN} Minuten im Backofen an, einmal gewendet. In einer Korb-Heißluftfritteuse wird daraus {AF_F}°F für {MIN} Minuten. Heize {PREHEAT} Minuten vor, gib so viele hinein, dass der Boden in einer Lage bedeckt ist, und schüttle zweimal, ungefähr nach einem Drittel und nach zwei Dritteln der Zeit. Mini-Tots sind nach etwa {SMALL_MIN} Minuten fertig, Kartoffelkronen nach ungefähr {LARGE_MIN}. Für viele Leute gare lieber in zwei Durchgängen, statt sie aufzutürmen.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Tots sind vorgegart, du beurteilst also Knusprigkeit und Hitze. Sie sollten rundum kräftig goldbraun sein und hohl klingen, wenn sie im Korb aneinanderstoßen. Beiß in einen aus der Mitte der Portion: Innen sollte er weich, locker und heiß sein. Ist die Außenseite fertig, die Mitte aber noch kühl, dreh die Hitze nicht hoch; gib zwei Minuten dazu und schüttle noch einmal.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Gare sie direkt aus dem Tiefkühler und löse Tots, die aneinanderkleben. Öl brauchen sie nicht, aber ein leichter Sprühstoß gibt eine dunklere, gleichmäßigere Kruste. Würze mit Salz oder einer Gewürzmischung beim letzten Schütteln oder direkt nach dem Garen, solange die Oberfläche noch leicht ölig ist und die Würze hält. Tots aus Süßkartoffeln enthalten mehr Zucker und werden schneller dunkel, also schau bei ihnen ein paar Minuten früher nach.',
      faqs: [
        {
          q: 'Wie lange brauchen Tater Tots in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F, {SHAKES}× geschüttelt. Mini-Tots brauchen ungefähr {SMALL_MIN} Minuten, große Kronen ungefähr {LARGE_MIN}.',
        },
        {
          q: 'Soll ich Tater Tots schütteln oder wenden?',
          a: 'Schütteln. Tots sind rund und rollen beim Schütteln auf eine andere Seite, also bräunen zwei Schüttelrunden sie gleichmäßig, ohne dass du jeden einzeln wendest.',
        },
        {
          q: 'Warum sind meine Tots in der Mitte kalt?',
          a: 'Sie sind dichter als Pommes und brauchen die volle Zeit. Nimmst du sie heraus, sobald sie goldbraun aussehen, bleibt die gepresste Mitte kühl.',
        },
        {
          q: 'Brauchen Tater Tots Öl?',
          a: 'Nein, sie werden vor dem Einfrieren vorfrittiert. Ein leichter Sprühstoß bringt nur mehr Farbe.',
        },
        {
          q: 'Kann ich überbackene Tots in der Heißluftfritteuse machen?',
          a: 'Ja. Gare die Tots ganz fertig, gib Käse und Toppings darauf und lass sie noch ein, zwei Minuten drin, bis der Käse geschmolzen ist.',
        },
      ],
    },
    'frozen-pizza': {
      label: 'Tiefkühlpizza',
      metaTitle: 'Tiefkühlpizza in der Heißluftfritteuse: Zeit, Temperatur & welche Größe passt',
      metaDescription:
        'Tiefkühlpizza in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten bei einer kleinen Einzelpizza. Welche Größen in den Korb passen und wie der Boden unter dem geschmolzenen Käse knusprig wird.',
      metaKeywords: 'tiefkühlpizza heißluftfritteuse, pizza airfryer zeit, kleine pizza heißluftfritteuse, wie lange tiefkühlpizza airfryer',
      heading: 'Tiefkühlpizza in der Heißluftfritteuse',
      subDesc:
        'Kleine Einzel- und Mini-Tiefkühlpizzen, gefroren gegart. Die Einstellung, welche Größen in deinen Korb passen und wie du verhinderst, dass der Belag vor dem Boden fertig ist.',
      cardDesc: 'Die kleine passt in den Korb, die große nicht.',
      sizeLabels: { small: 'Mini-Pizza, 13 cm (5")', medium: 'Einzelpizza, 18–20 cm (7–8")', large: '25–30 cm (10–12"): nur Ofen-Typ oder ab 8 qt' },
      failureHeading: 'Warum der Belag vor dem Boden fertig ist',
      failureBody:
        'In einer Heißluftfritteuse kommt die Hitze von oben, und der Ventilator bläst sie direkt über die Pizza. Käse und Belag liegen am nächsten an der Heizspirale und fangen fast sofort an zu bräunen, während der Boden darunter noch gefrorener Teig auf dem Korbgitter ist. Stellst du sie zu heiß ein, bekommst du verbrannte Salami auf einem blassen, biegsamen Boden. Eine etwas niedrigere Einstellung, als du erwarten würdest, lässt die Hitze durch die Pizza nach unten ziehen, sodass der Boden knusprig ist, wenn der Käse geschmolzen ist und Blasen wirft. Die Größe ist die andere Hälfte: Eine Pizza, die an den Wänden anstößt, blockiert den Luftstrom, und der Boden dämpft, statt knusprig zu werden. Sie muss flach liegen, mit etwas Luft rundherum.',
      workedExampleHeading: 'Rechenbeispiel: eine kleine Einzelpizza',
      workedExampleTemplate:
        'Der Karton einer kleinen Einzelpizza gibt {OVEN_F}°F für {OVEN_MIN} Minuten direkt auf dem Ofenrost an. In einer Korb-Heißluftfritteuse wird daraus {AF_F}°F für {MIN} Minuten. Heize {PREHEAT} Minuten vor, damit der Boden auf einer heißen Fläche startet, leg die Pizza flach hinein und lass sie in Ruhe; es gibt nichts zu wenden. Schau dir die Unterseite am Ende der kürzeren Zeit an, indem du einen Rand mit dem Pfannenwender anhebst. Eine Mini-Pizza ist nach etwa {SMALL_MIN} Minuten fertig; eine große in einer Heißluftfritteuse im Ofen-Stil braucht ungefähr {LARGE_MIN}.',
      donenessHeading: 'Woran du erkennst, dass sie fertig ist',
      donenessBody:
        'Heb den Rand an: Die Unterseite sollte goldbraun und fest sein, und ein Stück sollte gerade abstehen statt herunterzuhängen. Der Käse muss vollständig geschmolzen sein und in der Mitte blubbern, nicht nur am Rand. Ist der Belag fertig, der Boden aber noch weich, leg ein Stück Alufolie locker darüber und gib ihr noch zwei Minuten.',
      prepHeading: 'Passt sie hinein?',
      prepBody:
        'Miss deinen Korb, bevor du einkaufst. Ein runder 5-qt-Korb ist innen nur etwa 20–22 cm (8 bis 8½ Zoll) breit, also passt eine Einzelpizza mit 18 bis 20 cm mit etwas Luft hinein. Eine Pizza mit 25 oder 30 cm passt nicht: Sie braucht eine Heißluftfritteuse im Ofen-Stil oder einen Korb ab etwa 8 qt. Entferne die ganze Verpackung, auch die Pappscheibe.',
      faqs: [
        {
          q: 'Wie lange braucht Tiefkühlpizza in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für eine Einzelpizza mit 18–20 cm. Eine Mini-Pizza mit 13 cm braucht ungefähr {SMALL_MIN} Minuten.',
        },
        {
          q: 'Welche Größe Tiefkühlpizza passt in eine Heißluftfritteuse?',
          a: 'In einen 5-qt-Korb höchstens etwa 20 cm, weil er innen nur etwa 20–22 cm misst. Eine Pizza mit 25–30 cm braucht ein Gerät im Ofen-Stil oder einen Korb ab 8 qt; sonst schneide sie in der Mitte durch und gare sie in zwei Runden.',
        },
        {
          q: 'Muss ich für Tiefkühlpizza vorheizen?',
          a: 'Ja, {PREHEAT} Minuten. Ein heißer Korb verschafft dem gefrorenen Boden einen Vorsprung, damit er knusprig wird, bevor der Käse zu viel abbekommt.',
        },
        {
          q: 'Warum ist der Boden meiner Pizza weich?',
          a: 'Die Pizza ist zu groß für den Korb, und die Luft kommt nicht um sie herum, oder die Pappe lag noch darunter. Sie muss flach liegen und am Rand Platz haben.',
        },
        {
          q: 'Soll ich Tiefkühlpizza wenden?',
          a: 'Nein. Dann fällt der Belag herunter. Lass sie flach liegen und prüf die Unterseite am Ende der kürzeren Zeit.',
        },
      ],
    },
    'frozen-fish-sticks': {
      label: 'Tiefkühl-Fischstäbchen',
      metaTitle: 'Fischstäbchen in der Heißluftfritteuse: Zeit & Temperatur',
      metaDescription:
        'Tiefkühl-Fischstäbchen in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} gewendet, gar bei {INT_F}°F. Fischstäbchen, Fisch-Bites und panierte Filets aus der Packung.',
      metaKeywords: 'fischstäbchen heißluftfritteuse, fischstäbchen airfryer zeit, panierter fisch tiefkühl heißluftfritteuse, backfisch airfryer',
      heading: 'Tiefkühl-Fischstäbchen in der Heißluftfritteuse',
      subDesc:
        'Fischstäbchen, Fisch-Bites und panierte Filets, gefroren gegart. Die Einstellung, ein vorsichtiges Wenden und wie die Panade am Fisch bleibt.',
      cardDesc: 'Vorsichtig wenden: Die Panade wird fest, bevor der Fisch es ist.',
      sizeLabels: { small: 'Fisch-Bites oder Mini-Stäbchen', medium: 'Fischstäbchen', large: 'Panierte Filets oder Backfisch im Teigmantel' },
      failureHeading: 'Warum die Panade reißt und der Fisch zerfällt',
      failureBody:
        'Ein Fischstäbchen ist ein Block aus blättrigem weißem Fisch, der nur von seiner Panade zusammengehalten wird. In der Heißluftfritteuse wird das Paniermehl auf der Seite zum Ventilator schnell fest und braun, während der Fisch innen noch weich ist und die Panade unten noch feucht am Korb liegt. Wendest du zu früh, bleibt die Unterseite am Gitter hängen, die Panade reißt ab, und der Fisch bricht. Wendest du zu grob, passiert dasselbe. Warte bis zur Hälfte der Zeit, wenn die Unterseite fest geworden ist, schieb dann einen dünnen Pfannenwender oder eine Zange unter jedes Stäbchen und dreh es in einer Bewegung um. Backfisch im Teigmantel ist noch empfindlicher als panierter, also hilft etwas Öl auf dem Korb, damit er sich löst.',
      workedExampleHeading: 'Rechenbeispiel: eine Packung Fischstäbchen',
      workedExampleTemplate:
        'Eine Packung panierter Fischstäbchen gibt {OVEN_F}°F für {OVEN_MIN} Minuten im Backofen an, einmal gewendet. In einer Korb-Heißluftfritteuse wird daraus {AF_F}°F für {MIN} Minuten. Heize {PREHEAT} Minuten vor, leg die Stäbchen in einer Lage mit etwas Abstand hinein und wende sie nach {FLIP} Minuten. Fisch-Bites brauchen etwa {SMALL_MIN} Minuten, dicke panierte Filets ungefähr {LARGE_MIN}. Steht auf der Packung eine Umluftangabe, {FAN_F}°F für {FAN_MIN} Minuten, ist die Einstellung für die Heißluftfritteuse dieselbe.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Die Panade sollte auf beiden Seiten goldbraun und knusprig sein, und der Fisch innen weiß und undurchsichtig, und er sollte sich mit der Gabel in Lamellen teilen lassen. Ein Thermometer in der Mitte des dicksten Stücks sollte {INT_F}°F ({INT_C}°C) zeigen. Ist die zweite Seite noch blass, fehlen ein, zwei Minuten; ein Stäbchen, das sich biegt, statt gerade zu bleiben, ist innen noch nicht heiß.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Gare sie direkt aus dem Tiefkühler; aufgetaute Fischstäbchen werden weich und verlieren ihre Panade. Öl den Korb leicht ein oder nimm ein gelochtes Backpapier, damit das Paniermehl nicht kleben bleibt. Trenne zusammengefrorene Stäbchen, bevor sie hineinkommen, denn wenn du sie später auseinanderziehst, reißt die Panade. Für Kinder lohnt es sich, die Stäbchen nach dem Garen eine Minute ruhen zu lassen, denn innen sind sie deutlich heißer, als die Panade vermuten lässt. Eine halbe Packung pro Durchgang ist in einem normalen Korb das Maximum.',
      faqs: [
        {
          q: 'Wie lange brauchen Fischstäbchen in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F, nach {FLIP} Minuten gewendet. Fisch-Bites brauchen ungefähr {SMALL_MIN} Minuten, panierte Filets ungefähr {LARGE_MIN}.',
        },
        {
          q: 'Muss ich Fischstäbchen wenden?',
          a: 'Ja, einmal zur Hälfte und vorsichtig. Vorher ist die Unterseite zu weich, um sich sauber zu lösen.',
        },
        {
          q: 'Warum klebt die Panade am Korb?',
          a: 'Die Unterseite war beim Wenden noch feucht, oder der Korb war trocken. Öl ihn leicht ein und warte mit dem Wenden bis zur Hälfte.',
        },
        {
          q: 'Brauchen Fischstäbchen Öl?',
          a: 'Am Fisch nicht, die Panade ist vorfrittiert. Etwas Öl auf dem Korb verhindert, dass sie kleben.',
        },
        {
          q: 'Kann ich Backfisch im Teigmantel genauso garen?',
          a: 'Ja, etwa {LARGE_MIN} Minuten. Teig ist weicher als Paniermehl, also nimm Backpapier und wende ihn mit einem breiten Pfannenwender.',
        },
      ],
    },
    'frozen-chicken-tenders': {
      label: 'Tiefkühl-Hähnchenstreifen',
      metaTitle: 'Tiefkühl-Hähnchenstreifen in der Heißluftfritteuse: roh oder gegart?',
      metaDescription:
        'Panierte Tiefkühl-Hähnchenstreifen in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} gewendet, bei {INT_F}°F geprüft. Woran du auf der Packung roh und gegart unterscheidest.',
      metaKeywords: 'tiefkühl hähnchenstreifen heißluftfritteuse, chicken tenders airfryer tiefkühl, panierte hähnchenstreifen airfryer zeit',
      heading: 'Tiefkühl-Hähnchenstreifen in der Heißluftfritteuse',
      subDesc:
        'Panierte Hähnchenstreifen, Chicken Tenders und Chicken Fingers aus dem Tiefkühler. Die Einstellung, das Wenden und die eine Zeile auf der Packung, die entscheidet, wie vorsichtig du sein musst.',
      cardDesc: 'Lies die Packung: Viele werden roh verkauft.',
      sizeLabels: { small: 'Dünne Streifen oder Chicken Fingers', medium: 'Normale panierte Streifen', large: 'Dicke Streifen nach Hausmacherart' },
      failureHeading: 'Die Packung sagt roh, die Panade sagt fertig',
      failureBody:
        'Panierte Hähnchenstreifen gibt es in zwei Sorten, die im Beutel genau gleich aussehen. Die einen sind vollständig gegart und müssen nur aufgewärmt werden. Viele andere, vor allem Handelsmarken und Streifen nach Hausmacherart, sind rohes Hähnchen in einer schon gebräunten Panade, und die Packung sagt das im Kleingedruckten: ungegart, vor dem Verzehr vollständig durchgaren oder roh. Diese Panade wurde nur so lange frittiert, bis sie hält, sie sieht also goldbraun aus, bevor die Heißluftfritteuse überhaupt startet. Darum nimmt man sie leicht heraus, wenn sie fertig wirken, obwohl das Hähnchen innen noch roh ist. Ein Streifen ist außerdem dicker als ein Nugget, also braucht die Mitte länger, um auf Temperatur zu kommen. Behandle jeden Beutel als roh, es sei denn, er sagt klar vollständig gegart, und miss den dicksten Streifen mit einem Thermometer.',
      workedExampleHeading: 'Rechenbeispiel: ein Beutel roher panierter Streifen',
      workedExampleTemplate:
        'Ein Beutel ungegarter, panierter Streifen gibt {OVEN_F}°F für {OVEN_MIN} Minuten an, einmal gewendet. In einer Korb-Heißluftfritteuse wird daraus {AF_F}°F für {MIN} Minuten. Heize {PREHEAT} Minuten vor, leg sechs bis acht Streifen flach hinein, ohne dass sie sich berühren, und wende sie nach {FLIP} Minuten. Dünne Chicken Fingers brauchen etwa {SMALL_MIN} Minuten, dicke Streifen nach Hausmacherart ungefähr {LARGE_MIN}. Miss den dicksten vor dem Servieren; vorgegarte Streifen können ein paar Minuten früher heraus.',
      donenessHeading: 'Woran du erkennst, dass sie gar sind',
      donenessBody:
        'Bei rohen Streifen {INT_F}°F ({INT_C}°C) im dicksten Stück, den Fühler vom Ende her eingestochen, damit die Spitze in der Mitte sitzt. Die Farbe der Panade sagt hier gar nichts, weil sie schon vor dem Einfrieren gebräunt wurde. Vorgegarte Streifen müssen nur von einem Ende zum anderen heiß sein. In beiden Fällen sollte die Panade auf beiden Seiten knusprig sein, ohne weiche Stellen, wo sich Streifen berührt haben.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Such zuerst die Zubereitungszeile auf der Packung und merk dir, ob dort roh oder vollständig gegart steht. Nicht auftauen. Lass Platz zwischen den Streifen und sprüh die Panade leicht mit Öl ein, wenn sie trocken und mehlig aussieht. Wasch dir die Hände, nachdem du rohes paniertes Hähnchen angefasst hast, auch wenn es gefroren war.',
      faqs: [
        {
          q: 'Wie lange brauchen Tiefkühl-Hähnchenstreifen in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F, nach {FLIP} Minuten gewendet. Dünne Streifen brauchen ungefähr {SMALL_MIN} Minuten, dicke ungefähr {LARGE_MIN}.',
        },
        {
          q: 'Woran erkenne ich, ob Tiefkühl-Streifen roh sind?',
          a: 'Die Packung sagt es dir. Achte auf „ungegart“, „roh“ oder „vollständig durchgaren“ bei der Zubereitung. Ist es unklar, behandle sie als roh und prüf mit einem Thermometer.',
        },
        {
          q: 'Welche Temperatur müssen rohe Streifen erreichen?',
          a: '{INT_F}°F ({INT_C}°C) im dicksten Stück, mit dem Thermometer gemessen und nicht nach der Farbe geschätzt.',
        },
        {
          q: 'Was unterscheidet Streifen von Nuggets?',
          a: 'Nuggets sind fast immer schon gegart und klein. Streifen sind dicker und oft roh, sie brauchen also mehr Zeit und ein Thermometer.',
        },
        {
          q: 'Muss ich Tiefkühl-Streifen wenden?',
          a: 'Ja, einmal nach {FLIP} Minuten, damit auch die Seite am Korb knusprig wird.',
        },
      ],
    },
    'frozen-hash-browns': {
      label: 'Tiefkühl-Rösti',
      metaTitle: 'Tiefkühl-Rösti in der Heißluftfritteuse: Hash Browns, Zeit & Temperatur',
      metaDescription:
        'Tiefkühl-Rösti und Hash Browns in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} gewendet. Von Mini-Rösti bis zu dicken Ecken, auf beiden Seiten braun, ohne festzukleben.',
      metaKeywords: 'tiefkühl rösti heißluftfritteuse, hash browns airfryer, rösti airfryer zeit, kartoffelpuffer tiefkühl heißluftfritteuse',
      heading: 'Tiefkühl-Rösti in der Heißluftfritteuse',
      subDesc:
        'Rösti-Ecken, Hash Browns und Mini-Rösti aus geriebener Kartoffel, direkt aus dem Tiefkühler. Die Einstellung, das eine Wenden und wie beide Seiten braun werden statt nur eine.',
      cardDesc: 'Flache Stücke: einmal zur Hälfte wenden.',
      sizeLabels: { small: 'Mini-Rösti oder Häppchen', medium: 'Normale Rösti-Ecken oder Hash Browns', large: 'Dicke oder große Rösti' },
      failureHeading: 'Warum eine Seite blass bleibt und festklebt',
      failureBody:
        'Ein Rösti ist flach und liegt deshalb mit einer ganzen Seite auf dem Korbgitter. Die obere Seite bekommt den vollen Luftstrom des Ventilators ab und bräunt, während die untere viel weniger Luft bekommt und blass bleibt. Schütteln hilft nicht, weil ein flaches Stück nur auf derselben Seite herumrutscht. Geriebene Kartoffel gibt außerdem beim Erhitzen Stärke ab, und auf einem trockenen Korb klebt diese Stärke die Unterseite am Metall fest, sodass die Kruste abreißt, wenn du das Stück endlich bewegen willst. Die Lösung ist ein einziges Wenden zur Hälfte, mit dem Pfannenwender, und ein dünner Ölfilm auf dem Korb oder auf den Rösti, damit die Stärke bräunt, statt festzukleben. Nach dem Wenden zeigt die blasse Seite zum Ventilator und holt auf.',
      workedExampleHeading: 'Rechenbeispiel: Frühstück für vier',
      workedExampleTemplate:
        'Eine Packung Rösti-Ecken gibt {OVEN_F}°F für {OVEN_MIN} Minuten an, einmal gewendet. In einer Korb-Heißluftfritteuse wird daraus {AF_F}°F für {MIN} Minuten. Heize {PREHEAT} Minuten vor, leg vier Stück flach und ohne Überlappen hinein und wende sie nach {FLIP} Minuten. Mini-Rösti brauchen etwa {SMALL_MIN} Minuten, dicke Stücke ungefähr {LARGE_MIN}. Daneben ist kein Platz mehr, also brate Speck oder Würstchen vorher oder nachher, nicht gleichzeitig.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Beide Seiten sollten kräftig goldbraun und knusprig sein, die Ränder etwas dunkler. Drück mit dem Pfannenwender auf die Mitte: Sie sollte sich fest anfühlen, nicht weich, und innen heiß und zart sein, wenn du ein Stück durchschneidest. Ist die zweite Seite noch blass, gib ein, zwei Minuten dazu, statt die Hitze hochzudrehen.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Gare sie gefroren und staple sie nicht. Bestreich oder besprüh die Rösti leicht mit Öl, oder öl den Korb ein, damit die Stärke bräunt, statt am Gitter festzubacken. Salz und Pfeffer kommen erst nach dem Wenden dazu. Wenn du mehr als vier Stück brauchst, gare sie in zwei Runden und halte die erste Portion auf einem Gitter im warmen Backofen knusprig; auf einem Teller dämpfen sie sich von unten wieder weich. Klassische Schweizer Rösti aus dem Kühlregal sind dicker und brauchen eher die Zeit der großen Stücke.',
      faqs: [
        {
          q: 'Wie lange brauchen Tiefkühl-Rösti in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F, nach {FLIP} Minuten gewendet. Mini-Rösti brauchen ungefähr {SMALL_MIN} Minuten, dicke Stücke ungefähr {LARGE_MIN}.',
        },
        {
          q: 'Muss ich Rösti wenden?',
          a: 'Ja. Sie sind flach, beim Schütteln bleibt also dieselbe Seite unten. Einmal Wenden zur Hälfte bräunt beide Seiten.',
        },
        {
          q: 'Warum kleben Rösti am Korb?',
          a: 'Die Stärke aus der Kartoffel klebt sie an einem trockenen Korb fest. Ein leichter Sprühstoß Öl verhindert das.',
        },
        {
          q: 'Kann ich lose geriebene Tiefkühl-Kartoffeln garen?',
          a: 'Ja, in einer dünnen, fest angedrückten Schicht auf Backpapier. Wende sie zur Hälfte in Stücken; sie brauchen ein paar Minuten länger als Rösti-Ecken.',
        },
        {
          q: 'Was unterscheidet Rösti hier von Tater Tots?',
          a: 'Rösti sind flach und werden einmal gewendet. Tots sind rund, also werden sie geschüttelt und rollen von selbst auf neue Seiten.',
        },
      ],
    },
    'frozen-egg-rolls': {
      label: 'Tiefkühl-Frühlingsrollen',
      metaTitle: 'Tiefkühl-Frühlingsrollen in der Heißluftfritteuse: Zeit & Temperatur',
      metaDescription:
        'Tiefkühl-Frühlingsrollen und Egg Rolls in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} gewendet. Knuspriger, blasiger Teigmantel mit heißer Füllung.',
      metaKeywords: 'frühlingsrollen heißluftfritteuse, tiefkühl frühlingsrollen airfryer zeit, samosas tiefkühl heißluftfritteuse',
      heading: 'Tiefkühl-Frühlingsrollen in der Heißluftfritteuse',
      subDesc:
        'Frühlingsrollen, Egg Rolls und ähnliche gewickelte Snacks, direkt aus dem Tiefkühler gegart. Die Einstellung, das Wenden und wie die Füllung heiß wird, bevor die Enden verbrennen.',
      cardDesc: 'Teigmantel einsprühen und einmal wenden.',
      sizeLabels: { small: 'Mini-Frühlingsrollen', medium: 'Normale Frühlingsrollen', large: 'Große Egg Rolls oder Samosas' },
      failureHeading: 'Warum die Enden verbrennen und die Mitte kalt bleibt',
      failureBody:
        'Eine Frühlingsrolle ist ein dünner, trockener Teigmantel um eine dicke, feuchte Füllung. Der Teig nimmt in wenigen Minuten Farbe an, und die umgeschlagenen Enden, wo der Teig am dünnsten ist und in den Luftstrom ragt, werfen zuerst Blasen und werden dunkel. Gleichzeitig hat die Füllung aus Kohl und Fleisch komplett gefroren angefangen und wird nur langsam warm, sodass eine Rolle, die außen perfekt aussieht, in der Mitte noch eisig sein kann. Zwei Dinge helfen. Ein leichter Sprühstoß Öl auf den Teig lässt ihn gleichmäßig und langsam bräunen, statt auszutrocknen und an den Spitzen zu verbrennen. Und ein Wenden zur Hälfte bringt die blasse Unterseite zum Ventilator und gibt der Füllung Zeit aufzuholen. Lass Platz zwischen den Rollen, damit auch die Seiten knusprig werden.',
      workedExampleHeading: 'Rechenbeispiel: eine Packung Frühlingsrollen',
      workedExampleTemplate:
        'Eine Packung Tiefkühl-Frühlingsrollen gibt {OVEN_F}°F für {OVEN_MIN} Minuten auf dem Blech an, einmal gewendet. In einer Korb-Heißluftfritteuse wird daraus {AF_F}°F für {MIN} Minuten. Heize {PREHEAT} Minuten vor, sprüh die Rollen leicht ein, leg sie in einer Lage mit Abstand hinein und wende sie nach {FLIP} Minuten. Mini-Frühlingsrollen brauchen etwa {SMALL_MIN} Minuten, große Egg Rolls ungefähr {LARGE_MIN}. Lass sie zwei Minuten stehen, bevor du hineinbeißt: Die Füllung hält viel Hitze.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Der Teigmantel sollte rundum goldbraun und blasig sein, ohne weiße, mehlige Stellen, und beim Drücken knistern. Der eigentliche Test ist die Füllung: Schneid eine Rolle in der Mitte durch und prüf, ob sie bis ganz innen dampft. Ist der Teig fertig, die Mitte aber noch kühl, gib ihnen noch zwei Minuten; die Enden nehmen etwas mehr Farbe an, sollten bei dieser Einstellung aber nicht verbrennen.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Gare sie gefroren; aufgetauter Teig wird weich und reißt. Sprüh oder pinsel sie rundum leicht mit Öl ein, was bei ihnen mehr ausmacht als bei allem anderen aus dem Tiefkühler. Trenne zusammengefrorene Rollen vorsichtig, damit der Teig nicht aufplatzt. Serviere die Dip-Soße getrennt, damit der Mantel knusprig bleibt. Wenn du verschiedene Größen in einer Packung hast, gare sie getrennt, denn kleine Rollen sind deutlich früher fertig als große.',
      faqs: [
        {
          q: 'Wie lange brauchen Tiefkühl-Frühlingsrollen in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F, nach {FLIP} Minuten gewendet. Mini-Rollen brauchen ungefähr {SMALL_MIN} Minuten, große Egg Rolls ungefähr {LARGE_MIN}.',
        },
        {
          q: 'Brauchen Tiefkühl-Frühlingsrollen Öl in der Heißluftfritteuse?',
          a: 'Einen leichten Sprühstoß, ja. Ohne Öl trocknet der Teig aus, wird mehlig und verbrennt an den Enden.',
        },
        {
          q: 'Warum sind meine Frühlingsrollen innen kalt?',
          a: 'Die Füllung war am Anfang gefroren und braucht die volle Zeit. Schneid eine auf, statt dich auf die Farbe zu verlassen.',
        },
        {
          q: 'Geht das auch mit Samosas und anderen Teigtaschen?',
          a: 'Ja. Mini-Rollen sind schneller, und dicke Samosas brauchen ungefähr so lange wie große Egg Rolls.',
        },
        {
          q: 'Soll ich Frühlingsrollen vorher auftauen?',
          a: 'Nein. Aufgetauter Teig zieht Feuchtigkeit aus der Füllung und reißt, wenn du die Rollen bewegst.',
        },
      ],
    },
    'reheat-pizza': {
      label: 'Pizza vom Vortag',
      metaTitle: 'Pizza in der Heißluftfritteuse aufwärmen: knuspriger Boden',
      metaDescription:
        'Pizza vom Vortag in der Heißluftfritteuse aufwärmen: {AF_F}°F für {MIN} Minuten für einen knusprigen Boden und geschmolzenen Käse. Zeiten für dünnen, normalen und dicken Boden und die Backofen-Methode.',
      metaKeywords: 'pizza aufwärmen heißluftfritteuse, wie lange pizza in heißluftfritteuse aufwärmen, pizza vom vortag airfryer, pizza aufbacken air fryer',
      heading: 'Pizza in der Heißluftfritteuse aufwärmen',
      subDesc:
        'Kalte Stücke aus dem Kühlschrank, wieder mit knusprigem Boden und weichem, geschmolzenem Käse. Die sanfte Einstellung, warum mehr Hitze alles schlimmer macht und was bei dickem Boden anders ist.',
      cardDesc: 'Mit weniger Hitze holt der Boden den Käse ein.',
      sizeLabels: { thin: 'Stück mit dünnem Boden', medium: 'Normales Stück', thick: 'Stück mit dickem Boden oder Deep-Dish' },
      failureHeading: 'Warum der Boden weich bleibt, während der Käse verbrennt',
      failureBody:
        'Ein Stück, das gerade aus dem Kühlschrank kommt, ist von oben bis unten kalt, und in der Heißluftfritteuse kommt die Hitze von oben. Käse und Belag liegen genau in diesem Luftstrom: Sie schmelzen, schwitzen Öl aus und werden dann zäh, während der Teig darunter nach einer Nacht im Karton noch kalt und etwas feucht ist. Wer die Temperatur hochdreht, vergrößert diesen Abstand nur. Die Lösung ist eine mittlere Temperatur und eine kurze Zeit, damit die Wärme durch das Stück nach unten wandern und die Feuchtigkeit aus dem Boden treiben kann, bevor die Oberseite übergart. Leg die Stücke direkt in den Korb, ohne Alufolie, damit Luft an die Unterseite kommt, und staple sie nie: Ein Stück obendrauf dämpft das darunter.',
      workedExampleHeading: 'Rechenbeispiel: zwei normale Stücke',
      workedExampleTemplate:
        'Zwei Stücke einer normalen Lieferpizza, direkt aus dem Kühlschrank. {PREHEAT} Minuten vorheizen, nebeneinander in den Korb legen und bei {AF_F}°F für {MEDIUM_MIN} Minuten aufwärmen. Ein Stück mit dünnem Boden ist nach etwa {THIN_MIN} Minuten fertig, ein Stück mit dickem Boden braucht etwa {THICK_MIN}, weil der dicke Teig länger zum Durchwärmen braucht. Ein ganzes Blech im normalen Backofen braucht {OVEN_F}°F für etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass sie fertig ist',
      donenessBody:
        'Heb ein Stück mit einer Zange an: Es sollte waagerecht stehen bleiben, ohne dass die Spitze herunterhängt, und die Unterseite sollte trocken und leicht geröstet aussehen. Der Käse sollte geschmolzen und glänzend sein und an den Rändern gerade zu blubbern beginnen. Bräunt der Käse fleckig, während sich der Boden noch biegt, war die Einstellung zu heiß oder das Stück zu dick für die Zeit. Ein trockener, harter Rand bedeutet, dass die Zeit zu lang war.',
      prepHeading: 'Bevor sie hineinkommt',
      prepBody:
        'Nimm die Stücke ein paar Minuten früher aus dem Karton, damit die größte Kälte verfliegt. Frische Beläge wie Rucola oder Basilikum nimmst du ab und legst sie danach wieder auf. Bei einem sehr trockenen Stück halten ein paar Tropfen Wasser im Korb, neben dem Stück und nicht darauf, den Käse weich. Mehrere Stücke wärmst du lieber in zwei Durchgängen auf als übereinander.',
      faqs: [
        {
          q: 'Wie lange wärmt man Pizza in der Heißluftfritteuse auf?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für ein normales Stück. Dünner Boden braucht etwa {THIN_MIN} Minuten, dicker Boden etwa {THICK_MIN}.',
        },
        {
          q: 'Warum Pizza nicht heißer aufwärmen?',
          a: 'Die Hitze kommt von oben, deshalb übergart eine heißere Einstellung den Käse, bevor der kalte Boden warm und trocken geworden ist.',
        },
        {
          q: 'Soll ich Alufolie oder Backpapier unter das Stück legen?',
          a: 'Nein. Die Luft muss an die Unterseite kommen, damit sie knusprig wird. Nimm nur bei sehr käsigen, tropfenden Stücken eine Unterlage, und zwar kleiner als das Stück.',
        },
        {
          q: 'Ist das dasselbe wie eine Tiefkühlpizza backen?',
          a: 'Nein. Eine Tiefkühlpizza ist oben roh und komplett gefroren und braucht deshalb eine andere Einstellung; diese hier wärmt nur ein fertiges Stück auf und macht es wieder knusprig.',
        },
        {
          q: 'Wie wärmt man Pizza im Backofen auf?',
          a: 'Leg die Stücke auf ein Blech bei {OVEN_F}°F für etwa {OVEN_MIN} Minuten, oder auf ein vorgeheiztes Blech, wenn der Boden knuspriger werden soll.',
        },
      ],
    },
    'reheat-fries': {
      label: 'Pommes vom Vortag',
      metaTitle: 'Pommes in der Heißluftfritteuse aufwärmen: wieder knusprig',
      metaDescription:
        'Pommes vom Vortag in der Heißluftfritteuse aufwärmen: {AF_F}°F für {MIN} Minuten, einmal schütteln. Warum Pommes über Nacht ledrig werden, wie viel sie zurückgewinnen und die Backofen-Methode.',
      metaKeywords: 'pommes aufwärmen heißluftfritteuse, pommes vom vortag airfryer, wie pommes in heißluftfritteuse aufwärmen, mcdonalds pommes aufwärmen airfryer',
      heading: 'Pommes in der Heißluftfritteuse aufwärmen',
      subDesc:
        'Pommes vom Vortag, vom Imbiss oder selbst gemacht, in wenigen Minuten wieder knusprig. Warum sie über Nacht ledrig werden, und das kurze, heiße Aufwärmen, das die meisten zurückholt.',
      cardDesc: 'Kurz und heiß, mit etwas Öl, in einer Lage.',
      sizeLabels: { small: 'Eine kleine Handvoll', medium: 'Eine Imbissportion', large: 'Eine große oder Familienportion' },
      failureHeading: 'Warum Pommes vom Vortag ledrig werden',
      failureBody:
        'Eine frische Pommes ist knusprig, weil ihre Oberfläche trocken und ihr Inneres aus gegarter, lockerer Stärke ist. Im Kühlschrank kristallisiert diese Stärke langsam wieder aus und presst Wasser heraus, das die Kruste von innen durchweicht. Am nächsten Tag ist die Außenseite weich und das Innere dicht und gummiartig geworden. Langes, sanftes Aufwärmen macht es schlimmer: Es trocknet das Innere zu Pappe aus, bevor die Oberfläche knusprig wird. Was funktioniert, ist das Gegenteil: ein kurzer Stoß heißer Luft, der die Oberfläche schnell trocknet und frittiert, mit einer ganz dünnen Schicht Öl als Hilfe, während das Innere nur warm wird. Dünne Pommes erholen sich am besten; dicke werden nie ganz wie frisch.',
      workedExampleHeading: 'Rechenbeispiel: eine Imbissportion',
      workedExampleTemplate:
        'Eine Portion übrig gebliebener Pommes aus dem Kühlschrank, mit einem halben Teelöffel Öl vermischt. {PREHEAT} Minuten vorheizen, in einer Lage verteilen und bei {AF_F}°F für {MEDIUM_MIN} Minuten aufwärmen, nach der halben Zeit einmal schütteln. Eine kleine Handvoll ist nach etwa {SMALL_MIN} Minuten fertig, eine große Portion in einer Lage nach etwa {LARGE_MIN}. Auf einem Blech im normalen Backofen brauchen dieselben Pommes {OVEN_F}°F für etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Nimm eine heraus: Sie sollte gerade stehen und knusprig klingen, wenn du sie gegen den Korb klopfst. Brich sie auf, und das Innere sollte heiß sein, nicht nur lauwarm. Pommes, die brechen, hohl wirken oder trocken schmecken, waren zu lange drin; biegen sie sich noch, lagen sie zu dicht oder der Korb war nicht vorgeheizt.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Schüttle loses Salz und Krümel ab, die verbrennen. Eine sehr kleine Menge Öl macht viel aus, weil das meiste Frittieröl eingezogen ist. Trenn Pommes, die im Karton aneinanderkleben. Salze erst nach dem Aufwärmen nach. Pommes, die in einer geschlossenen Tüte lagen, sind feuchter als offen gelagerte, gib ihnen also das längere Ende der Zeit. Süßkartoffelpommes enthalten mehr Zucker und werden schneller dunkel, schau bei ihnen also früher nach.',
      faqs: [
        {
          q: 'Wie lange wärmt man Pommes in der Heißluftfritteuse auf?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für eine Portion, einmal geschüttelt. Eine kleine Handvoll braucht etwa {SMALL_MIN} Minuten, eine große Portion etwa {LARGE_MIN}.',
        },
        {
          q: 'Kann man McDonald’s-Pommes in der Heißluftfritteuse aufwärmen?',
          a: 'Ja. Dünne Fast-Food-Pommes erholen sich besser als dicke; schau eine Minute früher nach, denn sie werden sehr schnell von knusprig zu trocken.',
        },
        {
          q: 'Warum sind meine aufgewärmten Pommes hart?',
          a: 'Sie waren zu lange drin. Pommes vom Vortag brauchen nur kurzes, heißes Aufwärmen; das Innere hat schon Wasser verloren und trocknet schnell aus.',
        },
        {
          q: 'Muss ich Öl dazugeben?',
          a: 'Ein wenig hilft. Das meiste Frittieröl ist über Nacht in die Kartoffel eingezogen, eine dünne Schicht hilft der Oberfläche, wieder knusprig zu werden.',
        },
        {
          q: 'Wie wärmt man Pommes im Backofen auf?',
          a: 'Verteil sie auf einem Blech bei {OVEN_F}°F für etwa {OVEN_MIN} Minuten und wende sie einmal. Ein vorgeheiztes Blech macht die Unterseite schneller knusprig.',
        },
      ],
    },
    'reheat-fried-chicken': {
      label: 'Brathähnchen vom Vortag',
      metaTitle: 'Frittiertes Hähnchen in der Heißluftfritteuse aufwärmen',
      metaDescription:
        'Frittiertes Hähnchen in der Heißluftfritteuse aufwärmen: {AF_F}°F für {MIN} Minuten, nach {FLIP} wenden, bis {INT_F}°F. Zeiten für Unterschenkel, Oberschenkel und Brust und die Backofen-Methode.',
      metaKeywords: 'frittiertes hähnchen aufwärmen heißluftfritteuse, fried chicken aufwärmen airfryer, kfc aufwärmen heißluftfritteuse, hähnchen vom vortag airfryer',
      heading: 'Frittiertes Hähnchen in der Heißluftfritteuse aufwärmen',
      subDesc:
        'Frittiertes Hähnchen vom Vortag, mit Knochen, wieder mit knuspriger Panade und heißem Kern. Warum die Panade im Kühlschrank weich wird und wie du sie vor dem Aufwärmen trocknest.',
      cardDesc: 'Erst offen liegen lassen, damit die Kruste trocknet.',
      sizeLabels: { small: 'Unterschenkel', medium: 'Oberschenkel', large: 'Brust oder großes Stück' },
      internalLine: 'Durch und durch heiß bei {INT_F}°F ({INT_C}°C) an der dicksten Stelle: USDA-Empfehlung für Reste',
      failureHeading: 'Warum die Panade im Kühlschrank weich wird',
      failureBody:
        'Frittiertes Hähnchen ist eine trockene, knusprige Hülle um feuchtes Fleisch. Über Nacht in einer geschlossenen Dose wandert Feuchtigkeit aus dem Fleisch in die Panade, und die kalte Luft in der Dose schlägt sich zusätzlich darauf nieder. Am Morgen ist die Kruste weich und etwas klebrig. Kommt das Hähnchen so in die Heißluftfritteuse, muss dieses Wasser erst als Dampf entweichen, bevor die Panade knusprig werden kann, und die Außenseite ist noch feucht, wenn der Bereich am Knochen endlich heiß ist. Die Lösung beginnt vor dem Aufwärmen. Nimm die Stücke aus der Dose und leg sie auf ein Gitter, während die Heißluftfritteuse vorheizt, damit die Oberfläche trocknet und die Kälte nachlässt. Dann erledigt eine mittlere Hitze den Rest: Sie macht die Kruste knusprig und bringt das Fleisch am Knochen im gleichen Tempo auf Temperatur.',
      workedExampleHeading: 'Rechenbeispiel: zwei Oberschenkel aus dem Kühlschrank',
      workedExampleTemplate:
        'Zwei übrig gebliebene frittierte Hähnchenoberschenkel, offen auf einem Gitter, während die Heißluftfritteuse aufheizt. {PREHEAT} Minuten vorheizen, mit der Haut nach oben hineinlegen und bei {AF_F}°F für {MEDIUM_MIN} Minuten aufwärmen, nach {FLIP} wenden. Ein Unterschenkel braucht etwa {SMALL_MIN} Minuten, eine große Brust etwa {LARGE_MIN}. Im normalen Backofen werden dieselben Stücke bei {OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Gitter über einem Blech aufgewärmt.',
      donenessHeading: 'Woran du erkennst, dass es fertig ist',
      donenessBody:
        'Prüf das dickste Stück mit einem Thermometer neben dem Knochen, ohne ihn zu berühren: Die USDA empfiehlt {INT_F}°F ({INT_C}°C) für aufgewärmte Reste. Die Panade sollte beim Klopfen knusprig klingen und trocken aussehen, und um die Stücke herum sollte etwas Fett brutzeln. Eine kalte Stelle am Knochen unter einer dunklen Kruste bedeutet, dass die Hitze für die Größe zu hoch war.',
      prepHeading: 'Bevor es hineinkommt',
      prepBody:
        'Lass die Stücke beim Vorheizen offen liegen und tupf das Fett vom Boden der Dose ab. Zusätzliches Öl ist nicht nötig. Wärm Stücke ähnlicher Größe zusammen auf oder gib die kleineren ein paar Minuten später dazu. Stücke, die schon zwei Tage im Kühlschrank lagen, brauchen eher das längere Ende der Zeit.',
      faqs: [
        {
          q: 'Wie lange wärmt man frittiertes Hähnchen in der Heißluftfritteuse auf?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für einen Oberschenkel, nach {FLIP} gewendet. Ein Unterschenkel braucht etwa {SMALL_MIN} Minuten, eine große Brust etwa {LARGE_MIN}.',
        },
        {
          q: 'Welche Temperatur sollte aufgewärmtes Hähnchen erreichen?',
          a: '{INT_F}°F ({INT_C}°C) an der dicksten Stelle; das ist die USDA-Empfehlung für alle aufgewärmten Reste.',
        },
        {
          q: 'Kann ich so auch KFC oder anderes Imbiss-Hähnchen aufwärmen?',
          a: 'Ja. Druckfrittiertes Imbiss-Hähnchen hat eine dickere Panade, gib ihm also das längere Ende der Zeit und prüf am Knochen.',
        },
        {
          q: 'Soll ich es mit Öl einsprühen?',
          a: 'Nein. Die Panade enthält noch reichlich Frittieröl; mehr Öl macht sie nur fettig.',
        },
        {
          q: 'Wie wärmt man frittiertes Hähnchen im Backofen auf?',
          a: 'Auf einem Gitter über einem Blech bei {OVEN_F}°F für etwa {OVEN_MIN} Minuten. Das Gitter lässt Luft an die Unterseite, damit sie nicht weich wird.',
        },
      ],
    },
    'reheat-wings': {
      label: 'Chicken Wings vom Vortag',
      metaTitle: 'Chicken Wings in der Heißluftfritteuse aufwärmen',
      metaDescription:
        'Chicken Wings vom Vortag in der Heißluftfritteuse aufwärmen: {AF_F}°F für {MIN} Minuten, einmal schütteln, bis {INT_F}°F. Wie klebrige Soße nicht verbrennt, und die Backofen-Methode.',
      metaKeywords: 'chicken wings aufwärmen heißluftfritteuse, wings aufwärmen airfryer, chicken wings vom vortag, buffalo wings aufwärmen heißluftfritteuse',
      heading: 'Chicken Wings in der Heißluftfritteuse aufwärmen',
      subDesc:
        'Wings vom Vortag, mit Soße oder trockener Würzmischung, wieder heiß und knusprig. Warum die Soße verbrennt, bevor das Fleisch heiß ist, und der Trick, der klebrige Wings vor dem Verbrennen bewahrt.',
      cardDesc: 'Dicke Soße vorher abstreifen, danach neu glasieren.',
      sizeLabels: { small: 'Kleine Wings, Flügelmittelstücke und Drumettes', medium: 'Normale geteilte Wings', large: 'Große Wings' },
      internalLine: 'Durch und durch heiß bei {INT_F}°F ({INT_C}°C) am Knochen: USDA-Empfehlung für Reste',
      failureHeading: 'Warum die Soße verbrennt, bevor der Wing heiß ist',
      failureBody:
        'Die meisten Wing-Soßen beruhen auf Zucker: Honig, brauner Zucker, Ketchup, Barbecuesoße oder süße Chilisoße. Zucker beginnt bei einer viel niedrigeren Temperatur zu karamellisieren, als nötig ist, um einen kalten Wing bis zum Knochen zu erhitzen, und in der Heißluftfritteuse sitzt die Soße außen, mitten im heißen Luftstrom. Die Glasur wird also dunkel, dann bitter und schwarz, während das Fleisch innen noch kalt ist. Buffalo-Soße hat weniger Zucker, trennt sich aber und hinterlässt eine Pfütze Butter. Die Lösung: den Wing aufwärmen, nicht die Soße. Kratz oder wisch die dicke Glasur ab, wärm die Wings fast ohne Soße auf und schwenk sie am Ende in frischer oder erwärmter Soße. Wings mit trockener Würzmischung können direkt hinein.',
      workedExampleHeading: 'Rechenbeispiel: eine Imbissbox Wings',
      workedExampleTemplate:
        'Acht übrig gebliebene Barbecue-Wings, von der dicksten Soße befreit. {PREHEAT} Minuten vorheizen, in einer Lage verteilen und bei {AF_F}°F für {MEDIUM_MIN} Minuten aufwärmen, einmal schütteln. Kleine Flügelmittelstücke und Drumettes brauchen etwa {SMALL_MIN} Minuten, große Wings etwa {LARGE_MIN}. In warmer Soße schwenken und für eine Minute zurück in den Korb, damit sie anzieht. Im normalen Backofen werden dieselben Wings bei {OVEN_F}°F für etwa {OVEN_MIN} Minuten aufgewärmt.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Prüf das fleischigste Drumette neben dem Knochen: Die USDA empfiehlt {INT_F}°F ({INT_C}°C) für aufgewärmte Reste. Die Haut sollte knusprig sein und brutzeln, und übrige Soße sollte blubbern, nicht schwarz sein. Dunkle Ränder mit kalter Mitte bedeuten, dass zu viel Soße dran geblieben ist.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Heb die Soße aus der Box auf und wärm sie getrennt. Wisch klebrige Wings mit Küchenpapier ab; ein dünner Film ist in Ordnung. Trenn Wings, die aneinanderkleben, damit Luft an jede Seite kommt. Öl ist nicht nötig. Wings, die seit dem Vorabend in Soße lagen, haben einen Teil davon in die Haut aufgenommen; sie werden nie ganz so knusprig wie trocken gewürzte, aber kurzes Aufwärmen und frische Soße kommen nah heran. Wärm sie in einer Lage auf, notfalls in zwei Durchgängen. Ein Spritzer frischer Zitronensaft oder etwas frische Soße am Ende bringt den Geschmack vom Vortag zurück.',
      faqs: [
        {
          q: 'Wie lange wärmt man Wings in der Heißluftfritteuse auf?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für normale Wings, einmal geschüttelt. Kleine brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}.',
        },
        {
          q: 'Warum verbrennen meine aufgewärmten Wings?',
          a: 'Der Zucker in der Soße karamellisiert lange bevor das Fleisch heiß ist. Streif dicke Soße vorher ab und gib am Ende frische Soße dazu.',
        },
        {
          q: 'Kann man Buffalo Wings in der Heißluftfritteuse aufwärmen?',
          a: 'Ja. Buffalo-Soße trennt sich beim Aufwärmen, also wärm die Wings ohne Soße auf und schwenk sie danach in warmer Soße.',
        },
        {
          q: 'Welche Temperatur sollten aufgewärmte Wings erreichen?',
          a: '{INT_F}°F ({INT_C}°C) neben dem Knochen; das ist die USDA-Empfehlung für alle aufgewärmten Reste.',
        },
        {
          q: 'Wie wärmt man Wings im Backofen auf?',
          a: 'Auf einem Gitter über einem Blech bei {OVEN_F}°F für etwa {OVEN_MIN} Minuten, danach in Soße schwenken.',
        },
      ],
    },
    'reheat-steak': {
      label: 'Steak vom Vortag',
      metaTitle: 'Steak in der Heißluftfritteuse aufwärmen: {INT_F}°F oder rosa',
      metaDescription:
        'Steak vom Vortag in der Heißluftfritteuse bei {AF_F}°F aufwärmen: etwa {MIN} Minuten bis zu den {INT_F}°F der USDA für Reste, oder früher aufhören und es rosa halten. Beides, klar gesagt.',
      metaKeywords: 'steak aufwärmen heißluftfritteuse, steak vom vortag aufwärmen, steak aufwärmen ohne durchzugaren, steak airfryer aufwärmen',
      heading: 'Steak in der Heißluftfritteuse aufwärmen',
      subDesc:
        'Steak vom Vortag, ganz oder in Scheiben. Die niedrige Einstellung, die zwei unterschiedlichen Ziele für Garstufe und Sicherheit und warum Aufschneiden vorher das Beste aus beiden bringt.',
      cardDesc: 'Niedrige Hitze und ab dem Wenden das Thermometer.',
      sizeLabels: { thin: 'Steak in Scheiben', medium: 'Ganzes Steak, etwa 2,5 cm', thick: 'Ganzes Steak, etwa 4 cm' },
      internalLine: 'USDA-Empfehlung für Reste: {INT_F}°F ({INT_C}°C) im Kern',
      internalAltLine:
        'Um es medium-rare zu halten: {INT_ALT_F}–{INT_ALT_TO_F}°F ({INT_ALT_C}–{INT_ALT_TO_C}°C), meist um {FLIP} Min. erreicht. Dort aufzuhören ist deine Entscheidung.',
      failureHeading: 'Sicher oder rosa: zwei Ziele, die nicht zusammenpassen',
      failureBody:
        'Ein medium-rare gegartes Steak war am Ende bei etwa {INT_ALT_TO_F}°F im Kern. Die USDA-Empfehlung für das Aufwärmen aller Reste liegt bei {INT_F}°F, und den Kern eines Steaks so heiß zu bekommen gart es durch. Keine Einstellung schafft beides, deshalb nennt dir diese Seite beide Zahlen und lässt dich wählen. Die niedrige Temperatur sorgt dafür, dass beide Wege gelingen: Bei sanfter Hitze wird die Außenseite nicht zäh und grau, während der Kern noch warm wird, und das Steak erwärmt sich gleichmäßig. Die Zeit hier ist eine Schätzung, bis ein ganzes Steak {INT_F}°F erreicht, kein getesteter Wert, denn Dicke und Kühlschranktemperatur schwanken. Fang beim Wenden an, mit dem Thermometer zu messen, und entscheide nach dem Messwert.',
      workedExampleHeading: 'Rechenbeispiel: ein Rumpsteak vom Vortag',
      workedExampleTemplate:
        'Ein etwa 2,5 cm dickes Rumpsteak vom Vorabend, direkt aus dem Kühlschrank. {PREHEAT} Minuten vorheizen und bei {AF_F}°F aufwärmen, nach {FLIP} Minuten wenden und dann den Kern messen. Für die {INT_F}°F der USDA rechne mit etwa {MEDIUM_MIN} Minuten insgesamt; ein 4 cm dickes Steak braucht etwa {THICK_MIN}. Steak in Scheiben ist nach etwa {THIN_MIN} Minuten durch und durch heiß. Im normalen Backofen ist die langsame Methode {OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Gitter.',
      donenessHeading: 'So prüfst du es',
      donenessBody:
        'Nimm ein Sekundenthermometer und miss genau in der Mitte der dicksten Stelle. Beim Wenden bedeutet ein Wert von {INT_ALT_F}–{INT_ALT_TO_F}°F, dass das Steak warm und noch rosa ist; mach weiter bis {INT_F}°F ({INT_C}°C), wenn du der USDA-Empfehlung für Reste folgst. Die Oberfläche sollte brutzeln, aber nicht austrocknen oder sich an den Rändern wölben.',
      prepHeading: 'Bevor es hineinkommt',
      prepBody:
        'Lass das Steak draußen liegen, während die Heißluftfritteuse aufheizt, damit der Kern weniger kalt ist. Bestreich es mit etwas Öl oder Butter, damit die Oberfläche nicht austrocknet. Heb den Fleischsaft vom Teller auf und gieß ihn vor dem Servieren darüber.',
      faqs: [
        {
          q: 'Wie wird Steak durch und durch heiß, ohne zu übergaren?',
          a: 'Schneid es vor dem Aufwärmen auf, wenn du es durch und durch heiß willst, ohne es zu übergaren. Dünne Scheiben erreichen {INT_F}°F in etwa {THIN_MIN} Minuten, bevor sie grau und zäh werden.',
        },
        {
          q: 'Welche Temperatur sollte aufgewärmtes Steak erreichen?',
          a: 'Die USDA-Empfehlung für Reste liegt bei {INT_F}°F ({INT_C}°C). Viele hören bei {INT_ALT_F}–{INT_ALT_TO_F}°F auf, damit es rosa bleibt; das ist deine Entscheidung.',
        },
        {
          q: 'Ist die Zeit auf dieser Seite genau?',
          a: 'Nein. Sie ist eine Schätzung für ein 2,5 cm dickes Steak aus dem Kühlschrank. Fang nach {FLIP} Minuten an, mit dem Thermometer zu messen, und richte dich nach dem Wert.',
        },
        {
          q: 'Warum so eine niedrige Temperatur?',
          a: 'Sanfte Hitze wärmt den Kern, bevor die Außenseite austrocknet, und das Steak behält vom Rand bis zur Mitte dieselbe Farbe.',
        },
        {
          q: 'Wie wärmt man Steak im Backofen auf?',
          a: 'Auf einem Gitter bei {OVEN_F}°F für etwa {OVEN_MIN} Minuten, danach kurz in einer sehr heißen Pfanne anbraten, wenn die Kruste zurückkommen soll.',
        },
      ],
    },
    cookies: {
      label: 'Cookies',
      metaTitle: 'Cookies in der Heißluftfritteuse: Zeit, Temperatur, Backpapier',
      metaDescription:
        'Cookies in der Heißluftfritteuse backen: {AF_F}°F für {MIN} Minuten aus Teig. Warum leichter Teig und Backpapier in den Lüfter fliegen, Zeiten nach Größe und die Backofen-Entsprechung.',
      metaKeywords: 'cookies heißluftfritteuse, kekse airfryer zeit und temperatur, chocolate chip cookies heißluftfritteuse, cookies backen airfryer',
      heading: 'Cookies in der Heißluftfritteuse',
      subDesc:
        'Cookies vom Löffel, ein paar auf einmal gebacken, aus frischem oder gefrorenem Teig. Die niedrigere Einstellung, wie das Backpapier liegen bleibt und wann sie herauskommen.',
      cardDesc: 'Beschwer das Backpapier mit dem Teig selbst.',
      sizeLabels: { small: 'Klein, ein gestrichener Esslöffel', medium: 'Mittel, etwa 2 Esslöffel', large: 'Groß, Bäckereigröße' },
      failureHeading: 'Warum Backpapier und Teig in den Lüfter fliegen',
      failureBody:
        'Der Lüfter einer Heißluftfritteuse ist kräftig, und ein loses Blatt Backpapier wiegt fast nichts. Kommt das Papier allein zum Vorheizen hinein, fliegt es an das Heizelement und kann dort ansengen. Selbst mit Teig darauf hebt sich eine freie Ecke und klappt über die Cookies. Der Teig selbst ist das zweite Problem: Weicher Keksteig läuft beim Erwärmen auseinander, und die Luft, die über die Oberfläche streicht, lässt sie zu früh fest werden, sodass die Cookies sich wölben und reißen, statt gleichmäßig zu zerlaufen. Die Lösungen sind einfach. Leg das Papier nur mit dem Teig darauf hinein, schneid es so zu, dass kein Rand übersteht, und lass Platz zwischen den Kugeln. Die niedrigere Einstellung bremst die Oberseite, damit der Cookie zerlaufen kann, bevor er fest wird.',
      workedExampleHeading: 'Rechenbeispiel: Chocolate Chip Cookies',
      workedExampleTemplate:
        'Eine Portion Chocolate-Chip-Keksteig, für die das Rezept {OVEN_F}°F für {OVEN_MIN} Minuten im Backofen angibt. In einer Korb-Heißluftfritteuse bei {AF_F}°F für {MEDIUM_MIN} Minuten backen. {PREHEAT} Minuten vorheizen, vier Kugeln von etwa zwei Esslöffeln auf zugeschnittenes Backpapier setzen und hineinschieben. Kleine Cookies brauchen etwa {SMALL_MIN} Minuten, große in Bäckereigröße etwa {LARGE_MIN}. Lass jede Ladung auf dem Papier fest werden, bevor du sie bewegst.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Die Ränder sollten fest und leicht golden sein, während die Mitte noch etwas weich und aufgegangen aussieht; sie wird beim Abkühlen fest. Ein Holzstäbchen in der Mitte sollte mit feuchten Krümeln herauskommen, nicht mit nassem Teig. Dunkelbraune Cookies sind zu weit gegangen. Lass sie auf dem Papier fest werden und setz sie dann auf ein Gitter, wo die Unterseite knusprig bleibt.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Kühl sehr weichen Teig kurz, damit er seine Form hält. Schneid das Backpapier auf die Größe des Korbbodens zu, kleiner als die Grundfläche, oder nimm eine gelochte Unterlage. Back vier bis sechs auf einmal, mit Platz zum Zerlaufen. Gefrorene Teigkugeln kommen so, wie sie sind, hinein, mit ein bis zwei Minuten mehr. Fertigteig aus dem Kühlregal funktioniert genauso; stich ihn in gleich große Stücke ab, damit alle Cookies einer Ladung gleichzeitig fertig werden.',
      faqs: [
        {
          q: 'Wie lange brauchen Cookies in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für mittlere Cookies. Kleine brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}.',
        },
        {
          q: 'Brauche ich Backpapier für Cookies in der Heißluftfritteuse?',
          a: 'Es hilft, sie sauber zu lösen, aber leg es nur mit Teig darauf und passend zugeschnitten hinein, damit der Lüfter es nicht an das Heizelement bläst.',
        },
        {
          q: 'Kann ich gefrorenen Keksteig in der Heißluftfritteuse backen?',
          a: 'Ja, direkt aus dem Gefrierfach. Gib ein bis zwei Minuten dazu und prüf die Mitte mit einem Holzstäbchen.',
        },
        {
          q: 'Warum sind meine Cookies gewölbt und unten blass?',
          a: 'Die Oberseite wurde fest, bevor der Teig zerlaufen konnte. Nimm die niedrigere Einstellung und drück die Kugeln etwas flach.',
        },
        {
          q: 'Was ist die Backofen-Entsprechung?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem ausgelegten Backblech im normalen Backofen.',
        },
      ],
    },
    muffins: {
      label: 'Muffins',
      metaTitle: 'Muffins in der Heißluftfritteuse: Zeit, Temperatur und Förmchen',
      metaDescription:
        'Muffins in der Heißluftfritteuse backen: {AF_F}°F für {MIN} Minuten. Silikonförmchen oder ein kleines Blech, das passt, warum ein 12er-Blech nicht passt und wie du die Mitte prüfst.',
      metaKeywords: 'muffins heißluftfritteuse, muffins airfryer zeit und temperatur, blaubeermuffins heißluftfritteuse, muffins backen airfryer',
      heading: 'Muffins in der Heißluftfritteuse',
      subDesc:
        'Muffins in Durchgängen in einer Korb-Heißluftfritteuse gebacken. Die Einstellung, welche Förmchen und Bleche passen und wie die Oberseite nicht bräunt, bevor die Mitte gar ist.',
      cardDesc: 'Silikonförmchen, und die Mitte zählt, nicht die Farbe.',
      sizeLabels: { small: 'Mini-Muffins', medium: 'Normale Muffins', large: 'Große oder Bäcker-Muffins' },
      failureHeading: 'Warum die Oberseite bräunt, während die Mitte roh bleibt',
      failureBody:
        'Im Backofen wird ein Muffin in ruhiger Luft von allen Seiten erhitzt. In der Heißluftfritteuse strömt die Hitze über die Oberseite, deshalb bräunt die Haube früh und wirkt fertig, während die Mitte noch Teig ist. Die Farbe ist die Falle: Ein goldener Muffin kann innen roh sein. Die niedrigere Einstellung hier bremst die Oberseite, damit das Innere aufholen kann, und die Zeit geht davon aus, dass du die Mitte prüfst, nicht die Farbe. Muffins mit viel Teig, Obst oder Joghurt enthalten mehr Wasser und brauchen die volle Zeit. Ist die Oberseite lange vor dem Ende dunkel, leg für den Rest der Backzeit ein kleines Stück Alufolie locker darüber, so festgesteckt, dass der Lüfter es nicht anhebt.',
      workedExampleHeading: 'Rechenbeispiel: sechs Blaubeermuffins',
      workedExampleTemplate:
        'Ein Rezept für Blaubeermuffins, das {OVEN_F}°F für {OVEN_MIN} Minuten im Backofen angibt. In einer Korb-Heißluftfritteuse bei {AF_F}°F für {MEDIUM_MIN} Minuten backen. {PREHEAT} Minuten vorheizen, sechs Silikonförmchen zu zwei Dritteln füllen und mit Abstand hineinstellen. Mini-Muffins brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}. Den restlichen Teig in einem zweiten Durchgang backen.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Stich ein Holzstäbchen in die Mitte des mittleren Muffins: Es sollte sauber oder mit ein paar trockenen Krümeln herauskommen, nie mit feuchtem Teig. Die Oberseite sollte zurückfedern, wenn du leicht darauf drückst. Achte nicht auf die Farbe, die in der Heißluftfritteuse dem Inneren vorauseilt. Muffins am Rand des Korbs backen schneller als die in der Mitte, also prüf den mittleren und tausch die Plätze nach der halben Zeit, wenn dein Korb ungleichmäßig bräunt. Lass sie in den Förmchen ruhen, bevor du sie herausnimmst.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Nimm Silikonförmchen, ineinandergesteckte Alu-Förmchen für mehr Halt oder ein kleines Muffinblech, das flach auf dem Korbboden steht. Ein normales 12er-Muffinblech passt nicht in einen 5-qt-Korb (etwa 4,7 Liter). Füll die Förmchen zu zwei Dritteln und lass Lücken, damit die Luft zwischen ihnen zirkuliert. Silikonförmchen sind weich: Stell sie schon gefüllt in den Korb, oder setz sie vorher auf ein kleines Gitter, damit sie beim Hineinheben nicht kippen und der Teig nicht überläuft.',
      faqs: [
        {
          q: 'Wie lange brauchen Muffins in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für normale Muffins. Minis brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}.',
        },
        {
          q: 'Passt ein Muffinblech in meine Heißluftfritteuse?',
          a: 'Ein 12er-Blech passt nicht in einen 5-qt-Korb. Nimm Silikonförmchen oder ein kleines Blech mit 4 oder 6 Mulden, das flach auf dem Boden steht.',
        },
        {
          q: 'Kann ich Papierförmchen verwenden?',
          a: 'Nur in Silikon- oder Alu-Förmchen. Allein sind Papierförmchen zu weich, um den Teig zu halten, und können umkippen.',
        },
        {
          q: 'Warum sind meine Muffins in der Mitte roh?',
          a: 'Die Oberseite bräunte zuerst und sie kamen nach der Farbe heraus. Prüf die Mitte mit einem Holzstäbchen und senk die Hitze, wenn die Oberseite früh dunkel wird.',
        },
        {
          q: 'Was ist die Backofen-Entsprechung?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten in einem 12er-Muffinblech im normalen Backofen.',
        },
      ],
    },
    brownies: {
      label: 'Brownies',
      metaTitle: 'Brownies in der Heißluftfritteuse: Formgröße, Zeit, Temperatur',
      metaDescription:
        'Brownies in der Heißluftfritteuse backen: {AF_F}°F für {MIN} Minuten in einer 18-cm-Form. Welche Formen in einen 5-qt-Korb passen, wie du ein 23×23-Rezept halbierst, und die Backofen-Entsprechung.',
      metaKeywords: 'brownies heißluftfritteuse, brownies airfryer zeit und temperatur, brownie form heißluftfritteuse, brownies backen airfryer',
      heading: 'Brownies in der Heißluftfritteuse',
      subDesc:
        'Eine kleine Form Brownies, in einer Korb-Heißluftfritteuse gebacken. Die Form, die passt, wie du ein normales Rezept anpasst und wie die Mitte saftig wird, ohne harte Ränder.',
      cardDesc: 'Nimm eine 15–18-cm-Form und halbiere ein 23×23-Rezept.',
      sizeLabels: { small: 'Runde Form, 15 cm', medium: 'Quadratische Form, 18 cm', thick: 'Höhere oder besonders saftige Ladung' },
      failureHeading: 'Warum die Ränder übergaren, während die Mitte nass bleibt',
      failureBody:
        'Brownieteig ist dicht und schwer, und in einer Metallform bekommen die Ränder die stärkste Hitze ab, an den heißen Wänden und direkt unter dem Lüfter. Sie stocken und trocknen lange vor der Mitte, die rundum von Teig isoliert ist. Drehst du die Hitze hoch, um die Mitte zu beschleunigen, bekommst du einen harten Rand und eine Kruste, die reißt und sich von einem rohen Kern löst. Die niedrigere Einstellung gibt der Wärme Zeit, die Mitte zu erreichen. Die Formgröße zählt genauso: Ein 5-qt-Korb ist etwa 20–22 cm breit, also passt eine 15- oder 18-cm-Form mit Platz, damit die Luft rundherum zirkuliert. Ein normales Rezept für 23×23 cm musst du halbieren oder in zwei Durchgängen backen; höher in eine kleine Form gegossen, wird es in der Mitte nicht fest.',
      workedExampleHeading: 'Rechenbeispiel: ein halbes 23×23-Rezept',
      workedExampleTemplate:
        'Ein Brownie-Rezept für 23×23 cm, das {OVEN_F}°F für {OVEN_MIN} Minuten angibt, halbiert und in eine ausgelegte quadratische 18-cm-Form gegossen. {PREHEAT} Minuten vorheizen und bei {AF_F}°F für {MEDIUM_MIN} Minuten backen. Eine runde 15-cm-Form braucht etwa {SMALL_MIN} Minuten, eine höhere oder besonders saftige Ladung etwa {THICK_MIN}. In der Form abkühlen lassen, bevor du schneidest.',
      donenessHeading: 'Woran du erkennst, dass sie fertig sind',
      donenessBody:
        'Ein Holzstäbchen in der Mitte sollte mit feuchten Krümeln herauskommen, nicht mit flüssigem Teig. Die Oberfläche sollte trocken und an den Rändern leicht rissig aussehen, mit nur einem leichten Wackeln in der Mitte. Brownies garen in der heißen Form weiter, nimm sie also etwas früher heraus. Schneid sie erst, wenn sie ganz abgekühlt sind, dann werden die Stücke sauber.',
      prepHeading: 'Bevor sie hineinkommen',
      prepBody:
        'Leg die Form mit Backpapier aus und lass zwei Seiten überstehen, damit du die Brownies herausheben kannst. Prüf, dass die Form flach steht und rundum Platz hat. Wird die Oberseite früh dunkel, deck sie locker mit Alufolie ab und steck die Folie unter die Form, damit sie nicht wegfliegt. Eine Silikonform leitet die Hitze schwächer als Metall; rechne dort mit ein paar Minuten mehr.',
      faqs: [
        {
          q: 'Wie lange brauchen Brownies in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F in einer quadratischen 18-cm-Form. Eine runde 15-cm-Form braucht etwa {SMALL_MIN} Minuten, eine höhere Ladung etwa {THICK_MIN}.',
        },
        {
          q: 'Welche Formgröße passt in eine 5-qt-Heißluftfritteuse?',
          a: 'Eine runde oder quadratische Form mit 15 oder 18 cm. Der Korb ist etwa 20–22 cm breit, und die Luft braucht Platz um die Form.',
        },
        {
          q: 'Kann ich ein 23×23-Brownie-Rezept in der Heißluftfritteuse backen?',
          a: 'Halbier es oder back es in zwei Durchgängen. In eine einzige kleine Form gegossen, ist es zu hoch, um in der Mitte fest zu werden.',
        },
        {
          q: 'Kann ich eine fertige Brownie-Backmischung nehmen?',
          a: 'Ja. Die meisten Packungen sind für eine 20- oder 23-cm-Form gedacht, nimm also pro Durchgang die Hälfte des Teigs und halte dich an die Zeiten hier.',
        },
        {
          q: 'Was ist die Backofen-Entsprechung?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten für dieselbe Form im normalen Backofen.',
        },
      ],
    },
    'garlic-bread': {
      label: 'Knoblauchbrot',
      metaTitle: 'Knoblauchbrot in der Heißluftfritteuse: frisch oder tiefgekühlt',
      metaDescription:
        'Knoblauchbrot in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, knusprig und goldbraun. Scheiben, ein halbes Baguette oder tiefgekühltes Knoblauchbrot, und die Backofen-Entsprechung.',
      metaKeywords: 'knoblauchbrot heißluftfritteuse, knoblauchbaguette airfryer, tiefkühl knoblauchbrot heißluftfritteuse, knoblauchbrot selber machen airfryer',
      heading: 'Knoblauchbrot in der Heißluftfritteuse',
      subDesc:
        'Selbst gemachtes oder gekauftes Knoblauchbrot, an den Rändern knusprig geröstet und in der Mitte weich. Die Einstellung, und wie der Knoblauch nicht verbrennt.',
      cardDesc: 'Der Knoblauch gehört unter die Butter, nicht obendrauf.',
      sizeLabels: { thin: 'Knoblauchbrot in Scheiben', medium: 'Halbes Baguette, Schnittfläche nach oben', thick: 'Dicker Toast oder tiefgekühltes Knoblauchbrot' },
      failureHeading: 'Warum der Knoblauch verbrennt und bitter wird',
      failureBody:
        'Gehackter Knoblauch ist klein, trocken und reich an Zucker, und auf dem Brot sitzt er genau in der heißesten Luft. Er geht in weniger als einer Minute von golden über braun zu bitter-schwarz, oft bevor das Brot darunter geröstet ist. Die Butter ist Teil des Problems: Sie schmilzt und läuft von der Oberfläche ab, sodass der Knoblauch frei und trocken liegt. Die Lösung liegt im Bestreichen. Zerdrück den Knoblauch in weicher Butter, damit jedes Stückchen umhüllt ist, streich ihn bis an die Ränder und drück ihn in die Krume. Geriebener Knoblauch verbrennt weniger als gehackter, Knoblauchpulver kaum. Eine mittlere Einstellung röstet das Brot durch, während die Oberseite golden wird, ohne dunkel zu werden.',
      workedExampleHeading: 'Rechenbeispiel: ein halbes Baguette',
      workedExampleTemplate:
        'Ein halbes Baguette, längs aufgeschnitten und mit Knoblauchbutter bestrichen. Ein Backofenrezept würde {OVEN_F}°F für etwa {OVEN_MIN} Minuten angeben. In einer Korb-Heißluftfritteuse {PREHEAT} Minuten vorheizen und mit der Schnittfläche nach oben bei {AF_F}°F für {MEDIUM_MIN} Minuten rösten. Einzelne Scheiben brauchen etwa {THIN_MIN} Minuten, dicker Toast oder tiefgekühltes Knoblauchbrot etwa {THICK_MIN}.',
      donenessHeading: 'Woran du erkennst, dass es fertig ist',
      donenessBody:
        'Die Ränder sollten knusprig und kräftig golden sein, und die Butter sollte ins Brot hinein blubbern, statt obendrauf zu stehen. Drück auf die Mitte: Sie sollte noch weich sein. Dunkelbrauner Knoblauch bedeutet, dass der nächste Durchgang weniger Zeit oder der Knoblauch mehr Butter drumherum braucht.',
      prepHeading: 'Bevor es hineinkommt',
      prepBody:
        'Nimm weiche, keine geschmolzene Butter, damit sie dort bleibt, wo du sie hinstreichst. Petersilie oder geriebenen Käse gibst du erst in der letzten Minute dazu. Schneid lange Brote so zu, dass sie in den Korb passen, und leg die Stücke in eine Lage. Brot vom Vortag eignet sich gut, weil seine trockenere Krume die Butter aufsaugt, statt durchzuweichen. Tiefgekühltes Knoblauchbrot kommt direkt aus dem Gefrierfach hinein, ohne Auftauen, sonst läuft die Butter heraus, bevor die Kruste knusprig wird. Ist es in Alufolie verpackt, nimm die Folie für die Heißluftfritteuse ab. Kräuterbaguette aus dem Kühlregal ist schon vorgebacken und braucht nur das kürzere Ende der Zeit, bis die Butter schmilzt und die Kruste knistert.',
      faqs: [
        {
          q: 'Wie lange braucht Knoblauchbrot in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für ein halbes Baguette. Scheiben brauchen etwa {THIN_MIN} Minuten, dicke oder tiefgekühlte Stücke etwa {THICK_MIN}.',
        },
        {
          q: 'Frisches oder tiefgekühltes Knoblauchbrot: Was ist der Unterschied?',
          a: 'Frisches Knoblauchbrot muss nur geröstet werden. Tiefgekühltes kommt direkt aus dem Gefrierfach und braucht die längere Zeit, damit die Mitte auftaut und weich wird, bevor die Oberseite knusprig ist.',
        },
        {
          q: 'Warum verbrennt mein Knoblauch in der Heißluftfritteuse?',
          a: 'Er liegt ungeschützt in der heißesten Luft. Zerdrück ihn in weicher Butter und drück ihn ins Brot, damit er geschützt ist.',
        },
        {
          q: 'Kann ich Käse dazugeben?',
          a: 'Ja, für die letzten ein, zwei Minuten. Gleich zu Beginn bräunt er, bevor das Brot geröstet ist.',
        },
        {
          q: 'Was ist die Backofen-Entsprechung?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Blech im normalen Backofen.',
        },
      ],
    },
    'corn-on-the-cob': {
      label: 'Maiskolben',
      metaTitle: 'Maiskolben in der Heißluftfritteuse: Zeit, Temperatur, Größe',
      metaDescription:
        'Maiskolben in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, nach {FLIP} wenden. Saftige Körner mit Röststellen, warum lange Kolben halbiert werden müssen, und die Backofen-Entsprechung.',
      metaKeywords: 'maiskolben heißluftfritteuse, maiskolben airfryer zeit, gerösteter mais heißluftfritteuse, wie lange maiskolben in heißluftfritteuse',
      heading: 'Maiskolben in der Heißluftfritteuse',
      subDesc:
        'Frischer Mais, geröstet, bis er süß, saftig und leicht angeröstet ist. Die Einstellung, das einmalige Wenden und wie ganze Kolben in einen Korb passen.',
      cardDesc: 'Lange Kolben halbieren und mit Butter oder Öl bestreichen.',
      sizeLabels: { small: 'Halbe oder kleine Kolben', medium: 'Mittlere Kolben, passend halbiert', large: 'Große, dicke Kolben, halbiert' },
      failureHeading: 'Warum die Körner austrocknen und schrumpeln',
      failureBody:
        'Gekochter Mais liegt im Wasser, er kann also nur nasser werden. In der Heißluftfritteuse passiert das Gegenteil: Bewegte heiße Luft zieht jedem freiliegenden Korn Wasser heraus, und ein nackter Kolben, der zu lange drin ist, wird schrumpelig, zäh und blass. Was ihn schützt, ist eine Schicht Fett. Butter oder Öl versiegeln die Körner, sodass sie durchwärmen und saftig werden, während das Fett stellenweise bräunt und diesen gegrillten Röstgeschmack gibt. Größe und Passform zählen auch. Die meisten ganzen Kolben sind länger als ein 5-qt-Korb, und ein schräg hineingezwängter Kolben berührt die Wände, dämpft an den Enden und blockiert die Luft. Halbier jeden Kolben, der länger als der Korb ist, damit die Stücke flach in einer Lage liegen.',
      workedExampleHeading: 'Rechenbeispiel: vier Maiskolben',
      workedExampleTemplate:
        'Vier mittlere Kolben, ohne Blätter, halbiert und mit geschmolzener Butter und Salz bestrichen. {PREHEAT} Minuten vorheizen, die Hälften in eine Lage legen und bei {AF_F}°F für {MEDIUM_MIN} Minuten rösten, nach {FLIP} wenden. Kleine Kolben oder kurze Stücke brauchen etwa {SMALL_MIN} Minuten, große, dicke Kolben etwa {LARGE_MIN}. Auf einem Blech im normalen Backofen braucht derselbe Mais {OVEN_F}°F für etwa {OVEN_MIN} Minuten.',
      donenessHeading: 'Woran du erkennst, dass er fertig ist',
      donenessBody:
        'Die Körner sollten leuchtend gelb, prall und glänzend sein, mit ein paar goldbraunen Stellen. Drück mit dem Fingernagel auf ein Korn: Es sollte aufplatzen und Saft abgeben. Matte, eingedellte Körner bedeuten, dass der Mais durch zu viel Zeit oder zu wenig Fett ausgetrocknet ist. Vorgekochte, vakuumverpackte Maiskolben aus dem Supermarkt müssen nur heiß werden und brauchen weniger Zeit.',
      prepHeading: 'Bevor er hineinkommt',
      prepBody:
        'Entferne Blätter und Fäden vollständig. Schneid jeden Kolben mit einem schweren Messer durch, indem du die Klinge durch den Strunk wiegst, statt zu sägen. Bestreich ihn rundum mit Butter oder Öl und würz erst nach dem Garen, wenn du eine Gewürzmischung nimmst, die verbrennt. Geräuchertes Paprikapulver, Chili und geriebener Parmesan passen gut auf den heißen Mais, mit etwas zusätzlicher Butter. Sehr frischer, süßer Mais braucht die kürzere Zeit; ältere, stärkehaltige Kolben vom Ende der Saison brauchen etwas länger, bis sie zart sind.',
      faqs: [
        {
          q: 'Wie lange brauchen Maiskolben in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für mittlere Kolben, nach {FLIP} gewendet. Kleine brauchen etwa {SMALL_MIN} Minuten, große etwa {LARGE_MIN}.',
        },
        {
          q: 'Muss ich Mais halbieren, damit er in die Heißluftfritteuse passt?',
          a: 'Meistens ja. Halbier jeden Kolben, der länger als der Korb ist, damit er flach liegt; eingezwängte Kolben garen ungleichmäßig.',
        },
        {
          q: 'Kann ich Mais in den Blättern garen?',
          a: 'Das geht, aber er dämpft statt zu rösten, und die trockenen Blätter können ansengen. Ohne Blätter und mit Butter wird er am besten.',
        },
        {
          q: 'Kann ich tiefgekühlte Maiskolben in der Heißluftfritteuse garen?',
          a: 'Ja, direkt gefroren. Gib ein paar Minuten dazu und bestreich sie nach der halben Zeit mit Butter, wenn das Eis weg ist.',
        },
        {
          q: 'Was ist die Backofen-Entsprechung?',
          a: '{OVEN_F}°F für etwa {OVEN_MIN} Minuten auf einem Blech im normalen Backofen, einmal gewendet.',
        },
      ],
    },
    'frozen-vegetables': {
      label: 'Tiefkühlgemüse',
      metaTitle: 'Tiefkühlgemüse in der Heißluftfritteuse: geröstet statt matschig',
      metaDescription:
        'Tiefkühlgemüse in der Heißluftfritteuse: {AF_F}°F für {MIN} Minuten, {SHAKES}× schütteln, direkt aus dem Beutel. Wie es röstet statt dämpft, und was auf der Packung steht.',
      metaKeywords: 'tiefkühlgemüse heißluftfritteuse, gefrorenes gemüse airfryer, tiefkühlgemüse rösten heißluftfritteuse, gemüsemischung tiefgekühlt airfryer',
      heading: 'Tiefkühlgemüse in der Heißluftfritteuse',
      subDesc:
        'Gemüsemischung, Erbsen, Mais oder Röschen direkt aus dem Gefrierfach, geröstet statt gedämpft. Ohne Auftauen, und warum die Menge im Korb das Ergebnis entscheidet.',
      cardDesc: 'Nie auftauen: direkt hinein, höchstens ein halber Korb.',
      sizeLabels: { small: 'Erbsen, Mais oder gewürfelte Mischung', medium: 'Gemüsemischung', large: 'Brokkoli- oder Blumenkohlröschen' },
      failureHeading: 'Warum Tiefkühlgemüse weich und nass herauskommt',
      failureBody:
        'Tiefkühlgemüse wird vor dem Einfrieren blanchiert, und die Eiskristalle, die sich darin bilden, sprengen viele der Zellwände. Beim Erhitzen gibt diese zerstörte Struktur ihr Wasser auf einmal ab, zusätzlich zum Reif auf der Oberfläche. In einem vollen Korb kann das Wasser nirgendwohin: Es sammelt sich, wird zu Dampf und kocht das Gemüse weich und grau, bevor irgendein Stück bräunen kann. Die Antwort ist weniger Menge und kein Auftauen. Aufgetautes Gemüse hat sein Wasser schon verloren und wird sofort schlaff; gefrorenes behält seine Form, während die Außenseite trocknet. Füll den Korb höchstens zur Hälfte, damit der Dampf entweicht, dann röstet das Gemüse in der trockenen Hitze, die danach kommt.',
      workedExampleHeading: 'Rechenbeispiel: ein Beutel Gemüsemischung',
      workedExampleTemplate:
        'Ein halber Beutel tiefgekühlte Gemüsemischung, auf dem steht, sie bei {OVEN_F}°F für {OVEN_MIN} Minuten zu rösten. In einer Korb-Heißluftfritteuse {PREHEAT} Minuten vorheizen, das Gemüse noch gefroren mit einem Esslöffel Öl hineingeben und bei {AF_F}°F für {MEDIUM_MIN} Minuten garen, {SHAKES}× schütteln. Erbsen, Mais und kleine gewürfelte Mischungen brauchen etwa {SMALL_MIN} Minuten, große Röschen etwa {LARGE_MIN}.',
      donenessHeading: 'Woran du erkennst, dass es fertig ist',
      donenessBody:
        'Der Korb sollte trocken sein, ohne Wasser am Boden, und die Ränder des Gemüses sollten gebräunte Stellen haben. Karotten und Röschen sollten beim Einstechen zart, aber nicht matschig sein. Eine Pfütze unter blassem, weichem Gemüse bedeutet, dass der Korb zu voll war. Ist am Ende noch etwas Wasser im Korb, schütte es ab und gib dem Gemüse ein, zwei Minuten mehr; erst dann bekommt es Farbe. Erbsen und Mais schrumpeln schnell, nimm sie also lieber etwas früher heraus.',
      prepHeading: 'Bevor es hineinkommt',
      prepBody:
        'Brich gefrorene Klumpen noch im Beutel auf. Misch das Öl erst direkt vor dem Garen unter; es haftet an bereiften Stücken schlechter, also misch beim ersten Schütteln noch einmal durch. Salz und Gewürze kommen am Ende dazu, weil der Dampf am Anfang sie wegspült. Beutel mit großen und kleinen Stücken garen ungleichmäßig, nimm also die kleinen heraus, wenn sie zu verbrennen beginnen, oder gare die Mischung in zwei Durchgängen. Gemüsepackungen mit Soße oder Butter geben oft nur die Mikrowelle an; die Soße verbrennt in der Heißluftfritteuse, nimm also Beutel mit reinem Gemüse.',
      faqs: [
        {
          q: 'Wie lange braucht Tiefkühlgemüse in der Heißluftfritteuse?',
          a: 'Etwa {MIN} Minuten bei {AF_F}°F für eine Gemüsemischung, {SHAKES}× geschüttelt. Kleine Stücke brauchen etwa {SMALL_MIN} Minuten, große Röschen etwa {LARGE_MIN}.',
        },
        {
          q: 'Muss ich Tiefkühlgemüse vor der Heißluftfritteuse auftauen?',
          a: 'Nein. Aufgetautes Gemüse hat sein Wasser schon abgegeben und wird schlaff. Gare es direkt gefroren.',
        },
        {
          q: 'Warum wird mein Tiefkühlgemüse in der Heißluftfritteuse matschig?',
          a: 'Der Korb war zu voll, und das eigene Wasser hat es gedämpft. Nimm höchstens einen halben Korb auf einmal.',
        },
        {
          q: 'Ist das anders als bei frischem Brokkoli?',
          a: 'Ja. Frische Röschen brauchen eine kürzere, sanftere Einstellung; gefrorene brauchen mehr Hitze und Zeit, um erst das Eis loszuwerden.',
        },
        {
          q: 'Was steht für den Backofen auf der Packung?',
          a: 'Die meisten Beutel geben {OVEN_F}°F für etwa {OVEN_MIN} Minuten im normalen Backofen an.',
        },
      ],
    },
  },
};

export const presetsIndex: Dictionary['presetsIndex'] = {
  metaTitle: 'Voreinstellungen für die Heißluftfritteuse: Zeit und Temperatur je Lebensmittel',
  metaDescription:
    'Zeit und Temperatur in der Heißluftfritteuse für Hähnchen, Lachs, Steak, Kartoffeln, Gebäck, Tiefkühlkost und Reste – jede Voreinstellung mit Kerntemperatur oder Garprobe, Zeiten nach Größe und Ofen-Entsprechung.',
  metaKeywords: 'Garzeiten Heißluftfritteuse, Heißluftfritteuse Zeit Temperatur Tabelle, Airfryer Voreinstellungen',
  backLink: 'Alle Werkzeuge',
  heading: 'Lebensmittel-Voreinstellungen für die Heißluftfritteuse',
  intro:
    'Eine Seite pro Lebensmittel, jede ein funktionierendes Werkzeug statt einer Tabellenzeile: die Einstellung, wann gewendet oder geschüttelt wird, die Kerntemperatur für jedes Eiweißprodukt, Zeiten nach Größe und die Ofen-Entsprechung in beide Richtungen.',
  categories: {
    poultry: 'Geflügel',
    meat: 'Fleisch',
    fish: 'Fisch und Meeresfrüchte',
    veg: 'Gemüse und Kartoffeln',
    baked: 'Backen',
    reheat: 'Aufwärmen',
    frozen: 'Tiefkühlkost',
  },
  howHeading: 'Wie diese Voreinstellungen festgelegt sind',
  howBody:
    'Jede Voreinstellung geht von einer vorgeheizten Korb-Heißluftfritteuse mit 4–6 Litern aus, das Lebensmittel in einer Lage. Bei den Garvoreinstellungen berechnet derselbe Algorithmus wie der Umrechner die Entsprechungen für Ober-/Unterhitze und Umluft, sie stimmen also miteinander überein, und der Umrechner auf der Seite ist schon auf dieses Lebensmittel eingestellt. Tiefkühl-Voreinstellungen zeigen stattdessen, was auf der Packung steht. Beim Aufwärmen ist es anders: Der Algorithmus rechnet Garrezepte um, kein Aufwärmen, deshalb sind die Aufwärmzeiten und ihre Ofen-Entsprechungen von Hand eingetragen, und der Umrechner auf diesen Seiten rechnet Backofenrezepte um. Jede Seite beginnt mit der typischen Art, wie dieses Lebensmittel in der Heißluftfritteuse misslingt, denn das entscheidet über das Ergebnis mehr als die Zahl am Regler. Keine E-Mail, keine Anmeldung, nichts zu installieren.',
  relatedFlagshipLink: 'Umrechner Backofen zu Heißluftfritteuse',
  relatedChartLink: 'Umrechnungstabelle zum Ausdrucken',
};

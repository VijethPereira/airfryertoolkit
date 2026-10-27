import type { Dictionary } from '../../types';

export const presets: Dictionary['presets'] = {
  backLink: 'Alle Voreinstellungen',
  pageTag: 'Lebensmittel-Voreinstellung',
  answerTemplate: '{LABEL} in der Heißluftfritteuse: {AF_F}°F / {AF_C}°C für {MIN} Min.',
  answerFlipSuffix: ', nach {FLIP} Min. wenden',
  answerShakeSuffix: ', {SHAKES}× schütteln',
  internalTemplate: 'Gar bei {INT_F}°F ({INT_C}°C) an der dicksten Stelle',
  internalCrisp: 'Gar nach Farbe und Knusprigkeit, nicht nach Thermometer',
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
        'Weder Vorheizen noch Öl ist nötig; Bacon bringt sein eigenes Fett mit. Nutze den Korb, kein geschlossenes Blech, damit das Fett von den Scheiben abläuft. Eine Scheibe Brot oder ein Schuss Wasser in der Schublade unter dem Korb fängt das Fett auf und reduziert Rauch. Dicker Bacon kann leicht überlappend in einer Reihe liegen, aber trenn die Scheiben nach der halben Zeit.',
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
        'Nimm das Steak 30 Minuten vor dem Garen aus dem Kühlschrank, damit die Mitte nicht kalt ist. Salze es mindestens 40 Minuten vorher oder direkt davor; alles dazwischen lässt die Oberfläche nass. Bestreich es mit etwas hitzebeständigem Öl statt mit Butter, die verbrennt. Butter, Knoblauch oder Kräuter kommen während der Ruhezeit dazu.',
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
        'Nimm mehligkochende Kartoffeln. Schneide die Pommes gleichmäßig dick, damit sie zusammen fertig werden; ungleichmäßige Durchgänge haben immer verbrannte dünne und rohe dicke Stücke. Wässere sie mindestens 30 Minuten in kaltem Wasser und trockne sie dann mit einem sauberen Tuch vollständig ab. Ein Esslöffel Öl auf zwei Kartoffeln reicht. Salze nach dem Garen, nicht vorher, sonst zieht das Salz Wasser heraus.',
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
  },
};

export const presetsIndex: Dictionary['presetsIndex'] = {
  metaTitle: 'Voreinstellungen für die Heißluftfritteuse: Zeit und Temperatur je Lebensmittel',
  metaDescription:
    'Zeit und Temperatur in der Heißluftfritteuse für Hähnchen, Wings, Lachs, Bacon, Steak, Kartoffeln und mehr – jede Voreinstellung mit Kerntemperatur, Zeiten nach Größe und Ofen-Entsprechung.',
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
    'Jede Voreinstellung geht von einer vorgeheizten Korb-Heißluftfritteuse mit 4–6 Litern aus, das Lebensmittel in einer Lage. Die Entsprechungen für Ober-/Unterhitze und Umluft auf jeder Seite berechnet derselbe Algorithmus wie der Umrechner, sie stimmen also miteinander überein, und der Umrechner auf jeder Seite ist schon auf dieses Lebensmittel eingestellt, falls du von einem Ofenrezept ausgehst. Jede Seite beginnt mit der typischen Art, wie dieses Lebensmittel in der Heißluftfritteuse misslingt, denn das entscheidet über das Ergebnis mehr als die Zahl am Regler. Keine E-Mail, keine Anmeldung, nichts zu installieren.',
  relatedFlagshipLink: 'Umrechner Backofen zu Heißluftfritteuse',
  relatedChartLink: 'Umrechnungstabelle zum Ausdrucken',
};

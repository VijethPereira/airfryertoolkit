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
        'Eine einfache Salzlake, ein Esslöffel Salz auf einen halben Liter Wasser für 30–60 Minuten, macht den größten Unterschied bei der Saftigkeit. Danach gut trocken tupfen. Schneide den Fettrand an zwei, drei Stellen ein, damit sich das Kotelett beim Garen nicht wölbt. Eine Gewürzmischung mit etwas Zucker bräunt schön, aber behalte sie in den letzten Minuten im Auge.',
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
        'Tau gefrorene Garnelen vollständig auf, über Nacht im Kühlschrank oder etwa 20 Minuten in einer Schüssel mit kaltem Wasser, und trockne sie gut ab. Geschälte Garnelen garen gleichmäßiger als ungeschälte und nehmen Gewürze besser an. Gib etwas Öl dazu, damit die Gewürze haften, und überfüll den Korb nicht: Eine Lage gart gleichmäßig, ein Haufen dämpft.',
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
        'Nimm mehligkochende Kartoffeln; festkochende bleiben dicht. Schrubbe und trockne sie vollständig, reib sie dann mit etwas Öl und reichlich grobem Salz ein, das der Schale Feuchtigkeit entzieht. Stich jede Kartoffel ein paarmal mit der Gabel ein. Wickle sie nicht in Alufolie: Folie hält Dampf fest und macht die Schale weich.',
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

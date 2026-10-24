import type { Dictionary } from '../../types';

const tempLanding: Dictionary['tempLanding'] = {
  backLink: 'Alle Tools',
  pageTag: 'Ofentemperatur',
  answerTemplate: 'Ofen bei {OVEN_F}°F = {AF_F}°F ({AF_C}°C) in einer Korb-Heißluftfritteuse, etwa {PCT} % weniger Zeit.',
  answerCappedTemplate:
    'Ofen bei {OVEN_F}°F = {AF_F}°F ({AF_C}°C) in einer Korb-Heißluftfritteuse — ihr Maximum von {CEILING}°F — etwa {PCT} % weniger Zeit.',
  answerOvenStyleTemplate: 'Heißluftfritteuse im Ofen-Typ: {OS_F}°F ({OS_C}°C), etwa {OS_PCT} % weniger Zeit.',
  tableHeading: 'Jedes Lebensmittel bei {OVEN_F}°F',
  tableIntro:
    'Die Anpassung hängt vom Lebensmittel ab, deshalb ist eine einzelne Zahl nie die ganze Antwort. Jede Zelle zeigt die Temperatur der Heißluftfritteuse, °C, die Gasstufe und den Anteil der Ofenzeit, den du sparst.',
  tableHeaders: { food: 'Lebensmittel', basket: 'Korb', ovenStyle: 'Ofen-Typ' },
  timeLessTemplate: '{PCT} % weniger Zeit',
  cappedCell: 'Am Maximum',
  cappedFootnote:
    'Am Maximum: Die umgerechnete Temperatur liegt über dem, was das Gerät schafft ({CEILING}°F Korb, {OS_CEILING}°F Ofen-Typ). Sie wird deshalb am Maximum gehalten, und ein Teil der Zeitkürzung wird zurückgegeben.',
  neighboursHeading: 'Benachbarte Temperaturen',
  neighbourLinkTemplate: 'Ofen bei {OVEN_F}°F in der Heißluftfritteuse',
  relatedFlagshipLink: 'Ofen-zu-Heißluftfritteuse-Umrechner (jede Temperatur)',
  relatedChartLink: 'Druckbare Umrechnungstabelle',
  relatedFrozenLink: 'Tiefkühl-Modus (Packungsangaben)',
  faqHeading: 'Häufig gestellte Fragen',
  pages: {
    350: {
      metaTitle: '350°F (175°C) vom Backofen in die Heißluftfritteuse: Temperatur und Zeit',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) im Backofen sind {AF_F}°F ({AF_C}°C) in einer Korb-Heißluftfritteuse, bei etwa {PCT} % weniger Zeit. Tabelle für Kuchen, Aufläufe und Hähnchen, dazu ein Live-Umrechner.',
      metaKeywords: '175 grad heißluftfritteuse, 180 grad backofen heißluftfritteuse, 350 fahrenheit heißluftfritteuse, 350f in c airfryer',
      heading: 'Ofen bei {OVEN_F}°F ({OVEN_C}°C) in der Heißluftfritteuse',
      subDesc:
        'Die häufigste Temperatur in Back- und Auflaufrezepten. Der Umrechner steht schon auf {OVEN_F}°F — ändere Zeit und Lebensmittel, um deine genaue Einstellung zu bekommen.',
      recipesHeading: 'Welche Rezepte 350°F verwenden',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, britische Gasstufe {OVEN_MARK}) ist der Standard für alles, was innen fest werden muss, bevor es außen zu dunkel wird: Muffins, Rührkuchen, Brownies, Plätzchen, Käsekuchen, Hackbraten, Nudelaufläufe und die meisten Gratins. Hier landen auch ältere Rezepte, wenn der Autor unsicher war, deshalb verlangen viele Hähnchen- und Schweinerezepte eine Stunde bei {OVEN_F}°F, obwohl sie heißer besser bräunen würden. Gerade diese Rezepte leiden am meisten, wenn man die Heißluftfritteuse wie einen kleinen Ofen behandelt. Eine feste Regel macht aus allen {AF_F}°F, aber Gebäck und Aufläufe bekommen eine kleinere Kürzung: Ein dichter Teig oder eine tiefe Form braucht Hitze bis in die Mitte, und der sanftere Wert verhindert, dass sich zuerst die Kruste bildet.',
      failureHeading: 'Der typische Fehler bei 350°F: außen fertig, innen roh',
      failureBody:
        'Bei dieser Hitze ist nicht Verbrennen das Problem, sondern das Tempo an der Oberfläche. Der Lüfter bläst direkt auf die Oberseite eines Muffins oder Kuchens, die bräunt und verkrustet, während die Mitte noch flüssig ist. Das Ergebnis ist eine gerissene Kuppel über einem klitschigen Kern, und mehr Zeit macht die Oberseite nur noch dunkler. Drei Dinge helfen. Nimm eine flachere Form als im Rezept, damit die Mitte weniger Weg hat. Leg in der ersten Hälfte locker Alufolie auf und steck die Ränder unter die Form, damit die Luft sie nicht anhebt. Und prüf die Mitte zum angegebenen Zeitpunkt mit einem Holzstäbchen, statt dich auf die Farbe zu verlassen. Backpapier und Alufolie müssen vom Essen beschwert sein; ein loses Blatt kann bei jeder Temperatur bis ans Heizelement fliegen.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Ein Muffinrezept nennt {OVEN_F}°F für {EX_OVEN_MIN} Minuten. Gebäck bekommt eine der kleinsten Kürzungen der Tabelle, also backt eine Korb-Heißluftfritteuse es bei {EX_F}°F ({EX_C}°C) für {EX_MIN} Minuten, und nach {EX_CHECK} Minuten machst du die Stäbchenprobe. Ein Gerät im Ofen-Typ bläst weniger direkt auf die Oberseite und braucht {EX_OS_F}°F für {EX_OS_MIN} Minuten. Back in Silikon- oder Papierförmchen im Korb und füll sie nur halb, nicht bis zum Rand.',
      styleHeading: '350°F in °C und Gasstufe umrechnen',
      styleBody:
        '{OVEN_F}°F sind {OVEN_C}°C, auf fünf gerundet; deutsche Rezepte schreiben dafür meist 180°C Ober-/Unterhitze. In Großbritannien entspricht das Gasstufe {OVEN_MARK}. In der Heißluftfritteuse ist die allgemeine Einstellung {AF_F}°F oder {AF_C}°C — Gasstufe {AF_MARK}, falls du mit einem britischen Rezept vergleichst. Viele in Europa verkaufte Heißluftfritteusen stellen in 10°C-Schritten ein, nicht in 5°C. Wenn deine das tut, runde bei Kuchen und Aufläufen ab und bei Hähnchen auf: Das Dichte bleibt vor einer dunklen Kruste sicher, und das Geflügel bekommt mehr Farbe. Der Umrechner nimmt °C direkt an, wenn dein Rezept so geschrieben ist.',
      faqs: [
        {
          q: 'Wie viel sind {OVEN_F}°F in der Heißluftfritteuse?',
          a: 'Für ein allgemeines Rezept {AF_F}°F ({AF_C}°C) in einer Korb-Heißluftfritteuse bei etwa {PCT} % weniger Zeit, oder {OS_F}°F in einem Gerät im Ofen-Typ. Kuchen, Aufläufe, Steak und Fisch werden weniger gekürzt; die Tabelle oben zeigt jedes Lebensmittel.',
        },
        {
          q: 'Wie viel Grad Celsius sind {OVEN_F}°F für die Heißluftfritteuse?',
          a: '{OVEN_F}°F sind {OVEN_C}°C. Umgerechnet für eine Korb-Heißluftfritteuse werden daraus {AF_C}°C. Zeigt deine Heißluftfritteuse nur °C, gib das Rezept im Umrechner in °C ein — er erledigt beide Schritte auf einmal.',
        },
        {
          q: 'Um wie viel verkürzt sich die Zeit in der Heißluftfritteuse bei {OVEN_F}°F?',
          a: 'Um etwa {PCT} % für die meisten Lebensmittel in einem Korbgerät. Pommes und Bacon sparen am meisten, Kuchen und Aufläufe am wenigsten. Prüf beim ersten Mal zu dem Zeitpunkt, den der Umrechner nennt, statt bis zum Ende zu warten, denn Korbgröße und Leistung schwanken.',
        },
        {
          q: 'Kann ich in der Heißluftfritteuse bei {OVEN_F}°F einen Kuchen backen?',
          a: 'Ja, aber mit der umgerechneten Temperatur statt {OVEN_F}°F und einer Form, die seitlich Platz für die Luft lässt. Leg locker Alufolie auf, wenn die Oberseite bräunt, bevor das Stäbchen sauber herauskommt. Ein Kuchen, der höher als etwa 5 cm ist, gelingt im Backofen besser.',
        },
        {
          q: 'Warum nicht einfach 25°F von {OVEN_F}°F abziehen?',
          a: 'Weil das nur für manche Lebensmittel stimmt. 25°F weniger passt für Hähnchen und allgemeine Rezepte, aber dichte Teige und tiefe Aufläufe brauchen Hitze bis in die Mitte und bekommen eine kleinere Kürzung — der Unterschied zwischen einem festen und einem rohen Kern.',
        },
      ],
    },
    375: {
      metaTitle: '375°F (190°C) in die Heißluftfritteuse: umgerechnete Temperatur und Zeit',
      metaDescription:
        'Ofenrezept mit {OVEN_F}°F ({OVEN_C}°C)? Nimm {AF_F}°F ({AF_C}°C) in einer Korb-Heißluftfritteuse, etwa {PCT} % weniger Zeit. Tabelle für Hähnchenschenkel, Koteletts, Blätterteig und mehr, mit Live-Umrechner.',
      metaKeywords: '190 grad heißluftfritteuse, 190 grad backofen in heißluftfritteuse, 375 fahrenheit heißluftfritteuse, 375f in c airfryer',
      heading: 'Ofen bei {OVEN_F}°F ({OVEN_C}°C) in der Heißluftfritteuse',
      subDesc:
        'Die Temperatur für Hähnchenteile, Koteletts und Blätterteig. Der Umrechner steht auf {OVEN_F}°F; passe Zeit und Lebensmittel an dein Rezept an.',
      recipesHeading: 'Welche Rezepte 375°F verwenden',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, britische Gasstufe {OVEN_MARK}) ist die Arbeitstemperatur für alles, was im gleichen Tempo bräunen und durchgaren muss. Hähnchenschenkel und -keulen mit Knochen, Schweinekoteletts, Fleischbällchen, Würstchen, gefüllte Paprika, Blätterteig, Teigtaschen und Blechgerichte mit Hähnchen und Gemüse gehören hierher. Sie gibt Farbe ohne den Rauch, der weiter oben entsteht, und liegt nah an den Temperaturen, für die Heißluftfritteusen-Rezepte geschrieben werden — deshalb lässt sie sich am leichtesten umrechnen. Ein allgemeines Rezept sinkt auf {AF_F}°F. Die Kürzung ist dieselbe wie bei niedrigeren Temperaturen, aber das Essen kommt in einem anderen Zustand am Ende an: Bei dieser Hitze ist ein Stück Hähnchen außen gebräunt, lange bevor die Mitte gar ist. Die Garprobe zählt deshalb mehr als die Uhr.',
      failureHeading: 'Der typische Fehler bei 375°F: braune Haut, roher Knochen',
      failureBody:
        'Hähnchen mit Knochen ist die Falle. Haut und das dünne Ende einer Keule färben sich in der bewegten Luft schnell, sodass das Stück fertig aussieht, während das Fleisch am Knochen noch rosa ist. Schenkel verzeihen viel, weil sie weit über 165°F (74°C) saftig bleiben — viele garen sie deshalb bis 175–185°F; Brust nicht, sie wird schnell trocken, sobald sie 165°F überschreitet. Leg die Stücke mit der Haut nach oben und dem dicksten Teil zum Rand des Korbs, wo die Luft am schnellsten strömt, und wende sie einmal zur Hälfte. Bei Blätterteig wirkt dasselbe Tempo in die andere Richtung: Die Oberseite geht auf und bräunt, bevor die unteren Schichten gebacken sind. Back ihn auf dem untersten Rost eines Geräts im Ofen-Typ oder auf gelochtem Backpapier, damit die Hitze an den Boden kommt.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Ein Rezept brät Hähnchenschenkel mit Knochen bei {OVEN_F}°F für {EX_OVEN_MIN} Minuten. In einer Korb-Heißluftfritteuse werden daraus {EX_F}°F ({EX_C}°C) für {EX_MIN} Minuten; prüf den dicksten Schenkel ab {EX_CHECK} Minuten und gare weiter, bis er am Knochen mindestens 165°F zeigt. In einer Heißluftfritteuse im Ofen-Typ, die eher wie ein kleiner Umluftofen arbeitet, sind es {EX_OS_F}°F für {EX_OS_MIN} Minuten. Wende die Stücke bei beiden Typen einmal zur Hälfte der Zeit.',
      styleHeading: 'Korb oder Ofen-Typ bei 375°F',
      styleBody:
        'Hier liegen die beiden Typen nur ein paar Grad auseinander — {AF_F}°F im Korb, {OS_F}°F im Ofen-Typ —, aber die Zeit unterscheidet sich stärker: etwa {PCT} % weniger als im Backofen beim Korb und etwa {OS_PCT} % weniger beim Ofen-Typ. Ein Korb bewegt die Luft schneller um eine kleine Menge und ist früher fertig; ein Gerät im Ofen-Typ verteilt das Essen auf Roste und gart eher wie ein Umluftofen. Hat deins zwei Roste, tausch sie zur Hälfte, denn der Rost näher am Heizelement bräunt schneller. Heiz {PREHEAT} Minuten im Korb oder {OS_PREHEAT} im Ofen-Typ vor. {OVEN_F}°F sind {OVEN_C}°C, und der Umrechner nimmt beide Einheiten an.',
      faqs: [
        {
          q: 'Wie viel sind {OVEN_F}°F in der Heißluftfritteuse?',
          a: 'Meist {AF_F}°F ({AF_C}°C) in einer Korb-Heißluftfritteuse, mit etwa {PCT} % weniger Zeit als im Ofenrezept. Ein Gerät im Ofen-Typ braucht {OS_F}°F. Steak, Fisch und Gebäck werden weniger gekürzt; die Tabelle zeigt jedes Lebensmittel.',
        },
        {
          q: 'Wie viel °C sind {OVEN_F}°F, und was stelle ich an der Heißluftfritteuse ein?',
          a: '{OVEN_F}°F sind {OVEN_C}°C, der Wert, den europäische Rezepte und Packungen meist angeben. Bei einer Korb-Heißluftfritteuse stell {AF_C}°C ein. Geht dein Regler in 10°C-Schritten, runde bei Hähnchen auf und bei Blätterteig ab.',
        },
        {
          q: 'Wie lange brauchen Hähnchenschenkel in der Heißluftfritteuse bei einem {OVEN_F}°F-Rezept?',
          a: 'Stell nicht {OVEN_F}°F ein, sondern {EX_F}°F. Schenkel mit Knochen, die im Ofen {EX_OVEN_MIN} Minuten brauchen, brauchen in einer Korb-Heißluftfritteuse etwa {EX_MIN}. Prüf immer mit einem Thermometer — mindestens 165°F am Knochen.',
        },
        {
          q: 'Muss ich die Heißluftfritteuse für ein {OVEN_F}°F-Rezept vorheizen?',
          a: 'Kurzes Vorheizen — {PREHEAT} Minuten beim Korb, {OS_PREHEAT} beim Ofen-Typ — hilft dem Blätterteig beim Aufgehen und der Haut beim Knusprigwerden. Bei Fleischbällchen und gefüllter Paprika macht es kaum einen Unterschied; gib lieber eine Minute dazu.',
        },
        {
          q: 'Kann ich ein ganzes Blechgericht aus einem {OVEN_F}°F-Rezept garen?',
          a: 'Ja, in Durchgängen oder auf zwei Rosten eines Geräts im Ofen-Typ. Fang mit dem Hähnchen an und gib das Gemüse für den letzten Teil der Zeit dazu, denn geschnittenes Gemüse ist bei derselben Einstellung schneller gar als Fleisch mit Knochen.',
        },
      ],
    },
    400: {
      metaTitle: '400°F (200°C) vom Backofen in die Heißluftfritteuse — und 400°F in °C',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) im Backofen = {AF_F}°F ({AF_C}°C) in einer Korb-Heißluftfritteuse, etwa {PCT} % weniger Zeit. Ofengemüse, Kartoffeln und Hähnchenbrust — Tabelle pro Lebensmittel und Live-Umrechner.',
      metaKeywords: '200 grad heißluftfritteuse, 200 grad backofen in heißluftfritteuse, 400 fahrenheit in celsius heißluftfritteuse, 400f in c airfryer',
      heading: 'Ofen bei {OVEN_F}°F ({OVEN_C}°C) in der Heißluftfritteuse',
      subDesc:
        'Die Temperatur zum Rösten, und die, die auf europäischen Packungen am häufigsten in °C steht. Der Umrechner beginnt bei {OVEN_F}°F — gib deine Zeit und dein Lebensmittel ein.',
      recipesHeading: 'Welche Rezepte 400°F verwenden',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, britische Gasstufe {OVEN_MARK}) ist die klassische Rösttemperatur. Rezepte nutzen sie für Gemüse, Kartoffelspalten, Hähnchenbrust, Würstchen, Lachsfilets, geröstete Kichererbsen, selbstgemachte Pommes und alles, was mit einem knusprigen Rand enden soll. Eine Heißluftfritteuse ist im Kern ein Röster, deshalb schlägt sie den Backofen hier am deutlichsten: Ein allgemeines Rezept sinkt auf {AF_F}°F, und Pommes bekommen die größte Zeitkürzung der Tabelle, dicht gefolgt von Ofengemüse, weil sie viel Oberfläche und wenig Dicke haben. Beachte, dass die Umrechnung den Korb nie auf {OVEN_F}°F selbst bringt. Die Heißluftfritteuse erreicht dieselbe Bräunung etwa {PCT} % schneller bei niedrigerer Einstellung, und das lässt Luft bis zum Maximum von {CEILING}°F, das die meisten Korbgeräte haben.',
      failureHeading: 'Der typische Fehler bei 400°F: gedämpft statt geröstet',
      failureBody:
        'Starke Hitze auf kleinem Raum funktioniert nur, wenn die Feuchtigkeit entweichen kann. Geschnittenes Gemüse und Kartoffeln geben beim Erhitzen Wasser ab, und in einem vollen Korb bleibt dieser Dampf um das Essen herum — statt zu bräunen, wird es weich und blass. Das ist die häufigste Klage über Gemüse aus der Heißluftfritteuse, und mehr Zeit hilft nicht. Gare in einer Schicht mit Lücken oder in zwei Durchgängen; der zweite ist meist ein bis zwei Minuten schneller, weil der Korb schon heiß ist. Trockne das Gemüse nach dem Waschen gut ab, vermische es mit einem Teelöffel Öl statt einem Esslöffel und schüttle den Korb zum Prüfzeitpunkt, damit die unteren Stücke nach oben in die Luft kommen. Fett von Würstchen oder Hähnchenhaut kann bei dieser Hitze rauchen, also leere die Schublade zwischen den Durchgängen.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Ein Rezept röstet gemischtes Gemüse bei {OVEN_F}°F für {EX_OVEN_MIN} Minuten. Eine Korb-Heißluftfritteuse schafft das bei {EX_F}°F ({EX_C}°C) in {EX_MIN} Minuten, mit einmal Schütteln nach {EX_CHECK} Minuten, um die Farbe zu prüfen. Eine Heißluftfritteuse im Ofen-Typ braucht {EX_OS_F}°F für {EX_OS_MIN} Minuten; verteil das Gemüse auf zwei Roste, statt einen zu überladen, und tausch die Roste zur Hälfte.',
      styleHeading: '400°F in °C für die Heißluftfritteuse',
      styleBody:
        'Genau umgerechnet sind {OVEN_F}°F {OVEN_C_EXACT}°C, hier auf {OVEN_C}°C gerundet, während europäische Rezepte und Backöfen meist 200°C angeben. Dieser kleine Unterschied spielt beim Rösten keine Rolle. Wichtig ist, dass die Einstellung in der Heißluftfritteuse niedriger ist: {AF_C}°C im Korb, {OS_C}°C im Ofen-Typ. Stellt deine Heißluftfritteuse nur in 10°C-Schritten ein, nimm für Kartoffeln und Gemüse, die ohnehin gut bräunen, die niedrigere Stufe und für Hähnchenhaut die höhere. Gibst du das Rezept im Umrechner in °C ein, bekommst du beide Werte auf einmal.',
      faqs: [
        {
          q: 'Wie viel sind {OVEN_F}°F in der Heißluftfritteuse?',
          a: 'Etwa {AF_F}°F ({AF_C}°C) in einer Korb-Heißluftfritteuse bei etwa {PCT} % weniger Zeit. In einem Gerät im Ofen-Typ {OS_F}°F. Pommes und Bacon sparen am meisten Zeit; Gebäck und Aufläufe bekommen die kleinste Kürzung.',
        },
        {
          q: '{OVEN_F}°F in °C: Was stelle ich an der Heißluftfritteuse ein?',
          a: 'Die Rezepttemperatur ist {OVEN_C}°C, oft als 200°C gedruckt. Stell eine Korb-Heißluftfritteuse auf {AF_C}°C oder eine im Ofen-Typ auf {OS_C}°C und kürze die Zeit um rund {PCT} %.',
        },
        {
          q: 'Schafft meine Heißluftfritteuse {OVEN_F}°F?',
          a: 'Die meisten Korbgeräte erreichen {CEILING}°F und Geräte im Ofen-Typ {OS_CEILING}°F, also ja — aber du brauchst es selten. Ein {OVEN_F}°F-Ofenrezept wird zu einer niedrigeren Einstellung, weil die Heißluftfritteuse schneller bräunt; stell {OVEN_F}°F nur ein, wenn ein Heißluftfritteusen-Rezept selbst es verlangt.',
        },
        {
          q: 'Wie lange brauchen Ofenkartoffeln in der Heißluftfritteuse bei einem {OVEN_F}°F-Rezept?',
          a: 'Etwa ein Viertel weniger als die Ofenzeit für geschnittene Kartoffeln und anderes Gemüse, bei {AF_F}°F. Stücke sind schneller gar als kleine ganze Kartoffeln. Zweimal schütteln und nach Farbe und einem Messer im dicksten Stück beurteilen.',
        },
        {
          q: 'Warum wird mein Gemüse in der Heißluftfritteuse bei {AF_F}°F matschig?',
          a: 'Fast immer, weil der Korb zu voll ist. Der Dampf aus dem Gemüse kann nicht entweichen, also gart es darin. Eine Schicht, gut abgetrocknet, weniger Öl — eine höhere Temperatur rettet keinen vollen Korb.',
        },
      ],
    },
    425: {
      metaTitle: '425°F (220°C) in die Heißluftfritteuse: Einstellung, Zeit und Höchsttemperatur',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) im Backofen = {AF_F}°F ({AF_C}°C) in einer Korb-Heißluftfritteuse, genau an ihrem Maximum. Sieh, welche Lebensmittel begrenzt werden, wie viel Zeit zurückkommt, und rechne live um.',
      metaKeywords: '220 grad heißluftfritteuse, 220 grad backofen in heißluftfritteuse, 425 fahrenheit heißluftfritteuse, 425f in c airfryer',
      heading: 'Ofen bei {OVEN_F}°F ({OVEN_C}°C) in der Heißluftfritteuse',
      subDesc:
        'Die Temperatur für Knusprigkeit, und die erste, bei der eine Korb-Heißluftfritteuse an ihre Grenze stößt. Der Umrechner steht auf {OVEN_F}°F; wähl das Lebensmittel, um zu sehen, ob es begrenzt wird.',
      recipesHeading: 'Welche Rezepte 425°F verwenden',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, britische Gasstufe {OVEN_MARK}) ist das Ziel von Rezepten, die Knusprigkeit wollen: Chicken Wings, Ofenkartoffeln mit splitterndem Rand, Lachs mit fester Oberseite, Gnocchi vom Blech, Croûtons und Brokkoli mit gerösteten Spitzen. Tiefkühl-Pommes und Nuggets nennen sie oft auch, folgen aber anderen Regeln — nimm für sie den Tiefkühl-Modus. Im Backofen braucht es so viel Hitze, um die Feuchtigkeit schnell von der Oberfläche zu treiben. Die Heißluftfritteuse ist früher so weit, deshalb wird ein allgemeines Rezept zu {AF_F}°F — genau die Grenze von {CEILING}°F eines typischen Korbgeräts. Alles mit der normalen Kürzung landet an der Grenze und wird wie gewohnt umgerechnet, aber Steak, Fisch, Gebäck und Aufläufe bekommen eine kleinere Kürzung, sodass ihre umgerechnete Temperatur über dem liegt, was der Korb schafft. Die Tabelle markiert diese Zeilen.',
      failureHeading: 'Der typische Fehler bei 425°F: die Grenze',
      failureBody:
        'Die meisten Umrechner ziehen ab und zeigen das Ergebnis, selbst wenn deine Heißluftfritteuse diese Temperatur gar nicht erreicht. Bei {OVEN_F}°F passiert das bei den Lebensmitteln mit sanfterer Kürzung: Die Rechnung verlangt mehr als {CEILING}°F, der Korb liefert {CEILING}°F, und das Essen ist nicht durch, weil die Zeit gekürzt wurde, als gäbe es diese Hitze. Dieser Umrechner hält die Temperatur an der Grenze und gibt einen Teil der Zeit zurück, deshalb sparen die begrenzten Zeilen weniger Zeit als die anderen. Das zweite Risiko bei dieser Hitze ist Rauch. Fett von Wings und Lachshaut tropft auf eine sehr heiße Schublade: Nimm ein Öl mit hohem Rauchpunkt, gib Marinaden mit Zucker oder Honig erst in den letzten Minuten dazu und leere die Schublade zwischen den Durchgängen.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Ein Rezept gart Lachsfilets bei {OVEN_F}°F für {EX_OVEN_MIN} Minuten. Fisch bekommt eine kleinere Kürzung als die meisten Lebensmittel, also liegt seine umgerechnete Temperatur über der Korbgrenze und wird bei {EX_F}°F ({EX_C}°C) gehalten, die Zeit nur auf {EX_MIN} Minuten gekürzt. Prüf nach {EX_CHECK} Minuten: Lachs ist an der dicksten Stelle bei 145°F (63°C) gar, oder wenn er zerfällt. Eine Heißluftfritteuse im Ofen-Typ hat eine höhere Grenze und gart deshalb mit vollen {EX_OS_F}°F für {EX_OS_MIN} Minuten.',
      styleHeading: 'Warum der Ofen-Typ bei 425°F anders ist',
      styleBody:
        'Eine Heißluftfritteuse im Ofen-Typ erreicht meist {OS_CEILING}°F, bei {OVEN_F}°F wird also nichts begrenzt: Ein allgemeines Rezept läuft bei {OS_F}°F mit etwa {OS_PCT} % weniger Zeit, und die Lebensmittel mit sanfterer Kürzung garen einfach heißer. Begrenzte Zeilen erscheinen nur in der Korb-Spalte — prüf also, welchen Typ du hast, bevor du einer Tabelle vertraust. Der Umrechner verwendet {CEILING}°F für Korbgeräte und {OS_CEILING}°F für den Ofen-Typ, die üblichen Grenzen; endet der Regler an deinem Gerät früher, gare bei seinem Maximum und gib etwas mehr Zeit. In °C sind es {OVEN_C}°C, und eine Korb-Heißluftfritteuse wird auf {AF_C}°C gestellt.',
      faqs: [
        {
          q: 'Wie viel sind {OVEN_F}°F in der Heißluftfritteuse?',
          a: '{AF_F}°F ({AF_C}°C) in einer Korb-Heißluftfritteuse für die meisten Lebensmittel — das Maximum des Korbs — bei etwa {PCT} % weniger Zeit. Ein Gerät im Ofen-Typ nimmt {OS_F}°F. Steak, Fisch, Kuchen und Aufläufe werden im Korb begrenzt und behalten mehr Zeit.',
        },
        {
          q: 'Wie viel Grad Celsius sind {OVEN_F}°F?',
          a: '{OVEN_F}°F sind {OVEN_C}°C, britisch Gasstufe {OVEN_MARK}. Eine Korb-Heißluftfritteuse kommt nicht so hoch, also stell {AF_C}°C ein und nimm die umgerechnete Zeit.',
        },
        {
          q: 'Meine Heißluftfritteuse geht nur bis {CEILING}°F. Kann ich trotzdem ein {OVEN_F}°F-Rezept garen?',
          a: 'Ja. Für die meisten Lebensmittel ist die umgerechnete Einstellung ohnehin {CEILING}°F. Für die, die mehr bräuchten, gare bei {CEILING}°F und gib etwas mehr Zeit; die Tabelle zeigt, wie viel weniger Zeit jedes Lebensmittel spart, wenn es begrenzt wird.',
        },
        {
          q: 'Wie lange brauchen Chicken Wings in der Heißluftfritteuse bei einem {OVEN_F}°F-Rezept?',
          a: 'Bei {AF_F}°F sparen Wings etwa ein Fünftel der Ofenzeit. Gut abtrocknen, Abstand lassen, zur Hälfte schütteln und garen, bis die Haut knusprig ist und das Fleisch mindestens 165°F (74°C) erreicht.',
        },
        {
          q: 'Warum raucht meine Heißluftfritteuse bei hohen Temperaturen?',
          a: 'Fett und zuckrige Marinaden tropfen auf die heiße Schublade und verbrennen. Nimm ein Öl mit hohem Rauchpunkt, gib klebrige Glasuren erst am Ende dazu und leere oder wisch die Schublade zwischen den Durchgängen.',
        },
      ],
    },
    450: {
      metaTitle: '450°F (230°C) in die Heißluftfritteuse: was tun, wenn der Korb am Limit ist',
      metaDescription:
        '{OVEN_F}°F ({OVEN_C}°C) liegt über der Grenze von {CEILING}°F einer Korb-Heißluftfritteuse. Stell {AF_F}°F ein und spare etwa {PCT} % der Zeit, nicht die übliche Kürzung — Tabelle pro Lebensmittel und Live-Umrechner.',
      metaKeywords: '230 grad heißluftfritteuse, 230 grad backofen in heißluftfritteuse, 450 fahrenheit heißluftfritteuse, 450f in c airfryer',
      heading: 'Ofen bei {OVEN_F}°F ({OVEN_C}°C) in der Heißluftfritteuse',
      subDesc:
        'Heißer, als eine Korb-Heißluftfritteuse kann. Der Umrechner beginnt bei {OVEN_F}°F und zeigt die begrenzte Einstellung mit der zurückgegebenen Zeit, die die meisten Tabellen weglassen.',
      recipesHeading: 'Welche Rezepte 450°F verwenden',
      recipesBody:
        '{OVEN_F}°F ({OVEN_C}°C, britische Gasstufe {OVEN_MARK}) ist das obere Ende der Hausküche: Pizza auf dem Stein, Fladenbrote, aufgeplatzte Tomaten und Paprika, Quetschkartoffeln, Fächerkartoffeln, schnell gerösteter Spargel und Steak oder Koteletts, die am Ende einer Rückwärtsgarung scharf angebraten werden. Rezepte verlangen sie, wenn die Außenseite Farbe nehmen muss, bevor das Innere übergart. Eine feste Regel zieht 25°F ab und hört dort auf, aber das Ergebnis ist keine Einstellung, die ein Korbgerät hat. Jedes Lebensmittel in der Tabelle wird beim Korb-Maximum von {CEILING}°F begrenzt, deshalb zeigt die Korb-Spalte in jeder Zeile dieselbe Temperatur, und nur die Zeit ändert sich. Das ist die ehrliche Antwort: Eine Korb-Heißluftfritteuse kann keine {OVEN_F}°F, und die Zeit muss den Unterschied ausgleichen.',
      failureHeading: 'Der typische Fehler bei 450°F: verbrannte Oberseite, falsche Zeit',
      failureBody:
        'Zwei Dinge gehen schief. Das erste ist die Zeit. Eine Tabelle, die eine unerreichbare Korbtemperatur druckt, kürzt auch die Zeit, als gäbe es diese Hitze, und das Essen kommt blass und nicht durchgegart heraus. Weil die Temperatur hier bei {CEILING}°F gehalten wird, gibt dieser Umrechner einen Teil der Kürzung zurück: Ein allgemeines Rezept spart etwa {PCT} % der Ofenzeit statt des üblichen Anteils. Das zweite ist die Oberfläche. Am Maximum arbeitet das Heizelement auf voller Leistung wenige Zentimeter über dem Essen: Hohe Stücke verbrennen oben, Käse und Paniermehl verbrennen, bevor der Boden knusprig ist, und Papier, das nicht beschwert ist, kann das Heizelement berühren. Mach Pizza und Fladenbrote dünn, gib den Käse in den letzten Minuten dazu, wenn er zu früh bräunt, und schneide Backpapier auf die Größe des Korbbodens zu.',
      workedExampleHeading: 'Rechenbeispiel',
      workedExampleTemplate:
        'Ein Pizzarezept nennt {OVEN_F}°F für {EX_OVEN_MIN} Minuten. Eine Korb-Heißluftfritteuse wird bei {EX_F}°F ({EX_C}°C) gehalten und braucht deshalb {EX_MIN} Minuten; prüf den Boden nach {EX_CHECK} Minuten. Eine Heißluftfritteuse im Ofen-Typ kann {EX_OS_F}°F fahren, unter ihrer eigenen Grenze, und ist in {EX_OS_MIN} Minuten fertig. Hier ist der Korb das langsamere Gerät, weil er das kühlere ist — umgekehrt wie bei niedrigeren Temperaturen.',
      styleHeading: '450°F in einer Heißluftfritteuse im Ofen-Typ',
      styleBody:
        'Heißluftfritteusen im Ofen-Typ erreichen meist {OS_CEILING}°F, dort wird {OVEN_F}°F also normal umgerechnet: {OS_F}°F ({OS_C}°C) mit etwa {OS_PCT} % weniger Zeit für ein allgemeines Rezept. Wenn du beide Typen hast oder dich zwischen ihnen entscheidest, zeigt sich der Unterschied bei dieser Temperatur. Für Pizza, Fladenbrote und alles, was Röstaromen haben soll, ist der Ofen-Typ das bessere Gerät. Ein Korbgerät macht trotzdem gute Pizza und gute Kartoffeln; es braucht nur die zusätzlichen Minuten, die der Umrechner draufrechnet. In °C steht im Rezept {OVEN_C}°C, und die Korbeinstellung ist {AF_C}°C.',
      faqs: [
        {
          q: 'Wie viel sind {OVEN_F}°F in der Heißluftfritteuse?',
          a: 'In einer Korb-Heißluftfritteuse {AF_F}°F ({AF_C}°C) — ihr Maximum — bei etwa {PCT} % weniger Zeit. In einer im Ofen-Typ {OS_F}°F bei etwa {OS_PCT} % weniger Zeit. Im Korb wird jedes Lebensmittel begrenzt.',
        },
        {
          q: 'Wie viel Grad Celsius sind {OVEN_F}°F für die Heißluftfritteuse?',
          a: '{OVEN_F}°F sind {OVEN_C}°C, britisch Gasstufe {OVEN_MARK}. Eine Korb-Heißluftfritteuse endet bei {AF_C}°C, also stell das ein und nimm die umgerechnete Zeit.',
        },
        {
          q: 'Warum nicht 25°F abziehen und das Ergebnis einstellen?',
          a: 'Weil eine Korb-Heißluftfritteuse es nicht erreicht. Der Regler endet bei {CEILING}°F, das Essen gart also kühler, als die Tabelle annahm, während die Zeit voll gekürzt wurde. Stell {AF_F}°F ein und nimm die längere Zeit, die der Umrechner angibt.',
        },
        {
          q: 'Kann ich Pizza in der Heißluftfritteuse nach einem {OVEN_F}°F-Rezept backen?',
          a: 'Ja. Nimm eine Pizza, die flach hineinpasst, stell {EX_F}°F im Korbgerät ein und prüf bei einem Rezept mit {EX_OVEN_MIN} Minuten den Boden nach {EX_CHECK} Minuten. Gib den Käse später dazu, wenn die Oberseite bräunt, bevor der Boden knusprig ist.',
        },
        {
          q: 'Ist es sicher, die Heißluftfritteuse bei Höchsttemperatur zu betreiben?',
          a: 'Ja, dafür ist sie gebaut. Stell sie auf eine hitzebeständige Fläche mit Platz hinter dem Luftauslass, deck den Korb nie ganz mit Alufolie oder Papier ab und leere das Fett aus der Schublade, damit nichts raucht.',
        },
      ],
    },
  },
};

export default tempLanding;

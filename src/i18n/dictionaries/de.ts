import type { Dictionary } from '../types';

const de: Dictionary = {
  nav: {
    convert: 'Umrechnen',
    reverse: 'Umgekehrt',
    foodPresets: 'Lebensmittel',
    brands: 'Marken',
    chart: 'Tabelle',
    guide: 'Ratgeber',
  },
  footer: {
    converter: 'Umrechner',
    foodPresets: 'Voreingestellte Lebensmittel',
    conversionChart: 'Umrechnungstabelle',
    about: 'Über uns',
    contact: 'Kontakt',
    privacyPolicy: 'Datenschutzerklärung',
    termsConditions: 'Allgemeine Geschäftsbedingungen',
    moreFreeTools: 'Weitere kostenlose Tools:',
    copyrightSuffix: 'kostenlose browserbasierte Koch-Umrechnungstools',
  },
  converter: {
    widgetLabel: 'Ofen → Heißluftfritteuse',
    live: 'Live',
    ovenTemperature: 'Ofentemperatur',
    ovenTime: 'Ofenzeit',
    min: 'Min',
    foodType: 'Lebensmittelart',
    airFryerStyle: 'Typ der Heißluftfritteuse',
    basket: 'Korb',
    ovenStyle: 'Ofen-Typ',
    airFryerSetting: 'Einstellung der Heißluftfritteuse',
    checkAt: 'Prüfen bei',
    preheat: 'Vorheizen',
    gasMark: 'Gasstufe',
    gasMarkDash: 'Gasstufe —',
    unitBasket: 'Korb-Heißluftfritteuse',
    unitOven: 'Ofen-artiges Gerät',
    cappedNoteTemplate:
      'Dein Rezept braucht mehr Hitze, als eine {unit} erreichen kann. Die Einstellung wurde auf {ceiling}°F begrenzt, mit zusätzlicher Zeit als Ausgleich — prüfe etwas früher und rechne mit einer etwas weniger knusprigen Oberfläche.',
    foods: {
      general: { label: 'Allgemein / gemischt', tip: 'Nach der Hälfte der Zeit schütteln oder wenden.' },
      fries: { label: 'Pommes frites & Kartoffeln', tip: 'Zweimal schütteln — einmal früh, einmal zur Halbzeit. Nur eine Schicht verwenden.' },
      wings: { label: 'Chicken Wings', tip: 'Vor dem Garen trocken tupfen und zur Halbzeit wenden für gleichmäßige Haut.' },
      breast: { label: 'Hähnchenbrust (ohne Knochen)', tip: 'Bei 165°F Kerntemperatur herausnehmen — die Temperatur steigt beim Ruhen noch weiter.' },
      thigh: { label: 'Hähnchenschenkel / mit Knochen', tip: 'Die ganze Zeit mit der Haut nach oben. Kein Wenden nötig.' },
      steak: { label: 'Steak & dicke Stücke', tip: 'Einmal wenden, dann 5 Minuten ruhen lassen, bevor du es aufschneidest.' },
      fish: { label: 'Fisch & Lachs', tip: 'Nicht wenden. Am unteren Ende der Zeit prüfen — Fisch ist in weniger als einer Minute übergart.' },
      bacon: { label: 'Bacon', tip: 'Nur eine Schicht. Fett zur Halbzeit abgießen, falls es zu rauchen beginnt.' },
      veg: { label: 'Gemüse', tip: 'Stücke gleichmäßig groß schneiden und zur Halbzeit wenden.' },
      baked: { label: 'Gebäck & Kekse', tip: 'Ein sanfterer Abzug — der Teig festigt sich langsamer, als die Oberfläche bräunt.' },
      pizza: { label: 'Pizza & Aufwärmen', tip: 'Zum Aufwärmen ist kein Vorheizen nötig. Behalte die Kruste im Blick, nicht die Uhr.' },
      casserole: { label: 'Aufläufe & dicke Backwaren', tip: 'Mit Alufolie abdecken, wenn die Oberseite bräunt, bevor die Mitte heiß ist.' },
    },
  },
  home: {
    metaTitle: 'Ofen-zu-Heißluftfritteuse-Umrechner',
    metaDescription:
      'Kostenloser Ofen-zu-Heißluftfritteuse-Umrechner. Rechne Ofentemperatur und -zeit in Heißluftfritteusen-Einstellungen um — nach Lebensmittelart und Korb- oder Ofentyp, ohne pauschale 25°-Regel, ohne Anmeldung.',
    metaKeywords:
      'Ofen zu Heißluftfritteuse Umrechner, Ofen zu Heißluftfritteuse umrechnen, Backofen in Heißluftfritteuse umrechnen, Ofen zu Heißluftfritteuse Garzeit umrechnen, Heißluftfritteuse zu Ofen umrechnen, Heißluftfritteuse zu Ofen Rechner, Heißluftfritteuse Umrechnungstabelle, Heißluftfritteuse Temperaturtabelle, Heißluftfritteuse Garzeiten, Heißluftfritteuse Rechner',
    eyebrow: 'Kostenlos / Ohne Anmeldung / Funktioniert offline',
    heroTitle: 'Ofen-zu-Heißluftfritteuse-Umrechner',
    heroSub:
      'Gib Temperatur und Zeit aus dem Rezept ein. Erhalte die Heißluftfritteusen-Einstellung für dein Gericht, angepasst an Korb- oder Ofentyp — keine pauschale 25°-Regel.',
    ctaLabel: 'Vollständigen Umrechner öffnen',
    commonConversionsHeading: 'Häufige Umrechnungen',
    commonConversions: ['−20 % Zeit', '−20 % Zeit', '−20 % Zeit', 'Korb-Obergrenze'],
    railFootnote: 'Multiplikatoren abgestimmt auf Korb- und Ofen-Heißluftfritteusen, je nach Lebensmittelart.',
    comingSoon: 'Demnächst',
    sectionTitles: {
      convert: 'Umrechnen',
      reverse: 'Umgekehrt umrechnen',
      frozen: 'Modus für Tiefkühlkost',
      presets: 'Voreingestellte Lebensmittel',
      brands: 'Markeneinstellungen',
    },
    convertCards: [
      { title: 'Ofen → Heißluftfritteuse', desc: 'Das Flaggschiff. Multiplikatoren je Lebensmittelart, Korb vs. Ofentyp, Temperaturobergrenze, °F/°C/Gasstufe.' },
      { title: 'Umluft → Heißluftfritteuse', desc: 'Umluftrezepte sind bereits ventilatorbedingt angepasst und brauchen daher einen sanfteren Abzug. Die meisten Tools machen das falsch.' },
      { title: 'Portionen- & Mengenanpassung', desc: 'Zeit anpassen, wenn der Korb voll ist oder du in zwei Durchgängen kochst.' },
      { title: 'Wattzahl-Anpassung', desc: 'Kompakte 1200-W-Körbe garen langsamer als 1700-W-Modelle. Korrigiere für dein Modell.' },
    ],
    reverseCards: [
      { title: 'Heißluftfritteuse → Ofen', desc: 'Du kochst für viele Leute, oder der Korb ist besetzt. Zurück zum Ofen.' },
      { title: 'Heißluftfritteuse → Umluft', desc: 'Gleiches Ventilatorprinzip, größerer Innenraum. Fügt Zeit hinzu, nicht Temperatur.' },
      { title: '°F / °C / Gasstufe', desc: 'Direkte Temperaturumrechnung für britische, EU- und US-Rezepte.' },
      { title: 'Druckbare Umrechnungstabelle', desc: 'Vollständige °F- und °C-Tabelle für die Kühlschranktür. Eine Seite, keine E-Mail, keine Werbung.' },
    ],
    frozenTeaser: {
      heading: 'Direkt aus der Tüte in die Heißluftfritteuse',
      desc: 'Behalte die Temperatur von der Verpackung bei und kürze die Zeit um etwa 30 % — das Gegenteil der üblichen Regel. Wähle, was du zubereitest.',
      selectLabel: 'Tiefkühlprodukt auswählen',
      options: ['Tiefkühl-Pommes', 'Tiefkühl-Chicken-Nuggets', 'Tiefkühl-Hähnchenbrust', 'Tiefkühlpizza', 'Tiefkühl-Fischstäbchen'],
      goLabel: 'Los',
    },
    frozenCards: [
      { title: 'Tiefkühl-Pommes', spec: '400°F · 15 Min · 2× schütteln', desc: 'Eine Schicht, kein Öl nötig.' },
      { title: 'Tiefkühl-Nuggets', spec: '380°F · 10 Min · einmal wenden', desc: 'Die panierte Hülle bräunt schnell.' },
      { title: 'Tiefkühl-Hähnchenbrust', spec: '360°F · 22 Min · 165°F Kern', desc: 'Niedriger und langsamer, als man erwarten würde.' },
      { title: 'Tiefkühlpizza', spec: '375°F · 8 Min · ohne Vorheizen', desc: 'Nur Einzelportionsgröße passt in einen Korb.' },
    ],
    presetsTeaser: {
      heading: 'Zeit und Temperatur für ein bestimmtes Lebensmittel',
      desc: 'Jede Voreinstellung gibt Temperatur, Zeit, Schüttel- oder Wendepunkte sowie Garpunkte an. Kein Rezeptblog zum Durchscrollen.',
      selectLabel: 'Voreingestelltes Lebensmittel auswählen',
      options: ['Hähnchenbrust', 'Chicken Wings', 'Lachsfilet', 'Bacon', 'Steak'],
      goLabel: 'Los',
    },
    presetCards: [
      { title: 'Hähnchenbrust', spec: '375°F · 16 Min · Wenden bei 8', desc: 'Meistgenutzte Voreinstellung. Bei 165°F Kerntemperatur herausnehmen.' },
      { title: 'Chicken Wings', spec: '400°F · 22 Min · Wenden bei 12', desc: 'Zuerst trocken tupfen. Option für zweistufige Temperatur.' },
      { title: 'Lachsfilet', spec: '390°F · 9 Min · nicht wenden', desc: 'Haut nach unten. Inklusive Dickentabelle.' },
      { title: 'Bacon', spec: '350°F · 9 Min · Abgießen bei 5', desc: 'Niedrigere Temperatur verhindert, dass das Fett raucht.' },
    ],
    allPresetsCard: { title: 'Alle 40 Voreinstellungen →', desc: 'Fleisch, Fisch, Gemüse, Backen, Aufwärmen.' },
    brandCards: [
      { title: 'Ninja', spec: 'Max. 400°F · Korb & doppelt', desc: 'Einstellungen für AF101, AF161, DZ201 und Foodi.' },
      { title: 'Cosori', spec: 'Max. 450°F · 11 Voreinstellungen', desc: 'Übersetzt die eingebauten Voreinstellungstasten in reale Zeiten.' },
      { title: 'Philips', spec: 'Max. 390°F · Rapid Air', desc: 'Niedrigere Obergrenze als die meisten — Zeiten sind länger.' },
      { title: 'Referenz für maximale Modelltemperatur', spec: '60+ Modelle', desc: 'Die Obergrenzentabelle, die den Umrechner oben speist.' },
    ],
    chartStrip: ['Multiplikatoren je Lebensmittel', 'Korb & Ofen-Typ', '°F · °C · Gasstufe', 'Kostenlos — ohne Konto'],
    guide: [
      {
        heading: 'Was ist ein Ofen-zu-Heißluftfritteuse-Umrechner?',
        body: 'Ein Ofen-zu-Heißluftfritteuse-Umrechner nimmt Temperatur und Zeit eines klassischen Ofenrezepts und übersetzt sie in die passende Heißluftfritteusen-Einstellung — damit ein Rezept, das für einen 425°F-Ofen geschrieben wurde, nicht mit verbrannten Rändern und rohem Kern endet, nur weil es stattdessen im Korb gegart wurde. Es ist für den Moment gedacht, den jeder Hobbykoch früher oder später erlebt: Ein Lieblingsrezept nennt eine Ofentemperatur und Backzeit, aber den ganzen Ofen anzuwerfen wirkt übertrieben für vier Hähnchenschenkel oder ein Blech Pommes, und die Heißluftfritteuse auf der Arbeitsplatte kann die Aufgabe schneller und mit weniger Energie erledigen — wenn man die richtigen Einstellungen kennt. Genau diese Lücke schließt dieses Tool. Gib die Ofentemperatur und -zeit aus dem Rezept ein, sag, was du zubereitest, und ob dein Gerät ein Korb- oder Ofentyp ist, und du erhältst eine Einstellung, die tatsächlich zum Garverhalten von Heißluftfritteusen passt.',
      },
      {
        heading: 'So funktioniert die Umrechnung von Ofen zu Heißluftfritteuse',
        body: 'Die meisten Online-Ratschläge zur Umrechnung von Ofen zu Heißluftfritteuse laufen auf einen Satz hinaus: 25°F abziehen und die Zeit um ein Fünftel kürzen. Diese Regel ist nicht direkt falsch — Heißluftfritteusen sind kleine Umluftöfen mit forcierter Luftzirkulation, sie übertragen also Wärme schneller und brauchen sowohl eine niedrigere Temperatur als auch eine kürzere Garzeit als ein klassischer Ofen. Aber jedes Lebensmittel gleich zu behandeln ist der Punkt, an dem pauschale Regeln scheitern. Eine pauschale Regel geht davon aus, dass ein Blech dünner Pommes und ein dichtes Bananenbrot gleich auf schnelleren Luftstrom reagieren. Das tun sie nicht. Dünne Lebensmittel mit großer Oberfläche wie Pommes, Bacon und Chicken Wings sind fast von allen Seiten von heißer Luft umgeben, sie garen also deutlich schneller — oft braucht es 25–30 % weniger Zeit. Ein dichter Auflauf oder ein dickes Fleischstück muss die Wärme trotzdem bis zum Kern leiten, genau wie im Ofen, also fällt die Ersparnis geringer aus, eher bei 10–15 %. Wendest du den Pommes-Multiplikator auf den Auflauf an, ziehst du ihn nicht durchgegart heraus; wendest du den Auflauf-Multiplikator auf die Pommes an, trocknest du sie aus. Deshalb braucht eine korrekte Umrechnung von klassischem Ofen zu Heißluftfritteuse einen Multiplikator pro Lebensmittelkategorie statt einer einzigen Zahl für alles — der Umrechner oben schaut sich an, was du ausgewählt hast, und wendet die Zeitreduzierung an, die diese Lebensmittelart tatsächlich braucht, zusätzlich zur standardmäßigen Temperatursenkung.',
      },
      {
        heading: 'Schritt für Schritt: Ofen zu Heißluftfritteuse umrechnen',
        body: 'Um Ofeneinstellungen für ein beliebiges Rezept in Heißluftfritteusen-Einstellungen umzurechnen: Gib die Ofentemperatur genau wie im Rezept ein, gib die Ofenzeit ein, wähle die passendste Lebensmittelart, und wähle dann, ob dein Gerät eine Korb-Heißluftfritteuse oder ein Ofen-Gerät ist (ein Heißluftfritteusen-Ofen oder ein Toaster-Ofen-Hybrid). Das Tool senkt die Temperatur, wendet den richtigen Zeit-Multiplikator je Lebensmittelart an und prüft das Ergebnis gegen das, was dein spezielles Gerät tatsächlich erreichen kann — so bekommst du nie eine Zahl, die es auf deinem Regler gar nicht gibt.',
      },
      {
        heading: 'Umrechnung der Garzeit von Ofen zu Heißluftfritteuse',
        body: 'Die Temperatur ist nur die halbe Aufgabe — die Umrechnung der Garzeit von Ofen zu Heißluftfritteuse ist genauso wichtig, und das ist der Teil, den pauschale Rechner meist falsch machen. Da Heißluftfritteusen heiße Luft direkt um das Lebensmittel in einer kleinen Kammer zirkulieren lassen, erreicht die Wärme die Oberfläche schneller, und das Garen ist selbst bei niedrigerer Temperatur früher abgeschlossen. Deshalb kann aus 45 Minuten Backzeit im Ofen eine 32-minütige Garzeit in der Heißluftfritteuse werden, statt einfach ein Prozentsatz der ursprünglichen Zahl: Die Zeitreduzierung richtet sich danach, wie viel Oberfläche das Lebensmittel diesem Luftstrom aussetzt, nicht nur nach der Temperaturänderung.',
      },
      {
        heading: 'Umrechnung von Heißluftfritteuse zu Ofen (der umgekehrte Weg)',
        body: 'Die Umrechnung funktioniert in beide Richtungen. Manchmal hast du ein Heißluftfritteusen-Rezept oder eine Voreinstellung aus der Bedienungsanleitung deines Geräts und musst sie stattdessen in Ofeneinstellungen umrechnen — weil du eine größere Menge kochst, als in den Korb passt, die Heißluftfritteuse bereits mit etwas anderem beschäftigt ist, oder du eine ganze Tafel mit dem großen Ofen versorgst. Die Umrechnung von Heißluftfritteuse zu Ofen bedeutet in der Regel, die Temperatur zu erhöhen und Garzeit wieder hinzuzufügen, da der größere Innenraum und der langsamere Luftstrom eines klassischen Ofens nicht mit der konzentrierten Hitze der Heißluftfritteuse mithalten können. Ein Heißluftfritteuse-zu-Ofen-Rechner wendet dies umgekehrt an: etwa 25°F wieder zur Heißluftfritteusen-Temperatur addieren, dann die Zeit um denselben lebensmittelabhängigen Prozentsatz verlängern, den die Vorwärtsumrechnung abgezogen hatte. Es ist dieselbe zugrunde liegende Logik, nur rückwärts angewendet, und genauso empfindlich gegenüber der Lebensmittelart — eine für den Ofen hochskalierte Portion Nuggets braucht eine andere Zeitanpassung als ein ganzes Hähnchen.',
      },
      {
        heading: 'Korb- vs. Ofen-Heißluftfritteusen',
        body: 'Nicht alle Heißluftfritteusen verhalten sich gleich, deshalb fragt dieser Umrechner, welchen Typ du besitzt, bevor die Umrechnung abgeschlossen wird. Korb-Heißluftfritteusen packen das Lebensmittel in eine kleine, geschlossene Kammer mit Luft, die von allen Seiten zirkuliert — das macht sie schnell, bedeutet aber auch, dass die meisten Modelle bei etwa 400°F an ihre Grenze stoßen, und dieses Limit zu überschreiten ist unrealistisch, egal was ein generischer Rechner vorschlägt. Ofen-artige Heißluftfritteusen (einschließlich Heißluftfritteusen-Öfen und Toaster-Ofen-artiger Körbe) haben mehr Luftvolumen um das Lebensmittel, sodass der Effekt milder ist: Temperaturen können etwas höher liegen, bis zu etwa 450°F, bevor eine praktische Obergrenze erreicht wird. Den Gerätetyp in die Umrechnung einzubeziehen, statt ihn zu ignorieren, hält das Ergebnis realistisch.',
      },
      {
        heading: 'Tipps für die besten Ergebnisse',
        body: 'Ein paar Dinge helfen dabei, dass das Ergebnis eines Ofen-zu-Heißluftfritteuse-Umrechners schon beim ersten Versuch näher am Richtigen liegt. Kurz vorheizen — etwa 3 Minuten für einen Korb, 4 für Ofen-Typ —, da Heißluftfritteusen beim Öffnen von Tür oder Schublade relativ mehr Wärme verlieren als ein Ofen. Den Korb nicht überladen; eine einzelne, nicht zu dicht gepackte Schicht ist das, wovon die Multiplikatoren je Lebensmittelart ausgehen, und ein voller Korb braucht zusätzliche Zeit, näher an dem, was ein voller Ofen bräuchte. Prüfe das Gericht ein paar Minuten vor der umgerechneten Zeit, besonders beim ersten Mal, wenn du ein neues Rezept umrechnest, da Wattzahl und Kalibrierung zwischen Heißluftfritteusen-Modellen variieren. Und behandle Tiefkühlkost anders — sie folgt dem umgekehrten Muster eines frischen Rezepts, behält in etwa die Verpackungstemperatur bei und kürzt trotzdem die Zeit, da das Lebensmittel die anfängliche Wärme erst zum Auftauen braucht, bevor es durchgaren kann.',
      },
    ],
  },
  tool: {
    metaTitle: 'Ofen-zu-Heißluftfritteuse-Umrechner',
    metaDescription:
      'Gib Ofentemperatur und -zeit aus jedem Rezept ein. Erhalte die passende Heißluftfritteusen-Einstellung, angepasst an Lebensmittelart und Korb- vs. Ofentyp — mit einer Obergrenze, damit nie eine Temperatur vorgeschlagen wird, die dein Gerät nicht erreichen kann.',
    metaKeywords: 'Ofen zu Heißluftfritteuse umrechnen, Ofen zu Heißluftfritteuse Rechner, Heißluftfritteuse Umrechnungsrechner, Heißluftfritteuse Umrechnungstabelle',
    backLink: 'Alle Tools',
    heading: 'Ofen-zu-Heißluftfritteuse-Umrechner',
    subDesc:
      'Gib Ofentemperatur und -zeit aus jedem Rezept ein. Erhalte die passende Heißluftfritteusen-Einstellung, angepasst an Lebensmittelart und Korb- vs. Ofentyp — mit einer Obergrenze, damit nie eine Temperatur vorgeschlagen wird, die dein Gerät nicht erreichen kann.',
    aboutHeading: 'Über die Umrechnung von Ofen zu Heißluftfritteuse',
    aboutBody:
      'Die meisten Ofen-zu-Heißluftfritteuse-Rechner wenden eine einzige pauschale Regel auf jedes Lebensmittel an: 25°F abziehen, Zeit um 20 % kürzen. Das ist ein vernünftiger Ausgangspunkt, behandelt aber ein Blech dünner Pommes genauso wie einen dichten Auflauf und prüft nie, ob das Ergebnis eine Temperatur ist, die deine Heißluftfritteuse tatsächlich erreichen kann. Dieses Tool macht zwei Dinge anders: Es passt den Multiplikator je nach Lebensmittelart an und begrenzt das Ergebnis auf die reale Obergrenze deines Geräts, statt eine Zahl zurückzugeben, die es auf deinem Regler gar nicht gibt.',
    multipliersHeading: 'So funktionieren die Multiplikatoren je Lebensmittelart',
    multipliersBody:
      'Die kompakte Kammer und die forcierte Luft einer Heißluftfritteuse übertragen Wärme viel schneller auf das Lebensmittel als ein normal großer Ofen, deshalb sinken die Garzeiten immer — aber wie stark, hängt von Oberfläche und Dichte des Lebensmittels ab. Dünne Lebensmittel mit großer Oberfläche wie Pommes oder Bacon verlieren am meisten Zeit (ein Abzug von etwa 30 %), weil die heiße Luft fast sofort jede Seite erreicht. Dichte Lebensmittel wie Aufläufe oder Gebäck verlieren am wenigsten (etwa 15 %), weil sich die Wärme noch bis zum Kern vorarbeiten muss. Hähnchen, Fisch und Gemüse liegen dazwischen. Der Umrechner sucht den richtigen Multiplikator für dein ausgewähltes Lebensmittel, statt eine einzige Zahl auf alles anzuwenden.',
    basketVsOvenHeading: 'Luftstrom: Korb vs. Ofen-Typ',
    basketVsOvenBody:
      'Eine Korb-Heißluftfritteuse packt das Lebensmittel in eine kleine Kammer mit Luft, die von allen Seiten zirkuliert — das gart schnell, hat aber eine niedrigere sichere Obergrenze, die meisten Körbe stoßen bei etwa 400°F an ihre Grenze. Ofen-artige Geräte (Heißluftfritteusen-Öfen und Toaster-Ofen-artige Körbe) haben mehr Luftvolumen um das Lebensmittel, sodass der Effekt etwas milder ist: Dieses Tool zieht 5°F weniger von der Ofentemperatur ab und fügt für Ofen-artige Geräte etwas zusätzliche Zeit hinzu, und lässt das Ergebnis bis zu 450°F steigen, bevor es begrenzt wird.',
    whatHappensHeading: 'Was passiert, wenn ein Rezept mehr Hitze braucht, als deine Heißluftfritteuse geben kann',
    whatHappensBody:
      'Ein 450°F-Rezept, das mit einer pauschalen Regel für eine Korb-Heißluftfritteuse mit maximal 400°F umgerechnet wird, würde 425°F ergeben — eine Einstellung, die es auf dem Regler gar nicht gibt. Dieses Tool begrenzt das Ergebnis auf die reale Obergrenze des Geräts (400°F Korb, 450°F Ofen-Typ) und fügt Zeit hinzu, um die niedrigere Hitze auszugleichen, mit einem klar formulierten Hinweis, was passiert ist und was zu erwarten ist (eine etwas weniger knusprige Oberfläche, also etwas früher prüfen). Es ist die häufigste Lücke bei anderen Heißluftfritteusen-Rechnern und der Grund, warum es dieses Tool gibt.',
    faqHeading: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Warum nicht einfach 25°F abziehen und die Zeit für alles um 20 % kürzen?',
        a: 'Weil unterschiedliche Lebensmittel unterschiedlich auf den schnelleren Luftstrom der Heißluftfritteuse reagieren. Ein dünnes Lebensmittel mit großer Oberfläche wie Pommes braucht einen größeren Zeitabzug (etwa 30 %), sonst trocknet es aus; ein dichter Auflauf braucht kaum einen (etwa 15 %). Dieser Umrechner wendet einen eigenen Multiplikator je Lebensmittelart an statt einer einzigen pauschalen Regel.',
      },
      {
        q: 'Was passiert, wenn die umgerechnete Temperatur höher ist, als meine Heißluftfritteuse erreichen kann?',
        a: 'Das Ergebnis wird auf die realistische Obergrenze deines Geräts begrenzt — 400°F für eine Korb-Heißluftfritteuse, 450°F für Ofen-Typ — und es werden ein paar Minuten zusätzlich hinzugefügt, um das auszugleichen, mit einem Hinweis, der erklärt, warum. Die meisten Rechner geben stillschweigend eine Zahl aus, die dein Gerät in Wirklichkeit gar nicht erreichen kann.',
      },
      {
        q: 'Was ist der Unterschied zwischen Korb- und Ofen-Einstellungen?',
        a: 'Eine Korb-Heißluftfritteuse umgibt das Lebensmittel in einer kleinen Kammer von allen Seiten mit heißer Luft, gart also schneller und hat eine niedrigere praktische Temperaturobergrenze. Ofen-artige Geräte (Heißluftfritteusen-Öfen, Toaster-Ofen-artige Körbe) haben mehr Luftvolumen um das Lebensmittel, laufen also im Vergleich zum Ofen etwas kühler und können etwas heißer werden, bevor begrenzt wird.',
      },
      {
        q: 'Funktioniert das auch für Lebensmittel direkt aus dem Gefrierschrank?',
        a: 'Tiefkühlkost folgt einer anderen Logik als ein frisches Rezept aus dem Kühlschrank — behalte die Verpackungstemperatur ungefähr bei und kürze die Zeit um etwa 30 %, das Gegenteil der üblichen Regel, da das Lebensmittel die volle Hitze erst zum Auftauen braucht, bevor es durchgaren kann.',
      },
      {
        q: 'Wie genau ist das Ergebnis?',
        a: 'Temperaturen werden auf die nächsten 5° gerundet, entsprechend den tatsächlichen Schritten der Regler und Digitalsteuerungen von Heißluftfritteusen. Betrachte das Ergebnis als Ausgangspunkt, nicht als Garantie — prüfe das Gericht etwas vor der vorgeschlagenen Zeit, besonders beim ersten Mal, wenn du in einem neuen Gerät kochst.',
      },
      {
        q: 'Muss ich vorheizen?',
        a: 'Ein kurzes Vorheizen hilft dem Ergebnis, genauer zu treffen: etwa 3 Minuten für ein Korb-Gerät, 4 Minuten für Ofen-Typ (im Ergebnisfeld oben angezeigt). Das Auslassen des Vorheizens bedeutet in der Regel nur, ein bis zwei Minuten zur Garzeit hinzuzufügen.',
      },
      {
        q: 'Kann man einen Ofen in eine Heißluftfritteuse umwandeln?',
        a: 'Du kannst das Gerät selbst nicht umwandeln — es sind unterschiedliche Hardware. Was du tun kannst, ist die Ofentemperatur und -zeit eines Rezepts in die entsprechende Heißluftfritteusen-Einstellung umzurechnen, was genau das ist, was dieses Tool macht: Es berücksichtigt das schnellere Garen mit forcierter Luft in der Heißluftfritteuse, damit dasselbe Gericht in beiden Geräten gut gelingt.',
      },
      {
        q: 'Ist 200 Grad in einer Heißluftfritteuse dasselbe wie im Ofen?',
        a: 'Nein. Heißluftfritteusen lassen heiße Luft direkt um das Lebensmittel in einer kleinen Kammer zirkulieren, sodass 200° in einer Heißluftfritteuse merklich schneller gart und stärker bräunt als 200° in einem klassischen Ofen. Als Faustregel: die Temperatur um etwa 20°F senken (oder etwa von 20°C auf 180°C) und die Zeit zum Ausgleich verkürzen — nutze den Rechner oben für eine auf dein spezifisches Gericht abgestimmte Zahl.',
      },
      {
        q: 'Was ist die 20/20-Regel für Heißluftfritteusen?',
        a: 'Die 20/20-Regel ist eine beliebte Faustformel für die Umrechnung von Ofen zu Heißluftfritteuse: die Ofentemperatur um 20°F senken und die Garzeit um 20 % kürzen. Das ist eine vernünftige schnelle Schätzung, wendet aber dieselbe Anpassung auf jedes Lebensmittel an — dieser Umrechner verfeinert sie mit einem eigenen Zeit-Multiplikator je Lebensmittelart statt einer einzigen festen Zahl.',
      },
      {
        q: 'Was sind 30 Minuten im Ofen in der Heißluftfritteuse?',
        a: 'Etwa 21–25 Minuten, je nachdem, was du zubereitest. Dünne Lebensmittel mit großer Oberfläche wie Pommes oder Wings verlieren eher nahe 30 % der Zeit (etwa 21 Minuten), während dichte Lebensmittel wie Aufläufe eher nahe 15 % verlieren (etwa 25 Minuten). Gib 30 Minuten und deine Lebensmittelart oben ein für eine genaue Zahl.',
      },
      {
        q: 'Wie rechne ich 200°C für 15 Minuten im Ofen in die Heißluftfritteuse um?',
        a: 'Als Ausgangspunkt werden 200°C für 15 Minuten im Ofen etwa zu 180°C für 12 Minuten in einer Heißluftfritteuse — eine Senkung um 20° und eine Zeitkürzung um 20 %. Die genauen Zahlen ändern sich je nach Lebensmittelart und ob du ein Korb- oder Ofen-Gerät hast, was der Rechner oben berücksichtigt.',
      },
      {
        q: 'Ist eine Heißluftfritteuse schneller als ein Ofen?',
        a: 'Ja, typischerweise 20–30 % schneller. Die kleine Garkammer, das näher liegende Heizelement und die forcierte Luftzirkulation einer Heißluftfritteuse übertragen Wärme viel schneller auf das Lebensmittel als ein normal großer Ofen, und sie braucht kaum oder gar keine Vorheizzeit im Vergleich zu den 10–15 Minuten eines Ofens.',
      },
      {
        q: 'Kann ich meinen Ofen durch eine Heißluftfritteuse ersetzen?',
        a: 'Für alltägliches Kochen in kleinen Mengen — Hähnchen, Fisch, Gemüse, Pommes, Reste aufwärmen — kann eine Heißluftfritteuse den Ofen meistens ersetzen, schneller und mit weniger Energie. Vollständig ersetzt sie ihn nicht: große Braten, Blechgerichte, Backen auf mehreren Ebenen und alles, was zu groß für den Korb ist, brauchen weiterhin einen normal großen Ofen.',
      },
      {
        q: 'Wie verwandle ich einen Ofen in eine Heißluftfritteuse?',
        a: 'Du kannst das Gerät selbst nicht umwandeln, aber viele moderne Öfen haben eine Umluft- oder „Air Fry“-Einstellung, die dem nahekommt — das Einschalten des Ventilators senkt effektive Garzeit und Temperatur ähnlich wie bei einer Heißluftfritteuse. Andernfalls nutze diesen Umrechner, um jedes Ofenrezept in Heißluftfritteusen-Einstellungen zu übersetzen, und gare es in einer separaten Heißluftfritteuse.',
      },
      {
        q: 'Wie lange sind 20 Minuten im Ofen in der Heißluftfritteuse?',
        a: 'Etwa 14–17 Minuten für die meisten Lebensmittel — ein Abzug von etwa 15–30 %, je nach Lebensmittelart. Dünne Lebensmittel wie Pommes oder Bacon liegen eher bei 14 Minuten; dichte Lebensmittel wie Gebäck eher bei 17. Nutze den Rechner oben mit deinem spezifischen Lebensmittel für eine genaue Zahl.',
      },
      {
        q: 'Kann ich Alufolie in einer Heißluftfritteuse verwenden?',
        a: 'Ja, die meisten Heißluftfritteusen können Alufolie sicher verwenden, solange sie die Luftzirkulation um das Lebensmittel nicht blockiert und nicht das Heizelement berührt. Beschwere sie mit Lebensmitteln, damit sie nicht in die Heizspirale fliegt, lasse Lücken für die Luftzirkulation, und vermeide Folie bei stark säurehaltigen Lebensmitteln (Tomaten, Zitrusfrüchte, essigbasierte Marinaden) bei längeren Garzeiten, da Säure mit dem Metall reagieren kann.',
      },
      {
        q: 'Was ist gesünder, eine Heißluftfritteuse oder ein Ofen?',
        a: 'Sie sind ungefähr gleichwertig — beide garen mit wenig bis keinem zusätzlichen Öl, anders als beim Frittieren. Der gesundheitliche Vorteil einer Heißluftfritteuse besteht speziell gegenüber dem Frittieren in Öl (bis zu 70–80 % weniger Öl), nicht gegenüber dem Backen im Ofen, das ohnehin nur minimal Öl verwendet. Der Hauptunterschied zum Ofen liegt in Bequemlichkeit und Geschwindigkeit, nicht in der Ernährung.',
      },
      {
        q: 'Was ist der Unterschied zwischen einer Heißluftfritteuse und einem Umluftofen?',
        a: 'Sie funktionieren nach demselben Prinzip — ein Ventilator, der heiße Luft zirkulieren lässt —, aber die Kammer einer Heißluftfritteuse ist viel kleiner, und das Lebensmittel sitzt näher sowohl am Ventilator als auch am Heizelement, sodass es schneller gart und aggressiver knusprig wird. Ein Umluftofen wendet denselben ventilatorgestützten Luftstrom auf einen viel größeren Innenraum an, weshalb Umluftrezepte bei der Umrechnung in eine Heißluftfritteuse eine sanftere Anpassung brauchen als Standard-Ofenrezepte.',
      },
      {
        q: 'Verbrauchen Heißluftfritteusen weniger Energie als ein Ofen?',
        a: 'Ja. Eine typische Heißluftfritteuse zieht 1200–1800 Watt und läuft nur einen Bruchteil der Zeit, die ein Ofen braucht (kein langes Vorheizen, weniger zu erhitzendes Volumen), sodass eine einzelne Mahlzeit in der Regel deutlich weniger Energie kostet, als denselben Ofen für dasselbe Gericht auf volle Größe zu erhitzen.',
      },
      {
        q: 'Kann ich eine Metallform oder ofenfestes Geschirr in eine Heißluftfritteuse stellen?',
        a: 'Ja, solange es ofenfest ist und mit genug Platz für die Luftzirkulation von allen Seiten in den Korb oder die Schale passt. Metall, ofenfestes Glas und Keramik funktionieren alle gut; vermeide alles, was die Luftzirkulation blockiert oder zu hoch ist, damit sich der Korb richtig schließen lässt.',
      },
    ],
  },
};

export default de;

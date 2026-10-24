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
  reverseConverter: {
    widgetLabel: 'Heißluftfritteuse → Ofen',
    airFryerTemperature: 'Temperatur der Heißluftfritteuse',
    airFryerTime: 'Zeit der Heißluftfritteuse',
    ovenSetting: 'Ofen-Einstellung',
    stepNote: 'Auf 25°F-Ofenstufen gerundet',
    ovenCaveat:
      'Ein normaler Ofen lässt die Luft nicht wie der Korb einer Heißluftfritteuse zirkulieren — heize ihn vollständig vor, bevor du das Essen hineingibst, und rechne damit, dass eine einzelne Schicht etwas weniger knusprig wird als in der Heißluftfritteuse.',
    ambiguousCeilingNoteTemplate:
      'Das liegt an der Obergrenze deiner {unit} ({ceiling}°F). Wenn diese Einstellung selbst aus einem heißeren Ofenrezept nach unten umgerechnet wurde, enthält die Zeit bereits etwa 8 % extra — ziehe das für ein genaueres Ergebnis wieder ab.',
  },
  convectionConverter: {
    widgetLabel: "Umluft → Heißluftfritteuse",
    ovenTemperature: "Umlufttemperatur",
    ovenTime: "Umluftzeit",
  },
  reverseConvectionConverter: {
    widgetLabel: "Heißluftfritteuse → Umluft",
    airFryerTemperature: "Temperatur der Heißluftfritteuse",
    airFryerTime: "Zeit der Heißluftfritteuse",
    ovenSetting: "Umluft-Einstellung",
    stepNote: "Auf 25°F-Ofenstufen gerundet",
    ovenCaveat: "Lass den Ventilator an und verteile das Essen in einer Schicht mit Platz um jedes Stück — ein überladenes Umluftblech verliert die Luftzirkulation, von der diese Zeiten ausgehen.",
    ambiguousCeilingNoteTemplate: "Dieser Wert liegt an der Obergrenze des {unit} ({ceiling}°F). Wurde er aus einem heißeren Umluftrezept heruntergerechnet, enthält die Zeit bereits etwa 8 % extra — zieh die wieder ab oder geh zum Originalrezept zurück.",
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
      { title: 'Druckbare Umrechnungstabelle', desc: 'Vollständige °F- und °C-Tabelle für die Kühlschranktür. Eine Seite, keine E-Mail-Anmeldung.' },
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
    relatedChartLink: 'Druckbare Umrechnungstabelle',
    relatedReverseLink: 'Heißluftfritteuse-zu-Ofen-Umrechner',
    relatedConvectionLink: "Umluft-zu-Heißluftfritteuse-Umrechner",
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
  reverseTool: {
    metaTitle: 'Heißluftfritteuse-zu-Ofen-Umrechner',
    metaDescription:
      'Gib Temperatur und Zeit der Heißluftfritteuse aus einem Rezept, einer Voreinstellung oder der Bedienungsanleitung deines Geräts ein. Erhalte die passende Ofen-Einstellung, angepasst an Lebensmittelart und Korb- vs. Ofentyp, gerundet auf die 25°-Stufen eines echten Ofens.',
    metaKeywords:
      'Heißluftfritteuse zu Ofen umrechnen, Heißluftfritteuse zu Ofen Rechner, Heißluftfritteuse in Ofen umrechnen, Heißluftfritteuse zu Ofen Garzeit umrechnen, Heißluftfritteuse zu herkömmlichem Ofen, Heißluftfritteusen-Einstellung zu Ofentemperatur',
    backLink: 'Alle Tools',
    heading: 'Heißluftfritteuse-zu-Ofen-Umrechner',
    subDesc:
      'Gib Temperatur und Zeit der Heißluftfritteuse aus einem Rezept, einer Voreinstellung oder der Bedienungsanleitung deines Geräts ein. Erhalte die passende Ofen-Einstellung, angepasst an Lebensmittelart und Korb- vs. Ofentyp, gerundet auf die 25°-Stufen eines echten Ofens.',
    aboutHeading: 'Über die Umrechnung von Heißluftfritteuse zu Ofen',
    aboutBody:
      'Die meisten Ofen-zu-Heißluftfritteuse-Tools funktionieren nur in eine Richtung, aber der umgekehrte Weg kommt genauso oft vor. Eine Rezeptkarte, eine Voreinstellung aus der Bedienungsanleitung deiner Heißluftfritteuse oder ein Tipp von einem Freund gibt dir eine Temperatur und Zeit für die Heißluftfritteuse, und du brauchst stattdessen die Werte für den normalen Ofen — weil du für mehr Leute kochst, als der Korb fasst, die Heißluftfritteuse schon mit etwas anderem beschäftigt ist, oder der Ofen für das, was du heute zubereitest, einfach das richtige Werkzeug ist. Dieser Umrechner lässt die Engine des Haupt-Umrechners von Ofen zu Heißluftfritteuse rückwärts laufen: Gib Temperatur und Zeit der Heißluftfritteuse ein, wähle die Lebensmittelart und ob dein Gerät ein Korb- oder Ofen-Typ ist, und du erhältst die Ofen-Einstellung, die dieses Rezept bräuchte — mit denselben Multiplikatoren je Lebensmittel wie beim Umrechner in die andere Richtung, nicht mit einer einfach umgekehrten Pauschalzahl.',
    roundingHeading: 'Warum das Ofen-Ergebnis auf 25°F gerundet wird, nicht auf 5°F',
    roundingBody:
      'Das digitale Display einer Heißluftfritteuse kann jede 5°-Stufe anzeigen, aber ein echter Ofenregler oder -knopf rastet nur in 25°-Schritten ein — 325, 350, 375, 400 und so weiter. Rundet man eine umgekehrte Umrechnung auf das feinere 5°-Raster der Heißluftfritteuse, bekommt man Zahlen wie 405°F oder 415°F, die es auf einem Ofenregler gar nicht gibt, und ein Rezept, das man in beide Richtungen umrechnet — vom Ofen zur Heißluftfritteuse und zurück zum Ofen —, würde bei jedem Richtungswechsel ein Stück weiter vom ursprünglichen Wert abdriften. Rundet man das Ofen-Ergebnis stattdessen auf die nächsten 25°, bleibt jedes Ergebnis eine Einstellung, die man tatsächlich am Regler einstellen kann, und deshalb landet dasselbe Rezept, in beide Richtungen umgerechnet, wieder in der Nähe seines Ausgangswerts, statt abzudriften.',
    workedExampleHeading: 'Durchgerechnetes Beispiel',
    workedExampleTemplate:
      'Nimm ein Korb-Heißluftfritteusen-Rezept mit allgemeinem Lebensmittel bei 375°F für 20 Minuten: rechnet man es zurück, ergibt sich eine Ofen-Einstellung von {GENERAL_OVEN_F}°F für {GENERAL_OVEN_MIN} Minuten — der übliche 25°-Temperaturabzug und die 20 % Zeitersparnis der Heißluftfritteuse wieder hinzugerechnet. Pommes verhalten sich anders: 400°F für 12 Minuten im Korb werden zu {FRIES_OVEN_F}°F für {FRIES_OVEN_MIN} Minuten im Ofen, eine größere Zeiterhöhung, weil Pommes beim Wechsel in die Heißluftfritteuse überdurchschnittlich viel Zeit verlieren und beim Zurückwechseln entsprechend mehr davon zurückbekommen müssen.',
    whenOvenBetterHeading: 'Wann der Ofen wirklich die bessere Wahl ist',
    whenOvenBetterBody:
      'Die Heißluftfritteuse gewinnt bei der Geschwindigkeit für eine einzelne, nicht überfüllte Schicht Essen, aber der Ofen ist in einigen häufigen Situationen weiterhin das bessere Werkzeug: mehr kochen, als der Korb in einer Ladung fasst, zwei Gerichte gleichzeitig auf verschiedenen Einschüben garen, eine Heißluftfritteuse, die gerade mit etwas anderem beschäftigt ist, oder ein Stück, das gar nicht in einen Korb passt — ein ganzes Hähnchen, ein volles Blech Kekse, ein großes Tablett Gemüse für viele Leute. In all diesen Fällen ist es schneller, die bereits bekannte Heißluftfritteusen-Einstellung zurück in eine Ofen-Zahl umzurechnen, als von vorne zu raten, und die Logik je Lebensmittelart — Pommes brauchen mehr Zeit zurück als ein Auflauf — bleibt dabei in beide Richtungen erhalten.',
    ovenCaveatHeading: 'Eine Sache, die man wissen sollte: Ein normaler Ofen ist nicht zum Frittieren gebaut',
    ovenCaveatBody:
      'Ein herkömmlicher Ofen hat nicht die forcierte Luftzirkulation eines Heißluftfritteusen-Korbs, deshalb ändern sich zwei Dinge. Vorheizen wird wichtiger, weil der Ofen seine volle Aufheizzeit braucht, um die Zieltemperatur gleichmäßig zu erreichen, statt der 3–4 Minuten Vorsprung, die eine Heißluftfritteuse benötigt. Und eine einzelne Schicht Essen wird nicht ganz so stark knusprig wie im Korb, weil weniger konzentrierter Luftstrom gleichzeitig jede Seite trifft. Beides ist kein Problem, das man umgehen muss — erwarte nur nicht, dass ein Blech Chicken Wings aus dem Ofen genauso aussieht wie die Version aus der Heißluftfritteuse, und nutze eine Umluft- oder „Air Fry“-Einstellung deines Ofens, falls vorhanden, denn das gleicht den größten Teil des Unterschieds aus.',
    relatedFlagshipLink: 'Ofen-zu-Heißluftfritteuse-Umrechner',
    relatedChartLink: 'Druckbare Umrechnungstabelle',
    relatedConvectionLink: "Heißluftfritteuse-zu-Umluft-Umrechner",
    faqHeading: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Wie rechne ich Heißluftfritteusen-Einstellungen in einen normalen Ofen um?',
        a: 'Addiere denselben lebensmittelabhängigen Temperaturunterschied wieder zur Heißluftfritteusen-Temperatur (25°F für die meisten Lebensmittel, 20°F für Steak, Fisch, Gebäck und Aufläufe), und teile die Heißluftfritteusen-Zeit durch den Zeitmultiplikator dieses Lebensmittels, statt damit zu multiplizieren. Der Rechner oben macht das automatisch und rundet die Ofentemperatur auf eine echte 25°-Reglerstufe.',
      },
      {
        q: 'Warum wird die Ofentemperatur auf eine 25°-Stufe gerundet statt auf eine genaue Zahl?',
        a: 'Weil ein echter Ofenregler oder eine digitale Steuerung nur in 25°F-Schritten einrastet — 350, 375, 400 —, nicht in den feineren 5°-Schritten einer Heißluftfritteuse. Auf das zu runden, was der Regler tatsächlich anzeigen kann, sorgt außerdem dafür, dass ein in beide Richtungen umgerechnetes Rezept (Ofen zu Heißluftfritteuse und zurück zum Ofen) nahe am Ausgangswert bleibt, statt abzudriften.',
      },
      {
        q: 'Liefert der Ofen genau das gleiche Ergebnis wie die Heißluftfritteuse?',
        a: 'Nah dran, aber nicht identisch. Ein herkömmlicher Ofen hat nicht die forcierte Luftzirkulation eines Heißluftfritteusen-Korbs, daher wird Vorheizen wichtiger und eine einzelne Schicht Essen wird nicht ganz so knusprig. Falls dein Ofen eine Umluft- oder „Air Fry“-Einstellung hat, nutze sie — das gleicht den größten Teil des Unterschieds aus.',
      },
      {
        q: 'Wann sollte ich den Ofen statt der Heißluftfritteuse verwenden?',
        a: 'Immer wenn der Korb die Aufgabe nicht in einer Ladung schafft: eine größere Menge, als der Korb fasst, zwei Gerichte, die gleichzeitig auf getrennten Einschüben garen, eine bereits beschäftigte Heißluftfritteuse, oder Essen, das gar nicht in einen Korb passt, wie ein ganzes Hähnchen oder ein volles Blech Kekse.',
      },
      {
        q: 'Spielt der Lebensmittel-Multiplikator in dieser Richtung noch eine Rolle?',
        a: 'Ja — er kehrt sich um, statt zu verschwinden. Dünne Lebensmittel mit großer Oberfläche wie Pommes und Bacon brauchten beim Wechsel in die Heißluftfritteuse den größten Zeitabzug, deshalb brauchen sie beim Zurückwechseln zum Ofen die größte Zeiterhöhung. Dichte Lebensmittel wie Aufläufe brauchen in beide Richtungen die kleinste Anpassung.',
      },
      {
        q: 'Welche Kerntemperatur sollte ich unabhängig vom Gerät weiterhin prüfen?',
        a: 'Die Ziel-Kerntemperaturen ändern sich zwischen Heißluftfritteuse und Ofen nicht — nimm Geflügel bei 165°F Kerntemperatur heraus und Fisch, Steak oder Koteletts bei 145°F. Das Gerät ändert Zeit und Reglereinstellung, um dorthin zu kommen; es ändert nicht, was „gar“ bedeutet.',
      },
    ],
  },
  convectionTool: {
    metaTitle: "Umluft zu Heißluftfritteuse umrechnen",
    metaDescription: "Rechne ein Umluftrezept in Einstellungen für die Heißluftfritteuse um. Ein sanfterer Abzug als die Ofenregel — Umluftrezepte sind bereits angepasst — nach Lebensmittel und Korb- oder Ofen-Typ.",
    metaKeywords: "umluft heißluftfritteuse umrechnen, umluft in heißluftfritteuse, umluftofen zu heißluftfritteuse, umluftrezept airfryer, umluft airfryer temperatur",
    backLink: "Alle Tools",
    heading: "Umluft-zu-Heißluftfritteuse-Umrechner",
    subDesc: "Gib Temperatur und Zeit eines Umluftrezepts ein. Du bekommst die Einstellung für die Heißluftfritteuse mit dem kleineren Abzug, den ein bereits ventilatorangepasstes Rezept braucht — nach Lebensmittel und Korb- oder Ofen-Typ.",
    aboutHeading: "Warum Umluftrezepte eine eigene Umrechnung brauchen",
    aboutBody: "Ein Umluftofen und eine Heißluftfritteuse arbeiten nach demselben Prinzip: Ein Ventilator bewegt heiße Luft um das Essen, damit die Wärme schneller ankommt als in stehender Luft. Ein Rezept für Umluft hat den Großteil des Fritteusen-Vorteils also schon eingebaut — es liegt meist etwa 25°F unter der Ober-/Unterhitze-Version desselben Gerichts und ist oft etwas kürzer. Schickst du dieses Rezept durch eine normale Ofen-zu-Heißluftfritteuse-Umrechnung, ziehst du die 25°F ein zweites Mal ab — so kommen Umluftrezepte blass und nicht durchgegart aus dem Korb. Dieser Umrechner startet beim Umluftwert und wendet nur den Abstand an, der tatsächlich übrig ist.",
    whyGentlerHeading: "Warum der Abzug kleiner ist",
    whyGentlerBody: "Was zwischen Umluftofen und Heißluftfritteuse noch bleibt, sind Größe und Abstand. Der Garraum einer Heißluftfritteuse hat nur einen Bruchteil des Volumens, und das Essen liegt wenige Zentimeter von Ventilator und Heizelement entfernt — die Luft erreicht es schneller, die Oberfläche bräunt früher. Das entspricht etwa 0–15°F und 5–10 % der Zeit, je nach Lebensmittel. Pommes und Chicken Wings behalten fast ihre ganze Hitze — sie brauchen sie, um knusprig zu werden und Fett auszulassen — und sparen stattdessen Zeit. Gebäck und Aufläufe bekommen den größten Temperaturabzug, 15°F, weil in einem kleinen Garraum die Oberfläche bräunt, bevor die Mitte fest wird. Heißluftfritteusen im Ofen-Typ sind einem Umluftofen noch näher, ihr Abzug sinkt daher um weitere 5°F.",
    workedExampleHeading: "Rechenbeispiel",
    workedExampleTemplate: "Ein Umluftrezept mit 350°F für 30 Minuten, allgemeines Lebensmittel, in einer Korb-Heißluftfritteuse ergibt {GENERAL_AF_F}°F für {GENERAL_AF_MIN} Minuten. Mit denselben Werten im Umrechner für Ober-/Unterhitze bekämst du {FLAGSHIP_AF_F}°F für {FLAGSHIP_AF_MIN} Minuten — zu niedrig und zu kurz für ein Rezept, das schon für den Ventilator angepasst war. Chicken Wings mit 425°F Umluft für 40 Minuten liegen über dem, was ein 400°F-Korb schafft, also hält der Umrechner sie bei {WINGS_AF_F}°F und gibt Zeit zurück: {WINGS_AF_MIN} Minuten, mit einem Hinweis, dass er das getan hat.",
    spotHeading: "So erkennst du, ob ein Rezept für Umluft geschrieben ist",
    spotBody: "Achte zuerst auf die Wörter: „Umluft“, „Heißluft“, „Ventilator“, „Konvektion“ oder eine Temperatur wie „180°C Umluft“. Deutsche Rezepte und viele Verpackungen nennen oft zwei Werte, Ober-/Unterhitze und Umluft, und der Umluftwert ist der niedrigere. Steht nichts dabei, vergleiche die Temperatur mit dem, was das Gericht sonst braucht: Ofenkartoffeln bei 400°F statt 425°F oder Plätzchen bei 325°F statt 350°F deuten darauf hin, dass das Rezept schon einen Ventilator voraussetzt. Rezeptbücher, die einem Backofen beiliegen, sind meist für dessen Umluftstufe geschrieben.",
    conventionalHeading: "Wenn das Rezept kein Umluftrezept ist",
    conventionalBody: "Ein Rezept für Ober-/Unterhitze, ohne Ventilator, braucht die volle Umrechnung — den größeren Temperaturabzug und die stärkere Zeitkürzung, die der Ofen-zu-Heißluftfritteuse-Umrechner anwendet. Nutzt du diese Seite für ein Ober-/Unterhitze-Rezept, wird das Essen etwas zu heiß und zu lange gegart; nutzt du den normalen Umrechner für ein Umluftrezept, bleibt es zu roh. Wähle den Umrechner nach dem Rezept, nicht nach deinem Gerät.",
    relatedFlagshipLink: "Ofen-zu-Heißluftfritteuse-Umrechner (Ober-/Unterhitze)",
    relatedReverseLink: "Heißluftfritteuse-zu-Ofen-Umrechner",
    relatedSiblingLink: "Heißluftfritteuse-zu-Umluft-Umrechner",
    relatedChartLink: "Druckbare Umrechnungstabelle",
    faqHeading: "Häufig gestellte Fragen",
    faqs: [
      {
        q: "Wie rechne ich ein Umluftrezept für die Heißluftfritteuse um?",
        a: "Senke die Temperatur je nach Lebensmittel um 0–15°F und kürze die Zeit um 5–10 %. Alles, was knusprig werden soll, wie Pommes und Chicken Wings, behält die Hitze und verliert etwas Zeit; Gebäck und Aufläufe bekommen den größten Temperaturabzug. Der Umrechner oben wendet die Werte pro Lebensmittel an und prüft das Ergebnis gegen die Höchsttemperatur deiner Heißluftfritteuse.",
      },
      {
        q: "Ziehe ich bei einem Umluftrezept 25°F für die Heißluftfritteuse ab?",
        a: "Nein. Diese 25°F sind die übliche Anpassung von Ober-/Unterhitze auf Umluft, und ein Umluftrezept hat sie schon gemacht. Ziehst du sie noch einmal ab, zählst du den Ventilator doppelt und das Essen bleibt zu roh. Ab Umluft bleibt höchstens ein Abzug von 15°F.",
      },
      {
        q: "Ist Heißluft dasselbe wie Umluft?",
        a: "Im Backofen ja: „Heißluft“, „Umluft“ und „Konvektion“ meinen alle den Betrieb mit Ventilator. Nennt die Verpackung einen Wert für Ober-/Unterhitze und einen für Umluft, gib hier den Umluftwert ein.",
      },
      {
        q: "Was, wenn das Umluftrezept heißer ist, als meine Heißluftfritteuse kann?",
        a: "Der Umrechner hält die Temperatur an der Obergrenze deines Geräts — 400°F bei den meisten Korbmodellen, 450°F bei Geräten im Ofen-Typ — und gibt etwa 8 % Zeit zum Ausgleich zurück, mit einem Hinweis unter dem Ergebnis. Schau früher nach; die Oberfläche bräunt eventuell etwas weniger.",
      },
      {
        q: "Kann ich Umluftwerte in einer Heißluftfritteuse im Ofen-Typ einfach übernehmen?",
        a: "Fast. Eine Heißluftfritteuse im Ofen-Typ ist im Grunde ein kleiner Umluftofen, der Abzug wird also kleiner: 0–10°F und eine Zeit nahe am Original. Pommes und Chicken Wings können bei der Umlufttemperatur bleiben, mit nur ein paar Minuten weniger.",
      },
      {
        q: "Ändern sich die Kerntemperaturen zwischen Umluft und Heißluftfritteuse?",
        a: "Nein. Geflügel ist bei 165°F Kerntemperatur fertig, Fisch, Steak oder Koteletts bei 145°F — egal in welchem Gerät. Der Umrechner ändert Einstellung und Zeit, um dorthin zu kommen, nicht, was „gar“ bedeutet.",
      },
    ],
  },
  reverseConvectionTool: {
    metaTitle: "Heißluftfritteuse zu Umluft umrechnen",
    metaDescription: "Rechne Temperatur und Zeit der Heißluftfritteuse in eine Umluft-Einstellung für den Backofen um, nach Lebensmittel und Korb- oder Ofen-Typ, gerundet auf 25°-Stufen. Für Mengen, die nicht in den Korb passen.",
    metaKeywords: "heißluftfritteuse zu umluft, airfryer in umluft umrechnen, heißluftfritteuse rezept im umluftofen, airfryer zeit umluft backofen",
    backLink: "Alle Tools",
    heading: "Heißluftfritteuse-zu-Umluft-Umrechner",
    subDesc: "Gib eine Temperatur und Zeit der Heißluftfritteuse ein. Du bekommst die Umluft-Einstellung für den Backofen, angepasst an Lebensmittel und Korb- oder Ofen-Typ, gerundet auf die 25°-Stufen eines echten Ofenreglers.",
    aboutHeading: "Über die Umrechnung von Heißluftfritteuse zu Umluft",
    aboutBody: "Ein Heißluftfritteusen-Rezept lässt sich schlecht vergrößern. Der Korb fasst eine Schicht, und sobald du für sechs statt für zwei kochst, ist ein Umluftofen — dieselbe ventilatorgetriebene Hitze in einem Garraum für zwei Bleche — der schnellere Weg. Weil beide Geräte heiße Luft mit einem Ventilator bewegen, ist der Schritt von der Heißluftfritteuse zum Umluftofen eine kleine Anpassung, nicht der ganze Weg zurück zu Ober-/Unterhitze. Dieser Umrechner gibt nur den Abstand pro Lebensmittel zwischen beiden zurück: ein paar Grad und etwas Zeit, mit derselben Tabelle wie der Umluft-zu-Heißluftfritteuse-Umrechner, nur rückwärts.",
    whenConvectionHeading: "Wann der Umluftofen den Korb schlägt",
    whenConvectionBody: "Die Menge ist der Hauptgrund: Ein Umluftofen gart zwei oder drei Bleche gleichzeitig, wobei der Ventilator jede Schiene nahezu auf derselben Temperatur hält, während eine Heißluftfritteuse drei Durchgänge hintereinander bräuchte. Große Stücke — ein ganzes Hähnchen, ein Blech Plätzchen, ein Blechgericht — passen in einen Ofen, nicht in einen Korb. Und wenn die Heißluftfritteuse mit einer Beilage belegt ist, kommen beide gleichzeitig auf den Tisch, wenn das Hauptgericht in den Umluftofen wandert. Blechgerichte, bei denen Gemüse und Fleisch sich ein Blech teilen und zusammen fertig werden, lassen sich im Ofen ebenfalls leichter timen. Für eine Portion Pommes oder Chicken Wings gewinnt die Heißluftfritteuse aber weiter bei Tempo und Knusprigkeit.",
    roundingHeading: "Warum sich die Temperatur oft nicht ändert",
    roundingBody: "Der Abstand zwischen Heißluftfritteuse und Umluftofen beträgt 0–15°F, und ein Ofenregler rastet in 25°F-Stufen. Rechne 10°F auf eine Fritteuseneinstellung von 375°F, und die nächste Stufe am Regler ist immer noch 375°F. Für viele Lebensmittel gibt dieser Umrechner deshalb dieselbe Temperatur zurück und steckt die ganze Anpassung in die Zeit. Das ist die ehrliche Antwort: Der Unterschied zwischen beiden Geräten liegt vor allem darin, wie schnell die Luft das Essen erreicht, und eine etwas längere Garzeit im größeren Garraum ist der Weg, wie der Ofen das ausgleicht. Das Runden auf Reglerstufen sorgt außerdem dafür, dass ein hin und zurück umgerechnetes Rezept wieder beim Ausgangswert landet.",
    workedExampleHeading: "Rechenbeispiel",
    workedExampleTemplate: "Eine allgemeine Korb-Einstellung von 340°F für 27 Minuten wird im Umluftofen zu {GENERAL_CONV_F}°F für {GENERAL_CONV_MIN} Minuten — wahrscheinlich genau das Umluftrezept, aus dem sie stammt. Pommes mit 390°F für 18 Minuten werden zu {FRIES_CONV_F}°F für {FRIES_CONV_MIN} Minuten: Der Regler landet auf der nächsten Stufe, und der Ofen bekommt ein paar Minuten mehr, weil die Luft über ein volles Blech langsamer strömt als durch einen Korb.",
    ceilingHeading: "Einstellungen am Maximum deiner Heißluftfritteuse",
    ceilingBody: "Liegt die Fritteuseneinstellung an der Obergrenze des Geräts — 400°F bei den meisten Körben, 450°F bei Geräten im Ofen-Typ —, kann sie selbst schon ein umgerechneter Wert sein: ein heißeres Umluftrezept, heruntergehalten auf das, was die Fritteuse schafft, mit etwa 8 % zusätzlicher Zeit. Der Umrechner kann das nicht unterscheiden und zeigt deshalb einen Hinweis. Weißt du, dass das Rezept heißer angefangen hat, nimm die ursprüngliche Umluft-Einstellung, statt zurückzurechnen.",
    relatedFlagshipLink: "Ofen-zu-Heißluftfritteuse-Umrechner",
    relatedReverseLink: "Heißluftfritteuse-zu-Ofen-Umrechner (Ober-/Unterhitze)",
    relatedSiblingLink: "Umluft-zu-Heißluftfritteuse-Umrechner",
    relatedChartLink: "Druckbare Umrechnungstabelle",
    faqHeading: "Häufig gestellte Fragen",
    faqs: [
      {
        q: "Wie rechne ich Zeit und Temperatur der Heißluftfritteuse auf Umluft um?",
        a: "Rechne je nach Lebensmittel 0–15°F dazu, runde auf die nächste 25°F-Reglerstufe und verlängere die Zeit um 5–10 %. Der Umrechner oben macht alle drei Schritte mit derselben Lebensmitteltabelle wie der Umluft-zu-Heißluftfritteuse-Umrechner, damit beide Richtungen übereinstimmen.",
      },
      {
        q: "Ist Heißluftfritteuse zu Umluft dasselbe wie Heißluftfritteuse zu Ofen?",
        a: "Nein. Ober-/Unterhitze ohne Ventilator braucht 20–25°F und 15–30 % der Zeit zurück. Ein Umluftofen hat schon einen Ventilator und braucht daher deutlich weniger. Hat dein Ofen keine Umluft, nimm den Heißluftfritteuse-zu-Ofen-Umrechner.",
      },
      {
        q: "Warum kommt dieselbe Temperatur wie in meiner Heißluftfritteuse heraus?",
        a: "Weil der Abstand zwischen beiden Geräten kleiner ist als eine 25°F-Stufe am Ofenregler. Rundet man auf eine Einstellung, die der Ofen anzeigen kann, landet man oft wieder beim Fritteusenwert — die Anpassung wandert dann in die Zeit.",
      },
      {
        q: "Umluft oder Umluft mit Grill?",
        a: "Normale Umluft passt für die meisten Lebensmittel. Umluft mit Grill, die das obere Heizelement dazunimmt, hilft bei Chicken Wings, Kartoffeln und allem, was knusprig werden soll. Nimm in beiden Fällen die Temperatur, die der Umrechner ausgibt.",
      },
      {
        q: "Brauche ich mit zwei Blechen im Ofen mehr Zeit?",
        a: "Oft ein paar Minuten, ja. Die umgerechnete Zeit geht von einem Blech mit Platz drumherum aus. Bei zwei oder mehr Blechen tausche sie zur Hälfte der Zeit und schau ein bis zwei Minuten nach der umgerechneten Zeit nach.",
      },
      {
        q: "Ändern sich die Ziel-Kerntemperaturen?",
        a: "Nein. Geflügel ist bei 165°F Kerntemperatur gar, Fisch, Steak oder Koteletts bei 145°F — in der Heißluftfritteuse wie im Umluftofen.",
      },
    ],
  },
  chart: {
    metaTitle: 'Kostenlose druckbare Umrechnungstabelle für die Heißluftfritteuse',
    metaDescription:
      'Eine druckbare Tabelle mit Temperatur-, Zeit- und Lebensmittel-Multiplikatorwerten für die Umrechnung von Ofen zu Heißluftfritteuse — eine Seite, °F und °C, keine E-Mail-Adresse, kein Pop-up.',
    metaKeywords:
      'Umrechnungstabelle Heißluftfritteuse, Temperaturtabelle Heißluftfritteuse, druckbare Tabelle Heißluftfritteuse, Tabelle Ofen zu Heißluftfritteuse, Garzeiten-Tabelle Heißluftfritteuse, druckbare Umrechnungstabelle Heißluftfritteuse',
    backLink: 'Vollständiger Umrechner',
    pageTag: 'Druckbar · Keine E-Mail · Kein Pop-up',
    heading: 'Umrechnungstabelle für die Heißluftfritteuse',
    lead:
      'Temperatur-, Zeit- und Lebensmittel-Multiplikatortabellen für die Umrechnung von Ofen zu Heißluftfritteuse auf einer druckbaren Seite. Jede spezialisierte Tabellen-Website in diesem Bereich sperrt ihre druckbare Version hinter eine E-Mail-Anmeldung — diese nicht.',
    printButton: 'Diese Tabelle drucken',
    tempTableHeading: 'Temperatur — Ofen → Heißluftfritteuse (Korb)',
    tempHeaders: { ovenF: 'Ofen °F', airFryerF: 'Fritteuse °F', airFryerC: 'Fritteuse °C', gasMark: 'Gasstufe' },
    tempFootnote: '† Auf die 400°F-Korbgrenze begrenzt — siehe Hinweis unten.',
    timeTableHeading: 'Zeit — Allgemein / gemischt, Korb',
    timeHeaders: { ovenTime: 'Ofenzeit', airFryerTime: 'Fritteusenzeit' },
    foodTableHeading: 'Multiplikatoren nach Lebensmittelart',
    foodHeaders: { food: 'Lebensmittel', tempAdjustment: 'Temp.-Anpassung', timeMultiplier: 'Zeit-Multiplikator', note: 'Hinweis' },
    ceilingNoteTemplate:
      'Korb-Heißluftfritteusen erreichen maximal etwa 400°F; Ofen-artige Geräte etwa 450°F. Wenn diese Tabelle eine Temperatur zeigt, die dein Gerät nicht erreicht, nutze den {link} — er begrenzt das Ergebnis auf die reale Obergrenze deines Geräts und gleicht die Zeit automatisch aus.',
    liveConverterLabel: 'Live-Umrechner',
    howToReadHeading: 'So liest du diese Tabelle',
    howToReadBody:
      'Jede Tabelle oben geht von einer Korb-Heißluftfritteuse mit der Einstellung „Allgemein / gemischt" aus, derselben Basis, von der auch der Live-Umrechner ausgeht. Finde deine Ofentemperatur oder -zeit in der linken Spalte und lies nach rechts für das Äquivalent in Fahrenheit, Celsius und britischer Gasstufe. Die Tabelle nach Lebensmittelart passt diese Basis für zwölf Kategorien an, von Pommes bis Aufläufe, weil ein einziger fester Abzug nicht wiedergibt, wie unterschiedlich sich diese Lebensmittel in einer Kammer mit forcierter Luft verhalten. Ein Kreuz neben einer Temperatur bedeutet, dass die Umrechnung über das hinausging, was ein Korbgerät erreichen kann — die Tabelle hält sie an der Obergrenze, statt eine Einstellung zu drucken, die es an deinem Gerät nicht gibt.',
    whyFlatRuleHeading: 'Warum die feste Regel von −25°F / −20% bei flüssigem Teig und Gebäck versagt',
    whyFlatRuleBody:
      'Die meisten druckbaren Tabellen in diesem Bereich wenden eine einzige Regel auf jedes Lebensmittel an: 25°F abziehen, die Zeit um ein Fünftel kürzen. Das ist ein guter Durchschnitt für Gemüse, versagt aber bei allem mit feuchtem Inneren, das erst noch fest werden muss, bevor es fertig ist — Kuchenteig, Muffins, Aufläufe, dichtes Gebäck. Die forcierte Luft einer Korb-Heißluftfritteuse bräunt die Oberfläche von Teig fast sofort, und ein fester Zeitabzug von 20% verwechselt diese frühe Bräunung mit „fertig", lange bevor die Mitte fest geworden ist — die Kruste ist gar, die Mitte roh.',
    workedExampleTemplate:
      'Nimm ein Gebäckrezept mit 350°F für 30 Minuten. Die feste Regel rechnet es auf {FLAT_F}°F für {FLAT_MIN} Minuten um. Der Gebäck-Multiplikator dieser Tabelle hält es näher an der ursprünglichen Hitze, bei {BAKED_F}°F für {BAKED_MIN} Minuten — ein kleinerer Zeitabzug und ein paar Grad wärmer, weil der Teig diese zusätzlichen Minuten braucht, um fest zu werden, während die Oberfläche schnell bräunt. Dieselbe Logik gilt für jede Kategorie: dünne Lebensmittel mit großer Oberfläche wie Pommes und Bacon verlieren fast 30% ihrer Zeit, während dichte Lebensmittel wie Aufläufe und Gebäck eher 15% verlieren, weil die Hitze erst noch die Mitte erreichen muss, bevor es fertig ist.',
    faqHeading: 'Häufig gestellte Fragen',
    faqs: [
      {
        q: 'Muss ich eine E-Mail-Adresse angeben, um diese Tabelle zu drucken?',
        a: 'Nein. Jede spezialisierte Tabellen-Website in diesem Bereich sperrt ihre druckbare Version hinter eine E-Mail-Anmeldung oder ein Pop-up. Diese nicht — die Tabellen oben sind die ganze Tabelle, und der Drucken-Button schickt sie direkt an deinen Drucker.',
      },
      {
        q: 'Warum zeigt die Tabelle sowohl bei 425°F als auch bei 450°F Ofentemperatur 400°F an?',
        a: 'Eine Korb-Heißluftfritteuse erreicht maximal etwa 400°F. Sobald die rohe Umrechnung darüber liegt, hält die Tabelle das Ergebnis an der Obergrenze, statt eine Einstellung zu drucken, die dein Gerät nicht erreicht. Das Kreuz markiert, welche Zeilen so begrenzt wurden.',
      },
      {
        q: 'Gilt diese Tabelle auch für Ofen-artige Heißluftfritteusen?',
        a: 'Diese Tabellen sind auf Korbgeräte abgestimmt, die bei etwa 400°F liegen. Ofen-artige Geräte lassen die Luft sanfter zirkulieren und können bis etwa 450°F erreichen, bevor sie begrenzen — für genaue Werte für Ofen-artige Geräte nutze den Live-Umrechner und wechsle den Gerätetyp.',
      },
      {
        q: 'Warum ist der Zeitabzug bei Pommes anders als bei einem Auflauf?',
        a: 'Die Zeitersparnis hängt von Oberfläche und Dichte ab, nicht nur von der Kategorie. Pommes und Bacon bekommen heiße Luft fast von allen Seiten gleichzeitig, verlieren also fast 30% der Ofenzeit; ein dichter Auflauf verliert eher 15%.',
      },
      {
        q: 'Kann ich diese Tabelle für Lebensmittel direkt aus dem Gefrierfach nutzen?',
        a: 'Nicht direkt. Tiefgekühlte Lebensmittel folgen einer umgekehrten Logik — die Verpackungstemperatur beibehalten und die Zeit um etwa 30% kürzen, da das Lebensmittel die volle Hitze erst zum Auftauen braucht, bevor es garen kann.',
      },
      {
        q: 'Was, wenn meine genaue Ofentemperatur oder -zeit nicht in der Tabelle steht?',
        a: 'Diese Tabelle deckt gängige Werte in 25°F-Schritten und runden Zeitangaben ab, um auf eine Seite zu passen. Für eine genaue Zahl übernimmt der Live-Umrechner jede Ofentemperatur und -zeit und passt sich bei jedem Tastendruck an.',
      },
    ],
    relatedHeading: 'Verwandte Tools',
    relatedConverterLabel: 'Ofen → Heißluftfritteuse Umrechner',
    relatedConverterDesc:
      '— das Live-Tool, passt sich an Lebensmittelart und Korb vs. Ofen-Typ an, mit der Obergrenze, auf die die Kreuz-Zeilen dieser Tabelle verweisen.',
    relatedGasMarkLabel: '°F / °C / Gasstufe Umrechner',
    relatedGasMarkDesc: '— eine direkte Temperaturumrechnung für britische, EU- und US-Rezepte.',
    relatedReverseLabel: 'Heißluftfritteuse-zu-Ofen-Umrechner',
    relatedReverseDesc: '— die umgekehrte Richtung, für die Fälle, in denen der Ofen die bessere Wahl ist.',
    relatedConvectionLabel: "Umluft-zu-Heißluftfritteuse-Umrechner",
    relatedConvectionDesc: "— ein sanfterer Abzug für Umluftrezepte, die schon angepasst sind.",
    relatedReverseConvectionLabel: "Heißluftfritteuse-zu-Umluft-Umrechner",
    relatedReverseConvectionDesc: "— bring eine Fritteuseneinstellung für größere Mengen in den Umluftofen.",
  },
};

export default de;

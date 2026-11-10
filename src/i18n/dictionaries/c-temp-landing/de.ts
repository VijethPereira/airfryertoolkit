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
  widgetHeading: string;
  widgetNote: string;
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
  backLink: 'Alle Tools',
  pageTag: 'Backofentemperatur',
  answerTemplate: '{OVEN_C}°C Backofen = {AF_C}°C ({AF_F}°F) im Heißluftfritteuse-Korb, ca. {PCT}% weniger Zeit.',
  answerCappedTemplate: '{OVEN_C}°C Backofen = {AF_C}°C ({AF_F}°F) im Heißluftfritteuse-Korb — sein {CEILING}°F Maximum — ca. {PCT}% weniger Zeit.',
  answerFanTemplate: 'Umluft {FAN_C}°C Backofen = {FAN_AF_C}°C ({FAN_AF_F}°F) im Heißluftfritteuse-Korb, ca. {FAN_PCT}% weniger Zeit.',
  answerFanCappedTemplate: 'Umluft {FAN_C}°C Backofen = {FAN_AF_C}°C ({FAN_AF_F}°F) im Heißluftfritteuse-Korb — sein {CEILING}°F Maximum — ca. {FAN_PCT}% weniger Zeit.',
  answerOvenStyleTemplate: 'Heißluftfritteuse Typ Ofen: {OS_C}°C ({OS_F}°F), ca. {OS_PCT}% weniger Zeit.',
  tableHeading: 'Jedes Lebensmittel bei {OVEN_C}°C (Ober-/Unterhitze) / {FAN_C}°C Umluft',
  tableIntro: 'UK/EU-Rezepte geben drei Werte an: °C Ober-/Unterhitze, °C Umluft, Gasstufe. Jede Spalte gibt die Heißluftfritteuse-Temperatur (°C/°F/Gasstufe) und den gesparten Ofenzeit-Anteil.',
  tableHeaders: { food: 'Lebensmittel', conventional: 'Ober-/Unterhitze °C', fan: 'Umluft °C', basket: 'Korb', ovenStyle: 'Typ Ofen' },
  timeLessTemplate: '{PCT}% weniger Zeit',
  cappedCell: 'Begrenzt',
  cappedFootnote: 'Begrenzt: die umgerechnete Temperatur übersteigt, was das Gerät erreicht ({CEILING}°F Korb, {OS_CEILING}°F Typ Ofen), daher wird sie am Maximum gehalten und ein Teil der Zeitersparnis zurückgegeben.',
  neighboursHeading: 'Nahe Temperaturen',
  neighbourLinkTemplate: '{OVEN_C}°C Backofen zur Heißluftfritteuse',
  relatedFlagshipLink: 'Backofen-zu-Heißluftfritteuse-Konverter (jede Temperatur)',
  relatedChartLink: 'Druckbare Umrechnungstabelle',
  relatedFrozenLink: 'Tiefkühl-Modus (Verpackungsanweisungen)',
  relatedConvectionLink: 'Umluftofen zur Heißluftfritteuse',
  relatedNearestFLink: '{F}°F Backofen zur Heißluftfritteuse',
  faqHeading: 'Häufige Fragen',
  widgetHeading: 'Ofenrezept für Ihre Heißluftfritteuse umrechnen',
  widgetNote: 'Wechseln Sie zwischen Ober-/Unterhitze, Umluft und Gasstufe. Der Konverter nutzt die Haupt-Engine für Ober-/Unterhitze, die Konvektions-Engine für Umluft, und mappt Gasstufe auf °C Ober-/Unterhitze.',
  pages: {
    160: {
      metaTitle: '{OVEN_C}°C Backofen zur Heißluftfritteuse — Temperatur & Zeit',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, Gasstufe {OVEN_MARK}) im Backofen sind {AF_C}°C ({AF_F}°F) in der Heißluftfritteuse-Korb mit ca. {PCT}% weniger Zeit. Lebensmittel-Tabelle für Kuchen, Cremes und langsames Garen, mit Live-Konverter.',
      metaKeywords: '160c heißluftfritteuse, 160c backofen heißluftfritteuse, 160 celsius heißluftfritteuse, Gasstufe {OVEN_MARK} heißluftfritteuse',
      heading: '{OVEN_C}°C Backofen zur Heißluftfritteuse',
      subDesc: 'Sanfte Backtemperatur für Cremes, Baiser und Schmorgerichte. Der Konverter unten ist bereits auf {OVEN_C}°C Ober-/Unterhitze eingestellt — wechseln Sie auf Umluft oder Gasstufe, falls Ihr Rezept diese nutzt.',
      recipesHeading: 'Welche Rezepte nutzen 160°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, Gasstufe {OVEN_MARK}) ist die niedrige, sanfte Hitze für alles, das langsam stocken muss ohne zu bräunen: Ofencremes, Cheesecakes, Baiser, Terrinen, geschmorte Tomaten. Auch die Temperatur zum Aufwärmen empfindlicher Reste im Ofen. Eine allgemeine Rezeptur wandelt sich zu {AF_C}°C im Heißluftfritteuse-Korb um. Die Ersparnis ist kleiner als bei höheren Temperaturen, da diese Speisen die Hitze sanft bis ins Zentrum brauchen.',
      failureHeading: 'Das Problem bei 160°C: Mitte nicht gestockt, oben braun',
      failureBody: 'Bei dieser Temperatur ist das Risiko nicht Verbrennen — sondern dass die bewegte Luft die Oberfläche bräunt, bevor die Mitte stockt. Cheesecake oder Creme reißt und wölbt sich, während die Mitte noch flüssig ist. Nutzen Sie Wasserbad falls das Rezept es verlangt, decken Sie locker mit Alufolie ab, und prüfen Sie die Mitte zum Kontrollzeitpunkt mit Spieß oder Thermometer. Im Heißluftfritteuse-Korb ist der Ventilator näher am Essen, daher ist die Abdeckung essenziell.',
      workedExampleHeading: 'Beispiel (Ober-/Unterhitze)',
      workedExampleTemplate: 'Ein Cheesecake-Rezept sagt {OVEN_C}°C für {EX_OVEN_MIN} Minuten. Ofencremes nehmen einen kleinen Schnitt, also läuft ein Heißluftfritteuse-Korb bei {EX_C}°C ({EX_F}°F) für {EX_MIN} Minuten; prüfen Sie die Mitte nach {EX_CHECK} Minuten. Ein Typ-Ofen-Gerät bläst weniger direkt auf die Oberfläche, also nutzt es {EX_OS_C}°C ({EX_OS_F}°F) für {EX_OS_MIN} Minuten. Backen Sie in einer Springform auf dem Crisper-Plate, abgedeckt mit Folie.',
      fanWorkedExampleHeading: 'Beispiel (Umluft)',
      fanWorkedExampleTemplate: 'Falls das Rezept {FAN_C}°C Umluft angibt, wandelt sich der gleiche Cheesecake zu {EX_FAN_C}°C ({EX_FAN_F}°F) im Heißluftfritteuse-Korb für {EX_FAN_MIN} Minuten, Kontrolle nach {EX_FAN_CHECK} Minuten. Ein Typ-Ofen-Gerät nutzt {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) für {EX_FAN_OS_MIN} Minuten. Die Umluft-Eingabe geht durch die Konvektions-Engine, die einen sanfteren Schnitt nimmt, da das Rezept bereits für den Ventilator angepasst ist.',
      styleHeading: 'Warum das Rezept drei Temperaturen druckt',
      styleBody: 'UK/EU-Rezepte schreiben oft "{OVEN_C}°C / {FAN_C}°C Umluft / Gasstufe {OVEN_MARK}". Der Ober-/Unterhitze-Wert gilt für Ofen ohne Ventilator; der Umluft-Wert ist ~{FAN_OFFSET_C}°C niedriger, weil der Ventilator Wärme schneller transportiert. Gasstufe {OVEN_MARK} ist die UK-Drehzahl-Einstellung (~{OVEN_C}°C). Wählen Sie den Wert, den Ihr Rezept nutzt: Ober-/Unterhitze geht durch die Haupt-Engine, Umluft durch die Konvektions-Engine, Gasstufe mappt auf °C Ober-/Unterhitze. Der Konverter-Widget auf dieser Seite lässt Sie wechseln. Für Tiefkühl-Verpackungen (die eine Zeit für beide angeben), nutzen Sie den Tiefkühl-Modus — er hält die Temperatur und schneidet {FROZEN_PCT}% Zeit.',
      faqs: [
        { q: 'Was sind 160°C in einer Heißluftfritteuse?', a: 'Für eine allgemeine Rezeptur: {AF_C}°C ({AF_F}°F) im Korb mit ca. {PCT}% weniger Zeit, oder {OS_C}°C im Typ-Ofen. Cremes und langsames Garen nehmen einen kleineren Schnitt; siehe Tabelle.' },
        { q: 'Mein Rezept sagt 140°C Umluft — ist das dasselbe wie {OVEN_C}°C Ober-/Unterhitze?', a: 'Ja, das ist die UK-Konvention: Umluft = Ober-/Unterhitze − {FAN_OFFSET_C}°C. Nutzen Sie die Umluft-Eingabe auf dieser Seite (oder den Konvektions-Konverter) für ein Umluft-Rezept; es nimmt einen sanfteren Schnitt, da das Rezept bereits für den Ventilator angepasst ist.' },
        { q: 'Welche Gasstufe ist {OVEN_C}°C?', a: 'Gasstufe {OVEN_MARK}. Der UK-Drehregler markiert {OVEN_C}°C als Gasstufe {OVEN_MARK}.' },
        { q: 'Kann ich das für eine Tiefkühl-Verpackung nutzen, die 160°C angibt?', a: 'Nein — Tiefkühl-Packungen folgen anderen Regeln (Temperatur halten, {FROZEN_PCT}% Zeit kürzen). Nutzen Sie den Tiefkühl-Modus auf dieser Seite; er handhabt Ober-/Unterhitze- und Umluft-Verpackungstemperaturen korrekt.' },
        { q: 'Warum gibt die Umluft-Spalte eine andere Antwort als die Ober-/Unterhitze-Spalte?', a: 'Ein Umluft-Rezept ist bereits {FAN_OFFSET_C}°C unter seinem Ober-/Unterhitze-Äquivalent. Die Konvektions-Engine wendet einen kleineren Rest-Schnitt an (0–15°F, 5–10% Zeit), weil der Ventilator schon Teil der Arbeit geleistet hat. Die Haupt-Engine wendet den vollen Schnitt an (20–25°F, 20–30% Zeit).' },
      ],
    },
    180: {
      metaTitle: '{OVEN_C}°C Backofen zur Heißluftfritteuse — Temperatur & Zeit',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, Gasstufe {OVEN_MARK}) im Backofen sind {AF_C}°C ({AF_F}°F) in der Heißluftfritteuse-Korb mit ca. {PCT}% weniger Zeit. Lebensmittel-Tabelle für Kuchen, Brot, Hähnchen und Fisch, mit Live-Konverter.',
      metaKeywords: '180c heißluftfritteuse, 180c backofen heißluftfritteuse, 180 celsius heißluftfritteuse, 180c umluft heißluftfritteuse, Gasstufe {OVEN_MARK} heißluftfritteuse',
      heading: '{OVEN_C}°C Backofen zur Heißluftfritteuse',
      subDesc: 'Die häufigste Back- und Brattemperatur in UK/EU-Rezepten. Der Konverter unten ist bereits auf {OVEN_C}°C Ober-/Unterhitze — wechseln Sie auf Umluft oder Gasstufe, falls Ihr Rezept diese nutzt.',
      recipesHeading: 'Welche Rezepte nutzen 180°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, Gasstufe {OVEN_MARK}) ist der Standard für Kuchen, schnelle Brote, Brownies, Cookies, Brathähnchen, Fischfilets und Blechgerichte. Die Temperatur, auf die Rezepte zurückfallen, wenn der Autor unsicher ist — viele Gerichte landen hier. Eine allgemeine Rezeptur wandelt sich zu {AF_C}°C im Korb. Kuchen nehmen einen kleineren Schnitt (dichte Teige brauchen Hitze bis ins Zentrum); Hähnchen und Fisch den Standard-Schnitt.',
      failureHeading: 'Das Problem bei 180°C: Kuchen gewölbt, Mitte roh',
      failureBody: 'Der Ventilator bläst direkt auf die Kuchen-Oberfläche, die bräunt und krustet, während die Mitte noch flüssig ist. Ergebnis: gerissener, gewölbter Deckel über weichem Kern. Drei Dinge helfen: flachere Form als das Rezept verlangt, Deckel locker mit Folie für die erste Hälfte abdecken (Ränder unter der Form einklemmen, damit Ventilator sie nicht anhebt), und Mitte mit Spieß zum Kontrollzeitpunkt prüfen statt auf Farbe zu vertrauen. Papierförmchen müssen vom Teig beschwert werden; ein loses Blatt hebt an das Heizelement.',
      workedExampleHeading: 'Beispiel (Ober-/Unterhitze)',
      workedExampleTemplate: 'Ein Victoria-Sponge-Rezept sagt {OVEN_C}°C für {EX_OVEN_MIN} Minuten. Kuchen nehmen einen kleineren Schnitt, also läuft ein Korb bei {EX_C}°C ({EX_F}°F) für {EX_MIN} Minuten; prüfen mit Spieß nach {EX_CHECK} Minuten. Ein Typ-Ofen nutzt {EX_OS_C}°C ({EX_OS_F}°F) für {EX_OS_MIN} Minuten. Nutzen Sie 15–18 cm Form auf dem Crisper-Plate, halb gefüllt.',
      fanWorkedExampleHeading: 'Beispiel (Umluft)',
      fanWorkedExampleTemplate: 'Falls das Rezept {FAN_C}°C Umluft angibt, wandelt sich der gleiche Kuchen zu {EX_FAN_C}°C ({EX_FAN_F}°F) im Korb für {EX_FAN_MIN} Minuten, Kontrolle nach {EX_FAN_CHECK} Minuten. Ein Typ-Ofen nutzt {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) für {EX_FAN_OS_MIN} Minuten.',
      styleHeading: 'Ober-/Unterhitze vs Umluft bei 180°C',
      styleBody: 'UK/EU-Rezepte drucken "{OVEN_C}°C / {FAN_C}°C Umluft / Gasstufe {OVEN_MARK}". Ober-/Unterhitze geht durch die Haupt-Engine (Schnitt 20–25°F), Umluft durch Konvektions-Engine (Schnitt 0–15°F). Der Unterschied zwischen den zwei Heißluftfritteuse-Ergebnissen ist der Umluft-Offset: ein Umluft-Rezept ist schon ein Stück weit dort, also ist der Rest-Schnitt kleiner. Der Konverter-Widget erlaubt Wechsel. Für Tiefkühl-Packungen nutzen Sie den Tiefkühl-Modus — Temperatur halten, {FROZEN_PCT}% Zeit kürzen.',
      faqs: [
        { q: 'Was sind 180°C in einer Heißluftfritteuse?', a: 'Für allgemeine Rezeptur: {AF_C}°C ({AF_F}°F) im Korb mit ca. {PCT}% weniger Zeit, oder {OS_C}°C im Typ-Ofen. Kuchen und Aufläufe nehmen kleineren Schnitt; siehe Tabelle.' },
        { q: 'Mein Rezept sagt 160°C Umluft — ist das dasselbe wie {OVEN_C}°C Ober-/Unterhitze?', a: 'Ja, UK-Konvention: Umluft = Ober-/Unterhitze − {FAN_OFFSET_C}°C. Nutzen Sie Umluft-Eingabe für Umluft-Rezept; sanfterer Schnitt.' },
        { q: 'Welche Gasstufe ist {OVEN_C}°C?', a: 'Gasstufe {OVEN_MARK}. UK-Drehregler markiert {OVEN_C}°C als Gasstufe {OVEN_MARK}.' },
        { q: 'Kann ich das für Tiefkühl-Verpackung mit 180°C nutzen?', a: 'Nein — Tiefkühl folgt anderen Regeln (Temperatur halten, {FROZEN_PCT}% Zeit kürzen). Nutzen Sie Tiefkühl-Modus.' },
        { q: 'Warum gibt Umluft-Spalte andere Antwort?', a: 'Umluft-Rezept bereits {FAN_OFFSET_C}°C niedriger. Konvektions-Engine wendet kleineren Rest-Schnitt an (0–15°F, 5–10% Zeit), da Ventilator schon Teil geleistet hat.' },
      ],
    },
    200: {
      metaTitle: '{OVEN_C}°C Backofen zur Heißluftfritteuse — Temperatur & Zeit',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, Gasstufe {OVEN_MARK}) im Backofen sind {AF_C}°C ({AF_F}°F) in der Heißluftfritteuse-Korb mit ca. {PCT}% weniger Zeit. Lebensmittel-Tabelle für Ofengemüse, Hähnchenbrust, Pommes, mit Live-Konverter.',
      metaKeywords: '200c heißluftfritteuse, 200c backofen heißluftfritteuse, 200 celsius heißluftfritteuse, 180c umluft heißluftfritteuse, Gasstufe {OVEN_MARK} heißluftfritteuse',
      heading: '{OVEN_C}°C Backofen zur Heißluftfritteuse',
      subDesc: 'Die klassische Brattemperatur, und die auf EU-Verpackungen am häufigsten in °C gedruckte. Der Konverter unten ist bereits auf {OVEN_C}°C Ober-/Unterhitze — wechseln Sie auf Umluft oder Gasstufe, falls Ihr Rezept diese nutzt.',
      recipesHeading: 'Welche Rezepte nutzen 200°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, Gasstufe {OVEN_MARK}) ist die Standard-Brat-Einstellung für Gemüse, Kartoffelspalten, Hähnchenbrust, Würstchen, Lachs, Haus-Pommes und alles mit knuspriger Kante. Heißluftfritteuse ist im Kern ein Bräter, hier schlägt sie den Ofen am deutlichsten: allgemeine Rezeptur fällt auf {AF_C}°C, Pommes nehmen den größten Zeit-Schnitt der Tabelle, weil viel Oberfläche, wenig Tiefe. Die Umrechnung fordert den Korb nie auf, {OVEN_C}°C selbst zu erreichen — die Heißluftfritteuse erreicht gleiches Bräunen ~{PCT}% schneller bei niedrigerer Stufe.',
      failureHeading: 'Das Problem bei 200°C: gedämpft, nicht gebraten',
      failureBody: 'Hohe Hitze im kleinen Raum klappt nur, wenn Feuchtigkeit entweichen kann. Geschnittenes Gemüse und Kartoffeln geben Wasser ab beim Erhitzen, und im vollen Korb bleibt der Dampf am Essen — statt zu bräunen wird es weich und bleich. Häufigste Beschwerde bei Heißluftfritteuse-Gemüse, und mehr Zeit hilft nicht. In Einzelschicht mit Lücken garen, oder in zwei Chargen; zweite ist oft 1–2 Min schneller weil Korb schon heiß. Gemüse nach Waschen gut trocknen, einen TL Öl statt EL, und Korb zum Kontrollzeitpunkt schütteln damit Unterste nach oben kommen in die Luft. Fett von Würstchen oder Hähnchenhaut kann bei dieser Hitze rauchen, Schublade zwischen Chargen leeren.',
      workedExampleHeading: 'Beispiel (Ober-/Unterhitze)',
      workedExampleTemplate: 'Rezept bratet Mischgemüse bei {OVEN_C}°C für {EX_OVEN_MIN} Minuten. Korb macht es bei {EX_C}°C ({EX_F}°F) in {EX_MIN} Minuten, mit Schütteln nach {EX_CHECK} Minuten für Farbe. Typ-Ofen nutzt {EX_OS_C}°C ({EX_OS_F}°F) für {EX_OS_MIN} Minuten; Gemüse auf zwei Roste verteilen und halbwegs tauschen.',
      fanWorkedExampleHeading: 'Beispiel (Umluft)',
      fanWorkedExampleTemplate: 'Falls Rezept {FAN_C}°C Umluft angibt, wandeln sich gleiche Gemüse zu {EX_FAN_C}°C ({EX_FAN_F}°F) im Korb für {EX_FAN_MIN} Minuten, Schütteln nach {EX_FAN_CHECK} Minuten. Typ-Ofen nutzt {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) für {EX_FAN_OS_MIN} Minuten.',
      styleHeading: '200°C in °F und Gasstufe',
      styleBody: '{OVEN_C}°C sind {OVEN_F}°F (oft auf 200°C gerundet an EU-Drehreglern) und Gasstufe {OVEN_MARK}. Heißluftfritteuse-Einstellung ist {AF_C}°C im Korb, {OS_C}°C im Typ-Ofen. Wenn Ihre Heißluftfritteuse nur 10°C-Schritte hat, wählen Sie niedrigeren für Gemüse und höheren für Hähnchenhaut. Rezept in °C in Konverter eingeben gibt beide Zahlen. Für Tiefkühl-Packungen Tiefkühl-Modus.',
      faqs: [
        { q: 'Was sind 200°C in einer Heißluftfritteuse?', a: 'Ca. {AF_C}°C ({AF_F}°F) im Korb, mit ca. {PCT}% weniger Zeit. Im Typ-Ofen {OS_C}°C. Pommes und Bacon sparen meiste Zeit; Kuchen kleinster Schnitt.' },
        { q: 'Mein Rezept sagt 180°C Umluft — ist das dasselbe wie {OVEN_C}°C Ober-/Unterhitze?', a: 'Ja, Umluft = Ober-/Unterhitze − {FAN_OFFSET_C}°C. Nutzen Sie Umluft-Eingabe für Umluft-Rezept; sanfterer Schnitt.' },
        { q: 'Welche Gasstufe ist {OVEN_C}°C?', a: 'Gasstufe {OVEN_MARK}. UK-Drehregler markiert {OVEN_C}°C als Gasstufe {OVEN_MARK}.' },
        { q: 'Kann ich das für Tiefkühl-Verpackung mit 200°C nutzen?', a: 'Nein — Tiefkühl folgt anderen Regeln (Temperatur halten, {FROZEN_PCT}% Zeit kürzen). Nutzen Sie Tiefkühl-Modus.' },
        { q: 'Warum werden meine Heißluftfritteuse-Gemüse matschig bei {AF_C}°C?', a: 'Fast immer Überfüllung. Dampf vom Gemüse kann nicht entweichen. Einzelschicht, gut trocknen, weniger Öl; heißere Stufe rettet vollen Korb nicht.' },
      ],
    },
    220: {
      metaTitle: '{OVEN_C}°C Backofen zur Heißluftfritteuse — Einstellung, Zeit & Max-Temp-Limit',
      metaDescription: '{OVEN_C}°C ({OVEN_F}°F, Gasstufe {OVEN_MARK}) im Backofen = {AF_C}°C ({AF_F}°F) im Heißluftfritteuse-Korb, an seinem Maximum. Sehen Sie welche Lebensmittel begrenzt sind, wie viel Zeit zurückgegeben wird, live konvertieren.',
      metaKeywords: '220c heißluftfritteuse, 220c backofen heißluftfritteuse, 220 celsius heißluftfritteuse, 200c umluft heißluftfritteuse, Gasstufe {OVEN_MARK} heißluftfritteuse',
      heading: '{OVEN_C}°C Backofen zur Heißluftfritteuse',
      subDesc: 'Die Knusper-Temperatur, und die erste, wo ein Heißluftfritteuse-Korb an seine Decke stößt. Der Konverter unten ist bereits auf {OVEN_C}°C Ober-/Unterhitze — wechseln Sie auf Umluft oder Gasstufe, falls Ihr Rezept diese nutzt.',
      recipesHeading: 'Welche Rezepte nutzen {OVEN_C}°C',
      recipesBody: '{OVEN_C}°C ({OVEN_F}°F, Gasstufe {OVEN_MARK}) ist wo Rezepte für Knusper hingehen: knusprige Flügel, Ofenkartoffeln mit Knack-Rand, Lachs mit fester Oberfläche, Pizza, Fladenbrot, blanchiertes Gemüse. TK-Pommes sagen es oft auch, aber die folgen anderen Regeln — nutzen Sie Tiefkühl-Modus. Im Ofen braucht es diese Hitze, um Oberflächen-Feuchtigkeit schnell zu vertreiben. Heißluftfritteuse kommt schneller dahin, also wandelt allgemeine Rezeptur zu {AF_C}°C — genau das {CEILING}°F Maximum eines typischen Korbs. Alles mit Normal-Schnitt landet an der Decke; Rind, Fisch, Kuchen, Aufläufe nehmen kleineren Schnitt, also übersteigt ihre umgerechnete Temperatur, was der Korb erreicht. Tabelle markiert diese Zeilen.',
      failureHeading: 'Das Problem bei {OVEN_C}°C: die Decke',
      failureBody: 'Die meisten Konverter subtrahieren und drucken das Ergebnis, auch wenn es eine Temperatur ist, die Ihre Heißluftfritteuse nicht erreicht. Bei {OVEN_C}°C passiert das bei Lebensmitteln mit kleinerem Schnitt: Berechnung fordert mehr als {CEILING}°F, Korb gibt {CEILING}°F, und Essen kommt untergartig raus, weil Zeit so gekürzt wurde als ob die Hitze da wäre. Dieser Konverter klemmt Temperatur an die Decke und gibt Teil der Zeit zurück, also begrenztes Zeilen sparen weniger Zeit als der Rest. Anderes Risiko bei dieser Hitze: Rauch. Fett von Flügeln und Lachs-Haut tropft auf sehr heiße Schublade, also Öl mit hohem Rauchpunkt, Marinaden mit Zucker/Honig nur letzte Minuten, und Schublade zwischen Chargen leeren.',
      workedExampleHeading: 'Beispiel (Ober-/Unterhitze)',
      workedExampleTemplate: 'Rezept bratet Lachs bei {OVEN_C}°C für {EX_OVEN_MIN} Minuten. Fisch nimmt kleineren Schnitt, also übersteigt seine umgerechnete Temperatur Korb-Limit und wird auf {EX_C}°C ({EX_F}°F) gehalten, Zeit nur auf {EX_MIN} Minuten gekürzt. Prüfen nach {EX_CHECK} Minuten: Lachs gar bei 63°C (145°F) in dickster Stelle, oder wenn er zerfällt. Typ-Ofen hat höhere Decke, also läuft volle {EX_OS_C}°C ({EX_OS_F}°F) für {EX_OS_MIN} Minuten.',
      fanWorkedExampleHeading: 'Beispiel (Umluft)',
      fanWorkedExampleTemplate: 'Falls Rezept {FAN_C}°C Umluft angibt, wandelt sich gleicher Lachs zu {EX_FAN_C}°C ({EX_FAN_F}°F) im Korb für {EX_FAN_MIN} Minuten, Kontrolle nach {EX_FAN_CHECK} Minuten. Typ-Ofen nutzt {EX_FAN_OS_C}°C ({EX_FAN_OS_F}°F) für {EX_FAN_OS_MIN} Minuten. Umluft-Eingabe ist niedriger, also mehr Zeilen vermeiden die Decke.',
      styleHeading: 'Warum Typ-Ofen-Geräte bei {OVEN_C}°C abweichen',
      styleBody: 'Typ-Ofen-Heißluftfritteuse erreicht meist {OS_CEILING}°F, also bei {OVEN_C}°C nichts begrenzt: allgemeine Rezeptur ist {OS_C}°C ({OS_F}°F) mit ~{OS_PCT}% weniger Zeit, und kleiner-Schnitt-Lebensmittel laufen einfach heißer. Begrenzte Zeilen nur in Korb-Spalte, also prüfen Sie welchen Typ Sie haben bevor Sie irgendeiner Tabelle vertrauen. Konverter nutzt {CEILING}°F für Korb und {OS_CEILING}°F für Typ-Ofen. Wenn Ihr Drehregler niedriger stoppt, garen Sie an dessen Maximum und geben etwas mehr Zeit. In °C ist Rezept {OVEN_C}°C, Korb-Einstellung {AF_C}°C. Für Tiefkühl-Packungen Tiefkühl-Modus.',
      faqs: [
        { q: 'Was sind {OVEN_C}°C in einer Heißluftfritteuse?', a: '{AF_C}°C ({AF_F}°F) im Korb für die meisten Lebensmittel — das Korb-Maximum — mit ca. {PCT}% weniger Zeit. Im Typ-Ofen {OS_C}°C ({OS_F}°F) mit ca. {OS_PCT}% weniger Zeit. Rind, Fisch, Kuchen, Aufläufe begrenzt im Korb und behalten mehr Zeit.' },
        { q: 'Mein Rezept sagt 200°C Umluft — ist das dasselbe wie {OVEN_C}°C Ober-/Unterhitze?', a: 'Ja, Umluft = Ober-/Unterhitze − {FAN_OFFSET_C}°C. Umluft-Eingabe ist niedriger, also mehr Lebensmittel vermeiden die Decke.' },
        { q: 'Welche Gasstufe ist {OVEN_C}°C?', a: 'Gasstufe {OVEN_MARK}. UK-Drehregler markiert {OVEN_C}°C als Gasstufe {OVEN_MARK}.' },
        { q: 'Kann ich das für Tiefkühl-Verpackung mit {OVEN_C}°C nutzen?', a: 'Nein — Tiefkühl folgt anderen Regeln (Temperatur halten, {FROZEN_PCT}% Zeit kürzen). Nutzen Sie Tiefkühl-Modus.' },
        { q: 'Warum raucht meine Heißluftfritteuse bei hohen Temperaturen?', a: 'Fett und zuckerhaltige Marinaden tropfen auf heiße Schublade und verbrennen. Hochrauchpunkt-Öl, klebrige Glasuren zum Schluss, Schublade zwischen Chargen leeren oder auswischen.' },
      ],
    },
  },
};

export default cTempLanding;
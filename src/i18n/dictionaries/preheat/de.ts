import type { PreheatCopy } from '../../types';

const preheat: PreheatCopy = {
  metaTitle: 'Wie lange Heißluftfritteuse vorheizen (nach Temperatur)',
  metaDescription:
    'Vorheizzeit nach eingestellter Temperatur, aus den gedruckten Tabellen von Cosori, und was Geräte im Ofen-Stil tun. Ohne Konto, ohne Anmeldung.',
  metaKeywords: 'wie lange heißluftfritteuse vorheizen, heißluftfritteuse vorheizen, muss man heißluftfritteuse vorheizen, airfryer vorheizen, cosori vorheizen',
  heading: 'Wie lange Heißluftfritteuse vorheizen',
  intro:
    'Gib die Temperatur ein, mit der du gleich garst. Die Antwort stammt aus den Vorheiztabellen, die Cosori in seine Bedienungsanleitungen druckt, und ändert sich mit der Einstellung.',
  widgetLabel: 'Vorheizzeit',
  temperature: 'Temperatur',
  style: 'Fritteusen-Typ',
  basket: 'Korb',
  ovenStyle: 'Ofen-Stil',
  answerLabel: 'Vorheizen',
  answerBasket: '{MIN} Minuten bei {TEMP} vorheizen, dann das Essen hineingeben.',
  answerOvenStyle: 'Geräte im Ofen-Stil heizen selbst vor: Programm starten und das Essen hineingeben, wenn das Gerät es meldet.',
  answerOutOfRange: 'Die Tabellen reichen von {MIN_F} bis {MAX_F}°F ({MIN_C}–{MAX_C}°C); außerhalb nennt keine Anleitung eine Zeit.',
  answerInvalid: 'Gib eine Temperatur ein.',
  sourceBasket: 'Die längere der beiden Cosori-Tabellen bei dieser Einstellung: Pro LE {PRO} Min., TurboBlaze {TB} Min.',
  sourceOvenStyle: 'Jede für diese Seite gelesene Anleitung eines Geräts im Ofen-Stil baut das Vorheizen in die Programme ein und nennt keine Zeit.',
  leadHeading: 'Vorheizen ist keine feste Zahl',
  leadBody:
    'Die meisten Ratschläge nennen eine Zahl für jedes Rezept. Die beiden Cosori-Anleitungen mit Vorheiztabelle koppeln die Zeit an die Temperatur: {PRE_MIN} Minuten am unteren Ende des Reglers und {PRE_MAX} am oberen. Dieselben Anleitungen sagen auch, warum es zählt: Ohne Vorheizen gart das Essen nicht vollständig durch. Die Zeiten im Umrechner und in den Presets dieser Seite gehen von einem heißen Korb aus, ein kalter Start dauert also länger.',
  defaultHeading: 'Die Standardzeit nach Temperatur',
  defaultBody:
    'Die Tabellen von Pro LE und TurboBlaze weichen in zwei Bereichen voneinander ab. Bei {EX_F}°F ({EX_C}°C) nennt die Pro LE {EX_PRO} Minuten und die TurboBlaze {EX_TB}; weiter unten, bei {EX2_F}°F ({EX2_C}°C), sind es {EX2_PRO} und {EX2_TB}. Wo sie abweichen, nimmt diese Seite die längere der beiden, damit dem Korb nie Hitze fehlt. Unter {MIN_F}°F oder über {MAX_F}°F hat keine Tabelle eine Zeile, und das Tool sagt das, statt zu raten. Jeder Korb, dessen Anleitung keine Zeit nennt, bekommt diesen Standardwert.',
  chartsHeading: 'Die beiden Cosori-Tabellen, wie gedruckt',
  chartsBody:
    'Beide stehen neben der Anleitung zur Preheat-Taste: Ein Druck stellt die Zeit passend zur gewählten Temperatur ein, und die Fritteuse piept, wenn sie fertig ist. Es sind Cosoris Werte für Cosori-Körbe. Keine der anderen für diese Seite gelesenen Anleitungen druckt eine solche Tabelle.',
  chartCaption: 'Cosori {MODEL}, Bedienungsanleitung, Seite {PAGE}',
  tableTemp: 'Temperatur',
  tableMinutes: 'Minuten',
  styleHeading: 'Korb oder Ofen-Stil',
  styleBody:
    'Geräte im Ofen-Stil erledigen das selbst. Cosoris Heißluft-Backofen heizt bei Air Fry, Roast, Bake und Pizza automatisch vor, und jede gelesene Instant-Vortex-Anleitung macht es bei Air Fry, Roast und Bake genauso: Das Display zeigt Add Food, sobald es so weit ist. Keine nennt eine Zeit, also beim Ofen-Stil auf das Signal warten, nicht auf die Uhr schauen. Manche Körbe arbeiten ebenso: Cosoris Modell mit zwei Körben heizt bei jeder Funktion außer Dehydrate vor, und der Schritt lässt sich abschalten. Philips ist die Ausnahme: Das Datenblatt der Premium XXL nennt „Instant on/no pre-heat“, also kein Vorheizen.',
  skipHeading: 'Wann man es weglassen kann',
  skipBody:
    'Cosoris Formulierung taugt als Regel: vorheizen, außer die Fritteuse ist schon heiß. Ein zweiter Durchgang direkt nach dem ersten kommt ohne Warten hinein. Bacon gibt sein eigenes Fett ab und startet gut im kalten Korb. Lässt du es bei etwas weg, das sofort Hitze braucht, etwa paniertem Fisch oder Tiefkühlpizza, gib ein bis zwei Minuten dazu und prüfe früher.',
  relatedHeading: 'Weiterlesen',
  relatedFlagshipLink: 'Umrechner Backofen zu Heißluftfritteuse',
  relatedCostLink: 'Heißluftfritteuse vs. Backofen: Stromkosten',
  relatedPresetsLink: 'Garzeiten-Presets für die Heißluftfritteuse',
  faqHeading: 'Häufige Fragen',
  faqs: [
    {
      q: 'Wie lange sollte man eine Heißluftfritteuse vorheizen?',
      a: '{PRE_MIN} bis {PRE_MAX} Minuten beim Korb, je nach Temperatur: {PRE_MAX} Minuten ab {TOP_F}°F ({TOP_C}°C), nach der längeren der beiden Cosori-Tabellen. Geräte im Ofen-Stil heizen selbst vor und melden, wann das Essen hinein kann.',
    },
    {
      q: 'Muss man eine Heißluftfritteuse vorheizen?',
      a: 'Für die meisten Gerichte ja. Laut den Cosori-Anleitungen gart das Essen ohne Vorheizen nicht vollständig durch. Das Datenblatt der Philips Premium XXL sagt, dass dieses Modell keines braucht, also schau in die Anleitung deines Geräts.',
    },
    {
      q: 'Muss man jedes Mal vorheizen?',
      a: 'Nein. Lass es weg, wenn die Fritteuse vom letzten Durchgang noch heiß ist, die Ausnahme, die Cosoris Anleitungen machen, und bei Bacon, der kalt gut startet. Paniertes und Tiefkühlware bräunen im heißen Korb gleichmäßiger.',
    },
    {
      q: 'Muss eine Heißluftfritteuse im Ofen-Stil vorgeheizt werden?',
      a: 'Sie macht es selbst. Cosoris Heißluft-Backofen und die Instant-Vortex-Modelle zeigen Add Food, sobald sie heiß sind. Keine der beiden Anleitungen nennt eine Zeit, also auf das Signal warten statt einen Timer zu stellen.',
    },
    {
      q: 'Wie heizen Cosori, Instant, Philips und Ninja vor?',
      a: 'Cosori-Körbe mit Preheat-Taste stellen die Zeit nach ihrer Tabelle ein; Instant-Vortex-Modelle heizen automatisch vor und zeigen Add Food; Philips nennt für die Premium XXL kein Vorheizen; Ninjas Anleitungen wurden für diese Seite nicht erneut gelesen.',
    },
  ],
};

export default preheat;

/**
 * Brand pages in German: same shape as brands/en.ts. Every number is a {KEY} placeholder filled from
 * src/data/models.ts and the engine (brandValues), °C first. Model names, button names and the English-only
 * /model-max-temp copy are shared with en.ts.
 */
import { brands as en, type BrandsDictionary } from './en';

export const brands: BrandsDictionary = {
  backLink: 'Alle Tools',
  modelPicker: 'Dein Modell',
  anyModel: 'Nicht in der Liste / weiß nicht (Standardgrenze)',
  modelsHeading: 'Modelle und ihre Grenzen',
  modelsIntro:
    'Jede Grenze ist von der Produktseite oder aus dem Handbuch des Herstellers übernommen, mit Link und dem Datum, an dem wir sie gelesen haben. EU-Modelle stehen zuerst, wenn es welche gibt. Was wir nicht prüfen konnten, fehlt.',
  programsHeading: 'Programme des {MODEL}',
  programsIntro: 'Die Programmtabelle aus dem US-Handbuch: der Startwert jeder Taste und wie weit du ihn verstellen kannst.',
  tableHeaders: { model: 'Modell', type: 'Bauart', capacity: 'Volumen', max: 'Max. Air Fry', min: 'Niedrigste Stufe', preheat: 'Vorheizen', source: 'Quelle', sourced: 'Gelesen', brand: 'Marke' },
  programHeaders: { program: 'Programm', default: 'Startwert', range: 'Bereich' },
  types: { basket: 'Korb', 'oven-style': 'Ofentyp', 'dual-zone': 'Zwei Zonen', 'toaster-oven': 'Minibackofen-Kombi' },
  preheat: { auto: 'Eingebauter Schritt', manual: 'Von Hand', none: 'Keins', unknown: 'Nicht angegeben' },
  otherMax: en.otherMax,
  otherMaxTemplate: '{LABEL} bis {C}°C / {F}°F',
  programs: en.programs,
  sourceManual: 'Handbuch',
  sourceSpec: 'Datenblatt',
  sourceProduct: 'Produktseite',
  markets: { us: 'US-Modell', uk: 'UK-Modell', eu: 'EU-Modell' },
  euNote: 'Das sind die US-Modelle. Die EU-Modellnummern sind andere, prüfe also den Regler an deinem Gerät.',
  foodLoadNote: 'Die Quelle nennt eine Füllmenge in Kilogramm, kein Volumen.',
  maxDefaultNote: 'Voreinstellung, Höchstwert nicht angegeben',
  relatedHeading: 'Passend dazu',
  flagshipLink: 'Ofen-zu-Heißluftfritteuse-Umrechner',
  maxTempLink: 'Höchsttemperatur jedes Modells',
  faqHeading: 'Häufige Fragen',
  cardSpecTemplate: 'Bis {MAX_HI_C}°C · {N_MODELS} Modelle',
  brandNames: en.brandNames,
  modelNames: en.modelNames,
  pages: {
    ninja: {
      name: 'Ninja',
      metaTitle: 'Ninja Heißluftfritteuse: Ofenrezepte umrechnen und Max Crisp verstehen',
      metaDescription:
        'Rechne Ofenrezepte für deine Ninja um: Die europäische AF140EU geht bis {EU_MAX_HI_C}°C, Air Fry endet bei den US-Körben bei {MAX_LO_C}°C, und Max Crisp ist eine feste Stufe mit {OTHER_MAX_C}°C.',
      metaKeywords: 'ninja heißluftfritteuse temperatur, ninja max crisp, ninja af140eu höchsttemperatur, ofenrezept umrechnen ninja',
      heading: 'Ninja Heißluftfritteuse: Ofenrezepte umrechnen',
      intro:
        'Bei einer Ninja heißt {OTHER_MAX_C}°C fast immer Max Crisp. Beim Max XL ist das ein festes Programm: Es läuft mit {OTHER_MAX_C}°C ({OTHER_MAX}°F) und lässt sich nicht verstellen, während Air Fry und alle anderen Funktionen bei {F_MAX_C}°C enden. Ein Rezept mit {OTHER_MAX_C}°C ist ein Max-Crisp-Rezept, meist für Tiefkühlware; ein umgerechnetes Ofenrezept gehört auf Air Fry.',
      answerTemplate:
        'Die in Europa verkaufte Ninja Pro AF140EU geht laut Produktseite bis {EU_MAX_HI_C}°C. Bei den US-Körben endet Air Fry bei {MAX_LO_C}°C, die DoubleStack XL und der Foodi-Ofen schaffen {MAX_HI_C}°C.',
      widgetHeading: 'Ofenrezept für deine Ninja umrechnen',
      widgetNote: 'Wähle dein Modell, dann nimmt der Umrechner dessen Air-Fry-Grenze. Max Crisp kommt in einem umgerechneten Rezept nie vor, weil sich seine Temperatur nicht einstellen lässt.',
      sections: [
        {
          heading: 'Wann Max Crisp die richtige Taste ist',
          paragraphs: [
            'Nimm Ofenpommes mit {EX_OVEN_C}°C für {EX_OVEN_MIN} Minuten. Auf Air Fry am Max XL werden daraus {EX_MODEL_C}°C für {EX_MODEL_MIN_C} Minuten, erste Kontrolle ab Minute {EX_MODEL_CHECK_C}. Der Umrechner bleibt an der Air-Fry-Grenze und gleicht über die Zeit aus. Schüttle den Korb etwa bei Minute {EX_HALF_C}.',
            'Max Crisp passt, wenn die Tiefkühlpackung die Heißluftfritteuse nennt oder Ninjas eigene Tabelle die Taste aufführt: Essen, das schon gar ist und nur eine kräftige, schnelle Bräune braucht. Für rohes Hähnchen oder alles, was innen durchgaren muss, taugt es nicht: Du kannst es nicht herunterdrehen, und außen wird es fertig, bevor die Mitte so weit ist.',
          ],
        },
        {
          heading: 'Das EU-Modell hat seine eigene Grenze',
          paragraphs: [
            'Die AF140EU ist die Ninja Pro mit 4,7 Litern, die in Europa verkauft wird. Ihre Produktseite nennt einen Bereich, der bei {EU_MAX_HI_C}°C endet, also etwas über den {MAX_LO_C}°C ({MAX_LO}°F) der US-Körbe. Darum hat sie eine eigene Zeile: Wählst du sie, rechnet der Umrechner mit dieser Grenze und nicht mit der amerikanischen.',
            'Auch der Tastenname verrät die Temperatur nicht: Der amerikanische Air Fryer Pro hat ebenfalls Max Crisp, doch seine Anleitung setzt alle Funktionen auf {MAX_LO_C}°C. Bei der DoubleStack XL und dem Foodi-Ofen reicht Air Fry bis {MAX_HI_C}°C; der Ofen mit Rosten und mehr Platz bekommt die sanftere Umrechnung für den Ofentyp.',
          ],
        },
        {
          heading: 'Eine Ninja vorheizen',
          paragraphs: [
            'Die Körbe heizen nicht von selbst vor: Die Anleitungen empfehlen 3 Minuten leer, bevor das Essen hineinkommt, und die umgerechneten Zeiten gehen von einem heißen Korb aus. Die EU-Produktseite der AF140EU sagt nichts zum Vorheizen, die Anleitung der DoubleStack XL ebenso wenig; der Foodi-Ofen heizt selbst vor und zeigt dabei PRE.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Wie heiß wird eine Ninja Heißluftfritteuse höchstens?',
          a: 'Das hängt vom Modell ab. Die europäische AF140EU geht bis {EU_MAX_HI_C}°C. Bei den US-Körben endet Air Fry bei {MAX_LO_C}°C; Max Crisp am Max XL läuft mit {OTHER_MAX_C}°C, die DoubleStack XL und der Foodi-Ofen schaffen {MAX_HI_C}°C.',
        },
        { q: 'Kann ich Max Crisp niedriger stellen?', a: 'Nein: Laut Anleitung des Max XL lässt sich die Temperatur bei Max Crisp nicht ändern. Brauchst du weniger Hitze, nimm Air Fry.' },
        { q: 'Nehme ich Max Crisp für Ofenrezepte?', a: 'Meist nicht: Rechne das Rezept für Air Fry um. Max Crisp ist für vorgegarte Tiefkühlware gedacht, die nur noch bräunen soll.' },
        {
          q: 'Warum fehlt meine europäische Ninja in der Tabelle?',
          a: 'Wir nehmen ein EU-Modell nur auf, wenn die Herstellerseite Modellnummer und Temperatur in °C nennt. Bei der SL400EU und der SP101EU fehlte die Temperatur. Fehlt deins, lass die Auswahl auf „weiß nicht“.',
        },
        {
          q: 'Warum sind die Foodi-Modelle mit zwei Körben nicht dabei?',
          a: 'Wir haben die Anleitungen der DZ201, DZ401 und DZ550 komplett gelesen: Sie nennen Tabellenwerte und Kerntemperaturen, aber nie einen Höchstwert für Air Fry.',
        },
      ],
      cardDesc: 'Max Crisp ist eine feste Stufe, und die europäische AF140EU hat eine eigene Grenze.',
    },
    cosori: {
      name: 'Cosori',
      metaTitle: 'Cosori Heißluftfritteuse: Ofenrezepte je nach Modell umrechnen',
      metaDescription:
        'Rechne Ofenrezepte für deine Cosori um: Mehrere Korbmodelle, auch die europäischen -KEU, schaffen {MAX_HI_C}°C statt der {BASKET_CEIL_C}°C, von denen fast jeder Umrechner ausgeht.',
      metaKeywords: 'cosori heißluftfritteuse temperatur, cosori turbo blaze höchsttemperatur, cosori caf-dc601-keu, ofenrezept umrechnen cosori',
      heading: 'Cosori Heißluftfritteuse: Ofenrezepte umrechnen',
      intro:
        'Fast jede Tabelle und jeder Rechner geht davon aus, dass eine Korb-Heißluftfritteuse bei {BASKET_CEIL_C}°C aufhört: Sie halten jedes heiße Rezept dort fest und legen Zeit drauf. Mehrere Cosori-Körbe, darunter die beiden EU-Modelle der Tabelle, schaffen {MAX_HI_C}°C. Dort wird aus einem heißen Ofenrezept eine heißere und kürzere Einstellung, und die Extrazeit eines allgemeinen Umrechners trocknet das Essen aus.',
      answerTemplate:
        'Die beiden europäischen Cosori der Tabelle, CAF-DC601-KEU und CAF-L501-KEU, schaffen laut Produktseite {EU_MAX_HI_C}°C, genau wie mehrere US-Modelle; die Lite Mini und die TwinFry bleiben bei {MAX_LO_C}°C. Wähle dein Modell, dann rechnet der Umrechner mit dessen Grenze.',
      widgetHeading: 'Ofenrezept für deine Cosori umrechnen',
      widgetNote: 'Wähle zuerst das Modell: Es legt Korb oder Ofentyp fest und den echten Höchstwert aus der Quelle. Mit „weiß nicht“ gilt die Standardgrenze.',
      sections: [
        {
          heading: 'Warum ein Korb mit {MAX_HI_C}°C die Antwort ändert',
          paragraphs: [
            'Nimm ein Ofenrezept mit {EX_OVEN_C}°C für {EX_OVEN_MIN} Minuten, etwa selbst gemachte Pommes. Ein Umrechner für einen Korb mit {BASKET_CEIL_C}°C liefert {EX_GEN_C}°C für {EX_GEN_MIN_C} Minuten: Höher geht er nicht, also verlängert er die Zeit. Auf einer Turbo Blaze werden daraus {EX_MODEL_C}°C für {EX_MODEL_MIN_C} Minuten, weil der Korb diese Temperatur wirklich erreicht. Schau ab Minute {EX_MODEL_CHECK_C} nach.',
            'Am deutlichsten merkst du das bei Pommes und Chicken Wings: Mit der längeren allgemeinen Zeit bei der hohen Cosori-Temperatur trocknet das Innere aus, bevor der Timer klingelt.',
          ],
        },
        {
          heading: 'Ein Programm ist nicht die Rezepttemperatur',
          paragraphs: [
            'Jede Cosori-Taste startet bei ihrem eigenen Wert, oft unter dem Maximum. Im US-Handbuch der Turbo Blaze beginnt Air Fry bei {AIR_FRY_DEFAULT_C}°C und geht bis {AIR_FRY_MAX_C}°C, Bake endet bei {BAKE_MAX_C}°C und Reheat bei {REHEAT_MAX_C}°C. Liegt die umgerechnete Einstellung über dem, was ein Programm zulässt, nimm Air Fry und stell die Temperatur von Hand ein.',
            'Die EU-Produktseite der CAF-DC601-KEU nennt eine Vorheizfunktion, aber weder Dauer noch Temperatur, und ihr EU-Handbuch haben wir nicht gelesen. Die Lite Mini hat kein Vorheizen: Gib der ersten Ladung ein bis zwei Minuten mehr.',
          ],
        },
        {
          heading: 'Zwei Körbe und der Ofen',
          paragraphs: [
            'Die TwinFry macht Air Fry bis {MAX_LO_C}°C; nur ihr Broil geht auf {OTHER_MAX_C}°C, und der Umrechner nutzt Broil nie für ein umgerechnetes Rezept. Der Cosori-Ofen in der Tabelle läuft als Gerät vom Ofentyp: mehr Platz und Roste, darum die sanftere Umrechnung. Garst du in den beiden TwinFry-Körben zwei Lebensmittel, rechne jedes für sich um.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Wie heiß wird eine Cosori höchstens?',
          a: 'Das hängt vom Modell ab. Die Cosori in unserer Tabelle machen Air Fry bis {MAX_HI_C}°C, auch die beiden EU-Modelle; die Lite Mini und die TwinFry bleiben bei {MAX_LO_C}°C.',
        },
        {
          q: 'Nehme ich die Cosori-Programmtasten für Ofenrezepte?',
          a: 'Nimm Air Fry und stell die umgerechnete Temperatur und Zeit selbst ein. Jedes Programm startet bei seinem eigenen Wert, und manche enden tiefer, sodass du leicht kühler garst, als das Rezept verlangt.',
        },
        {
          q: 'Muss ich eine Cosori vorheizen?',
          a: 'Die US-Modelle mit Preheat-Taste machen das als eigenen Schritt, und das Handbuch empfiehlt es. Von den EU-Modellen kennen wir nur die Produktseite, und die nennt keine Zeiten.',
        },
        {
          q: 'Warum ist die Cosori-Zeit kürzer als bei anderen Umrechnern?',
          a: 'Weil der Korb die höhere Temperatur erreicht. Umrechner mit einer tieferen Grenze legen Zeit drauf, um die fehlende Hitze auszugleichen; bei einem Modell, das sie schafft, gart diese Extrazeit zu lange.',
        },
        {
          q: 'Warum fehlen andere europäische Cosori?',
          a: 'Wir nehmen eine Zeile nur auf, wenn die EU-Seite die -KEU-Modellnummer und die Temperatur zeigt. Andere Seiten zeigten eine US-Nummer, darum fehlen sie.',
        },
      ],
      cardDesc: 'Mehrere Korbmodelle, auch die europäischen, liegen über der Grenze üblicher Umrechner.',
    },
    philips: {
      name: 'Philips',
      metaTitle: 'Philips Airfryer: Ofenrezepte umrechnen mit der Grenze von {EU_MAX_HI_C}°C',
      metaDescription:
        'Rechne Ofenrezepte für deinen Philips Airfryer um: Die EU-Modelle der Tabelle enden bei {EU_MAX_HI_C}°C, heiße Rezepte bleiben also an dieser Grenze. Wähle dein Modell für seine echte Grenze.',
      metaKeywords: 'philips airfryer höchsttemperatur, philips airfryer xxl, philips na230 temperatur, ofenrezept umrechnen philips airfryer',
      heading: 'Philips Airfryer: Ofenrezepte umrechnen',
      intro:
        'Die sechs europäischen Philips Airfryer der Tabelle enden laut Produktseite bei {EU_MAX_HI_C}°C. Amerikanische Rezepte, und viele Ofenrezepte nach dem Umrechnen, verlangen {BASKET_CEIL_C}°C ({BASKET_CEIL}°F) oder mehr: Hitze, die der Korb nicht liefert. Die Lösung ist nicht, an der Grenze die Rezeptzeit zu garen, sondern an der Grenze zu bleiben, früher nachzusehen und die fehlenden Minuten dranzuhängen.',
      answerTemplate:
        'Die europäischen Philips-Modelle, die wir haben, schaffen {EU_MAX_HI_C}°C, also hält der Umrechner heiße Rezepte bei {F_DIAL_C}°C. Achte auf die Modellnummer: Der US-NA555 schafft {MAX_HI_C}°C ({MAX_HI}°F auf seiner Seite), der europäische NA555/00 {EU_MAX_HI_C}°C.',
      widgetHeading: 'Ofenrezept für deinen Philips umrechnen',
      widgetNote: 'Wähle dein Modell, damit seine eigene Grenze gilt. Mit „weiß nicht“ nimmt der Umrechner einen Standardkorb mit {BASKET_CEIL_C}°C an, also mehr als jeder europäische Philips der Tabelle.',
      sections: [
        {
          heading: 'Warum ein Rezept mit {BASKET_CEIL_C}°C nicht in einen Philips passt',
          paragraphs: [
            'Nimm ein Blech Ofengemüse mit {EX_OVEN_C}°C für {EX_OVEN_MIN} Minuten. Für einen Standardkorb werden daraus {EX_GEN_C}°C für {EX_GEN_MIN_C} Minuten. Ein NA230 kommt da nicht hin, also bleibt der Umrechner bei {EX_MODEL_C}°C für {EX_MODEL_MIN_C} Minuten und sagt dir, ab Minute {EX_MODEL_CHECK_C} nachzusehen.',
            'Rezepte für andere Marken machen das stillschweigend genauso. Steht im Rezept {BASKET_CEIL_C}°C für eine feste Zeit, kommt das Essen aus einem Philips auf Höchststufe nach dieser Zeit etwas blasser heraus. Gib ihm ein paar Minuten mehr: Höher geht es nicht.',
          ],
        },
        {
          heading: 'Gleiche Nummer, anderer Markt',
          paragraphs: [
            'Philips verkauft mehrere Modelle unter derselben Nummer in Europa und in den USA. Für den NA555 nennt die US-Seite {MAX_HI_C}°C ({MAX_HI}°F im Original), die französische Seite des NA555/00 dagegen {EU_MAX_HI_C}°C. Darum zeigt die Tabelle zuerst die EU-Zeilen und darunter die US-Zeilen. Wähle die Zeile des Landes, in dem du deinen gekauft hast.',
            'Philips gibt seine Grenzen in °C an: In den EU-Zeilen stammt der °C-Wert von der Seite, der °F-Wert ist umgerechnet. Der Umrechner rundet auf die Schrittweite seines Reglers ab, damit er nie eine Einstellung vorschlägt, die das Gerät nicht annimmt.',
          ],
        },
        {
          heading: 'Modelle mit zwei Körben',
          paragraphs: [
            'Die Serie 3000 mit zwei Körben, NA351/00 und NA350/00, hat laut ihren EU-Seiten in beiden Schubladen dieselbe Grenze von {EU_MAX_HI_C}°C. Jede Schublade hat ihre eigene Einstellung, rechne also jedes Lebensmittel für sich um. Größer heißt hier auch nicht heißer: Die XXL-Modelle enden laut ihren EU-Seiten ebenfalls bei {EU_MAX_HI_C}°C.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Wie heiß wird ein Philips Airfryer höchstens?',
          a: 'Bei den sechs europäischen Philips der Tabelle {EU_MAX_HI_C}°C laut Produktseite. Der US-NA555 schafft {MAX_HI_C}°C ({MAX_HI}°F). Jede Zeile verlinkt die Seite, aus der sie stammt.',
        },
        {
          q: 'Mein Rezept sagt {BASKET_CEIL_C}°C. Was stelle ich am Philips ein?',
          a: 'Stell das Maximum ein, {F_DIAL_C}°C, und sieh vor Ende der Zeit nach; fehlt Farbe, gib ein paar Minuten dazu. Wähle dein Modell im Umrechner, dann bekommst du die Zeit für diese Grenze.',
        },
        {
          q: 'Warum hat der europäische NA555 eine andere Grenze als der amerikanische?',
          a: 'Es sind zwei Datenblätter für zwei Märkte: Das europäische nennt {EU_MAX_HI_C}°C, das amerikanische {MAX_HI_C}°C ({MAX_HI}°F), und wir nehmen jeweils das des eigenen Markts.',
        },
        {
          q: 'Fasst der Airfryer XXL mehr als das normale Modell?',
          a: 'In Europa nennen die Seiten des HD9650/90 und des HD9285/90 ein Volumen in Litern. Das US-Datenblatt des HD9650 nennt eine Füllmenge in Kilogramm, darum hat diese Zeile kein Volumen.',
        },
        { q: 'Ist die Temperatur in beiden Körben gleich?', a: 'Ja, jede Schublade hat dieselbe Grenze. Der Unterschied: Du kannst zwei Einstellungen gleichzeitig fahren, rechne also jedes Lebensmittel einzeln um.' },
      ],
      cardDesc: 'Eine niedrigere Grenze als die meisten: Heiße Rezepte bleiben dort.',
    },
    instant: {
      name: 'Instant Vortex',
      metaTitle: 'Instant Vortex: Ofenrezepte umrechnen, Zeit und Temperatur',
      metaDescription:
        'Rechne Ofenrezepte für deine Instant Vortex um: Air Fry geht bis {F_MAX_C}°C, wann der Hinweis Turn Food kommt und wie du das ClearCook-Fenster nutzt, statt den Korb zu öffnen.',
      metaKeywords: 'instant vortex temperatur, instant vortex turn food, instant vortex plus heißluftfritteuse, ofenrezept umrechnen instant vortex',
      heading: 'Instant Vortex: Ofenrezepte umrechnen',
      intro:
        'Instant-Vortex-Fritteusen unterbrechen das Garen mittendrin mit dem Hinweis Turn Food. Bist du nicht da, warten sie {TURN_WAIT} Sekunden und machen ohne Wenden weiter, und das Essen kommt auf einer Seite blass heraus. Bei ClearCook-Modellen schaust du durchs Fenster, statt den Korb herauszuziehen, der bei jedem Öffnen Wärme verliert.',
      answerTemplate:
        'Alle Instant Vortex, die wir haben, machen Air Fry bis {F_MAX_C}°C ({F_MAX}°F); die Modelle mit zwei Zonen grillen bis {OTHER_MAX_C}°C, was der Umrechner nicht nutzt. Es sind US-Modelle: Wähle unten deins.',
      widgetHeading: 'Ofenrezept für deine Instant Vortex umrechnen',
      widgetNote: 'Wähle dein Modell, um Bauart und Grenze festzulegen. Die Grenze entspricht der üblichen Korbgrenze; der Unterschied liegt darin, wie du mit dem Wenden umgehst.',
      sections: [
        {
          heading: 'Der Hinweis Turn Food',
          paragraphs: [
            'Nimm Hähnchenschenkel, im Ofen gebraten mit {EX_OVEN_C}°C für {EX_OVEN_MIN} Minuten. Auf einer Vortex Plus werden daraus {EX_MODEL_C}°C für {EX_MODEL_MIN_C} Minuten, erste Kontrolle ab Minute {EX_MODEL_CHECK_C}. Wende sie etwa bei Minute {EX_HALF_C} und nimm sie heraus, wenn innen {INT_C}°C erreicht sind. Air Fry und Roast zeigen Turn Food während des Garens: Korb herausziehen, wenden, wieder einschieben.',
            'Verpasst du den Hinweis, geht es nach {TURN_WAIT} Sekunden weiter, stell dir also einen Handy-Timer, wenn du weggehst. Broil und Dehydrate verlangen kein Wenden, und Reheat startet ohne Vorheizen, zeigt darum auch keinen Schritt Add Food.',
          ],
        },
        {
          heading: 'Das ClearCook-Fenster statt des Korbs',
          paragraphs: [
            'Drück bei ClearCook-Modellen auf Light und verfolge die Bräunung durchs Fenster. Jedes Mal, wenn du den Korb ziehst, kühlt der Garraum ab und die Vortex muss aufholen, das verlängert die Zeit. Öffne zum Wenden und zur letzten Kontrolle, nicht dazwischen.',
            'Ohne Fenster kannst du nicht hineinsehen, also verlass dich auf die umgerechnete Zeit: Öffne den Korb einmal zum Wenden und einmal zur Kontrollminute, die der Umrechner anzeigt.',
          ],
        },
        {
          heading: 'Vortex-Programme und ihre Grenzen',
          paragraphs: [
            'Bei der Vortex Plus mit 6 Quart startet Air Fry bei {AIR_FRY_DEFAULT_C}°C und geht bis {AIR_FRY_MAX_C}°C. Broil reicht von {BROIL_MIN_C}°C bis {BROIL_MAX_C}°C, Reheat endet bei {REHEAT_MAX_C}°C. Für ein Ofenrezept nimm Air Fry oder Roast und stell die umgerechnete Temperatur selbst ein; Reheat erreicht keine volle Gartemperatur.',
            'Modelle mit Plus im Namen gehen zum Dörren bis {F_MIN_C}°C herunter. Die einfache Vortex startet höher, was nur für Trockenobst oder Dörrfleisch zählt.',
          ],
        },
      ],
      faqs: [
        {
          q: 'Wie heiß wird eine Instant Vortex höchstens?',
          a: 'Air Fry geht bei jeder Vortex in unserer Tabelle bis {F_MAX_C}°C ({F_MAX}°F). Die Modelle mit zwei Zonen grillen heißer, bis {OTHER_MAX_C}°C, aber Air Fry endet trotzdem bei {F_MAX_C}°C.',
        },
        { q: 'Was passiert, wenn ich Turn Food ignoriere?', a: 'Die Vortex wartet {TURN_WAIT} Sekunden und gart ohne Wenden weiter. Was gewendet werden sollte, ist oben dann brauner als unten.' },
        { q: 'Heizt die Instant Vortex vor?', a: 'Ja. Air Fry, Roast und Bake zeigen zuerst das Vorheizen und dann Add Food, sobald sie bereit ist. Reheat überspringt das Vorheizen.' },
        { q: 'Kann ich nachsehen, ohne den Korb zu öffnen?', a: 'Bei ClearCook-Modellen schaltest du das Licht ein und schaust durchs Fenster; Öffnen kühlt den Garraum ab.' },
        {
          q: 'Gilt die Tabelle für eine in Europa gekaufte Vortex?',
          a: 'Die europäischen Instant-Seiten, die wir gelesen haben, zeigen keine Modellnummer, darum können wir sie keiner Zeile zuordnen. Prüfe den Regler an deinem Gerät: Reicht er bis {F_MAX_C}°C, passt der Umrechner mit der Standardgrenze.',
        },
        {
          q: 'Rechne ich bei VersaZone- oder Dual-Modellen anders um?',
          a: 'Rechne jedes Lebensmittel für sich um: Jede Zone hat ihre eigene Einstellung, mit derselben Air-Fry-Grenze von {F_MAX_C}°C.',
        },
      ],
      cardDesc: 'Wann der Hinweis Turn Food kommt und wie du durchs Fenster nachsiehst.',
    },
  },
  maxTemp: {
    metaTitle: 'Höchsttemperatur der Heißluftfritteuse nach Modell: Ninja, Cosori, Philips, Instant',
    metaDescription:
      'Die höchste Air-Fry-Temperatur von {N_MODELS} Heißluftfritteusen, übernommen aus Anleitung oder Datenblatt des Herstellers, mit Link. Europäische Modelle zuerst; nach Marke und Bauart filtern, nach Grenze oder Größe sortieren.',
    metaKeywords: 'heißluftfritteuse höchsttemperatur, heißluftfritteuse maximale temperatur modell, cosori maximale temperatur, philips airfryer maximale temperatur, ninja maximale temperatur',
    heading: 'Höchsttemperatur der Heißluftfritteuse nach Modell',
    intro:
      'Die höchste Einstellung im Air-Fry-Modus, Modell für Modell, aus der Anleitung oder dem Datenblatt des Herstellers selbst. Sie reicht bei den {N_MODELS} Modellen mit Quelle von {MAX_LO_C}°C ({MAX_LO}°F) bis {MAX_HI_C}°C ({MAX_HI}°F). Diese Grenze entscheidet, wie sich ein heißes Ofenrezept umrechnen lässt: Erreicht dein Modell die umgerechnete Temperatur nicht, musst du Zeit zugeben.',
    filterBrand: 'Marke',
    filterType: 'Bauart',
    all: 'Alle',
    sortBy: 'Sortieren nach',
    sortLabels: { maxF: 'Höchsttemperatur', capacity: 'Fassungsvermögen', brand: 'Marke' },
    showing: '{N} von {TOTAL} Modellen',
    none: 'Kein Modell mit Quelle passt zu diesem Filter.',
    brandPageLink: 'Umrechner',
    sections: [
      {
        heading: 'Was der Höchstwert bedeutet',
        paragraphs: [
          'Jeder Wert ist das Maximum im Air-Fry-Modus, denn damit garst du ein umgerechnetes Rezept. Manche Zwei-Zonen-Modelle grillen heißer; das steht beim Modell, und der Umrechner nutzt es nie.',
          'Die {N_EU} europäischen Modelle stehen oben, jedes mit der europäischen Produktseite, aus der seine Grenze stammt; danach folgen die Modelle aus Großbritannien und den USA. Jede Zeile zeigt °C zuerst. Gibt die Quelle die Grenze in °F an, ist der °C-Wert umgerechnet, und ein Regler mit {DIAL_STEP}°-Schritten bleibt auf der Stufe unter der Grenze, nie darüber.',
        ],
      },
      {
        heading: 'Wie die Grenze eine Umrechnung verändert',
        paragraphs: [
          'Ergibt ein Rezept eine Temperatur über der Grenze deines Modells, bleibt es bei der Grenze, und die Zeit wird zum Ausgleich verlängert. Ein Modell, dessen Grenze über dem Standardkorb mit {BASKET_CEIL_C}°C ({BASKET_CEIL}°F) liegt, kann die heißere, kürzere Einstellung nehmen. Die Markenseiten rechnen mit der Grenze deines Modells.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie heiß wird eine Heißluftfritteuse höchstens?', a: 'Bei den Modellen mit Quelle geht Air Fry höchstens bis {MAX_HI_C}°C ({MAX_HI}°F). Die meisten Körbe enden bei {BASKET_CEIL_C}°C ({BASKET_CEIL}°F), und mehrere Philips-Modelle früher, bei {PH_MAX_C}°C.' },
      { q: 'Woher stammen diese Werte?', a: 'Aus der Anleitung oder der Produktseite des jeweiligen Herstellers, in jeder Zeile verlinkt, mit dem Datum, an dem wir sie gelesen haben. Modelle ohne Herstellerquelle fehlen.' },
      { q: 'Warum fehlt mein Modell?', a: 'Entweder haben wir beim Hersteller weder Anleitung noch Datenblatt gefunden, oder die Quelle nennt keinen Temperaturbereich. Wir nehmen ein Modell nur auf, wenn die Quelle die Grenze nennt.' },
      { q: 'Warum taucht dieselbe Serie mehrmals auf?', a: 'In Europa oder Großbritannien verkaufte Modelle haben eine eigene Modellnummer und eine eigene Produktseite, und die Tabelle nennt den Markt jeder Zeile. Jede Version bekommt eine eigene Zeile mit eigener Quelle, denn dieselbe Serie kann in einem anderen Markt eine andere Grenze nennen.' },
      { q: 'Ist eine Heißluftfritteuse mit höherem Maximum besser?', a: 'Nicht von allein. Heiße Rezepte lassen sich dann ohne Zusatzzeit umrechnen, was bei Pommes und Hähnchenflügeln hilft. Mit einer niedrigeren Grenze gart sie genauso gut, nur ein paar Minuten länger.' },
    ],
    cardDesc: 'Die Grenzwert-Tabelle hinter dem Umrechner, mit der Quelle jeder Zeile.',
    cardSpecTemplate: '{N_MODELS} Modelle mit Quelle',
    datasetName: 'Höchste Air-Fry-Temperatur der Heißluftfritteuse nach Modell',
    datasetVariables: ['Höchste Air-Fry-Temperatur (°C)', 'Fassungsvermögen', 'Vorheizen'],
  },
};

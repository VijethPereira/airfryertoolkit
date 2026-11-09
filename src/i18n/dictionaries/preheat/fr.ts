import type { PreheatCopy } from '../../types';

const preheat: PreheatCopy = {
  metaTitle: 'Combien de temps préchauffer une friteuse à air (selon la température)',
  metaDescription:
    'Temps de préchauffage selon la température réglée, d’après les tableaux imprimés de Cosori, et ce que font les modèles type four. Sans compte, sans inscription.',
  metaKeywords: 'combien de temps préchauffer friteuse à air, faut-il préchauffer une friteuse à air, préchauffer airfryer, cosori préchauffage, préchauffage friteuse sans huile',
  heading: 'Combien de temps préchauffer une friteuse à air',
  intro:
    'Saisissez la température à laquelle vous allez cuire. La réponse vient des tableaux de préchauffage que Cosori imprime dans ses notices.',
  widgetLabel: 'Temps de préchauffage',
  temperature: 'Température',
  style: 'Type de friteuse',
  basket: 'Panier',
  ovenStyle: 'Type four',
  answerLabel: 'Préchauffage',
  answerBasket: 'Préchauffez {MIN} minutes à {TEMP}, puis ajoutez les aliments.',
  answerOvenStyle: 'Les types four préchauffent seuls : lancez le programme et ajoutez les aliments quand il le signale.',
  answerOutOfRange: 'Les tableaux couvrent {MIN_F} à {MAX_F}°F ({MIN_C}–{MAX_C}°C) ; au-delà, aucune notice ne donne de durée.',
  answerInvalid: 'Saisissez une température.',
  sourceBasket: 'Le plus long des deux tableaux Cosori à ce réglage : Pro LE {PRO} min, TurboBlaze {TB} min.',
  sourceOvenStyle: 'Toutes les notices de type four lues pour cette page intègrent le préchauffage aux programmes et ne donnent aucune durée.',
  leadHeading: 'Le préchauffage n’est pas un chiffre unique',
  leadBody:
    'La plupart des conseils donnent un seul chiffre pour toutes les recettes. Les deux notices Cosori qui impriment un tableau de préchauffage le lient à la température : {PRE_MIN} minutes en bas du cadran et {PRE_MAX} en haut. Ces mêmes notices disent pourquoi c’est important : sans préchauffage, les aliments ne cuisent pas à cœur. Les temps du convertisseur et des presets de ce site supposent un panier déjà chaud.',
  defaultHeading: 'La durée par défaut selon la température',
  defaultBody:
    'Les tableaux du Pro LE et du TurboBlaze divergent sur deux plages. À {EX_F}°F ({EX_C}°C), le Pro LE indique {EX_PRO} minutes et le TurboBlaze {EX_TB} ; plus bas, à {EX2_F}°F ({EX2_C}°C), ils indiquent {EX2_PRO} et {EX2_TB}. Là où ils divergent, cette page retient le plus long des deux, pour que le panier ne manque jamais de chaleur. Sous {MIN_F}°F ou au-dessus de {MAX_F}°F, aucun tableau n’a de ligne, et l’outil le dit au lieu de deviner.',
  chartsHeading: 'Les deux tableaux Cosori, tels qu’imprimés',
  chartsBody:
    'Les deux accompagnent les instructions du bouton Preheat : en appuyant, la durée se règle sur la température choisie et la friteuse bipe à la fin. Aucune des autres notices lues pour cette page n’en imprime un.',
  chartCaption: 'Notice Cosori {MODEL}, page {PAGE}',
  tableTemp: 'Température',
  tableMinutes: 'Minutes',
  styleHeading: 'Panier ou type four',
  styleBody:
    'Les modèles type four s’en chargent eux-mêmes. Le four friteuse de Cosori inclut un préchauffage en Air Fry, Roast, Bake et Pizza, et toutes les notices Instant Vortex lues font de même en Air Fry, Roast et Bake : l’écran affiche Add Food quand c’est prêt. Aucune ne donne de durée : on attend le signal. Certains paniers fonctionnent aussi ainsi : le modèle double panier de Cosori préchauffe sur toutes les fonctions sauf Dehydrate, et l’étape peut être désactivée. Philips fait exception : la fiche technique de son Premium XXL indique « Instant on/no pre-heat ».',
  skipHeading: 'Quand s’en passer',
  skipBody:
    'La formule de Cosori fait une bonne règle : préchauffer sauf si la friteuse est déjà chaude. Le bacon rend sa propre graisse et démarre bien dans un panier froid. Si vous sautez l’étape pour un aliment qui veut une chaleur immédiate, comme du poisson pané ou une pizza surgelée, ajoutez une ou deux minutes et vérifiez plus tôt.',
  relatedHeading: 'Voir aussi',
  relatedFlagshipLink: 'Convertisseur four vers friteuse à air',
  relatedCostLink: 'Friteuse à air ou four : coût d’utilisation',
  relatedPresetsLink: 'Presets de cuisson pour friteuse à air',
  faqHeading: 'Questions fréquentes',
  faqs: [
    {
      q: 'Combien de temps faut-il préchauffer une friteuse à air ?',
      a: 'De {PRE_MIN} à {PRE_MAX} minutes pour un panier, selon la température : {PRE_MAX} minutes à partir de {TOP_F}°F ({TOP_C}°C), d’après le plus long des deux tableaux Cosori. Les types four préchauffent seuls et signalent quand ajouter les aliments.',
    },
    {
      q: 'Faut-il préchauffer une friteuse à air ?',
      a: 'Pour la plupart des aliments, oui. Les notices Cosori disent que sans préchauffage les aliments ne cuisent pas à cœur. La fiche technique de la Philips Premium XXL indique que ce modèle n’en a pas besoin, donc vérifiez la notice du vôtre.',
    },
    {
      q: 'Faut-il préchauffer à chaque fois ?',
      a: 'Non. Passez-vous-en quand la friteuse est encore chaude de la fournée précédente, l’exception que font les notices Cosori, et pour le bacon, qui démarre bien à froid.',
    },
    {
      q: 'Une friteuse à air type four a-t-elle besoin d’être préchauffée ?',
      a: 'Elle le fait seule. Le four friteuse de Cosori et les modèles Instant Vortex affichent Add Food une fois chauds. Aucune des deux notices ne donne de durée, donc attendez le signal plutôt que de régler une minuterie.',
    },
    {
      q: 'Comment préchauffent les friteuses Cosori, Instant, Philips et Ninja ?',
      a: 'Les paniers Cosori avec bouton Preheat règlent la durée d’après leur tableau ; les Instant Vortex préchauffent seuls et affichent Add Food ; Philips indique que son Premium XXL n’a pas besoin de préchauffage ; les guides Ninja n’ont pas été relus pour cette page.',
    },
  ],
};

export default preheat;

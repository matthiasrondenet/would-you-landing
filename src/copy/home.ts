import type { Localized } from './types.ts';

export interface Pair {
  a: [label: string, glyph: string];
  b: [label: string, glyph: string];
  /** Demo share of players picking A, only used to animate the phone. */
  p: number;
}

interface Topic {
  glyph: string;
  label: string;
}

interface Step {
  title: string;
  text: string;
}

interface Home {
  documentTitle: string;
  description: string;
  menu: string;
  playSmall: string;
  playBig: string;
  soon: string;
  eyebrowTag: string;
  eyebrow: string;
  h1Line1: string;
  h1Pre: string;
  h1A: string;
  h1Em: string;
  h1B: string;
  lede: string;
  meta: string[];
  phoneHint: string;
  phoneAll: string;
  phoneQuestion: string;
  phoneWith: (pct: number) => string;
  phoneOdd: (pct: number) => string;
  phoneTabs: string[];
  stickers: { xp: [string, string]; badge: [string, string]; friends: [string, string] };
  pairs: Pair[];
  howKicker: string;
  howTitle: string;
  howTitleEm: string;
  howLead: string;
  steps: Step[];
  featKicker: string;
  featTitle: string;
  featTitleEm: string;
  topicsTitle: string;
  topicsText: string;
  topics: Topic[];
  friendsTitle: string;
  friendsText: string;
  xpTitle: string;
  xpText: string;
  badgesTitle: string;
  badgesText: string;
  groupsTitle: string;
  groupsText: string;
  groupCode: string;
  finalTitle: string;
  finalEm: string;
  finalText: string;
  footTagline: string;
  footApp: string;
  footLegal: string;
  footContact: string;
  copy: string;
  copied: string;
  trademark: string;
}

const pairsEn: Pair[] = [
  { a: ['Pizza', '🍕'], b: ['Burger', '🍔'], p: 58 },
  { a: ['Beach', '🏖️'], b: ['Mountains', '🏔️'], p: 49 },
  { a: ['Cinema', '🎬'], b: ['Streaming', '📺'], p: 31 },
  { a: ['Fly', '🕊️'], b: ['Invisible', '👻'], p: 64 },
  { a: ['Cats', '🐱'], b: ['Dogs', '🐶'], p: 42 },
  { a: ['iOS', '🍎'], b: ['Android', '🤖'], p: 36 },
  { a: ['Star Wars', '🚀'], b: ['Star Trek', '🖖'], p: 68 },
  { a: ['Football', '⚽'], b: ['Basketball', '🏀'], p: 55 },
];

const pairsFr: Pair[] = [
  { a: ['Pizza', '🍕'], b: ['Burger', '🍔'], p: 58 },
  { a: ['Plage', '🏖️'], b: ['Montagne', '🏔️'], p: 49 },
  { a: ['Cinéma', '🎬'], b: ['Streaming', '📺'], p: 31 },
  { a: ['Voler', '🕊️'], b: ['Invisible', '👻'], p: 64 },
  { a: ['Chats', '🐱'], b: ['Chiens', '🐶'], p: 42 },
  { a: ['iOS', '🍎'], b: ['Android', '🤖'], p: 36 },
  { a: ['Star Wars', '🚀'], b: ['Star Trek', '🖖'], p: 68 },
  { a: ['Football', '⚽'], b: ['Basket', '🏀'], p: 55 },
];

export const home: Localized<Home> = {
  en: {
    documentTitle: 'Would You — The “would you rather” game',
    description:
      'Pick a side, see how everyone voted, compare with friends and collect badges. Would You is free on Android.',
    menu: 'Menu',
    playSmall: 'Get it on',
    playBig: 'Google Play',
    soon: 'Coming soon',
    eyebrowTag: 'New',
    eyebrow: 'Free on Android',
    h1Line1: 'Two choices.',
    h1Pre: 'One',
    h1A: 'swipe',
    h1Em: 'Zero',
    h1B: 'regrets',
    lede: 'The classic “would you rather” game. Pick a side, see how everyone else voted, and find out which friends really think like you.',
    meta: ['100% free', 'Just a nickname, no email', 'Play with friends and groups'],
    phoneHint: 'Tap a side to pick',
    phoneAll: 'All themes',
    phoneQuestion: 'Would you rather…',
    phoneWith: (pct) => `You’re with the ${pct}% 🎉`,
    phoneOdd: (pct) => `Odd one out! Only ${pct}% agree 🦄`,
    phoneTabs: ['Play', 'Friends', 'Groups', 'Profile'],
    stickers: {
      xp: ['+10 XP', 'for every answer'],
      badge: ['New badge', 'First answer 🎯'],
      friends: ['Friends’ picks', 'see who agreed'],
    },
    pairs: pairsEn,
    howKicker: 'How it works',
    howTitle: 'Ten seconds to play.',
    howTitleEm: 'Endless',
    howLead: 'No sign-up form, no tutorial. Choose a nickname and an avatar, then pick a side.',
    steps: [
      {
        title: 'Swipe your pick',
        text: 'Left or right. Beach or mountains. Trust your gut, no overthinking allowed.',
      },
      {
        title: 'See the split',
        text: 'Instantly see how everyone else voted. Are you with the crowd or the odd one out?',
      },
      {
        title: 'Compare with friends',
        text: 'Add friends by nickname and see who sided with you on every question.',
      },
    ],
    featKicker: 'Inside the app',
    featTitle: 'Small game.',
    featTitleEm: 'Big',
    topicsTitle: 'Seven themes, one tap each',
    topicsText: 'Stick to what you love, or play them all and let chaos decide.',
    topics: [
      { glyph: '🦸', label: 'Superpowers' },
      { glyph: '🍕', label: 'Food' },
      { glyph: '🐶', label: 'Pets' },
      { glyph: '✈️', label: 'Travel' },
      { glyph: '🎬', label: 'Movies' },
      { glyph: '💻', label: 'Technology' },
      { glyph: '⚽', label: 'Sports' },
    ],
    friendsTitle: 'Friends’ picks',
    friendsText:
      'Search a friend by nickname, send a request, and compare answers on every result.',
    xpTitle: 'Earn XP',
    xpText: 'Every answer is worth 10 XP, and badges add bonus XP on top.',
    badgesTitle: 'Collect badges',
    badgesText: 'Nine badges across answers, friends and groups. How many can you unlock?',
    groupsTitle: 'Play in groups',
    groupsText: 'Create a group, share the invite code or QR, and settle the debate together.',
    groupCode: 'Invite code',
    finalTitle: 'So…',
    finalEm: 'would you?',
    finalText:
      'The next question is waiting. It takes ten seconds, and you’ll have an opinion either way.',
    footTagline: 'Two choices. One swipe. Zero regrets.',
    footApp: 'App',
    footLegal: 'Legal',
    footContact: 'Contact',
    copy: 'Copy',
    copied: 'Copied ✓',
    trademark: 'Google Play and the Google Play logo are trademarks of Google LLC.',
  },
  fr: {
    documentTitle: 'Would You — Le jeu du « tu préfères ? »',
    description:
      'Choisissez un camp, voyez comment tout le monde a voté, comparez avec vos amis et collectionnez des badges. Would You est gratuit sur Android.',
    menu: 'Menu',
    playSmall: 'Disponible sur',
    playBig: 'Google Play',
    soon: 'Bientôt',
    eyebrowTag: 'Nouveau',
    eyebrow: 'Gratuit sur Android',
    h1Line1: 'Deux choix.',
    h1Pre: 'Un',
    h1A: 'swipe',
    h1Em: 'Zéro',
    h1B: 'regret',
    lede: 'Le grand classique du « tu préfères ? ». Choisissez un camp, voyez comment tout le monde a voté et découvrez quels amis pensent vraiment comme vous.',
    meta: ['100 % gratuit', 'Un pseudo, pas d’e-mail', 'Jouez entre amis et en groupe'],
    phoneHint: 'Touchez un côté pour choisir',
    phoneAll: 'Tous les thèmes',
    phoneQuestion: 'Tu préfères…',
    phoneWith: (pct) => `Vous êtes avec les ${pct} % 🎉`,
    phoneOdd: (pct) => `Seul contre tous ! Seulement ${pct} % sont d’accord 🦄`,
    phoneTabs: ['Jouer', 'Amis', 'Groupes', 'Profil'],
    stickers: {
      xp: ['+10 XP', 'à chaque réponse'],
      badge: ['Nouveau badge', 'Première réponse 🎯'],
      friends: ['Choix des amis', 'voyez qui est d’accord'],
    },
    pairs: pairsFr,
    howKicker: 'Comment ça marche',
    howTitle: 'Dix secondes pour jouer.',
    howTitleEm: 'Des débats',
    howLead: 'Pas de formulaire, pas de tutoriel. Choisissez un pseudo et un avatar, puis un camp.',
    steps: [
      {
        title: 'Swipez votre choix',
        text: 'À gauche ou à droite. Plage ou montagne. Fiez-vous à votre instinct, ne réfléchissez pas trop.',
      },
      {
        title: 'Voyez la répartition',
        text: 'Découvrez aussitôt comment les autres ont voté. Êtes-vous avec la foule ou tout seul ?',
      },
      {
        title: 'Comparez avec vos amis',
        text: 'Ajoutez des amis par pseudo et voyez qui pense comme vous sur chaque question.',
      },
    ],
    featKicker: 'Dans l’app',
    featTitle: 'Petit jeu.',
    featTitleEm: 'Grandes',
    topicsTitle: 'Sept thèmes, un tap chacun',
    topicsText: 'Restez sur ce que vous aimez, ou jouez-les tous et laissez le hasard décider.',
    topics: [
      { glyph: '🦸', label: 'Super-pouvoirs' },
      { glyph: '🍕', label: 'Cuisine' },
      { glyph: '🐶', label: 'Animaux' },
      { glyph: '✈️', label: 'Voyage' },
      { glyph: '🎬', label: 'Cinéma' },
      { glyph: '💻', label: 'Technologie' },
      { glyph: '⚽', label: 'Sport' },
    ],
    friendsTitle: 'Le choix des amis',
    friendsText:
      'Cherchez un ami par pseudo, envoyez une demande et comparez vos réponses à chaque résultat.',
    xpTitle: 'Gagnez de l’XP',
    xpText: 'Chaque réponse rapporte 10 XP, et les badges ajoutent de l’XP en bonus.',
    badgesTitle: 'Collectionnez les badges',
    badgesText:
      'Neuf badges autour des réponses, des amis et des groupes. Combien en débloquerez-vous ?',
    groupsTitle: 'Jouez en groupe',
    groupsText:
      'Créez un groupe, partagez le code d’invitation ou le QR, et tranchez le débat ensemble.',
    groupCode: 'Code d’invitation',
    finalTitle: 'Alors…',
    finalEm: 'tu préfères ?',
    finalText:
      'La prochaine question vous attend. Dix secondes, et vous aurez un avis dans tous les cas.',
    footTagline: 'Deux choix. Un swipe. Zéro regret.',
    footApp: 'App',
    footLegal: 'Mentions légales',
    footContact: 'Contact',
    copy: 'Copier',
    copied: 'Copié ✓',
    trademark: 'Google Play et le logo Google Play sont des marques de Google LLC.',
  },
};

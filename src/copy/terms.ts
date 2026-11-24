import type { DocCopy, Localized } from './types.ts';

export const terms: Localized<DocCopy> = {
  en: {
    documentTitle: 'Terms of use — Would You',
    description: 'The rules for using Would You, the “would you rather” game.',
    eyebrow: 'Legal',
    title: 'Terms of use',
    lead: 'The rules for using Would You, in plain words.',
    tocLabel: 'On this page',
    updated: 'Last updated',
    blocks: [
      {
        id: 'agreement',
        title: 'Who these terms are for',
        paragraphs: [
          'These terms are a contract between you and YASD, the publisher of Would You. By using the app you accept them. Would You is made for players aged 11 and over; under 15, a parent or guardian should agree to its use.',
        ],
      },
      {
        id: 'use',
        title: 'Using Would You',
        items: [
          'What it does :: Would You lets you answer “would you rather” questions, see how others answered, compare with friends, join groups and earn XP and badges.',
          'Your nickname :: Choose a nickname and avatar that are not offensive, hateful or impersonating someone else. We may change or remove ones that are.',
          'Fair use :: Do not cheat, use bots, overload the service or try to get around its limits.',
          'Respect :: Do not harass other players through friend requests or groups.',
        ],
      },
      {
        id: 'account',
        title: 'Your account and recovery code',
        paragraphs: [
          'Your account is protected by a recovery code shown in the app. Keep it private: whoever has it can use your account, and we cannot recover it for you if it is lost. You can ask us to delete your account at any time from the “Delete your account” page of this website.',
        ],
      },
      {
        id: 'content',
        title: 'The content',
        paragraphs: [
          'Questions, answers and results are provided for fun. Results are only the totals of what players picked and are not scientific. The app, its design, its code and its name belong to YASD.',
        ],
      },
      {
        id: 'service',
        title: 'The service',
        paragraphs: [
          'We provide Would You free of charge. It may be slow or unavailable at times. We may change, pause or stop it, and we may restrict access when someone seriously or repeatedly breaks these terms.',
        ],
      },
      {
        id: 'liability',
        title: 'Our responsibility',
        paragraphs: [
          'We provide Would You with reasonable care but “as is”. As far as the law allows, we are not liable for indirect losses. Nothing in these terms limits rights you cannot lose under the law, including those of consumers.',
        ],
      },
      {
        id: 'law',
        title: 'Law and disputes',
        paragraphs: [
          'These terms are governed by French law. Residents of the European Union keep the mandatory protections of their own country. Please write to hello@yasd.io first so we can try to sort things out.',
        ],
      },
    ],
  },
  fr: {
    documentTitle: 'Conditions d’utilisation — Would You',
    description: 'Les règles d’utilisation de Would You, le jeu du « tu préfères ? ».',
    eyebrow: 'Mentions légales',
    title: 'Conditions d’utilisation',
    lead: 'Les règles d’utilisation de Would You, en mots simples.',
    tocLabel: 'Sur cette page',
    updated: 'Dernière mise à jour',
    blocks: [
      {
        id: 'agreement',
        title: 'À qui s’adressent ces conditions',
        paragraphs: [
          'Ces conditions forment un contrat entre vous et YASD, l’éditeur de Would You. En utilisant l’application, vous les acceptez. Would You est conçu pour les joueurs de 11 ans et plus ; avant 15 ans, un parent ou tuteur doit être d’accord avec son usage.',
        ],
      },
      {
        id: 'use',
        title: 'Utiliser Would You',
        items: [
          'Ce que fait l’app :: Would You permet de répondre à des questions « tu préfères ? », de voir les réponses des autres, de comparer avec ses amis, de rejoindre des groupes et de gagner de l’XP et des badges.',
          'Votre pseudo :: Choisissez un pseudo et un avatar qui ne soient ni offensants, ni haineux, ni usurpateurs. Nous pouvons modifier ou retirer ceux qui le sont.',
          'Usage loyal :: Ne trichez pas, n’utilisez pas de robots, ne surchargez pas le service et ne cherchez pas à contourner ses limites.',
          'Respect :: Ne harcelez pas d’autres joueurs via les demandes d’amis ou les groupes.',
        ],
      },
      {
        id: 'account',
        title: 'Votre compte et le code de récupération',
        paragraphs: [
          'Votre compte est protégé par un code de récupération affiché dans l’application. Gardez-le secret : celui qui le possède peut utiliser votre compte, et nous ne pouvons pas le retrouver s’il est perdu. Vous pouvez demander la suppression de votre compte à tout moment depuis la page « Supprimer votre compte » de ce site.',
        ],
      },
      {
        id: 'content',
        title: 'Le contenu',
        paragraphs: [
          'Les questions, réponses et résultats sont fournis pour le plaisir. Les résultats ne sont que les totaux des choix des joueurs et n’ont rien de scientifique. L’application, son design, son code et son nom appartiennent à YASD.',
        ],
      },
      {
        id: 'service',
        title: 'Le service',
        paragraphs: [
          'Nous fournissons Would You gratuitement. Il peut être lent ou indisponible par moments. Nous pouvons le modifier, le suspendre ou l’arrêter, et restreindre l’accès quand quelqu’un enfreint ces conditions de façon grave ou répétée.',
        ],
      },
      {
        id: 'liability',
        title: 'Notre responsabilité',
        paragraphs: [
          'Nous fournissons Would You avec un soin raisonnable, mais « en l’état ». Dans la mesure permise par la loi, nous ne sommes pas responsables des pertes indirectes. Rien dans ces conditions ne limite les droits que la loi ne permet pas de perdre, notamment ceux des consommateurs.',
        ],
      },
      {
        id: 'law',
        title: 'Droit applicable et litiges',
        paragraphs: [
          'Ces conditions sont régies par le droit français. Les résidents de l’Union européenne gardent les protections impératives de leur pays. Écrivez d’abord à hello@yasd.io pour que nous essayions de régler les choses.',
        ],
      },
    ],
  },
};

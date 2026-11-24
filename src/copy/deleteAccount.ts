import type { Localized } from './types.ts';

interface DeleteCopy {
  documentTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  lead: string;
  stepsKicker: string;
  stepsTitle: string;
  steps: string[];
  stepsNote: string;
  emailText: string;
  template: string;
  deletedTitle: string;
  deleted: string[];
  keptTitle: string;
  kept: string[];
  closing: string;
}

export const deleteAccount: Localized<DeleteCopy> = {
  en: {
    documentTitle: 'Delete your account — Would You',
    description: 'How to delete your Would You account and what happens to your data.',
    eyebrow: 'Account & data',
    title: 'Delete your Would You account',
    lead: 'You can ask us to delete your account and the data linked to it at any time. Just send us an email.',
    stepsKicker: 'How it works',
    stepsTitle: 'By email',
    steps: [
      'Send an email to the address below with the subject “Delete my Would You account”.',
      'Tell us your nickname, as shown in the app.',
      'We reply to explain how to confirm the account is yours. Never send your recovery code in the first email.',
      'Once confirmed, we delete the account and tell you when it is done.',
    ],
    stepsNote: 'We reply within a few days and finish the deletion within 30 days.',
    emailText: 'Our address',
    template:
      'Subject: Delete my Would You account\nMy nickname: …\nPlease delete my account and its data.',
    deletedTitle: 'What gets deleted',
    deleted: [
      'Your nickname, avatar and recovery code',
      'Your answers, XP and badges',
      'Your friends list and friend requests',
      'Your group memberships and the groups you own',
    ],
    keptTitle: 'What is not affected',
    kept: [
      'Anonymous vote totals: they can no longer be linked to you',
      'Short-term server logs, which expire on their own',
    ],
    closing:
      'Deletion cannot be undone, and a new account starts from zero. Details are in the privacy policy.',
  },
  fr: {
    documentTitle: 'Supprimer votre compte — Would You',
    description: 'Comment supprimer votre compte Would You et ce qui arrive à vos données.',
    eyebrow: 'Compte et données',
    title: 'Supprimer votre compte Would You',
    lead: 'Vous pouvez nous demander à tout moment de supprimer votre compte et les données qui y sont liées. Il suffit de nous écrire.',
    stepsKicker: 'Comment faire',
    stepsTitle: 'Par e-mail',
    steps: [
      'Envoyez un e-mail à l’adresse ci-dessous avec l’objet « Supprimer mon compte Would You ».',
      'Indiquez-nous votre pseudo, tel qu’il apparaît dans l’app.',
      'Nous vous répondons pour vous expliquer comment confirmer que le compte est bien le vôtre. N’envoyez jamais votre code de récupération dans le premier e-mail.',
      'Une fois confirmé, nous supprimons le compte et vous prévenons quand c’est fait.',
    ],
    stepsNote: 'Nous répondons sous quelques jours et terminons la suppression sous 30 jours.',
    emailText: 'Notre adresse',
    template:
      'Objet : Supprimer mon compte Would You\nMon pseudo : …\nMerci de supprimer mon compte et ses données.',
    deletedTitle: 'Ce qui est supprimé',
    deleted: [
      'Votre pseudo, votre avatar et votre code de récupération',
      'Vos réponses, votre XP et vos badges',
      'Votre liste d’amis et vos demandes d’amis',
      'Vos appartenances à des groupes et les groupes dont vous êtes propriétaire',
    ],
    keptTitle: 'Ce qui n’est pas touché',
    kept: [
      'Les totaux de votes anonymes : ils ne peuvent plus être rattachés à vous',
      'Les journaux serveur de courte durée, qui expirent d’eux-mêmes',
    ],
    closing:
      'La suppression est définitive, et un nouveau compte repart de zéro. Le détail est dans la politique de confidentialité.',
  },
};

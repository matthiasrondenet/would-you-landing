import type { DocCopy, Localized } from './types.ts';

export const privacy: Localized<DocCopy> = {
  en: {
    documentTitle: 'Privacy policy — Would You',
    description: 'What data Would You collects, why, who receives it and how you can delete it.',
    eyebrow: 'Legal',
    title: 'Privacy policy',
    lead: 'Would You is a “would you rather” game. There is no email, phone number or real name to give. Here is exactly what we keep, why, and who can see it.',
    tocLabel: 'On this page',
    updated: 'Last updated',
    tldr: {
      id: 'summary',
      title: 'The short version',
      items: [
        'No email, real name, phone number or location. You pick a nickname and an avatar.',
        'No ads, no analytics, no advertising id, and we never sell data.',
        'Your friends and group members can see your answers. Public results are only totals.',
        'You can ask us to delete your account and its data at any time.',
      ],
    },
    blocks: [
      {
        id: 'who',
        title: 'Who we are',
        paragraphs: [
          'Would You is published by YASD, which is responsible for the personal data handled through the app and this website. You can reach us at hello@yasd.io.',
          'This policy covers the Would You app on Android and this website.',
        ],
      },
      {
        id: 'collect',
        title: 'What our server keeps',
        paragraphs: ['This is what our server stores when you use the app.'],
        table: {
          head: ['Data', 'What it is and why', 'Kept for'],
          rows: [
            [
              'Nickname and avatar',
              'The nickname and the avatar you choose when you start. They let friends find you and recognise you.',
              'Until the account is deleted',
            ],
            [
              'Recovery code',
              'A short code generated for you. It is your only way to get back into your account on a new phone, so keep it private.',
              'Until the account is deleted',
            ],
            [
              'Your answers',
              'Which side you picked on each question, to compute results, XP and badges, and to compare with friends and groups.',
              'Until the account is deleted',
            ],
            [
              'Friends and groups',
              'Friend requests, your friends list, the groups you created or joined, their invite codes and your role.',
              'Until you remove them or delete the account',
            ],
            [
              'XP and badges',
              'Your experience points and the badges you unlocked.',
              'Until the account is deleted',
            ],
            [
              'Technical data',
              'Your IP address and request logs, used to protect the service from abuse (rate limiting) and to fix bugs.',
              'Short-term server logs',
            ],
          ],
        },
        after: [
          'We do not collect your email, real name, phone number, contacts, photos, precise location or microphone data.',
        ],
      },
      {
        id: 'device',
        title: 'What stays on your phone',
        items: [
          'Sign-in token :: kept in the secure storage of your phone so you stay signed in.',
          'Camera :: only used when you scan a group QR code. Images are processed on the phone and never sent to us.',
          'Theme choice :: your light or dark preference stays on the phone.',
        ],
      },
      {
        id: 'use',
        title: 'How we use it',
        items: [
          'To run the game :: show questions, count votes, give XP and badges.',
          'To power the social features :: friends, comparisons and groups.',
          'To protect the service :: limit abuse and fix technical problems.',
        ],
        after: [
          'Public results are totals only, like “58% picked Pizza”. Nobody outside your friends and your groups can see what you picked.',
        ],
      },
      {
        id: 'share',
        title: 'Who receives it',
        paragraphs: [
          'We never sell your data and we use no advertising or analytics service. Our server and its PostgreSQL database are run by a hosting provider (Railway) that processes the data only on our behalf. Your nickname, avatar and answers are visible to the friends and group members you chose to connect with.',
        ],
      },
      {
        id: 'keep',
        title: 'How long we keep it',
        paragraphs: [
          'We keep your data while your account exists. When it is deleted, the account, its answers, friends, groups memberships and badges are erased within 30 days. Server logs are kept for a short period only.',
        ],
      },
      {
        id: 'rights',
        title: 'Your rights',
        paragraphs: [
          'Under the GDPR you can access, correct, export or delete your data, and object to some processing. Write to hello@yasd.io and we reply within 30 days. You can also complain to your data protection authority (in France, the CNIL).',
          'To delete your account, see the “Delete your account” page of this website.',
        ],
      },
      {
        id: 'kids',
        title: 'Young players',
        paragraphs: [
          'Would You is made for players aged 11 and over. Because we collect so little, no email or real name is ever needed. Under 15, a parent or guardian should agree to the use of the app. If you think a child gave us data without permission, write to us and we will delete it.',
        ],
      },
      {
        id: 'security',
        title: 'Security',
        paragraphs: [
          'Data travels over HTTPS and access to the server is restricted. No system is perfect, so keep your recovery code private.',
        ],
      },
      {
        id: 'changes',
        title: 'Changes to this policy',
        paragraphs: [
          'If we make meaningful changes, we update the date at the top of this page and tell you in the app.',
        ],
      },
    ],
  },
  fr: {
    documentTitle: 'Politique de confidentialité — Would You',
    description:
      'Les données que Would You collecte, pourquoi, qui les reçoit et comment les supprimer.',
    eyebrow: 'Mentions légales',
    title: 'Politique de confidentialité',
    lead: 'Would You est un jeu du « tu préfères ? ». Aucun e-mail, numéro de téléphone ou vrai nom à fournir. Voici précisément ce que nous gardons, pourquoi, et qui peut le voir.',
    tocLabel: 'Sur cette page',
    updated: 'Dernière mise à jour',
    tldr: {
      id: 'summary',
      title: 'En bref',
      items: [
        'Pas d’e-mail, de vrai nom, de numéro de téléphone ni de localisation. Vous choisissez un pseudo et un avatar.',
        'Pas de publicité, pas d’analyse d’audience, pas d’identifiant publicitaire, et nous ne vendons jamais de données.',
        'Vos amis et les membres de vos groupes voient vos réponses. Les résultats publics ne sont que des totaux.',
        'Vous pouvez demander la suppression de votre compte et de ses données à tout moment.',
      ],
    },
    blocks: [
      {
        id: 'who',
        title: 'Qui sommes-nous',
        paragraphs: [
          'Would You est publié par YASD, responsable des données personnelles traitées via l’application et ce site. Vous pouvez nous écrire à hello@yasd.io.',
          'Cette politique couvre l’application Would You sur Android et ce site.',
        ],
      },
      {
        id: 'collect',
        title: 'Ce que notre serveur garde',
        paragraphs: ['Voici ce que notre serveur enregistre quand vous utilisez l’application.'],
        table: {
          head: ['Donnée', 'De quoi il s’agit et pourquoi', 'Conservée'],
          rows: [
            [
              'Pseudo et avatar',
              'Le pseudo et l’avatar choisis au démarrage. Ils permettent à vos amis de vous trouver et de vous reconnaître.',
              'Jusqu’à la suppression du compte',
            ],
            [
              'Code de récupération',
              'Un court code généré pour vous. C’est le seul moyen de retrouver votre compte sur un nouveau téléphone : gardez-le secret.',
              'Jusqu’à la suppression du compte',
            ],
            [
              'Vos réponses',
              'Le côté choisi à chaque question, pour calculer les résultats, l’XP et les badges, et pour comparer avec vos amis et vos groupes.',
              'Jusqu’à la suppression du compte',
            ],
            [
              'Amis et groupes',
              'Les demandes d’amis, votre liste d’amis, les groupes créés ou rejoints, leurs codes d’invitation et votre rôle.',
              'Jusqu’à ce que vous les retiriez ou supprimiez le compte',
            ],
            [
              'XP et badges',
              'Vos points d’expérience et les badges débloqués.',
              'Jusqu’à la suppression du compte',
            ],
            [
              'Données techniques',
              'Votre adresse IP et les journaux de requêtes, utilisés pour protéger le service contre les abus (limitation de débit) et corriger les bugs.',
              'Journaux serveur de courte durée',
            ],
          ],
        },
        after: [
          'Nous ne collectons ni votre e-mail, ni votre vrai nom, ni votre numéro de téléphone, ni vos contacts, photos, localisation précise ou micro.',
        ],
      },
      {
        id: 'device',
        title: 'Ce qui reste sur votre téléphone',
        items: [
          'Jeton de connexion :: gardé dans le stockage sécurisé du téléphone pour rester connecté.',
          'Caméra :: utilisée uniquement pour scanner le QR code d’un groupe. Les images sont traitées sur le téléphone et jamais envoyées.',
          'Thème :: votre préférence clair ou sombre reste sur le téléphone.',
        ],
      },
      {
        id: 'use',
        title: 'Comment nous les utilisons',
        items: [
          'Faire fonctionner le jeu :: afficher les questions, compter les votes, donner l’XP et les badges.',
          'Alimenter les fonctions sociales :: amis, comparaisons et groupes.',
          'Protéger le service :: limiter les abus et corriger les problèmes techniques.',
        ],
        after: [
          'Les résultats publics sont de simples totaux, comme « 58 % ont choisi Pizza ». Personne en dehors de vos amis et de vos groupes ne voit ce que vous avez choisi.',
        ],
      },
      {
        id: 'share',
        title: 'Qui les reçoit',
        paragraphs: [
          'Nous ne vendons jamais vos données et n’utilisons aucun service de publicité ou d’analyse d’audience. Notre serveur et sa base PostgreSQL sont exploités par un hébergeur (Railway) qui traite les données uniquement pour notre compte. Votre pseudo, votre avatar et vos réponses sont visibles des amis et membres de groupes avec qui vous avez choisi de vous connecter.',
        ],
      },
      {
        id: 'keep',
        title: 'Combien de temps nous les gardons',
        paragraphs: [
          'Nous gardons vos données tant que votre compte existe. À sa suppression, le compte, ses réponses, ses amis, ses appartenances à des groupes et ses badges sont effacés sous 30 jours. Les journaux serveur ne sont gardés que peu de temps.',
        ],
      },
      {
        id: 'rights',
        title: 'Vos droits',
        paragraphs: [
          'Selon le RGPD, vous pouvez accéder à vos données, les corriger, les exporter ou les supprimer, et vous opposer à certains traitements. Écrivez à hello@yasd.io, nous répondons sous 30 jours. Vous pouvez aussi saisir votre autorité de protection des données (en France, la CNIL).',
          'Pour supprimer votre compte, consultez la page « Supprimer votre compte » de ce site.',
        ],
      },
      {
        id: 'kids',
        title: 'Jeunes joueurs',
        paragraphs: [
          'Would You est conçu pour les joueurs de 11 ans et plus. Comme nous collectons très peu, aucun e-mail ni vrai nom n’est jamais demandé. Avant 15 ans, un parent ou tuteur doit être d’accord avec l’usage de l’application. Si vous pensez qu’un enfant nous a transmis des données sans autorisation, écrivez-nous et nous les supprimerons.',
        ],
      },
      {
        id: 'security',
        title: 'Sécurité',
        paragraphs: [
          'Les données circulent en HTTPS et l’accès au serveur est restreint. Aucun système n’est parfait : gardez votre code de récupération secret.',
        ],
      },
      {
        id: 'changes',
        title: 'Modifications de cette politique',
        paragraphs: [
          'En cas de changement important, nous mettons à jour la date en haut de cette page et vous prévenons dans l’application.',
        ],
      },
    ],
  },
};

import type { Localized } from './types.ts';

interface Common {
  skip: string;
  mainNav: string;
  navHow: string;
  navFeatures: string;
  navPrivacy: string;
  getApp: string;
  privacy: string;
  terms: string;
  deleteAccount: string;
  homeLabel: string;
  langGroup: string;
}

export const common: Localized<Common> = {
  en: {
    skip: 'Skip to content',
    mainNav: 'Main',
    navHow: 'How it works',
    navFeatures: 'Features',
    navPrivacy: 'Privacy',
    getApp: 'Get the app',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    deleteAccount: 'Delete your account',
    homeLabel: 'Would You home',
    langGroup: 'Language',
  },
  fr: {
    skip: 'Aller au contenu',
    mainNav: 'Principale',
    navHow: 'Comment ça marche',
    navFeatures: 'Fonctionnalités',
    navPrivacy: 'Confidentialité',
    getApp: 'Obtenir l’app',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
    deleteAccount: 'Supprimer votre compte',
    homeLabel: 'Accueil Would You',
    langGroup: 'Langue',
  },
};

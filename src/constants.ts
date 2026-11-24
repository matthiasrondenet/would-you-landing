export const DEVELOPER = 'YASD';
export const BASE = import.meta.env.BASE_URL;

// Set VITE_PLAY_URL at build time once the Play listing is live. While empty, the site shows a "coming soon" badge.
export const PLAY_URL = (import.meta.env.VITE_PLAY_URL as string | undefined) ?? '';

export const SUPPORT_EMAIL = 'hello@yasd.io';
export const LAST_UPDATED = { en: 'November 24, 2026', fr: '24 novembre 2026' } as const;

export const PATHS = {
  home: BASE,
  privacy: `${BASE}privacy/`,
  terms: `${BASE}terms/`,
  deleteAccount: `${BASE}delete-account/`,
} as const;

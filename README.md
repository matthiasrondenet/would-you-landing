# Would You — landing page

Vite + React + TypeScript site for the Would You Android app (the “would you rather” game). Four static pages, in English and French (the language follows the browser, with an EN/FR switch):

- `/` home, with a playable demo of the swipe card
- `/privacy/` privacy policy
- `/terms/` terms of use
- `/delete-account/` account deletion, the URL to give to Google Play

Light and dark themes follow the system setting. Same stack and structure as `poof-landing`.

## Commands

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build into dist/
npm run lint
```

## Content

All text lives in `src/copy/` (`home.ts`, `privacy.ts`, `terms.ts`, `deleteAccount.ts`, `common.ts`), one object per language. Contact email and last-updated date are in `src/constants.ts`.

When the app changes what it collects (see `would-you/back`), update `src/copy/privacy.ts` and `src/copy/deleteAccount.ts` together.

## Before going live

- Have the privacy policy and the terms checked by a lawyer. They are drafts based on what the app does today (nickname, avatar, recovery code, answers, friends, groups; no email, no analytics, no ads).
- The app has no in-app account deletion yet: the delete page is email-only. Add it to the app, then update `src/copy/deleteAccount.ts`.
- Set `VITE_PLAY_URL` at build time once the Play listing exists. Until then the Play badge shows “Coming soon”.
- Check `SUPPORT_EMAIL` and `LAST_UPDATED` in `src/constants.ts`, and the hosting provider named in the privacy policy.
- Replace `public/assets/icon.png` / `favicon.png` if the store icon changes.

## Deployment

Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`) with `VITE_BASE=/`, for the custom domain `would-you.yasd.io` (CNAME → `matthiasrondenet.github.io`, custom domain set in the repo's Pages settings).

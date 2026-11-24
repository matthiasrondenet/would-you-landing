import type React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/fraunces';
import '@fontsource-variable/fraunces/wght-italic.css';
import '@fontsource-variable/nunito';
import './index.css';
import { DeleteAccount } from './components/DeleteAccount.tsx';
import { Home } from './components/Home.tsx';
import { Privacy, Terms } from './components/Policies.tsx';
import { I18nProvider } from './i18n.tsx';

const pages: Record<string, React.FC> = {
  home: Home,
  privacy: Privacy,
  terms: Terms,
  'delete-account': DeleteAccount,
};

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');
const Page = pages[document.body.dataset.page ?? 'home'] ?? Home;

createRoot(root).render(
  <StrictMode>
    <I18nProvider>
      <Page />
    </I18nProvider>
  </StrictMode>
);

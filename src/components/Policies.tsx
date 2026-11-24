import React from 'react';
import { privacy } from '../copy/privacy.ts';
import { terms } from '../copy/terms.ts';
import { useI18n } from '../i18n.tsx';
import { DocPage } from './DocPage.tsx';

export const Privacy: React.FC = () => {
  const { lang } = useI18n();
  return <DocPage copy={privacy[lang]} />;
};

export const Terms: React.FC = () => {
  const { lang } = useI18n();
  return <DocPage copy={terms[lang]} />;
};

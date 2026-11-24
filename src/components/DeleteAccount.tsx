import React from 'react';
import { PATHS, SUPPORT_EMAIL } from '../constants.ts';
import { common } from '../copy/common.ts';
import { deleteAccount } from '../copy/deleteAccount.ts';
import { home } from '../copy/home.ts';
import { useI18n } from '../i18n.tsx';
import { useDocumentMeta } from '../useDocumentMeta.ts';
import { CopyButton } from './CopyButton.tsx';
import { LegalHero } from './DocPage.tsx';
import { Layout } from './Layout.tsx';

export const DeleteAccount: React.FC = () => {
  const { lang } = useI18n();
  const t = deleteAccount[lang];
  const c = common[lang];
  const h = home[lang];
  useDocumentMeta(t.documentTitle, t.description);

  return (
    <Layout>
      <LegalHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <div className="legal">
        <div className="wrap single">
          <article className="doc">
            <section className="delete-card" id="delete-account">
              <div className="del-ways">
                <div className="del-way">
                  <span className="eyebrow">{t.stepsKicker}</span>
                  <h3>{t.stepsTitle}</h3>
                  <ol>
                    {t.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <p className="muted">{t.stepsNote}</p>
                </div>
                <div className="del-way">
                  <span className="eyebrow">{t.emailText}</span>
                  <div className="copy-row">
                    <code>{SUPPORT_EMAIL}</code>
                    <CopyButton text={SUPPORT_EMAIL} label={h.copy} doneLabel={h.copied} />
                  </div>
                  <pre className="template">{t.template}</pre>
                </div>
              </div>
            </section>

            <div className="two-col">
              <div className="callout">
                <h3>{t.deletedTitle}</h3>
                <ul>
                  {t.deleted.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="callout">
                <h3>{t.keptTitle}</h3>
                <ul>
                  {t.kept.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="muted">
              {t.closing} <a href={PATHS.privacy}>{c.privacy}</a>
            </p>
          </article>
        </div>
      </div>
    </Layout>
  );
};

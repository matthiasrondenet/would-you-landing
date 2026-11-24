import React, { useEffect, useState } from 'react';
import { LAST_UPDATED, PATHS } from '../constants.ts';
import { common } from '../copy/common.ts';
import type { DocCopy } from '../copy/types.ts';
import { useI18n } from '../i18n.tsx';
import { useDocumentMeta } from '../useDocumentMeta.ts';
import { Layout } from './Layout.tsx';
import { Rich } from './Rich.tsx';

export const LegalHero: React.FC<{
  eyebrow: string;
  title: string;
  lead: string;
  meta?: string;
}> = ({ eyebrow, title, lead, meta }) => (
  <section className="legal-hero">
    <div className="wrap">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p className="lede wide-lede">{lead}</p>
      {meta && (
        <div className="meta">
          <span className="chip">{meta}</span>
        </div>
      )}
    </div>
  </section>
);

const TLDR_TONES = ['tone-peach', 'tone-mint', 'tone-sun', 'tone-peach'] as const;
const TLDR_GLYPHS = ['🙈', '🚫', '👥', '🗑️'] as const;

export const DocPage: React.FC<{ copy: DocCopy }> = ({ copy }) => {
  const { lang } = useI18n();
  const c = common[lang];
  const [active, setActive] = useState('');
  useDocumentMeta(copy.documentTitle, copy.description);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.doc section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
    };
  }, [copy]);

  const toc = [
    ...(copy.tldr ? [{ id: copy.tldr.id, title: copy.tldr.title }] : []),
    ...copy.blocks.map((block) => ({ id: block.id, title: block.title })),
  ];

  return (
    <Layout>
      <LegalHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        lead={copy.lead}
        meta={`${copy.updated} : ${LAST_UPDATED[lang]}`}
      />
      <div className="legal">
        <div className="wrap">
          <nav className="toc" aria-label={copy.tocLabel}>
            <h4>{copy.tocLabel}</h4>
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? 'on' : undefined}
              >
                {item.title}
              </a>
            ))}
            <a href={PATHS.deleteAccount} className="del">
              {c.deleteAccount} →
            </a>
          </nav>
          <article className="doc">
            {copy.tldr && (
              <section className="tldr" id={copy.tldr.id}>
                <h2>{copy.tldr.title}</h2>
                <div className="tldr-grid">
                  {copy.tldr.items.map((item, i) => (
                    <div key={item} className="tldr-item">
                      <span className={`ic ${TLDR_TONES[i] ?? ''}`}>
                        <span aria-hidden="true">{TLDR_GLYPHS[i] ?? '✓'}</span>
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
            {copy.blocks.map((block, index) => (
              <section key={block.id} id={block.id}>
                <h2>
                  <span className="n">{String(index + 1).padStart(2, '0')}</span>
                  {block.title}
                </h2>
                {block.paragraphs?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {block.table && (
                  <div className="tbl">
                    <table>
                      <thead>
                        <tr>
                          {block.table.head.map((h) => (
                            <th key={h}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.table.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell) => (
                              <td key={cell}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {block.items && (
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>
                        <Rich text={item} />
                      </li>
                    ))}
                  </ul>
                )}
                {block.after?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </Layout>
  );
};

import React from 'react';
import { common } from '../copy/common.ts';
import { home } from '../copy/home.ts';
import { useI18n } from '../i18n.tsx';
import { useDocumentMeta } from '../useDocumentMeta.ts';
import { Layout, PlayBadge } from './Layout.tsx';
import { Phone } from './Phone.tsx';

const HUES = [14, 200, 160, 320];
const AVATARS = ['M', 'J', 'P', 'S'];

const Avatar: React.FC<{ hue: number; letter: string; size?: number }> = ({
  hue,
  letter,
  size,
}) => (
  <span
    className="av"
    style={{
      width: size,
      height: size,
      background: `oklch(82% 0.1 ${hue})`,
      color: `oklch(35% 0.08 ${hue})`,
    }}
  >
    {letter}
  </span>
);

const BADGES = [
  { glyph: '🎯', tone: 'var(--left)', locked: false },
  { glyph: '🔥', tone: 'var(--right)', locked: false },
  { glyph: '👥', tone: 'var(--left)', locked: false },
  { glyph: '🏆', tone: 'var(--right)', locked: true },
];

export const Home: React.FC = () => {
  const { lang } = useI18n();
  const t = home[lang];
  const c = common[lang];
  useDocumentMeta(t.documentTitle, t.description);
  const ticker = t.pairs.map((p) => (
    <div className="pair" key={p.a[0]}>
      <span className="x">
        {p.a[1]} {p.a[0]}
      </span>
      <em>{lang === 'fr' ? 'ou' : 'or'}</em>
      <span className="y">
        {p.b[1]} {p.b[0]}
      </span>
    </div>
  ));

  return (
    <Layout home>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">
              <i>{t.eyebrowTag}</i>
              {t.eyebrow}
            </span>
            <h1>
              {t.h1Line1}
              <br />
              {t.h1Pre} <span className="hl-a">{t.h1A}</span>.<br />
              <em>{t.h1Em}</em> <span className="hl-b">{t.h1B}</span>.
            </h1>
            <p className="lede">{t.lede}</p>
            <div className="cta-row" id="download">
              <PlayBadge />
            </div>
            <ul className="meta">
              {t.meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="stage">
            <div className="sticker s1">
              <span aria-hidden="true">⭐</span>
              <span>
                {t.stickers.xp[0]}
                <small>{t.stickers.xp[1]}</small>
              </span>
            </div>
            <div className="sticker s2">
              <span className="avs" aria-hidden="true">
                <Avatar hue={14} letter="M" />
                <Avatar hue={200} letter="J" />
              </span>
              <span>
                {t.stickers.friends[0]}
                <small>{t.stickers.friends[1]}</small>
              </span>
            </div>
            <div className="sticker s3">
              <span aria-hidden="true">🏅</span>
              <span>
                {t.stickers.badge[0]}
                <small>{t.stickers.badge[1]}</small>
              </span>
            </div>
            <Phone />
          </div>
        </div>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {ticker}
            {ticker}
          </div>
        </div>
      </section>

      <section className="block" id="how">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">{t.howKicker}</div>
            <h2>
              {t.howTitle} <em>{t.howTitleEm}</em> {lang === 'fr' ? 'sans fin.' : 'arguments.'}
            </h2>
            <p>{t.howLead}</p>
          </div>
          <div className="steps">
            {t.steps.map((step, i) => (
              <div className="step" key={step.title}>
                <div className="viz">
                  {i === 0 && (
                    <div className="mini-swipe" aria-hidden="true">
                      <div style={{ background: 'var(--left)', transform: 'rotate(-6deg)' }}>
                        🏖️
                      </div>
                      <div style={{ background: 'var(--right)', transform: 'rotate(6deg)' }}>
                        🏔️
                      </div>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="bar" aria-hidden="true">
                      <div className="row">
                        🏖️
                        <div className="track">
                          <i style={{ width: '49%', background: 'var(--left)' }} />
                        </div>
                        49%
                      </div>
                      <div className="row">
                        🏔️
                        <div className="track">
                          <i style={{ width: '51%', background: 'var(--right)' }} />
                        </div>
                        51%
                      </div>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="match" aria-hidden="true">
                      <div className="avs">
                        {AVATARS.slice(0, 3).map((letter, k) => (
                          <Avatar key={letter} hue={HUES[k] ?? 14} letter={letter} size={44} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="n">{String(i + 1).padStart(2, '0')}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block flush" id="features">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">{t.featKicker}</div>
            <h2>
              {t.featTitle} <em>{t.featTitleEm}</em> opinions.
            </h2>
          </div>
          <div className="bento">
            <div className="tile t-topics">
              <h3>{t.topicsTitle}</h3>
              <p>{t.topicsText}</p>
              <div className="topic-grid">
                {t.topics.map((topic) => (
                  <span className="topic" key={topic.label}>
                    <span aria-hidden="true">{topic.glyph}</span>
                    {topic.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="tile t-friends">
              <h3>{t.friendsTitle}</h3>
              <p>{t.friendsText}</p>
              <div className="friend-list" aria-hidden="true">
                {[
                  ['Maya', 14],
                  ['Jonas', 200],
                  ['Priya', 320],
                ].map(([name, hue]) => (
                  <div className="friend" key={name}>
                    <Avatar hue={Number(hue)} letter={String(name).charAt(0)} />
                    {name}
                    <span className="friend-mark">✓ ✓ ✗</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="tile t-xp">
              <h3>{t.xpTitle}</h3>
              <p>{t.xpText}</p>
              <div className="xp" aria-hidden="true">
                <b>+10</b> XP
              </div>
            </div>
            <div className="tile t-badges">
              <h3>{t.badgesTitle}</h3>
              <p>{t.badgesText}</p>
              <div className="medals" aria-hidden="true">
                {BADGES.map((b) => (
                  <div
                    className={b.locked ? 'medal locked' : 'medal'}
                    key={b.glyph}
                    style={{ '--c': b.tone } as React.CSSProperties}
                  >
                    <span>{b.glyph}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="tile t-groups">
              <h3>{t.groupsTitle}</h3>
              <p>{t.groupsText}</p>
              <div className="code" aria-hidden="true">
                <small>{t.groupCode}</small>
                <b>K7QX4M2P</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final" aria-labelledby="final-title">
        <span
          className="dot"
          style={{ width: 14, height: 14, background: '#fff', left: '12%', top: '22%' }}
        />
        <span
          className="dot"
          style={{
            width: 10,
            height: 10,
            background: 'var(--primary)',
            left: '22%',
            bottom: '18%',
          }}
        />
        <span
          className="dot"
          style={{ width: 18, height: 18, background: '#fff', right: '16%', top: '30%' }}
        />
        <span
          className="dot"
          style={{
            width: 9,
            height: 9,
            background: 'var(--right-deep)',
            right: '26%',
            bottom: '22%',
          }}
        />
        <h2 id="final-title">
          {t.finalTitle} <em>{t.finalEm}</em>
        </h2>
        <p>{t.finalText}</p>
        <PlayBadge />
        <span className="sr-only">{c.getApp}</span>
      </section>
    </Layout>
  );
};

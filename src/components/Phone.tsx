import React, { useEffect, useRef, useState } from 'react';
import { home } from '../copy/home.ts';
import { useI18n } from '../i18n.tsx';

type Side = 'a' | 'b';
type Phase = 'idle' | 'revealed' | 'leaving';

// Playable demo of the swipe card: pick a side, the split is revealed, the card flies away.
export const Phone: React.FC = () => {
  const { lang } = useI18n();
  const t = home[lang];
  const pairs = t.pairs;
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [side, setSide] = useState<Side>('a');
  const timers = useRef<number[]>([]);

  useEffect(
    () => () => {
      timers.current.forEach((id) => {
        window.clearTimeout(id);
      });
    },
    []
  );

  const current = pairs[index % pairs.length];
  const pctA = current.p;

  const pick = (chosen: Side) => {
    if (phase !== 'idle') return;
    setSide(chosen);
    setPhase('revealed');
    timers.current.push(
      window.setTimeout(() => {
        setPhase('leaving');
        timers.current.push(
          window.setTimeout(() => {
            setIndex((i) => i + 1);
            setPhase('idle');
          }, 420)
        );
      }, 1300)
    );
  };

  const mine = side === 'a' ? pctA : 100 - pctA;
  const hint = phase === 'idle' ? t.phoneHint : mine >= 50 ? t.phoneWith(mine) : t.phoneOdd(mine);

  const card = (offset: number, cls: string) => {
    const pair = pairs[(index + offset) % pairs.length];
    const top = offset === 0;
    const shown = top && phase !== 'idle';
    const fly = top && phase === 'leaving' ? (side === 'a' ? ' fly-a' : ' fly-b') : '';
    return (
      <div key={`${index + offset}`} className={`card ${cls}${shown ? ' revealed' : ''}${fly}`}>
        <div className="q">{t.phoneQuestion}</div>
        {(['a', 'b'] as const).map((s) => {
          const share = s === 'a' ? pair.p : 100 - pair.p;
          const [label, glyph] = pair[s];
          return (
            <React.Fragment key={s}>
              <button
                type="button"
                className={`opt ${s}`}
                tabIndex={top ? 0 : -1}
                onClick={() => {
                  if (top) pick(s);
                }}
              >
                <i className="fill" style={{ width: shown ? `${share}%` : 0 }} />
                <span className="g" aria-hidden="true">
                  {glyph}
                </span>
                <span className="l">{label}</span>
                <span className="pct">{share}%</span>
              </button>
              {s === 'a' && (
                <div className="or" aria-hidden="true">
                  <span>{lang === 'fr' ? 'ou' : 'or'}</span>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <div className="phone">
      <div className="screen">
        <div className="sb">
          <span>9:41</span>
          <div className="cam" />
          <span>▾ ▴ ▮</span>
        </div>
        <div className="app-h">
          <div className="wordmark">
            would you<b>?</b>
          </div>
          <div className="streak">⭐ XP</div>
        </div>
        <div className="chips">
          <span className="chip on">🎲 {t.phoneAll}</span>
          <span className="chip">
            {t.topics[1]?.glyph} {t.topics[1]?.label}
          </span>
          <span className="chip">
            {t.topics[4]?.glyph} {t.topics[4]?.label}
          </span>
        </div>
        <div className="deck" aria-live="polite">
          {card(2, 'back2')}
          {card(1, 'back')}
          {card(0, 'top')}
        </div>
        <div className="hint">{hint}</div>
        <div className="tabs" aria-hidden="true">
          {t.phoneTabs.map((label, i) => (
            <div key={label} className={i === 0 ? 'on' : undefined}>
              <i>{['▶', '👥', '🎪', '🙂'][i]}</i>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

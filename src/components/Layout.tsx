import React, { useEffect, useState } from 'react';
import { DEVELOPER, PATHS, PLAY_URL, SUPPORT_EMAIL } from '../constants.ts';
import { common } from '../copy/common.ts';
import { home } from '../copy/home.ts';
import { useI18n } from '../i18n.tsx';
import { CopyButton } from './CopyButton.tsx';

export const AppIcon: React.FC<{ size: number }> = ({ size }) => (
  <span className="icon" style={{ width: size, height: size }} aria-hidden="true">
    <span style={{ fontSize: size * 0.7 }}>?</span>
  </span>
);

export const Logo: React.FC<{ size?: number }> = ({ size = 34 }) => (
  <>
    <AppIcon size={size} />
    <span className="wordmark" style={{ fontSize: size * 0.7 }}>
      would you<b>?</b>
    </span>
  </>
);

const PlayMark: React.FC = () => (
  <svg width="28" height="30" viewBox="0 0 28 30" aria-hidden="true">
    <path d="M2 1.5l14 13.5L2 28.5c-.6-.3-1-1-1-1.8V3.3c0-.8.4-1.5 1-1.8z" fill="#7BC8B5" />
    <path d="M20.5 10.5L16 15 2 1.5c.4-.2.9-.2 1.4.1l17.1 8.9z" fill="#FFB89C" />
    <path d="M20.5 19.5L3.4 28.4c-.5.3-1 .3-1.4.1L16 15l4.5 4.5z" fill="#FF8A65" />
    <path d="M25.6 13.2c1.2.7 1.2 2.9 0 3.6l-5.1 2.7L16 15l4.5-4.5 5.1 2.7z" fill="#F2C969" />
  </svg>
);

export const PlayBadge: React.FC = () => {
  const { lang } = useI18n();
  const t = home[lang];
  const inner = (
    <>
      <PlayMark />
      <span>
        <small>{PLAY_URL ? t.playSmall : t.soon}</small>
        <strong>{t.playBig}</strong>
      </span>
    </>
  );
  return PLAY_URL ? (
    <a className="play" href={PLAY_URL} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <span className="play play-soon">{inner}</span>
  );
};

const LangSwitch: React.FC<{ className?: string }> = ({ className }) => {
  const { lang, setLang } = useI18n();
  const c = common[lang];
  return (
    <div className={className ? `lang ${className}` : 'lang'} role="group" aria-label={c.langGroup}>
      {(['en', 'fr'] as const).map((code) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => {
            setLang(code);
          }}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, home: isHome = false }) => {
  const { lang } = useI18n();
  const c = common[lang];
  const t = home[lang];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const anchor = (hash: string) => (isHome ? hash : `${PATHS.home}${hash}`);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        {c.skip}
      </a>
      <header className={scrolled ? 'top scrolled' : 'top'}>
        <div className="wrap bar">
          <a className="logo" href={PATHS.home} aria-label={c.homeLabel}>
            <Logo />
          </a>
          <nav className="nav" aria-label={c.mainNav}>
            <a href={anchor('#how')}>{c.navHow}</a>
            <a href={anchor('#features')}>{c.navFeatures}</a>
            <a href={PATHS.privacy}>{c.navPrivacy}</a>
          </nav>
          <LangSwitch className="bar-lang" />
          <a className="btn btn-ink" href={anchor('#download')}>
            {c.getApp}
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={menuOpen}
            aria-controls="drawer"
            aria-label={t.menu}
            onClick={() => {
              setMenuOpen((open) => !open);
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
        <div className={menuOpen ? 'wrap drawer open' : 'wrap drawer'} id="drawer">
          <a href={anchor('#how')} onClick={closeMenu}>
            {c.navHow}
          </a>
          <a href={anchor('#features')} onClick={closeMenu}>
            {c.navFeatures}
          </a>
          <a href={PATHS.privacy}>{c.navPrivacy}</a>
          <LangSwitch className="drawer-lang" />
        </div>
      </header>
      <main id="main">{children}</main>
      <footer>
        <div className="wrap foot">
          <div className="brand">
            <a className="logo" href={PATHS.home} aria-label={c.homeLabel}>
              <Logo size={40} />
            </a>
            <p className="small">{t.footTagline}</p>
          </div>
          <div>
            <h4>{t.footApp}</h4>
            <ul>
              <li>
                <a href={anchor('#download')}>{t.playBig}</a>
              </li>
              <li>
                <a href={anchor('#how')}>{c.navHow}</a>
              </li>
              <li>
                <a href={anchor('#features')}>{c.navFeatures}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t.footLegal}</h4>
            <ul>
              <li>
                <a href={PATHS.privacy}>{c.privacy}</a>
              </li>
              <li>
                <a href={PATHS.terms}>{c.terms}</a>
              </li>
              <li>
                <a href={PATHS.deleteAccount}>{c.deleteAccount}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>{t.footContact}</h4>
            <div className="copy-row">
              <code>{SUPPORT_EMAIL}</code>
              <CopyButton text={SUPPORT_EMAIL} label={t.copy} doneLabel={t.copied} />
            </div>
          </div>
          <div className="fine">
            <span>
              © {new Date().getFullYear()} {DEVELOPER}
            </span>
            <span>{t.trademark}</span>
          </div>
        </div>
      </footer>
    </>
  );
};

'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import type { Lang } from '@/lib/translations'

function Logo({ size = 48 }: { size?: number }) {
  return (
    <img
      src="/assets/images/logo.jpg"
      alt="あまねく AMAMI PICKLEBALL"
      width={size}
      height={size}
      style={{
        borderRadius: '50%',
        objectFit: 'cover',
        display: 'block',
        background: '#fff',
      }}
    />
  )
}

const LANGS: { code: Lang; label: string }[] = [
  { code: 'ja', label: 'JP' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
]

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useLanguage()
  const tr = translations[lang]

  const navItems = [
    { href: '/about-pickleball/', label: tr.nav.pickleball },
    { href: '/about/', label: tr.nav.about },
    { href: '/events/', label: tr.nav.events },
    { href: '/#news', label: tr.nav.news },
    { href: 'https://achieve8.jp/', label: tr.nav.achieve8, external: true },
  ]

  return (
    <>
      <header className="site-header" id="site-header">
        <div className="header-inner">
          <div className="site-logo">
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <Logo size={44} />
              <span className="logo-text" style={{ lineHeight: 1.2 }}>
                あまねく<span>アートパドル</span>協会
              </span>
            </a>
          </div>
          <nav className="site-nav" aria-label="メインナビゲーション">
            <ul className="nav-list">
              {navItems.map(({ href, label, external }) => (
                <li key={href}><a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="lang-switcher">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                className={`lang-btn${lang === code ? ' active' : ''}`}
                onClick={() => setLang(code)}
                aria-label={`Switch to ${label}`}
              >
                {label}
              </button>
            ))}
          </div>
          <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="header-cta">{tr.nav.contact}</a>
          <button className="hamburger" aria-label={tr.header.menuOpen} aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
        <div className="mobile-menu" aria-hidden="true">
          <div className="lang-switcher lang-switcher-mobile">
            {LANGS.map(({ code, label }) => (
              <button
                key={code}
                className={`lang-btn${lang === code ? ' active' : ''}`}
                onClick={() => setLang(code)}
                aria-label={`Switch to ${label}`}
              >
                {label}
              </button>
            ))}
          </div>
          <ul className="mobile-nav-list">
            {navItems.map(({ href, label, external }) => (
              <li key={href}><a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a></li>
            ))}
          </ul>
          <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="btn btn-accent mobile-cta">{tr.nav.contact}</a>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-inner container">
          <div className="footer-brand">
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '12px' }}>
              <Logo size={56} />
              <div>
                <span className="logo-text" style={{ display: 'block', lineHeight: 1.3 }}>
                  あまねく<span>アートパドル</span>協会
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--font-heading-en)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em' }}>AMAMI PICKLEBALL est. 2026</span>
              </div>
            </a>
            <p className="footer-tagline">{tr.footer.tagline}</p>
            <a href="https://www.instagram.com/amami_pickle/" target="_blank" rel="noopener noreferrer" className="footer-instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              @amami_pickle
            </a>
          </div>
          <nav className="footer-nav" aria-label="フッターナビゲーション">
            <ul>
              {navItems.map(({ href, label, external }) => (
                <li key={href}><a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>{tr.footer.copyright}</p>
        </div>
      </footer>
    </>
  )
}

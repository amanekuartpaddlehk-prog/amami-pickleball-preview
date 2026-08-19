import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '奄美ピックルボール協会',
  description: '一般社団法人アチーブエイト / 奄美ピックルボール協会の公式サイト',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Noto+Serif+JP:wght@400;700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/animations.css" />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

function SiteHeader() {
  const navItems = [
    { href: '/about-pickleball/', label: 'ピックルボールとは' },
    { href: '/about/', label: '協会について' },
    { href: '/events/', label: 'イベント' },
    { href: '/contact/', label: 'お問い合わせ' },
  ]
  return (
    <header className="site-header" id="site-header">
      <div className="header-inner">
        <a href="/" className="site-logo">
          <span className="logo-en">AMAMI</span>
          <span className="logo-ja">ピックルボール協会</span>
        </a>
        <nav className="site-nav" aria-label="メインナビゲーション">
          <ul className="nav-list">
            {navItems.map(({ href, label }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>
        <a href="/contact/" className="header-cta">お問い合わせ</a>
        <button className="hamburger" aria-label="メニューを開く" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className="mobile-nav" aria-hidden="true">
        <ul className="mobile-nav-list">
          {navItems.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <a href="/contact/" className="btn btn-accent mobile-cta">お問い合わせ</a>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <a href="/" className="site-logo">
            <span className="logo-en">AMAMI</span>
            <span className="logo-ja">ピックルボール協会</span>
          </a>
          <p className="footer-tagline">奄美から、スポーツで繋がる。</p>
        </div>
        <nav className="footer-nav" aria-label="フッターナビゲーション">
          <ul>
            <li><a href="/about-pickleball/">ピックルボールとは</a></li>
            <li><a href="/about/">協会について</a></li>
            <li><a href="/events/">イベント</a></li>
            <li><a href="/contact/">お問い合わせ</a></li>
          </ul>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© 2025 一般社団法人アチーブエイト / 奄美ピックルボール協会</p>
      </div>
    </footer>
  )
}

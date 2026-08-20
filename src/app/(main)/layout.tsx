const navItems = [
  { href: '/about-pickleball/', label: 'アートパドルとは' },
  { href: '/about/', label: '協会について' },
  { href: '/events/', label: 'イベント' },
  { href: '/contact/', label: 'お問い合わせ' },
]

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site-header" id="site-header">
        <div className="header-inner">
          <a href="/" className="site-logo">
            <span className="logo-en">ART PADDLE</span>
            <span className="logo-ja">アートパドル協会</span>
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

      {children}

      <footer className="site-footer">
        <div className="footer-inner container">
          <div className="footer-brand">
            <a href="/" className="site-logo">
              <span className="logo-en">ART PADDLE</span>
              <span className="logo-ja">アートパドル協会</span>
            </a>
            <p className="footer-tagline">アートとスポーツで、島から世界へ。</p>
          </div>
          <nav className="footer-nav" aria-label="フッターナビゲーション">
            <ul>
              {navItems.map(({ href, label }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© 2025 一般社団法人アチーブエイト / あまねくアートパドル協会</p>
        </div>
      </footer>
    </>
  )
}

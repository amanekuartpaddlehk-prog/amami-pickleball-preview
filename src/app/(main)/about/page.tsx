import type { Metadata } from 'next'
export const metadata: Metadata = { title: '協会について | あまねくアートパドル協会', description: '一般社団法人アチーブエイトが運営する、あまねくアートパドル協会の活動理念・法人概要・ビジョンをご紹介します。' }

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <p className="page-hero-label">About Us</p>
        <h1>協会について</h1>
        <p>一般社団法人アチーブエイト / あまねくアートパドル協会のご紹介。</p>
      </section>

      <section className="section bg-bg">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="mission-block animate-on-scroll">
            <blockquote style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)' }}>「アートとスポーツで、島から世界へ。」</blockquote>
            <p>奄美大島を拠点に、アートパドルを通じた地域コミュニティの活性化と、スポーツの普及に取り組んでいます。初心者から上級者まで、島の皆さんが笑顔でスポーツを楽しめる環境づくりを目指しています。</p>
          </div>
        </div>
      </section>

      <section className="bg-surface" style={{ paddingBlock: 0 }}>
        <div style={{ maxWidth: 'var(--container-max)', marginInline: 'auto' }}>
          <img src="/assets/images/about-us.jpg" alt="あまねくアートパドル協会の活動風景" loading="lazy" style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', display: 'block' }} />
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header animate-on-scroll">
            <span className="section-label">Organization</span>
            <h2 className="section-title">法人概要</h2>
          </div>
          <div className="event-body animate-on-scroll">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <th style={{ padding: '16px 20px 16px 0', width: '30%', color: 'var(--color-muted)', fontWeight: 500, textAlign: 'left', whiteSpace: 'nowrap' }}>団体名</th>
                  <td style={{ padding: '16px 0' }}>一般社団法人アチーブエイト<br />あまねくアートパドル協会</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <th style={{ padding: '16px 20px 16px 0', color: 'var(--color-muted)', fontWeight: 500, textAlign: 'left' }}>所在地</th>
                  <td style={{ padding: '16px 0' }}>鹿児島県奄美大島</td>
                </tr>
                <tr>
                  <th style={{ padding: '16px 20px 16px 0', color: 'var(--color-muted)', fontWeight: 500, textAlign: 'left' }}>目的</th>
                  <td style={{ padding: '16px 0' }}>奄美大島におけるアートパドルの普及・競技者育成・地域コミュニティの形成</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg,#0a3d2e 0%,#1a6b5a 100%)', paddingBlock: 'clamp(48px,7vw,80px)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <p className="animate-on-scroll" style={{ fontFamily: 'var(--font-heading-en)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '14px' }}>Vision</p>
          <h2 className="animate-on-scroll" style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', color: '#fff', marginBottom: '16px', wordBreak: 'keep-all' }}>奄美ウェルビーイング・スポーツアイランド構想</h2>
          <p className="animate-on-scroll" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '28px', lineHeight: 1.9 }}>スポーツで人がつながり、奄美から世界に発信する。<br />あまねくアートパドル協会が描く5つのビジョン。</p>
          <div className="animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', textAlign: 'left' }}>
            {[
              ['①', 'キッズ育成', '島の子どもたちにスポーツの喜びを。放課後・休日の体験プログラム'],
              ['②', 'シニア健康', '関節に優しく、誰でも長く続けられる生涯スポーツ'],
              ['③', 'ユニバーサル', '障がいの有無に関わらず、同じコートで楽しめる環境づくり'],
              ['④', 'スポーツツーリズム', '大会・合宿誘致で奄美に人を呼ぶ新しい旅の形'],
              ['⑤', 'Art × Sports', 'アートと融合したスポーツイベントで島の文化を世界へ'],
            ].map(([num, title, desc]) => (
              <div key={title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px 16px' }}>
                <span style={{ fontFamily: 'var(--font-heading-en)', fontWeight: 900, color: 'var(--color-accent)', fontSize: '1rem', flexShrink: 0, minWidth: '24px' }}>{num}</span>
                <div>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9375rem' }}>{title}</span>
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8125rem', marginLeft: '8px' }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
          <a href="/contact/" className="btn btn-accent animate-on-scroll">お問い合わせ・体験申込 &rarr;</a>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <p className="cta-section-label">Join Us</p>
          <h2>あまねくアートパドル協会へのお問い合わせ</h2>
          <p>入会・見学・スポンサーなど、お気軽にご連絡ください。</p>
          <div className="cta-buttons">
            <a href="/contact/" className="btn btn-accent">お問い合わせ</a>
          </div>
        </div>
      </section>
      <a href="/contact/" className="sticky-cta-mobile btn btn-primary">お問い合わせ・参加する</a>
    </main>
  )
}

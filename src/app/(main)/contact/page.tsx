import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'お問い合わせ | あまねくアートパドル協会', description: '入会・体験申込・スポンサーなど、あまねくアートパドル協会へのお問い合わせはこちらから。' }

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <p className="page-hero-label">Contact</p>
        <h1>お問い合わせ</h1>
        <p>入会・体験・スポンサーなど、お気軽にご連絡ください。</p>
      </section>

      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="contact-layout">
            <div className="contact-form-wrap">
              <div className="section-header animate-on-scroll" style={{ textAlign: 'left', marginBottom: '32px' }}>
                <span className="section-label">Send Message</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>お問い合わせフォーム</h2>
              </div>
              <div className="event-body animate-on-scroll" style={{ padding: 'clamp(28px,4vw,44px)' }}>
                <p style={{ marginBottom: '24px', color: 'var(--color-muted)' }}>※ このページはデザインプレビューです。実際のフォームはWordPress本番環境でご利用いただけます。</p>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.9375rem' }}>お名前 <span style={{ color: '#e53e3e' }}>*</span></label>
                    <input type="text" placeholder="例：山田 太郎" disabled style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '1rem', background: 'rgba(0,0,0,0.03)', cursor: 'not-allowed' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.9375rem' }}>メールアドレス <span style={{ color: '#e53e3e' }}>*</span></label>
                    <input type="email" placeholder="例：example@email.com" disabled style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '1rem', background: 'rgba(0,0,0,0.03)', cursor: 'not-allowed' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '0.9375rem' }}>お問い合わせ内容 <span style={{ color: '#e53e3e' }}>*</span></label>
                    <textarea rows={6} placeholder="お問い合わせ内容をご記入ください" disabled style={{ width: '100%', padding: '12px 16px', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '1rem', resize: 'vertical', background: 'rgba(0,0,0,0.03)', cursor: 'not-allowed' }} />
                  </div>
                  <button type="button" disabled className="btn btn-primary" style={{ cursor: 'not-allowed', opacity: 0.6 }}>送信する（プレビュー版のため無効）</button>
                </form>
              </div>
            </div>

            <aside className="contact-sidebar">
              <div className="contact-info animate-on-scroll">
                <h3>お問い合わせ先</h3>
                <ul className="contact-info-list">
                  <li>
                    <span className="contact-info-icon" aria-hidden="true">
                      <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </span>
                    <span>メールにてお問い合わせください</span>
                  </li>
                  <li>
                    <span className="contact-info-icon" aria-hidden="true">
                      <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    <span>鹿児島県奄美大島</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <a href="/contact/" className="sticky-cta-mobile btn btn-primary">お問い合わせ・参加する</a>
    </main>
  )
}

import type { Metadata } from 'next'
import { getNewsList, getUpcomingEvents } from '@/lib/microcms'

export const metadata: Metadata = { title: 'あまねくアートパドル協会 | 奄美大島でアートパドルを楽しもう', description: 'アートとスポーツで島から世界へ。あまねくアートパドル協会は奄美大島を拠点に、年齢・体力を問わず楽しめるアートパドル（ピックルボール）の普及活動をしています。' }

export default async function HomePage() {
  const [newsList, eventsList] = await Promise.all([getNewsList(3), getUpcomingEvents(5)])
  return (
    <main id="main-content">

      {/* ① ヒーロー */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/assets/images/hero.jpg" alt="" aria-hidden="true" loading="eager" />
        </div>
        <div className="hero-content">
          <span className="hero-label">Art Paddle Association</span>
          <h1 className="hero-title en-heading">ART PADDLE</h1>
          <p className="hero-title-ja">アートとスポーツで、島から世界へ。</p>
          <p className="hero-desc">アートパドルは年齢や体力に関わらず、誰でも楽しめるスポーツです。奄美大島でいっしょに始めませんか。</p>
          <div className="hero-cta">
            <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="btn btn-accent">お問い合わせ・体験申込 &rarr;</a>
          </div>
          <div className="scroll-indicator animate-on-scroll">
            <div className="scroll-indicator-arrow"></div>
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* ② ピックルボール紹介 */}
      <section className="section bg-bg">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">About Art Paddle</span>
            <h2 className="section-title">奄美で広がる、アートパドル</h2>
          </div>
          <div className="intro-grid">
            <div className="intro-card card-hover animate-on-scroll">
              <span className="intro-card-label">FOR EVERYONE</span>
              <h3>初心者から始められる</h3>
              <p>道具の貸し出しあり。ルールは簡単で、体力や年齢を問わず楽しめます。</p>
              <div className="intro-card-image">
                <img src="/assets/images/intro-1.jpg" alt="ピックルボールをプレーする様子" loading="lazy" />
              </div>
            </div>
            <div className="intro-card intro-card-accent card-hover animate-on-scroll">
              <span className="intro-card-label">COMMUNITY</span>
              <h3>島の人が繋がる場所</h3>
              <p>奄美大島を拠点に、地域の人々が集まるコミュニティを育てています。</p>
              <div className="intro-card-image" style={{ marginTop: '20px' }}>
                <img src="/assets/images/intro-2.jpg" alt="あまねくアートパドルコミュニティ" loading="lazy" />
              </div>
            </div>
            <div className="intro-card card-hover animate-on-scroll">
              <span className="intro-card-label">ACTIVITIES</span>
              <h3>定期練習と大会を開催</h3>
              <p>週1回の練習会から公式大会まで。レベルに合わせて参加できます。</p>
              <div className="intro-card-image" style={{ marginTop: '20px' }}>
                <img src="/assets/images/intro-3.jpg" alt="ピックルボール練習・大会の様子" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="view-all-wrap animate-on-scroll">
            <a href="/about-pickleball/" className="btn btn-outline-primary">アートパドルについて詳しく &rarr;</a>
          </div>
        </div>
      </section>

      {/* ③ ウェルビーイング構想テザー */}
      <section className="section" style={{ background: 'linear-gradient(135deg,#0a3d2e 0%,#1a6b5a 60%,#2d5a3d 100%)', paddingBlock: 'clamp(56px,8vw,96px)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <p className="animate-on-scroll" style={{ fontFamily: 'var(--font-heading-en)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '16px' }}>Vision</p>
          <h2 className="animate-on-scroll" style={{ fontSize: 'clamp(1.5rem,4vw,2.625rem)', color: '#fff', marginBottom: '20px', wordBreak: 'keep-all' }}>奄美ウェルビーイング・スポーツアイランド構想</h2>
          <p className="animate-on-scroll" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', marginInline: 'auto', marginBottom: '12px', lineHeight: 1.9 }}>
            世界自然遺産の島・奄美を、人生100年時代のウェルビーイング先進地域にしたい。<br />子ども・高齢者・障がい者・移住者・観光客が、スポーツで繋がれる場所を。
          </p>
          <div className="animate-on-scroll" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '36px', marginTop: '28px' }}>
            {['キッズ', 'シニア健康', 'ユニバーサル', 'スポーツツーリズム', 'Art × Sports'].map(p => (
              <span key={p} style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '100px', border: '1px solid rgba(212,168,87,0.5)', color: 'var(--color-accent)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.04em' }}>{p}</span>
            ))}
          </div>
          <a href="/about/" className="btn btn-accent animate-on-scroll">構想の詳細を見る &rarr;</a>
        </div>
      </section>

      {/* ④ 最新のお知らせ */}
      <section id="news" className="section bg-surface">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">News</span>
            <h2 className="section-title">最新のお知らせ</h2>
          </div>
          {newsList.length > 0 ? (
            <div className="news-grid">
              {newsList.map(item => (
                <article key={item.id} className="news-card animate-on-scroll">
                  <time className="news-date">{new Date(item.publishedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  {item.category && <span className="news-category">{item.category}</span>}
                  <h3 className="news-title">{item.title}</h3>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-posts"><p>まだ投稿がありません。</p></div>
          )}
        </div>
      </section>

      {/* ⑤ 直近のイベント */}
      <section className="section bg-bg">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Events</span>
            <h2 className="section-title">直近のイベント</h2>
          </div>
          {eventsList.length > 0 ? (
            <div className="events-grid">
              {eventsList.map(item => (
                <article key={item.id} className="event-card animate-on-scroll">
                  <time className="event-date">{new Date(item.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <h3 className="event-title">{item.title}</h3>
                  {item.location && <p className="event-location">📍 {item.location}</p>}
                  {item.description && <p className="event-desc">{item.description}</p>}
                </article>
              ))}
            </div>
          ) : (
            <div className="no-posts"><p>現在予定されているイベントはありません。お問い合わせください。</p></div>
          )}
        </div>
      </section>

      {/* ⑥ CTA */}
      <section className="cta-section">
        <div className="container">
          <p className="cta-section-label">Join Us</p>
          <h2>一緒にアートパドルを始めませんか</h2>
          <p>まずはお気軽にお問い合わせください。体験会の日程もご案内します。</p>
          <div className="cta-buttons">
            <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="btn btn-accent">お問い合わせ・体験申込</a>
          </div>
        </div>
      </section>

      <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="sticky-cta-mobile btn btn-primary">お問い合わせ・体験申込</a>
    </main>
  )
}

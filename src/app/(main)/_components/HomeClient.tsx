'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

type NewsItem = { id: string; title: string; publishedAt: string; category?: string }
type EventImage = {
  url: string
  width?: number
  height?: number
}

type EventItem = {
  id: string
  title: string
  date: string
  schedule?: string
  location?: string
  description?: string
  eyecatch?: EventImage
  images?: EventImage[]
}

export function HomeClient({ newsList, eventsList }: { newsList: NewsItem[]; eventsList: EventItem[] }) {
  const { lang } = useLanguage()
  const tr = translations[lang].home

  return (
    <main id="main-content">
      {/* ① ヒーロー */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/assets/images/hero.jpg" alt="" aria-hidden="true" loading="eager" />
        </div>
        <div className="hero-content">
          <span className="hero-label">{tr.heroLabel}</span>
          <h1 className="hero-title en-heading">ART PADDLE</h1>
          <p className="hero-title-ja">{tr.heroTitleJa}</p>
          <p className="hero-desc">{tr.heroDesc}</p>
          <div className="hero-cta">
            <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="btn btn-accent">{tr.heroCta} &rarr;</a>
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
            <span className="section-label">{tr.introLabel}</span>
            <h2 className="section-title">{tr.introTitle}</h2>
          </div>
          <div className="intro-grid">
            <div className="intro-card card-hover animate-on-scroll">
              <span className="intro-card-label">{tr.card1Label}</span>
              <h3>{tr.card1Title}</h3>
              <p>{tr.card1Desc}</p>
              <div className="intro-card-image">
                <img src="/assets/images/intro-1.jpg" alt={tr.card1ImgAlt} loading="lazy" />
              </div>
            </div>
            <div className="intro-card intro-card-accent card-hover animate-on-scroll">
              <span className="intro-card-label">{tr.card2Label}</span>
              <h3>{tr.card2Title}</h3>
              <p>{tr.card2Desc}</p>
              <div className="intro-card-image" style={{ marginTop: '20px' }}>
                <img src="/assets/images/intro-2.jpg" alt={tr.card2ImgAlt} loading="lazy" />
              </div>
            </div>
            <div className="intro-card card-hover animate-on-scroll">
              <span className="intro-card-label">{tr.card3Label}</span>
              <h3>{tr.card3Title}</h3>
              <p>{tr.card3Desc}</p>
              <div className="intro-card-image" style={{ marginTop: '20px' }}>
                <img src="/assets/images/intro-3.jpg" alt={tr.card3ImgAlt} loading="lazy" />
              </div>
            </div>
          </div>
          <div className="view-all-wrap animate-on-scroll">
            <a href="/about-pickleball/" className="btn btn-outline-primary">{tr.learnMore} &rarr;</a>
          </div>
        </div>
      </section>

      {/* ③ ウェルビーイング構想 */}
      <section className="section" style={{ background: 'linear-gradient(135deg,#0a3d2e 0%,#1a6b5a 60%,#2d5a3d 100%)', paddingBlock: 'clamp(56px,8vw,96px)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <p className="animate-on-scroll" style={{ fontFamily: 'var(--font-heading-en)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '16px' }}>{tr.visionLabel}</p>
          <h2 className="animate-on-scroll" style={{ fontSize: 'clamp(1.5rem,4vw,2.625rem)', color: '#fff', marginBottom: '20px', wordBreak: 'keep-all' }}>{tr.visionTitle}</h2>
          <p className="animate-on-scroll" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', marginInline: 'auto', marginBottom: '12px', lineHeight: 1.9 }}>
            {tr.visionDesc.split('\n').map((line, i) => (
              <span key={i}>{line}{i < tr.visionDesc.split('\n').length - 1 && <br />}</span>
            ))}
          </p>
          <div className="animate-on-scroll" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '36px', marginTop: '28px' }}>
            {tr.visionPills.map(p => (
              <span key={p} style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '100px', border: '1px solid rgba(212,168,87,0.5)', color: 'var(--color-accent)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.04em' }}>{p}</span>
            ))}
          </div>
          <a href="/about/" className="btn btn-accent animate-on-scroll">{tr.visionCta} &rarr;</a>
        </div>
      </section>

      {/* ④ 最新のお知らせ */}
      <section id="news" className="section bg-surface">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">{tr.newsLabel}</span>
            <h2 className="section-title">{tr.newsTitle}</h2>
          </div>
          {newsList.length > 0 ? (
            <div className="news-grid">
              {newsList.map(item => (
                <article key={item.id} className="news-card animate-on-scroll">
                  <time className="news-date">{new Date(item.publishedAt).toLocaleDateString(lang === 'ja' ? 'ja-JP' : lang === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  {item.category && <span className="news-category">{item.category}</span>}
                  <h3 className="news-title">{item.title}</h3>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-posts"><p>{tr.noNews}</p></div>
          )}
        </div>
      </section>

      {/* ⑤ 直近のイベント */}
      <section className="section bg-bg">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">{tr.eventsLabel}</span>
            <h2 className="section-title">{tr.eventsTitle}</h2>
          </div>

          {eventsList.length > 0 ? (
            <div className="events-grid">
              {eventsList.map(item => {
                const cardImage =
                  item.eyecatch ?? item.images?.[0]

                return (
                  <article
                    key={item.id}
                    className="event-card animate-on-scroll"
                  >
                    <a
                      href={`/events/${item.id}/`}
                      className="event-card-clickable"
                      aria-label={`${item.title}の詳細を見る`}
                    >
                      {cardImage ? (
                        <div className="event-card-thumb event-card-thumb-poster">
                          <img
                            src={cardImage.url}
                            alt={item.title}
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="event-card-image-placeholder">
                          <span>EVENT</span>
                        </div>
                      )}

                      <div className="event-card-content event-card-content-simple">
                        <time className="event-date">
                          {new Date(item.date).toLocaleString(
                            lang === 'ja'
                              ? 'ja-JP'
                              : lang === 'fr'
                                ? 'fr-FR'
                                : 'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              weekday: 'short',
                              hour: '2-digit',
                              minute: '2-digit',
                              timeZone: 'Asia/Tokyo',
                            }
                          )}
                        </time>

                        <h3 className="event-title">
                          {item.title}
                        </h3>
                      </div>
                    </a>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="no-posts">
              <p>{tr.noEvents}</p>
            </div>
          )}
        </div>
      </section>
      {/* ⑥ CTA */}
      <section className="cta-section">
        <div className="container">
          <p className="cta-section-label">{tr.ctaLabel}</p>
          <h2>{tr.ctaTitle}</h2>
          <p>{tr.ctaDesc}</p>
          <div className="cta-buttons">
            <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="btn btn-accent">{tr.ctaBtn}</a>
          </div>
        </div>
      </section>

      <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="sticky-cta-mobile btn btn-primary">{tr.stickyCta}</a>
    </main>
  )
}

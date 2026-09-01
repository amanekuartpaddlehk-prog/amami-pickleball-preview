'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

type EventItem = { id: string; title: string; date: string; location?: string; description?: string }

export function EventsClient({ eventsList }: { eventsList: EventItem[] }) {
  const { lang } = useLanguage()
  const tr = translations[lang].events

  return (
    <main id="main-content">
      <section className="page-hero">
        <p className="page-hero-label">{tr.heroLabel}</p>
        <h1>{tr.heroTitle}</h1>
        <p>{tr.heroDesc}</p>
      </section>
      <section className="section bg-surface">
        <div className="container">
          {eventsList.length > 0 ? (
            <div className="events-grid">
              {eventsList.map(item => (
                <article key={item.id} className="event-card animate-on-scroll">
                  <time className="event-date">{new Date(item.date).toLocaleDateString(lang === 'ja' ? 'ja-JP' : lang === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <h2 className="event-title">{item.title}</h2>
                  {item.location && <p className="event-location">📍 {item.location}</p>}
                  {item.description && <p className="event-desc">{item.description}</p>}
                </article>
              ))}
            </div>
          ) : (
            <div className="no-posts">
              <p>{tr.noEvents}</p>
            </div>
          )}
        </div>
      </section>
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

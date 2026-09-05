'use client'

import { useEffect, useRef } from 'react'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

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

export function EventsClient({
  eventsList,
}: {
  eventsList: EventItem[]
}) {
  const { lang } = useLanguage()
  const tr = translations[lang].events
  const heroDescRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const element = heroDescRef.current
    if (!element) return

    const fitSingleLine = () => {
      // PCでは既存デザインに戻す
      if (window.innerWidth > 768) {
        element.style.fontSize = ''
        element.style.whiteSpace = ''
        return
      }

      const maxSize = 16
      const minSize = 9
      const step = 0.25

      element.style.whiteSpace = 'nowrap'
      element.style.fontSize = `${maxSize}px`

      const availableWidth = element.clientWidth
      let size = maxSize

      while (
        element.scrollWidth > availableWidth &&
        size > minSize
      ) {
        size -= step
        element.style.fontSize = `${size}px`
      }
    }

    fitSingleLine()

    const timer = window.setTimeout(
      fitSingleLine,
      150
    )

    window.addEventListener(
      'resize',
      fitSingleLine
    )

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener(
        'resize',
        fitSingleLine
      )
    }
  }, [lang])

  return (
    <main id="main-content">
      <section className="page-hero">
        <p className="page-hero-label">
          {tr.heroLabel}
        </p>

        <h1>{tr.heroTitle}</h1>

        <p
          ref={heroDescRef}
          className="events-hero-desc"
        >
          {tr.heroDesc}
        </p>
      </section>

      <section className="section bg-surface">
        <div className="container">
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

                        <h2 className="event-title">
                          {item.title}
                        </h2>
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

      <section className="cta-section">
        <div className="container">
          <p className="cta-section-label">
            {tr.ctaLabel}
          </p>

          <h2>{tr.ctaTitle}</h2>

          <p>{tr.ctaDesc}</p>

          <div className="cta-buttons">
            <a
              href="https://achieve8.jp/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              {tr.ctaBtn}
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://achieve8.jp/contact"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-cta-mobile btn btn-primary"
      >
        {tr.stickyCta}
      </a>
    </main>
  )
}

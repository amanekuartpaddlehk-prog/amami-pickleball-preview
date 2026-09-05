import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import {
  getAllEvents,
  getEventDetail,
} from '@/lib/microcms'

import EventTitleAutoFit from './EventTitleAutoFit'

type PageProps = {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const events = await getAllEvents(100)

  return events.map(event => ({
    id: event.id,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const event = await getEventDetail(params.id)

  if (!event) {
    return {
      title:
        'イベント | あまねくアートパドル協会',
    }
  }

  const description =
    event.description?.replace(/\s+/g, ' ').slice(0, 120) ||
    'あまねくアートパドル協会のイベント情報です。'

  const heroImage =
    event.eyecatch ?? event.images?.[0]

  return {
    title:
      `${event.title} | あまねくアートパドル協会`,
    description,
    openGraph: {
      title: event.title,
      description,
      ...(heroImage
        ? {
            images: [
              {
                url: heroImage.url,
              },
            ],
          }
        : {}),
    },
  }
}

function linkify(text: string) {
  const parts = text.split(
    /(https?:\/\/[^\s<>"'）】\]]+)/g
  )

  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="event-detail-text-link"
        >
          {part}
        </a>
      )
    }

    return part
  })
}

export default async function EventDetailPage({
  params,
}: PageProps) {
  const event = await getEventDetail(params.id)

  if (!event) {
    notFound()
  }

  const heroImage =
    event.eyecatch ?? event.images?.[0]

  const galleryImages =
    (event.images ?? []).filter(
      image => image.url !== heroImage?.url
    )

  const scheduleText =
    event.schedule?.trim() ||
    new Date(event.date).toLocaleString(
      'ja-JP',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Tokyo',
      }
    )

  return (
    <main id="main-content">
      <section className="event-detail-header">
        <div className="container">
          <span className="event-detail-badge">
            EVENT
          </span>

          <EventTitleAutoFit
            title={event.title}
          />

          <div className="event-meta-bar">
            <div className="event-meta-bar-item">
              <span
                className="event-meta-bar-icon"
                aria-hidden="true"
              >
                ●
              </span>

              <span className="event-schedule-text">
                {scheduleText}
              </span>
            </div>

            {event.location && (
              <div className="event-meta-bar-item">
                <span
                  className="event-meta-bar-icon"
                  aria-hidden="true"
                >
                  ●
                </span>

                <span>{event.location}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container event-detail-main">
          {heroImage && (
            <figure className="event-detail-poster">
              <img
                src={heroImage.url}
                alt={event.title}
              />
            </figure>
          )}

          {event.description && (
            <div className="event-detail-description">
              {linkify(event.description)}
            </div>
          )}

          {galleryImages.length > 0 && (
            <section
              className="event-detail-gallery-section"
              aria-labelledby="event-gallery-title"
            >
              <h2
                id="event-gallery-title"
                className="event-detail-gallery-title"
              >
                イベント画像
              </h2>

              <div className="event-detail-gallery">
                {galleryImages.map(
                  (image, index) => (
                    <figure
                      key={`${image.url}-${index}`}
                      className="event-detail-gallery-item"
                    >
                      <img
                        src={image.url}
                        alt={`${event.title} イベント画像 ${index + 1}`}
                        loading="lazy"
                      />
                    </figure>
                  )
                )}
              </div>
            </section>
          )}

          <div className="event-detail-back">
            <a
              href="/events/"
              className="btn btn-outline-primary"
            >
              ← イベント一覧へ戻る
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

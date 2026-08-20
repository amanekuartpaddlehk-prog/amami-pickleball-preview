import type { Metadata } from 'next'
import { getUpcomingEvents } from '@/lib/microcms'

export const metadata: Metadata = { title: 'イベント・大会 | あまねくアートパドル協会', description: 'あまねくアートパドル協会が主催・参加するイベント・大会情報をお届けします。' }

export default async function EventsPage() {
  const eventsList = await getUpcomingEvents(20)
  return (
    <main id="main-content">
      <section className="page-hero">
        <p className="page-hero-label">Events</p>
        <h1>イベント・大会</h1>
        <p>あまねくアートパドル協会が主催・参加するイベント情報</p>
      </section>
      <section className="section bg-surface">
        <div className="container">
          {eventsList.length > 0 ? (
            <div className="events-grid">
              {eventsList.map(item => (
                <article key={item.id} className="event-card animate-on-scroll">
                  <time className="event-date">{new Date(item.date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <h2 className="event-title">{item.title}</h2>
                  {item.location && <p className="event-location">📍 {item.location}</p>}
                  {item.description && <p className="event-desc">{item.description}</p>}
                </article>
              ))}
            </div>
          ) : (
            <div className="no-posts">
              <p>現在予定されているイベントはありません。お問い合わせください。</p>
            </div>
          )}
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <p className="cta-section-label">Join Us</p>
          <h2>イベントのご案内を受け取る</h2>
          <p>新しいイベントの情報はお問い合わせからご案内します。</p>
          <div className="cta-buttons">
            <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="btn btn-accent">お問い合わせ</a>
          </div>
        </div>
      </section>
      <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="sticky-cta-mobile btn btn-primary">お問い合わせ・参加する</a>
    </main>
  )
}

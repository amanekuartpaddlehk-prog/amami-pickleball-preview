export default function EventsPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <p className="page-hero-label">Events</p>
        <h1>イベント・大会</h1>
        <p>奄美ピックルボール協会が主催・参加するイベント情報</p>
      </section>
      <section className="section bg-surface">
        <div className="container">
          <div className="no-posts">
            <p>現在予定されているイベントはありません。お問い合わせください。</p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <p className="cta-section-label">Join Us</p>
          <h2>イベントのご案内を受け取る</h2>
          <p>新しいイベントの情報はお問い合わせからご案内します。</p>
          <div className="cta-buttons">
            <a href="/contact/" className="btn btn-accent">お問い合わせ</a>
          </div>
        </div>
      </section>
      <a href="/contact/" className="sticky-cta-mobile btn btn-primary">お問い合わせ・参加する</a>
    </main>
  )
}

import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'アートパドルとは | あまねくアートパドル協会', description: 'ピックルボールをベースにした新感覚スポーツ、アートパドルについて。特長・ルール・始め方を解説します。' }

export default function AboutPickleballPage() {
  const features = [
    { icon: <IconUsers />, title: '全世代で楽しめる', desc: '子どもから高齢者まで、誰でも一緒にプレーできます。' },
    { icon: <IconTrend />, title: 'すぐに上達できる', desc: 'シンプルなルールと小さいコートで、初心者でも短時間で楽しめます。' },
    { icon: <IconHeart />, title: '体への負担が少ない', desc: 'テニスほどの体力は不要。関節への負担も少なく長く続けられます。' },
    { icon: <IconPeople />, title: '仲間が自然に増える', desc: 'ダブルスが基本のスポーツ。一緒にプレーする中で自然とつながりができます。' },
    { icon: <IconYen />, title: '手軽に始められる', desc: '道具はパドル1本。協会では初回の道具貸し出しも行っています。' },
    { icon: <IconGlobe />, title: '世界で急速に普及中', desc: 'アメリカ発で世界60カ国以上でプレーされています。' },
  ]
  return (
    <main id="main-content">
      <section className="page-hero">
        <p className="page-hero-label">About Art Paddle</p>
        <h1>アートパドルとは</h1>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="pickleball-intro animate-on-scroll">
            <div>
              <span className="section-label">What is Art Paddle?</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px', wordBreak: 'keep-all' }}>テニス・卓球・バドミントンを組み合わせた新感覚スポーツ</h2>
              <p>アートパドル（ピックルボール）は1965年にアメリカで生まれたラケットスポーツです。テニスコートの約4分の1のサイズのコートで、穴の空いたプラスチックボールとパドルを使います。</p>
              <p>ルールが覚えやすく、激しい走り込みが少ないため、年齢・体力に関わらず誰でも楽しめます。アメリカでは現在最も成長しているスポーツとして注目され、日本でも急速に広まっています。</p>
              <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '24px' }}>お問い合わせ・体験申込</a>
            </div>
            <div className="pickleball-intro-image">
              <img src="/assets/images/about-pb.jpg" alt="アートパドルの試合の様子" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Features</span>
            <h2 className="section-title">アートパドルの6つの特長</h2>
          </div>
          <div className="pickleball-features">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="feature-card card-hover animate-on-scroll">
                <div className="feature-card-icon" aria-hidden="true">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <p className="cta-section-label">Try it!</p>
          <h2>まずは体験してみませんか</h2>
          <p>奄美大島で一緒にアートパドルを楽しみましょう。初心者向け体験会も定期開催中です。</p>
          <div className="cta-buttons">
            <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="btn btn-accent">お問い合わせ・参加申込</a>
          </div>
        </div>
      </section>
      <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="sticky-cta-mobile btn btn-primary">お問い合わせ・参加する</a>
    </main>
  )
}

function IconUsers() {
  return <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 21v-1a6 6 0 0 1 6-6h0"/><circle cx="17" cy="10" r="2.5"/><path d="M13 21v-1a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v1"/></svg>
}
function IconTrend() {
  return <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
}
function IconHeart() {
  return <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
}
function IconPeople() {
  return <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
}
function IconYen() {
  return <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
}
function IconGlobe() {
  return <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
}

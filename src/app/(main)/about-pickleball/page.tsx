'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

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

const featureIcons = [<IconUsers />, <IconTrend />, <IconHeart />, <IconPeople />, <IconYen />, <IconGlobe />]

export default function AboutPickleballPage() {
  const { lang } = useLanguage()
  const tr = translations[lang].pickleball

  return (
    <main id="main-content">
      <section className="page-hero">
        <p className="page-hero-label">{tr.heroLabel}</p>
        <h1>{tr.heroTitle}</h1>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="pickleball-intro animate-on-scroll">
            <div>
              <span className="section-label">{tr.introLabel}</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px', wordBreak: 'keep-all' }}>{tr.introTitle}</h2>
              <p>{tr.introP1}</p>
              <p>{tr.introP2}</p>
              <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '24px' }}>{tr.introCta}</a>
            </div>
            <div className="pickleball-intro-image">
              <img src="/assets/images/about-pb.jpg" alt={tr.introImgAlt} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">{tr.featuresLabel}</span>
            <h2 className="section-title">{tr.featuresTitle}</h2>
          </div>
          <div className="pickleball-features">
            {tr.features.map(({ title, desc }, i) => (
              <div key={title} className="feature-card card-hover animate-on-scroll">
                <div className="feature-card-icon" aria-hidden="true">{featureIcons[i]}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
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

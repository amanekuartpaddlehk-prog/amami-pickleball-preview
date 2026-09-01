'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function AboutPage() {
  const { lang } = useLanguage()
  const tr = translations[lang].about

  return (
    <main id="main-content">
      <section className="page-hero">
        <p className="page-hero-label">{tr.heroLabel}</p>
        <h1>{tr.heroTitle}</h1>
        <p>{tr.heroDesc}</p>
      </section>

      <section className="section bg-bg">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 'clamp(40px,6vw,64px)' }}>
            <img
              src="/assets/images/logo.jpg"
              alt="あまねく AMAMI PICKLEBALL"
              className="animate-on-scroll"
              style={{ width: 'clamp(140px,22vw,200px)', height: 'clamp(140px,22vw,200px)', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
            />
          </div>
          <div className="mission-block animate-on-scroll">
            <blockquote style={{ fontSize: 'clamp(1.25rem,2.5vw,2rem)' }}>{tr.missionQuote}</blockquote>
            <p>{tr.missionDesc}</p>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header animate-on-scroll">
            <span className="section-label">{tr.orgLabel}</span>
            <h2 className="section-title">{tr.orgTitle}</h2>
          </div>
          <div className="event-body animate-on-scroll">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <tbody>
                {tr.orgTable.map(({ label, value }, i) => (
                  <tr key={label} style={{ borderBottom: i < tr.orgTable.length - 1 ? '1px solid var(--color-border)' : undefined }}>
                    <th style={{ padding: '16px 20px 16px 0', width: '30%', color: 'var(--color-muted)', fontWeight: 500, textAlign: 'left', whiteSpace: 'nowrap', verticalAlign: 'top' }}>{label}</th>
                    <td style={{ padding: '16px 0' }}>
                      {value.split('\n').map((line, j) => (
                        <span key={j}>{line}{j < value.split('\n').length - 1 && <br />}</span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg,#0a3d2e 0%,#1a6b5a 100%)', paddingBlock: 'clamp(48px,7vw,80px)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <p className="animate-on-scroll" style={{ fontFamily: 'var(--font-heading-en)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '14px' }}>{tr.visionLabel}</p>
          <h2 className="animate-on-scroll" style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', color: '#fff', marginBottom: '16px', wordBreak: 'keep-all' }}>{tr.visionTitle}</h2>
          <p className="animate-on-scroll" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '28px', lineHeight: 1.9 }}>
            {tr.visionDesc.split('\n').map((line, i) => (
              <span key={i}>{line}{i < tr.visionDesc.split('\n').length - 1 && <br />}</span>
            ))}
          </p>
          <div className="animate-on-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', textAlign: 'left' }}>
            {tr.visionItems.map(({ num, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px 16px' }}>
                <span style={{ fontFamily: 'var(--font-heading-en)', fontWeight: 900, color: 'var(--color-accent)', fontSize: '1rem', flexShrink: 0, minWidth: '24px' }}>{num}</span>
                <div>
                  <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9375rem' }}>{title}</span>
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8125rem', marginLeft: '8px' }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
          <a href="https://achieve8.jp/contact" target="_blank" rel="noopener noreferrer" className="btn btn-accent animate-on-scroll">{tr.ctaBtn} &rarr;</a>
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

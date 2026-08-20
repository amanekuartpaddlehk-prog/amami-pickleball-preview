'use client'
import { useEffect } from 'react'

export default function ContactPage() {
  useEffect(() => {
    window.location.replace('https://achieve8.jp/contact')
  }, [])

  return (
    <main id="main-content">
      <section style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem' }}>お問い合わせページへ移動しています...</p>
        <a href="https://achieve8.jp/contact" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.875rem' }}>
          移動しない場合はこちら →
        </a>
      </section>
    </main>
  )
}

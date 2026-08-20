'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function LoginForm() {
  const params = useSearchParams()
  const from = params.get('from') ?? '/'
  const error = params.get('error') === '1'

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0a3d2e 0%, #1a6b5a 60%, #2d5a3d 100%)',
      padding: '24px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        background: 'rgba(255,255,255,0.97)',
        borderRadius: '16px',
        padding: 'clamp(32px,6vw,48px)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
      }}>
        {/* ロゴ */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#1a6b5a',
            marginBottom: '6px',
          }}>Staging Preview</p>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: '1.5rem',
            fontWeight: 900,
            color: '#0a3d2e',
            letterSpacing: '-0.02em',
          }}>ART PADDLE</h1>
          <p style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '4px' }}>
            一般社団法人アチーブエイト
          </p>
        </div>

        {/* エラーメッセージ */}
        {error && (
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            padding: '12px 16px',
            marginBottom: '20px',
            fontSize: '0.875rem',
            color: '#dc2626',
          }}>
            IDまたはパスワードが正しくありません。
          </div>
        )}

        {/* フォーム */}
        <form action="/api/login" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input type="hidden" name="from" value={from} />

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
              ID
            </label>
            <input
              type="text"
              name="user"
              required
              autoComplete="username"
              placeholder="IDを入力"
              style={{
                width: '100%',
                padding: '11px 14px',
                border: '1.5px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
              パスワード
            </label>
            <input
              type="password"
              name="pass"
              required
              autoComplete="current-password"
              placeholder="パスワードを入力"
              style={{
                width: '100%',
                padding: '11px 14px',
                border: '1.5px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '13px',
              background: '#d4a857',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '0.9375rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.05em',
              marginTop: '4px',
            }}
          >
            ログイン
          </button>
        </form>

        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', marginTop: '24px' }}>
          あまねくアートパドル協会 デザインプレビュー
        </p>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0a3d2e,#1a6b5a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#fff', fontSize: '1rem' }}>読み込み中...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}

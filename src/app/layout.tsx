import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: '奄美ピックルボール協会',
  description: '一般社団法人アチーブエイト / 奄美ピックルボール協会の公式サイト',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=Noto+Serif+JP:wght@400;700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
        <link rel="stylesheet" href="/animations.css" />
      </head>
      <body>
        {children}
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}

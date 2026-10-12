// ============================================================
// メンテナンスモード
//   true  : 本番ドメインの全URLでメンテナンス画面(503)を表示する
//   false : 通常公開に戻る
// 解除手順: 下の値を false に変えて main に push（GitHub Actions が自動デプロイ）
// ============================================================
const MAINTENANCE_MODE = true

const STAGING_HOSTNAME = 'amami-pickleball-preview.pages.dev'
const PUBLIC_PREFIXES = ['/login', '/api/login', '/api/webhook']
const STATIC_EXTS = /\.(css|js|ico|png|jpg|jpeg|svg|webp|woff2?|ttf|gif|mp4|json)$/i
const AUTH_COOKIE = 'pb-staging'
const AUTH_VALUE = 'amami-pb-auth-2025'

// メンテナンス中でも通すパス（microCMS更新→自動デプロイ用webhook / ロゴ・ファビコン）
const MAINTENANCE_PASSTHROUGH = ['/api/webhook', '/assets/images/logo.jpg']

const MAINTENANCE_HTML = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>メンテナンス中 | あまねくアートパドル協会</title>
<link rel="icon" href="/assets/images/logo.jpg" type="image/jpeg">
<style>
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%}
  body{
    display:flex;align-items:center;justify-content:center;
    padding:24px;
    font-family:"Hiragino Sans","Noto Sans JP","Yu Gothic",system-ui,-apple-system,"Segoe UI",sans-serif;
    color:#fff;line-height:1.8;text-align:center;
    background:linear-gradient(135deg,#0a3d2e 0%,#1a6b5a 60%,#2d5a3d 100%);
  }
  main{width:100%;max-width:560px}
  .logo{
    width:104px;height:104px;margin:0 auto 28px;display:block;
    border-radius:50%;object-fit:cover;background:#fff;
    box-shadow:0 8px 32px rgba(0,0,0,.25);
  }
  .org{font-size:.9375rem;letter-spacing:.08em;color:rgba(255,255,255,.85);margin-bottom:28px}
  .org span{color:#d4a857}
  .label{
    font-size:.75rem;font-weight:700;letter-spacing:.25em;text-transform:uppercase;
    color:#d4a857;margin-bottom:12px;
  }
  h1{font-size:clamp(1.75rem,6vw,2.5rem);font-weight:700;letter-spacing:.06em;line-height:1.4;margin-bottom:20px}
  h1 span{display:inline-block}
  .msg{color:rgba(255,255,255,.85);font-size:.9375rem}
  .rule{width:48px;height:2px;background:#d4a857;margin:32px auto}
  .sub{color:rgba(255,255,255,.65);font-size:.8125rem;line-height:1.9}
  .sub strong{display:block;color:rgba(255,255,255,.85);font-weight:700;margin-top:10px}
</style>
</head>
<body>
<main>
  <img class="logo" src="/assets/images/logo.jpg" alt="あまねく AMAMI PICKLEBALL" width="104" height="104">
  <p class="org">あまねく<span>アートパドル</span>協会</p>
  <p class="label">Maintenance</p>
  <h1><span>ただいま</span><span>メンテナンス中です</span></h1>
  <p class="msg">ご迷惑をおかけしております。<br>公開までいましばらくお待ちください。</p>
  <div class="rule"></div>
  <p class="sub">
    <strong>Under maintenance</strong>
    This site is currently unavailable. Please check back later.
    <strong>Site en maintenance</strong>
    Ce site est temporairement indisponible. Merci de revenir plus tard.
  </p>
</main>
</body>
</html>`

function maintenanceResponse() {
  return new Response(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Retry-After': '86400',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}

export async function onRequest(context) {
  const { request, next } = context
  const url = new URL(request.url)
  const path = url.pathname

  // 本番ドメイン（ステージング以外。プレビューURLも含む）
  if (url.hostname !== STAGING_HOSTNAME) {
    if (!MAINTENANCE_MODE) return next()
    if (MAINTENANCE_PASSTHROUGH.includes(path)) return next()
    return maintenanceResponse()
  }

  // 静的ファイル・ログインページはスルー
  if (STATIC_EXTS.test(path)) return next()
  if (PUBLIC_PREFIXES.some(p => path.startsWith(p))) return next()

  // Cookie チェック
  const cookieHeader = request.headers.get('Cookie') ?? ''
  const authorized = cookieHeader
    .split(';')
    .some(c => c.trim() === `${AUTH_COOKIE}=${AUTH_VALUE}`)

  if (authorized) return next()

  // 未認証 → /login にリダイレクト
  const from = encodeURIComponent(path + url.search)
  return Response.redirect(`${url.origin}/login/?from=${from}`, 302)
}

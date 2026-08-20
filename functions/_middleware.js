const PUBLIC_PREFIXES = ['/login', '/api/login', '/api/webhook']
const STATIC_EXTS = /\.(css|js|ico|png|jpg|jpeg|svg|webp|woff2?|ttf|gif|mp4|json)$/i
const AUTH_COOKIE = 'pb-staging'
const AUTH_VALUE = 'amami-pb-auth-2025'

export async function onRequest(context) {
  const { request, next } = context
  const url = new URL(request.url)
  const path = url.pathname

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

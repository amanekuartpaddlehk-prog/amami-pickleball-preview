const VALID_USER = 'amami'
const VALID_PASS = 'pickleball2025'
const AUTH_COOKIE = 'pb-staging'
const AUTH_VALUE = 'amami-pb-auth-2025'

export async function onRequestPost(context) {
  const { request } = context
  const url = new URL(request.url)

  let user, pass, from
  try {
    const body = await request.formData()
    user = body.get('user') ?? ''
    pass = body.get('pass') ?? ''
    from = body.get('from') ?? '/'
  } catch {
    return Response.redirect(`${url.origin}/login/?error=1`, 302)
  }

  // 不正な from パラメーターを弾く（open redirect 対策）
  const safeTo = from.startsWith('/') ? from : '/'

  if (user === VALID_USER && pass === VALID_PASS) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: `${url.origin}${safeTo}`,
        'Set-Cookie': `${AUTH_COOKIE}=${AUTH_VALUE}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`,
      },
    })
  }

  return Response.redirect(`${url.origin}/login/?error=1&from=${encodeURIComponent(safeTo)}`, 302)
}

// GET は許可しない
export async function onRequestGet(context) {
  return Response.redirect(`${new URL(context.request.url).origin}/login/`, 302)
}

export async function onRequestPost({ request, env }) {
  const pat = env.GITHUB_PAT
  if (!pat) {
    return new Response(JSON.stringify({ ok: false, error: 'GITHUB_PAT not set' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const res = await fetch(
    'https://api.github.com/repos/amanekuartpaddlehk-prog/amami-pickleball-preview/dispatches',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${pat}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
        'User-Agent': 'amami-pickleball-webhook',
      },
      body: JSON.stringify({ event_type: 'microcms-update' }),
    }
  )

  if (res.status === 204) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const body = await res.text()
  return new Response(JSON.stringify({ ok: false, error: body }), {
    status: 500,
    headers: { 'Content-Type': 'application/json' },
  })
}

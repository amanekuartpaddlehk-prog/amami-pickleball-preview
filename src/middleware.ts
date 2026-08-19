import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const USER = 'amami'
const PASS = 'pickleball2025'

export function middleware(request: NextRequest) {
  const auth = request.headers.get('authorization')

  if (auth && auth.startsWith('Basic ')) {
    try {
      const decoded = Buffer.from(auth.slice(6), 'base64').toString('utf-8')
      const colonIdx = decoded.indexOf(':')
      const user = decoded.slice(0, colonIdx)
      const pass = decoded.slice(colonIdx + 1)
      if (user === USER && pass === PASS) {
        return NextResponse.next()
      }
    } catch {
      // fall through to 401
    }
  }

  return new NextResponse('認証が必要です', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="奄美ピックルボール協会 Staging"',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}

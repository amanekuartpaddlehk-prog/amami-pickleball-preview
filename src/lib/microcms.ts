import { createClient } from 'microcms-js-sdk'

function getClient() {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN
  const apiKey = process.env.MICROCMS_API_KEY

  if (!serviceDomain || !apiKey) {
    console.error(
      '[microCMS] MICROCMS_SERVICE_DOMAIN または MICROCMS_API_KEY がありません'
    )
    return null
  }

  return createClient({
    serviceDomain,
    apiKey,
  })
}

export type NewsItem = {
  id: string
  title: string
  body: string
  category?: string
  publishedAt: string
  updatedAt: string
}

export type MicroCMSImage = {
  url: string
  width?: number
  height?: number
}

export type EventItem = {
  id: string
  title: string
  date: string
  location?: string
  description?: string
  eyecatch?: MicroCMSImage
  images?: MicroCMSImage[]
  status: ('upcoming' | 'completed')[]
  publishedAt: string
}

export async function getNewsList(
  limit = 3
): Promise<NewsItem[]> {
  const client = getClient()

  if (!client) return []

  try {
    const data = await client.getList<NewsItem>({
      endpoint: 'news',
      queries: {
        limit,
        orders: '-publishedAt',
      },
    })

    return data.contents
  } catch (error) {
    console.error('[microCMS] news取得エラー:', error)
    return []
  }
}

export async function getUpcomingEvents(
  limit = 5
): Promise<EventItem[]> {
  const client = getClient()

  if (!client) return []

  try {
    const data = await client.getList<EventItem>({
      endpoint: 'events',
      queries: {
        limit,
        orders: 'date',
        filters: 'status[contains]upcoming',
      },
    })

    console.log(
      `[microCMS] upcoming events: ${data.contents.length}件`
    )

    return data.contents
  } catch (error) {
    console.error(
      '[microCMS] upcoming events取得エラー:',
      error
    )
    return []
  }
}

export async function getAllEvents(
  limit = 100
): Promise<EventItem[]> {
  const client = getClient()

  if (!client) return []

  try {
    const data = await client.getList<EventItem>({
      endpoint: 'events',
      queries: {
        limit,
        orders: '-date',
      },
    })

    return data.contents
  } catch (error) {
    console.error(
      '[microCMS] all events取得エラー:',
      error
    )
    return []
  }
}

export async function getEventDetail(
  contentId: string
): Promise<EventItem | null> {
  const client = getClient()

  if (!client) return null

  try {
    return await client.getListDetail<EventItem>({
      endpoint: 'events',
      contentId,
    })
  } catch (error) {
    console.error(
      `[microCMS] event detail取得エラー (${contentId}):`,
      error
    )
    return null
  }
}

import { createClient } from 'microcms-js-sdk'

function getClient() {
  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN
  const apiKey = process.env.MICROCMS_API_KEY
  if (!serviceDomain || !apiKey) return null
  return createClient({ serviceDomain, apiKey })
}

export type NewsItem = {
  id: string
  title: string
  body: string
  category?: string
  publishedAt: string
  updatedAt: string
}

export type EventItem = {
  id: string
  title: string
  date: string
  location?: string
  description?: string
  status: 'upcoming' | 'completed'
  publishedAt: string
}

export async function getNewsList(limit = 3): Promise<NewsItem[]> {
  const client = getClient()
  if (!client) return []
  try {
    const data = await client.getList<NewsItem>({ endpoint: 'news', queries: { limit, orders: '-publishedAt' } })
    return data.contents
  } catch {
    return []
  }
}

export async function getUpcomingEvents(limit = 5): Promise<EventItem[]> {
  const client = getClient()
  if (!client) return []
  try {
    const data = await client.getList<EventItem>({
      endpoint: 'events',
      queries: { limit, orders: 'date', filters: 'status[equals]upcoming' },
    })
    return data.contents
  } catch {
    return []
  }
}

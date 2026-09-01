import type { Metadata } from 'next'
import { getUpcomingEvents } from '@/lib/microcms'
import { EventsClient } from '../_components/EventsClient'

export const metadata: Metadata = { title: 'イベント・大会 | あまねくアートパドル協会', description: 'あまねくアートパドル協会が主催・参加するイベント・大会情報をお届けします。' }

export default async function EventsPage() {
  const eventsList = await getUpcomingEvents(20)
  return <EventsClient eventsList={eventsList} />
}

import type { Metadata } from 'next'
import { getNewsList, getUpcomingEvents } from '@/lib/microcms'
import { HomeClient } from './_components/HomeClient'

export const metadata: Metadata = { title: 'あまねくアートパドル協会 | 奄美大島でアートパドルを楽しもう', description: 'アートとスポーツで島から世界へ。あまねくアートパドル協会は奄美大島を拠点に、年齢・体力を問わず楽しめるアートパドル（ピックルボール）の普及活動をしています。' }

export default async function HomePage() {
  const [newsList, eventsList] = await Promise.all([getNewsList(3), getUpcomingEvents(5)])
  return <HomeClient newsList={newsList} eventsList={eventsList} />
}

import type { Metadata } from 'next'
import MarketingHome from '@/components/marketing/marketing-home'

export const metadata: Metadata = {
  title: 'Thoughtful guidance for the life you’re building',
  description: 'Meet a personal team of specialized AI advisors who remember what matters to you and help you make progress.',
  openGraph: { title: 'Personal Advisors', description: 'A personal team for the life you’re building.', type: 'website' },
}

export default function Page() { return <MarketingHome /> }

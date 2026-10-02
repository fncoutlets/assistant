import type { Metadata, Viewport } from 'next'
import { Providers } from '@/components/providers'
import './globals.css'
export const metadata: Metadata = { title: { default: 'Personal Advisors', template: '%s · Personal Advisors' }, description: 'A personal team of thoughtful AI advisors for the life you are building.', openGraph: { title: 'Personal Advisors', description: 'A personal team for the life you are building.', type: 'website' } }
export const viewport: Viewport = { themeColor: '#f8f7f3', width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Providers>{children}</Providers></body></html> }

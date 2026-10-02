import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { advisors } from '@/mocks/data/advisors'
import { AdvisorCard, Button, PageContainer, PageHeader } from '@/components/ui/primitives'
import { MarketingNavbar, Footer } from '@/components/marketing/marketing-home'

export default function AdvisorsPage() { return <div className="min-h-screen bg-background"><MarketingNavbar /><PageContainer><PageHeader eyebrow="One team, many perspectives" title="Meet your advisors" description="Specialized guidance for the areas of life you want to make more intentional." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{advisors.map((advisor) => <div key={advisor.id} className="flex flex-col gap-3"><Link href={`/advisors/${advisor.id}`}><AdvisorCard advisor={advisor} /></Link><Link href="/signup" className="px-1 text-sm font-medium text-primary hover:underline">Build your team <ArrowRight className="ml-1 inline size-4" /></Link></div>)}</div></PageContainer><Footer /></div> }

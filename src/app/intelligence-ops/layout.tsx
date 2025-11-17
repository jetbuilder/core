import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Intelligence Operations AI Workflows - Competitor Monitoring & Analysis | JetBuilder Studio',
  description: 'Multi-source intelligence gathering and analysis. Competitor monitoring, entity detection, anomaly identification, web scraping workflows, and multi-language processing. Built with JetBuilder Studio.',
  keywords: [
    'intelligence operations AI',
    'competitor monitoring AI',
    'entity detection AI',
    'anomaly detection AI',
    'web scraping AI',
    'multi-language processing',
    'intelligence gathering AI',
    'competitive intelligence',
    'business intelligence AI',
    'agentic workflows intelligence',
    'OSINT automation',
    'data mining AI',
    'surveillance AI',
    'monitoring automation',
  ],
  openGraph: {
    title: 'Intelligence Operations AI Workflows | JetBuilder Studio',
    description: 'Autonomous intelligence gathering with competitor monitoring, entity detection, and web scraping workflows.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelligence Operations AI Workflows | JetBuilder Studio',
    description: 'Multi-source intelligence gathering with 55+ language support.',
  },
}

export default function IntelligenceOpsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start Building AI Agentic Workflows - Free Tier & Enterprise | JetBuilder Studio',
  description: 'Get started with JetBuilder Studio. Build custom AI agentic workflows with our visual IDE. Free tier for developers or enterprise solutions with support. 49+ pre-built components available.',
  keywords: [
    'start building AI workflows',
    'AI workflow builder signup',
    'free AI platform',
    'agentic workflow free tier',
    'JetBuilder Studio signup',
    'AI development platform',
    'multi-agent system builder',
    'no-code AI platform',
    'low-code AI platform',
    'visual workflow builder',
    'AI workflow IDE',
    'enterprise AI platform',
  ],
  openGraph: {
    title: 'Start Building AI Agentic Workflows | JetBuilder Studio',
    description: 'Free tier for developers or enterprise solutions. Build custom workflows with 49+ pre-built components.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start Building with JetBuilder Studio',
    description: 'Visual IDE for multi-agent systems. Free tier available.',
  },
}

export default function StartBuildingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


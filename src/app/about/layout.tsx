import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About JetBuilder | Sovereign AI Platform for Enterprise & Government',
  description: 'Learn about JetBuilder\'s mission to provide complete AI independence. Deploy autonomous AI agents on your private infrastructure with customer data-trained Small Language Models. FedRAMP authorization in progress.',
  openGraph: {
    title: 'About JetBuilder - Sovereign AI Platform',
    description: 'Complete AI independence for government and enterprise. On-premises deployment with full data sovereignty.',
    url: 'https://jetbuilder.io/about',
  },
  alternates: {
    canonical: 'https://jetbuilder.io/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Use Cases | Insurance, Banking, Healthcare, Government | JetBuilder',
  description: 'Explore JetBuilder AI use cases across industries: Insurance claims processing, banking compliance, healthcare documentation, government intelligence, legal document analysis, and more. On-premises AI for regulated industries.',
  keywords: [
    'insurance AI use cases',
    'banking AI applications',
    'healthcare AI solutions',
    'government AI use cases',
    'legal AI document processing',
    'claims processing AI',
    'compliance automation',
    'document intelligence',
  ],
  openGraph: {
    title: 'AI Use Cases Across Industries - JetBuilder',
    description: 'Insurance, banking, healthcare, government, and legal AI solutions with complete data sovereignty.',
    url: 'https://jetbuilder.io/use-cases',
  },
  alternates: {
    canonical: 'https://jetbuilder.io/use-cases',
  },
}

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



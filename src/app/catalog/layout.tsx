import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Solutions Catalog - Pre-Built Industry-Specific AI Agents',
  description: 'Browse pre-built AI solutions for healthcare, banking, insurance, legal, telecommunications, and government. Ready to deploy with complete data sovereignty. Customer data-trained SLMs for enterprise and government.',
  keywords: 'AI solutions catalog, industry AI, healthcare AI, banking AI, insurance AI, legal AI, telecom AI, government AI solutions, pre-built AI agents',
  openGraph: {
    title: 'AI Solutions Catalog - Industry-Specific AI Agents',
    description: 'Pre-configured AI solutions for government, healthcare, banking, legal, and enterprise deployment',
    url: 'https://jetbuilder.io/catalog',
  },
}

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


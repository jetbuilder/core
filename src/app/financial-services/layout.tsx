import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Services AI Workflows - Claims, Lending, KYC/KYB | JetBuilder Studio',
  description: 'Autonomous AI workflows for banking and insurance. Claims processing with fraud detection, mortgage approval, KYC/KYB onboarding, corporate lending, and CASA operations. Built with JetBuilder Studio.',
  keywords: [
    'financial services AI',
    'banking AI workflows',
    'insurance claims AI',
    'claims processing automation',
    'fraud detection AI',
    'mortgage approval AI',
    'KYC automation',
    'KYB automation',
    'corporate lending AI',
    'CASA automation',
    'financial compliance AI',
    'banking automation',
    'insurance automation',
    'agentic workflows financial services',
    'AI for banking',
    'AI for insurance',
  ],
  openGraph: {
    title: 'Financial Services AI Workflows | JetBuilder Studio',
    description: 'Autonomous workflows for claims processing, mortgage approval, KYC/KYB, lending, and CASA operations with full compliance.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Services AI Workflows | JetBuilder Studio',
    description: 'AI workflows for banking and insurance with fraud detection and compliance.',
  },
}

export default function FinancialServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


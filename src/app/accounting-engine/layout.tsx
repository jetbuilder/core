import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accounting Engine - AI-Powered Financial Automation | JetBuilder',
  description: 'Enterprise accounting platform powered by 8 specialized AI agents. Automate bookkeeping, financial reporting, and AP/AR workflows with 99%+ accuracy. On-premises deployment, complete data sovereignty.',
  keywords: [
    'AI accounting',
    'automated bookkeeping',
    'financial automation',
    'AP automation',
    'AR automation',
    'bank reconciliation',
    'financial reporting',
    'enterprise accounting',
    'SOX compliance',
    'GAAP compliance',
    'on-premises accounting',
    'AI agents',
    'machine learning finance'
  ],
  openGraph: {
    title: 'Accounting Engine - AI-Powered Financial Automation',
    description: 'Enterprise accounting platform powered by 8 specialized AI agents. 99%+ accuracy, complete audit trails, on-premises deployment.',
    type: 'website',
  },
}

export default function AccountingEngineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

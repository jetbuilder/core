import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security & Compliance | FedRAMP, HIPAA, FIPS 140-2 | JetBuilder',
  description: 'JetBuilder\'s Sovereign AI Platform built for maximum security. FedRAMP authorization in progress, HIPAA compliant architecture, FIPS 140-2 encryption, PIPEDA compliant. Zero-trust security model with air-gapped deployment options.',
  keywords: [
    'FedRAMP AI',
    'HIPAA compliant AI',
    'FIPS 140-2',
    'PIPEDA compliance',
    'air-gapped AI',
    'zero-trust AI',
    'secure AI platform',
    'government security clearance',
    'on-premises security',
    'data sovereignty security',
  ],
  openGraph: {
    title: 'Security & Compliance - JetBuilder Sovereign AI',
    description: 'FedRAMP, HIPAA, FIPS 140-2 compliant AI platform. Maximum security for regulated industries.',
    url: 'https://jetbuilder.io/security',
  },
  alternates: {
    canonical: 'https://jetbuilder.io/security',
  },
}

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



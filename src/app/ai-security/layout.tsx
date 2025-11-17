import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Security Testing Workflows - LLM Security & Prompt Injection Detection | JetBuilder Studio',
  description: 'Comprehensive LLM security testing suite. Automated prompt injection detection, jailbreaking detection, adversarial attack testing, and continuous security monitoring. Built with JetBuilder Studio.',
  keywords: [
    'AI security testing',
    'LLM security',
    'prompt injection detection',
    'jailbreaking detection',
    'adversarial attack detection',
    'AI vulnerability testing',
    'LLM safety testing',
    'AI security automation',
    'prompt security',
    'AI threat detection',
    'machine learning security',
    'AI red teaming',
    'LLM penetration testing',
    'agentic workflows security',
  ],
  openGraph: {
    title: 'AI Security Testing Workflows | JetBuilder Studio',
    description: 'Comprehensive LLM security testing with prompt injection and jailbreaking detection.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Security Testing Workflows | JetBuilder Studio',
    description: '1000+ test vectors for comprehensive AI security testing.',
  },
}

export default function AISecurityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


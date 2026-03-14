import { Metadata } from 'next'
import { ContactCenterSolutionSchema } from '@/components/structured-data'

export const metadata: Metadata = {
  title: 'Contact Center Solutions | Speech-to-Text | AI Agentic Workflows | JetBuilder',
  description: 'Build AI agentic workflows for contact centers with real-time speech-to-text transcription. Complete contact center solution for insurance, banking, and regulated industries. 49 AI components with human oversight accelerate operations 10x. Learn how to build agentic workflows with human-in-the-loop intelligence.',
  keywords: [
    'contact center solutions',
    'speech to text solutions',
    'speech-to-text transcription',
    'how to build AI agentic workflows',
    'how to build agentic workflows',
    'agentic workflow builder',
    'AI agentic workflow platform',
    'build autonomous agents',
    'contact center AI solution',
    'call center solution',
    'contact center software',
    'AI contact center platform',
    'speech recognition software',
    'voice transcription solution',
    'real-time transcription',
    'call transcription software',
    'autonomous contact center',
    'insurance contact center solution',
    'banking contact center solution',
    'human-in-the-loop AI',
    'regulated industry contact center',
    'contact center automation',
    'call center AI',
    'customer service AI platform',
    'compliance automation',
    'fraud detection AI',
    'sentiment analysis software',
    'intelligent call routing',
    'agent coaching AI',
    'quality assurance automation',
    'HIPAA compliant contact center',
    'claims processing automation',
    'KYC automation',
    'AML compliance software',
    'multi-channel contact center',
    'voice AI platform',
    'speech to text API',
    'agentic AI workflow',
    'multi-agent system',
    'contact center intelligence',
    'conversational AI platform',
    '49 component architecture',
    'workflow orchestration',
  ],
  openGraph: {
    title: 'Contact Center Solutions with Speech-to-Text & AI Agentic Workflows',
    description: 'Build AI agentic workflows for contact centers. Real-time speech-to-text transcription. 49 autonomous components for insurance & banking. Learn how to build workflows with human-in-the-loop intelligence.',
    url: 'https://jetbuilder.io/contact-center',
    type: 'website',
    images: [
      {
        url: '/workflow-architecture.png',
        width: 1920,
        height: 1080,
        alt: 'AI Agentic Workflow Architecture for Contact Centers - Speech-to-Text, 49 components',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Build AI Agentic Workflows for Contact Centers',
    description: 'Complete contact center solution with speech-to-text transcription. 49-component agentic workflow for insurance & banking.',
    images: ['/workflow-architecture.png'],
  },
  alternates: {
    canonical: 'https://jetbuilder.io/contact-center',
  },
}

export default function ContactCenterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ContactCenterSolutionSchema />
      {children}
    </>
  )
}


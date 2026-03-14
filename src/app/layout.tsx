import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Analytics } from '@vercel/analytics/react'
import { OrganizationSchema, SoftwareProductSchema } from '@/components/structured-data'
import FAQSchema from '@/components/faq-schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jetbuilder.io'),
  title: {
    default: 'JetBuilder Studio - On-Premises AI Alternative to Azure, AWS & Google | Agentic Workflow Platform',
    template: '%s | JetBuilder Studio - On-Premises AI Platform'
  },
  description: 'Alternative to Azure OpenAI, AWS Bedrock & Google Vertex AI. Build AI agentic workflows on YOUR infrastructure with JetBuilder Studio. Visual IDE for multi-agent systems with 49+ pre-built components. No cloud dependency - complete data sovereignty with on-premises deployment. Small Language Models trained on your data.',
  keywords: [
    // Alternative searches
    'alternative to Azure OpenAI',
    'alternative to AWS Bedrock',
    'alternative to Google Vertex AI',
    'OpenAI alternative on-premises',
    'self-hosted AI platform',
    'Azure AI alternative',
    'AWS AI alternative',
    'Google AI alternative',
    'no cloud AI solution',
    'private AI without cloud',
    
    // Core product
    'agentic workflow builder',
    'AI workflow IDE',
    'pre-built AI solutions',
    'multi-agent systems',
    'agentic AI platform',
    
    // Use cases
    'contact center AI',
    'financial services AI',
    'intelligence operations AI',
    'AI security testing',
    'insurance claims automation',
    'banking AI automation',
    'healthcare AI HIPAA',
    'government AI FedRAMP',
    
    // Small Language Models
    'small language models',
    'SLM deployment',
    'custom AI models',
    'domain-specific AI',
    'custom LLM training',
    'private LLM deployment',
    'on-premises LLM',
    'self-hosted LLM',
    
    // Data sovereignty
    'sovereign AI',
    'on-premises AI',
    'data sovereignty AI',
    'private AI infrastructure',
    'air-gapped AI',
    'zero cloud dependency',
    'AI independence',
    'no vendor lock-in AI',
    
    // Compliance
    'HIPAA compliant AI',
    'PIPEDA compliant AI',
    'FedRAMP AI',
    'FIPS 140-2 AI',
    'SOC 2 AI platform',
    'regulated industry AI',
    'compliance AI platform',
    
    // Features
    'agentic AI',
    'multi-modal AI',
    'document processing AI',
    'voice transcription AI',
    'video analysis AI',
    'business intelligence AI',
    'visual workflow builder',
    'no-code AI platform',
    'low-code AI platform',
    
    // Target markets
    'enterprise AI',
    'Canadian AI platform',
    'US government AI',
    'banking AI solutions',
    'healthcare AI platform',
    'legal AI software',
    'telecommunications AI',
    
    // Deployment
    'on-premise deployment',
    'customer data trained AI',
    'private cloud AI',
    'secure AI platform',
    'self-managed AI',
  ],
  authors: [{ name: 'JetBuilder', url: 'https://www.jetbuilder.io' }],
  creator: 'JetBuilder',
  publisher: 'JetBuilder',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'JetBuilder Studio - Alternative to Azure OpenAI, AWS Bedrock & Google Vertex AI',
    description: 'Build AI workflows on YOUR infrastructure. No Azure, AWS, or Google dependency. Visual IDE for multi-agent systems with 49+ components. Complete data sovereignty. Small Language Models trained on your data.',
    url: 'https://jetbuilder.io',
    siteName: 'JetBuilder Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JetBuilder Studio - AI Agentic Workflow Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JetBuilder Studio - On-Premises AI Alternative to Azure, AWS & Google',
    description: 'No cloud dependency. Build AI workflows on YOUR infrastructure. Small Language Models trained on your data. Complete data sovereignty.',
    images: ['/twitter-image.jpg'],
    creator: '@jetbuilder',
    site: '@jetbuilder',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://jetbuilder.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <OrganizationSchema />
        <SoftwareProductSchema />
        <FAQSchema />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}


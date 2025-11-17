import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import ChatbotTrigger from '@/components/ui/chatbot-trigger'
import { Analytics } from '@vercel/analytics/react'
import { OrganizationSchema, SoftwareProductSchema } from '@/components/structured-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jetbuilder.io'),
  title: {
    default: 'JetBuilder Studio - AI Agentic Workflow Platform & Pre-Built Solutions',
    template: '%s | JetBuilder Studio'
  },
  description: 'Build AI agentic workflows with JetBuilder Studio. Visual IDE for multi-agent systems with 49+ pre-built components. Deploy enterprise-ready solutions for contact centers, financial services, intelligence ops, and AI security. Complete data sovereignty with on-premises deployment.',
  keywords: [
    'agentic workflow builder',
    'AI workflow IDE',
    'pre-built AI solutions',
    'multi-agent systems',
    'agentic AI platform',
    'contact center AI',
    'financial services AI',
    'intelligence operations AI',
    'AI security testing',
    'sovereign AI',
    'on-premises AI',
    'data sovereignty',
    'private AI infrastructure',
    'small language models',
    'SLM',
    'custom AI models',
    'enterprise AI',
    'air-gapped AI',
    'government AI solutions',
    'HIPAA compliant AI',
    'PIPEDA compliant AI',
    'FedRAMP AI',
    'FIPS 140-2',
    'autonomous AI agents',
    'multi-modal AI',
    'document processing AI',
    'voice transcription AI',
    'video analysis AI',
    'business intelligence AI',
    'Canadian AI platform',
    'US government AI',
    'banking AI solutions',
    'healthcare AI platform',
    'legal AI software',
    'telecommunications AI',
    'insurance claims AI',
    'compliance monitoring AI',
    'on-premise deployment',
    'customer data trained AI',
    'zero cloud dependency',
    'AI independence',
    'private cloud AI',
    'secure AI platform',
    'regulated industry AI',
    'visual workflow builder',
    'no-code AI platform',
    'low-code AI platform',
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
    title: 'JetBuilder Studio - Build AI Agentic Workflows | Pre-Built Solutions',
    description: 'Visual IDE for building multi-agent systems with 49+ components. Deploy enterprise-ready solutions for contact centers, financial services, intelligence ops, and AI security. Complete data sovereignty.',
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
    title: 'JetBuilder Studio - AI Agentic Workflow Platform',
    description: 'Build custom workflows or deploy pre-built solutions. Visual IDE for multi-agent systems with complete data sovereignty.',
    images: ['/twitter-image.jpg'],
    creator: '@jetbuilder',
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
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatbotTrigger />
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


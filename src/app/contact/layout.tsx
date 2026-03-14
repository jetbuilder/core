import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact JetBuilder | Request Demo & Get Pricing',
  description: 'Contact JetBuilder for a personalized demo of our Sovereign AI Platform. Get pricing information for on-premises AI deployment. Sales available for government, healthcare, banking, and enterprise.',
  openGraph: {
    title: 'Contact JetBuilder - Request Demo',
    description: 'Get in touch with our team for AI sovereignty solutions tailored to your needs.',
    url: 'https://jetbuilder.io/contact',
  },
  alternates: {
    canonical: 'https://jetbuilder.io/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



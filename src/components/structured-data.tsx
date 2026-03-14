export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JetBuilder',
    legalName: 'JetBuilder',
    url: 'https://jetbuilder.io',
    logo: 'https://jetbuilder.io/logo.png',
    description: 'Sovereign AI Platform for government and enterprise deployment with complete data sovereignty. Deploy autonomous AI agents on your private infrastructure with customer data-trained Small Language Models.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
      addressRegion: 'Ontario',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: 'sales@jetbuilder.io',
        url: 'https://jetbuilder.io/contact',
        availableLanguage: ['English', 'French'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Technical Support',
        email: 'support@jetbuilder.io',
        availableLanguage: ['English'],
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/jetbuilder',
      'https://twitter.com/jetbuilder',
      'https://github.com/jetbuilder',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    award: 'FedRAMP Authorization in Progress',
    keywords: 'sovereign AI, on-premises AI, data sovereignty, enterprise AI, government AI, HIPAA compliant AI, PIPEDA compliant, small language models',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function SoftwareProductSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'JetBuilder Sovereign AI Platform',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Artificial Intelligence Platform',
    operatingSystem: 'Linux, Ubuntu 22.04 LTS, RHEL 8+',
    offers: [
      {
        '@type': 'Offer',
        name: 'Pre-Built Catalog Solution',
        price: '495',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '495',
          priceCurrency: 'USD',
          billingDuration: 'P1M',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitText: 'solution',
          },
        },
        eligibleCustomerType: 'Business',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Cloud Hosted by JetBuilder',
        price: '2995',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '2995',
          priceCurrency: 'USD',
          billingDuration: 'P1M',
        },
        eligibleCustomerType: 'Business',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise Professional (On-Premises)',
        price: '195000',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '195000',
          priceCurrency: 'USD',
          billingDuration: 'P1Y',
        },
        eligibleCustomerType: 'Business',
        availability: 'https://schema.org/InStock',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
    description: 'On-premises AI platform with customer data-trained Small Language Models. Complete data sovereignty with autonomous AI agents for document processing, voice transcription, video analysis, and multi-modal intelligence.',
    softwareVersion: '2.0',
    releaseNotes: 'Enhanced Rust core architecture, improved memory safety, multi-agent orchestration',
    featureList: [
      'Data Sovereignty',
      'On-Premises Deployment',
      'Custom Small Language Models (SLMs)',
      'Multi-Modal Processing',
      'Air-Gapped Capability',
      'FedRAMP Authorization in Progress',
      'HIPAA Compliant Architecture',
      'PIPEDA Compliant',
      '55+ Language Support',
      'Autonomous AI Agents',
      'Document Intelligence',
      'Voice Transcription',
      'Video Analysis',
    ],
    screenshot: 'https://www.jetbuilder.io/platform-screenshot.jpg',
    softwareRequirements: 'Linux, 32GB RAM minimum, 500GB storage',
    permissions: 'Requires security clearance for classified deployments',
    targetProduct: {
      '@type': 'Product',
      name: 'Sovereign AI Infrastructure',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ContactCenterSolutionSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Autonomous Contact Center AI Solution',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Contact Center Software',
    description: 'AI-powered contact center solution with human-in-the-loop oversight. 49 autonomous AI components orchestrated for insurance, banking, and regulated industries. Accelerates operations 10x while maintaining full compliance.',
    operatingSystem: 'Web-based, On-Premises Compatible',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: 'Contact for pricing',
      eligibleCustomerType: 'Business',
    },
    featureList: [
      'Human-in-the-Loop AI Architecture',
      'Real-time Call Sentiment Analysis',
      'Automated Call Routing',
      'Fraud Detection',
      'Compliance Validation',
      'Multi-Channel Support (Voice, SMS, Email, Chat)',
      'Speech-to-Text Processing',
      'Multi-Language Support',
      'Agent Performance Coaching',
      'Quality Assurance Automation',
      'Claims Processing Automation',
      'KYC/AML Compliance',
      'HIPAA Compliant Architecture',
      '49 AI Components',
      '50 Intelligent Connections',
      '10x Faster Operations',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '28',
      bestRating: '5',
      worstRating: '1',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Insurance Companies, Banks, Financial Institutions, Healthcare Organizations, Regulated Industries',
    },
    serviceType: 'Contact Center Automation',
    provider: {
      '@type': 'Organization',
      name: 'JetBuilder',
      url: 'https://jetbuilder.io',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}


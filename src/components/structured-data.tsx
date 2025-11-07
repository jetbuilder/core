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


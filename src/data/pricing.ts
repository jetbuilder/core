export const pricingPlans = [
  {
    id: "catalog-solution",
    name: "Pre-Built Catalog Solution",
    price: "$495 - $4,995",
    period: "per month",
    description: "Single ready-to-deploy solution from JetBuilder Catalog - priced by company size and usage",
    features: [
      "One pre-built AI solution from our catalog",
      "Ready-to-deploy with minimal configuration",
      "Pricing based on company size:",
      "• Small (1-50 employees): $495-995/month",
      "• Mid-size (51-250 employees): $1,495-2,495/month",
      "• Large (251+ employees): $2,995-4,995/month",
      "Transaction pricing: Up to 100K included, then $0.05 per additional transaction",
      "Hosted in Canadian or US data centers",
      "Standard support (business hours, 8-hour response)",
      "Pre-configured for immediate use",
      "No custom development required",
      "Monthly usage analytics"
    ],
    highlight: false,
    badge: "Catalog",
    cta: "View Catalog",
    ctaLink: "/catalog"
  },
  {
    id: "cloud-hosted",
    name: "Cloud Hosted by JetBuilder",
    price: "$2,995",
    period: "per month + usage",
    description: "Managed cloud solution hosted in secure Canadian or US data centers by JetBuilder",
    features: [
      "Up to 3 concurrent AI Workflows with multiple components",
      "500,000 transactions per month included",
      "$0.04 per additional transaction (up to 5M total per month)*",
      "Pre-trained SLM models for your industry",
      "Hosted in Canadian or US data centers (your choice)",
      "Standard support (business hours, 8-hour response target)**",
      "Monthly usage reports and analytics",
      "SOC 2, ISO 27001 certified infrastructure",
      "Data stays in your chosen region (Canada or US)",
      "No hardware or infrastructure management required",
      "Subject to Fair Use Policy - see Terms of Service"
    ],
    highlight: false,
    badge: "Quick Start",
    cta: "Start Free Trial",
    ctaLink: "/contact"
  },
  {
    id: "enterprise-starter",
    name: "Enterprise Starter (On-Premises)",
    price: "$75,000",
    period: "per year",
    description: "Perfect for mid-size organizations wanting full control with on-premises deployment",
    features: [
      "Up to 5 concurrent AI Workflows with multiple components",
      "1 million transactions per month",
      "Basic SLM customization on your data",
      "Up to 5 languages",
      "On-premises deployment assistance",
      "Standard support (business hours, 24-hour response)",
      "Quarterly SLM retraining",
      "Standard security and compliance features",
      "Data sovereignty controls on your infrastructure"
    ],
    highlight: false,
    cta: "Schedule Demo",
    ctaLink: "/contact"
  },
  {
    id: "enterprise-professional",
    name: "Enterprise Professional (On-Premises)",
    price: "$195,000",
    period: "per year",
    description: "Comprehensive solution for large enterprises with advanced AI requirements",
    features: [
      "Up to 20 concurrent AI Workflows with multiple components",
      "10 million transactions per month",
      "Advanced SLM customization with dedicated training cycles",
      "Up to 15 languages",
      "Full deployment engineering support",
      "Premium support (24/7, 4-hour response, dedicated engineer)",
      "Monthly SLM retraining and optimization",
      "Advanced security and compliance features",
      "Custom integration development",
      "Quarterly performance reviews",
      "Data sovereignty controls on your infrastructure"
    ],
    highlight: true,
    popular: true,
    cta: "Schedule Demo",
    ctaLink: "/contact"
  },
  {
    id: "enterprise-unlimited",
    name: "Enterprise Unlimited (Hybrid/On-Premises)",
    price: "Starting at $350,000",
    period: "per year - custom pricing available",
    description: "Purpose-built for large-scale operations and mission-critical business infrastructure",
    features: [
      "Unlimited AI Workflows within agreed infrastructure",
      "Unlimited transaction processing",
      "Fully custom SLM (Small Language Model) development for your domain",
      "All 55+ languages",
      "Multi-region deployment support (Canada & US)",
      "White-glove 24/7/365 support with dedicated engineers",
      "Maximum security and compliance support (PIPEDA, HIPAA, SOX, etc.)",
      "Dedicated account team and on-site engineering",
      "Custom feature development",
      "Multi-year licensing options with up to 25% discount",
      "Hybrid cloud + on-premises deployment options",
      "Data sovereignty controls and air-gap capability"
    ],
    highlight: false,
    cta: "Request Consultation",
    ctaLink: "/contact"
  }
];

export const pricingDisclaimer = `* Transaction overage pricing: $0.04 per transaction above 500K included. Maximum 5M transactions per month on Cloud Hosted tier. Usage above 5M requires Enterprise tier. ** Support response times are targets, not guarantees. Response times measured during business hours (9am-5pm ET, Mon-Fri, excluding holidays). See Terms of Service for complete details.

Important: All pricing and feature information is subject to change. Actual implementations may vary based on specific requirements and configurations. Contact sales for binding quotes and Service Level Agreements.`;

export const savingsDisclaimer = `Cost savings and ROI calculations are illustrative examples based on assumptions about typical usage patterns, infrastructure costs, and deployment configurations. Actual costs and savings will vary significantly based on your specific transaction volumes, data requirements, infrastructure, support needs, and implementation approach. These figures are estimates only and not guarantees of savings, performance, or results. Contact us for a customized analysis based on your specific situation. All comparisons are based on publicly available list pricing and may not reflect negotiated enterprise discounts from other providers.`;

export const pricingSupport = {
  title: "JetBuilder Deployment Support Included",
  description: "All deployment options include full support from JetBuilder deployment engineers to help you get started and deploy successfully. Cloud Hosted customers get managed infrastructure in Canadian or US data centers. On-premises customers get hands-on deployment assistance. We train custom Small Language Models (SLMs) specifically for your industry and business data.",
  features: [
    "Expert deployment engineering for Canadian & US regions",
    "Hands-on implementation support",
    "Custom SLM training on your corporate data",
    "Performance optimization and tuning",
    "Training and knowledge transfer",
    "Cloud customers: Fully managed infrastructure and updates"
  ]
};

export const pricingAddons = {
  title: "Additional Options",
  options: [
    {
      name: "Catalog Solution - 14-Day Trial",
      price: "$0 for 14 days",
      description: "Try any pre-built catalog solution free for 14 days. Includes up to 10,000 transactions. Perfect for validating fit before commitment."
    },
    {
      name: "Cloud Hosted - 30-Day Free Trial",
      price: "$0 for 30 days",
      description: "Start with our Cloud Hosted plan free for 30 days. Includes up to 100,000 transactions to validate ROI. No credit card required."
    },
    {
      name: "Cloud Hosted - Annual Prepay Discount",
      price: "Save 20%",
      description: "Pay annually for Cloud Hosted plan: $28,752/year (vs $35,940 monthly). Includes 6M transactions/year + volume discounts."
    },
    {
      name: "On-Premises Pilot Program",
      price: "$15,000 - $25,000 CAD/USD",
      description: "Limited on-premises deployment to validate ROI before full commitment. Pilot fee credited toward annual contract."
    },
    {
      name: "Multi-Year Discount (On-Premises)",
      price: "Save up to 25%",
      description: "3-year commitment: 15% discount | 5-year commitment: 25% discount on annual on-premises pricing."
    },
    {
      name: "Custom SLM Development",
      price: "$25,000 - $75,000",
      description: "Specialized domain-specific Small Language Model training for your specific use cases and industry requirements. Available for both Cloud and On-Premises."
    },
    {
      name: "Managed Services (On-Premises Only)",
      price: "+25% of license",
      description: "We manage your on-premises infrastructure with proactive monitoring, optimization, and defined SLA targets. See Service Level Agreement for specific terms."
    }
  ]
};

export const pricingComparison = {
  title: "Total Cost of Ownership: JetBuilder SLMs vs Cloud LLM APIs",
  subtitle: "Estimated enterprise costs over 3 years - illustrative comparison",
  description: "JetBuilder's domain-specific Small Language Models (SLMs) can deliver significant value compared to cloud LLM alternatives in many scenarios. The following is an illustrative comparison based on typical enterprise usage patterns.",
  
  slmAdvantage: {
    title: "Why Small Language Models Can Be Effective for Your Organization",
    subtitle: "Stop paying for capabilities you don't need. Get specialized domain capabilities instead.",
    points: [
      {
        problem: "Large LLMs: Paying for Everything, Using a Fraction",
        explanation: "General-purpose LLMs use mixture-of-experts architecture containing vast general knowledge across all domains. Your organization pays for ALL this capability - medical, legal, coding, creative writing, mathematics, and hundreds more domains - even though you only need 2-3 specific capabilities.",
        cost: "You're funding billions of parameters you never use"
      },
      {
        problem: "Generic Intelligence vs Domain Expertise",
        explanation: "Large LLMs have shallow knowledge across everything. They know a little about your industry, but lack deep expertise in YOUR specific operations, YOUR terminology, YOUR processes, and YOUR unique challenges.",
        cost: "Mediocre results on your most critical tasks"
      },
      {
        problem: "Training on Public Data, Not Your Intelligence",
        explanation: "Cloud LLMs are trained on public internet data - Wikipedia, books, websites. They know nothing about your organization's proprietary knowledge, internal procedures, historical decisions, or domain-specific expertise accumulated over decades.",
        cost: "Your competitive intelligence stays untapped"
      }
    ],
    solution: {
      title: "JetBuilder SLMs: Trained Exclusively for YOUR Domain",
      benefits: [
        {
          benefit: "Laser-Focused Intelligence",
          explanation: "We train Small Language Models on YOUR specific tasks using YOUR private data and YOUR internal expertise. Every parameter is optimized for your exact use cases - nothing wasted on irrelevant general knowledge."
        },
        {
          benefit: "Domain-Specific Performance",
          explanation: "A 7B parameter SLM trained on your healthcare data can achieve strong performance on your specific medical terminology, protocols, and workflows. Smaller models optimized for specific use cases."
        },
        {
          benefit: "Your Proprietary Knowledge Incorporated",
          explanation: "We can incorporate your organization's internal documentation, historical decisions, expert annotations, and domain-specific terminology. The SLM learns from YOUR organization's unique intelligence."
        },
        {
          benefit: "Optimized Efficiency",
          explanation: "Because we train only for your domain, SLMs run with 10-50x less computational resources than general LLMs. Faster inference, lower costs, deployable on your existing infrastructure."
        }
      ]
    },
    comparison: {
      llm: {
        title: "General LLM Approach",
        characteristics: [
          "Pays for 100+ domains, uses 2-3",
          "Shallow knowledge across everything",
          "Trained on public internet data only",
          "Zero knowledge of your organization",
          "Massive computational requirements",
          "Generic responses, not domain-expert quality"
        ]
      },
      slm: {
        title: "JetBuilder SLM Approach",
        characteristics: [
          "Pay only for YOUR specific domains",
          "Deep expertise in your exact operations",
          "Trained on YOUR private data + expertise",
          "Embeds your organizational intelligence",
          "Runs efficiently on your infrastructure",
          "Expert-level responses for your domain"
        ]
      }
    },
    analogy: "It's like hiring a specialist surgeon vs a general practitioner for brain surgery. The GP knows medicine broadly; the specialist has 10,000 hours doing YOUR exact procedure. Which would you trust for mission-critical operations?"
  },
  
  cloudCosts: {
    title: "Cloud LLM APIs (OpenAI, Anthropic, Azure)",
    yearlyBreakdown: [
      {
        category: "LLM API Usage Fees",
        cost: "$180,000",
        description: "Based on 500M tokens/month for Large Language Models + 50K hours transcription"
      },
      {
        category: "Data Egress Fees",
        cost: "$36,000",
        description: "Transferring your data out of cloud (400TB/year @ $0.09/GB)"
      },
      {
        category: "API Rate Limit Overages",
        cost: "$18,000",
        description: "Peak usage surcharges and quota increases"
      },
      {
        category: "Multi-Region Redundancy",
        cost: "$24,000",
        description: "Duplicate deployments for availability (required for production)"
      },
      {
        category: "Engineering Integration",
        cost: "$60,000",
        description: "1 engineer managing APIs, handling failures, rate limits"
      },
      {
        category: "LLM Fine-tuning Costs",
        cost: "$30,000",
        description: "Per-model fine-tuning on cloud LLM platforms"
      },
      {
        category: "Compliance & Audit",
        cost: "$25,000",
        description: "External audits for data leaving your infrastructure"
      },
      {
        category: "Data Breach Insurance Premium",
        cost: "$15,000",
        description: "Additional coverage for external data processing"
      }
    ],
    yearOneTotal: "$388,000",
    threeYearTotal: "$1,164,000",
    hiddenRisks: [
      "Vendor lock-in with proprietary LLM APIs",
      "Unpredictable price increases (20-30% annually)",
      "No control over LLM changes or deprecation",
      "Data sovereignty violations - data leaves your premises",
      "High latency from external API calls (200ms+)"
    ]
  },
  
  jetbuilderCosts: {
    title: "JetBuilder On-Premises SLMs (Enterprise Professional)",
    yearlyBreakdown: [
      {
        category: "Annual License",
        cost: "$195,000",
        description: "Up to 20 agents, 10M transactions/month, custom SLMs, all features"
      },
      {
        category: "Infrastructure (Your Servers)",
        cost: "$0",
        description: "You already own the hardware - no cloud fees"
      },
      {
        category: "Data Egress Fees",
        cost: "$0",
        description: "Zero - data never leaves your infrastructure"
      },
      {
        category: "Rate Limits / Overages",
        cost: "$0",
        description: "Unlimited processing within your infrastructure"
      },
      {
        category: "Engineering Overhead",
        cost: "$0",
        description: "Included deployment support + white-glove onboarding"
      },
      {
        category: "SLM Customization",
        cost: "$0",
        description: "Custom Small Language Model training on your data included"
      },
      {
        category: "Compliance Audits",
        cost: "$0",
        description: "Simpler compliance - data stays on-premises"
      },
      {
        category: "Insurance Premium",
        cost: "$0",
        description: "No external data exposure risk"
      }
    ],
    yearOneTotal: "$195,000",
    threeYearTotal: "$585,000",
    threeYearDiscount: "$497,250",
    threeYearDiscountNote: "With 15% multi-year discount",
    advantages: [
      "Data sovereignty controls - data stays on your infrastructure",
      "More predictable costs - reduced variable billing",
      "Custom Small Language Models (SLMs) trained on your data",
      "Minimal external dependencies",
      "Low-latency processing (on-premises deployment)"
    ]
  },
  
  savingsCalculation: {
    yearOne: {
      cloudTotal: "$388,000",
      jetbuilderTotal: "$195,000",
      savings: "$193,000",
      savingsPercent: "50%"
    },
    threeYear: {
      cloudTotal: "$1,164,000",
      jetbuilderTotal: "$585,000",
      jetbuilderWithDiscount: "$497,250",
      savings: "$579,000",
      savingsWithDiscount: "$666,750",
      savingsPercent: "50%",
      savingsPercentWithDiscount: "57%"
    },
    roi: {
      paybackPeriod: "8 months",
      description: "Break-even vs cloud APIs in under 8 months, then pure savings"
    }
  }
};


export interface Solution {
  id: string
  category: string
  title: string
  description: string
  features: string[]
  icon: string
}

export const solutions: Solution[] = [
  {
    id: "insurance-claims",
    category: "Insurance",
    title: "Intelligent Claims Processing Agents",
    description: "Deploy AI agents on your private insurance infrastructure. Process claims documents, photos, videos, adjuster notes, medical records, and policy files. Extract insights from all data types—comprehensive audit logging designed to support regulatory compliance.",
    features: [
      "Claims data analysis across documents, images, and communications",
      "Automated fraud detection from multi-modal patterns",
      "Medical record, imaging, & document processing",
      "Policy cross-reference & validation across all formats",
      "Real-time claim assessment & routing from comprehensive data"
    ],
    icon: "Shield"
  },
  {
    id: "banking-customer-service",
    category: "Banking",
    title: "Intelligent Banking Assistant Agents",
    description: "Deploy on your private banking network. AI agents process customer communications, transaction data, account documents, compliance records, and business system data. Extract intelligence from all customer interactions—designed to support SOX and GLBA compliance requirements.",
    features: [
      "Customer intelligence & sentiment analysis across all channels",
      "Transaction dispute processing from comprehensive data",
      "Account inquiry automation across documents and systems",
      "Compliance monitoring across all communication channels",
      "Fraud detection from transaction patterns and multi-modal data"
    ],
    icon: "DollarSign"
  },
  {
    id: "telecom-operations",
    category: "Telecommunications",
    title: "Carrier-Grade Customer Intelligence Agents",
    description: "Deploy exclusively on your telecom infrastructure. AI agents process millions of customer interactions, network operations data, service requests, and system logs entirely within your secure network—no external data transmission.",
    features: [
      "Customer service analytics at scale across all channels",
      "Network operations monitoring from system data and logs",
      "Service outage & issue detection from multi-source data",
      "Customer churn prediction from comprehensive interaction data",
      "CRTC/FCC compliance management across all data types"
    ],
    icon: "Phone"
  },
  {
    id: "financial-compliance",
    category: "Financial Services",
    title: "Intelligent Compliance Monitoring Agents",
    description: "Deploy on private financial services infrastructure. AI agents monitor trading data, client interactions, transaction records, and compliance documents entirely on dedicated hardware—minimal external connectivity for enhanced security.",
    features: [
      "Trading floor data & communications monitoring",
      "Client interaction compliance scanning across all channels",
      "Market abuse pattern detection",
      "Regulatory reporting automation",
      "Comprehensive audit logging with timestamped records"
    ],
    icon: "Lock"
  },
  {
    id: "contact-center",
    category: "Customer Service",
    title: "Autonomous Contact Center Intelligence",
    description: "Deploy on your contact center infrastructure. AI agents analyze customer calls, identify issues, optimize routing, and provide real-time coaching—all processed within your dedicated infrastructure.",
    features: [
      "Real-time call sentiment & emotion analysis",
      "Agent performance coaching & feedback",
      "Automated quality assurance scoring",
      "Customer issue trend identification",
      "Multi-channel interaction intelligence"
    ],
    icon: "Headphones"
  },
  {
    id: "healthcare-operations",
    category: "Healthcare",
    title: "HIPAA-Compliant Medical Intelligence Agents",
    description: "Deploy on private healthcare infrastructure. Process patient calls, medical dictation, telehealth sessions, and clinical notes. Multi-modal intelligence fusion from voice and text—designed to support PIPEDA and HIPAA compliance.",
    features: [
      "Medical dictation & transcription",
      "Patient call triage & routing",
      "Telehealth session documentation",
      "Clinical note generation from voice",
      "PHI-compliant data processing"
    ],
    icon: "Heart"
  },
  {
    id: "retail-analytics",
    category: "Retail",
    title: "Customer Experience Intelligence Agents",
    description: "Deploy on your retail infrastructure. AI agents process customer service calls, store communications, and feedback channels—all data processed on-premises for complete customer data protection.",
    features: [
      "Customer service call analytics",
      "Store operations communication monitoring",
      "Customer feedback sentiment analysis",
      "Product issue trend detection",
      "Omnichannel interaction intelligence"
    ],
    icon: "ShoppingCart"
  },
  {
    id: "legal-services",
    category: "Legal",
    title: "Attorney-Client Privileged Intelligence Agents",
    description: "Deploy on law firm private networks. AI agents process client calls, depositions, court recordings, and case research—all within your secure environment with attorney-client privilege protection controls.",
    features: [
      "Client call & consultation transcription",
      "Deposition & hearing documentation",
      "Legal research from case recordings",
      "Privileged communication protection",
      "Matter-specific intelligence extraction"
    ],
    icon: "Scale"
  },
  {
    id: "utilities-operations",
    category: "Utilities",
    title: "Utility Operations Intelligence Agents",
    description: "Deploy on utility operations infrastructure. AI agents process customer service calls, field operations communications, and emergency response coordination—all processed on your secure networks meeting NERC CIP standards.",
    features: [
      "Customer service & outage call processing",
      "Field operations communication intelligence",
      "Emergency response coordination",
      "Infrastructure monitoring alert analysis",
      "Regulatory compliance recording"
    ],
    icon: "Zap"
  },
  {
    id: "eam-agentx",
    category: "Enterprise Asset Management",
    title: "EAM AgentX - Multi-Agent Asset Management",
    description: "Deploy AI-powered Enterprise Asset Management with 10 specialized agents powered by JetGraph and JetChain (Rust-native frameworks). Uses custom Small Language Models (SLMs) deployed on-premises. Conversational interface for asset lifecycle, predictive maintenance, work order automation, and real-time monitoring—all on your infrastructure with complete data sovereignty.",
    features: [
      "Rust-powered core with sub-millisecond response times",
      "Custom SLMs (Small Language Models) deployed on your infrastructure",
      "JetGraph & JetChain for high-performance agentic orchestration",
      "10 specialized agents: Asset, Work Order, Telemetry, Maintenance, Compliance",
      "Predictive maintenance with anomaly detection & proactive scheduling",
      "Real-time telemetry monitoring processing 1M+ events/second",
      "High-speed databases: PostgreSQL, TimescaleDB, Redis, ChromaDB",
      "Automated work order creation from natural language",
      "Critic-verifier for quality assurance on all responses",
      "On-premises or air-gapped deployment options"
    ],
    icon: "Wrench"
  },
  {
    id: "accounting-processing",
    category: "Accounting & Finance",
    title: "Intelligent Accounting Processing Agents",
    description: "Deploy AI agents on your private financial infrastructure. Automate accounts payable/receivable, bank reconciliation, journal entries, and financial reporting—all processed within your secure environment with complete audit trails designed to support SOX, GAAP, and IFRS compliance.",
    features: [
      "Automated invoice processing & three-way matching",
      "Bank reconciliation across multiple accounts",
      "Intelligent AP/AR management with aging analysis",
      "Real-time financial reporting & dashboards",
      "Journal entry automation from source documents",
      "Multi-entity consolidation & intercompany eliminations",
      "ERP integration (SAP, Oracle, NetSuite, QuickBooks)",
      "Complete audit trail with SOX compliance logging"
    ],
    icon: "Calculator"
  }
]


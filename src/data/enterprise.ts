export interface EnterpriseOffering {
  id: string
  industry: string
  title: string
  description: string
  features: string[]
  compliance: string[]
  icon: string
}

export const enterpriseOfferings: EnterpriseOffering[] = [
  {
    id: "healthcare",
    industry: "Healthcare",
    title: "PIPEDA & HIPAA-Compliant Healthcare Intelligence",
    description: "On-premises AI agents for Canadian and US hospitals, clinics, and healthcare systems. Process patient records, medical documents, lab results, imaging data, EHR systems, and telehealth communications entirely within your private network—designed to support PIPEDA (Canada) and HIPAA (US) compliance requirements when properly configured.",
    features: [
      "Medical document & EHR data processing on-premises",
      "Patient record analysis & clinical insights",
      "Lab results & imaging data intelligence",
      "Clinical documentation automation across all data types",
      "Protected Health Information (PHI) secure multi-modal processing"
    ],
    compliance: ["PIPEDA (Canada)", "HIPAA (US)", "PHIPA (Ontario)", "PHI Protection", "HL7/FHIR"],
    icon: "Heart"
  },
  {
    id: "banking",
    industry: "Banking & Financial Services",
    title: "Financial-Grade Data Security",
    description: "Deploy AI agents on your private banking infrastructure in Canada or US. Process transaction data, customer communications, regulatory filings, fraud detection across all channels—all within your secure data center. Minimal external data transmission, comprehensive audit logging designed to support OSFI, FinCEN, and SEC requirements.",
    features: [
      "Customer service intelligence across all channels",
      "Real-time fraud detection from transaction patterns and communications",
      "Trading floor data & communications monitoring",
      "KYC/AML document processing & verification",
      "Regulatory compliance monitoring across all data sources"
    ],
    compliance: ["PCI-DSS", "SOX", "GLBA", "OSFI (Canada)", "FinCEN (US)", "FINTRAC (Canada)", "Basel III"],
    icon: "DollarSign"
  },
  {
    id: "insurance",
    industry: "Insurance",
    title: "Insurance Claims Intelligence",
    description: "Autonomous AI agents for Canadian and US insurance operations. Process claims documents, photos, videos, adjuster reports, medical records, and customer communications—deployed exclusively on your private infrastructure. Data sovereignty controls for sensitive policyholder information designed to meet provincial and state requirements.",
    features: [
      "Claims document processing & categorization across all formats",
      "AI-powered fraud detection from multi-modal evidence",
      "Policyholder data & sentiment analysis",
      "Automated claims documentation from all sources",
      "Risk assessment from comprehensive data patterns"
    ],
    compliance: ["PIPEDA (Canada)", "Provincial Insurance Acts", "State Insurance Regulations (US)", "NAIC Standards", "IBC Compliance"],
    icon: "Shield"
  },
  {
    id: "legal",
    industry: "Legal & Law Firms",
    title: "Attorney-Client Privilege Protected",
    description: "Air-gapped AI agents for legal practices. Process client communications, depositions, court recordings with strong confidentiality controls. All data is designed to remain within your firm's private network with attorney-client privilege protection features.",
    features: [
      "Deposition & hearing transcription",
      "Client communication intelligence",
      "Legal discovery voice processing",
      "Case research from recorded evidence",
      "Privileged communication protection"
    ],
    compliance: ["Attorney-Client Privilege", "Legal Hold", "Bar Association Rules"],
    icon: "Scale"
  },
  {
    id: "energy",
    industry: "Energy & Utilities",
    title: "Critical Infrastructure Protection",
    description: "Deploy on SCADA and OT networks. AI agents monitor critical communications, detect security threats, coordinate emergency response—isolated from public internet. Built for critical infrastructure protection.",
    features: [
      "Operations center voice monitoring",
      "Emergency response coordination",
      "Security threat detection in communications",
      "Maintenance call intelligence",
      "SCADA network integration"
    ],
    compliance: ["NERC CIP", "ICS Security", "Critical Infrastructure Protection"],
    icon: "Zap"
  },
  {
    id: "pharma",
    industry: "Pharmaceutical",
    title: "FDA-Compliant Research Intelligence",
    description: "Private AI agents for pharmaceutical R&D. Process clinical trial communications, research collaborations, regulatory submissions—all on-premises. Designed to support 21 CFR Part 11 compliance with comprehensive audit logging.",
    features: [
      "Clinical trial call monitoring",
      "Research collaboration transcription",
      "Regulatory affairs documentation",
      "Pharmacovigilance voice intelligence",
      "Manufacturing quality assurance calls"
    ],
    compliance: ["FDA 21 CFR Part 11", "GMP", "GCP", "ICH Guidelines"],
    icon: "Pill"
  },
  {
    id: "telecom",
    industry: "Telecommunications",
    title: "Carrier-Grade Voice Processing",
    description: "Deploy AI agents on Canadian and US telecom infrastructure. Process millions of customer calls, network operations, fraud detection—all within your private network. Carrier-grade reliability meeting CRTC and FCC requirements.",
    features: [
      "Customer support call intelligence at scale",
      "Network operations voice monitoring",
      "SIM swap & fraud detection",
      "Regulatory compliance monitoring",
      "Service quality analysis"
    ],
    compliance: ["CRTC (Canada)", "FCC (US)", "CALEA", "CPNI Protection", "Canadian Radio Regulations"],
    icon: "Phone"
  },
  {
    id: "manufacturing",
    industry: "Manufacturing",
    title: "Industrial Operations Intelligence",
    description: "On-premises AI agents for manufacturing floors. Monitor quality control communications, safety protocols, supply chain coordination—deployed on isolated industrial networks with OT security.",
    features: [
      "Quality control communications analysis",
      "Safety incident voice monitoring",
      "Supply chain coordination intelligence",
      "Maintenance request automation",
      "Production floor voice analytics"
    ],
    compliance: ["ISO 9001", "AS9100", "IATF 16949", "OT Security Standards"],
    icon: "Factory"
  },
  {
    id: "government",
    industry: "Government Agencies",
    title: "Government Cloud & Security Standards",
    description: "Deploy on Canadian and US government networks designed to support security standards. AI agents process citizen services, inter-agency communications, emergency operations. Infrastructure designed for Protected B (Canada) and FedRAMP (US) deployment.",
    features: [
      "Citizen services call processing",
      "Inter-agency secure communications",
      "Emergency management coordination",
      "Freedom of Information request processing",
      "Public safety dispatch intelligence"
    ],
    compliance: ["Protected B (Canada)", "FedRAMP (US)", "PBMM Cloud (Canada)", "FISMA", "NIST 800-53", "CIS Controls"],
    icon: "Building"
  },
  {
    id: "eam-enterprise",
    industry: "Enterprise Asset Management",
    title: "EAM AgentX - Multi-Agent Asset Management Platform",
    description: "Next-generation Enterprise Asset Management powered by 10 specialized AI agents built with JetGraph and JetChain (Rust-native frameworks). Uses custom Small Language Models (SLMs) deployed entirely on your infrastructure. Deploy on-premises or air-gapped for complete data sovereignty. Sub-millisecond response times with conversational interface for asset lifecycle, predictive maintenance, work order automation, and real-time telemetry monitoring—all within your secure infrastructure.",
    features: [
      "Rust-powered core with sub-millisecond query response times",
      "Custom SLMs (Small Language Models) running on-premises—no cloud dependencies",
      "JetGraph & JetChain for high-performance multi-agent orchestration",
      "10 specialized agents: Supervisor, Asset, Work Order, Telemetry, Maintenance Planner, Retrieval, Compliance, Reasoning, Plan & Execute, Critic-Verifier",
      "Real-time telemetry monitoring processing 1M+ events/second",
      "High-speed databases: PostgreSQL, TimescaleDB, Redis, ChromaDB",
      "Predictive maintenance with AI-powered anomaly detection",
      "Automated work order generation from natural language inputs",
      "RAG-based knowledge system for technical documentation",
      "Production-ready: Docker, Kubernetes, Helm charts, CI/CD pipelines"
    ],
    compliance: ["ISO 55000 (Asset Management)", "ISO 14224 (Reliability Data)", "SAE JA1011 (RCM)", "CMMS Integration", "Industry 4.0 Standards", "Audit Trail Logging"],
    icon: "Wrench"
  },
  {
    id: "accounting-engine",
    industry: "Enterprise Accounting",
    title: "Accounting Engine - AI-Powered Financial Automation",
    description: "Next-generation enterprise accounting platform powered by specialized AI agents. Automates bookkeeping, financial reporting, and AP/AR workflows with on-premises deployment. Process thousands of transactions per second with complete audit trails—no cloud dependencies, full data sovereignty.",
    features: [
      "AI-powered transaction categorization with 99%+ accuracy",
      "Automated bank reconciliation across multiple accounts",
      "Real-time financial reporting and dashboard generation",
      "Intelligent AP/AR processing with invoice matching",
      "Multi-entity consolidation and intercompany eliminations",
      "Natural language queries: 'Show me all overdue invoices over $10K'",
      "Automated journal entries from source documents",
      "Customizable approval workflows with AI recommendations",
      "Integration with ERP systems (SAP, Oracle, NetSuite)",
      "Production-ready: Docker, Kubernetes, on-premises deployment"
    ],
    compliance: ["SOX", "GAAP", "IFRS", "SOC 2 Type II", "GDPR", "Audit Trail Logging"],
    icon: "Calculator"
  }
]


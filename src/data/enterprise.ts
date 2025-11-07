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
  }
]


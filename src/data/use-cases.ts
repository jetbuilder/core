export interface UseCase {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
}

export const useCases: UseCase[] = [
  {
    id: "customer-service",
    title: "Customer Service Excellence",
    subtitle: "Contact center intelligence",
    description: "Real-time customer interaction analysis and sentiment detection across all channels. AI-powered quality assurance from documents, communications, and system data. Agent coaching and customer experience optimization.",
    icon: "Headphones",
  },
  {
    id: "claims-processing",
    title: "Insurance Claims Automation",
    subtitle: "Claims intelligence",
    description: "Automated claims intake and processing with fraud detection. Extract insights from photos, videos, documents, medical records, adjuster reports, and policy files with comprehensive audit logging.",
    icon: "FileText",
  },
  {
    id: "compliance-monitoring",
    title: "Regulatory Compliance",
    subtitle: "Risk & compliance",
    description: "Monitor trading data, communications, transaction records, and customer interactions for regulatory compliance. Automated detection of market abuse, insider trading, and policy violations from multi-source data.",
    icon: "Shield",
  },
  {
    id: "banking-operations",
    title: "Banking & Financial Services",
    subtitle: "Financial operations",
    description: "Process customer inquiries, transaction data, account documents, and communication records. Real-time fraud detection and KYC/AML compliance monitoring from comprehensive data designed to support SOX compliance requirements.",
    icon: "DollarSign",
  },
  {
    id: "healthcare-documentation",
    title: "Healthcare Documentation",
    subtitle: "Medical intelligence",
    description: "Medical document processing, patient records analysis, lab results intelligence, and telehealth data management. Extract clinical insights from all data types with infrastructure designed to support HIPAA and PIPEDA compliance requirements.",
    icon: "Heart",
  },
  {
    id: "telecom-analytics",
    title: "Telecom Operations",
    subtitle: "Network intelligence",
    description: "Process millions of customer interactions and network data at carrier scale. Network operations monitoring from system logs, service issue detection, and customer churn prediction from comprehensive data with CRTC/FCC compliance.",
    icon: "Radio",
  },
]


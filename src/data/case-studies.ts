export interface CaseStudy {
  id: string
  company: string
  title: string
  description: string
  metric: string
  logo?: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    company: "Global Insurance Provider",
    title: "AI-powered claim processing reduces settlement time",
    description: "Deployed CallIntel to analyze customer calls and claim documentation across 200+ offices. Automated claim assessment helped reduce processing time by 70% while improving fraud detection accuracy",
    metric: "70% faster claims*",
  },
  {
    id: "2",
    company: "National Banking Group",
    title: "Intelligent customer service transforms banking operations",
    description: "Processes 100,000+ daily customer interactions across all channels. AI agents provide real-time insights and automated routing, helping increase customer satisfaction by 65% while reducing operational costs",
    metric: "65% higher satisfaction*",
  },
  {
    id: "3",
    company: "Leading Telecom Operator",
    title: "Real-time call analytics improves network operations",
    description: "Analyzes customer service calls across nationwide network. AI-powered insights identify service issues and optimize resource allocation, helping reduce customer churn by 45%",
    metric: "45% less churn*",
  },
  {
    id: "4",
    company: "Financial Services Corporation",
    title: "Automated compliance monitoring across trading operations",
    description: "AI agents monitor communications and transactions to detect regulatory violations and market abuse. Helped increase compliance detection by 80% while reducing manual review workload by 75%",
    metric: "80% more detections*",
  },
]

export const caseStudiesDisclaimer = {
  title: "Case Study Results Disclaimer",
  content: `The case studies presented represent specific customer outcomes achieved under particular circumstances and deployment configurations. Results shown are not typical and should not be considered as guarantees or predictions of results any other customer might achieve.

**Individual results will vary based on:**
• Implementation approach and system configuration
• Data quality, volume, and characteristics
• Use case specifics and business processes
• Organization's existing workflows and adoption
• User training and change management
• Industry and regulatory environment
• Infrastructure and technical resources

**Important Notes:**
• Customer names have been anonymized for confidentiality
• Percentage improvements are based on customer-reported metrics
• Results have not been independently verified by third parties
• Performance may vary from pilot to production deployment
• Continued results require ongoing monitoring and optimization

For realistic expectations based on your specific situation, contact our sales team for a customized assessment and reference customers in your industry.`,
  shortDisclaimer: "* Results not typical. Individual outcomes vary based on implementation, data quality, and use case specifics. Based on customer-reported metrics."
};



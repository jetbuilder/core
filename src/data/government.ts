export interface GovernmentOffering {
  id: string
  agency: string
  title: string
  description: string
  features: string[]
  compliance: string[]
  icon: string
}

export const governmentOfferings: GovernmentOffering[] = [
  {
    id: "federal",
    agency: "Federal Government",
    title: "Federal Services Automation",
    description: "AI-powered intelligence for federal departments and agencies across Canada. Process citizen inquiries, benefits applications, immigration documents, case files, databases, and public service requests. Deploy on Government of Canada cloud infrastructure designed to support federal security standards.",
    features: [
      "Service Canada automation (EI, CPP, OAS)",
      "Immigration and citizenship inquiry processing",
      "CRA taxpayer services support",
      "Veterans Affairs contact center intelligence",
      "Bilingual services (English and French)"
    ],
    compliance: ["Protected B", "PBMM Cloud", "PIPEDA", "Privacy Act", "Treasury Board Security Standards"],
    icon: "Building"
  },
  {
    id: "provincial",
    agency: "Provincial & Territorial",
    title: "Provincial Services Intelligence",
    description: "AI intelligence for provincial and territorial governments across Canada. Process healthcare records, social services documents, licensing applications, regulatory filings, and citizen communications. Deploy on provincial cloud infrastructure with privacy compliance support for each jurisdiction.",
    features: [
      "Provincial healthcare services automation",
      "Driver licensing and vehicle registration",
      "Social services and income support",
      "Business licensing and regulatory services",
      "Provincial tax and revenue inquiries"
    ],
    compliance: ["Provincial FOIPPA/FIPPA", "PHIPA (ON)", "Health Privacy Acts", "Provincial Security Standards"],
    icon: "MapPin"
  },
  {
    id: "municipal",
    agency: "Municipal Services",
    title: "Municipal Citizen Services",
    description: "AI-powered intelligence for Canadian municipalities. Process 311 communications, service requests, permit applications, inspection reports, bylaw documents, and citizen inquiries. Scalable from small towns to major cities like Toronto, Montreal, Vancouver, and Calgary.",
    features: [
      "311 citizen services automation",
      "Bylaw and permit inquiry processing",
      "Service request routing and categorization",
      "Multi-language support for diverse communities",
      "Integration with municipal CRM systems"
    ],
    compliance: ["Municipal FOIPPA/FIPPA", "Provincial Security Standards", "Municipal Act Compliance", "Accessibility Standards"],
    icon: "Building2"
  },
  {
    id: "healthcare",
    agency: "Healthcare Systems",
    title: "Canadian Healthcare Intelligence",
    description: "AI intelligence for provincial health authorities, hospitals, and health systems across Canada. Process patient records, medical documents, lab results, appointment scheduling, telehealth communications, and health data. Privacy-compliant deployment supporting PHIPA, HIPA, and provincial health privacy legislation.",
    features: [
      "Provincial health line automation (HealthLink, Telehealth)",
      "Patient appointment scheduling intelligence",
      "Medical information request processing",
      "Health emergency triage support",
      "Integration with provincial EMR systems"
    ],
    compliance: ["PHIPA (ON)", "HIPA (SK)", "Provincial Health Privacy Acts", "PIPEDA", "PHI Protection"],
    icon: "Heart"
  },
  {
    id: "education",
    agency: "Education & Post-Secondary",
    title: "Education Services Intelligence",
    description: "AI agents for Canadian school districts, colleges, and universities across all provinces. Process student inquiries, enrollment services, financial aid questions. Deployed on education networks with student privacy protection meeting provincial requirements.",
    features: [
      "Student services call automation",
      "Enrollment and registration support",
      "Financial aid inquiry processing",
      "Campus safety and emergency coordination",
      "Multi-campus and multi-province deployment"
    ],
    compliance: ["Provincial FOIPPA/FIPPA", "PIPEDA", "Student Privacy Protection", "Provincial Education Standards"],
    icon: "GraduationCap"
  },
  {
    id: "justice",
    agency: "Justice & Public Safety",
    title: "Justice Services Intelligence",
    description: "Secure AI intelligence for Canadian courts, corrections, and public safety agencies. Process court documents, case files, evidence records, victim services communications, and probation data across federal, provincial, and territorial jurisdictions. Air-gapped deployment options for sensitive justice information.",
    features: [
      "Court information line automation",
      "Victim services support",
      "Probation and corrections communications",
      "Legal aid inquiry processing",
      "Protected information handling"
    ],
    compliance: ["Provincial FOIPPA/FIPPA", "Court Rules", "Criminal Records Act", "Federal Privacy Act", "Victim Services Standards"],
    icon: "Scale"
  },
  {
    id: "transportation",
    agency: "Transportation & Infrastructure",
    title: "Transportation Operations Intelligence",
    description: "AI agents for Canadian transportation authorities and transit systems. Support operations for major transit systems including TTC, STM, TransLink, Calgary Transit, and OC Transpo. Monitor operations communications, customer service, and emergency coordination.",
    features: [
      "Transit customer service automation",
      "Road conditions and travel information",
      "Multi-modal transportation support",
      "Emergency response coordination",
      "Integration with provincial highway systems"
    ],
    compliance: ["Provincial FOIPPA/FIPPA", "Transportation Safety Standards", "Provincial Emergency Standards", "Accessibility Standards"],
    icon: "Bus"
  },
  {
    id: "emergency",
    agency: "Emergency Management",
    title: "Emergency Operations Intelligence",
    description: "Real-time AI intelligence for federal, provincial, and municipal emergency management organizations across Canada. Process emergency communications, incident reports, resource databases, inter-agency coordination, and critical data during natural disasters, wildfires, floods, and emergencies.",
    features: [
      "Emergency call center support",
      "Multi-agency coordination intelligence",
      "Critical incident communications analysis",
      "Public safety alert processing",
      "Integration with provincial emergency systems"
    ],
    compliance: ["Provincial Emergency Acts", "Protected B Capable", "Provincial FOIPPA/FIPPA", "Federal Emergency Standards"],
    icon: "AlertTriangle"
  },
  {
    id: "social",
    agency: "Social Services & Housing",
    title: "Social Services Intelligence",
    description: "AI intelligence for Canadian social services ministries, housing authorities, and community services. Process benefit applications, housing documents, case management files, vulnerable population support records with privacy and dignity across all provinces and territories.",
    features: [
      "Income assistance inquiry automation",
      "Housing application processing",
      "Senior services support",
      "Disability services coordination",
      "Crisis line and distress center support"
    ],
    compliance: ["Provincial FOIPPA/FIPPA", "Social Services Standards", "Privacy Protection", "Vulnerable Population Standards", "PIPEDA"],
    icon: "Users"
  },
  {
    id: "natural-resources",
    agency: "Natural Resources & Environment",
    title: "Environmental Services Intelligence",
    description: "AI agents for Parks Canada, provincial parks, forestry services, and environmental agencies across Canada. Process park reservations, conservation inquiries, environmental reporting, land use communications nationwide.",
    features: [
      "National and provincial park reservation automation",
      "Conservation and wildlife inquiry processing",
      "Environmental incident reporting",
      "Land use and forestry communications",
      "Natural resource management coordination"
    ],
    compliance: ["Federal Privacy Act", "Provincial FOIPPA/FIPPA", "Environmental Protection Standards", "Resource Management Regulations"],
    icon: "TreePine"
  },
  {
    id: "call-center",
    agency: "Government Call Centers",
    title: "Call Center Intelligence & Audio Analysis",
    description: "Massive-scale phone call recording, transcription, and deep content analysis for government and semi-government call centers. Process millions of citizen interactions with complete audit trails, quality assurance, sentiment analysis, and compliance monitoring. Deploy on-premises with full data sovereignty for federal, provincial, and municipal contact centers.",
    features: [
      "Massive-scale audio recording and transcription at call center volumes",
      "Real-time and batch deep content analysis of all citizen interactions",
      "Full audit logging with timestamped records for every call",
      "Advanced sentiment and emotion detection across conversations",
      "Automated quality assurance and agent performance analytics",
      "Compliance monitoring and policy violation detection",
      "Multi-language support for bilingual and diverse populations",
      "Call categorization, routing optimization, and trend identification",
      "Citizen satisfaction scoring and service improvement insights",
      "Integration with existing government telephony and CRM systems"
    ],
    compliance: ["Provincial FOIPPA/FIPPA", "Federal Privacy Act", "PIPEDA", "Protected B Capable", "Call Recording Legislation", "Accessibility Standards"],
    icon: "Headphones"
  }
]


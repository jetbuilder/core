'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Briefcase, Clock, Users, ArrowRight, Target, TrendingUp, Heart, Linkedin } from 'lucide-react'
import Button from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
}

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  const handleLinkedInShare = async (job: Job) => {
    const url = `${window.location.origin}/careers/apply?jobId=${job.id}&jobTitle=${encodeURIComponent(job.title)}`
    const responsibilities = job.responsibilities.slice(0, 3).map((r: string) => `✓ ${r}`).join('\n')
    const text = `🚀 We're Hiring: ${job.title} | JetBuilder - Sovereign AI Platform

${job.description}

💡 Key Responsibilities:
${responsibilities}

📍 Location: ${job.location}
💼 Experience: ${job.experience}
⏰ Type: ${job.type}

Join our team of former FAANG engineers and elite cybersecurity professionals building the future of sovereign AI.

Apply now: ${url}

#Hiring #WeAreHiring #JobOpportunity #TechJobs #AI #ArtificialIntelligence #MachineLearning #CyberSecurity #TechCareers #JoinOurTeam #NowHiring #CareerOpportunity #${job.department.replace(/\s+/g, '')} #Innovation #Technology #FAANG #TechTalent #RemoteWork #Canada`
    
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
    
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true`
    window.open(linkedInUrl, '_blank', 'width=800,height=600')
  }

  const jobs: Job[] = [
    {
      id: 'ml-engineer-slm',
      title: 'Senior ML Engineer - Small Language Models',
      department: 'Engineering',
      location: 'Remote / On-site',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development and training of domain-specific Small Language Models (SLMs) for government and enterprise clients. Work on cutting-edge AI technology that runs entirely on customer infrastructure.',
      responsibilities: [
        'Design and train custom SLMs for specific domains (defense, healthcare, finance)',
        'Optimize model performance for on-premises deployment with limited resources',
        'Develop fine-tuning pipelines for customer-specific data',
        'Collaborate with customers to understand domain requirements and terminology',
        'Research and implement state-of-the-art techniques for efficient model training',
        'Create benchmarks demonstrating SLM superiority over general LLMs in specific domains'
      ],
      requirements: [
        '5+ years experience in ML/AI engineering',
        'Deep expertise in transformer architectures and language models',
        'Experience training models from scratch or fine-tuning existing models',
        'Strong Python skills (PyTorch, HuggingFace, TensorFlow)',
        'Understanding of model optimization and quantization techniques',
        'Experience with distributed training and GPU optimization',
        'U.S. citizenship or ability to obtain security clearance preferred'
      ],
      benefits: [
        'Competitive salary: $180K-$250K + equity',
        'Work on cutting-edge SLM technology',
        'Direct impact on national security and critical infrastructure',
        'Access to high-performance computing resources'
      ]
    },
    {
      id: 'solutions-architect-gov',
      title: 'Solutions Architect - Government & Defense',
      department: 'Solutions',
      location: 'Washington DC / Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and architect custom AI deployments for government agencies, defense organizations, and intelligence services. Requires active or obtainable security clearance.',
      responsibilities: [
        'Lead technical discovery sessions with government clients',
        'Design on-premises and air-gapped deployment architectures',
        'Create detailed technical proposals and SOWs for government contracts',
        'Guide implementation teams through complex security requirements',
        'Present technical solutions to C-level and government leadership',
        'Ensure compliance with FedRAMP, FISMA, NIST 800-53, and other standards'
      ],
      requirements: [
        '7+ years in solutions architecture or technical pre-sales',
        'Active Secret clearance or ability to obtain Top Secret/SCI',
        'Deep understanding of government security requirements',
        'Experience with FedRAMP, ATO processes, and compliance frameworks',
        'Strong presentation and communication skills',
        'Previous government contracting experience strongly preferred',
        'Bachelor\'s degree in Computer Science, Engineering, or related field'
      ],
      benefits: [
        'Salary: $160K-$220K + bonus + equity',
        'Clearance sponsorship and maintenance',
        'Travel to secure facilities (CONUS and OCONUS)',
        'Direct engagement with senior government officials'
      ]
    },
    {
      id: 'devops-airgap',
      title: 'Senior DevOps Engineer - Air-Gapped Environments',
      department: 'Engineering',
      location: 'Remote / Various secure locations',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Deploy and maintain AI infrastructure in classified, air-gapped, and highly secure environments. Expertise in on-premises Kubernetes, infrastructure-as-code, and zero-trust architectures required.',
      responsibilities: [
        'Deploy and configure Sovereign AI Platform platform in air-gapped environments',
        'Design infrastructure for classified networks with no internet connectivity',
        'Implement CI/CD pipelines for disconnected environments',
        'Automate deployment and configuration management',
        'Monitor and maintain system performance and security',
        'Create disaster recovery and high-availability solutions',
        'Troubleshoot complex infrastructure issues in secure facilities'
      ],
      requirements: [
        '6+ years DevOps/Infrastructure engineering experience',
        'Expert-level Kubernetes (on-premises, not cloud)',
        'Strong Linux administration skills (RHEL, Ubuntu)',
        'Experience with Ansible, Terraform, GitOps workflows',
        'Deep understanding of networking, security, and PKI',
        'Experience deploying software in SCIF/classified environments',
        'Active security clearance or ability to obtain',
        'Willingness to travel to customer sites 30-40%'
      ],
      benefits: [
        'Salary: $150K-$200K + bonus',
        'Exposure to cutting-edge secure infrastructure',
        'Clearance advancement opportunities',
        'Technical training and certifications'
      ]
    },
    {
      id: 'enterprise-sales-exec',
      title: 'Enterprise Sales Executive - Healthcare & Finance',
      department: 'Sales',
      location: 'Major US cities / Canada Major cities',
      type: 'Full-time',
      experience: '8+ years',
      description: 'Drive revenue growth by selling custom SLM solutions to Fortune 500 healthcare and financial services organizations. Focus on HIPAA and PCI-DSS compliant on-premises AI deployments.',
      responsibilities: [
        'Identify and close enterprise deals ($500K-$5M+ ACV)',
        'Build relationships with C-suite executives (CTO, CISO, CIO)',
        'Navigate complex procurement processes in regulated industries',
        'Collaborate with solutions architects on technical proposals',
        'Manage sales cycle from initial contact through contract execution',
        'Exceed quarterly and annual revenue targets',
        'Represent Sovereign AI Platform at industry conferences and events'
      ],
      requirements: [
        '8+ years enterprise software sales experience',
        'Track record of closing $1M+ deals',
        'Deep understanding of healthcare or financial services',
        'Experience selling AI/ML or infrastructure software',
        'Familiarity with HIPAA, PCI-DSS, SOX compliance requirements',
        'Excellent presentation and negotiation skills',
        'Bachelor\'s degree; MBA preferred',
        'Existing relationships in target industries a plus'
      ],
      benefits: [
        'Base: $140K-$180K + commission (OTE $280K-$400K+)',
        'Uncapped commission structure',
        'Stock options with early-stage upside',
        'President\'s Club and performance bonuses'
      ]
    },
    {
      id: 'security-compliance',
      title: 'Security & Compliance Engineer',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Own security posture and compliance programs for Sovereign AI Platform\'s platform. Work with customers to achieve FedRAMP, HIPAA, PCI-DSS, and other critical certifications.',
      responsibilities: [
        'Lead FedRAMP authorization process (High and Moderate)',
        'Implement and maintain NIST 800-53 controls',
        'Conduct security assessments and penetration testing coordination',
        'Develop and maintain security documentation (SSPs, SARs, POA&Ms)',
        'Work with 3PAOs and government auditors',
        'Design security architectures for customer deployments',
        'Respond to customer security questionnaires and RFPs',
        'Maintain SOC 2, HIPAA, and PCI-DSS compliance'
      ],
      requirements: [
        '5+ years in cybersecurity and compliance',
        'FedRAMP experience required (CISSP, CISM, or CAP certified)',
        'Deep knowledge of NIST 800-53, FISMA, HIPAA, PCI-DSS',
        'Experience with security tools (SIEM, IDS/IPS, vulnerability scanners)',
        'Strong documentation and writing skills',
        'Understanding of cloud and on-premises security architecture',
        'Active security clearance preferred'
      ],
      benefits: [
        'Salary: $140K-$190K + bonus + equity',
        'Certification reimbursement and training',
        'Exposure to government and enterprise security',
        'Leadership growth opportunities'
      ]
    },
    {
      id: 'data-scientist-nlp',
      title: 'Staff Data Scientist - NLP & Voice Intelligence',
      department: 'Data Science',
      location: 'Canada Major cities / Remote',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Develop advanced NLP and speech recognition algorithms for intelligence extraction from voice and text data. Work on multi-lingual, multi-speaker conversation analysis.',
      responsibilities: [
        'Research and implement state-of-the-art NLP techniques',
        'Develop custom speech-to-text models for domain-specific terminology',
        'Build entity extraction and relationship mapping algorithms',
        'Optimize models for 55+ languages and dialects',
        'Collaborate with ML engineers on model deployment',
        'Analyze customer data to identify patterns and insights',
        'Publish research and represent Sovereign AI Platform at AI conferences'
      ],
      requirements: [
        '6+ years in data science with NLP focus',
        'PhD in Computer Science, Linguistics, or related field preferred',
        'Expert knowledge of transformer models, ASR, and NLU',
        'Strong Python skills (spaCy, NLTK, HuggingFace)',
        'Experience with speech processing and audio analysis',
        'Published research in top-tier ML conferences a plus',
        'Ability to work with sensitive/classified data'
      ],
      benefits: [
        'Salary: $170K-$240K + equity',
        'Research time allocation (20%)',
        'Conference attendance and publication support',
        'Access to unique datasets'
      ]
    },
    {
      id: 'customer-success-manager',
      title: 'Customer Success Manager - Strategic Accounts',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Ensure customer success and drive expansion revenue in key government and enterprise accounts. Act as trusted advisor for multi-million dollar deployments.',
      responsibilities: [
        'Own post-sale relationship for $2M+ annual accounts',
        'Conduct quarterly business reviews with C-level stakeholders',
        'Identify expansion opportunities and drive upsells',
        'Coordinate with support, engineering, and product teams',
        'Ensure customer health metrics exceed targets',
        'Manage renewals and contract negotiations',
        'Gather product feedback and influence roadmap',
        'Create customer success stories and case studies'
      ],
      requirements: [
        '4+ years in customer success or account management',
        'Experience with enterprise software and AI/ML products',
        'Strong technical aptitude and ability to learn complex systems',
        'Excellent communication and relationship management skills',
        'Experience managing government or Fortune 500 accounts',
        'Track record of driving expansion revenue',
        'Bachelor\'s degree required; technical degree preferred'
      ],
      benefits: [
        'Base: $110K-$150K + variable (OTE $140K-$200K)',
        'Stock options',
        'Direct impact on customer outcomes',
        'Path to leadership roles'
      ]
    },
    {
      id: 'product-manager-platform',
      title: 'Senior Product Manager - AI Platform',
      department: 'Product',
      location: 'Canada Major cities / US Major cities / Remote',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Own product strategy and roadmap for Sovereign AI Platform\'s core AI platform. Define features that enable autonomous agents and custom SLM deployment for enterprise customers.',
      responsibilities: [
        'Define product vision and strategy for AI agent platform',
        'Conduct customer research and gather requirements',
        'Create detailed product specifications and user stories',
        'Prioritize features based on customer value and business impact',
        'Work closely with engineering to ship high-quality features',
        'Analyze usage metrics and iterate on product improvements',
        'Present roadmap to customers and internal stakeholders',
        'Competitive analysis and market research'
      ],
      requirements: [
        '6+ years product management experience',
        'Technical background (engineering or data science)',
        'Deep understanding of AI/ML and agentic systems',
        'Experience with B2B enterprise software products',
        'Strong analytical and data-driven decision making',
        'Excellent written and verbal communication',
        'Experience working with government or regulated industries preferred',
        'MBA or technical Master\'s degree a plus'
      ],
      benefits: [
        'Salary: $160K-$220K + equity',
        'Shape cutting-edge AI product strategy',
        'Direct customer interaction',
        'Cross-functional leadership opportunity'
      ]
    },
    {
      id: 'implementation-engineer',
      title: 'Implementation Engineer',
      department: 'Professional Services',
      location: 'Remote / Travel 40%',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Deploy Sovereign AI Platform solutions at customer sites, including government facilities and enterprise data centers. Provide hands-on technical implementation and integration services.',
      responsibilities: [
        'Deploy Sovereign AI Platform platform in customer environments',
        'Integrate with existing customer systems and data sources',
        'Configure custom SLM models based on customer requirements',
        'Train customer teams on platform administration',
        'Troubleshoot technical issues during implementation',
        'Document deployment architecture and configurations',
        'Provide post-implementation support and optimization',
        'Travel to customer sites (including SCIFs) as needed'
      ],
      requirements: [
        '3+ years in software implementation or technical consulting',
        'Strong Linux system administration skills',
        'Experience with Docker, Kubernetes, and cloud technologies',
        'Understanding of databases (PostgreSQL, MongoDB)',
        'Familiarity with API integration and scripting (Python, Bash)',
        'Excellent customer-facing communication skills',
        'Ability to obtain security clearance',
        'Comfortable working independently at remote customer sites'
      ],
      benefits: [
        'Salary: $100K-$140K + bonus',
        'Travel to interesting locations',
        'Hands-on technical experience',
        'Path to solutions architecture'
      ]
    },
    {
      id: 'technical-writer',
      title: 'Senior Technical Writer - AI Documentation',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Create comprehensive technical documentation for Sovereign AI Platform\'s AI platform, including API references, deployment guides, and security documentation for government customers.',
      responsibilities: [
        'Write clear, comprehensive technical documentation',
        'Create API documentation and integration guides',
        'Develop security documentation for government compliance',
        'Produce deployment guides for on-premises installations',
        'Collaborate with engineers to understand complex features',
        'Maintain documentation versioning and release notes',
        'Create video tutorials and training materials',
        'Ensure documentation meets government standards (DISA STIGs, etc.)'
      ],
      requirements: [
        '5+ years technical writing experience',
        'Strong understanding of AI/ML concepts and terminology',
        'Experience documenting APIs and developer tools',
        'Familiarity with documentation tools (Markdown, Git, static site generators)',
        'Ability to understand and explain complex technical concepts',
        'Experience with government documentation standards preferred',
        'Portfolio of published technical documentation',
        'Bachelor\'s degree in English, Communications, or technical field'
      ],
      benefits: [
        'Salary: $95K-$130K + equity',
        'Fully remote with flexible hours',
        'Work with cutting-edge AI technology',
        'Collaborative, documentation-focused culture'
      ]
    }
  ]

  const departments = ['all', 'Engineering', 'Sales', 'Solutions', 'Product', 'Security', 'Data Science', 'Customer Success', 'Professional Services']
  const locations = ['all', 'Remote', 'Remote / Hybrid', 'Washington DC / Remote', 'Major US cities / Remote', 'Canada Major cities', 'Major US cities / Canada Major cities', 'Canada Major cities / Remote', 'Canada Major cities / US Major cities / Remote', 'Remote / Travel 40%', 'Remote / On-site', 'Remote / Various secure locations']

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment
    const matchesLocation = selectedLocation === 'all' || 
                           job.location === selectedLocation ||
                           job.location.toLowerCase().includes(selectedLocation.toLowerCase())
    
    return matchesSearch && matchesDepartment && matchesLocation
  })

  return (
    <div className="min-h-screen bg-vscode-bg pt-24 font-mono">
      {/* Hero Section - IDE Style */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
            <Briefcase className="w-5 h-5 text-vscode-type" />
            <span className="text-xs font-bold text-vscode-comment">// join-our-team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-vscode-function tracking-wide mb-4">
            careers.jetBuilder()
          </h1>
          <p className="text-sm text-vscode-variable max-w-3xl mx-auto mb-8">
            Build the future of on-premises AI. Join us in developing JetBuilder Studio and its Small Language Models and autonomous agents 
            that protect national security and power critical infrastructure. Deploy on YOUR infrastructure—no cloud dependency.
          </p>
          
          {/* Why Join Section - IDE Style */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="p-6 bg-vscode-sidebar border border-vscode-border hover:border-vscode-type transition-colors">
              <Target className="w-8 h-8 text-vscode-type mx-auto mb-3" />
              <h3 className="text-base font-bold text-vscode-function tracking-wide mb-2">missionCriticalWork()</h3>
              <p className="text-xs text-vscode-variable">Deploy AI for defense, intelligence, and critical infrastructure</p>
            </Card>
            <Card className="p-6 bg-vscode-sidebar border border-vscode-border hover:border-vscode-type transition-colors">
              <TrendingUp className="w-8 h-8 text-vscode-type mx-auto mb-3" />
              <h3 className="text-base font-bold text-vscode-function tracking-wide mb-2">cuttingEdgeTech()</h3>
              <p className="text-xs text-vscode-variable">Work on Small Language Models and agentic AI systems</p>
            </Card>
            <Card className="p-6 bg-vscode-sidebar border border-vscode-border hover:border-vscode-type transition-colors">
              <Heart className="w-8 h-8 text-vscode-type mx-auto mb-3" />
              <h3 className="text-base font-bold text-vscode-function tracking-wide mb-2">competitiveBenefits()</h3>
              <p className="text-xs text-vscode-variable">Equity, bonuses, clearances, and work-life balance</p>
            </Card>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-vscode-sidebar border-2 border-vscode-border rounded-sm p-6 mb-12 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-xs placeholder:text-vscode-comment"
              />
            </div>
            
            {/* Department Filter */}
            <div>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-xs"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-xs"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>
                    {loc === 'all' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-gray-400 text-sm">
            Showing <span className="text-vscode-type font-bold">{filteredJobs.length}</span> position{filteredJobs.length !== 1 ? 's' : ''}
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="max-w-6xl mx-auto space-y-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <Card className="bg-vscode-sidebar border border-vscode-border hover:border-vscode-type transition-all duration-300 cursor-pointer group">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-grow mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-vscode-function group-hover:text-vscode-type transition-colors tracking-wide mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => handleLinkedInShare(job)}
                        className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded font-semibold transition-colors"
                        title="Share on LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">Share</span>
                      </button>
                      <a href={`/careers/apply?jobId=${job.id}&jobTitle=${encodeURIComponent(job.title)}`}>
                        <Button className="bg-vscode-keyword hover:bg-vscode-selection text-white font-mono text-xs whitespace-nowrap">
                          $ apply-now <ArrowRight className="ml-2 w-3 h-3" />
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-vscode-variable mb-4 text-xs">
                    {job.description}
                  </p>

                  {/* Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-bold text-vscode-comment tracking-wide mb-2">// key-responsibilities</h4>
                      <ul className="space-y-1 text-xs text-vscode-variable">
                        {job.responsibilities.slice(0, 4).map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-vscode-type mr-2">✓</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-vscode-comment tracking-wide mb-2">// requirements</h4>
                      <ul className="space-y-1 text-xs text-vscode-variable">
                        {job.requirements.slice(0, 4).map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-vscode-type mr-2">✓</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Benefits Badge */}
                  <div className="mt-4 pt-4 border-t border-vscode-border">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="text-sm text-gray-400">
                        <span className="text-vscode-type font-semibold">{job.benefits[0]}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Posted: Recently
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg mb-4">No positions found matching your search.</p>
            <Button
              onClick={() => {
                setSearchTerm('')
                setSelectedDepartment('all')
                setSelectedLocation('all')
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-vscode-sidebar border-2 border-vscode-border rounded-sm p-8 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-gray-300 mb-6">
            We're always looking for exceptional talent. Send us your resume and tell us what you're passionate about.
          </p>
          <a href="/contact">
            <Button className="bg-tactical-600 hover:bg-tactical-700">
              Contact Our Team
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  )
}


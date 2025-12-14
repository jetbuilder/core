'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { enterpriseOfferings } from '@/data/enterprise'
import { Heart, DollarSign, Shield, Scale, Zap, Phone, Factory, Building, CheckCircle, Lock, Award, Linkedin, Link2, MessageCircle, Check, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/button'
import Chatbot from '@/components/ui/chatbot'
import DemoRequestModal from '@/components/ui/demo-request-modal'

const iconMap: Record<string, any> = {
  Heart,
  DollarSign,
  Shield,
  Scale,
  Zap,
  Phone,
  Factory,
  Building,
  Wrench,
  Pill: Heart, // Using Heart as fallback for Pill
}

export default function Enterprise() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatTopic, setChatTopic] = useState<string>('')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [selectedSolution, setSelectedSolution] = useState<string>('')

  const handleLearnMore = (offeringTitle: string) => {
    setChatTopic(offeringTitle)
    setIsChatOpen(true)
  }

  const handleScheduleConsultation = () => {
    window.open('https://cal.com/jetbuilder-expert', '_blank')
  }

  const handleShareLinkedIn = async (offering: any) => {
    const url = `${window.location.origin}/#enterprise-${offering.id}`
    const features = offering.features.slice(0, 3).map((f: string) => `✓ ${f}`).join('\n')
    const compliance = offering.compliance.slice(0, 3).join(', ')
    const text = `🚀 ${offering.title} | Sovereign AI Platform

${offering.description}

💡 Key Features:
${features}

✅ Compliance Support: ${compliance}

🏢 Industry: ${offering.industry}

🔒 Enterprise-grade AI with complete data sovereignty. Deploy on your private infrastructure with air-gapped options for maximum security.

Transform your ${offering.industry.toLowerCase()} operations: ${url}

#EnterpriseAI #AI #ArtificialIntelligence #DataSovereignty #Compliance #EnterpriseTech #CyberSecurity #DataSecurity #OnPremises #${offering.industry.replace(/\s+/g, '')} #DigitalTransformation #Innovation #Technology #DataPrivacy #BusinessIntelligence`
    
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
    
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true`
    window.open(linkedInUrl, '_blank', 'width=800,height=600')
  }

  const handleCopyLink = async (offering: any) => {
    const url = `${window.location.origin}/#enterprise-${offering.id}`
    const features = offering.features.slice(0, 3).map((f: string) => `• ${f}`).join('\n')
    const compliance = offering.compliance.slice(0, 3).join(', ')
    const fullText = `${offering.title}\n\n${offering.description}\n\nKey Features:\n${features}\n\nCompliance: ${compliance}\n\nIndustry: ${offering.industry}\n\n${url}`
    await navigator.clipboard.writeText(fullText)
    setCopiedId(offering.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleShareWhatsApp = (offering: any) => {
    const url = `${window.location.origin}/#enterprise-${offering.id}`
    const features = offering.features.slice(0, 3).map((f: string) => `• ${f}`).join('\n')
    const compliance = offering.compliance.slice(0, 3).join(', ')
    const text = `${offering.title}\n\n${offering.description}\n\nKey Features:\n${features}\n\nCompliance: ${compliance}\n\nIndustry: ${offering.industry}\n\n${url}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="enterprise" className="section-padding bg-vscode-bg">
      <div className="container font-mono">
        {/* Section Header - IDE Style */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
              <Building className="w-4 h-4 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment">// enterprise-solutions</span>
            </div>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-vscode-function mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            deployments.onPremises()
          </motion.h2>
          
          <motion.p
            className="text-sm text-vscode-variable max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Autonomous AI agents tailored for industries with the highest security and compliance requirements. Deploy on your private infrastructure with features designed to support regulatory compliance requirements.
          </motion.p>
        </div>

        {/* Enterprise Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {enterpriseOfferings.map((offering, index) => {
            const Icon = iconMap[offering.icon]
            return (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card id={`enterprise-${offering.id}`} className="h-full bg-vscode-sidebar hover:border-vscode-type transition-all duration-300 group cursor-pointer border border-vscode-border scroll-mt-24">
                  <CardHeader>
                    {/* Icon and Industry */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-vscode-bg border border-vscode-border rounded-sm">
                        <Icon className="w-5 h-5 text-vscode-type" />
                      </div>
                      <div className="text-xs font-bold text-vscode-comment">
                        // {offering.industry}
                      </div>
                    </div>

                    {/* Title */}
                    <CardTitle className="text-vscode-function group-hover:text-vscode-type transition-colors text-base">
                      {offering.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-vscode-variable mt-3 text-xs">
                      {offering.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <div className="text-xs font-bold text-vscode-comment mb-3">
                        // key-features
                      </div>
                      {offering.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="text-vscode-comment text-xs">✓</span>
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Compliance Badges */}
                    <div className="pt-4 border-t border-vscode-border">
                      <div className="text-xs font-bold text-vscode-comment mb-2">
                        // compliance-support*
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {offering.compliance.map((cert, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 bg-vscode-bg border border-vscode-border rounded-sm text-xs font-bold text-vscode-type"
                          >
                            {cert}*
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-vscode-comment mt-2">
                        * Platform features designed to support compliance. See disclaimer below.
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        {offering.id === 'eam-enterprise' ? (
                          <a
                            href="/eam-agentx"
                            className="text-xs font-bold text-vscode-variable hover:text-vscode-type inline-flex items-center group"
                          >
                            view-product
                            <svg
                              className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </a>
                        ) : (
                        <button
                          onClick={() => handleLearnMore(offering.title)}
                          className="text-xs font-bold text-vscode-variable hover:text-vscode-type inline-flex items-center group"
                        >
                          learn-more
                          <svg
                            className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                        )}
                        <div className="relative group/deploy">
                          <button
                            disabled
                            className="px-2 py-1 bg-vscode-bg text-gray-500 text-xs font-mono rounded-sm cursor-not-allowed opacity-60"
                          >
                            deploy
                          </button>
                          <div className="absolute bottom-full left-0 mb-2 hidden group-hover/deploy:block w-48 bg-vscode-sidebar text-white text-xs p-2 rounded-sm shadow-lg border border-vscode-border z-10">
                            Will be active after contact with our deployment team
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedSolution(offering.title)
                            setIsDemoModalOpen(true)
                          }}
                          className="px-2 py-1 bg-vscode-keyword hover:bg-vscode-selection text-white text-xs font-mono rounded-sm transition-colors"
                        >
                          $ demo
                        </button>
                      </div>
                      
                      {/* Share Buttons */}
                      <div className="flex items-center gap-2 pt-3 border-t border-vscode-border">
                        <span className="text-xs text-vscode-comment mr-1">// share:</span>
                        <button
                          onClick={() => handleShareLinkedIn(offering)}
                          className="p-1.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded transition-colors"
                          title="Share on LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleCopyLink(offering)}
                          className="p-1.5 bg-gunmetal-700 hover:bg-gunmetal-600 text-gray-300 rounded transition-colors"
                          title="Copy link"
                        >
                          {copiedId === offering.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Link2 className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          onClick={() => handleShareWhatsApp(offering)}
                          className="p-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded transition-colors"
                          title="Share on WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Security Guarantee Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vscode-bg border border-vscode-border rounded-sm mb-4">
                  <Lock className="w-6 h-6 text-vscode-type" />
                </div>
                <h4 className="text-base font-bold text-vscode-function tracking-wide mb-2">
                  onPremises.only()
                </h4>
                <p className="text-xs text-vscode-variable">
                  Deploy exclusively on your infrastructure. Air-gapped options available for maximum security.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vscode-bg border border-vscode-border rounded-sm mb-4">
                  <Award className="w-6 h-6 text-vscode-type" />
                </div>
                <h4 className="text-base font-bold text-vscode-function tracking-wide mb-2">
                  compliance.support()
                </h4>
                <p className="text-xs text-vscode-variable">
                  Designed to support industry-specific regulatory requirements with comprehensive audit logging and documentation.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vscode-bg border border-vscode-border rounded-sm mb-4">
                  <Shield className="w-6 h-6 text-vscode-type" />
                </div>
                <h4 className="text-base font-bold text-vscode-function tracking-wide mb-2">
                  dataSovereignty()
                </h4>
                <p className="text-xs text-vscode-variable">
                  Your data is designed to remain within your environment. Data sovereignty controls and ownership of voice intelligence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compliance Disclaimer */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gunmetal-950 border-2 border-tactical-700 rounded-sm p-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
              Compliance & Regulatory Disclaimer
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <strong className="text-white">Compliance Support:</strong> Sovereign AI Platform provides infrastructure and tools designed to support compliance efforts with various regulatory frameworks. However, Sovereign AI Platform does not guarantee compliance with any specific regulation, standard, or certification. Final compliance is the sole responsibility of the customer and depends on proper configuration, policies, procedures, and use of the platform.
              </p>
              <p>
                <strong className="text-white">Customer Responsibility:</strong> Organizations are solely responsible for: (1) configuring the platform to meet their specific compliance requirements, (2) implementing appropriate security controls and policies, (3) conducting required audits and assessments, (4) maintaining compliance documentation, and (5) ensuring all regulatory obligations are met in their jurisdiction.
              </p>
              <p>
                <strong className="text-white">Regulatory Frameworks:</strong> References to PIPEDA, HIPAA, PCI-DSS, SOX, GLBA, FedRAMP, NERC-CIP, FDA regulations, and other standards indicate that the platform includes features that can support compliance efforts when properly configured. Achieving and maintaining compliance requires the customer's active participation, proper implementation, ongoing monitoring, and adherence to all applicable regulations.
              </p>
              <p>
                <strong className="text-white">No Legal Advice:</strong> Information provided about regulatory requirements and compliance frameworks is for informational purposes only and does not constitute legal, compliance, or regulatory advice. Customers should consult with qualified legal and compliance professionals regarding their specific obligations and requirements.
              </p>
              <p>
                <strong className="text-white">Industry-Specific Deployments:</strong> While Sovereign AI Platform is designed to support industry-specific requirements, each deployment must be customized to the customer's specific environment, regulatory jurisdiction, and compliance needs. Features and capabilities may vary based on deployment configuration and customer requirements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-tactical-900 to-tactical-800 border-2 border-tactical-700 rounded-sm p-8">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
              Ready to Deploy Enterprise AI?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Schedule a confidential consultation with our enterprise team. We'll design a custom deployment plan for your specific industry and compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-tactical-900 hover:bg-gray-100 font-bold uppercase" onClick={handleScheduleConsultation}>
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold uppercase">
                Download Enterprise Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Chatbot */}
      <Chatbot 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        topic={chatTopic}
      />
      
      {/* Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        solution={selectedSolution}
      />
    </section>
  )
}


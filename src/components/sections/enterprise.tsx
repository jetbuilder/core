'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { enterpriseOfferings } from '@/data/enterprise'
import { Heart, DollarSign, Shield, Scale, Zap, Phone, Factory, Building, CheckCircle, Lock, Award, Linkedin, Link2, MessageCircle, Check } from 'lucide-react'
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
    <section id="enterprise" className="section-padding bg-gunmetal-900">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-tactical-900 px-4 py-2 rounded-sm mb-6 border border-tactical-700">
              <Building className="w-5 h-5 text-tactical-400" />
              <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Enterprise Solutions</span>
            </div>
          </motion.div>
          
          <motion.h2
            className="heading-lg text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Industry-Specific On-Premises Deployments
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
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
                <Card id={`enterprise-${offering.id}`} className="h-full bg-gunmetal-950 hover:bg-gunmetal-800 transition-all duration-300 group cursor-pointer border-2 border-gunmetal-700 hover:border-tactical-700 scroll-mt-24">
                  <CardHeader>
                    {/* Icon and Industry */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gunmetal-800 border border-tactical-700 rounded-sm group-hover:bg-tactical-900 transition-colors">
                        <Icon className="w-6 h-6 text-tactical-400 group-hover:text-tactical-300 transition-colors" />
                      </div>
                      <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider">
                        {offering.industry}
                      </div>
                    </div>

                    {/* Title */}
                    <CardTitle className="text-white group-hover:text-tactical-400 transition-colors text-lg">
                      {offering.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-gray-300 mt-3 text-sm">
                      {offering.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider mb-3">
                        Key Features
                      </div>
                      {offering.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-tactical-500 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Compliance Badges */}
                    <div className="pt-4 border-t border-gunmetal-700">
                      <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider mb-2">
                        Compliance Support*
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {offering.compliance.map((cert, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 bg-gunmetal-800 border border-tactical-700 rounded text-xs font-bold text-tactical-400"
                          >
                            {cert}*
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        * Platform features designed to support compliance. See disclaimer below.
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-4">
                      <div className="flex items-center gap-3 mb-3">
                        <button
                          onClick={() => handleLearnMore(offering.title)}
                          className="text-xs font-bold text-tactical-400 hover:text-tactical-300 uppercase tracking-wide inline-flex items-center group"
                        >
                          Learn More
                          <svg
                            className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform"
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
                        <div className="relative group/deploy">
                          <button
                            disabled
                            className="px-3 py-1.5 bg-gunmetal-700 text-gray-500 text-xs font-bold uppercase tracking-wide rounded cursor-not-allowed opacity-60"
                          >
                            Deploy
                          </button>
                          <div className="absolute bottom-full left-0 mb-2 hidden group-hover/deploy:block w-48 bg-gunmetal-800 text-white text-xs p-2 rounded shadow-lg border border-tactical-700 z-10">
                            Will be active after contact with our deployment team
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedSolution(offering.title)
                            setIsDemoModalOpen(true)
                          }}
                          className="px-3 py-1.5 bg-tactical-600 hover:bg-tactical-700 text-white text-xs font-bold uppercase tracking-wide rounded transition-colors"
                        >
                          Request Demo
                        </button>
                      </div>
                      
                      {/* Share Buttons */}
                      <div className="flex items-center gap-2 pt-3 border-t border-gunmetal-700">
                        <span className="text-xs text-gray-500 uppercase tracking-wide mr-1">Share:</span>
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
          <div className="bg-gradient-to-r from-gunmetal-950 to-gunmetal-800 border-2 border-tactical-700 rounded-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gunmetal-800 border-2 border-tactical-700 rounded-sm mb-4">
                  <Lock className="w-8 h-8 text-tactical-400" />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-2">
                  On-Premises Only
                </h4>
                <p className="text-sm text-gray-300">
                  Deploy exclusively on your infrastructure. Air-gapped options available for maximum security.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gunmetal-800 border-2 border-tactical-700 rounded-sm mb-4">
                  <Award className="w-8 h-8 text-tactical-400" />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-2">
                  Compliance Support
                </h4>
                <p className="text-sm text-gray-300">
                  Designed to support industry-specific regulatory requirements with comprehensive audit logging and documentation.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gunmetal-800 border-2 border-tactical-700 rounded-sm mb-4">
                  <Shield className="w-8 h-8 text-tactical-400" />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-2">
                  Data Sovereignty
                </h4>
                <p className="text-sm text-gray-300">
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


'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { solutions } from '@/data/solutions'
import { Shield, DollarSign, Phone, Lock, Headphones, Heart, ShoppingCart, Scale, Zap, Target, CheckCircle, Linkedin, Link2, MessageCircle, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import DemoRequestModal from '@/components/ui/demo-request-modal'

const iconMap: Record<string, any> = {
  Shield,
  DollarSign,
  Phone,
  Lock,
  Headphones,
  Heart,
  ShoppingCart,
  Scale,
  Zap,
}

export default function Solutions() {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [selectedSolution, setSelectedSolution] = useState<string>('')

  const handleRequestBriefing = () => {
    window.location.href = '/contact'
  }

  const handleScheduleConsultation = () => {
    window.open('https://cal.com/jetbuilder-expert', '_blank')
  }

  const handleDownloadBrochure = () => {
    window.location.href = '/contact'
  }

  const handleShareLinkedIn = async (solution: any) => {
    const url = `${window.location.origin}/#solution-${solution.id}`
    const features = solution.features.slice(0, 3).map((f: string) => `✓ ${f}`).join('\n')
    const text = `🚀 ${solution.title} | Sovereign AI Platform

${solution.description}

💡 Key Features:
${features}

📊 Industry: ${solution.category}

🔒 Deploy AI agents on your private infrastructure with complete data sovereignty. Process all your data—documents, voice, video, and business systems—entirely on-premises.

Discover how we're transforming ${solution.category.toLowerCase()}: ${url}

#AI #ArtificialIntelligence #MachineLearning #DataSovereignty #EnterpriseTech #DataSecurity #OnPremises #PrivateCloud #DigitalTransformation #Innovation #Technology #${solution.category.replace(/\s+/g, '')} #CyberSecurity #DataPrivacy #BusinessIntelligence`
    
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
    
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true`
    window.open(linkedInUrl, '_blank', 'width=800,height=600')
  }

  const handleCopyLink = async (solution: any) => {
    const url = `${window.location.origin}/#solution-${solution.id}`
    const features = solution.features.slice(0, 3).map((f: string) => `• ${f}`).join('\n')
    const fullText = `${solution.title}\n\n${solution.description}\n\nKey Features:\n${features}\n\nCategory: ${solution.category}\n\n${url}`
    await navigator.clipboard.writeText(fullText)
    setCopiedId(solution.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleShareWhatsApp = (solution: any) => {
    const url = `${window.location.origin}/#solution-${solution.id}`
    const features = solution.features.slice(0, 3).map((f: string) => `• ${f}`).join('\n')
    const text = `${solution.title}\n\n${solution.description}\n\nKey Features:\n${features}\n\nCategory: ${solution.category}\n\n${url}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="solutions" className="section-padding bg-gunmetal-950">
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
              <Target className="w-5 h-5 text-tactical-400" />
              <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Solutions Portfolio</span>
            </div>
          </motion.div>
          
          <motion.h2
            className="heading-lg text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Industry-Specific AI Solutions
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Deploy autonomous AI agents that extract intelligence from customer calls, documents, claims, and all unstructured business data. Multi-agent systems built for Canadian and US regulatory compliance.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon]
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card id={`solution-${solution.id}`} className="h-full bg-gunmetal-900 hover:bg-gunmetal-800 transition-all duration-300 group cursor-pointer border-2 border-gunmetal-700 hover:border-tactical-700 scroll-mt-24">
                  <CardHeader>
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gunmetal-800 border border-tactical-700 rounded-sm group-hover:bg-tactical-900 transition-colors">
                        <Icon className="w-6 h-6 text-tactical-400 group-hover:text-tactical-300 transition-colors" />
                      </div>
                      <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider">
                        {solution.category}
                      </div>
                    </div>

                    {/* Title */}
                    <CardTitle className="text-white group-hover:text-tactical-400 transition-colors text-xl">
                      {solution.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-gray-300 mt-3">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Features List */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider mb-3">
                        Key Capabilities
                      </div>
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-tactical-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-4 border-t border-gunmetal-700">
                      <div className="flex items-center gap-3 mb-4">
                        <button
                          onClick={handleRequestBriefing}
                          className="text-sm font-bold text-tactical-400 hover:text-tactical-300 uppercase tracking-wide inline-flex items-center group"
                        >
                          Request Briefing
                          <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
                            setSelectedSolution(solution.title)
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
                          onClick={() => handleShareLinkedIn(solution)}
                          className="p-1.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded transition-colors"
                          title="Share on LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleCopyLink(solution)}
                          className="p-1.5 bg-gunmetal-700 hover:bg-gunmetal-600 text-gray-300 rounded transition-colors"
                          title="Copy link"
                        >
                          {copiedId === solution.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Link2 className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          onClick={() => handleShareWhatsApp(solution)}
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

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gunmetal-900 to-gunmetal-800 border-2 border-tactical-700 rounded-sm p-8">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
              Need Custom AI Solutions for Your Industry?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team designs and deploys custom AI agent systems tailored to your specific business requirements. 
              Autonomous agents that learn, adapt, and make decisions at any scale with complete data sovereignty on your private infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleScheduleConsultation}
                className="px-8 py-3 bg-tactical-600 hover:bg-tactical-700 text-white font-bold uppercase tracking-wide rounded-sm transition-colors inline-flex items-center"
              >
                Schedule Consultation
              </button>
              <button
                onClick={handleDownloadBrochure}
                className="px-8 py-3 border-2 border-tactical-600 text-tactical-400 hover:bg-tactical-900 font-bold uppercase tracking-wide rounded-sm transition-colors inline-flex items-center"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        solution={selectedSolution}
      />
    </section>
  )
}


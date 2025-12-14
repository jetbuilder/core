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
    <section id="solutions" className="section-padding bg-vscode-bg">
      <div className="container font-mono">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
              <Target className="w-4 h-4 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment">// solutions-portfolio</span>
            </div>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-vscode-function mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            solutions.industrySpecific()
          </motion.h2>
          
          <motion.p
            className="text-sm text-vscode-variable max-w-3xl mx-auto"
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
                onClick={() => {
                  if (solution.id === 'contact-center') {
                    window.location.href = '/contact-center'
                  }
                }}
              >
                <Card id={`solution-${solution.id}`} className={`h-full bg-vscode-sidebar hover:bg-vscode-hover transition-all duration-300 group cursor-pointer border border-vscode-border hover:border-vscode-type scroll-mt-24 ${solution.id === 'contact-center' ? 'ring-2 ring-vscode-type' : ''}`}>
                  <CardHeader>
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-vscode-bg border border-vscode-border rounded-sm group-hover:bg-vscode-bg transition-colors">
                        <Icon className="w-5 h-5 text-vscode-type group-hover:text-vscode-type transition-colors" />
                      </div>
                      <div className="text-xs font-bold text-vscode-comment">
                        {solution.category}
                      </div>
                    </div>

                    {/* Title */}
                    <CardTitle className="text-vscode-function group-hover:text-vscode-type transition-colors text-base">
                      {solution.title}
                      {solution.id === 'contact-center' && (
                        <span className="ml-2 text-xs bg-vscode-keyword text-white px-2 py-1 rounded-sm">View Architecture</span>
                      )}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-vscode-variable mt-3 text-xs">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Features List */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-vscode-comment mb-3">
                        // key-capabilities
                      </div>
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-vscode-type mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-vscode-variable">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-4 border-t border-vscode-border">
                      <div className="flex items-center gap-3 mb-4">
                        <button
                          onClick={handleRequestBriefing}
                          className="text-xs font-bold text-vscode-variable hover:text-vscode-type inline-flex items-center group"
                        >
                          request-briefing
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
                            className="px-3 py-1.5 bg-vscode-bg text-vscode-comment text-xs font-mono rounded-sm cursor-not-allowed opacity-60"
                          >
                            deploy
                          </button>
                          <div className="absolute bottom-full left-0 mb-2 hidden group-hover/deploy:block w-48 bg-vscode-sidebar text-vscode-variable text-xs p-2 rounded-sm shadow-lg border border-vscode-border z-10">
                            Will be active after contact with our deployment team
                          </div>
                        </div>
                        <button
                          onClick={() => window.open('https://cal.com/jetbuilder-expert', '_blank')}
                          className="px-3 py-1.5 bg-vscode-keyword hover:bg-vscode-selection text-white text-xs font-mono rounded-sm transition-colors"
                        >
                          request-demo
                        </button>
                      </div>
                      
                      {/* Share Buttons */}
                      <div className="flex items-center gap-2 pt-3 border-t border-vscode-border">
                        <span className="text-xs text-vscode-comment mr-1">// share:</span>
                        <button
                          onClick={() => handleShareLinkedIn(solution)}
                          className="p-1.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-sm transition-colors"
                          title="Share on LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleCopyLink(solution)}
                          className="p-1.5 bg-vscode-bg hover:bg-vscode-hover text-vscode-variable rounded-sm transition-colors"
                          title="Copy link"
                        >
                          {copiedId === solution.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Link2 className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          onClick={() => handleShareWhatsApp(solution)}
                          className="p-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-sm transition-colors"
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
          <div className="bg-vscode-sidebar border-2 border-vscode-type rounded-sm p-8">
            <h3 className="text-2xl font-bold text-vscode-function mb-4">
              customAI.forYourIndustry()
            </h3>
            <p className="text-vscode-variable mb-6 max-w-2xl mx-auto text-sm">
              Our team designs and deploys custom AI agent systems tailored to your specific business requirements. 
              Autonomous agents that learn, adapt, and make decisions at any scale with complete data sovereignty on your private infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleScheduleConsultation}
                className="px-8 py-3 bg-vscode-keyword hover:bg-vscode-selection text-white font-mono text-xs font-bold rounded-sm transition-colors inline-flex items-center uppercase"
              >
                schedule-consultation
              </button>
              <button
                onClick={handleDownloadBrochure}
                className="px-8 py-3 border-2 border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono text-xs font-bold rounded-sm transition-colors inline-flex items-center uppercase"
              >
                download-brochure
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


'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useCases } from '@/data/use-cases'
import { ArrowRight, Shield, Radio, Headphones, FileText, DollarSign, Heart, Linkedin, Link2, MessageCircle, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import DemoRequestModal from '@/components/ui/demo-request-modal'

const iconMap: Record<string, any> = {
  Shield,
  Radio,
  Headphones,
  FileText,
  DollarSign,
  Heart,
}

export default function UseCases() {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [selectedSolution, setSelectedSolution] = useState<string>('')

  const handleShareLinkedIn = async (useCase: any) => {
    const url = `${window.location.origin}/#usecase-${useCase.id}`
    const text = `🚀 ${useCase.title} | Sovereign AI Platform

${useCase.description}

📊 Use Case: ${useCase.subtitle}

🔒 Complete data sovereignty with on-premises AI deployment. Process all your data—documents, voice, video, and business systems—entirely within your secure infrastructure.

Transform your operations with sovereign AI: ${url}

#AI #ArtificialIntelligence #MachineLearning #DataSovereignty #Innovation #Technology #DigitalTransformation #BusinessIntelligence #Automation #DataSecurity #EnterpriseTech #CyberSecurity #OnPremises #DataPrivacy #TechSolutions`
    
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
    
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true`
    window.open(linkedInUrl, '_blank', 'width=800,height=600')
  }

  const handleCopyLink = async (useCase: any) => {
    const url = `${window.location.origin}/#usecase-${useCase.id}`
    const fullText = `${useCase.title}\n\n${useCase.description}\n\nUse Case: ${useCase.subtitle}\n\n${url}`
    try {
      await navigator.clipboard.writeText(fullText)
      setCopiedId(useCase.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleShareWhatsApp = (useCase: any) => {
    const url = `${window.location.origin}/#usecase-${useCase.id}`
    const text = `${useCase.title}\n\n${useCase.description}\n\nUse Case: ${useCase.subtitle}\n\n${url}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
  }
  return (
    <section id="use-cases" className="section-padding bg-gunmetal-950">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">
            AI That Works Where It Matters Most
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From customer service to claims processing, our platform delivers enterprise-grade AI with complete data sovereignty and industry-leading security for Canadian and US markets
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = iconMap[useCase.icon]
            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card id={`usecase-${useCase.id}`} className="h-full bg-gunmetal-900 hover:bg-gunmetal-800 transition-all duration-300 group cursor-pointer border-2 border-gunmetal-700 hover:border-tactical-700 scroll-mt-24">
                  <CardHeader>
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gunmetal-800 border border-tactical-700 rounded-sm mb-4 group-hover:bg-tactical-900 transition-colors">
                      <Icon className="w-6 h-6 text-tactical-400 group-hover:text-tactical-300 transition-colors" />
                    </div>

                    {/* Subtitle */}
                    <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider mb-2">
                      {useCase.subtitle}
                    </div>

                    {/* Title */}
                    <CardTitle className="text-white group-hover:text-tactical-400 transition-colors uppercase tracking-wide">
                      {useCase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 text-gray-300">
                      {useCase.description}
                    </CardDescription>
                    <div className="flex items-center gap-3 mb-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-tactical-400 font-bold hover:text-tactical-300 group uppercase text-sm tracking-wide"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
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
                          setSelectedSolution(useCase.title)
                          setIsDemoModalOpen(true)
                        }}
                        className="px-3 py-1.5 bg-tactical-600 hover:bg-tactical-700 text-white text-xs font-bold uppercase tracking-wide rounded transition-colors"
                      >
                        Request Demo
                      </button>
                    </div>

                    {/* Share Buttons */}
                    <div className="mt-4 pt-4 border-t border-gunmetal-700">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 uppercase tracking-wide mr-1">Share:</span>
                        <button
                          onClick={() => handleShareLinkedIn(useCase)}
                          className="p-1.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded transition-colors"
                          title="Share on LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleCopyLink(useCase)}
                          className="p-1.5 bg-gunmetal-700 hover:bg-gunmetal-600 text-gray-300 rounded transition-colors"
                          title="Copy link"
                        >
                          {copiedId === useCase.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Link2 className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          onClick={() => handleShareWhatsApp(useCase)}
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


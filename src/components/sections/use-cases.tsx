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
    <section id="use-cases" className="section-padding bg-vscode-bg">
      <div className="container font-mono">
        {/* Section Header - IDE Style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
            <span className="text-xs font-bold text-vscode-comment">// use-cases</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4 tracking-wide">
            useCases.deploy()
          </h2>
          <p className="text-sm text-vscode-variable max-w-3xl mx-auto">
            Build agentic workflows that work where it matters most—no Azure, AWS, or Google required. Complete data sovereignty on YOUR infrastructure.
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
                <Card id={`usecase-${useCase.id}`} className="h-full bg-vscode-sidebar hover:bg-vscode-hover transition-all duration-300 group cursor-pointer border border-vscode-border hover:border-vscode-type scroll-mt-24">
                  <CardHeader>
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-vscode-bg border border-vscode-border rounded-sm mb-3 group-hover:bg-vscode-bg transition-colors">
                      <Icon className="w-5 h-5 text-vscode-type group-hover:text-vscode-function transition-colors" />
                    </div>

                    {/* Subtitle */}
                    <div className="text-xs font-bold text-vscode-comment tracking-wider mb-2">
                      // {useCase.subtitle}
                    </div>

                    {/* Title */}
                    <CardTitle className="text-vscode-function group-hover:text-vscode-type transition-colors tracking-wide text-base">
                      {useCase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs mb-4 text-vscode-variable">
                      {useCase.description}
                    </CardDescription>
                    <div className="flex items-center gap-2 mb-3">
                      <button
                        onClick={() => window.open('https://cal.com/jetbuilder-expert', '_blank')}
                        className="px-2 py-1 bg-vscode-keyword hover:bg-vscode-selection text-white text-xs font-mono rounded-sm transition-colors"
                      >
                        $ demo
                      </button>
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
                      <a
                        href="#"
                        className="inline-flex items-center text-vscode-type font-bold hover:text-vscode-function group text-xs tracking-wide"
                      >
                        learn-more
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* Share Buttons */}
                    <div className="mt-3 pt-3 border-t border-vscode-border">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-vscode-comment tracking-wide mr-1">// share:</span>
                        <button
                          onClick={() => handleShareLinkedIn(useCase)}
                          className="p-1.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded transition-colors"
                          title="Share on LinkedIn"
                        >
                          <Linkedin size={14} />
                        </button>
                        <button
                          onClick={() => handleCopyLink(useCase)}
                          className="p-1.5 bg-vscode-bg hover:bg-vscode-hover text-vscode-variable rounded transition-colors"
                          title="Copy link"
                        >
                          {copiedId === useCase.id ? <Check size={14} /> : <Link2 size={14} />}
                        </button>
                        <button
                          onClick={() => handleShareWhatsApp(useCase)}
                          className="p-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded transition-colors"
                          title="Share on WhatsApp"
                        >
                          <MessageCircle size={14} />
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


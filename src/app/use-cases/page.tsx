'use client'

import { motion } from 'framer-motion'
import { Heart, Phone, Bot, Video, BarChart3, Users, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface UseCase {
  id: string
  title: string
  icon: any
  description: string
  category: string
  features: string[]
}

export default function UseCasesPage() {
  const useCases: UseCase[] = [
    {
      id: 'medical-healthcare',
      title: 'Medical & Healthcare',
      icon: Heart,
      category: 'Healthcare',
      description: 'Transform patient care with AI-powered medical documentation and real-time clinical intelligence. HIPAA-compliant infrastructure for hospitals, clinics, and telemedicine.',
      features: [
        'Medical terminology recognition',
        'Automated clinical note generation',
        'Patient interaction analysis',
        'EHR system integration'
      ]
    },
    {
      id: 'contact-center',
      title: 'Contact Center Solutions',
      icon: Phone,
      category: 'Customer Service',
      description: 'Enhance customer service with intelligent call analytics and quality assurance automation. Monitor every interaction in real-time across voice, chat, and email.',
      features: [
        'Real-time sentiment analysis',
        'Automated call scoring',
        'Agent performance insights',
        'Compliance monitoring'
      ]
    },
    {
      id: 'ai-voice-agents',
      title: 'AI Voice Agents',
      icon: Bot,
      category: 'Automation',
      description: 'Deploy intelligent voice agents for automated customer interactions. Handle unlimited concurrent calls with natural conversational AI across 55+ languages.',
      features: [
        'Natural language understanding',
        'Context-aware responses',
        'Multilingual support',
        'Seamless human handoff'
      ]
    },
    {
      id: 'media-captioning',
      title: 'Media & Event Captioning',
      icon: Video,
      category: 'Broadcasting',
      description: 'Deliver real-time captions and transcripts for broadcast media, live events, and streaming content. Sub-second latency with 55+ language support.',
      features: [
        'Real-time caption generation',
        'Speaker identification',
        'Multi-language support',
        'Broadcast integration'
      ]
    },
    {
      id: 'speech-analytics',
      title: 'Speech Analytics',
      icon: BarChart3,
      category: 'Intelligence',
      description: 'Extract actionable intelligence from voice data to drive business decisions. Analyze conversations at scale to uncover trends and support regulatory compliance efforts.',
      features: [
        'Emotion and sentiment detection',
        'Topic and keyword tracking',
        'Compliance monitoring',
        'Predictive analytics'
      ]
    },
    {
      id: 'meeting-assistants',
      title: 'Meeting Assistants',
      icon: Users,
      category: 'Productivity',
      description: 'Automate meeting documentation with intelligent note-taking and action item extraction. Transform meetings into actionable insights with searchable archives.',
      features: [
        'Real-time transcription',
        'Automatic summarization',
        'Action item extraction',
        'Calendar integration'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-vscode-bg pt-24 font-mono">
      <div className="container mx-auto px-4 py-16">
        {/* Section Header - IDE Style */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
              <BarChart3 className="w-5 h-5 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment">// use-cases</span>
            </div>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-vscode-function tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            useCases.workWhereMattersMost()
          </motion.h1>
          <motion.p
            className="text-sm text-vscode-variable max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From healthcare to finance, manufacturing to government—build agentic workflows that process intelligence from any data source across mission-critical business operations. Deploy on YOUR infrastructure—no Azure, AWS, or Google required.
          </motion.p>
        </div>

        {/* Use Cases Grid - IDE Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={useCase.id}
                id={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="scroll-mt-20"
              >
                <Card className="h-full bg-vscode-sidebar border border-vscode-border hover:border-vscode-type transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-vscode-bg border border-vscode-border rounded-sm">
                        <Icon className="w-5 h-5 text-vscode-type" />
                      </div>
                      <div className="text-xs font-bold text-vscode-comment tracking-wider">
                        // {useCase.category}
                      </div>
                    </div>
                    <CardTitle className="text-vscode-function group-hover:text-vscode-type transition-colors text-base tracking-wide">
                      {useCase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-vscode-variable mb-4 text-xs">
                      {useCase.description}
                    </CardDescription>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <div className="text-xs font-bold text-vscode-comment tracking-wider mb-2">
                        // key-features
                      </div>
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <span className="text-vscode-comment text-xs">✓</span>
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-vscode-border">
                      <a href="/contact" className="inline-flex items-center text-xs font-bold text-vscode-variable hover:text-vscode-type tracking-wide group">
                        learn-more
                        <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section - IDE Style */}
        <motion.div
          className="bg-vscode-sidebar border border-vscode-border rounded-sm p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-vscode-function tracking-wide mb-4">
            readyToTransform.yourOperations()
          </h3>
          <p className="text-sm text-vscode-variable mb-8 max-w-2xl mx-auto">
            Contact our solutions architects to discuss your specific use case and deployment requirements. Build on YOUR infrastructure—no cloud dependency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-vscode-keyword hover:bg-vscode-selection text-white font-mono text-xs group" onClick={() => window.open('https://cal.com/jetbuilder-expert', '_blank')}>
                $ schedule-consultation
                <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            <a href="/">
              <Button
                size="lg"
                variant="outline"
                className="border border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono text-xs"
              >
                explore-platform
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Back Link - IDE Style */}
        <div className="mt-8 text-center">
          <a 
            href="/"
            className="text-xs text-vscode-comment hover:text-vscode-type transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}


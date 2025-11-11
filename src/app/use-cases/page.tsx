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
    <div className="min-h-screen bg-gradient-to-br from-gunmetal-950 via-gunmetal-900 to-primary-950">
      <div className="container mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-tactical-900 px-4 py-2 rounded-sm mb-6 border border-tactical-700">
              <BarChart3 className="w-5 h-5 text-tactical-400" />
              <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Use Cases</span>
            </div>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI That Works Where It Matters Most
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From healthcare to finance, manufacturing to government—Sovereign AI Platform processes intelligence from any data source across mission-critical business operations
          </motion.p>
        </div>

        {/* Use Cases Grid */}
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
                <Card className="h-full bg-gunmetal-900 border-2 border-tactical-700 hover:border-tactical-600 transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-tactical-900 border border-tactical-700 rounded">
                        <Icon className="w-5 h-5 text-tactical-400" />
                      </div>
                      <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider">
                        {useCase.category}
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-tactical-400 transition-colors text-xl uppercase tracking-wide">
                      {useCase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 mb-4">
                      {useCase.description}
                    </CardDescription>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider mb-2">
                        Key Features
                      </div>
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-tactical-500 rounded-full flex-shrink-0 mt-1.5"></div>
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gunmetal-700">
                      <a href="/contact" className="inline-flex items-center text-sm font-bold text-tactical-400 hover:text-tactical-300 uppercase tracking-wide group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-tactical-600 to-tactical-700 rounded-lg p-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold uppercase tracking-wide mb-4">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-xl text-tactical-100 mb-8 max-w-2xl mx-auto">
            Contact our solutions architects to discuss your specific use case and deployment requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-tactical-600 hover:bg-gray-100 font-bold uppercase group" onClick={() => window.open('https://cal.com/jetbuilder-expert', '_blank')}>
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            <a href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-tactical-600 font-bold uppercase"
              >
                Explore Platform
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a 
            href="/"
            className="text-sm text-gray-500 hover:text-tactical-400 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}


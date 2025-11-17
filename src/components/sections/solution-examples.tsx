'use client'

import { motion } from 'framer-motion'
import { DollarSign, Headphones, Eye, Shield, ArrowRight, Code } from 'lucide-react'
import Button from '@/components/ui/button'

export default function SolutionExamples() {
  const solutions = [
    {
      id: 'financial-services',
      title: 'Financial Services',
      icon: DollarSign,
      description: 'Autonomous workflows for banking and insurance operations',
      capabilities: [
        'Claims processing with fraud detection',
        'Autonomous mortgage approval',
        'Corporate onboarding (KYC/KYB)',
        'Corporate lending, Deposits, CASA'
      ],
      link: '/financial-services',
      color: 'from-green-900/40 to-emerald-800/40',
      borderColor: 'border-green-600'
    },
    {
      id: 'contact-centers',
      title: 'Contact Centers',
      icon: Headphones,
      description: 'Fully autonomous contact center with AI components',
      capabilities: [
        '15 integrated AI components',
        'Speech-to-text with sentiment analysis',
        'Speaker diarization',
        'Human-in-the-loop oversight'
      ],
      link: '/contact-center',
      color: 'from-blue-900/40 to-cyan-800/40',
      borderColor: 'border-blue-600'
    },
    {
      id: 'intelligence-ops',
      title: 'Intelligence Operations',
      icon: Eye,
      description: 'Multi-source intelligence gathering and analysis',
      capabilities: [
        'Competitor monitoring',
        'Entity detection & tracking',
        'Anomaly identification',
        'Web scraping agentic workflows'
      ],
      link: '/intelligence-ops',
      color: 'from-purple-900/40 to-violet-800/40',
      borderColor: 'border-purple-600'
    },
    {
      id: 'ai-security',
      title: 'AI Security',
      icon: Shield,
      description: 'Comprehensive LLM security testing suite',
      capabilities: [
        'LLM security testing',
        'Prompt injection detection',
        'Jailbreaking detection',
        'Adversarial attack detection'
      ],
      link: '/ai-security',
      color: 'from-red-900/40 to-orange-800/40',
      borderColor: 'border-red-600'
    }
  ]

  return (
    <section id="solution-examples" className="section-padding bg-gunmetal-950">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-tactical-900 px-4 py-2 rounded-sm mb-6 border border-tactical-700">
            <Code className="w-5 h-5 text-tactical-400" />
            <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Pre-Built Solutions</span>
          </div>
          
          <h2 className="heading-lg text-white mb-4 uppercase tracking-wide">
            Enterprise-Ready Agentic Workflows
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deploy production-ready AI workflows built with JetBuilder Studio. Fully customizable for your needs.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${solution.color} border-2 ${solution.borderColor} rounded-lg p-8 hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gunmetal-800 border border-tactical-600 rounded flex items-center justify-center">
                      <Icon className="w-6 h-6 text-tactical-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white uppercase tracking-wide">{solution.title}</h3>
                      <p className="text-tactical-400 text-sm font-semibold uppercase">Pre-Built Solution</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-3 mb-8">
                  {solution.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-tactical-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={solution.link} className="flex-1">
                    <Button variant="outline" className="w-full border-tactical-600 text-tactical-400 hover:bg-tactical-900/30 font-bold uppercase">
                      View Architecture
                    </Button>
                  </a>
                  <a href="/start-building" className="flex-1">
                    <Button className="w-full bg-tactical-600 hover:bg-tactical-700 text-white font-bold uppercase">
                      Build Similar
                    </Button>
                  </a>
                </div>
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
              Need a Custom Solution?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Build your own agentic workflows with JetBuilder Studio or let our team create a custom solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/start-building">
                <Button size="lg" className="bg-tactical-600 hover:bg-tactical-700 text-white font-bold uppercase">
                  Start Building Free
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-tactical-600 text-tactical-400 hover:bg-tactical-900 font-bold uppercase">
                  Request Custom Solution
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


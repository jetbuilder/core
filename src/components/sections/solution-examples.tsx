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
      accentColor: 'text-vscode-type'
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
      accentColor: 'text-vscode-type'
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
      accentColor: 'text-vscode-type'
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
      accentColor: 'text-vscode-type'
    }
  ]

  return (
    <section id="solution-examples" className="section-padding bg-vscode-bg">
      <div className="container">
        {/* Section Header - Code Comment Style */}
        <motion.div
          className="text-center mb-16 font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
            <Code className="w-4 h-4 text-vscode-type" />
            <span className="text-xs font-bold text-vscode-comment">// pre-built-solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4 tracking-wide">
            Enterprise.Ready.Workflows()
          </h2>
          
          <p className="text-sm text-vscode-variable max-w-3xl mx-auto">
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
                className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8 hover:border-vscode-type transition-all duration-300 font-mono"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${solution.accentColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-vscode-function tracking-wide">{solution.title}</h3>
                      <p className="text-vscode-comment text-xs font-mono">// pre-built-solution</p>
                    </div>
                  </div>
                </div>

                <p className="text-vscode-variable mb-6 leading-relaxed text-sm">
                  {solution.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-2 mb-8">
                  {solution.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-vscode-comment text-xs">✓</span>
                      <span className="text-xs text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={solution.link} className="flex-1">
                    <Button variant="outline" className="w-full border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono text-xs">
                      view-architecture
                    </Button>
                  </a>
                  <a href="/start-building" className="flex-1">
                    <Button className="w-full bg-vscode-keyword hover:bg-vscode-selection text-white font-mono text-xs">
                      build-similar
                    </Button>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA - Terminal Style */}
        <motion.div
          className="mt-16 text-center font-mono"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8">
            <h3 className="text-xl font-bold text-vscode-function mb-4 tracking-wide">
              customSolution.required()
            </h3>
            <p className="text-vscode-variable text-sm mb-6 max-w-2xl mx-auto">
              Build your own agentic workflows with JetBuilder Studio or let our team create a custom solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/start-building">
                <Button size="lg" className="bg-vscode-keyword hover:bg-vscode-selection text-white font-mono text-xs">
                  $ start-building --free
                </Button>
              </a>
              <a href="/contact">
                <Button size="lg" variant="outline" className="border border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono text-xs">
                  request-custom --solution
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


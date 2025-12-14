'use client'

import { Target, Shield, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ValueProps() {
  const values = [
    {
      icon: Target,
      title: 'Voice Intelligence',
      subtitle: 'Audio & speech processing',
      description: 'Extract intelligence from voice calls, radio communications, recordings, and real-time audio streams. Autonomous AI agents process millions of voice channels simultaneously with speaker identification, emotion analysis, and threat detection.',
    },
    {
      icon: Shield,
      title: 'Unstructured Data',
      subtitle: 'Text, documents & multimedia',
      description: 'Process unstructured text, documents, emails, chat logs, social media, and multimedia content. AI agents autonomously extract entities, relationships, patterns, and actionable intelligence from massive datasets.',
    },
    {
      icon: Globe,
      title: 'Multi-Modal Analysis',
      subtitle: 'Combined intelligence extraction',
      description: 'Correlate insights across voice, text, and unstructured data sources. AI agents automatically link conversations to documents, identify patterns across modalities, and generate comprehensive intelligence reports.',
    },
  ]

  return (
    <section className="section-padding bg-vscode-bg">
      <div className="container font-mono">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4">
            intelligence.multiModal()
          </h2>
          <p className="text-sm text-vscode-variable max-w-3xl mx-auto">
            Extract actionable intelligence from voice, audio, text, documents, and all forms of unstructured data. Autonomous AI agents correlate insights across multiple data sources on your private infrastructure.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-vscode-sidebar border-2 border-vscode-type rounded-sm mb-6">
                  <Icon className="w-7 h-7 text-vscode-type" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-vscode-function mb-2">
                  {value.title}
                </h3>

                {/* Subtitle */}
                <div className="text-vscode-type font-bold mb-4 text-xs">
                  // {value.subtitle}
                </div>

                {/* Description */}
                <p className="text-vscode-variable leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


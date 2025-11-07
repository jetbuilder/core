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
    <section className="section-padding bg-gunmetal-900">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">
            Voice Intelligence. Unstructured Data. Multi-Modal Analysis.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gunmetal-800 border-2 border-tactical-700 rounded-sm mb-6">
                  <Icon className="w-8 h-8 text-tactical-400" />
                </div>

                {/* Title */}
                <h3 className="heading-sm text-white mb-2 uppercase tracking-wide">
                  {value.title}
                </h3>

                {/* Subtitle */}
                <div className="text-tactical-400 font-bold mb-4 uppercase text-sm tracking-wider">
                  {value.subtitle}
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
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


'use client'

import { Shield, Lock, FileCheck, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Security() {
  const certifications = [
    {
      icon: Award,
      title: 'Memory-Safe Rust Core',
      description: 'Built with Rust to help reduce common vulnerability categories. Memory safety features at the language level help prevent buffer overflows, null pointer dereferences, and data races in JetBuilder-developed code.',
    },
    {
      icon: Shield,
      title: 'Minimal Runtime Dependencies',
      description: 'Native compilation with minimal dependencies. Designed for reduced attack surface with predictable, deterministic behavior.',
    },
    {
      icon: FileCheck,
      title: 'Enterprise & Government Compliance Support',
      description: 'Infrastructure designed to support SOC 2, ISO 27001, FedRAMP, and FIPS 140-2 requirements. Available for air-gapped, on-premises, or private data center deployment with network isolation capabilities.',
    },
    {
      icon: Lock,
      title: 'Enterprise-Grade Security Features',
      description: 'Memory safety, concurrency safety, and data sovereignty controls designed to help organizations process data within their jurisdiction and meet Canadian PIPEDA and US regulatory requirements.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gunmetal-950 via-primary-950 to-gunmetal-900 text-white border-y border-tactical-800">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 uppercase tracking-wide">
            Rust-Powered Security - Private Infrastructure
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Core platform engineered in Rust, helping reduce common security vulnerabilities. Memory-safe design helps prevent buffer overflows, data races, and undefined behavior. Available for deployment on your private infrastructure with air-gap capability—minimal external dependencies. Designed to support deployment on enterprise-certified and government-certified environments across Canada and the United States.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
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
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed font-medium">
                  {cert.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Security Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-gunmetal-800 border-2 border-tactical-700 px-8 py-4 rounded-sm">
            <Shield className="w-6 h-6 text-tactical-400" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">
              Private Infrastructure Option • Air-Gap Capable • Minimal External Dependencies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


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
    <section className="section-padding bg-vscode-bg text-white border-y border-vscode-border">
      <div className="container font-mono">
        {/* Section Header - IDE Style */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-vscode-comment text-sm">// security-features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide text-vscode-function">
            security.rustPowered()
          </h2>
          <p className="text-sm text-vscode-variable max-w-3xl mx-auto">
            Core platform engineered in Rust, helping reduce common security vulnerabilities. Memory-safe design helps prevent buffer overflows, data races, and undefined behavior. Available for deployment on your private infrastructure with air-gap capability—minimal external dependencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-vscode-bg border border-vscode-border rounded-sm mb-4">
                  <Icon className="w-6 h-6 text-vscode-type" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold mb-3 tracking-wide text-vscode-function">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-vscode-variable text-xs leading-relaxed">
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
          <div className="inline-flex items-center space-x-2 bg-vscode-sidebar border border-vscode-border px-8 py-4 rounded-sm">
            <Shield className="w-5 h-5 text-vscode-type" />
            <span className="text-xs font-bold tracking-wider text-vscode-variable">
              private-infra • air-gap-capable • minimal-dependencies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


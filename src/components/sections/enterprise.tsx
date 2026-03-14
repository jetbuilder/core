'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const industries = [
  {
    title: 'Financial Services',
    desc: 'Claims processing, fraud detection, KYC/AML workflows',
    compliance: ['SOC 2', 'PCI-DSS', 'SOX'],
  },
  {
    title: 'Healthcare',
    desc: 'Medical records, clinical support, patient triage',
    compliance: ['HIPAA', 'PIPEDA', 'SOC 2'],
  },
  {
    title: 'Government',
    desc: 'Document processing, citizen services, compliance',
    compliance: ['FedRAMP', 'FIPS 140-2', 'IL4/IL5'],
  },
  {
    title: 'Energy & Utilities',
    desc: 'Grid monitoring, predictive maintenance, compliance',
    compliance: ['NERC-CIP', 'SOC 2', 'ISO 27001'],
  },
  {
    title: 'Telecommunications',
    desc: 'Network operations, customer service, asset management',
    compliance: ['SOC 2', 'ISO 27001', 'GDPR'],
  },
  {
    title: 'Manufacturing',
    desc: 'Quality control, supply chain, predictive maintenance',
    compliance: ['ISO 27001', 'SOC 2', 'CMMC'],
  },
]

export default function Enterprise() {
  return (
    <section id="enterprise" className="bg-[#0d1117] py-32">
      <div className="container px-6 max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-wide"
          >
            ENTERPRISE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Industry Templates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Reference implementations for regulated industries. Fork, customize, deploy.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="border border-[#30363d] rounded-lg p-8 hover:border-gray-600 transition-colors group"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
              <p className="text-gray-500 mb-4">{industry.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {industry.compliance.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs px-2 py-1 bg-[#161b22] border border-[#30363d] rounded text-gray-400"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm"
              >
                View template
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center border border-[#30363d] rounded-lg p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a custom implementation?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our team can help design and deploy a solution tailored to your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Schedule consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

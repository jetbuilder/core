'use client'

import { motion } from 'framer-motion'

const useCases = [
  { title: 'Financial Services', desc: 'Claims, fraud detection, lending, KYC/AML' },
  { title: 'Healthcare', desc: 'Medical records, clinical support, triage' },
  { title: 'Cyber Security', desc: 'Threat detection, incident response, SIEM analysis' },
  { title: 'Observability', desc: 'Log analysis, anomaly detection, root cause analysis' },
  { title: 'Government', desc: 'Document processing, intelligence analysis' },
  { title: 'Manufacturing', desc: 'Quality control, predictive maintenance' },
  { title: 'Telecom', desc: 'Network operations, asset management' },
  { title: 'Legal', desc: 'Contract review, research, compliance' },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-vscode-bg py-32">
      <div className="container px-6 max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-wide"
          >
            USE CASES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Built for Any Industry
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Deploy AI agents where it matters most.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="border border-[#30363d] rounded-lg p-6 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
              <p className="text-gray-500 text-sm">{useCase.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

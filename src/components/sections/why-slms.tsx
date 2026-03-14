'use client'

import { motion } from 'framer-motion'

const benefits = [
  { title: 'Lower Cost', desc: 'Run on commodity hardware. No per-token API fees.' },
  { title: 'Data Privacy', desc: 'Your data stays on your servers. Always.' },
  { title: 'Customizable', desc: 'Fine-tune on your domain data.' },
  { title: 'No Latency', desc: 'Local inference. Sub-100ms response.' },
  { title: 'Offline Ready', desc: 'Works in air-gapped environments.' },
  { title: 'Predictable', desc: 'Fixed costs. No surprise bills.' },
]

export default function WhySLMs() {
  return (
    <section id="why-slms" className="bg-vscode-bg py-32">
      <div className="container px-6 max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-wide"
          >
            WHY SMALL LANGUAGE MODELS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Big Enough for Production
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            7B-13B parameter models deliver enterprise-grade results
            without cloud dependencies.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="border border-[#30363d] rounded-lg p-6 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

const metrics = [
  {
    label: 'Agent Instantiation',
    jetbuilder: 100,
    others: 8,
    multiplier: '12x',
    description: 'faster startup',
  },
  {
    label: 'Memory Footprint',
    jetbuilder: 100,
    others: 15,
    multiplier: '6x',
    description: 'lower memory',
  },
  {
    label: 'Throughput',
    jetbuilder: 100,
    others: 12,
    multiplier: '8x',
    description: 'more requests/sec',
  },
]

export default function Performance() {
  return (
    <section className="bg-[#0d1117] py-32">
      <div className="container px-6 max-w-5xl mx-auto">

        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-widest uppercase"
          >
            Benchmarks
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Performance Matters
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Rust's zero-cost abstractions mean you don't pay for what you don't use.
          </motion.p>
        </div>

        <div className="space-y-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-medium">{metric.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-white">{metric.multiplier}</span>
                  <span className="text-gray-500">{metric.description}</span>
                </div>
              </div>

              <div className="space-y-2">
                {/* JetBuilder bar */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-24">JetBuilder</span>
                  <div className="flex-1 bg-[#161b22] rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.jetbuilder}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-[#58a6ff] to-[#3b82f6] rounded-full"
                    />
                  </div>
                </div>

                {/* Others bar */}
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 w-24">Python</span>
                  <div className="flex-1 bg-[#161b22] rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.others}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 + 0.2 }}
                      className="h-full bg-[#30363d] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          Benchmarks performed on identical hardware. Results may vary.
        </motion.p>

      </div>
    </section>
  )
}

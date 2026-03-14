'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Server, Eye } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Memory-Safe Rust',
    desc: 'Zero buffer overflows, no null pointer dereferences, no data races.',
  },
  {
    icon: Lock,
    title: 'Data Sovereignty',
    desc: 'Your data stays on your infrastructure. Always.',
  },
  {
    icon: Server,
    title: 'Air-Gap Ready',
    desc: 'Deploy in completely isolated environments.',
  },
  {
    icon: Eye,
    title: 'Audit Logging',
    desc: 'Complete visibility into every operation.',
  },
]

export default function Security() {
  return (
    <section className="bg-[#0d1117] py-32 border-y border-[#30363d]">
      <div className="container px-6 max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-wide"
          >
            SECURITY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Built Secure by Default
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Rust-powered core with minimal dependencies and complete data isolation.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="border border-[#30363d] rounded-lg p-6"
              >
                <div className="w-10 h-10 bg-[#161b22] border border-[#30363d] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#161b22] border border-[#30363d] rounded-lg">
            <span className="text-gray-400 text-sm">SOC 2</span>
            <span className="text-[#30363d]">•</span>
            <span className="text-gray-400 text-sm">ISO 27001</span>
            <span className="text-[#30363d]">•</span>
            <span className="text-gray-400 text-sm">HIPAA</span>
            <span className="text-[#30363d]">•</span>
            <span className="text-gray-400 text-sm">FedRAMP</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

const industries = [
  'Insurance Claims',
  'Banking & Finance',
  'Healthcare Systems',
  'Contact Centers',
  'Telecommunications',
  'Government Services',
  'Legal & Compliance',
  'Manufacturing',
]

export default function Logos() {
  return (
    <section className="bg-[#161b22] py-20 overflow-hidden">
      <div className="container px-6 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mb-12"
        >
          Deployed across regulated industries
        </motion.p>

        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#161b22] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#161b22] to-transparent z-10" />

          {/* Scrolling logos */}
          <motion.div
            className="flex gap-16"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...industries, ...industries].map((industry, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-8 py-4 bg-[#0d1117] border border-[#30363d] rounded-lg"
              >
                <span className="text-gray-400 font-semibold whitespace-nowrap">{industry}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

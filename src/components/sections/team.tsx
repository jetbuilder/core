'use client'

import { motion } from 'framer-motion'

const team = [
  { name: 'Alex Chen', role: 'Founder & CEO', avatar: 'AC' },
  { name: 'Maria Santos', role: 'CTO', avatar: 'MS' },
  { name: 'David Kim', role: 'Head of Engineering', avatar: 'DK' },
  { name: 'Sarah Johnson', role: 'Lead Architect', avatar: 'SJ' },
  { name: 'Michael Brown', role: 'ML Engineer', avatar: 'MB' },
  { name: 'Lisa Wang', role: 'DevRel', avatar: 'LW' },
]

export default function Team() {
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
            Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Build Together, Ship Faster
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We're a team of engineers passionate about building the future of AI infrastructure.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#58a6ff] to-[#3b82f6] rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                {member.avatar}
              </div>
              <div className="text-white font-medium">{member.name}</div>
              <div className="text-gray-500 text-sm">{member.role}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Source CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-[#161b22] border border-[#30363d] rounded-xl">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <div className="text-left">
              <div className="text-white font-medium">Open Source</div>
              <div className="text-gray-500 text-sm">Join 500+ contributors</div>
            </div>
            <a
              href="https://github.com/jetbuilder"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm"
            >
              Star on GitHub
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

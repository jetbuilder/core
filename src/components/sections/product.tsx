'use client'

import { motion } from 'framer-motion'
import { Server, Lock, Cpu, Layers } from 'lucide-react'

const features = [
  {
    icon: Server,
    title: 'On-Premises Deployment',
    desc: 'Run entirely on your infrastructure. No data leaves your network.',
  },
  {
    icon: Lock,
    title: 'Data Sovereignty',
    desc: 'Your data stays where you control it. Air-gap capable.',
  },
  {
    icon: Cpu,
    title: 'Provider Agnostic',
    desc: 'Use OpenAI, Claude, local SLMs, or any model provider.',
  },
  {
    icon: Layers,
    title: 'Composable Design',
    desc: 'Mix and match crates. Build exactly what you need.',
  },
]

export default function Product() {
  return (
    <section id="product" className="bg-[#161b22] py-32">
      <div className="container px-6 max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm mb-4 tracking-widest uppercase"
            >
              Platform
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Enterprise-Grade
              <br />
              <span className="text-gray-500">Infrastructure</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg mb-12"
            >
              Built in Rust for performance and safety. Deploy agents that scale with your business.
            </motion.p>

            <div className="space-y-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-[#0d1117] border border-[#30363d] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#58a6ff]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg mb-1">{feature.title}</div>
                      <div className="text-gray-500">{feature.desc}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right - Code */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#0d1117] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                </div>
                <span className="text-gray-500 text-sm ml-2 font-mono">team.rs</span>
              </div>

              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div><span className="text-[#ff7b72]">use</span> <span className="text-gray-300">jet::prelude::*;</span></div>
                <br />
                <div className="text-[#8b949e]">// Create a team of specialized agents</div>
                <div><span className="text-[#ff7b72]">let</span> <span className="text-gray-300">team = </span><span className="text-[#79c0ff]">Team</span><span className="text-gray-300">::builder()</span></div>
                <div className="text-gray-300 ml-4">.mode(<span className="text-[#79c0ff]">TeamMode</span>::Coordinate)</div>
                <div className="text-gray-300 ml-4">.supervisor(manager)</div>
                <div className="text-gray-300 ml-4">.agents(<span className="text-[#ff7b72]">vec!</span>[</div>
                <div className="text-gray-300 ml-8">researcher,</div>
                <div className="text-gray-300 ml-8">analyst,</div>
                <div className="text-gray-300 ml-8">writer,</div>
                <div className="text-gray-300 ml-4">])</div>
                <div className="text-gray-300 ml-4">.build()<span className="text-gray-500">?</span>;</div>
                <br />
                <div className="text-[#8b949e]">// Execute the team</div>
                <div><span className="text-[#ff7b72]">let</span> <span className="text-gray-300">result = team</span></div>
                <div className="text-gray-300 ml-4">.run(<span className="text-[#a5d6ff]">"Analyze market trends"</span>)</div>
                <div className="text-gray-300 ml-4">.<span className="text-[#ff7b72]">await</span><span className="text-gray-500">?</span>;</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

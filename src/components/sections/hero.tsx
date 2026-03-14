'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-[#0d1117] min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161b22] via-[#0d1117] to-[#0d1117]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container px-6 max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#161b22] border border-[#30363d] rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-400 text-sm">Secure On-Premises Agentic Framework</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]"
          >
            Private AI Agents
            <br />
            <span className="text-gray-500">on Your Infrastructure</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Multi-agent AI deployed entirely on your infrastructure.
            <br className="hidden md:block" />
            No data leaves your network. Ever.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a
              href="#crates"
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="https://github.com/jetbuilder"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#30363d] text-white rounded-lg font-semibold text-lg hover:bg-[#161b22] transition-all inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              View on GitHub
            </a>
          </motion.div>

          {/* Code example */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden shadow-2xl">
              {/* Code header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d] bg-[#0d1117]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                </div>
                <span className="text-gray-500 text-sm ml-2 font-mono">main.rs</span>
              </div>

              {/* Code content */}
              <div className="p-6 text-left font-mono text-sm leading-relaxed">
                <div><span className="text-[#ff7b72]">use</span> <span className="text-gray-300">jet::prelude::*;</span></div>
                <br />
                <div><span className="text-[#ff7b72]">let</span> <span className="text-gray-300">agent = </span><span className="text-[#79c0ff]">Agent</span><span className="text-gray-300">::builder(</span><span className="text-[#a5d6ff]">"analyst"</span><span className="text-gray-300">)</span></div>
                <div className="text-gray-300 ml-4">.model(<span className="text-[#79c0ff]">Claude</span>::sonnet())</div>
                <div className="text-gray-300 ml-4">.tools(<span className="text-[#ff7b72]">vec!</span>[search, calculate])</div>
                <div className="text-gray-300 ml-4">.build()<span className="text-gray-500">?</span>;</div>
                <br />
                <div><span className="text-[#ff7b72]">let</span> <span className="text-gray-300">result = agent.run(</span><span className="text-[#a5d6ff]">"Analyze market trends"</span><span className="text-gray-300">).</span><span className="text-[#ff7b72]">await</span><span className="text-gray-500">?</span><span className="text-gray-300">;</span><span className={`inline-block w-2 h-5 bg-white ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} /></div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-16 mt-20"
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-white">100%</div>
              <div className="text-gray-500 mt-2">On-Premises</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white">0</div>
              <div className="text-gray-500 mt-2">Data Leaves Network</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white">12</div>
              <div className="text-gray-500 mt-2">Rust Crates</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white">Air-Gap</div>
              <div className="text-gray-500 mt-2">Ready</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

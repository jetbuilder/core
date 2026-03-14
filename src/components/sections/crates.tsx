'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    name: 'AI Foundation',
    modules: [
      { name: 'Core Engine', desc: 'Foundation types and AI primitives' },
      { name: 'Model Gateway', desc: 'LLM & SLM provider abstraction' },
      { name: 'Tool Framework', desc: 'AI tool definitions & execution' },
    ],
  },
  {
    name: 'AI Agents',
    modules: [
      { name: 'Agent Runtime', desc: 'Single agent with human-in-the-loop' },
      { name: 'Team Orchestration', desc: 'Multi-agent coordination' },
      { name: 'Workflow Engine', desc: 'AI pipeline automation' },
    ],
  },
  {
    name: 'AI Memory',
    modules: [
      { name: 'Knowledge Base', desc: 'RAG & document intelligence' },
      { name: 'Context Memory', desc: 'Conversation & session state' },
      { name: 'Embeddings', desc: 'Semantic vector generation' },
    ],
  },
  {
    name: 'Data Layer',
    modules: [
      { name: 'Data Store', desc: 'Persistent AI state management' },
      { name: 'Vector DB', desc: 'Semantic search infrastructure' },
      { name: 'PostgreSQL', desc: 'Relational data & transactional storage' },
      { name: 'ClickHouse Cluster', desc: 'High-performance analytics & telemetry' },
      { name: 'Unified SDK', desc: 'Complete AI platform access' },
    ],
  },
]

const teamModes = [
  { name: 'Coordinate', desc: 'AI supervisor delegates to specialist agents', color: '#3b82f6' },
  { name: 'Route', desc: 'Intelligent routing based on intent', color: '#22c55e' },
  { name: 'Collaborate', desc: 'Multi-agent reasoning & synthesis', color: '#a855f7' },
  { name: 'Broadcast', desc: 'Parallel AI processing & aggregation', color: '#f59e0b' },
]

export default function Crates() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="crates" className="bg-[#0d1117] py-32">
      <div className="container px-6 max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-widest uppercase"
          >
            AI Platform
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            14 AI Modules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Modular AI components. Pick what you need for your use case.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === idx
                  ? 'bg-white text-black'
                  : 'bg-[#161b22] text-gray-400 hover:text-white border border-[#30363d]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Modules grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32"
        >
          {categories[activeTab].modules.map((module) => (
            <div
              key={module.name}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff] transition-all hover:scale-[1.02]"
            >
              <div className="font-semibold text-[#79c0ff] text-lg mb-2">{module.name}</div>
              <div className="text-gray-400">{module.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Team Modes */}
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            4 AI Orchestration Modes
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-xl"
          >
            Multi-agent coordination patterns for complex workflows
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {teamModes.map((mode) => (
            <div
              key={mode.name}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff] transition-all hover:scale-[1.02]"
            >
              <div
                className="w-3 h-3 rounded-full mb-4"
                style={{ backgroundColor: mode.color }}
              />
              <div className="text-white font-semibold text-lg mb-2">{mode.name}</div>
              <div className="text-gray-500">{mode.desc}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

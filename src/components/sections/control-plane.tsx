'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, Database, Brain, MessageSquare, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Activity,
    name: 'Metrics',
    title: 'Real-time Metrics',
    description: 'Monitor agent performance, latency, and throughput in real-time. Track token usage, error rates, and response times across your entire fleet.',
  },
  {
    icon: Database,
    name: 'Memory',
    title: 'Memory Manager',
    description: 'Inspect and manage agent memory stores. View conversation history, user context, and long-term memory across sessions.',
  },
  {
    icon: Brain,
    name: 'Knowledge',
    title: 'Knowledge Manager',
    description: 'Manage your RAG pipelines. Upload documents, monitor embeddings, and tune retrieval parameters for optimal performance.',
  },
  {
    icon: MessageSquare,
    name: 'Sessions',
    title: 'Session Monitor',
    description: 'View active conversations in real-time. Debug issues, replay sessions, and analyze agent decision-making patterns.',
  },
  {
    icon: CheckCircle,
    name: 'Evals',
    title: 'Evaluations',
    description: 'Run automated evaluations against your agents. Track accuracy, hallucination rates, and task completion over time.',
  },
]

export default function ControlPlane() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-[#161b22] py-32">
      <div className="container px-6 max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-widest uppercase"
          >
            Control Plane
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Manage Your System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A powerful dashboard to monitor, debug, and optimize your agents.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <button
                  key={feature.name}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                    activeTab === idx
                      ? 'bg-[#0d1117] border border-[#58a6ff]'
                      : 'border border-transparent hover:bg-[#0d1117]/50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeTab === idx ? 'bg-[#58a6ff]/20' : 'bg-[#0d1117]'
                  }`}>
                    <Icon className={`w-5 h-5 ${activeTab === idx ? 'text-[#58a6ff]' : 'text-gray-400'}`} />
                  </div>
                  <span className={`font-medium ${activeTab === idx ? 'text-white' : 'text-gray-400'}`}>
                    {feature.name}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0d1117] border border-[#30363d] rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {features[activeTab].title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {features[activeTab].description}
            </p>

            {/* Mock UI */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-[#30363d] rounded w-3/4" />
                <div className="h-4 bg-[#30363d] rounded w-1/2" />
                <div className="h-4 bg-[#30363d] rounded w-5/6" />
                <div className="h-4 bg-[#30363d] rounded w-2/3" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

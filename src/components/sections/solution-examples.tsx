'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'

const templates = [
  {
    title: 'Financial Services',
    desc: 'Claims processing, fraud detection, KYC workflows',
    crates: ['jet-agent', 'jet-workflow', 'jet-knowledge'],
    github: 'https://github.com/jetbuilder/jetbuilder/tree/main/examples/financial-services',
  },
  {
    title: 'Contact Center',
    desc: 'Voice AI, sentiment analysis, ticket routing',
    crates: ['jet-agent', 'jet-team', 'jet-memory'],
    github: 'https://github.com/jetbuilder/jetbuilder/tree/main/examples/contact-center',
  },
  {
    title: 'Intelligence Ops',
    desc: 'Entity tracking, anomaly detection, web scraping',
    crates: ['jet-agent', 'jet-workflow', 'jet-tools'],
    github: 'https://github.com/jetbuilder/jetbuilder/tree/main/examples/intelligence-ops',
  },
  {
    title: 'Document Processing',
    desc: 'OCR, extraction, classification, summarization',
    crates: ['jet-agent', 'jet-knowledge', 'jet-embeddings'],
    github: 'https://github.com/jetbuilder/jetbuilder/tree/main/examples/document-processing',
  },
  {
    title: 'RAG Pipeline',
    desc: 'Document ingestion, semantic search, QA chatbot',
    crates: ['jet-agent', 'jet-knowledge', 'jet-vectordb', 'jet-embeddings'],
    github: 'https://github.com/jetbuilder/jetbuilder/tree/main/examples/rag-pipeline',
  },
  {
    title: 'Multi-Agent Research',
    desc: 'Coordinated research team with supervisor',
    crates: ['jet-team', 'jet-agent', 'jet-tools'],
    github: 'https://github.com/jetbuilder/jetbuilder/tree/main/examples/multi-agent-research',
  },
]

export default function SolutionExamples() {
  return (
    <section id="templates" className="bg-[#0d1117] py-32">
      <div className="container px-6 max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-widest uppercase"
          >
            Templates
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Start from Templates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Fork battle-tested templates from our GitHub. Customize for your requirements.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {templates.map((template, idx) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff] transition-all duration-300 bg-[#161b22]"
            >
              {/* Corner brackets on hover */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-transparent group-hover:border-[#58a6ff] transition-all duration-300" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-transparent group-hover:border-[#58a6ff] transition-all duration-300" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-transparent group-hover:border-[#58a6ff] transition-all duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-transparent group-hover:border-[#58a6ff] transition-all duration-300" />

              <h3 className="text-xl font-semibold text-white mb-3">{template.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{template.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {template.crates.map((crate) => (
                  <span
                    key={crate}
                    className="text-xs px-2 py-1 bg-[#0d1117] border border-[#30363d] rounded text-gray-400 font-mono"
                  >
                    {crate}
                  </span>
                ))}
              </div>

              <a
                href={template.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#58a6ff] hover:text-white transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                View on GitHub
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* All Examples CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/jetbuilder/jetbuilder/tree/main/examples"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#30363d] rounded-lg text-gray-400 hover:text-white hover:border-[#58a6ff] transition-all"
          >
            <Github className="w-5 h-5" />
            Browse All Examples on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

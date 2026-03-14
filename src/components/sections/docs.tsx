'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Package, Server, Book, Code, Users, Database, Cpu } from 'lucide-react'

const quickStartCards = [
  {
    icon: Rocket,
    title: 'Get Started',
    description: 'Install JetBuilder and build your first agent in Rust',
    link: '#get-started',
  },
  {
    icon: Package,
    title: 'Crates',
    description: 'Explore the 12 composable crates in the framework',
    link: '#crates',
  },
  {
    icon: Server,
    title: 'Deploy',
    description: 'Production patterns for on-premises deployment',
    link: '#deploy',
  },
]

const codeExamples = [
  {
    tab: 'Agents',
    code: `use jet::prelude::*;

let agent = Agent::builder()
    .name("analyst")
    .model(Claude::sonnet())
    .system_prompt("You are a data analyst.")
    .tools(vec![
        calculate_tool(),
        search_tool(),
    ])
    .build()?;

let response = agent
    .run("Analyze Q4 revenue trends")
    .await?;`,
  },
  {
    tab: 'Teams',
    code: `use jet::prelude::*;

let team = Team::builder()
    .mode(TeamMode::Coordinate)
    .supervisor(manager)
    .agents(vec![
        researcher,
        analyst,
        writer,
    ])
    .build()?;

let result = team
    .run("Research market opportunities")
    .await?;`,
  },
  {
    tab: 'Workflows',
    code: `use jet::prelude::*;

let workflow = Workflow::builder()
    .step(extract_data)
    .step(analyze_patterns)
    .parallel(vec![
        generate_charts,
        write_summary,
    ])
    .condition(|ctx| ctx.has_errors(),
        handle_errors)
    .build()?;

workflow.execute(input).await?;`,
  },
  {
    tab: 'Knowledge',
    code: `use jet::prelude::*;

let knowledge = Knowledge::builder()
    .vector_db(Qdrant::new(url))
    .embeddings(OpenAI::ada_002())
    .chunker(Chunker::semantic(512))
    .build()?;

// Ingest documents
knowledge.ingest("./docs/").await?;

// Query with RAG
let context = knowledge
    .search("deployment best practices", 5)
    .await?;`,
  },
]

const docCategories = [
  {
    title: 'Get Started',
    icon: Rocket,
    links: [
      { label: 'Introduction', href: 'https://github.com/jetbuilder/jetbuilder#readme' },
      { label: 'Installation', href: 'https://github.com/jetbuilder/jetbuilder#installation' },
      { label: 'First Agent', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/examples/basic_agent.rs' },
      { label: 'Configuration', href: 'https://github.com/jetbuilder/jetbuilder#configuration' },
    ],
  },
  {
    title: 'Core Crates',
    icon: Package,
    links: [
      { label: 'jet-core', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/crates/jet-core' },
      { label: 'jet-agent', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/crates/jet-agent' },
      { label: 'jet-team', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/crates/jet-team' },
      { label: 'jet-workflow', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/crates/jet-workflow' },
    ],
  },
  {
    title: 'Memory & Knowledge',
    icon: Database,
    links: [
      { label: 'jet-memory', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/crates/jet-memory' },
      { label: 'jet-knowledge', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/crates/jet-knowledge' },
      { label: 'jet-vectordb', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/crates/jet-vectordb' },
      { label: 'jet-embeddings', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/crates/jet-embeddings' },
    ],
  },
  {
    title: 'Infrastructure',
    icon: Server,
    links: [
      { label: 'jet-db', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/crates/jet-db' },
      { label: 'jet-model', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/crates/jet-model' },
      { label: 'jet-tools', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/crates/jet-tools' },
      { label: 'Deployment', href: 'https://github.com/jetbuilder/jetbuilder#deployment' },
    ],
  },
  {
    title: 'Reference',
    icon: Book,
    links: [
      { label: 'API Docs', href: 'https://github.com/jetbuilder/jetbuilder#api' },
      { label: 'Examples', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/examples' },
      { label: 'Cookbook', href: 'https://github.com/jetbuilder/jetbuilder/tree/main/examples#readme' },
      { label: 'GitHub', href: 'https://github.com/jetbuilder/jetbuilder' },
    ],
  },
]

export default function Docs() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="docs" className="bg-[#0d1117] py-32">
      <div className="container px-6 max-w-6xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-widest uppercase"
          >
            Documentation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Build. Deploy. Scale.
            <span className="inline-block w-[3px] h-12 bg-[#58a6ff] ml-2 animate-pulse" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Agentic AI in Rust. Enterprise-grade performance on your infrastructure.
          </motion.p>
        </div>

        {/* Quick Start Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {quickStartCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.a
                key={card.title}
                href={card.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff] transition-all duration-300"
              >
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-transparent group-hover:border-[#58a6ff] transition-all duration-300" />
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-transparent group-hover:border-[#58a6ff] transition-all duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-transparent group-hover:border-[#58a6ff] transition-all duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-transparent group-hover:border-[#58a6ff] transition-all duration-300" />

                <div className="w-12 h-12 bg-[#0d1117] border border-[#30363d] rounded-lg flex items-center justify-center mb-4 group-hover:border-[#58a6ff] transition-colors">
                  <Icon className="w-6 h-6 text-[#58a6ff]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </motion.a>
            )
          })}
        </div>

        {/* Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-5 h-5 text-[#58a6ff]" />
            <span className="text-gray-400 text-sm font-medium">Build with JetBuilder</span>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-4">
            {codeExamples.map((example, idx) => (
              <button
                key={example.tab}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === idx
                    ? 'bg-[#58a6ff] text-white'
                    : 'bg-[#161b22] text-gray-400 hover:text-white border border-[#30363d]'
                }`}
              >
                {example.tab}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
              </div>
              <span className="text-gray-500 text-sm ml-2 font-mono">main.rs</span>
            </div>
            <motion.pre
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-6 font-mono text-sm leading-relaxed overflow-x-auto"
            >
              <code className="text-gray-300">
                {codeExamples[activeTab].code.split('\n').map((line, i) => (
                  <div key={i}>
                    {line.includes('use ') && (
                      <span>
                        <span className="text-[#ff7b72]">use</span>
                        <span className="text-gray-300">{line.replace('use', '')}</span>
                      </span>
                    )}
                    {line.includes('let ') && (
                      <span>
                        <span className="text-[#ff7b72]">let</span>
                        <span className="text-gray-300">{line.replace('let', '')}</span>
                      </span>
                    )}
                    {line.includes('.await') && (
                      <span>
                        <span className="text-gray-300">{line.replace('.await', '')}</span>
                        <span className="text-[#ff7b72]">.await</span>
                        <span className="text-gray-500">?</span>
                        <span className="text-gray-300">;</span>
                      </span>
                    )}
                    {line.startsWith('//') && (
                      <span className="text-[#8b949e]">{line}</span>
                    )}
                    {!line.includes('use ') && !line.includes('let ') && !line.includes('.await') && !line.startsWith('//') && (
                      <span className="text-gray-300">{line}</span>
                    )}
                  </div>
                ))}
              </code>
            </motion.pre>
          </div>
        </motion.div>

        {/* Documentation Categories */}
        <div className="grid md:grid-cols-5 gap-8">
          {docCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-4 h-4 text-[#58a6ff]" />
                  <span className="text-white font-semibold text-sm">{category.title}</span>
                </div>
                <ul className="space-y-2">
                  {category.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-sm hover:text-[#58a6ff] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/jetbuilder/jetbuilder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#58a6ff] text-white font-semibold rounded-lg hover:bg-[#4c8ed9] transition-colors"
          >
            <Book className="w-5 h-5" />
            Read the Full Documentation
          </a>
        </motion.div>

      </div>
    </section>
  )
}

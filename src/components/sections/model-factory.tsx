'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Zap, Shield, Building2, Heart, Scale, Phone, Factory, Lock } from 'lucide-react'

const domainModels = [
  {
    icon: Building2,
    name: 'Finance SLM',
    domain: 'Banking & Insurance',
    capabilities: ['Claims processing', 'Fraud detection', 'KYC/AML compliance', 'Risk assessment'],
    dataTypes: ['Policy documents', 'Claims forms', 'Transaction logs', 'Customer records'],
  },
  {
    icon: Heart,
    name: 'Healthcare SLM',
    domain: 'Medical & Clinical',
    capabilities: ['Clinical documentation', 'Medical terminology', 'Patient triage', 'Diagnosis support'],
    dataTypes: ['Medical records', 'Lab reports', 'Clinical notes', 'Prescriptions'],
  },
  {
    icon: Scale,
    name: 'Legal SLM',
    domain: 'Legal & Compliance',
    capabilities: ['Contract analysis', 'Regulatory compliance', 'Case research', 'Document review'],
    dataTypes: ['Legal contracts', 'Court filings', 'Regulatory docs', 'Compliance records'],
  },
  {
    icon: Phone,
    name: 'Contact Center SLM',
    domain: 'Customer Service',
    capabilities: ['Intent classification', 'Sentiment analysis', 'Response generation', 'Call summarization'],
    dataTypes: ['Call transcripts', 'Chat logs', 'Support tickets', 'Knowledge base'],
  },
  {
    icon: Factory,
    name: 'Industrial SLM',
    domain: 'Manufacturing & Telecom',
    capabilities: ['Equipment diagnostics', 'Predictive maintenance', 'Asset management', 'Work orders'],
    dataTypes: ['Sensor data', 'Maintenance logs', 'Equipment specs', 'Operational data'],
  },
  {
    icon: Shield,
    name: 'Government SLM',
    domain: 'Public Sector',
    capabilities: ['Document processing', 'Citizen services', 'Policy analysis', 'Compliance checks'],
    dataTypes: ['Government forms', 'Policy documents', 'Citizen records', 'Regulatory filings'],
  },
  {
    icon: Lock,
    name: 'Cyber Security SLM',
    domain: 'Security Operations',
    capabilities: ['Threat detection', 'Incident analysis', 'Vulnerability assessment', 'Security monitoring'],
    dataTypes: ['Security logs', 'Threat intel', 'Incident reports', 'Network data'],
  },
]

const trainingProcess = [
  {
    step: '01',
    title: 'Data Ingestion',
    desc: 'Securely ingest your proprietary documents, records, and domain knowledge on your infrastructure.',
  },
  {
    step: '02',
    title: 'Domain Training',
    desc: 'Fine-tune base models on your specific terminology, processes, and business logic.',
  },
  {
    step: '03',
    title: 'Validation & Testing',
    desc: 'Rigorous testing against your use cases with human expert validation.',
  },
  {
    step: '04',
    title: 'Deployment',
    desc: 'Deploy optimized SLMs on your infrastructure with continuous monitoring.',
  },
]

export default function ModelFactory() {
  return (
    <section id="model-factory" className="bg-[#0d1117] py-32">
      <div className="container px-6 max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-widest uppercase"
          >
            Custom AI Models
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Model Factory
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We train domain-specific Small Language Models (SLMs) on your data.
            Purpose-built AI that understands your industry, terminology, and processes.
          </motion.p>
        </div>

        {/* Training Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">How We Build Your Models</h3>
            <p className="text-gray-400">End-to-end SLM training on your private infrastructure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {trainingProcess.map((item, idx) => (
              <div
                key={item.step}
                className="relative bg-[#161b22] border border-[#30363d] rounded-xl p-6"
              >
                <div className="text-5xl font-bold text-[#30363d] mb-4">{item.step}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                {idx < trainingProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#30363d]" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Domain Models Grid */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-4"
          >
            Domain-Specific SLMs
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            Pre-trained foundations customized for your industry
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {domainModels.map((model) => {
            const Icon = model.icon
            return (
              <div
                key={model.name}
                className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0d1117] border border-[#30363d] rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{model.name}</h4>
                    <p className="text-xs text-gray-500">{model.domain}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Capabilities</p>
                  <div className="flex flex-wrap gap-1">
                    {model.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-xs px-2 py-1 bg-[#0d1117] border border-[#30363d] rounded text-gray-400"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-2">Training Data Types</p>
                  <div className="flex flex-wrap gap-1">
                    {model.dataTypes.map((dt) => (
                      <span
                        key={dt}
                        className="text-xs px-2 py-1 bg-[#21262d] rounded text-gray-500"
                      >
                        {dt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#161b22] border border-[#30363d] rounded-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0d1117] border border-[#30363d] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Domain Expertise</h4>
              <p className="text-gray-400 text-sm">
                Models trained on your specific industry terminology and processes
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0d1117] border border-[#30363d] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">Your Data, Your Models</h4>
              <p className="text-gray-400 text-sm">
                All training happens on your infrastructure. Data never leaves your control.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0d1117] border border-[#30363d] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2">10x More Efficient</h4>
              <p className="text-gray-400 text-sm">
                Smaller, faster models optimized for your exact use cases
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

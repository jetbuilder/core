'use client'

import { motion } from 'framer-motion'
import { Network, Cpu, Zap, Shield, CheckCircle, Code } from 'lucide-react'
import Button from '@/components/ui/button'

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-vscode-bg pt-24">
      <div className="container mx-auto px-4 py-16 font-mono">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center space-x-2 bg-vscode-keyword text-white px-4 py-2 rounded-sm text-xs border border-vscode-border">
              <Network className="w-4 h-4" />
              <span>PRE-BUILT SOLUTION</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-vscode-sidebar text-vscode-type px-4 py-2 rounded-sm text-xs border border-vscode-border">
              <Code className="w-4 h-4" />
              <span>BUILT WITH JETBUILDER STUDIO</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-vscode-function mb-6 tracking-wide">
            contactCenter.agentic()
          </h1>
          
          <p className="text-sm text-vscode-variable max-w-3xl mx-auto leading-relaxed">
            Complete contact center solution with real-time speech-to-text transcription and Agentic AI workflow architecture. 
            Build powerful contact center workflows with 49 AI components and human-in-the-loop oversight. 
            Deploy on YOUR infrastructure—no Azure, AWS, or Google required. Drastically accelerates operations for insurance, banking, and regulated industries.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 text-center">
            <div className="text-2xl font-bold text-vscode-type mb-1">49</div>
            <div className="text-xs text-vscode-comment">AI Components</div>
          </div>
          
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 text-center">
            <div className="text-2xl font-bold text-vscode-type mb-1">50</div>
            <div className="text-xs text-vscode-comment">Connections</div>
          </div>
          
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 text-center">
            <div className="text-2xl font-bold text-vscode-type mb-1">15+</div>
            <div className="text-xs text-vscode-comment">LLM Instances</div>
          </div>
          
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 text-center">
            <div className="text-2xl font-bold text-vscode-type mb-1">10x</div>
            <div className="text-xs text-vscode-comment">Faster Operations</div>
          </div>
        </motion.div>

        {/* Main Workflow Image */}
        <motion.div
          className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href="/workflow-architecture.png" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-vscode-bg rounded-sm overflow-hidden cursor-pointer group"
          >
            <img 
              src="/workflow-architecture.png" 
              alt="Autonomous Contact Center AI Workflow Architecture - 49 components, 50 connections"
              className="w-full h-auto transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
            />
          </a>
          <p className="text-center text-gray-400 text-sm mt-4 font-mono">
            Click image to view full size in new tab
          </p>
        </motion.div>

        {/* Human-in-the-Loop & Industry Focus */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="bg-gradient-to-r from-[#0e639c] to-[#1177bb] border border-vscode-border rounded-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Human-in-the-Loop Intelligence
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-4">
                  This workflow architecture maintains human oversight at critical decision points while automating repetitive tasks. 
                  AI agents handle initial processing, routing, and analysis, escalating complex cases to human experts for final approval.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2 text-white/90">
                    <span className="text-white mt-1">▸</span>
                    <span className="text-sm">Automated eligibility and risk checks with human approval gates</span>
                  </li>
                  <li className="flex items-start space-x-2 text-white/90">
                    <span className="text-white mt-1">▸</span>
                    <span className="text-sm">Real-time agent coaching and quality assurance monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2 text-white/90">
                    <span className="text-white mt-1">▸</span>
                    <span className="text-sm">Compliance validation with human oversight and audit trails</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Built for Regulated Industries
                </h3>
                <p className="text-white/90 text-base leading-relaxed mb-4">
                  Drastically accelerate contact center operations while maintaining full regulatory compliance for insurance, banking, and other highly regulated sectors.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-bold text-white text-sm mb-1">Insurance</div>
                    <div className="text-white/80 text-xs">Claims processing, policy inquiries, fraud detection with compliance checks</div>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-bold text-white text-sm mb-1">Banking & Finance</div>
                    <div className="text-white/80 text-xs">Account verification, transaction support, KYC/AML compliance automation</div>
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <div className="font-bold text-white text-sm mb-1">Healthcare</div>
                    <div className="text-white/80 text-xs">Patient inquiries, appointment scheduling, HIPAA-compliant documentation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Components Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-3 font-mono text-center">
            Contact Center Solution Components
          </h2>
          <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
            Pre-built agentic workflow components including speech-to-text transcription, sentiment analysis, and intelligent routing
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#2b2b2b] border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">AI Agent Orchestration</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Multi-agent coordination with specialized roles including reasoning, knowledge base access, RAG, reflection, and planning agents.
              </p>
            </div>

            <div className="bg-[#2b2b2b] border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Response Generation</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Context-aware response generation with sentiment detection, prompt engineering, conversation loops, and multi-channel delivery.
              </p>
            </div>

            <div className="bg-[#2b2b2b] border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Quality & Compliance</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Built-in eligibility checks, policy validation, risk assessment, approval gates, and comprehensive audit logging.
              </p>
            </div>

            <div className="bg-[#2b2b2b] border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Speech-to-Text Transcription</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Real-time speech-to-text transcription with 98% accuracy. Process customer calls, extract context, and enable multi-language support with automatic translation. Enterprise-grade voice recognition for contact centers.
              </p>
            </div>

            <div className="bg-[#2b2b2b] border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Data Processing</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Extract and structure data from documents, validate information, perform data reflection, and integrate with external systems.
              </p>
            </div>

            <div className="bg-[#2b2b2b] border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Integration Layer</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Telephony integration, customer knowledge base, conversation memory, task planning, payment processing, and call routing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features List */}
        <motion.div
          className="bg-[#2b2b2b] border border-vscode-border rounded-sm p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2 font-mono">
            Autonomous Capabilities with Human Oversight
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            AI-powered automation with human approval gates for regulated industries
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-[#4fc1ff] mt-1">▸</span>
              <span className="text-gray-300 text-sm">Real-time conversation understanding with context retention</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#4fc1ff] mt-1">▸</span>
              <span className="text-gray-300 text-sm">Multi-channel support: voice, SMS, email, and chat</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#4fc1ff] mt-1">▸</span>
              <span className="text-gray-300 text-sm">Automated document processing and data extraction</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#4fc1ff] mt-1">▸</span>
              <span className="text-gray-300 text-sm">Intelligent routing based on intent and sentiment</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#4fc1ff] mt-1">▸</span>
              <span className="text-gray-300 text-sm">Payment processing with fraud detection</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#4fc1ff] mt-1">▸</span>
              <span className="text-gray-300 text-sm">Compliance validation and audit trail generation</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#4fc1ff] mt-1">▸</span>
              <span className="text-gray-300 text-sm">Self-improving through reflection and feedback loops</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#4fc1ff] mt-1">▸</span>
              <span className="text-gray-300 text-sm">Complete call summaries and documentation</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-[#2b2b2b] border border-vscode-border rounded-sm p-10">
            <h3 className="text-3xl font-bold text-white mb-4 font-mono">
              Deploy or Customize This Workflow
            </h3>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
              Deploy this complete contact center solution on your infrastructure or customize it with JetBuilder Studio.
            </p>
            <p className="text-tactical-400 mb-8 max-w-2xl mx-auto text-sm font-mono">
              This workflow is fully customizable - modify components, add new capabilities, or build similar workflows from scratch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0e639c] text-white hover:bg-[#1177bb] font-mono uppercase">
                Deploy This Workflow
              </Button>
              <Button size="lg" variant="outline" className="border-vscode-border text-white hover:bg-[#37373d] font-mono uppercase">
                <a href="/start-building" className="flex items-center">
                  Build Your Own Workflow
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-tactical-600 text-tactical-400 hover:bg-tactical-900/30 font-mono uppercase">
                <a href="/contact">
                  Request Demo
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


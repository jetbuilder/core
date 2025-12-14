'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, PlayCircle, Shield, Zap, Globe, Database, Lock, TrendingUp, Code, CheckCircle, Building2, Server, Award } from 'lucide-react'
import Button from '@/components/ui/button'
import { motion } from 'framer-motion'
import Chatbot from '@/components/ui/chatbot'
import AISearch from '@/components/ui/ai-search'

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatTopic, setChatTopic] = useState<string>('')

  const handleRequestBriefing = () => {
    setChatTopic('Platform Briefing')
    setIsChatOpen(true)
  }

  const stats = [
    { value: '49+', label: 'AI Components', icon: Database },
    { value: '100%', label: 'On-Premises', icon: Server },
    { value: 'Zero', label: 'Cloud Dependency', icon: Lock },
    { value: '100X', label: 'Faster ROI', icon: TrendingUp }
  ]

  return (
    <section className="relative bg-vscode-bg overflow-hidden">
      {/* Background decoration - IDE grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="container relative px-4 py-16 md:py-24 font-mono">
        {/* Hero Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center space-x-2 bg-vscode-sidebar border border-vscode-border px-4 py-2 rounded-sm">
                <Building2 className="w-4 h-4 text-vscode-type" />
                <span className="text-xs font-bold text-vscode-comment">// for-ctos-engineering-leaders</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vscode-function leading-tight">
                agenticAI.inHouse()
              </h1>
              <div className="mt-4 text-xl md:text-2xl text-vscode-variable">
                Build Multi-Agent Systems on <span className="text-vscode-type font-semibold">Your Infrastructure</span>
              </div>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6"
            >
              <p className="text-vscode-variable text-sm leading-relaxed mb-4">
                Deploy Agentic AI entirely on your infrastructure. No Azure, AWS, or Google dependency. 
                Complete control, predictable costs, zero vendor lock-in.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 text-xs text-vscode-type">
                  <CheckCircle className="w-3 h-3" />
                  <span>Multi-Agent Orchestration</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-vscode-type">
                  <CheckCircle className="w-3 h-3" />
                  <span>Custom SLMs</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-vscode-type">
                  <CheckCircle className="w-3 h-3" />
                  <span>Air-Gap Ready</span>
                </div>
              </div>
            </motion.div>

            {/* Key Benefits for CTOs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-start space-x-3 bg-vscode-sidebar border border-vscode-border rounded-sm p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center">
                  <Server className="w-4 h-4 text-vscode-type" />
                </div>
                <div>
                  <h3 className="font-semibold text-vscode-function mb-1 text-sm">yourInfrastructure()</h3>
                  <p className="text-xs text-vscode-comment">Deploy on-premises or private cloud. Full control.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-vscode-sidebar border border-vscode-border rounded-sm p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-vscode-type" />
                </div>
                <div>
                  <h3 className="font-semibold text-vscode-function mb-1 text-sm">predictableCosts()</h3>
                  <p className="text-xs text-vscode-comment">CapEx model. No per-token fees or cloud bills.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-vscode-sidebar border border-vscode-border rounded-sm p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center">
                  <Lock className="w-4 h-4 text-vscode-type" />
                </div>
                <div>
                  <h3 className="font-semibold text-vscode-function mb-1 text-sm">dataSovereignty()</h3>
                  <p className="text-xs text-vscode-comment">All data stays within your environment.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-vscode-sidebar border border-vscode-border rounded-sm p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center">
                  <Award className="w-4 h-4 text-vscode-type" />
                </div>
                <div>
                  <h3 className="font-semibold text-vscode-function mb-1 text-sm">noVendorLockIn()</h3>
                  <p className="text-xs text-vscode-comment">Own your AI stack. Full portability.</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="w-full sm:w-auto bg-vscode-keyword hover:bg-vscode-selection text-white px-8 py-4 text-sm font-mono font-semibold group uppercase" onClick={() => window.open('https://cal.com/jetbuilder-expert', '_blank')}>
                book-enterprise-demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="#solution-examples" className="flex-1 sm:flex-initial">
                <Button size="lg" variant="outline" className="w-full border-2 border-vscode-border text-vscode-variable hover:bg-vscode-hover px-8 py-4 text-sm font-mono font-semibold uppercase">
                  view-solutions
                </Button>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-xs text-vscode-comment"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-vscode-type" />
                <span>no-azure-aws-google</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-vscode-type" />
                <span>compliance-ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3 text-vscode-type" />
                <span>enterprise-support-24-7</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6 hover:border-vscode-type transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="w-6 h-6 text-vscode-type mb-3" />
                    <div className="text-3xl font-bold text-vscode-function mb-1">{stat.value}</div>
                    <div className="text-xs text-vscode-comment">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Key Differentiator Box */}
            <motion.div
              className="bg-vscode-sidebar border-2 border-vscode-type rounded-sm p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold text-vscode-function mb-4">builtFor.regulatedIndustries()</h3>
              <div className="space-y-2 text-vscode-variable text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-vscode-type rounded-full"></div>
                  <span>Financial Services & Banking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-vscode-type rounded-full"></div>
                  <span>Healthcare & Life Sciences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-vscode-type rounded-full"></div>
                  <span>Government & Defense</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-vscode-type rounded-full"></div>
                  <span>Insurance & Telecommunications</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-vscode-border">
                <p className="text-xs text-vscode-comment">
                  // Designed for organizations requiring complete data sovereignty, air-gap capability, and compliance with HIPAA, PIPEDA, FedRAMP, and more.
                </p>
              </div>
            </motion.div>

            {/* Cost Comparison */}
            <motion.div
              className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="text-base font-bold text-vscode-function mb-4">costStructure.compare()</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-vscode-comment text-xs">cloudAPICosts</span>
                    <span className="text-red-400 font-semibold text-xs">Variable & Unpredictable</span>
                  </div>
                  <div className="h-2 bg-vscode-bg rounded-sm overflow-hidden">
                    <div className="h-full bg-red-500 w-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-vscode-comment text-xs">jetBuilderOnPremises</span>
                    <span className="text-green-400 font-semibold text-xs">Fixed CapEx</span>
                  </div>
                  <div className="h-2 bg-vscode-bg rounded-sm overflow-hidden">
                    <div className="h-full bg-green-500 w-1/3"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Platform Split Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* For Engineering Teams */}
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8 hover:border-vscode-type transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <Code className="w-6 h-6 text-vscode-type" />
              <h3 className="text-xl font-bold text-vscode-function">forEngineering.teams()</h3>
            </div>
            <p className="text-vscode-variable mb-6 leading-relaxed text-sm">
              Visual IDE for building multi-agent systems. Deploy agentic workflows entirely on your infrastructure with 49+ pre-built components.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <span className="text-vscode-variable text-xs">Multi-agent orchestration framework</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <span className="text-vscode-variable text-xs">On-premises Kubernetes deployment</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <span className="text-vscode-variable text-xs">Custom SLM training pipeline</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <span className="text-vscode-variable text-xs">Full API & SDK access</span>
              </li>
            </ul>
            <a href="/start-building">
              <Button className="w-full bg-vscode-keyword hover:bg-vscode-selection text-white font-mono text-xs uppercase">
                start-building-free-tier
              </Button>
            </a>
          </div>

          {/* For CTOs */}
          <div className="bg-vscode-sidebar border-2 border-vscode-type rounded-sm p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-vscode-type" />
              <h3 className="text-xl font-bold text-vscode-function">forCTOs.leaders()</h3>
            </div>
            <p className="text-vscode-variable mb-6 leading-relaxed text-sm">
              Pre-built agentic solutions for regulated industries. Predictable costs, complete control, zero vendor lock-in.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <span className="text-vscode-variable text-xs">Enterprise-ready agentic workflows</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <span className="text-vscode-variable text-xs">Air-gap & on-premises deployment</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <span className="text-vscode-variable text-xs">CapEx pricing model (no API fees)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <span className="text-vscode-variable text-xs">24/7 enterprise support & SLAs</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-2 border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono text-xs uppercase" onClick={() => window.open('https://cal.com/jetbuilder-expert', '_blank')}>
              book-enterprise-demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Chatbot */}
      <Chatbot 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        topic={chatTopic}
      />
    </section>
  )
}

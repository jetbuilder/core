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
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/10 blur-[100px] rounded-full"></div>

      <div className="container relative px-4 py-16 md:py-24">
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
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-lg">
                <Building2 className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-400">For CTOs & Engineering Leaders</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                In-House Agentic AI Platform
              </h1>
              <div className="mt-4 text-xl md:text-2xl text-slate-300">
                Build Multi-Agent Systems on <span className="text-blue-400 font-semibold">Your Infrastructure</span>
              </div>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                Deploy autonomous AI agents entirely on your infrastructure. No Azure, AWS, or Google dependency. 
                Complete control, predictable costs, zero vendor lock-in.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 text-sm text-blue-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Multi-Agent Orchestration</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-blue-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>Custom SLMs</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-blue-400">
                  <CheckCircle className="w-4 h-4" />
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
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Your Infrastructure</h3>
                  <p className="text-sm text-slate-400">Deploy on-premises or private cloud. Full control.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Predictable Costs</h3>
                  <p className="text-sm text-slate-400">CapEx model. No per-token fees or cloud bills.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Data Sovereignty</h3>
                  <p className="text-sm text-slate-400">All data stays within your environment.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Zero Vendor Lock-In</h3>
                  <p className="text-sm text-slate-400">Own your AI stack. Full portability.</p>
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
              <a href="/contact" className="flex-1 sm:flex-initial">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold group">
                  Book Enterprise Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#solution-examples" className="flex-1 sm:flex-initial">
                <Button size="lg" variant="outline" className="w-full border-2 border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg font-semibold">
                  View Solutions
                </Button>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 text-sm text-slate-400"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No Azure/AWS/Google Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Compliance-Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24/7 Enterprise Support</span>
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
                    className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="w-8 h-8 text-blue-400 mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Key Differentiator Box */}
            <motion.div
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Built for Regulated Industries</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Financial Services & Banking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Healthcare & Life Sciences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Government & Defense</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Insurance & Telecommunications</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <p className="text-sm text-slate-400">
                  Designed for organizations requiring complete data sovereignty, air-gap capability, and compliance with HIPAA, PIPEDA, FedRAMP, and more.
                </p>
              </div>
            </motion.div>

            {/* Cost Comparison */}
            <motion.div
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="text-lg font-bold text-white mb-4">Cost Structure</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400 text-sm">Cloud API Costs</span>
                    <span className="text-red-400 font-semibold">Variable & Unpredictable</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400 text-sm">JetBuilder On-Premises</span>
                    <span className="text-green-400 font-semibold">Fixed CapEx</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
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
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
            <div className="flex items-center space-x-3 mb-4">
              <Code className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">For Engineering Teams</h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Visual IDE for building multi-agent systems. Deploy agentic workflows entirely on your infrastructure with 49+ pre-built components.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Multi-agent orchestration framework</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">On-premises Kubernetes deployment</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Custom SLM training pipeline</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Full API & SDK access</span>
              </li>
            </ul>
            <a href="/start-building">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Start Building - Free Tier
              </Button>
            </a>
          </div>

          {/* For CTOs */}
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">For CTOs & Leaders</h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Pre-built agentic solutions for regulated industries. Predictable costs, complete control, zero vendor lock-in.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Enterprise-ready agentic workflows</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Air-gap & on-premises deployment</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">CapEx pricing model (no API fees)</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">24/7 enterprise support & SLAs</span>
              </li>
            </ul>
            <a href="/contact">
              <Button variant="outline" className="w-full border-2 border-purple-400 text-purple-300 hover:bg-purple-500/10">
                Book Enterprise Demo
              </Button>
            </a>
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

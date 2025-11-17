'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, PlayCircle, Shield, Zap, Globe, Database, Lock, TrendingUp, Code, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/button'
import { motion } from 'framer-motion'
import Chatbot from '@/components/ui/chatbot'
import AISearch from '@/components/ui/ai-search'

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatTopic, setChatTopic] = useState<string>('')
  const [languageCount, setLanguageCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageCount(prev => (prev < 55 ? prev + 1 : 55))
    }, 30)
    return () => clearInterval(interval)
  }, [])

  const handleRequestBriefing = () => {
    setChatTopic('Sovereign AI Platform Briefing')
    setIsChatOpen(true)
  }

  const handleViewDemo = () => {
    setChatTopic('Platform Demo Request')
    setIsChatOpen(true)
  }

  const stats = [
    { value: `${languageCount}+`, label: 'Languages', icon: Globe },
    { value: '100%', label: 'Private', icon: Lock },
    { value: 'Minimal', label: 'Cloud APIs', icon: Shield },
    { value: 'Fast', label: 'ROI', icon: TrendingUp }
  ]

  return (
    <section className="relative bg-vscode-bg overflow-hidden">
      {/* IDE-style top bar */}
      <div className="bg-vscode-sidebar border-b border-vscode-border px-4 py-2">
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-vscode-lineNumber text-xs font-mono ml-4">jetbuilder-studio.tsx</span>
          </div>
          <div className="flex items-center space-x-4 text-xs text-vscode-lineNumber">
            <span>UTF-8</span>
            <span>TypeScript JSX</span>
            <span>Ln 1, Col 1</span>
          </div>
        </div>
      </div>
      <div className="container px-4 py-8 sm:py-12 md:py-16">
        {/* Hero Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-8 sm:mb-12 md:mb-16">
          {/* Left Column - Main Content with Line Numbers */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {/* Main Heading - IDE Code Style */}
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 sm:p-6"
            >
              {/* Code-style badge */}
              <div className="flex items-start space-x-3 mb-4">
                <div className="text-vscode-lineNumber font-mono text-xs leading-relaxed select-none pt-1">
                  01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08
                </div>
                <div className="flex-1 font-mono text-sm sm:text-base leading-relaxed">
                  <div className="mb-2">
                    <span className="text-vscode-keyword">const</span>{' '}
                    <span className="text-vscode-function">JetBuilderStudio</span>{' '}
                    <span className="text-gray-400">=</span>{' '}
                    <span className="text-gray-400">{'{'}</span>
                  </div>
                  <div className="ml-4 mb-1">
                    <span className="text-vscode-variable">name</span>
                    <span className="text-gray-400">:</span>{' '}
                    <span className="text-vscode-string">'AI Agentic Workflow Platform'</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="ml-4 mb-1">
                    <span className="text-vscode-variable">type</span>
                    <span className="text-gray-400">:</span>{' '}
                    <span className="text-vscode-string">'Visual IDE for Multi-Agent Systems'</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="ml-4 mb-1">
                    <span className="text-vscode-variable">features</span>
                    <span className="text-gray-400">: [</span>
                    <span className="text-vscode-string">'49+ Components'</span>
                    <span className="text-gray-400">,</span>{' '}
                    <span className="text-vscode-string">'Pre-Built Solutions'</span>
                    <span className="text-gray-400">],</span>
                  </div>
                  <div className="ml-4 mb-1">
                    <span className="text-vscode-variable">deployment</span>
                    <span className="text-gray-400">:</span>{' '}
                    <span className="text-vscode-string">'On-Premises'</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-vscode-variable">sovereignty</span>
                    <span className="text-gray-400">:</span>{' '}
                    <span className="text-vscode-keyword">true</span>
                  </div>
                  <div>
                    <span className="text-gray-400">{'}'}</span>
                  </div>
                </div>
              </div>
              
              {/* Comment-style description */}
              <div className="flex items-start space-x-3 border-t border-vscode-border pt-4">
                <div className="text-vscode-lineNumber font-mono text-xs">09</div>
                <div className="text-vscode-comment font-mono text-xs sm:text-sm">
                  // Build custom workflows or deploy enterprise-ready solutions with complete data sovereignty
                </div>
              </div>
          </motion.div>

          {/* Value Proposition - Console Output Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 sm:p-5 md:p-6 font-mono"
          >
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-vscode-lineNumber select-none">$</span>
                <div className="flex-1">
                  <span className="text-vscode-keyword">jetbuilder</span>
                  <span className="text-gray-400"> --</span>
                  <span className="text-vscode-variable">accelerate</span>
                  <span className="text-gray-400"> --</span>
                  <span className="text-vscode-variable">speed</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-vscode-number">100x</span>
                </div>
              </div>
              <div className="ml-4 text-vscode-comment">
                {`// Transform slow manual processes into agentic-accelerated infrastructure`}
              </div>
              <div className="ml-4 text-vscode-type">
                ✓ Onboard existing workflows
              </div>
              <div className="ml-4 text-vscode-type">
                ✓ Plug into existing systems
              </div>
              <div className="ml-4 text-vscode-type">
                ✓ Scale instantly
              </div>
              <div className="mt-3 pt-3 border-t border-vscode-border text-vscode-string">
                → Output: <span className="text-vscode-number">100X</span> faster operations for SaaS providers & enterprises
              </div>
            </div>
          </motion.div>

            {/* AI Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 sm:mb-6 md:mb-8"
            >
              <AISearch />
            </motion.div>

            {/* Key Benefits - Code Comments Style */}
            <motion.div
              className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 space-y-2 font-mono text-xs sm:text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex items-start space-x-2">
                <span className="text-vscode-lineNumber select-none">10</span>
                <span className="text-vscode-comment">// ✓ Custom Small Language Models (trained on your data, on-premises)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-vscode-lineNumber select-none">11</span>
                <span className="text-vscode-comment">// ✓ Data Sovereignty Controls (minimal public APIs, your infrastructure)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-vscode-lineNumber select-none">12</span>
                <span className="text-vscode-comment">// ✓ Multi-Modal Intelligence (documents, voice, video, databases unified)</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-vscode-lineNumber select-none">13</span>
                <span className="text-vscode-comment">// ✓ Business Process Intelligence (automate workflows, extract insights)</span>
              </div>
            </motion.div>

          {/* CTA Buttons - Terminal Style */}
          <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-2.5 sm:gap-3 md:gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <a href="/start-building" className="w-full sm:w-auto">
                <Button size="lg" className="group text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 w-full whitespace-nowrap bg-vscode-keyword hover:bg-vscode-selection border border-vscode-border font-mono">
                  $ start-building --free
                  <ArrowRight className="ml-1.5 sm:ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#solution-examples" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="group text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 w-full border-2 border-vscode-border text-vscode-variable hover:bg-vscode-hover whitespace-nowrap font-mono">
                  <PlayCircle className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  explore-solutions
                </Button>
              </a>
              <a href="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-4 w-full border-2 border-vscode-warning text-vscode-warning hover:bg-vscode-warning/10 whitespace-nowrap font-mono">
                  book-demo --enterprise
                </Button>
              </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
              className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide sm:tracking-wider font-semibold leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Trusted by insurance, banking, telecom & financial services across North America
            </motion.div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="space-y-6">
            {/* Animated Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-gunmetal-800/80 border-2 border-tactical-700 rounded-lg p-6 hover:border-tactical-600 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="w-8 h-8 text-tactical-400 mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Visual Element - Dashboard Preview */}
            <motion.div
              className="bg-gunmetal-800/50 border-2 border-tactical-700 rounded-lg p-6 relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-tactical-900 rounded-full mix-blend-overlay filter blur-2xl opacity-50"></div>
              <h3 className="text-lg font-bold text-tactical-400 mb-4 uppercase tracking-wide">Deployment Environments</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gunmetal-900/60 rounded border border-tactical-700/50">
                  <span className="text-white font-semibold">FedRAMP Authorized</span>
                  <span className="text-tactical-400 text-xs font-bold uppercase">Supported</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gunmetal-900/60 rounded border border-tactical-700/50">
                  <span className="text-white font-semibold">FIPS 140-2 Certified</span>
                  <span className="text-tactical-400 text-xs font-bold uppercase">Supported</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gunmetal-900/60 rounded border border-tactical-700/50">
                  <span className="text-white font-semibold">Air-Gapped Systems</span>
                  <span className="text-tactical-400 text-xs font-bold uppercase">Supported</span>
            </div>
            </div>
          </motion.div>
          </div>
        </div>

        {/* Target Industries */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">Built For</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Government', 'Defense', 'Law Enforcement', 'Healthcare', 'Finance', 'Telecommunications'].map((industry) => (
              <div
                key={industry}
                className="px-4 py-2 bg-gunmetal-800/80 border border-tactical-700 rounded-sm text-sm font-semibold text-tactical-300 hover:border-tactical-600 transition-colors"
              >
                {industry}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Platform + Solutions Split */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {/* For Developers */}
          <div className="bg-gradient-to-br from-tactical-900/40 to-gunmetal-800/40 border-2 border-tactical-600 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Code className="w-8 h-8 text-tactical-400" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">For Developers</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Build custom AI agentic workflows with our visual IDE. No-code/low-code platform with 49+ pre-built components.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-tactical-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Visual workflow builder</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-tactical-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Multi-agent orchestration</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-tactical-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Deploy on your infrastructure</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-tactical-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Free tier available</span>
              </li>
            </ul>
            <a href="/start-building">
              <Button className="w-full bg-tactical-600 hover:bg-tactical-700 text-white font-bold uppercase">
                Start Building Free
              </Button>
            </a>
          </div>

          {/* For Enterprises */}
          <div className="bg-gradient-to-br from-gunmetal-800/40 to-tactical-900/40 border-2 border-tactical-600 rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-tactical-400" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide">For Enterprises</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Deploy pre-built solutions for contact centers, financial services, intelligence ops, and AI security.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-tactical-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Pre-built agentic workflows</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-tactical-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Fully customizable solutions</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-tactical-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Enterprise support & SLAs</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-tactical-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">On-premises deployment</span>
              </li>
            </ul>
            <a href="/contact">
              <Button variant="outline" className="w-full border-2 border-tactical-600 text-tactical-400 hover:bg-tactical-900/30 font-bold uppercase">
                Book Enterprise Demo
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Agentic AI Capabilities Section */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
              Agentic AI Capabilities on <span className="text-tactical-400">Your Infrastructure</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Deploy autonomous AI agents to extract intelligence from voice, audio, text, and unstructured data at massive scale—on-premises deployment options with data sovereignty controls across 55+ languages.
            </p>
          </div>

          {/* Major Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div 
              className="p-6 bg-gunmetal-800/80 rounded-lg border-2 border-tactical-700 hover:border-tactical-600 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-tactical-900 border border-tactical-600 rounded flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-tactical-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Autonomous Processing</h3>
              <p className="text-gray-400">Self-directed agents that analyze, extract, and synthesize intelligence without human intervention</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gunmetal-800/80 rounded-lg border-2 border-tactical-700 hover:border-tactical-600 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-tactical-900 border border-tactical-600 rounded flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-tactical-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Multi-Modal Analysis</h3>
              <p className="text-gray-400">Process voice, audio, text, images, and documents simultaneously for comprehensive insights</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gunmetal-800/80 rounded-lg border-2 border-tactical-700 hover:border-tactical-600 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-tactical-900 border border-tactical-600 rounded flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-tactical-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Real-Time Intelligence</h3>
              <p className="text-gray-400">Continuous monitoring and instant alerting on critical events and pattern detection</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gunmetal-800/80 rounded-lg border-2 border-tactical-700 hover:border-tactical-600 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-tactical-900 border border-tactical-600 rounded flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-tactical-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Private Deployment</h3>
              <p className="text-gray-400">On-premises or air-gapped deployment options with data sovereignty controls</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gunmetal-800/80 rounded-lg border-2 border-tactical-700 hover:border-tactical-600 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-tactical-900 border border-tactical-600 rounded flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-tactical-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Workflow Orchestration</h3>
              <p className="text-gray-400">Multi-agent coordination for complex analytical tasks across distributed data sources</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-gunmetal-800/80 rounded-lg border-2 border-tactical-700 hover:border-tactical-600 transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-tactical-900 border border-tactical-600 rounded flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-tactical-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Adaptive Learning</h3>
              <p className="text-gray-400">Continuously improving models that adapt to your organization's unique patterns and requirements</p>
            </motion.div>
          </div>

          {/* Critical Infrastructure Benefits */}
          <motion.div
            className="p-8 bg-gradient-to-br from-tactical-900/40 to-gunmetal-800/40 border-2 border-tactical-500 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-tactical-300 mb-6 uppercase tracking-wide text-center">Why Organizations Choose Sovereign AI Platform</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-tactical-900 border-2 border-tactical-600 rounded flex items-center justify-center">
                  <Lock className="w-5 h-5 text-tactical-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Minimal Public APIs</h4>
                  <p className="text-gray-400 text-sm">Speech-to-Text, Text-to-Speech, and processing logic designed to run on your infrastructure with minimal external dependencies</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-tactical-900 border-2 border-tactical-600 rounded flex items-center justify-center">
                  <Database className="w-5 h-5 text-tactical-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Customer Data-Trained Small Language Models</h4>
                  <p className="text-gray-400 text-sm">Domain-specific SLMs trained on your corporate and customer data, deployed entirely on-premises with full ownership</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-tactical-900 border-2 border-tactical-600 rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-tactical-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Model Ownership Options</h4>
                  <p className="text-gray-400 text-sm">Model weights, biases, and training data can be deployed on your infrastructure with ownership controls</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-tactical-900 border-2 border-tactical-600 rounded flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-tactical-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Domain-Specific Accuracy</h4>
                  <p className="text-gray-400 text-sm">Our custom SLMs are trained for domain-specific accuracy tailored to your operations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-tactical-900 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gunmetal-800 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
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


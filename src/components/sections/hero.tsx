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
                    <span className="text-vscode-variable">platform</span>
                    <span className="text-gray-400">:</span>{' '}
                    <span className="text-vscode-string">'Agentic AI Workflow Builder'</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="ml-4 mb-1">
                    <span className="text-vscode-variable">deployment</span>
                    <span className="text-gray-400">:</span>{' '}
                    <span className="text-vscode-string">'Your Infrastructure Only'</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="ml-4 mb-1">
                    <span className="text-vscode-variable">cloudDependency</span>
                    <span className="text-gray-400">:</span>{' '}
                    <span className="text-vscode-keyword">false</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="ml-4 mb-1">
                    <span className="text-vscode-variable">vendorLockIn</span>
                    <span className="text-gray-400">:</span>{' '}
                    <span className="text-vscode-keyword">null</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-vscode-variable">dataSovereignty</span>
                    <span className="text-gray-400">:</span>{' '}
                    <span className="text-vscode-string">'Complete'</span>
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
                  // No Azure Foundry. No AWS Bedrock. No Google Vertex AI. Deploy agentic workflows on YOUR infrastructure.
                </div>
              </div>
          </motion.div>

          {/* Executive Value Proposition - Terminal Style */}
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
                  <span className="text-vscode-variable">deploy</span>
                  <span className="text-gray-400"> --</span>
                  <span className="text-vscode-variable">location</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-vscode-string">"on-premises"</span>
                </div>
              </div>
              <div className="ml-4 text-vscode-comment">
                {`// Build AI-powered workflows without Azure, AWS, or Google dependency`}
              </div>
              <div className="ml-4 text-vscode-type">
                ✓ Complete data sovereignty
              </div>
              <div className="ml-4 text-vscode-type">
                ✓ Zero vendor lock-in
              </div>
              <div className="ml-4 text-vscode-type">
                ✓ Full infrastructure control
              </div>
              <div className="ml-4 text-vscode-type">
                ✓ Custom SLMs on your data
              </div>
              <div className="mt-3 pt-3 border-t border-vscode-border text-vscode-string">
                → ROI: <span className="text-vscode-number">100X</span> faster than manual processes • <span className="text-vscode-number">Zero</span> cloud dependency
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

            {/* Executive Benefits - Code Comments Style */}
            <motion.div
              className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 space-y-2 font-mono text-xs sm:text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex items-start space-x-2">
                <span className="text-vscode-lineNumber select-none">10</span>
                <span className="text-vscode-comment">// ✓ No Azure/AWS/Google: Run entirely on your infrastructure</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-vscode-lineNumber select-none">11</span>
                <span className="text-vscode-comment">// ✓ Custom SLMs: Trained on YOUR data, deployed on YOUR servers</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-vscode-lineNumber select-none">12</span>
                <span className="text-vscode-comment">// ✓ Full Control: Data sovereignty, compliance, air-gap capability</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-vscode-lineNumber select-none">13</span>
                <span className="text-vscode-comment">// ✓ Executive ROI: 100X operational acceleration, zero cloud fees</span>
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

          {/* Trust Indicators - IDE Style */}
          <motion.div
              className="bg-vscode-sidebar border border-vscode-border rounded-sm p-3 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="text-xs text-vscode-comment text-center">
                // independent-from: Azure Foundry | AWS Bedrock | Google Vertex AI
              </div>
              <div className="text-xs text-vscode-type text-center mt-2">
                ✓ Deploy on your infrastructure • Zero cloud vendor lock-in • Complete control
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Visual - IDE Style */}
          <div className="space-y-4">
            {/* Animated Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 hover:border-vscode-type transition-colors font-mono"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className="w-6 h-6 text-vscode-type mb-2" />
                    <div className="text-2xl font-bold text-vscode-function mb-1">{stat.value}</div>
                    <div className="text-xs text-vscode-comment tracking-wide">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Executive Value Proposition - IDE Style */}
            <motion.div
              className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 font-mono"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-sm font-bold text-vscode-function mb-3 tracking-wide">cloudIndependence.complete()</h3>
              <div className="text-xs text-vscode-comment mb-4">
                // No dependency on Azure Foundry, AWS Bedrock, or Google Vertex AI
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-vscode-bg rounded-sm border border-vscode-border">
                  <span className="text-vscode-variable text-xs">Your Infrastructure</span>
                  <span className="text-vscode-type text-xs font-bold">✓ 100%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-vscode-bg rounded-sm border border-vscode-border">
                  <span className="text-vscode-variable text-xs">Data Sovereignty</span>
                  <span className="text-vscode-type text-xs font-bold">✓ Full</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-vscode-bg rounded-sm border border-vscode-border">
                  <span className="text-vscode-variable text-xs">Cloud APIs</span>
                  <span className="text-vscode-type text-xs font-bold">✓ Minimal</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-vscode-bg rounded-sm border border-vscode-border">
                  <span className="text-vscode-variable text-xs">Vendor Lock-in</span>
                  <span className="text-vscode-type text-xs font-bold">✓ Zero</span>
                </div>
            </div>
          </motion.div>
          </div>
        </div>

        {/* Target Industries - IDE Style */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6 font-mono">
            <p className="text-xs text-vscode-comment mb-4">// built-for: enterprises-requiring-sovereignty</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Government', 'Defense', 'Law Enforcement', 'Healthcare', 'Finance', 'Telecommunications'].map((industry) => (
                <div
                  key={industry}
                  className="px-3 py-1.5 bg-vscode-bg border border-vscode-border rounded-sm text-xs font-semibold text-vscode-type hover:border-vscode-type transition-colors"
                >
                  {industry}
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-vscode-variable">
              Regulatory compliance | Data privacy | Critical infrastructure | Zero cloud dependency
            </div>
          </div>
        </motion.div>

        {/* Platform + Solutions Split - IDE Style */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          {/* For Developers */}
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8 font-mono">
            <div className="flex items-center space-x-3 mb-4">
              <Code className="w-8 h-8 text-vscode-type" />
              <h3 className="text-xl font-bold text-vscode-function tracking-wide">for.developers()</h3>
            </div>
            <p className="text-vscode-variable text-sm mb-6 leading-relaxed">
              Build custom AI agentic workflows with our visual IDE. No-code/low-code platform with 49+ pre-built components.
            </p>
            <ul className="space-y-2 mb-6 text-xs">
              <li className="flex items-start space-x-2">
                <span className="text-vscode-comment">✓</span>
                <span className="text-gray-300">Visual workflow builder</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-vscode-comment">✓</span>
                <span className="text-gray-300">Multi-agent orchestration</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-vscode-comment">✓</span>
                <span className="text-gray-300">Deploy on your infrastructure</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-vscode-comment">✓</span>
                <span className="text-gray-300">Free tier available</span>
              </li>
            </ul>
            <a href="/start-building">
              <Button className="w-full bg-vscode-keyword hover:bg-vscode-selection text-white font-mono text-xs">
                $ start-building --free
              </Button>
            </a>
          </div>

          {/* For Enterprises */}
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8 font-mono">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-vscode-type" />
              <h3 className="text-xl font-bold text-vscode-function tracking-wide">for.enterprises()</h3>
            </div>
            <p className="text-vscode-variable text-sm mb-6 leading-relaxed">
              Deploy pre-built solutions for contact centers, financial services, intelligence ops, and AI security.
            </p>
            <ul className="space-y-2 mb-6 text-xs">
              <li className="flex items-start space-x-2">
                <span className="text-vscode-comment">✓</span>
                <span className="text-gray-300">Pre-built agentic workflows</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-vscode-comment">✓</span>
                <span className="text-gray-300">Fully customizable solutions</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-vscode-comment">✓</span>
                <span className="text-gray-300">Enterprise support & SLAs</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-vscode-comment">✓</span>
                <span className="text-gray-300">On-premises deployment</span>
              </li>
            </ul>
            <a href="/contact">
              <Button variant="outline" className="w-full border border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono text-xs">
                book-demo --enterprise
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Agentic AI Capabilities Section - IDE Style */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="text-vscode-comment text-sm">// agentic-ai-capabilities</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-vscode-function mb-4 tracking-wide">
              capabilities.deploy(<span className="text-vscode-string">"your-infrastructure"</span>)
            </h2>
            <p className="text-sm text-vscode-variable max-w-3xl mx-auto">
              Deploy autonomous AI agents on YOUR infrastructure—no Azure, AWS, or Google required. Extract intelligence from voice, audio, text, and unstructured data at massive scale with complete data sovereignty across 55+ languages.
            </p>
          </div>

          {/* Major Capabilities Grid - IDE Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <motion.div 
              className="p-4 bg-vscode-sidebar rounded-sm border border-vscode-border hover:border-vscode-type transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-vscode-type" />
              </div>
              <h3 className="text-sm font-bold text-vscode-function mb-2 tracking-wide">autonomousProcessing()</h3>
              <p className="text-vscode-variable text-xs">Self-directed agents that analyze, extract, and synthesize intelligence without human intervention</p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-vscode-sidebar rounded-sm border border-vscode-border hover:border-vscode-type transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center mb-3">
                <Database className="w-5 h-5 text-vscode-type" />
              </div>
              <h3 className="text-sm font-bold text-vscode-function mb-2 tracking-wide">multiModalAnalysis()</h3>
              <p className="text-vscode-variable text-xs">Process voice, audio, text, images, and documents simultaneously for comprehensive insights</p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-vscode-sidebar rounded-sm border border-vscode-border hover:border-vscode-type transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-vscode-type" />
              </div>
              <h3 className="text-sm font-bold text-vscode-function mb-2 tracking-wide">realTimeIntelligence()</h3>
              <p className="text-vscode-variable text-xs">Continuous monitoring and instant alerting on critical events and pattern detection</p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-vscode-sidebar rounded-sm border border-vscode-border hover:border-vscode-type transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center mb-3">
                <Lock className="w-5 h-5 text-vscode-type" />
              </div>
              <h3 className="text-sm font-bold text-vscode-function mb-2 tracking-wide">privateDeployment()</h3>
              <p className="text-vscode-variable text-xs">On-premises or air-gapped deployment options with data sovereignty controls</p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-vscode-sidebar rounded-sm border border-vscode-border hover:border-vscode-type transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center mb-3">
                <Globe className="w-5 h-5 text-vscode-type" />
              </div>
              <h3 className="text-sm font-bold text-vscode-function mb-2 tracking-wide">workflowOrchestration()</h3>
              <p className="text-vscode-variable text-xs">Multi-agent coordination for complex analytical tasks across distributed data sources</p>
            </motion.div>
            
            <motion.div 
              className="p-4 bg-vscode-sidebar rounded-sm border border-vscode-border hover:border-vscode-type transition-colors"
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-vscode-type" />
              </div>
              <h3 className="text-sm font-bold text-vscode-function mb-2 tracking-wide">adaptiveLearning()</h3>
              <p className="text-vscode-variable text-xs">Continuously improving models that adapt to your organization's unique patterns and requirements</p>
            </motion.div>
          </div>

          {/* Critical Infrastructure Benefits - IDE Style */}
          <motion.div
            className="p-6 bg-vscode-sidebar border border-vscode-border rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-lg font-bold text-vscode-function mb-6 tracking-wide text-center">whyChoose.jetBuilder()</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center">
                  <Lock className="w-4 h-4 text-vscode-type" />
                </div>
                <div>
                  <h4 className="text-vscode-function font-bold mb-1 text-sm">minimalPublicAPIs()</h4>
                  <p className="text-vscode-variable text-xs">Speech-to-Text, Text-to-Speech, and processing logic designed to run on your infrastructure with minimal external dependencies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center">
                  <Database className="w-4 h-4 text-vscode-type" />
                </div>
                <div>
                  <h4 className="text-vscode-function font-bold mb-1 text-sm">customSLMs()</h4>
                  <p className="text-vscode-variable text-xs">Domain-specific SLMs trained on your corporate and customer data, deployed entirely on-premises with full ownership</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center">
                  <Shield className="w-4 h-4 text-vscode-type" />
                </div>
                <div>
                  <h4 className="text-vscode-function font-bold mb-1 text-sm">modelOwnership()</h4>
                  <p className="text-vscode-variable text-xs">Model weights, biases, and training data can be deployed on your infrastructure with ownership controls</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-vscode-type" />
                </div>
                <div>
                  <h4 className="text-vscode-function font-bold mb-1 text-sm">domainAccuracy()</h4>
                  <p className="text-vscode-variable text-xs">Our custom SLMs are trained for domain-specific accuracy tailored to your operations</p>
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


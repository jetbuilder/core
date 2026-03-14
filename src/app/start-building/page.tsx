'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Shield, Database, CheckCircle, ArrowRight, PlayCircle } from 'lucide-react'
import Button from '@/components/ui/button'
import { useState } from 'react'

export default function StartBuildingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: 'developer'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-vscode-bg pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
            <Zap className="w-5 h-5 text-vscode-type" />
            <span className="text-xs font-bold text-vscode-type uppercase tracking-wider">Start Building</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 uppercase tracking-wide">
            Build AI Agentic Workflows
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get started with JetBuilder Studio - the visual IDE for building multi-agent systems. Choose your path below.
          </p>
        </motion.div>

        {/* Path Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Developer Path */}
          <motion.div
            className="bg-gradient-to-br from-tactical-900/40 to-gunmetal-800/40 border-2 border-vscode-border rounded-sm p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Code className="w-10 h-10 text-vscode-type" />
              <h2 className="text-3xl font-bold text-white uppercase tracking-wide">Free Tier</h2>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Perfect for developers, engineers, and teams who want to build custom agentic workflows.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">Visual workflow builder</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">49+ pre-built components</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">Multi-agent orchestration</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">Local development environment</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">Community support</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">Deploy on your infrastructure</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-vscode-sidebar border border-vscode-border rounded text-white placeholder-gray-500 focus:border-vscode-type focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-vscode-sidebar border border-vscode-border rounded text-white placeholder-gray-500 focus:border-vscode-type focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <Button type="submit" size="lg" className="w-full bg-tactical-600 hover:bg-tactical-700 text-white font-bold uppercase">
                Sign Up Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <p className="text-sm text-gray-400 mt-4 text-center">
              No credit card required. Start building immediately.
            </p>
          </motion.div>

          {/* Enterprise Path */}
          <motion.div
            className="bg-gradient-to-br from-gunmetal-800/40 to-tactical-900/40 border-2 border-vscode-border rounded-sm p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-10 h-10 text-vscode-type" />
              <h2 className="text-3xl font-bold text-white uppercase tracking-wide">Enterprise</h2>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              For organizations deploying production AI workflows with enterprise support and SLAs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">Everything in Free Tier</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">Pre-built solution templates</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">Custom workflow development</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">On-premises deployment</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">Enterprise support & SLAs</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">Dedicated success manager</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-vscode-type mt-1 flex-shrink-0" />
                <span className="text-gray-300">Priority feature requests</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-vscode-sidebar border border-vscode-border rounded text-white placeholder-gray-500 focus:border-vscode-type focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-4 py-3 bg-vscode-sidebar border border-vscode-border rounded text-white placeholder-gray-500 focus:border-vscode-type focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 bg-vscode-sidebar border border-vscode-border rounded text-white placeholder-gray-500 focus:border-vscode-type focus:outline-none"
                required
              />
              <Button type="submit" size="lg" variant="outline" className="w-full border-2 border-vscode-border text-vscode-type hover:bg-vscode-sidebar/30 font-bold uppercase">
                Request Enterprise Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <p className="text-sm text-gray-400 mt-4 text-center">
              We'll schedule a personalized demo within 24 hours.
            </p>
          </motion.div>
        </div>

        {/* Quick Start Guide */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase tracking-wide">
            Quick Start Guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gunmetal-900 border border-vscode-border rounded-sm p-6">
              <div className="w-12 h-12 bg-vscode-sidebar border border-vscode-border rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-vscode-type">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Sign Up</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Create your free account and access JetBuilder Studio instantly. No credit card required.
              </p>
            </div>

            <div className="bg-gunmetal-900 border border-vscode-border rounded-sm p-6">
              <div className="w-12 h-12 bg-vscode-sidebar border border-vscode-border rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-vscode-type">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Choose Template</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Start from a pre-built solution or create a workflow from scratch using our visual builder.
              </p>
            </div>

            <div className="bg-gunmetal-900 border border-vscode-border rounded-sm p-6">
              <div className="w-12 h-12 bg-vscode-sidebar border border-vscode-border rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-vscode-type">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Deploy</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Deploy your workflow to your infrastructure with complete data sovereignty.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Example Workflows to Clone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase tracking-wide">
            Example Workflows to Clone
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/contact-center" className="block bg-gunmetal-900 border border-vscode-border hover:border-vscode-border rounded-sm p-6 transition-all hover:scale-105">
              <h3 className="text-lg font-bold text-vscode-type mb-2 uppercase">Contact Center</h3>
              <p className="text-gray-300 text-sm">15 AI components for autonomous customer service</p>
            </a>

            <a href="/financial-services" className="block bg-gunmetal-900 border border-vscode-border hover:border-vscode-border rounded-sm p-6 transition-all hover:scale-105">
              <h3 className="text-lg font-bold text-vscode-type mb-2 uppercase">Financial Services</h3>
              <p className="text-gray-300 text-sm">Claims, lending, KYC/KYB workflows</p>
            </a>

            <a href="/intelligence-ops" className="block bg-gunmetal-900 border border-vscode-border hover:border-vscode-border rounded-sm p-6 transition-all hover:scale-105">
              <h3 className="text-lg font-bold text-vscode-type mb-2 uppercase">Intelligence Ops</h3>
              <p className="text-gray-300 text-sm">Monitoring, entity detection, web scraping</p>
            </a>

            <a href="/ai-security" className="block bg-gunmetal-900 border border-vscode-border hover:border-vscode-border rounded-sm p-6 transition-all hover:scale-105">
              <h3 className="text-lg font-bold text-vscode-type mb-2 uppercase">AI Security</h3>
              <p className="text-gray-300 text-sm">LLM security testing and monitoring</p>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


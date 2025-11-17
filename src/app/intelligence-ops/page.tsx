'use client'

import { motion } from 'framer-motion'
import { Eye, Shield, CheckCircle, Code, Search, Globe, Activity } from 'lucide-react'
import Button from '@/components/ui/button'

export default function IntelligenceOpsPage() {
  return (
    <div className="min-h-screen bg-vscode-bg pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-mono">
              <Eye className="w-4 h-4" />
              <span>PRE-BUILT SOLUTION</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-tactical-900 text-tactical-400 px-4 py-2 rounded-full text-sm font-mono border border-tactical-600">
              <Code className="w-4 h-4" />
              <span>BUILT WITH JETBUILDER STUDIO</span>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 font-mono">
            Intelligence Operations AI Workflows
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Multi-source intelligence gathering and analysis. Competitor monitoring, entity detection, anomaly identification, multi-language processing, and web scraping agentic workflows.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6 text-center">
            <div className="text-3xl font-bold text-vscode-type mb-2">55+</div>
            <div className="text-sm text-gray-400 font-mono">Languages</div>
          </div>
          
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6 text-center">
            <div className="text-3xl font-bold text-vscode-type mb-2">24/7</div>
            <div className="text-sm text-gray-400 font-mono">Monitoring</div>
          </div>
          
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6 text-center">
            <div className="text-3xl font-bold text-vscode-type mb-2">Real-Time</div>
            <div className="text-sm text-gray-400 font-mono">Alerts</div>
          </div>
          
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6 text-center">
            <div className="text-3xl font-bold text-vscode-type mb-2">100%</div>
            <div className="text-sm text-gray-400 font-mono">Autonomous</div>
          </div>
        </motion.div>

        {/* Main Workflow Image Placeholder */}
        <motion.div
          className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-[#0d0d0d] rounded-sm p-12 text-center">
            <Eye className="w-24 h-24 text-purple-600 mx-auto mb-4" />
            <p className="text-gray-400 font-mono">Intelligence Operations Workflow Architecture Diagram</p>
            <p className="text-sm text-gray-500 mt-2">(Workflow visualization coming soon)</p>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 font-mono text-center">
            Intelligence Operations Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Competitor Monitoring</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Continuous monitoring of competitor activities, product launches, pricing changes, and market positioning. AI agents track multiple sources and provide real-time intelligence.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Multi-source data aggregation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Real-time alerts on changes</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Trend analysis & reporting</span>
                </div>
              </div>
            </div>

            <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Entity Detection</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Automated entity detection and tracking across documents, communications, and unstructured data. Identify people, organizations, locations, and relationships.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Named entity recognition</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Relationship mapping</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Historical tracking</span>
                </div>
              </div>
            </div>

            <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Anomaly Detection</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Identify unusual patterns, deviations, and anomalies in data streams. AI agents detect outliers, suspicious activities, and emerging threats in real-time.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Pattern recognition</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Behavioral analysis</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Threat identification</span>
                </div>
              </div>
            </div>

            <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Web Scraping Workflows</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Intelligent web scraping agentic workflows that automatically navigate websites, extract structured data, handle dynamic content, and process information across multiple sources.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Multi-site data extraction</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Dynamic content handling</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">55+ language support</span>
                </div>
              </div>
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
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-10">
            <h3 className="text-3xl font-bold text-white mb-4 font-mono">
              Deploy or Customize This Workflow
            </h3>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
              Deploy these intelligence operations workflows on your infrastructure or customize them with JetBuilder Studio.
            </p>
            <p className="text-tactical-400 mb-8 max-w-2xl mx-auto text-sm font-mono">
              All workflows are fully customizable - modify components, add new capabilities, or build similar workflows from scratch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700 font-mono uppercase">
                Deploy This Workflow
              </Button>
              <Button size="lg" variant="outline" className="border-vscode-border text-white hover:bg-[#37373d] font-mono uppercase">
                <a href="/start-building">
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


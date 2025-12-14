'use client'

import { motion } from 'framer-motion'
import { DollarSign, Shield, CheckCircle, Code, TrendingUp, Users } from 'lucide-react'
import Button from '@/components/ui/button'

export default function FinancialServicesPage() {
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
            <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-mono">
              <DollarSign className="w-4 h-4" />
              <span>PRE-BUILT SOLUTION</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-tactical-900 text-tactical-400 px-4 py-2 rounded-full text-sm font-mono border border-tactical-600">
              <Code className="w-4 h-4" />
              <span>BUILT WITH JETBUILDER STUDIO</span>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 font-mono">
            Financial Services AI Workflows
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Autonomous workflows for banking, insurance, and financial operations. Claims processing, mortgage approval, KYC/KYB, corporate lending, and CASA operations with full compliance.
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
            <div className="text-3xl font-bold text-vscode-type mb-2">10x</div>
            <div className="text-sm text-gray-400 font-mono">Faster Processing</div>
          </div>
          
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6 text-center">
            <div className="text-3xl font-bold text-vscode-type mb-2">98%</div>
            <div className="text-sm text-gray-400 font-mono">Accuracy Rate</div>
          </div>
          
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6 text-center">
            <div className="text-3xl font-bold text-vscode-type mb-2">100%</div>
            <div className="text-sm text-gray-400 font-mono">Compliant</div>
          </div>
          
          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6 text-center">
            <div className="text-3xl font-bold text-vscode-type mb-2">24/7</div>
            <div className="text-sm text-gray-400 font-mono">Automated</div>
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
            <DollarSign className="w-24 h-24 text-green-600 mx-auto mb-4" />
            <p className="text-gray-400 font-mono">Financial Services Workflow Architecture Diagram</p>
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
            Financial Services Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Claims Processing</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Automated insurance claims processing with fraud detection. AI agents analyze claims, verify documentation, detect patterns, and process approvals with human oversight.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Automated document extraction</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Real-time fraud detection</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Compliance validation</span>
                </div>
              </div>
            </div>

            <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Mortgage Approval</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Autonomous mortgage application processing with credit analysis, risk assessment, and automated approval workflows while maintaining regulatory compliance.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Automated credit verification</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Risk assessment AI</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Regulatory compliance checks</span>
                </div>
              </div>
            </div>

            <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">KYC/KYB Onboarding</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Corporate customer onboarding with Know Your Customer (KYC) and Know Your Business (KYB) verification. Automated identity verification, document validation, and risk screening.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Identity verification</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">AML screening</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Document validation</span>
                </div>
              </div>
            </div>

            <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-vscode-type font-mono">Lending & CASA</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Corporate lending, deposits, and Current Account Savings Account (CASA) operations. Automated loan processing, deposit management, and account operations.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Loan application processing</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Deposit management</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-vscode-type mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Account automation</span>
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
              Deploy these financial services workflows on your infrastructure or customize them with JetBuilder Studio.
            </p>
            <p className="text-tactical-400 mb-8 max-w-2xl mx-auto text-sm font-mono">
              All workflows are fully customizable - modify components, add new capabilities, or build similar workflows from scratch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 font-mono uppercase">
                Deploy This Workflow
              </Button>
              <Button size="lg" variant="outline" className="border-vscode-border text-white hover:bg-[#37373d] font-mono uppercase">
                <a href="/start-building">
                  Build Your Own Workflow
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-tactical-600 text-tactical-400 hover:bg-tactical-900/30 font-mono uppercase" onClick={() => window.open('https://cal.com/jetbuilder-expert', '_blank')}>
                Request Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


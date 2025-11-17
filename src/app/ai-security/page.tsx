'use client'

import { motion } from 'framer-motion'
import { Shield, AlertTriangle, CheckCircle, Code, Lock, Target } from 'lucide-react'
import Button from '@/components/ui/button'

export default function AISecurityPage() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-mono">
              <Shield className="w-4 h-4" />
              <span>PRE-BUILT SOLUTION</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-tactical-900 text-tactical-400 px-4 py-2 rounded-full text-sm font-mono border border-tactical-600">
              <Code className="w-4 h-4" />
              <span>BUILT WITH JETBUILDER STUDIO</span>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 font-mono">
            AI Security Testing Workflows
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive LLM security testing suite. Automated prompt injection detection, jailbreaking detection, adversarial attack testing, and continuous security monitoring.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#4ec9b0] mb-2">1000+</div>
            <div className="text-sm text-gray-400 font-mono">Test Vectors</div>
          </div>
          
          <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#4ec9b0] mb-2">99.9%</div>
            <div className="text-sm text-gray-400 font-mono">Detection Rate</div>
          </div>
          
          <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#4ec9b0] mb-2">Real-Time</div>
            <div className="text-sm text-gray-400 font-mono">Monitoring</div>
          </div>
          
          <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#4ec9b0] mb-2">24/7</div>
            <div className="text-sm text-gray-400 font-mono">Automated</div>
          </div>
        </motion.div>

        {/* Main Workflow Image Placeholder */}
        <motion.div
          className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-[#0d0d0d] rounded-lg p-12 text-center">
            <Shield className="w-24 h-24 text-red-600 mx-auto mb-4" />
            <p className="text-gray-400 font-mono">AI Security Testing Workflow Architecture Diagram</p>
            <p className="text-sm text-gray-500 mt-2">(Workflow visualization coming soon)</p>
          </div>
        </motion.div>

        {/* Security Capabilities */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 font-mono text-center">
            AI Security Testing Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4ec9b0] font-mono">LLM Security Testing</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Comprehensive testing framework for large language models. Automated security assessments, vulnerability scanning, and continuous monitoring of AI systems.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Automated vulnerability scanning</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Security posture assessment</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Continuous monitoring</span>
                </div>
              </div>
            </div>

            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4ec9b0] font-mono">Prompt Injection Detection</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Real-time detection of prompt injection attacks. AI agents analyze user inputs, identify malicious patterns, and prevent unauthorized system access or data leakage.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Real-time input analysis</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Pattern recognition</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Automated blocking</span>
                </div>
              </div>
            </div>

            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4ec9b0] font-mono">Jailbreaking Detection</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Identify and prevent jailbreaking attempts. Detect users trying to bypass safety controls, override instructions, or manipulate AI behavior outside intended use.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Behavioral analysis</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Safety control monitoring</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Automated response</span>
                </div>
              </div>
            </div>

            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#4ec9b0] font-mono">Adversarial Attack Detection</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Detect adversarial attacks designed to fool AI systems. Identify crafted inputs meant to cause misclassification, data poisoning, or model manipulation.
              </p>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Input validation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Anomaly detection</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#4ec9b0] mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-300">Model protection</span>
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
          <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded-lg p-10">
            <h3 className="text-3xl font-bold text-white mb-4 font-mono">
              Deploy or Customize This Workflow
            </h3>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
              Deploy this AI security testing workflow on your infrastructure or customize it with JetBuilder Studio.
            </p>
            <p className="text-tactical-400 mb-8 max-w-2xl mx-auto text-sm font-mono">
              All workflows are fully customizable - modify components, add new capabilities, or build similar workflows from scratch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 font-mono uppercase">
                Deploy This Workflow
              </Button>
              <Button size="lg" variant="outline" className="border-[#3c3c3c] text-white hover:bg-[#37373d] font-mono uppercase">
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


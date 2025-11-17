'use client'

import { motion } from 'framer-motion'
import { Brain, Server, Lock, Zap, DollarSign, Code, Shield, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Server,
    title: 'completeControl()',
    description: 'Deploy entirely on YOUR infrastructure. No data sent to Azure, AWS, or Google. Full control over model weights, training data, and inference.'
  },
  {
    icon: Lock,
    title: 'dataSovereignty()',
    description: 'All data stays within your environment. Perfect for regulated industries (healthcare, finance, government) requiring complete data sovereignty and air-gap capability.'
  },
  {
    icon: Zap,
    title: 'fasterInference()',
    description: 'Smaller models = faster responses. Sub-second latency for real-time applications. No API rate limits or external service dependencies.'
  },
  {
    icon: DollarSign,
    title: 'lowerCosts()',
    description: 'No per-token API fees. No cloud compute charges. One-time deployment cost vs. ongoing external AI service expenses. Better ROI for high-volume use cases.'
  },
  {
    icon: Brain,
    title: 'domainSpecific()',
    description: 'Train on YOUR data for YOUR domain. Custom vocabulary, industry jargon, company-specific knowledge. Higher accuracy for specialized tasks than generic LLMs.'
  },
  {
    icon: Code,
    title: 'fullyCustomizable()',
    description: 'Modify architecture, fine-tune parameters, optimize for specific hardware. Complete flexibility vs. black-box external APIs.'
  },
  {
    icon: Shield,
    title: 'noVendorLockIn()',
    description: 'Own your AI infrastructure. No dependency on external providers. Models work offline, in air-gapped environments. Complete independence.'
  },
  {
    icon: TrendingUp,
    title: 'scalableEfficient()',
    description: 'Run on commodity hardware or specialized accelerators. Scale horizontally on your infrastructure. Energy-efficient operations.'
  }
]

const useCases = [
  {
    title: 'Financial Services',
    examples: ['Claims processing', 'Fraud detection', 'KYC/AML analysis', 'Loan underwriting'],
    reason: 'Train on proprietary financial data without exposing to external APIs'
  },
  {
    title: 'Healthcare',
    examples: ['Medical record analysis', 'Clinical decision support', 'Patient triage', 'Drug discovery'],
    reason: 'HIPAA compliance with on-premises deployment and complete PHI control'
  },
  {
    title: 'Government & Defense',
    examples: ['Intelligence analysis', 'Document classification', 'Threat detection', 'Policy analysis'],
    reason: 'Classified environments requiring air-gapped systems with zero external connectivity'
  },
  {
    title: 'Manufacturing',
    examples: ['Quality control', 'Predictive maintenance', 'Supply chain optimization', 'Process automation'],
    reason: 'Industrial IoT data stays on factory floor, proprietary processes protected'
  }
]

export default function WhySLMs() {
  return (
    <section id="why-slms" className="section-padding bg-vscode-bg">
      <div className="container font-mono">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
            <Brain className="w-4 h-4 text-vscode-type" />
            <span className="text-xs font-bold text-vscode-comment">// small-language-models</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4 tracking-wide">
            whySLMs.forYourOrg()
          </h2>
          
          <p className="text-sm text-vscode-variable max-w-3xl mx-auto mb-6">
            Small Language Models (SLMs) deployed on YOUR infrastructure provide better control, lower costs, and higher security than relying on Azure OpenAI, AWS Bedrock, or Google Vertex AI for enterprise applications.
          </p>

          <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 max-w-4xl mx-auto">
            <p className="text-xs text-vscode-comment mb-2">
              // Key Insight:
            </p>
            <p className="text-sm text-vscode-type leading-relaxed">
              For most enterprise workflows, you don't need GPT-4 or Claude-3. A well-trained 7B-13B parameter model on YOUR data, running on YOUR servers, outperforms generic mega-models for domain-specific tasks—while giving you complete control, data sovereignty, and eliminating ongoing API costs.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-vscode-sidebar border border-vscode-border rounded-sm p-4 hover:border-vscode-type transition-colors"
              >
                <div className="w-10 h-10 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-vscode-type" />
                </div>
                <h3 className="text-sm font-bold text-vscode-function mb-2 tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-xs text-vscode-variable leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-vscode-function mb-8 text-center tracking-wide">
            useCases.whereSLMsExcel()
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6"
              >
                <h4 className="text-base font-bold text-vscode-type mb-3 tracking-wide">
                  {useCase.title}
                </h4>
                
                <div className="mb-4">
                  <p className="text-xs text-vscode-comment mb-2">// examples:</p>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx} className="text-xs text-vscode-variable flex items-start">
                        <span className="text-vscode-comment mr-2">✓</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-vscode-border">
                  <p className="text-xs text-vscode-comment mb-1">// why-slms:</p>
                  <p className="text-xs text-vscode-string italic">
                    "{useCase.reason}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8"
        >
          <h3 className="text-xl font-bold text-vscode-function mb-6 text-center tracking-wide">
            comparison.cloudAPIs.vs.onPremisesSLMs()
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cloud APIs */}
            <div className="border border-vscode-border rounded-sm p-4">
              <h4 className="text-sm font-bold text-vscode-error mb-3 tracking-wide">
                cloudAPIs.issues[]
              </h4>
              <ul className="space-y-2">
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-error mr-2">✗</span>
                  Data leaves your infrastructure
                </li>
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-error mr-2">✗</span>
                  Ongoing per-token API costs
                </li>
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-error mr-2">✗</span>
                  Vendor lock-in and dependency
                </li>
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-error mr-2">✗</span>
                  Generic models, not domain-specific
                </li>
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-error mr-2">✗</span>
                  Rate limits and latency issues
                </li>
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-error mr-2">✗</span>
                  No air-gap capability
                </li>
              </ul>
            </div>

            {/* On-Premises SLMs */}
            <div className="border border-vscode-border rounded-sm p-4">
              <h4 className="text-sm font-bold text-vscode-type mb-3 tracking-wide">
                onPremisesSLMs.benefits[]
              </h4>
              <ul className="space-y-2">
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-type mr-2">✓</span>
                  Complete data sovereignty
                </li>
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-type mr-2">✓</span>
                  One-time deployment cost
                </li>
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-type mr-2">✓</span>
                  Zero vendor lock-in
                </li>
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-type mr-2">✓</span>
                  Trained on YOUR data
                </li>
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-type mr-2">✓</span>
                  Sub-second latency, no limits
                </li>
                <li className="text-xs text-vscode-variable flex items-start">
                  <span className="text-vscode-type mr-2">✓</span>
                  Works in air-gapped environments
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-vscode-border text-center">
            <p className="text-xs text-vscode-comment mb-3">
              // Perfect for: regulated industries, high-volume applications, data-sensitive operations
            </p>
            <a href="/contact">
              <button className="px-6 py-2 bg-vscode-keyword hover:bg-vscode-selection text-white font-mono text-xs rounded-sm transition-colors">
                $ learn-more --about-slms
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


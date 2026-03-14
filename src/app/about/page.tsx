'use client'

import { motion } from 'framer-motion'
import { FileText, Eye } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Document Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 shadow-2xl"
        >
          {/* Top Classification Bar */}
          <div className="bg-black text-white py-2 px-6 flex justify-between items-center font-mono text-xs">
            <span>UNCLASSIFIED</span>
            <span>PUBLIC DISCLOSURE</span>
            <span>UNCLASSIFIED</span>
          </div>

          {/* Document Body */}
          <div className="p-8 md:p-12 bg-gray-50 border-l-4 border-r-4 border-gray-400">
            {/* Document Stamp */}
            <div className="flex justify-between items-start mb-8">
              <div className="border-2 border-red-600 px-4 py-2 rotate-[-3deg]">
                <span className="text-red-600 font-bold text-sm tracking-wider">FILE COPY</span>
              </div>
              <div className="text-right font-mono text-xs text-gray-600 space-y-1">
                <div>Document ID: JB-CORP-2024-001</div>
                <div>Classification: PUBLIC</div>
                <div>Date: November 2024</div>
              </div>
            </div>

            {/* Title */}
            <div className="text-center mb-12">
              <FileText className="w-8 h-8 mx-auto mb-4 text-gray-700" />
              <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide mb-2">
                Corporate Information Disclosure
              </h1>
              <p className="text-sm text-gray-600 font-mono">JetBuilder Technologies Inc.</p>
              <div className="w-32 h-1 bg-gray-400 mx-auto mt-4"></div>
            </div>

            {/* Section 1: Organization Overview */}
            <section className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 font-mono border-b-2 border-gray-400 pb-2">
                § 1. Organization Overview
              </h2>
              <div className="space-y-3 text-gray-800 leading-relaxed">
                <p className="font-mono text-sm">
                  JetBuilder Technologies Inc. (hereinafter "JetBuilder") is a private corporation specializing in 
                  the development and deployment of sovereign artificial intelligence infrastructure for government 
                  agencies and regulated enterprises requiring complete data control.
                </p>
                <p className="font-mono text-sm">
                  The organization operates under standard commercial terms with specialized capabilities for 
                  environments requiring enhanced security posture and regulatory compliance frameworks.
                </p>
              </div>
            </section>

            {/* Section 2: Mission Statement */}
            <section className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 font-mono border-b-2 border-gray-400 pb-2">
                § 2. Mission Statement
              </h2>
              <div className="bg-gray-200 border-l-4 border-gray-600 p-6">
                <p className="font-mono text-sm text-gray-800 leading-relaxed">
                  To provide artificial intelligence capabilities that respect data sovereignty requirements 
                  and operate within customer-controlled infrastructure. The organization maintains a focus 
                  on regulatory compliance, security-first architecture, and minimal external dependencies.
                </p>
              </div>
            </section>

            {/* Section 3: Core Capabilities */}
            <section className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 font-mono border-b-2 border-gray-400 pb-2">
                § 3. Core Capabilities
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-gray-500 pl-4">
                  <h3 className="font-bold text-gray-900 font-mono text-sm mb-2">3.1 Technical Infrastructure</h3>
                  <ul className="space-y-1 font-mono text-xs text-gray-700 list-disc list-inside">
                    <li>On-premises AI deployment capabilities</li>
                    <li>Custom Small Language Model (SLM) development</li>
                    <li>Multi-modal data processing (documents, audio, video, structured data)</li>
                    <li>Air-gapped deployment options for high-security environments</li>
                    <li>Support for 55+ languages</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-500 pl-4">
                  <h3 className="font-bold text-gray-900 font-mono text-sm mb-2">3.2 Deployment Models</h3>
                  <ul className="space-y-1 font-mono text-xs text-gray-700 list-disc list-inside">
                    <li>Private cloud infrastructure (Canadian and US data centers)</li>
                    <li>On-premises hardware deployment</li>
                    <li>Hybrid architectures with data sovereignty controls</li>
                    <li>Isolated network configurations for sensitive operations</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-500 pl-4">
                  <h3 className="font-bold text-gray-900 font-mono text-sm mb-2">3.3 Compliance Framework Support</h3>
                  <ul className="space-y-1 font-mono text-xs text-gray-700 list-disc list-inside">
                    <li>Federal: PIPEDA, HIPAA, FISMA, FedRAMP (authorization in progress)</li>
                    <li>Provincial: FOIPPA, FIPPA, PHIPA</li>
                    <li>Industry: SOC 2, ISO 27001, PCI-DSS, GLBA</li>
                    <li>International: GDPR compliance capabilities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Personnel Information - REDACTED */}
            <section className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 font-mono border-b-2 border-gray-400 pb-2">
                § 4. Personnel Information
              </h2>
              <div className="space-y-3">
                <p className="font-mono text-sm text-gray-800">
                  The organization employs technical personnel with backgrounds in:
                </p>
                <div className="bg-gray-300 p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-gray-600" />
                    <span className="font-mono text-xs text-gray-700">Large-scale technology companies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-gray-600" />
                    <span className="font-mono text-xs text-gray-700">Cybersecurity and intelligence operations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-gray-600" />
                    <span className="font-mono text-xs text-gray-700">Regulatory compliance and government contracting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-gray-600" />
                    <span className="font-mono text-xs text-gray-700">Enterprise AI architecture and infrastructure</span>
                  </div>
                </div>
                <div className="bg-black h-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xs font-mono opacity-30">DETAILS WITHHELD</span>
                  </div>
                </div>
                <p className="font-mono text-xs text-gray-600 italic">
                  Note: Key personnel maintain active security clearances. Detailed backgrounds available under NDA 
                  for qualified government and enterprise inquiries.
                </p>
              </div>
            </section>

            {/* Section 5: Operational Approach */}
            <section className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 font-mono border-b-2 border-gray-400 pb-2">
                § 5. Operational Approach
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-400 p-4 bg-white">
                  <h3 className="font-bold text-gray-900 font-mono text-sm mb-3 uppercase">Security Posture</h3>
                  <ul className="space-y-1 font-mono text-xs text-gray-700">
                    <li>• Zero external data transmission by default</li>
                    <li>• Customer-controlled encryption keys</li>
                    <li>• Comprehensive audit logging</li>
                    <li>• Regular security assessments</li>
                  </ul>
                </div>
                <div className="border border-gray-400 p-4 bg-white">
                  <h3 className="font-bold text-gray-900 font-mono text-sm mb-3 uppercase">Data Sovereignty</h3>
                  <ul className="space-y-1 font-mono text-xs text-gray-700">
                    <li>• Data remains in customer facilities</li>
                    <li>• No cloud dependencies (optional)</li>
                    <li>• Regional data residency controls</li>
                    <li>• Jurisdictional compliance features</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Target Markets */}
            <section className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 font-mono border-b-2 border-gray-400 pb-2">
                § 6. Target Markets
              </h2>
              <div className="space-y-2 font-mono text-sm text-gray-800">
                <div className="flex items-start gap-3">
                  <span className="font-bold">6.1</span>
                  <span>Federal, Provincial, and Municipal Government Agencies</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold">6.2</span>
                  <span>Healthcare Organizations and Hospital Networks</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold">6.3</span>
                  <span>Financial Services and Banking Institutions</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold">6.4</span>
                  <span>Legal Practices and Law Firms</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold">6.5</span>
                  <span>Telecommunications Carriers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold">6.6</span>
                  <span>Critical Infrastructure Operators</span>
                </div>
              </div>
            </section>

            {/* Section 7: Contact Procedures */}
            <section className="mb-10">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 font-mono border-b-2 border-gray-400 pb-2">
                § 7. Contact Procedures
              </h2>
              <div className="bg-gray-200 border border-gray-400 p-6">
                <p className="font-mono text-sm text-gray-800 mb-4">
                  For information requests, technical briefings, or procurement inquiries:
                </p>
                <div className="space-y-2 font-mono text-xs text-gray-700">
                  <div>• General Inquiries: Submit via secure contact form</div>
                  <div>• Government Contracts: Designated contracting officers may request direct communication</div>
                  <div>• Security Clearances: Cleared personnel available for classified discussions</div>
                  <div>• Response Time: 24-48 hours for standard inquiries</div>
                </div>
                <div className="mt-6">
                  <a 
                    href="/contact"
                    className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 font-mono text-sm uppercase tracking-wide transition-colors"
                  >
                    Submit Contact Request
                  </a>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="mb-8">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-4 font-mono border-b-2 border-gray-400 pb-2">
                § 8. Disclaimers
              </h2>
              <div className="bg-gray-100 border-2 border-gray-400 p-6">
                <p className="font-mono text-xs text-gray-600 leading-relaxed">
                  All information provided is accurate to the best of the organization's knowledge as of the document 
                  date. References to compliance frameworks indicate system design intent and do not constitute 
                  certification or guarantee of compliance for any specific implementation. Actual compliance depends 
                  on customer configuration, deployment environment, and operational procedures. References to personnel 
                  backgrounds and previous employment do not imply endorsement, partnership, or affiliation with former 
                  employers or organizations. Security clearances are personal credentials maintained by individuals 
                  and do not constitute organizational clearance. JetBuilder Technologies Inc. assumes no liability 
                  for decisions made based on this information. Binding terms available only in executed contracts.
                </p>
              </div>
            </section>

            {/* Signature Block */}
            <div className="border-t-2 border-gray-400 pt-6 mt-8">
              <div className="flex justify-between items-end">
                <div className="font-mono text-xs text-gray-600">
                  <div>Document Version: 1.2</div>
                  <div>Last Updated: November 2024</div>
                  <div>Next Review: Quarterly</div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-gray-600 mb-2">Authorized for Public Release</div>
                  <div className="border-t-2 border-gray-700 w-48 pt-1">
                    <span className="font-mono text-xs text-gray-700">JetBuilder Corporate Affairs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Classification Bar */}
          <div className="bg-black text-white py-2 px-6 flex justify-between items-center font-mono text-xs">
            <span>UNCLASSIFIED</span>
            <span>END OF DOCUMENT</span>
            <span>UNCLASSIFIED</span>
          </div>
        </motion.div>

        {/* Back Navigation */}
        <div className="mt-8 text-center">
          <a 
            href="/"
            className="text-sm text-gray-400 hover:text-gray-300 transition-colors font-mono"
          >
            ← Return to Main Site
          </a>
        </div>
      </div>
    </div>
  )
}

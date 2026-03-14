'use client'

import { motion } from 'framer-motion'
import { Shield, Calendar } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gunmetal-950 via-gunmetal-900 to-primary-950 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-tactical-900 px-4 py-2 rounded-sm mb-6 border border-tactical-700">
            <Shield className="w-5 h-5 text-tactical-400" />
            <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
            Privacy Policy
          </h1>
          <div className="flex items-center space-x-2 text-gray-400">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8 text-gray-300 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">1. Introduction</h2>
            <p className="mb-4">
              Sovereign AI Platform, a product of JetBuilder ("we", "us", or "our"), is committed to protecting the privacy and security of your information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              This policy applies to government agencies, semi-government organizations, and enterprise customers who use our AI-powered 
              intelligence extraction and analysis platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-tactical-400 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Contact information (name, email, phone number)</li>
              <li>Company and organizational details</li>
              <li>Job title and role information</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
              <li>Authentication credentials for platform access</li>
            </ul>

            <h3 className="text-xl font-semibold text-tactical-400 mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>IP addresses and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring URLs</li>
              <li>System performance metrics</li>
            </ul>

            <h3 className="text-xl font-semibold text-tactical-400 mb-3">2.3 Customer Data</h3>
            <p>
              For deployed systems, customer data processed through Sovereign AI Platform remains under the complete control and ownership of the customer. 
              We process this data solely as a data processor on behalf of our customers and in accordance with their instructions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use collected information for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Responding to inquiries and support requests</li>
              <li>Processing service agreements and deployments</li>
              <li>Improving our platform and services</li>
              <li>Sending important notices and updates</li>
              <li>Ensuring security and preventing fraud</li>
              <li>Complying with legal obligations</li>
              <li>Analyzing usage patterns for service optimization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement industry-leading security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>End-to-end encryption for data in transit and at rest</li>
              <li>Multi-factor authentication and access controls</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC 2 Type II, ISO 27001, and HIPAA compliance</li>
              <li>Secure infrastructure with private cloud and on-premise options</li>
              <li>Air-gapped deployment capabilities for sensitive environments</li>
              <li>24/7 security monitoring and incident response</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">5. Data Sovereignty and Storage</h2>
            <p className="mb-4">
              Sovereign AI Platform provides flexible deployment options to meet data sovereignty requirements:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>On-Premise Deployment:</strong> All data remains on your infrastructure</li>
              <li><strong>Private Cloud:</strong> Dedicated infrastructure in your specified region</li>
              <li><strong>Hybrid:</strong> Flexible data residency with complete control</li>
            </ul>
            <p className="mt-4">
              For government and regulated industries, we support air-gapped deployments with no external data transmission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">6. Information Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell your information. We may share information only in these circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
              <li><strong>Service Providers:</strong> With vetted third parties who assist in operations (under strict confidentiality agreements)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions (with continued privacy protection)</li>
              <li><strong>Security:</strong> To protect rights, property, or safety</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">7. Compliance Frameworks</h2>
            <p className="mb-3">Sovereign AI Platform complies with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>GDPR:</strong> European data protection requirements</li>
              <li><strong>HIPAA:</strong> Healthcare information privacy standards</li>
              <li><strong>CCPA:</strong> California consumer privacy rights</li>
              <li><strong>FedRAMP:</strong> Federal risk and authorization management (in process)</li>
              <li><strong>ITAR:</strong> International traffic in arms regulations (for applicable deployments)</li>
              <li><strong>CJIS:</strong> Criminal justice information services (for law enforcement)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">8. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
              <li>File a complaint with supervisory authorities</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@jetbuilder.ai" className="text-tactical-400 hover:text-tactical-300">privacy@jetbuilder.ai</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">9. Data Retention</h2>
            <p className="mb-4">
              We retain information only as long as necessary for the purposes outlined in this policy or as required by law. 
              For government contracts, retention periods align with applicable regulations and contractual obligations.
            </p>
            <p>
              Customer data processed through deployed systems follows customer-defined retention policies and remains under customer control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">10. Cookies and Tracking</h2>
            <p className="mb-4">
              Our website uses essential cookies for functionality and analytics cookies to improve our services. You can control 
              cookie preferences through your browser settings. Essential cookies cannot be disabled as they are necessary for site operation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">11. International Data Transfers</h2>
            <p className="mb-4">
              For customers requiring data to remain within specific jurisdictions, we offer region-specific deployments. 
              When data must be transferred internationally, we use appropriate safeguards including Standard Contractual Clauses (SCCs) 
              and ensure compliance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">12. Children's Privacy</h2>
            <p>
              Sovereign AI Platform is designed for enterprise and government use and is not intended for individuals under 18 years of age. 
              We do not knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">13. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy periodically. We will notify you of material changes via email or prominent notice 
              on our website. Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">14. Contact Us</h2>
            <div className="bg-gunmetal-950 border border-tactical-700 rounded p-6">
              <p className="mb-4"><strong>For privacy-related questions or concerns:</strong></p>
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@jetbuilder.ai" className="text-tactical-400 hover:text-tactical-300">privacy@jetbuilder.ai</a></p>
              <p className="mb-2"><strong>Data Protection Officer:</strong> <a href="mailto:dpo@jetbuilder.ai" className="text-tactical-400 hover:text-tactical-300">dpo@jetbuilder.ai</a></p>
              <p className="mb-2"><strong>Security Issues:</strong> <a href="mailto:security@jetbuilder.ai" className="text-tactical-400 hover:text-tactical-300">security@jetbuilder.ai</a></p>
              <p className="mt-4 text-sm text-gray-500">
                For general inquiries, visit our <a href="/contact" className="text-tactical-400 hover:text-tactical-300">contact page</a>.
              </p>
            </div>
          </section>
        </motion.div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a 
            href="/"
            className="text-sm text-gray-500 hover:text-tactical-400 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}





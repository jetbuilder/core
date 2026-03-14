'use client'

import { motion } from 'framer-motion'
import { FileText, Calendar } from 'lucide-react'

export default function TermsPage() {
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
            <FileText className="w-5 h-5 text-tactical-400" />
            <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
            Terms of Service
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
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              These Terms of Service ("Terms") constitute a legal agreement between you (the "Customer", "you", or "your organization") 
              and JetBuilder ("JetBuilder", "we", "us", or "our") governing your access to and use of Sovereign AI Platform and services 
              ("Services").
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, 
              do not access or use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">2. Service Description</h2>
            <p className="mb-4">
              Sovereign AI Platform provides AI-powered intelligence extraction and analysis services including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Voice transcription and analysis across 55+ languages</li>
              <li>Unstructured data processing and intelligence extraction</li>
              <li>Multi-modal analysis and correlation</li>
              <li>Real-time analytics dashboards</li>
              <li>Secure, private infrastructure deployment options</li>
            </ul>
            <p className="mt-4">
              Specific service features and capabilities are defined in your Service Agreement or Master Services Agreement (MSA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">3. Service Agreement</h2>
            <p className="mb-4">
              Use of Sovereign AI Platform Services requires execution of a separate Service Agreement or MSA. These Terms supplement 
              but do not replace your Service Agreement. In case of conflict, the Service Agreement prevails.
            </p>
            <p>
              Enterprise and government customers must contact our sales team to establish service agreements before deployment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">4. Acceptable Use</h2>
            
            <h3 className="text-xl font-semibold text-tactical-400 mb-3">4.1 Permitted Use</h3>
            <p className="mb-4">You may use the Services for lawful business purposes including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Intelligence analysis and operational support</li>
              <li>Law enforcement and security operations</li>
              <li>Enterprise data analysis and decision support</li>
              <li>Healthcare documentation and analysis (HIPAA-compliant deployments)</li>
              <li>Government and defense applications</li>
            </ul>

            <h3 className="text-xl font-semibold text-tactical-400 mb-3">4.2 Prohibited Use</h3>
            <p className="mb-4">You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use Services for any illegal purpose or in violation of applicable laws</li>
              <li>Attempt to circumvent security measures or access controls</li>
              <li>Reverse engineer, decompile, or disassemble the Services</li>
              <li>Resell or sublicense Services without authorization</li>
              <li>Interfere with or disrupt Services or servers</li>
              <li>Use Services to create competing products or services</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Violate privacy rights or infringe intellectual property</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">5. Data Ownership and Processing</h2>
            
            <h3 className="text-xl font-semibold text-tactical-400 mb-3">5.1 Customer Data</h3>
            <p className="mb-4">
              You retain all rights, title, and interest in and to your data ("Customer Data"). JetBuilder processes Customer Data 
              solely as a data processor on your behalf and in accordance with your instructions.
            </p>

            <h3 className="text-xl font-semibold text-tactical-400 mb-3">5.2 Data Processing Agreement</h3>
            <p className="mb-4">
              For customers subject to GDPR or similar regulations, a separate Data Processing Agreement (DPA) is available 
              and incorporated by reference.
            </p>

            <h3 className="text-xl font-semibold text-tactical-400 mb-3">5.3 Data Security</h3>
            <p>
              We implement and maintain appropriate technical and organizational measures to protect Customer Data as detailed 
              in our Security & Compliance documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">6. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-tactical-400 mb-3">6.1 JetBuilder IP</h3>
            <p className="mb-4">
              JetBuilder retains all rights to the Services, including software, algorithms, models, documentation, and related 
              intellectual property. Nothing in these Terms grants you ownership of our intellectual property.
            </p>

            <h3 className="text-xl font-semibold text-tactical-400 mb-3">6.2 Customer IP</h3>
            <p className="mb-4">
              You retain all rights to Customer Data and any intellectual property you input into the Services.
            </p>

            <h3 className="text-xl font-semibold text-tactical-400 mb-3">6.3 Feedback</h3>
            <p>
              If you provide feedback, suggestions, or ideas about the Services, we may use them without obligation or compensation to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">7. Service Level Agreement</h2>
            <p className="mb-4">
              Service availability, performance standards, and support commitments are defined in your Service Agreement or SLA addendum. 
              Typical commitments include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>99.9% uptime target (excluding scheduled maintenance, force majeure, and customer-caused issues)</li>
              <li>24/7 technical support for Enterprise Professional and Unlimited tiers</li>
              <li>Response time targets based on severity levels (see SLA for specific commitments)</li>
              <li>Data backup and disaster recovery procedures</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              Note: Service level commitments are targets, not guarantees. See Service Level Agreement for specific terms, credits, and remedies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">8. Fees and Payment</h2>
            <p className="mb-4">
              Fees are specified in your Service Agreement. Standard terms include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Annual or multi-year licensing fees</li>
              <li>Implementation and deployment costs</li>
              <li>Optional professional services and training</li>
              <li>Support and maintenance fees</li>
            </ul>
            <p className="mt-4">
              Payment terms are net 30 days unless otherwise specified. Late payments may incur interest charges and service suspension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">9. Warranties and Disclaimers</h2>
            
            <h3 className="text-xl font-semibold text-tactical-400 mb-3">9.1 Limited Warranty</h3>
            <p className="mb-4">
              We warrant that Services will perform materially in accordance with documentation during your subscription term. 
              Your exclusive remedy for breach is service credit or termination as specified in your Service Agreement.
            </p>

            <h3 className="text-xl font-semibold text-tactical-400 mb-3">9.2 Disclaimer</h3>
            <p className="mb-4 uppercase font-semibold">
              EXCEPT AS EXPRESSLY STATED, SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, 
              INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that Services will be uninterrupted, error-free, or that results will meet your requirements. 
              AI-generated outputs should be reviewed and validated before use in critical decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">10. Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold text-tactical-400 mb-3">10.1 Liability Cap</h3>
            <p className="mb-4 uppercase font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, JETBUILDER'S TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATED TO 
              SERVICES SHALL NOT EXCEED THE FEES PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
            
            <h3 className="text-xl font-semibold text-tactical-400 mb-3">10.2 Excluded Damages</h3>
            <p className="mb-4 uppercase font-semibold">
              JETBUILDER SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING 
              BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li className="uppercase font-semibold">LOST PROFITS OR REVENUE</li>
              <li className="uppercase font-semibold">LOST DATA OR DATA CORRUPTION</li>
              <li className="uppercase font-semibold">BUSINESS INTERRUPTION OR DOWNTIME</li>
              <li className="uppercase font-semibold">REGULATORY FINES, PENALTIES, OR SANCTIONS</li>
              <li className="uppercase font-semibold">THIRD-PARTY CLAIMS OR LAWSUITS</li>
              <li className="uppercase font-semibold">REPUTATIONAL HARM OR DAMAGE</li>
              <li className="uppercase font-semibold">COST OF PROCUREMENT OF SUBSTITUTE SERVICES</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-tactical-400 mb-3">10.3 AI-Specific Limitations</h3>
            <p className="mb-4">
              Customer acknowledges that AI and machine learning models are probabilistic systems that may produce errors, 
              inaccuracies, biased outputs, or hallucinations. JetBuilder shall not be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Decisions made by Customer based on AI outputs without adequate human review</li>
              <li>Accuracy, completeness, or reliability of AI-generated content or insights</li>
              <li>Biased or discriminatory outputs from AI models</li>
              <li>Model performance degradation or drift over time</li>
              <li>Customer's failure to implement appropriate validation and oversight processes</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-tactical-400 mb-3">10.4 Compliance Responsibility</h3>
            <p className="mb-4">
              JetBuilder provides tools and infrastructure designed to support compliance efforts but does not guarantee 
              regulatory compliance. Customer is solely responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Determining whether Services meet Customer's compliance requirements</li>
              <li>Implementing and maintaining adequate compliance programs</li>
              <li>Conducting compliance audits and risk assessments</li>
              <li>Meeting all obligations under PIPEDA, HIPAA, SOX, GLBA, and other applicable regulations</li>
              <li>Any regulatory violations, fines, or penalties related to Customer's operations</li>
            </ul>
            
            <p className="mt-4 text-sm text-gray-400">
              Enterprise and government customers may negotiate different liability provisions in separate written agreements. 
              These limitations apply to the fullest extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">11. Indemnification</h2>
            <p className="mb-4">
              Each party will indemnify the other against third-party claims arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Breach of these Terms or applicable law</li>
              <li>Infringement of intellectual property rights</li>
              <li>Violation of privacy or data protection laws</li>
              <li>Negligent or willful misconduct</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">12. Term and Termination</h2>
            
            <h3 className="text-xl font-semibold text-tactical-400 mb-3">12.1 Term</h3>
            <p className="mb-4">
              These Terms remain effective for the duration of your Service Agreement. Subscription terms are typically annual 
              with automatic renewal unless terminated.
            </p>

            <h3 className="text-xl font-semibold text-tactical-400 mb-3">12.2 Termination</h3>
            <p className="mb-4">Either party may terminate for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Material breach not cured within 30 days of notice</li>
              <li>Insolvency or bankruptcy</li>
              <li>Mutual written agreement</li>
            </ul>

            <h3 className="text-xl font-semibold text-tactical-400 mb-3">12.3 Effect of Termination</h3>
            <p className="mb-4">Upon termination:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to Services will cease</li>
              <li>Customer Data will be returned or destroyed per your instructions</li>
              <li>Outstanding fees become immediately due</li>
              <li>Confidentiality obligations survive</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">13. Confidentiality</h2>
            <p className="mb-4">
              Each party agrees to protect the other's Confidential Information using reasonable care, no less than that used 
              for its own confidential information. Confidential Information includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Technical information and documentation</li>
              <li>Business plans and strategies</li>
              <li>Pricing and financial information</li>
              <li>Customer Data and usage patterns</li>
            </ul>
            <p className="mt-4">
              Confidentiality obligations survive termination for 5 years.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">14. Compliance and Export Control</h2>
            <p className="mb-4">
              You agree to comply with all applicable laws and regulations, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Export control laws (ITAR, EAR)</li>
              <li>Data protection and privacy regulations</li>
              <li>Anti-corruption and anti-bribery laws</li>
              <li>Sanctions and embargoes</li>
            </ul>
            <p className="mt-4">
              Services may not be exported to prohibited countries or entities without required licenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">15. Governing Law and Disputes</h2>
            <p className="mb-4">
              These Terms are governed by the laws of [Jurisdiction] without regard to conflict of law principles.
            </p>
            <p className="mb-4">
              Disputes will be resolved through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Good faith negotiations</li>
              <li>Mediation if negotiations fail</li>
              <li>Binding arbitration or litigation as specified in Service Agreement</li>
            </ul>
            <p className="mt-4">
              Government customers may have specific dispute resolution procedures per applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">16. Force Majeure</h2>
            <p>
              Neither party is liable for failure to perform due to circumstances beyond reasonable control, including natural 
              disasters, war, terrorism, labor disputes, power failures, or government actions. Affected party must promptly 
              notify the other and make reasonable efforts to mitigate impact.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">17. General Provisions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Entire Agreement:</strong> These Terms and your Service Agreement constitute the entire agreement</li>
              <li><strong>Amendments:</strong> We may update Terms with notice; continued use constitutes acceptance</li>
              <li><strong>Severability:</strong> Invalid provisions do not affect remaining Terms</li>
              <li><strong>Waiver:</strong> Failure to enforce does not waive future enforcement</li>
              <li><strong>Assignment:</strong> You may not assign without our written consent</li>
              <li><strong>Notices:</strong> Must be in writing to addresses in Service Agreement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">18. Contact Information</h2>
            <div className="bg-gunmetal-950 border border-tactical-700 rounded p-6">
              <p className="mb-4"><strong>For questions about these Terms:</strong></p>
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:legal@jetbuilder.ai" className="text-tactical-400 hover:text-tactical-300">legal@jetbuilder.ai</a></p>
              <p className="mb-2"><strong>Sales:</strong> <a href="mailto:sales@jetbuilder.ai" className="text-tactical-400 hover:text-tactical-300">sales@jetbuilder.ai</a></p>
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










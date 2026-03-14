'use client'

export default function AccountingEngineSpecSheet() {
  return (
    <div className="min-h-screen bg-white text-black p-8 print:p-0">
      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .page-break { page-break-after: always; }
        }
      `}</style>

      {/* Print Button - Hidden in print */}
      <div className="no-print fixed top-4 right-4 flex gap-2 z-50">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Download as PDF
        </button>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition"
        >
          Back
        </button>
      </div>

      {/* Spec Sheet Content - Optimized for A4/Letter */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none p-12 print:p-8">

        {/* Header */}
        <div className="border-b-4 border-blue-600 pb-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-blue-900 mb-2">Accounting Engine</h1>
              <p className="text-lg text-gray-700">AI-Powered Financial Automation Platform</p>
              <p className="text-sm text-gray-600 italic">Private SLMs & VLMs | On-Premises Deployment | Zero External APIs</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Technical Specification</div>
              <div className="text-sm text-gray-600">Version 1.0.0</div>
              <div className="text-sm text-gray-600">{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            EXECUTIVE SUMMARY
          </h2>
          <p className="text-sm leading-relaxed text-gray-800">
            Accounting Engine is an enterprise-grade financial automation platform powered by <strong>8 specialized AI agents</strong> using
            <strong> on-premises Small Language Models (SLMs) and Vision Language Models (VLMs)</strong>. Built on a high-performance
            <strong> Rust core</strong>, it delivers <strong>99%+ transaction categorization accuracy</strong> and processes
            <strong> 10,000+ transactions per second</strong> with complete audit trails. <strong>No external API calls</strong>—your
            financial data and institutional knowledge remain entirely within your organization.
          </p>
        </section>

        {/* Audit & Compliance Highlights */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            AUDIT & COMPLIANCE HIGHLIGHTS
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded border-2 border-green-500">
              <div className="text-lg font-bold text-green-900">SOX Section 404 Ready</div>
              <div className="text-xs text-gray-700 mt-1">Complete internal control documentation with automated testing workflows, segregation of duties enforcement, and change management tracking.</div>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200">
              <div className="text-lg font-bold text-blue-900">GAAP & IFRS Compliant</div>
              <div className="text-xs text-gray-700 mt-1">Pre-configured accounting rules engine supporting both US GAAP and IFRS standards with automated revenue recognition (ASC 606).</div>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200">
              <div className="text-lg font-bold text-blue-900">SOC 2 Type II Architecture</div>
              <div className="text-xs text-gray-700 mt-1">Security controls, access logging, and data encryption designed for SOC 2 Type II audit requirements.</div>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200">
              <div className="text-lg font-bold text-blue-900">Immutable Audit Ledger</div>
              <div className="text-xs text-gray-700 mt-1">Every transaction, journal entry, and user action logged to tamper-proof audit ledger with 7+ year retention.</div>
            </div>
          </div>
        </section>

        {/* ROI Analysis */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            ROI ANALYSIS: FINANCE OPERATIONS
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded border border-blue-200">
              <div className="text-2xl font-bold text-blue-900">80%</div>
              <div className="text-xs text-gray-700">Reduction in Manual Data Entry</div>
              <div className="text-xs text-blue-600 mt-1">AI-powered invoice & receipt processing</div>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200">
              <div className="text-2xl font-bold text-blue-900">75%</div>
              <div className="text-xs text-gray-700">Faster Month-End Close</div>
              <div className="text-xs text-blue-600 mt-1">Automated reconciliations & journal entries</div>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200">
              <div className="text-2xl font-bold text-blue-900">99%+</div>
              <div className="text-xs text-gray-700">Transaction Categorization Accuracy</div>
              <div className="text-xs text-blue-600 mt-1">SLMs trained on YOUR chart of accounts</div>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200">
              <div className="text-2xl font-bold text-blue-900">60%</div>
              <div className="text-xs text-gray-700">Reduction in Audit Preparation Time</div>
              <div className="text-xs text-blue-600 mt-1">Complete audit trails & automated schedules</div>
            </div>
          </div>
          <div className="mt-3 bg-green-50 p-3 rounded border-2 border-green-500">
            <div className="text-sm font-bold text-green-900">Typical ROI: <span className="text-2xl">6-9 months</span></div>
            <div className="text-xs text-gray-700">Based on mid-market companies with $50M-$500M revenue</div>
          </div>
        </section>

        {/* AI Agent Architecture */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            8 SPECIALIZED AI AGENTS
          </h2>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="border rounded p-2">
              <h4 className="font-bold text-blue-900">1. Supervisor Agent</h4>
              <p className="text-gray-700">Query routing, workflow orchestration, error recovery</p>
            </div>
            <div className="border rounded p-2">
              <h4 className="font-bold text-blue-900">2. Transaction Agent</h4>
              <p className="text-gray-700">Categorization, GL coding, pattern recognition</p>
            </div>
            <div className="border rounded p-2">
              <h4 className="font-bold text-blue-900">3. Reporting Agent</h4>
              <p className="text-gray-700">P&L, Balance Sheet, Cash Flow, custom reports</p>
            </div>
            <div className="border rounded p-2">
              <h4 className="font-bold text-blue-900">4. AP Agent</h4>
              <p className="text-gray-700">Invoice processing, 3-way matching, payment scheduling</p>
            </div>
            <div className="border rounded p-2">
              <h4 className="font-bold text-blue-900">5. AR Agent</h4>
              <p className="text-gray-700">Billing, revenue recognition, collections</p>
            </div>
            <div className="border rounded p-2">
              <h4 className="font-bold text-blue-900">6. Reconciliation Agent</h4>
              <p className="text-gray-700">Bank reconciliation, intercompany, variance analysis</p>
            </div>
            <div className="border rounded p-2">
              <h4 className="font-bold text-blue-900">7. Audit Agent</h4>
              <p className="text-gray-700">SOX controls, fraud detection, compliance monitoring</p>
            </div>
            <div className="border rounded p-2">
              <h4 className="font-bold text-blue-900">8. ERP Integration Agent</h4>
              <p className="text-gray-700">SAP, Oracle, NetSuite, QuickBooks connectors</p>
            </div>
          </div>
        </section>

        {/* Page Break for Print */}
        <div className="page-break"></div>

        {/* Private AI Infrastructure */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            PRIVATE AI INFRASTRUCTURE
          </h2>
          <div className="bg-gray-50 p-4 rounded border-2 border-gray-400 mb-4">
            <div className="text-center text-lg font-bold text-red-700 mb-2">ZERO EXTERNAL API CALLS</div>
            <p className="text-sm text-gray-800 text-center">
              Unlike cloud-based AI solutions, Accounting Engine runs entirely on YOUR infrastructure.
              No data is sent to OpenAI, Anthropic, Google, or any third-party AI service.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Small Language Models (SLMs)</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Transaction categorization & GL coding</li>
                <li>• Natural language query processing</li>
                <li>• Chart of accounts pattern matching</li>
                <li>• Vendor & customer name normalization</li>
                <li>• Memo & description parsing</li>
                <li>• Custom business rule inference</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Vision Language Models (VLMs)</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Invoice data extraction (header/line items)</li>
                <li>• Receipt OCR with context understanding</li>
                <li>• Bank statement processing</li>
                <li>• Contract & agreement analysis</li>
                <li>• Check image processing</li>
                <li>• Document classification</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 bg-blue-50 p-3 rounded border border-blue-200 text-xs">
            <strong>Institutional Knowledge:</strong> Models are fine-tuned on YOUR historical data, learning your
            specific categorization patterns, vendor relationships, and business rules. This proprietary knowledge
            stays within your organization and cannot be replicated by competitors.
          </div>
        </section>

        {/* Audit Trail & Controls */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            AUDIT TRAIL & INTERNAL CONTROLS
          </h2>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">User Activity Logging</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Login/logout timestamps</li>
                <li>• Every query & report access</li>
                <li>• Journal entry creation/edit</li>
                <li>• Approval workflow actions</li>
                <li>• Export & download tracking</li>
                <li>• Failed access attempts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Data Integrity Controls</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Immutable transaction ledger</li>
                <li>• Cryptographic hash verification</li>
                <li>• Segregation of duties</li>
                <li>• Dual approval workflows</li>
                <li>• Period lock controls</li>
                <li>• Change history tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Audit Support Features</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• PBC list automation</li>
                <li>• Trial balance exports</li>
                <li>• Roll-forward schedules</li>
                <li>• Sampling support</li>
                <li>• Adjusting entry tracking</li>
                <li>• Management representation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            TECHNICAL SPECIFICATIONS
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Core Architecture</h3>
              <table className="w-full text-xs">
                <tbody>
                  <tr className="border-b"><td className="py-1 text-gray-600">Runtime Engine:</td><td className="py-1 font-semibold">Rust 1.74+</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Agentic Framework:</td><td className="py-1 font-semibold">JetGraph (Rust-native)</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">AI Agents:</td><td className="py-1 font-semibold">8 Specialized Agents</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Accuracy:</td><td className="py-1 font-semibold text-green-600">99%+ categorization</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Throughput:</td><td className="py-1 font-semibold text-green-600">10K+ txns/sec</td></tr>
                  <tr><td className="py-1 text-gray-600">External APIs:</td><td className="py-1 font-semibold text-green-600">Zero</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Database & Storage</h3>
              <table className="w-full text-xs">
                <tbody>
                  <tr className="border-b"><td className="py-1 text-gray-600">Primary DB:</td><td className="py-1 font-semibold">PostgreSQL 16+</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Audit Ledger:</td><td className="py-1 font-semibold">Immutable append-only</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Vector Store:</td><td className="py-1 font-semibold">ChromaDB 0.4+</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Cache:</td><td className="py-1 font-semibold">Redis 7.2+</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Data Retention:</td><td className="py-1 font-semibold">7+ years (configurable)</td></tr>
                  <tr><td className="py-1 text-gray-600">Encryption:</td><td className="py-1 font-semibold">AES-256 at rest & in transit</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ERP Integration */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            ERP & ACCOUNTING SYSTEM INTEGRATION
          </h2>
          <div className="grid grid-cols-4 gap-3 text-xs">
            <div className="text-center border rounded p-2">
              <div className="font-bold text-blue-900">SAP</div>
              <div className="text-gray-600">S/4HANA, ECC, Business One</div>
            </div>
            <div className="text-center border rounded p-2">
              <div className="font-bold text-blue-900">Oracle</div>
              <div className="text-gray-600">NetSuite, Cloud ERP, E-Business</div>
            </div>
            <div className="text-center border rounded p-2">
              <div className="font-bold text-blue-900">Microsoft</div>
              <div className="text-gray-600">Dynamics 365, GP, NAV</div>
            </div>
            <div className="text-center border rounded p-2">
              <div className="font-bold text-blue-900">Intuit</div>
              <div className="text-gray-600">QuickBooks Online & Desktop</div>
            </div>
            <div className="text-center border rounded p-2">
              <div className="font-bold text-blue-900">Sage</div>
              <div className="text-gray-600">Intacct, 50, 100, X3</div>
            </div>
            <div className="text-center border rounded p-2">
              <div className="font-bold text-blue-900">Workday</div>
              <div className="text-gray-600">Financial Management</div>
            </div>
            <div className="text-center border rounded p-2">
              <div className="font-bold text-blue-900">Xero</div>
              <div className="text-gray-600">Cloud Accounting</div>
            </div>
            <div className="text-center border rounded p-2">
              <div className="font-bold text-blue-900">Custom</div>
              <div className="text-gray-600">REST API & Flat File</div>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-700">
            <strong>Banking Integrations:</strong> Plaid, Yodlee, MX, and direct bank feeds (Chase, BofA, Wells Fargo, Citi, and 10,000+ institutions)
          </div>
        </section>

        {/* Deployment Options */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            DEPLOYMENT OPTIONS
          </h2>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">On-Premises</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Your data center</li>
                <li>• Air-gapped networks</li>
                <li>• Full hardware control</li>
                <li>• Maximum data sovereignty</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Private Cloud</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• AWS VPC / Azure VNet</li>
                <li>• GCP Private Cloud</li>
                <li>• VMware / OpenStack</li>
                <li>• Your cloud account</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Compliance Ready</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• SOX Section 404</li>
                <li>• SOC 2 Type II</li>
                <li>• GDPR / CCPA</li>
                <li>• HIPAA (healthcare clients)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Support & Licensing */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            SUPPORT & LICENSING
          </h2>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="bg-gray-50 p-3 rounded border">
              <h4 className="font-bold mb-2">Standard</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• 8x5 support (M-F)</li>
                <li>• Email & portal</li>
                <li>• Quarterly updates</li>
                <li>• Knowledge base access</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded border">
              <h4 className="font-bold mb-2">Premium</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• 24x7 support</li>
                <li>• Phone & Slack</li>
                <li>• Monthly updates</li>
                <li>• Dedicated CSM</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded border">
              <h4 className="font-bold mb-2">Enterprise</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• 24x7 / 15-min SLA</li>
                <li>• On-site available</li>
                <li>• Continuous updates</li>
                <li>• Custom development</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 bg-blue-50 p-3 rounded border border-blue-200 text-xs">
            <strong>Licensing:</strong> Per-user or per-entity pricing. Volume discounts available.
            Includes all 8 AI agents, SLM/VLM models, and standard support.
          </div>
        </section>

        {/* Footer */}
        <div className="border-t-2 border-blue-600 pt-4 mt-6">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <h4 className="font-bold text-blue-900 mb-2">Contact Information</h4>
              <p className="text-gray-700">
                <strong>Sales:</strong> sales@jetbuilder.io<br/>
                <strong>Support:</strong> support@jetbuilder.io<br/>
                <strong>Website:</strong> www.jetbuilder.io/accounting-engine
              </p>
            </div>
            <div className="text-right">
              <h4 className="font-bold text-blue-900 mb-2">Next Steps</h4>
              <p className="text-gray-700">
                Schedule a demo<br/>
                Request SOC 2 documentation<br/>
                Start 30-day proof of concept
              </p>
            </div>
          </div>
          <div className="mt-3 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} JetBuilder. All rights reserved. Accounting Engine is a trademark of JetBuilder.
          </div>
        </div>

      </div>
    </div>
  )
}

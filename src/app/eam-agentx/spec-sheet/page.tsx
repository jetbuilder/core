'use client'

export default function SpecSheetPage() {
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
          📄 Download as PDF
        </button>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition"
        >
          ← Back
        </button>
      </div>

      {/* Spec Sheet Content - Optimized for A4/Letter */}
      <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none p-12 print:p-8">
        
        {/* Header */}
        <div className="border-b-4 border-blue-600 pb-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-blue-900 mb-2">EAM AgentX</h1>
              <p className="text-lg text-gray-700">Enterprise Asset Management Platform</p>
              <p className="text-sm text-gray-600 italic">Rust-Powered Multi-Agent AI System</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Technical Specification</div>
              <div className="text-sm text-gray-600">Version 2.0.0</div>
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
            EAM AgentX is a next-generation Enterprise Asset Management platform built with <strong>Rust-native JetGraph and JetChain</strong> frameworks, 
            delivering <strong>sub-millisecond response times</strong> and processing <strong>1M+ telemetry events per second</strong>. 
            Designed for telecom operators managing critical infrastructure with zero downtime requirements.
          </p>
        </section>

        {/* ROI Analysis for Telecom */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            ROI ANALYSIS: TELECOM OPERATIONS
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded border border-blue-200">
              <div className="text-2xl font-bold text-blue-900">70%</div>
              <div className="text-xs text-gray-700">Reduction in Mean Time to Repair (MTTR)</div>
              <div className="text-xs text-blue-600 mt-1">Saves $2.1M annually per 1,000 cell sites</div>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200">
              <div className="text-2xl font-bold text-blue-900">50%</div>
              <div className="text-xs text-gray-700">Decrease in Unplanned Network Downtime</div>
              <div className="text-xs text-blue-600 mt-1">Prevents $5.4M in lost revenue annually</div>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200">
              <div className="text-2xl font-bold text-blue-900">10x</div>
              <div className="text-xs text-gray-700">Faster Work Order Creation & Dispatch</div>
              <div className="text-xs text-blue-600 mt-1">Reduces operational overhead by 40%</div>
            </div>
            <div className="bg-blue-50 p-3 rounded border border-blue-200">
              <div className="text-2xl font-bold text-blue-900">24/7</div>
              <div className="text-xs text-gray-700">Continuous Asset Health Monitoring</div>
              <div className="text-xs text-blue-600 mt-1">Proactive issue detection & resolution</div>
            </div>
          </div>
          <div className="mt-3 bg-green-50 p-3 rounded border-2 border-green-500">
            <div className="text-sm font-bold text-green-900">Typical ROI: <span className="text-2xl">8-12 months</span></div>
            <div className="text-xs text-gray-700">Based on 1,000+ cell sites with 10,000+ network elements</div>
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
                  <tr className="border-b"><td className="py-1 text-gray-600">AI Orchestration:</td><td className="py-1 font-semibold">JetChain (Rust-native)</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">AI Agents:</td><td className="py-1 font-semibold">10 Specialized Agents</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Response Time:</td><td className="py-1 font-semibold text-green-600">&lt;1ms</td></tr>
                  <tr><td className="py-1 text-gray-600">Throughput:</td><td className="py-1 font-semibold text-green-600">1M+ events/sec</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Database Stack</h3>
              <table className="w-full text-xs">
                <tbody>
                  <tr className="border-b"><td className="py-1 text-gray-600">Primary DB:</td><td className="py-1 font-semibold">PostgreSQL 16+</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Time-Series:</td><td className="py-1 font-semibold">TimescaleDB 2.15+</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Vector Store:</td><td className="py-1 font-semibold">ChromaDB 0.4+</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">In-Memory Cache:</td><td className="py-1 font-semibold">Redis 7.2+</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Data Retention:</td><td className="py-1 font-semibold">7 years (configurable)</td></tr>
                  <tr><td className="py-1 text-gray-600">Backup:</td><td className="py-1 font-semibold">Real-time replication</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Mobile Telecom Equipment Coverage */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            MOBILE TELECOM EQUIPMENT COVERAGE
          </h2>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Radio Access Network (RAN)</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Remote Radio Units (RRU/RRH)</li>
                <li>• Baseband Units (BBU)</li>
                <li>• Massive MIMO Antennas</li>
                <li>• Small Cells & Femtocells</li>
                <li>• Distributed Units (DU) - 5G</li>
                <li>• Centralized Units (CU) - 5G</li>
                <li>• Antenna Systems & Towers</li>
                <li>• RF Combiners & Splitters</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Core & Transport Network</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Core Routers (P/PE)</li>
                <li>• Aggregation Switches</li>
                <li>• Optical Transport (OTN/DWDM)</li>
                <li>• Microwave Radio Links</li>
                <li>• IP/MPLS Edge Routers</li>
                <li>• Firewalls & Security Gateway</li>
                <li>• Packet Core (EPC/5GC)</li>
                <li>• IMS & VoLTE Servers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Site Infrastructure</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Rectifiers & Power Systems</li>
                <li>• Battery Banks (VRLA/Li-ion)</li>
                <li>• Diesel Generators (DG Sets)</li>
                <li>• Solar Panels & Hybrid Power</li>
                <li>• HVAC & Cooling Systems</li>
                <li>• UPS Systems</li>
                <li>• Environmental Sensors</li>
                <li>• Physical Security Systems</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 bg-blue-50 p-2 rounded border border-blue-200 text-xs">
            <strong>Vendor Support:</strong> Ericsson, Nokia, Huawei, Samsung, ZTE, Cisco, Juniper, Ciena, Infinera, Commscope, and 100+ equipment vendors
          </div>
        </section>

        {/* Telecom-Specific Capabilities */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            TELECOM-SPECIFIC CAPABILITIES
          </h2>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Cell Site Equipment Monitoring:</strong> Real-time health monitoring of RRUs, BBUs, antennas, and power systems</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Network Element Lifecycle:</strong> Automated tracking of routers, switches, and optical equipment across 10K+ sites</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Predictive Failure Detection:</strong> AI-powered anomaly detection on environmental sensors and power metrics</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Field Technician Optimization:</strong> Intelligent work order routing based on location, skills, and priority</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Conversational Interface:</strong> Natural language queries - "What cell sites need maintenance this week?"</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 font-bold">✓</span>
              <span><strong>Integration Ready:</strong> APIs for OSS/BSS systems (Ericsson ENM, Nokia NetAct, Huawei U2000)</span>
            </div>
          </div>
        </section>

        {/* Deployment & Compliance */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            DEPLOYMENT & COMPLIANCE
          </h2>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Deployment Options</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• On-premises (data center)</li>
                <li>• Private cloud (VMware/OpenStack)</li>
                <li>• Hybrid cloud (AWS/Azure/GCP)</li>
                <li>• Air-gapped (isolated networks)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Scalability</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Horizontal scaling (Kubernetes)</li>
                <li>• 10,000+ concurrent users</li>
                <li>• 1M+ assets under management</li>
                <li>• Multi-region deployment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Compliance</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• ISO 55000 (Asset Management)</li>
                <li>• SOC 2 Type II</li>
                <li>• NERC CIP (Critical Infrastructure)</li>
                <li>• GDPR / CCPA ready</li>
              </ul>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            MINIMUM SYSTEM REQUIREMENTS
          </h2>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <table className="w-full">
                <tbody>
                  <tr className="border-b"><td className="py-1 text-gray-600">CPU:</td><td className="py-1">16 cores (Intel Xeon or AMD EPYC)</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">RAM:</td><td className="py-1">64 GB (128 GB recommended)</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Storage:</td><td className="py-1">1 TB NVMe SSD (RAID 10)</td></tr>
                  <tr><td className="py-1 text-gray-600">Network:</td><td className="py-1">10 Gbps Ethernet</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <table className="w-full">
                <tbody>
                  <tr className="border-b"><td className="py-1 text-gray-600">OS:</td><td className="py-1">Linux (Ubuntu 22.04 LTS / RHEL 9)</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Container:</td><td className="py-1">Docker 24+ / Kubernetes 1.28+</td></tr>
                  <tr className="border-b"><td className="py-1 text-gray-600">Browser:</td><td className="py-1">Chrome 120+ / Edge 120+ / Firefox 121+</td></tr>
                  <tr><td className="py-1 text-gray-600">HA Setup:</td><td className="py-1">3-node cluster (minimum)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Support & Pricing */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-300 pb-1">
            SUPPORT & LICENSING
          </h2>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="bg-gray-50 p-3 rounded border">
              <h4 className="font-bold mb-2">Standard Support</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• 8x5 business hours</li>
                <li>• Email & portal support</li>
                <li>• Quarterly updates</li>
                <li>• Online knowledge base</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded border">
              <h4 className="font-bold mb-2">Premium Support</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• 24x7x365 coverage</li>
                <li>• Phone & Slack support</li>
                <li>• Monthly updates</li>
                <li>• Dedicated account manager</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-3 rounded border">
              <h4 className="font-bold mb-2">Enterprise Support</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• 24x7 with 15-min SLA</li>
                <li>• On-site support available</li>
                <li>• Continuous deployment</li>
                <li>• Custom feature development</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 bg-blue-50 p-3 rounded border border-blue-200 text-xs">
            <strong>Licensing Model:</strong> Per-asset pricing starting at $5/asset/month (volume discounts available). 
            Includes all 10 AI agents, unlimited users, and standard support.
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
                <strong>Website:</strong> www.jetbuilder.io/eam-agentx
              </p>
            </div>
            <div className="text-right">
              <h4 className="font-bold text-blue-900 mb-2">Next Steps</h4>
              <p className="text-gray-700">
                📞 Schedule a demo<br/>
                📊 Request custom ROI analysis<br/>
                🔧 Start 30-day trial
              </p>
            </div>
          </div>
          <div className="mt-3 text-center text-xs text-gray-500">
            © 2024 JetBuilder. All rights reserved. EAM AgentX is a trademark of JetBuilder.
          </div>
        </div>

      </div>
    </div>
  )
}


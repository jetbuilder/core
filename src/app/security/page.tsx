'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Server, Eye, CheckCircle, FileCheck, AlertCircle, Key } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SecurityPage() {
  const certifications = [
    {
      name: 'SOC 2 Type II',
      icon: Shield,
      description: 'Independent audit of security controls and data protection practices',
      status: 'Ready'
    },
    {
      name: 'ISO 27001',
      icon: FileCheck,
      description: 'International standard for information security management systems',
      status: 'Ready'
    },
    {
      name: 'HIPAA Compliant',
      icon: Lock,
      description: 'Healthcare information privacy and security standards compliance',
      status: 'Ready'
    },
    {
      name: 'GDPR Compliant',
      icon: Eye,
      description: 'European Union data protection regulation compliance',
      status: 'Ready'
    }
  ]

  const securityFeatures = [
    {
      title: 'End-to-End Encryption',
      icon: Lock,
      features: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'Encrypted backups and archives',
        'Customer-managed encryption keys (CMEK) available'
      ]
    },
    {
      title: 'Access Controls',
      icon: Key,
      features: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Single sign-on (SSO) integration',
        'CAC/PIV card authentication for government'
      ]
    },
    {
      title: 'Infrastructure Security',
      icon: Server,
      features: [
        'Deployment on FedRAMP-authorized and FIPS 140-2 certified environments',
        'Private cloud and on-premise deployment',
        'Air-gapped environment support for classified systems',
        'Network segmentation and firewalls',
        'DDoS protection and mitigation'
      ]
    },
    {
      title: 'Monitoring & Auditing',
      icon: Eye,
      features: [
        '24/7 security operations center (SOC)',
        'Real-time threat detection',
        'Comprehensive audit logging',
        'Automated vulnerability scanning'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gunmetal-950 via-gunmetal-900 to-primary-950 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-tactical-900 px-4 py-2 rounded-sm mb-6 border border-tactical-700">
            <Shield className="w-5 h-5 text-tactical-400" />
            <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Security</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security designed for government agencies and regulated industries. 
            Built with data sovereignty, compliance, and threat protection at the core.
            We support deployment on certified environments including FedRAMP-authorized systems, FIPS 140-2 compliant infrastructure, and government-approved secure facilities.
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-8 text-center">
            Compliance Standards Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gunmetal-900 border-2 border-tactical-700 hover:border-tactical-600 transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-tactical-900 border border-tactical-700 rounded">
                          <Icon className="w-6 h-6 text-tactical-400" />
                        </div>
                        <span className="text-xs font-bold text-green-400 uppercase tracking-wide">
                          {cert.status}
                        </span>
                      </div>
                      <CardTitle className="text-white text-lg uppercase tracking-wide">
                        {cert.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm">{cert.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-8 text-center">
            Security Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gunmetal-900 border-2 border-tactical-700 h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-tactical-900 border border-tactical-700 rounded">
                          <Icon className="w-5 h-5 text-tactical-400" />
                        </div>
                        <CardTitle className="text-white text-xl uppercase tracking-wide">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* Data Protection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">
              Data Protection & Sovereignty
            </h3>
            <div className="text-gray-300 space-y-4">
              <p>
                <strong className="text-white">Data Control:</strong> Choose where your data resides and how it's processed. 
                Our deployment options are designed to keep data within your approved jurisdiction or security perimeter.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gunmetal-950 border border-tactical-700 rounded p-4">
                  <h4 className="text-tactical-400 font-bold mb-2 uppercase text-sm">On-Premise</h4>
                  <p className="text-sm">Deploy on your infrastructure with isolation controls. Air-gapped environments supported.</p>
                </div>
                <div className="bg-gunmetal-950 border border-tactical-700 rounded p-4">
                  <h4 className="text-tactical-400 font-bold mb-2 uppercase text-sm">Private Cloud</h4>
                  <p className="text-sm">Dedicated cloud infrastructure in your specified region with enhanced controls.</p>
                </div>
                <div className="bg-gunmetal-950 border border-tactical-700 rounded p-4">
                  <h4 className="text-tactical-400 font-bold mb-2 uppercase text-sm">Hybrid</h4>
                  <p className="text-sm">Flexible deployment combining benefits of cloud and on-premise infrastructure.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Incident Response */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">
              Incident Response & Business Continuity
            </h3>
            <div className="text-gray-300 space-y-3">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-tactical-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">24/7 Security Operations:</strong> Dedicated security team monitoring for threats and anomalies around the clock.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-tactical-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Incident Response Plan:</strong> Documented procedures for rapid response to security incidents with defined escalation paths.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-tactical-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Disaster Recovery:</strong> Automated backups, geo-redundancy, and tested recovery procedures ensuring business continuity.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-tactical-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Regular Testing:</strong> Quarterly disaster recovery drills and annual penetration testing by independent security firms.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compliance Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">
              Regulatory Compliance
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="text-white font-semibold mb-3">Government & Defense</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">FedRAMP authorization in progress</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">ITAR compliance for defense applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">CJIS compliance for law enforcement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">NIST 800-53 security controls</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Industry Standards</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">HIPAA for healthcare data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">GDPR for EU data protection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">CCPA for California privacy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">PCI DSS for payment data</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Audit & Transparency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">
              Audit & Transparency
            </h3>
            <div className="text-gray-300 space-y-4">
              <p>
                <strong className="text-white">Audit-Ready Architecture:</strong> Platform designed to meet SOC 2 Type II, ISO 27001, and other compliance frameworks with comprehensive security controls and processes.
              </p>
              <p>
                <strong className="text-white">Security Documentation:</strong> Enterprise customers receive access to security architecture documentation, penetration test results, and compliance readiness materials under NDA.
              </p>
              <p>
                <strong className="text-white">Continuous Monitoring:</strong> Automated security monitoring supports ongoing adherence to industry security standards and regulatory requirements.
              </p>
              <div className="bg-tactical-900/30 border border-tactical-700 rounded p-4 mt-4">
                <p className="text-sm">
                  <strong className="text-tactical-400">Request Security Documentation:</strong> Contact our security team at{' '}
                  <a href="mailto:security@jetbuilder.ai" className="text-tactical-400 hover:text-tactical-300 underline">
                    security@jetbuilder.ai
                  </a>{' '}
                  for detailed security documentation, audit reports, or to schedule a security briefing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vulnerability Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">
              Vulnerability Management
            </h3>
            <div className="text-gray-300 space-y-3">
              <p>
                <strong className="text-white">Proactive Security:</strong> Comprehensive vulnerability management program enables rapid identification and remediation of security issues.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gunmetal-950 border border-tactical-700 rounded p-4">
                  <h4 className="text-tactical-400 font-bold mb-2 uppercase text-sm">Scanning</h4>
                  <p className="text-sm">Automated weekly vulnerability scans of all systems and infrastructure.</p>
                </div>
                <div className="bg-gunmetal-950 border border-tactical-700 rounded p-4">
                  <h4 className="text-tactical-400 font-bold mb-2 uppercase text-sm">Patching</h4>
                  <p className="text-sm">Critical patches applied within 48 hours, high-priority within 7 days.</p>
                </div>
                <div className="bg-gunmetal-950 border border-tactical-700 rounded p-4">
                  <h4 className="text-tactical-400 font-bold mb-2 uppercase text-sm">Testing</h4>
                  <p className="text-sm">Annual penetration testing by independent security researchers.</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gunmetal-950 border border-tactical-700 rounded">
                <p className="text-sm">
                  <strong className="text-white">Responsible Disclosure:</strong> Security researchers can report vulnerabilities to{' '}
                  <a href="mailto:security@jetbuilder.ai" className="text-tactical-400 hover:text-tactical-300">security@jetbuilder.ai</a>. 
                  We maintain a coordinated disclosure program with appropriate recognition for responsible reporting.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-tactical-600 to-tactical-700 rounded-lg p-12 text-center text-white"
        >
          <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">
            Questions About Security?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our security team is available to discuss your specific requirements and provide detailed documentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="px-8 py-3 bg-white text-tactical-600 hover:bg-gray-100 font-bold uppercase rounded transition-colors">
              Schedule Security Briefing
            </a>
            <a href="mailto:security@jetbuilder.ai" className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-tactical-600 font-bold uppercase rounded transition-colors">
              Contact Security Team
            </a>
          </div>
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





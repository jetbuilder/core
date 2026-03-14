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
    <div className="min-h-screen bg-vscode-bg py-16 px-4 font-mono">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
            <Shield className="w-4 h-4 text-vscode-type" />
            <span className="text-xs font-bold text-vscode-comment">// security-compliance</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-vscode-function mb-6">
            security.enterpriseGrade()
          </h1>
          <p className="text-sm text-vscode-variable max-w-3xl mx-auto">
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
          <h2 className="text-2xl font-bold text-vscode-function mb-8 text-center">
            compliance.standardsSupport()
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
                  <Card className="bg-vscode-sidebar border border-vscode-border hover:border-vscode-type transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2 bg-vscode-bg border border-vscode-border rounded-sm">
                          <Icon className="w-5 h-5 text-vscode-type" />
                        </div>
                        <span className="text-xs font-bold text-green-400">
                          {cert.status}
                        </span>
                      </div>
                      <CardTitle className="text-vscode-function text-base">
                        {cert.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-vscode-variable text-xs">{cert.description}</p>
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
          <h2 className="text-2xl font-bold text-vscode-function mb-8 text-center">
            security.architecture()
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
                  <Card className="bg-vscode-sidebar border border-vscode-border h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-vscode-bg border border-vscode-border rounded-sm">
                          <Icon className="w-4 h-4 text-vscode-type" />
                        </div>
                        <CardTitle className="text-vscode-function text-base">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-3 h-3 text-vscode-type flex-shrink-0 mt-0.5" />
                            <span className="text-vscode-variable text-xs">{item}</span>
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
            className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8"
          >
            <h3 className="text-xl font-bold text-vscode-function mb-4">
              dataProtection.sovereignty()
            </h3>
            <div className="text-vscode-variable space-y-4 text-xs">
              <p>
                <strong className="text-vscode-type">Data Control:</strong> Choose where your data resides and how it's processed. 
                Our deployment options are designed to keep data within your approved jurisdiction or security perimeter.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-vscode-bg border border-vscode-border rounded-sm p-4">
                  <h4 className="text-vscode-type font-bold mb-2 text-xs">On-Premise</h4>
                  <p className="text-xs">Deploy on your infrastructure with isolation controls. Air-gapped environments supported.</p>
                </div>
                <div className="bg-vscode-bg border border-vscode-border rounded-sm p-4">
                  <h4 className="text-vscode-type font-bold mb-2 text-xs">Private Cloud</h4>
                  <p className="text-xs">Dedicated cloud infrastructure in your specified region with enhanced controls.</p>
                </div>
                <div className="bg-vscode-bg border border-vscode-border rounded-sm p-4">
                  <h4 className="text-vscode-type font-bold mb-2 text-xs">Hybrid</h4>
                  <p className="text-xs">Flexible deployment combining benefits of cloud and on-premise infrastructure.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Incident Response */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8"
          >
            <h3 className="text-xl font-bold text-vscode-function mb-4">
              incidentResponse.businessContinuity()
            </h3>
            <div className="text-vscode-variable space-y-3 text-xs">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-vscode-type">24/7 Security Operations:</strong> Dedicated security team monitoring for threats and anomalies around the clock.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-vscode-type">Incident Response Plan:</strong> Documented procedures for rapid response to security incidents with defined escalation paths.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-vscode-type">Disaster Recovery:</strong> Automated backups, geo-redundancy, and tested recovery procedures ensuring business continuity.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-vscode-type">Regular Testing:</strong> Quarterly disaster recovery drills and annual penetration testing by independent security firms.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compliance Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8"
          >
            <h3 className="text-xl font-bold text-vscode-function mb-4">
              regulatory.compliance()
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-vscode-variable">
              <div>
                <h4 className="text-vscode-type font-semibold mb-3 text-sm">Government & Defense</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-vscode-type flex-shrink-0 mt-0.5" />
                    <span className="text-xs">FedRAMP authorization in progress</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-vscode-type flex-shrink-0 mt-0.5" />
                    <span className="text-xs">ITAR compliance for defense applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-vscode-type flex-shrink-0 mt-0.5" />
                    <span className="text-xs">CJIS compliance for law enforcement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-vscode-type flex-shrink-0 mt-0.5" />
                    <span className="text-xs">NIST 800-53 security controls</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-vscode-type font-semibold mb-3 text-sm">Industry Standards</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-vscode-type flex-shrink-0 mt-0.5" />
                    <span className="text-xs">HIPAA for healthcare data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-vscode-type flex-shrink-0 mt-0.5" />
                    <span className="text-xs">GDPR for EU data protection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-vscode-type flex-shrink-0 mt-0.5" />
                    <span className="text-xs">CCPA for California privacy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-vscode-type flex-shrink-0 mt-0.5" />
                    <span className="text-xs">PCI DSS for payment data</span>
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
            className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8"
          >
            <h3 className="text-xl font-bold text-vscode-function mb-4">
              audit.transparency()
            </h3>
            <div className="text-vscode-variable space-y-4 text-xs">
              <p>
                <strong className="text-vscode-type">Audit-Ready Architecture:</strong> Platform designed to meet SOC 2 Type II, ISO 27001, and other compliance frameworks with comprehensive security controls and processes.
              </p>
              <p>
                <strong className="text-vscode-type">Security Documentation:</strong> Enterprise customers receive access to security architecture documentation, penetration test results, and compliance readiness materials under NDA.
              </p>
              <p>
                <strong className="text-vscode-type">Continuous Monitoring:</strong> Automated security monitoring supports ongoing adherence to industry security standards and regulatory requirements.
              </p>
              <div className="bg-vscode-bg border border-vscode-border rounded-sm p-4 mt-4">
                <p className="text-xs">
                  <strong className="text-vscode-type">Request Security Documentation:</strong> Contact our security team at{' '}
                  <a href="mailto:security@jetbuilder.ai" className="text-vscode-type hover:text-vscode-function underline">
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
            className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8"
          >
            <h3 className="text-xl font-bold text-vscode-function mb-4">
              vulnerability.management()
            </h3>
            <div className="text-vscode-variable space-y-3 text-xs">
              <p>
                <strong className="text-vscode-type">Proactive Security:</strong> Comprehensive vulnerability management program enables rapid identification and remediation of security issues.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="bg-vscode-bg border border-vscode-border rounded-sm p-4">
                  <h4 className="text-vscode-type font-bold mb-2 text-xs">Scanning</h4>
                  <p className="text-xs">Automated weekly vulnerability scans of all systems and infrastructure.</p>
                </div>
                <div className="bg-vscode-bg border border-vscode-border rounded-sm p-4">
                  <h4 className="text-vscode-type font-bold mb-2 text-xs">Patching</h4>
                  <p className="text-xs">Critical patches applied within 48 hours, high-priority within 7 days.</p>
                </div>
                <div className="bg-vscode-bg border border-vscode-border rounded-sm p-4">
                  <h4 className="text-vscode-type font-bold mb-2 text-xs">Testing</h4>
                  <p className="text-xs">Annual penetration testing by independent security researchers.</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-vscode-bg border border-vscode-border rounded-sm">
                <p className="text-xs">
                  <strong className="text-vscode-type">Responsible Disclosure:</strong> Security researchers can report vulnerabilities to{' '}
                  <a href="mailto:security@jetbuilder.ai" className="text-vscode-type hover:text-vscode-function">security@jetbuilder.ai</a>. 
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
          className="mt-16 bg-vscode-sidebar border-2 border-vscode-type rounded-sm p-12 text-center"
        >
          <Shield className="w-12 h-12 mx-auto mb-6 text-vscode-type" />
          <h2 className="text-2xl font-bold mb-4 text-vscode-function">
            security.questions()
          </h2>
          <p className="text-sm mb-8 max-w-2xl mx-auto text-vscode-variable">
            Our security team is available to discuss your specific requirements and provide detailed documentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="px-8 py-3 bg-vscode-keyword text-white hover:bg-vscode-selection font-mono text-xs font-bold rounded-sm transition-colors uppercase">
              schedule-security-briefing
            </a>
            <a href="mailto:security@jetbuilder.ai" className="px-8 py-3 border-2 border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono text-xs font-bold rounded-sm transition-colors uppercase">
              contact-security-team
            </a>
          </div>
        </motion.div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <a 
            href="/"
            className="text-xs text-vscode-comment hover:text-vscode-type transition-colors"
          >
            // back-to-home
          </a>
        </div>
      </div>
    </div>
  )
}





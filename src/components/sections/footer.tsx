import { Github, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'AI APIs', href: '/status' },
        { label: 'Real-Time', href: '/#product' },
        { label: 'Languages', href: '/#product' },
        { label: 'Features', href: '/#product' },
        { label: 'Compare', href: '/compare' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'Enterprise', href: '/#enterprise' },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { label: 'Medical & Healthcare', href: '/use-cases#medical-healthcare' },
        { label: 'Contact Center Solutions', href: '/use-cases#contact-center' },
        { label: 'AI Voice Agents', href: '/use-cases#ai-voice-agents' },
        { label: 'Media & Event Captioning', href: '/use-cases#media-captioning' },
        { label: 'Speech Analytics', href: '/use-cases#speech-analytics' },
        { label: 'Meeting Assistants', href: '/use-cases#meeting-assistants' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/#developers' },
        { label: 'Blog', href: '/contact' },
        { label: 'Case Studies', href: '/#case-studies' },
        { label: 'Solutions', href: '/#solutions' },
        { label: 'Service Status', href: '/status' },
        { label: 'Security', href: '/security' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Get Started', href: '/get-clearance' },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 pb-8 border-t border-gray-800">
          <div className="max-w-5xl mx-auto space-y-3">
            <div className="text-xs text-gray-500 leading-relaxed">
              <p className="mb-3">
                <strong className="text-gray-400">Important Legal Notice:</strong> Information on this website is for informational purposes only and does not constitute legal, regulatory, compliance, or professional advice. Sovereign AI Platform features and infrastructure are designed to support compliance efforts but do not guarantee regulatory compliance. Organizations are solely responsible for their own compliance programs, security controls, and regulatory obligations. Final compliance with PIPEDA, HIPAA, SOX, GLBA, and other regulations remains the customer's responsibility.
              </p>
              <p className="mb-3">
                Performance metrics, cost savings calculations, and case studies represent specific customer outcomes achieved under particular circumstances and are not typical or guaranteed results. Individual outcomes vary significantly based on implementation approach, data quality, transaction volumes, use case specifics, infrastructure, and other factors. All pricing, features, and savings calculations are illustrative examples and estimates only—not guarantees of performance, savings, or results.
              </p>
              <p>
                AI and machine learning systems are probabilistic and may produce errors, inaccuracies, or unexpected outputs. Human review and oversight are required for all business-critical decisions. All services are subject to Master Services Agreement and applicable terms.{' '}
                <a href="/terms" className="text-tactical-400 hover:underline font-medium">
                  View Terms of Service
                </a>
                {' '}for complete legal terms, limitations of liability, and disclaimers. Contact sales for binding quotes and Service Level Agreements.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm">
              Copyright &copy; {new Date().getFullYear()} Sovereign AI Platform by JetBuilder. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


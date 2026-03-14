'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { governmentOfferings } from '@/data/government'
import { Building, Building2, Heart, Scale, Users, Bus, Shield, GraduationCap, AlertTriangle, TreePine, MapPin, Headphones, Radio, Linkedin, Link2, MessageCircle, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/button'
import DemoRequestModal from '@/components/ui/demo-request-modal'

const iconMap: Record<string, any> = {
  Building,
  Building2,
  Heart,
  Scale,
  Users,
  Bus,
  Shield,
  GraduationCap,
  AlertTriangle,
  TreePine,
  MapPin,
  Headphones,
  Radio,
}

export default function Government() {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [selectedSolution, setSelectedSolution] = useState<string>('')

  const handleLearnMore = (offeringTitle: string) => {
    window.location.href = '/contact'
  }

  const handleScheduleConsultation = () => {
    window.location.href = '/contact'
  }

  const handleShareLinkedIn = async (offering: any) => {
    const url = `${window.location.origin}${window.location.pathname}#government-${offering.id}`
    const features = offering.features.slice(0, 3).map((f: string) => `✓ ${f}`).join('\n')
    const compliance = offering.compliance.slice(0, 3).join(', ')
    const text = `🚀 ${offering.title} | Sovereign AI Platform

${offering.description}

💡 Key Capabilities:
${features}

✅ Compliance Support: ${compliance}

🔒 Complete data sovereignty with on-premises AI deployment designed for ${offering.agency}.

Learn more: ${url}

#GovernmentTech #PublicSector #AI #ArtificialIntelligence #DataSovereignty #Compliance #GovTech #DigitalTransformation #CyberSecurity #CloudComputing #DataPrivacy #Innovation #Technology #Canada #SmartGovernment`
    
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
    
    const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true`
    window.open(linkedInUrl, '_blank', 'width=800,height=600')
  }

  const handleCopyLink = async (offering: any) => {
    const url = `${window.location.origin}${window.location.pathname}#government-${offering.id}`
    const features = offering.features.slice(0, 3).map((f: string) => `• ${f}`).join('\n')
    const compliance = offering.compliance.slice(0, 3).join(', ')
    const fullText = `${offering.title}\n\n${offering.description}\n\nKey Capabilities:\n${features}\n\nCompliance: ${compliance}\n\n${url}`
    try {
      await navigator.clipboard.writeText(fullText)
      setCopiedId(offering.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleShareWhatsApp = (offering: any) => {
    const url = `${window.location.origin}${window.location.pathname}#government-${offering.id}`
    const features = offering.features.slice(0, 3).map((f: string) => `• ${f}`).join('\n')
    const compliance = offering.compliance.slice(0, 3).join(', ')
    const text = `${offering.title}\n\n${offering.description}\n\nKey Capabilities:\n${features}\n\nCompliance: ${compliance}\n\n${url}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="government" className="section-padding bg-gunmetal-950">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-tactical-900 px-4 py-2 rounded-sm mb-6 border border-tactical-700">
              <Building className="w-5 h-5 text-tactical-400" />
              <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Government Solutions</span>
            </div>
          </motion.div>
          
          <motion.h2
            className="heading-lg text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            AI Infrastructure Solutions to Support Government Operations
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            AI intelligence solutions designed for federal, provincial, territorial, and municipal governments across Canada. Process documents, voice, video, databases, and business systems with complete data sovereignty. Privacy-compliant, supporting Canadian citizens nationwide.
          </motion.p>
        </div>

        {/* Government Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {governmentOfferings.map((offering, index) => {
            const Icon = iconMap[offering.icon]
            return (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card id={`government-${offering.id}`} className="h-full bg-gunmetal-900 hover:bg-gunmetal-800 transition-all duration-300 group cursor-pointer border-2 border-gunmetal-700 hover:border-tactical-700 scroll-mt-24">
                  <CardHeader>
                    {/* Icon and Agency */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gunmetal-800 border border-tactical-700 rounded-sm group-hover:bg-tactical-900 transition-colors">
                        <Icon className="w-6 h-6 text-tactical-400 group-hover:text-tactical-300 transition-colors" />
                      </div>
                      <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider">
                        {offering.agency}
                      </div>
                    </div>

                    {/* Title */}
                    <CardTitle className="text-white group-hover:text-tactical-400 transition-colors text-lg">
                      {offering.title}
                    </CardTitle>

                    {/* Description */}
                    <CardDescription className="text-gray-300 mt-3 text-sm">
                      {offering.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider mb-3">
                        Key Capabilities
                      </div>
                      {offering.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Shield className="w-3 h-3 text-tactical-500 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Compliance Badges */}
                    <div className="pt-4 border-t border-gunmetal-700">
                      <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider mb-2">
                        Compliance Support*
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {offering.compliance.map((cert, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 bg-gunmetal-800 border border-tactical-700 rounded text-xs font-bold text-tactical-400"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() => handleLearnMore(offering.title)}
                        className="text-xs font-bold text-tactical-400 hover:text-tactical-300 uppercase tracking-wide inline-flex items-center group"
                      >
                        Learn More
                        <svg
                          className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                      <div className="relative group/deploy">
                        <button
                          disabled
                          className="px-3 py-1.5 bg-gunmetal-700 text-gray-500 text-xs font-bold uppercase tracking-wide rounded cursor-not-allowed opacity-60"
                        >
                          Deploy
                        </button>
                        <div className="absolute bottom-full left-0 mb-2 hidden group-hover/deploy:block w-48 bg-gunmetal-800 text-white text-xs p-2 rounded shadow-lg border border-tactical-700 z-10">
                          Will be active after contact with our deployment team
                        </div>
                      </div>
                      <button
                        onClick={() => window.location.href = '/contact'}
                        className="px-3 py-1.5 bg-tactical-600 hover:bg-tactical-700 text-white text-xs font-bold uppercase tracking-wide rounded transition-colors"
                      >
                        Request Demo
                      </button>
                    </div>

                    {/* Share Buttons */}
                    <div className="mt-4 pt-4 border-t border-gunmetal-700">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 uppercase tracking-wide mr-1">Share:</span>
                        <button
                          onClick={() => handleShareLinkedIn(offering)}
                          className="p-1.5 bg-[#0A66C2] hover:bg-[#004182] text-white rounded transition-colors"
                          title="Share on LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleCopyLink(offering)}
                          className="p-1.5 bg-gunmetal-700 hover:bg-gunmetal-600 text-gray-300 rounded transition-colors"
                          title="Copy link"
                        >
                          {copiedId === offering.id ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Link2 className="w-3.5 h-3.5" />}
                        </button>
                        <button
                          onClick={() => handleShareWhatsApp(offering)}
                          className="p-1.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded transition-colors"
                          title="Share on WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Canadian Government Features */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gunmetal-900 to-gunmetal-800 border-2 border-tactical-700 rounded-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gunmetal-800 border-2 border-tactical-700 rounded-sm mb-4">
                  <Shield className="w-8 h-8 text-tactical-400" />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-2">
                  Canadian Privacy Laws
                </h4>
                <p className="text-sm text-gray-300">
                  Designed to support federal (Privacy Act, PIPEDA) and provincial privacy legislation (FOIPPA, FIPPA, PHIPA) with comprehensive audit logging.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gunmetal-800 border-2 border-tactical-700 rounded-sm mb-4">
                  <Building className="w-8 h-8 text-tactical-400" />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-2">
                  Government Cloud Ready
                </h4>
                <p className="text-sm text-gray-300">
                  Compatible with Government of Canada cloud infrastructure and provincial government cloud standards across all jurisdictions.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gunmetal-800 border-2 border-tactical-700 rounded-sm mb-4">
                  <Users className="w-8 h-8 text-tactical-400" />
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-2">
                  Bilingual & Multi-Language
                </h4>
                <p className="text-sm text-gray-300">
                  Serve all Canadians with official bilingual support (English and French) plus additional languages for diverse communities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Government Disclaimer */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gunmetal-900 border-2 border-tactical-700 rounded-sm p-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
              Government Compliance Disclaimer
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <strong className="text-white">Canadian Compliance Support:</strong> Sovereign AI Platform provides infrastructure and tools designed to support compliance with federal and provincial privacy legislation including the Privacy Act, PIPEDA, FOIPPA, FIPPA, PHIPA, and other Canadian government standards. However, Sovereign AI Platform does not guarantee compliance with any specific regulation. Final compliance is the responsibility of the implementing government agency and depends on proper configuration, policies, and use.
              </p>
              <p>
                <strong className="text-white">Agency Responsibility:</strong> Government agencies at all levels (federal, provincial, territorial, municipal) are solely responsible for: configuration to meet specific compliance requirements, implementing security controls and policies, conducting required audits, maintaining compliance documentation, and ensuring all regulatory obligations are met in their jurisdiction.
              </p>
              <p>
                <strong className="text-white">Procurement:</strong> Sovereign AI Platform solutions may be procured through federal and provincial government procurement processes. Contact our government team for information on Public Services and Procurement Canada (PSPC) vehicles, provincial standing offers, and municipal procurement options.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-tactical-900 to-tactical-800 border-2 border-tactical-700 rounded-sm p-8">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
              Serve Canadians Better
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Schedule a consultation with our government team. We'll design a deployment plan that meets federal, provincial, or municipal standards and your agency's specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-tactical-900 hover:bg-gray-100 font-bold uppercase" onClick={handleScheduleConsultation}>
                Schedule Government Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold uppercase">
                Download Government Brief
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        solution={selectedSolution}
      />
    </section>
  )
}


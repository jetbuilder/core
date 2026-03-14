'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Lock, Server, AlertCircle, Mail, Phone, Building2, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Button from '@/components/ui/button'

interface ClearanceFormData {
  // Contact Information
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  
  // Organization
  organizationName: string
  organizationType: string
  
  // Security & Access
  accessTier: string
  securityClearance: string
  
  // Use Case
  primaryUseCase: string
  timeline: string
  additionalNotes: string
}

export default function GetClearancePage() {
  const [selectedTier, setSelectedTier] = useState('')
  const [formData, setFormData] = useState<ClearanceFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    organizationName: '',
    organizationType: '',
    accessTier: '',
    securityClearance: '',
    primaryUseCase: '',
    timeline: '',
    additionalNotes: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const accessTiers = [
    {
      id: 'starter',
      name: 'Enterprise Starter',
      icon: Shield,
      description: 'Essential features for mid-size organizations',
      features: [
        'Voice transcription & analysis',
        'Basic AI intelligence extraction',
        'Standard security controls',
        'Business hours support',
        'On-premises deployment'
      ],
      clearanceRequired: 'Suitable for commercial operations'
    },
    {
      id: 'professional',
      name: 'Enterprise Professional',
      icon: Lock,
      description: 'Full platform capabilities with enhanced security',
      features: [
        'All Starter features',
        'Advanced AI analytics',
        'Private cloud deployment',
        'Priority 24/7 support',
        'Custom integrations',
        'PIPEDA, HIPAA, SOX compliance'
      ],
      clearanceRequired: 'Most popular for Canadian & US enterprises',
      popular: true
    },
    {
      id: 'unlimited',
      name: 'Enterprise Unlimited',
      icon: Server,
      description: 'Maximum capabilities for large-scale operations',
      features: [
        'All Professional features',
        'Air-gapped deployment option',
        'Multi-region infrastructure',
        'Dedicated engineering support',
        'Custom security controls',
        'Unlimited transaction processing'
      ],
      clearanceRequired: 'For large enterprises & government'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId)
    setFormData(prev => ({ ...prev, accessTier: tierId }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/clearance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
      } else {
        alert('Failed to submit request. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gunmetal-950 via-gunmetal-900 to-primary-950 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full mx-auto bg-gunmetal-900 border-2 border-tactical-600 rounded-lg p-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-tactical-900 border-2 border-tactical-600 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-tactical-400" />
          </div>
          <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-4">
            Request Received
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Thank you, {formData.firstName}! Your enterprise access request for {formData.organizationName} has been submitted.
          </p>
          <div className="bg-gunmetal-950 border border-tactical-700 rounded-lg p-6 mb-6 text-left">
            <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-4">What Happens Next</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-tactical-900 border border-tactical-600 rounded-full flex items-center justify-center text-tactical-400 font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="text-white font-semibold">Verification (24-48 hours)</p>
                  <p className="text-gray-400 text-sm">We verify your organization and requirements</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-tactical-900 border border-tactical-600 rounded-full flex items-center justify-center text-tactical-400 font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="text-white font-semibold">Platform Consultation</p>
                  <p className="text-gray-400 text-sm">Schedule consultation call and platform demonstration</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-tactical-900 border border-tactical-600 rounded-full flex items-center justify-center text-tactical-400 font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="text-white font-semibold">Access Granted</p>
                  <p className="text-gray-400 text-sm">Receive credentials and technical documentation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = '/'}
              className="bg-tactical-600 hover:bg-tactical-700"
            >
              Return to Home
            </Button>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  jobTitle: '',
                  organizationName: '',
                  organizationType: '',
                  accessTier: '',
                  securityClearance: '',
                  primaryUseCase: '',
                  timeline: '',
                  additionalNotes: ''
                })
                setSelectedTier('')
              }}
              variant="outline"
              className="border-tactical-600 text-tactical-400"
            >
              Submit Another Request
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gunmetal-950 via-gunmetal-900 to-primary-950 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-tactical-900 px-4 py-2 rounded-sm mb-6 border border-tactical-700">
            <Shield className="w-5 h-5 text-tactical-400" />
            <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Access Request</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
            Get Started with Sovereign AI Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Request enterprise access to Sovereign AI Platform—process intelligence from documents, voice, video, databases, and business systems. Built for Canadian and US organizations requiring complete data sovereignty.
          </p>
        </motion.div>

        {/* Eligibility Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-4">Who Can Apply</h2>
          <p className="text-gray-300 mb-4">
            Sovereign AI Platform is available to qualified Canadian and US organizations including:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-tactical-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Insurance companies</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-tactical-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Banks & financial services</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-tactical-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Telecommunications providers</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-tactical-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Healthcare institutions</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-tactical-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Government agencies</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-tactical-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">Large enterprises</span>
            </div>
          </div>
        </motion.div>

        {/* Access Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-8 text-center">
            Select Access Level
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {accessTiers.map((tier, index) => {
              const Icon = tier.icon
              const isSelected = selectedTier === tier.id
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card
                    className={`h-full cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'bg-gunmetal-900 border-2 border-tactical-600 shadow-xl scale-105'
                        : 'bg-gunmetal-900 border-2 border-tactical-700 hover:border-tactical-600'
                    }`}
                    onClick={() => handleTierSelect(tier.id)}
                  >
                    <CardHeader>
                      {tier.popular && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-tactical-600 to-tactical-700 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                          Popular
                        </div>
                      )}
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-3 bg-tactical-900 border border-tactical-700 rounded">
                          <Icon className="w-6 h-6 text-tactical-400" />
                        </div>
                        {isSelected && (
                          <CheckCircle className="w-6 h-6 text-tactical-400" />
                        )}
                      </div>
                      <CardTitle className="text-white text-xl uppercase tracking-wide mb-2">
                        {tier.name}
                      </CardTitle>
                      <p className="text-gray-400 text-sm mb-3">{tier.description}</p>
                      <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider">
                        Requires: {tier.clearanceRequired}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{feature}</span>
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

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-8 text-center">
            Clearance Application
          </h2>
          
          {!selectedTier && (
            <div className="bg-tactical-900/30 border border-tactical-700 rounded-lg p-6 mb-8 text-center">
              <AlertCircle className="w-8 h-8 text-tactical-400 mx-auto mb-3" />
              <p className="text-gray-300">Please select an access level above to continue with your application.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-tactical-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">Contact Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  />
                </div>
              </div>
            </div>

            {/* Organization Information */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="w-5 h-5 text-tactical-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">Organization</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    required
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Organization Type *
                  </label>
                  <select
                    name="organizationType"
                    required
                    value={formData.organizationType}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  >
                    <option value="">Select type</option>
                    <option value="federal-agency">Federal Agency</option>
                    <option value="state-agency">State Agency</option>
                    <option value="local-government">Local Government</option>
                    <option value="law-enforcement">Law Enforcement</option>
                    <option value="regulatory-body">Regulatory Body</option>
                    <option value="healthcare">Healthcare Institution</option>
                    <option value="cleared-contractor">Cleared Contractor</option>
                    <option value="enterprise">Enterprise Organization</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Security Clearance Level
                  </label>
                  <select
                    name="securityClearance"
                    value={formData.securityClearance}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  >
                    <option value="">Select if applicable</option>
                    <option value="none">No clearance</option>
                    <option value="public-trust">Public Trust</option>
                    <option value="confidential">Confidential</option>
                    <option value="secret">Secret</option>
                    <option value="top-secret">Top Secret</option>
                    <option value="ts-sci">TS/SCI</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Use Case & Timeline */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-5 h-5 text-tactical-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">Requirements</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Primary Use Case *
                  </label>
                  <select
                    name="primaryUseCase"
                    required
                    value={formData.primaryUseCase}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  >
                    <option value="">Select use case</option>
                    <option value="voice-intelligence">Voice Intelligence</option>
                    <option value="law-enforcement">Law Enforcement Operations</option>
                    <option value="emergency-services">Emergency Services</option>
                    <option value="healthcare">Healthcare Analysis</option>
                    <option value="compliance">Regulatory Compliance</option>
                    <option value="contact-center">Contact Center Analytics</option>
                    <option value="meeting-intelligence">Meeting Intelligence</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Deployment Timeline *
                  </label>
                  <select
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (0-30 days)</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="research">Research phase</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any specific requirements or questions..."
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting || !selectedTier}
                className="bg-tactical-600 hover:bg-tactical-700 text-white font-bold uppercase tracking-wide px-12 py-4 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  'Submit Clearance Request'
                )}
              </Button>
              {!selectedTier && (
                <p className="text-sm text-gray-500 mt-3">Please select an access level to submit</p>
              )}
            </div>
          </form>
        </motion.div>

        {/* What You'll Get */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-tactical-900/30 border-2 border-tactical-700 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-6 text-center">
            What You'll Receive
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-tactical-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Platform Demonstration</h4>
                <p className="text-gray-400 text-sm">Secure briefing and live platform walkthrough</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-tactical-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Technical Documentation</h4>
                <p className="text-gray-400 text-sm">Complete API docs and integration guides</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-tactical-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Security Briefing</h4>
                <p className="text-gray-400 text-sm">Compliance and security architecture overview</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-tactical-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Deployment Consultation</h4>
                <p className="text-gray-400 text-sm">Custom deployment planning with our engineers</p>
              </div>
            </div>
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




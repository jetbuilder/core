'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Mail, Phone, MapPin, Send, CheckCircle, User, Briefcase, Globe, MessageSquare, Target, Users } from 'lucide-react'
import Button from '@/components/ui/button'

interface ContactFormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  jobTitle: string
  
  // Company Information
  companyName: string
  companySize: string
  industry: string
  country: string
  website: string
  
  // Project Information
  interestedIn: string[]
  projectTimeline: string
  budget: string
  currentChallenges: string
  specificRequirements: string
  
  // Additional Information
  howDidYouHear: string
  preferredContactMethod: string
  preferredContactTime: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    companyName: '',
    companySize: '',
    industry: '',
    country: '',
    website: '',
    interestedIn: [],
    projectTimeline: '',
    budget: '',
    currentChallenges: '',
    specificRequirements: '',
    howDidYouHear: '',
    preferredContactMethod: 'email',
    preferredContactTime: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(value)
        ? prev.interestedIn.filter(item => item !== value)
        : [...prev.interestedIn, value]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
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
        alert('Failed to submit form. Please try again.')
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
          className="max-w-2xl w-full mx-auto bg-vscode-sidebar border-2 border-tactical-600 rounded-sm p-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-tactical-900 border-2 border-tactical-600 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-vscode-type" />
          </div>
          <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-4">
            Thank You, {formData.firstName}!
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            We've received your information and our team will review your requirements.
          </p>
          <div className="bg-vscode-bg border border-tactical-700 rounded-sm p-6 mb-6">
            <p className="text-gray-300 mb-4">
              A JetBuilder solutions architect will contact you within <span className="text-vscode-type font-bold">24 hours</span> via {formData.preferredContactMethod} to discuss:
            </p>
            <ul className="text-left text-gray-300 space-y-2 max-w-md mx-auto">
              <li className="flex items-start space-x-2">
                <span className="text-tactical-500 mt-1">▸</span>
                <span>Your specific requirements for {formData.companyName}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-tactical-500 mt-1">▸</span>
                <span>Custom deployment options for your infrastructure</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-tactical-500 mt-1">▸</span>
                <span>Security and compliance for your industry</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-tactical-500 mt-1">▸</span>
                <span>Proof of concept and demonstration</span>
              </li>
            </ul>
          </div>
          <Button
            onClick={() => window.location.href = '/'}
            className="bg-tactical-600 hover:bg-tactical-700"
          >
            Return to Home
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gunmetal-950 via-gunmetal-900 to-primary-950">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-tactical-900 px-4 py-2 rounded-sm mb-4 border border-tactical-700">
              <Mail className="w-5 h-5 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-type uppercase tracking-wider">Contact Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
              Let's Build Your Solution
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tell us about your requirements and our solutions architects will design a custom deployment for your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-vscode-sidebar border-2 border-tactical-700 rounded-sm p-6 sticky top-6">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-6">
                  Why Contact Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-tactical-900 border border-tactical-700 rounded flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-vscode-type" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase">Custom Solutions</h4>
                      <p className="text-xs text-gray-400">Tailored to your exact requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-tactical-900 border border-tactical-700 rounded flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-vscode-type" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase">Expert Team</h4>
                      <p className="text-xs text-gray-400">Direct access to solutions architects</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-tactical-900 border border-tactical-700 rounded flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-vscode-type" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase">24-Hour Response</h4>
                      <p className="text-xs text-gray-400">Fast, professional follow-up</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-vscode-sidebar border-2 border-tactical-700 rounded-sm p-8">
                {/* Personal Information */}
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <User className="w-5 h-5 text-vscode-type" />
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">Personal Information</h3>
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
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
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
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
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
                        placeholder="e.g., CTO, Security Director, IT Manager"
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Building2 className="w-5 h-5 text-vscode-type" />
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">Company Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        Company Size *
                      </label>
                      <select
                        name="companySize"
                        required
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      >
                        <option value="">Select size</option>
                        <option value="1-50">1-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1,000 employees</option>
                        <option value="1001-5000">1,001-5,000 employees</option>
                        <option value="5001+">5,001+ employees</option>
                        <option value="government">Government Agency</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        Industry *
                      </label>
                      <select
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      >
                        <option value="">Select industry</option>
                        <option value="defense">Defense & Military</option>
                        <option value="law-enforcement">Law Enforcement</option>
                        <option value="intelligence">Intelligence Services</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="banking">Banking & Finance</option>
                        <option value="insurance">Insurance</option>
                        <option value="legal">Legal Services</option>
                        <option value="energy">Energy & Utilities</option>
                        <option value="pharmaceutical">Pharmaceutical</option>
                        <option value="telecom">Telecommunications</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="government">Government & Public Sector</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        Company Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://"
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Briefcase className="w-5 h-5 text-vscode-type" />
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">Project Information</h3>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wide">
                      Solutions Interested In * (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Voice Intelligence & Transcription',
                        'Real-Time Communications Analysis',
                        'Multi-Modal Intelligence',
                        'Threat Detection & Analysis',
                        'Healthcare Intelligence',
                        'Banking Intelligence',
                        'Insurance Intelligence',
                        'Legal Intelligence',
                        'Government Intelligence',
                        'Custom Solution'
                      ].map((solution) => (
                        <label key={solution} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.interestedIn.includes(solution)}
                            onChange={() => handleCheckboxChange(solution)}
                            className="w-4 h-4 bg-vscode-bg border-vscode-border text-tactical-600 focus:ring-tactical-600 rounded"
                          />
                          <span className="text-sm text-gray-300">{solution}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        Project Timeline *
                      </label>
                      <select
                        name="projectTimeline"
                        required
                        value={formData.projectTimeline}
                        onChange={handleInputChange}
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (0-1 month)</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="12+-months">12+ months</option>
                        <option value="research">Research phase</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        Budget Range *
                      </label>
                      <select
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      >
                        <option value="">Select range</option>
                        <option value="under-100k">Under $100K</option>
                        <option value="100k-250k">$100K - $250K</option>
                        <option value="250k-500k">$250K - $500K</option>
                        <option value="500k-1m">$500K - $1M</option>
                        <option value="1m-5m">$1M - $5M</option>
                        <option value="5m+">$5M+</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                      Current Challenges *
                    </label>
                    <textarea
                      name="currentChallenges"
                      required
                      value={formData.currentChallenges}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe the main challenges you're facing that you'd like our solution to address..."
                      className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                      Specific Requirements
                    </label>
                    <textarea
                      name="specificRequirements"
                      value={formData.specificRequirements}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Any specific technical requirements, compliance needs, integration requirements, etc..."
                      className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <MessageSquare className="w-5 h-5 text-vscode-type" />
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">Additional Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        How Did You Hear About Us?
                      </label>
                      <select
                        name="howDidYouHear"
                        value={formData.howDidYouHear}
                        onChange={handleInputChange}
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      >
                        <option value="">Select source</option>
                        <option value="web-search">Web Search</option>
                        <option value="referral">Referral</option>
                        <option value="conference">Conference/Event</option>
                        <option value="social-media">Social Media</option>
                        <option value="industry-publication">Industry Publication</option>
                        <option value="partner">Partner/Reseller</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        Preferred Contact Method *
                      </label>
                      <select
                        name="preferredContactMethod"
                        required
                        value={formData.preferredContactMethod}
                        onChange={handleInputChange}
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="video-call">Video Call</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                        Preferred Contact Time
                      </label>
                      <input
                        type="text"
                        name="preferredContactTime"
                        value={formData.preferredContactTime}
                        onChange={handleInputChange}
                        placeholder="e.g., Weekdays 9am-5pm EST"
                        className="w-full bg-vscode-bg text-white border border-vscode-border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="mb-6 p-4 bg-vscode-bg border border-tactical-700 rounded">
                  <p className="text-xs text-gray-400">
                    By submitting this form, you agree to be contacted by JetBuilder regarding your inquiry. 
                    Your information will be handled in accordance with our privacy policy and will never be shared 
                    with third parties. All communications are secured and confidential.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-tactical-600 hover:bg-tactical-700 text-white font-bold uppercase tracking-wide px-12 py-4 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="inline-block mr-2 w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}


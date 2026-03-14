'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Mail, Send, CheckCircle, User, Briefcase, MessageSquare, Target, Users } from 'lucide-react'

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
      <div className="min-h-screen bg-[#0d1117] py-12 px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full mx-auto bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0d1117] border border-[#30363d] rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Thank you, {formData.firstName}!
          </h2>
          <p className="text-gray-400 mb-6">
            We've received your information and our team will review your requirements.
          </p>
          <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-4 text-sm">
              A JetBuilder solutions architect will contact you within <span className="text-white font-semibold">24 hours</span> via {formData.preferredContactMethod} to discuss:
            </p>
            <ul className="text-left text-gray-400 space-y-2 max-w-md mx-auto text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Your specific requirements for {formData.companyName}</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Custom deployment options for your infrastructure</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Security and compliance for your industry</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Proof of concept and demonstration</span>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Return home
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0d1117] pt-24">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
            <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-6">
                Why contact us?
              </h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#0d1117] border border-[#30363d] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Custom Solutions</h4>
                    <p className="text-sm text-gray-500">Tailored to your exact requirements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#0d1117] border border-[#30363d] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Expert Team</h4>
                    <p className="text-sm text-gray-500">Direct access to solutions architects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#0d1117] border border-[#30363d] rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Fast Response</h4>
                    <p className="text-sm text-gray-500">24-hour professional follow-up</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-[#30363d]">
                <h4 className="text-sm font-semibold text-white mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <a href="mailto:sales@jetbuilder.io" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                    <Mail className="w-4 h-4" />
                    sales@jetbuilder.io
                  </a>
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
            <form onSubmit={handleSubmit} className="bg-[#161b22] border border-[#30363d] rounded-2xl p-6 md:p-8">
              {/* Personal Information */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <User className="w-5 h-5 text-gray-400" />
                  <h3 className="text-lg font-semibold text-white">Personal Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      required
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      placeholder="e.g., CTO, Security Director, IT Manager"
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-5 h-5 text-gray-400" />
                  <h3 className="text-lg font-semibold text-white">Company Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Size *
                    </label>
                    <select
                      name="companySize"
                      required
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="https://"
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                  <h3 className="text-lg font-semibold text-white">Project Information</h3>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Solutions Interested In * (select all that apply)
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
                      <label key={solution} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.interestedIn.includes(solution)}
                          onChange={() => handleCheckboxChange(solution)}
                          className="w-4 h-4 bg-[#0d1117] border-[#30363d] text-white focus:ring-white/20 rounded"
                        />
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{solution}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Timeline *
                    </label>
                    <select
                      name="projectTimeline"
                      required
                      value={formData.projectTimeline}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
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
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Challenges *
                  </label>
                  <textarea
                    name="currentChallenges"
                    required
                    value={formData.currentChallenges}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe the main challenges you're facing that you'd like our solution to address..."
                    className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors placeholder:text-gray-600 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Specific Requirements
                  </label>
                  <textarea
                    name="specificRequirements"
                    value={formData.specificRequirements}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any specific technical requirements, compliance needs, integration requirements, etc..."
                    className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors placeholder:text-gray-600 resize-none"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                  <h3 className="text-lg font-semibold text-white">Additional Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      How Did You Hear About Us?
                    </label>
                    <select
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Contact Method *
                    </label>
                    <select
                      name="preferredContactMethod"
                      required
                      value={formData.preferredContactMethod}
                      onChange={handleInputChange}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="video-call">Video Call</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Contact Time
                    </label>
                    <input
                      type="text"
                      name="preferredContactTime"
                      value={formData.preferredContactTime}
                      onChange={handleInputChange}
                      placeholder="e.g., Weekdays 9am-5pm EST"
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/40 transition-colors placeholder:text-gray-600"
                    />
                  </div>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="mb-6 p-4 bg-[#0d1117] border border-[#30363d] rounded-lg">
                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to be contacted by JetBuilder regarding your inquiry.
                  Your information will be handled in accordance with our privacy policy and will never be shared
                  with third parties. All communications are secured and confidential.
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Submit Request
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

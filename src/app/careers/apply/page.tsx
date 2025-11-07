'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Upload, FileText, User, Briefcase, Send, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/button'

interface ApplicationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  linkedIn: string
  portfolio: string
  jobId: string
  jobTitle: string
  resume: File | null
  coverLetter: string
  currentCompany: string
  yearsExperience: string
  expectedSalary: string
  availability: string
  securityClearance: string
  willingToRelocate: string
  howHeard: string
  additionalInfo: string
}

function SuccessScreen({ formData, fileName }: { formData: ApplicationData; fileName: string }) {
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
          Application Submitted!
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          Thank you for applying to the <span className="text-tactical-400 font-semibold">{formData.jobTitle}</span> position.
        </p>
        <div className="bg-gunmetal-950 border border-tactical-700 rounded-lg p-6 mb-6">
          <p className="text-gray-300 mb-4">
            Our talent acquisition team will review your application and contact you within <span className="text-tactical-400 font-bold">5-7 business days</span>.
          </p>
          <ul className="text-left text-gray-300 space-y-2 max-w-md mx-auto">
            <li className="flex items-start space-x-2">
              <span className="text-tactical-500 mt-1">▸</span>
              <span>Application received for: {formData.jobTitle}</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-tactical-500 mt-1">▸</span>
              <span>Resume: {fileName}</span>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 justify-center">
          <a href="/careers">
            <Button className="bg-tactical-600 hover:bg-tactical-700">
              View More Positions
            </Button>
          </a>
          <a href="/">
            <Button variant="outline">
              Return to Home
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

function JobApplicationForm() {
  const searchParams = useSearchParams()
  const jobId = searchParams.get('jobId') || ''
  const jobTitle = searchParams.get('jobTitle') || 'Position at JetBuilder'

  const [formData, setFormData] = useState<ApplicationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    linkedIn: '',
    portfolio: '',
    jobId: jobId,
    jobTitle: jobTitle,
    resume: null,
    coverLetter: '',
    currentCompany: '',
    yearsExperience: '',
    expectedSalary: '',
    availability: '',
    securityClearance: '',
    willingToRelocate: '',
    howHeard: '',
    additionalInfo: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState<string>('')

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      jobId: jobId,
      jobTitle: jobTitle
    }))
  }, [jobId, jobTitle])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setFormData(prev => ({ ...prev, resume: file }))
      setFileName(file.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          resume: formData.resume ? formData.resume.name : 'No resume attached'
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
      } else {
        alert('Failed to submit application. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return <SuccessScreen formData={formData} fileName={fileName} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gunmetal-950 via-gunmetal-900 to-primary-950">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-tactical-900 px-4 py-2 rounded-sm mb-4 border border-tactical-700">
              <Briefcase className="w-5 h-5 text-tactical-400" />
              <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Job Application</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
              Apply for Position
            </h1>
            <p className="text-xl text-tactical-400 font-semibold">
              {jobTitle}
            </p>
            <p className="text-gray-300 mt-2">
              Join the team building the future of on-premises AI
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8"
          >
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-tactical-400" />
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
                    Email Address *
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
                    Phone Number *
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
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Current Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, State/Province, Country"
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Upload className="w-5 h-5 text-tactical-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">Resume / CV</h3>
              </div>
              <div className="border-2 border-dashed border-gunmetal-700 rounded-lg p-6 text-center hover:border-tactical-600 transition-colors">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
                <label htmlFor="resume" className="cursor-pointer">
                  <FileText className="w-12 h-12 text-tactical-400 mx-auto mb-4" />
                  {fileName ? (
                    <div>
                      <p className="text-tactical-400 font-semibold mb-2">{fileName}</p>
                      <p className="text-gray-500 text-sm">Click to change file</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-white font-semibold mb-2">Click to upload your resume</p>
                      <p className="text-gray-400 text-sm">PDF, DOC, or DOCX (Max 5MB)</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Briefcase className="w-5 h-5 text-tactical-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">Professional Background</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Current/Most Recent Company
                  </label>
                  <input
                    type="text"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Years of Experience *
                  </label>
                  <select
                    name="yearsExperience"
                    required
                    value={formData.yearsExperience}
                    onChange={handleInputChange}
                    className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                  >
                    <option value="">Select...</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="11-15">11-15 years</option>
                    <option value="15+">15+ years</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-tactical-400" />
                <h3 className="text-lg font-bold text-white uppercase tracking-wide">Cover Letter</h3>
              </div>
              <textarea
                name="coverLetter"
                required
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={6}
                placeholder="Tell us why you're excited about this role..."
                className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
              />
            </div>

            <div className="mb-6 p-4 bg-gunmetal-950 border border-tactical-700 rounded">
              <p className="text-xs text-gray-400">
                By submitting this application, you consent to JetBuilder storing and processing your personal information for recruitment purposes.
              </p>
            </div>

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
                    Submit Application
                  </>
                )}
              </Button>
              <p className="text-gray-500 text-sm mt-4">
                <a href="/careers" className="text-tactical-400 hover:text-tactical-300">
                  ← Back to Careers
                </a>
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default function JobApplicationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gunmetal-950 via-gunmetal-900 to-primary-950 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-tactical-400 mb-4"></div>
          <p className="text-white text-lg">Loading application form...</p>
        </div>
      </div>
    }>
      <JobApplicationForm />
    </Suspense>
  )
}

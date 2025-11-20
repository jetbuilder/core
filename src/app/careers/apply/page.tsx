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
    <div className="min-h-screen bg-vscode-bg py-12 px-4 font-mono">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full mx-auto bg-vscode-sidebar border-2 border-vscode-type rounded-sm p-8 text-center"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-vscode-bg border-2 border-vscode-type rounded-sm mb-6">
          <CheckCircle className="w-10 h-10 text-vscode-type" />
        </div>
        <h2 className="text-3xl font-bold text-vscode-function tracking-wide mb-4">
          application.submitted()
        </h2>
        <p className="text-sm text-vscode-comment mb-2">
          // success-confirmation
        </p>
        <p className="text-lg text-vscode-variable mb-6">
          Thank you for applying to the <span className="text-vscode-type font-semibold">{formData.jobTitle}</span> position.
        </p>
        <div className="bg-vscode-bg border border-vscode-border rounded-sm p-6 mb-6">
          <p className="text-vscode-variable mb-4 text-sm">
            Our talent acquisition team will review your application and contact you within <span className="text-vscode-type font-bold">5-7 business days</span>.
          </p>
          <ul className="text-left text-vscode-variable space-y-2 max-w-md mx-auto text-xs">
            <li className="flex items-start space-x-2">
              <span className="text-vscode-type mt-1">✓</span>
              <span>Application received for: {formData.jobTitle}</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-vscode-type mt-1">✓</span>
              <span>Resume: {fileName}</span>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 justify-center">
          <a href="/careers">
            <Button className="bg-vscode-keyword hover:bg-vscode-selection text-white font-mono">
              View More Positions
            </Button>
          </a>
          <a href="/">
            <Button variant="outline" className="border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono">
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
      const maxSize = 5 * 1024 * 1024 // 5MB in bytes
      
      if (file.size > maxSize) {
        alert('File size exceeds 5MB. Please choose a smaller file.')
        e.target.value = '' // Clear the input
        return
      }
      
      setFormData(prev => ({ ...prev, resume: file }))
      setFileName(file.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log('Starting application submission...')
      
      // Convert file to base64
      let resumeData = null
      let resumeName = 'No resume attached'
      let resumeType = ''

      if (formData.resume) {
        console.log('Converting resume file to base64...', formData.resume.name)
        try {
          resumeData = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result as string)
            reader.onerror = reject
            reader.readAsDataURL(formData.resume as File)
          })
          resumeName = formData.resume.name
          resumeType = formData.resume.type
          console.log('Resume converted successfully:', resumeName, 'Size:', resumeData.length, 'bytes')
        } catch (fileError) {
          console.error('Failed to read resume file:', fileError)
          alert('Failed to read resume file. Please try again or choose a different file.')
          setIsSubmitting(false)
          return
        }
      }

      console.log('Sending application to API...')
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          resume: undefined, // Remove File object (can't be serialized)
          resumeData,
          resumeName,
          resumeType
        }),
      })

      console.log('API response status:', response.status)
      
      if (!response.ok) {
        console.error('API returned error status:', response.status, response.statusText)
        const errorText = await response.text()
        console.error('Error response:', errorText)
        alert(`Failed to submit application (Status: ${response.status}). Please try again or contact support.`)
        setIsSubmitting(false)
        return
      }

      const result = await response.json()
      console.log('API response:', result)

      if (result.success) {
        console.log('Application submitted successfully!')
        setIsSubmitted(true)
      } else {
        console.error('API returned success=false:', result)
        alert(`Failed to submit application: ${result.message || 'Unknown error'}. Please try again.`)
      }
    } catch (error: any) {
      console.error('Error submitting application:', error)
      const errorMessage = error?.message || 'An error occurred'
      alert(`Error: ${errorMessage}. Please try again or contact support.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return <SuccessScreen formData={formData} fileName={fileName} />
  }

  return (
    <div className="min-h-screen bg-vscode-bg font-mono">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-4 border border-vscode-border">
              <Briefcase className="w-5 h-5 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment tracking-wider">// job-application</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-vscode-function tracking-wide mb-4">
              application.submit()
            </h1>
            <p className="text-xl text-vscode-type font-semibold">
              {jobTitle}
            </p>
            <p className="text-vscode-variable mt-2 text-sm">
              Join the team building the future of on-premises AI
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-vscode-sidebar border-2 border-vscode-border rounded-sm p-8"
          >
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-vscode-type" />
                <h3 className="text-base font-bold text-vscode-function tracking-wide">// personal-information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-vscode-comment mb-2 tracking-wide">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-vscode-comment mb-2 tracking-wide">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-vscode-comment mb-2 tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-vscode-comment mb-2 tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-vscode-comment mb-2 tracking-wide">
                    Current Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, State/Province, Country"
                    className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-sm placeholder:text-vscode-comment"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-vscode-comment mb-2 tracking-wide">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-sm placeholder:text-vscode-comment"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Upload className="w-5 h-5 text-vscode-type" />
                <h3 className="text-base font-bold text-vscode-function tracking-wide">// resume-upload</h3>
              </div>
              <div className="border-2 border-dashed border-vscode-border rounded-sm p-6 text-center hover:border-vscode-type transition-colors">
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
                  <FileText className="w-12 h-12 text-vscode-type mx-auto mb-4" />
                  {fileName ? (
                    <div>
                      <p className="text-vscode-type font-semibold mb-2 text-sm">{fileName}</p>
                      <p className="text-vscode-comment text-xs">Click to change file</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-vscode-variable font-semibold mb-2 text-sm">Click to upload your resume</p>
                      <p className="text-vscode-comment text-xs">PDF, DOC, or DOCX (Max 5MB)</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Briefcase className="w-5 h-5 text-vscode-type" />
                <h3 className="text-base font-bold text-vscode-function tracking-wide">// professional-background</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-vscode-comment mb-2 tracking-wide">
                    Current/Most Recent Company
                  </label>
                  <input
                    type="text"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleInputChange}
                    className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-vscode-comment mb-2 tracking-wide">
                    Years of Experience *
                  </label>
                  <select
                    name="yearsExperience"
                    required
                    value={formData.yearsExperience}
                    onChange={handleInputChange}
                    className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-sm"
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
                <FileText className="w-5 h-5 text-vscode-type" />
                <h3 className="text-base font-bold text-vscode-function tracking-wide">// cover-letter</h3>
              </div>
              <textarea
                name="coverLetter"
                required
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={6}
                placeholder="Tell us why you're excited about this role..."
                className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-vscode-type font-mono text-sm placeholder:text-vscode-comment"
              />
            </div>

            <div className="mb-6 p-4 bg-vscode-bg border border-vscode-border rounded-sm">
              <p className="text-xs text-vscode-comment">
                // By submitting this application, you consent to JetBuilder storing and processing your personal information for recruitment purposes.
              </p>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-vscode-keyword hover:bg-vscode-selection text-white font-bold tracking-wide px-12 py-4 text-sm font-mono"
              >
                {isSubmitting ? (
                  <>
                    <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="inline-block mr-2 w-5 h-5" />
                    $ submit-application
                  </>
                )}
              </Button>
              <p className="text-vscode-comment text-xs mt-4">
                <a href="/careers" className="text-vscode-type hover:text-vscode-function">
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
      <div className="min-h-screen bg-vscode-bg flex items-center justify-center font-mono">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-vscode-type mb-4"></div>
          <p className="text-vscode-variable text-sm">Loading application form...</p>
        </div>
      </div>
    }>
      <JobApplicationForm />
    </Suspense>
  )
}

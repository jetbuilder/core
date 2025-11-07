'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface DemoRequestModalProps {
  isOpen: boolean
  onClose: () => void
  solution?: string
}

export default function DemoRequestModal({ isOpen, onClose, solution }: DemoRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    solution: solution || '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setTimeout(() => {
          onClose()
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            solution: solution || '',
            message: ''
          })
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting demo request:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="bg-gunmetal-900 border-2 border-tactical-700 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gunmetal-900 border-b-2 border-tactical-700 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Request Platform Demo</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900 border-2 border-green-500 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Demo Request Submitted!</h3>
              <p className="text-gray-300">Our deployment team will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-tactical-400 uppercase tracking-wide mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gunmetal-800 border border-tactical-700 rounded text-white focus:outline-none focus:border-tactical-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-tactical-400 uppercase tracking-wide mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gunmetal-800 border border-tactical-700 rounded text-white focus:outline-none focus:border-tactical-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-tactical-400 uppercase tracking-wide mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gunmetal-800 border border-tactical-700 rounded text-white focus:outline-none focus:border-tactical-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-tactical-400 uppercase tracking-wide mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gunmetal-800 border border-tactical-700 rounded text-white focus:outline-none focus:border-tactical-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-tactical-400 uppercase tracking-wide mb-2">
                  Solution Interest
                </label>
                <input
                  type="text"
                  name="solution"
                  value={formData.solution}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gunmetal-800 border border-tactical-700 rounded text-white focus:outline-none focus:border-tactical-500"
                  placeholder="Which solution are you interested in?"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-tactical-400 uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gunmetal-800 border border-tactical-700 rounded text-white focus:outline-none focus:border-tactical-500"
                  placeholder="Tell us about your deployment requirements..."
                />
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-900/50 border border-red-500 rounded p-4">
                  <p className="text-red-400 text-sm">Failed to submit request. Please try again.</p>
                </div>
              )}

              <div className="flex items-center justify-end gap-4 pt-4 border-t border-tactical-700">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 text-gray-400 hover:text-white uppercase tracking-wide font-bold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-tactical-600 hover:bg-tactical-700 text-white uppercase tracking-wide font-bold rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}


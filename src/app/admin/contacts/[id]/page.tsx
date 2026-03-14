'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Mail,
  Phone,
  Building2,
  MapPin,
  Calendar,
  Globe,
  User,
  Briefcase,
  MessageSquare,
  Clock,
  Edit,
  Save,
  X
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/button'

// Mock data - will be replaced with real API data
const mockContactDetail = {
  id: 1,
  firstName: 'Sarah',
  lastName: 'Johnson',
  email: 'sarah.johnson@acme-insurance.com',
  phone: '+1 (555) 123-4567',
  jobTitle: 'Director of Digital Transformation',
  company: 'Acme Insurance',
  companySize: '1001-5000',
  industry: 'Insurance',
  country: 'United States',
  website: 'https://acme-insurance.com',
  status: 'new',
  source: 'Contact Form',
  createdAt: '2024-10-26T10:30:00',
  assignedTo: null,
}

const mockTimeline = [
  {
    id: 1,
    type: 'submission',
    title: 'Contact Form Submitted',
    description: 'Submitted inquiry about Insurance Claims Processing solution',
    timestamp: '2024-10-26T10:30:00',
    icon: MessageSquare,
    color: 'bg-blue-500',
    data: {
      interestedIn: ['Insurance Claims Intelligence', 'Real-Time Communications Analysis'],
      projectTimeline: '3-6 months',
      budget: '$250K - $500K',
      currentChallenges: 'Manual claim processing taking too long. Need to improve fraud detection and reduce settlement times.',
    }
  },
  {
    id: 2,
    type: 'note',
    title: 'Internal Note Added',
    description: 'High-value lead - matches our ideal customer profile for insurance sector',
    timestamp: '2024-10-26T11:15:00',
    icon: MessageSquare,
    color: 'bg-gray-500',
    author: 'Admin User',
  },
]

const statusOptions = ['new', 'contacted', 'qualified', 'proposal', 'closed']

export default function ContactDetailPage({ params }: { params: { id: string } }) {
  const [contact, setContact] = useState(mockContactDetail)
  const [isEditing, setIsEditing] = useState(false)
  const [newNote, setNewNote] = useState('')

  const handleStatusChange = (newStatus: string) => {
    setContact({ ...contact, status: newStatus })
    // TODO: Save to API
  }

  const handleAddNote = () => {
    if (newNote.trim()) {
      // TODO: Add note via API
      setNewNote('')
    }
  }

  return (
    <div>
      {/* Back button */}
      <Link href="/admin/contacts" className="inline-flex items-center space-x-2 text-tactical-400 hover:text-tactical-300 mb-6">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Contacts</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Information Card */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6 sticky top-6"
          >
            {/* Profile Header */}
            <div className="text-center mb-6 pb-6 border-b border-gunmetal-700">
              <div className="w-20 h-20 bg-tactical-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">
                  {contact.firstName[0]}{contact.lastName[0]}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">
                {contact.firstName} {contact.lastName}
              </h2>
              <p className="text-sm text-gray-400">{contact.jobTitle}</p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 uppercase mb-1">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-sm text-tactical-400 hover:text-tactical-300 break-all">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Phone</p>
                  <a href={`tel:${contact.phone}`} className="text-sm text-tactical-400 hover:text-tactical-300">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Company</p>
                  <p className="text-sm text-white">{contact.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{contact.companySize} employees</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Briefcase className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Industry</p>
                  <p className="text-sm text-white">{contact.industry}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Country</p>
                  <p className="text-sm text-white">{contact.country}</p>
                </div>
              </div>

              {contact.website && (
                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 uppercase mb-1">Website</p>
                    <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-sm text-tactical-400 hover:text-tactical-300 break-all">
                      {contact.website}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 uppercase mb-1">First Contact</p>
                  <p className="text-sm text-white">
                    {new Date(contact.createdAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="mb-6 pb-6 border-b border-gunmetal-700">
              <p className="text-xs text-gray-500 uppercase mb-2">Status</p>
              <select
                value={contact.status}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tactical-600"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Assign To */}
            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">Assigned To</p>
              <select
                className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tactical-600"
              >
                <option value="">Unassigned</option>
                <option value="1">Admin User</option>
                <option value="2">Sales Rep 1</option>
                <option value="3">Sales Rep 2</option>
              </select>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-2">
              <Button className="w-full bg-tactical-600 hover:bg-tactical-700">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <Button className="w-full bg-gunmetal-950 hover:bg-gunmetal-800 border border-gunmetal-700">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Call
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Timeline and Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-6">
              Timeline & Activity
            </h2>

            {/* Add Note */}
            <div className="mb-6 p-4 bg-gunmetal-950 border border-gunmetal-700 rounded-lg">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add a note about this contact..."
                rows={3}
                className="w-full bg-gunmetal-900 text-white border border-gunmetal-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600 mb-3"
              />
              <Button 
                onClick={handleAddNote}
                disabled={!newNote.trim()}
                className="bg-tactical-600 hover:bg-tactical-700 disabled:opacity-50"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Add Note
              </Button>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {mockTimeline.map((event, index) => (
                <div key={event.id} className="relative">
                  {index !== mockTimeline.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gunmetal-700" />
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1 bg-gunmetal-950 border border-gunmetal-700 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-sm font-semibold text-white">
                          {event.title}
                        </h3>
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>
                            {new Date(event.timestamp).toLocaleString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: 'numeric',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-400 mb-3">
                        {event.description}
                      </p>
                      
                      {event.data && (
                        <div className="space-y-2 text-sm">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="text-gray-500">Timeline:</span>
                              <span className="text-white ml-2">{event.data.projectTimeline}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Budget:</span>
                              <span className="text-white ml-2">{event.data.budget}</span>
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-500">Interested In:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {event.data.interestedIn.map((item, i) => (
                                <span key={i} className="px-3 py-1 bg-tactical-900 text-tactical-300 text-xs rounded-full">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-500">Challenges:</span>
                            <p className="text-white mt-1">{event.data.currentChallenges}</p>
                          </div>
                        </div>
                      )}
                      
                      {event.author && (
                        <div className="text-xs text-gray-500 mt-2">
                          by {event.author}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


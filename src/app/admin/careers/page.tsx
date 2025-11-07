'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Briefcase,
  Download,
  Eye,
  ChevronLeft,
  ChevronRight,
  FileText,
  Calendar,
  MapPin,
  Clock
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/button'

// Mock data for career applications
const mockApplications = [
  {
    id: 1,
    candidateName: 'Michael Chen',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 234-5678',
    jobTitle: 'Senior ML Engineer',
    jobId: 'ml-engineer-senior',
    location: 'San Francisco, CA',
    yearsExperience: '6-10',
    appliedDate: '2024-10-26',
    status: 'new',
    resumeUrl: '/resumes/michael-chen.pdf',
  },
  {
    id: 2,
    candidateName: 'Jennifer Martinez',
    email: 'j.martinez@email.com',
    phone: '+1 (555) 345-6789',
    jobTitle: 'DevOps Engineer',
    jobId: 'devops-engineer',
    location: 'Toronto, ON, Canada',
    yearsExperience: '3-5',
    appliedDate: '2024-10-25',
    status: 'reviewing',
    resumeUrl: '/resumes/jennifer-martinez.pdf',
  },
  {
    id: 3,
    candidateName: 'Robert Taylor',
    email: 'r.taylor@email.com',
    phone: '+1 (555) 456-7890',
    jobTitle: 'Enterprise Sales Engineer',
    jobId: 'sales-engineer',
    location: 'Austin, TX',
    yearsExperience: '6-10',
    appliedDate: '2024-10-24',
    status: 'interview',
    resumeUrl: '/resumes/robert-taylor.pdf',
  },
  {
    id: 4,
    candidateName: 'Sarah Kim',
    email: 's.kim@email.com',
    phone: '+1 (555) 567-8901',
    jobTitle: 'Security Engineer',
    jobId: 'security-engineer',
    location: 'Vancouver, BC, Canada',
    yearsExperience: '3-5',
    appliedDate: '2024-10-23',
    status: 'offer',
    resumeUrl: '/resumes/sarah-kim.pdf',
  },
  {
    id: 5,
    candidateName: 'James Wilson',
    email: 'james.w@email.com',
    phone: '+1 (555) 678-9012',
    jobTitle: 'Senior ML Engineer',
    jobId: 'ml-engineer-senior',
    location: 'Boston, MA',
    yearsExperience: '11-15',
    appliedDate: '2024-10-22',
    status: 'rejected',
    resumeUrl: '/resumes/james-wilson.pdf',
  },
]

const statusColors = {
  new: 'bg-blue-900 text-blue-300',
  reviewing: 'bg-yellow-900 text-yellow-300',
  'phone-screen': 'bg-purple-900 text-purple-300',
  interview: 'bg-green-900 text-green-300',
  offer: 'bg-tactical-900 text-tactical-300',
  hired: 'bg-green-900 text-green-300',
  rejected: 'bg-red-900 text-red-300',
}

const statusLabels = {
  new: 'New',
  reviewing: 'Reviewing',
  'phone-screen': 'Phone Screen',
  interview: 'Interview',
  offer: 'Offer Sent',
  hired: 'Hired',
  rejected: 'Rejected',
}

export default function CareerApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPosition, setSelectedPosition] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredApplications = mockApplications.filter(app => {
    const matchesSearch = searchQuery === '' || 
      app.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesPosition = selectedPosition === 'all' || app.jobId === selectedPosition
    const matchesStatus = selectedStatus === 'all' || app.status === selectedStatus
    
    return matchesSearch && matchesPosition && matchesStatus
  })

  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedApplications = filteredApplications.slice(startIndex, startIndex + itemsPerPage)

  // Calculate stats
  const totalApplications = mockApplications.length
  const newApplications = mockApplications.filter(a => a.status === 'new').length
  const inInterview = mockApplications.filter(a => a.status === 'interview' || a.status === 'phone-screen').length
  const offersExtended = mockApplications.filter(a => a.status === 'offer').length

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white uppercase tracking-wide mb-2">
          Career Applications
        </h1>
        <p className="text-gray-400">
          Manage job applications and track candidates through hiring pipeline
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <Briefcase className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold text-white">{totalApplications}</span>
          </div>
          <p className="text-sm text-gray-400">Total Applications</p>
        </div>

        <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <FileText className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">{newApplications}</span>
          </div>
          <p className="text-sm text-gray-400">New Applications</p>
        </div>

        <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-white">{inInterview}</span>
          </div>
          <p className="text-sm text-gray-400">In Interview</p>
        </div>

        <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-8 h-8 text-tactical-500" />
            <span className="text-2xl font-bold text-white">{offersExtended}</span>
          </div>
          <p className="text-sm text-gray-400">Offers Extended</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search candidates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
              />
            </div>
          </div>

          {/* Position filter */}
          <div>
            <select
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
            >
              <option value="all">All Positions</option>
              <option value="ml-engineer-senior">Senior ML Engineer</option>
              <option value="devops-engineer">DevOps Engineer</option>
              <option value="sales-engineer">Enterprise Sales Engineer</option>
              <option value="security-engineer">Security Engineer</option>
            </select>
          </div>

          {/* Status filter */}
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="reviewing">Reviewing</option>
              <option value="phone-screen">Phone Screen</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer Sent</option>
              <option value="hired">Hired</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gunmetal-700">
          <div className="text-sm text-gray-400">
            Showing <span className="text-white font-semibold">{displayedApplications.length}</span> of{' '}
            <span className="text-white font-semibold">{filteredApplications.length}</span> applications
          </div>
        </div>
      </div>

      {/* Applications table */}
      <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gunmetal-950 border-b border-tactical-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Candidate
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Experience
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Applied
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gunmetal-700">
              {displayedApplications.map((application) => (
                <motion.tr
                  key={application.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gunmetal-950 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {application.candidateName}
                      </div>
                      <div className="text-xs text-gray-400">{application.email}</div>
                      <div className="text-xs text-gray-500">{application.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-white font-medium">
                      {application.jobTitle}
                    </div>
                    <div className="text-xs text-gray-500">ID: {application.jobId}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{application.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-400">
                      {application.yearsExperience} years
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{application.appliedDate}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${statusColors[application.status as keyof typeof statusColors]}`}>
                      {statusLabels[application.status as keyof typeof statusLabels]}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <a
                        href={application.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gunmetal-950 hover:bg-gunmetal-800 border border-gunmetal-700 text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Resume
                        </Button>
                      </a>
                      <Link href={`/admin/contacts/${application.id}`}>
                        <Button className="bg-tactical-600 hover:bg-tactical-700 text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </Link>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 border-t border-tactical-700 flex items-center justify-between">
            <Button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="bg-gunmetal-950 hover:bg-gunmetal-800 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>
            <div className="text-sm text-gray-400">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="bg-gunmetal-950 hover:bg-gunmetal-800 disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}


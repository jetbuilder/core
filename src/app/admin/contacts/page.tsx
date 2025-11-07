'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Download, 
  Mail,
  Phone,
  Building2,
  Calendar,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/button'

// Mock data - will be replaced with real API data
const mockContacts = [
  {
    id: 1,
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@acme-insurance.com',
    phone: '+1 (555) 123-4567',
    company: 'Acme Insurance',
    country: 'United States',
    source: 'Contact Form',
    date: '2024-10-26',
    status: 'new',
  },
  {
    id: 2,
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 234-5678',
    company: 'Tech Startup Inc',
    country: 'Canada',
    source: 'Careers',
    date: '2024-10-26',
    status: 'contacted',
  },
  {
    id: 3,
    firstName: 'Emma',
    lastName: 'Williams',
    email: 'emma.w@healthcare-corp.com',
    phone: '+1 (555) 345-6789',
    company: 'Healthcare Corp',
    country: 'United States',
    source: 'Chatbot',
    date: '2024-10-26',
    status: 'qualified',
  },
  {
    id: 4,
    firstName: 'David',
    lastName: 'Kim',
    email: 'david.kim@pacific-telecom.com',
    phone: '+1 (555) 456-7890',
    company: 'Pacific Telecom',
    country: 'Canada',
    source: 'Contact Form',
    date: '2024-10-25',
    status: 'new',
  },
  {
    id: 5,
    firstName: 'Lisa',
    lastName: 'Rodriguez',
    email: 'lisa.r@global-bank.com',
    phone: '+1 (555) 567-8901',
    company: 'Global Bank Corp',
    country: 'United States',
    source: 'Get Started',
    date: '2024-10-25',
    status: 'contacted',
  },
]

const statusColors = {
  new: 'bg-blue-900 text-blue-300',
  contacted: 'bg-yellow-900 text-yellow-300',
  qualified: 'bg-green-900 text-green-300',
  closed: 'bg-gray-900 text-gray-300',
}

const sourceColors = {
  'Contact Form': 'bg-blue-900 text-blue-300',
  'Careers': 'bg-purple-900 text-purple-300',
  'Chatbot': 'bg-tactical-900 text-tactical-300',
  'Get Started': 'bg-green-900 text-green-300',
}

export default function ContactsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSource, setSelectedSource] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredContacts = mockContacts.filter(contact => {
    const matchesSearch = searchQuery === '' || 
      contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesSource = selectedSource === 'all' || contact.source === selectedSource
    const matchesStatus = selectedStatus === 'all' || contact.status === selectedStatus
    
    return matchesSearch && matchesSource && matchesStatus
  })

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedContacts = filteredContacts.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white uppercase tracking-wide mb-2">
          Contacts
        </h1>
        <p className="text-gray-400">
          Manage all contacts from forms, chatbot, and career applications
        </p>
      </div>

      {/* Filters and search */}
      <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search by name, email, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
              />
            </div>
          </div>

          {/* Source filter */}
          <div>
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
            >
              <option value="all">All Sources</option>
              <option value="Contact Form">Contact Form</option>
              <option value="Careers">Careers</option>
              <option value="Chatbot">Chatbot</option>
              <option value="Get Started">Get Started</option>
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
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gunmetal-700">
          <div className="text-sm text-gray-400">
            Showing <span className="text-white font-semibold">{displayedContacts.length}</span> of{' '}
            <span className="text-white font-semibold">{filteredContacts.length}</span> contacts
          </div>
          <Button className="bg-tactical-600 hover:bg-tactical-700">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Contacts table */}
      <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gunmetal-950 border-b border-tactical-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Date
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
              {displayedContacts.map((contact) => (
                <motion.tr
                  key={contact.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-gunmetal-950 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {contact.firstName} {contact.lastName}
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-400 mt-1">
                        <Mail className="w-3 h-3" />
                        <span>{contact.email}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-400 mt-1">
                        <Phone className="w-3 h-3" />
                        <span>{contact.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Building2 className="w-4 h-4 text-gray-500" />
                      <div>
                        <div className="text-white">{contact.company}</div>
                        <div className="text-xs text-gray-500">{contact.country}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${sourceColors[contact.source as keyof typeof sourceColors]}`}>
                      {contact.source}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{contact.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${statusColors[contact.status as keyof typeof statusColors]}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/admin/contacts/${contact.id}`}>
                      <Button className="bg-tactical-600 hover:bg-tactical-700 text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </Link>
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


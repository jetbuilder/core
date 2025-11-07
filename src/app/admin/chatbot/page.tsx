'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  MessageSquare,
  Eye,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Tag
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/button'

// Mock data for chatbot interactions
const mockChatbotContacts = [
  {
    id: 1,
    name: 'Emma Williams',
    email: 'emma.w@healthcare-corp.com',
    company: 'Healthcare Corp',
    country: 'United States',
    topic: 'Healthcare Intelligence',
    submittedAt: '2024-10-26T14:30:00',
    messageCount: 8,
  },
  {
    id: 2,
    name: 'Robert Garcia',
    email: 'r.garcia@legal-firm.com',
    company: 'Garcia Legal Services',
    country: 'Canada',
    topic: 'Legal Intelligence',
    submittedAt: '2024-10-26T11:15:00',
    messageCount: 12,
  },
  {
    id: 3,
    name: 'Linda Thompson',
    email: 'l.thompson@energy-co.com',
    company: 'Pacific Energy',
    country: 'United States',
    topic: 'Energy & Utilities Intelligence',
    submittedAt: '2024-10-25T16:45:00',
    messageCount: 6,
  },
  {
    id: 4,
    name: 'Carlos Rodriguez',
    email: 'carlos.r@pharma-inc.com',
    company: 'PharmaCo Inc',
    country: 'Canada',
    topic: 'Pharmaceutical Intelligence',
    submittedAt: '2024-10-25T09:20:00',
    messageCount: 15,
  },
  {
    id: 5,
    name: 'Michelle Lee',
    email: 'm.lee@manufacturing.com',
    company: 'Lee Manufacturing',
    country: 'United States',
    topic: 'Manufacturing Intelligence',
    submittedAt: '2024-10-24T13:00:00',
    messageCount: 5,
  },
]

const topicColors: Record<string, string> = {
  'Healthcare Intelligence': 'bg-blue-900 text-blue-300',
  'Legal Intelligence': 'bg-purple-900 text-purple-300',
  'Energy & Utilities Intelligence': 'bg-green-900 text-green-300',
  'Pharmaceutical Intelligence': 'bg-tactical-900 text-tactical-300',
  'Manufacturing Intelligence': 'bg-yellow-900 text-yellow-300',
  'Banking Intelligence': 'bg-indigo-900 text-indigo-300',
  'Insurance Intelligence': 'bg-red-900 text-red-300',
  'Telecom Intelligence': 'bg-pink-900 text-pink-300',
  'Government Intelligence': 'bg-gray-900 text-gray-300',
}

export default function ChatbotInteractionsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredContacts = mockChatbotContacts.filter(contact => {
    const matchesSearch = searchQuery === '' || 
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesTopic = selectedTopic === 'all' || contact.topic === selectedTopic
    
    return matchesSearch && matchesTopic
  })

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedContacts = filteredContacts.slice(startIndex, startIndex + itemsPerPage)

  // Calculate stats
  const totalContacts = mockChatbotContacts.length
  const todayContacts = mockChatbotContacts.filter(c => 
    new Date(c.submittedAt).toDateString() === new Date().toDateString()
  ).length
  const avgMessages = Math.round(
    mockChatbotContacts.reduce((sum, c) => sum + c.messageCount, 0) / mockChatbotContacts.length
  )

  // Get unique topics for filter
  const uniqueTopics = Array.from(new Set(mockChatbotContacts.map(c => c.topic)))

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white uppercase tracking-wide mb-2">
          Chatbot Interactions
        </h1>
        <p className="text-gray-400">
          Track contacts collected through chatbot conversations
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <MessageSquare className="w-8 h-8 text-tactical-500" />
            <span className="text-2xl font-bold text-white">{totalContacts}</span>
          </div>
          <p className="text-sm text-gray-400">Total Contacts</p>
        </div>

        <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">{todayContacts}</span>
          </div>
          <p className="text-sm text-gray-400">Today</p>
        </div>

        <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <MessageSquare className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-white">{avgMessages}</span>
          </div>
          <p className="text-sm text-gray-400">Avg. Messages</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div>
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

          {/* Topic filter */}
          <div>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
            >
              <option value="all">All Topics</option>
              {uniqueTopics.map((topic) => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gunmetal-700">
          <div className="text-sm text-gray-400">
            Showing <span className="text-white font-semibold">{displayedContacts.length}</span> of{' '}
            <span className="text-white font-semibold">{filteredContacts.length}</span> contacts
          </div>
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
                  Topic
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Messages
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Date
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
                        {contact.name}
                      </div>
                      <div className="text-xs text-gray-400">{contact.email}</div>
                      <div className="text-xs text-gray-500">{contact.country}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-white">
                      {contact.company}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 text-xs font-semibold rounded-full ${topicColors[contact.topic] || 'bg-gray-900 text-gray-300'}`}>
                      <Tag className="w-3 h-3" />
                      <span>{contact.topic}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <MessageSquare className="w-4 h-4" />
                      <span>{contact.messageCount} messages</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(contact.submittedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {new Date(contact.submittedAt).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit'
                      })}
                    </div>
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


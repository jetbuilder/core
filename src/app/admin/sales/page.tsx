'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  TrendingUp,
  DollarSign,
  Calendar,
  Eye,
  ChevronLeft,
  ChevronRight,
  Flame,
  Snowflake,
  Wind
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/button'

// Mock data for sales inquiries
const mockInquiries = [
  {
    id: 1,
    contactName: 'Sarah Johnson',
    company: 'Acme Insurance',
    email: 'sarah.johnson@acme-insurance.com',
    interestedIn: ['Insurance Claims Intelligence', 'Real-Time Communications'],
    budget: '$250K - $500K',
    timeline: '3-6 months',
    leadScore: 'hot',
    status: 'new',
    date: '2024-10-26',
  },
  {
    id: 2,
    contactName: 'Lisa Rodriguez',
    company: 'Global Bank Corp',
    email: 'lisa.r@global-bank.com',
    interestedIn: ['Banking Intelligence', 'Regulatory Compliance'],
    budget: '$500K - $1M',
    timeline: '1-3 months',
    leadScore: 'hot',
    status: 'contacted',
    date: '2024-10-25',
  },
  {
    id: 3,
    contactName: 'David Kim',
    company: 'Pacific Telecom',
    email: 'david.kim@pacific-telecom.com',
    interestedIn: ['Telecom Operations', 'Customer Service'],
    budget: '$100K - $250K',
    timeline: '6-12 months',
    leadScore: 'warm',
    status: 'new',
    date: '2024-10-25',
  },
  {
    id: 4,
    contactName: 'Emma Williams',
    company: 'Healthcare Corp',
    email: 'emma.w@healthcare-corp.com',
    interestedIn: ['Healthcare Intelligence'],
    budget: 'Under $100K',
    timeline: 'Research phase',
    leadScore: 'cold',
    status: 'qualified',
    date: '2024-10-24',
  },
]

const statusColors = {
  new: 'bg-blue-900 text-blue-300',
  contacted: 'bg-yellow-900 text-yellow-300',
  qualified: 'bg-green-900 text-green-300',
  proposal: 'bg-purple-900 text-purple-300',
  won: 'bg-green-900 text-green-300',
  lost: 'bg-red-900 text-red-300',
}

const leadScoreConfig = {
  hot: { icon: Flame, color: 'text-red-500', bg: 'bg-red-900', label: 'Hot Lead' },
  warm: { icon: Wind, color: 'text-yellow-500', bg: 'bg-yellow-900', label: 'Warm Lead' },
  cold: { icon: Snowflake, color: 'text-blue-500', bg: 'bg-blue-900', label: 'Cold Lead' },
}

export default function SalesInquiriesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('all')
  const [selectedTimeline, setSelectedTimeline] = useState('all')
  const [selectedLeadScore, setSelectedLeadScore] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredInquiries = mockInquiries.filter(inquiry => {
    const matchesSearch = searchQuery === '' || 
      inquiry.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesBudget = selectedBudget === 'all' || inquiry.budget === selectedBudget
    const matchesTimeline = selectedTimeline === 'all' || inquiry.timeline === selectedTimeline
    const matchesLeadScore = selectedLeadScore === 'all' || inquiry.leadScore === selectedLeadScore
    
    return matchesSearch && matchesBudget && matchesTimeline && matchesLeadScore
  })

  const totalPages = Math.ceil(filteredInquiries.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedInquiries = filteredInquiries.slice(startIndex, startIndex + itemsPerPage)

  // Calculate stats
  const hotLeads = mockInquiries.filter(i => i.leadScore === 'hot').length
  const totalValue = mockInquiries.length * 350000 // Example calculation

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white uppercase tracking-wide mb-2">
          Sales Inquiries
        </h1>
        <p className="text-gray-400">
          Track and manage all contact form submissions and sales leads
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-white">{mockInquiries.length}</span>
          </div>
          <p className="text-sm text-gray-400">Total Inquiries</p>
        </div>

        <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <Flame className="w-8 h-8 text-red-500" />
            <span className="text-2xl font-bold text-white">{hotLeads}</span>
          </div>
          <p className="text-sm text-gray-400">Hot Leads</p>
        </div>

        <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-8 h-8 text-tactical-500" />
            <span className="text-2xl font-bold text-white">${(totalValue / 1000).toFixed(0)}K</span>
          </div>
          <p className="text-sm text-gray-400">Pipeline Value</p>
        </div>

        <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">24h</span>
          </div>
          <p className="text-sm text-gray-400">Avg Response Time</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search inquiries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
              />
            </div>
          </div>

          {/* Budget filter */}
          <div>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
            >
              <option value="all">All Budgets</option>
              <option value="Under $100K">Under $100K</option>
              <option value="$100K - $250K">$100K - $250K</option>
              <option value="$250K - $500K">$250K - $500K</option>
              <option value="$500K - $1M">$500K - $1M</option>
              <option value="$1M+">$1M+</option>
            </select>
          </div>

          {/* Timeline filter */}
          <div>
            <select
              value={selectedTimeline}
              onChange={(e) => setSelectedTimeline(e.target.value)}
              className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
            >
              <option value="all">All Timelines</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="Research phase">Research phase</option>
            </select>
          </div>

          {/* Lead Score filter */}
          <div>
            <select
              value={selectedLeadScore}
              onChange={(e) => setSelectedLeadScore(e.target.value)}
              className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
            >
              <option value="all">All Lead Scores</option>
              <option value="hot">Hot Leads</option>
              <option value="warm">Warm Leads</option>
              <option value="cold">Cold Leads</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gunmetal-700">
          <div className="text-sm text-gray-400">
            Showing <span className="text-white font-semibold">{displayedInquiries.length}</span> of{' '}
            <span className="text-white font-semibold">{filteredInquiries.length}</span> inquiries
          </div>
        </div>
      </div>

      {/* Inquiries table */}
      <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gunmetal-950 border-b border-tactical-700">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Lead Score
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Solutions
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Budget
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Timeline
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
              {displayedInquiries.map((inquiry) => {
                const scoreConfig = leadScoreConfig[inquiry.leadScore as keyof typeof leadScoreConfig]
                const ScoreIcon = scoreConfig.icon
                
                return (
                  <motion.tr
                    key={inquiry.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gunmetal-950 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${scoreConfig.bg}`}>
                        <ScoreIcon className={`w-4 h-4 ${scoreConfig.color}`} />
                        <span className={`text-xs font-semibold ${scoreConfig.color}`}>
                          {scoreConfig.label}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {inquiry.contactName}
                        </div>
                        <div className="text-xs text-gray-400">{inquiry.company}</div>
                        <div className="text-xs text-gray-500">{inquiry.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {inquiry.interestedIn.slice(0, 2).map((solution, i) => (
                          <span key={i} className="px-2 py-1 text-xs bg-tactical-900 text-tactical-300 rounded">
                            {solution}
                          </span>
                        ))}
                        {inquiry.interestedIn.length > 2 && (
                          <span className="px-2 py-1 text-xs bg-gunmetal-700 text-gray-400 rounded">
                            +{inquiry.interestedIn.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-white font-medium">
                        {inquiry.budget}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-400">
                        {inquiry.timeline}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${statusColors[inquiry.status as keyof typeof statusColors]}`}>
                        {inquiry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/admin/contacts/${inquiry.id}`}>
                        <Button className="bg-tactical-600 hover:bg-tactical-700 text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </Link>
                    </td>
                  </motion.tr>
                )
              })}
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


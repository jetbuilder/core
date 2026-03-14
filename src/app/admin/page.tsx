'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  Briefcase, 
  MessageSquare,
  ArrowUp,
  ArrowDown,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

// Mock data - will be replaced with real data from API
const stats = [
  {
    name: 'Total Contacts',
    value: '1,247',
    change: '+12.5%',
    changeType: 'increase',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    name: 'Sales Inquiries',
    value: '89',
    change: '+8.2%',
    changeType: 'increase',
    icon: TrendingUp,
    color: 'bg-green-500',
  },
  {
    name: 'Job Applications',
    value: '34',
    change: '+3',
    changeType: 'increase',
    icon: Briefcase,
    color: 'bg-purple-500',
  },
  {
    name: 'Chatbot Contacts',
    value: '156',
    change: '+24.1%',
    changeType: 'increase',
    icon: MessageSquare,
    color: 'bg-tactical-500',
  },
]

const recentActivity = [
  {
    id: 1,
    type: 'contact',
    title: 'New Contact Form Submission',
    description: 'Sarah Johnson from Acme Insurance submitted inquiry',
    time: '5 minutes ago',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    type: 'career',
    title: 'New Job Application',
    description: 'Michael Chen applied for Senior ML Engineer',
    time: '23 minutes ago',
    icon: Briefcase,
    color: 'bg-purple-500',
  },
  {
    id: 3,
    type: 'chatbot',
    title: 'Chatbot Contact Collected',
    description: 'Emma Williams requested Healthcare Intelligence info',
    time: '1 hour ago',
    icon: MessageSquare,
    color: 'bg-tactical-500',
  },
  {
    id: 4,
    type: 'contact',
    title: 'Enterprise Access Request',
    description: 'Global Bank Corp requested Enterprise Professional tier',
    time: '2 hours ago',
    icon: TrendingUp,
    color: 'bg-green-500',
  },
  {
    id: 5,
    type: 'contact',
    title: 'New Contact Form Submission',
    description: 'David Kim from Pacific Telecom submitted inquiry',
    time: '3 hours ago',
    icon: Users,
    color: 'bg-blue-500',
  },
]

const pendingTasks = [
  { id: 1, title: 'Follow up with Acme Insurance - High Budget Lead', priority: 'high', dueDate: 'Today' },
  { id: 2, title: 'Schedule interview with Michael Chen', priority: 'medium', dueDate: 'Tomorrow' },
  { id: 3, title: 'Send Healthcare compliance docs to Emma Williams', priority: 'medium', dueDate: 'Tomorrow' },
  { id: 4, title: 'Review Global Bank Corp security requirements', priority: 'high', dueDate: 'Today' },
]

const leadSources = [
  { name: 'Contact Form', count: 89, percentage: 45 },
  { name: 'Chatbot', count: 56, percentage: 28 },
  { name: 'Careers', count: 34, percentage: 17 },
  { name: 'Get Started', count: 20, percentage: 10 },
]

export default function AdminDashboard() {
  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white uppercase tracking-wide mb-2">
          Dashboard
        </h1>
        <p className="text-gray-400">
          Welcome back! Here's what's happening with your leads and contacts.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                stat.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.changeType === 'increase' ? (
                  <ArrowUp className="w-4 h-4" />
                ) : (
                  <ArrowDown className="w-4 h-4" />
                )}
                <span className="font-semibold">{stat.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-400">{stat.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                Recent Activity
              </h2>
              <Link href="/admin/contacts" className="text-sm text-tactical-400 hover:text-tactical-300">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gunmetal-950 border border-gunmetal-700 rounded-lg hover:border-tactical-700 transition-colors">
                  <div className={`w-10 h-10 ${activity.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <activity.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-1">
                      {activity.description}
                    </p>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pending Tasks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6"
          >
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-4">
              Pending Tasks
            </h2>
            <div className="space-y-3">
              {pendingTasks.map((task) => (
                <div key={task.id} className="p-3 bg-gunmetal-950 border border-gunmetal-700 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm text-white font-medium flex-1">
                      {task.title}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      task.priority === 'high' 
                        ? 'bg-red-900 text-red-300' 
                        : 'bg-yellow-900 text-yellow-300'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{task.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lead Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gunmetal-900 border border-tactical-700 rounded-lg p-6"
          >
            <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-4">
              Lead Sources
            </h2>
            <div className="space-y-4">
              {leadSources.map((source) => (
                <div key={source.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">{source.name}</span>
                    <span className="text-sm text-white font-semibold">{source.count}</span>
                  </div>
                  <div className="w-full bg-gunmetal-950 rounded-full h-2">
                    <div 
                      className="bg-tactical-600 h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


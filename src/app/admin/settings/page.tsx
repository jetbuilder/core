'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings as SettingsIcon,
  Users,
  Bell,
  Database,
  Key,
  Mail,
  Save,
  Plus,
  Trash2
} from 'lucide-react'
import Button from '@/components/ui/button'

// Mock data for admin users
const mockAdminUsers = [
  { id: 1, name: 'Admin User', email: 'admin@jetbuilder.io', role: 'admin', lastLogin: '2024-10-26' },
  { id: 2, name: 'Sales Rep 1', email: 'sales1@jetbuilder.io', role: 'sales', lastLogin: '2024-10-25' },
  { id: 3, name: 'Recruiter 1', email: 'recruiter@jetbuilder.io', role: 'recruiter', lastLogin: '2024-10-24' },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('users')
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [slackNotifications, setSlackNotifications] = useState(false)

  return (
    <div>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white uppercase tracking-wide mb-2">
          Settings
        </h1>
        <p className="text-gray-400">
          Manage CRM configuration, users, and integrations
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-gunmetal-900 border border-tactical-700 rounded-lg overflow-hidden mb-6">
        <div className="flex border-b border-tactical-700 overflow-x-auto">
          <button
            onClick={() => setActiveTab('users')}
            className={`px-6 py-4 font-medium whitespace-nowrap flex items-center space-x-2 ${
              activeTab === 'users'
                ? 'bg-tactical-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gunmetal-950'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Users & Roles</span>
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-6 py-4 font-medium whitespace-nowrap flex items-center space-x-2 ${
              activeTab === 'notifications'
                ? 'bg-tactical-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gunmetal-950'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>Notifications</span>
          </button>
          <button
            onClick={() => setActiveTab('integrations')}
            className={`px-6 py-4 font-medium whitespace-nowrap flex items-center space-x-2 ${
              activeTab === 'integrations'
                ? 'bg-tactical-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gunmetal-950'
            }`}
          >
            <Key className="w-4 h-4" />
            <span>Integrations</span>
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`px-6 py-4 font-medium whitespace-nowrap flex items-center space-x-2 ${
              activeTab === 'data'
                ? 'bg-tactical-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gunmetal-950'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Data Management</span>
          </button>
        </div>

        <div className="p-6">
          {/* Users & Roles Tab */}
          {activeTab === 'users' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white uppercase tracking-wide">
                  Admin Users
                </h2>
                <Button className="bg-tactical-600 hover:bg-tactical-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>

              <div className="space-y-4">
                {mockAdminUsers.map((user) => (
                  <div
                    key={user.id}
                    className="bg-gunmetal-950 border border-gunmetal-700 rounded-lg p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-tactical-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{user.name}</h3>
                        <p className="text-xs text-gray-400">{user.email}</p>
                        <p className="text-xs text-gray-500">Last login: {user.lastLogin}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <select
                        value={user.role}
                        className="bg-gunmetal-900 text-white border border-gunmetal-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      >
                        <option value="admin">Admin</option>
                        <option value="sales">Sales</option>
                        <option value="recruiter">Recruiter</option>
                      </select>
                      <button className="text-red-400 hover:text-red-300">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gunmetal-950 border border-tactical-700 rounded-lg">
                <h3 className="text-sm font-bold text-white mb-2">Role Permissions</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• <span className="text-white">Admin:</span> Full access to all features</li>
                  <li>• <span className="text-white">Sales:</span> Access to contacts, sales inquiries, and chatbot</li>
                  <li>• <span className="text-white">Recruiter:</span> Access to career applications only</li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-6">
                Notification Settings
              </h2>

              <div className="space-y-6">
                <div className="bg-gunmetal-950 border border-gunmetal-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-tactical-400" />
                      <div>
                        <h3 className="text-sm font-semibold text-white">Email Notifications</h3>
                        <p className="text-xs text-gray-400">Receive email alerts for new submissions</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={emailNotifications}
                        onChange={(e) => setEmailNotifications(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tactical-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tactical-600"></div>
                    </label>
                  </div>

                  {emailNotifications && (
                    <div className="mt-4 pt-4 border-t border-gunmetal-700">
                      <label className="block text-sm font-bold text-gray-300 mb-2">
                        Notification Email
                      </label>
                      <input
                        type="email"
                        defaultValue="admin@jetbuilder.io"
                        className="w-full bg-gunmetal-900 text-white border border-gunmetal-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Multiple emails can be separated by commas
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-gunmetal-950 border border-gunmetal-700 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Bell className="w-5 h-5 text-tactical-400" />
                      <div>
                        <h3 className="text-sm font-semibold text-white">Slack Notifications</h3>
                        <p className="text-xs text-gray-400">Send alerts to Slack channel</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={slackNotifications}
                        onChange={(e) => setSlackNotifications(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tactical-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tactical-600"></div>
                    </label>
                  </div>

                  {slackNotifications && (
                    <div className="mt-4 pt-4 border-t border-gunmetal-700">
                      <label className="block text-sm font-bold text-gray-300 mb-2">
                        Slack Webhook URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://hooks.slack.com/services/..."
                        className="w-full bg-gunmetal-900 text-white border border-gunmetal-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      />
                    </div>
                  )}
                </div>

                <Button className="bg-tactical-600 hover:bg-tactical-700">
                  <Save className="w-4 h-4 mr-2" />
                  Save Notification Settings
                </Button>
              </div>
            </motion.div>
          )}

          {/* Integrations Tab */}
          {activeTab === 'integrations' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-6">
                Integrations
              </h2>

              <div className="space-y-4">
                <div className="bg-gunmetal-950 border border-gunmetal-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">HubSpot CRM</h3>
                      <p className="text-xs text-gray-400">Sync contacts to HubSpot automatically</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-900 text-gray-400 rounded-full">
                      Not Connected
                    </span>
                  </div>
                  <Button className="bg-gunmetal-900 hover:bg-gunmetal-800 border border-gunmetal-700">
                    Connect HubSpot
                  </Button>
                </div>

                <div className="bg-gunmetal-950 border border-gunmetal-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">Salesforce</h3>
                      <p className="text-xs text-gray-400">Export leads to Salesforce CRM</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-900 text-gray-400 rounded-full">
                      Not Connected
                    </span>
                  </div>
                  <Button className="bg-gunmetal-900 hover:bg-gunmetal-800 border border-gunmetal-700">
                    Connect Salesforce
                  </Button>
                </div>

                <div className="bg-gunmetal-950 border border-gunmetal-700 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1">Email Service</h3>
                      <p className="text-xs text-gray-400">Configure email sending service</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-semibold bg-tactical-900 text-tactical-300 rounded-full">
                      Demo Mode
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2">
                        Service Provider
                      </label>
                      <select className="w-full bg-gunmetal-900 text-white border border-gunmetal-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tactical-600">
                        <option>Resend</option>
                        <option>SendGrid</option>
                        <option>AWS SES</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2">
                        API Key
                      </label>
                      <input
                        type="password"
                        placeholder="Enter API key..."
                        className="w-full bg-gunmetal-900 text-white border border-gunmetal-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tactical-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Data Management Tab */}
          {activeTab === 'data' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-xl font-bold text-white uppercase tracking-wide mb-6">
                Data Management
              </h2>

              <div className="space-y-6">
                <div className="bg-gunmetal-950 border border-gunmetal-700 rounded-lg p-6">
                  <h3 className="text-sm font-semibold text-white mb-4">Export Data</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Export all contacts and submissions to CSV format
                  </p>
                  <Button className="bg-tactical-600 hover:bg-tactical-700">
                    <Database className="w-4 h-4 mr-2" />
                    Export All Data
                  </Button>
                </div>

                <div className="bg-gunmetal-950 border border-red-700 rounded-lg p-6">
                  <h3 className="text-sm font-semibold text-red-400 mb-4">Danger Zone</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Permanently delete all CRM data. This action cannot be undone.
                  </p>
                  <Button className="bg-red-900 hover:bg-red-800 text-red-300">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete All Data
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}


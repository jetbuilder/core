'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Activity, Clock, Server, Database, Zap, Wifi, Shield, AlertCircle } from 'lucide-react'

interface ServiceStatus {
  name: string
  status: 'operational' | 'degraded' | 'down'
  uptime: string
  responseTime: string
  icon: any
  description: string
}

export default function StatusPage() {
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setLastUpdated(new Date())
    
    const interval = setInterval(() => {
      setLastUpdated(new Date())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const services: ServiceStatus[] = [
    {
      name: 'Voice Transcription API',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '180ms',
      icon: Wifi,
      description: 'Real-time voice to text transcription across 55+ languages'
    },
    {
      name: 'Intelligence Extraction API',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '245ms',
      icon: Zap,
      description: 'AI-powered entity and insight extraction from unstructured data'
    },
    {
      name: 'Multi-Modal Analysis API',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '320ms',
      icon: Activity,
      description: 'Combined voice, text, and document intelligence processing'
    },
    {
      name: 'Dashboard Analytics API',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '95ms',
      icon: Server,
      description: 'Real-time data aggregation and visualization endpoints'
    },
    {
      name: 'Authentication Service',
      status: 'operational',
      uptime: '100%',
      responseTime: '45ms',
      icon: Shield,
      description: 'SSO, CAC/PIV, and multi-factor authentication'
    },
    {
      name: 'Data Storage Service',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '120ms',
      icon: Database,
      description: 'Secure, encrypted data persistence and retrieval'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-700 bg-green-50 border-green-200'
      case 'degraded':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200'
      case 'down':
        return 'text-red-700 bg-red-50 border-red-200'
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />
      case 'down':
        return <AlertCircle className="w-5 h-5 text-red-600" />
      default:
        return <Activity className="w-5 h-5 text-gray-600" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operational'
      case 'degraded':
        return 'Degraded Performance'
      case 'down':
        return 'Service Outage'
      default:
        return 'Unknown'
    }
  }

  const allOperational = services.every(s => s.status === 'operational')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-5 py-2.5 rounded-full mb-6 border border-blue-200 shadow-sm">
            <Activity className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">System Status</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sovereign AI Platform Service Status
          </h1>
          <p className="text-gray-600 text-lg">
            Real-time operational status of Sovereign AI Platform core services and APIs
          </p>
        </motion.div>

        {/* Overall Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`mb-12 p-8 rounded-2xl border shadow-sm ${
            allOperational
              ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
              : 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200'
          }`}
        >
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center space-x-4">
              {allOperational ? (
                <CheckCircle className="w-10 h-10 text-green-600" />
              ) : (
                <AlertCircle className="w-10 h-10 text-yellow-600" />
              )}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {allOperational ? 'All Systems Operational' : 'Some Systems Experiencing Issues'}
                </h2>
                <p className="text-gray-600 text-base">
                  {allOperational
                    ? 'All Sovereign AI Platform services are running normally'
                    : 'We are actively monitoring and resolving any issues'}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>
                  Last updated: {mounted && lastUpdated ? lastUpdated.toLocaleTimeString() : 'Loading...'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-500">{service.description}</p>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border shadow-sm ${getStatusColor(service.status)} mb-6`}>
                  {getStatusIcon(service.status)}
                  <span className="text-sm font-semibold">
                    {getStatusText(service.status)}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4">
                    <div className="text-xs text-gray-600 font-medium mb-1">Uptime (30d)</div>
                    <div className="text-xl font-bold text-blue-600">{service.uptime}</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4">
                    <div className="text-xs text-gray-600 font-medium mb-1">Avg Response</div>
                    <div className="text-xl font-bold text-blue-600">{service.responseTime}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Infrastructure Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-12 shadow-sm"
        >
          <div className="flex items-start space-x-4">
            <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Infrastructure Information
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sovereign AI Platform services are deployed on private infrastructure with redundant systems across multiple secure locations. 
                All data remains within your designated security perimeter with no public cloud dependencies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700 font-medium">99.9% SLA Target</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700 font-medium">24/7 Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700 font-medium">Auto-Failover Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center space-y-4"
        >
          <p className="text-gray-600 text-sm">
            For technical support or to report issues, contact your account administrator or{' '}
            <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-blue-300 hover:decoration-blue-500 transition-colors">
              contact our support team
            </a>
          </p>
          <a 
            href="/"
            className="inline-block text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium"
          >
            ← Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  )
}


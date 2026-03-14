'use client'

import { useState } from 'react'
import { Code, Lock, Book, Terminal, Key, Shield, FileCode, GitBranch, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'

export default function Developers() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Login logic would go here
    console.log('Login attempt:', email)
  }

  const developerResources = [
    {
      icon: Book,
      title: 'API Documentation',
      description: 'Comprehensive guides for integrating autonomous AI agents into your systems',
    },
    {
      icon: Terminal,
      title: 'SDK Libraries',
      description: 'Python, Java, C++ SDKs for on-premises deployment and agent orchestration',
    },
    {
      icon: FileCode,
      title: 'Code Examples',
      description: 'Production-ready examples for air-gapped deployments and secure integrations',
    },
    {
      icon: GitBranch,
      title: 'Private Repository',
      description: 'Access to secure, version-controlled deployment packages and updates',
    },
  ]

  return (
    <section id="developers" className="section-padding bg-gunmetal-950">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-gunmetal-800 border border-tactical-700 px-4 py-2 rounded-sm mb-6">
              <Lock className="w-5 h-5 text-tactical-400" />
              <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Authorized Access Only</span>
            </div>
          </motion.div>
          
          <motion.h2
            className="heading-lg text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Developer Portal
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Private developer resources for authorized customers only. Access SDKs, documentation, and deployment tools for your on-premises AI agent infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Login Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gunmetal-900 border-2 border-tactical-700 rounded-sm p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-tactical-900 rounded-sm flex items-center justify-center">
                  <Key className="w-6 h-6 text-tactical-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Customer Login</h3>
                  <p className="text-sm text-gray-400">Secure access for authorized customers</p>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-300 uppercase tracking-wide mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@agency.gov"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gunmetal-800 border-gunmetal-700 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-bold text-gray-300 uppercase tracking-wide mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gunmetal-800 border-gunmetal-700 text-white"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-tactical-600 hover:bg-tactical-700 font-bold uppercase tracking-wide"
                  size="lg"
                >
                  <Lock className="mr-2 h-5 w-5" />
                  Secure Login
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-gunmetal-700">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-tactical-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-gray-400">
                    <p className="font-bold text-gray-300 mb-1">PRIVATE ACCESS ONLY</p>
                    <p>This portal is restricted to authorized customers with active contracts. All access is logged and monitored for security compliance.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-xs">
                <a href="#" className="block text-tactical-400 hover:text-tactical-300 font-semibold">
                  Forgot Password?
                </a>
                <a href="#" className="block text-tactical-400 hover:text-tactical-300 font-semibold">
                  Request Access (Existing Customers)
                </a>
              </div>
            </div>
          </motion.div>

          {/* Developer Resources */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="bg-gunmetal-900 border-2 border-gunmetal-700 rounded-sm p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Code className="w-6 h-6 text-tactical-400" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">Available Resources</h3>
                </div>

                <div className="space-y-4">
                  {developerResources.map((resource, index) => {
                    const Icon = resource.icon
                    return (
                      <div 
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-gunmetal-950 border border-gunmetal-700 rounded-sm hover:border-tactical-700 transition-colors"
                      >
                        <div className="w-10 h-10 bg-gunmetal-800 rounded-sm flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-tactical-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white mb-1">{resource.title}</h4>
                          <p className="text-xs text-gray-400">{resource.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-gradient-to-r from-tactical-900 to-tactical-800 border-2 border-tactical-700 rounded-sm p-6">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-tactical-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-2">
                      For Authorized Customers Only
                    </h4>
                    <p className="text-xs text-gray-200 mb-3">
                      Access to developer resources requires an active contract and security clearance verification. All materials are classified and must be deployed only on approved private infrastructure.
                    </p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• Air-gapped deployment packages</li>
                      <li>• On-premises installation guides</li>
                      <li>• Secure SDK libraries</li>
                      <li>• Private technical support</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Sales */}
              <div className="bg-gunmetal-900 border-2 border-gunmetal-700 rounded-sm p-6 text-center">
                <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-3">
                  Not a Customer Yet?
                </h4>
                <p className="text-xs text-gray-400 mb-4">
                  Contact our team for a confidential consultation about deploying autonomous AI agents on your private infrastructure.
                </p>
                <a href="/contact">
                  <Button variant="outline" size="default" className="border-tactical-600 text-tactical-400 hover:bg-tactical-900 font-bold uppercase">
                    Contact Sales Team
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


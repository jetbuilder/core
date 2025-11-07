'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Mail, Eye, EyeOff, Shield, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/button'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate authentication
    console.log('Sign in attempt:', { email })
    
    // In production, send to your authentication backend
    setTimeout(() => {
      setIsLoading(false)
      // Simulate error for demo
      setError('Authentication service not configured. Contact your administrator.')
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gunmetal-950 via-gunmetal-900 to-primary-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <a href="/" className="inline-flex flex-col mb-6">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">JetBuilder</span>
            <span className="text-3xl font-bold text-tactical-400 hover:text-tactical-300 transition-colors uppercase tracking-wider whitespace-nowrap">
              SOVEREIGN AI PLATFORM
            </span>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide -mt-1">Complete AI Independence</span>
          </a>
          <h1 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">
            Platform Access
          </h1>
          <p className="text-gray-400">
            Sign in to access your Sovereign AI Platform workspace
          </p>
        </motion.div>

        {/* Sign In Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600 focus:border-transparent"
                  placeholder="emsis"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600 focus:border-transparent"
                  placeholder="passwords"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-tactical-400 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-gunmetal-950 border-gunmetal-700 text-tactical-600 focus:ring-tactical-600 rounded"
                />
                <span className="ml-2 text-sm text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-tactical-400 hover:text-tactical-300 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-start space-x-2 p-3 bg-red-900/20 border border-red-700 rounded">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}

            {/* Sign In Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-tactical-600 hover:bg-tactical-700 text-white font-bold uppercase tracking-wide py-3"
            >
              {isLoading ? (
                <>
                  <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Authenticating...
                </>
              ) : (
                <>
                  <Shield className="inline-block mr-2 w-5 h-5" />
                  Sign In
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gunmetal-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gunmetal-900 text-gray-500 uppercase tracking-wider">Or</span>
            </div>
          </div>

          {/* SSO Options */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full bg-gunmetal-950 border border-gunmetal-700 hover:border-tactical-700 text-gray-300 hover:text-white font-semibold py-3 rounded transition-colors"
            >
              Sign in with SSO
            </button>
            <button
              type="button"
              className="w-full bg-gunmetal-950 border border-gunmetal-700 hover:border-tactical-700 text-gray-300 hover:text-white font-semibold py-3 rounded transition-colors"
            >
              Sign in with CAC/PIV
            </button>
          </div>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            Don't have an account?{' '}
            <a href="/contact" className="text-tactical-400 hover:text-tactical-300 font-semibold transition-colors">
              Request Access
            </a>
          </p>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-4 bg-gunmetal-900/50 border border-tactical-800 rounded"
        >
          <div className="flex items-start space-x-2">
            <Shield className="w-4 h-4 text-tactical-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-500">
              Secure connection established. All authentication data is encrypted end-to-end. 
              By signing in, you agree to comply with your organization's security policies.
            </p>
          </div>
        </motion.div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <a 
            href="/"
            className="text-sm text-gray-500 hover:text-tactical-400 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}


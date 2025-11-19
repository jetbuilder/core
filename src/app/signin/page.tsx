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
    <div className="min-h-screen bg-vscode-bg flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <a href="/" className="inline-flex flex-col mb-6">
            <span className="text-xs text-vscode-comment">// jetbuilder-studio</span>
            <span className="text-3xl font-bold text-vscode-function hover:text-vscode-type transition-colors">
              auth.platform()
            </span>
            <span className="text-xs text-vscode-comment -mt-1">// sovereign-ai-access</span>
          </a>
          <div className="inline-block bg-vscode-sidebar border border-vscode-border rounded-sm px-3 py-1 mb-2">
            <span className="text-vscode-comment text-xs">// platform-access</span>
          </div>
          <h1 className="text-2xl font-bold text-vscode-function mb-2">
            signIn.authenticate()
          </h1>
          <p className="text-vscode-variable text-sm">
            Access your workspace and begin building
          </p>
        </motion.div>

        {/* Sign In Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-xs text-vscode-comment mb-2">
                // emailAddress
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-vscode-comment" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-vscode-type focus:border-vscode-type transition-colors"
                  placeholder="user@organization.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs text-vscode-comment mb-2">
                // password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-vscode-comment" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-vscode-bg text-vscode-variable border border-vscode-border rounded-sm pl-10 pr-12 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-vscode-type focus:border-vscode-type transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-vscode-comment hover:text-vscode-type transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-vscode-bg border-vscode-border text-vscode-type focus:ring-vscode-type focus:ring-1 rounded-sm"
                />
                <span className="ml-2 text-xs text-vscode-comment group-hover:text-vscode-variable transition-colors">rememberMe</span>
              </label>
              <a href="#" className="text-xs text-vscode-type hover:text-vscode-function transition-colors">
                forgotPassword()
              </a>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-start space-x-2 p-3 bg-vscode-warning/10 border border-vscode-warning rounded-sm">
                <AlertCircle className="w-4 h-4 text-vscode-warning flex-shrink-0 mt-0.5" />
                <p className="text-xs text-vscode-warning">{error}</p>
              </div>
            )}

            {/* Sign In Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-vscode-keyword hover:bg-vscode-selection text-white border border-vscode-border rounded-sm py-3 transition-colors"
            >
              {isLoading ? (
                <>
                  <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  <span className="text-xs">$ authenticating...</span>
                </>
              ) : (
                <>
                  <Shield className="inline-block mr-2 w-4 h-4" />
                  <span className="text-xs">$ sign-in</span>
                </>
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-vscode-border"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-vscode-sidebar text-vscode-comment">// or</span>
            </div>
          </div>

          {/* SSO Options */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full bg-vscode-bg border border-vscode-border hover:border-vscode-type text-vscode-variable hover:text-vscode-function py-3 rounded-sm transition-colors text-xs"
            >
              $ sso-login
            </button>
            <button
              type="button"
              className="w-full bg-vscode-bg border border-vscode-border hover:border-vscode-type text-vscode-variable hover:text-vscode-function py-3 rounded-sm transition-colors text-xs"
            >
              $ cac-piv-login
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
          <p className="text-vscode-variable text-xs">
            <span className="text-vscode-comment">// no-account?</span>{' '}
            <a href="/contact" className="text-vscode-type hover:text-vscode-function transition-colors">
              requestAccess()
            </a>
          </p>
        </motion.div>

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 p-4 bg-vscode-sidebar border border-vscode-border rounded-sm"
        >
          <div className="mb-2">
            <span className="text-vscode-comment text-xs">// security-notice</span>
          </div>
          <div className="flex items-start space-x-2">
            <Shield className="w-4 h-4 text-vscode-type flex-shrink-0 mt-0.5" />
            <p className="text-xs text-vscode-comment leading-relaxed">
              Secure connection established. All authentication data is encrypted end-to-end. 
              By signing in, you agree to comply with your organization's security policies.
            </p>
          </div>
        </motion.div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <a 
            href="/"
            className="text-xs text-vscode-comment hover:text-vscode-type transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}


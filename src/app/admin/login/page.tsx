'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lock, Mail, Shield, Eye, EyeOff } from 'lucide-react'
import Button from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const { login } = useAuth()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const success = await login(email, password)
    
    if (success) {
      router.push('/admin')
    } else {
      setError('Invalid email or password')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gunmetal-950 via-gunmetal-900 to-primary-950 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-tactical-900 border-2 border-tactical-600 rounded-lg mb-4">
            <Shield className="w-8 h-8 text-tactical-400" />
          </div>
          <h1 className="text-3xl font-bold text-white uppercase tracking-wide mb-2">
            JetBuilder CRM
          </h1>
          <p className="text-gray-400">Admin Access Portal</p>
        </div>

        <form onSubmit={handleLogin} className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-900 bg-opacity-20 border border-red-600 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@jetbuilder.io"
                className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full bg-gunmetal-950 text-white border border-gunmetal-700 rounded-lg pl-11 pr-11 py-3 focus:outline-none focus:ring-2 focus:ring-tactical-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 bg-gunmetal-950 border-gunmetal-700 text-tactical-600 focus:ring-tactical-600 rounded"
              />
              <span className="text-sm text-gray-400">Remember me</span>
            </label>
            <a href="#" className="text-sm text-tactical-400 hover:text-tactical-300">
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-tactical-600 hover:bg-tactical-700 text-white font-bold uppercase tracking-wide py-3"
          >
            {isLoading ? (
              <>
                <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </Button>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Demo credentials:<br />
              Admin: admin@jetbuilder.io / admin123<br />
              Sales: sales@jetbuilder.io / sales123
            </p>
          </div>
        </form>

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-gray-400 hover:text-tactical-400">
            ← Back to Website
          </a>
        </div>
      </motion.div>
    </div>
  )
}


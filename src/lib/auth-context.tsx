'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'sales' | 'recruiter'
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('admin_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Protect admin routes
  useEffect(() => {
    if (!isLoading) {
      const isAdminRoute = pathname?.startsWith('/admin') && pathname !== '/admin/login'
      const isLoginPage = pathname === '/admin/login'

      if (isAdminRoute && !user) {
        // Redirect to login if accessing admin route without authentication
        router.push('/admin/login')
      } else if (isLoginPage && user) {
        // Redirect to dashboard if already logged in
        router.push('/admin')
      }
    }
  }, [user, pathname, isLoading, router])

  const login = async (email: string, password: string): Promise<boolean> => {
    // TODO: Replace with real API call
    // Demo credentials
    if (email === 'admin@jetbuilder.io' && password === 'admin123') {
      const userData: User = {
        id: '1',
        name: 'Admin User',
        email: 'admin@jetbuilder.io',
        role: 'admin',
      }
      setUser(userData)
      localStorage.setItem('admin_user', JSON.stringify(userData))
      return true
    } else if (email === 'sales@jetbuilder.io' && password === 'sales123') {
      const userData: User = {
        id: '2',
        name: 'Sales Rep',
        email: 'sales@jetbuilder.io',
        role: 'sales',
      }
      setUser(userData)
      localStorage.setItem('admin_user', JSON.stringify(userData))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('admin_user')
    router.push('/admin/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}


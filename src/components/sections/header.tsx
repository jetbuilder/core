'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '/#product' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Compare', href: '/compare' },
    { label: 'Resources', href: '/#resources' },
    { label: 'Developers', href: '/#developers' },
    { label: 'Enterprise', href: '/#enterprise' },
    { label: 'Government', href: '/#government' },
    { label: 'Pricing', href: '/#pricing' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gunmetal-950 border-b border-gunmetal-800 shadow-lg">
      <div className="container">
        <div className="flex items-center py-4 gap-12">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex flex-col">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">JetBuilder</span>
              <span className="text-xl font-bold text-tactical-400 hover:text-tactical-300 transition-colors uppercase tracking-wider whitespace-nowrap">
                SOVEREIGN AI PLATFORM
              </span>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide -mt-1">Complete AI Independence</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-grow gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-tactical-400 font-bold transition-colors uppercase text-sm tracking-wide px-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-10 flex-shrink-0">
            <a href="/signin">
              <Button variant="outline" size="default" className="bg-transparent border-2 border-tactical-600 text-tactical-400 hover:bg-tactical-900/30 hover:text-tactical-300 font-bold uppercase transition-all whitespace-nowrap">
                Sign In
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="default" className="bg-transparent border-2 border-tactical-600 text-tactical-400 hover:bg-tactical-900/30 hover:text-tactical-300 font-bold uppercase transition-all">
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-tactical-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gunmetal-800 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-tactical-400 font-bold transition-colors py-2 uppercase text-sm tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gunmetal-800">
                <a href="/signin" className="w-full">
                  <Button variant="outline" className="w-full bg-transparent border-2 border-tactical-600 text-tactical-400 hover:bg-tactical-900/30 hover:text-tactical-300 font-bold uppercase whitespace-nowrap">
                    Sign In
                  </Button>
                </a>
                <a href="/contact" className="w-full">
                  <Button variant="outline" className="w-full bg-transparent border-2 border-tactical-600 text-tactical-400 hover:bg-tactical-900/30 hover:text-tactical-300 font-bold uppercase">
                    Contact
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}


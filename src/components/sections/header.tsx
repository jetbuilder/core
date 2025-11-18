'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Platform', href: '/#product' },
    { label: 'Solutions', href: '/#solution-examples' },
    { label: 'Why SLMs', href: '/#why-slms' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Resources', href: '/#resources' },
    { label: 'Enterprise', href: '/#enterprise' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-vscode-sidebar border-b border-vscode-border shadow-lg font-mono">
      <div className="container">
        <div className="flex items-center py-3 gap-12">
          {/* Logo - IDE Style */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center space-x-3">
              <div className="bg-vscode-keyword px-2 py-1 rounded text-xs font-bold">
                <span className="text-white">JB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-vscode-function whitespace-nowrap">
                  JetBuilder.studio
                </span>
                <span className="text-xs text-vscode-comment -mt-0.5">
                  // agentic-workflow-platform
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - IDE Tabs Style */}
          <nav className="hidden lg:flex items-center justify-center flex-grow gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-2.5 text-gray-200 hover:text-white hover:bg-vscode-hover transition-colors text-sm font-medium border-r border-vscode-border last:border-r-0 whitespace-nowrap tracking-wide"
              >
                {item.label.toLowerCase().replace(' ', '-')}
              </a>
            ))}
          </nav>

          {/* CTA Buttons - Terminal Style */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a href="/signin">
              <Button variant="outline" size="sm" className="bg-transparent border border-vscode-border text-vscode-variable hover:bg-vscode-hover hover:text-vscode-function font-mono text-xs transition-all whitespace-nowrap">
                ./sign-in
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="sm" className="bg-vscode-keyword text-white hover:bg-vscode-selection border border-vscode-border font-mono text-xs transition-all">
                $ contact
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-vscode-variable hover:text-vscode-function transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - IDE Style */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-vscode-border animate-fade-in bg-vscode-sidebar">
            <nav className="flex flex-col space-y-2 font-mono">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-200 hover:text-white hover:bg-vscode-hover transition-colors py-3 px-4 text-sm font-medium border-b border-vscode-border tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label.toLowerCase().replace(' ', '-')}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-3 px-4">
                <a href="/signin" className="w-full">
                  <Button variant="outline" className="w-full bg-transparent border border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono text-sm whitespace-nowrap">
                    ./sign-in
                  </Button>
                </a>
                <a href="/contact" className="w-full">
                  <Button variant="outline" className="w-full bg-vscode-keyword text-white hover:bg-vscode-selection border border-vscode-border font-mono text-sm">
                    $ contact
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


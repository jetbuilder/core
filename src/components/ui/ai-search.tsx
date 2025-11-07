'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Sparkles, ArrowRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { solutions } from '@/data/solutions'
import { useCases } from '@/data/use-cases'
import { enterpriseOfferings } from '@/data/enterprise'
import { governmentOfferings } from '@/data/government'

interface SearchResult {
  id: string
  title: string
  description: string
  category: string
  type: 'solution' | 'use-case' | 'enterprise' | 'government'
  href: string
  score: number
}

export default function AISearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // AI-powered search function
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    const allContent: SearchResult[] = [
      ...solutions.map(s => ({
        id: s.id,
        title: s.title,
        description: s.description,
        category: s.category,
        type: 'solution' as const,
        href: `/#solution-${s.id}`,
        score: 0
      })),
      ...useCases.map(u => ({
        id: u.id,
        title: u.title,
        description: u.description,
        category: u.subtitle,
        type: 'use-case' as const,
        href: `/#usecase-${u.id}`,
        score: 0
      })),
      ...enterpriseOfferings.map(e => ({
        id: e.id,
        title: e.title,
        description: e.description,
        category: e.industry,
        type: 'enterprise' as const,
        href: `/#enterprise-${e.id}`,
        score: 0
      })),
      ...governmentOfferings.map(g => ({
        id: g.id,
        title: g.title,
        description: g.description,
        category: g.agency,
        type: 'government' as const,
        href: `/#government-${g.id}`,
        score: 0
      }))
    ]

    // Smart scoring algorithm
    const searchTerms = searchQuery.toLowerCase().split(' ').filter(t => t.length > 0)
    const scored = allContent.map(item => {
      let score = 0
      const searchableText = `${item.title || ''} ${item.description || ''} ${item.category || ''}`.toLowerCase()
      
      searchTerms.forEach(term => {
        if (item.title?.toLowerCase().includes(term)) score += 10
        if (item.category?.toLowerCase().includes(term)) score += 5
        if (item.description?.toLowerCase().includes(term)) score += 3
      })
      
      return { ...item, score }
    })

    const filtered = scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)

    setResults(filtered)
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      performSearch(query)
    }, 300)

    return () => clearTimeout(debounce)
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleResultClick = (href: string) => {
    setIsOpen(false)
    setQuery('')
    
    // Navigate to the element
    const elementId = href.replace('/#', '')
    const element = document.getElementById(elementId)
    
    if (element) {
      // Smooth scroll to element
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      
      // Add highlight class
      element.classList.add('search-highlight')
      
      // Remove highlight after animation
      setTimeout(() => {
        element.classList.remove('search-highlight')
      }, 3000)
    }
  }

  return (
    <div ref={searchRef} className="relative w-full">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-tactical-400 animate-pulse" />
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Ask AI: Find solutions for insurance, banking, healthcare, government..."
          className="w-full pl-20 pr-12 py-4 bg-gunmetal-800/80 border-2 border-tactical-700 rounded-lg text-white placeholder-gray-400 focus:border-tactical-500 focus:outline-none text-base transition-all"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setResults([])
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 bg-gunmetal-800 border-2 border-tactical-700 rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="p-3 border-b border-tactical-700 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-tactical-400" />
              <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">
                AI-Powered Results
              </span>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <motion.button
                  key={result.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleResultClick(result.href)}
                  className="w-full text-left block p-4 hover:bg-gunmetal-700 border-b border-gunmetal-700 last:border-b-0 transition-colors group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-bold text-tactical-500 uppercase">
                          {result.category}
                        </span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500 capitalize">
                          {result.type.replace('-', ' ')}
                        </span>
                      </div>
                      <h4 className="text-white font-bold mb-1 group-hover:text-tactical-400 transition-colors">
                        {result.title}
                      </h4>
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-tactical-400 ml-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      <AnimatePresence>
        {isOpen && query && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 bg-gunmetal-800 border-2 border-tactical-700 rounded-lg shadow-2xl p-6 text-center"
          >
            <p className="text-gray-400 text-sm">
              No results found. Try searching for industries like insurance, banking, healthcare, telecom, or government.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


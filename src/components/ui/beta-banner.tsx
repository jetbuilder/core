'use client'

import { TestTube, X } from 'lucide-react'
import { useState } from 'react'

export default function BetaBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-tactical-900 border-b-2 border-tactical-600 py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-center gap-3 text-center">
        <TestTube className="w-5 h-5 text-tactical-400 flex-shrink-0" />
        <p className="text-sm md:text-base text-white font-semibold">
          <span className="text-tactical-400 font-bold uppercase">JetBuilder Studio</span> is currently in Beta testing mode with selected enterprise customers
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}


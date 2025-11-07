'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Chatbot from './chatbot'

export default function ChatbotTrigger() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      {/* Floating Chatbot Button */}
      <AnimatePresence>
        {!isChatOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-tactical-600 to-tactical-700 hover:from-tactical-500 hover:to-tactical-600 text-white rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300 hover:scale-110"
            aria-label="Open chat"
          >
            <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
            
            {/* Pulse animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-tactical-500 opacity-75 animate-ping"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <Chatbot 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)}
      />
    </>
  )
}


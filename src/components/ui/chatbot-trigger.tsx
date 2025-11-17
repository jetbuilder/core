'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Chatbot from './chatbot'

export default function ChatbotTrigger() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      {/* Floating Chatbot Button - IDE Style */}
      <AnimatePresence>
        {!isChatOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-vscode-keyword hover:bg-vscode-selection border-2 border-vscode-border text-white rounded-sm shadow-2xl flex items-center justify-center group transition-all duration-300 hover:scale-105"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            
            {/* Pulse animation */}
            <span className="absolute inline-flex h-full w-full rounded-sm bg-vscode-type opacity-30 animate-ping"></span>
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


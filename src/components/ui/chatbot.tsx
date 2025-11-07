'use client'

import { useState, useRef, useEffect } from 'react'
import { X, Send, MessageCircle, Bot } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './button'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  isForm?: boolean
}

interface ChatbotProps {
  isOpen: boolean
  onClose: () => void
  topic?: string
}

interface ContactInfo {
  firstName: string
  lastName: string
  email: string
  company: string
  country: string
}

export default function Chatbot({ isOpen, onClose, topic }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    country: ''
  })
  const [hasSubmittedInfo, setHasSubmittedInfo] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      // Reset messages and show greeting based on topic whenever topic changes or chat opens
      const greeting = topic 
        ? `Hello! I'm here to help you learn more about our ${topic} solution. Please share your contact information below so we can send you detailed materials and our team can provide personalized assistance.`
        : "Hello! I'm here to help you learn more about Sovereign AI Platform—process intelligence from any data source including documents, voice, video, databases, and business systems. Please share your contact information below so we can send you detailed materials and our team can provide personalized assistance."
      
      setTimeout(() => {
        setMessages([{
          id: '1',
          text: greeting,
          sender: 'bot',
          timestamp: new Date(),
          isForm: true
        }])
        
        // Show form immediately with greeting
        setTimeout(() => {
          setShowForm(true)
        }, 500)
      }, 300)
      
      // Reset form state
      setShowForm(false)
      setHasSubmittedInfo(false)
      setContactInfo({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        country: ''
      })
    } else {
      // Clear messages when chat closes
      setMessages([])
    }
  }, [isOpen, topic])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Always show form on every question if user hasn't submitted info yet
    const shouldShowForm = !hasSubmittedInfo

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue, topic, hasSubmittedInfo)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        isForm: shouldShowForm
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
      
      // Show form after bot response if user hasn't submitted info
      if (shouldShowForm) {
        setTimeout(() => {
          setShowForm(true)
        }, 500)
      }
    }, 1500)
  }

  const handleSubmitContactInfo = async () => {
    // Validate required fields
    if (!contactInfo.firstName || !contactInfo.lastName || !contactInfo.email || !contactInfo.company || !contactInfo.country) {
      alert('Please fill in all fields')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(contactInfo.email)) {
      alert('Please enter a valid email address')
      return
    }

    try {
      const response = await fetch('/api/chatbot-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactInfo),
      })

      const result = await response.json()

      if (result.success) {
        setHasSubmittedInfo(true)
        setShowForm(false)

        // Add confirmation message
        const confirmationMessage: Message = {
          id: Date.now().toString(),
          text: `Thank you, ${contactInfo.firstName}! I've received your information. Our Sovereign AI Platform team at JetBuilder will send detailed information about our ${topic || 'sovereign AI solutions'} to ${contactInfo.email}. You can continue asking questions, and I'll provide more specific information now that I know your background.`,
          sender: 'bot',
          timestamp: new Date()
        }
        setMessages(prev => [...prev, confirmationMessage])
      } else {
        alert('Failed to submit information. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting contact info:', error)
      alert('An error occurred. Please try again.')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 z-50 w-full max-w-md mx-4 sm:mx-0"
        >
          <div className="bg-gunmetal-950 border-2 border-tactical-600 rounded-lg shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-tactical-900 to-tactical-800 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-tactical-700 rounded-sm flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wide">Sovereign AI Assistant</h3>
                  <p className="text-xs text-gray-300">Powered by JetBuilder</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 bg-gunmetal-900 space-y-4">
              {messages.map((message) => (
                <div key={message.id}>
                  <div
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-tactical-700 text-white'
                          : 'bg-gunmetal-800 text-gray-200 border border-gunmetal-700'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                  
                  {/* Contact Form */}
                  {message.isForm && showForm && (
                    <div className="mt-4 bg-gunmetal-800 border-2 border-tactical-600 rounded-lg p-4">
                      <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-3">
                        Get Detailed Information
                      </h4>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            placeholder="First Name *"
                            value={contactInfo.firstName}
                            onChange={(e) => setContactInfo({...contactInfo, firstName: e.target.value})}
                            className="bg-gunmetal-900 text-white border border-gunmetal-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tactical-600"
                          />
                          <input
                            type="text"
                            placeholder="Last Name *"
                            value={contactInfo.lastName}
                            onChange={(e) => setContactInfo({...contactInfo, lastName: e.target.value})}
                            className="bg-gunmetal-900 text-white border border-gunmetal-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tactical-600"
                          />
                        </div>
                        <input
                          type="email"
                          placeholder="Email Address *"
                          value={contactInfo.email}
                          onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                          className="w-full bg-gunmetal-900 text-white border border-gunmetal-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tactical-600"
                        />
                        <input
                          type="text"
                          placeholder="Company Name *"
                          value={contactInfo.company}
                          onChange={(e) => setContactInfo({...contactInfo, company: e.target.value})}
                          className="w-full bg-gunmetal-900 text-white border border-gunmetal-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tactical-600"
                        />
                        <input
                          type="text"
                          placeholder="Country *"
                          value={contactInfo.country}
                          onChange={(e) => setContactInfo({...contactInfo, country: e.target.value})}
                          className="w-full bg-gunmetal-900 text-white border border-gunmetal-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tactical-600"
                        />
                        <button
                          onClick={handleSubmitContactInfo}
                          className="w-full bg-tactical-700 hover:bg-tactical-600 text-white font-bold uppercase tracking-wide py-2 rounded text-sm transition-colors"
                        >
                          Submit Information
                        </button>
                        <p className="text-xs text-gray-400 text-center">
                          Your information is secure and will only be used to send you relevant materials.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gunmetal-800 border border-gunmetal-700 rounded-lg p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-tactical-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-tactical-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-tactical-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-gunmetal-950 border-t border-gunmetal-800">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 bg-gunmetal-800 text-white border border-gunmetal-700 rounded-sm px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-tactical-600"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-tactical-700 hover:bg-tactical-600 disabled:bg-gunmetal-700 disabled:cursor-not-allowed text-white px-4 py-2 rounded-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Secure • Private • On-Premises
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function checkIfFormNeeded(userInput: string): boolean {
  const input = userInput.toLowerCase()
  
  // Keywords that indicate user wants more information
  const formTriggers = [
    'more information', 'send me', 'contact', 'demo', 'trial', 'price', 'pricing',
    'cost', 'quote', 'consultation', 'brochure', 'whitepaper', 'details',
    'interested', 'learn more', 'tell me more', 'send information', 'get in touch',
    'reach out', 'schedule', 'meeting', 'call me', 'email me'
  ]
  
  return formTriggers.some(trigger => input.includes(trigger))
}

function generateBotResponse(userInput: string, topic?: string, hasContactInfo: boolean = false): string {
  const input = userInput.toLowerCase()
  
  // Insurance Claims specific responses
  if (topic?.toLowerCase().includes('insurance')) {
    if (input.includes('process') || input.includes('work') || input.includes('how')) {
      return "Our Insurance Claims Intelligence solution processes voice calls, claim documents, medical records, and unstructured data at massive scale. The Rust-powered engine extracts intelligence from customer calls, adjuster notes, and medical documentation in real-time, with microsecond latency. Processing happens on your private infrastructure with minimal external dependencies."
    }
    if (input.includes('security') || input.includes('compliance')) {
      return "The solution is deployed on your on-premises infrastructure with infrastructure designed to support HIPAA and state insurance compliance requirements. Built with Rust for memory safety, helping reduce up to 70% of common security vulnerabilities. Data sovereignty controls and air-gap capability available."
    }
    if (input.includes('fraud') || input.includes('detection')) {
      return "Our agentic AI system analyzes voice patterns, claim history, medical records, and cross-references data across millions of claims to detect anomalies and fraud indicators in real-time. Long-term memory systems identify patterns across years of claims data while maintaining sub-second response times."
    }
    if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      if (hasContactInfo) {
        return "Thank you for your interest! Pricing is customized based on your claim volume, deployment scale, and compliance requirements. Our enterprise team will reach out to you shortly with a detailed proposal tailored to your needs."
      }
      return "Pricing is customized based on your claim volume, deployment scale, and compliance requirements. Our enterprise team will design a private infrastructure deployment tailored to your needs. Please share your contact information below, and we'll send you a detailed pricing proposal."
    }
    if (input.includes('integrate') || input.includes('system')) {
      return "Our platform integrates with major claims management systems, policy administration systems, and core insurance platforms. APIs and connectors deploy on your infrastructure with no external data transfer. Full audit trails and compliance logging included."
    }
  }
  
  // Healthcare specific responses
  if (topic?.toLowerCase().includes('health') || topic?.toLowerCase().includes('medical')) {
    if (input.includes('hipaa') || input.includes('compliance')) {
      return "Absolutely. Our Healthcare Intelligence platform is designed to support HIPAA compliance with on-premises deployment. All voice intelligence, EHR processing, and patient data analysis happens within your private infrastructure. Built with Rust for maximum security—memory-safe architecture helps eliminate common buffer overflows and data leaks."
    }
    if (input.includes('process') || input.includes('work') || input.includes('how')) {
      return "Our solution processes patient-clinician conversations, clinical notes, lab results, imaging reports, and unstructured medical data at massive scale. Extract clinical insights from voice recordings, identify treatment patterns, and flag potential issues—all in real-time. Deployed on your on-premises infrastructure with minimal external dependencies."
    }
    if (input.includes('integrate') || input.includes('ehr')) {
      return "We integrate seamlessly with Epic, Cerner, Meditech, and other major EHR systems. Connectors run on your infrastructure with data isolation controls. Voice intelligence automatically enriches patient records while supporting HIPAA compliance requirements and providing audit logging."
    }
  }
  
  // Banking specific responses
  if (topic?.toLowerCase().includes('bank') || topic?.toLowerCase().includes('financial')) {
    if (input.includes('compliance') || input.includes('regulatory')) {
      return "Our Banking Intelligence solution is designed to support PCI-DSS, SOX, GLBA, and financial regulatory requirements. Deployed on your private infrastructure with comprehensive audit logging. The Rust-powered core provides memory safety features and significantly reduces security vulnerabilities from common exploits."
    }
    if (input.includes('process') || input.includes('work') || input.includes('how')) {
      return "Process customer calls, transaction data, loan applications, KYC documents, and financial records at massive scale. Our agentic AI extracts intelligence from voice conversations, detects suspicious patterns, and automates compliance workflows—all on your private infrastructure with microsecond latency."
    }
    if (input.includes('fraud') || input.includes('aml')) {
      return "Our system provides real-time fraud detection and AML monitoring by analyzing voice patterns, transaction history, and customer behavior across millions of interactions. Long-term memory systems identify sophisticated fraud patterns while maintaining sub-second response times."
    }
  }
  
  // Legal specific responses
  if (topic?.toLowerCase().includes('legal') || topic?.toLowerCase().includes('law')) {
    if (input.includes('process') || input.includes('work') || input.includes('how')) {
      return "Process depositions, court recordings, legal documents, case files, and contracts at massive scale. Our Rust-powered engine extracts intelligence from audio recordings, identifies key legal concepts, and performs semantic analysis on millions of pages—all on your private infrastructure."
    }
    if (input.includes('security') || input.includes('confidential')) {
      return "Attorney-client privilege protection with air-gapped deployment options. All voice and document processing happens on your infrastructure. Built with Rust for memory safety—helps reduce data leak vulnerabilities. Minimal external dependencies with air-gap capability."
    }
  }
  
  // Energy & Utilities specific responses
  if (topic?.toLowerCase().includes('energy') || topic?.toLowerCase().includes('utility')) {
    if (input.includes('process') || input.includes('work') || input.includes('how')) {
      return "Monitor field communications, analyze sensor data, process incident reports, and extract intelligence from maintenance logs at massive scale. Our agentic AI platform processes voice from field operations, SCADA data, and IoT streams in real-time—all deployed on your critical infrastructure."
    }
    if (input.includes('security') || input.includes('compliance')) {
      return "Designed to support NERC-CIP compliance with air-gapped deployment for critical infrastructure protection. Rust-powered core helps reduce memory vulnerabilities that could compromise control systems. Minimal external dependencies with air-gap capability."
    }
  }
  
  // Pharma specific responses
  if (topic?.toLowerCase().includes('pharma') || topic?.toLowerCase().includes('pharmaceutical')) {
    if (input.includes('process') || input.includes('work') || input.includes('how')) {
      return "Process clinical trial data, research communications, regulatory documents, and adverse event reports at massive scale. Extract intelligence from research calls, trial recordings, and unstructured scientific data—on your private R&D infrastructure with IP protection controls."
    }
    if (input.includes('compliance') || input.includes('fda')) {
      return "Designed to support FDA 21 CFR Part 11 compliance with GxP-ready deployment. All processing on your validated infrastructure with comprehensive audit logging. Rust-powered security provides data integrity features and helps reduce contamination risk from memory vulnerabilities."
    }
  }
  
  // Telecom specific responses
  if (topic?.toLowerCase().includes('telecom') || topic?.toLowerCase().includes('communication')) {
    if (input.includes('process') || input.includes('work') || input.includes('how')) {
      return "Process billions of voice calls, network logs, and customer interactions at carrier scale. Our Rust-powered platform handles millions of concurrent audio streams with microsecond latency. Extract intelligence from customer calls, network operations, and support interactions—deployed on your telecom infrastructure."
    }
    if (input.includes('scale') || input.includes('volume')) {
      return "Designed for carrier-grade scale—process billions of voice minutes monthly. Horizontal scaling on your infrastructure handles peak loads. Zero-cost Rust abstractions enable efficient hardware utilization. Sub-millisecond latency for real-time call analysis."
    }
  }
  
  // Manufacturing specific responses
  if (topic?.toLowerCase().includes('manufact') || topic?.toLowerCase().includes('industrial')) {
    if (input.includes('process') || input.includes('work') || input.includes('how')) {
      return "Monitor production floor communications, analyze quality control data, process maintenance logs, and extract intelligence from IoT sensor streams. Our platform processes voice from operations, machine data, and supply chain communications—all on your manufacturing infrastructure."
    }
    if (input.includes('integration') || input.includes('system')) {
      return "Integrates with MES, ERP, SCADA, and PLM systems. All connectors run on your OT network with complete air-gap capability. Real-time intelligence from shop floor to supply chain—no external cloud dependencies."
    }
  }
  
  // Government specific responses
  if (topic?.toLowerCase().includes('government') || topic?.toLowerCase().includes('public')) {
    if (input.includes('security') || input.includes('classified')) {
      return "FedRAMP High and IL-5 deployment capability with air-gapped options for classified environments. Built with Rust—same language as NSA security tools. Memory-safe architecture helps reduce common vulnerabilities. Data sovereignty controls with on-premises deployment."
    }
    if (input.includes('process') || input.includes('work') || input.includes('how')) {
      return "Process citizen interactions, emergency communications, inter-agency data, and public records at massive scale. Extract intelligence from 911 calls, public meetings, and government communications—all on your sovereign infrastructure with complete NIST 800-53 compliance."
    }
  }
  
  // General responses
  if (input.includes('rust') || input.includes('technology')) {
    return "Our core platform is engineered in Rust for maximum security and performance. This helps reduce up to 70% of common security vulnerabilities (memory safety bugs), provides C/C++ level performance without garbage collection pauses, and enables predictable microsecond-level latency for real-time operations. Used by NSA and security-critical systems."
  }
  
  if (input.includes('deploy') || input.includes('infrastructure')) {
    return "We deploy exclusively on your private infrastructure—on-premises, air-gapped, or private data center. No public cloud dependency whatsoever. The complete Rust-powered platform runs entirely in your environment with full data sovereignty. Setup typically takes 2-4 weeks depending on scale."
  }
  
  if (input.includes('demo') || input.includes('trial') || input.includes('demonstration')) {
    if (hasContactInfo) {
      return "Excellent! We offer confidential demonstrations on your premises using anonymized data. Our team will deploy a proof-of-concept system in your environment to showcase the voice intelligence and data processing capabilities. We'll contact you shortly to schedule your demo."
    }
    return "We offer confidential demonstrations on your premises using anonymized data. Our team will deploy a proof-of-concept system in your environment to showcase the voice intelligence and data processing capabilities. Please share your contact information below, and we'll schedule a demo for you."
  }
  
  if (input.includes('contact') || input.includes('reach out') || input.includes('get in touch') || input.includes('consultation')) {
    if (hasContactInfo) {
      return "Perfect! Our team will reach out to you shortly. In the meantime, feel free to ask any questions you have about our Sovereign AI Platform."
    }
    return "I'd be happy to connect you with our team! Please share your contact information below, and we'll reach out to you with detailed information about our solutions."
  }
  
  if (input.includes('send') && (input.includes('information') || input.includes('details') || input.includes('brochure') || input.includes('whitepaper'))) {
    if (hasContactInfo) {
      return "Great! We'll send you comprehensive materials about our Sovereign AI Platform, including technical specifications, case studies, and deployment options. You should receive them shortly."
    }
    return "I'd be happy to send you detailed information! Please share your contact information below, and we'll send you comprehensive materials about our solutions, including technical specifications, case studies, and deployment guides."
  }
  
  if (input.includes('scale') || input.includes('volume')) {
    return "Our Rust-powered architecture processes millions of audio streams and documents simultaneously with microsecond latency. The system scales horizontally on your infrastructure—we've deployed solutions handling billions of voice minutes annually. Zero-cost abstractions enable efficient hardware utilization."
  }

  if (input.includes('thank') || input.includes('thanks')) {
    return "You're welcome! Is there anything else you'd like to know about our Sovereign AI Platform?"
  }
  
  // Default response
  const defaultResponse = `Great question! Sovereign AI Platform ${topic ? `(${topic})` : ''} processes intelligence from any data source—documents, voice, video, databases, and business systems—with complete data sovereignty. Built with Rust for maximum security, deployed exclusively on your private infrastructure with zero cloud dependency.`
  
  if (hasContactInfo) {
    return defaultResponse + " Would you like to know more about security features, deployment options, or processing capabilities?"
  }
  
  return defaultResponse + " Please share your contact information below so our team can send you detailed technical documentation and case studies specific to your needs."
}


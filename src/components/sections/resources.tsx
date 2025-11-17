'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { resources } from '@/data/resources'
import { ArrowRight, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/button'
import Chatbot from '@/components/ui/chatbot'

export default function Resources() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatTopic, setChatTopic] = useState<string>('')

  const handleGetStarted = () => {
    setChatTopic('Get Started with Sovereign AI Platform')
    setIsChatOpen(true)
  }

  const handleContactSales = () => {
    setChatTopic('Contact Sales Team')
    setIsChatOpen(true)
  }

  const handleReadMore = (title: string) => {
    setChatTopic(`Request Report: ${title}`)
    setIsChatOpen(true)
  }
  return (
    <section id="resources" className="section-padding bg-vscode-bg">
      <div className="container font-mono">
        {/* Section Header - IDE Style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-4 border border-vscode-border">
            <BookOpen className="w-4 h-4 text-vscode-type" />
            <span className="text-xs font-semibold text-vscode-comment">// resources</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4">
            insights.latest()
          </h2>
          <p className="text-sm text-vscode-variable max-w-2xl mx-auto">
            Stay informed with our latest articles, guides, and industry insights
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gunmetal-900 hover:bg-gunmetal-800 transition-all duration-300 group cursor-pointer border-2 border-gunmetal-700 hover:border-tactical-700" onClick={() => handleReadMore(resource.title)}>
                <CardHeader>
                  <div className="text-xs font-semibold text-tactical-500 uppercase tracking-wide mb-2">
                    {resource.category}
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-tactical-400 transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4 text-gray-300">
                    {resource.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gunmetal-700">
                    <div>
                      <div className="font-medium text-gray-300">{resource.author}</div>
                      <div className="text-gray-400">{resource.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="heading-md mb-4">
            Power your operations with JetBuilder's Sovereign AI Platform
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Deploy autonomous AI agents on your private infrastructure. We handle the intelligence, you maintain complete control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="group" onClick={handleGetStarted}>
              Request Briefing
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
              onClick={handleContactSales}
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Chatbot */}
      <Chatbot 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        topic={chatTopic}
      />
    </section>
  )
}


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
              <Card className="h-full bg-vscode-sidebar hover:bg-vscode-hover transition-all duration-300 group cursor-pointer border border-vscode-border hover:border-vscode-type" onClick={() => handleReadMore(resource.title)}>
                <CardHeader>
                  <div className="text-xs font-bold text-vscode-comment mb-2">
                    // {resource.category}
                  </div>
                  <CardTitle className="text-base text-vscode-function group-hover:text-vscode-type transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs mb-4 text-vscode-variable">
                    {resource.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-xs text-vscode-comment pt-4 border-t border-vscode-border">
                    <div>
                      <div className="font-medium text-vscode-variable">{resource.author}</div>
                      <div className="text-vscode-comment">{resource.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-vscode-sidebar border-2 border-vscode-type rounded-sm p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-vscode-function mb-4">
            jetBuilder.sovereignAI()
          </h3>
          <p className="text-sm text-vscode-variable mb-8 max-w-2xl mx-auto">
            Deploy autonomous AI agents on your private infrastructure. We handle the intelligence, you maintain complete control.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group bg-vscode-keyword hover:bg-vscode-selection text-white font-mono text-xs uppercase" onClick={handleGetStarted}>
              request-briefing
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono text-xs uppercase"
              onClick={handleContactSales}
            >
              contact-sales
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


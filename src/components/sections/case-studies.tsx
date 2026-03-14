'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { caseStudies } from '@/data/case-studies'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-gunmetal-900">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-4">
            Proven in the Field
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by insurance companies, banks, telecoms, and financial services organizations worldwide
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gunmetal-950 hover:bg-gunmetal-800 transition-all duration-300 group cursor-pointer border-2 border-gunmetal-700 hover:border-tactical-700">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-xs font-bold text-tactical-500 uppercase tracking-wider">
                      Case Study
                    </div>
                    <div className="text-2xl font-bold text-tactical-400">
                      {study.metric}
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-tactical-400 transition-colors uppercase tracking-wide">
                    {study.company}
                  </CardTitle>
                  <div className="text-lg font-semibold text-gray-300 mt-2">
                    {study.title}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 text-gray-300">
                    {study.description}
                  </CardDescription>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-tactical-400 font-bold hover:text-tactical-300 group uppercase text-sm tracking-wide"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


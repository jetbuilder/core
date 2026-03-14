'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Book, FileText, Video, Code } from 'lucide-react'

const resources = [
  {
    icon: Book,
    title: 'Documentation',
    desc: 'Complete API reference and guides.',
    href: '#',
  },
  {
    icon: Code,
    title: 'Examples',
    desc: 'Sample projects and code snippets.',
    href: '#',
  },
  {
    icon: Video,
    title: 'Tutorials',
    desc: 'Video walkthroughs and demos.',
    href: '#',
  },
  {
    icon: FileText,
    title: 'Blog',
    desc: 'Technical articles and updates.',
    href: '#',
  },
]

export default function Resources() {
  return (
    <section id="resources" className="bg-[#0d1117] py-32">
      <div className="container px-6 max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-wide"
          >
            RESOURCES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Learn & Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Everything you need to get started and succeed with JetBuilder.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {resources.map((resource) => {
            const Icon = resource.icon
            return (
              <a
                key={resource.title}
                href={resource.href}
                className="border border-[#30363d] rounded-lg p-6 hover:border-gray-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#161b22] border border-[#30363d] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{resource.desc}</p>
                <span className="inline-flex items-center text-gray-400 text-sm group-hover:text-white transition-colors">
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center border border-[#30363d] rounded-lg p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Deploy your first agent in minutes. Complete documentation and support included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              View docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://github.com/jetbuilder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-[#30363d] text-white rounded-lg font-medium hover:bg-[#161b22] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

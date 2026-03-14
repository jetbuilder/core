'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "JetBuilder's Rust-based architecture gives us the performance we need. 10x faster than Python alternatives.",
    author: "Sarah Chen",
    role: "CTO, FinanceAI",
    avatar: "SC",
  },
  {
    quote: "Finally, an agent framework that takes security seriously. Air-gapped deployment was seamless.",
    author: "Marcus Rodriguez",
    role: "Security Lead, DefenseTech",
    avatar: "MR",
  },
  {
    quote: "The composable crate system is brilliant. We only use what we need, keeping our binary small.",
    author: "Emily Watson",
    role: "Principal Engineer, DataCorp",
    avatar: "EW",
  },
  {
    quote: "Migrated from LangChain in a week. The trait-based design made it trivial to swap providers.",
    author: "James Park",
    role: "ML Engineer, StartupX",
    avatar: "JP",
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#0d1117] py-32 overflow-hidden">
      <div className="container px-6 max-w-4xl mx-auto">

        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 tracking-widest uppercase"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Loved by Engineers
          </motion.h2>
        </div>

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
                "{testimonials[active].quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-[#161b22] border border-[#30363d] rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonials[active].avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-medium">{testimonials[active].author}</div>
                  <div className="text-gray-500 text-sm">{testimonials[active].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === active ? 'bg-white w-8' : 'bg-[#30363d]'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

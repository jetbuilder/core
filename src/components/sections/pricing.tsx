'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free Trial',
    target: '30-day managed hosting trial',
    price: '$0',
    period: '/30 days',
    features: [
      'Private framework access',
      'Managed cloud hosting included',
      'Build multi-agent systems',
      'Full platform capabilities',
      'Session monitoring',
      'Onboarding support',
    ],
    cta: 'Request demo',
    href: '/contact',
    variant: 'outline' as const,
  },
  {
    name: 'Pro',
    target: 'For managing production systems',
    price: '$150',
    period: '/mo',
    addons: [
      { label: '$30', description: 'per additional seat' },
      { label: '$95', description: 'per live connection' },
    ],
    features: [
      'Everything in Free',
      'Live production connections',
      '4 seats included',
      'Unlimited usage & monitoring',
      'Unlimited data retention',
      'Priority support',
    ],
    cta: 'Get started',
    href: '/contact',
    variant: 'primary' as const,
    popular: true,
  },
  {
    name: 'Enterprise',
    target: 'For mission critical, custom solutions',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Pro',
      'Dedicated support channel',
      'Technical account lead',
      'Custom SLAs',
      'SSO & RBAC',
      'Self-hosted deployment',
      'Air-gap support',
    ],
    cta: 'Book a call',
    href: '/contact',
    variant: 'outline' as const,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0d1117] py-32">
      <div className="container px-6 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Scale without surprises
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            No per-token fees, no surprise egress costs.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? 'bg-[#161b22] border-2 border-white'
                  : 'bg-[#0d1117] border border-[#30363d]'
              }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.target}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  )}
                </div>

                {/* Add-ons (for Pro plan) */}
                {plan.addons && (
                  <div className="mt-3 space-y-1">
                    {plan.addons.map((addon, idx) => (
                      <p key={idx} className="text-sm text-gray-500">
                        <span className="text-white font-medium">{addon.label}</span>{' '}
                        {addon.description}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={plan.href}
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  plan.variant === 'primary'
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'border border-[#30363d] text-white hover:bg-[#161b22] hover:border-gray-500'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          All plans include documentation, API access, and security updates.
        </motion.p>

      </div>
    </section>
  )
}

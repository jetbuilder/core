"use client";

import { motion } from "framer-motion";
import { Check, Zap, TrendingDown, Package, Target, Brain, X } from "lucide-react";
import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pricingPlans, pricingSupport, pricingAddons, pricingComparison } from "@/data/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-vscode-bg">
      <div className="container mx-auto px-4 font-mono">
        {/* Header - IDE Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <span className="text-vscode-comment text-sm">// pricing-plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-vscode-function">
            pricing.transparent()
          </h2>
          <p className="text-sm text-vscode-variable max-w-3xl mx-auto mb-3">
            Cloud-hosted or on-premises deployment options with complete data sovereignty
          </p>
          <p className="text-xs text-vscode-type font-semibold max-w-2xl mx-auto">
            Start with managed cloud hosting or deploy on your own infrastructure. Custom Small Language Models (SLMs) trained for your industry.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 max-w-[1600px] mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`p-6 h-full flex flex-col relative bg-vscode-sidebar ${
                  plan.highlight
                    ? "border-2 border-vscode-type shadow-xl scale-105"
                    : "border border-vscode-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                    Popular
                  </div>
                )}
                {plan.badge && !plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-tactical-600 to-tactical-700 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg rounded-tr-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-tactical-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1 text-sm">/ {plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                <div className="flex-grow mb-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={plan.ctaLink} className="w-full">
                  <Button
                    className={
                      plan.highlight
                        ? "w-full bg-gradient-to-r from-tactical-600 to-tactical-700 hover:from-tactical-700 hover:to-tactical-800 text-white"
                        : "w-full border-tactical-600 text-tactical-400 hover:bg-tactical-900"
                    }
                    variant={plan.highlight ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* JetBuilder Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-vscode-sidebar border-2 border-vscode-type">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-vscode-keyword rounded-sm">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3 text-vscode-function">
                  {pricingSupport.title}
                </h3>
                <p className="text-vscode-variable mb-4 text-sm">
                  {pricingSupport.description}
                </p>
                <div className="grid md:grid-cols-2 gap-2">
                  {pricingSupport.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-vscode-type flex-shrink-0" />
                      <span className="text-vscode-variable text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Additional Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2 text-vscode-function">{pricingAddons.title}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pricingAddons.options.map((option, idx) => (
              <Card key={idx} className="p-6 bg-vscode-sidebar border border-vscode-border hover:border-vscode-type transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-vscode-bg border border-vscode-border rounded-sm">
                    <Package className="w-5 h-5 text-vscode-type" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-base font-bold mb-1 text-vscode-function">{option.name}</h4>
                    <p className="text-vscode-type font-semibold mb-2 text-sm">{option.price}</p>
                    <p className="text-vscode-variable text-xs">{option.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* SLM vs LLM Advantage Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mt-20 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-vscode-function">{pricingComparison.slmAdvantage.title}</h3>
            <p className="text-base text-vscode-type font-semibold">{pricingComparison.slmAdvantage.subtitle}</p>
          </div>

          {/* Problems with LLMs */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pricingComparison.slmAdvantage.points.map((point, idx) => (
              <Card key={idx} className="p-6 bg-vscode-sidebar border-2 border-red-800">
                <div className="flex items-start gap-3 mb-4">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <h4 className="text-base font-bold text-red-300">{point.problem}</h4>
                </div>
                <p className="text-xs text-vscode-variable mb-3">{point.explanation}</p>
                <div className="bg-red-900/60 p-3 rounded-sm">
                  <p className="text-xs font-bold text-red-200">{point.cost}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* JetBuilder Solution */}
          <Card className="p-8 bg-vscode-sidebar border-2 border-vscode-type mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-vscode-type" />
              <h4 className="text-xl font-bold text-vscode-function">{pricingComparison.slmAdvantage.solution.title}</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {pricingComparison.slmAdvantage.solution.benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-vscode-type flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-vscode-function mb-2 text-sm">{item.benefit}</h5>
                    <p className="text-xs text-vscode-variable">{item.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Side by Side Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6 bg-vscode-sidebar border-2 border-red-800">
              <h4 className="text-lg font-bold mb-4 text-vscode-function">{pricingComparison.slmAdvantage.comparison.llm.title}</h4>
              <ul className="space-y-2">
                {pricingComparison.slmAdvantage.comparison.llm.characteristics.map((char, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-vscode-variable">
                    <X className="w-3 h-3 text-red-400 flex-shrink-0 mt-0.5" />
                    {char}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-vscode-sidebar border-2 border-vscode-type">
              <h4 className="text-lg font-bold mb-4 text-vscode-function">{pricingComparison.slmAdvantage.comparison.slm.title}</h4>
              <ul className="space-y-2">
                {pricingComparison.slmAdvantage.comparison.slm.characteristics.map((char, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-vscode-variable">
                    <Check className="w-3 h-3 text-vscode-type flex-shrink-0 mt-0.5" />
                    {char}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Analogy */}
          <Card className="p-6 bg-vscode-sidebar border-2 border-vscode-border">
            <div className="flex items-start gap-4">
              <Brain className="w-6 h-6 text-vscode-type flex-shrink-0" />
              <div>
                <p className="text-sm text-vscode-variable italic leading-relaxed">
                  "{pricingComparison.slmAdvantage.analogy}"
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Comprehensive TCO Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mt-20"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-vscode-function">{pricingComparison.title}</h3>
            <p className="text-sm text-vscode-variable mb-2">{pricingComparison.subtitle}</p>
            <p className="text-base font-bold text-vscode-type">{pricingComparison.description}</p>
          </div>

          {/* Cost Breakdown Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Cloud Costs */}
            <Card className="p-8 border-2 border-red-800 bg-vscode-sidebar">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-vscode-function">{pricingComparison.cloudCosts.title}</h4>
                <div className="text-right">
                  <div className="text-xs text-vscode-comment">Year 1 Total</div>
                  <div className="text-2xl font-bold text-red-400">{pricingComparison.cloudCosts.yearOneTotal}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {pricingComparison.cloudCosts.yearlyBreakdown.map((item, idx) => (
                  <div key={idx} className="border-b border-vscode-border pb-2">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-vscode-function text-sm">{item.category}</span>
                      <span className="font-bold text-red-400 text-sm">{item.cost}</span>
                    </div>
                    <p className="text-xs text-vscode-variable">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-900/60 p-4 rounded-sm mb-4">
                <div className="text-xs font-semibold text-vscode-comment mb-2">3-Year Total Cost</div>
                <div className="text-3xl font-bold text-red-300">{pricingComparison.cloudCosts.threeYearTotal}</div>
              </div>

              <div className="bg-vscode-bg p-4 rounded-sm">
                <div className="text-xs font-bold text-vscode-function mb-2">Hidden Risks & Limitations:</div>
                <ul className="space-y-1">
                  {pricingComparison.cloudCosts.hiddenRisks.map((risk, idx) => (
                    <li key={idx} className="text-xs text-vscode-variable flex items-start">
                      <span className="text-red-400 mr-2 font-bold">✗</span>
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* JetBuilder Costs */}
            <Card className="p-8 border-2 border-vscode-type bg-vscode-sidebar relative">
              <div className="absolute top-4 right-4 bg-vscode-keyword text-white px-4 py-2 rounded-sm font-bold text-xs">
                BEST VALUE
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold text-vscode-function">{pricingComparison.jetbuilderCosts.title}</h4>
                <div className="text-right">
                  <div className="text-xs text-vscode-comment">Year 1 Total</div>
                  <div className="text-2xl font-bold text-vscode-type">{pricingComparison.jetbuilderCosts.yearOneTotal}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {pricingComparison.jetbuilderCosts.yearlyBreakdown.map((item, idx) => (
                  <div key={idx} className="border-b border-vscode-border pb-2">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-vscode-function text-sm">{item.category}</span>
                      <span className={`font-bold text-sm ${item.cost === '$0' ? 'text-green-400' : 'text-vscode-type'}`}>
                        {item.cost}
                      </span>
                    </div>
                    <p className="text-xs text-vscode-variable">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-vscode-bg p-4 rounded-sm mb-2">
                <div className="text-xs font-semibold text-vscode-comment mb-2">3-Year Total Cost</div>
                <div className="text-3xl font-bold text-vscode-type">{pricingComparison.jetbuilderCosts.threeYearTotal}</div>
              </div>

              <div className="bg-green-950/60 p-4 rounded-sm mb-4">
                <div className="text-xs font-semibold text-vscode-comment mb-2">With 3-Year Commitment (15% discount)</div>
                <div className="text-3xl font-bold text-green-400">{pricingComparison.jetbuilderCosts.threeYearDiscount}</div>
              </div>

              <div className="bg-vscode-bg p-4 rounded-sm">
                <div className="text-xs font-bold text-vscode-function mb-2">Included Advantages:</div>
                <ul className="space-y-1">
                  {pricingComparison.jetbuilderCosts.advantages.map((adv, idx) => (
                    <li key={idx} className="text-xs text-vscode-variable flex items-start">
                      <span className="text-green-400 mr-2 font-bold">✓</span>
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Savings Highlight */}
          <Card className="p-10 bg-vscode-sidebar border-2 border-vscode-type text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-vscode-function">totalSavings.withJetBuilder()</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-xs text-vscode-comment mb-2">Year 1 Savings</div>
                  <div className="text-4xl font-bold mb-2 text-green-400">{pricingComparison.savingsCalculation.yearOne.savings}</div>
                  <div className="text-sm text-vscode-variable">({pricingComparison.savingsCalculation.yearOne.savingsPercent} lower cost)</div>
                </div>
                
                <div>
                  <div className="text-xs text-vscode-comment mb-2">3-Year Savings (with discount)</div>
                  <div className="text-4xl font-bold mb-2 text-green-400">{pricingComparison.savingsCalculation.threeYear.savingsWithDiscount}</div>
                  <div className="text-sm text-vscode-variable">({pricingComparison.savingsCalculation.threeYear.savingsPercentWithDiscount} lower cost)</div>
                </div>
              </div>

              <div className="bg-vscode-bg border border-vscode-border rounded-sm p-6 max-w-2xl mx-auto">
                <div className="text-base font-bold mb-3 text-vscode-type">ROI Payback Period</div>
                <div className="text-4xl font-bold mb-2 text-vscode-function">{pricingComparison.savingsCalculation.roi.paybackPeriod}</div>
                <div className="text-sm text-vscode-comment">{pricingComparison.savingsCalculation.roi.description}</div>
              </div>

              <div className="mt-8 text-sm font-semibold text-vscode-variable">
                JetBuilder delivers nearly 2x better value over 3 years - with complete data sovereignty, custom SLMs, and zero hidden costs.
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-vscode-variable mb-4 text-sm">
            // Not sure which option is right for you?
          </p>
          <Button size="lg" variant="outline" className="border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono text-xs uppercase" onClick={() => window.open('https://cal.com/jetbuilder-expert', '_blank')}>
            schedule-consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { 
  Shield, DollarSign, Phone, Lock, Headphones, Heart, 
  ShoppingCart, Scale, Zap, Building, Pill, Factory,
  Check, ArrowRight, ChevronDown, ChevronUp
} from "lucide-react";
import { useState } from "react";
import { solutions } from "@/data/solutions";
import { enterpriseOfferings } from "@/data/enterprise";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";

const iconMap: { [key: string]: any } = {
  Shield,
  DollarSign,
  Phone,
  Lock,
  Headphones,
  Heart,
  ShoppingCart,
  Scale,
  Zap,
  Building,
  Pill,
  Factory
};

export default function CatalogPage() {
  const [expandedSolution, setExpandedSolution] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Get all unique categories
  const allCategories = [
    ...solutions.map(s => s.category),
    ...enterpriseOfferings.map(e => e.industry)
  ];
  const uniqueCategories = Array.from(new Set(allCategories));
  const categories = ["all", ...uniqueCategories];

  // Filter solutions based on selected category
  const filteredSolutions = selectedCategory === "all" 
    ? solutions 
    : solutions.filter(s => s.category === selectedCategory);

  const filteredEnterpriseOfferings = selectedCategory === "all"
    ? enterpriseOfferings
    : enterpriseOfferings.filter(e => e.industry === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedSolution(expandedSolution === id ? null : id);
  };

  const handleRequestDemo = (title: string) => {
    window.location.href = `/contact?solution=${encodeURIComponent(title)}`;
  };

  return (
    <main className="min-h-screen bg-gunmetal-950 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Pre-Built Solutions Catalog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Ready-to-deploy AI solutions for your industry. Each solution is pre-configured
            and can be deployed on your infrastructure with minimal setup.
          </p>
          <p className="text-lg text-tactical-400 font-semibold max-w-2xl mx-auto">
            All solutions include custom Small Language Models (SLMs) trained for your specific industry
            and complete data sovereignty with on-premises deployment.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-tactical-600 text-white shadow-lg"
                    : "bg-gunmetal-800 text-gray-300 hover:bg-gunmetal-700"
                }`}
              >
                {category === "all" ? "All Solutions" : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Industry Solutions Section */}
        {filteredSolutions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Industry-Specific Solutions
            </h2>
            <div className="space-y-4 max-w-6xl mx-auto">
              {filteredSolutions.map((solution, index) => {
                const Icon = iconMap[solution.icon];
                const isExpanded = expandedSolution === solution.id;

                return (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="p-6 bg-gunmetal-900 border-2 border-gunmetal-700 hover:border-tactical-500 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-tactical-900 rounded-lg flex-shrink-0">
                          <Icon className="w-8 h-8 text-tactical-400" />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <div className="text-sm text-tactical-400 font-semibold mb-1">
                                {solution.category}
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-2">
                                {solution.title}
                              </h3>
                            </div>
                            <button
                              onClick={() => toggleExpand(solution.id)}
                              className="p-2 bg-gunmetal-800 hover:bg-gunmetal-700 rounded-lg transition-colors flex-shrink-0"
                            >
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5 text-tactical-400" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-tactical-400" />
                              )}
                            </button>
                          </div>
                          
                          <p className="text-gray-300 mb-4">{solution.description}</p>

                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="border-t border-gunmetal-700 pt-4 mt-4">
                                <h4 className="text-lg font-bold text-white mb-3">Key Features:</h4>
                                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                                  {solution.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                      <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}

                          <div className="flex flex-wrap items-center gap-3">
                            <Button
                              onClick={() => handleRequestDemo(solution.title)}
                              className="bg-tactical-600 hover:bg-tactical-700 text-white"
                            >
                              Request Demo
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            <a href="/contact" className="text-sm text-tactical-400 hover:text-tactical-300 font-semibold">
                              Get Pricing Information
                            </a>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Enterprise Solutions Section */}
        {filteredEnterpriseOfferings.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Enterprise & Compliance-First Solutions
            </h2>
            <div className="space-y-4 max-w-6xl mx-auto">
              {filteredEnterpriseOfferings.map((offering, index) => {
                const Icon = iconMap[offering.icon];
                const isExpanded = expandedSolution === offering.id;

                return (
                  <motion.div
                    key={offering.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="p-6 bg-gunmetal-900 border-2 border-gunmetal-700 hover:border-tactical-500 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-tactical-900 rounded-lg flex-shrink-0">
                          <Icon className="w-8 h-8 text-tactical-400" />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <div className="text-sm text-tactical-400 font-semibold mb-1">
                                {offering.industry}
                              </div>
                              <h3 className="text-2xl font-bold text-white mb-2">
                                {offering.title}
                              </h3>
                            </div>
                            <button
                              onClick={() => toggleExpand(offering.id)}
                              className="p-2 bg-gunmetal-800 hover:bg-gunmetal-700 rounded-lg transition-colors flex-shrink-0"
                            >
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5 text-tactical-400" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-tactical-400" />
                              )}
                            </button>
                          </div>
                          
                          <p className="text-gray-300 mb-4">{offering.description}</p>

                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="border-t border-gunmetal-700 pt-4 mt-4">
                                <h4 className="text-lg font-bold text-white mb-3">Key Features:</h4>
                                <ul className="grid md:grid-cols-2 gap-3 mb-4">
                                  {offering.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                      <span className="text-gray-300 text-sm">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                                
                                <h4 className="text-lg font-bold text-white mb-3 mt-4">Compliance Support:</h4>
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {offering.compliance.map((comp, idx) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-1 bg-gunmetal-800 text-tactical-400 text-xs font-semibold rounded-full border border-tactical-700"
                                    >
                                      {comp}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}

                          <div className="flex flex-wrap items-center gap-3">
                            <Button
                              onClick={() => handleRequestDemo(offering.title)}
                              className="bg-tactical-600 hover:bg-tactical-700 text-white"
                            >
                              Request Demo
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            <a href="/contact" className="text-sm text-tactical-400 hover:text-tactical-300 font-semibold">
                              Get Pricing Information
                            </a>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-12 border-t border-gunmetal-700"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Don't See Your Industry?
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We can create custom solutions tailored to your specific requirements.
            Contact our team to discuss your needs.
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-tactical-600 hover:bg-tactical-700 text-white">
              Contact Sales Team
            </Button>
          </a>
        </motion.div>
      </div>
    </main>
  );
}


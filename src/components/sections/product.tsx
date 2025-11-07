'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { productFeatures, platformCapabilities } from '@/data/product'
import { Brain, Database, HardDrive, Network, Lightbulb, Wrench, Bot, Eye, CheckCircle, Layers, Cpu, Terminal, Code, FileCode, Settings, Play, FolderTree, Package, Boxes } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/button'
import { useState } from 'react'

const iconMap: Record<string, any> = {
  Brain,
  Database,
  HardDrive,
  Network,
  Lightbulb,
  Wrench,
  Bot,
  Eye,
}

export default function Product() {
  const [activeTab, setActiveTab] = useState('studio')
  const [activeSidebarItem, setActiveSidebarItem] = useState('overview')

  const tabs = [
    { id: 'studio', label: 'JetBuilder Studio', icon: Code },
    { id: 'platform', label: 'Platform Architecture', icon: Boxes },
    { id: 'runtime', label: 'Runtime Engine', icon: Cpu },
    { id: 'deployment', label: 'Deployment', icon: Package },
  ]

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: FileCode },
    { id: 'features', label: 'Core Features', icon: Layers },
    { id: 'agents', label: 'Agentic Framework', icon: Bot },
    { id: 'rust', label: 'Rust Core', icon: Terminal },
  ]

  return (
    <section id="product" className="section-padding bg-[#1e1e1e] relative">
      {/* IDE-style background grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="container relative z-10">
        {/* IDE-style Header Bar */}
        <motion.div
          className="bg-[#2b2b2b] border-b border-[#3c3c3c] -mx-4 sm:mx-0 sm:rounded-t-lg mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between px-6 py-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="ml-4 flex items-center space-x-2">
                <Code className="w-4 h-4 text-[#3794ff]" />
                <span className="text-[#cccccc] font-mono text-sm font-semibold">JetBuilder Studio IDE</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 bg-[#0e639c] text-white text-xs font-mono rounded">
                <span>BETA</span>
              </div>
              <span className="text-[#858585] text-xs font-mono">v1.0.0-beta</span>
            </div>
          </div>

          {/* Tab Bar */}
          <div className="flex items-center border-t border-[#3c3c3c] bg-[#252526]">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 text-sm font-mono border-r border-[#3c3c3c] transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#3794ff]'
                      : 'text-[#858585] hover:text-white hover:bg-[#2d2d30]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <span className="ml-1 text-[#858585]">●</span>
                  )}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* IDE-style Main Layout */}
        <div className="flex bg-[#252526] -mx-4 sm:mx-0 sm:rounded-b-lg border-x border-b border-[#3c3c3c] min-h-[800px]">
          {/* Sidebar */}
          <motion.div
            className="w-64 bg-[#252526] border-r border-[#3c3c3c] flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-4 border-b border-[#3c3c3c]">
              <div className="flex items-center space-x-2 mb-3">
                <FolderTree className="w-4 h-4 text-[#3794ff]" />
                <span className="text-[#cccccc] font-mono text-xs uppercase font-semibold">Project Explorer</span>
              </div>
            </div>
            <nav className="p-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSidebarItem(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded text-sm font-mono transition-colors ${
                      activeSidebarItem === item.id
                        ? 'bg-[#37373d] text-white'
                        : 'text-[#cccccc] hover:bg-[#2a2d2e]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${activeSidebarItem === item.id ? 'text-[#3794ff]' : 'text-[#858585]'}`} />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>

            {/* Sidebar Footer - Project Info */}
            <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-[#3c3c3c] bg-[#252526]">
              <div className="text-xs font-mono text-[#858585] space-y-1">
                <div className="flex justify-between">
                  <span>Lines:</span>
                  <span className="text-[#cccccc]">47,293</span>
                </div>
                <div className="flex justify-between">
                  <span>Modules:</span>
                  <span className="text-[#cccccc]">156</span>
                </div>
                <div className="flex justify-between">
                  <span>Language:</span>
                  <span className="text-[#3794ff]">Rust</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            className="flex-1 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-8">
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 text-xs font-mono text-[#858585] mb-6">
                <span>jetbuilder</span>
                <span>/</span>
                <span>studio</span>
                <span>/</span>
                <span className="text-[#cccccc]">{activeSidebarItem}.rs</span>
              </div>

              {activeSidebarItem === 'overview' && (
                <div className="space-y-6">
                  {/* Code-style header */}
                  <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-[#858585] font-mono text-sm select-none">1</div>
                      <div className="flex-1 font-mono text-sm">
                        <span className="text-[#c586c0]">struct</span>{' '}
                        <span className="text-[#4ec9b0]">JetBuilderStudio</span>{' '}
                        <span className="text-[#d4d4d4]">{'{'}</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 mb-4 ml-8">
                      <div className="text-[#858585] font-mono text-sm select-none">2</div>
                      <div className="flex-1 font-mono text-sm">
                        <span className="text-[#9cdcfe]">version</span>
                        <span className="text-[#d4d4d4]">:</span>{' '}
                        <span className="text-[#ce9178]">"1.0.0-beta"</span>
                        <span className="text-[#d4d4d4]">,</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 mb-4 ml-8">
                      <div className="text-[#858585] font-mono text-sm select-none">3</div>
                      <div className="flex-1 font-mono text-sm">
                        <span className="text-[#9cdcfe]">description</span>
                        <span className="text-[#d4d4d4]">:</span>{' '}
                        <span className="text-[#ce9178]">"Enterprise IDE for Sovereign AI Development"</span>
                        <span className="text-[#d4d4d4]">,</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="text-[#858585] font-mono text-sm select-none">4</div>
                      <div className="flex-1 font-mono text-sm">
                        <span className="text-[#d4d4d4]">{'}'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Terminal className="w-5 h-5 text-[#3794ff]" />
                      <h3 className="text-[#cccccc] font-mono text-lg font-bold">Overview</h3>
                    </div>
                    <p className="text-[#cccccc] text-sm leading-relaxed mb-4">
                      <span className="text-[#4ec9b0] font-semibold">JetBuilder Studio</span> is an integrated development and deployment platform that empowers your teams to build, train, and deploy custom Small Language Models (SLMs) entirely on your private infrastructure.
                    </p>
                    <p className="text-[#cccccc] text-sm leading-relaxed">
                      It combines intuitive visual tools with powerful APIs to deliver complete control over your AI capabilities—without cloud dependencies.
                    </p>
                  </div>

                  {/* Key Features in IDE style */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-center space-x-2 mb-3">
                        <Wrench className="w-4 h-4 text-[#4fc1ff]" />
                        <h4 className="text-[#4ec9b0] font-mono text-sm font-bold">Visual Development</h4>
                      </div>
                      <p className="text-[#cccccc] text-xs leading-relaxed">
                        No-code and low-code tools for building AI workflows, training pipelines, and agent orchestration.
                      </p>
                    </div>

                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-center space-x-2 mb-3">
                        <Database className="w-4 h-4 text-[#4fc1ff]" />
                        <h4 className="text-[#4ec9b0] font-mono text-sm font-bold">Custom Model Training</h4>
                      </div>
                      <p className="text-[#cccccc] text-xs leading-relaxed">
                        Train Small Language Models on your proprietary data with domain-specific accuracy.
                      </p>
                    </div>

                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-center space-x-2 mb-3">
                        <Bot className="w-4 h-4 text-[#4fc1ff]" />
                        <h4 className="text-[#4ec9b0] font-mono text-sm font-bold">Multi-Agent Orchestration</h4>
                      </div>
                      <p className="text-[#cccccc] text-xs leading-relaxed">
                        Design and deploy autonomous agent workflows that process documents and automate business processes.
                      </p>
                    </div>

                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-center space-x-2 mb-3">
                        <HardDrive className="w-4 h-4 text-[#4fc1ff]" />
                        <h4 className="text-[#4ec9b0] font-mono text-sm font-bold">On-Premises Deployment</h4>
                      </div>
                      <p className="text-[#cccccc] text-xs leading-relaxed">
                        Deploy directly to your infrastructure—private cloud, on-premises, or air-gapped environments.
                      </p>
                    </div>
                  </div>

                  {/* Note/Alert Box */}
                  <div className="bg-[#1e3a28] border border-[#2b5b3f] rounded p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#4ec9b0] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[#4ec9b0] font-mono text-sm font-bold mb-1">Enterprise & Government Ready</div>
                        <p className="text-[#cccccc] text-xs leading-relaxed">
                          Built for enterprises and government agencies that require complete control over their AI infrastructure. JetBuilder Studio eliminates the complexity of sovereign AI deployment while maintaining the highest standards of security, compliance, and performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSidebarItem === 'features' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Layers className="w-6 h-6 text-[#3794ff]" />
                    <h2 className="text-2xl font-mono font-bold text-[#cccccc]">Core Platform Features</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {productFeatures.slice(0, 6).map((feature, index) => {
                      const Icon = iconMap[feature.icon]
                      return (
                        <div key={feature.id} className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5 hover:border-[#3794ff] transition-colors">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-[#2b2b2b] border border-[#3c3c3c] rounded flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-[#3794ff]" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-[#4ec9b0] font-mono text-sm font-bold">{feature.title}</h3>
                                <span className="text-[#858585] text-xs font-mono uppercase">{feature.category}</span>
                              </div>
                              <p className="text-[#cccccc] text-xs mb-3">{feature.description}</p>
                              <div className="space-y-1">
                                {feature.capabilities.map((capability, idx) => (
                                  <div key={idx} className="flex items-start space-x-2">
                                    <span className="text-[#4fc1ff] mt-1">▸</span>
                                    <span className="text-[#cccccc] text-xs">{capability}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {activeSidebarItem === 'agents' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Bot className="w-6 h-6 text-[#3794ff]" />
                    <h2 className="text-2xl font-mono font-bold text-[#cccccc]">Agentic Framework Architecture</h2>
                  </div>
                  
                  <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-6 mb-6">
                    <p className="text-[#cccccc] text-sm">
                      Built on proven agentic AI principles with memory systems, autonomous decision-making, and multi-agent orchestration.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {platformCapabilities.map((capability, index) => {
                      const Icon = iconMap[capability.icon]
                      return (
                        <div key={capability.id} className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-[#2b2b2b] border border-[#3c3c3c] rounded flex items-center justify-center">
                              <Icon className="w-5 h-5 text-[#3794ff]" />
                            </div>
                            <div>
                              <h3 className="text-[#4ec9b0] font-mono text-sm font-bold">{capability.title}</h3>
                              <p className="text-[#858585] text-xs">{capability.description}</p>
                            </div>
                          </div>
                          <div className="space-y-1 ml-13">
                            {capability.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <span className="text-[#4fc1ff]">▸</span>
                                <span className="text-[#cccccc] text-xs">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {activeSidebarItem === 'rust' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Terminal className="w-6 h-6 text-[#3794ff]" />
                    <h2 className="text-2xl font-mono font-bold text-[#cccccc]">Built with Rust</h2>
                  </div>

                  <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-6">
                    <p className="text-[#cccccc] text-sm leading-relaxed mb-4">
                      Core platform engineered in Rust for maximum security, performance, and reliability. Memory safety without garbage collection, eliminating entire categories of vulnerabilities.
                    </p>
                    <div className="flex items-center space-x-2 p-3 bg-[#0e639c] rounded">
                      <Terminal className="w-4 h-4 text-white" />
                      <span className="text-white font-mono text-xs">Memory-Safe. Zero-Cost Abstractions. Fearless Concurrency.</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Memory Safety</h4>
                      <p className="text-[#cccccc] text-xs">
                        No buffer overflows, null pointer dereferences, or data races. Verified at compile time.
                      </p>
                    </div>

                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Zero-Cost Performance</h4>
                      <p className="text-[#cccccc] text-xs">
                        C/C++ level performance without runtime overhead. Process millions of events per second.
                      </p>
                    </div>

                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Concurrency Without Fear</h4>
                      <p className="text-[#cccccc] text-xs">
                        Safe concurrent operations by design. No race conditions or memory corruption.
                      </p>
                    </div>

                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Predictable Behavior</h4>
                      <p className="text-[#cccccc] text-xs">
                        No garbage collection pauses. Deterministic performance for real-time operations.
                      </p>
                    </div>
                  </div>

                  {/* Security advantages */}
                  <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-6">
                    <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-4">Security Advantages</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-[#4fc1ff]">▸</span>
                        <span className="text-[#cccccc] text-xs">70% of security vulnerabilities eliminated (memory safety bugs)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#4fc1ff]">▸</span>
                        <span className="text-[#cccccc] text-xs">No undefined behavior—catch errors at compile time, not runtime</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#4fc1ff]">▸</span>
                        <span className="text-[#cccccc] text-xs">Minimal attack surface—no runtime interpreter or VM</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#4fc1ff]">▸</span>
                        <span className="text-[#cccccc] text-xs">Used by NSA, Microsoft, Amazon for security-critical systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* IDE-style Status Bar */}
        <motion.div
          className="bg-[#007acc] -mx-4 sm:mx-0 sm:rounded-b-lg border-t border-[#3c3c3c] py-2 px-6 flex items-center justify-between text-xs font-mono text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-3 h-3" />
              <span>Build: Success</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="w-3 h-3" />
              <span>Rust 1.74.0</span>
            </div>
            <div>UTF-8</div>
          </div>
          <div className="flex items-center space-x-6">
            <div>Ln 47,293</div>
            <div>156 modules</div>
            <div>jetbuilder-studio v1.0.0-beta</div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded-lg p-8">
            <h3 className="text-2xl font-mono font-bold text-[#cccccc] mb-4">
              Start Building with JetBuilder Studio
            </h3>
            <p className="text-[#858585] mb-6 max-w-2xl mx-auto font-mono text-sm">
              Deploy the Rust-powered Sovereign AI Platform on your infrastructure. Memory-safe architecture with microsecond latency and zero cloud dependencies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0e639c] text-white hover:bg-[#1177bb] font-mono uppercase">
                Request Platform Demo
              </Button>
              <Button size="lg" variant="outline" className="border-[#3c3c3c] text-[#cccccc] hover:bg-[#37373d] font-mono uppercase">
                Download Technical Specs
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


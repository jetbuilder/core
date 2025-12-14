'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { productFeatures, platformCapabilities } from '@/data/product'
import { Brain, Database, HardDrive, Network, Lightbulb, Wrench, Bot, Eye, CheckCircle, Layers, Cpu, Terminal, Code, FileCode, Settings, Play, FolderTree, Package, Boxes, Globe, Server, Lock, TrendingUp } from 'lucide-react'
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
          <div className="flex items-center justify-between px-3 md:px-6 py-3">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="flex items-center space-x-1.5 md:space-x-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="ml-2 md:ml-4 flex items-center space-x-2">
                <Code className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#3794ff]" />
                <span className="text-[#cccccc] font-mono text-xs md:text-sm font-semibold">JetBuilder Studio IDE</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 md:space-x-2">
              <div className="px-2 md:px-3 py-1 bg-[#0e639c] text-white text-xs font-mono rounded">
                <span>BETA</span>
              </div>
              <span className="text-[#858585] text-xs font-mono hidden sm:inline">v1.0.0-beta</span>
            </div>
          </div>

          {/* Tab Bar - Scrollable on Mobile */}
          <div className="flex items-center border-t border-[#3c3c3c] bg-[#252526] overflow-x-auto scrollbar-thin scrollbar-thumb-[#3c3c3c]">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 md:px-4 py-2.5 text-xs md:text-sm font-mono border-r border-[#3c3c3c] transition-colors whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.id
                      ? 'bg-[#1e1e1e] text-white border-t-2 border-t-[#3794ff]'
                      : 'text-[#858585] hover:text-white hover:bg-[#2d2d30]'
                  }`}
                >
                  <Icon className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  {activeTab === tab.id && (
                    <span className="ml-1 text-[#858585]">●</span>
                  )}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* IDE-style Main Layout */}
        <div className="flex flex-col md:flex-row bg-[#252526] -mx-4 sm:mx-0 sm:rounded-b-lg border-x border-b border-[#3c3c3c] min-h-[600px] md:min-h-[800px]">
          {/* Mobile Sidebar - Horizontal Scroll */}
          <div className="md:hidden border-b border-[#3c3c3c] bg-[#252526] overflow-x-auto">
            <nav className="flex p-2 space-x-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSidebarItem(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded text-xs font-mono transition-colors whitespace-nowrap ${
                      activeSidebarItem === item.id
                        ? 'bg-[#37373d] text-white'
                        : 'text-[#cccccc] hover:bg-[#2a2d2e]'
                    }`}
                  >
                    <Icon className={`w-3 h-3 ${activeSidebarItem === item.id ? 'text-[#3794ff]' : 'text-[#858585]'}`} />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Desktop Sidebar */}
          <motion.div
            className="hidden md:block w-64 bg-[#252526] border-r border-[#3c3c3c] flex-shrink-0"
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
            <div className="p-4 md:p-8">
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
                      <h3 className="text-[#cccccc] font-mono text-lg font-bold">Build Your Own or Start with Pre-Built</h3>
                    </div>
                    <p className="text-[#cccccc] text-sm leading-relaxed mb-4">
                      <span className="text-[#4ec9b0] font-semibold">JetBuilder Studio</span> is a visual IDE for building AI agentic workflows. Build custom multi-agent systems with 49+ pre-built components or deploy enterprise-ready solutions.
                    </p>
                    <p className="text-[#cccccc] text-sm leading-relaxed">
                      Build, train, and deploy workflows entirely on your infrastructure with complete data sovereignty—no cloud dependencies.
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
                        Design and deploy Agentic AI workflows that process documents and automate business processes.
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
                    <h2 className="text-lg md:text-2xl font-mono font-bold text-[#cccccc]">Core Platform Features</h2>
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
                    <h2 className="text-lg md:text-2xl font-mono font-bold text-[#cccccc]">Agentic Framework Architecture</h2>
                  </div>
                  
                  <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-6 mb-6">
                    <p className="text-[#cccccc] text-sm">
                      Built on proven Agentic AI principles with memory systems, intelligent decision-making, and multi-agent orchestration.
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

              {activeTab === 'platform' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Boxes className="w-6 h-6 text-[#3794ff]" />
                    <h2 className="text-lg md:text-2xl font-mono font-bold text-[#cccccc]">Platform Architecture</h2>
                  </div>

                  {/* Architecture Overview */}
                  <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-6">
                    <h3 className="text-[#4ec9b0] font-mono text-lg font-bold mb-4">Modular Multi-Layer Architecture</h3>
                    <p className="text-[#cccccc] text-sm leading-relaxed mb-4">
                      JetBuilder Platform is built with a modular, cloud-agnostic architecture designed for on-premises and air-gapped deployments. Each layer is independently scalable and can be deployed across your infrastructure for maximum resilience.
                    </p>
                  </div>

                  {/* Core Layers */}
                  <div className="space-y-4">
                    <h3 className="text-[#4ec9b0] font-mono text-base font-bold">Core Platform Layers</h3>

                    {/* Presentation Layer */}
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-mono font-bold">1</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Presentation Layer (Frontend)</h4>
                          <p className="text-[#cccccc] text-xs mb-3">
                            Visual IDE for building and managing agentic workflows. Drag-and-drop interface with real-time monitoring.
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">React-based Studio UI with TypeScript</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Real-time workflow visualization & debugging</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Role-based access control (RBAC)</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Deployed as containerized app on your infrastructure</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* API Gateway Layer */}
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-mono font-bold">2</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">API Gateway & Authentication</h4>
                          <p className="text-[#cccccc] text-xs mb-3">
                            Secure API gateway with enterprise authentication, rate limiting, and request routing.
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">RESTful & GraphQL API endpoints</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">OAuth 2.0, SAML, LDAP/AD integration</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">API key management & rate limiting</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">TLS 1.3 encryption for all traffic</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Orchestration Layer */}
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-mono font-bold">3</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Orchestration & Workflow Engine</h4>
                          <p className="text-[#cccccc] text-xs mb-3">
                            Rust-powered orchestration engine for multi-agent coordination, task scheduling, and workflow execution.
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">DAG-based workflow execution engine</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Multi-agent coordination & message routing</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Distributed task queue with retry logic</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Horizontal scaling via Kubernetes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AI/ML Layer */}
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-mono font-bold">4</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">AI/ML Inference Layer</h4>
                          <p className="text-[#cccccc] text-xs mb-3">
                            Small Language Model (SLM) inference engine optimized for on-premises deployment.
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">7B-13B parameter SLMs (Llama, Mistral, custom)</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Model quantization (INT8, INT4) for efficiency</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">GPU acceleration (NVIDIA, AMD) or CPU inference</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Model fine-tuning on proprietary data</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data Layer */}
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-mono font-bold">5</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Data Storage & Processing Layer</h4>
                          <p className="text-[#cccccc] text-xs mb-3">
                            Multi-modal data storage with vector databases for semantic search and retrieval.
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">PostgreSQL for structured data & metadata</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Vector DB (Qdrant/Milvus) for embeddings</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">S3-compatible object storage for documents</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Redis for caching & real-time data</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Integration Layer */}
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-mono font-bold">6</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Integration & Connectors Layer</h4>
                          <p className="text-[#cccccc] text-xs mb-3">
                            Pre-built connectors to enterprise systems and data sources.
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Database connectors (Oracle, SQL Server, MySQL)</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">API integrations (Salesforce, ServiceNow, SAP)</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">File system & cloud storage connectors</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Custom connector SDK for proprietary systems</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Deployment Options */}
                  <div className="bg-[#0e2f1e] border border-[#2b5b3f] rounded p-6 mt-6">
                    <h3 className="text-[#4ec9b0] font-mono text-lg font-bold mb-4">Deployment Architecture</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">On-Premises</h4>
                        <p className="text-[#cccccc] text-xs">
                          Deploy on your own data center hardware. Full control over infrastructure, networking, and security.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Private Cloud</h4>
                        <p className="text-[#cccccc] text-xs">
                          Deploy on your private cloud (VMware, OpenStack). Kubernetes-native for easy orchestration.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Air-Gapped</h4>
                        <p className="text-[#cccccc] text-xs">
                          Fully disconnected deployment for classified environments. Offline model training and updates.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-6">
                    <h3 className="text-[#4ec9b0] font-mono text-lg font-bold mb-4">Technology Stack</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-[#858585] text-xs mb-2">Core Runtime</div>
                        <div className="text-[#4fc1ff] font-mono text-sm">Rust 1.74+</div>
                      </div>
                      <div>
                        <div className="text-[#858585] text-xs mb-2">Orchestration</div>
                        <div className="text-[#4fc1ff] font-mono text-sm">Kubernetes</div>
                      </div>
                      <div>
                        <div className="text-[#858585] text-xs mb-2">Frontend</div>
                        <div className="text-[#4fc1ff] font-mono text-sm">React + TS</div>
                      </div>
                      <div>
                        <div className="text-[#858585] text-xs mb-2">Message Queue</div>
                        <div className="text-[#4fc1ff] font-mono text-sm">RabbitMQ</div>
                      </div>
                      <div>
                        <div className="text-[#858585] text-xs mb-2">Database</div>
                        <div className="text-[#4fc1ff] font-mono text-sm">PostgreSQL</div>
                      </div>
                      <div>
                        <div className="text-[#858585] text-xs mb-2">Vector DB</div>
                        <div className="text-[#4fc1ff] font-mono text-sm">Qdrant</div>
                      </div>
                      <div>
                        <div className="text-[#858585] text-xs mb-2">Cache</div>
                        <div className="text-[#4fc1ff] font-mono text-sm">Redis</div>
                      </div>
                      <div>
                        <div className="text-[#858585] text-xs mb-2">ML Framework</div>
                        <div className="text-[#4fc1ff] font-mono text-sm">PyTorch</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'deployment' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Package className="w-6 h-6 text-[#3794ff]" />
                    <h2 className="text-lg md:text-2xl font-mono font-bold text-[#cccccc]">Deployment Accelerator Packs</h2>
                  </div>

                  {/* Overview */}
                  <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-6">
                    <h3 className="text-[#4ec9b0] font-mono text-lg font-bold mb-4">Deploy Anywhere with Confidence</h3>
                    <p className="text-[#cccccc] text-sm leading-relaxed mb-4">
                      JetBuilder provides pre-configured <span className="text-[#4ec9b0] font-semibold">Accelerator Packs</span> for rapid deployment on any infrastructure—public cloud, private cloud, on-premises data centers, or air-gapped environments. Each pack includes Infrastructure-as-Code (IaC) templates, configuration scripts, and deployment automation tailored to your target environment.
                    </p>
                    <div className="flex items-center space-x-2 p-3 bg-[#0e639c] rounded">
                      <CheckCircle className="w-4 h-4 text-white" />
                      <span className="text-white font-mono text-xs">Production-Ready in Hours, Not Weeks</span>
                    </div>
                  </div>

                  {/* Deployment Options */}
                  <div className="space-y-4">
                    <h3 className="text-[#4ec9b0] font-mono text-base font-bold">Supported Deployment Targets</h3>

                    {/* Public Cloud Providers */}
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center flex-shrink-0">
                          <Globe className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Public Cloud Providers</h4>
                          <p className="text-[#cccccc] text-xs mb-3">
                            Deploy on any major cloud provider with our pre-configured accelerator packs. Includes Terraform/Pulumi templates, Kubernetes manifests, and automated CI/CD pipelines.
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded p-3 text-center">
                              <div className="text-[#4fc1ff] font-mono text-xs font-bold mb-1">AWS</div>
                              <div className="text-[#858585] text-xs">EKS, EC2, S3</div>
                            </div>
                            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded p-3 text-center">
                              <div className="text-[#4fc1ff] font-mono text-xs font-bold mb-1">Azure</div>
                              <div className="text-[#858585] text-xs">AKS, VMs, Blob</div>
                            </div>
                            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded p-3 text-center">
                              <div className="text-[#4fc1ff] font-mono text-xs font-bold mb-1">GCP</div>
                              <div className="text-[#858585] text-xs">GKE, Compute, GCS</div>
                            </div>
                            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded p-3 text-center">
                              <div className="text-[#4fc1ff] font-mono text-xs font-bold mb-1">Oracle Cloud</div>
                              <div className="text-[#858585] text-xs">OKE, Compute</div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Terraform & Pulumi IaC templates included</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Managed Kubernetes (EKS, AKS, GKE) configurations</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Auto-scaling, load balancing, monitoring setup</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">GitOps workflows with ArgoCD/FluxCD</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Private Cloud & On-Premises */}
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center flex-shrink-0">
                          <Server className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Private Cloud & On-Premises</h4>
                          <p className="text-[#cccccc] text-xs mb-3">
                            Deploy on your own infrastructure with full control. Accelerator packs for VMware, OpenStack, bare metal, and private Kubernetes clusters.
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded p-3 text-center">
                              <div className="text-[#4fc1ff] font-mono text-xs font-bold mb-1">VMware</div>
                              <div className="text-[#858585] text-xs">vSphere, Tanzu</div>
                            </div>
                            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded p-3 text-center">
                              <div className="text-[#4fc1ff] font-mono text-xs font-bold mb-1">OpenStack</div>
                              <div className="text-[#858585] text-xs">Nova, Neutron</div>
                            </div>
                            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded p-3 text-center">
                              <div className="text-[#4fc1ff] font-mono text-xs font-bold mb-1">Bare Metal</div>
                              <div className="text-[#858585] text-xs">Direct Hardware</div>
                            </div>
                            <div className="bg-[#2b2b2b] border border-[#3c3c3c] rounded p-3 text-center">
                              <div className="text-[#4fc1ff] font-mono text-xs font-bold mb-1">Kubernetes</div>
                              <div className="text-[#858585] text-xs">Self-Managed</div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Ansible playbooks for automated provisioning</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Kubernetes deployment with Helm charts</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">HA configuration with multi-node clusters</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Integration with existing LDAP/AD, storage, networking</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Air-Gapped Environments */}
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center flex-shrink-0">
                          <Lock className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Air-Gapped & Classified Environments</h4>
                          <p className="text-[#cccccc] text-xs mb-3">
                            Deploy in fully disconnected networks with no internet connectivity. Includes offline installation packages, local container registries, and manual update procedures.
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Offline installation bundles with all dependencies</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Local container registry (Harbor) setup</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Manual model update procedures & versioning</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">FIPS 140-2 compliant configurations available</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Edge & Hybrid */}
                    <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-5">
                      <div className="flex items-start space-x-4 mb-3">
                        <div className="w-10 h-10 bg-[#0e639c] rounded flex items-center justify-center flex-shrink-0">
                          <Network className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Edge & Hybrid Deployments</h4>
                          <p className="text-[#cccccc] text-xs mb-3">
                            Deploy across multiple locations with centralized management. Support for edge computing, branch offices, and hybrid cloud architectures.
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Lightweight edge deployments for resource-constrained environments</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Multi-cluster federation for distributed deployments</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Centralized monitoring & management console</span>
                            </div>
                            <div className="flex items-start space-x-2">
                              <span className="text-[#4fc1ff]">▸</span>
                              <span className="text-[#cccccc] text-xs">Hybrid cloud data synchronization strategies</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="bg-[#0e2f1e] border border-[#2b5b3f] rounded p-6">
                    <h3 className="text-[#4ec9b0] font-mono text-lg font-bold mb-4">Every Accelerator Pack Includes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Infrastructure as Code</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">Terraform/Pulumi templates</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">Kubernetes Helm charts</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">Ansible automation playbooks</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Configuration & Setup</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">Pre-configured security policies</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">Network & firewall configurations</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">SSL/TLS certificate management</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Monitoring & Observability</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">Prometheus & Grafana dashboards</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">Log aggregation (ELK/Loki)</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">Distributed tracing setup</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[#4ec9b0] font-mono text-sm font-bold mb-2">Documentation & Support</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">Step-by-step deployment guides</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">Runbooks for common operations</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="text-[#4fc1ff]">▸</span>
                            <span className="text-[#cccccc] text-xs">24/7 deployment assistance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Deployment Timeline */}
                  <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-6">
                    <h3 className="text-[#4ec9b0] font-mono text-lg font-bold mb-4">Typical Deployment Timeline</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 text-[#4fc1ff] font-mono text-xs font-bold">Day 1-2</div>
                        <div className="flex-1">
                          <div className="text-[#cccccc] text-xs font-bold mb-1">Infrastructure Provisioning</div>
                          <div className="text-[#858585] text-xs">Automated infrastructure setup using IaC templates</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-16 text-[#4fc1ff] font-mono text-xs font-bold">Day 3-4</div>
                        <div className="flex-1">
                          <div className="text-[#cccccc] text-xs font-bold mb-1">Platform Deployment</div>
                          <div className="text-[#858585] text-xs">Deploy JetBuilder components, configure networking & security</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-16 text-[#4fc1ff] font-mono text-xs font-bold">Day 5-7</div>
                        <div className="flex-1">
                          <div className="text-[#cccccc] text-xs font-bold mb-1">Integration & Testing</div>
                          <div className="text-[#858585] text-xs">Connect to enterprise systems, load models, run validation tests</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-16 text-[#4fc1ff] font-mono text-xs font-bold">Day 8+</div>
                        <div className="flex-1">
                          <div className="text-[#cccccc] text-xs font-bold mb-1">Production Ready</div>
                          <div className="text-[#858585] text-xs">Go live with monitoring, support, and ongoing optimization</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'runtime' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Cpu className="w-6 h-6 text-[#3794ff]" />
                    <h2 className="text-lg md:text-2xl font-mono font-bold text-[#cccccc]">Runtime Engine</h2>
                  </div>

                  <div className="bg-[#1e1e1e] rounded border border-[#3c3c3c] p-6">
                    <p className="text-[#cccccc] text-sm leading-relaxed">
                      High-performance Rust-based runtime engine for executing agentic workflows. Microsecond latency, zero-copy data processing, and predictable performance for mission-critical operations.
                    </p>
                  </div>
                </div>
              )}

              {activeSidebarItem === 'rust' && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Terminal className="w-6 h-6 text-[#3794ff]" />
                    <h2 className="text-lg md:text-2xl font-mono font-bold text-[#cccccc]">Built with Rust</h2>
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

        {/* CTO-Level Business Value Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2b2b2b] border-2 border-[#0e639c] rounded-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-mono font-bold text-white mb-4">
                forCTOs.mobileTelecom()
              </h2>
              <p className="text-[#b0c4de] max-w-3xl mx-auto font-mono text-sm md:text-base leading-relaxed">
                Strategic AI infrastructure for Mobile Network Operators. Manage 10,000+ cell sites, RAN equipment, and transport networks with predictable CapEx economics and zero cloud dependencies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Strategic Value */}
              <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-[#4fc1ff]" />
                  <h3 className="text-lg font-mono font-bold text-white">Strategic Value</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">Predictable CapEx Economics</p>
                      <p className="text-[#858585] text-xs mt-1">Fixed annual licensing vs. unpredictable per-API costs. Budget with confidence—no surprise cloud bills.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">8-12 Month ROI</p>
                      <p className="text-[#858585] text-xs mt-1">Reduce MTTR by 70%, prevent $5.4M in network downtime annually. Break-even in under a year.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">Zero Vendor Lock-In</p>
                      <p className="text-[#858585] text-xs mt-1">Own your AI stack completely. No dependency on Azure, AWS, or Google. Full portability and control.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Operational Excellence */}
              <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Settings className="w-6 h-6 text-[#4fc1ff]" />
                  <h3 className="text-lg font-mono font-bold text-white">Operational Excellence</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">Multi-Vendor RAN Management</p>
                      <p className="text-[#858585] text-xs mt-1">Unified asset management for Ericsson, Nokia, Huawei, Samsung, ZTE equipment. Single pane of glass.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">Real-Time Network Telemetry</p>
                      <p className="text-[#858585] text-xs mt-1">Process 1M+ telemetry events/sec from RRUs, BBUs, power systems. Sub-millisecond response times.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">Intelligent Field Operations</p>
                      <p className="text-[#858585] text-xs mt-1">AI-powered work order routing. Reduce field technician dispatch time by 10x with smart scheduling.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Risk Mitigation */}
              <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="w-6 h-6 text-[#4fc1ff]" />
                  <h3 className="text-lg font-mono font-bold text-white">Risk Mitigation</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">Complete Data Sovereignty</p>
                      <p className="text-[#858585] text-xs mt-1">Network infrastructure data never leaves your premises. NERC CIP and ISO 55000 compliance ready.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">Air-Gap Capability</p>
                      <p className="text-[#858585] text-xs mt-1">Deploy in fully disconnected environments. Critical infrastructure protection without cloud dependencies.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">Audit Trail & Compliance</p>
                      <p className="text-[#858585] text-xs mt-1">Comprehensive logging for regulatory compliance. Full visibility into AI decisions and asset changes.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Technical Differentiation */}
              <div className="bg-[#1e1e1e] border border-[#3c3c3c] rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Cpu className="w-6 h-6 text-[#4fc1ff]" />
                  <h3 className="text-lg font-mono font-bold text-white">Technical Edge</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">Rust-Powered Core</p>
                      <p className="text-[#858585] text-xs mt-1">Memory-safe systems language. C/C++ level performance without segfaults or vulnerabilities.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">Custom SLMs On-Premises</p>
                      <p className="text-[#858585] text-xs mt-1">Trained on YOUR telecom data. Domain-specific intelligence without sending data to OpenAI/Anthropic.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4fc1ff] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white font-semibold text-sm">High-Speed Database Stack</p>
                      <p className="text-[#858585] text-xs mt-1">PostgreSQL + TimescaleDB for RF metrics, Redis for real-time cache. 7-year data retention built-in.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Equipment Coverage Highlight */}
            <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg p-6 mb-8">
              <h4 className="text-base font-mono font-bold text-white mb-4 flex items-center space-x-2">
                <Server className="w-5 h-5 text-[#4fc1ff]" />
                <span>Comprehensive Telecom Equipment Coverage</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div>
                  <p className="text-[#4fc1ff] font-semibold mb-2">Radio Access Network</p>
                  <p className="text-[#858585]">RRUs, BBUs, Massive MIMO, DU/CU (5G), Small Cells, Antenna Systems, RF Combiners</p>
                </div>
                <div>
                  <p className="text-[#4fc1ff] font-semibold mb-2">Transport & Core</p>
                  <p className="text-[#858585]">Core Routers, Aggregation Switches, OTN/DWDM, Microwave Links, Packet Core, IMS/VoLTE</p>
                </div>
                <div>
                  <p className="text-[#4fc1ff] font-semibold mb-2">Site Infrastructure</p>
                  <p className="text-[#858585]">Power Systems, Battery Banks, DG Sets, Solar/Hybrid, HVAC, UPS, Environmental Sensors</p>
                </div>
              </div>
            </div>

            {/* ROI Callout */}
            <div className="bg-gradient-to-r from-[#0e639c] to-[#1e3a5f] border-2 border-[#4fc1ff] rounded-lg p-6 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">$7.5M+</div>
                  <div className="text-sm text-[#b0c4de]">Annual savings per 1,000 cell sites</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-[#4fc1ff]"></div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">70%</div>
                  <div className="text-sm text-[#b0c4de]">Reduction in MTTR</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-[#4fc1ff]"></div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">8-12 mo</div>
                  <div className="text-sm text-[#b0c4de]">Typical ROI payback</div>
                </div>
              </div>
            </div>
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
            <h3 className="text-xl md:text-2xl font-mono font-bold text-[#cccccc] mb-4">
              Ready to Transform Network Operations?
            </h3>
            <p className="text-[#858585] mb-6 max-w-2xl mx-auto font-mono text-sm">
              Schedule a confidential briefing with our enterprise team. We'll design a custom deployment plan for your network infrastructure and provide a detailed ROI analysis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#0e639c] text-white hover:bg-[#1177bb] font-mono uppercase" onClick={() => window.open('https://cal.com/jetbuilder-expert', '_blank')}>
                Schedule Executive Briefing
              </Button>
              <Button size="lg" variant="outline" className="border-[#3c3c3c] text-[#cccccc] hover:bg-[#37373d] font-mono uppercase">
                Download ROI Calculator
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


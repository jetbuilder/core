'use client'

import { 
  Wrench, Bot, Brain, Database, Activity, 
  FileText, Shield, Calendar, CheckCircle, 
  Zap, TrendingUp, Settings, Search, AlertTriangle,
  Code, Package, Server, Lock, Network, Globe, Terminal
} from 'lucide-react'
import Button from '@/components/ui/button'

export default function EAMAgentXPage() {
  return (
    <div className="min-h-screen bg-vscode-bg font-mono">
      {/* IDE-style Header Bar */}
      <div className="bg-vscode-sidebar border-b border-vscode-border">
        <div className="container py-3 px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="w-4 h-4 text-vscode-type" />
                <span className="text-vscode-function font-bold text-sm">eam-agentx.rs</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-vscode-keyword text-white text-xs rounded">RUST</span>
              <span className="text-vscode-comment text-xs">v2.0.0-prod</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - IDE Style */}
      <section className="section-padding bg-vscode-bg pt-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Line Numbers */}
            <div className="bg-vscode-sidebar border border-vscode-border rounded-sm p-8">
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-vscode-lineNumber text-sm select-none w-8">1</div>
                <div className="flex-1">
                  <span className="text-vscode-comment">// ⚡ Rust-Powered Multi-Agent AI Platform</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-vscode-lineNumber text-sm select-none w-8">2</div>
                <div className="flex-1">
                  <span className="text-vscode-keyword">pub struct</span>{' '}
                  <span className="text-vscode-type">EAMAgentX</span>{' '}
                  <span className="text-white">{'{'}</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-4 ml-12">
                <div className="text-vscode-lineNumber text-sm select-none w-8">3</div>
                <div className="flex-1">
                  <span className="text-vscode-variable">agents</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-vscode-type">Vec</span>
                  <span className="text-white">{'<'}</span>
                  <span className="text-vscode-type">SpecializedAgent</span>
                  <span className="text-white">{'>'}</span>
                  <span className="text-white">,</span>{' '}
                  <span className="text-vscode-comment">// 10 AI agents</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-4 ml-12">
                <div className="text-vscode-lineNumber text-sm select-none w-8">4</div>
                <div className="flex-1">
                  <span className="text-vscode-variable">database</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-vscode-type">HighSpeedDB</span>
                  <span className="text-white">,</span>{' '}
                  <span className="text-vscode-comment">// PostgreSQL + TimescaleDB + Redis</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-4 ml-12">
                <div className="text-vscode-lineNumber text-sm select-none w-8">5</div>
                <div className="flex-1">
                  <span className="text-vscode-variable">llm</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-vscode-type">OnPremisesSLM</span>
                  <span className="text-white">,</span>{' '}
                  <span className="text-vscode-comment">// Custom models, no cloud</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-4 ml-12">
                <div className="text-vscode-lineNumber text-sm select-none w-8">6</div>
                <div className="flex-1">
                  <span className="text-vscode-variable">latency</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-vscode-type">Duration</span>
                  <span className="text-white">,</span>{' '}
                  <span className="text-vscode-comment">// &lt;1ms response time</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-8">
                <div className="text-vscode-lineNumber text-sm select-none w-8">7</div>
                <div className="flex-1">
                  <span className="text-white">{'}'}</span>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-vscode-lineNumber text-sm select-none w-8">8</div>
                <div className="flex-1">
                  <span className="text-vscode-comment">// Enterprise Asset Management with conversational AI</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-vscode-variable text-lg mb-6 leading-relaxed">
                Next-generation Enterprise Asset Management for <strong className="text-vscode-function">Mobile Telecom Operators</strong> powered by <strong className="text-vscode-function">10 specialized AI agents</strong> on a <strong className="text-vscode-type">high-performance Rust core</strong>. Manage RAN equipment (RRUs, BBUs, antennas), transport networks, power systems, and 10,000+ cell sites with <strong className="text-vscode-type">sub-millisecond response times</strong>—no cloud dependencies.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-vscode-keyword hover:bg-vscode-selection text-white font-mono uppercase" onClick={() => window.open('https://cal.com/jetbuilder-expert', '_blank')}>
                  $ schedule-demo
                </Button>
                <a href="/eam-agentx/spec-sheet" target="_blank">
                  <Button size="lg" variant="outline" className="border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono uppercase">
                    download-specs
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid - IDE Style */}
      <section className="section-padding bg-vscode-bg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
              <Code className="w-4 h-4 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment">// core-features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4">
              platform.capabilities()
            </h2>
            <p className="text-vscode-variable max-w-2xl mx-auto text-sm">
              Revolutionary AI-powered asset management with Rust-level performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-vscode-sidebar border border-vscode-border rounded-sm p-6 hover:border-vscode-type transition-colors">
                  <div className="w-12 h-12 bg-vscode-bg border border-vscode-border rounded-sm flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-vscode-type" />
                  </div>
                  <h3 className="text-lg font-bold text-vscode-function mb-2">{feature.title}</h3>
                  <p className="text-vscode-variable text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 10 Specialized Agents - IDE Style */}
      <section className="section-padding bg-vscode-sidebar">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-vscode-bg px-4 py-2 rounded-sm mb-6 border border-vscode-border">
              <Bot className="w-4 h-4 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment">// multi-agent-system</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4">
              agents: Vec&lt;SpecializedAgent&gt;
            </h2>
            <p className="text-vscode-variable max-w-2xl mx-auto text-sm">
              10 specialized agents working in concert, orchestrated by JetGraph (Rust-native)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {agents.map((agent, index) => (
              <div key={index} className="bg-vscode-bg rounded-sm p-6 border border-vscode-border hover:border-vscode-type transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-vscode-sidebar border border-vscode-border rounded flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-vscode-type" />
                  </div>
                  <div>
                    <h3 className="font-bold text-vscode-function mb-1">{agent.name}</h3>
                    <p className="text-sm text-vscode-variable">{agent.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram - IDE Terminal Style */}
      <section className="section-padding bg-vscode-bg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
              <Terminal className="w-4 h-4 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment">// system-architecture</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4">
              architecture.diagram()
            </h2>
            <p className="text-vscode-variable max-w-2xl mx-auto text-sm">
              Built with JetGraph and JetChain (Rust-native) for production-grade reliability
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-vscode-sidebar rounded-sm p-8 border border-vscode-border">
              <div className="text-center mb-4">
                <span className="inline-flex items-center bg-vscode-keyword text-white px-3 py-1 rounded-sm text-xs font-bold">
                  ⚡ Rust-Powered Multi-Agent System
                </span>
              </div>
              <pre className="text-xs md:text-sm overflow-x-auto text-vscode-variable">
{`┌─────────────────────────────────────────────────────────┐
│                    USER INTERFACE                        │
│              (Chat / Dashboard / API)                    │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│            SUPERVISOR AGENT (Rust Core)                  │
│          (Intelligent Query Routing)                     │
└─────┬────────┬────────┬────────┬────────┬──────────────┘
      │        │        │        │        │
      ▼        ▼        ▼        ▼        ▼
┌─────────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────────┐
│ Asset   │ │Work │ │Tele │ │Main │ │Complian │
│ Agent   │ │Order│ │metry│ │Plan │ │ce Agent │
└────┬────┘ └──┬──┘ └──┬──┘ └──┬──┘ └────┬────┘
     │         │       │       │         │
     └─────────┴───────┴───────┴─────────┘
                       │
                       ▼
            ┌──────────────────────┐
            │  CRITIC-VERIFIER     │
            │  (Quality Check)     │
            └──────────────────────┘
                       │
                       ▼
       ┌────────────────────────────────────┐
       │   HIGH-SPEED DATABASE LAYER        │
       │   PostgreSQL + TimescaleDB + Redis │
       └────────────────────────────────────┘`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - IDE Style */}
      <section className="section-padding bg-vscode-sidebar">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-vscode-bg px-4 py-2 rounded-sm mb-6 border border-vscode-border">
              <FileText className="w-4 h-4 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment">// use-cases</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4">
              examples.realWorld()
            </h2>
            <p className="text-vscode-variable max-w-2xl mx-auto text-sm">
              See how EAM AgentX transforms daily operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-vscode-bg rounded-sm p-6 border border-vscode-border">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-8 h-8 bg-vscode-keyword rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-vscode-function mb-2">{useCase.title}</h3>
                    <p className="text-sm text-vscode-string mb-3">{useCase.query}</p>
                    <p className="text-sm text-vscode-type font-medium">{useCase.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - IDE Style */}
      <section className="section-padding bg-vscode-bg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
              <Code className="w-4 h-4 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment">// tech-stack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4">
              stack.highPerformance()
            </h2>
            <p className="text-vscode-variable text-sm">
              Built with Rust core for microsecond latency and maximum throughput
            </p>
          </div>

          {/* Performance Highlight */}
          <div className="bg-vscode-sidebar rounded-sm p-8 mb-12 max-w-4xl mx-auto border-2 border-vscode-type">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Zap className="w-8 h-8 text-vscode-type" />
              <h3 className="text-2xl font-bold text-vscode-function">Rust-Powered + On-Premises SLMs</h3>
            </div>
            <p className="text-center text-vscode-variable mb-6 text-sm">
              Memory-safe, zero-cost abstractions with C/C++ level performance. Custom Small Language Models run entirely on your infrastructure—no cloud dependencies. Process millions of telemetry events per second with predictable latency.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-vscode-type mb-1">&lt;1ms</div>
                <div className="text-sm text-vscode-comment">Query Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vscode-type mb-1">1M+</div>
                <div className="text-sm text-vscode-comment">Events/Second</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vscode-type mb-1">100%</div>
                <div className="text-sm text-vscode-comment">On-Premises SLMs</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {techStack.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-vscode-sidebar rounded-sm p-6 border border-vscode-border mb-3 hover:border-vscode-type transition-colors">
                  <div className="font-bold text-vscode-type mb-1 text-sm">{tech.name}</div>
                  <div className="text-xs text-vscode-comment">{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options - IDE Style */}
      <section className="section-padding bg-vscode-sidebar">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-vscode-bg px-4 py-2 rounded-sm mb-6 border border-vscode-border">
              <Package className="w-4 h-4 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment">// deployment-options</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4">
              deploy.anywhere()
            </h2>
            <p className="text-vscode-variable max-w-2xl mx-auto text-sm">
              Docker, Kubernetes, on-premises, or air-gapped environments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-vscode-bg rounded-sm p-6 border border-vscode-border hover:border-vscode-type transition-colors">
              <Server className="w-10 h-10 text-vscode-type mb-4" />
              <h3 className="text-xl font-bold text-vscode-function mb-2">On-Premises</h3>
              <p className="text-vscode-variable mb-4 text-sm">
                Deploy on your own infrastructure with Rust-powered performance and high-speed databases
              </p>
              <ul className="text-sm text-vscode-comment space-y-1">
                <li>• Rust core engine</li>
                <li>• PostgreSQL + TimescaleDB</li>
                <li>• Redis in-memory cache</li>
                <li>• Kubernetes ready</li>
              </ul>
            </div>
            <div className="bg-vscode-bg rounded-sm p-6 border border-vscode-border hover:border-vscode-type transition-colors">
              <Lock className="w-10 h-10 text-vscode-type mb-4" />
              <h3 className="text-xl font-bold text-vscode-function mb-2">Air-Gapped</h3>
              <p className="text-vscode-variable mb-4 text-sm">
                Fully disconnected deployment for classified and high-security environments
              </p>
              <ul className="text-sm text-vscode-comment space-y-1">
                <li>• Offline installation</li>
                <li>• No external dependencies</li>
                <li>• FIPS 140-2 compliant</li>
              </ul>
            </div>
            <div className="bg-vscode-bg rounded-sm p-6 border border-vscode-border hover:border-vscode-type transition-colors">
              <Globe className="w-10 h-10 text-vscode-type mb-4" />
              <h3 className="text-xl font-bold text-vscode-function mb-2">Cloud-Native</h3>
              <p className="text-vscode-variable mb-4 text-sm">
                Deploy to AWS, Azure, or GCP with horizontal scaling and high-speed managed databases
              </p>
              <ul className="text-sm text-vscode-comment space-y-1">
                <li>• Horizontal auto-scaling</li>
                <li>• Managed PostgreSQL</li>
                <li>• Redis Enterprise</li>
                <li>• Terraform templates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - IDE Style */}
      <section className="section-padding bg-vscode-bg">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-vscode-sidebar px-4 py-2 rounded-sm mb-6 border border-vscode-border">
              <TrendingUp className="w-4 h-4 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment">// performance-metrics</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4">
              metrics.keyBenefits()
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-vscode-sidebar border border-vscode-border rounded-sm p-6 hover:border-vscode-type transition-colors">
                <div className="text-4xl font-bold text-vscode-type mb-2">{benefit.metric}</div>
                <div className="text-sm text-vscode-comment">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - IDE Style */}
      <section className="section-padding bg-vscode-sidebar">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-vscode-bg border-2 border-vscode-type rounded-sm p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-6">
                ready.toTransform()
              </h2>
              <p className="text-xl text-vscode-variable mb-8">
                See how EAM AgentX can revolutionize your operations with intelligent automation
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-vscode-keyword hover:bg-vscode-selection text-white font-mono uppercase" onClick={() => window.open('https://cal.com/jetbuilder-expert', '_blank')}>
                  $ schedule-demo
                </Button>
                <a href="/eam-agentx/spec-sheet" target="_blank">
                  <Button size="lg" variant="outline" className="border-vscode-border text-vscode-variable hover:bg-vscode-hover font-mono uppercase">
                    download-specs
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDE-style Status Bar */}
      <div className="bg-vscode-keyword py-2 px-6 border-t border-vscode-border">
        <div className="container">
          <div className="flex items-center justify-between text-xs text-white">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-3 h-3" />
                <span>Build: Success</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-3 h-3" />
                <span>Rust 1.74.0</span>
              </div>
              <div>10 Agents Active</div>
            </div>
            <div className="flex items-center space-x-6">
              <div>Production Ready</div>
              <div>eam-agentx v2.0.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Data
const features = [
  {
    icon: Zap,
    title: 'Rust-Powered Performance',
    description: 'Sub-millisecond query response with memory-safe Rust core. Process 1M+ telemetry events/second from RRUs, BBUs, and cell sites with zero GC pauses'
  },
  {
    icon: Database,
    title: 'High-Speed Databases',
    description: 'PostgreSQL, TimescaleDB for time-series RF metrics, ChromaDB for equipment manuals, and Redis for real-time cell site health'
  },
  {
    icon: Brain,
    title: 'Conversational Interface',
    description: 'Ask in natural language: "Show me all RRUs with high VSWR" or "Which towers need generator maintenance this week?"'
  },
  {
    icon: Activity,
    title: 'Real-time Network Telemetry',
    description: 'Live monitoring of RAN equipment, power systems, environmental sensors, and transport network with instant alarm correlation'
  },
  {
    icon: FileText,
    title: 'Automated Work Orders',
    description: 'Generate field technician work orders from natural language or equipment alarms with automatic site location and required skills'
  },
  {
    icon: CheckCircle,
    title: 'Multi-Vendor Support',
    description: 'Supports Ericsson, Nokia, Huawei, Samsung, ZTE, Cisco, Juniper RAN and transport equipment with unified asset management'
  }
]

const agents = [
  { name: 'Supervisor Agent', role: 'Orchestrates workflows and routes telecom asset queries' },
  { name: 'Asset Agent', role: 'Manages RAN equipment, transport network, and power system lifecycle' },
  { name: 'Work Order Agent', role: 'Automated field technician work order creation and dispatch' },
  { name: 'Telemetry Agent', role: 'Real-time RRU/BBU monitoring and RF performance anomaly detection' },
  { name: 'Maintenance Planner', role: 'Predictive maintenance for cell sites and network equipment' },
  { name: 'Retrieval Agent', role: 'Semantic search across vendor manuals (Ericsson, Nokia, Huawei)' },
  { name: 'Compliance Agent', role: 'NERC CIP, ISO 55000, and safety standard validation' },
  { name: 'Reasoning Agent', role: 'Root cause analysis for network outages and equipment failures' },
  { name: 'Plan & Execute Agent', role: 'Multi-site maintenance campaign orchestration' },
  { name: 'Critic-Verifier', role: 'Quality assurance for field operations and asset data' }
]

const useCases = [
  {
    title: 'Cell Site Equipment Query',
    query: '"What\'s the status of RRU-001 at site BTS-5432?"',
    result: 'Gets real-time RRU health, RF metrics, alarms, and maintenance history'
  },
  {
    title: 'Network Maintenance Planning',
    query: '"What BBUs and antennas need maintenance this week?"',
    result: 'Lists all scheduled maintenance with priorities, locations, and assigned field techs'
  },
  {
    title: 'Power System Investigation',
    query: '"Why is the rectifier at tower-north-245 overheating?"',
    result: 'Analyzes power telemetry, temperature sensors, performs root cause analysis, creates work order'
  },
  {
    title: 'Automated Work Orders',
    query: '"Create work order for high VSWR alarm on antenna ANT-3421"',
    result: 'Auto-generates work order with priority, RF specialist assignment, and required test equipment'
  }
]

const techStack = [
  { name: 'Rust Core', category: 'Runtime Engine' },
  { name: 'JetGraph', category: 'Agentic Framework' },
  { name: 'JetChain', category: 'AI Orchestration' },
  { name: 'Custom SLMs', category: 'On-Premises LLM' },
  { name: 'PostgreSQL', category: 'High-Speed DB' },
  { name: 'TimescaleDB', category: 'Time-Series DB' },
  { name: 'ChromaDB', category: 'Vector DB' },
  { name: 'Redis Cache', category: 'In-Memory DB' },
  { name: 'Docker', category: 'Container' },
  { name: 'Kubernetes', category: 'Orchestration' }
]

const benefits = [
  { metric: '<1ms', description: 'Sub-millisecond query response time' },
  { metric: '70%', description: 'Reduction in mean time to repair' },
  { metric: '1M+', description: 'Telemetry events processed/second' },
  { metric: '24/7', description: 'Continuous asset monitoring' }
]

'use client'

import {
  Calculator, Bot, Brain, Database, Activity,
  FileText, Shield, Calendar, CheckCircle,
  Zap, TrendingUp, Settings, Search, AlertTriangle,
  Code, Package, Server, Lock, Network, Globe, Terminal,
  DollarSign, Receipt, CreditCard, PieChart, BarChart3
} from 'lucide-react'
import Button from '@/components/ui/button'

export default function AccountingEnginePage() {
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
                <Calculator className="w-4 h-4 text-vscode-type" />
                <span className="text-vscode-function font-bold text-sm">accounting-engine.rs</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-vscode-keyword text-white text-xs rounded">RUST</span>
              <span className="text-vscode-comment text-xs">v1.0.0-prod</span>
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
                  <span className="text-vscode-comment">// AI-Powered Financial Automation Platform</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-4">
                <div className="text-vscode-lineNumber text-sm select-none w-8">2</div>
                <div className="flex-1">
                  <span className="text-vscode-keyword">pub struct</span>{' '}
                  <span className="text-vscode-type">AccountingEngine</span>{' '}
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
                  <span className="text-vscode-type">FinanceAgent</span>
                  <span className="text-white">{'>'}</span>
                  <span className="text-white">,</span>{' '}
                  <span className="text-vscode-comment">// 8 AI agents</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-4 ml-12">
                <div className="text-vscode-lineNumber text-sm select-none w-8">4</div>
                <div className="flex-1">
                  <span className="text-vscode-variable">ledger</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-vscode-type">ImmutableLedger</span>
                  <span className="text-white">,</span>{' '}
                  <span className="text-vscode-comment">// Full audit trail</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-4 ml-12">
                <div className="text-vscode-lineNumber text-sm select-none w-8">5</div>
                <div className="flex-1">
                  <span className="text-vscode-variable">accuracy</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-vscode-type">Percentage</span>
                  <span className="text-white">,</span>{' '}
                  <span className="text-vscode-comment">// 99%+ categorization</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-4 ml-12">
                <div className="text-vscode-lineNumber text-sm select-none w-8">6</div>
                <div className="flex-1">
                  <span className="text-vscode-variable">deployment</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-vscode-type">OnPremises</span>
                  <span className="text-white">,</span>{' '}
                  <span className="text-vscode-comment">// No cloud dependencies</span>
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
                  <span className="text-vscode-comment">// Enterprise accounting automation with conversational AI</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-vscode-variable text-lg mb-6 leading-relaxed">
                Next-generation enterprise accounting platform powered by <strong className="text-vscode-function">8 specialized AI agents</strong> using <strong className="text-vscode-type">on-premises SLMs & VLMs</strong> on a <strong className="text-vscode-type">high-performance Rust core</strong>. Automate bookkeeping, financial reporting, and AP/AR workflows with <strong className="text-vscode-type">99%+ accuracy</strong>. Deployed on <strong className="text-vscode-function">your private infrastructure</strong>—no external APIs, complete data sovereignty.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-vscode-keyword hover:bg-vscode-selection text-white font-mono uppercase" onClick={() => window.location.href = '/contact'}>
                  $ schedule-demo
                </Button>
                <a href="/accounting-engine/spec-sheet">
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
              AI-powered financial automation with enterprise-grade security
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

      {/* 8 Specialized Agents - IDE Style */}
      <section className="section-padding bg-vscode-sidebar">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-vscode-bg px-4 py-2 rounded-sm mb-6 border border-vscode-border">
              <Bot className="w-4 h-4 text-vscode-type" />
              <span className="text-xs font-bold text-vscode-comment">// multi-agent-system</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-4">
              agents: Vec&lt;FinanceAgent&gt;
            </h2>
            <p className="text-vscode-variable max-w-2xl mx-auto text-sm">
              8 specialized agents working in concert for complete financial automation
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
              Built with Rust core for production-grade reliability and audit compliance
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-vscode-sidebar rounded-sm p-8 border border-vscode-border">
              <div className="text-center mb-6">
                <span className="inline-flex items-center bg-vscode-keyword text-white px-4 py-2 rounded-sm text-xs font-bold tracking-wider">
                  RUST-POWERED FINANCIAL AUTOMATION
                </span>
              </div>

              {/* Architecture Grid */}
              <div className="space-y-4">
                {/* User Interface Layer */}
                <div className="border border-vscode-border rounded-sm p-4 bg-vscode-bg">
                  <div className="text-center text-xs font-bold text-vscode-type mb-3 tracking-wide">USER INTERFACE LAYER</div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="text-center p-3 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-xs font-semibold text-vscode-function">Dashboard</div>
                      <div className="text-[10px] text-vscode-comment">Portal</div>
                    </div>
                    <div className="text-center p-3 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-xs font-semibold text-vscode-function">Chat UI</div>
                      <div className="text-[10px] text-vscode-comment">Assistant</div>
                    </div>
                    <div className="text-center p-3 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-xs font-semibold text-vscode-function">REST API</div>
                      <div className="text-[10px] text-vscode-comment">Gateway</div>
                    </div>
                    <div className="text-center p-3 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-xs font-semibold text-vscode-function">ERP</div>
                      <div className="text-[10px] text-vscode-comment">Connector</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center"><div className="w-px h-6 bg-vscode-type"></div></div>

                {/* Supervisor Agent */}
                <div className="border-2 border-vscode-type rounded-sm p-4 bg-vscode-bg">
                  <div className="text-center text-xs font-bold text-vscode-type mb-2 tracking-wide">SUPERVISOR AGENT <span className="text-vscode-comment">◆</span> Rust Core Engine</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] text-vscode-comment text-center">
                    <div>Query Routing</div>
                    <div>Workflow Orchestration</div>
                    <div>Context Management</div>
                    <div>Error Recovery</div>
                  </div>
                </div>

                <div className="flex justify-center"><div className="w-px h-6 bg-vscode-type"></div></div>

                {/* Specialized Agents */}
                <div className="border border-vscode-border rounded-sm p-4 bg-vscode-bg">
                  <div className="text-center text-xs font-bold text-vscode-type mb-3 tracking-wide">SPECIALIZED AGENTS</div>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                    <div className="text-center p-2 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-[10px] font-bold text-vscode-function">TRANSACTION</div>
                      <div className="text-[9px] text-vscode-comment mt-1">Categorize • Code</div>
                    </div>
                    <div className="text-center p-2 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-[10px] font-bold text-vscode-function">REPORTING</div>
                      <div className="text-[9px] text-vscode-comment mt-1">P&L • Balance</div>
                    </div>
                    <div className="text-center p-2 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-[10px] font-bold text-vscode-function">AP AGENT</div>
                      <div className="text-[9px] text-vscode-comment mt-1">Invoice • 3-Way</div>
                    </div>
                    <div className="text-center p-2 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-[10px] font-bold text-vscode-function">AR AGENT</div>
                      <div className="text-[9px] text-vscode-comment mt-1">Billing • Revenue</div>
                    </div>
                    <div className="text-center p-2 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-[10px] font-bold text-vscode-function">RECON</div>
                      <div className="text-[9px] text-vscode-comment mt-1">Bank • Variance</div>
                    </div>
                    <div className="text-center p-2 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-[10px] font-bold text-vscode-function">ERP AGENT</div>
                      <div className="text-[9px] text-vscode-comment mt-1">SAP • Oracle</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center"><div className="w-px h-6 bg-vscode-type"></div></div>

                {/* Private AI Layer */}
                <div className="border-2 border-vscode-keyword rounded-sm p-4 bg-gradient-to-r from-vscode-bg to-[#1a2332]">
                  <div className="text-center text-xs font-bold text-vscode-keyword mb-3 tracking-wide">PRIVATE AI LAYER <span className="text-vscode-comment">◆</span> Zero External APIs</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-vscode-border rounded-sm p-3 bg-vscode-sidebar">
                      <div className="text-xs font-bold text-vscode-type text-center mb-2">SLMs</div>
                      <div className="text-[9px] text-vscode-comment space-y-1">
                        <div>• Transaction categorization</div>
                        <div>• Natural language queries</div>
                        <div>• Institutional knowledge</div>
                      </div>
                    </div>
                    <div className="border border-vscode-border rounded-sm p-3 bg-vscode-sidebar">
                      <div className="text-xs font-bold text-vscode-type text-center mb-2">VLMs</div>
                      <div className="text-[9px] text-vscode-comment space-y-1">
                        <div>• Invoice extraction</div>
                        <div>• Document understanding</div>
                        <div>• Bank statement processing</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center"><div className="w-px h-6 bg-vscode-type"></div></div>

                {/* Audit & Compliance */}
                <div className="border border-vscode-border rounded-sm p-4 bg-vscode-bg">
                  <div className="text-center text-xs font-bold text-vscode-type mb-3 tracking-wide">AUDIT & COMPLIANCE AGENT</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-2 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-[10px] font-semibold text-vscode-function">SOX Controls</div>
                    </div>
                    <div className="text-center p-2 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-[10px] font-semibold text-vscode-function">GAAP / IFRS</div>
                    </div>
                    <div className="text-center p-2 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-[10px] font-semibold text-vscode-function">Fraud Detection</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center"><div className="w-px h-6 bg-vscode-type"></div></div>

                {/* Data Persistence */}
                <div className="border border-vscode-border rounded-sm p-4 bg-vscode-bg">
                  <div className="text-center text-xs font-bold text-vscode-type mb-3 tracking-wide">DATA PERSISTENCE LAYER</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-xs font-semibold text-vscode-function">PostgreSQL</div>
                      <div className="text-[9px] text-vscode-comment mt-1">Financial Data • GL</div>
                    </div>
                    <div className="text-center p-3 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-xs font-semibold text-vscode-function">Audit Ledger</div>
                      <div className="text-[9px] text-vscode-comment mt-1">Immutable Logs</div>
                    </div>
                    <div className="text-center p-3 border border-vscode-border rounded-sm bg-vscode-sidebar">
                      <div className="text-xs font-semibold text-vscode-function">Redis Cache</div>
                      <div className="text-[9px] text-vscode-comment mt-1">Real-time State</div>
                    </div>
                  </div>
                </div>
              </div>
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
              See how Accounting Engine transforms daily finance operations
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
              stack.enterprise()
            </h2>
            <p className="text-vscode-variable text-sm">
              Built with Rust core for maximum throughput and audit compliance
            </p>
          </div>

          {/* Performance Highlight */}
          <div className="bg-vscode-sidebar rounded-sm p-8 mb-12 max-w-4xl mx-auto border-2 border-vscode-type">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Zap className="w-8 h-8 text-vscode-type" />
              <h3 className="text-2xl font-bold text-vscode-function">Private SLMs & VLMs + Zero External APIs</h3>
            </div>
            <p className="text-center text-vscode-variable mb-6 text-sm">
              <strong className="text-white">Small Language Models (SLMs)</strong> and <strong className="text-white">Vision Language Models (VLMs)</strong> run entirely on your private infrastructure—cloud or on-premises. Process invoices, receipts, and documents with AI vision. <strong className="text-white">No external API calls to OpenAI, Anthropic, or Google</strong>. Your institutional knowledge stays within your organization, building a proprietary financial intelligence layer that competitors can't replicate.
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-vscode-type mb-1">99%+</div>
                <div className="text-sm text-vscode-comment">Categorization Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vscode-type mb-1">10K+</div>
                <div className="text-sm text-vscode-comment">Transactions/Second</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vscode-type mb-1">0</div>
                <div className="text-sm text-vscode-comment">External API Calls</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-vscode-type mb-1">100%</div>
                <div className="text-sm text-vscode-comment">Data Sovereignty</div>
              </div>
            </div>
          </div>

          {/* SLM/VLM Details */}
          <div className="bg-vscode-bg rounded-sm p-6 mb-12 max-w-4xl mx-auto border border-vscode-border">
            <h4 className="text-lg font-bold text-vscode-function mb-4 text-center">Institutional Knowledge That Stays Yours</h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-vscode-sidebar border border-vscode-border rounded-sm flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-vscode-type" />
                </div>
                <p className="text-vscode-type font-semibold mb-2">SLMs for Transaction Intelligence</p>
                <p className="text-vscode-comment text-xs">Custom-trained on YOUR chart of accounts, vendor patterns, and business rules. Learns your categorization preferences over time.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vscode-sidebar border border-vscode-border rounded-sm flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6 text-vscode-type" />
                </div>
                <p className="text-vscode-type font-semibold mb-2">VLMs for Document Processing</p>
                <p className="text-vscode-comment text-xs">Extract data from invoices, receipts, contracts, and bank statements using Vision Language Models. No OCR limitations—understands context.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vscode-sidebar border border-vscode-border rounded-sm flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-vscode-type" />
                </div>
                <p className="text-vscode-type font-semibold mb-2">Private Infrastructure Only</p>
                <p className="text-vscode-comment text-xs">Deploy on your private cloud (AWS, Azure, GCP) or fully on-premises. Air-gapped options available. Your financial data never leaves your control.</p>
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
                Deploy on your own infrastructure with complete data sovereignty
              </p>
              <ul className="text-sm text-vscode-comment space-y-1">
                <li>Rust core engine</li>
                <li>PostgreSQL + Audit Logs</li>
                <li>Redis in-memory cache</li>
                <li>Kubernetes ready</li>
              </ul>
            </div>
            <div className="bg-vscode-bg rounded-sm p-6 border border-vscode-border hover:border-vscode-type transition-colors">
              <Lock className="w-10 h-10 text-vscode-type mb-4" />
              <h3 className="text-xl font-bold text-vscode-function mb-2">Air-Gapped</h3>
              <p className="text-vscode-variable mb-4 text-sm">
                Fully disconnected deployment for maximum security
              </p>
              <ul className="text-sm text-vscode-comment space-y-1">
                <li>Offline installation</li>
                <li>No external dependencies</li>
                <li>SOX/GDPR compliant</li>
              </ul>
            </div>
            <div className="bg-vscode-bg rounded-sm p-6 border border-vscode-border hover:border-vscode-type transition-colors">
              <Globe className="w-10 h-10 text-vscode-type mb-4" />
              <h3 className="text-xl font-bold text-vscode-function mb-2">Cloud-Native</h3>
              <p className="text-vscode-variable mb-4 text-sm">
                Deploy to AWS, Azure, or GCP with horizontal scaling
              </p>
              <ul className="text-sm text-vscode-comment space-y-1">
                <li>Horizontal auto-scaling</li>
                <li>Managed PostgreSQL</li>
                <li>Redis Enterprise</li>
                <li>Terraform templates</li>
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

      {/* CFO Executive Value Proposition */}
      <section className="section-padding bg-gradient-to-br from-vscode-bg via-[#1e3a5f] to-vscode-bg">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="bg-vscode-sidebar border-2 border-vscode-type rounded-sm p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-vscode-keyword px-4 py-2 rounded-sm mb-6">
                  <Shield className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold text-white">// for-cfo-decision-makers</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-vscode-function mb-4">
                  executiveValue.finance()
                </h2>
                <p className="text-vscode-variable max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                  Strategic AI automation for enterprise finance. Transform accounting operations with complete audit compliance, predictable costs, and measurable ROI.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* Strategic Business Value */}
                <div className="bg-vscode-bg border border-vscode-border rounded-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-vscode-type" />
                    <h3 className="text-lg font-bold text-vscode-function">Strategic Business Value</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">Predictable CapEx Model</p>
                        <p className="text-vscode-comment text-xs mt-1">Fixed annual licensing eliminates per-transaction cloud costs. Budget with confidence—no surprise bills.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">Rapid ROI: 6-9 Months</p>
                        <p className="text-vscode-comment text-xs mt-1">80% reduction in manual bookkeeping. 60% faster month-end close. Redeploy finance staff to strategic analysis.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">Zero Vendor Lock-In</p>
                        <p className="text-vscode-comment text-xs mt-1">Own your complete AI infrastructure. Full portability, no dependency on external cloud providers.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Operational Excellence */}
                <div className="bg-vscode-bg border border-vscode-border rounded-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Settings className="w-6 h-6 text-vscode-type" />
                    <h3 className="text-lg font-bold text-vscode-function">Operational Excellence</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">AI-Powered Categorization</p>
                        <p className="text-vscode-comment text-xs mt-1">99%+ accuracy on transaction categorization. Learn from corrections, continuously improve.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">Automated Reconciliation</p>
                        <p className="text-vscode-comment text-xs mt-1">Match thousands of transactions across multiple bank accounts in seconds. Flag anomalies instantly.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">Natural Language Queries</p>
                        <p className="text-vscode-comment text-xs mt-1">Ask questions like "Show me all overdue invoices over $10K" and get instant answers.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Risk & Compliance */}
                <div className="bg-vscode-bg border border-vscode-border rounded-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Lock className="w-6 h-6 text-vscode-type" />
                    <h3 className="text-lg font-bold text-vscode-function">Risk Mitigation & Compliance</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">Complete Audit Trail</p>
                        <p className="text-vscode-comment text-xs mt-1">Every transaction, categorization, and approval logged immutably. SOX and GAAP compliance ready.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">Financial Data Sovereignty</p>
                        <p className="text-vscode-comment text-xs mt-1">Sensitive financial data never leaves your premises. GDPR and data residency compliant.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">Fraud Detection</p>
                        <p className="text-vscode-comment text-xs mt-1">AI-powered anomaly detection identifies suspicious patterns before they become problems.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Technical Superiority */}
                <div className="bg-vscode-bg border border-vscode-border rounded-sm p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Code className="w-6 h-6 text-vscode-type" />
                    <h3 className="text-lg font-bold text-vscode-function">Technical Differentiation</h3>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">Rust-Powered Architecture</p>
                        <p className="text-vscode-comment text-xs mt-1">Memory-safe systems language with C/C++ performance. Zero garbage collection pauses.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">Private SLMs & VLMs—Zero External APIs</p>
                        <p className="text-vscode-comment text-xs mt-1">Trained on YOUR financial data. No calls to OpenAI, Anthropic, or Google. Institutional knowledge stays within your organization forever.</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-vscode-type rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-white font-semibold">ERP Integration Ready</p>
                        <p className="text-vscode-comment text-xs mt-1">Native connectors for SAP, Oracle, NetSuite, QuickBooks, and custom ERP systems.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ROI Highlight Banner */}
              <div className="bg-gradient-to-r from-vscode-keyword to-[#1e3a5f] border-2 border-vscode-type rounded-sm p-6 text-center mb-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">80%</div>
                    <div className="text-xs text-gray-300">Reduction in manual bookkeeping</div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-vscode-type"></div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">60%</div>
                    <div className="text-xs text-gray-300">Faster month-end close</div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-vscode-type"></div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">6-9 mo</div>
                    <div className="text-xs text-gray-300">ROI payback period</div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-vscode-type"></div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%+</div>
                    <div className="text-xs text-gray-300">Categorization accuracy</div>
                  </div>
                </div>
              </div>

              {/* Integration Coverage */}
              <div className="bg-vscode-bg border border-vscode-border rounded-sm p-6">
                <h4 className="text-base font-bold text-vscode-function mb-4 flex items-center space-x-2">
                  <Server className="w-5 h-5 text-vscode-type" />
                  <span>ERP & Financial System Integrations</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <p className="text-vscode-type font-semibold mb-2">Enterprise ERP</p>
                    <p className="text-vscode-comment">SAP S/4HANA, Oracle Financials, Microsoft Dynamics 365, Workday</p>
                  </div>
                  <div>
                    <p className="text-vscode-type font-semibold mb-2">Mid-Market</p>
                    <p className="text-vscode-comment">NetSuite, Sage Intacct, Acumatica, Epicor</p>
                  </div>
                  <div>
                    <p className="text-vscode-type font-semibold mb-2">Banking & Payments</p>
                    <p className="text-vscode-comment">Plaid, Stripe, Major Banks, ACH/Wire Networks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - IDE Style */}
      <section className="section-padding bg-vscode-sidebar">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-vscode-bg border-2 border-vscode-type rounded-sm p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-vscode-function mb-6">
                ready.toAutomate()
              </h2>
              <p className="text-xl text-vscode-variable mb-8">
                See how Accounting Engine can revolutionize your finance operations with intelligent automation
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-vscode-keyword hover:bg-vscode-selection text-white font-mono uppercase" onClick={() => window.location.href = '/contact'}>
                  $ schedule-demo
                </Button>
                <a href="/accounting-engine/spec-sheet">
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
              <div>8 Agents Active</div>
            </div>
            <div className="flex items-center space-x-6">
              <div>Production Ready</div>
              <div>accounting-engine v1.0.0</div>
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
    icon: Brain,
    title: 'AI Transaction Categorization',
    description: '99%+ accuracy on transaction categorization with machine learning that continuously improves from corrections'
  },
  {
    icon: Database,
    title: 'Automated Reconciliation',
    description: 'Match thousands of transactions across multiple bank accounts in seconds with intelligent anomaly detection'
  },
  {
    icon: PieChart,
    title: 'Real-time Financial Reporting',
    description: 'Generate P&L, balance sheets, and custom reports on-demand with natural language queries'
  },
  {
    icon: Receipt,
    title: 'AP/AR Automation',
    description: 'Intelligent invoice processing, 3-way matching, and automated payment scheduling with approval workflows'
  },
  {
    icon: FileText,
    title: 'Journal Entry Automation',
    description: 'Generate journal entries from source documents with AI-powered data extraction and validation'
  },
  {
    icon: Shield,
    title: 'Audit-Ready Compliance',
    description: 'Complete audit trails with SOX, GAAP, and IFRS compliance support built into every transaction'
  }
]

const agents = [
  { name: 'Supervisor Agent', role: 'Orchestrates workflows and routes financial queries to specialized agents' },
  { name: 'Transaction Agent', role: 'AI-powered categorization and coding of all financial transactions' },
  { name: 'Reporting Agent', role: 'Generates financial reports, dashboards, and ad-hoc queries' },
  { name: 'AP Agent', role: 'Accounts payable processing, invoice matching, and payment scheduling' },
  { name: 'AR Agent', role: 'Accounts receivable, collections tracking, and revenue recognition' },
  { name: 'Reconciliation Agent', role: 'Bank reconciliation, intercompany eliminations, and variance analysis' },
  { name: 'Audit Agent', role: 'Compliance validation, audit trail management, and SOX controls' },
  { name: 'Integration Agent', role: 'ERP connectors, bank feeds, and third-party system synchronization' }
]

const useCases = [
  {
    title: 'Natural Language Query',
    query: '"Show me all overdue invoices over $10K"',
    result: 'Returns list with customer names, amounts, aging, and suggested collection actions'
  },
  {
    title: 'Automated Reconciliation',
    query: '"Reconcile all bank accounts for December"',
    result: 'Matches 2,847 transactions in 12 seconds, flags 3 exceptions for review'
  },
  {
    title: 'Invoice Processing',
    query: '"Process the invoices in the pending folder"',
    result: 'Extracts data from 150 invoices, matches to POs, routes for approval'
  },
  {
    title: 'Financial Reporting',
    query: '"Generate Q4 P&L by department vs budget"',
    result: 'Creates detailed variance analysis with drill-down to transaction level'
  }
]

const techStack = [
  { name: 'Rust Core', category: 'Runtime Engine' },
  { name: 'JetGraph', category: 'Agentic Framework' },
  { name: 'Private SLMs', category: 'Text Intelligence' },
  { name: 'Private VLMs', category: 'Vision Intelligence' },
  { name: 'PostgreSQL', category: 'Primary Database' },
  { name: 'Audit Ledger', category: 'Immutable Logs' },
  { name: 'ChromaDB', category: 'Vector Search' },
  { name: 'Redis Cache', category: 'In-Memory DB' },
  { name: 'Docker', category: 'Container' },
  { name: 'Kubernetes', category: 'Orchestration' }
]

const benefits = [
  { metric: '99%+', description: 'Transaction categorization accuracy' },
  { metric: '80%', description: 'Reduction in manual bookkeeping' },
  { metric: '60%', description: 'Faster month-end close' },
  { metric: '100%', description: 'Audit trail coverage' }
]

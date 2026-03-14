'use client'

import { motion } from 'framer-motion'
import { CheckCircle, X, TrendingDown, Zap, Shield, Database, DollarSign, Award, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function ComparePage() {
  const competitors = [
    {
      name: 'Palantir Foundry/Gotham',
      logo: 'Palantir',
      type: 'Enterprise Data Platform'
    },
    {
      name: 'AWS Data Stack',
      logo: 'AWS',
      type: 'Cloud ETL & Analytics'
    },
    {
      name: 'Azure Synapse + Stack',
      logo: 'Azure',
      type: 'Cloud Data Platform'
    },
    {
      name: 'Cloud LLM APIs',
      logo: 'OpenAI/Anthropic',
      type: 'General AI Services'
    }
  ]

  const eliminatedTools = {
    aws: [
      { name: 'AWS Glue', purpose: 'ETL service', cost: '$44/DPU-hour + processing' },
      { name: 'Amazon Redshift', purpose: 'Data warehouse', cost: '$0.25-$13.04/hour/node' },
      { name: 'Amazon EMR', purpose: 'Big data processing', cost: 'Cluster + EC2 costs' },
      { name: 'AWS Data Pipeline', purpose: 'Workflow orchestration', cost: '$1/pipeline/month + activities' },
      { name: 'Amazon Athena', purpose: 'Query service', cost: '$5 per TB scanned' },
      { name: 'AWS Lake Formation', purpose: 'Data lake management', cost: 'Compute + storage costs' }
    ],
    azure: [
      { name: 'Azure Data Factory', purpose: 'ETL/ELT pipelines', cost: '$1-$2.50 per 1K activities' },
      { name: 'Azure Synapse Analytics', purpose: 'Data warehouse', cost: '$1.20-$360/hour' },
      { name: 'Azure Databricks', purpose: 'Data engineering', cost: '$0.40-$0.60/DBU + compute' },
      { name: 'Azure Stream Analytics', purpose: 'Real-time processing', cost: '$0.11/streaming unit/hour' },
      { name: 'Power BI Premium', purpose: 'Analytics layer', cost: '$4,995-$19,995/month' }
    ],
    gcp: [
      { name: 'Cloud Dataflow', purpose: 'ETL processing', cost: '$0.056-$0.283/vCPU hour' },
      { name: 'BigQuery', purpose: 'Data warehouse', cost: '$5-$6.25 per TB processed' },
      { name: 'Cloud Composer', purpose: 'Workflow orchestration', cost: '$0.079/vCPU hour' },
      { name: 'Dataproc', purpose: 'Big data clusters', cost: '$0.01/vCPU/hour + compute' }
    ],
    thirdParty: [
      { name: 'Snowflake', purpose: 'Data warehouse', cost: '$2-$4/credit (thousands/month)' },
      { name: 'Fivetran/Airbyte', purpose: 'Data connectors', cost: '$1K-$5K/month per connector' },
      { name: 'dbt', purpose: 'Data transformation', cost: '$100/developer/month' },
      { name: 'Tableau/Looker', purpose: 'BI tools', cost: '$70-$840/user/year' }
    ]
  }

  const comparisonMatrix = [
    {
      category: 'Deployment & Data Sovereignty',
      callintel: { value: '100% on-premises, air-gapped support', icon: CheckCircle, color: 'text-green-400' },
      palantir: { value: 'Cloud-first, limited on-prem', icon: X, color: 'text-red-400' },
      aws: { value: 'Cloud-only, data leaves infrastructure', icon: X, color: 'text-red-400' },
      others: { value: 'Hybrid at best, cloud dependencies', icon: X, color: 'text-red-400' }
    },
    {
      category: 'AI Technology',
      callintel: { value: 'Custom SLMs trained on YOUR data', icon: CheckCircle, color: 'text-green-400' },
      palantir: { value: 'Pre-built models, limited customization', icon: X, color: 'text-yellow-400' },
      aws: { value: 'General-purpose LLMs, not domain-specific', icon: X, color: 'text-red-400' },
      others: { value: 'Generic models, no proprietary training', icon: X, color: 'text-red-400' }
    },
    {
      category: 'Data Engineering & ETL',
      callintel: { value: 'Autonomous agents - NO ETL required', icon: CheckCircle, color: 'text-green-400' },
      palantir: { value: 'Manual pipeline configuration required', icon: X, color: 'text-red-400' },
      aws: { value: 'Requires Glue + Data Pipeline + engineers', icon: X, color: 'text-red-400' },
      others: { value: 'Complex ETL infrastructure needed', icon: X, color: 'text-red-400' }
    },
    {
      category: 'Data Warehousing',
      callintel: { value: 'Direct insights from raw data - NO warehouse', icon: CheckCircle, color: 'text-green-400' },
      palantir: { value: 'Requires Foundry data platform', icon: X, color: 'text-red-400' },
      aws: { value: 'Requires Redshift/Athena + maintenance', icon: X, color: 'text-red-400' },
      others: { value: 'Synapse, BigQuery, or Snowflake required', icon: X, color: 'text-red-400' }
    },
    {
      category: 'Security Architecture',
      callintel: { value: 'Rust-powered, memory-safe, helps reduce common vulnerabilities', icon: CheckCircle, color: 'text-green-400' },
      palantir: { value: 'Java-based architecture', icon: X, color: 'text-yellow-400' },
      aws: { value: 'Multiple services architecture', icon: X, color: 'text-red-400' },
      others: { value: 'Various language implementations', icon: X, color: 'text-red-400' }
    },
    {
      category: 'Total Cost of Ownership (3 years)',
      callintel: { value: '$540K-$1.44M total', icon: CheckCircle, color: 'text-green-400' },
      palantir: { value: '$2M-$10M+ total', icon: X, color: 'text-red-400' },
      aws: { value: '$2.7M-$8.1M for full analytics stack', icon: X, color: 'text-red-400' },
      others: { value: '$1.5M-$6M depending on usage', icon: X, color: 'text-red-400' }
    },
    {
      category: 'Data Privacy & Ownership',
      callintel: { value: 'You own model weights, biases, all data', icon: CheckCircle, color: 'text-green-400' },
      palantir: { value: 'Vendor lock-in, limited data portability', icon: X, color: 'text-yellow-400' },
      aws: { value: 'Data sent to cloud, vendor terms apply', icon: X, color: 'text-red-400' },
      others: { value: 'Vendor owns models, data in cloud', icon: X, color: 'text-red-400' }
    },
    {
      category: 'Compliance Support',
      callintel: { value: 'FedRAMP, FIPS 140-2, air-gapped classified', icon: CheckCircle, color: 'text-green-400' },
      palantir: { value: 'FedRAMP, but cloud-based limitations', icon: CheckCircle, color: 'text-yellow-400' },
      aws: { value: 'Cloud compliance only, no true air-gap', icon: X, color: 'text-yellow-400' },
      others: { value: 'Limited or no air-gap support', icon: X, color: 'text-red-400' }
    }
  ]

  const stackCostComparison = {
    traditional: [
      { item: 'AWS Glue / Azure Data Factory (ETL)', cost: '$3K-$8K/month' },
      { item: 'Redshift / Synapse (Data Warehouse)', cost: '$5K-$25K/month' },
      { item: 'EMR / Databricks (Processing)', cost: '$4K-$15K/month' },
      { item: 'Fivetran / Airbyte (Connectors)', cost: '$2K-$10K/month' },
      { item: 'Snowflake (Additional DW)', cost: '$10K-$50K/month' },
      { item: 'Tableau / Power BI (BI Tools)', cost: '$2K-$20K/month' },
      { item: 'DevOps & Data Engineers', cost: '$50K-$100K/month' },
    ],
    totalTraditional: {
      monthly: '$76K-$228K',
      yearly: '$912K-$2.7M',
      threeYear: '$2.7M-$8.1M'
    },
    callintel: {
      monthly: '$15K-$40K',
      yearly: '$180K-$480K',
      threeYear: '$540K-$1.44M'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gunmetal-950 via-gunmetal-900 to-primary-950">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-tactical-900 px-4 py-2 rounded-sm mb-6 border border-tactical-700">
              <Award className="w-5 h-5 text-tactical-400" />
              <span className="text-xs font-bold text-tactical-400 uppercase tracking-wider">Competitive Analysis</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-wide mb-6">
              Why Leading Organizations Choose <span className="text-tactical-400">Jetbuilder</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Stop paying for 12+ cloud tools. Deploy one Agentic AI platform that reduces the need for ETL, data warehouses, 
              orchestration tools, and BI licensing—all on your infrastructure with data sovereignty controls.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-gunmetal-900 border-2 border-tactical-700 p-6">
                <TrendingDown className="w-8 h-8 text-tactical-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">$2M-$7M</div>
                <p className="text-sm text-gray-400">3-Year Cost Savings vs Cloud Stack</p>
              </Card>
              <Card className="bg-gunmetal-900 border-2 border-tactical-700 p-6">
                <Zap className="w-8 h-8 text-tactical-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">12+ Tools</div>
                <p className="text-sm text-gray-400">Eliminated by Agentic AI</p>
              </Card>
              <Card className="bg-gunmetal-900 border-2 border-tactical-700 p-6">
                <Shield className="w-8 h-8 text-tactical-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <p className="text-sm text-gray-400">On-Premises, Minimal Cloud APIs</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agentic AI Eliminates Traditional Data Stack */}
      <section className="section-padding bg-gunmetal-950/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
              Agentic AI Eliminates <span className="text-tactical-400">Traditional Data Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our autonomous agents can reduce or eliminate the need for tools like AWS Glue, Redshift, EMR, Azure Data Factory, Synapse, BigQuery, 
              Snowflake, Databricks, Fivetran, Airflow, and BI tools—potentially saving significant costs in many deployments.
            </p>
          </motion.div>

          {/* Cloud Provider Stacks Eliminated */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* AWS Stack */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gunmetal-900 border-2 border-red-900/50 p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white uppercase">AWS Stack</h3>
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-sm text-gray-400 mb-4">Eliminated by Sovereign AI Platform</p>
                <div className="space-y-3">
                  {eliminatedTools.aws.map((tool, index) => (
                    <div key={index} className="border-l-2 border-red-500 pl-3">
                      <div className="text-white font-semibold text-sm line-through opacity-60">{tool.name}</div>
                      <div className="text-xs text-gray-500">{tool.purpose}</div>
                      <div className="text-xs text-red-400 mt-1">{tool.cost}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Azure Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-gunmetal-900 border-2 border-red-900/50 p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white uppercase">Azure Stack</h3>
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-sm text-gray-400 mb-4">Eliminated by Sovereign AI Platform</p>
                <div className="space-y-3">
                  {eliminatedTools.azure.map((tool, index) => (
                    <div key={index} className="border-l-2 border-red-500 pl-3">
                      <div className="text-white font-semibold text-sm line-through opacity-60">{tool.name}</div>
                      <div className="text-xs text-gray-500">{tool.purpose}</div>
                      <div className="text-xs text-red-400 mt-1">{tool.cost}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* GCP + Third-Party Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-gunmetal-900 border-2 border-red-900/50 p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white uppercase">GCP + Third-Party</h3>
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-sm text-gray-400 mb-4">Eliminated by Sovereign AI Platform</p>
                <div className="space-y-3 mb-4">
                  {eliminatedTools.gcp.map((tool, index) => (
                    <div key={index} className="border-l-2 border-red-500 pl-3">
                      <div className="text-white font-semibold text-sm line-through opacity-60">{tool.name}</div>
                      <div className="text-xs text-gray-500">{tool.purpose}</div>
                      <div className="text-xs text-red-400 mt-1">{tool.cost}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-tactical-700 pt-3 space-y-3">
                  {eliminatedTools.thirdParty.slice(0, 2).map((tool, index) => (
                    <div key={index} className="border-l-2 border-red-500 pl-3">
                      <div className="text-white font-semibold text-sm line-through opacity-60">{tool.name}</div>
                      <div className="text-xs text-gray-500">{tool.purpose}</div>
                      <div className="text-xs text-red-400 mt-1">{tool.cost}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* What Sovereign AI Platform Does Instead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-tactical-900/40 to-gunmetal-800/40 border-2 border-tactical-500 rounded-lg p-8"
          >
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-tactical-400" />
            </div>
            <h3 className="text-2xl font-bold text-white uppercase tracking-wide text-center mb-6">
              Sovereign AI Platform Does It All
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Database className="w-8 h-8 text-tactical-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Multi-Modal Data Processing</h4>
                <p className="text-sm text-gray-400">Process documents, voice, video, databases, and business systems—no ETL needed</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-tactical-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Dynamic Schema Adaptation</h4>
                <p className="text-sm text-gray-400">Schemas evolve automatically—no manual ALTER TABLE or migrations</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-tactical-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Direct Insights</h4>
                <p className="text-sm text-gray-400">Analyze raw data without warehouses—no data duplication</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-tactical-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Embedded Analytics</h4>
                <p className="text-sm text-gray-400">Interactive dashboards built-in—no BI tool licensing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
              Total Cost of Ownership <span className="text-tactical-400">Comparison</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Illustrative enterprise cost estimates over 3 years based on publicly available pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Traditional Stack */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gunmetal-900 border-2 border-red-900/50 p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white uppercase">Traditional Cloud Stack</h3>
                  <DollarSign className="w-8 h-8 text-red-400" />
                </div>
                <div className="space-y-3 mb-6">
                  {stackCostComparison.traditional.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gunmetal-950/60 rounded border border-red-900/30">
                      <span className="text-sm text-gray-300">{item.item}</span>
                      <span className="text-sm font-bold text-red-400">{item.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t-2 border-red-900 pt-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly Cost:</span>
                      <span className="text-xl font-bold text-red-400">{stackCostComparison.totalTraditional.monthly}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Annual Cost:</span>
                      <span className="text-xl font-bold text-red-400">{stackCostComparison.totalTraditional.yearly}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-red-900">
                      <span className="text-white font-bold">3-Year Total:</span>
                      <span className="text-2xl font-bold text-red-400">{stackCostComparison.totalTraditional.threeYear}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Sovereign AI Platform */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gunmetal-900 border-2 border-tactical-700 p-8 h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white uppercase">Sovereign AI Platform</h3>
                  <CheckCircle className="w-8 h-8 text-tactical-400" />
                </div>
                <div className="space-y-3 mb-6">
                  <div className="p-4 bg-tactical-900/30 rounded border-2 border-tactical-600">
                    <div className="text-white font-bold mb-2">Everything Included:</div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-tactical-400 mt-0.5 flex-shrink-0" />
                        <span>Autonomous data discovery & extraction</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-tactical-400 mt-0.5 flex-shrink-0" />
                        <span>Dynamic schema management</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-tactical-400 mt-0.5 flex-shrink-0" />
                        <span>Multi-agent orchestration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-tactical-400 mt-0.5 flex-shrink-0" />
                        <span>Real-time analytics & dashboards</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-tactical-400 mt-0.5 flex-shrink-0" />
                        <span>Custom SLM training & deployment</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-tactical-400 mt-0.5 flex-shrink-0" />
                        <span>Unlimited processing—no per-token fees</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-tactical-400 mt-0.5 flex-shrink-0" />
                        <span>24/7 support & maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t-2 border-tactical-700 pt-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly Cost:</span>
                      <span className="text-xl font-bold text-tactical-400">{stackCostComparison.callintel.monthly}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Annual Cost:</span>
                      <span className="text-xl font-bold text-tactical-400">{stackCostComparison.callintel.yearly}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-tactical-700">
                      <span className="text-white font-bold">3-Year Total:</span>
                      <span className="text-2xl font-bold text-tactical-400">{stackCostComparison.callintel.threeYear}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Savings Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-tactical-900 to-tactical-800 border-2 border-tactical-500 rounded-lg p-8 text-center"
          >
            <TrendingDown className="w-16 h-16 text-tactical-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">Total Savings with Sovereign AI Platform</h3>
            <div className="text-5xl font-bold text-tactical-400 mb-4">$2.16M - $6.66M</div>
            <p className="text-xl text-gray-300 mb-6">Estimated potential savings over 3 years vs. traditional cloud analytics stack*</p>
            <div className="inline-flex items-center space-x-2 bg-gunmetal-900 px-6 py-3 rounded border border-tactical-600">
              <span className="text-lg font-bold text-white">ROI Payback Period:</span>
              <span className="text-2xl font-bold text-tactical-400">2.6x - 5.6x</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="section-padding bg-gunmetal-950/50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
              Feature Comparison <span className="text-tactical-400">Matrix</span>
            </h2>
            <p className="text-xl text-gray-300">Head-to-head comparison across critical capabilities</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-tactical-700">
                  <th className="text-left p-4 text-white font-bold uppercase tracking-wide">Category</th>
                  <th className="text-center p-4 text-tactical-400 font-bold uppercase tracking-wide">Sovereign AI</th>
                  <th className="text-center p-4 text-gray-400 font-bold uppercase tracking-wide text-sm">Palantir</th>
                  <th className="text-center p-4 text-gray-400 font-bold uppercase tracking-wide text-sm">AWS/Azure/GCP</th>
                  <th className="text-center p-4 text-gray-400 font-bold uppercase tracking-wide text-sm">Cloud LLMs</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-tactical-800 hover:bg-gunmetal-900/30 transition-colors"
                  >
                    <td className="p-4 text-white font-semibold">{row.category}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-center space-x-2">
                        <row.callintel.icon className={`w-5 h-5 ${row.callintel.color}`} />
                        <span className="text-sm text-white text-center">{row.callintel.value}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center space-x-2">
                        <row.palantir.icon className={`w-5 h-5 ${row.palantir.color}`} />
                        <span className="text-sm text-gray-400 text-center">{row.palantir.value}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center space-x-2">
                        <row.aws.icon className={`w-5 h-5 ${row.aws.color}`} />
                        <span className="text-sm text-gray-400 text-center">{row.aws.value}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center space-x-2">
                        <row.others.icon className={`w-5 h-5 ${row.others.color}`} />
                        <span className="text-sm text-gray-400 text-center">{row.others.value}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-tactical-900/40 to-gunmetal-800/40 border-2 border-tactical-500 rounded-lg p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide mb-4">
              See the Difference for Your Organization
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Request a detailed competitive analysis and personalized TCO comparison for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="group text-lg px-8 py-6">
                Request Detailed Comparison
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => window.location.href = '/contact'}>
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Disclaimer */}
      <section className="section-padding bg-gunmetal-950/80">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gunmetal-900 border-2 border-tactical-700 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4">
              Comparative Analysis Disclaimer
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
              <p>
                <strong className="text-white">Competitive Comparisons:</strong> The comparisons presented on this page are based on publicly available information, product documentation, and industry analyst reports as of the date of publication. Competitor features, pricing, and capabilities change frequently and may not reflect current offerings. We have made reasonable efforts to ensure accuracy, but cannot guarantee all information is current or complete. Competitors' actual performance, features, and pricing may differ from what is presented here.
              </p>
              <p>
                <strong className="text-white">Cost Estimates:</strong> All cost figures are illustrative estimates based on typical enterprise usage patterns, publicly available list pricing, and standard configuration assumptions. Actual costs will vary significantly based on your specific usage volumes, negotiated discounts, deployment configurations, data volumes, number of users, support tiers, and other factors. These estimates do not account for enterprise discounts, promotional pricing, or custom contract terms that may be available from any vendor. We recommend obtaining direct quotes from all vendors for accurate pricing.
              </p>
              <p>
                <strong className="text-white">Savings Calculations:</strong> Projected cost savings are estimates based on comparison to publicly available list pricing for competitive solutions and are not guarantees of actual savings. Actual savings will depend on your specific circumstances, current infrastructure costs, implementation approach, data volumes, and usage patterns. Results and cost savings vary significantly between deployments. Not all customers will achieve the estimated savings shown.
              </p>
              <p>
                <strong className="text-white">Technical Claims:</strong> Feature comparisons reflect our understanding of competitive products based on publicly available documentation and may not account for all features, configurations, or recent updates. Deployment models, security features, and technical capabilities of competitive products may vary based on specific product tiers, add-ons, and configurations. Performance characteristics are deployment-dependent and actual results will vary.
              </p>
              <p>
                <strong className="text-white">ROI and Performance:</strong> Return on investment calculations are illustrative examples based on assumptions about typical usage and cost structures. Actual ROI will vary based on your specific costs, implementation, usage patterns, and business outcomes. Performance improvements and cost reductions are not guaranteed and depend on numerous factors specific to your deployment.
              </p>
              <p>
                <strong className="text-white">No Endorsement:</strong> References to third-party products and companies are for comparative purposes only and do not imply endorsement, affiliation, or sponsorship by those companies. All trademarks and product names are the property of their respective owners.
              </p>
              <p>
                <strong className="text-white">Information Currency:</strong> Technology products and pricing change rapidly. This comparison reflects information available at time of publication and may become outdated. We recommend verifying all information with the respective vendors before making purchasing decisions.
              </p>
              <p className="text-xs text-gray-500 mt-6">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}. For questions about this comparison or to request supporting documentation, please contact sales@jetbuilder.ai.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



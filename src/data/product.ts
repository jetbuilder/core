export interface ProductFeature {
  id: string
  category: string
  title: string
  description: string
  capabilities: string[]
  icon: string
}

export interface PlatformCapability {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export const productFeatures: ProductFeature[] = [
  {
    id: "context-engineering",
    category: "Intelligence Layer",
    title: "Advanced Context Engineering",
    description: "Dynamically construct and manage context for AI agents from voice, text, and unstructured data. Intelligent context pruning, relevance scoring, and automatic context window optimization.",
    capabilities: [
      "Dynamic context window management",
      "Intelligent context pruning & relevance scoring",
      "Multi-source context aggregation",
      "Real-time context updates from streaming data",
      "Context versioning & rollback capabilities"
    ],
    icon: "Brain"
  },
  {
    id: "schema-management",
    category: "Data Layer",
    title: "Dynamic Schema Management",
    description: "Self-adapting data schemas that evolve with your intelligence requirements. AI agents automatically discover, create, and modify schemas as new data patterns emerge.",
    capabilities: [
      "Auto-discovery of data structures",
      "Schema evolution without downtime",
      "Cross-source schema mapping",
      "Version-controlled schema changes",
      "Backward compatibility support"
    ],
    icon: "Database"
  },
  {
    id: "memory-system",
    category: "Agentic Framework",
    title: "Hierarchical Memory System",
    description: "Multi-tier memory architecture with short-term, long-term, and episodic memory. AI agents remember conversations, learn from patterns, and recall relevant intelligence across time.",
    capabilities: [
      "Short-term memory for active operations",
      "Long-term memory with vector embeddings",
      "Episodic memory for event sequences",
      "Semantic memory for knowledge graphs",
      "Memory consolidation & pruning"
    ],
    icon: "HardDrive"
  },
  {
    id: "agentic-infra",
    category: "Agentic Framework",
    title: "Agentic Infrastructure",
    description: "Complete framework for deploying, orchestrating, and managing fleets of autonomous AI agents. Agent lifecycle management, inter-agent communication, and distributed task coordination.",
    capabilities: [
      "Agent lifecycle management (spawn, pause, terminate)",
      "Inter-agent communication protocols",
      "Distributed task queue & coordination",
      "Agent health monitoring & auto-recovery",
      "Dynamic agent scaling based on workload"
    ],
    icon: "Network"
  },
  {
    id: "reasoning-engine",
    category: "Agentic Framework",
    title: "Advanced Reasoning Engine",
    description: "Multi-step reasoning, chain-of-thought processing, and decision trees. AI agents break down complex intelligence tasks, reason through multiple scenarios, and provide explainable decisions.",
    capabilities: [
      "Chain-of-thought reasoning",
      "Multi-step problem decomposition",
      "Hypothesis generation & testing",
      "Probabilistic reasoning under uncertainty",
      "Explainable AI decision traces"
    ],
    icon: "Lightbulb"
  },
  {
    id: "tool-orchestration",
    category: "Agentic Framework",
    title: "Tool & Function Orchestration",
    description: "AI agents autonomously select, chain, and execute tools and functions. Dynamic tool discovery, parameter optimization, and error recovery for complex multi-tool workflows.",
    capabilities: [
      "Dynamic tool selection & chaining",
      "Parameter optimization & validation",
      "Tool execution with error recovery",
      "Custom tool registration & discovery",
      "Parallel tool execution"
    ],
    icon: "Wrench"
  }
]

export const platformCapabilities: PlatformCapability[] = [
  {
    id: "memory-types",
    title: "Memory Architecture",
    description: "Multi-tier memory system enabling AI agents to learn, remember, and recall",
    features: [
      "Working Memory: Active context for current operations",
      "Short-Term Memory: Recent events and conversations",
      "Long-Term Memory: Persistent knowledge with vector embeddings",
      "Episodic Memory: Event sequences and temporal patterns",
      "Semantic Memory: Knowledge graphs and entity relationships",
      "Procedural Memory: Learned skills and workflows"
    ],
    icon: "Database"
  },
  {
    id: "agent-capabilities",
    title: "Autonomous Agent Capabilities",
    description: "Self-directed agents that plan, execute, and adapt without human intervention",
    features: [
      "Goal decomposition & task planning",
      "Self-monitoring & error correction",
      "Adaptive behavior based on feedback",
      "Multi-agent collaboration & negotiation",
      "Continuous learning from operations",
      "Autonomous decision-making under constraints"
    ],
    icon: "Bot"
  },
  {
    id: "observability",
    title: "Platform Observability",
    description: "Complete visibility into agent behavior, decisions, and system performance",
    features: [
      "Real-time agent activity dashboards",
      "Decision tree visualization",
      "Performance metrics & KPIs",
      "Audit trails for all agent actions",
      "Anomaly detection in agent behavior",
      "Root cause analysis tools"
    ],
    icon: "Eye"
  },
  {
    id: "orchestration",
    title: "Multi-Agent Orchestration",
    description: "Coordinate fleets of specialized agents working toward common objectives",
    features: [
      "Hierarchical agent organization",
      "Task distribution & load balancing",
      "Inter-agent messaging & pub/sub",
      "Consensus mechanisms for decisions",
      "Resource allocation & priority management",
      "Fault tolerance & agent failover"
    ],
    icon: "Network"
  }
]


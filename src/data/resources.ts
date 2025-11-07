export interface Resource {
  id: string
  category: string
  title: string
  description: string
  author: string
  role: string
}

export const resources: Resource[] = [
  {
    id: "1",
    category: "AI Agents",
    title: "Build agents that understand every voice",
    description: "Ship AI agents that stay readable in real time, even in noisy, multi-speaker calls.",
    author: "Engineering Team",
    role: "Editorial Team",
  },
  {
    id: "2",
    category: "Technology",
    title: "Why we built our low-latency AI platform",
    description: "Most AI sounds great in demos but breaks in real conversations. We built ours for sub-150ms latency, natural processing, and global scale.",
    author: "Sarah Johnson",
    role: "Product Manager",
  },
  {
    id: "3",
    category: "Healthcare",
    title: "The ultimate guide to healthcare AI",
    description: "Reducing documentation time, easing physician burnout, and improving patient care and efficiency with AI.",
    author: "Michael Chen",
    role: "Account Executive",
  },
  {
    id: "4",
    category: "Enterprise",
    title: "The return of on-premise: Why enterprise AI is evolving",
    description: "As regulations rise and cloud costs spiral, enterprises are bringing AI home—with better outcomes.",
    author: "David Williams",
    role: "Director, SaaS & Infrastructure",
  },
]


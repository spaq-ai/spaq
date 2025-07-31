'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  ArrowLeft, 
  BookOpen, 
  Rocket, 
  Code, 
  MessageSquare, 
  GitBranch, 
  Key, 
  Users, 
  Zap,
  ChevronRight,
  Search,
  Copy,
  Check,
  Terminal,
  Database,
  Shield,
  Globe,
  Clock
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function DocsPage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('getting-started')
  const [activeSubsection, setActiveSubsection] = useState('intro')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      subsections: [
        { id: 'intro', title: 'Introduction' },
        { id: 'quickstart', title: 'Quick Start' },
        { id: 'concepts', title: 'Core Concepts' }
      ]
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: MessageSquare,
      subsections: [
        { id: 'slack', title: 'Slack Setup' },
        { id: 'teams', title: 'Microsoft Teams' },
        { id: 'webhooks', title: 'Webhooks' }
      ]
    },
    {
      id: 'decision-chains',
      title: 'Decision Chains',
      icon: GitBranch,
      subsections: [
        { id: 'create', title: 'Creating Chains' },
        { id: 'manage', title: 'Managing Chains' },
        { id: 'templates', title: 'Templates' }
      ]
    },
    {
      id: 'ai-agent',
      title: 'AI Agent',
      icon: Brain,
      subsections: [
        { id: 'training', title: 'Training Your AI' },
        { id: 'querying', title: 'Querying' },
        { id: 'fine-tuning', title: 'Fine-tuning' }
      ]
    },
    {
      id: 'api',
      title: 'API Reference',
      icon: Code,
      subsections: [
        { id: 'auth', title: 'Authentication' },
        { id: 'endpoints', title: 'Endpoints' },
        { id: 'examples', title: 'Examples' }
      ]
    },
    {
      id: 'sdk',
      title: 'SDKs',
      icon: Terminal,
      subsections: [
        { id: 'typescript', title: 'TypeScript/JavaScript' },
        { id: 'python', title: 'Python' },
        { id: 'java', title: 'Java' },
        { id: 'go', title: 'Go' },
        { id: 'rust', title: 'Rust' },
        { id: 'csharp', title: 'C#/.NET' },
        { id: 'ruby', title: 'Ruby' },
        { id: 'php', title: 'PHP' },
        { id: 'sdk-examples', title: 'SDK Examples' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: Shield,
      subsections: [
        { id: 'data-privacy', title: 'Data Privacy' },
        { id: 'compliance', title: 'Compliance' },
        { id: 'best-practices', title: 'Best Practices' }
      ]
    }
  ]

  const codeExamples = {
    slack: `# Install the spaq Slack app
/spaq install

# Capture a decision
@spaq Decision: We're using PostgreSQL for the new service
Reason: Better support for complex queries and JSONB

# Query past decisions
@spaq why did we choose PostgreSQL?`,
    
    api: `// Initialize spaq client
import { SpaqClient } from '@spaq/sdk';

const spaq = new SpaqClient({
  apiKey: process.env.SPAQ_API_KEY
});

// Create a decision
const decision = await spaq.decisions.create({
  title: "Database Selection",
  choice: "PostgreSQL",
  reasoning: "Better support for complex queries",
  tags: ["backend", "database"]
});

// Query decisions
const results = await spaq.query(
  "What database decisions have we made?"
);`,
    
    chain: `{
  "id": "chain_123",
  "name": "API Design Decisions",
  "nodes": [
    {
      "id": "node_1",
      "type": "decision",
      "title": "REST vs GraphQL",
      "choice": "GraphQL",
      "reasoning": "Better for our mobile clients"
    },
    {
      "id": "node_2",
      "type": "outcome",
      "title": "Reduced API calls by 60%",
      "linkedTo": "node_1"
    }
  ]
}`
  }

  const getContent = () => {
    switch (activeSection) {
      case 'getting-started':
        if (activeSubsection === 'intro') {
          return (
            <div className="space-y-8">
              <section id="intro">
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-gray-300 mb-4">
                  spaq is an AI-powered decision intelligence platform that helps teams capture, organize, and learn from their decision-making processes. 
                  By integrating with your existing communication tools and building knowledge graphs, spaq ensures that critical decisions are never lost.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: MessageSquare, title: 'Capture', desc: 'Automatically capture decisions from Slack/Teams' },
                    { icon: GitBranch, title: 'Connect', desc: 'Build visual decision chains' },
                    { icon: Brain, title: 'Learn', desc: 'Train AI on your patterns' }
                  ].map((item, i) => (
                    <div key={i} className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-4">
                      <item.icon className="w-8 h-8 text-purple-400 mb-2" />
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )
        } else if (activeSubsection === 'quickstart') {
          return (
            <div className="space-y-8">
              <section id="quickstart">
                <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
                <div className="space-y-4">
                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      Install the Integration
                    </h3>
                    <p className="text-gray-300 mb-4">Add spaq to your Slack workspace or Microsoft Teams:</p>
                    <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <code className="text-purple-400">/apps → Search "spaq" → Add to Slack</code>
                        <button
                          onClick={() => copyCode('/apps → Search "spaq" → Add to Slack', 'install')}
                          className="text-gray-400 hover:text-white transition"
                        >
                          {copiedCode === 'install' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      Start Capturing Decisions
                    </h3>
                    <p className="text-gray-300 mb-4">Mention @spaq when making decisions:</p>
                    <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <code className="text-purple-400">@spaq We decided to use React for the frontend</code>
                        <button
                          onClick={() => copyCode('@spaq We decided to use React for the frontend', 'capture')}
                          className="text-gray-400 hover:text-white transition"
                        >
                          {copiedCode === 'capture' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      Query Your Knowledge
                    </h3>
                    <p className="text-gray-300 mb-4">Ask questions about past decisions:</p>
                    <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                      <div className="flex items-center justify-between">
                        <code className="text-purple-400">@spaq why did we choose React over Vue?</code>
                        <button
                          onClick={() => copyCode('@spaq why did we choose React over Vue?', 'query')}
                          className="text-gray-400 hover:text-white transition"
                        >
                          {copiedCode === 'query' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )
        } else if (activeSubsection === 'concepts') {
          return (
            <div className="space-y-8">
              <section id="concepts">
                <h2 className="text-2xl font-bold mb-4">Core Concepts</h2>
                <p className="text-gray-300 mb-6">
                  Understanding these core concepts will help you get the most out of spaq.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">Decisions</h3>
                    <p className="text-gray-300 mb-3">
                      A decision is any choice made by your team that affects your project or product. This includes:
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Technical choices (frameworks, databases, architectures)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Product decisions (features, priorities, roadmap)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Process decisions (workflows, tools, methodologies)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">Decision Chains</h3>
                    <p className="text-gray-300 mb-3">
                      Decision chains show how choices connect and influence each other over time. They help you:
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Visualize decision dependencies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Track outcomes and impacts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Understand decision evolution</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">AI Agent</h3>
                    <p className="text-gray-300 mb-3">
                      Your personalized AI that learns from your team's decision patterns to provide:
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Instant answers about past decisions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Context-aware recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>Decision impact analysis</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                    <h3 className="text-lg font-semibold mb-3 text-purple-400">Integrations</h3>
                    <p className="text-gray-300">
                      Connect spaq with your existing tools to automatically capture decisions where they happen. 
                      Support for Slack, Microsoft Teams, GitHub, Jira, and custom webhooks.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )
        }
        return null

      case 'integrations':
        if (activeSubsection === 'slack') {
          return (
            <div className="space-y-8">
              <section id="slack">
              <h2 className="text-2xl font-bold mb-4">Slack Setup</h2>
              <p className="text-gray-300 mb-6">
                The spaq Slack integration allows you to capture decisions directly from your Slack conversations.
              </p>
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                <h3 className="font-semibold mb-4">Slack Commands</h3>
                <div className="space-y-4">
                  <div className="bg-black/50 rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-purple-400">{codeExamples.slack}</code>
                    </pre>
                    <button
                      onClick={() => copyCode(codeExamples.slack, 'slack-example')}
                      className="mt-2 text-gray-400 hover:text-white transition flex items-center gap-2"
                    >
                      {copiedCode === 'slack-example' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          )
        } else if (activeSubsection === 'teams') {
          return (
            <div className="space-y-8">
              <section id="teams">
                <h2 className="text-2xl font-bold mb-4">Microsoft Teams</h2>
                <p className="text-gray-300 mb-6">
                  Integrate spaq with Microsoft Teams to capture decisions in your Teams channels.
                </p>
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-4">Installation Steps</h3>
                  <ol className="space-y-3 text-gray-300">
                    <li className="flex gap-3">
                      <span className="text-purple-400 font-semibold">1.</span>
                      <span>Navigate to Teams App Store and search for "spaq"</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400 font-semibold">2.</span>
                      <span>Click "Add to a team" and select your workspace</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400 font-semibold">3.</span>
                      <span>Grant necessary permissions for message reading</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-purple-400 font-semibold">4.</span>
                      <span>Start using @spaq mentions in your conversations</span>
                    </li>
                  </ol>
                </div>
              </section>
            </div>
          )
        } else if (activeSubsection === 'webhooks') {
          return (
            <div className="space-y-8">
              <section id="webhooks">
                <h2 className="text-2xl font-bold mb-4">Webhooks</h2>
                <p className="text-gray-300 mb-6">
                  Use webhooks to integrate spaq with any platform or custom application.
                </p>
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-4">Webhook Configuration</h3>
                  <div className="bg-black/50 rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-purple-400">{`POST https://api.spaq.ai/webhooks/decisions
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "title": "Architecture Decision",
  "choice": "Microservices",
  "reasoning": "Better scalability for our use case",
  "context": {
    "team": "Backend",
    "project": "Platform 2.0"
  }
}`}</code>
                    </pre>
                  </div>
                </div>
              </section>
            </div>
          )
        }
        return null

      case 'api':
        if (activeSubsection === 'auth') {
          return (
            <div className="space-y-8">
              <section id="auth">
              <h2 className="text-2xl font-bold mb-4">Authentication</h2>
              <p className="text-gray-300 mb-6">
                All API requests require authentication using an API key. You can generate API keys from your dashboard.
              </p>
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                <h3 className="font-semibold mb-4">Example Usage</h3>
                <div className="bg-black/50 rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-purple-400">{codeExamples.api}</code>
                  </pre>
                  <button
                    onClick={() => copyCode(codeExamples.api, 'api-example')}
                    className="mt-2 text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    {copiedCode === 'api-example' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    Copy
                  </button>
                </div>
              </div>
            </section>
          </div>
          )
        } else if (activeSubsection === 'endpoints') {
          return (
            <div className="space-y-8">
              <section id="endpoints">
              <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>
              <div className="space-y-4">
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">GET /api/decisions</h3>
                  <p className="text-gray-300 mb-4">Retrieve all decisions with optional filtering</p>
                  <div className="bg-black/50 rounded-lg p-3 text-sm">
                    <code className="text-gray-400">
                      ?team=backend&limit=50&offset=0&from=2024-01-01
                    </code>
                  </div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">POST /api/decisions</h3>
                  <p className="text-gray-300 mb-4">Create a new decision record</p>
                  <div className="bg-black/50 rounded-lg p-3 text-sm">
                    <code className="text-gray-400">
                      {`{ title, choice, reasoning, tags, metadata }`}
                    </code>
                  </div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">GET /api/chains/:id</h3>
                  <p className="text-gray-300 mb-4">Retrieve a specific decision chain</p>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">POST /api/ai/query</h3>
                  <p className="text-gray-300 mb-4">Query your decision history using natural language</p>
                  <div className="bg-black/50 rounded-lg p-3 text-sm">
                    <code className="text-gray-400">
                      {`{ query: "What database decisions have we made?" }`}
                    </code>
                  </div>
                </div>
              </div>
            </section>
          </div>
          )
        } else if (activeSubsection === 'examples') {
          return (
            <div className="space-y-8">
              <section id="examples">
              <h2 className="text-2xl font-bold mb-4">Code Examples</h2>
              <div className="space-y-4">
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-4">Node.js Example</h3>
                  <div className="bg-black/50 rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-purple-400">{`const axios = require('axios');

const spaq = axios.create({
  baseURL: 'https://api.spaq.ai',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

// Query decisions
const decisions = await spaq.get('/api/decisions', {
  params: { team: 'frontend', limit: 10 }
});`}</code>
                    </pre>
                  </div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-4">Python Example</h3>
                  <div className="bg-black/50 rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-purple-400">{`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY'
}

# Create a decision
response = requests.post(
    'https://api.spaq.ai/api/decisions',
    headers=headers,
    json={
        'title': 'Framework Selection',
        'choice': 'Next.js',
        'reasoning': 'SSR capabilities needed'
    }
)`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>
          </div>
          )
        }
        return null

      case 'decision-chains':
        if (activeSubsection === 'create') {
          return (
            <div className="space-y-8">
              <section id="create">
              <h2 className="text-2xl font-bold mb-4">Creating Decision Chains</h2>
              <p className="text-gray-300 mb-6">
                Decision chains help you visualize how decisions connect and influence each other over time.
              </p>
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                <h3 className="font-semibold mb-4">Chain Structure</h3>
                <div className="bg-black/50 rounded-lg p-4">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-purple-400">{codeExamples.chain}</code>
                  </pre>
                  <button
                    onClick={() => copyCode(codeExamples.chain, 'chain-example')}
                    className="mt-2 text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    {copiedCode === 'chain-example' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    Copy
                  </button>
                </div>
              </div>
            </section>
          </div>
          )
        } else if (activeSubsection === 'manage') {
          return (
            <div className="space-y-8">
              <section id="manage">
              <h2 className="text-2xl font-bold mb-4">Managing Chains</h2>
              <p className="text-gray-300 mb-6">
                Learn how to organize, update, and maintain your decision chains effectively.
              </p>
              <div className="space-y-4">
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-3">Chain Operations</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                      <span><strong>Add Nodes:</strong> Drag from the sidebar or right-click on canvas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                      <span><strong>Connect Decisions:</strong> Drag from node handles to create relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                      <span><strong>Edit Properties:</strong> Click any node to view and edit details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                      <span><strong>Export/Import:</strong> Save chains as JSON for backup or sharing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-3">Best Practices</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">✓</span>
                      <span>Group related decisions by project or domain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">✓</span>
                      <span>Add outcome nodes to track decision impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">✓</span>
                      <span>Use tags for easy filtering and search</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">✓</span>
                      <span>Review and update chains quarterly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          )
        } else if (activeSubsection === 'templates') {
          return (
            <div className="space-y-8">
              <section id="templates">
              <h2 className="text-2xl font-bold mb-4">Chain Templates</h2>
              <p className="text-gray-300 mb-6">
                Start with pre-built templates for common decision patterns.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">Tech Stack Selection</h3>
                  <p className="text-sm text-gray-400 mb-3">Framework, database, and infrastructure choices</p>
                  <button 
                    onClick={() => router.push('/chains?template=tech-stack')}
                    className="text-sm text-purple-400 hover:text-purple-300 transition"
                  >
                    Use Template →
                  </button>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">Feature Prioritization</h3>
                  <p className="text-sm text-gray-400 mb-3">Product roadmap and feature decisions</p>
                  <button 
                    onClick={() => router.push('/chains?template=feature-priority')}
                    className="text-sm text-purple-400 hover:text-purple-300 transition"
                  >
                    Use Template →
                  </button>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">Architecture Design</h3>
                  <p className="text-sm text-gray-400 mb-3">System design and architecture patterns</p>
                  <button 
                    onClick={() => router.push('/chains?template=architecture')}
                    className="text-sm text-purple-400 hover:text-purple-300 transition"
                  >
                    Use Template →
                  </button>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">Team Process</h3>
                  <p className="text-sm text-gray-400 mb-3">Workflow and methodology decisions</p>
                  <button 
                    onClick={() => router.push('/chains?template=team-process')}
                    className="text-sm text-purple-400 hover:text-purple-300 transition"
                  >
                    Use Template →
                  </button>
                </div>
              </div>
            </section>
          </div>
          )
        }
        return null

      case 'ai-agent':
        if (activeSubsection === 'training') {
          return (
            <div className="space-y-8">
              <section id="training">
              <h2 className="text-2xl font-bold mb-4">Training Your AI</h2>
              <p className="text-gray-300 mb-6">
                Your AI agent learns from your team's decision patterns to provide personalized insights.
              </p>
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                <h3 className="font-semibold mb-4">Training Process</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-semibold">1.</span>
                    <span><strong>Data Collection:</strong> Automatically gathers decisions from integrated platforms</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-semibold">2.</span>
                    <span><strong>Pattern Recognition:</strong> Identifies decision-making patterns and preferences</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-semibold">3.</span>
                    <span><strong>Model Training:</strong> Fine-tunes on your specific domain and context</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-semibold">4.</span>
                    <span><strong>Continuous Learning:</strong> Improves with every new decision captured</span>
                  </li>
                </ol>
              </div>
            </section>
          </div>
          )
        } else if (activeSubsection === 'querying') {
          return (
            <div className="space-y-8">
              <section id="querying">
              <h2 className="text-2xl font-bold mb-4">Querying Your AI</h2>
              <p className="text-gray-300 mb-6">
                Ask natural language questions about your decision history and get instant answers.
              </p>
              <div className="space-y-4">
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-4">Example Queries</h3>
                  <div className="space-y-3">
                    <div className="bg-black/50 rounded-lg p-3">
                      <code className="text-purple-400">"Why did we choose React over Angular?"</code>
                    </div>
                    <div className="bg-black/50 rounded-lg p-3">
                      <code className="text-purple-400">"What architecture decisions were made in Q3?"</code>
                    </div>
                    <div className="bg-black/50 rounded-lg p-3">
                      <code className="text-purple-400">"Show me all database-related decisions"</code>
                    </div>
                    <div className="bg-black/50 rounded-lg p-3">
                      <code className="text-purple-400">"What were the outcomes of our API redesign?"</code>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-4">Query Tips</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Be specific about timeframes and projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Use team or person names to filter results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Ask for comparisons between different approaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Request summaries of decision categories</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          )
        } else if (activeSubsection === 'fine-tuning') {
          return (
            <div className="space-y-8">
              <section id="fine-tuning">
              <h2 className="text-2xl font-bold mb-4">Fine-tuning</h2>
              <p className="text-gray-300 mb-6">
                Customize your AI agent to better understand your team's unique context and terminology.
              </p>
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                <h3 className="font-semibold mb-4">Fine-tuning Options</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-purple-400 mb-2">Domain Vocabulary</h4>
                    <p className="text-sm text-gray-400">Add industry-specific terms and acronyms</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-400 mb-2">Decision Weights</h4>
                    <p className="text-sm text-gray-400">Prioritize certain types of decisions in responses</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-400 mb-2">Response Style</h4>
                    <p className="text-sm text-gray-400">Adjust verbosity and technical detail level</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-400 mb-2">Team Context</h4>
                    <p className="text-sm text-gray-400">Include team structure and roles for better insights</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          )
        }
        return null
        
      case 'sdk':
        if (activeSubsection === 'typescript') {
          return (
            <div className="space-y-8">
              <section id="typescript">
                <h2 className="text-2xl font-bold mb-4">TypeScript/JavaScript SDK</h2>
                <p className="text-gray-300 mb-6">
                  Our TypeScript SDK provides full type safety and works seamlessly with modern JavaScript frameworks.
                </p>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6 mb-6">
                  <h3 className="font-semibold mb-4">Installation</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <code className="text-purple-400">npm install @spaq/sdk</code>
                  </div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-4">Quick Start</h3>
                  <div className="bg-black/50 rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-purple-400">{`import { SpaqClient } from '@spaq/sdk';

const spaq = new SpaqClient({
  apiKey: process.env.SPAQ_API_KEY
});

// Create a decision
const decision = await spaq.decisions.create({
  title: 'Database Selection',
  choice: 'PostgreSQL',
  reasoning: 'Better for relational data',
  tags: ['backend', 'infrastructure']
});

// Search decisions
const results = await spaq.decisions.search({
  query: 'database',
  team: 'engineering'
});`}</code>
                    </pre>
                  </div>
                </div>
              </section>
            </div>
          )
        } else if (activeSubsection === 'python') {
          return (
            <div className="space-y-8">
              <section id="python">
                <h2 className="text-2xl font-bold mb-4">Python SDK</h2>
                <p className="text-gray-300 mb-6">
                  Perfect for data science teams and automation workflows.
                </p>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6 mb-6">
                  <h3 className="font-semibold mb-4">Installation</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <code className="text-purple-400">pip install spaq-sdk</code>
                  </div>
                </div>

                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-4">Usage Example</h3>
                  <div className="bg-black/50 rounded-lg p-4">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-purple-400">{`from spaq import SpaqClient

client = SpaqClient(api_key="your-api-key")

# Create a decision chain
chain = client.chains.create(
    title="Q4 Planning Decisions",
    description="Strategic decisions for Q4 2024"
)

# Add decisions to the chain
decision = client.decisions.create(
    chain_id=chain.id,
    title="Marketing Budget Allocation",
    choice="70% digital, 30% events",
    reasoning="Data shows higher ROI from digital"
)

# Query with AI
insights = client.ai.query(
    "What were our key budget decisions this quarter?"
)`}</code>
                    </pre>
                  </div>
                </div>
              </section>
            </div>
          )
        } else if (activeSubsection === 'java') {
          return (
            <div className="space-y-8">
              <section id="java">
                <h2 className="text-2xl font-bold mb-4">Java SDK</h2>
                <p className="text-gray-300 mb-6">
                  Enterprise-ready SDK for Java applications with Spring Boot integration.
                </p>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6 mb-6">
                  <h3 className="font-semibold mb-4">Installation</h3>
                  <p className="text-gray-300 mb-3">Maven:</p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-3">
                    <code className="text-purple-400">{`<dependency>
  <groupId>ai.spaq</groupId>
  <artifactId>spaq-sdk</artifactId>
  <version>1.0.0</version>
</dependency>`}</code>
                  </div>
                  <p className="text-gray-300 mb-3">Gradle:</p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <code className="text-purple-400">implementation 'ai.spaq:spaq-sdk:1.0.0'</code>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-semibold text-yellow-400">Coming Soon</h3>
                  </div>
                  <p className="text-gray-300">
                    Java SDK is currently in development. Expected release: Q2 2025.
                  </p>
                  <Link href="/contact" className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition">
                    Get notified when available →
                  </Link>
                </div>
              </section>
            </div>
          )
        } else if (activeSubsection === 'go') {
          return (
            <div className="space-y-8">
              <section id="go">
                <h2 className="text-2xl font-bold mb-4">Go SDK</h2>
                <p className="text-gray-300 mb-6">
                  High-performance SDK for Go applications and microservices.
                </p>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6 mb-6">
                  <h3 className="font-semibold mb-4">Installation</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <code className="text-purple-400">go get github.com/spaq-ai/spaq-go</code>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-semibold text-yellow-400">Coming Soon</h3>
                  </div>
                  <p className="text-gray-300">
                    Go SDK is currently in development. Expected release: Q2 2025.
                  </p>
                  <Link href="/contact" className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition">
                    Get notified when available →
                  </Link>
                </div>
              </section>
            </div>
          )
        } else if (activeSubsection === 'rust') {
          return (
            <div className="space-y-8">
              <section id="rust">
                <h2 className="text-2xl font-bold mb-4">Rust SDK</h2>
                <p className="text-gray-300 mb-6">
                  Memory-safe SDK for high-performance Rust applications.
                </p>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6 mb-6">
                  <h3 className="font-semibold mb-4">Installation</h3>
                  <p className="text-gray-300 mb-3">Add to Cargo.toml:</p>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <code className="text-purple-400">{`[dependencies]
spaq = "1.0"`}</code>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-semibold text-yellow-400">Coming Soon</h3>
                  </div>
                  <p className="text-gray-300">
                    Rust SDK is currently in development. Expected release: Q1 2026.
                  </p>
                  <Link href="/contact" className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition">
                    Get notified when available →
                  </Link>
                </div>
              </section>
            </div>
          )
        } else if (activeSubsection === 'csharp') {
          return (
            <div className="space-y-8">
              <section id="csharp">
                <h2 className="text-2xl font-bold mb-4">C#/.NET SDK</h2>
                <p className="text-gray-300 mb-6">
                  Full-featured SDK for .NET applications with async/await support.
                </p>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6 mb-6">
                  <h3 className="font-semibold mb-4">Installation</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <code className="text-purple-400">dotnet add package Spaq.SDK</code>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-semibold text-yellow-400">Coming Soon</h3>
                  </div>
                  <p className="text-gray-300">
                    .NET SDK is currently in development. Expected release: Q2 2025.
                  </p>
                  <Link href="/contact" className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition">
                    Get notified when available →
                  </Link>
                </div>
              </section>
            </div>
          )
        } else if (activeSubsection === 'ruby') {
          return (
            <div className="space-y-8">
              <section id="ruby">
                <h2 className="text-2xl font-bold mb-4">Ruby SDK</h2>
                <p className="text-gray-300 mb-6">
                  Elegant SDK for Ruby applications with Rails integration.
                </p>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6 mb-6">
                  <h3 className="font-semibold mb-4">Installation</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <code className="text-purple-400">gem install spaq</code>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-semibold text-yellow-400">Coming Soon</h3>
                  </div>
                  <p className="text-gray-300">
                    Ruby SDK is currently in development. Expected release: Q1 2026.
                  </p>
                  <Link href="/contact" className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition">
                    Get notified when available →
                  </Link>
                </div>
              </section>
            </div>
          )
        } else if (activeSubsection === 'php') {
          return (
            <div className="space-y-8">
              <section id="php">
                <h2 className="text-2xl font-bold mb-4">PHP SDK</h2>
                <p className="text-gray-300 mb-6">
                  Modern PHP SDK with PSR standards and Laravel support.
                </p>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6 mb-6">
                  <h3 className="font-semibold mb-4">Installation</h3>
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <code className="text-purple-400">composer require spaq/spaq-php</code>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-semibold text-yellow-400">Coming Soon</h3>
                  </div>
                  <p className="text-gray-300">
                    PHP SDK is currently in development. Expected release: Q1 2026.
                  </p>
                  <Link href="/contact" className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 transition">
                    Get notified when available →
                  </Link>
                </div>
              </section>
            </div>
          )
        } else if (activeSubsection === 'sdk-examples') {
          return (
            <div className="space-y-8">
              <section id="sdk-examples">
                <h2 className="text-2xl font-bold mb-4">SDK Examples</h2>
                <div className="space-y-6">
                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                    <h3 className="font-semibold mb-4">Real-time Decision Tracking</h3>
                    <p className="text-gray-300 mb-4">Subscribe to decision events in real-time:</p>
                    <div className="bg-black/50 rounded-lg p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code className="text-purple-400">{`// TypeScript
spaq.decisions.subscribe({
  teams: ['product', 'engineering'],
  onDecision: (decision) => {
    console.log('New decision:', decision);
    // Update your dashboard
  }
});`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                    <h3 className="font-semibold mb-4">Batch Analysis</h3>
                    <p className="text-gray-300 mb-4">Analyze decision patterns across time:</p>
                    <div className="bg-black/50 rounded-lg p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code className="text-purple-400">{`# Python
analysis = client.analytics.analyze_patterns(
    start_date="2024-01-01",
    end_date="2024-12-31",
    groupby="team"
)

for team, stats in analysis.items():
    print(f"{team}: {stats['total_decisions']} decisions")
    print(f"Top tags: {stats['top_tags']}")`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )
        }
        return null

      case 'security':
        if (activeSubsection === 'data-privacy') {
          return (
            <div className="space-y-8">
              <section id="data-privacy">
              <h2 className="text-2xl font-bold mb-4">Data Privacy</h2>
              <p className="text-gray-300 mb-6">
                Your decision data is encrypted and protected with enterprise-grade security.
              </p>
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                <h3 className="font-semibold mb-4">Privacy Measures</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span><strong>End-to-end encryption:</strong> All data encrypted in transit and at rest</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span><strong>Data isolation:</strong> Complete tenant separation in multi-tenant environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span><strong>Access controls:</strong> Role-based permissions and audit logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-purple-400 mt-0.5" />
                    <span><strong>Data retention:</strong> Configurable retention policies and deletion</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          )
        } else if (activeSubsection === 'compliance') {
          return (
            <div className="space-y-8">
              <section id="compliance">
              <h2 className="text-2xl font-bold mb-4">Compliance</h2>
              <p className="text-gray-300 mb-6">
                We maintain compliance with major security and privacy standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">SOC 2 Type II</h3>
                  <p className="text-sm text-gray-400">Annual audit of security controls and processes</p>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">GDPR Compliant</h3>
                  <p className="text-sm text-gray-400">Full compliance with EU data protection regulations</p>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">CCPA Ready</h3>
                  <p className="text-sm text-gray-400">California privacy law compliance built-in</p>
                </div>
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                  <h3 className="font-semibold mb-2 text-purple-400">ISO 27001</h3>
                  <p className="text-sm text-gray-400">Information security management certification</p>
                </div>
              </div>
            </section>
          </div>
          )
        } else if (activeSubsection === 'best-practices') {
          return (
            <div className="space-y-8">
              <section id="best-practices">
              <h2 className="text-2xl font-bold mb-4">Security Best Practices</h2>
              <p className="text-gray-300 mb-6">
                Follow these guidelines to maximize the security of your spaq deployment.
              </p>
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-6">
                <h3 className="font-semibold mb-4">Recommendations</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">1.</span>
                    <span><strong>Use SSO:</strong> Enable single sign-on with your identity provider</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">2.</span>
                    <span><strong>Enable 2FA:</strong> Require two-factor authentication for all users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">3.</span>
                    <span><strong>API Key Rotation:</strong> Regularly rotate API keys (90 days recommended)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">4.</span>
                    <span><strong>Audit Access:</strong> Review user permissions and access logs monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">5.</span>
                    <span><strong>Data Classification:</strong> Tag sensitive decisions appropriately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">6.</span>
                    <span><strong>Network Security:</strong> Use IP allowlisting for API access when possible</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          )
        }
        return null

      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400">Select a section from the sidebar</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link 
                href="/" 
                className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-neutral-900 transition-all"
              >
                <div className="p-1.5 rounded-md bg-neutral-900 group-hover:bg-neutral-800 transition">
                  <ArrowLeft className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition" />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition">
                  Home
                </span>
              </Link>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search docs..."
                    className="pl-10 pr-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-sm focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/images/spaq-transparent.png" 
                alt="spaq" 
                width={56} 
                height={56} 
                className="w-14 h-14"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                spaq
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Documentation</h1>
            <p className="text-gray-400">Everything you need to know about spaq</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1"
            >
              <nav className="sticky top-8 space-y-2">
                {sections.map((section) => (
                  <div key={section.id}>
                    <button
                      onClick={() => {
                        setActiveSection(section.id)
                        setActiveSubsection(section.subsections[0].id)
                      }}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-2 rounded-lg transition",
                        activeSection === section.id
                          ? "bg-purple-500/20 text-purple-400 border border-purple-500/20"
                          : "hover:bg-neutral-900 text-gray-300 hover:text-white"
                      )}
                    >
                      <section.icon className="w-5 h-5" />
                      <span className="font-medium">{section.title}</span>
                      <ChevronRight className={cn(
                        "w-4 h-4 ml-auto transition-transform",
                        activeSection === section.id && "rotate-90"
                      )} />
                    </button>
                    {activeSection === section.id && (
                      <div className="ml-12 mt-2 space-y-1">
                        {section.subsections.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => setActiveSubsection(sub.id)}
                            className={cn(
                              "block w-full text-left px-4 py-1.5 text-sm transition rounded",
                              activeSubsection === sub.id
                                ? "text-purple-400 bg-purple-500/10"
                                : "text-gray-400 hover:text-white"
                            )}
                          >
                            {sub.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </motion.aside>

            {/* Content */}
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="prose prose-invert max-w-none">
                {getContent()}
              </div>
            </motion.main>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Play,
  Code,
  Copy,
  Check,
  Terminal,
  FileJson,
  Zap,
  Info,
  ChevronDown,
  ChevronRight,
  Globe,
  Key,
  Book
} from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function PlaygroundPage() {
  const [selectedEndpoint, setSelectedEndpoint] = useState('capture')
  const [apiKey, setApiKey] = useState('')
  const [requestBody, setRequestBody] = useState('{\n  "decision": "Implement real-time collaboration",\n  "context": "Team requested live editing features",\n  "tags": ["product", "feature-request"],\n  "participants": ["sarah@company.com", "alex@company.com"]\n}')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<'curl' | 'javascript' | 'python'>('curl')

  const endpoints = [
    {
      id: 'capture',
      name: 'Capture Decision',
      method: 'POST',
      path: '/api/v1/decisions',
      description: 'Record a new decision with context and metadata',
      exampleBody: `{
  "decision": "Implement real-time collaboration",
  "context": "Team requested live editing features",
  "tags": ["product", "feature-request"],
  "participants": ["sarah@company.com", "alex@company.com"]
}`
    },
    {
      id: 'search',
      name: 'Search Decisions',
      method: 'GET',
      path: '/api/v1/decisions/search',
      description: 'Search through your decision history with AI-powered queries',
      exampleBody: `{
  "query": "authentication implementation decisions",
  "filters": {
    "tags": ["engineering"],
    "dateRange": {
      "start": "2024-01-01",
      "end": "2024-12-31"
    }
  },
  "limit": 10
}`
    },
    {
      id: 'analyze',
      name: 'Analyze Patterns',
      method: 'POST',
      path: '/api/v1/analyze',
      description: 'Get AI insights on decision patterns and recommendations',
      exampleBody: `{
  "topic": "API design patterns",
  "timeframe": "last_quarter",
  "includeRecommendations": true
}`
    },
    {
      id: 'team',
      name: 'Team Insights',
      method: 'GET',
      path: '/api/v1/teams/insights',
      description: 'Get analytics on team decision-making patterns',
      exampleBody: `{
  "teamId": "engineering",
  "metrics": ["velocity", "participation", "categories"],
  "period": "30d"
}`
    }
  ]

  const generateCode = () => {
    const endpoint = endpoints.find(e => e.id === selectedEndpoint)!
    const baseUrl = 'https://api.spaq.ai'
    
    if (selectedLanguage === 'curl') {
      return `curl -X ${endpoint.method} ${baseUrl}${endpoint.path} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '${requestBody}'`
    } else if (selectedLanguage === 'javascript') {
      return `const response = await fetch('${baseUrl}${endpoint.path}', {
  method: '${endpoint.method}',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(${requestBody})
});

const data = await response.json();
console.log(data);`
    } else {
      return `import requests

response = requests.${endpoint.method.toLowerCase()}(
    '${baseUrl}${endpoint.path}',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json=${requestBody.replace(/"/g, "'")}
)

data = response.json()
print(data)`
    }
  }

  const handleRunRequest = async () => {
    if (!apiKey) {
      setResponse('{\n  "error": "Please enter your API key to test the endpoint"\n}')
      return
    }

    setIsLoading(true)
    setResponse('')

    // Simulate API call
    setTimeout(() => {
      const endpoint = endpoints.find(e => e.id === selectedEndpoint)!
      
      if (selectedEndpoint === 'capture') {
        setResponse(`{
  "success": true,
  "data": {
    "id": "dec_${Math.random().toString(36).substr(2, 9)}",
    "decision": "Implement real-time collaboration",
    "timestamp": "${new Date().toISOString()}",
    "context": "Team requested live editing features",
    "tags": ["product", "feature-request"],
    "participants": ["sarah@company.com", "alex@company.com"],
    "embedding_generated": true
  }
}`)
      } else if (selectedEndpoint === 'search') {
        setResponse(`{
  "success": true,
  "data": {
    "results": [
      {
        "id": "dec_abc123",
        "decision": "Use JWT for API authentication",
        "timestamp": "2024-11-15T10:30:00Z",
        "relevance_score": 0.95,
        "context": "Decided on JWT over OAuth for simpler implementation"
      },
      {
        "id": "dec_def456",
        "decision": "Implement rate limiting on auth endpoints",
        "timestamp": "2024-10-22T14:45:00Z",
        "relevance_score": 0.87,
        "context": "Security audit recommended rate limiting"
      }
    ],
    "total": 2
  }
}`)
      } else if (selectedEndpoint === 'analyze') {
        setResponse(`{
  "success": true,
  "data": {
    "patterns": [
      {
        "pattern": "Consistent preference for RESTful APIs",
        "frequency": 0.78,
        "examples": 3
      },
      {
        "pattern": "Emphasis on backward compatibility",
        "frequency": 0.65,
        "examples": 2
      }
    ],
    "recommendations": [
      "Consider GraphQL for complex data relationships",
      "Document API versioning strategy"
    ]
  }
}`)
      } else {
        setResponse(`{
  "success": true,
  "data": {
    "team_insights": {
      "total_decisions": 156,
      "active_participants": 12,
      "top_categories": ["engineering", "product", "design"],
      "decision_velocity": {
        "current": 5.2,
        "previous": 4.1,
        "change": "+26.8%"
      },
      "participation_rate": 0.83
    }
  }
}`)
      }
      
      setIsLoading(false)
    }, 1500)
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(type)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-neutral-900 transition-all mb-8"
          >
            <div className="p-1.5 rounded-md bg-neutral-900 group-hover:bg-neutral-800 transition">
              <ArrowLeft className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition" />
            </div>
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition">
              Home
            </span>
          </Link>
          
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                API Playground
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Test spaq API Endpoints
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our API with live examples. Test endpoints, see responses, and generate code snippets.
            </p>
          </motion.div>

          {/* API Key Input */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
              <div className="flex items-center gap-3 mb-4">
                <Key className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold">API Authentication</h3>
                <Link href="/docs#api" className="ml-auto text-sm text-purple-400 hover:text-purple-300 transition">
                  Get API Key →
                </Link>
              </div>
              <input
                type="password"
                placeholder="Enter your API key to test endpoints..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
              />
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Your API key is only used for this session and is not stored
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Endpoint Selector */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h2 className="text-lg font-semibold mb-4">Endpoints</h2>
              <div className="space-y-2">
                {endpoints.map((endpoint) => (
                  <button
                    key={endpoint.id}
                    onClick={() => {
                      setSelectedEndpoint(endpoint.id)
                      setRequestBody(endpoint.exampleBody)
                      setResponse('')
                    }}
                    className={cn(
                      "w-full text-left p-4 rounded-lg border transition",
                      selectedEndpoint === endpoint.id
                        ? "bg-purple-500/10 border-purple-500/50"
                        : "bg-neutral-900/50 border-neutral-800 hover:border-neutral-700"
                    )}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{endpoint.name}</span>
                      <span className={cn(
                        "text-xs px-2 py-1 rounded",
                        endpoint.method === 'POST' 
                          ? "bg-green-500/20 text-green-400"
                          : "bg-blue-500/20 text-blue-400"
                      )}>
                        {endpoint.method}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{endpoint.path}</p>
                    <p className="text-sm text-gray-300">{endpoint.description}</p>
                  </button>
                ))}
              </div>

              {/* Code Examples */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Code Examples</h3>
                <div className="flex gap-2 mb-4">
                  {(['curl', 'javascript', 'python'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={cn(
                        "px-3 py-1 rounded text-sm capitalize transition",
                        selectedLanguage === lang
                          ? "bg-purple-600 text-white"
                          : "bg-neutral-800 text-gray-400 hover:text-white"
                      )}
                    >
                      {lang === 'javascript' ? 'JavaScript' : lang}
                    </button>
                  ))}
                </div>
                
                <div className="bg-neutral-900 rounded-lg p-4 relative">
                  <button
                    onClick={() => copyToClipboard(generateCode(), 'code')}
                    className="absolute top-2 right-2 p-2 hover:bg-neutral-800 rounded transition"
                  >
                    {copiedCode === 'code' ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
                    <code>{generateCode()}</code>
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Request/Response Editor */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Request */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Request Body</h2>
                  <button
                    onClick={() => copyToClipboard(requestBody, 'request')}
                    className="flex items-center gap-2 px-3 py-1 bg-neutral-800 hover:bg-neutral-700 rounded transition text-sm"
                  >
                    {copiedCode === 'request' ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    Copy
                  </button>
                </div>
                <div className="bg-neutral-900/50 rounded-xl border border-neutral-800 p-1">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-800">
                    <FileJson className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">application/json</span>
                  </div>
                  <textarea
                    value={requestBody}
                    onChange={(e) => setRequestBody(e.target.value)}
                    className="w-full p-4 bg-transparent focus:outline-none resize-none font-mono text-sm"
                    rows={10}
                    spellCheck={false}
                  />
                </div>
              </div>

              {/* Run Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleRunRequest}
                  disabled={isLoading}
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition",
                    isLoading
                      ? "bg-neutral-700 text-gray-400 cursor-not-allowed"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                  )}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Run Request
                    </>
                  )}
                </button>
              </div>

              {/* Response */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Response</h2>
                  {response && (
                    <button
                      onClick={() => copyToClipboard(response, 'response')}
                      className="flex items-center gap-2 px-3 py-1 bg-neutral-800 hover:bg-neutral-700 rounded transition text-sm"
                    >
                      {copiedCode === 'response' ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      Copy
                    </button>
                  )}
                </div>
                <div className="bg-neutral-900/50 rounded-xl border border-neutral-800 p-1 min-h-[200px]">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-800">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      response ? "bg-green-400" : "bg-gray-600"
                    )} />
                    <span className="text-sm text-gray-400">
                      {response ? '200 OK' : 'No response yet'}
                    </span>
                  </div>
                  {response ? (
                    <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                      <code>{response}</code>
                    </pre>
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      Run a request to see the response
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Documentation Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20 text-center">
              <Book className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Build?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Check out our comprehensive API documentation and SDKs to start integrating spaq into your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/docs#api"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
                >
                  API Documentation
                  <Code className="w-4 h-4" />
                </Link>
                <Link 
                  href="/docs#sdk"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium border border-neutral-700"
                >
                  Download SDKs
                  <Globe className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
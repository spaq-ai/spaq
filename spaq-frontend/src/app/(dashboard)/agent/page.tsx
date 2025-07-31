'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles, ChevronDown, ChevronUp, ExternalLink, Brain, Clock, GitBranch, Lightbulb, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  chain?: {
    id: string
    steps: Array<{
      event: string
      choice: string
      rationale: string
    }>
  }
  suggestions?: string[]
}

export default function AgentPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm your spaq AI Agent. I have access to your team's entire decision history. Ask me anything about past choices, and I'll trace the reasoning for you.",
      timestamp: new Date(),
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [expandedChains, setExpandedChains] = useState<Set<string>>(new Set())
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [input])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I found relevant decisions in your team's history. Here's the complete reasoning chain:",
        timestamp: new Date(),
        chain: {
          id: 'chain-1',
          steps: [
            {
              event: '3 months ago: Initial authentication strategy discussion',
              choice: 'JWT tokens with refresh rotation',
              rationale: 'Stateless architecture aligns with microservices goals, enables horizontal scaling'
            },
            {
              event: '2 months ago: Security audit raised token expiration concerns',
              choice: 'Implement 15-min access tokens + 7-day refresh tokens',
              rationale: 'Balances security with user experience, follows OWASP guidelines'
            },
            {
              event: '1 month ago: Performance bottleneck identified',
              choice: 'Add Redis caching layer for token validation',
              rationale: 'Reduced auth latency by 70%, critical for API gateway performance'
            }
          ]
        },
        suggestions: [
          'Consider implementing device fingerprinting for enhanced security',
          'Review refresh token rotation strategy quarterly',
          'Set up alerts for unusual authentication patterns'
        ]
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 2000)
  }

  const toggleChainExpansion = (chainId: string) => {
    setExpandedChains(prev => {
      const newSet = new Set(prev)
      if (newSet.has(chainId)) {
        newSet.delete(chainId)
      } else {
        newSet.add(chainId)
      }
      return newSet
    })
  }

  const suggestedQueries = [
    { icon: <GitBranch className="w-4 h-4" />, text: "Why did we choose microservices?" },
    { icon: <Zap className="w-4 h-4" />, text: "Show database migration decisions" },
    { icon: <Lightbulb className="w-4 h-4" />, text: "What frontend frameworks did we evaluate?" }
  ]

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-80 border-r border-neutral-800 bg-neutral-950 p-6"
      >
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Recent Conversations</h2>
          <p className="text-sm text-gray-400">Your decision intelligence history</p>
        </div>
        
        <div className="space-y-3">
          {['Authentication strategy', 'Database design patterns', 'CI/CD pipeline setup', 'API versioning approach'].map((query, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-3 rounded-lg border border-neutral-800 hover:bg-neutral-900 cursor-pointer transition-all group"
            >
              <div className="flex items-start gap-3">
                <Brain className="w-4 h-4 text-purple-400 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{query}</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">AI Training Status</span>
          </div>
          <p className="text-xs text-gray-400">Model updated 3 hours ago</p>
          <p className="text-xs text-gray-400">1,284 decisions indexed</p>
        </div>
      </motion.div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-neutral-800 p-6 backdrop-blur-xl bg-black/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-white">spaq AI Agent</h1>
                <p className="text-sm text-gray-400">Powered by your team's decision history</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-green-400">Online</span>
            </div>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={cn(
                    "flex",
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div className={cn(
                    "max-w-2xl",
                    message.role === 'user' ? 'order-2' : 'order-1'
                  )}>
                    <div className={cn(
                      "rounded-2xl p-4",
                      message.role === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-neutral-900 border border-neutral-800'
                    )}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      
                      {/* Chain visualization */}
                      {message.chain && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-4 bg-black/50 rounded-xl border border-purple-500/20"
                        >
                          <button
                            onClick={() => toggleChainExpansion(message.chain!.id)}
                            className="flex items-center justify-between w-full text-left group"
                          >
                            <div className="flex items-center gap-2">
                              <GitBranch className="w-4 h-4 text-purple-400" />
                              <span className="font-medium text-purple-300">Decision Chain</span>
                              <span className="text-xs text-gray-500">
                                ({message.chain.steps.length} steps)
                              </span>
                            </div>
                            {expandedChains.has(message.chain.id) ? (
                              <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-white transition" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition" />
                            )}
                          </button>
                          
                          <AnimatePresence>
                            {expandedChains.has(message.chain.id) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="mt-4 space-y-4"
                              >
                                {message.chain.steps.map((step, index) => (
                                  <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8"
                                  >
                                    <div className="absolute left-0 top-2 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                                      <span className="text-xs text-white font-bold">{index + 1}</span>
                                    </div>
                                    {index < message.chain!.steps.length - 1 && (
                                      <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-purple-500/30" />
                                    )}
                                    <div className="bg-neutral-800/50 rounded-lg p-3 border border-neutral-700">
                                      <div className="flex items-start gap-2 mb-2">
                                        <Clock className="w-3 h-3 text-gray-500 mt-0.5" />
                                        <p className="text-sm font-medium text-purple-300">{step.event}</p>
                                      </div>
                                      <p className="text-sm text-white mb-1">
                                        <span className="text-gray-400">Decision:</span> {step.choice}
                                      </p>
                                      <p className="text-sm text-gray-300">
                                        <span className="text-gray-400">Because:</span> {step.rationale}
                                      </p>
                                    </div>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )}

                      {/* Suggestions */}
                      {message.suggestions && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mt-4 p-4 bg-green-500/10 rounded-xl border border-green-500/20"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <Lightbulb className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-medium text-green-400">Recommended Next Steps</span>
                          </div>
                          <div className="space-y-2">
                            {message.suggestions.map((suggestion, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">•</span>
                                <p className="text-sm text-gray-300">{suggestion}</p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 mt-2 px-2">
                      <span className="text-xs text-gray-500">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                      {message.chain && (
                        <button className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 transition">
                          <span>View in Editor</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-3 text-gray-400"
              >
                <div className="flex gap-1">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                    className="w-2 h-2 bg-purple-500 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                    className="w-2 h-2 bg-purple-500 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                    className="w-2 h-2 bg-purple-500 rounded-full"
                  />
                </div>
                <span className="text-sm">AI is analyzing your decision history...</span>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-neutral-800 p-6 bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative flex items-center">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSend()
                      }
                    }}
                    placeholder="Ask about any decision your team has made..."
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl focus:outline-none focus:border-purple-500 transition resize-none pr-12"
                    rows={1}
                    style={{ minHeight: '48px', maxHeight: '120px' }}
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className={cn(
                      "absolute right-3 p-2 rounded-lg transition",
                      input.trim() && !isTyping 
                        ? "bg-purple-600 hover:bg-purple-700 text-white" 
                        : "bg-neutral-800 text-gray-500 cursor-not-allowed"
                    )}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  {suggestedQueries.map((query, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setInput(query.text)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs text-gray-400 hover:text-white transition"
                    >
                      {query.icon}
                      <span>{query.text}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
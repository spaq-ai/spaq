'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Sparkles, MessageSquare, GitBranch, Zap, Building, Users, Clock, ChevronRight, BookOpen, Code, Globe, Webhook, Check, Scale } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Spotlight } from '@/components/ui/spotlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { cn } from '@/lib/utils'

export default function Home() {
  const words = "Stop losing critical decisions in endless Slack threads. Build AI that learns from every choice your team makes."
  const mobileWords = "Build AI that learns from every team decision."

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Capture Decisions Instantly",
      description: "Our bot watches Slack/Teams and captures decision moments as they happen - no manual documentation needed.",
      detail: "@spaq summarize",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Build Knowledge Graphs",
      description: "Connect decisions into visual chains showing how choices influence each other over time.",
      detail: "Drag & drop editor",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Train Your Own AI",
      description: "Fine-tune models on your decision patterns. Get an AI that thinks like your best team members. Access via API or embed with SDK.",
      detail: "Private LLM + API/SDK",
      gradient: "from-pink-500 to-orange-500"
    }
  ]

  const useCases = [
    {
      role: "Engineering Teams",
      problem: "\"Why did we choose this architecture?\"",
      solution: "Instantly surface past technical decisions with full context",
      icon: <Zap />,
      link: "/use-cases/engineering"
    },
    {
      role: "Product Teams",
      problem: "\"What features did we deprioritize and why?\"",
      solution: "Track product decisions and their outcomes over time",
      icon: <Building />,
      link: "/use-cases/product"
    },
    {
      role: "Law Firms",
      problem: "\"What precedents apply to this case?\"",
      solution: "Transform case history into searchable legal intelligence",
      icon: <Scale />,
      link: "/use-cases/law-firms"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <BackgroundBeams className="opacity-30" />
      
      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Image 
                src="/icon.png" 
                alt="spaq" 
                width={48} 
                height={48} 
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold">spaq</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-6"
            >
              <Link href="/login" className="hover:text-purple-400 transition">
                Login
              </Link>
              <Link href="/register" className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Start Free Trial
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Spotlight */}
      <section className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4 sm:mb-6">
              <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 border border-purple-500/20 rounded-full bg-purple-500/10 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 text-purple-400 hidden sm:block" />
                <span className="text-xs sm:text-sm text-purple-300">
                  <span className="hidden sm:inline">Introducing </span>Decision Intelligence
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 leading-tight">
              <span className="sm:hidden">
                Decisions<br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  With Memory
                </span>
              </span>
              <span className="hidden sm:inline">
                Your Team's Decisions,
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Now With Memory
                </span>
              </span>
            </h1>
            
            <div className="max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
              <div className="block sm:hidden">
                <TextGenerateEffect words={mobileWords} />
              </div>
              <div className="hidden sm:block">
                <TextGenerateEffect words={words} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link href="/register" className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-400 px-6 sm:px-8 font-medium text-white transition hover:scale-105">
                <span>Start Building Your AI</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#demo" className="hidden sm:inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-medium backdrop-blur-sm transition hover:bg-white/10">
                Watch 2-min Demo
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 mb-12 sm:mb-16 hidden sm:block">
              Available as self-serve platform, REST API, or native SDKs
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
              {[
                { value: "30%", label: "Faster Decisions" },
                { value: "90%", label: "Less Documentation" },
                { value: "2 weeks", label: "To Full ROI" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - 3D Cards */}
      <section className="relative py-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Turn Chaos Into Intelligence
            </h2>
            <p className="text-xl text-gray-400">Three simple steps to decision intelligence</p>
          </motion.div>

          <div className="relative">
            {/* Curved gradient background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[200px] bg-gradient-to-t from-transparent via-purple-500/5 to-transparent blur-3xl rounded-full transform -rotate-6" />
            </div>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8 items-stretch relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="h-full"
                custom={index}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 60,
                    scale: 0.9
                  },
                  visible: (i) => ({
                    opacity: 1,
                    x: 0,
                    // Inverted curve: middle card up, sides down
                    y: i === 1 ? -30 : 15,
                    // Subtle rotation for organic feel
                    rotate: i === 0 ? 2 : i === 2 ? -2 : 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 12,
                      delay: i * 0.15
                    }
                  })
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <CardContainer className="inter-var h-full">
                  <CardBody className={cn(
                    "bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border overflow-hidden flex flex-col",
                    index === 1 
                      ? "dark:shadow-[0_20px_50px_rgba(139,92,246,0.3)] dark:hover:shadow-[0_20px_60px_rgba(139,92,246,0.4)]" 
                      : "dark:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1]"
                  )}>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                    
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      <motion.div 
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                    </CardItem>
                    
                    <CardItem
                      as="h3"
                      translateZ="60"
                      className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                    >
                      {feature.title}
                    </CardItem>
                    
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm dark:text-neutral-300 mb-4 flex-grow"
                    >
                      {feature.description}
                    </CardItem>
                    
                    <CardItem translateZ="100" className="w-full mt-auto">
                      <div className="relative px-4 py-2 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-xs text-purple-300 text-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 -translate-x-full animate-[shimmer_4s_infinite]" />
                        <span className="relative z-10">{feature.detail}</span>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Every Team. Every Decision. <span className="text-purple-400">Remembered.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {React.cloneElement(useCase.icon, { className: "w-6 h-6 text-purple-400" })}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{useCase.role}</h3>
                  <p className="text-gray-400 italic mb-4">"{useCase.problem}"</p>
                  <p className="text-sm text-gray-300">{useCase.solution}</p>
                  
                  <Link href={useCase.link} className="mt-4 flex items-center text-purple-400 text-sm group-hover:translate-x-2 transition-transform">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-purple-500/20 rounded-full bg-purple-500/10 backdrop-blur-sm">
              <Globe className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm text-purple-300">For Every Team</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Business Teams. Law Firms. <span className="text-purple-400">Developers.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Start with our no-code web platform, automate with APIs, or build custom solutions with SDKs. Perfect for any team capturing critical decisions.
            </p>
          </motion.div>

          {/* Code Example */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-black border border-neutral-800 rounded-2xl p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-gray-500">TypeScript SDK</span>
                </div>
                <pre className="text-gray-300">
{`import { SpaqClient } from '@spaq/sdk';

const spaq = new SpaqClient({
  apiKey: process.env.SPAQ_API_KEY
});

// Query your team's decision history
const decisions = await spaq.decisions.search({
  query: "compliance policy updates",
  team: "legal",
  timeframe: "last-quarter"
});

// Create a new decision chain
const chain = await spaq.chains.create({
  title: "Q4 Budget Allocation Decision",
  context: boardMeetingUrl,
  participants: ["@sarah", "@alex", "@maria"],
  priority: "high",
  tags: ["budget", "quarterly-planning"]
});`}
                </pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-black border border-neutral-800 rounded-2xl p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-gray-500">REST API</span>
                </div>
                <pre className="text-gray-300">
{`POST /api/v1/decisions/query
{
  "question": "What was our stance on the merger?",
  "context": {
    "team": "executive",
    "timeframe": "2024-Q4"
  }
}

// Response
{
  "answer": "The board decided to proceed with...",
  "confidence": 0.95,
  "sources": [
    {
      "type": "teams_meeting",
      "timestamp": "2024-10-15",
      "participants": ["@john", "@sarah"]
    }
  ]
}`}
                </pre>
              </div>
            </motion.div>
          </div>

          {/* Integration Options */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Web Platform",
                description: "Start immediately with our intuitive web interface. No setup required.",
                features: ["Self-serve onboarding", "Visual chain builder", "Team collaboration"],
                cta: "Start Free Trial",
                highlight: false
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "REST API",
                description: "Integrate spaq into your existing workflows and tools.",
                features: ["RESTful endpoints", "Webhook events", "Rate limiting included"],
                cta: "View API Docs",
                highlight: true
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Native SDKs",
                description: "Embed decision intelligence directly into your applications.",
                features: ["TypeScript/JavaScript", "Python", "Go (coming soon)"],
                cta: "Explore SDKs",
                highlight: false
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative rounded-2xl border p-8 transition-all duration-300",
                  option.highlight 
                    ? "border-purple-500/50 bg-purple-500/5" 
                    : "border-neutral-800 hover:border-neutral-700"
                )}
              >
                {option.highlight && (
                  <div className="absolute -top-3 left-8 px-3 py-1 bg-purple-600 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                  {option.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-400 mb-4">{option.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={
                    option.cta === "Start Free Trial" ? "/register" :
                    option.cta === "View API Docs" ? "/docs#api" :
                    option.cta === "Explore SDKs" ? "/docs#sdk" :
                    "/register"
                  }
                  className={cn(
                    "w-full py-2 rounded-lg font-medium transition inline-block text-center",
                    option.highlight
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-neutral-800 hover:bg-neutral-700 text-white"
                  )}
                >
                  {option.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="relative py-20 bg-gradient-to-b from-black via-red-950/5 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-12">
              The Hidden Cost of <span className="text-red-400">Lost Decisions</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-left space-y-4">
                <h3 className="text-xl font-semibold text-red-400">Without spaq:</h3>
                <ul className="space-y-3">
                  {[
                    "20-30% of time searching for past decisions",
                    "Same debates repeated quarterly",
                    "New hires lost in undocumented context",
                    "Generic AI gives generic answers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-left space-y-4">
                <h3 className="text-xl font-semibold text-green-400">With spaq:</h3>
                <ul className="space-y-3">
                  {[
                    "Instant access to decision history",
                    "Learn from past choices, not repeat them",
                    "Onboard in days, not months",
                    "AI trained on YOUR decisions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Link href="/register" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-black rounded-full group">
                <span>Start Capturing Decisions Today</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="relative py-20 bg-gradient-to-b from-black via-blue-950/5 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Simple Pricing. <span className="text-blue-400">Powerful Features.</span>
            </h2>
            <p className="text-xl text-gray-400">Start free. Scale as you grow.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Starter",
                price: "Free",
                description: "Perfect for small teams",
                features: [
                  "Up to 5 team members",
                  "100 decisions/month",
                  "Web platform access",
                  "Slack integration",
                  "Community support"
                ],
                cta: "Start Free",
                highlight: false
              },
              {
                name: "Growth",
                price: "$99",
                period: "/month",
                description: "For growing teams",
                features: [
                  "Up to 25 team members",
                  "Unlimited decisions",
                  "API access (1000 calls/day)",
                  "Priority support",
                  "Custom integrations"
                ],
                cta: "Start Trial",
                highlight: true
              },
              {
                name: "Scale",
                price: "$499",
                period: "/month",
                description: "For larger organizations",
                features: [
                  "Up to 100 team members",
                  "Unlimited API calls",
                  "TypeScript & Python SDKs",
                  "Dedicated support",
                  "SLA guarantee"
                ],
                cta: "Start Trial",
                highlight: false
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Tailored solutions",
                features: [
                  "Unlimited team members",
                  "On-premise deployment",
                  "Custom AI training",
                  "White-label options",
                  "24/7 phone support"
                ],
                cta: "Contact Sales",
                highlight: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative rounded-2xl border p-6 transition-all duration-300",
                  plan.highlight 
                    ? "border-blue-500/50 bg-blue-500/5 scale-105" 
                    : "border-neutral-800 hover:border-neutral-700"
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={
                    plan.cta === "Start Free" ? "/register" : 
                    plan.cta === "Start Trial" ? "/register?plan=growth" : 
                    plan.cta === "Contact Sales" ? "/contact" : 
                    "/register"
                  }
                  className={cn(
                    "w-full py-2 rounded-lg font-medium transition text-sm inline-block text-center",
                    plan.highlight
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-neutral-800 hover:bg-neutral-700 text-white"
                  )}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              All plans include: SSL encryption, 99.9% uptime SLA, GDPR compliance
            </p>
            <p className="text-sm text-gray-500">
              Need a custom solution? <Link href="/contact" className="text-purple-400 hover:text-purple-300">Contact our sales team →</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="relative py-20 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              See spaq in <span className="text-purple-400">Action</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Watch how teams transform their decision-making process
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm"
          >
            {/* Demo Video Placeholder */}
            <Link 
              href="/demo"
              className="aspect-video bg-black/50 flex items-center justify-center cursor-pointer group hover:bg-black/70 transition-colors"
            >
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <div className="w-0 h-0 border-l-[25px] border-l-purple-500 border-y-[15px] border-y-transparent ml-2 group-hover:border-l-purple-400 transition-colors"></div>
                </div>
                <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-colors">Interactive Demo</p>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">Click to see how spaq captures and connects decisions</p>
              </div>
            </Link>

            {/* Demo Features */}
            <div className="p-6 border-t border-neutral-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-1">Slack Integration</h3>
                  <p className="text-sm text-gray-400">@spaq captures decisions as they happen</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-1">Visual Chains</h3>
                  <p className="text-sm text-gray-400">See how decisions connect over time</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-1">AI Insights</h3>
                  <p className="text-sm text-gray-400">Query your decision history naturally</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Demo CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-gray-400 mb-6">
              Ready to never lose another decision?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-purple-600 px-8 font-medium text-white transition hover:scale-105">
                <span className="relative z-10">Get Started Free</span>
                <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/docs" className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-medium backdrop-blur-sm transition hover:bg-white/10">
                <BookOpen className="mr-2 w-4 h-4" />
                Read Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image 
                  src="/icon.png" 
                  alt="spaq" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8"
                />
                <span className="font-semibold">spaq</span>
              </div>
              <p className="text-sm text-gray-400">Trace Every Thought. Build Smarter Decisions.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="/use-cases/engineering" className="hover:text-white transition">For Engineering</Link></li>
                <li><Link href="/use-cases/product" className="hover:text-white transition">For Product</Link></li>
                <li><Link href="/use-cases/law-firms" className="hover:text-white transition">For Law Firms</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/docs" className="hover:text-white transition">Documentation</Link></li>
                <li><Link href="/docs#api" className="hover:text-white transition">API Reference</Link></li>
                <li><Link href="/docs#sdk" className="hover:text-white transition">SDKs</Link></li>
                <li><Link href="/playground" className="hover:text-white transition">API Playground</Link></li>
                <li><Link href="https://github.com/spaq-ai" className="hover:text-white transition">GitHub</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/security" className="hover:text-white transition">Security</Link></li>
                <li><Link href="/status" className="hover:text-white transition">Status</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
              <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms</Link>
            </div>
            <span className="text-sm text-gray-400">© 2025 spaq. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
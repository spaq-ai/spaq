'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code,
  GitBranch,
  Terminal,
  Zap,
  Shield,
  ArrowLeft,
  Check,
  AlertCircle,
  Database,
  Clock,
  Users,
  BarChart3,
  Cpu,
  GitCommit,
  FileCode
} from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'

export default function EngineeringUseCasePage() {
  const benefits = [
    {
      icon: GitBranch,
      title: "Technical Decision Tracking",
      description: "Never wonder why that architecture decision was made. Every technical choice is captured and searchable."
    },
    {
      icon: Clock,
      title: "Reduce Onboarding Time",
      description: "New engineers get up to speed 3x faster with instant access to your team's decision history."
    },
    {
      icon: Shield,
      title: "Prevent Technical Debt",
      description: "Learn from past mistakes. AI surfaces similar decisions to prevent repeating technical debt."
    },
    {
      icon: Database,
      title: "Cross-Team Knowledge",
      description: "Share learnings across teams. What worked for one team becomes wisdom for all."
    }
  ]

  const features = [
    {
      title: "Code Review Intelligence",
      description: "AI learns from your PR comments and review patterns to suggest best practices.",
      icon: GitCommit
    },
    {
      title: "Architecture Decision Records",
      description: "Automatically generate ADRs from Slack discussions and meeting notes.",
      icon: Cpu
    },
    {
      title: "Incident Post-Mortems",
      description: "Turn incident learnings into searchable knowledge that prevents future outages.",
      icon: AlertCircle
    },
    {
      title: "Tech Stack Decisions",
      description: "Track why you chose specific technologies and their trade-offs over time.",
      icon: FileCode
    }
  ]

  const metrics = [
    { value: "67%", label: "Faster incident resolution" },
    { value: "3x", label: "Faster engineer onboarding" },
    { value: "45%", label: "Reduction in repeated mistakes" },
    { value: "89%", label: "Decision visibility improvement" }
  ]

  const testimonial = {
    quote: "spaq transformed how our engineering team operates. We went from constantly reinventing the wheel to building on collective knowledge. It's like having the entire team's experience at your fingertips.",
    author: "Alex Rivera",
    role: "VP of Engineering",
    company: "TechCorp"
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-8">
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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-6">
              <Code className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400">For Engineering Teams</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Turn Every Code Decision Into
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Institutional Knowledge
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Stop losing critical technical decisions in Slack threads and PR comments. 
              spaq captures, connects, and surfaces engineering wisdom when you need it most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?interest=demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
              >
                See Engineering Demo
                <Zap className="w-4 h-4" />
              </Link>
              <Link 
                href="/docs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium border border-neutral-700"
              >
                View Documentation
                <Terminal className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-8 md:p-12 border border-red-500/20">
              <h2 className="text-2xl font-bold mb-6">The Hidden Cost of Lost Engineering Knowledge</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">What happens today:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      Critical decisions buried in 100+ message Slack threads
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      New engineers repeat mistakes from 6 months ago
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      "Why did we build it this way?" - No one remembers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      Same architectural debates happen quarterly
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">The impact:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      40+ hours/month wasted on repeated discussions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      3-6 month onboarding for new engineers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      Technical debt from uninformed decisions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      Knowledge silos between teams
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Engineering Intelligence That Scales With Your Team
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Built for Modern Engineering Teams
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl p-6 border border-purple-500/10"
                >
                  <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Metrics Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 md:p-12 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-center mb-8">Real Impact on Engineering Teams</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">How spaq Works for Engineering</h2>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connect Your Tools</h3>
                  <p className="text-gray-400">
                    Integrate with Slack, GitHub, Jira, and your existing engineering stack. 
                    No workflow changes required.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Automatic Capture</h3>
                  <p className="text-gray-400">
                    spaq captures decisions from PR reviews, Slack discussions, and meeting notes. 
                    Your team keeps working as usual.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Answers</h3>
                  <p className="text-gray-400">
                    Ask questions in natural language. Get answers backed by your team's actual decisions 
                    and experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-neutral-900/50 rounded-2xl p-8 md:p-12 border border-neutral-800">
              <BarChart3 className="w-8 h-8 text-purple-400 mb-6" />
              <blockquote className="text-xl text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 font-bold">AR</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 md:p-12 border border-purple-500/20">
              <h2 className="text-3xl font-bold mb-4">
                Start Building Your Engineering Memory Today
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join engineering teams who are turning every decision into a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact?interest=demo&team=engineering"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
                >
                  Get Engineering Demo
                  <GitBranch className="w-4 h-4" />
                </Link>
                <Link 
                  href="/docs"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium border border-neutral-700"
                >
                  Technical Documentation
                  <Code className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  SOC 2 Compliant
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  No code access required
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  5-minute setup
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
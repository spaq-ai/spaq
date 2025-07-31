'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Lightbulb,
  Users,
  Target,
  Zap,
  Shield,
  ArrowLeft,
  Check,
  AlertCircle,
  MessageSquare,
  TrendingUp,
  Layers,
  BarChart3,
  UserCheck,
  Sparkles,
  Rocket
} from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'

export default function ProductUseCasePage() {
  const benefits = [
    {
      icon: UserCheck,
      title: "User Feedback Intelligence",
      description: "Connect user feedback to product decisions. See the 'why' behind every feature."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Roadmaps",
      description: "Build roadmaps backed by historical decisions and outcomes, not opinions."
    },
    {
      icon: Users,
      title: "Stakeholder Alignment",
      description: "Keep everyone aligned with transparent access to product decision history."
    },
    {
      icon: Sparkles,
      title: "Feature Success Patterns",
      description: "AI identifies what made past features successful to guide future ones."
    }
  ]

  const features = [
    {
      title: "User Research Repository",
      description: "Transform interview notes and feedback into searchable insights.",
      icon: MessageSquare
    },
    {
      title: "Feature Decision Tracking",
      description: "Link every feature to its original user need and success metrics.",
      icon: Target
    },
    {
      title: "Prioritization History",
      description: "Learn from past prioritization decisions and their outcomes.",
      icon: Layers
    },
    {
      title: "Competitive Intelligence",
      description: "Track competitive analysis and strategic positioning decisions.",
      icon: BarChart3
    }
  ]

  const metrics = [
    { value: "52%", label: "Faster feature validation" },
    { value: "3.2x", label: "More user insights captured" },
    { value: "78%", label: "Better stakeholder alignment" },
    { value: "41%", label: "Reduction in feature rework" }
  ]

  const testimonial = {
    quote: "spaq changed how we do product management. We went from debating the same points every quarter to building on proven insights. It's like having a senior PM's experience embedded in our workflow.",
    author: "Sarah Kim",
    role: "Head of Product",
    company: "FinanceApp"
  }

  const problemStatements = [
    "User insights lost in Confluence pages no one reads",
    "Feature decisions based on loudest voice, not data",
    "New PMs repeat mistakes from 2 years ago",
    "Success patterns hidden in scattered documents"
  ]

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
              <Lightbulb className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400">For Product Teams</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform User Insights Into
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Product Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Stop losing valuable user insights and product decisions in endless documents. 
              spaq captures, connects, and surfaces product wisdom to build better features faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?interest=demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
              >
                See Product Demo
                <Zap className="w-4 h-4" />
              </Link>
              <Link 
                href="/docs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium border border-neutral-700"
              >
                Explore Features
                <Rocket className="w-4 h-4" />
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
              <h2 className="text-2xl font-bold mb-6">The Product Knowledge Crisis</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-red-400">What's happening now:</h3>
                  <ul className="space-y-3">
                    {problemStatements.map((problem, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 text-orange-400">The cost:</h3>
                  <div className="space-y-4">
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-400 mb-1">60%</div>
                      <p className="text-sm text-gray-400">of product decisions lack historical context</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-400 mb-1">$2.3M</div>
                      <p className="text-sm text-gray-400">average cost of failed features per year</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-400 mb-1">4-6 months</div>
                      <p className="text-sm text-gray-400">for new PMs to understand product history</p>
                    </div>
                  </div>
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
              Build Products With Collective Intelligence
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
              Purpose-Built for Product Excellence
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

          {/* Workflow Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Your New Product Workflow</h2>
            <div className="bg-neutral-900/50 rounded-2xl p-8 border border-neutral-800">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Capture Everything</h3>
                  <p className="text-sm text-gray-400">
                    User interviews, feature discussions, and decisions auto-captured from your tools
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Get AI Insights</h3>
                  <p className="text-sm text-gray-400">
                    Surface patterns, similar past decisions, and success indicators automatically
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Ship With Confidence</h3>
                  <p className="text-sm text-gray-400">
                    Make decisions backed by your team's collective intelligence and past learnings
                  </p>
                </div>
              </div>
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
              <h2 className="text-2xl font-bold text-center mb-8">Proven Impact on Product Teams</h2>
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

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-neutral-900/50 rounded-2xl p-8 md:p-12 border border-neutral-800">
              <Lightbulb className="w-8 h-8 text-purple-400 mb-6" />
              <blockquote className="text-xl text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 font-bold">SK</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Integration Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Works With Your Product Stack</h2>
            <div className="bg-neutral-900/50 rounded-xl p-8 border border-neutral-800">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Slack', 'Notion', 'Figma', 'Jira', 'Linear', 'Amplitude', 'Mixpanel', 'Dovetail'].map((tool, index) => (
                  <div key={index} className="text-center">
                    <div className="h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{tool}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-400 mt-6">
                + 20 more integrations
              </p>
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
                Start Building Smarter Products Today
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join product teams shipping better features with the power of collective intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact?interest=demo&team=product"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
                >
                  Get Product Demo
                  <Lightbulb className="w-4 h-4" />
                </Link>
                <Link 
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium border border-neutral-700"
                >
                  View Pricing
                  <TrendingUp className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  No workflow changes
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  GDPR compliant
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Free trial available
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
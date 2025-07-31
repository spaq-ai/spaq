'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Scale,
  FileText,
  Search,
  Zap,
  Shield,
  ArrowLeft,
  Check,
  AlertCircle,
  Clock,
  Users,
  BarChart3,
  Lock,
  Briefcase,
  BookOpen,
  DollarSign
} from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'

export default function LawFirmsUseCasePage() {
  const benefits = [
    {
      icon: FileText,
      title: "Case Knowledge Management",
      description: "Transform years of case history into instantly searchable precedent intelligence."
    },
    {
      icon: Clock,
      title: "Accelerate Research",
      description: "Find relevant precedents and strategies 10x faster than traditional methods."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Surface similar past cases to identify potential risks and winning strategies."
    },
    {
      icon: DollarSign,
      title: "Increase Billable Efficiency",
      description: "Spend less time searching, more time on high-value strategic work."
    }
  ]

  const features = [
    {
      title: "Precedent Intelligence",
      description: "AI analyzes past cases to surface relevant precedents and winning arguments.",
      icon: BookOpen
    },
    {
      title: "Matter Collaboration",
      description: "Capture team discussions and strategy sessions for future reference.",
      icon: Users
    },
    {
      title: "Client Knowledge Base",
      description: "Build institutional knowledge about client preferences and history.",
      icon: Briefcase
    },
    {
      title: "Secure & Compliant",
      description: "Bank-level encryption with full compliance for legal data requirements.",
      icon: Lock
    }
  ]

  const metrics = [
    { value: "73%", label: "Faster case research" },
    { value: "2.5x", label: "More precedents found" },
    { value: "45%", label: "Reduction in research hours" },
    { value: "$1.2M", label: "Average annual savings" }
  ]

  const testimonial = {
    quote: "spaq revolutionized how we leverage our firm's collective knowledge. What used to take associates days of research now happens in minutes. It's like having our entire firm's experience at every lawyer's fingertips.",
    author: "James Morrison",
    role: "Managing Partner",
    company: "Morrison & Associates LLP"
  }

  const challenges = [
    "Critical case insights buried in closed matter files",
    "Junior associates repeating research already done",
    "Winning strategies lost when partners leave",
    "No way to search across matter communications"
  ]

  const useCases = [
    {
      title: "Litigation Strategy",
      description: "Surface similar cases, successful motions, and judge preferences instantly."
    },
    {
      title: "Due Diligence",
      description: "Accelerate review with AI-powered pattern recognition across documents."
    },
    {
      title: "Contract Analysis",
      description: "Find precedent clauses and negotiation strategies from past deals."
    },
    {
      title: "Knowledge Transfer",
      description: "Preserve partner expertise and make it accessible to the entire firm."
    }
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
              <Scale className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400">For Law Firms</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Turn Your Firm's Experience Into
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Competitive Advantage
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Stop losing valuable case knowledge when matters close or partners leave. 
              spaq captures and surfaces your firm's collective legal intelligence instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?interest=demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
              >
                Schedule Law Firm Demo
                <Zap className="w-4 h-4" />
              </Link>
              <Link 
                href="/security"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium border border-neutral-700"
              >
                Security & Compliance
                <Shield className="w-4 h-4" />
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
              <h2 className="text-2xl font-bold mb-6">The Hidden Cost of Lost Legal Knowledge</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4 text-red-400">Current Challenges:</h3>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4 text-orange-400">The Impact:</h3>
                  <div className="space-y-4">
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-400 mb-1">400+</div>
                      <p className="text-sm text-gray-400">hours per attorney wasted on redundant research annually</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-400 mb-1">65%</div>
                      <p className="text-sm text-gray-400">of valuable case insights never reused</p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-400 mb-1">$850K</div>
                      <p className="text-sm text-gray-400">average annual cost of knowledge inefficiency</p>
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
              Legal Intelligence That Scales With Your Firm
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

          {/* Use Cases Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Built for Every Practice Area
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl p-6 border border-purple-500/10"
                >
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Enterprise-Grade Features for Legal Teams
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800"
                >
                  <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 md:p-12 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold">Bank-Level Security for Legal Data</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Data Protection</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      256-bit AES encryption
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      SOC 2 Type II certified
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      GDPR compliant
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Access Control</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Matter-level permissions
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Ethical wall support
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Full audit trails
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Compliance</h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      ABA compliance ready
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Data residency options
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-400" />
                      Regular security audits
                    </li>
                  </ul>
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
            <div className="bg-neutral-900/50 rounded-2xl p-8 md:p-12 border border-neutral-800">
              <h2 className="text-2xl font-bold text-center mb-8">Proven Results for Law Firms</h2>
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
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12 border border-purple-500/20">
              <Scale className="w-8 h-8 text-purple-400 mb-6" />
              <blockquote className="text-xl text-gray-300 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <span className="text-purple-400 font-bold">JM</span>
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
                Transform Your Firm's Knowledge Into Power
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading law firms using spaq to turn every case into future advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact?interest=demo&team=legal"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
                >
                  Get Law Firm Demo
                  <Briefcase className="w-4 h-4" />
                </Link>
                <Link 
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium border border-neutral-700"
                >
                  View Law Firm Pricing
                  <DollarSign className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  White-glove onboarding
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  24/7 priority support
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" />
                  Custom deployment
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
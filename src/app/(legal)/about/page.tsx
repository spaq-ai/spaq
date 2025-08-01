'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  ArrowLeft, 
  Target,
  Lightbulb,
  Users,
  Award,
  TrendingUp,
  Heart,
  Globe,
  Rocket,
  Shield,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'

export default function AboutPage() {
  const values = [
    {
      icon: Brain,
      title: "Intelligence First",
      description: "We believe every decision contains wisdom that can guide future choices."
    },
    {
      icon: Users,
      title: "Human-Centric AI",
      description: "AI should amplify human intelligence, not replace it. We build tools that enhance your team's capabilities."
    },
    {
      icon: Shield,
      title: "Trust & Privacy",
      description: "Your decisions are your competitive advantage. We protect them with enterprise-grade security."
    },
    {
      icon: Sparkles,
      title: "Continuous Learning",
      description: "Just like your team, our AI gets smarter with every decision captured."
    }
  ]

  const stats = [
    { number: "10K+", label: "Decisions Tracked Daily" },
    { number: "500+", label: "Teams Using spaq" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "< 100ms", label: "Query Response Time" }
  ]

  const founder = {
    name: "Ayomide Adekoya",
    role: "Founder & CEO",
    bio: "Former ML Engineer at Apple, built auth infra at Meta. Published NLP research at 19. National Science & Technology Medals Foundation Award Winner.",
    longBio: [
      "Former ML Engineer at Apple, where I built production telemetry-based PyTorch pipelines serving millions of iOS devices. At Meta, I developed authentication infrastructure and Llama-powered recommendation systems.",
      "At just 20, I've been recognized with the National Science & Technology Medals Foundation Award, D.E. Shaw Research Fellowship, and Bloomberg Engineering Fellowship. Published NLP research at 19. Currently studying Electrical Engineering & Computer Science at Howard University.",
      "My mission is to make AI work in the real world - from edge computing in resource-constrained environments to enterprise-scale decision systems. spaq represents the culmination of my experience building AI infrastructure that serves millions."
    ],
    links: {
      twitter: "https://twitter.com/elcruzosym",
      linkedin: "https://linkedin.com/in/elcruzo",
      portfolio: "https://ayomide.ai"
    }
  }

  const investors = [
    "Pre-seed Stage",
    "Stealth Mode",
    "Angel Backed",
    "YC Application F25"
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
            <div className="flex items-center justify-center gap-2 mb-6">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building the Memory Layer for
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Organizational Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're on a mission to ensure no valuable decision is ever lost, 
              turning your team's collective wisdom into your competitive advantage.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every day, teams make thousands of micro-decisions that shape their products, strategies, 
                and culture. Yet 90% of this wisdom vanishes into Slack archives and forgotten meeting notes. 
                We're building spaq to capture, connect, and learn from every decision, creating an AI that 
                truly understands how your organization thinks and operates.
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 text-center"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
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
                      <value.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-400">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Founder Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Meet the Founder</h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-neutral-900/50 rounded-2xl p-8 border border-neutral-800"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="relative flex-shrink-0">
                    <img
                      src="/bitmoji.png"
                      alt={founder.name}
                      className="w-48 h-48 rounded-full"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-purple-400 mb-4">{founder.role}</p>
                    <div className="space-y-3 text-gray-300">
                      {founder.longBio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
                      <a 
                        href={founder.links.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition text-sm"
                      >
                        Twitter
                      </a>
                      <a 
                        href={founder.links.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition text-sm"
                      >
                        LinkedIn
                      </a>
                      <a 
                        href={founder.links.portfolio} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition text-sm"
                      >
                        Portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Investors Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {investors.map((investor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 text-center hover:border-neutral-700 transition"
                >
                  <p className="font-medium text-gray-300">{investor}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join Us Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
            id="careers"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 md:p-12 border border-purple-500/20 text-center">
              <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We're looking for exceptional people who believe in the power of 
                collective intelligence to join our growing team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://careers.spaq.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
                >
                  View Open Positions
                  <TrendingUp className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium border border-neutral-700"
                >
                  Get in Touch
                  <Heart className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Partners Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            id="partners"
          >
            <div className="bg-neutral-900/50 rounded-2xl p-8 md:p-12 border border-neutral-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold">Partner Ecosystem</h2>
              </div>
              <p className="text-gray-300 mb-8">
                We're building an ecosystem of partners who share our vision of preserving and 
                leveraging organizational intelligence. Whether you're a consultancy, system integrator, 
                or technology partner, let's explore how we can work together.
              </p>
              <Link 
                href="/contact?interest=partnership"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
              >
                Become a Partner
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
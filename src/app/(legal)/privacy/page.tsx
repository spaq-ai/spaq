'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Shield, Lock, Eye, Database, Globe, Users, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        "Account information (name, email, profile data)",
        "Usage data and analytics",
        "Decision chains and reasoning data",
        "Communication preferences",
        "Device and browser information"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        "Provide and improve our AI decision-making services",
        "Personalize your experience and recommendations",
        "Communicate updates and important notices",
        "Ensure security and prevent fraud",
        "Comply with legal obligations"
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "End-to-end encryption for sensitive data",
        "Regular security audits and penetration testing",
        "Strict access controls and authentication",
        "Secure data centers with redundancy",
        "Compliance with industry standards (SOC 2, ISO 27001)"
      ]
    },
    {
      title: "Your Rights",
      icon: Shield,
      content: [
        "Access and download your data anytime",
        "Request correction of inaccurate information",
        "Delete your account and associated data",
        "Opt-out of marketing communications",
        "Data portability to other services"
      ]
    },
    {
      title: "Third-Party Services",
      icon: Globe,
      content: [
        "Analytics providers (anonymized data only)",
        "Cloud infrastructure providers",
        "Payment processors (PCI compliant)",
        "Communication services",
        "No selling of personal data to third parties"
      ]
    },
    {
      title: "Contact Us",
      icon: Mail,
      content: [
        "Email: privacy@spaq.ai",
        "Data Protection Officer: dpo@spaq.ai",
        "Address: 123 AI Street, San Francisco, CA 94105",
        "Response time: Within 48 hours",
        "24/7 support for urgent privacy concerns"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      
      {/* Header */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-6 py-8">
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Image 
                src="/icon.png" 
                alt="spaq" 
                width={56} 
                height={56} 
                className="w-14 h-14"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                spaq
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: July 31, 2025</p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 text-gray-300"
          >
            <p className="mb-4">
              At spaq, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our AI-powered decision intelligence platform.
            </p>
            <p>
              By using our services, you agree to the collection and use of information in accordance 
              with this policy. If you do not agree with the terms of this policy, please do not access the service.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (index + 2) }}
                className="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* GDPR & CCPA Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-6 bg-purple-500/10 rounded-xl border border-purple-500/20"
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-400" />
              GDPR & CCPA Compliance
            </h3>
            <p className="text-gray-300">
              We are committed to compliance with the General Data Protection Regulation (GDPR) and 
              California Consumer Privacy Act (CCPA). This includes providing you with notice about 
              data collection, obtaining consent where required, and honoring your rights regarding 
              your personal information.
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-16 pt-8 border-t border-neutral-800 text-center text-gray-400"
          >
            <p>
              For questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@spaq.ai" className="text-purple-400 hover:text-purple-300 transition">
                privacy@spaq.ai
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
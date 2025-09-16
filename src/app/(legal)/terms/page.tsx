'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, FileText, Scale, AlertCircle, Ban, DollarSign, Shield, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using spaq, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "We reserve the right to update these terms at any time with notice provided via email or platform notification."
      ]
    },
    {
      title: "2. Use License & Restrictions",
      content: [
        "Permission is granted to temporarily access spaq for personal or internal business purposes.",
        "You may not: modify or copy our materials; use for commercial purposes without authorization; attempt to reverse engineer any software; remove any copyright or proprietary notations.",
        "This license shall automatically terminate if you violate any of these restrictions."
      ]
    },
    {
      title: "3. Service Description",
      content: [
        "spaq provides AI-powered decision intelligence and reasoning chain management.",
        "Services include but are not limited to: decision tracking, AI agent consultation, analytics, and team collaboration features.",
        "We reserve the right to modify, suspend, or discontinue any aspect of the service at any time."
      ]
    },
    {
      title: "4. User Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree not to use the service for any illegal or unauthorized purpose.",
        "You must not transmit any worms, viruses, or any code of a destructive nature.",
        "You are responsible for all activity that occurs under your account."
      ]
    },
    {
      title: "5. Intellectual Property",
      content: [
        "The service and its original content, features, and functionality are owned by spaq and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
        "Your use of our service does not grant you ownership of any intellectual property rights in our service or the content you access.",
        "You retain ownership of content you create using our platform, but grant us a license to use it to provide and improve our services."
      ]
    },
    {
      title: "6. Privacy & Data Usage",
      content: [
        "Your use of our service is also governed by our Privacy Policy.",
        "We collect and use data as described in our Privacy Policy to provide and improve our services.",
        "You agree that we may process your data in accordance with our Privacy Policy."
      ]
    },
    {
      title: "7. Payment Terms",
      content: [
        "Subscription fees are billed in advance on a monthly or annual basis.",
        "All fees are non-refundable except as required by law.",
        "We reserve the right to change subscription fees upon 30 days notice.",
        "Failure to pay fees may result in termination of your access to the service."
      ]
    },
    {
      title: "8. Limitation of Liability",
      content: [
        "In no event shall spaq, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.",
        "Our liability is limited to the amount you paid us in the twelve months prior to the event giving rise to liability.",
        "Some jurisdictions do not allow limitations of liability, so these limitations may not apply to you."
      ]
    },
    {
      title: "9. Indemnification",
      content: [
        "You agree to defend, indemnify, and hold harmless spaq and its affiliates from any claim or demand made by any third party due to or arising out of your use of the service.",
        "This includes reasonable attorneys' fees and costs.",
        "We reserve the right to assume exclusive defense and control of any matter subject to indemnification by you."
      ]
    },
    {
      title: "10. Termination",
      content: [
        "We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever.",
        "Upon termination, your right to use the service will cease immediately.",
        "All provisions which by their nature should survive termination shall survive termination."
      ]
    },
    {
      title: "11. Governing Law",
      content: [
        "These Terms shall be governed and construed in accordance with the laws of California, United States.",
        "Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of California.",
        "You waive any objection to jurisdiction and venue in such courts."
      ]
    },
    {
      title: "12. Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us at:",
        "Email: legal@spaq.ai",
        "Address: 123 AI Street, San Francisco, CA 94105",
        "Phone: +1 (555) 123-4567"
      ]
    }
  ]

  const highlights = [
    { icon: CheckCircle, text: "Free tier available", color: "text-green-400" },
    { icon: Shield, text: "Data protection guaranteed", color: "text-blue-400" },
    { icon: Ban, text: "No hidden fees", color: "text-purple-400" },
    { icon: Scale, text: "Fair use policy", color: "text-amber-400" }
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
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400">Effective Date: July 31, 2025</p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-800 p-4 text-center"
              >
                <highlight.icon className={`w-6 h-6 ${highlight.color} mx-auto mb-2`} />
                <p className="text-sm text-gray-300">{highlight.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 p-6 bg-amber-500/10 rounded-xl border border-amber-500/20"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Important Notice</h3>
                <p className="text-gray-300 text-sm">
                  Please read these terms carefully before using spaq. By using our service, you agree to be bound by these terms. 
                  If you disagree with any part of these terms, you may not access the service.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * (index + 3) }}
                className="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition"
              >
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Agreement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-12 p-6 bg-purple-500/10 rounded-xl border border-purple-500/20 text-center"
          >
            <FileText className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Agreement to Terms</h3>
            <p className="text-gray-300 text-sm">
              By clicking "I Agree" or using spaq, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Service.
            </p>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-16 pt-8 border-t border-neutral-800 text-center text-gray-400"
          >
            <p className="mb-4">
              These Terms of Service were last updated on July 31, 2025.
            </p>
            <p>
              For questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@spaq.ai" className="text-purple-400 hover:text-purple-300 transition">
                legal@spaq.ai
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
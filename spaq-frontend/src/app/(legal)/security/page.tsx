'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield,
  Lock,
  Check,
  ArrowLeft,
  FileCheck,
  Key,
  Eye,
  Server,
  Globe,
  UserCheck,
  AlertCircle,
  CheckCircle2,
  Building,
  ShieldCheck,
  Fingerprint,
  Database,
  HelpCircle
} from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'

export default function SecurityPage() {
  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Annual audits ensure our security controls meet the highest standards",
      icon: FileCheck,
      status: "Certified"
    },
    {
      name: "GDPR Compliant",
      description: "Full compliance with European data protection regulations",
      icon: Globe,
      status: "Compliant"
    },
    {
      name: "CCPA Ready",
      description: "California Consumer Privacy Act compliance built-in",
      icon: UserCheck,
      status: "Compliant"
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification",
      icon: ShieldCheck,
      status: "In Progress"
    }
  ]

  const securityFeatures = [
    {
      category: "Data Encryption",
      icon: Lock,
      features: [
        "256-bit AES encryption at rest",
        "TLS 1.3 encryption in transit",
        "End-to-end encryption for sensitive data",
        "Encrypted backups with customer-managed keys"
      ]
    },
    {
      category: "Access Control",
      icon: Key,
      features: [
        "SAML 2.0 single sign-on (SSO)",
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "IP allowlisting and session management"
      ]
    },
    {
      category: "Infrastructure Security",
      icon: Server,
      features: [
        "AWS cloud infrastructure",
        "99.99% uptime SLA",
        "Automated security patching",
        "DDoS protection and WAF"
      ]
    },
    {
      category: "Monitoring & Compliance",
      icon: Eye,
      features: [
        "24/7 security monitoring",
        "Real-time threat detection",
        "Comprehensive audit logs",
        "Regular penetration testing"
      ]
    }
  ]

  const dataPrivacy = [
    {
      title: "Your Data, Your Control",
      points: [
        "You own all your data - always",
        "Export your data anytime in standard formats",
        "Delete your data permanently upon request",
        "No selling or sharing of customer data"
      ]
    },
    {
      title: "Data Residency",
      points: [
        "Choose where your data is stored",
        "US, EU, and APAC regions available",
        "Comply with local data regulations",
        "Cross-region backups optional"
      ]
    },
    {
      title: "Privacy by Design",
      points: [
        "Minimal data collection philosophy",
        "Anonymized analytics and metrics",
        "No tracking pixels or third-party cookies",
        "Regular privacy impact assessments"
      ]
    }
  ]

  const securityPractices = [
    {
      icon: Fingerprint,
      title: "Secure Development",
      description: "Security reviews at every stage of development, automated vulnerability scanning, and secure coding practices."
    },
    {
      icon: Database,
      title: "Data Isolation",
      description: "Complete logical separation between customer data, encrypted database fields, and strict access controls."
    },
    {
      icon: AlertCircle,
      title: "Incident Response",
      description: "24-hour incident response team, documented response procedures, and transparent communication."
    },
    {
      icon: Building,
      title: "Vendor Security",
      description: "Rigorous assessment of all third-party vendors, minimal vendor dependencies, and regular security reviews."
    }
  ]

  const faqs = [
    {
      question: "How is my data encrypted?",
      answer: "All data is encrypted using AES-256 at rest and TLS 1.3 in transit. We use AWS KMS for key management with automatic key rotation."
    },
    {
      question: "Can I bring my own encryption keys?",
      answer: "Yes, Enterprise customers can use customer-managed encryption keys (CMEK) for complete control over their data encryption."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "You can export all your data before cancellation. We retain data for 30 days after cancellation for recovery purposes, then permanently delete it."
    },
    {
      question: "Do you have a bug bounty program?",
      answer: "Yes! We partner with leading security researchers through our bug bounty program. Report vulnerabilities to security@spaq.ai."
    },
    {
      question: "How often are security audits performed?",
      answer: "We conduct annual third-party security audits, quarterly internal assessments, and continuous automated security scanning."
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
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Security First
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade Security
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Built Into Every Layer
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your decisions are your competitive advantage. We protect them with 
              bank-level security, compliance certifications, and a privacy-first approach.
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">256-bit</div>
                  <p className="text-sm text-gray-400">AES Encryption</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.99%</div>
                  <p className="text-sm text-gray-400">Uptime SLA</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">SOC 2</div>
                  <p className="text-sm text-gray-400">Type II Certified</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <p className="text-sm text-gray-400">Security Monitoring</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Compliance & Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <cert.icon className="w-8 h-8 text-purple-400" />
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      cert.status === 'Certified' || cert.status === 'Compliant'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-400">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Features */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Security Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {securityFeatures.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Privacy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Privacy & Data Protection
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {dataPrivacy.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl p-6 border border-purple-500/10"
                >
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Practices */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Security Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {securityPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition"
                >
                  <practice.icon className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                  <p className="text-gray-400">{practice.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Security FAQs
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800"
                >
                  <h3 className="text-lg font-semibold mb-3 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 pl-7">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Report CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 md:p-12 border border-purple-500/20 text-center">
              <FileCheck className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Request Our Security Whitepaper
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Get detailed information about our security architecture, compliance certifications, 
                and data protection practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact?interest=security"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
                >
                  Request Security Report
                  <Shield className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium border border-neutral-700"
                >
                  Contact Security Team
                  <Lock className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Trust Center */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-neutral-900/50 rounded-xl p-8 border border-neutral-800">
              <h3 className="text-2xl font-bold mb-4">Visit Our Trust Center</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Access real-time system status, security updates, compliance documents, 
                and transparency reports in one place.
              </p>
              <Link 
                href="https://trust.spaq.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
              >
                trust.spaq.ai
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
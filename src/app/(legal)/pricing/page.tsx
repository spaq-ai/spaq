'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Check,
  X,
  ArrowLeft,
  Zap,
  Shield,
  Users,
  Code,
  DollarSign,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Building,
  Rocket,
  Clock
} from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const plans = [
    {
      name: "Starter",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for small teams getting started",
      features: [
        { text: "Up to 5 team members", included: true },
        { text: "100 decisions/month", included: true },
        { text: "Web platform access", included: true },
        { text: "Slack integration", included: true },
        { text: "Community support", included: true },
        { text: "7-day data retention", included: true },
        { text: "API access", included: false },
        { text: "Custom integrations", included: false },
        { text: "Priority support", included: false },
        { text: "Advanced analytics", included: false }
      ],
      cta: "Start Free",
      ctaLink: "/register",
      highlight: false
    },
    {
      name: "Growth",
      price: { monthly: 99, yearly: 79 },
      description: "For growing teams that need more power",
      popular: true,
      features: [
        { text: "Up to 25 team members", included: true },
        { text: "Unlimited decisions", included: true },
        { text: "All platform features", included: true },
        { text: "All integrations", included: true },
        { text: "API access (1000 calls/day)", included: true },
        { text: "90-day data retention", included: true },
        { text: "Priority email support", included: true },
        { text: "Custom workflows", included: true },
        { text: "Team analytics", included: true },
        { text: "On-premise deployment", included: false }
      ],
      cta: "Start 14-Day Trial",
      ctaLink: "/register?plan=growth",
      highlight: true
    },
    {
      name: "Scale",
      price: { monthly: 499, yearly: 399 },
      description: "For larger organizations with advanced needs",
      features: [
        { text: "Up to 100 team members", included: true },
        { text: "Unlimited everything", included: true },
        { text: "Unlimited API calls", included: true },
        { text: "1-year data retention", included: true },
        { text: "TypeScript & Python SDKs", included: true },
        { text: "Dedicated support", included: true },
        { text: "99.9% SLA guarantee", included: true },
        { text: "Advanced AI training", included: true },
        { text: "SAML/SSO", included: true },
        { text: "Audit logs", included: true }
      ],
      cta: "Start 14-Day Trial",
      ctaLink: "/register?plan=scale",
      highlight: false
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      description: "Tailored solutions for your organization",
      features: [
        { text: "Unlimited team members", included: true },
        { text: "Unlimited everything", included: true },
        { text: "On-premise deployment", included: true },
        { text: "Custom AI model training", included: true },
        { text: "White-label options", included: true },
        { text: "24/7 phone support", included: true },
        { text: "99.99% SLA guarantee", included: true },
        { text: "Dedicated success manager", included: true },
        { text: "Custom integrations", included: true },
        { text: "Compliance certifications", included: true }
      ],
      cta: "Contact Sales",
      ctaLink: "/contact?interest=enterprise",
      highlight: false
    }
  ]

  const faqs = [
    {
      question: "Can I change plans at any time?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, we'll credit your account for future use."
    },
    {
      question: "What happens when I exceed my limits?",
      answer: "We'll notify you when you're approaching your limits. For Starter plans, you'll need to upgrade to continue. For paid plans, we offer flexible overage pricing so you're never blocked."
    },
    {
      question: "Do you offer discounts for non-profits or education?",
      answer: "Yes! We offer 50% discounts for qualified non-profit organizations and educational institutions. Contact our sales team with proof of status to get started."
    },
    {
      question: "What's your data retention policy?",
      answer: "Data retention varies by plan: Starter (7 days), Growth (90 days), Scale (1 year), Enterprise (custom). You can export your data at any time."
    },
    {
      question: "Can I get a demo before committing?",
      answer: "Absolutely! We offer personalized demos for teams. You can also start with our free Starter plan or take advantage of our 14-day trial on paid plans."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, ACH transfers, and wire transfers for annual plans. Enterprise customers can also pay by invoice with NET 30 terms."
    }
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple Pricing for
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Powerful Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Start free. Scale as you grow. No hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-1 bg-neutral-900 rounded-lg">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={cn(
                  "px-4 py-2 rounded-md font-medium transition",
                  billingPeriod === 'monthly' 
                    ? "bg-purple-600 text-white" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={cn(
                  "px-4 py-2 rounded-md font-medium transition flex items-center gap-2",
                  billingPeriod === 'yearly' 
                    ? "bg-purple-600 text-white" 
                    : "text-gray-400 hover:text-white"
                )}
              >
                Yearly
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative rounded-2xl border p-6 flex flex-col",
                  plan.highlight 
                    ? "border-purple-500/50 bg-purple-500/5 scale-105" 
                    : "border-neutral-800 hover:border-neutral-700 bg-neutral-900/50"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-600 rounded-full text-xs font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-3">
                    {typeof plan.price[billingPeriod] === 'number' ? (
                      <>
                        <span className="text-4xl font-bold">
                          ${plan.price[billingPeriod]}
                        </span>
                        <span className="text-gray-400 ml-1">
                          /{billingPeriod === 'yearly' ? 'mo' : 'month'}
                        </span>
                        {billingPeriod === 'yearly' && typeof plan.price.monthly === 'number' && plan.price.monthly > 0 && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ${plan.price.monthly}
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-4xl font-bold">{plan.price[billingPeriod]}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-300" : "text-gray-600"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={plan.ctaLink}
                  className={cn(
                    "w-full py-3 rounded-lg font-medium transition text-center",
                    plan.highlight
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700"
                  )}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Feature Comparison */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything You Need to Scale
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-400">
                  Real-time decision tracking, team insights, and knowledge sharing across your organization
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Developer Friendly</h3>
                <p className="text-gray-400">
                  RESTful APIs, TypeScript & Python SDKs, and comprehensive documentation for easy integration
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-400">
                  SOC 2 certified, end-to-end encryption, SAML SSO, and compliance with major standards
                </p>
              </div>
            </div>
          </motion.div>

          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 md:p-12 border border-purple-500/20">
              <div className="text-center mb-8">
                <DollarSign className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">See Your ROI</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Our customers typically see positive ROI within 60 days
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">3.2x</div>
                  <p className="text-gray-400">Average productivity gain</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">67%</div>
                  <p className="text-gray-400">Faster decision-making</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">$2.4M</div>
                  <p className="text-gray-400">Average annual savings</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link 
                  href="/contact?interest=roi"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                >
                  Calculate your ROI
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </Link>
              </div>
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
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 rounded-xl border border-neutral-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-800/50 transition"
                  >
                    <span className="font-medium text-left">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
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
              <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Team's Intelligence?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of teams using spaq to turn every decision into a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/register"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium"
                >
                  Start Free Today
                  <Zap className="w-4 h-4" />
                </Link>
                <Link 
                  href="/contact?interest=demo"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium border border-neutral-700"
                >
                  Schedule a Demo
                  <Clock className="w-4 h-4" />
                </Link>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                No credit card required • 14-day free trial on paid plans
              </p>
            </div>
          </motion.div>

          {/* Still Questions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 text-gray-400">
              <HelpCircle className="w-5 h-5" />
              <span>Still have questions?</span>
              <Link href="/contact" className="text-purple-400 hover:text-purple-300 transition ml-1">
                Contact our team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
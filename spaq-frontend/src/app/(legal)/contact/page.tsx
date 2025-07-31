'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Building,
  Users,
  Zap,
  ArrowLeft,
  Check,
  Calendar,
  Globe
} from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '',
    message: '',
    interest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@spaq.ai',
      link: 'mailto:hello@spaq.ai'
    },
    {
      icon: Phone,
      title: 'Sales',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 AI Street, San Francisco, CA 94105',
      link: '#'
    }
  ]

  const interests = [
    { value: 'demo', label: 'Request a Demo' },
    { value: 'pricing', label: 'Pricing Information' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'support', label: 'Technical Support' },
    { value: 'other', label: 'Other' }
  ]

  const companySizes = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-500', label: '201-500 employees' },
    { value: '500+', label: '500+ employees' }
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
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
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to transform your team's decision-making? Let's discuss how spaq can help.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1 space-y-6"
            >
              <div>
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 transition group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition">
                        <item.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  Schedule a Demo
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  See spaq in action with a personalized demo from our team.
                </p>
                <Link 
                  href="https://calendly.com/spaq-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition text-sm font-medium"
                >
                  Book a Demo
                  <Zap className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <h3 className="font-semibold mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday - Sunday: Closed</p>
                  <p className="text-gray-300 mt-3">Response time: Within 24 hours</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-neutral-800 p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Thank you!</h3>
                    <p className="text-gray-400 mb-6">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          companySize: '',
                          message: '',
                          interest: ''
                        })
                      }}
                      className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
                          placeholder="Acme Inc."
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Size
                        </label>
                        <select
                          value={formData.companySize}
                          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
                        >
                          <option value="">Select size</option>
                          {companySizes.map((size) => (
                            <option key={size.value} value={size.value}>
                              {size.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        I'm interested in *
                      </label>
                      <select
                        required
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
                      >
                        <option value="">Select an option</option>
                        {interests.map((interest) => (
                          <option key={interest.value} value={interest.value}>
                            {interest.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition resize-none"
                        placeholder="Tell us about your team's decision-making challenges..."
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-400">
                        * Required fields
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition",
                          isSubmitting
                            ? "bg-neutral-700 text-gray-400 cursor-not-allowed"
                            : "bg-purple-600 hover:bg-purple-700 text-white"
                        )}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Additional CTAs */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-neutral-900/50 rounded-lg border border-neutral-800 p-6 hover:border-neutral-700 transition"
                >
                  <Building className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="font-semibold mb-2">Enterprise Solutions</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Custom deployment options for large organizations.
                  </p>
                  <Link 
                    href="/pricing"
                    className="text-sm text-purple-400 hover:text-purple-300 transition"
                  >
                    View Enterprise Plans →
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-neutral-900/50 rounded-lg border border-neutral-800 p-6 hover:border-neutral-700 transition"
                >
                  <Users className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="font-semibold mb-2">Partner Program</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Join our partner ecosystem and grow together.
                  </p>
                  <Link 
                    href="/about#partners"
                    className="text-sm text-purple-400 hover:text-purple-300 transition"
                  >
                    Become a Partner →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
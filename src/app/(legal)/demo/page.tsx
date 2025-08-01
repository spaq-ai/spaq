'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Calendar,
  Play,
  Sparkles,
  Users
} from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'

export default function DemoPage() {
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
            className="text-center mb-16 mt-20"
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <Image 
                src="/images/spaq-transparent.png" 
                alt="spaq" 
                width={40} 
                height={40} 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                spaq
              </span>
            </div>
            
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
              <div className="relative bg-neutral-900/80 border border-neutral-800 rounded-2xl p-12">
                <Play className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Demo Video Coming Soon
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-2">
                  We're updating our demo video to showcase the latest features and improvements.
                </p>
                <p className="text-lg text-gray-500">
                  Check back in a few days, or explore other ways to see spaq in action below.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Alternative Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20"
          >
            {/* Schedule Demo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20 text-center"
            >
              <Calendar className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Demo</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Get a live walkthrough tailored to your team's needs
              </p>
              <Link 
                href="/contact?interest=demo"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition font-medium text-sm"
              >
                Schedule Demo
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </motion.div>

            {/* Explore Features */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-900/50 rounded-2xl p-6 border border-neutral-800 text-center"
            >
              <Sparkles className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Explore Features</h3>
              <p className="text-gray-400 mb-4 text-sm">
                Discover how spaq transforms decision-making
              </p>
              <Link 
                href="/#features"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium text-sm border border-neutral-700"
              >
                View Features
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </motion.div>

            {/* Use Cases */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-900/50 rounded-2xl p-6 border border-neutral-800 text-center"
            >
              <Users className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Use Cases</h3>
              <p className="text-gray-400 mb-4 text-sm">
                See how teams like yours use spaq
              </p>
              <Link 
                href="/#use-cases"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium text-sm border border-neutral-700"
              >
                View Use Cases
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-500 mb-8">
              Want to be notified when the demo is ready?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition font-medium"
              >
                Start Free Trial
              </Link>
              <Link 
                href="https://twitter.com/elcruzosym"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition font-medium border border-neutral-700"
              >
                Follow for Updates
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
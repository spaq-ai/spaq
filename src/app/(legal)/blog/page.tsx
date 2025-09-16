'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Search,
  TrendingUp,
  Zap,
  Shield,
  Code,
  Users,
  Sparkles,
  ChevronRight,
  Filter
} from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'product', name: 'Product Updates', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 6 },
    { id: 'company', name: 'Company News', count: 4 },
    { id: 'insights', name: 'Insights', count: 2 }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Introducing spaq 2.0: AI-Powered Decision Intelligence",
      excerpt: "Today we're excited to announce spaq 2.0, featuring advanced AI capabilities that learn from your team's decision patterns.",
      author: "Sarah Chen",
      authorRole: "CEO",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "product",
      featured: true,
      image: "/blog/spaq-2-0.jpg",
      tags: ["Product", "AI", "Launch"]
    },
    {
      id: 2,
      title: "How We Built Real-Time Collaboration at Scale",
      excerpt: "A deep dive into the technical challenges we solved to enable real-time decision tracking for thousands of concurrent users.",
      author: "Alex Kumar",
      authorRole: "CTO",
      date: "2025-01-10",
      readTime: "8 min read",
      category: "engineering",
      tags: ["Engineering", "Architecture", "Scale"]
    },
    {
      id: 3,
      title: "The Hidden Cost of Lost Institutional Knowledge",
      excerpt: "Our research shows companies lose $2.3M annually from repeated mistakes. Here's how to capture and leverage your team's wisdom.",
      author: "Maria Garcia",
      authorRole: "Head of AI",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "insights",
      tags: ["Research", "ROI", "Best Practices"]
    },
    {
      id: 4,
      title: "spaq Raises $15M Series A to Accelerate Growth",
      excerpt: "We're thrilled to announce our Series A funding led by Sequoia Capital to help more teams harness their collective intelligence.",
      author: "Sarah Chen",
      authorRole: "CEO",
      date: "2024-12-20",
      readTime: "3 min read",
      category: "company",
      tags: ["Funding", "Growth", "Company"]
    },
    {
      id: 5,
      title: "New: Python SDK for spaq API",
      excerpt: "Building on the success of our TypeScript SDK, we're launching comprehensive Python support for data science teams.",
      author: "Tom Wilson",
      authorRole: "Head of Product",
      date: "2024-12-15",
      readTime: "4 min read",
      category: "product",
      tags: ["SDK", "Python", "API"]
    },
    {
      id: 6,
      title: "Security Update: SOC 2 Type II Certification",
      excerpt: "We've completed our SOC 2 Type II audit, reinforcing our commitment to enterprise-grade security and compliance.",
      author: "Security Team",
      authorRole: "spaq Security",
      date: "2024-12-10",
      readTime: "3 min read",
      category: "product",
      tags: ["Security", "Compliance", "Enterprise"]
    }
  ]

  const changelog = [
    {
      version: "2.0.0",
      date: "2025-01-15",
      type: "major",
      changes: [
        "AI-powered decision intelligence engine",
        "Real-time collaboration features",
        "Advanced analytics dashboard",
        "Custom AI model training"
      ]
    },
    {
      version: "1.9.0",
      date: "2025-01-05",
      type: "minor",
      changes: [
        "Python SDK release",
        "Improved search performance",
        "New integrations: Linear, Notion",
        "Enhanced mobile experience"
      ]
    },
    {
      version: "1.8.2",
      date: "2024-12-20",
      type: "patch",
      changes: [
        "Fixed issue with Slack notifications",
        "Improved API rate limiting",
        "Better error messages",
        "Performance optimizations"
      ]
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              Blog & Updates
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Product updates, engineering insights, and thoughts on building intelligent organizations
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500 transition"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400">Filter:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition",
                    selectedCategory === category.id
                      ? "bg-purple-600 text-white"
                      : "bg-neutral-900 text-gray-400 hover:text-white border border-neutral-800"
                  )}
                >
                  {category.name}
                  <span className="ml-2 text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              {/* Featured Post */}
              {filteredPosts.filter(post => post.featured).map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <Link href={`/blog/${post.id}`} className="group">
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-medium">
                          Featured
                        </span>
                        {post.tags.map((tag, i) => (
                          <span key={i} className="text-xs text-gray-400">#{tag}</span>
                        ))}
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-purple-400 transition">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 mb-4 text-lg">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                              <span className="text-xs font-bold text-purple-400">
                                {post.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <span>{post.author}</span>
                          </div>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}

              {/* Regular Posts */}
              <div className="space-y-6">
                {filteredPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.id}`} className="group">
                      <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 hover:border-neutral-700 transition">
                        <div className="flex items-center gap-2 mb-3">
                          {post.tags.map((tag, i) => (
                            <span key={i} className="text-xs text-gray-500">#{tag}</span>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex items-center gap-4">
                            <span>{post.author}</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Changelog */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Code className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold">Changelog</h3>
                </div>
                
                <div className="space-y-4">
                  {changelog.map((release, index) => (
                    <div key={index} className="pb-4 border-b border-neutral-800 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className={cn(
                          "text-sm font-medium px-2 py-1 rounded",
                          release.type === 'major' && "bg-purple-500/20 text-purple-400",
                          release.type === 'minor' && "bg-blue-500/20 text-blue-400",
                          release.type === 'patch' && "bg-gray-500/20 text-gray-400"
                        )}>
                          v{release.version}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(release.date).toLocaleDateString()}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {release.changes.map((change, i) => (
                          <li key={i} className="text-sm text-gray-400 flex items-start">
                            <span className="text-gray-600 mr-2">•</span>
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/changelog"
                  className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition flex items-center gap-1"
                >
                  View full changelog
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20"
              >
                <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Get the latest product updates and insights delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold">Popular Tags</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Product', 'Engineering', 'AI', 'Security', 'API', 'Integration', 'Best Practices'].map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-neutral-800 hover:bg-neutral-700 rounded-full text-sm transition"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition">
              Load More Posts
              <ChevronRight className="w-4 h-4 rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
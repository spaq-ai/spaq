'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Activity,
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  Calendar,
  TrendingUp,
  Zap,
  Database,
  Globe,
  Shield,
  RefreshCw,
  Info,
  Server,
  Wifi,
  Cloud
} from 'lucide-react'
import Link from 'next/link'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function StatusPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedPeriod, setSelectedPeriod] = useState<'24h' | '7d' | '30d' | '90d'>('24h')

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const overallStatus = 'operational' // operational, degraded, partial, major

  const services = [
    {
      name: 'Web Application',
      status: 'operational',
      uptime: 99.99,
      responseTime: '45ms',
      icon: Globe
    },
    {
      name: 'API (api.spaq.ai)',
      status: 'operational',
      uptime: 99.98,
      responseTime: '23ms',
      icon: Server
    },
    {
      name: 'Real-time Sync',
      status: 'operational',
      uptime: 99.97,
      responseTime: '12ms',
      icon: Wifi
    },
    {
      name: 'AI Processing',
      status: 'operational',
      uptime: 99.95,
      responseTime: '89ms',
      icon: Zap
    },
    {
      name: 'Data Storage',
      status: 'operational',
      uptime: 100,
      responseTime: '15ms',
      icon: Database
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: 100,
      responseTime: '8ms',
      icon: Cloud
    }
  ]

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance Complete',
      date: '2025-01-28',
      time: '02:00 - 02:30 UTC',
      status: 'resolved',
      description: 'Database optimization and security patches applied successfully.',
      impact: 'none'
    },
    {
      id: 2,
      title: 'API Rate Limiting Adjustment',
      date: '2025-01-25',
      time: '14:30 UTC',
      status: 'resolved',
      description: 'Increased API rate limits for Growth tier from 1000 to 2000 requests/day.',
      impact: 'none'
    },
    {
      id: 3,
      title: 'Elevated API Response Times',
      date: '2025-01-20',
      time: '09:15 - 09:45 UTC',
      status: 'resolved',
      description: 'Temporary increase in API response times due to high traffic. Auto-scaling resolved the issue.',
      impact: 'minor'
    }
  ]

  const upcomingMaintenance = [
    {
      title: 'Database Migration',
      date: '2025-02-15',
      time: '03:00 - 04:00 UTC',
      description: 'Migration to new database infrastructure for improved performance.',
      impact: 'Read-only mode during migration'
    }
  ]

  const metrics = {
    '24h': { uptime: 100, avgResponse: '32ms', requests: '2.4M', errors: 0.01 },
    '7d': { uptime: 99.99, avgResponse: '34ms', requests: '16.8M', errors: 0.02 },
    '30d': { uptime: 99.98, avgResponse: '35ms', requests: '72M', errors: 0.03 },
    '90d': { uptime: 99.97, avgResponse: '36ms', requests: '216M', errors: 0.04 }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400 bg-green-400/20'
      case 'degraded': return 'text-yellow-400 bg-yellow-400/20'
      case 'partial': return 'text-orange-400 bg-orange-400/20'
      case 'major': return 'text-red-400 bg-red-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5" />
      case 'degraded': return <AlertCircle className="w-5 h-5" />
      case 'partial': return <AlertCircle className="w-5 h-5" />
      case 'major': return <XCircle className="w-5 h-5" />
      default: return <Info className="w-5 h-5" />
    }
  }

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
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">System Status</h1>
                    <p className="text-gray-400">Real-time status of spaq services</p>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-gray-400 mb-1">Last updated</p>
                <p className="font-mono text-sm">{currentTime.toUTCString()}</p>
              </div>
            </div>

            {/* Overall Status */}
            <div className={cn(
              "rounded-2xl p-6 border backdrop-blur-sm",
              overallStatus === 'operational' 
                ? "bg-green-500/10 border-green-500/20"
                : overallStatus === 'degraded'
                ? "bg-yellow-500/10 border-yellow-500/20"
                : "bg-red-500/10 border-red-500/20"
            )}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-lg", getStatusColor(overallStatus))}>
                    {getStatusIcon(overallStatus)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      {overallStatus === 'operational' ? 'All Systems Operational' :
                       overallStatus === 'degraded' ? 'Degraded Performance' :
                       overallStatus === 'partial' ? 'Partial Outage' :
                       'Major Outage'}
                    </h2>
                    <p className="text-gray-400">
                      {overallStatus === 'operational' 
                        ? 'All spaq services are running normally'
                        : 'Some services are experiencing issues'}
                    </p>
                  </div>
                </div>
                
                <button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition">
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>
            </div>
          </motion.div>

          {/* Metrics Overview */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Performance Metrics</h2>
              <div className="flex gap-2">
                {(['24h', '7d', '30d', '90d'] as const).map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={cn(
                      "px-3 py-1 rounded text-sm transition",
                      selectedPeriod === period
                        ? "bg-purple-600 text-white"
                        : "bg-neutral-800 text-gray-400 hover:text-white"
                    )}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-800">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">Uptime</span>
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {metrics[selectedPeriod].uptime}%
                </div>
              </div>
              
              <div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-800">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Avg Response</span>
                </div>
                <div className="text-2xl font-bold">
                  {metrics[selectedPeriod].avgResponse}
                </div>
              </div>
              
              <div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-800">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Activity className="w-4 h-4" />
                  <span className="text-sm">API Requests</span>
                </div>
                <div className="text-2xl font-bold">
                  {metrics[selectedPeriod].requests}
                </div>
              </div>
              
              <div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-800">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">Error Rate</span>
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {metrics[selectedPeriod].errors}%
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold mb-6">Service Status</h2>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-800 hover:border-neutral-700 transition"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <service.icon className="w-5 h-5 text-gray-400" />
                      <div>
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="text-sm text-gray-400">Response time: {service.responseTime}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Uptime</p>
                        <p className="font-medium">{service.uptime}%</p>
                      </div>
                      <div className={cn(
                        "px-3 py-1 rounded-full text-sm flex items-center gap-2",
                        getStatusColor(service.status)
                      )}>
                        {getStatusIcon(service.status)}
                        <span className="capitalize">{service.status}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Incidents */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold mb-6">Recent Incidents</h2>
            <div className="space-y-4">
              {recentIncidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        {incident.status === 'resolved' ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-yellow-400" />
                        )}
                        {incident.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {incident.date} • {incident.time}
                      </p>
                    </div>
                    <span className={cn(
                      "text-xs px-2 py-1 rounded",
                      incident.impact === 'none' 
                        ? "bg-gray-500/20 text-gray-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    )}>
                      {incident.impact === 'none' ? 'No Impact' : 'Minor Impact'}
                    </span>
                  </div>
                  <p className="text-gray-300">{incident.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Maintenance */}
          {upcomingMaintenance.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold mb-6">Scheduled Maintenance</h2>
              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                {upcomingMaintenance.map((maintenance, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Calendar className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{maintenance.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">
                        {maintenance.date} • {maintenance.time}
                      </p>
                      <p className="text-gray-300">{maintenance.description}</p>
                      <p className="text-sm text-blue-400 mt-2">Impact: {maintenance.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Subscribe to Updates */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/20">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to status updates and get notified about scheduled maintenance, 
                incidents, and service improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
                />
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                You can also follow <Link href="https://twitter.com/spaq_ai" className="text-purple-400 hover:text-purple-300">@spaq_ai</Link> for updates
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
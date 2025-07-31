'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Activity,
  BarChart3,
  PieChart,
  Calendar,
  Download,
  Filter,
  ChevronDown,
  Brain,
  Link2,
  Zap,
  Target
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, PieChart as RePieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { cn } from '@/lib/utils'

const performanceData = [
  { month: 'Jan', decisions: 120, accuracy: 89, time: 4.2 },
  { month: 'Feb', decisions: 145, accuracy: 91, time: 3.8 },
  { month: 'Mar', decisions: 168, accuracy: 88, time: 4.1 },
  { month: 'Apr', decisions: 192, accuracy: 93, time: 3.5 },
  { month: 'May', decisions: 210, accuracy: 92, time: 3.6 },
  { month: 'Jun', decisions: 235, accuracy: 94, time: 3.2 },
]

const categoryData = [
  { name: 'Technical', value: 35, color: '#8B5CF6' },
  { name: 'Product', value: 28, color: '#10B981' },
  { name: 'Design', value: 22, color: '#F59E0B' },
  { name: 'Business', value: 15, color: '#3B82F6' },
]

const teamPerformance = [
  { subject: 'Speed', A: 86, B: 78, fullMark: 100 },
  { subject: 'Accuracy', A: 92, B: 88, fullMark: 100 },
  { subject: 'Collaboration', A: 88, B: 85, fullMark: 100 },
  { subject: 'Documentation', A: 79, B: 82, fullMark: 100 },
  { subject: 'Impact', A: 94, B: 89, fullMark: 100 },
]

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('last30days')
  const [activeMetric, setActiveMetric] = useState('decisions')

  const metrics = [
    {
      title: 'Total Decisions',
      value: '1,284',
      change: '+12%',
      trend: 'up',
      icon: Brain,
      color: 'purple'
    },
    {
      title: 'Active Chains',
      value: '47',
      change: '+5%',
      trend: 'up',
      icon: Link2,
      color: 'green'
    },
    {
      title: 'Avg. Decision Time',
      value: '3.2h',
      change: '-18%',
      trend: 'down',
      icon: Clock,
      color: 'blue'
    },
    {
      title: 'Team Velocity',
      value: '92%',
      change: '+7%',
      trend: 'up',
      icon: Zap,
      color: 'amber'
    },
  ]

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
            <p className="text-gray-400">Track your team's decision-making performance</p>
          </div>
          <div className="flex items-center gap-3">
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
            >
              <option value="last7days">Last 7 days</option>
              <option value="last30days">Last 30 days</option>
              <option value="last90days">Last 90 days</option>
              <option value="last12months">Last 12 months</option>
            </select>
            <button className="p-2 bg-neutral-900 border border-neutral-800 rounded-lg hover:bg-neutral-800 transition">
              <Filter className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition flex items-center gap-2 text-white">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center",
                metric.color === 'purple' && "bg-purple-500/20",
                metric.color === 'green' && "bg-green-500/20",
                metric.color === 'blue' && "bg-blue-500/20",
                metric.color === 'amber' && "bg-amber-500/20"
              )}>
                <metric.icon className={cn(
                  "w-6 h-6",
                  metric.color === 'purple' && "text-purple-400",
                  metric.color === 'green' && "text-green-400",
                  metric.color === 'blue' && "text-blue-400",
                  metric.color === 'amber' && "text-amber-400"
                )} />
              </div>
              <div className={cn(
                "flex items-center gap-1 text-sm",
                metric.trend === 'up' ? "text-green-400" : "text-red-400"
              )}>
                <TrendingUp className={cn(
                  "w-4 h-4",
                  metric.trend === 'down' && "rotate-180"
                )} />
                <span>{metric.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
            <p className="text-sm text-gray-400">{metric.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Performance Over Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 bg-neutral-900 rounded-xl border border-neutral-800 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Performance Over Time</h2>
            <div className="flex gap-2">
              {['decisions', 'accuracy', 'time'].map((metric) => (
                <button
                  key={metric}
                  onClick={() => setActiveMetric(metric)}
                  className={cn(
                    "px-3 py-1 rounded-lg text-sm transition",
                    activeMetric === metric
                      ? "bg-purple-500/20 text-purple-400 border border-purple-500/20"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {metric.charAt(0).toUpperCase() + metric.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="#A1A1AA" />
                <YAxis stroke="#A1A1AA" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(17, 17, 17, 0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey={activeMetric} 
                  stroke="#8B5CF6" 
                  fillOpacity={1} 
                  fill="url(#colorMetric)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Decision Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-neutral-900 rounded-xl border border-neutral-800 p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Decision Categories</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RePieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(17, 17, 17, 0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                  }}
                />
              </RePieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {categoryData.map((category) => (
              <div key={category.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: category.color }}
                />
                <span className="text-sm text-gray-400">{category.name}</span>
                <span className="text-sm text-white ml-auto">{category.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team Performance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-neutral-900 rounded-xl border border-neutral-800 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Team Performance Comparison</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-sm text-gray-400">Current Period</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-500" />
              <span className="text-sm text-gray-400">Previous Period</span>
            </div>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={teamPerformance}>
              <PolarGrid stroke="rgba(255,255,255,0.1)" />
              <PolarAngleAxis dataKey="subject" stroke="#A1A1AA" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#A1A1AA" />
              <Radar name="Current" dataKey="A" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
              <Radar name="Previous" dataKey="B" stroke="#6B7280" fill="#6B7280" fillOpacity={0.6} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(17, 17, 17, 0.9)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Top Contributors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 bg-neutral-900 rounded-xl border border-neutral-800 p-6"
      >
        <h2 className="text-xl font-semibold text-white mb-6">Top Contributors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Sarah Chen', decisions: 142, accuracy: 94, avatar: 'SC' },
            { name: 'Mike Rodriguez', decisions: 128, accuracy: 91, avatar: 'MR' },
            { name: 'Lisa Wang', decisions: 115, accuracy: 89, avatar: 'LW' },
          ].map((contributor, i) => (
            <div key={contributor.name} className="flex items-center gap-4 p-4 rounded-lg border border-neutral-800 hover:bg-neutral-800/50 transition">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {contributor.avatar}
                </div>
                <div className={cn(
                  "absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                  i === 0 && "bg-yellow-500 text-black",
                  i === 1 && "bg-gray-400 text-black",
                  i === 2 && "bg-amber-600 text-white"
                )}>
                  {i + 1}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white">{contributor.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{contributor.decisions} decisions</span>
                  <span>{contributor.accuracy}% accuracy</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Brain, Link2, TrendingUp, Users, Clock, Activity, Sparkles, ArrowUpRight, ArrowDownRight, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { cn } from '@/lib/utils'

const chartData = [
  { name: 'Mon', queries: 45, chains: 12, events: 67 },
  { name: 'Tue', queries: 52, chains: 18, events: 82 },
  { name: 'Wed', queries: 48, chains: 15, events: 73 },
  { name: 'Thu', queries: 61, chains: 22, events: 91 },
  { name: 'Fri', queries: 58, chains: 20, events: 85 },
  { name: 'Sat', queries: 32, chains: 8, events: 45 },
  { name: 'Sun', queries: 28, chains: 6, events: 38 },
]

export default function DashboardPage() {
  const router = useRouter()
  
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );

  const items = [
    {
      title: "Total Chains",
      description: (
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">1,284</span>
          <span className="text-xs text-green-500 flex items-center">
            <ArrowUpRight className="w-3 h-3" />
            12%
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 to-purple-50 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData.slice(-4)}>
              <defs>
                <linearGradient id="colorChains" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="chains" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorChains)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ),
      className: "md:col-span-2",
      icon: <Link2 className="h-4 w-4 text-purple-500" />,
    },
    {
      title: "Agent Queries Today",
      description: (
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">2,847</span>
          <span className="text-xs text-green-500 flex items-center">
            <ArrowUpRight className="w-3 h-3" />
            23%
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-100 dark:from-green-900/20 dark:to-green-800/20 to-green-50 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line type="monotone" dataKey="queries" stroke="#10B981" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ),
      className: "md:col-span-1",
      icon: <Brain className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Time Saved This Week",
      description: (
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">28.5h</span>
          <span className="text-xs text-green-500 flex items-center">
            <ArrowUpRight className="w-3 h-3" />
            18%
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 to-blue-50 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData.slice(-4)}>
              <defs>
                <linearGradient id="colorTime" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="events" stroke="#3B82F6" fillOpacity={1} fill="url(#colorTime)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ),
      className: "md:col-span-1",
      icon: <Clock className="h-4 w-4 text-blue-500" />,
    },
    {
      title: "Active Decision Flows",
      description: (
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">47</span>
          <span className="text-xs text-amber-500 flex items-center">
            <Activity className="w-3 h-3" />
            Live
          </span>
        </div>
      ),
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 to-amber-50 p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData.slice(-4)}>
              <Bar dataKey="events" fill="#F59E0B" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ),
      className: "md:col-span-2",
      icon: <Activity className="h-4 w-4 text-amber-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome back, John</h1>
            <p className="text-gray-400 mt-1">Here's what's happening with your decision intelligence</p>
          </div>
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/chains')}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition flex items-center gap-2 text-white text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              <span>New Chain</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/agent')}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition flex items-center gap-2 text-white text-sm font-medium border border-neutral-700"
            >
              <Brain className="w-4 h-4" />
              <span>Ask AI</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Bento Grid */}
      <BentoGrid className="mb-6">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn(item.className, "dark:bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer")}
            icon={item.icon}
          />
        ))}
      </BentoGrid>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-neutral-700 transition-colors"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Weekly Activity</h2>
            <select className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-gray-300">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="#A1A1AA" />
                <YAxis stroke="#A1A1AA" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(17, 17, 17, 0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="chains" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="events" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 hover:border-neutral-700 transition-colors"
        >
          <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { user: 'Sarah Chen', action: 'Created chain', detail: 'Authentication flow decisions', time: '2m ago', avatar: 'SC' },
              { user: 'Alex Kumar', action: 'Annotated event', detail: 'Database migration rationale', time: '15m ago', avatar: 'AK' },
              { user: 'Maria Garcia', action: 'Queried agent', detail: 'Frontend framework comparison', time: '1h ago', avatar: 'MG' },
              { user: 'Tom Wilson', action: 'Approved chain', detail: 'API versioning strategy', time: '2h ago', avatar: 'TW' },
            ].map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-800/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                  {activity.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{activity.user}</span>
                    <span className="text-gray-400 text-sm">{activity.action}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{activity.detail}</p>
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  )
}
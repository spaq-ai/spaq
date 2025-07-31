'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Key,
  Mail,
  Smartphone,
  Moon,
  Sun,
  Check,
  AlertCircle,
  Sparkles
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    decisions: true,
    mentions: true,
    updates: false
  })
  const [theme, setTheme] = useState('dark')

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'integrations', label: 'Integrations', icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-black p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your account and preferences</p>
      </motion.div>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-left",
                  activeTab === tab.id
                    ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    : "text-gray-400 hover:text-white hover:bg-neutral-900"
                )}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-neutral-900 rounded-xl border border-neutral-800 p-8"
          >
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-6">Profile Information</h2>
                  
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                        JD
                      </div>
                      <button className="absolute bottom-0 right-0 p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition">
                        <Smartphone className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">John Doe</h3>
                      <p className="text-gray-400">john@company.com</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="john@company.com"
                        className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-400 mb-2">Bio</label>
                      <textarea
                        rows={3}
                        defaultValue="Senior Software Engineer passionate about building scalable systems."
                        className="w-full px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition resize-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-8">
                    <button className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 rounded-lg transition text-white font-medium">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Notification Preferences</h2>
                
                <div className="space-y-4">
                  {[
                    { key: 'email', label: 'Email Notifications', description: 'Receive updates via email', icon: Mail },
                    { key: 'push', label: 'Push Notifications', description: 'Browser push notifications', icon: Bell },
                    { key: 'decisions', label: 'Decision Updates', description: 'When decisions are made or updated', icon: AlertCircle },
                    { key: 'mentions', label: 'Mentions', description: 'When someone mentions you', icon: User },
                    { key: 'updates', label: 'Product Updates', description: 'New features and improvements', icon: Sparkles },
                  ].map((setting) => (
                    <div key={setting.key} className="flex items-center justify-between p-4 rounded-lg border border-neutral-800 hover:bg-neutral-800/50 transition">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                          <setting.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{setting.label}</h3>
                          <p className="text-sm text-gray-400">{setting.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setNotifications(prev => ({ ...prev, [setting.key]: !prev[setting.key as keyof typeof notifications] }))}
                        className={cn(
                          "relative w-12 h-6 rounded-full transition",
                          notifications[setting.key as keyof typeof notifications] ? "bg-purple-600" : "bg-neutral-700"
                        )}
                      >
                        <div className={cn(
                          "absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform",
                          notifications[setting.key as keyof typeof notifications] && "translate-x-6"
                        )} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Security Settings</h2>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-lg border border-neutral-800">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Key className="w-5 h-5 text-purple-400" />
                        <h3 className="font-medium text-white">Change Password</h3>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition text-white text-sm">
                      Update Password
                    </button>
                  </div>

                  <div className="p-4 rounded-lg border border-neutral-800">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-400" />
                        <h3 className="font-medium text-white">Two-Factor Authentication</h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-400">
                        <Check className="w-4 h-4" />
                        Enabled
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-4">Add an extra layer of security to your account</p>
                    <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition text-white text-sm">
                      Manage 2FA
                    </button>
                  </div>

                  <div className="p-4 rounded-lg border border-neutral-800">
                    <h3 className="font-medium text-white mb-4">Active Sessions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-white">Chrome on MacOS</p>
                          <p className="text-xs text-gray-400">Current session</p>
                        </div>
                        <span className="text-xs text-green-400">Active now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Appearance</h2>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-4">Theme</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setTheme('light')}
                      className={cn(
                        "p-4 rounded-lg border-2 transition",
                        theme === 'light' 
                          ? "border-purple-500 bg-purple-500/10" 
                          : "border-neutral-800 hover:border-neutral-700"
                      )}
                    >
                      <Sun className="w-6 h-6 text-yellow-400 mb-2" />
                      <p className="text-sm font-medium">Light</p>
                    </button>
                    <button
                      onClick={() => setTheme('dark')}
                      className={cn(
                        "p-4 rounded-lg border-2 transition",
                        theme === 'dark' 
                          ? "border-purple-500 bg-purple-500/10" 
                          : "border-neutral-800 hover:border-neutral-700"
                      )}
                    >
                      <Moon className="w-6 h-6 text-purple-400 mb-2" />
                      <p className="text-sm font-medium">Dark</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-white mb-6">Integrations</h2>
                
                <div className="grid gap-4">
                  {[
                    { name: 'GitHub', connected: true, description: 'Sync decisions with pull requests' },
                    { name: 'Slack', connected: true, description: 'Get notifications in Slack' },
                    { name: 'Jira', connected: false, description: 'Link decisions to Jira tickets' },
                    { name: 'Linear', connected: false, description: 'Sync with Linear issues' },
                  ].map((integration) => (
                    <div key={integration.name} className="p-4 rounded-lg border border-neutral-800 flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">{integration.name}</h3>
                        <p className="text-sm text-gray-400">{integration.description}</p>
                      </div>
                      <button className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition",
                        integration.connected
                          ? "bg-neutral-800 hover:bg-neutral-700 text-white"
                          : "bg-purple-600 hover:bg-purple-700 text-white"
                      )}>
                        {integration.connected ? 'Manage' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
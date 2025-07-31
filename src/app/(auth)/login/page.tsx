'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Mail, Lock, ArrowRight, Eye, EyeOff, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Meteors } from '@/components/ui/meteors'
import { Button } from '@/components/ui/moving-border'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Login:', data)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-300"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo and welcome text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <Link href="/" className="inline-flex items-center justify-center space-x-2 mb-6 group">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 group-hover:opacity-75 transition"></div>
              <Image 
                src="/images/spaq-transparent.png" 
                alt="spaq" 
                width={64} 
                height={64} 
                className="w-16 h-16 relative z-10"
              />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              spaq
            </span>
          </Link>
          
          <h1 className="text-4xl font-bold mb-2">Welcome back</h1>
          <p className="text-gray-400">Enter the portal to your decision intelligence</p>
        </motion.div>

        {/* Main card with meteors effect */}
        <div className="relative">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 transform scale-[0.80] rounded-full blur-3xl opacity-20" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative shadow-xl bg-gray-900 border border-gray-800 px-8 py-10 overflow-hidden rounded-2xl"
          >
            <Meteors number={20} />
            
            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6">
              {/* Email field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  Email Address
                </label>
                <div className="relative group">
                  <input
                    {...register('email')}
                    type="email"
                    className={cn(
                      "w-full px-4 py-3 bg-black/50 border rounded-lg",
                      "placeholder:text-gray-600 text-white",
                      "transition-all duration-300",
                      "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                      "group-hover:border-gray-600",
                      errors.email ? "border-red-500" : "border-gray-700"
                    )}
                    placeholder="you@company.com"
                  />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-400 flex items-center gap-1"
                  >
                    <span className="text-xs">⚠</span> {errors.email.message}
                  </motion.p>
                )}
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-purple-400" />
                  Password
                </label>
                <div className="relative group">
                  <input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    className={cn(
                      "w-full px-4 py-3 bg-black/50 border rounded-lg pr-12",
                      "placeholder:text-gray-600 text-white",
                      "transition-all duration-300",
                      "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                      "group-hover:border-gray-600",
                      errors.password ? "border-red-500" : "border-gray-700"
                    )}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-400 flex items-center gap-1"
                  >
                    <span className="text-xs">⚠</span> {errors.password.message}
                  </motion.p>
                )}
              </div>

              {/* Remember me & forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 bg-black/50 border border-gray-700 rounded peer-checked:bg-purple-600 peer-checked:border-purple-600 transition-all">
                      <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5 hidden peer-checked:block" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-gray-300 transition">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-purple-400 hover:text-purple-300 transition">
                  Forgot password?
                </Link>
              </div>

              {/* Submit button with moving border */}
              <Button
                borderRadius="0.75rem"
                className="bg-black text-white border-neutral-800 w-full h-12 font-medium"
                borderClassName="bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)]"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Social login buttons */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-black/50 border border-gray-700 rounded-lg hover:border-gray-600 transition-all group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-gray-300">Google</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-black/50 border border-gray-700 rounded-lg hover:border-gray-600 transition-all group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-300">GitHub</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Sign up link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400">
            New to decision intelligence?{' '}
            <Link href="/register" className="text-purple-400 hover:text-purple-300 font-medium transition group">
              <span className="relative">
                Start your free trial
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </p>
        </motion.div>

        {/* Features highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>AI-Powered</span>
          </div>
          <div className="w-px h-4 bg-gray-800"></div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-green-400" />
            <span>Secure</span>
          </div>
          <div className="w-px h-4 bg-gray-800"></div>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-blue-400" />
            <span>Intelligent</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
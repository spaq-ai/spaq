'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Mail, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/moving-border'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
})

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = async (data: ForgotPasswordForm) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Reset password for:', data.email)
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-200"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="relative">
            <Image 
              src="/icon.png" 
              alt="spaq.ai" 
              width={56} 
              height={56} 
              className="w-14 h-14"
            />
            <div className="absolute inset-0 animate-pulse bg-purple-500/20 blur-xl"></div>
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            spaq
          </span>
        </Link>

        {!isSubmitted ? (
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Forgot Password?
              </h1>
              <p className="text-gray-400">
                No worries! Enter your email and we'll send you reset instructions.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    id="email"
                    {...register('email')}
                    type="email"
                    className={cn(
                      "w-full pl-10 pr-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition",
                      "placeholder:text-gray-600 text-white",
                      errors.email ? "border-red-500" : "border-gray-700"
                    )}
                    placeholder="you@company.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <span className="text-xs">⚠</span> {errors.email.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isLoading}
                borderRadius="0.5rem"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                borderClassName="bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)]"
              >
                <span className="flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Reset Instructions</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </span>
              </Button>

              {/* Back to login */}
              <div className="text-center">
                <Link 
                  href="/login" 
                  className="text-sm text-gray-400 hover:text-purple-400 transition flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
                </Link>
              </div>
            </form>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl text-center"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Check Your Email</h2>
            <p className="text-gray-400 mb-6">
              We've sent password reset instructions to your email address.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
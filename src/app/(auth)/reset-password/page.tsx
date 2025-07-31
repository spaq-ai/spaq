'use client'

import React, { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Brain, Lock, ArrowRight, Eye, EyeOff, CheckCircle, Key } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/moving-border'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

const resetPasswordSchema = z.object({
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type ResetPasswordForm = z.infer<typeof resetPasswordSchema>

function ResetPasswordContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isReset, setIsReset] = useState(false)
  
  const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
  })

  const onSubmit = async (data: ResetPasswordForm) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Reset password with token:', token, data)
    setIsReset(true)
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
              src="/images/spaq-transparent.png" 
              alt="spaq.ai" 
              width={56} 
              height={56} 
              className="w-14 h-14"
            />
            <div className="absolute inset-0 animate-pulse bg-purple-500/20 blur-xl"></div>
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            spaq.ai
          </span>
        </Link>

        {!isReset ? (
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="w-8 h-8 text-purple-400" />
              </div>
              <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Reset Your Password
              </h1>
              <p className="text-gray-400">
                Enter your new password below
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* New Password field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-300">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    id="password"
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    className={cn(
                      "w-full pl-10 pr-12 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition",
                      "placeholder:text-gray-600 text-white",
                      errors.password ? "border-red-500" : "border-gray-700"
                    )}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <span className="text-xs">⚠</span> {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2 text-gray-300">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    id="confirmPassword"
                    {...register('confirmPassword')}
                    type={showConfirmPassword ? 'text' : 'password'}
                    className={cn(
                      "w-full pl-10 pr-12 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition",
                      "placeholder:text-gray-600 text-white",
                      errors.confirmPassword ? "border-red-500" : "border-gray-700"
                    )}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <span className="text-xs">⚠</span> {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Password requirements */}
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <p className="text-sm text-gray-300 mb-2">Password must contain:</p>
                <ul className="space-y-1 text-xs text-gray-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    At least 8 characters
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    One uppercase letter
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    One lowercase letter
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    One number
                  </li>
                </ul>
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
                      <span>Resetting...</span>
                    </>
                  ) : (
                    <>
                      <span>Reset Password</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </span>
              </Button>
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
            <h2 className="text-2xl font-bold mb-2">Password Reset Successful!</h2>
            <p className="text-gray-400 mb-6">
              Your password has been reset successfully. You can now log in with your new password.
            </p>
            <Link href="/login">
              <Button
                borderRadius="0.5rem"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-medium"
                borderClassName="bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)]"
              >
                <span className="flex items-center gap-2">
                  Go to Login
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
    </div>}>
      <ResetPasswordContent />
    </Suspense>
  )
}
'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Brain, Mail, ArrowRight, CheckCircle, RefreshCw, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/moving-border'
import Image from 'next/image'

function VerifyEmailContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  
  const [verificationState, setVerificationState] = useState<'verifying' | 'success' | 'error'>('verifying')
  const [resendLoading, setResendLoading] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)

  useEffect(() => {
    // Simulate verification process
    const verifyEmail = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000))
      // Simulate random success/failure for demo
      setVerificationState(Math.random() > 0.3 ? 'success' : 'error')
    }
    
    if (token) {
      verifyEmail()
    } else {
      setVerificationState('error')
    }
  }, [token])

  const handleResend = async () => {
    setResendLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResendSuccess(true)
    setResendLoading(false)
    setTimeout(() => setResendSuccess(false), 3000)
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
            spaq.ai
          </span>
        </Link>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
          {verificationState === 'verifying' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-3 border-purple-500 border-t-transparent rounded-full animate-spin" />
              </div>
              <h1 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Verifying Your Email
              </h1>
              <p className="text-gray-400">
                Please wait while we verify your email address...
              </p>
            </motion.div>
          )}

          {verificationState === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Email Verified!</h1>
              <p className="text-gray-400 mb-6">
                Your email has been successfully verified. You can now log in to your account.
              </p>
              <Link href="/login">
                <Button
                  borderRadius="0.5rem"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-medium"
                  borderClassName="bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)]"
                >
                  <span className="flex items-center gap-2">
                    Continue to Login
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </motion.div>
          )}

          {verificationState === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Verification Failed</h1>
              <p className="text-gray-400 mb-6">
                {token 
                  ? "We couldn't verify your email. The link may have expired or is invalid."
                  : "No verification token found. Please check your email for the verification link."
                }
              </p>
              
              {!resendSuccess ? (
                <div className="space-y-3">
                  <Button
                    onClick={handleResend}
                    disabled={resendLoading}
                    borderRadius="0.5rem"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    borderClassName="bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)]"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {resendLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <RefreshCw className="w-4 h-4" />
                          <span>Resend Verification Email</span>
                        </>
                      )}
                    </span>
                  </Button>
                  
                  <Link 
                    href="/login" 
                    className="block text-sm text-gray-400 hover:text-purple-400 transition"
                  >
                    Back to Login
                  </Link>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3"
                >
                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <p className="text-sm text-green-400 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Verification email sent! Check your inbox.
                    </p>
                  </div>
                  <Link 
                    href="/login" 
                    className="block text-sm text-gray-400 hover:text-purple-400 transition"
                  >
                    Back to Login
                  </Link>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
    </div>}>
      <VerifyEmailContent />
    </Suspense>
  )
}
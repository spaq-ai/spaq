'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ChainCanvasProps {
  children: ReactNode
  connections: Array<{ from: string; to: string }>
}

export default function ChainCanvas({ children, connections }: ChainCanvasProps) {
  return (
    <div className="absolute inset-0 bg-background">
      {/* Grid background */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => (
          <motion.line
            key={`${connection.from}-${connection.to}`}
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            stroke="url(#gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5B21B6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Event cards */}
      <div className="relative w-full h-full">
        {children}
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-4 right-4 glass rounded-lg p-2 space-y-2">
        <button className="p-2 hover:bg-white/10 rounded transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className="p-2 hover:bg-white/10 rounded transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <button className="p-2 hover:bg-white/10 rounded transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>
      </div>
    </div>
  )
}
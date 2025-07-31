'use client'

import { useDraggable } from '@dnd-kit/core'
import { motion } from 'framer-motion'
import { GripVertical } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EventCardProps {
  event: {
    id: string
    contextSnippet: string
    choice?: string
    position: { x: number; y: number }
    status: 'pending' | 'in_review' | 'approved'
  }
  isSelected: boolean
  onClick: () => void
}

export default function EventCard({ event, isSelected, onClick }: EventCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: event.id,
  })

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : {
    left: `${event.position.x}px`,
    top: `${event.position.y}px`,
  }

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      className={cn(
        "absolute w-64 card gradient-border cursor-pointer",
        isSelected && "ring-2 ring-primary glow"
      )}
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Drag handle */}
      <div
        {...listeners}
        {...attributes}
        className="absolute -top-2 left-1/2 -translate-x-1/2 p-1 glass rounded cursor-move"
      >
        <GripVertical className="w-4 h-4 text-text-secondary" />
      </div>

      {/* Connection ports */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-2 border-background" />
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-2 border-background" />

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className={cn(
            "px-2 py-1 text-xs rounded-full",
            event.status === 'approved' && "bg-accent/20 text-accent",
            event.status === 'in_review' && "bg-yellow-500/20 text-yellow-500",
            event.status === 'pending' && "bg-gray-500/20 text-gray-500"
          )}>
            {event.status}
          </span>
        </div>
        
        <p className="text-sm text-text-secondary line-clamp-3">
          {event.contextSnippet}
        </p>
        
        {event.choice && (
          <div className="pt-2 border-t border-white/10">
            <p className="text-sm font-medium text-primary-light">
              → {event.choice}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
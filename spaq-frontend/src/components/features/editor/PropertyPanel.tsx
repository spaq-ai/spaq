'use client'

import { motion } from 'framer-motion'
import { X, Tag, Calendar, User } from 'lucide-react'
import { useState } from 'react'

interface PropertyPanelProps {
  event: {
    id: string
    contextSnippet: string
    choice?: string
    rationale?: string
    status: 'pending' | 'in_review' | 'approved'
    tags: string[]
    timestamp: Date
  }
  onUpdate: (event: any) => void
  onClose: () => void
}

export default function PropertyPanel({ event, onUpdate, onClose }: PropertyPanelProps) {
  const [editedEvent, setEditedEvent] = useState(event)
  const [newTag, setNewTag] = useState('')

  const handleSave = () => {
    onUpdate(editedEvent)
  }

  const addTag = () => {
    if (newTag && !editedEvent.tags.includes(newTag)) {
      setEditedEvent({
        ...editedEvent,
        tags: [...editedEvent.tags, newTag]
      })
      setNewTag('')
    }
  }

  const removeTag = (tag: string) => {
    setEditedEvent({
      ...editedEvent,
      tags: editedEvent.tags.filter(t => t !== tag)
    })
  }

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      className="w-96 glass border-l border-white/10 p-6 overflow-y-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Event Properties</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-lg transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Status */}
        <div>
          <label className="block text-sm font-medium mb-2">Status</label>
          <select
            value={editedEvent.status}
            onChange={(e) => setEditedEvent({ ...editedEvent, status: e.target.value as any })}
            className="w-full px-4 py-2 bg-surface/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition"
          >
            <option value="pending">Pending</option>
            <option value="in_review">In Review</option>
            <option value="approved">Approved</option>
          </select>
        </div>

        {/* Context */}
        <div>
          <label className="block text-sm font-medium mb-2">Context</label>
          <textarea
            value={editedEvent.contextSnippet}
            onChange={(e) => setEditedEvent({ ...editedEvent, contextSnippet: e.target.value })}
            className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition resize-none"
            rows={4}
          />
        </div>

        {/* Choice */}
        <div>
          <label className="block text-sm font-medium mb-2">Choice</label>
          <input
            type="text"
            value={editedEvent.choice || ''}
            onChange={(e) => setEditedEvent({ ...editedEvent, choice: e.target.value })}
            className="w-full px-4 py-2 bg-surface/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition"
            placeholder="What was decided?"
          />
        </div>

        {/* Rationale */}
        <div>
          <label className="block text-sm font-medium mb-2">Rationale</label>
          <textarea
            value={editedEvent.rationale || ''}
            onChange={(e) => setEditedEvent({ ...editedEvent, rationale: e.target.value })}
            className="w-full px-4 py-3 bg-surface/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition resize-none"
            rows={4}
            placeholder="Why was this decision made?"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium mb-2">Tags</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {editedEvent.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/20 rounded-full text-sm flex items-center space-x-1"
              >
                <span>{tag}</span>
                <button
                  onClick={() => removeTag(tag)}
                  className="hover:text-red-400 transition"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTag()}
              className="flex-1 px-4 py-2 bg-surface/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition"
              placeholder="Add tag..."
            />
            <button
              onClick={addTag}
              className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition"
            >
              <Tag className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Metadata */}
        <div className="space-y-2 text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{editedEvent.timestamp.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>John Doe</span>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-white/10">
          <button
            onClick={handleSave}
            className="w-full btn-primary"
          >
            Save Changes
          </button>
        </div>
      </div>
    </motion.div>
  )
}
'use client'

import React, { useState, useCallback, useMemo, useEffect } from 'react'
import ReactFlow, {
  Node,
  Edge,
  Connection,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  NodeChange,
  EdgeChange,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  Panel,
  ReactFlowProvider,
  useReactFlow,
  Handle,
  Position,
  NodeProps,
  EdgeProps,
  getBezierPath,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Brain, 
  GitBranch, 
  Plus, 
  Save, 
  Play, 
  Sparkles,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Clock,
  Edit3,
  Trash2,
  Link2,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Target,
  Hash,
  Calendar,
  User,
  Flag,
  Lightbulb,
  Search,
  Filter,
  Share2,
  ChevronRight,
  X,
  Tag,
  Eye,
  EyeOff,
  Lock,
  LockOpen
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/moving-border'
import { Input } from '@/components/ui/input'

interface ChainNode extends Node {
  data: {
    event: string
    choice: string
    rationale: string
    status: 'pending' | 'active' | 'completed' | 'failed'
    timestamp: Date
    author: string
    comments: string[]
    confidence: number
    tags: string[]
    contextSnippet: string
    hidden?: boolean
    locked?: boolean
  }
}

// Custom Decision Card Component with smooth interactions
const CustomNode = ({ id, data, selected }: NodeProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState(data)

  const statusColors = {
    pending: 'border-gray-600 bg-gray-900/50',
    active: 'border-purple-500 bg-purple-900/30 shadow-[0_0_30px_rgba(139,92,246,0.3)]',
    completed: 'border-green-500 bg-green-900/30',
    failed: 'border-red-500 bg-red-900/30',
  }

  const statusIcons = {
    pending: <Clock className="w-4 h-4" />,
    active: <Sparkles className="w-4 h-4 animate-pulse" />,
    completed: <CheckCircle2 className="w-4 h-4" />,
    failed: <AlertCircle className="w-4 h-4" />,
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'relative px-6 py-4 rounded-xl border-2 backdrop-blur-sm transition-all duration-300',
        statusColors[data.status as keyof typeof statusColors],
        selected && 'ring-2 ring-purple-400 ring-offset-2 ring-offset-black',
        data.hidden && 'opacity-40',
        data.locked && 'border-amber-500/50'
      )}
      style={{ minWidth: '280px' }}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!w-3 !h-3 !bg-purple-500 !border-2 !border-black hover:!bg-purple-400 transition-colors"
      />
      
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            {statusIcons[data.status as keyof typeof statusIcons]}
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              {data.status}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                // Toggle hidden state - we'll pass this up through a callback
                const event = new CustomEvent('toggleNodeVisibility', { 
                  detail: { nodeId: id } 
                });
                window.dispatchEvent(event);
              }}
              className="p-1 hover:bg-white/10 rounded transition"
              title={data.hidden ? "Show decision" : "Hide decision"}
            >
              {data.hidden ? (
                <EyeOff className="w-3 h-3 text-gray-400" />
              ) : (
                <Eye className="w-3 h-3 text-gray-400" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                // Toggle locked state
                const event = new CustomEvent('toggleNodeLock', { 
                  detail: { nodeId: id } 
                });
                window.dispatchEvent(event);
              }}
              className="p-1 hover:bg-white/10 rounded transition"
              title={data.locked ? "Unlock decision" : "Lock decision"}
            >
              {data.locked ? (
                <Lock className="w-3 h-3 text-amber-400" />
              ) : (
                <LockOpen className="w-3 h-3 text-gray-400" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsEditing(!isEditing)}
              className="p-1 hover:bg-white/10 rounded transition"
              disabled={data.locked}
              title={data.locked ? "Decision is locked" : "Edit decision"}
            >
              <Edit3 className={cn("w-3 h-3", data.locked ? "text-gray-600" : "text-gray-400")} />
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {isEditing ? (
            <motion.div
              key="editing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2"
            >
              <input
                value={editData.event}
                onChange={(e) => setEditData({ ...editData, event: e.target.value })}
                className="w-full px-2 py-1 bg-black/50 border border-gray-700 rounded text-sm focus:outline-none focus:border-purple-500"
                placeholder="Event"
              />
              <input
                value={editData.choice}
                onChange={(e) => setEditData({ ...editData, choice: e.target.value })}
                className="w-full px-2 py-1 bg-black/50 border border-gray-700 rounded text-sm focus:outline-none focus:border-purple-500"
                placeholder="Decision"
              />
              <textarea
                value={editData.rationale}
                onChange={(e) => setEditData({ ...editData, rationale: e.target.value })}
                className="w-full px-2 py-1 bg-black/50 border border-gray-700 rounded text-sm focus:outline-none focus:border-purple-500 resize-none"
                placeholder="Rationale"
                rows={2}
              />
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    // Save logic here
                    setIsEditing(false)
                  }}
                  className="flex-1 px-2 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditData(data)
                    setIsEditing(false)
                  }}
                  className="flex-1 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs transition"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="display"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2"
            >
              <h3 className="font-semibold text-white text-sm">{data.event}</h3>
              <p className="text-sm text-purple-300">
                <span className="text-gray-400">Decision:</span> {data.choice}
              </p>
              <p className="text-xs text-gray-300 italic">"{data.rationale}"</p>
              
              {/* Metadata */}
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>{data.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(data.timestamp).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Confidence meter */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">Confidence:</span>
                <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${data.confidence}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-purple-400"
                  />
                </div>
                <span className="text-xs text-purple-400">{data.confidence}%</span>
              </div>

              {/* Tags */}
              {data.tags && data.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {data.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Comments indicator */}
              {data.comments && data.comments.length > 0 && (
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <MessageSquare className="w-3 h-3" />
                  <span>{data.comments.length} comments</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-3 !h-3 !bg-purple-500 !border-2 !border-black hover:!bg-purple-400 transition-colors"
      />
    </motion.div>
  )
}

// Custom Edge Component with animated flow
const CustomEdge = ({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  selected,
}: EdgeProps) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  })

  return (
    <>
      <path
        className={cn(
          "fill-none stroke-2",
          selected ? "stroke-purple-400" : "stroke-gray-700"
        )}
        d={edgePath}
      />
      <path
        className="fill-none stroke-purple-400 stroke-2"
        d={edgePath}
        strokeDasharray="5 5"
        style={{
          animation: 'dash 1s linear infinite',
        }}
      />
    </>
  )
}

// Decision card types - defined outside component to prevent recreation
const nodeTypes = {
  custom: CustomNode,
}

// Edge types - defined outside component to prevent recreation
const edgeTypes = {
  custom: CustomEdge,
}

function ChainEditor() {
  const [nodes, setNodes] = useState<ChainNode[]>([
    {
      id: '1',
      type: 'custom',
      position: { x: 250, y: 50 },
      data: {
        event: 'Initial API Architecture Discussion',
        choice: 'RESTful API with GraphQL for complex queries',
        rationale: 'Balances simplicity for CRUD operations with flexibility for data relationships',
        status: 'completed',
        timestamp: new Date('2024-01-15'),
        author: 'Sarah Chen',
        comments: ['Great choice!', 'Consider adding WebSocket support'],
        confidence: 95,
        tags: ['architecture', 'backend'],
        contextSnippet: 'Team discussed whether to use REST, GraphQL, or gRPC for the new platform API layer...'
      },
    },
    {
      id: '2',
      type: 'custom',
      position: { x: 450, y: 200 },
      data: {
        event: 'Authentication Strategy Decision',
        choice: 'OAuth 2.0 with JWT tokens',
        rationale: 'Industry standard, supports SSO, stateless authentication',
        status: 'completed',
        timestamp: new Date('2024-01-20'),
        author: 'Mike Rodriguez',
        comments: [],
        confidence: 88,
        tags: ['security', 'auth'],
        contextSnippet: 'Security team evaluated different authentication approaches including session-based, JWT, and OAuth...'
      },
    },
    {
      id: '3',
      type: 'custom',
      position: { x: 250, y: 350 },
      data: {
        event: 'Database Technology Choice',
        choice: 'PostgreSQL with Redis caching',
        rationale: 'ACID compliance for critical data, Redis for performance',
        status: 'active',
        timestamp: new Date('2024-01-25'),
        author: 'Lisa Wang',
        comments: ['Consider read replicas'],
        confidence: 92,
        tags: ['database', 'infrastructure'],
        contextSnippet: 'Database selection meeting comparing PostgreSQL, MySQL, MongoDB, and DynamoDB for main data store...'
      },
    },
    {
      id: '4',
      type: 'custom',
      position: { x: 650, y: 350 },
      data: {
        event: 'Frontend Framework Selection',
        choice: 'Next.js with TypeScript',
        rationale: 'Type safety, SSR/SSG capabilities, excellent DX',
        status: 'pending',
        timestamp: new Date('2024-02-01'),
        author: 'Alex Kumar',
        comments: [],
        confidence: 78,
        tags: ['frontend', 'tooling'],
        contextSnippet: 'Frontend team evaluated React, Vue, Angular, and Svelte for the new dashboard...'
      },
    },
    {
      id: '5',
      type: 'custom',
      position: { x: 850, y: 200 },
      data: {
        event: 'CI/CD Pipeline Decision',
        choice: 'GitHub Actions with ArgoCD',
        rationale: 'Native GitHub integration, GitOps workflow support',
        status: 'completed',
        timestamp: new Date('2024-01-18'),
        author: 'Tom Davis',
        comments: ['Add security scanning'],
        confidence: 85,
        tags: ['devops', 'automation'],
        contextSnippet: 'DevOps team compared Jenkins, CircleCI, GitHub Actions, and GitLab CI for build automation...'
      },
    },
    {
      id: '6',
      type: 'custom',
      position: { x: 650, y: 50 },
      data: {
        event: 'Monitoring Stack Selection',
        choice: 'Prometheus + Grafana + Loki',
        rationale: 'Open source, kubernetes native, unified observability',
        status: 'active',
        timestamp: new Date('2024-01-28'),
        author: 'Maya Patel',
        comments: ['Include distributed tracing'],
        confidence: 90,
        tags: ['monitoring', 'observability'],
        contextSnippet: 'SRE team evaluated monitoring solutions including DataDog, New Relic, and open source stacks...'
      },
    },
    {
      id: '7',
      type: 'custom',
      position: { x: 50, y: 200 },
      data: {
        event: 'Microservices vs Monolithic',
        choice: 'Start with modular monolith',
        rationale: 'Faster initial development, easier to split later',
        status: 'completed',
        timestamp: new Date('2024-01-10'),
        author: 'James Wilson',
        comments: ['Good pragmatic choice', 'Plan for future split'],
        confidence: 82,
        tags: ['architecture', 'strategy'],
        contextSnippet: 'Architecture review board discussed starting with microservices vs monolithic approach...'
      },
    },
    {
      id: '8',
      type: 'custom',
      position: { x: 450, y: 500 },
      data: {
        event: 'State Management Library',
        choice: 'Zustand for React state',
        rationale: 'Simpler than Redux, better TypeScript support, smaller bundle',
        status: 'completed',
        timestamp: new Date('2024-02-05'),
        author: 'Emma Zhang',
        comments: ['Much cleaner than Redux'],
        confidence: 88,
        tags: ['frontend', 'state-management'],
        contextSnippet: 'Frontend team benchmarked Redux, MobX, Zustand, and Valtio for client state management...'
      },
    },
    {
      id: '9',
      type: 'custom',
      position: { x: 850, y: 500 },
      data: {
        event: 'Message Queue Selection',
        choice: 'Apache Kafka',
        rationale: 'High throughput, proven at scale, good ecosystem',
        status: 'pending',
        timestamp: new Date('2024-02-10'),
        author: 'Carlos Mendez',
        comments: ['Consider managed service'],
        confidence: 75,
        tags: ['infrastructure', 'messaging'],
        contextSnippet: 'Backend team evaluated RabbitMQ, Kafka, AWS SQS, and Redis Streams for async processing...'
      },
    },
    {
      id: '10',
      type: 'custom',
      position: { x: 50, y: 500 },
      data: {
        event: 'Testing Strategy Framework',
        choice: 'Jest + React Testing Library + Playwright',
        rationale: 'Covers unit, integration, and E2E testing needs',
        status: 'active',
        timestamp: new Date('2024-02-08'),
        author: 'Rachel Green',
        comments: ['Add visual regression tests'],
        confidence: 91,
        tags: ['testing', 'quality'],
        contextSnippet: 'QA team defined testing pyramid and selected tools for each testing layer...'
      },
    },
    {
      id: '11',
      type: 'custom',
      position: { x: 250, y: 650 },
      data: {
        event: 'Cloud Provider Selection',
        choice: 'AWS with multi-region setup',
        rationale: 'Best service variety, team expertise, enterprise support',
        status: 'completed',
        timestamp: new Date('2024-01-05'),
        author: 'Steve Kim',
        comments: ['Negotiate enterprise discount'],
        confidence: 94,
        tags: ['infrastructure', 'cloud'],
        contextSnippet: 'CTO and infrastructure team compared AWS, GCP, and Azure for cloud hosting...'
      },
    },
    {
      id: '12',
      type: 'custom',
      position: { x: 650, y: 650 },
      data: {
        event: 'API Versioning Strategy',
        choice: 'URL path versioning (v1, v2)',
        rationale: 'Most explicit, easier for clients to understand',
        status: 'completed',
        timestamp: new Date('2024-01-22'),
        author: 'David Lee',
        comments: ['Document deprecation policy'],
        confidence: 86,
        tags: ['api', 'versioning'],
        contextSnippet: 'API design committee debated header vs URL vs query parameter versioning approaches...'
      },
    },
  ])

  const [edges, setEdges] = useState<Edge[]>([
    { id: 'e1-2', source: '1', target: '2', type: 'custom' },
    { id: 'e1-5', source: '1', target: '5', type: 'custom' },
    { id: 'e1-12', source: '1', target: '12', type: 'custom' },
    { id: 'e2-3', source: '2', target: '3', type: 'custom' },
    { id: 'e2-4', source: '2', target: '4', type: 'custom' },
    { id: 'e5-6', source: '5', target: '6', type: 'custom' },
    { id: 'e7-1', source: '7', target: '1', type: 'custom' },
    { id: 'e7-3', source: '7', target: '3', type: 'custom' },
    { id: 'e4-8', source: '4', target: '8', type: 'custom' },
    { id: 'e3-9', source: '3', target: '9', type: 'custom' },
    { id: 'e8-10', source: '8', target: '10', type: 'custom' },
    { id: 'e7-11', source: '7', target: '11', type: 'custom' },
    { id: 'e11-3', source: '11', target: '3', type: 'custom' },
    { id: 'e11-9', source: '11', target: '9', type: 'custom' },
  ])

  const [selectedNode, setSelectedNode] = useState<ChainNode | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  )

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  )

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, type: 'custom' }, eds)),
    []
  )

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node as ChainNode)
  }, [])

  const addNewDecision = () => {
    const newDecision: ChainNode = {
      id: `${Date.now()}`,
      type: 'custom',
      position: { x: Math.random() * 500 + 100, y: Math.random() * 400 + 100 },
      data: {
        event: 'New Decision Point',
        choice: 'Your decision here',
        rationale: 'Explain your reasoning',
        status: 'pending',
        timestamp: new Date(),
        author: 'Current User',
        comments: [],
        confidence: 50,
        tags: [],
        contextSnippet: 'Describe the context and discussion that led to this decision...'
      },
    }
    setNodes((nds) => [...nds, newDecision])
  }

  // Event listeners for node visibility and lock toggles
  useEffect(() => {
    const handleToggleVisibility = (event: Event) => {
      const customEvent = event as CustomEvent
      const nodeId = customEvent.detail.nodeId
      
      setNodes((nds) => 
        nds.map(node => 
          node.id === nodeId 
            ? { ...node, data: { ...node.data, hidden: !node.data.hidden } }
            : node
        )
      )
    }

    const handleToggleLock = (event: Event) => {
      const customEvent = event as CustomEvent
      const nodeId = customEvent.detail.nodeId
      
      setNodes((nds) => 
        nds.map(node => 
          node.id === nodeId 
            ? { ...node, data: { ...node.data, locked: !node.data.locked } }
            : node
        )
      )
    }

    window.addEventListener('toggleNodeVisibility', handleToggleVisibility)
    window.addEventListener('toggleNodeLock', handleToggleLock)

    return () => {
      window.removeEventListener('toggleNodeVisibility', handleToggleVisibility)
      window.removeEventListener('toggleNodeLock', handleToggleLock)
    }
  }, [])

  const filteredNodes = nodes.filter(node =>
    node.data.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
    node.data.choice.toLowerCase().includes(searchQuery.toLowerCase()) ||
    node.data.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    node.data.contextSnippet.toLowerCase().includes(searchQuery.toLowerCase())
  )


  return (
    <div className="flex h-full">
      {/* React Flow Canvas */}
      <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          className="bg-black"
          deleteKeyCode={null} // Disable delete key to prevent accidental deletions
        >
          <Background 
            variant={BackgroundVariant.Dots} 
            gap={20} 
            size={1} 
            color="#333"
          />
          <MiniMap 
            nodeColor={(node) => {
              const status = node.data?.status
              if (status === 'active') return '#8B5CF6'
              if (status === 'completed') return '#10B981'
              if (status === 'failed') return '#EF4444'
              return '#4B5563'
            }}
            className="!bg-gray-900 !border-gray-800"
            maskColor="rgba(0, 0, 0, 0.8)"
          />
          <Controls 
            className="!bg-gray-900 !border-gray-800 !shadow-xl"
            showZoom
            showFitView
            showInteractive
          />
          
          {/* Custom Panel for actions */}
          <Panel position="top-left" className="bg-transparent">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-2"
            >
              <Button
                borderRadius="0.5rem"
                className="bg-black/80 text-white border-neutral-800 px-4 py-1 text-sm font-medium min-w-[7rem]"
                borderClassName="bg-[radial-gradient(var(--purple-500)_40%,transparent_60%)]"
                onClick={addNewDecision}
              >
                <div className="flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span className="whitespace-nowrap">Add Decision</span>
                </div>
              </Button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg text-sm hover:bg-gray-800 transition flex items-center justify-center gap-2 min-w-[7rem]"
              >
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                <span className="whitespace-nowrap">AI Suggest</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg text-sm hover:bg-gray-800 transition flex items-center justify-center gap-2 min-w-[7rem]"
              >
                <Save className="w-4 h-4 text-green-400" />
                <span className="whitespace-nowrap">Save</span>
              </motion.button>
            </motion.div>
          </Panel>
        </ReactFlow>

        {/* Add custom CSS for edge animation */}
        <style jsx global>{`
          @keyframes dash {
            to {
              stroke-dashoffset: -10;
            }
          }
        `}</style>

      {/* Right Sidebar - Properties Panel */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            className="w-96 border-l border-neutral-800 bg-neutral-950 overflow-y-auto flex-shrink-0"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Decision Properties</h2>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="p-2 hover:bg-neutral-800 rounded-lg transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Locked indicator */}
              {selectedNode.data.locked && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg flex items-center gap-2"
                >
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span className="text-sm text-amber-400">This decision is locked and cannot be edited</span>
                </motion.div>
              )}

              <div className="space-y-6">
                {/* Status */}
                <div>
                  <label className="block text-sm font-medium mb-2">Status</label>
                  <select
                    value={selectedNode.data.status}
                    onChange={(e) => {
                      const updatedNode = {
                        ...selectedNode,
                        data: { ...selectedNode.data, status: e.target.value as any }
                      }
                      setSelectedNode(updatedNode)
                      setNodes(nodes.map(n => n.id === selectedNode.id ? updatedNode : n))
                    }}
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={selectedNode.data.locked}
                  >
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>

                {/* Event */}
                <div>
                  <label className="block text-sm font-medium mb-2">Decision Point</label>
                  <input
                    type="text"
                    value={selectedNode.data.event}
                    onChange={(e) => {
                      const updatedNode = {
                        ...selectedNode,
                        data: { ...selectedNode.data, event: e.target.value }
                      }
                      setSelectedNode(updatedNode)
                      setNodes(nodes.map(n => n.id === selectedNode.id ? updatedNode : n))
                    }}
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={selectedNode.data.locked}
                  />
                </div>

                {/* Context */}
                <div>
                  <label className="block text-sm font-medium mb-2">Context</label>
                  <textarea
                    value={selectedNode.data.contextSnippet}
                    onChange={(e) => {
                      const updatedNode = {
                        ...selectedNode,
                        data: { ...selectedNode.data, contextSnippet: e.target.value }
                      }
                      setSelectedNode(updatedNode)
                      setNodes(nodes.map(n => n.id === selectedNode.id ? updatedNode : n))
                    }}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    rows={4}
                    disabled={selectedNode.data.locked}
                  />
                </div>

                {/* Choice */}
                <div>
                  <label className="block text-sm font-medium mb-2">Choice</label>
                  <Input
                    type="text"
                    value={selectedNode.data.choice}
                    onChange={(e) => {
                      const updatedNode = {
                        ...selectedNode,
                        data: { ...selectedNode.data, choice: e.target.value }
                      }
                      setSelectedNode(updatedNode)
                      setNodes(nodes.map(n => n.id === selectedNode.id ? updatedNode : n))
                    }}
                    placeholder="What was decided?"
                    disabled={selectedNode.data.locked}
                  />
                </div>

                {/* Rationale */}
                <div>
                  <label className="block text-sm font-medium mb-2">Rationale</label>
                  <textarea
                    value={selectedNode.data.rationale}
                    onChange={(e) => {
                      const updatedNode = {
                        ...selectedNode,
                        data: { ...selectedNode.data, rationale: e.target.value }
                      }
                      setSelectedNode(updatedNode)
                      setNodes(nodes.map(n => n.id === selectedNode.id ? updatedNode : n))
                    }}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-purple-500 transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    rows={4}
                    placeholder="Why was this decision made?"
                    disabled={selectedNode.data.locked}
                  />
                </div>

                {/* Confidence */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Confidence: {selectedNode.data.confidence}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={selectedNode.data.confidence}
                    onChange={(e) => {
                      const updatedNode = {
                        ...selectedNode,
                        data: { ...selectedNode.data, confidence: parseInt(e.target.value) }
                      }
                      setSelectedNode(updatedNode)
                      setNodes(nodes.map(n => n.id === selectedNode.id ? updatedNode : n))
                    }}
                    className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={selectedNode.data.locked}
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium mb-2">Tags</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedNode.data.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm flex items-center gap-1"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                        <button
                          onClick={() => {
                            const updatedNode = {
                              ...selectedNode,
                              data: {
                                ...selectedNode.data,
                                tags: selectedNode.data.tags.filter(t => t !== tag)
                              }
                            }
                            setSelectedNode(updatedNode)
                            setNodes(nodes.map(n => n.id === selectedNode.id ? updatedNode : n))
                          }}
                          className="ml-1 hover:text-red-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={selectedNode.data.locked}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <Input
                    type="text"
                    placeholder="Add tag..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const value = (e.target as HTMLInputElement).value
                        if (value && !selectedNode.data.tags.includes(value)) {
                          const updatedNode = {
                            ...selectedNode,
                            data: {
                              ...selectedNode.data,
                              tags: [...selectedNode.data.tags, value]
                            }
                          }
                          setSelectedNode(updatedNode)
                          setNodes(nodes.map(n => n.id === selectedNode.id ? updatedNode : n))
                          ;(e.target as HTMLInputElement).value = ''
                        }
                      }
                    }}
                    disabled={selectedNode.data.locked}
                  />
                </div>

                {/* Author & Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Author</label>
                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{selectedNode.data.author}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date</label>
                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">
                        {new Date(selectedNode.data.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI Suggestions */}
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-purple-300">AI Suggestions</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Consider linking this to "API Design Standards" decision from last quarter
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-neutral-800 space-y-2">
                  <button className="w-full px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition">
                    Save Changes
                  </button>
                  <button 
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this decision?')) {
                        setNodes(nodes.filter(n => n.id !== selectedNode.id))
                        setEdges(edges.filter(e => e.source !== selectedNode.id && e.target !== selectedNode.id))
                        setSelectedNode(null)
                      }
                    }}
                    className="w-full px-4 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-400 transition"
                  >
                    Delete Decision
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ChainsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="h-full bg-black flex flex-col">
      {/* Header */}
      <header className="border-b border-neutral-800 p-6 backdrop-blur-xl bg-black/50 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">ReasonChain Editor</h1>
            <p className="text-gray-400">Visualize and edit your team's decision connections</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search decisions..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="p-2 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition">
              <Filter className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition flex items-center gap-2">
              <Save className="w-4 h-4" />
              <span>Save Chain</span>
            </button>
            <button className="px-4 py-2 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              <span>Run Analysis</span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main Editor */}
      <div className="flex-1 overflow-hidden">
        <ReactFlowProvider>
          <ChainEditor />
        </ReactFlowProvider>
      </div>
    </div>
  )
}
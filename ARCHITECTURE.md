# spaq.ai Architecture & Design Document

## Competitive Differentiation

### Why spaq.ai Stands Out

spaq.ai addresses a critical gap in the enterprise decision intelligence market that competitors have failed to solve effectively. Here's what makes us unique:

#### 1. **Decision-Centric vs Document-Centric**
- **Competitors**: Notion AI, Confluence, SharePoint focus on document storage and search
- **spaq.ai**: Specifically captures the *moment of decision* with context, choice, and rationale
- **Advantage**: We understand that decisions aren't documents—they're scattered across Slack threads, comments, and conversations

#### 2. **Private, Fine-Tuned AI vs Generic LLMs**
- **Competitors**: ChatGPT Enterprise, Claude for Work offer generic AI assistants
- **spaq.ai**: Trains custom models on YOUR team's specific decision patterns
- **Advantage**: Our AI understands your company's unique context, terminology, and decision-making style

#### 3. **Visual ReasonChains vs Linear Documentation**
- **Competitors**: Traditional knowledge bases present information linearly
- **spaq.ai**: Creates visual, interconnected decision graphs showing cause-and-effect
- **Advantage**: See how decisions influence each other over time, identify patterns

#### 4. **Passive Capture vs Manual Documentation**
- **Competitors**: Require manual documentation after the fact
- **spaq.ai**: Captures decisions where they happen (Slack, Teams, Docs) with minimal friction
- **Advantage**: 90% less effort to maintain organizational memory

#### 5. **Decision Intelligence vs Knowledge Management**
- **Competitors**: Store what you know
- **spaq.ai**: Understands WHY you decided
- **Advantage**: New employees learn not just policies but the reasoning behind them

### Market Positioning

| Feature | spaq.ai | Notion AI | Confluence | ChatGPT Enterprise |
|---------|---------|-----------|------------|-------------------|
| Decision Capture | ✅ Automatic | ❌ Manual | ❌ Manual | ❌ N/A |
| Custom AI Training | ✅ Per-org models | ❌ Generic | ❌ Search only | ❌ Generic |
| Reasoning Chains | ✅ Visual graphs | ❌ Linear docs | ❌ Linear docs | ❌ Chat only |
| Integration Depth | ✅ Native Slack/Teams | ⚠️ Basic | ⚠️ Basic | ⚠️ API only |
| Time to Value | ✅ 2 weeks | ❌ 3-6 months | ❌ 3-6 months | ⚠️ Immediate but shallow |

### Unique Value Propositions

1. **"Trace Every Thought™"**: We're the only platform that creates an auditable trail from question to decision to outcome

2. **Zero-Friction Adoption**: Teams already using Slack/Teams can start capturing decisions immediately without changing workflows

3. **Compound Intelligence**: Each decision captured makes the AI smarter about YOUR specific domain

4. **Decision Velocity**: Reduce decision-making time by 30% by instantly surfacing relevant past decisions

5. **Onboarding Accelerator**: New hires understand not just what was decided, but why—cutting ramp time in half

### Defensibility Moats

1. **Network Effects**: The more decisions captured, the more valuable the AI becomes
2. **Switching Costs**: Once teams build ReasonChains, moving would mean losing institutional memory
3. **Data Moat**: Proprietary decision data that improves model performance
4. **Integration Depth**: Deep hooks into communication platforms competitors can't easily replicate

## Visual Design System

### Brand Identity
- **Primary Color**: #5B21B6 (Deep Purple)
- **Secondary Color**: #8B5CF6 (Light Purple)
- **Accent Color**: #10B981 (Emerald Green for success)
- **Background**: #0F0F0F (Near Black)
- **Surface**: #1A1A1A (Dark Gray)
- **Text Primary**: #FFFFFF
- **Text Secondary**: #A1A1AA

### Typography
- **Headings**: Inter (Bold, Semi-Bold)
- **Body**: Inter (Regular, Medium)
- **Code/Mono**: JetBrains Mono

### Component Design Principles
1. **Glass-morphism**: Subtle blur effects with semi-transparent backgrounds
2. **Neumorphism accents**: Soft shadows for depth
3. **Smooth animations**: Framer Motion for micro-interactions
4. **Dark theme first**: Optimized for reduced eye strain

## System Architecture

### Frontend Architecture
```
spaq-frontend/
├── app/                      # Next.js 14 App Router
│   ├── (auth)/              # Auth group routes
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/         # Protected routes
│   │   ├── page.tsx         # Main dashboard
│   │   ├── chains/          # ReasonChain Editor
│   │   ├── agent/           # AI Agent Chat
│   │   ├── analytics/       # Analytics Dashboard
│   │   └── settings/
│   ├── api/                 # API routes
│   └── layout.tsx           # Root layout
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── features/            # Feature-specific components
│   │   ├── capture/
│   │   ├── editor/
│   │   ├── agent/
│   │   └── analytics/
│   └── layouts/
├── lib/                     # Utilities
├── hooks/                   # Custom React hooks
└── styles/                  # Global styles
```

### Backend Architecture
```
spaq-backend/
├── src/
│   ├── api/                 # REST API endpoints
│   │   ├── auth/
│   │   ├── events/
│   │   ├── chains/
│   │   ├── agent/
│   │   └── analytics/
│   ├── services/            # Business logic
│   │   ├── capture/
│   │   ├── training/
│   │   ├── inference/
│   │   └── analytics/
│   ├── models/              # Database models
│   ├── middleware/          # Express middleware
│   ├── integrations/        # Third-party integrations
│   │   ├── slack/
│   │   ├── teams/
│   │   └── google/
│   ├── utils/
│   └── config/
├── prisma/                  # Database schema
└── tests/
```

## UI Component Specifications

### 1. Landing Page
- **Hero Section**: Animated gradient background with floating decision nodes
- **Features Grid**: 3D cards with hover effects showcasing Capture, Refine, Consult
- **CTA**: Glowing purple button with ripple effect

### 2. ReasonChain Editor
- **Canvas**: Dark grid background with zoom/pan controls
- **Decision Cards**: 
  - Glass-morphic design with purple gradient border
  - Drag handle on hover
  - Connection ports (top/bottom) for chaining
  - Status indicators (pending/approved/in-review)
- **Sidebar**: Collapsible property panel with rich text editor
- **Toolbar**: Floating action buttons for add/delete/export

### 3. Agent Chat Interface
- **Chat Window**: 
  - Message bubbles with typing indicators
  - Code blocks with syntax highlighting
  - Chain visualization cards inline
- **Input Area**: Auto-expanding textarea with AI suggestions
- **Response Cards**: Interactive chain steps with expand/collapse

### 4. Analytics Dashboard
- **Metric Cards**: Animated number counters with trend indicators
- **Charts**: Recharts library with custom dark theme
- **Data Tables**: Virtual scrolling for performance

## Technical Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Drag & Drop**: @dnd-kit

### Backend
- **Runtime**: Node.js 20+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Cache**: Redis
- **Queue**: Bull (Redis-based)
- **Auth**: Auth0 / Clerk
- **File Storage**: AWS S3 / MinIO
- **AI/ML**: Hugging Face Transformers

### Infrastructure
- **Container**: Docker
- **Orchestration**: Kubernetes
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana
- **Logging**: Winston + ELK Stack

## Database Schema

```prisma
model Organization {
  id        String   @id @default(cuid())
  name      String
  slug      String   @unique
  createdAt DateTime @default(now())
  teams     Team[]
}

model Team {
  id             String           @id @default(cuid())
  name           String
  organizationId String
  organization   Organization     @relation(fields: [organizationId], references: [id])
  users          User[]
  events         DecisionEvent[]
  chains         Chain[]
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(MEMBER)
  teamId    String
  team      Team     @relation(fields: [teamId], references: [id])
  events    DecisionEvent[]
  chains    Chain[]
}

model DecisionEvent {
  id             String    @id @default(cuid())
  contextSnippet String    @db.Text
  choice         String?
  rationale      String?   @db.Text
  metadata       Json
  parentId       String?
  parent         DecisionEvent? @relation("EventHierarchy", fields: [parentId], references: [id])
  children       DecisionEvent[] @relation("EventHierarchy")
  teamId         String
  team           Team      @relation(fields: [teamId], references: [id])
  userId         String
  user           User      @relation(fields: [userId], references: [id])
  chainNodes     ChainNode[]
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
}

model Chain {
  id          String      @id @default(cuid())
  name        String
  description String?
  status      ChainStatus @default(DRAFT)
  teamId      String
  team        Team        @relation(fields: [teamId], references: [id])
  authorId    String
  author      User        @relation(fields: [authorId], references: [id])
  nodes       ChainNode[]
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
}

model ChainNode {
  id        String        @id @default(cuid())
  position  Json          // {x, y} coordinates
  chainId   String
  chain     Chain         @relation(fields: [chainId], references: [id])
  eventId   String
  event     DecisionEvent @relation(fields: [eventId], references: [id])
  nextNodes String[]      // Array of ChainNode IDs
}

enum Role {
  ADMIN
  MEMBER
  VIEWER
}

enum ChainStatus {
  DRAFT
  IN_REVIEW
  APPROVED
  ARCHIVED
}
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh tokens
- `GET /api/auth/me` - Current user info

### Decision Events
- `GET /api/events` - List events (paginated)
- `POST /api/events` - Create event
- `GET /api/events/:id` - Get event details
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Chains
- `GET /api/chains` - List chains
- `POST /api/chains` - Create chain
- `GET /api/chains/:id` - Get chain with nodes
- `PUT /api/chains/:id` - Update chain
- `POST /api/chains/:id/nodes` - Add node
- `PUT /api/chains/:id/nodes/:nodeId` - Update node position
- `DELETE /api/chains/:id/nodes/:nodeId` - Remove node

### Agent
- `POST /api/agent/query` - Submit query
- `GET /api/agent/suggestions` - Get suggestions
- `POST /api/agent/feedback` - Submit feedback

### Analytics
- `GET /api/analytics/overview` - Dashboard metrics
- `GET /api/analytics/usage` - Usage statistics
- `GET /api/analytics/trends` - Trend data

## Security Considerations

1. **Authentication**: JWT with refresh tokens
2. **Authorization**: Role-based access control (RBAC)
3. **Encryption**: AES-256 for data at rest, TLS 1.3 for transit
4. **Input Validation**: Zod schemas for all inputs
5. **Rate Limiting**: Per-user and per-IP limits
6. **CORS**: Strict origin validation
7. **CSP**: Content Security Policy headers
8. **Audit Logging**: All data access logged

## Performance Optimizations

1. **Frontend**:
   - Code splitting with dynamic imports
   - Image optimization with Next.js Image
   - Virtual scrolling for large lists
   - Debounced API calls
   - Optimistic UI updates

2. **Backend**:
   - Database connection pooling
   - Redis caching for frequent queries
   - Queue-based processing for AI tasks
   - Horizontal scaling with load balancer
   - CDN for static assets

## Deployment Strategy

1. **Development**: Local Docker Compose
2. **Staging**: Kubernetes on AWS EKS
3. **Production**: Multi-region deployment
   - Frontend: Vercel / AWS CloudFront
   - Backend: AWS ECS / EKS
   - Database: AWS RDS (PostgreSQL)
   - Cache: AWS ElastiCache (Redis)
   - Storage: AWS S3
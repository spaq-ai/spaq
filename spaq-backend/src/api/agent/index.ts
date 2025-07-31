import { Router } from 'express';
import { authenticate, AuthRequest } from '../../middleware/auth';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../utils/logger';

const router = Router();
const prisma = new PrismaClient();

// Query agent
router.post('/query', authenticate, async (req: AuthRequest, res) => {
  try {
    const { query } = req.body;

    // This is a placeholder for the actual AI agent logic
    // In production, this would:
    // 1. Search for relevant chains using vector similarity
    // 2. Use a fine-tuned model to generate responses
    // 3. Return chain references and recommendations

    // For now, return a mock response
    const mockChains = await prisma.chain.findMany({
      where: { teamId: req.user!.teamId },
      take: 3,
      include: {
        nodes: {
          include: {
            event: true,
          },
        },
      },
    });

    const response = {
      answer: `Based on your team's decision history, here's what I found about "${query}"...`,
      chains: mockChains.map(chain => ({
        id: chain.id,
        name: chain.name,
        relevance: Math.random(),
      })),
      suggestions: [
        'Consider reviewing similar past decisions',
        'Look at the rationale behind previous choices',
        'Evaluate if circumstances have changed',
      ],
      confidence: 0.85,
    };

    // Store query for analytics
    const agentQuery = await prisma.agentQuery.create({
      data: {
        query,
        response: JSON.stringify(response),
        confidence: response.confidence,
        userId: req.user!.id,
        chains: {
          connect: mockChains.map(chain => ({ id: chain.id })),
        },
      },
    });

    logger.info(`Agent query: ${query.substring(0, 50)}...`);

    res.json({
      success: true,
      data: {
        ...response,
        queryId: agentQuery.id,
      },
    });
  } catch (error) {
    logger.error('Agent query error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to process query' },
    });
  }
});

// Submit feedback
router.post('/feedback/:queryId', authenticate, async (req: AuthRequest, res) => {
  try {
    const { queryId } = req.params;
    const { feedback } = req.body;

    await prisma.agentQuery.update({
      where: { id: queryId },
      data: { feedback },
    });

    res.json({
      success: true,
      message: 'Feedback recorded',
    });
  } catch (error) {
    logger.error('Feedback error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to record feedback' },
    });
  }
});

// Get suggestions
router.get('/suggestions', authenticate, async (req: AuthRequest, res) => {
  try {
    // Get recent queries for suggestions
    const recentQueries = await prisma.agentQuery.findMany({
      where: { userId: req.user!.id },
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: { query: true },
    });

    const suggestions = [
      'How did we decide on our authentication strategy?',
      'What were the reasons for choosing microservices?',
      'Show me decisions about database technology',
      ...recentQueries.map(q => q.query),
    ];

    res.json({
      success: true,
      data: { suggestions: [...new Set(suggestions)].slice(0, 5) },
    });
  } catch (error) {
    logger.error('Get suggestions error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to get suggestions' },
    });
  }
});

export default router;
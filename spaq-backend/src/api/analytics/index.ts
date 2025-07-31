import { Router } from 'express';
import { authenticate, AuthRequest } from '../../middleware/auth';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../utils/logger';

const router = Router();
const prisma = new PrismaClient();

// Get overview metrics
router.get('/overview', authenticate, async (req: AuthRequest, res) => {
  try {
    const teamId = req.user!.teamId;
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const [
      totalChains,
      pendingEvents,
      totalQueries,
      recentQueries,
      totalEvents,
      recentEvents,
    ] = await Promise.all([
      prisma.chain.count({ where: { teamId } }),
      prisma.decisionEvent.count({
        where: {
          teamId,
          OR: [
            { choice: null },
            { rationale: null },
          ],
        },
      }),
      prisma.agentQuery.count({
        where: {
          createdAt: { gte: sevenDaysAgo },
        },
      }),
      prisma.agentQuery.count({
        where: {
          userId: req.user!.id,
          createdAt: { gte: sevenDaysAgo },
        },
      }),
      prisma.decisionEvent.count({ where: { teamId } }),
      prisma.decisionEvent.count({
        where: {
          teamId,
          createdAt: { gte: sevenDaysAgo },
        },
      }),
    ]);

    // Calculate average time saved (mock calculation)
    const avgTimeSaved = 4.2; // hours

    res.json({
      success: true,
      data: {
        metrics: {
          totalChains,
          pendingEvents,
          totalQueries,
          avgTimeSaved,
          changeRates: {
            chains: 12, // percentage
            pendingEvents: -8,
            queries: 23,
            timeSaved: 18,
          },
        },
      },
    });
  } catch (error) {
    logger.error('Get overview error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to get overview' },
    });
  }
});

// Get usage statistics
router.get('/usage', authenticate, async (req: AuthRequest, res) => {
  try {
    const { days = 7 } = req.query;
    const teamId = req.user!.teamId;

    // Generate daily stats for the chart
    const dailyStats = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = Number(days) - 1; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const nextDate = new Date(date);
      nextDate.setDate(nextDate.getDate() + 1);

      const [queries, chains, events] = await Promise.all([
        prisma.agentQuery.count({
          where: {
            createdAt: {
              gte: date,
              lt: nextDate,
            },
          },
        }),
        prisma.chain.count({
          where: {
            teamId,
            createdAt: {
              gte: date,
              lt: nextDate,
            },
          },
        }),
        prisma.decisionEvent.count({
          where: {
            teamId,
            createdAt: {
              gte: date,
              lt: nextDate,
            },
          },
        }),
      ]);

      dailyStats.push({
        date: date.toISOString().split('T')[0],
        queries,
        chains,
        events,
      });
    }

    res.json({
      success: true,
      data: { usage: dailyStats },
    });
  } catch (error) {
    logger.error('Get usage error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to get usage statistics' },
    });
  }
});

// Get top queries
router.get('/top-queries', authenticate, async (req: AuthRequest, res) => {
  try {
    // In a real implementation, this would analyze query patterns
    // For now, return mock data
    const topQueries = [
      { query: 'Authentication strategy decisions', count: 142, trend: 12 },
      { query: 'Database migration approach', count: 98, trend: -5 },
      { query: 'Frontend framework selection', count: 87, trend: 23 },
      { query: 'API versioning strategy', count: 76, trend: 8 },
      { query: 'Security compliance decisions', count: 64, trend: 15 },
    ];

    res.json({
      success: true,
      data: { topQueries },
    });
  } catch (error) {
    logger.error('Get top queries error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to get top queries' },
    });
  }
});

export default router;
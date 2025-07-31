import { Router } from 'express';
import { authenticate, AuthRequest } from '../../middleware/auth';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../utils/logger';

const router = Router();
const prisma = new PrismaClient();

// Get all events for team
router.get('/', authenticate, async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [events, total] = await Promise.all([
      prisma.decisionEvent.findMany({
        where: { teamId: req.user!.teamId },
        include: {
          user: { select: { id: true, name: true, email: true } },
          tags: true,
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: Number(limit),
      }),
      prisma.decisionEvent.count({
        where: { teamId: req.user!.teamId },
      }),
    ]);

    res.json({
      success: true,
      data: {
        events,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit)),
        },
      },
    });
  } catch (error) {
    logger.error('Get events error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to get events' },
    });
  }
});

// Create event
router.post('/', authenticate, async (req: AuthRequest, res) => {
  try {
    const { contextSnippet, choice, rationale, source, sourceId, tags } = req.body;

    const event = await prisma.decisionEvent.create({
      data: {
        contextSnippet,
        choice,
        rationale,
        source,
        sourceId,
        metadata: {},
        teamId: req.user!.teamId,
        userId: req.user!.id,
        tags: {
          connectOrCreate: tags?.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag },
          })) || [],
        },
      },
      include: {
        tags: true,
        user: { select: { id: true, name: true, email: true } },
      },
    });

    logger.info(`Event created: ${event.id}`);

    res.status(201).json({
      success: true,
      data: { event },
    });
  } catch (error) {
    logger.error('Create event error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to create event' },
    });
  }
});

// Update event
router.put('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const { contextSnippet, choice, rationale, tags } = req.body;

    const event = await prisma.decisionEvent.update({
      where: { 
        id,
        teamId: req.user!.teamId,
      },
      data: {
        contextSnippet,
        choice,
        rationale,
        tags: {
          set: [],
          connectOrCreate: tags?.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag },
          })) || [],
        },
      },
      include: {
        tags: true,
        user: { select: { id: true, name: true, email: true } },
      },
    });

    res.json({
      success: true,
      data: { event },
    });
  } catch (error) {
    logger.error('Update event error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to update event' },
    });
  }
});

export default router;
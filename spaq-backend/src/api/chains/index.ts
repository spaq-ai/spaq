import { Router } from 'express';
import { authenticate, AuthRequest } from '../../middleware/auth';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../utils/logger';

const router = Router();
const prisma = new PrismaClient();

// Get all chains
router.get('/', authenticate, async (req: AuthRequest, res) => {
  try {
    const chains = await prisma.chain.findMany({
      where: { teamId: req.user!.teamId },
      include: {
        author: { select: { id: true, name: true, email: true } },
        _count: { select: { nodes: true } },
      },
      orderBy: { updatedAt: 'desc' },
    });

    res.json({
      success: true,
      data: { chains },
    });
  } catch (error) {
    logger.error('Get chains error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to get chains' },
    });
  }
});

// Get chain by ID with nodes
router.get('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;

    const chain = await prisma.chain.findFirst({
      where: {
        id,
        teamId: req.user!.teamId,
      },
      include: {
        author: { select: { id: true, name: true, email: true } },
        nodes: {
          include: {
            event: {
              include: {
                tags: true,
                user: { select: { id: true, name: true, email: true } },
              },
            },
          },
        },
      },
    });

    if (!chain) {
      return res.status(404).json({
        success: false,
        error: { message: 'Chain not found' },
      });
    }

    res.json({
      success: true,
      data: { chain },
    });
  } catch (error) {
    logger.error('Get chain error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to get chain' },
    });
  }
});

// Create chain
router.post('/', authenticate, async (req: AuthRequest, res) => {
  try {
    const { name, description } = req.body;

    const chain = await prisma.chain.create({
      data: {
        name,
        description,
        teamId: req.user!.teamId,
        authorId: req.user!.id,
      },
      include: {
        author: { select: { id: true, name: true, email: true } },
      },
    });

    logger.info(`Chain created: ${chain.id}`);

    res.status(201).json({
      success: true,
      data: { chain },
    });
  } catch (error) {
    logger.error('Create chain error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to create chain' },
    });
  }
});

// Add node to chain
router.post('/:id/nodes', authenticate, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const { eventId, position, nextNodes = [] } = req.body;

    const node = await prisma.chainNode.create({
      data: {
        chainId: id,
        eventId,
        position,
        nextNodes,
      },
      include: {
        event: {
          include: {
            tags: true,
          },
        },
      },
    });

    res.status(201).json({
      success: true,
      data: { node },
    });
  } catch (error) {
    logger.error('Add node error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to add node' },
    });
  }
});

export default router;
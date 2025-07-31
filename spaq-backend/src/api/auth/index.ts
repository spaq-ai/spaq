import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { logger } from '../../utils/logger';
import { authenticate, AuthRequest } from '../../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Register
router.post(
  '/register',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 8 }),
    body('name').optional().trim(),
    body('organizationName').notEmpty().trim(),
    body('teamName').notEmpty().trim(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password, name, organizationName, teamName } = req.body;

      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({
          success: false,
          error: { message: 'User already exists' },
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create organization, team, and user
      const result = await prisma.$transaction(async (tx) => {
        const organization = await tx.organization.create({
          data: {
            name: organizationName,
            slug: organizationName.toLowerCase().replace(/\s+/g, '-'),
          },
        });

        const team = await tx.team.create({
          data: {
            name: teamName,
            organizationId: organization.id,
          },
        });

        const user = await tx.user.create({
          data: {
            email,
            password: hashedPassword,
            name,
            role: 'ADMIN',
            teamId: team.id,
          },
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            teamId: true,
          },
        });

        return { user, organization, team };
      });

      // Generate tokens
      const accessToken = jwt.sign(
        { userId: result.user.id },
        process.env.JWT_SECRET!,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
      );

      const refreshToken = jwt.sign(
        { userId: result.user.id },
        process.env.JWT_REFRESH_SECRET!,
        { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d' }
      );

      // Store refresh token
      await prisma.refreshToken.create({
        data: {
          token: refreshToken,
          userId: result.user.id,
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
      });

      logger.info(`New user registered: ${email}`);

      res.status(201).json({
        success: true,
        data: {
          user: result.user,
          organization: result.organization,
          team: result.team,
          accessToken,
          refreshToken,
        },
      });
    } catch (error) {
      logger.error('Registration error:', error);
      res.status(500).json({
        success: false,
        error: { message: 'Registration failed' },
      });
    }
  }
);

// Login
router.post(
  '/login',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').notEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      // Find user
      const user = await prisma.user.findUnique({
        where: { email },
        include: {
          team: {
            include: {
              organization: true,
            },
          },
        },
      });

      if (!user) {
        return res.status(401).json({
          success: false,
          error: { message: 'Invalid credentials' },
        });
      }

      // Check password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({
          success: false,
          error: { message: 'Invalid credentials' },
        });
      }

      // Generate tokens
      const accessToken = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET!,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
      );

      const refreshToken = jwt.sign(
        { userId: user.id },
        process.env.JWT_REFRESH_SECRET!,
        { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d' }
      );

      // Store refresh token
      await prisma.refreshToken.create({
        data: {
          token: refreshToken,
          userId: user.id,
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
      });

      logger.info(`User logged in: ${email}`);

      res.json({
        success: true,
        data: {
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            teamId: user.teamId,
          },
          team: user.team,
          accessToken,
          refreshToken,
        },
      });
    } catch (error) {
      logger.error('Login error:', error);
      res.status(500).json({
        success: false,
        error: { message: 'Login failed' },
      });
    }
  }
);

// Refresh token
router.post('/refresh', async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        error: { message: 'Refresh token required' },
      });
    }

    // Verify refresh token
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET!
    ) as any;

    // Check if token exists in database
    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      include: { user: true },
    });

    if (!storedToken || storedToken.expiresAt < new Date()) {
      return res.status(401).json({
        success: false,
        error: { message: 'Invalid refresh token' },
      });
    }

    // Generate new access token
    const accessToken = jwt.sign(
      { userId: storedToken.user.id },
      process.env.JWT_SECRET!,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    res.json({
      success: true,
      data: { accessToken },
    });
  } catch (error) {
    logger.error('Token refresh error:', error);
    res.status(401).json({
      success: false,
      error: { message: 'Invalid refresh token' },
    });
  }
});

// Logout
router.post('/logout', authenticate, async (req: AuthRequest, res) => {
  try {
    const { refreshToken } = req.body;

    if (refreshToken) {
      await prisma.refreshToken.delete({
        where: { token: refreshToken },
      });
    }

    res.json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (error) {
    logger.error('Logout error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Logout failed' },
    });
  }
});

// Get current user
router.get('/me', authenticate, async (req: AuthRequest, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        teamId: true,
        team: {
          include: {
            organization: true,
          },
        },
      },
    });

    res.json({
      success: true,
      data: { user },
    });
  } catch (error) {
    logger.error('Get user error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to get user' },
    });
  }
});

export default router;
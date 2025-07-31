import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000');
  const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100');
  
  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  const now = Date.now();
  
  if (!store[ip] || store[ip].resetTime < now) {
    store[ip] = {
      count: 1,
      resetTime: now + windowMs,
    };
  } else {
    store[ip].count++;
  }
  
  if (store[ip].count > maxRequests) {
    logger.warn(`Rate limit exceeded for IP: ${ip}`);
    return res.status(429).json({
      success: false,
      error: {
        message: 'Too many requests, please try again later.',
      },
    });
  }
  
  res.setHeader('X-RateLimit-Limit', maxRequests.toString());
  res.setHeader('X-RateLimit-Remaining', (maxRequests - store[ip].count).toString());
  res.setHeader('X-RateLimit-Reset', new Date(store[ip].resetTime).toISOString());
  
  next();
};

// Clean up expired entries every minute
setInterval(() => {
  const now = Date.now();
  Object.keys(store).forEach((key) => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}, 60000);
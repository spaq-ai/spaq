"use client";
import React from "react";
import { motion } from "framer-motion";

export const CanvasGrid = ({ className }: { className?: string }) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="grid-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <circle cx="50%" cy="50%" r="300" fill="url(#grid-gradient)" />
    </svg>
  );
};
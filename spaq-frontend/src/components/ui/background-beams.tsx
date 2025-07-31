"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  ];

  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
        className
      )}
    >
      <svg
        className="z-0 h-full w-full pointer-events-none absolute"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875"
          stroke="url(#paint0_linear_2104_9)"
          strokeWidth="2"
        />
        <path
          d="M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867"
          stroke="url(#paint1_linear_2104_9)"
          strokeWidth="2"
        />
        <path
          d="M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859"
          stroke="url(#paint2_linear_2104_9)"
          strokeWidth="2"
        />
        <path
          d="M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851"
          stroke="url(#paint3_linear_2104_9)"
          strokeWidth="2"
        />
        <path
          d="M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843"
          stroke="url(#paint4_linear_2104_9)"
          strokeWidth="2"
        />
        <path
          d="M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835"
          stroke="url(#paint5_linear_2104_9)"
          strokeWidth="2"
        />
        <defs>
          {paths.map((path, index) => (
            <motion.linearGradient
              id={`paint${index}_linear_2104_9`}
              key={`paint${index}_linear_2104_9`}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: ["0%", "100%", "0%"],
                x2: ["0%", "95%", "0%"],
                y1: ["0%", "100%", "0%"],
                y2: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: "linear",
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="1" />
              <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
            </motion.linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};
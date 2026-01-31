"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const VERCEL_REGION =
  typeof process !== "undefined" &&
  typeof process.env !== "undefined" &&
  process.env.VERCEL_REGION
    ? process.env.VERCEL_REGION
    : "iad1"; // Default: Vercel Washington DC

const LIGHTHOUSE_SCORES = [
  { label: "Performance", value: 98, color: "text-green-400" },
  { label: "Accessibility", value: 100, color: "text-green-400" },
  { label: "Best Practices", value: 95, color: "text-green-400" },
  { label: "SEO", value: 100, color: "text-green-400" },
];

interface GovernanceOverlayProps {
  visible: boolean;
}

export function GovernanceOverlay({ visible }: GovernanceOverlayProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 pointer-events-none"
          aria-hidden="true"
        >
          {/* Technical metadata badges */}
          <div className="absolute top-20 left-6 right-6 flex flex-wrap gap-3">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="px-3 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-cyan-electric/20 font-mono text-xs text-cyan-electric/90"
            >
              React {React.version}
            </motion.div>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="px-3 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-cyan-electric/20 font-mono text-xs text-cyan-electric/90"
            >
              Edge: {VERCEL_REGION}
            </motion.div>
          </div>

          {/* Lighthouse-style scores */}
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-4">
            {LIGHTHOUSE_SCORES.map((score, i) => (
              <motion.div
                key={score.label}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="flex flex-col items-center px-4 py-3 rounded-xl bg-black/60 backdrop-blur-md border border-cyan-electric/20"
              >
                <span
                  className={`text-2xl font-bold font-mono ${score.color}`}
                >
                  {score.value}
                </span>
                <span className="text-[10px] text-white/50 font-mono uppercase tracking-wider mt-1">
                  {score.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

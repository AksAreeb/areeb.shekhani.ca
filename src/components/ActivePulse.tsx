"use client";

import { motion } from "framer-motion";

export function ActivePulse() {
  return (
    <div className="flex items-center gap-2">
      <motion.div
        className="relative flex items-center justify-center"
        initial={false}
      >
        <motion.div
          className="w-3 h-3 rounded-full bg-emerald-glow"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-emerald-glow"
          animate={{ scale: [1, 2, 2], opacity: [0.6, 0, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
      <span className="text-xs font-mono text-emerald-glow/90">Active</span>
    </div>
  );
}

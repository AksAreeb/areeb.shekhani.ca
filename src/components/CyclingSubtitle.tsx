"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SUBTITLES = [
  "Backend Engineer",
  "Frontend Specialist",
  "Governance Enthusiast",
];

export function CyclingSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % SUBTITLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 relative overflow-hidden min-w-[200px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={SUBTITLES[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 text-cyan-electric/90 font-medium"
        >
          {SUBTITLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

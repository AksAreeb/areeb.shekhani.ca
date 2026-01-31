"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  { name: "Python", icon: "🐍" },
  { name: "React", icon: "⚛️" },
  { name: "Docker", icon: "🐳" },
  { name: "Next.js", icon: "▲" },
  { name: "Go", icon: "🔷" },
];

const MARQUEE_OFFSET = 650;

function MarqueeItem() {
  return (
    <motion.div
      className="flex items-center gap-8 shrink-0"
      animate={{ x: [0, -MARQUEE_OFFSET] }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 18,
          ease: "linear",
        },
      }}
    >
      {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
        <div
          key={`${tech.name}-${i}`}
          className="flex items-center gap-3 px-5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-glow/50 hover:bg-white/10 transition-all duration-300"
        >
          <span className="text-2xl">{tech.icon}</span>
          <span className="text-lg font-medium text-white/90">{tech.name}</span>
        </div>
      ))}
    </motion.div>
  );
}

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="flex w-max">
        <MarqueeItem />
        <MarqueeItem />
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function AnimatedGridBackground() {
  const [dots, setDots] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Grid lines - GPU-accelerated transform instead of backgroundPosition */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.08]">
        <motion.div
          className="absolute -left-[60px] -top-[60px]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            width: "calc(100% + 120px)",
            height: "calc(100% + 120px)",
          }}
          animate={{ x: [0, 60], y: [0, 60] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      {/* Gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, #00ffff 0%, transparent 70%)",
          top: "-20%",
          left: "-10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
        style={{
          background: "radial-gradient(circle, #50fa7b 0%, transparent 70%)",
          bottom: "-15%",
          right: "-5%",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.15, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Floating particles - client-only to prevent hydration mismatch */}
      <div className="absolute inset-0">
        {dots.length > 0 && dots.slice(0, 30).map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-1 h-1 rounded-full bg-cyan-electric"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

interface BentoTileProps {
  children: ReactNode;
  className?: string;
  glowColor?: "emerald" | "cyber";
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
}

export function BentoTile({
  children,
  className = "",
  glowColor = "emerald",
  colSpan = 1,
  rowSpan = 1,
}: BentoTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const glowStyles =
    glowColor === "emerald"
      ? "shadow-[0_0_40px_rgba(0,255,136,0.15)] group-hover:shadow-[0_0_60px_rgba(0,255,136,0.35)] border-emerald-glow/30 group-hover:border-emerald-glow/60"
      : "shadow-[0_0_40px_rgba(0,212,255,0.15)] group-hover:shadow-[0_0_60px_rgba(0,212,255,0.35)] border-cyber-blue/30 group-hover:border-cyber-blue/60";

  const colSpanClass = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
  }[colSpan];

  const rowSpanClass = {
    1: "row-span-1",
    2: "row-span-2",
  }[rowSpan];

  return (
    <div className={`${colSpanClass} ${rowSpanClass}`} style={{ perspective: "1000px" }}>
      <motion.div
        ref={ref}
        className={`group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 overflow-hidden ${glowStyles} ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div
        className="relative z-10 p-6 h-full flex flex-col"
        style={{ transform: "translateZ(40px)" }}
      >
        {children}
      </div>
      {/* Inner glow overlay */}
      <motion.div
        className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
        style={{
          background:
            glowColor === "emerald"
              ? "radial-gradient(circle at 50% 50%, rgba(0,255,136,0.08) 0%, transparent 70%)"
              : "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.08) 0%, transparent 70%)",
        }}
      />
    </motion.div>
    </div>
  );
}

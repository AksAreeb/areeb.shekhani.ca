"use client";

import { motion } from "framer-motion";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { BentoTile } from "@/components/BentoTile";
import { CyclingSubtitle } from "@/components/CyclingSubtitle";
import { ActivePulse } from "@/components/ActivePulse";
import { LicenseGuardStatus } from "@/components/LicenseGuardStatus";
import { TechMarquee } from "@/components/TechMarquee";
import { GlassmorphicDock } from "@/components/GlassmorphicDock";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] font-[var(--font-space-grotesk)]">
      <AnimatedGridBackground />
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Command palette hint - top right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed top-6 right-6 z-50 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/40 text-sm font-mono"
        >
          <kbd className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
            ⌘K
          </kbd>
          <span>Search</span>
        </motion.div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center px-6 py-24 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(120px,auto)]">
              {/* Tile 1: Large - Name + Cycling Subtitle */}
              <BentoTile
                colSpan={2}
                rowSpan={2}
                glowColor="emerald"
                className="md:col-span-2 md:row-span-2"
              >
                <div className="flex flex-col justify-center h-full">
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Areeb Shekhani
                  </motion.h1>
                  <CyclingSubtitle />
                  <motion.p
                    className="mt-4 text-white/40 text-sm font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-emerald-glow/60">&gt;</span> ready
                    for commands
                  </motion.p>
                </div>
              </BentoTile>

              {/* Tile 2: Medium - QU Computing */}
              <BentoTile glowColor="cyber" className="md:col-span-1">
                <div className="flex flex-col justify-between h-full">
                  <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                    Current
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      QU Computing
                    </p>
                    <p className="text-sm text-white/60">Oakville</p>
                  </div>
                  <ActivePulse />
                </div>
              </BentoTile>

              {/* Tile 3: Small - LicenseGuard */}
              <BentoTile glowColor="emerald" className="md:col-span-1">
                <LicenseGuardStatus />
              </BentoTile>

              {/* Tile 4: Wide - Tech Marquee */}
              <BentoTile
                colSpan={3}
                glowColor="cyber"
                className="md:col-span-3"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                    Tech Stack
                  </span>
                  <TechMarquee />
                </div>
              </BentoTile>
            </div>
          </motion.div>
        </div>

        <GlassmorphicDock />
      </div>
    </main>
  );
}

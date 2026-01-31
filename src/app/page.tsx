"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedGridBackground } from "@/components/AnimatedGridBackground";
import { BentoTile } from "@/components/BentoTile";
import { CyclingSubtitle } from "@/components/CyclingSubtitle";
import { ActivePulse } from "@/components/ActivePulse";
import { LicenseGuardStatus } from "@/components/LicenseGuardStatus";
import { TechMarquee } from "@/components/TechMarquee";
import { GlassmorphicDock } from "@/components/GlassmorphicDock";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectBento } from "@/components/ProjectBento";
import { ContactSection } from "@/components/ContactSection";
import { GovernanceModeToggle } from "@/components/GovernanceModeToggle";
import { GovernanceOverlay } from "@/components/GovernanceOverlay";

export default function Home() {
  const [governanceMode, setGovernanceMode] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0f] font-[var(--font-space-grotesk)]">
      <AnimatedGridBackground />
      <GovernanceOverlay visible={governanceMode} />
      <div className="relative z-10 flex flex-col">
        {/* Top bar: Command palette hint + Governance toggle */}
        <div className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/40 text-sm font-mono"
          >
            <kbd className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
              ⌘K
            </kbd>
            <span>Search</span>
          </motion.div>
          <GovernanceModeToggle
            enabled={governanceMode}
            onToggle={() => setGovernanceMode((v) => !v)}
          />
        </div>

        {/* Hero / About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-6 py-24 pb-32 scroll-mt-0"
          aria-labelledby="hero-heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(120px,auto)]">
              <BentoTile
                colSpan={2}
                rowSpan={2}
                glowColor="cyan"
                className="md:col-span-2 md:row-span-2"
              >
                <div className="flex flex-col justify-center h-full">
                  <motion.h1
                    id="hero-heading"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Areeb Shekhani
                  </motion.h1>
                  <CyclingSubtitle />
                  <motion.span
                    className="mt-4 block text-white/40 text-sm font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-cyan-electric/60">&gt;</span> ready
                    for commands
                  </motion.span>
                </div>
              </BentoTile>

              <BentoTile glowColor="cyan" className="md:col-span-1">
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

              <BentoTile glowColor="cyan" className="md:col-span-1">
                <LicenseGuardStatus />
              </BentoTile>

              <BentoTile colSpan={3} glowColor="cyan" className="md:col-span-3">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                    Tech Stack
                  </span>
                  <TechMarquee />
                </div>
              </BentoTile>
            </div>
          </motion.div>
        </section>

        <ExperienceSection />
        <ProjectBento />
        <ContactSection />

        <GlassmorphicDock />
      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import { BentoTile } from "./BentoTile";
import { LicenseGuardCard } from "./LicenseGuardCard";
import { HardwareServerCard } from "./HardwareServerCard";
import { DualClock } from "./DualClock";
import { TechMarquee } from "./TechMarquee";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ProjectBento() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2
          id="projects-heading"
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          Projects
        </h2>
        <p className="text-white/50 font-mono text-sm mb-12">
          Bento grid
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(160px,auto)]"
        >
          <motion.div variants={item} className="md:col-span-2 md:row-span-2">
            <LicenseGuardCard />
          </motion.div>
          <motion.div variants={item} className="md:col-span-1">
            <HardwareServerCard />
          </motion.div>
          <motion.div variants={item} className="md:col-span-1">
            <BentoTile glowColor="cyan">
              <DualClock />
            </BentoTile>
          </motion.div>
          <motion.div variants={item} className="md:col-span-2">
            <BentoTile colSpan={2} glowColor="cyan">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                  Tech Stack
                </span>
                <TechMarquee />
              </div>
            </BentoTile>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

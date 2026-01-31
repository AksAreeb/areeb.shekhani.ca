"use client";

import { motion } from "framer-motion";
import { BentoTile } from "./BentoTile";

const WORK_ITEMS = [
  {
    id: "licenseguard",
    title: "LicenseGuard",
    role: "Software Engineer",
    description: "Governance & license compliance platform. Policy scanning, secure badge system, and compliance workflows.",
    tags: ["Python", "Go", "Compliance", "Security"],
    glowColor: "cyan" as const,
    colSpan: 2 as const,
    rowSpan: 2 as const,
  },
  {
    id: "quoted",
    title: "Quoted",
    role: "Backend Engineer",
    description: "Quote management and backend services. APIs, data pipelines, and system integrations.",
    tags: ["Python", "API", "PostgreSQL"],
    glowColor: "cyan" as const,
    colSpan: 1 as const,
    rowSpan: 1 as const,
  },
  {
    id: "qu-computing",
    title: "QU Computing",
    role: "Frontend Specialist",
    description: "Frontend development and UI for Oakville-based tech solutions. Modern React and Next.js applications.",
    tags: ["React", "Next.js", "TypeScript"],
    glowColor: "cyan" as const,
    colSpan: 1 as const,
    rowSpan: 1 as const,
  },
];

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

export function WorkSection() {
  return (
    <section
      id="work"
      className="relative py-24 px-6 scroll-mt-20"
      aria-labelledby="work-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2
          id="work-heading"
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          Work
        </h2>
        <p className="text-white/50 font-mono text-sm mb-12">
          Selected projects & roles
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(160px,auto)]"
        >
          {WORK_ITEMS.map((work) => (
            <motion.div
              key={work.id}
              variants={item}
              className={
                work.colSpan === 2
                  ? "md:col-span-2 md:row-span-2"
                  : "md:col-span-1"
              }
            >
              <BentoTile
                glowColor={work.glowColor}
                colSpan={work.colSpan}
                rowSpan={work.rowSpan}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-xs font-mono text-cyan-electric/70 uppercase tracking-wider">
                      {work.role}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-1 mb-2">
                      {work.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono rounded-md bg-cyan-electric/10 text-cyan-electric/90 border border-cyan-electric/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </BentoTile>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

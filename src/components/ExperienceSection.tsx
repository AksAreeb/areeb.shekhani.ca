"use client";

import { motion } from "framer-motion";

const EXPERIENCE_ITEMS = [
  {
    id: "asus",
    category: "Governance",
    role: "Advisory Board Director @ ASUS (Queen's University)",
    description: "Overseeing $100k+ fund and governance for 10,000 students.",
  },
  {
    id: "smith",
    category: "Engineering",
    role: "Systems Coordinator @ Smith Engineering",
    description: "Cascading CMS, XML/XSLT data rendering, and full-site accessibility (A11y) audits.",
  },
  {
    id: "queens",
    category: "Logistics",
    role: "Head of Logistics @ Queen's Computing Orientation",
    description: "Managing supply chain operations for incoming tech students.",
  },
  {
    id: "osac",
    category: "Leadership",
    role: "Board Chair @ OSAC",
    description: "Expanding student advocacy representation in Oakville.",
  },
];

const timelineItem = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 scroll-mt-20"
      aria-labelledby="experience-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2
          id="experience-heading"
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          Experience
        </h2>
        <span className="block text-white/50 font-mono text-sm mb-12">
          Work timeline
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-8">
            <h3 className="text-sm font-mono text-cyan-electric/80 uppercase tracking-widest">
              Governance & Leadership
            </h3>
            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {EXPERIENCE_ITEMS.filter((i) =>
                ["Governance", "Leadership"].includes(i.category)
              ).map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={timelineItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative -ml-px"
                >
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-cyan-electric/50 group-hover:bg-cyan-electric group-hover:shadow-[0_0_12px_rgba(0,255,255,0.5)] transition-all duration-300" />
                  <div className="rounded-lg px-4 py-3 bg-white/[0.02] backdrop-blur-[8px] border border-white/[0.1] group-hover:border-cyan-electric/20 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.08)] transition-all duration-300">
                    <p className="text-lg font-semibold text-white">{item.role}</p>
                    <span className="block text-xs text-white/55 font-mono mt-1">
                      {item.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-sm font-mono text-cyan-electric/80 uppercase tracking-widest">
              Engineering & Logistics
            </h3>
            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {EXPERIENCE_ITEMS.filter((i) =>
                ["Engineering", "Logistics"].includes(i.category)
              ).map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={timelineItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative -ml-px"
                >
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-cyan-electric/50 group-hover:bg-cyan-electric group-hover:shadow-[0_0_12px_rgba(0,255,255,0.5)] transition-all duration-300" />
                  <div className="rounded-lg px-4 py-3 bg-white/[0.02] backdrop-blur-[8px] border border-white/[0.1] group-hover:border-cyan-electric/20 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.08)] transition-all duration-300">
                    <p className="text-lg font-semibold text-white">{item.role}</p>
                    <span className="block text-xs text-white/55 font-mono mt-1">
                      {item.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

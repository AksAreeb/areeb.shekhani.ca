"use client";

import { motion } from "framer-motion";

const GOVERNANCE_ITEMS = [
  {
    id: "asus",
    org: "ASUS",
    role: "Board Director",
    period: "Governance & oversight",
  },
];

const TECHNICAL_ITEMS = [
  {
    id: "smith",
    org: "Smith Engineering",
    role: "Systems",
    period: "Technical systems",
  },
  {
    id: "queens",
    org: "Queen's Computing",
    role: "Logistics",
    period: "Operations & logistics",
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
        <p className="text-white/50 font-mono text-sm mb-12">
          Work timeline
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Governance & Leadership */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-sm font-mono text-cyan-electric/80 uppercase tracking-widest">
              Governance & Leadership
            </h3>
            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {GOVERNANCE_ITEMS.map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={timelineItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative -ml-px"
                >
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-cyan-electric/50 group-hover:bg-cyan-electric group-hover:shadow-[0_0_12px_rgba(0,229,255,0.5)] transition-all duration-300" />
                  <div className="rounded-lg px-4 py-3 bg-white/[0.02] border border-transparent group-hover:border-cyan-electric/20 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.08)] transition-all duration-300">
                    <p className="text-lg font-semibold text-white">{item.org}</p>
                    <p className="text-sm text-cyan-electric/80 font-medium mt-0.5">
                      {item.role}
                    </p>
                    <p className="text-xs text-white/40 font-mono mt-1">
                      {item.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Systems */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-sm font-mono text-cyan-electric/80 uppercase tracking-widest">
              Technical Systems
            </h3>
            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {TECHNICAL_ITEMS.map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={timelineItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative -ml-px"
                >
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-cyan-electric/50 group-hover:bg-cyan-electric group-hover:shadow-[0_0_12px_rgba(0,229,255,0.5)] transition-all duration-300" />
                  <div className="rounded-lg px-4 py-3 bg-white/[0.02] border border-transparent group-hover:border-cyan-electric/20 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.08)] transition-all duration-300">
                    <p className="text-lg font-semibold text-white">{item.org}</p>
                    <p className="text-sm text-cyan-electric/80 font-medium mt-0.5">
                      {item.role}
                    </p>
                    <p className="text-xs text-white/40 font-mono mt-1">
                      {item.period}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

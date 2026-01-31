"use client";

import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "About", href: "#about", icon: "◉" },
  { label: "Work", href: "#work", icon: "◆" },
  { label: "Projects", href: "#projects", icon: "◇" },
  { label: "Contact", href: "#contact", icon: "○" },
];

export function GlassmorphicDock() {
  return (
    <motion.nav
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-4 py-3 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-glass">
        {NAV_ITEMS.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/80 hover:text-emerald-glow hover:bg-white/5 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-emerald-glow/80">{item.icon}</span>
            <span>{item.label}</span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}

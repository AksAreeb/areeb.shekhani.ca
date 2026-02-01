"use client";

import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "About", href: "#about", icon: "◉" },
  { label: "Experience", href: "#experience", icon: "◆" },
  { label: "Projects", href: "#projects", icon: "◇" },
  { label: "Contact", href: "#contact", icon: "○" },
];

const DOCK_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/areebshekhani",
    icon: "in",
    aria: "Connect on LinkedIn",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/areebshekhani",
    icon: "<>",
    aria: "View GitHub profile",
    external: true,
  },
  {
    label: "Sudo Contact",
    href: "mailto:hello@shekhani.ca",
    icon: "$",
    aria: "Open email client",
    external: false,
  },
];

export function GlassmorphicDock() {
  return (
    <motion.nav
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      aria-label="Main navigation and contact"
    >
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Nav links */}
        <div className="flex items-center gap-1 px-4 py-3 rounded-2xl bg-white/[0.04] backdrop-blur-[8px] border border-white/[0.1] shadow-glass">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/80 hover:text-cyan-electric hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-cyan-electric/80">{item.icon}</span>
              <span>{item.label}</span>
            </motion.a>
          ))}
        </div>
        {/* Contact links */}
        <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/[0.04] backdrop-blur-[8px] border border-white/[0.1] shadow-glass">
          {DOCK_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.aria}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/80 hover:text-cyan-electric hover:bg-white/5 transition-colors font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-cyan-electric/80">{link.icon}</span>
              <span>{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

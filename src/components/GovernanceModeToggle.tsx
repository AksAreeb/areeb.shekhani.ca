"use client";

import { motion } from "framer-motion";

interface GovernanceModeToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export function GovernanceModeToggle({
  enabled,
  onToggle,
}: GovernanceModeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={enabled}
      aria-label="Toggle governance mode"
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] backdrop-blur-[8px] border border-white/[0.1] hover:border-cyan-electric/40 text-white/60 hover:text-cyan-electric/90 text-sm font-mono transition-colors"
    >
      <span
        className={`relative inline-block w-9 h-5 rounded-full transition-colors ${
          enabled ? "bg-cyan-electric/40" : "bg-white/10"
        }`}
      >
        <motion.span
          className="absolute top-1 w-3 h-3 rounded-full bg-white shadow-sm"
          animate={{ x: enabled ? 18 : 4 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          style={{ top: "4px" }}
        />
      </span>
      <span>Governance Mode</span>
      {enabled && (
        <span className="w-2 h-2 rounded-full bg-cyan-electric animate-pulse" />
      )}
    </button>
  );
}

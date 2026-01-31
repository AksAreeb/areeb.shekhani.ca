"use client";

import { motion } from "framer-motion";

export function LicenseGuardStatus() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
          LicenseGuard Status
        </span>
        <motion.div
          className="w-2 h-2 rounded-full bg-cyan-electric"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      <div className="relative overflow-hidden rounded-lg border border-cyan-electric/30 bg-cyan-electric/5 px-4 py-3">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-electric/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ width: "50%" }}
        />
        <div className="relative flex items-center justify-between">
          <span className="font-mono text-sm text-cyan-electric">Policy:</span>
          <span className="font-mono text-sm font-bold text-cyan-electric">
            SECURE
          </span>
        </div>
      </div>
    </div>
  );
}

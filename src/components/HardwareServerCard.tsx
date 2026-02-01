"use client";

import { BentoTile } from "./BentoTile";

export function HardwareServerCard() {
  return (
    <BentoTile glowColor="cyan" colSpan={1} rowSpan={1}>
      <div className="h-full flex flex-col justify-between font-mono relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.3) 2px, rgba(0,255,255,0.3) 4px)",
          }}
        />
        <div className="relative">
          <span className="text-xs text-cyan-electric/60 uppercase tracking-widest">
            T480 Restoration
          </span>
          <div className="mt-4 space-y-2 text-sm">
            <p className="text-white/90">
              <span className="text-cyan-electric/80">&gt;</span> Linux/Apache
              home server
            </p>
            <span className="block text-white/60 text-xs">
              Hardware optimization & deployment
            </span>
          </div>
        </div>
        <div className="relative mt-4 pt-3 border-t border-white/10">
          <span className="text-[10px] text-white/50 uppercase tracking-wider">
            Retro / CRT
          </span>
        </div>
      </div>
    </BentoTile>
  );
}

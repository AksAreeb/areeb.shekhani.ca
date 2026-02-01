"use client";

import { useState } from "react";
import { BentoTile } from "./BentoTile";
import { useMounted } from "@/hooks/useMounted";

/** Minimalist GTA outline - Toronto, Mississauga, Oakville area */
function GTAMapIcon() {
  return (
    <svg
      viewBox="0 0 120 80"
      className="w-full h-16 text-cyan-electric/30"
      aria-hidden
    >
      {/* Simplified GTA outline */}
      <path
        d="M20 40 L40 20 L80 25 L100 45 L90 60 L60 70 L35 65 L15 50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
      {/* Oakville marker - animated pulse */}
      <g transform="translate(55, 48)">
        <circle r="4" fill="currentColor" fillOpacity="0.8" />
        <circle
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.5"
          className="animate-oakville-pulse"
        />
      </g>
    </svg>
  );
}

export function OakvilleUtilityTile() {
  const mounted = useMounted();
  const [ping, setPing] = useState<number | null>(null);
  const [pinging, setPinging] = useState(false);

  const runPing = async () => {
    if (!mounted || pinging) return;
    setPinging(true);
    setPing(null);
    const start = performance.now();
    try {
      await fetch("/api/ping", { cache: "no-store" });
    } catch {
      await fetch(window.location.origin, { cache: "no-store" });
    }
    const latency = Math.round(performance.now() - start);
    setPing(latency);
    setPinging(false);
  };

  return (
    <BentoTile glowColor="cyan" colSpan={2} rowSpan={2}>
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="text-xs font-mono text-cyan-electric/70 uppercase tracking-wider">
            System Origin
          </span>
          <p className="text-lg font-semibold text-white mt-2">
            Oakville, ON
          </p>
        </div>
        <div className="my-4 flex justify-center">
          <GTAMapIcon />
        </div>
        <div className="space-y-3">
          <button
            type="button"
            onClick={runPing}
            disabled={!mounted || pinging}
            className="w-full px-3 py-2 rounded-lg font-mono text-xs bg-white/[0.04] border border-white/[0.1] hover:border-cyan-electric/40 hover:bg-cyan-electric/5 text-cyan-electric/90 disabled:opacity-50 transition-colors"
          >
            {pinging ? "Pinging..." : ping !== null ? `${ping} ms` : "Network Ping"}
          </button>
          {ping !== null && !pinging && (
            <span className="block text-[10px] font-mono text-white/50 text-center">
              Vercel Edge latency
            </span>
          )}
        </div>
      </div>
    </BentoTile>
  );
}

"use client";

import { BentoTile } from "./BentoTile";

export function ResAlignCard() {
  return (
    <BentoTile glowColor="cyan" colSpan={1} rowSpan={1}>
      <div className="flex flex-col h-full justify-between font-mono">
        <div>
          <span className="text-xs text-cyan-electric/70 uppercase tracking-wider">
            ResAlign
          </span>
          <p className="text-sm text-white/90 mt-2">
            HR-Tech optimization tool with custom grading metrics
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-1">
          <span className="px-2 py-0.5 text-[10px] rounded bg-cyan-electric/10 text-cyan-electric/90 border border-cyan-electric/20">
            HR
          </span>
          <span className="px-2 py-0.5 text-[10px] rounded bg-cyan-electric/10 text-cyan-electric/90 border border-cyan-electric/20">
            Metrics
          </span>
        </div>
      </div>
    </BentoTile>
  );
}

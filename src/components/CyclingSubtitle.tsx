"use client";

import { useState, useEffect } from "react";

const SUBTITLES = [
  "Backend Engineer",
  "Frontend Specialist",
  "Governance Enthusiast",
];

export function CyclingSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % SUBTITLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 relative overflow-hidden min-w-[200px]">
      <span
        key={SUBTITLES[index]}
        className="absolute left-0 text-cyan-electric/90 font-medium animate-fade-slide"
      >
        {SUBTITLES[index]}
      </span>
    </div>
  );
}

"use client";

import { BentoTile } from "./BentoTile";
import { LicenseGuardCard } from "./LicenseGuardCard";
import { HardwareServerCard } from "./HardwareServerCard";
import { ResAlignCard } from "./ResAlignCard";
import { OakvilleUtilityTile } from "./OakvilleUtilityTile";
import { TechMarquee } from "./TechMarquee";
import { ResumeDownloadButton } from "./ResumeDownloadButton";

export function ProjectBento() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="projects-heading"
          className="text-2xl md:text-3xl font-bold text-white mb-2"
        >
          Projects
        </h2>
        <span className="block text-white/50 font-mono text-sm mb-12">
          Bento grid
        </span>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(160px,auto)]">
          <div className="md:col-span-2 md:row-span-2 order-1">
            <LicenseGuardCard />
          </div>
          <div className="md:col-span-1 order-2">
            <HardwareServerCard />
          </div>
          <div className="md:col-span-1 order-3">
            <ResAlignCard />
          </div>
          <div className="md:col-span-2 md:row-span-2 order-4">
            <OakvilleUtilityTile />
          </div>
          <div className="md:col-span-2 order-5">
            <BentoTile glowColor="cyan" colSpan={2}>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-white/60 uppercase tracking-wider">
                  Tech Stack
                </span>
                <TechMarquee />
              </div>
            </BentoTile>
          </div>
          <div className="md:col-span-2 order-6">
            <BentoTile glowColor="cyan" colSpan={2}>
              <div className="flex flex-col gap-3">
                <span className="text-xs font-mono text-white/60 uppercase tracking-wider">
                  Resume
                </span>
                <ResumeDownloadButton />
              </div>
            </BentoTile>
          </div>
        </div>
      </div>
    </section>
  );
}

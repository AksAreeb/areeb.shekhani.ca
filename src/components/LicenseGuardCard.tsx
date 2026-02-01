"use client";

import { BentoTile } from "./BentoTile";
import { LicenseGuardStatus } from "./LicenseGuardStatus";

const GITHUB_URL = "https://github.com/areebshekhani/licenseguard";

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M12.516 2.17a.75.75 0 00-1.032 0 11.198 11.198 0 01-7.977 2.526c-1.121.019-2.127.74-2.592 1.983-.423.382-.971.635-1.55.697L2.61 6.973A.75.75 0 002 7.5v5c0 .667.334 1.289.895 1.663C4.06 15.451 6.903 17 12 17s7.94-1.549 9.105-3.837A2.25 2.25 0 0022 12.5v-5a.75.75 0 00-.61-.734l-.735-.145a4.21 4.21 0 01-1.55-.697 4.006 4.006 0 01-2.592-1.983 11.197 11.197 0 01-7.977-2.526zM12 15.5c-4.587 0-7.11-1.274-8.266-2.725C3.18 11.382 3 10.891 3 10.5V8.078l.65.129c.623.124 1.269.245 1.915.331.596.078 1.204.114 1.818.114h.214c.504 0 1.01-.028 1.515-.082.68-.074 1.348-.2 2-.378.652-.178 1.267-.404 1.848-.674.58-.27 1.101-.576 1.555-.908.454-.332.812-.665 1.064-.983.252-.318.397-.587.397-.797 0-.21-.145-.479-.397-.797-.252-.318-.61-.65-1.064-.983-.454-.332-.974-.639-1.555-.908a8.78 8.78 0 00-1.848-.674 8.577 8.577 0 00-2-.378A8.04 8.04 0 008.643 6h-.214a8.04 8.04 0 00-1.818.114 8.577 8.577 0 00-1.915.33L3.5 6.578v2.922c0 .391.18.882.734 1.697C5.39 14.226 7.413 15.5 12 15.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function LicenseGuardCard() {
  return (
    <BentoTile glowColor="cyan" colSpan={2} rowSpan={2}>
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldIcon className="w-6 h-6 text-cyan-electric flex-shrink-0" />
            <span className="text-xs font-mono text-cyan-electric/70 uppercase tracking-wider">
              LicenseGuard
            </span>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View LicenseGuard on GitHub"
            className="px-2 py-1 rounded-md text-xs font-mono text-cyan-electric/80 hover:bg-cyan-electric/10 hover:text-cyan-electric border border-cyan-electric/20 transition-colors"
          >
            GitHub →
          </a>
        </div>
        <div className="flex-1 mt-4">
          <LicenseGuardStatus />
        </div>
        <span className="block text-xs text-white/60 font-mono mt-4">
          Automated GaC engine (Python/Docker)
        </span>
      </div>
    </BentoTile>
  );
}

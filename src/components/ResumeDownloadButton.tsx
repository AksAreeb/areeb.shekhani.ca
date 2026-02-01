"use client";

export function ResumeDownloadButton() {
  return (
    <a
      href="/resume.pdf"
      download="Areeb-Shekhani-Resume.pdf"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm bg-white/[0.04] border border-white/[0.1] hover:border-cyan-electric/40 hover:bg-cyan-electric/5 text-cyan-electric/90 transition-colors"
    >
      <span className="text-white/50">$</span>
      <span>GET /resume.pdf</span>
    </a>
  );
}

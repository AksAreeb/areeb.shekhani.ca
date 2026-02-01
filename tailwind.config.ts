import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Fira Code", "ui-monospace", "monospace"],
      },
      colors: {
        emerald: {
          glow: "#50fa7b",
          cyber: "#50fa7b",
          dim: "#50fa7b40",
        },
        cyber: {
          blue: "#00d4ff",
          "blue-dim": "#00d4ff40",
        },
        cyan: {
          electric: "#00ffff",
          "electric-dim": "#00ffff40",
        },
      },
      boxShadow: {
        "emerald-glow": "0 0 40px rgba(0, 255, 136, 0.3)",
        "emerald-glow-lg": "0 0 60px rgba(0, 255, 136, 0.4)",
        "cyber-glow": "0 0 40px rgba(0, 212, 255, 0.3)",
        "cyber-glow-lg": "0 0 60px rgba(0, 212, 255, 0.4)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      backdropBlur: {
        xs: "2px",
        glass: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;

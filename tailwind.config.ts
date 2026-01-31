import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          glow: "#00ff88",
          dim: "#00ff8840",
        },
        cyber: {
          blue: "#00d4ff",
          "blue-dim": "#00d4ff40",
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
      },
    },
  },
  plugins: [],
} satisfies Config;

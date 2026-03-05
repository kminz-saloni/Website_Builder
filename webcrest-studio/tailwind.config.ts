import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0b",
        surface: "#111111",
        primary: "#00e0ff",
        secondary: "#7c3aed",
        accent: "#22c55e",
        text: "#e5e5e5"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0, 224, 255, 0.2), 0 0 32px rgba(0, 224, 255, 0.15)",
        "glow-secondary": "0 0 0 1px rgba(124, 58, 237, 0.28), 0 0 32px rgba(124, 58, 237, 0.2)"
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "hero-radial": "radial-gradient(circle at 20% 20%, rgba(0,224,255,0.2), transparent 45%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.25), transparent 40%), radial-gradient(circle at 60% 80%, rgba(34,197,94,0.15), transparent 35%)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulsegrid: "pulsegrid 8s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulsegrid: {
          "0%": { opacity: "0.24" },
          "50%": { opacity: "0.36" },
          "100%": { opacity: "0.24" }
        }
      }
    }
  },
  plugins: []
};

export default config;

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
        text: "#e5e5e5",
        muted: "#9ca3af"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0, 224, 255, 0.2), 0 0 32px rgba(0, 224, 255, 0.15)",
        "glow-lg":
          "0 0 0 1px rgba(0, 224, 255, 0.3), 0 0 50px rgba(0, 224, 255, 0.2), 0 0 80px rgba(0, 224, 255, 0.08)",
        "glow-secondary":
          "0 0 0 1px rgba(124, 58, 237, 0.28), 0 0 32px rgba(124, 58, 237, 0.2)",
        "glow-accent":
          "0 0 0 1px rgba(34, 197, 94, 0.25), 0 0 26px rgba(34, 197, 94, 0.18)",
        "inner-glow": "inset 0 0 20px rgba(0, 224, 255, 0.08)"
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgba(0,224,255,0.15), transparent 45%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.2), transparent 40%), radial-gradient(circle at 60% 80%, rgba(34,197,94,0.1), transparent 35%)",
        "gradient-primary":
          "linear-gradient(135deg, #00e0ff, #7c3aed)",
        "gradient-accent":
          "linear-gradient(135deg, #00e0ff, #22c55e)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-gentle": "float-gentle 5s ease-in-out infinite",
        pulsegrid: "pulsegrid 8s linear infinite",
        scan: "scan-line 6s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "gradient-spin": "gradient-rotate 4s linear infinite",
        "pulse-soft": "status-pulse 2s ease-in-out infinite",
        particle: "particle-float 8s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        },
        pulsegrid: {
          "0%": { opacity: "0.24" },
          "50%": { opacity: "0.36" },
          "100%": { opacity: "0.24" }
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" }
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "0.4",
            boxShadow: "0 0 15px rgba(0,224,255,0.2)"
          },
          "50%": {
            opacity: "1",
            boxShadow: "0 0 30px rgba(0,224,255,0.5)"
          }
        },
        "gradient-rotate": {
          "0%": { "--glow-angle": "0deg" },
          "100%": { "--glow-angle": "360deg" }
        },
        "status-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(0.85)" }
        },
        "particle-float": {
          "0%, 100%": { transform: "translate(0,0)", opacity: "0.3" },
          "25%": { transform: "translate(10px,-20px)", opacity: "0.6" },
          "50%": { transform: "translate(-5px,-40px)", opacity: "0.3" },
          "75%": { transform: "translate(15px,-25px)", opacity: "0.5" }
        }
      }
    }
  },
  plugins: []
};

export default config;

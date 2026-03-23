"use client";

import { motion } from "framer-motion";

export function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1: Radial gradient ambient light */}
      <motion.div
        className="absolute inset-0 bg-hero-radial"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 2: Animated dot grid */}
      <motion.div
        className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]"
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ opacity: 0.08 }}
      />

      {/* Layer 3: Scanning line */}
      <div
        className="absolute left-0 right-0 h-[2px] animate-scan"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,224,255,0.3) 20%, rgba(0,224,255,0.6) 50%, rgba(0,224,255,0.3) 80%, transparent 100%)",
          willChange: "transform",
        }}
      />

      {/* Layer 4: Floating orbs */}
      <motion.div
        className="absolute left-[15%] top-[20%] h-48 w-48 rounded-full bg-primary/10 blur-[80px]"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[20%] top-[60%] h-56 w-56 rounded-full bg-secondary/10 blur-[80px]"
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[50%] h-36 w-36 rounded-full bg-accent/5 blur-[60px]"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Layer 5: Subtle particle dots */}
      <div className="absolute inset-0" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/30 animate-particle"
            style={{
              left: `${15 + i * 14}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

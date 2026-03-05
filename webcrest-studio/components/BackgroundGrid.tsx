"use client";

import { motion } from "framer-motion";

export function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-hero-radial"
        animate={{ opacity: [0.75, 1, 0.8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-grid-pattern bg-[length:36px_36px]"
        animate={{ backgroundPosition: ["0px 0px", "36px 36px"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
        animate={{ y: [0, 22, 0], x: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/4 top-2/3 h-52 w-52 rounded-full bg-secondary/20 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Microscope, ChevronDown } from "lucide-react";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/80 p-8 md:p-14">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-60" />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      {/* Decorative corner accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-20 w-[1px] bg-gradient-to-b from-primary/40 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-0 h-[1px] w-20 bg-gradient-to-r from-primary/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-[1px] bg-gradient-to-t from-secondary/30 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[1px] w-20 bg-gradient-to-l from-secondary/30 to-transparent" />

      <motion.div
        className="relative z-10 max-w-3xl"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.p
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-primary"
        >
          <Microscope className="h-4 w-4" />
          Digital Engineering Laboratory
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl leading-[1.1] md:text-7xl lg:text-8xl"
        >
          <span className="text-white">Website </span>
          <span className="gradient-text">Development</span>
          <br className="hidden md:block" />
          <span className="text-white"> & Engineering Lab</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg text-white/60 md:text-xl"
        >
          I build fast, scalable, and experimental web products — engineered
          with precision and shipped with intent.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/experiments"
            className="group inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-7 py-3.5 font-mono text-sm text-primary transition-all duration-300 hover:border-primary/60 hover:shadow-glow"
          >
            View Experiments
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-mono text-sm text-white/80 transition-all duration-300 hover:border-primary/40 hover:text-primary"
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Microscope } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-glow md:p-12">
      <div className="pointer-events-none absolute inset-0 bg-hero-radial opacity-70" />
      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.22em] text-primary">
          <Microscope className="h-4 w-4" />
          Digital Engineering Laboratory
        </p>
        <h1 className="font-display text-5xl leading-tight text-white md:text-7xl">Web Engineering Lab</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/75 md:text-xl">
          I build fast, scalable, and experimental web products.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/experiments"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/15 px-6 py-3 font-mono text-sm text-primary transition hover:shadow-glow"
          >
            View Experiments
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-mono text-sm text-white transition hover:border-primary/50 hover:text-primary"
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

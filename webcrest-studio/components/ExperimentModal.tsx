"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

import { statusTone } from "@/lib/utils";
import { Experiment } from "@/types";

type ExperimentModalProps = {
  experiment: Experiment;
  onClose: () => void;
};

export function ExperimentModal({ experiment, onClose }: ExperimentModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        className="w-full max-w-2xl rounded-2xl border border-primary/30 bg-surface p-6 shadow-glow"
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{experiment.id}</p>
            <h3 className="mt-2 font-display text-2xl text-white">{experiment.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/15 p-2 text-white/70 transition hover:border-primary/40 hover:text-primary"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-white/75">{experiment.details}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {experiment.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-white/15 bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-white/70"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2">
          <span className={`rounded-full border px-3 py-1 font-mono text-xs ${statusTone(experiment.status)}`}>
            {experiment.status}
          </span>
          <span className="rounded-full border border-secondary/35 bg-secondary/10 px-3 py-1 font-mono text-xs text-secondary">
            {experiment.category}
          </span>
        </div>
      </motion.article>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

import { statusTone } from "@/lib/utils";
import { Experiment } from "@/types";

type ExperimentModalProps = {
  experiment: Experiment;
  onClose: () => void;
};

export function ExperimentModal({ experiment, onClose }: ExperimentModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        className="relative w-full max-w-2xl rounded-2xl border border-primary/20 bg-surface shadow-glow-lg"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Experiment: ${experiment.title}`}
      >
        {/* Gradient accent line */}
        <div className="absolute left-0 right-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-primary via-secondary to-primary" />

        <div className="p-6">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {experiment.id}
              </p>
              <h3 className="mt-2 font-display text-2xl text-white">
                {experiment.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 p-2 text-white/50 transition hover:border-primary/40 hover:text-primary"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="text-white/70 leading-relaxed">{experiment.details}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {experiment.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-white/10 bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-white/60"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 border-t border-white/[0.08] pt-5">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs ${statusTone(
                experiment.status
              )}`}
            >
              <span
                className={`status-dot ${experiment.status === "Stable"
                  ? "status-dot--online"
                  : "status-dot--active"
                  }`}
              />
              {experiment.status}
            </span>
            <span className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 font-mono text-xs text-secondary">
              {experiment.category}
            </span>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

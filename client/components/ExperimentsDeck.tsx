"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { ExperimentModal } from "@/components/ExperimentModal";
import { experiments } from "@/lib/data";
import { statusTone } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ExperimentsDeck() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected =
    experiments.find((item) => item.id === selectedId) ?? null;

  return (
    <section>
      <SectionHeading
        eyebrow="Interactive Demos"
        title="Experiment Deck"
        description="UI animation playgrounds, API prototypes, AI integrations, and performance benchmark systems."
      />

      <motion.div
        className="grid gap-5 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {experiments.map((experiment) => (
          <motion.button
            key={experiment.id}
            variants={cardVariants}
            onClick={() => setSelectedId(experiment.id)}
            className="card-surface group rounded-2xl p-6 text-left"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {experiment.id}
            </p>
            <h3 className="mt-2 font-display text-2xl text-white">
              {experiment.title}
            </h3>
            <p className="mt-2 text-sm text-white/60">{experiment.summary}</p>
            <div className="mt-4 flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] ${statusTone(
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
              <span className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 font-mono text-[11px] text-secondary">
                {experiment.category}
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selected ? (
          <ExperimentModal
            experiment={selected}
            onClose={() => setSelectedId(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

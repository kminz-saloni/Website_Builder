"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { ExperimentModal } from "@/components/ExperimentModal";
import { experiments } from "@/lib/data";
import { statusTone } from "@/lib/utils";

export function ExperimentsDeck() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = experiments.find((item) => item.id === selectedId) ?? null;

  return (
    <section>
      <SectionHeading
        eyebrow="Interactive Demos"
        title="Experiment Deck"
        description="UI animation playgrounds, API prototypes, AI integrations, and performance benchmark systems."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {experiments.map((experiment) => (
          <button
            key={experiment.id}
            onClick={() => setSelectedId(experiment.id)}
            className="rounded-2xl border border-white/10 bg-surface/85 p-6 text-left transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{experiment.id}</p>
            <h3 className="mt-2 font-display text-2xl text-white">{experiment.title}</h3>
            <p className="mt-2 text-sm text-white/75">{experiment.summary}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className={`rounded-full border px-3 py-1 font-mono text-[11px] ${statusTone(experiment.status)}`}>
                {experiment.status}
              </span>
              <span className="rounded-full border border-secondary/35 bg-secondary/10 px-3 py-1 font-mono text-[11px] text-secondary">
                {experiment.category}
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected ? <ExperimentModal experiment={selected} onClose={() => setSelectedId(null)} /> : null}
      </AnimatePresence>
    </section>
  );
}

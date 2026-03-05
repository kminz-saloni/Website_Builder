"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { projects } from "@/lib/data";
import { statusTone } from "@/lib/utils";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectModal } from "@/components/ProjectModal";

export function FeaturedExperiments() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find((project) => project.id === selectedId) ?? null;

  return (
    <section className="mt-16">
      <SectionHeading
        eyebrow="Case Studies"
        title="Featured Experiments"
        description="Each project is documented as an engineering experiment with architecture and outcomes."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedId(project.id)}
            className="group rounded-2xl border border-white/10 bg-surface/85 p-6 text-left transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Experiment #{project.id}</p>
            <h3 className="mt-3 font-display text-2xl text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-white/70">{project.shortDescription}</p>
            <p className="mt-4 text-sm text-white/80">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">Goal:</span> {project.goal}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className={`mt-5 inline-flex rounded-full border px-3 py-1 font-mono text-[11px] ${statusTone(project.status)}`}>
              {project.status}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal project={selectedProject} onClose={() => setSelectedId(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

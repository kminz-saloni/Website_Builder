"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { projects } from "@/lib/data";
import { statusTone } from "@/lib/utils";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectModal } from "@/components/ProjectModal";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function FeaturedExperiments() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject =
    projects.find((project) => project.id === selectedId) ?? null;

  return (
    <section className="mt-20">
      <SectionHeading
        eyebrow="Case Studies"
        title="Featured Experiments"
        description="Each project is documented as an engineering experiment with architecture and outcomes."
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
        {projects.slice(0, 4).map((project) => (
          <motion.button
            key={project.id}
            variants={cardVariants}
            onClick={() => setSelectedId(project.id)}
            className="card-surface group rounded-2xl p-6 text-left"
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Experiment #{project.id}
              </p>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] ${statusTone(
                  project.status
                )}`}
              >
                <span
                  className={`status-dot ${project.status === "Live" || project.status === "Completed"
                      ? "status-dot--online"
                      : "status-dot--active"
                    }`}
                />
                {project.status}
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-white/60">
              {project.shortDescription}
            </p>
            <p className="mt-4 text-sm text-white/70">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Goal:
              </span>{" "}
              {project.goal}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/60 transition-colors duration-200 group-hover:border-primary/20 group-hover:text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedId(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

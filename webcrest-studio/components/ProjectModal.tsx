"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { ProjectCaseStudy } from "@/types";
import { statusTone } from "@/lib/utils";

type ProjectModalProps = {
  project: ProjectCaseStudy;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Keyboard close + scroll lock
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
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-primary/20 bg-surface shadow-glow-lg"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Project: ${project.title}`}
      >
        {/* Gradient accent line */}
        <div className="absolute left-0 right-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-primary via-secondary to-primary" />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Experiment #{project.id}
              </p>
              <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">
                {project.title}
              </h3>
              <span
                className={`mt-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs ${statusTone(
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
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 p-2 text-white/50 transition hover:border-primary/40 hover:text-primary"
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Content sections */}
          <div className="space-y-6 text-sm">
            {[
              { label: "Overview", content: project.overview },
              { label: "Problem", content: project.problem },
              { label: "Solution", content: project.solution },
              { label: "Outcome", content: project.outcome },
            ].map((section) => (
              <div key={section.label}>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {section.label}
                </p>
                <p className="text-white/70 leading-relaxed">{section.content}</p>
              </div>
            ))}

            {/* Architecture */}
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Architecture
              </p>
              <ul className="space-y-2">
                {project.architecture.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-3 text-white/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.08] pt-6">
            <Link
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-5 py-2.5 font-mono text-xs text-primary transition hover:shadow-glow"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Live Site
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-xs text-white/80 transition hover:border-primary/40 hover:text-primary"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

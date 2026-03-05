"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Link from "next/link";

import { ProjectCaseStudy } from "@/types";

type ProjectModalProps = {
  project: ProjectCaseStudy;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.article
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-primary/30 bg-surface p-6 shadow-glow"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.24 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Experiment #{project.id}</p>
            <h3 className="mt-2 font-display text-2xl text-white">{project.title}</h3>
            <p className="mt-2 text-white/70">{project.overview}</p>
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

        <div className="space-y-5 text-sm text-white/75">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">Problem</p>
            <p>{project.problem}</p>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">Solution</p>
            <p>{project.solution}</p>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">Architecture</p>
            <ul className="space-y-2">
              {project.architecture.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-white/5 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">Outcome</p>
            <p>{project.outcome}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs text-primary hover:shadow-glow"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
            Live Site
          </Link>
          <Link
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 font-mono text-xs text-white hover:border-primary/40 hover:text-primary"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </motion.article>
    </motion.div>
  );
}

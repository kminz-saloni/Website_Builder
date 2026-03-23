"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

import { statusTone } from "@/lib/utils";
import { ProjectCaseStudy } from "@/types";

type CaseStudySectionProps = {
  project: ProjectCaseStudy;
};

export function CaseStudySection({ project }: CaseStudySectionProps) {
  return (
    <motion.article
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/85"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Top gradient accent */}
      <div className="h-[2px] bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Experiment #{project.id}
            </p>
            <h2 className="mt-2 font-display text-3xl text-white">
              {project.title}
            </h2>
          </div>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs ${statusTone(
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

        <section className="mt-8 grid gap-7 lg:grid-cols-2">
          <div className="space-y-5">
            {[
              { label: "Overview", content: project.overview },
              { label: "Problem", content: project.problem },
              { label: "Solution", content: project.solution },
              { label: "Outcome", content: project.outcome },
            ].map((s) => (
              <div key={s.label}>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {s.label}
                </h3>
                <p className="mt-2 text-white/70">{s.content}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Architecture
              </h3>
              <ul className="mt-2 space-y-2 text-white/70">
                {project.architecture.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-3 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Tech Stack
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
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
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                Screenshot
              </h3>
              <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                <Image
                  src={project.screenshots[0].src}
                  alt={project.screenshots[0].alt}
                  width={1200}
                  height={675}
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-7 flex flex-wrap gap-3 border-t border-white/[0.08] pt-6">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-5 py-2.5 font-mono text-xs text-primary transition hover:shadow-glow"
          >
            <ExternalLink className="h-4 w-4" />
            Live Site
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-xs text-white/80 transition hover:border-primary/40 hover:text-primary"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

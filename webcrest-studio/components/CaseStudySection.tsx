import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import { statusTone } from "@/lib/utils";
import { ProjectCaseStudy } from "@/types";

type CaseStudySectionProps = {
  project: ProjectCaseStudy;
};

export function CaseStudySection({ project }: CaseStudySectionProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-surface/85 p-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Experiment #{project.id}</p>
          <h2 className="mt-2 font-display text-3xl text-white">{project.title}</h2>
        </div>
        <span className={`rounded-full border px-3 py-1 font-mono text-xs ${statusTone(project.status)}`}>
          {project.status}
        </span>
      </div>

      <section className="mt-8 grid gap-7 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Overview</h3>
            <p className="mt-2 text-white/75">{project.overview}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Problem</h3>
            <p className="mt-2 text-white/75">{project.problem}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Solution</h3>
            <p className="mt-2 text-white/75">{project.solution}</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Outcome</h3>
            <p className="mt-2 text-white/75">{project.outcome}</p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Architecture</h3>
            <ul className="mt-2 space-y-2 text-white/75">
              {project.architecture.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Tech Stack</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/15 bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Screenshot</h3>
            <div className="mt-2 overflow-hidden rounded-xl border border-white/15 bg-black/30">
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

      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs text-primary hover:shadow-glow"
        >
          <ExternalLink className="h-4 w-4" />
          Live Site
        </Link>
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2 font-mono text-xs text-white hover:border-primary/40 hover:text-primary"
        >
          <Github className="h-4 w-4" />
          GitHub
        </Link>
      </div>
    </article>
  );
}

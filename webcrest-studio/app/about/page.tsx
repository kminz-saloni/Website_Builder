import type { Metadata } from "next";

import { SectionHeading } from "@/components/SectionHeading";

const sections = [
  {
    title: "Philosophy",
    content:
      "Software should be both engineered and experimented with. WEB CREST LAB treats each project as a hypothesis: design for clarity, build for scale, and validate in production."
  },
  {
    title: "Engineering Approach",
    content:
      "I use typed architecture, reusable design systems, and observability-first workflows to keep shipping velocity high without sacrificing reliability."
  },
  {
    title: "Tools Used",
    content:
      "Next.js, TypeScript, Tailwind CSS, Framer Motion, serverless tooling, CI pipelines, and performance diagnostics drive the lab stack."
  },
  {
    title: "Learning Mindset",
    content:
      "I run continuous experiments across UX, API resilience, and deployment workflows, then turn insights into better defaults and sharper products."
  }
];

export const metadata: Metadata = {
  title: "About",
  description: "About WEB CREST LAB: builder mindset, engineering discipline, and product experimentation."
};

export default function AboutPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="About The Lab"
        title="Builder, Engineer, Experimenter"
        description="WEB CREST LAB is a digital product workshop focused on high-performance interfaces and practical innovation."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-white/10 bg-surface/85 p-6">
            <h2 className="font-display text-2xl text-white">{section.title}</h2>
            <p className="mt-3 text-white/75">{section.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

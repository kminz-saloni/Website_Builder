"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/SectionHeading";

const sections = [
  {
    title: "Philosophy",
    content:
      "Software should be both engineered and experimented with. WEB CREST LAB treats each project as a hypothesis: design for clarity, build for scale, and validate in production.",
  },
  {
    title: "Engineering Approach",
    content:
      "I use typed architecture, reusable design systems, and observability-first workflows to keep shipping velocity high without sacrificing reliability.",
  },
  {
    title: "Tools Used",
    content:
      "Next.js, TypeScript, Tailwind CSS, Framer Motion, serverless tooling, CI pipelines, and performance diagnostics drive the lab stack.",
  },
  {
    title: "Learning Mindset",
    content:
      "I run continuous experiments across UX, API resilience, and deployment workflows, then turn insights into better defaults and sharper products.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <div>
      <SectionHeading
        eyebrow="About The Lab"
        title="Builder, Engineer, Experimenter"
        description="WEB CREST LAB is a digital product workshop focused on high-performance interfaces and practical innovation."
      />

      <motion.div
        className="grid gap-5 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {sections.map((section) => (
          <motion.article
            key={section.title}
            variants={cardVariants}
            className="card-surface rounded-2xl p-6"
          >
            <h2 className="font-display text-2xl text-white">
              {section.title}
            </h2>
            <p className="mt-3 text-white/60">{section.content}</p>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

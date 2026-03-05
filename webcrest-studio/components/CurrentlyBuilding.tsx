import { Bot, Gauge, Workflow } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";

const items = [
  {
    title: "AI Tools",
    icon: Bot,
    description: "Assistant-style interfaces and typed AI workflow pipelines for practical product use."
  },
  {
    title: "Web Automation",
    icon: Workflow,
    description: "Automated operations with event-driven integrations and deployment-friendly scripts."
  },
  {
    title: "Experimental UI Systems",
    icon: Gauge,
    description: "Fast visual systems focused on motion, readability, and interaction clarity."
  }
];

export function CurrentlyBuilding() {
  return (
    <section className="mt-16">
      <SectionHeading
        eyebrow="R&D"
        title="Currently Building"
        description="Active tracks in the lab, where prototypes become production systems."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ title, icon: Icon, description }) => (
          <article
            key={title}
            className="rounded-2xl border border-white/10 bg-surface/85 p-6 transition hover:border-accent/40 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.25),0_0_26px_rgba(34,197,94,0.18)]"
          >
            <Icon className="h-5 w-5 text-accent" />
            <h3 className="mt-4 font-display text-xl text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/75">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

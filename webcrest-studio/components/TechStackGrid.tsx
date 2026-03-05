"use client";

import { Braces, CloudCog, DatabaseZap, Wrench } from "lucide-react";

import { techCategories } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

const iconMap = {
  Frontend: Braces,
  Backend: DatabaseZap,
  Infrastructure: CloudCog,
  Tools: Wrench
};

export function TechStackGrid() {
  return (
    <section className="mt-16">
      <SectionHeading
        eyebrow="Systems"
        title="Tech Stack Visualization"
        description="A categorized engineering stack across product delivery, reliability, and experimentation."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {techCategories.map((category) => {
          const Icon = iconMap[category.label];

          return (
            <article
              key={category.label}
              className="rounded-2xl border border-white/10 bg-surface/85 p-6 transition duration-300 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="mb-4 inline-flex rounded-lg border border-primary/40 bg-primary/10 p-2 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-white">{category.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/15 bg-black/35 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-white/70 transition hover:border-secondary/40 hover:text-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

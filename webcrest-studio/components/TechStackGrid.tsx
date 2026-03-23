"use client";

import { Braces, CloudCog, DatabaseZap, Wrench } from "lucide-react";
import { motion } from "framer-motion";

import { techCategories } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

const iconMap = {
  Frontend: Braces,
  Backend: DatabaseZap,
  Infrastructure: CloudCog,
  Tools: Wrench,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function TechStackGrid() {
  return (
    <section className="mt-20">
      <SectionHeading
        eyebrow="Systems"
        title="Tech Stack Visualization"
        description="A categorized engineering stack across product delivery, reliability, and experimentation."
      />
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {techCategories.map((category) => {
          const Icon = iconMap[category.label];

          return (
            <motion.article
              key={category.label}
              variants={cardVariants}
              className="card-surface rounded-2xl p-6"
            >
              <div className="mb-4 inline-flex rounded-lg border border-primary/30 bg-primary/[0.08] p-2.5 text-primary transition-all duration-300 hover:shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-white">
                {category.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <motion.span
                    key={item}
                    className="rounded-md border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-white/60 transition-all duration-200 hover:border-secondary/40 hover:text-secondary hover:shadow-[0_0_12px_rgba(124,58,237,0.15)]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

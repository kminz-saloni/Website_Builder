"use client";

import { Bot, Gauge, Workflow } from "lucide-react";
import { motion } from "framer-motion";

import { SectionHeading } from "@/components/SectionHeading";

const items = [
  {
    title: "AI Tools",
    icon: Bot,
    description:
      "Assistant-style interfaces and typed AI workflow pipelines for practical product use.",
  },
  {
    title: "Web Automation",
    icon: Workflow,
    description:
      "Automated operations with event-driven integrations and deployment-friendly scripts.",
  },
  {
    title: "Experimental UI Systems",
    icon: Gauge,
    description:
      "Fast visual systems focused on motion, readability, and interaction clarity.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function CurrentlyBuilding() {
  return (
    <section className="mt-20">
      <SectionHeading
        eyebrow="R&D"
        title="Currently Building"
        description="Active tracks in the lab, where prototypes become production systems."
      />
      <motion.div
        className="grid gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {items.map(({ title, icon: Icon, description }) => (
          <motion.article
            key={title}
            variants={cardVariants}
            className="group rounded-2xl border border-white/[0.08] bg-surface/85 p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-glow-accent"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="inline-flex rounded-lg border border-accent/20 bg-accent/[0.08] p-2.5 text-accent transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(34,197,94,0.2)]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-xl text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/60">{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

"use client";

import { Activity, Cpu, Rocket, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { labStatus } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function StatusPanel() {
  const statusItems = [
    { label: "System", value: labStatus.system, icon: ShieldCheck, isOnline: true },
    { label: "Projects Running", value: String(labStatus.projectsRunning), icon: Cpu },
    { label: "Experiments", value: labStatus.experiments, icon: Activity, isActive: true },
    { label: "Last Deployment", value: labStatus.deployment, icon: Rocket },
  ];

  return (
    <section className="mt-20">
      <SectionHeading
        eyebrow="Live Metrics"
        title="LAB STATUS"
        description="Real-time operational summary from the studio control center."
      />
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {statusItems.map(({ label, value, icon: Icon, isOnline, isActive }) => (
          <motion.article
            key={label}
            variants={cardVariants}
            className="card-surface rounded-2xl p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg border border-primary/20 bg-primary/[0.08] p-2 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              {isOnline && <span className="status-dot status-dot--online" />}
              {isActive && <span className="status-dot status-dot--active" />}
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/40">
              {label}
            </p>
            <p className="mt-2 font-display text-2xl text-white">{value}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

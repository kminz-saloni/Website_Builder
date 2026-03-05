import { Activity, Cpu, Rocket, ShieldCheck } from "lucide-react";

import { labStatus } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function StatusPanel() {
  const statusItems = [
    { label: "System", value: labStatus.system, icon: ShieldCheck },
    { label: "Projects Running", value: String(labStatus.projectsRunning), icon: Cpu },
    { label: "Experiments", value: labStatus.experiments, icon: Activity },
    { label: "Last Deployment", value: labStatus.deployment, icon: Rocket }
  ];

  return (
    <section className="mt-16">
      <SectionHeading
        eyebrow="Live Metrics"
        title="LAB STATUS"
        description="Real-time operational summary from the studio control center."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statusItems.map(({ label, value, icon: Icon }) => (
          <article
            key={label}
            className="rounded-2xl border border-white/10 bg-surface/80 p-5 transition hover:border-primary/40 hover:shadow-glow"
          >
            <Icon className="mb-4 h-5 w-5 text-primary" />
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/50">{label}</p>
            <p className="mt-2 font-display text-2xl text-white">{value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import type { Metadata } from "next";

import { CaseStudySection } from "@/components/CaseStudySection";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Production projects documented as engineering case studies from WEB CREST LAB."
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Project Archive"
        title="Engineering Case Studies"
        description="Every project is structured by overview, problem, solution, architecture, stack, screenshots, and measurable outcomes."
      />

      {projects.map((project) => (
        <CaseStudySection key={project.id} project={project} />
      ))}
    </div>
  );
}

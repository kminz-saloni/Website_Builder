import type { Metadata } from "next";

import { ExperimentsDeck } from "@/components/ExperimentsDeck";

export const metadata: Metadata = {
  title: "Experiments",
  description: "Interactive demos and lab prototypes in animation systems, APIs, AI integrations, and performance testing."
};

export default function ExperimentsPage() {
  return <ExperimentsDeck />;
}

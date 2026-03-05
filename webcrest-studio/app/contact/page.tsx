import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with WEB CREST LAB for freelance work and technical collaborations."
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Contact"
        title="Open for freelance projects and collaborations."
        description="Send a message to start a build, audit, or experimental product engagement."
      />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <ContactForm />

        <aside className="rounded-2xl border border-white/10 bg-surface/85 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">External Channels</p>
          <div className="mt-4 space-y-3">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/80 transition hover:text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/80 transition hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/70">Direct email: contact@webcrest.studio</p>
        </aside>
      </div>
    </div>
  );
}

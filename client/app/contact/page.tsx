import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Phone, MessageCircle, Mail } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WEB CREST LAB for freelance work and technical collaborations.",
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

        <aside className="card-surface rounded-2xl p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            External Channels
          </p>
          <div className="mt-5 space-y-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-white/70 transition-colors duration-200 hover:text-primary"
              aria-label="GitHub profile"
            >
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <Github className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">GitHub</p>
                <p className="font-mono text-xs text-white/40">Open source & projects</p>
              </div>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-white/70 transition-colors duration-200 hover:text-primary"
              aria-label="LinkedIn profile"
            >
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <Linkedin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">LinkedIn</p>
                <p className="font-mono text-xs text-white/40">Professional network</p>
              </div>
            </Link>
          </div>

          <div className="mt-6 border-t border-white/8 pt-5 space-y-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Direct Email
              </p>
              <Link
                href="mailto:webcreststudios@gmail.com"
                className="mt-2 flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                webcreststudios@gmail.com
              </Link>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                WhatsApp
              </p>
              <Link
                href="https://wa.me/919811674377"
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                +91 9811674377
              </Link>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Phone
              </p>
              <Link
                href="tel:+919811674377"
                className="mt-2 flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +91 9811674377
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-black/40">
      {/* Gradient divider */}
      <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="font-display tracking-wider text-primary">
            WEB CREST LAB
          </span>{" "}
          <br className="sm:hidden" />
          Engineering high-performance web experiments.
        </p>
        <div className="flex items-center gap-5 font-mono text-xs">
          <Link
            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-primary"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </Link>
          <Link
            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-primary"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-3.5 w-3.5" />
            LinkedIn
          </Link>
          <span className="text-white/30" suppressHydrationWarning>
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}

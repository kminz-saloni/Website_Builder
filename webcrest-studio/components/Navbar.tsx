"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FlaskConical, Orbit } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experiments", label: "Experiments" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link href="/" className="group inline-flex items-center gap-3">
          <div className="rounded-xl border border-primary/40 bg-surface p-2 shadow-glow">
            <FlaskConical className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-primary">WEB CREST LAB</p>
            <p className="font-mono text-xs text-white/70">webcrest.studio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm transition ${
                  active
                    ? "bg-primary/15 text-primary"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-surface px-4 py-2 font-mono text-xs text-primary transition hover:shadow-glow"
        >
          <Orbit className="h-4 w-4" />
          Start Session
        </Link>
      </div>
    </header>
  );
}

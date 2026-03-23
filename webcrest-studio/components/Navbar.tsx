"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, Orbit, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ScrollProgress } from "@/components/ScrollProgress";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experiments", label: "Experiments" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled
            ? "border-b border-white/10 bg-bg/70 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "border-b border-transparent bg-bg/40"
          } backdrop-blur-xl`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-8">
          {/* Logo */}
          <Link href="/" className="group inline-flex items-center gap-3">
            <div className="rounded-xl border border-primary/40 bg-surface p-2 shadow-glow transition-shadow duration-300 group-hover:shadow-glow-lg">
              <FlaskConical className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-display text-sm tracking-[0.3em] text-primary">
                WEB CREST LAB
              </p>
              <p className="font-mono text-xs text-white/50">
                webcrest.studio
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-4 py-2 text-sm transition-colors duration-200 ${active ? "text-primary" : "text-white/70 hover:text-white"
                    }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-primary to-secondary"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-xs text-primary transition-all duration-300 hover:border-primary/60 hover:shadow-glow sm:inline-flex"
            >
              <Orbit className="h-4 w-4" />
              Start Session
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg border border-white/15 p-2 text-white/70 transition hover:border-primary/40 hover:text-primary md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-overlay"
            className="fixed inset-0 z-[55] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeMobile}
              aria-hidden="true"
            />
            {/* Drawer panel */}
            <motion.nav
              id="mobile-nav"
              className="absolute right-0 top-0 flex h-full w-72 flex-col gap-2 border-l border-white/10 bg-bg/95 px-6 pb-8 pt-24 backdrop-blur-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              aria-label="Mobile navigation"
            >
              {links.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block rounded-lg px-4 py-3 text-base transition ${active
                          ? "bg-primary/10 text-primary"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 font-mono text-xs text-primary transition hover:shadow-glow"
                >
                  <Orbit className="h-4 w-4" />
                  Start Session
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

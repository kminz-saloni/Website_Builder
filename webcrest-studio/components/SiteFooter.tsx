import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-10 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="font-display tracking-wider text-primary">WEB CREST LAB</span> <br className="sm:hidden" />
          Engineering high-performance web experiments.
        </p>
        <div className="flex items-center gap-4 font-mono text-xs">
          <Link className="hover:text-primary" href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link className="hover:text-primary" href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

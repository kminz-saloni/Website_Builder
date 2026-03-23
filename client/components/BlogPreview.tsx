import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

const featured = blogPosts.slice(0, 3);

const categoryColors: Record<string, string> = {
  "Web Development": "text-primary border-primary/30 bg-primary/10",
  "SEO": "text-secondary border-secondary/30 bg-secondary/10",
  "Business": "text-accent border-accent/30 bg-accent/10",
};

export function BlogPreview() {
  return (
    <section>
      {/* Section header */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">Lab Notes</p>
            <div className="h-[1px] w-12 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h2 className="font-display text-3xl tracking-tight text-white md:text-4xl">
            From The Blog
          </h2>
          <p className="max-w-md text-sm text-white/55">
            Practical guides on website development, SEO, and digital growth.
          </p>
        </div>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-primary opacity-80 transition-opacity hover:opacity-100"
        >
          View all articles
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card-surface group flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,224,255,0.08)]"
          >
            <span
              className={`mb-3 inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest ${categoryColors[post.category] ?? "text-white/40 border-white/10 bg-white/5"}`}
            >
              {post.category}
            </span>
            <h3 className="mb-2 font-display text-base leading-snug text-white transition-colors group-hover:text-primary">
              {post.title}
            </h3>
            <p className="flex-1 text-xs leading-relaxed text-white/50">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">
              <span className="flex items-center gap-1 font-mono text-[11px] text-white/30">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
              <span className="font-mono text-[11px] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

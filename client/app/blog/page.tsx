import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Web Development Blog | Tips, Guides & Insights",
  description:
    "Expert articles on website development, local SEO, Next.js, and how to grow your business online. Practical guides written by WEB CREST LAB.",
  keywords: [
    "website development blog",
    "web engineering articles",
    "next.js guide",
    "local SEO tips",
    "custom web design advice"
  ]
};

const categoryColors: Record<string, string> = {
  "Web Development": "text-primary border-primary/30 bg-primary/10",
  "SEO": "text-secondary border-secondary/30 bg-secondary/10",
  "Business": "text-accent border-accent/30 bg-accent/10",
};

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Lab Notes"
        title="Web Development Blog"
        description="Practical guides, engineering insights, and honest advice on building websites that grow your business."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card-surface group flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,224,255,0.1)]"
          >
            {/* Category badge */}
            <span
              className={`mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${categoryColors[post.category] ?? "text-white/50 border-white/10 bg-white/5"}`}
            >
              <Tag className="h-2.5 w-2.5" />
              {post.category}
            </span>

            {/* Title */}
            <h2 className="mb-3 font-display text-lg leading-snug text-white transition-colors group-hover:text-primary">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="mb-5 flex-1 text-sm leading-relaxed text-white/55">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/[0.07] pt-4">
              <div className="flex items-center gap-1.5 font-mono text-xs text-white/35">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </div>
              <span className="flex items-center gap-1 font-mono text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read more
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-surface/60 p-8 md:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,224,255,0.06),transparent_70%)]" />
        <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-1 font-mono text-xs uppercase tracking-[0.25em] text-primary">Ready to Build?</p>
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Let&apos;s engineer your website together.
            </h2>
            <p className="mt-2 max-w-lg text-sm text-white/55">
              From service websites to full-stack platforms — we build for speed, SEO, and conversions.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-7 py-3.5 font-mono text-sm text-primary transition-all duration-300 hover:border-primary/60 hover:shadow-glow"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

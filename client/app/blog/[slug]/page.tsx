import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// Parse markdown-like content to JSX-friendly HTML
function parseContent(content: string) {
  return content
    .trim()
    .split("\n")
    .map((line, i) => {
      if (line.startsWith("## ")) return <h2 key={i} className="mt-10 mb-4 font-display text-2xl text-white">{line.slice(3)}</h2>;
      if (line.startsWith("### ")) return <h3 key={i} className="mt-8 mb-3 font-display text-xl text-white/90">{line.slice(4)}</h3>;
      if (line.startsWith("**") && line.endsWith("**") && line !== "**") {
        return <p key={i} className="mt-4 font-semibold text-white">{line.slice(2, -2)}</p>;
      }
      if (line.startsWith("- ")) {
        return <li key={i} className="ml-5 list-disc text-white/65">{line.slice(2)}</li>;
      }
      if (line.startsWith("> ")) {
        return (
          <blockquote key={i} className="my-6 border-l-2 border-primary pl-5 font-mono text-sm italic text-primary/80">
            {line.slice(2)}
          </blockquote>
        );
      }
      if (line.startsWith("```") || line === "```") return null;
      if (line === "") return <div key={i} className="h-3" />;
      // Table rows
      if (line.startsWith("|")) {
        const cells = line.split("|").filter(Boolean).map((c) => c.trim());
        const isHeader = cells.some((c) => c === "---" || c === "---|");
        if (isHeader) return null;
        return (
          <tr key={i} className="border-b border-white/[0.07]">
            {cells.map((cell, ci) => (
              <td key={ci} className="py-2 pr-6 text-sm text-white/65">{cell}</td>
            ))}
          </tr>
        );
      }
      return <p key={i} className="text-white/65 leading-relaxed">{line}</p>;
    });
}

const categoryColors: Record<string, string> = {
  "Web Development": "text-primary border-primary/30 bg-primary/10",
  "SEO": "text-secondary border-secondary/30 bg-secondary/10",
  "Business": "text-accent border-accent/30 bg-accent/10",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Back link */}
      <Link
        href="/blog"
        className="group mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
        All Articles
      </Link>

      {/* Header */}
      <header className="mb-10 space-y-5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${categoryColors[post.category] ?? "text-white/50 border-white/10 bg-white/5"}`}
        >
          <Tag className="h-2.5 w-2.5" />
          {post.category}
        </span>

        <h1 className="font-display text-3xl leading-tight text-white md:text-4xl">
          {post.title}
        </h1>

        <p className="text-lg text-white/55">{post.excerpt}</p>

        <div className="flex flex-wrap items-center gap-5 border-t border-white/[0.07] pt-5 font-mono text-xs text-white/35">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3 w-3" />
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric", month: "long", year: "numeric"
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>
      </header>

      {/* Content */}
      <article className="prose-dark space-y-2">
        {parseContent(post.content)}
      </article>

      {/* Tags */}
      <div className="mt-12 flex flex-wrap gap-2 border-t border-white/[0.07] pt-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-white/45"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="my-12 overflow-hidden rounded-2xl border border-primary/20 bg-surface/60 p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,224,255,0.05),transparent_70%)]" />
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.25em] text-primary">WEB CREST LAB</p>
        <h2 className="mb-2 font-display text-xl text-white">
          Need a professional website?
        </h2>
        <p className="mb-5 text-sm text-white/55">
          We engineer fast, conversion-optimized websites for businesses. Let&apos;s talk about your project.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all duration-300 hover:border-primary/60 hover:shadow-glow"
        >
          Get a Free Consultation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section>
          <h2 className="mb-6 font-display text-xl text-white">Related Articles</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="card-surface group rounded-xl p-5 transition-all duration-300 hover:border-primary/30"
              >
                <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-white/35">
                  {rp.category}
                </p>
                <h3 className="text-sm font-semibold leading-snug text-white transition-colors group-hover:text-primary">
                  {rp.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-3">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="max-w-3xl text-white/75">{description}</p> : null}
    </div>
  );
}

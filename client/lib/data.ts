import { Experiment, ProjectCaseStudy, TechCategory } from "@/types";

export const labStatus = {
  system: "Online",
  projectsRunning: 4,
  experiments: "Active",
  deployment: "Live"
};

export const projects: ProjectCaseStudy[] = [
  {
    id: "001",
    title: "Balloon Decoration Website",
    shortDescription: "Conversion-focused business site with scheduling and quote workflows.",
    goal: "Build a responsive lead-generation website that loads fast and converts local traffic.",
    stack: ["Next.js", "Tailwind CSS", "Stripe", "Vercel"],
    status: "Completed",
    overview:
      "A brand-forward service site for a balloon decor company with strong local SEO and mobile-first booking flows.",
    problem:
      "The business relied on social DMs and had no structured funnel, causing slow response times and lost bookings.",
    solution:
      "Engineered a modular booking funnel with clear CTAs, service-tier cards, and a quote capture form wired to automation.",
    architecture: [
      "Next.js App Router for route-level performance",
      "Reusable section components and typed content models",
      "Serverless form relay and Stripe checkout links",
      "Vercel edge deployment with image optimization"
    ],
    screenshots: [{ src: "/images/projects/placeholder-1.svg", alt: "Balloon project dashboard preview" }],
    outcome:
      "Improved lead quality and faster turnaround on quote requests with a visibly stronger professional brand presence.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "002",
    title: "ServiceOps Client Portal",
    shortDescription: "Internal dashboard for service teams to track tasks, clients, and SLA states.",
    goal: "Unify task execution and client communication in one secure, responsive dashboard.",
    stack: ["TypeScript", "React", "Supabase", "Framer Motion"],
    status: "Live",
    overview:
      "An authenticated operations panel for small teams managing multi-stage projects and recurring support requests.",
    problem:
      "Client updates were fragmented across spreadsheets, emails, and chat which introduced delays and missed handoffs.",
    solution:
      "Created a centralized workflow board with SLA badges, status automation, and role-based project views.",
    architecture: [
      "Component-driven dashboard shell",
      "Realtime datastore for task states",
      "Type-safe service layer with strict models",
      "Animated UI feedback for state transitions"
    ],
    screenshots: [{ src: "/images/projects/placeholder-2.svg", alt: "ServiceOps project board screenshot" }],
    outcome:
      "Reduced coordination overhead and made progress tracking transparent for both operators and clients.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "003",
    title: "Commerce Performance Rebuild",
    shortDescription: "Speed-focused storefront rebuild with modern rendering and caching patterns.",
    goal: "Improve Core Web Vitals while preserving catalog flexibility and CMS workflows.",
    stack: ["Next.js", "Sanity", "Node", "Lighthouse CI"],
    status: "Completed",
    overview:
      "A headless commerce frontend re-architecture focused on loading speed, checkout continuity, and maintainability.",
    problem:
      "Legacy templates produced high JS payloads and unstable layout shifts, hurting search visibility and conversions.",
    solution:
      "Shipped a componentized storefront with selective hydration, optimized image pipelines, and route-level splitting.",
    architecture: [
      "Headless content integration",
      "Server-rendered critical routes",
      "Performance budgets in CI",
      "Semantic SEO structure"
    ],
    screenshots: [{ src: "/images/projects/placeholder-3.svg", alt: "Commerce rebuild metrics interface" }],
    outcome:
      "Achieved large performance gains across mobile and desktop audits with cleaner release processes.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "004",
    title: "Automation Landing Lab",
    shortDescription: "Experiment-driven micro-site network for rapid campaign validation.",
    goal: "Test messaging, UI variants, and API-backed lead routing across niche funnels.",
    stack: ["Next.js", "Tailwind CSS", "n8n", "Cloudflare"],
    status: "In Progress",
    overview:
      "A system for launching and measuring small campaign pages rapidly with shared analytics and workflow automation.",
    problem:
      "Manual campaign launches were slow and difficult to compare across audiences and channels.",
    solution:
      "Designed a lab pipeline using reusable templates, event tracking presets, and auto-generated experiment IDs.",
    architecture: [
      "Template registry for quick deploys",
      "API-first lead router",
      "Feature-flag style variations",
      "Unified analytics ingestion"
    ],
    screenshots: [{ src: "/images/projects/placeholder-4.svg", alt: "Automation lab campaign console" }],
    outcome:
      "Now shipping campaign tests in hours instead of days with clearer signal on creative performance.",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

export const experiments: Experiment[] = [
  {
    id: "EXP-UI-01",
    title: "UI Animation Playground",
    category: "UI",
    summary: "A sandbox for motion systems, layered transitions, and microinteraction timing.",
    details:
      "Built to tune animation curves, stagger strategies, and user-perceived performance using Framer Motion variants.",
    tools: ["Framer Motion", "Tailwind CSS", "TypeScript"],
    status: "Active"
  },
  {
    id: "EXP-API-02",
    title: "API Reliability Harness",
    category: "API",
    summary: "Load and resilience experiment for third-party service integrations.",
    details:
      "Runs timed API batches, captures failure classes, and visualizes retry policies for production hardening.",
    tools: ["Node", "Fetch", "Vercel Cron"],
    status: "Stable"
  },
  {
    id: "EXP-AI-03",
    title: "AI Workflow Integrations",
    category: "AI",
    summary: "Prototype pipeline for AI-assisted content and support tooling.",
    details:
      "Combines prompt orchestration with typed output validation to integrate AI responses into product workflows.",
    tools: ["OpenAI API", "Zod", "Next.js"],
    status: "Active"
  },
  {
    id: "EXP-PERF-04",
    title: "Performance Benchmark Deck",
    category: "Performance",
    summary: "Comparative benchmark of rendering and caching strategies.",
    details:
      "Measures route-level TTI, image decode cost, and hydration overhead across implementation patterns.",
    tools: ["Lighthouse", "WebPageTest", "Next.js"],
    status: "Draft"
  }
];

export const techCategories: TechCategory[] = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    label: "Backend",
    items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "Serverless Functions"]
  },
  {
    label: "Infrastructure",
    items: ["Vercel", "Docker", "Cloudflare", "CI/CD", "Monitoring"]
  },
  {
    label: "Tools",
    items: ["GitHub", "Figma", "Lighthouse", "Playwright", "Postman"]
  }
];

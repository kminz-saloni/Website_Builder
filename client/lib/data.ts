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
    title: "Brother's Balloon Decoration",
    shortDescription: "Professional custom website development for a premium balloon decor service.",
    goal: "Professionalize digital presence and capture high-intent local leads in Jaipur.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    status: "Completed",
    overview:
      "An optimized custom website development project for a balloon decor company featuring strong local SEO and mobile-first booking flows.",
    problem:
      "The business relied on social DMs and had no structured funnel, causing slow response times and lost bookings.",
    solution:
      "Engineered a high-performance landing page with WhatsApp integration and category-specific decor galleries.",
    architecture: [
      "Next.js App Router for route-level performance",
      "Framer Motion for festive and interactive visual feel",
      "Serverless WhatsApp lead routing",
      "Vercel edge deployment with image optimization"
    ],
    screenshots: [{ src: "/images/projects/balloon_decor.png", alt: "Balloon decoration gallery and booking interface" }],
    outcome:
      "Increased professional brand authority and streamlined lead capture via automated WhatsApp redirection.",
    liveUrl: "https://balloondecoration.in",
    githubUrl: "https://github.com"
  },
  {
    id: "002",
    title: "Plixi Instagram Growth",
    shortDescription: "AI-powered social media growth engine for organic follower acquisition.",
    goal: "Automate Instagram engagement and provide deep analytics for influencers and brands.",
    stack: ["React", "TypeScript", "AI Engine", "Tailwind CSS"],
    status: "Live",
    overview:
      "An advanced AI-powered service helping users gain real followers and engagement through organic automation.",
    problem:
      "Manual engagement is unsustainable; and legacy bot-based growth risks account safety and brand reputation.",
    solution:
      "Patented AI growth technology that mimics organic human behavior and provides comprehensive growth analytics.",
    architecture: [
      "Real-time analytics dashboard with deep insights",
      "AI-driven engagement engine with safety guardrails",
      "Secure multi-account management layer",
      "Responsive Next.js frontend with enterprise-grade security"
    ],
    screenshots: [{ src: "/images/projects/plixi_growth.png", alt: "Plixi AI growth dashboard preview" }],
    outcome:
      "Helped thousands of accounts scale their organic reach with 100% TOS-compliant automation.",
    liveUrl: "https://plixi.com",
    githubUrl: "https://github.com"
  },
  {
    id: "003",
    title: "Drain Doctor Service Hub",
    shortDescription: "National emergency plumbing and drainage service infrastructure.",
    goal: "Streamline emergency response and local engineer dispatch across the UK.",
    stack: ["Next.js", "React", "Mapbox", "Lead Routing"],
    status: "Completed",
    overview:
      "A national service portal for professional plumbing solutions, specializing in emergency repairs and drainage.",
    problem:
      "Managing regional dispatch and service consistency at a national scale for emergency plumbing.",
    solution:
      "Geolocation-aware service hub with instant quote and urgent rescue booking workflows.",
    architecture: [
      "Dynamic service area routing based on UK postcodes",
      "Emergency service 'Rescue Engine' for immediate dispatch",
      "Integrated customer review and accreditation system",
      "High-availability infrastructure for 24/7 service access"
    ],
    screenshots: [{ src: "/images/projects/drain_doctor.png", alt: "Drain Doctor service booking interface" }],
    outcome:
      "Drastically reduced response times and improved national coverage visibility for local engineers.",
    liveUrl: "https://www.draindoctor.co.uk/plumbing",
    githubUrl: "https://github.com"
  },
  {
    id: "004",
    title: "Smile Dental Care Network",
    shortDescription: "Patient management and booking system for UK dental clinics.",
    goal: "Centralize practice management for 30+ locations while simplifying patient bookings.",
    stack: ["Next.js", "Tailwind CSS", "Booking Engine", "Zod"],
    status: "In Progress",
    overview:
      "A comprehensive digital platform for one of the UK's leading groups of high-quality dental practices.",
    problem:
      "Fragmented patient booking systems and difficulty in managing multi-location service schedules.",
    solution:
      "Integrated clinic locator, treatment record portal, and unified real-time appointment calendar.",
    architecture: [
      "Multi-tenant practice architecture supporting 30+ sites",
      "Advanced appointment scheduling with emergency slot priority",
      "Patient education portal and preventive care roadmap",
      "NHS and Private service segmentation logic"
    ],
    screenshots: [{ src: "/images/projects/smile_dental.png", alt: "Smile Dental clinic locator and booking portal" }],
    outcome:
      "Improving patient experience and reducing administrative overhead for practice managers.",
    liveUrl: "https://smile-dentalcare.co.uk/",
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

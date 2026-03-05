export type ProjectCaseStudy = {
  id: string;
  title: string;
  shortDescription: string;
  goal: string;
  stack: string[];
  status: "Completed" | "In Progress" | "Live";
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  screenshots: { src: string; alt: string }[];
  outcome: string;
  liveUrl: string;
  githubUrl: string;
};

export type Experiment = {
  id: string;
  title: string;
  category: "UI" | "API" | "AI" | "Performance";
  summary: string;
  details: string;
  tools: string[];
  status: "Active" | "Draft" | "Stable";
};

export type TechCategory = {
  label: "Frontend" | "Backend" | "Infrastructure" | "Tools";
  items: string[];
};

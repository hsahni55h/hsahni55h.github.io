export interface OpenSourceProject {
  title: string;
  description: string;
  repo: string;
  tech: string[];
  status: "active" | "beta" | "coming-soon";
  quickStart?: string;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    title: "GenAI Template",
    description: "Coming soon — a production-ready starter template for building GenAI applications.",
    repo: "",
    tech: [],
    status: "coming-soon",
  },
  {
    title: "MCP Toolkit",
    description: "Coming soon — a documented MCP learning repo with reusable, customizable toolkit.",
    repo: "",
    tech: [],
    status: "coming-soon",
  },
  {
    title: "LangGraph Starter",
    description: "Coming soon — starter templates and examples for LangGraph-based agent workflows.",
    repo: "",
    tech: [],
    status: "coming-soon",
  },
  {
    title: "AutoGen Starter",
    description: "Coming soon — multi-agent workflow templates using AutoGen.",
    repo: "",
    tech: [],
    status: "coming-soon",
  },
];

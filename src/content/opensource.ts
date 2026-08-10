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
    title: "MCP Toolkit",
    description:
      "Python toolkit for building multi-agent AI applications using the Model Context Protocol. Connect any LLM to external tools and APIs, define specialist agents in a few lines, and let the toolkit handle the rest.",
    repo: "https://github.com/hsahni55h/Model-Context-Protocol-MCP-",
    tech: ["Python", "MCP", "Multi-Agent", "LLM"],
    status: "active",
    quickStart: "git clone https://github.com/hsahni55h/Model-Context-Protocol-MCP-.git",
  },
  {
    title: "GenAI Starter Kit",
    description:
      "Coming soon — a production-ready starter template for building GenAI applications.",
    repo: "",
    tech: [],
    status: "coming-soon",
  },
];

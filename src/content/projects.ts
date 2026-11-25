export interface Project {
  id: string;
  title: string;
  techStack: string[];
  period?: string;
  /** 1–2 sentence card description: what it is and what it was for. */
  summary?: string;
  /** MSc course the project was done for (Chalmers). Omit for personal projects. */
  course?: string;
  bullets: string[];
  github?: string;
  videos?: string[];
}

export const projects: Project[] = [
  {
    id: "mcp-toolkit",
    title: "MCP Toolkit",
    summary: "A plug-and-play Python package for building production AI agents on the Model Context Protocol, with one interface across OpenAI, Gemini, Claude and LangChain.", // TODO confirm: paraphrased from the bullets below
    techStack: ["Python", "MCP", "OpenAI", "Gemini", "Claude", "LangChain", "Docker", "SSE"],
    bullets: [
      "Built a Python package on the Model Context Protocol (MCP) providing pre-built, plug-and-play components for production-level AI agent applications — eliminating boilerplate setup.",
      "Implemented multi-LLM support with unified clients for OpenAI, Gemini, Claude, and LangChain, enabling provider swaps through a single consistent interface.",
      "Automated server lifecycle management, tool discovery, and the tool-calling loop so developers can focus on agent logic instead of infrastructure plumbing.",
      "Designed a multi-server architecture allowing one agent to connect to multiple MCP servers via simple configuration.",
      "Supported flexible deployment modes including local scripts, self-hosted HTTP servers, and Docker containers.",
    ],
    github: "https://github.com/hsahni55h/Model-Context-Protocol-MCP-",
  },
  {
    id: "robot-scheduling",
    title: "Time-Constrained Scheduling and Collision-Free Control for A Fleet of Mobile Robots",
    summary: "An automated pipeline that links a MILP task scheduler with MPC trajectory control, so a fleet of mobile robots meets its deadlines without collisions.", // TODO confirm: paraphrased from the bullets below
    course: "Design Project in Systems, Control and Mechatronics",
    techStack: ["Python", "Gurobi", "Z3", "MPC", "CasADi"],
    period: "Oct 2023 – Jan 2024",
    bullets: [
      "Developed an automated pipeline linking scheduler outputs with MPC for seamless task scheduling and trajectory planning.",
      "Employed MILP optimization solvers (Gurobi, Z3) and MPC (CasADi) for precise trajectory control and efficient task allocation.",
      "Created a prototype for a dynamic online scheduler, enabling real-time task adjustments and trajectory translations in the MPC system.",
    ],
    videos: ["/images/Presentation_video_Scheduler_MPC.mp4"],
  },
  {
    id: "gans",
    title: "Image-to-Image Translations Using GANs",
    summary: "Implemented and fine-tuned Pix2Pix and CycleGAN models to translate images between domains.", // TODO confirm: paraphrased from the bullets below
    course: "Advanced Machine Learning with Neural Networks",
    techStack: ["Python", "PyTorch", "Pix2Pix", "CycleGAN", "TensorFlow"],
    period: "Mar 2023 – May 2023",
    bullets: [
      "Developed and implemented Generative Adversarial Networks (GANs), including Conditional GANs (Pix2Pix) and Cycle GANs, for accurate image translation across domains.",
      "Analyzed network outputs, identified improvement areas, and fine-tuned models to ensure high-quality image translations and enhanced performance.",
    ],
    github: "https://github.com/hsahni55h/TIF-360-Project-GANs-/tree/main",
  },
  {
    id: "kiwi-cars",
    title: "Intelligent Navigation for Kiwi Cars",
    summary: "Autonomous navigation for a Kiwi car: YOLOv5 cone detection, adaptive steering, and a battery-aware wandering behaviour.", // TODO confirm: paraphrased from the bullets below
    course: "Autonomous Robots",
    techStack: ["Python", "C++", "OpenDLV", "YOLO", "OpenCV"],
    period: "Mar 2023 – May 2023",
    bullets: [
      "Developed YOLOv5 Nano model for rapid cone detection on Kiwi car and integrating an adaptive steering algorithm to enhance autonomous vehicle control.",
      "Implemented color-based object detection for blue paper and green Post-it notes using OpenCV, employing advanced image processing techniques.",
      "Engineered a dynamic wandering system for Kiwi car, prioritizing object detection based on battery status and developing a comprehensive navigation plan.",
    ],
    videos: ["/images/cone_detection.mp4", "/images/kiwi_detection.mp4"],
  },
  {
    id: "cooperative-path",
    title: "Cooperative Path Finding with Time-Delay Communication",
    summary: "An agent-based model of how autonomous agents cooperate through delayed environmental signals, applied to drone search-and-rescue.", // TODO confirm: paraphrased from the bullets below
    course: "Simulation of Complex Systems",
    techStack: ["NetLogo", "Agent-based Modeling", "Simulation"],
    period: "Nov 2022 – Dec 2022",
    bullets: [
      "Developed an agent-based model with bacteria to demonstrate communication and cooperation among autonomous agents via environmental signals.",
      "Aimed to create a foundational algorithm for cooperative path-finding in robotic swarms, addressing time-delayed communication complexities.",
      "Applied model insights to drone-based search-and-rescue missions, enhancing communication and cooperation for locating trapped victims.",
    ],
    videos: ["/images/without-communication.mp4", "/images/with-communication.mp4"],
    github: "https://github.com/hsahni55h/Cooperative-Path-Finding-with-Time-Delay-Communication",
  },
];

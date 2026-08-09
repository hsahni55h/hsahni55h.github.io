export interface ExperienceProject {
  title: string;
  bullets: string[];
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets?: string[];
  projects?: ExperienceProject[];
}

export const experiences: Experience[] = [
  {
    company: "Volvo Group",
    location: "Gothenburg, Sweden",
    role: "Data Scientist",
    period: "September 2024 – Present",
    projects: [
      {
        title: "Warranty AI — Volvo Trucks",
        bullets: [
          "Developing a large-scale claim evaluation platform combining rules-based checks, ML models, and GenAI-powered agents to support the end-to-end warranty process. Built for Volvo Group at large, starting with Volvo Trucks, and will extend across other Volvo Group businesses, with Renault Trucks next in line.",
          "Building scalable feature, data, and ML pipelines in Azure Databricks using PySpark, SQL, Unity Catalog, and MLflow.",
          "Supporting model training, serving, monitoring, and continuous improvement across the ML lifecycle.",
          "Building real-time inference using Azure Functions and Azure Service Bus.",
          "Connecting AI services to enterprise and on-prem claim-handling systems.",
          "Contributing to a shared engineering monorepo with an emphasis on maintainable, well-tested code.",
        ],
      },
      {
        title: "Defect Detection and Elimination (DDE) — Volvo Penta",
        bullets: [
          "Developed an end-to-end defect detection system combining predictive modeling and generative AI-powered root cause analysis to identify failures early and enable proactive interventions, reducing time and cost across operations. Took ownership of the data science, GenAI, and backend development to deliver a fully functional MVP before transitioning to the next project.",
          "Built and deployed a Weibull analysis tool that let users configure and customize a wide range of variables within a single interface, replacing a highly manual, multi-step process; cut analysis time from 20-30 minutes to 1-2 minutes.",
          "Continuously prototyped data science and GenAI-based solutions in response to evolving business needs, building and deploying production-ready tools from concept to user-facing applications, including APIs and frontend development.",
          "Worked closely with business stakeholders, senior management, quality case managers, quality champions, and consultants to translate requirements into data-driven solutions, iterating on user feedback.",
        ],
      },
    ],
  },
  {
    company: "Volvo Group",
    location: "Gothenburg, Sweden",
    role: "Summer Intern",
    period: "June 2024 – September 2024",
    bullets: [
      "Analyzed real-world truck usage data, combining vehicle telemetry with GPS data across variables such as terrain, load, temperature, and driving location, to identify patterns in driver behavior. Derived actionable insights and recommendations to improve driving patterns, supporting improvements in fuel efficiency and fleet efficiency.",
    ],
  },
  {
    company: "Volvo Group",
    location: "Gothenburg, Sweden",
    role: "Master Thesis Worker",
    period: "January 2024 – June 2024",
    bullets: [
      "Built a GenAI-powered analysis tool for the Powertrain department to analyze logged vehicle data from truck ECUs stored in MF4 files, enabling users to run complex analyses via natural-language interaction rather than manual data processing.",
      "Developed and implemented agent-based architectures using open-source large language models, including Code Llama 2 and Mixtral 8x7B, to analyze industrial logged data and enable natural language interaction with the system.",
      "Designed and applied advanced prompt engineering methods for complex tasks spanning data interpretation, reasoning, code synthesis, and visualization.",
      "Collaborated with the team to develop and evaluate the tool, using standardized and custom metrics to assess accuracy, reliability, and effectiveness.",
    ],
  },
  {
    company: "Chalmers University of Technology",
    location: "Gothenburg, Sweden",
    role: "Teaching Assistant — Autonomous Vehicular Systems",
    period: "October 2023 – January 2024",
    bullets: [
      "Instructed students on ROS for Autonomous Cooperative Vehicular Systems (DAT295) and developed a teach-and-repeat algorithm for the Wifibot to enable autonomous trajectory following.",
    ],
  },
  {
    company: "Chalmers University of Technology",
    location: "Gothenburg, Sweden",
    role: "Project Intern — AI/Robotics Lab",
    period: "June 2023 – July 2023",
    bullets: [
      "Developed a localization and mapping system for the TIAGO robot to autonomously identify its location within office environments under Dr. Karinne Ramirez.",
      "Led comprehensive testing of robot functionalities in both simulation and real-world scenarios; documented and resolved bugs to ensure optimal performance.",
    ],
  },
  {
    company: "Chalmers University of Technology",
    location: "Gothenburg, Sweden",
    role: "Teaching Assistant — Robotics",
    period: "February 2023 – July 2023",
    bullets: [
      "Guided 6 bachelor students in using ROS to design indoor autonomous robot architectures and motion planning algorithms.",
      "Implemented advanced SLAM algorithms (TAG Slam, ORB-SLAM3, Gmapping) on Wifibot with RGB camera and LiDAR for trajectory and map generation.",
      "Integrated autonomous systems with the in-house local positioning system (Gulliview), conducting comparative trajectory analysis.",
    ],
  },
  {
    company: "Jetbrain Robotics",
    location: "Gurugram, India",
    role: "Robotics Software Engineer",
    period: "September 2020 – June 2022",
    bullets: [
      "Implemented SLAM and online motion planning algorithms (TEB, DWA) for autonomous mobile robots, interfacing with sonars, LiDAR, IMU, and wheel encoders.",
      "Developed scalable robotics applications leveraging AWS RoboMaker, extending the ROS framework with cloud services.",
      "Ported navigation stack to ROS2, integrating SLAM Toolbox and NAV2; built automation solutions with Docker and shell scripts.",
      "Created URDF packages with camera, LiDAR, and IMU plugins for high-fidelity simulation in Gazebo.",
    ],
  },
  {
    company: "GreyNodes",
    location: "India",
    role: "Data Scientist — Freelance",
    period: "January 2021 – February 2022",
    bullets: [
      "Conducted A/B testing to optimize digital advertising strategies, implementing data-driven improvements that significantly enhanced user engagement and campaign performance.",
      "Utilized ARIMA models to forecast demand spikes, optimizing inventory for peak periods and minimizing overstock and stockouts.",
    ],
  },
];

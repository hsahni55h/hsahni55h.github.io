export interface SkillSubgroup {
  /** Optional small label above the tags; omit for a single flat list. */
  label?: string;
  items: string[];
}

export interface SkillCategory {
  id: "data" | "genai" | "ml" | "devops" | "robotics" | "languages";
  title: string;
  /** One factual line on how the skills are used. */
  blurb: string;
  groups: SkillSubgroup[];
}

export const skills: SkillCategory[] = [
  {
    id: "data",
    title: "Data Engineering & Cloud",
    // TODO confirm: general wording, edit freely.
    blurb: "Designing scalable data and feature pipelines on lakehouse platforms and the cloud.",
    groups: [
      { label: "Platforms", items: ["Azure Databricks", "Unity Catalog", "Delta Lake", "Databricks SQL"] },
      { label: "Processing", items: ["PySpark", "ETL/ELT pipelines"] },
      { label: "Cloud", items: ["Azure Data Factory", "Azure Service Bus", "Azure Functions", "AWS"] },
      { label: "Databases", items: ["PostgreSQL", "Microsoft SQL Server"] },
    ],
  },
  {
    id: "genai",
    title: "Generative AI & Agents",
    // TODO confirm: general wording, edit freely.
    blurb: "Building LLM-powered agents and retrieval systems that work on real business data.",
    groups: [
      { label: "Agents", items: ["LangChain", "LangGraph", "AutoGen", "MCP", "Multi-agent systems"] },
      { label: "Retrieval", items: ["RAG", "Embeddings", "Vector search"] },
      {
        label: "LLMs",
        items: ["OpenAI", "Gemini", "Claude", "Prompt engineering", "Fine-tuning", "LLM evaluation"],
      },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning & Data Science",
    // TODO confirm: general wording, edit freely.
    blurb: "Training, deploying and monitoring ML models, from prediction to time-series forecasting.",
    groups: [
      {
        label: "Frameworks",
        items: [
          "PyTorch",
          "TensorFlow",
          "Scikit-learn",
          "XGBoost",
          "statsmodels",
          "Nixtla",
          "Pandas",
          "NumPy",
          "MLflow",
        ],
      },
      {
        label: "Areas",
        items: [
          "Computer vision (OpenCV, YOLO)",
          "GANs",
          "NLP",
          "Time-series forecasting",
          "Predictive modelling",
          "A/B testing",
          "Feature engineering",
        ],
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & MLOps",
    // TODO confirm: blurb written from the skill list.
    blurb: "Containerising, deploying and monitoring ML services, plus the APIs and front ends around them.",
    groups: [
      {
        label: "Infrastructure & CI/CD",
        items: ["Docker", "Kubernetes", "Terraform", "Azure DevOps", "GitHub Actions", "CI/CD", "Git"],
      },
      { label: "APIs & backend", items: ["FastAPI", "Flask", "REST APIs", "SSE", "Pydantic", "SQLAlchemy"] },
      { label: "Observability & testing", items: ["OpenTelemetry", "Azure Monitor", "pytest"] },
      { label: "Frontend", items: ["React", "TypeScript", "Vite", "Next.js"] },
    ],
  },
  {
    id: "robotics",
    title: "Robotics & Control",
    // TODO confirm: general wording, edit freely.
    blurb: "SLAM, motion planning and autonomous navigation for mobile robots, from research to teaching.",
    groups: [
      {
        label: "Robotics",
        items: ["ROS/ROS2", "SLAM", "Gazebo", "Motion planning", "Autonomous navigation", "Sensor fusion"],
      },
      {
        label: "Optimisation & simulation",
        items: ["MILP optimisation (Gurobi, Z3)", "OpenDLV", "NetLogo simulation"],
      },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    // TODO confirm: blurb written from the skill list.
    blurb: "Python and SQL every day, plus systems and scientific languages when the job needs them.",
    groups: [{ items: ["Python", "SQL", "C++", "Go", "MATLAB", "Bash"] }],
  },
];

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
    // TODO confirm: blurb paraphrased from the Volvo Group experience bullets.
    blurb: "Building feature, data and ML pipelines in Azure Databricks for Volvo Group warranty and quality.",
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
    // TODO confirm: blurb paraphrased from the experience bullets.
    blurb: "Building GenAI-powered agents for warranty claim evaluation, root cause analysis and log analysis.",
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
    // TODO confirm: blurb paraphrased from the experience bullets.
    blurb: "Training, serving and monitoring ML models, from defect prediction to demand forecasting.",
    groups: [
      {
        label: "Frameworks",
        items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "MLflow"],
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
    blurb: "Containerising, deploying and automating ML services and the APIs around them.",
    groups: [
      {
        label: "Infrastructure & CI/CD",
        items: ["Docker", "Kubernetes", "Terraform", "Azure DevOps", "GitHub Actions", "CI/CD", "Git"],
      },
      { label: "APIs", items: ["FastAPI", "Flask", "REST APIs", "SSE"] },
    ],
  },
  {
    id: "robotics",
    title: "Robotics & Control",
    // TODO confirm: blurb paraphrased from the robotics experience bullets.
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

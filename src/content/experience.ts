export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "Volvo Group",
    location: "Gothenburg, Sweden",
    role: "Data Scientist",
    period: "September 2024 – Present",
    bullets: [
      "Developing an end-to-end defect detection system combining predictive modeling and generative AI-powered root cause analysis to identify failures early, enabling proactive interventions that save time and reduce costs across operations.",
      "Building and deploying production-ready tools from concept to user-facing applications — developing APIs and collaborating with frontend developers and UX designers to deliver solutions that streamline manual processes and improve employee productivity.",
      "Translating business requirements into data-driven solutions by working closely with stakeholders and cross-functional teams, iterating based on user feedback to ensure tools are technically sound and aligned with real business needs.",
    ],
  },
  {
    company: "Volvo Group",
    location: "Gothenburg, Sweden",
    role: "Summer Intern — Data Science",
    period: "June 2024 – September 2024",
    bullets: [
      "Conducted data analysis and developed machine learning models on customer usage data to derive actionable insights and accurately predict driver behavior patterns, enhancing fleet efficiency and safety.",
    ],
  },
  {
    company: "Volvo Group",
    location: "Gothenburg, Sweden",
    role: "Master Thesis Worker",
    period: "January 2024 – July 2024",
    bullets: [
      "Developed and implemented agent-based architectures using open-source Large Language Models (Code Llama 2, Mixtral 8x7B) for analyzing industrial logged data, focusing on automating data analysis and enabling natural language interactions.",
      "Crafted advanced prompt engineering methodologies for complex data interpretation, reasoning, code synthesis, and visualization tasks.",
      "Collaborated with the team on development and evaluation using standardized and custom metrics to ensure accuracy, reliability, and effectiveness.",
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

// ── Site-wide ──────────────────────────────────────────────
export const siteConfig = {
  name: "Himanshu Sahni",
  title: "AI & Robotics Engineer",
  location: "Gothenburg, Sweden",
  email: "sahni.h1998@gmail.com",
  linkedin: "https://www.linkedin.com/in/himanshu-sahni07/",
  github: "https://github.com/hsahni55h",
  taglines: [
    "AI & Robotics Engineer",
    "Machine Learning Enthusiast",
    "Data Scientist",
    "Robotics Software Developer",
  ],
};

// ── About ──────────────────────────────────────────────────
export const about = {
  image: "/images/profile.jpg",
  bio: [
    "I am passionate about AI, Robotics, and Data Science, driven by curiosity and a desire to make a positive impact. I believe in the power of technology to solve real-world problems and improve lives.",
    "I thrive in collaborative environments where I can share ideas and work together to create innovative solutions. With strong communication skills, adaptability, and the ability to work under pressure, I bring a balanced mix of technical expertise and soft skills to any team.",
    "I am open to exploring new opportunities, roles, and projects where I can apply my skills and enthusiasm to meaningful and impactful work.",
  ],
};

// ── Experience ─────────────────────────────────────────────
export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "VOLVO Group",
    location: "Sweden",
    role: "Summer Worker",
    period: "June 2024 – Present",
    bullets: [
      "Conducting data analysis and developing machine learning models on customer usage data to derive actionable insights and accurately predict driver behavior patterns, enhancing fleet efficiency and safety.",
    ],
  },
  {
    company: "VOLVO Group",
    location: "Sweden",
    role: "Master Thesis Worker",
    period: "January 2024 – June 2024",
    bullets: [
      "Developed and implemented agent-based architectures using open-source Large Language Models (Code Llama 2 Series and Mixtral 7x8b) for analyzing industrial logged data, focusing on automating data analysis and enabling natural language interactions.",
      "Crafted and implemented advanced prompt engineering methodologies for complex data interpretation, reasoning, code synthesis, and visualization tasks.",
      "Collaborated with the team on the development and evaluation of the tool, using standardized and custom metrics to ensure accuracy, reliability, and effectiveness.",
    ],
  },
  {
    company: "Chalmers University of Technology",
    location: "Sweden",
    role: "Teaching Assistant",
    period: "October 2023 – January 2024",
    bullets: [
      "Served as a Teaching Assistant for Autonomous Cooperative Vehicular Systems (DAT295), instructing students on ROS and developing a teach-and-repeat algorithm for the wifibot to enable autonomous trajectory following.",
    ],
  },
  {
    company: "AI/Robotics Lab, Chalmers University of Technology",
    location: "Sweden",
    role: "Project Intern",
    period: "June 2023 – August 2023",
    bullets: [
      "Assisted Dr. Karinne Ramirez in developing a localization and mapping system for the TIAGO robot to autonomously identify its location within office environments.",
      "Managed lab resources and led comprehensive testing of TIAGO robot functionalities in both simulation and real-world scenarios; documented and resolved bugs to ensure optimal performance.",
    ],
  },
  {
    company: "Robotics Lab, Chalmers University of Technology",
    location: "Sweden",
    role: "Teaching Assistant",
    period: "February 2023 – July 2023",
    bullets: [
      "Served as a Teaching Assistant under Dr. Elad Schillar, guiding 6 bachelor students in using ROS to design indoor autonomous robot architectures and motion planning algorithms.",
      "Implemented advanced SLAM algorithms, including TAG Slam, Orb Slam3, and Gmapping, on Wifibot with an RGB camera and a Lidar for trajectory and map generation.",
      "Integrated the developed autonomous system with the in-house local positioning system, Gulliview, conducting a comparative analysis of trajectories from both sources.",
    ],
  },
  {
    company: "JETBRAIN ROBOTICS",
    location: "India",
    role: "Robotics Software Engineer",
    period: "September 2020 – June 2022",
    bullets: [
      "Implemented SLAM and online motion planning algorithms for mobile robots, interfacing with sensors like sonars, LIDAR, IMU, and wheel encoders to enable autonomous navigation tasks.",
      "Developed a tricycle controller and teach-and-repeat algorithm for an autonomous floor scrubber, integrating the Alphasense position module for enhanced positional accuracy.",
      "Upgraded robot systems by porting the navigation stack to ROS2, integrating Slam toolbox and NAV2, and leveraging Docker and shell scripts to develop automation solutions.",
      "Constructed URDF packages for robot simulations in Gazebo, incorporating camera, lidar, and IMU plugins to model real-world dynamics accurately.",
    ],
  },
  {
    company: "GreyNodes",
    location: "India",
    role: "Data Scientist Freelance",
    period: "January 2021 – February 2022",
    bullets: [
      "Conducted A/B testing to optimize digital advertising strategies, analyzing user engagement metrics. Implemented data-driven improvements that significantly enhanced user engagement and campaign performance.",
      "Utilized ARIMA models to accurately forecast demand spikes, optimizing inventory for peak periods like back-to-school and holidays, effectively minimizing overstock and stockouts.",
    ],
  },
];

// ── Projects ───────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  techStack: string[];
  period: string;
  bullets: string[];
  github?: string;
  videos?: string[];
}

export const projects: Project[] = [
  {
    id: "auto-ml",
    title: "Automated Machine Learning Deployment and Prediction Pipeline",
    techStack: ["Python", "Flask", "Docker", "GitHub Actions", "AWS ECS", "MLflow"],
    period: "Apr 2024 – May 2024",
    bullets: [
      "Developed and deployed a Flask web application to predict wine quality scores, utilizing Docker for containerization and MLflow for experiment tracking and model management.",
      "Implemented automated CI/CD workflows with GitHub Actions and deployed on AWS ECS, ensuring scalable and consistent updates across different environments.",
    ],
    github: "https://github.com/hsahni55h/end-to-end-ML-with-MLflow",
  },
  {
    id: "diamond-price",
    title: "Machine Learning-Driven Diamond Price Estimation",
    techStack: ["Python", "Flask", "Regression Models", "AWS Elastic Beanstalk", "Azure"],
    period: "Apr 2024 – May 2024",
    bullets: [
      "Developed and deployed a Flask web application to predict diamond prices using various regression models, including Random Forest, Gradient Boosting, and CatBoost.",
      "Implemented hyperparameter tuning using RandomizedSearchCV and GridSearchCV, and automated deployment with CI/CD pipeline on AWS Elastic Beanstalk and Microsoft Azure.",
    ],
    github: "https://github.com/hsahni55h/mlproject-Gemstone-Price-Prediction",
  },
  {
    id: "robot-scheduling",
    title: "Time-Constrained Scheduling and Collision-Free Control for A Fleet of Mobile Robots",
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

// ── Skills ─────────────────────────────────────────────────
export const skills = {
  languages: ["Python", "MATLAB", "C++", "Go", "SQL", "Linux Scripting"],
  frameworks: [
    "ROS",
    "ROS2",
    "Gazebo",
    "Git",
    "Docker",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "Scikit-Learn",
    "AWS",
    "Kubernetes",
    "JIRA",
    "Power BI",
  ],
  soft: [
    "Communication",
    "Team Player",
    "Problem-Solving",
    "Adaptability",
    "Critical Thinking",
    "Creativity",
    "Leadership",
  ],
};

// ── Certifications ─────────────────────────────────────────
export interface Certification {
  name: string;
  issuer: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    name: "Generative Adversarial Networks (GANs)",
    issuer: "Coursera",
    url: "https://coursera.org/share/c04f8f9228ea917e69738fa6d18fbc8b",
  },
  {
    name: "DeepLearning.AI TensorFlow Developer",
    issuer: "Coursera",
    url: "https://coursera.org/share/8a435d83c3cbf4fb04263ace725f9b15",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "Coursera",
    url: "https://coursera.org/share/f26ffce6f02254bf68c1c14e35a8478e",
  },
  {
    name: "Machine Learning",
    issuer: "Coursera",
    url: "https://coursera.org/share/13dcf9a8c1721bf5aa5c07ce3e7362b5",
  },
];

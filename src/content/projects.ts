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

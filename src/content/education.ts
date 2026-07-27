export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  courses?: string[];
}

export const education: Education[] = [
  {
    institution: "Chalmers University of Technology",
    degree: "Master of Science",
    field: "Complex Adaptive Systems",
    period: "2022 – 2024",
    location: "Gothenburg, Sweden",
    courses: [
      "Artificial Neural Networks",
      "Advanced Machine Learning with Neural Networks",
      "Algorithms for Machine Learning and Inference",
      "Design of AI Systems",
      "Stochastic Optimization Algorithms",
      "Constraint Programming and Applied Optimization",
      "Simulation of Complex Systems",
      "Autonomous Robots",
      "Dynamical Systems",
      "Image Processing",
      "Distributed Systems",
      "Design Project in Systems, Control and Mechatronics",
    ],
  },
  {
    institution: "R.V. College of Engineering, Bangalore",
    degree: "Bachelor of Engineering",
    field: "Mechanical Engineering",
    period: "2016 – 2020",
    location: "Bangalore, India",
  },
];

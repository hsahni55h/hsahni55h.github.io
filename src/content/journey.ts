// Home page "My journey" milestones, oldest first.
// Every line is drawn from src/content/{education,experience,about}.ts; edit freely.

export type JourneyKind = "education" | "work";

export interface JourneyMilestone {
  year: string;
  kind: JourneyKind;
  title: string;
  org: string;
  /** One sentence. Keep it short: the whole path should read in about 30 seconds. */
  blurb: string;
  href: string;
  /** Marks the current role; its node keeps pulsing. */
  current?: boolean;
}

export const journey: JourneyMilestone[] = [
  {
    year: "2016",
    kind: "education",
    title: "Bachelor of Engineering",
    org: "R.V. College of Engineering · Mechanical",
    blurb: "Where it started: mechanical engineering, and a first taste of building machines.", // TODO confirm wording
    href: "/education",
  },
  {
    year: "2020",
    kind: "work",
    title: "Robotics Software Engineer",
    org: "Jetbrain Robotics",
    blurb: "Built SLAM and motion planning for autonomous mobile robots.",
    href: "/experience",
  },
  {
    year: "2021",
    kind: "work",
    title: "Freelance Data Scientist",
    org: "GreyNodes",
    blurb: "Started freelancing in data science on the side, and it didn't stay a side interest for long.",
    href: "/experience",
  },
  {
    year: "2022",
    kind: "education",
    title: "Master of Science",
    org: "Chalmers · Complex Adaptive Systems",
    blurb: "A real foundation in machine learning and AI, while still building robots.",
    href: "/education",
  },
  {
    year: "Jan 2024",
    kind: "work",
    title: "Master Thesis",
    org: "Volvo Group",
    blurb: "GenAI agents on real industrial truck data, which led to a full-time offer.",
    href: "/experience",
  },
  {
    year: "Jun 2024",
    kind: "work",
    title: "Summer Intern",
    org: "Volvo Group",
    blurb: "Truck telemetry and GPS data turned into driver-behaviour insights.",
    href: "/experience",
  },
  {
    year: "Sep 2024",
    kind: "work",
    title: "Data Scientist",
    org: "Volvo Group",
    blurb: "Enterprise ML and GenAI in production for Volvo Trucks and Volvo Penta.",
    href: "/experience",
    current: true,
  },
];

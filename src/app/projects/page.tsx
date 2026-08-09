import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Himanshu Sahni — ML deployment pipelines, generative AI, autonomous navigation, robot fleet scheduling, and more.",
};

export default function ProjectsPage() {
  return <Projects />;
}

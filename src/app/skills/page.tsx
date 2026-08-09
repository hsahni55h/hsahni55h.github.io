import type { Metadata } from "next";
import { Skills } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Himanshu Sahni — Python, PyTorch, TensorFlow, Azure, GenAI, LangChain, Docker, Kubernetes, ROS, and more.",
};

export default function SkillsPage() {
  return <Skills />;
}

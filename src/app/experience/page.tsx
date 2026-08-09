import type { Metadata } from "next";
import { Experience } from "@/components/sections/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Himanshu Sahni — Data Scientist at Volvo Group, robotics engineer, and ML specialist with expertise across autonomous systems and enterprise AI.",
};

export default function ExperiencePage() {
  return <Experience />;
}

import type { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Himanshu Sahni — Data Scientist & AI Engineer at Volvo Group. From robotics to production ML systems, building enterprise AI that holds up in the real world.",
};

export default function AboutPage() {
  return <About />;
}

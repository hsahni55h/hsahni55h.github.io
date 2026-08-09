import type { Metadata } from "next";
import { Education } from "@/components/sections/education";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education background of Himanshu Sahni — MS Complex Adaptive Systems from Chalmers University of Technology, BE Mechanical Engineering from R.V. College of Engineering.",
};

export default function EducationPage() {
  return <Education />;
}

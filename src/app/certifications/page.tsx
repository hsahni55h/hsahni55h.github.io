import type { Metadata } from "next";
import { Certifications } from "@/components/sections/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Professional certifications of Himanshu Sahni — DeepLearning.AI specializations in GANs, TensorFlow, Deep Learning, and Machine Learning.",
};

export default function CertificationsPage() {
  return <Certifications />;
}

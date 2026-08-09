import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Himanshu Sahni — open to opportunities, freelance projects, and collaborations in data science and AI engineering.",
};

export default function ContactPage() {
  return <Contact />;
}

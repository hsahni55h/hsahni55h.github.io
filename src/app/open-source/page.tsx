import type { Metadata } from "next";
import { OpenSource } from "@/components/sections/opensource";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Open source templates and toolkits by Himanshu Sahni — GenAI starters, MCP toolkit, LangGraph and AutoGen templates for the community.",
};

export default function OpenSourcePage() {
  return <OpenSource />;
}

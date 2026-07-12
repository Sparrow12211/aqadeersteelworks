import type { Metadata } from "next";

import { AboutPageContent } from "./about-page-content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about AQSW Engineering Solutions — precision fabrication and engineering excellence.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}

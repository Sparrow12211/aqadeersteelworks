import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industries served by AQSW — pharmaceutical, food, commercial, chemical, and industrial.",
};

export default function IndustriesPage() {
  return (
    <PagePlaceholder
      title="Industries We Serve"
      description="Interactive industry cards will be added in the next development phase."
    />
  );
}

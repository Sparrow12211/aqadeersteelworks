import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Project gallery showcasing AQSW fabrication work.",
};

export default function GalleryPage() {
  return (
    <PagePlaceholder
      title="Project Gallery"
      description="Photo gallery will be built in the next development phase."
    />
  );
}

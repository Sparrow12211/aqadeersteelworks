import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact A. Qadeer Steel Works for quotations and inquiries.",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      title="Contact Us"
      description="Contact form and details will be built in the next development phase."
    />
  );
}

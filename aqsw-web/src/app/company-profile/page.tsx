import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "A. Qadeer Steel Works company profile and credentials.",
};

export default function CompanyProfilePage() {
  return (
    <PagePlaceholder
      title="Company Profile"
      description="Detailed company profile content will be added in the next phase."
    />
  );
}

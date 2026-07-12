import type { Metadata } from "next";

import { ClientsPageContent } from "@/components/clients/clients-page";

export const metadata: Metadata = {
  title: "Clients",
  description: "Trusted by 200+ clients across pharmaceutical, food, and industrial sectors.",
};

export default function ClientsPage() {
  return <ClientsPageContent />;
}

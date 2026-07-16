import type { Metadata } from "next";

import { ContactPageContent } from "@/components/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact Us | A. Qadeer Steel Works",
  description: "Contact A. Qadeer Steel Works for fabrication inquiries, cleanroom solutions, and custom industrial projects.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}

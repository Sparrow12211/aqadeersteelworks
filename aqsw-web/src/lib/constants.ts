export const siteConfig = {
  name: "A. Qadeer Steel Works",
  shortName: "AQSW",
  tagline: "Precision Fabrication. Lasting Solutions.",
  description:
    "A trusted name in stainless steel and mild steel fabrication, serving Pakistan's industrial sector since 1990 with high-quality solutions for pharmaceutical, food, commercial, and industrial clients.",
  url: "https://aqadeersteelworks.com.pk",
  email: "a.qadeersteelworks@yahoo.com",
  address:
    "Bait-ul-madina Building, Near U.B.L Bank Shoe Market, Off Nishter Road, Karachi",
  googleMapsUrl: "https://share.google/I4xYMU6S6EG4IfJhi",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Bait-ul-madina+Building+Nishter+Road+Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed",
  since: 1990,
  phone: [
    {
      label: "Abdul Qadeer (Director)",
      numbers: ["0314-2118145", "0333-8777918"],
    },
    { label: "Abdullah", numbers: ["0333-1253319"] },
    { label: "Abdul Rehman", numbers: ["0334-2869604"] },
    { label: "Office", numbers: ["021-32763579"] },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
] as const;

export const colors = {
  primary: "#0B1F3A",
  secondary: "#1D72F3",
  background: "#F7F9FC",
  white: "#FFFFFF",
  darkGray: "#4A5568",
  lightGray: "#E2E8F0",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
] as const;

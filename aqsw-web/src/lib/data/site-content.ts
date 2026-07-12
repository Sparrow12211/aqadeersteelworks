import type { StaticImageData } from "next/image";

import { images } from "@/lib/assets";
import abbotLogo from "../../../../Logos/abbot.webp";
import atlasBankLogo from "../../../../Logos/atlas bank.jpg";
import bankAlHabibLogo from "../../../../Logos/bank al habib.jpg";
import gskLogo from "../../../../Logos/GSKK.png";
import herbionLogo from "../../../../Logos/herbion.png";
import hiltonLogo from "../../../../Logos/hilton.jpg";
import ismailIndustriesLogo from "../../../../Logos/Ismail_Industries_logo.png";
import pgLogo from "../../../../Logos/P & G.webp";
import samiLogo from "../../../../Logos/SAMI.jpg";
import ublLogo from "../../../../Logos/UBL.png";

export const companyOverview = {
  headline: "Premium Industrial & Cleanroom Engineering Solutions Since 1990",
  about:
    "A. Qadeer Steel Works (AQSW) is a trusted name in stainless steel and mild steel fabrication, serving Pakistan's industrial sector since 1990. With more than 30 years of experience, we provide high-quality fabrication solutions for pharmaceutical, food, commercial, and industrial clients.",
  extended:
    "Our company is known for delivering durable, hygienic, and precision-engineered products that meet modern industrial standards. Over the years, we have built long-term relationships with leading organizations through our commitment to quality, reliability, and timely project completion.",
  familyBusiness:
    "AQSW is a second-generation, family-owned business dedicated to professional engineering and fabrication services. We specialize in custom sheet metal fabrication and industrial equipment manufacturing according to customer drawings, specifications, and requirements.",
  cnc:
    "Using advanced CNC-based design and fabrication methods, we ensure accurate production, improved finishing, and consistent quality in every project.",
  clientsNote:
    "We have served over 200 clients, providing a full range of services dependably, day in and day out. Your selection of AQSW means a partner capable of meeting your needs as they change and grow.",
  productsIntro:
    "There are unlimited sheet metal industrial fabrication items, and it is impossible to discuss all of them here. AQSW ensures that whatever sheet metal fabrication you need, we are always here for you. We undertake sheet metal parts and fabrication work as per customer drawing, design, and specification.",
} as const;

export const timeline = [
  {
    year: "1990",
    title: "Company Founded",
    description:
      "A. Qadeer Steel Works established as a trusted stainless steel and mild steel fabrication partner.",
  },
  {
    year: "2000+",
    title: "Industrial Expansion",
    description:
      "Expanded capabilities across pharmaceutical, food, commercial, and industrial sectors nationwide.",
  },
  {
    year: "2010+",
    title: "CNC Precision",
    description:
      "Advanced CNC-based design and fabrication methods adopted for accuracy and consistent quality.",
  },
  {
    year: "Today",
    title: "200+ Clients",
    description:
      "A second-generation family business serving over 200 clients with dependable, professional engineering.",
  },
] as const;

export const whyAqswStats = [
  {
    value: 30,
    suffix: "+",
    label: "Years Experience",
    description: "Trusted fabrication since 1990",
    textValue: undefined as string | undefined,
  },
  {
    value: 200,
    suffix: "+",
    label: "Clients Served",
    description: "Long-term industrial partnerships",
    textValue: undefined as string | undefined,
  },
  {
    value: 10000,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful fabrication projects for diverse industries",
    textValue: undefined as string | undefined,
  },
  {
    value: 0,
    suffix: "",
    label: "Premium Quality",
    description: "Precision-engineered products",
    textValue: "100%",
  },
  {
    value: 0,
    suffix: "",
    label: "Custom Engineering",
    description: "Built to your drawings",
    textValue: "Custom",
  },
  {
    value: 0,
    suffix: "",
    label: "On-Time Delivery",
    description: "Reliable project completion",
    textValue: "On Time",
  },
] as const;

export const expertiseItems = [
  {
    id: "almirahs",
    name: "Almirah",
    description: "Industrial storage almirahs & document cabinets",
    image: images.expertise.almirah,
    href: "/products#almirahs",
  },
  {
    id: "lab-furniture",
    name: "Lab Furniture",
    description: "M.S Powder Coated Furniture",
    image: images.expertise.labFurniture,
    href: "/products#lab-furniture",
  },
  {
    id: "lockers",
    name: "Lockers",
    description: "cGMP change-room lockers & storage",
    image: images.expertise.lockers,
    href: "/products#lockers",
  },
  {
    id: "custom",
    name: "Mobile Racks",
    description: "Custom industrial equipment to specification",
    image: images.expertise.mobileRacks,
    href: "/products#custom",
  },
  {
    id: "trolleys",
    name: "Moveable",
    description: "Material handling & utility trolleys",
    image: images.expertise.moveable,
    href: "/products#trolleys",
  },
  {
    id: "cleanroom",
    name: "SS Sinks",
    description: "Cleanroom furniture, sinks & accessories",
    image: images.expertise.ssSinks,
    href: "/products#cleanroom",
  },
] as const;

export const industries = [
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    description:
      "Hygienic stainless steel fabrication for cGMP-compliant pharmaceutical environments.",
    image: images.industries.pharmaceutical,
  },
  {
    id: "food",
    name: "Food",
    description:
      "Food-grade fabrication solutions for commercial kitchens and production facilities.",
    image: images.industries.food,
  },
  {
    id: "commercial",
    name: "Commercial",
    description:
      "Storage, furniture, and fabrication for commercial and institutional clients.",
    image: images.industries.commercial,
  },
  {
    id: "industrial",
    name: "Industrial",
    description:
      "Heavy-duty trolleys, racks, structural steel, and custom industrial equipment.",
    image: images.industries.industrial,
  },
  {
    id: "chemical",
    name: "Chemical",
    description:
      "Corrosion-resistant vessels, piping, and process equipment for chemical applications.",
    image: images.industries.chemical,
  },
] as const;

type ClientItem = {
  name: string;
  logo?: StaticImageData;
  logoClassName?: string;
};

export const clients: ClientItem[] = [
  { name: "Hilton Pharma Pvt Ltd.", logo: hiltonLogo, logoClassName: "max-w-[200px] h-17" },
  { name: "Abbott", logo: abbotLogo, logoClassName: "max-w-[200px] h-17" },
  { name: "Herbion Pakistan", logo: herbionLogo, logoClassName: "max-w-[200px] h-17" },
  { name: "Glaxo Smith Kline Pakistan", logo: gskLogo },
  { name: "Sami Pharmaceutical Pvt. Ltd.", logo: samiLogo },
  { name: "P & G Ltd", logo: pgLogo },
  { name: "Ismail Industries Ltd.", logo: ismailIndustriesLogo },
  { name: "Bank Al Habib Ltd.", logo: bankAlHabibLogo },
  { name: "United Bank Ltd.", logo: ublLogo },
  { name: "Atlas Bank Ltd.", logo: atlasBankLogo },
  { name: "And Many More" },
];

export const featuredProducts = [
  {
    id: "trolleys",
    name: "Material Handling Trolleys",
    category: "Industrial Trolleys",
    image: images.trolleys,
    span: "large" as const,
  },
  {
    id: "lockers",
    name: "cGMP Change-Room Lockers",
    category: "Lockers",
    image: images.lockers,
    span: "medium" as const,
  },
  {
    id: "racks",
    name: "Mobile Racks ",
    category: "Storage",
    image: images.racks,
    span: "medium" as const,
  },
  {
    id: "vessels",
    name: "M.S Lockers",
    category: "Lockers",
    image: images.vessels,
    span: "large" as const,
  },
  {
    id: "sinks",
    name: "Cleanroom Sinks",
    category: "Cleanroom",
    image: images.sinks,
    span: "small" as const,
  },
  {
    id: "almirah",
    name: "Storage Almirahs",
    category: "Storage",
    image: images.almirah,
    span: "small" as const,
  },
  {
    id: "tables",
    name: "Tables",
    category: "Furniture",
    image: images.tables,
    span: "medium" as const,
  },
  {
    id: "t_lockers",
    name: "S.S Almirahs",
    category: "Stainless Steel Fabrication",
    image: images.safes,
    span: "small" as const,
  },
] as const;

export const services = [
  "Stainless Steel Fabrication",
  "Mild Steel Fabrication",
  "Industrial Trolleys",
  "Cleanroom Furniture",
  "Process Piping",
  "Structural Steel",
  "Custom Fabrication",
] as const;

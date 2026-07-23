"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Cog,
  Eye,
  Factory,
  Handshake,
  PackageCheck,
  PencilRuler,
  ShieldCheck,
  Target,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { useRef } from "react";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";
import { getMotionTransition, useMobileAnimation } from "@/lib/animations";
import { cn } from "@/lib/utils";

const missionVisionCards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver innovative, reliable and precision-engineered fabrication solutions that exceed customer expectations while maintaining the highest standards of quality, safety and professionalism.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become Pakistan's most trusted engineering and fabrication partner through continuous innovation, exceptional craftsmanship and long-term customer relationships.",
  },
];

const whyChooseItems = [
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Every product undergoes strict quality inspection before delivery.",
  },
  {
    icon: Cog,
    title: "Precision Engineering",
    description: "Modern manufacturing techniques ensure exceptional accuracy and consistency.",
  },
  {
    icon: Wrench,
    title: "Custom Fabrication",
    description: "Tailor-made engineering solutions designed around client requirements.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "Efficient project management ensures timely completion and installation.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled engineers and fabrication specialists delivering reliable workmanship.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description: "Building long-term relationships through quality products and dependable service.",
  },
];

const industries = [
  { title: "Pharmaceutical", image: "/assets/industries/pharma.jpg" },
  { title: "Food", image: "/assets/industries/food.jpg" },
  { title: "Commercial", image: "/assets/industries/commercial.jpg" },
  { title: "Industrial", image: "/assets/industries/Industrial.jpg" },
  { title: "Chemical", image: "/assets/industries/chemical.jpg" },
];

const capabilities = [
  {
    title: "Precision Sheet Metal Fabrication",
    description: "High-accuracy fabrication for structural and custom components.",
    image: "/assets/products/Lockers/locker SS.jpeg",
  },
  {
    title: "Stainless Steel Fabrication",
    description: "Durable stainless solutions for demanding environments.",
    image: "/assets/products/SS Sinks/sink5.jpeg",
  },
  {
    title: "Laboratory Furniture",
    description: "Purpose-built laboratory systems designed for performance and organization.",
    image: "/assets/products/Lab Furniture/WhatsApp Image 2026-07-08 at 1.52.20 AM.jpeg",
  },
  {
    title: "Mobile Storage Systems",
    description: "Efficient and durable storage solutions for modern facilities.",
    image: "/assets/products/Mobile Racks/1000069228.jpg",
  },
  {
    title: "Custom Engineering Solutions",
    description: "Bespoke engineering tailored to material, operation and space.",
    image: "/assets/products/Lab Furniture/WhatsApp Image 2026-07-08 at 1.53.16 AM.jpeg",
  },
  {
    title: "Industrial Equipment Manufacturing",
    description: "Robust equipment and assemblies built for reliable operations.",
    image: "/assets/whyaqsw/cnc.jpg",
  },
];

function AboutSectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-8 max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left"
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em]",
            light ? "text-secondary" : "text-secondary"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl",
          light ? "text-white" : "text-primary"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-dark-gray"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

const workflowSteps = [
  {
    icon: ClipboardList,
    title: "Consultation",
    description: "Understanding your requirements.",
  },
  {
    icon: PencilRuler,
    title: "Planning & Engineering",
    description: "Detailed planning and engineering before fabrication begins.",
  },
  {
    icon: Factory,
    title: "Precision Manufacturing",
    description: "High-quality precision manufacturing using CNC machinery and skilled fabrication.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    description: "Rigorous quality checks to ensure every product meets our standards.",
  },
  {
    icon: PackageCheck,
    title: "Delivery & Installation",
    description: "Safe transportation, on-time delivery and professional installation.",
  },
];

export function AboutPageContent() {
  const heroRef = useRef<HTMLElement>(null);
  const isMobile = useMobileAnimation();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <main>
      <h1 className="sr-only">About A. Qadeer Steel Works</h1>
      <section ref={heroRef} className="relative flex min-h-[65vh] items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: isMobile ? 0 : imageY, scale: isMobile ? 1 : imageScale }}
        >
          <motion.div
            animate={isMobile ? { scale: 1.02 } : { scale: [1.03, 1.05, 1.03] }}
            transition={getMotionTransition(isMobile, {
              duration: isMobile ? 0.4 : 16,
              ease: "easeInOut",
            })}
            className="relative h-full w-full"
          >
            <Image
              src="/assets/hero/Welding Image.webp"
              alt="Industrial welding fabrication scene"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-primary/80 via-transparent to-primary/25" />

        <motion.div className="relative z-10 w-full py-24" style={{ y: isMobile ? 0 : contentY }}>
          <Container>
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getMotionTransition(isMobile, { duration: 0.4, delay: isMobile ? 0 : 0.15 })}
              >
                <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
                  Engineering Excellence
                </span>
              </motion.div>

              <motion.h1
                className="font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={getMotionTransition(isMobile, { duration: 0.4, delay: isMobile ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] })}
              >
                Engineering Excellence.
                <span className="mt-2 block text-secondary">Precision Fabrication.</span>
                <span className="mt-2 block">Trusted Quality.</span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getMotionTransition(isMobile, { duration: 0.4, delay: isMobile ? 0 : 0.45 })}
              >
                AQSW Engineering Solutions delivers precision sheet metal fabrication, stainless steel products, laboratory furniture, storage systems and custom engineering solutions for pharmaceutical, healthcare, commercial and industrial organizations across Pakistan.
              </motion.p>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getMotionTransition(isMobile, { duration: 0.4, delay: isMobile ? 0 : 0.6 })}
              >
                <Button asChild size="lg" variant="default">
                  <Link href="/contact">
                    Request Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </Container>
        </motion.div>
      </section>

      <section className="bg-background py-24 sm:py-28">
        <Container>
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-4xl text-center">
              <AboutSectionHeading
                eyebrow="About AQSW"
                title="About AQSW Engineering Solutions"
                align="center"
              />
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-dark-gray sm:text-lg">
                  AQSW Engineering Solutions is a trusted engineering and precision sheet metal fabrication company committed to delivering innovative, durable and high-quality manufacturing solutions. With years of experience serving pharmaceutical, healthcare, commercial, food processing and industrial sectors, we specialize in custom fabrication tailored to each client&apos;s operational requirements.
                </p>
                <p className="text-base leading-relaxed text-dark-gray sm:text-lg">
                  Our expertise includes laboratory furniture, stainless steel fabrication, storage systems, mobile racks, lockers, industrial equipment and customized engineering products manufactured with precision and reliability. Every project is executed using modern manufacturing techniques, strict quality control procedures and premium materials to ensure long-lasting performance.
                </p>
                <p className="text-base leading-relaxed text-dark-gray sm:text-lg">
                  At AQSW Engineering Solutions, we believe in building long-term partnerships through exceptional workmanship, transparent communication and timely project delivery. Our commitment to innovation, customer satisfaction and continuous improvement enables us to provide engineering solutions that meet the highest industry standards while creating lasting value for our clients.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {missionVisionCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="flex h-full items-start gap-4 rounded-[1.25rem] border border-primary/10 bg-primary p-5 text-white shadow-[0_20px_60px_-30px_rgba(11,31,58,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_70px_-25px_rgba(29,114,243,0.3)]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  <div className="mt-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-xl font-semibold uppercase tracking-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28">
        <Container>
          <AboutSectionHeading
            title="Why Choose AQSW"
            description="A dependable partner for engineering projects that demand accuracy, consistency and lasting performance."
            align="center"
          />

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  className="flex min-h-[200px] flex-col items-center justify-center rounded-[1.1rem] border border-primary/10 bg-white/70 px-4 py-6 text-center shadow-[0_12px_35px_-24px_rgba(11,31,58,0.28)] backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  whileHover={{
                    y: -4,
                    scale: 1.01,
                    boxShadow: "0 18px 45px -20px rgba(11, 31, 58, 0.24)",
                    transition: { type: "spring", stiffness: 260, damping: 20, mass: 0.9 },
                  }}
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <AboutSectionHeading
            eyebrow="Industries We Serve"
            title="Serving Essential Sectors"
            description="We support organizations that rely on durable fabrication, clean engineering workflow and dependable execution."
            align="center"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {industries.map((industry, index) => (
              <motion.article
                key={industry.title}
                className="group relative overflow-hidden rounded-[1.25rem] shadow-[0_16px_50px_-28px_rgba(11,31,58,0.28)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  boxShadow: "0 24px 70px -24px rgba(11, 31, 58, 0.3)",
                  transition: { type: "spring", stiffness: 260, damping: 22, mass: 0.9 },
                }}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-heading text-xl font-semibold uppercase tracking-tight text-white">
                    {industry.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28">
        <Container>
          <AboutSectionHeading
            eyebrow="Manufacturing Capabilities"
            title="Capabilities Built for Performance"
            description="From precision-made components to turnkey fabrication systems, our portfolio spans high-demand manufacturing environments."
            align="center"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                className="overflow-hidden rounded-[1.25rem] border border-primary/10 bg-white shadow-[0_16px_50px_-28px_rgba(11,31,58,0.22)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: "0 20px 60px -24px rgba(11, 31, 58, 0.26)",
                  transition: { type: "spring", stiffness: 260, damping: 20, mass: 0.9 },
                }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-xl font-semibold uppercase tracking-tight text-primary">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-dark-gray">
                    {capability.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary py-24 sm:py-28">
        <Container>
          <AboutSectionHeading
            eyebrow="Our Workflow"
            title="A Structured Path to Delivery"
            description="Every project follows a disciplined workflow designed around consultation, design accuracy, manufacturing precision and final installation."
            align="center"
            light
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="flex min-h-[240px] flex-col items-center rounded-[1.15rem] border border-white/10 bg-white/6 px-5 py-8 text-center shadow-[0_16px_45px_-28px_rgba(11,31,58,0.35)] backdrop-blur-sm"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{
                    y: -4,
                    scale: 1.01,
                    boxShadow: "0 18px 45px -20px rgba(11, 31, 58, 0.25)",
                    transition: { type: "spring", stiffness: 260, damping: 20, mass: 0.9 },
                  }}
                >
                  <div className="mb-5 flex h-18 w-18 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                    <Icon className="h-9 w-9" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold uppercase tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-background py-24 sm:py-28">
        <Container>
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-primary p-10 shadow-[0_30px_80px_-30px_rgba(11,31,58,0.4)] sm:p-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/hero/Welding Image.webp"
                alt="Fabrication partnership"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
                Let&apos;s Build Your Next Project Together
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Whether you require laboratory furniture, stainless steel fabrication, mobile storage systems or custom engineering solutions, AQSW Engineering Solutions is ready to deliver reliable engineering excellence.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="default">
                  <Link href="/contact">
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { SectionDivider } from "@/components/motion/section-heading";
import { getMotionTransition, useMobileAnimation } from "@/lib/animations";
import { clients } from "@/lib/data/site-content";

function ClientCard({ client }: { client: { name: string; logo?: string; logoClassName?: string } }) {
  const isMobile = useMobileAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={getMotionTransition(isMobile, { duration: 0.4 })}
      whileHover={{ y: -4, scale: 1.01, boxShadow: "0 18px 45px rgba(7, 35, 78, 0.12)" }}
      className="group flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-light-gray/70 bg-white p-6 text-center shadow-sm"
    >
      <div className="mb-5 flex h-20 w-full items-center justify-center">
        {client.logo ? (
        <Image
        src={client.logo}
        alt={`${client.name} logo`}
        width={180}
        height={80}
        className={`max-h-16 w-auto max-w-[180px] object-contain transition-transform duration-300 ${
  client.logoClassName ?? "group-hover:scale-[1.05]"
}`}
        loading="lazy"
/>
        ) : (
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
            {client.name}
          </span>
        )}
      </div>
      <h3 className="text-base font-semibold text-primary transition-colors duration-300 group-hover:text-secondary">
        {client.name}
      </h3>
    </motion.div>
  );
}

export function ClientsPageContent() {
  const isMobile = useMobileAnimation();

  return (
    <main className="bg-background">
      <section className="overflow-hidden bg-background py-24 sm:py-28 lg:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={getMotionTransition(isMobile, { duration: 0.4, ease: "easeOut" })}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-secondary">
              AQSW Partnerships
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold uppercase tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Trusted by Industry Leaders
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-dark-gray sm:text-lg">
              AQSW Engineering Solutions is proud to have delivered precision sheet metal fabrication, stainless steel solutions, laboratory furniture, storage systems, and industrial equipment for some of Pakistan&apos;s most respected organizations. Our long-term relationships are built on quality, reliability, and trust.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {clients.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </div>
        </Container>
      </section>

      <SectionDivider className="mx-auto max-w-7xl" />

      <section className="bg-background py-20 sm:py-24">
        <Container className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={getMotionTransition(isMobile, { duration: 0.4 })}
            className="max-w-3xl"
          >
            <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
              Building Long-Term Partnerships
            </h2>
            <p className="mt-5 text-base leading-8 text-dark-gray sm:text-lg">
              Our clients trust AQSW Engineering Solutions for precision manufacturing, consistent quality, timely delivery, and dependable engineering support. We remain committed to building lasting partnerships through excellence in fabrication and customer satisfaction.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-secondary"
            >
              Request a Quote
            </Link>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

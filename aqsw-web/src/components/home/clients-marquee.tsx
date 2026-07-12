"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { SectionDivider, SectionHeading } from "@/components/motion/section-heading";
import { clients } from "@/lib/data/site-content";

function ClientBadge({ client }: { client: { name: string; logo?: StaticImageData; logoClassName?: string } }) {
  return (
    <div className="mx-6 flex h-24 min-w-[220px] flex-col items-center justify-center rounded-xl border border-light-gray bg-white px-6 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/10">
      {client.logo ? (
        <div className={`mb-3 flex h-10 w-full max-w-[140px] items-center justify-center ${client.logoClassName ?? ""}`}>
          <Image
            src={client.logo}
            alt={`${client.name} logo`}
            width={140}
            height={40}
            className={`h-10 w-full object-contain ${client.logoClassName ?? ""}`}
          />
        </div>
      ) : null}
      <span className="whitespace-nowrap text-center font-heading text-sm font-bold uppercase tracking-wide text-primary/80">
        {client.name}
      </span>
    </div>
  );
}

export function ClientsMarquee() {
  const duplicated = [...clients, ...clients];

  return (
    <section className="overflow-hidden bg-background py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Clients"
          title="Trusted by Industry Leaders"
          description="We have served over 200 clients, providing a full range of fabrication services dependably, day in and day out."
        />
      </Container>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { duration: 40, repeat: Infinity, ease: "linear" },
          }}
        >
          {duplicated.map((client, i) => (
            <ClientBadge key={`${client.name}-${i}`} client={client} />
          ))}
        </motion.div>
      </div>

      <SectionDivider className="mt-24" />
    </section>
  );
}

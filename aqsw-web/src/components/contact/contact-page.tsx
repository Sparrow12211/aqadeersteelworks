"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, SendHorizonal } from "lucide-react";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

interface FormState {
  fullName: string;
  companyName: string;
  position: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

const initialFormState: FormState = {
  fullName: "",
  companyName: "",
  position: "",
  email: "",
  phone: "",
  message: "",
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  return /^[+0-9\s()-]{7,20}$/.test(phone);
}

export function ContactPageContent() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (submitted) {
      setSubmitted(false);
    }
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    const trimmedName = formState.fullName.trim();
    const trimmedEmail = formState.email.trim();
    const trimmedPhone = formState.phone.trim();

    if (!trimmedName) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Please enter your email address.";
    } else if (!validateEmail(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!trimmedPhone) {
      nextErrors.phone = "Please enter your contact number.";
    } else if (!validatePhone(trimmedPhone)) {
      nextErrors.phone = "Please enter a valid contact number.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="overflow-x-hidden">
      <section className="relative flex min-h-[68vh] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero/Welding Image.webp"
            alt="Industrial welding fabrication scene"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-primary/75 via-transparent to-primary/25" />

        <Container className="relative z-10 py-24 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
              Contact A. Qadeer Steel Works
            </span>
            <h1 className="font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              Let&apos;s Build Something
              <span className="mt-2 block text-secondary">Strong Together</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Have a project, fabrication requirement, or technical inquiry? Our team is ready to assist you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="default">
                <a href="#inquiry-form">
                  Submit Inquiry
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#company-contact">View Contact Details</a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <ScrollReveal direction="up" className="h-full">
              <div
                id="company-contact"
                className="flex h-full flex-col rounded-[1.2rem] border border-primary/10 bg-white p-7 shadow-[0_20px_60px_-34px_rgba(11,31,58,0.25)] sm:p-8"
              >
                <div className="mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                    Company Contact
                  </p>
                  <h2 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-tight text-primary sm:text-[2rem]">
                    A. Qadeer Steel Works
                  </h2>
                </div>

                <p className="text-base leading-8 text-dark-gray">
                  A. Qadeer Steel Works specializes in stainless steel structures, cleanroom sheet metal fabrication, and custom industrial fabrication solutions for demanding projects across pharmaceutical, food, commercial, and industrial environments.
                </p>

                <div className="mt-8 space-y-5 border-t border-primary/10 pt-8">
                  <div className="flex gap-3">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        Phone
                      </p>
                      <div className="mt-2 space-y-1">
                        {siteConfig.phone.map((contact) => (
                          <div key={`${contact.label}-${contact.numbers[0]}`}>
                            <p className="text-sm font-medium text-primary">{contact.label}</p>
                            {contact.numbers.map((number) => (
                              <a
                                key={number}
                                href={`tel:${number}`}
                                className="block text-sm text-dark-gray transition-colors hover:text-secondary"
                              >
                                {number}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-2 block text-sm text-dark-gray transition-colors hover:text-secondary"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                        Location
                      </p>
                      <p className="mt-2 text-sm leading-7 text-dark-gray">{siteConfig.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.08} className="h-full">
              <div
                id="inquiry-form"
                className="rounded-[1.2rem] border border-primary/10 bg-white p-7 shadow-[0_20px_60px_-34px_rgba(11,31,58,0.25)] sm:p-8"
              >
                <div className="mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
                    Inquiry Form
                  </p>
                  <h2 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-tight text-primary sm:text-[2rem]">
                    Tell Us About Your Project
                  </h2>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-3 rounded-[1rem] border border-emerald-200 bg-emerald-50 p-5"
                  >
                    <div className="flex items-center gap-3 text-emerald-700">
                      <CheckCircle2 className="h-6 w-6" />
                      <p className="font-semibold">Thank you for contacting us. Our team will get back to you shortly.</p>
                    </div>
                    <p className="text-sm leading-7 text-emerald-700/80">
                      We appreciate your interest in A. Qadeer Steel Works and will review your inquiry promptly.
                    </p>
                  </motion.div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="block text-sm font-medium text-primary">
                        <span className="mb-2 block">Full Name *</span>
                        <input
                          name="fullName"
                          value={formState.fullName}
                          onChange={handleChange}
                          className="w-full rounded-[0.7rem] border border-primary/10 bg-background px-4 py-3 text-sm text-primary outline-none transition focus:border-secondary"
                          placeholder="Enter your full name"
                        />
                        {errors.fullName && (
                          <span className="mt-2 block text-sm text-red-600">{errors.fullName}</span>
                        )}
                      </label>

                      <label className="block text-sm font-medium text-primary">
                        <span className="mb-2 block">Company Name</span>
                        <input
                          name="companyName"
                          value={formState.companyName}
                          onChange={handleChange}
                          className="w-full rounded-[0.7rem] border border-primary/10 bg-background px-4 py-3 text-sm text-primary outline-none transition focus:border-secondary"
                          placeholder="Your company name"
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="block text-sm font-medium text-primary">
                        <span className="mb-2 block">Position / Designation</span>
                        <input
                          name="position"
                          value={formState.position}
                          onChange={handleChange}
                          className="w-full rounded-[0.7rem] border border-primary/10 bg-background px-4 py-3 text-sm text-primary outline-none transition focus:border-secondary"
                          placeholder="Your role or designation"
                        />
                      </label>

                      <label className="block text-sm font-medium text-primary">
                        <span className="mb-2 block">Email Address *</span>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full rounded-[0.7rem] border border-primary/10 bg-background px-4 py-3 text-sm text-primary outline-none transition focus:border-secondary"
                          placeholder="name@company.com"
                        />
                        {errors.email && (
                          <span className="mt-2 block text-sm text-red-600">{errors.email}</span>
                        )}
                      </label>
                    </div>

                    <label className="block text-sm font-medium text-primary">
                      <span className="mb-2 block">Contact Number *</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full rounded-[0.7rem] border border-primary/10 bg-background px-4 py-3 text-sm text-primary outline-none transition focus:border-secondary"
                        placeholder="e.g. 0314-2118145"
                      />
                      {errors.phone && (
                        <span className="mt-2 block text-sm text-red-600">{errors.phone}</span>
                      )}
                    </label>

                    <label className="block text-sm font-medium text-primary">
                      <span className="mb-2 block">Comments / Message</span>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full rounded-[0.7rem] border border-primary/10 bg-background px-4 py-3 text-sm text-primary outline-none transition focus:border-secondary"
                        placeholder="Describe your fabrication requirement, project scope, or inquiry"
                      />
                    </label>

                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-primary/10 pt-4">
                      <p className="text-sm text-dark-gray">
                        Required fields are marked with an asterisk.
                      </p>
                      <Button type="submit" size="lg" className="min-w-[180px]">
                        Submit Inquiry
                        <SendHorizonal className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </main>
  );
}

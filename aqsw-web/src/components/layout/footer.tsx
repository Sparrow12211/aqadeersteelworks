import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { navLinks, siteConfig, socialLinks } from "@/lib/constants";
import { services } from "@/lib/data/site-content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <Logo variant="light" showTagline />
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-white/60 transition-colors hover:border-secondary/50 hover:text-white"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-secondary">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/products"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-secondary">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{siteConfig.address}</span>
              </li>
              {siteConfig.phone.map((contact) => (
                <li key={contact.label}>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/50">
                    {contact.label}
                  </p>
                  <div className="flex flex-col gap-1">
                    {contact.numbers.map((number) => (
                      <a
                        key={number}
                        href={`tel:${number.replace(/[^0-9+]/g, "")}`}
                        className="flex items-center gap-2 transition-colors hover:text-white"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0 text-secondary" />
                        {number}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-secondary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Button asChild variant="outline" size="sm" className="mt-2">
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View on Google Maps
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-white/10">
          <iframe
            title="AQSW Location"
            src={siteConfig.googleMapsEmbed}
            className="h-48 w-full border-0 grayscale-[30%] contrast-[1.1] sm:h-56"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-heading text-xs font-semibold uppercase tracking-widest text-white/60">
            Quality Is Our Standard | Your Vision. Our Fabrication.
          </p>
        </div>
      </Container>
    </footer>
  );
}

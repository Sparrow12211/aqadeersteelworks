"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isTransparent = isHome && !isScrolled;
  const isSolidNavy = isHome && isScrolled;
  const isSolidWhite = !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const linkClasses = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    if (isSolidWhite) {
      return cn(
        "relative px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-300",
        isActive
          ? "text-secondary"
          : "text-primary/80 hover:text-primary",
        "after:absolute after:bottom-0 after:left-3 after:h-0.5 after:transition-all after:duration-300",
        isActive
          ? "after:w-[calc(100%-1.5rem)] after:bg-secondary"
          : "after:w-0 after:bg-secondary hover:after:w-[calc(100%-1.5rem)]"
      );
    }

    return cn(
      "relative px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-300",
      isActive ? "text-white" : "text-white/80 hover:text-white",
      "after:absolute after:bottom-0 after:left-3 after:h-0.5 after:transition-all after:duration-300",
      isActive
        ? "after:w-[calc(100%-1.5rem)] after:bg-secondary"
        : "after:w-0 after:bg-secondary hover:after:w-[calc(100%-1.5rem)]"
    );
  };

  const mobileLinkClasses = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    if (isSolidWhite) {
      return cn(
        "block rounded-md px-4 py-3 text-base font-medium uppercase tracking-wide transition-colors",
        isActive
          ? "bg-secondary/10 text-secondary"
          : "text-primary/90 hover:bg-primary/5 hover:text-primary"
      );
    }

    return cn(
      "block rounded-md px-4 py-3 text-base font-medium uppercase tracking-wide transition-colors",
      isActive
        ? "bg-white/10 text-white"
        : "text-white/90 hover:bg-white/10 hover:text-white"
    );
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isTransparent && "bg-transparent",
        isSolidNavy &&
          "border-b border-white/10 bg-primary/95 shadow-lg shadow-primary/20 backdrop-blur-md",
        isSolidWhite &&
          cn(
            "border-b border-light-gray bg-white shadow-sm",
            isScrolled && "shadow-md"
          )
      )}
    >
      <Container as="div">
        <div className="flex h-20 items-center justify-between">
          <Logo
            variant={isSolidWhite ? "dark" : "light"}
            showTagline={false}
          />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClasses(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Button asChild size="default">
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex items-center justify-center rounded-md p-2 lg:hidden",
              isSolidWhite ? "text-primary" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "overflow-hidden border-t lg:hidden",
              isSolidWhite
                ? "border-light-gray bg-white"
                : "border-white/10 bg-primary"
            )}
          >
            <Container className="py-6">
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={mobileLinkClasses(link.href)}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-4 px-4"
                >
                  <Button asChild className="w-full">
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Request Quote
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import Link from "next/link";
import { Cog } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export function Logo({
  className,
  variant = "dark",
  showTagline = false,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3 transition-opacity hover:opacity-90", className)}
      aria-label={`${siteConfig.name} - Home`}
    >
      <div
        className={cn(
          "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300",
          isLight
            ? "border-white/30 bg-white/10 group-hover:border-white/50"
            : "border-secondary/30 bg-secondary/5 group-hover:border-secondary/50"
        )}
      >
        <Cog
          className={cn(
            "h-6 w-6 transition-transform duration-500 group-hover:rotate-90",
            isLight ? "text-white" : "text-secondary"
          )}
          strokeWidth={1.5}
        />
        <span
          className={cn(
            "absolute text-[11px] font-bold leading-none",
            isLight ? "text-white" : "text-primary"
          )}
        >
          A
        </span>
      </div>

      <div className="flex flex-col">
        <span
          className={cn(
            "font-heading text-sm font-bold uppercase leading-tight tracking-wide sm:text-base",
            isLight ? "text-white" : "text-primary"
          )}
        >
          A. Qadeer Steel Works
        </span>
        {showTagline && (
          <span
            className={cn(
              "hidden text-[10px] font-medium uppercase tracking-widest sm:block",
              isLight ? "text-white/70" : "text-dark-gray"
            )}
          >
            {siteConfig.tagline}
          </span>
        )}
      </div>
    </Link>
  );
}

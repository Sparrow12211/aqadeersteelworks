"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-secondary text-white shadow-md hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border-2 border-white/80 bg-transparent text-white hover:bg-white hover:text-primary",
        "outline-dark":
          "border-2 border-primary/20 bg-transparent text-primary hover:border-secondary hover:text-secondary",
        secondary:
          "bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
        ghost: "text-primary hover:bg-primary/5 hover:text-secondary",
        link: "text-secondary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ripple?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      ripple = false,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = React.useState<
      { x: number; y: number; id: number }[]
    >([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple && !asChild) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setRipples((prev) => [...prev, { x, y, id }]);
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 600);
      }
      onClick?.(e);
    };

    const Comp = asChild ? Slot : "button";

    const childContent = (
      <>
        {ripple &&
          !asChild &&
          ripples.map((r) => (
            <span
              key={r.id}
              className="pointer-events-none absolute animate-ripple rounded-full bg-white/30"
              style={{
                left: r.x,
                top: r.y,
                width: 0,
                height: 0,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        {children}
      </>
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={asChild ? onClick : handleClick}
        {...props}
      >
        {asChild ? children : childContent}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

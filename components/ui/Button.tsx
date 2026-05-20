import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "@/components/ui/Icons";

type Variant = "primary" | "solid" | "outline" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-leaf text-canopy hover:bg-leaf-bright shadow-[0_8px_24px_-8px_rgba(121,179,90,0.7)]",
  solid: "bg-canopy text-cream hover:bg-forest",
  outline:
    "border border-canopy/25 text-canopy hover:border-canopy/60 hover:bg-canopy/[0.04]",
  ghost: "text-canopy hover:bg-canopy/[0.06]",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-[0.95rem]",
  lg: "px-7 py-4 text-base",
};

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
};

function classes({ variant = "primary", size = "md", className = "" }: BaseProps) {
  return [
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-moss",
    "active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");
}

function Inner({
  children,
  withArrow,
}: {
  children: ReactNode;
  withArrow?: boolean;
}) {
  return (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="size-[1.05em] transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );
}

export function ButtonLink({
  href,
  children,
  variant,
  size,
  withArrow,
  className,
  ...rest
}: BaseProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className"
  >) {
  return (
    <Link
      href={href}
      className={classes({ children, variant, size, className })}
      {...rest}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </Link>
  );
}

export function Button({
  children,
  variant,
  size,
  withArrow,
  className,
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button
      className={classes({ children, variant, size, className })}
      {...rest}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </button>
  );
}

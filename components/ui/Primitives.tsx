import type { ReactNode } from "react";
import { Leaf } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "moss",
  className = "",
}: {
  children: ReactNode;
  tone?: "moss" | "cream";
  className?: string;
}) {
  const color = tone === "cream" ? "text-leaf-bright" : "text-moss";
  return (
    <span
      className={`eyebrow inline-flex items-center gap-2 ${color} ${className}`}
    >
      <Leaf className="size-4" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";
  const titleColor = tone === "light" ? "text-cream" : "text-canopy";
  const introColor = tone === "light" ? "text-cream/75" : "text-stone";

  return (
    <Reveal className={`flex flex-col gap-5 ${alignment} max-w-2xl`}>
      {eyebrow && (
        <Eyebrow tone={tone === "light" ? "cream" : "moss"}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={`font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.06] font-medium text-balance ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`text-lg leading-relaxed text-pretty ${introColor}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

/** Decorative ISA-style seal used for trust marks. */
export function Seal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="2 3"
      />
      <circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M32 18c-7 6-10 12-10 18 0 6 4.4 10 10 10s10-4 10-10c0-6-3-12-10-18Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M32 46V28"
        stroke="var(--color-cream)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

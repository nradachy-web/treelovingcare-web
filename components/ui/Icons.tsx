import type { SVGProps } from "react";
import type { ServiceIcon } from "@/lib/site";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5 10 17 19 7" />
    </svg>
  );
}

export function Leaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4S8 3 5.5 11.5C3.8 17.3 7 20 7 20s7 .5 10.5-6C19.6 9.9 20 4 20 4Z" />
      <path d="M7 20S9 12 17 6" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.9 6.1 20.8l1.3-6.5L2.5 9.3l6.6-.8L12 2.5Z" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.2l3.4 2" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 5.5v5C5 16 8 19.5 12 21c4-1.5 7-5 7-10.5v-5L12 3Z" />
      <path d="M8.8 12 11 14.2 15.4 9.6" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 7H5.5C4 7 3 8 3 9.5v4C3 15 4 16 5.5 16H8v.5C8 18.4 6.7 19.7 5 20l.6 1.7C8.6 21 11 18.4 11 14.7V8c0-.6-.4-1-1-1Zm11 0h-4.5C15 7 14 8 14 9.5v4c0 1.5 1 2.5 2.5 2.5H19v.5c0 1.9-1.3 3.2-3 3.5l.6 1.7C19.6 21 22 18.4 22 14.7V8c0-.6-.4-1-1-1Z" />
    </svg>
  );
}

/* ---- service icons ---- */

function Removal(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21v-6" />
      <path d="M12 15c-3.6 0-5-2.2-5-4.6 0-1 .4-2 1-2.6-.5-1.8.6-3.8 2-4.6 1.2 2 3.4 1.6 4.6 3.2 1.8.3 3.4 2 3.4 4 0 2.4-1.8 4.6-6 4.6Z" />
      <path d="M4 21h16" />
      <path d="M15 7.5 20 3M17 3h3v3" />
    </svg>
  );
}

function Pruning(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21V9" />
      <path d="M12 13 8 9M12 11l3.5-3.5M12 16l-3-3M12 9 9.5 4.5M12 9l2.8-4.2" />
      <circle cx="9.5" cy="4.5" r="1.4" />
      <circle cx="14.8" cy="4.8" r="1.4" />
      <path d="M7 21h10" />
    </svg>
  );
}

function Stump(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="9" rx="7" ry="3" />
      <path d="M5 9v5c0 1.7 3.1 3 7 3s7-1.3 7-3V9" />
      <circle cx="12" cy="9" r="1.2" />
      <path d="M12 7.9V6.7M12 11.2v1.1M10 9H8.9M15.1 9H14" />
    </svg>
  );
}

function Cabling(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 21V6M15 21V8" />
      <path d="M9 6 6 2M15 8l3-4" />
      <path d="M9 10c2.5 1.8 3.5 1.8 6-1" />
      <path d="M5 21h14" />
    </svg>
  );
}

function Emergency(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 13h6l-1 9 9-12h-6l1-8Z" />
    </svg>
  );
}

function Assessment(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 5 5" />
      <path d="M8.5 11.5 10.5 13.5 14 9.5" />
    </svg>
  );
}

function Planting(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20h16" />
      <path d="M8 20c0-2 1.8-3.2 4-3.2s4 1.2 4 3.2" />
      <path d="M12 16.8v-4.3" />
      <path d="M12 12.5c-2 0-3.2-1.2-3.2-3C10.8 9.5 12 10.7 12 12.5Z" />
      <path d="M12 11.8c0-1.8 1.2-3 3.2-3 0 1.8-1.2 3-3.2 3Z" />
    </svg>
  );
}

function Protection(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 5.5v5C5 16 8 19.5 12 21c4-1.5 7-5 7-10.5v-5L12 3Z" />
      <path d="M12 16v-3" />
      <path d="M12 13c-1.6 0-2.7-1-2.7-2.4C11 10.6 12 11.6 12 13Z" />
      <path d="M12 12.6c0-1.4 1-2.4 2.7-2.4 0 1.4-1.1 2.4-2.7 2.4Z" />
    </svg>
  );
}

function Consultation(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 6.5A1.5 1.5 0 0 1 6 5h12a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 18 15h-6l-4 3.5V15H6a1.5 1.5 0 0 1-1.5-1.5Z" />
      <path d="M8 8.8h8M8 11.4h5" />
    </svg>
  );
}

const serviceIcons: Record<ServiceIcon, (p: IconProps) => React.ReactElement> = {
  removal: Removal,
  pruning: Pruning,
  planting: Planting,
  stump: Stump,
  cabling: Cabling,
  emergency: Emergency,
  assessment: Assessment,
  protection: Protection,
  consultation: Consultation,
};

export function ServiceGlyph({
  name,
  ...props
}: { name: ServiceIcon } & IconProps) {
  const Glyph = serviceIcons[name];
  return <Glyph {...props} />;
}

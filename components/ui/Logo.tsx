import Image from "next/image";
import Link from "next/link";
import logoMark from "@/public/photos/brand/logo-mark.png";

export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const word = tone === "light" ? "text-cream" : "text-canopy";
  const sub = tone === "light" ? "text-cream/55" : "text-stone";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Tree Loving Care, home"
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cream shadow-[0_2px_8px_rgba(22,50,27,0.12)] transition-transform duration-300 group-hover:-translate-y-0.5">
        <Image
          src={logoMark}
          alt=""
          className="h-7 w-auto"
          priority
          sizes="28px"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display whitespace-nowrap text-[1.2rem] font-semibold tracking-tight sm:text-[1.3rem] ${word}`}
        >
          Tree Loving Care
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${sub}`}
        >
          ISA Certified Arborists
        </span>
      </span>
    </Link>
  );
}

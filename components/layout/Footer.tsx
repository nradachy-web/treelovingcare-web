import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon, Mail, MapPin, Clock } from "@/components/ui/Icons";
import { nav, services, serviceAreas, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-canopy text-cream">
      {/* CTA band */}
      <div className="border-b border-cream/10">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-[clamp(1.9rem,3.6vw,2.8rem)] font-medium leading-[1.1] text-balance">
              Stop worrying about that tree.
            </h2>
            <p className="mt-3 max-w-md text-cream/70">
              A certified arborist will take a look and give you an honest,
              no-pressure estimate, free.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
            <ButtonLink href="/contact" variant="primary" size="lg" withArrow>
              Request a Free Estimate
            </ButtonLink>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-4 font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              <PhoneIcon className="size-5" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      {/* link columns */}
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed text-cream/65">
            “{site.motto}”
          </p>
          <p className="mt-4 text-sm text-cream/55">
            Family-owned and veteran-operated, serving {site.region}.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="eyebrow text-leaf-bright">Explore</p>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-cream/75 transition-colors hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-3">
          <p className="eyebrow text-leaf-bright">Services</p>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="text-sm text-cream/75 transition-colors hover:text-cream"
            >
              {s.short}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <p className="eyebrow text-leaf-bright">Get in touch</p>
          <a
            href={site.phoneHref}
            className="flex items-start gap-3 text-sm text-cream/80 transition-colors hover:text-cream"
          >
            <PhoneIcon className="mt-0.5 size-4 shrink-0 text-leaf" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-start gap-3 break-all text-sm text-cream/80 transition-colors hover:text-cream"
          >
            <Mail className="mt-0.5 size-4 shrink-0 text-leaf" />
            {site.email}
          </a>
          <p className="flex items-start gap-3 text-sm text-cream/80">
            <MapPin className="mt-0.5 size-4 shrink-0 text-leaf" />
            {site.address.full}
          </p>
          <p className="flex items-start gap-3 text-sm text-cream/80">
            <Clock className="mt-0.5 size-4 shrink-0 text-leaf" />
            {site.hours}
          </p>
        </div>
      </div>

      {/* service-area strip */}
      <div className="border-t border-cream/10">
        <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
          <p className="text-xs leading-relaxed text-cream/45">
            <span className="font-semibold text-cream/65">Proudly serving:</span>{" "}
            {serviceAreas.map((a) => a.city).join(" · ")} and surrounding
            western Wisconsin communities.
          </p>
        </div>
      </div>

      {/* legal */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            ISA Certified Arborist {site.owner.credential.split("· ")[1]} ·
            Fully insured
          </p>
        </div>
      </div>
    </footer>
  );
}

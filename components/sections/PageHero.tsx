import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate flex min-h-[58svh] items-end overflow-hidden bg-canopy">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canopy via-canopy/70 to-canopy/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-canopy/75 to-transparent" />
      </div>

      <Container className="pb-14 pt-36 sm:pb-18 sm:pt-44">
        <div className="max-w-2xl">
          {crumbs.length > 0 && (
            <Reveal>
              <nav
                aria-label="Breadcrumb"
                className="mb-5 flex flex-wrap items-center gap-2 text-sm text-cream/55"
              >
                <Link href="/" className="hover:text-cream">
                  Home
                </Link>
                {crumbs.map((c) => (
                  <span key={c.label} className="flex items-center gap-2">
                    <span aria-hidden>/</span>
                    {c.href ? (
                      <Link href={c.href} className="hover:text-cream">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-cream/80">{c.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <Eyebrow tone="cream">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="font-display mt-5 text-[clamp(2.3rem,5.2vw,4rem)] font-medium leading-[1.04] text-cream text-balance">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80 text-pretty">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}

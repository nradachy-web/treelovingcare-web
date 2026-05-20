import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Primitives";
import { PhoneIcon, ShieldCheck, Star } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { credentials, site } from "@/lib/site";
import { img } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-canopy">
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={img.hero}
          alt={img.heroAlt}
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canopy via-canopy/55 to-canopy/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-canopy/80 via-canopy/20 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-40">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="cream">Tree care across {site.regionShort}</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-display mt-6 text-[clamp(2.6rem,6.4vw,4.85rem)] font-medium leading-[1.02] text-cream text-balance">
              Expert tree care that keeps your home{" "}
              <span className="text-leaf-bright">safe</span> and your yard{" "}
              <span className="italic">beautiful</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 text-pretty">
              Family-owned, veteran-operated, and led by an ISA Certified
              Arborist. From routine pruning to emergency removals, Tree Loving
              Care does it right, and leaves your property spotless.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="primary" size="lg" withArrow>
                Request a Free Estimate
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-4 font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/10"
              >
                <PhoneIcon className="size-5" />
                {site.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/75">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-5 text-leaf-bright" />
                Fully insured &amp; certified
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-4 text-leaf-bright" />
                  ))}
                </span>
                Trusted by Wisconsin homeowners
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* credential strip */}
      <div className="relative border-t border-cream/10 bg-canopy/80 backdrop-blur-sm">
        <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-x divide-cream/10 px-5 sm:px-8 lg:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label} className="px-4 py-5 first:pl-0">
              <dt className="font-display text-base font-semibold text-cream">
                {c.label}
              </dt>
              <dd className="mt-0.5 text-sm text-cream/55">{c.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, Eyebrow, SectionHeading } from "@/components/ui/Primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ServiceGlyph, ArrowRight, MapPin, Check } from "@/components/ui/Icons";
import { services, serviceAreas, site } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/service-areas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Tree Service in ${area.city}, WI`,
    description: `ISA Certified tree removal, trimming, stump grinding and emergency tree service in ${area.city}, ${area.county}. Free estimates from Tree Loving Care.`,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

const reasons = [
  "Fast, local response, we're based right here in the region",
  "Every job led by an ISA Certified Arborist",
  "Fully insured, with proof provided gladly",
  "Honest quotes and a complete cleanup, every time",
];

export default async function ServiceAreaPage({
  params,
}: PageProps<"/service-areas/[slug]">) {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const nearby = serviceAreas.filter((a) => a.slug !== area.slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
          { name: area.city, url: `/service-areas/${area.slug}` },
        ])}
      />

      <PageHero
        eyebrow={area.county}
        title={`Tree Service in ${area.city}, Wisconsin`}
        intro={area.blurb}
        image="/photos/hero/hero-drone-rooftop-canopy.jpg"
        imageAlt={`Tree care in ${area.city}, WI`}
        crumbs={[
          { label: "Service Areas", href: "/service-areas" },
          { label: area.city },
        ]}
      />

      {/* intro + reasons */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Your local arborist</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-[clamp(1.8rem,3.6vw,2.7rem)] font-medium leading-[1.1] text-canopy text-balance">
                  Trusted tree care for {area.city} homeowners.
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-5 text-lg leading-relaxed text-stone text-pretty">
                  Whether it's a storm-damaged limb, an overgrown maple, or a
                  tree you're simply not sure about, Tree Loving Care brings
                  certified expertise to every property in {area.city} and
                  throughout {area.county}. Call {site.phone} for a free,
                  no-pressure estimate.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-canopy p-7 text-cream">
                <MapPin className="size-9 text-leaf-bright" />
                <h3 className="font-display mt-4 text-xl font-semibold">
                  Why {area.city} calls us
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-cream/80">
                  {reasons.map((r) => (
                    <li key={r} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-leaf-bright" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* services */}
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Services in this area"
            title={`Everything your ${area.city} trees might need.`}
          />
          <RevealGroup
            className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.05}
          >
            {services.map((s) => (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-bark/10 bg-paper px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-moss/40 hover:shadow-soft"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-cream text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                      <ServiceGlyph name={s.icon} className="size-6" />
                    </span>
                    <span className="font-display font-semibold text-canopy">
                      {s.short}
                    </span>
                  </span>
                  <ArrowRight className="size-4 text-moss transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* nearby */}
      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-canopy">
            We also serve nearby
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {nearby.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-bark/15 bg-cream px-5 py-2.5 text-sm font-medium text-bark transition-colors hover:border-moss/50 hover:text-forest"
              >
                <MapPin className="size-4 text-moss" />
                {a.city}, WI
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={`Tree trouble in ${area.city}? We'll take a look, free.`} />
    </>
  );
}

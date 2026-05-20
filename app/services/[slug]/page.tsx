import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Check, ArrowRight, ServiceGlyph } from "@/components/ui/Icons";
import { ButtonLink } from "@/components/ui/Button";
import { services, site } from "@/lib/site";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: `${service.promise} ${service.name} by ISA Certified Arborists in ${site.regionShort}. Free estimates.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const schema = serviceSchema(service.slug);

  return (
    <>
      <JsonLd
        data={[
          ...(schema ? [schema] : []),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.name, url: `/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Tree service"
        title={service.name}
        intro={service.promise}
        image={`/photos/services/${service.image}`}
        imageAlt={service.name}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      {/* the worry + intro */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>The problem</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="font-display mt-5 text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-[1.2] text-canopy text-balance">
                  {service.worry}
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 text-lg leading-relaxed text-stone text-pretty">
                  {service.intro}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-canopy p-7 text-cream">
                <span className="grid size-14 place-items-center rounded-2xl bg-leaf/15 text-leaf-bright">
                  <ServiceGlyph name={service.icon} className="size-8" />
                </span>
                <h2 className="font-display mt-5 text-xl font-semibold">
                  Why homeowners call us for this
                </h2>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-cream/80">
                  <li className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-leaf-bright" />
                    Led by an ISA Certified Arborist
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-leaf-bright" />
                    Fully insured, proof provided gladly
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-leaf-bright" />
                    Honest quotes with no pressure
                  </li>
                  <li className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-leaf-bright" />
                    Complete cleanup, every time
                  </li>
                </ul>
                <div className="mt-6">
                  <ButtonLink href="/contact" variant="primary" withArrow>
                    Get a free estimate
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* what's included */}
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
                <Image
                  src={`/photos/services/${service.image}`}
                  alt={`${service.name} in progress`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <Reveal>
                <Eyebrow>What's included</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-[1.1] text-canopy text-balance">
                  Done thoroughly, the first time.
                </h2>
              </Reveal>
              <ul className="mt-7 flex flex-col gap-3">
                {service.includes.map((item, i) => (
                  <Reveal as="li" key={item} delay={0.12 + i * 0.06}>
                    <span className="flex items-start gap-3.5 rounded-xl bg-paper px-4 py-3.5">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-leaf text-canopy">
                        <Check className="size-4" strokeWidth={2.6} />
                      </span>
                      <span className="leading-relaxed text-bark">{item}</span>
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* the outcome */}
      <section className="bg-canopy py-20 text-cream sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="cream">The result</Eyebrow>
            <p className="font-display mt-6 text-[clamp(1.6rem,3.2vw,2.5rem)] font-medium leading-[1.22] text-balance">
              {service.outcome}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* other services */}
      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-canopy">
            Explore our other services
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-bark/10 bg-cream px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-moss/40 hover:shadow-soft"
              >
                <span className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-paper text-forest">
                    <ServiceGlyph name={s.icon} className="size-6" />
                  </span>
                  <span className="font-display font-semibold text-canopy">
                    {s.short}
                  </span>
                </span>
                <ArrowRight className="size-4 text-moss transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={`Need ${service.name.toLowerCase()}? Let's take a look.`} />
    </>
  );
}

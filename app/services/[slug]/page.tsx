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
import { services, site, type ServiceBlock } from "@/lib/site";
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
    description: `${service.promise} ${service.name} led by an ISA Certified Arborist across ${site.regionShort}. Request an assessment.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

/** Renders a single ordered content block from the service data. */
function Block({ block }: { block: ServiceBlock }) {
  if (block.kind === "callout") {
    return (
      <div className="rounded-3xl border-l-4 border-forest bg-leaf/10 p-7 sm:p-9">
        <p className="eyebrow text-forest">{block.heading}</p>
        <p className="mt-4 text-lg leading-relaxed text-bark text-pretty">
          {block.body}
        </p>
      </div>
    );
  }

  if (block.kind === "prose") {
    return (
      <div>
        <h2 className="font-display text-[clamp(1.5rem,2.8vw,2rem)] font-medium leading-tight text-canopy text-balance">
          {block.heading}
        </h2>
        <div className="mt-5 flex flex-col gap-4">
          {block.body.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-stone text-pretty">
              {p}
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (block.kind === "warranty") {
    return (
      <div className="rounded-3xl border border-bark/10 bg-paper p-7 shadow-soft sm:p-9">
        <h2 className="font-display text-[clamp(1.5rem,2.8vw,2rem)] font-medium leading-tight text-canopy">
          {block.heading}
        </h2>
        {block.intro && (
          <p className="mt-4 text-lg leading-relaxed text-stone text-pretty">
            {block.intro}
          </p>
        )}
        <ul className="mt-6 flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3.5">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-leaf text-canopy">
                <Check className="size-4" strokeWidth={2.6} />
              </span>
              <span className="leading-relaxed text-bark">{item}</span>
            </li>
          ))}
        </ul>
        {block.fineprint && (
          <p className="mt-6 border-t border-bark/10 pt-5 text-sm leading-relaxed text-stone">
            {block.fineprint}
          </p>
        )}
      </div>
    );
  }

  // list (default + warn tone)
  const warn = block.tone === "warn";
  return (
    <div>
      <h2 className="font-display text-[clamp(1.5rem,2.8vw,2rem)] font-medium leading-tight text-canopy text-balance">
        {block.heading}
      </h2>
      {block.intro && (
        <p className="mt-4 text-lg leading-relaxed text-stone text-pretty">
          {block.intro}
        </p>
      )}
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {block.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3.5 rounded-xl bg-paper px-4 py-3.5"
          >
            {warn ? (
              <span
                className="mt-1 grid size-6 shrink-0 place-items-center rounded-full border border-clay/45"
                aria-hidden
              >
                <span className="h-0.5 w-3 rounded bg-clay" />
              </span>
            ) : (
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-leaf text-canopy">
                <Check className="size-4" strokeWidth={2.6} />
              </span>
            )}
            <span className="leading-relaxed text-bark">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);
  const schema = serviceSchema(service.slug);
  const tierLabel = service.tier === "specialty" ? "Specialty service" : "Tree service";
  const splitAt = Math.ceil(service.blocks.length / 2);
  const leadBlocks = service.blocks.slice(0, splitAt);
  const restBlocks = service.blocks.slice(splitAt);
  const bandImage = service.gallery[1];

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
        eyebrow={tierLabel}
        title={service.name}
        intro={service.promise}
        image={service.image}
        imageAlt={service.imageAlt}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      {/* lead: intro + framed photo */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>The work</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-5 text-[clamp(1.15rem,1.7vw,1.4rem)] leading-relaxed text-bark text-pretty">
                  {service.intro}
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-medium text-forest">
                  {[
                    "ISA Certified Arborist-led",
                    "Removal is never the default",
                    "Fully insured",
                    "No-cost first assessment",
                  ].map((point) => (
                    <li key={point} className="inline-flex items-center gap-2">
                      <Check className="size-4 shrink-0" strokeWidth={2.6} />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9">
                  <ButtonLink href="/contact" variant="solid" size="lg" withArrow>
                    Request an Assessment
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
                <Image
                  src={service.gallery[0]}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute left-5 top-5 grid size-12 place-items-center rounded-2xl bg-paper/95 text-forest shadow-soft backdrop-blur-sm">
                  <ServiceGlyph name={service.icon} className="size-7" />
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ordered content blocks, broken up by a cinematic photo band */}
      <section className="bg-cream pt-20 sm:pt-28">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col gap-14">
            {leadBlocks.map((block, i) => (
              <Reveal key={`${block.kind}-${i}`} delay={0.04}>
                <Block block={block} />
              </Reveal>
            ))}
          </div>
        </Container>
        <div className="h-16 sm:h-24" />
      </section>

      {bandImage && (
        <section className="relative h-[46vh] min-h-[300px] overflow-hidden">
          <Image
            src={bandImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canopy/55 via-canopy/10 to-canopy/25" />
        </section>
      )}

      {restBlocks.length > 0 && (
        <section className="bg-cream pb-20 pt-16 sm:pb-28 sm:pt-24">
          <Container>
            <div className="mx-auto flex max-w-4xl flex-col gap-14">
              {restBlocks.map((block, i) => (
                <Reveal key={`${block.kind}-rest-${i}`} delay={0.04}>
                  <Block block={block} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* best-fit customer */}
      {service.bestFit && (
        <section className="bg-paper py-16 sm:py-20">
          <Container>
            <Reveal className="mx-auto max-w-3xl rounded-[2rem] border border-bark/10 bg-cream p-8 text-center sm:p-12">
              <Eyebrow>Who it's for</Eyebrow>
              <p className="font-display mt-5 text-[clamp(1.3rem,2.4vw,1.8rem)] font-medium leading-snug text-canopy text-balance">
                {service.bestFit}
              </p>
            </Reveal>
          </Container>
        </section>
      )}

      {/* the outcome */}
      {service.outcome && (
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
      )}

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

      <CtaBand title={`Have a tree in mind? Let's take a look.`} />
    </>
  );
}

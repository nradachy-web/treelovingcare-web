import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { JobberRequestForm } from "@/components/sections/JobberRequestForm";
import { ReviewPicks } from "@/components/sections/ReviewPicks";
import { StickyCallBar } from "@/components/sections/StickyCallBar";
import { Container, Eyebrow, SectionHeading } from "@/components/ui/Primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRight, Check, Clock, MapPin, PhoneIcon, ServiceGlyph } from "@/components/ui/Icons";
import { serviceAreas, site } from "@/lib/site";
import {
  getTown,
  getTrack,
  landingPath,
  landingReviews,
  landingRoutes,
  landingSteps,
  landingTitle,
  landingTowns,
  landingTracks,
} from "@/lib/landing";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingRoutes;
}

export async function generateMetadata({
  params,
}: PageProps<"/[track]/[town]">): Promise<Metadata> {
  const { track: trackSlug, town: townSlug } = await params;
  const track = getTrack(trackSlug);
  const town = getTown(townSlug);
  if (!track || !town) return {};
  return {
    title: landingTitle(track, town),
    description: `${track.name} in ${town.city}, WI by an ISA Certified Arborist. ${track.promise} No-cost assessment, call ${site.phone}.`,
    alternates: { canonical: `${landingPath(track.slug, town.slug)}/` },
  };
}

export default async function LandingPage({ params }: PageProps<"/[track]/[town]">) {
  const { track: trackSlug, town: townSlug } = await params;
  const track = getTrack(trackSlug);
  const town = getTown(townSlug);
  if (!track || !town) notFound();

  const path = landingPath(track.slug, town.slug);
  const title = `${track.name} in ${town.city}, Wisconsin`;
  const reviews = landingReviews(track);
  const faqs = track.faqs(town);
  const otherTracks = landingTracks.filter((t) => t.slug !== track.slug);
  const nearby = town.nearby
    .map((slug) => landingTowns.find((t) => t.slug === slug))
    .filter((t): t is (typeof landingTowns)[number] => Boolean(t));
  const areaPage = serviceAreas.find((a) => a.slug === town.slug);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${track.name} in ${town.city}, WI`,
    serviceType: track.name,
    description: track.lead(town),
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: `${town.city}, WI` },
    url: `${site.url}${path}/`,
  };

  return (
    <>
      <JsonLd
        data={[
          serviceLd,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: track.hub.label, url: track.hub.href },
            { name: `${track.short} in ${town.city}`, url: path },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow={`${town.county} · ${track.short}`}
        title={title}
        intro={track.promise}
        image={track.image}
        imageAlt={`${track.name} in ${town.city}, WI`}
        crumbs={[{ label: track.hub.label, href: track.hub.href }, { label: town.city }]}
      />

      {/* lead: local copy + trust points + framed photo */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>
                  {track.short} for {town.city} homeowners
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-5 text-[clamp(1.15rem,1.7vw,1.4rem)] leading-relaxed text-bark text-pretty">
                  {track.lead(town)}
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <ul className="mt-8 grid gap-2.5 text-[0.95rem] font-medium text-forest sm:grid-cols-2">
                  {track.points.map((point) => (
                    <li key={point} className="inline-flex items-start gap-2">
                      <Check className="mt-1 size-4 shrink-0" strokeWidth={2.6} />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-leaf px-7 py-4 text-base font-semibold text-canopy shadow-[0_8px_24px_-8px_rgba(121,179,90,0.7)] transition-all duration-300 hover:bg-leaf-bright active:scale-[0.98]"
                  >
                    <PhoneIcon className="size-5" />
                    Call {site.phone}
                  </a>
                  <ButtonLink href="#request" variant="outline" size="lg" withArrow>
                    Request an Assessment
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
                <Image
                  src={track.inset}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute left-5 top-5 grid size-12 place-items-center rounded-2xl bg-paper/95 text-forest shadow-soft backdrop-blur-sm">
                  <ServiceGlyph name={track.icon} className="size-7" />
                </span>
                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-canopy/85 px-4 py-2 text-sm font-medium text-cream backdrop-blur-sm">
                  <MapPin className="size-4 text-leaf-bright" />
                  Serving {town.city}, {town.reach}
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* when to call + our stance */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col gap-12">
            <Reveal>
              <h2 className="font-display text-[clamp(1.5rem,2.8vw,2rem)] font-medium leading-tight text-canopy text-balance">
                {track.signals.heading(town)}
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {track.signals.items.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 rounded-xl bg-paper px-4 py-3.5">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-leaf text-canopy">
                      <Check className="size-4" strokeWidth={2.6} />
                    </span>
                    <span className="leading-relaxed text-bark">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-3xl border-l-4 border-forest bg-leaf/10 p-7 sm:p-9">
                <p className="eyebrow text-forest">{track.callout.heading}</p>
                <p className="mt-4 text-lg leading-relaxed text-bark text-pretty">{track.callout.body}</p>
              </div>
            </Reveal>
          </div>
        </Container>
        <div className="h-16 sm:h-24" />
      </section>

      <section className="relative h-[42vh] min-h-[280px] overflow-hidden">
        <Image src={track.band} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-canopy/55 via-canopy/10 to-canopy/25" />
      </section>

      {/* what to expect */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What to expect"
            title={`How ${track.short.toLowerCase()} works with us.`}
          />
          <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.08}>
            {landingSteps.map((step) => (
              <RevealItem key={step.step} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-bark/10 bg-cream p-7">
                  <span className="font-display text-sm font-semibold tracking-widest text-moss">
                    {step.step}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-semibold text-canopy">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <ReviewPicks reviews={reviews} title={`What neighbors say about our ${track.short.toLowerCase()}.`} />

      {/* request + direct line */}
      <section id="request" className="scroll-mt-24 bg-paper py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <Reveal>
              <JobberRequestForm />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl bg-canopy p-7 text-cream">
                  <h2 className="font-display text-xl font-semibold">Or call us directly</h2>
                  <ul className="mt-5 flex flex-col gap-5">
                    <li>
                      <a href={site.phoneHref} className="flex items-start gap-4 transition-opacity hover:opacity-80">
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf/15 text-leaf-bright">
                          <PhoneIcon className="size-5" />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold uppercase tracking-wider text-cream/50">
                            Call or text
                          </span>
                          <span className="font-display text-[1.05rem] font-medium text-cream">{site.phone}</span>
                          <span className="mt-0.5 block text-sm text-leaf-bright">Emergency? We answer 24/7.</span>
                        </span>
                      </a>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf/15 text-leaf-bright">
                        <Clock className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-cream/50">Hours</span>
                        <span className="font-display text-[1.05rem] font-medium text-cream">{site.hours}</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf/15 text-leaf-bright">
                        <MapPin className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-cream/50">
                          Serving {town.city}
                        </span>
                        <span className="font-display text-[1.05rem] font-medium text-cream">
                          From {site.address.full}
                        </span>
                        <span className="mt-0.5 block text-sm text-cream/70">
                          {town.city} is {town.reach}.
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-bark/10 bg-cream p-7">
                  <p className="eyebrow text-moss">Why {town.city} calls us</p>
                  <ul className="mt-4 flex flex-col gap-3 text-sm text-bark">
                    {[
                      "Every job led by an ISA Certified Arborist",
                      "Fully insured, with proof provided gladly",
                      "Honest quotes and a complete cleanup, every time",
                      "Removal is never the default recommendation",
                    ].map((r) => (
                      <li key={r} className="flex gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-moss" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* local links: other services here, this service nearby */}
      <section className="bg-cream py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-semibold text-canopy">
                More tree care in {town.city}
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {otherTracks.map((t) => (
                  <Link
                    key={t.slug}
                    href={landingPath(t.slug, town.slug)}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-bark/10 bg-paper px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-moss/40 hover:shadow-soft"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-cream text-forest">
                        <ServiceGlyph name={t.icon} className="size-6" />
                      </span>
                      <span className="font-display font-semibold text-canopy">{t.short}</span>
                    </span>
                    <ArrowRight className="size-4 text-moss transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
              <p className="mt-5 text-sm text-stone">
                <Link href={track.hub.href} className="font-medium text-forest underline-offset-4 hover:underline">
                  Read more about our {track.hub.label.toLowerCase()}
                </Link>
                {areaPage && (
                  <>
                    {" "}
                    or{" "}
                    <Link
                      href={`/service-areas/${areaPage.slug}`}
                      className="font-medium text-forest underline-offset-4 hover:underline"
                    >
                      everything we do in {town.city}
                    </Link>
                  </>
                )}
                .
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-canopy">
                {track.short} near {town.city}
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={landingPath(track.slug, n.slug)}
                    className="inline-flex items-center gap-2 rounded-full border border-bark/15 bg-paper px-5 py-2.5 text-sm font-medium text-bark transition-colors hover:border-moss/50 hover:text-forest"
                  >
                    <MapPin className="size-4 text-moss" />
                    {n.city}, WI
                  </Link>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-stone">
                Based in Viroqua, serving {town.county} and the Driftless Region of western Wisconsin.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Faq
        items={faqs}
        eyebrow="Good questions"
        title={`${track.short} questions from ${town.city}.`}
        intro="Straight answers before you call. If yours isn't here, ask, we like questions."
      />

      <CtaBand title={`Tree questions in ${town.city}? Let's take a look.`} />

      <div className="h-20 md:hidden" aria-hidden />
      <StickyCallBar />
    </>
  );
}

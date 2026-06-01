import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, Eyebrow, SectionHeading, Seal } from "@/components/ui/Primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ServiceGlyph, Quote } from "@/components/ui/Icons";
import { credentials, site } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Tree Loving Care is a family-owned, veteran-operated tree service led by an ISA Certified Arborist, bringing thoughtful, stewardship-led care to the Driftless Region of western Wisconsin.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "assessment" as const,
    title: "Certified expertise",
    body: "Our work is led by an ISA Certified Arborist. Your trees are evaluated by someone trained in tree biology, structure, and safety, not guessed at.",
  },
  {
    icon: "emergency" as const,
    title: "Veteran discipline",
    body: "We're veteran-operated, and it shows. We arrive when we say we will, communicate clearly, and hold ourselves accountable for every detail.",
  },
  {
    icon: "cabling" as const,
    title: "Honest counsel",
    body: "We'll tell you when a tree can be saved instead of removed, even when removal would pay us more. Your trust is worth more than one invoice.",
  },
  {
    icon: "pruning" as const,
    title: "Genuine care",
    body: "It's in our name. We treat your trees, your property, and your time the way we'd want our own family's looked after.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />

      <PageHero
        eyebrow="About Tree Loving Care"
        title="The people you'd want looking after your trees."
        intro="Family-owned, veteran-operated, and led by a certified arborist, built on the belief that strong trees are shaped by the stewardship behind them."
        image="/photos/about/team-four-crew-summer.jpg"
        imageAlt="The Tree Loving Care crew on a job site"
        crumbs={[{ label: "About" }]}
      />

      {/* story */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
                  <Image
                    src="/photos/about/crewman-chainsaw-portrait.jpg"
                    alt="A Tree Loving Care arborist"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl bg-canopy px-5 py-4 text-cream shadow-lift sm:-right-6">
                  <Seal className="size-12 text-leaf-bright" />
                  <div className="leading-tight">
                    <p className="font-display text-base font-semibold">
                      ISA Certified
                    </p>
                    <p className="text-sm text-cream/60">
                      Arborist {site.owner.credential.split("· ")[1]}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <Eyebrow>Our story</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] text-canopy text-balance">
                  Built on skill, run on integrity.
                </h2>
              </Reveal>
              <div className="mt-5 flex flex-col gap-4 text-lg leading-relaxed text-stone text-pretty">
                <Reveal delay={0.12}>
                  <p>
                    Tree Loving Care began with a frustration our owner, Emlyn
                    Jones, kept running into across the industry: too many tree
                    companies were quick with a chainsaw and slow with an
                    honest answer. Homeowners were being talked at, oversold,
                    and left with a mess.
                  </p>
                </Reveal>
                <Reveal delay={0.16}>
                  <p>
                    So we built the company we'd want to hire, one that pairs
                    real arborist credentials with the discipline of a
                    veteran-operated business and the warmth of a family that
                    actually lives in the community it serves.
                  </p>
                </Reveal>
                <Reveal delay={0.2}>
                  <p>
                    Today, from our shop in Viroqua, we care for trees across
                    the Driftless Region, from routine pruning and planting to
                    the kind of storm calls that come in at midnight. Every job,
                    large or small, gets the same certified eye and the same
                    spotless cleanup.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* philosophy / motto */}
      <section className="relative overflow-hidden bg-forest py-20 text-cream sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto size-12 text-leaf-bright" />
            <p className="font-display mt-6 text-[clamp(1.7rem,3.6vw,2.7rem)] font-medium leading-[1.2] text-balance">
              “{site.motto}”
            </p>
            <p className="mt-6 text-cream/65">
              It's the idea our whole company is built on. Healthy trees need
              the right support, and so do the people who care for them.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* values */}
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="flex flex-col items-center text-center">
            <SectionHeading
              align="center"
              eyebrow="What sets us apart"
              title="Four things you can count on."
            />
          </div>
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <RevealItem key={v.title} className="h-full">
                <div className="flex h-full gap-5 rounded-3xl border border-bark/10 bg-paper p-7">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-forest text-cream">
                    <ServiceGlyph name={v.icon} className="size-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-canopy">
                      {v.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-stone">{v.body}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* credentials */}
      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-bark/10 bg-bark/10 lg:grid-cols-4">
            {credentials.map((c) => (
              <div key={c.label} className="bg-paper p-6 text-center">
                <dt className="font-display text-lg font-semibold text-canopy">
                  {c.label}
                </dt>
                <dd className="mt-1 text-sm text-stone">{c.detail}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CtaBand title="Let's take care of your trees together." />
    </>
  );
}

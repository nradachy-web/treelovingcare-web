import Image from "next/image";
import { Container, Eyebrow, Seal } from "@/components/ui/Primitives";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceGlyph } from "@/components/ui/Icons";
import { site } from "@/lib/site";
import { img } from "@/lib/images";

const authority = [
  {
    icon: "assessment" as const,
    title: "ISA Certified Arborist",
    body: "Your trees are evaluated by a professional trained in tree biology, structure, and safety.",
  },
  {
    icon: "emergency" as const,
    title: "Veteran-Operated",
    body: "Discipline, accountability, and showing up when we say we will, built into how we work.",
  },
  {
    icon: "cabling" as const,
    title: "Honest Recommendations",
    body: "We’ll tell you when a tree can be saved, even when removing it would pay us more.",
  },
];

export function GuideSection() {
  return (
    <section className="relative overflow-hidden bg-canopy py-20 text-cream sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* image */}
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-lift">
                <Image
                  src={img.guide}
                  alt={img.guideAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-paper px-5 py-4 text-canopy shadow-lift sm:-left-6">
                <Seal className="size-12 text-forest" />
                <div className="leading-tight">
                  <p className="font-display text-base font-semibold">
                    ISA Certified Arborist
                  </p>
                  <p className="text-sm text-stone">
                    Credential {site.owner.credential.split("· ")[1]}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* content */}
          <div>
            <Reveal>
              <Eyebrow tone="cream">Meet your guide</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] text-cream text-balance">
                Certified expertise, delivered with genuine care.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-lg leading-relaxed text-cream/75 text-pretty">
                Tree Loving Care was built on a simple belief: the people
                handling something as serious as the trees around your home
                should be both deeply skilled and genuinely kind. We bring the
                discipline of a veteran-operated company and the knowledge of a
                certified arborist to every job, large or small.
              </p>
            </Reveal>

            <div className="mt-9 flex flex-col gap-3">
              {authority.map((a, i) => (
                <Reveal key={a.title} delay={0.2 + i * 0.07}>
                  <div className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-cream/[0.04] p-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf/15 text-leaf-bright">
                      <ServiceGlyph name={a.icon} className="size-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-cream">
                        {a.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-cream/65">
                        {a.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.44}>
              <div className="mt-8">
                <ButtonLink href="/about" variant="primary" withArrow>
                  More about Tree Loving Care
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

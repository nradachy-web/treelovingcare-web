import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { img } from "@/lib/images";

const worries = [
  "A storm-damaged or leaning tree hanging over your home, garage, or driveway.",
  "Overgrown limbs scraping the roof, crowding power lines, or blocking the light.",
  "A stubborn stump, or a tree that may be dead, and no idea what it should cost to fix.",
  "Not knowing which “tree guy” to trust with your property and your money.",
];

export function ProblemSection() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
                <Image
                  src={img.problem}
                  alt={img.problemAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 max-w-[15rem] rounded-2xl bg-canopy p-5 text-cream shadow-lift sm:-right-6">
                <p className="font-display text-xl font-semibold text-leaf-bright">
                  No-cost first visit
                </p>
                <p className="mt-1 text-sm text-cream/75">
                  Most assessments are on us, and there’s never any pressure.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>We understand</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.08] text-canopy text-balance">
                A tree you love can quietly become a tree you worry about.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-lg leading-relaxed text-stone text-pretty">
                It starts small, a dead limb over the walkway, roots lifting
                the sidewalk, a lean that wasn’t there last spring. Then a storm
                rolls through, and you realize you never had a clear answer
                about that tree. You shouldn’t have to wonder whether the trees
                around your home are protecting it or threatening it.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 flex flex-col gap-3">
                {worries.map((w) => (
                  <li
                    key={w}
                    className="flex items-start gap-3 rounded-xl bg-cream px-4 py-3.5 text-[0.97rem] leading-relaxed text-bark"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clay" aria-hidden />
                    {w}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-7 font-display text-xl italic leading-snug text-forest">
                You deserve a tree service that treats your property, and your
                trust, with genuine care.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

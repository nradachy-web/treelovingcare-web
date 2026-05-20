import { Container, SectionHeading } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "@/components/ui/Icons";

const failure = [
  "A small, fixable problem grows into an expensive emergency.",
  "Storm damage to your roof, your car, or a neighbor’s property.",
  "A beautiful, decades-old shade tree lost to preventable decay.",
  "Money spent twice, once on the cheapest crew, again to fix it.",
];

const success = [
  "Hazards spotted and handled long before a storm finds them.",
  "Healthier trees that add shade, beauty, and value to your home.",
  "A clean, safe yard you’re genuinely proud to walk out into.",
  "Real peace of mind, and one trusted number to call.",
];

export function StakesSection() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="Why it matters"
            title="The trees won’t wait. The good news is, you don’t have to worry."
            intro="Tree care is one of those things that only gets harder, and costlier, the longer it’s ignored. Here’s the difference the right crew makes."
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-bark/10 bg-paper p-8">
              <p className="eyebrow text-clay">If tree care waits</p>
              <ul className="mt-6 flex flex-col gap-4">
                {failure.map((f) => (
                  <li key={f} className="flex items-start gap-3.5 text-bark">
                    <span className="mt-1.5 grid size-5 shrink-0 place-items-center rounded-full border border-clay/40">
                      <span className="size-1.5 rounded-full bg-clay" />
                    </span>
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl bg-canopy p-8 text-cream shadow-lift">
              <p className="eyebrow text-leaf-bright">
                With Tree Loving Care
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {success.map((s) => (
                  <li key={s} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf text-canopy">
                      <Check className="size-3.5" strokeWidth={2.6} />
                    </span>
                    <span className="leading-relaxed text-cream/85">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

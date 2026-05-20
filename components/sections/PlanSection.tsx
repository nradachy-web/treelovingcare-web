import { Container, SectionHeading } from "@/components/ui/Primitives";
import { ButtonLink } from "@/components/ui/Button";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { plan } from "@/lib/site";

export function PlanSection() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="Caring for your trees is a three-step conversation."
            intro="No drawn-out process, no hard sell. Just a clear path from “I’m worried about that tree” to “it’s handled.”"
          />
        </div>

        <RevealGroup className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div
            className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-moss/35 to-transparent md:block"
            aria-hidden
          />
          {plan.map((step) => (
            <RevealItem key={step.step}>
              <div className="relative flex h-full flex-col rounded-3xl border border-bark/10 bg-cream p-7">
                <span className="font-display grid size-[3.25rem] place-items-center rounded-2xl bg-forest text-xl font-semibold text-cream shadow-[0_8px_20px_-8px_rgba(43,86,48,0.8)]">
                  {step.step}
                </span>
                <h3 className="font-display mt-6 text-xl font-semibold text-canopy">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.97rem] leading-relaxed text-stone">
                  {step.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <ButtonLink href="/contact" variant="solid" size="lg" withArrow>
            Start with a free estimate
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}

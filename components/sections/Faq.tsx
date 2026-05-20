import { Container, SectionHeading } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Good questions"
            title="Answers before you even ask."
            intro="A few things homeowners want to know before they call. If yours isn't here, just reach out, we like questions."
          />

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <details className="group rounded-2xl border border-bark/10 bg-paper px-5 py-1 open:shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg font-semibold text-canopy [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <span
                      className="relative grid size-7 shrink-0 place-items-center rounded-full bg-cream text-forest transition-transform duration-300 group-open:rotate-45"
                      aria-hidden
                    >
                      <span className="absolute h-0.5 w-3.5 rounded bg-current" />
                      <span className="absolute h-3.5 w-0.5 rounded bg-current" />
                    </span>
                  </summary>
                  <p className="pb-5 pr-10 leading-relaxed text-stone">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container, SectionHeading } from "@/components/ui/Primitives";
import { Quote, Star } from "@/components/ui/Icons";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream sm:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            tone="light"
            eyebrow="Kind words"
            title="Trusted by neighbors across western Wisconsin."
          />
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.quote} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl bg-cream/[0.06] p-7 ring-1 ring-cream/10">
                <Quote className="size-9 text-leaf-bright" />
                <blockquote className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-cream/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-cream/10 pt-5">
                  <div className="mb-2 flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="size-4 text-leaf-bright" />
                    ))}
                  </div>
                  <p className="font-display font-semibold text-cream">
                    {t.name}
                  </p>
                  <p className="text-sm text-cream/55">{t.location}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

import { Container, SectionHeading } from "@/components/ui/Primitives";
import { Quote, Star } from "@/components/ui/Icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { googleRating, type testimonials } from "@/lib/site";

type Review = (typeof testimonials)[number];

/** A hand-picked subset of the real Google reviews, chosen per landing page. */
export function ReviewPicks({
  reviews,
  title,
}: {
  reviews: Review[];
  title: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream sm:py-24">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionHeading align="center" tone="light" eyebrow="From Google reviews" title={title} />
          <Reveal delay={0.1}>
            <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-cream/[0.07] px-5 py-2.5 ring-1 ring-cream/15">
              <span className="font-display text-xl font-semibold text-cream">
                {googleRating.score}
              </span>
              <span className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 text-leaf-bright" />
                ))}
              </span>
              <span className="text-sm text-cream/70">{googleRating.count} Google reviews</span>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((t) => (
            <RevealItem key={t.name} className="h-full">
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
                  <p className="font-display font-semibold text-cream">{t.name}</p>
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

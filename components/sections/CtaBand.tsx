import { Container } from "@/components/ui/Primitives";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ready to stop worrying about that tree?",
  text = "Tell us what's going on. A certified arborist will take a look and give you an honest, no-pressure estimate, free.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2rem] bg-forest px-7 py-12 text-cream sm:px-14 sm:py-16">
            <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
              <div>
                <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-medium leading-[1.1] text-balance">
                  {title}
                </h2>
                <p className="mt-3 max-w-md text-cream/75">{text}</p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <ButtonLink href="/contact" variant="primary" size="lg" withArrow>
                  Request a Free Estimate
                </ButtonLink>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-4 font-semibold text-cream transition-colors hover:bg-cream/10"
                >
                  <PhoneIcon className="size-5" />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import { JobberRequestForm } from "@/components/sections/JobberRequestForm";
import { Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Check, Clock, MapPin, PhoneIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";

/**
 * In-page request form + direct line for the service pages that Google Ads
 * sends traffic to. Anchored at #request so the hero buttons and the
 * StickyCallBar can jump straight to it.
 */
export function RequestSection() {
  return (
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
                        Based in Viroqua
                      </span>
                      <span className="font-display text-[1.05rem] font-medium text-cream">
                        {site.address.full}
                      </span>
                      <span className="mt-0.5 block text-sm text-cream/70">Serving {site.regionShort}.</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-bark/10 bg-cream p-7">
                <p className="eyebrow text-moss">Why homeowners call us</p>
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
  );
}

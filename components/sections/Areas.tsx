import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Primitives";
import { MapPin, ArrowRight } from "@/components/ui/Icons";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { serviceAreas } from "@/lib/site";

export function AreasGrid() {
  return (
    <RevealGroup
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      stagger={0.05}
    >
      {serviceAreas.map((area) => (
        <RevealItem key={area.slug}>
          <Link
            href={`/service-areas/${area.slug}`}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-bark/10 bg-paper px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-moss/40 hover:shadow-soft"
          >
            <span className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-cream text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                <MapPin className="size-5" />
              </span>
              <span>
                <span className="font-display block font-semibold text-canopy">
                  {area.city}, WI
                </span>
                <span className="text-sm text-stone">{area.county}</span>
              </span>
            </span>
            <ArrowRight className="size-4 text-moss transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function AreasSection() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="Where we work"
            title="Local, certified tree care close to home."
            intro="We’re based in Viroqua and proud to serve homeowners throughout the La Crosse region. If you don’t see your town, just ask, chances are we’re already nearby."
          />
        </div>
        <div className="mt-12">
          <AreasGrid />
        </div>
      </Container>
    </section>
  );
}

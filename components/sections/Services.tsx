import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Primitives";
import { ServiceGlyph, ArrowRight } from "@/components/ui/Icons";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { services, type Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-bark/10 bg-paper shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={`/photos/services/${service.image}`}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canopy/55 to-transparent" />
        <span className="absolute left-4 top-4 grid size-12 place-items-center rounded-2xl bg-paper/95 text-forest shadow-soft backdrop-blur-sm">
          <ServiceGlyph name={service.icon} className="size-7" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-canopy">
          {service.name}
        </h3>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-stone">
          {service.promise}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
          Learn more
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ServicesGrid() {
  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <RevealItem key={service.slug} className="h-full">
          <ServiceCard service={service} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Complete tree care, from one trusted crew."
            intro="Whatever your trees need, it’s handled by certified professionals who do the job right and clean up like they were never there."
          />
        </div>
        <ServicesGrid />
      </Container>
    </section>
  );
}

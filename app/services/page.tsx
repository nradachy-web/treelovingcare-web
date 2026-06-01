import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/Services";
import { PlanSection } from "@/components/sections/PlanSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, SectionHeading } from "@/components/ui/Primitives";
import { mainServices, specialtyServices } from "@/lib/site";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tree Services",
  description:
    "Thoughtful, arborist-led tree care: pruning, removal, planting, support systems, storm and emergency work, and stump grinding, plus tree risk assessments, construction tree protection, and consultations across the Driftless Region of western Wisconsin.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Our services"
        title="Thoughtful tree care, from a certified arborist."
        intro="Whether your tree needs pruning, support, removal, planting, or protection during construction, every job starts the same way, with a careful look at the tree, the site, and your goals."
        image="/photos/services/pruning-1.jpg"
        imageAlt="An arborist pruning a mature shade tree"
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="mb-12 flex flex-col items-center text-center">
            <SectionHeading
              align="center"
              eyebrow="Main services"
              title="The everyday care most trees need."
              intro="Choose a service to see exactly what it involves, when homeowners call us for it, and the result you can expect."
            />
          </div>
          <ServicesGrid items={mainServices} />
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="mb-12 flex flex-col items-center text-center">
            <SectionHeading
              align="center"
              eyebrow="Specialty & preservation services"
              title="When the decision matters more than the cut."
              intro="For higher-stakes calls, preserving a valuable tree, protecting trees during construction, or simply deciding what to do, these services start with expertise, not equipment."
            />
          </div>
          <ServicesGrid items={specialtyServices} />
        </Container>
      </section>

      <PlanSection />
      <CtaBand />
    </>
  );
}

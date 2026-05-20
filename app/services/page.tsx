import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/Services";
import { PlanSection } from "@/components/sections/PlanSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, SectionHeading } from "@/components/ui/Primitives";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tree Services",
  description:
    "Tree removal, trimming and pruning, stump grinding, cabling and bracing, 24/7 emergency service, and certified tree risk assessments across the La Crosse and Viroqua, WI area.",
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
        title="Complete tree care, handled with skill and care."
        intro="Every job, from a single overgrown limb to a storm emergency, is led by an ISA Certified Arborist and finished with a spotless cleanup."
        image="/photos/services/pruning-1.jpg"
        imageAlt="An arborist pruning a mature shade tree"
        crumbs={[{ label: "Services" }]}
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="mb-12 flex flex-col items-center text-center">
            <SectionHeading
              align="center"
              eyebrow="What we do"
              title="One trusted crew for every tree on your property."
              intro="Choose a service to see exactly what's included, what it solves, and the result you can expect."
            />
          </div>
          <ServicesGrid />
        </Container>
      </section>

      <PlanSection />
      <CtaBand />
    </>
  );
}

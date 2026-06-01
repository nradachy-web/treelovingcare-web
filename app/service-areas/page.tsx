import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AreasGrid } from "@/components/sections/Areas";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, SectionHeading } from "@/components/ui/Primitives";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Tree Loving Care provides thoughtful, certified tree care across the Driftless Region of western Wisconsin: Viroqua, La Crosse, Onalaska, West Salem, Holmen, Westby, Sparta, La Farge, Stoddard, Gays Mills and surrounding communities.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
        ])}
      />
      <PageHero
        eyebrow="Where we work"
        title="Certified tree care, close to home."
        intro={`Based in Viroqua and proud to serve homeowners across the Driftless Region of western Wisconsin, ${serviceAreas.length} communities and the countryside in between.`}
        image="/photos/gallery/gallery-23.jpg"
        imageAlt="The snow-covered western Wisconsin countryside"
        crumbs={[{ label: "Service Areas" }]}
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="mb-12 flex flex-col items-center text-center">
            <SectionHeading
              align="center"
              eyebrow="Communities we serve"
              title="Local crews who know your trees and your weather."
              intro="We live and work here. That means faster response, a real understanding of the trees and storms in our corner of Wisconsin, and a crew that treats your yard like a neighbor's."
            />
          </div>
          <AreasGrid />
        </Container>
      </section>

      <CtaBand title="Serving your town, and ready when you are." />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { GalleryClient } from "@/components/sections/GalleryClient";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container, SectionHeading } from "@/components/ui/Primitives";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "See real tree removals, prunings, climbs, and storm work by Tree Loving Care across the La Crosse and Viroqua, Wisconsin area.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ])}
      />
      <PageHero
        eyebrow="Our work"
        title="A look at the work, and the trees we love."
        intro="Real climbs, removals, and storm calls across western Wisconsin. Every photo is a job done by our own crew."
        image="/photos/gallery/gallery-19.jpg"
        imageAlt="An arborist working high in the canopy"
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="mb-12">
            <SectionHeading
              eyebrow="Photo gallery"
              title="Skilled, careful, and a little bit fearless."
              intro="Tap any photo to view it full size."
            />
          </div>
          <GalleryClient />
        </Container>
      </section>

      <CtaBand title="Picture your own yard, handled." />
    </>
  );
}

import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Primitives";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { img } from "@/lib/images";

const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "",
  "sm:col-span-2",
  "",
];

export function GalleryPreview() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our work"
            title="Real trees, real Wisconsin homes."
            intro="A look at recent removals, prunings, and storm work across the La Crosse and Viroqua area."
          />
          <Reveal delay={0.1}>
            <ButtonLink href="/gallery" variant="outline" withArrow>
              View the full gallery
            </ButtonLink>
          </Reveal>
        </div>

        <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-4">
          {img.galleryPreview.map((src, i) => (
            <Reveal
              key={src + i}
              delay={i * 0.06}
              className={`relative overflow-hidden rounded-2xl ${spans[i] ?? ""}`}
            >
              <Image
                src={src}
                alt={`Tree Loving Care project ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

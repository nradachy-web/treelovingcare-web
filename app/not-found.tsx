import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Primitives";
import { nav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-canopy">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/photos/hero/hero-climber-treetop-snow.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-canopy/80" />
      </div>
      <Container>
        <div className="max-w-xl py-20 text-cream">
          <p className="eyebrow text-leaf-bright">Lost a branch</p>
          <h1 className="font-display mt-4 text-[clamp(2.6rem,7vw,5rem)] font-medium leading-[1.02]">
            This page went out on a limb.
          </h1>
          <p className="mt-4 text-lg text-cream/75">
            We couldn't find what you were looking for, but our roots run deep.
            Let's get you back to solid ground.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/" variant="primary" size="lg" withArrow>
              Back to home
            </ButtonLink>
            {nav.slice(0, 3).map((item) => (
              <ButtonLink key={item.href} href={item.href} variant="ghost">
                <span className="text-cream">{item.label}</span>
              </ButtonLink>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

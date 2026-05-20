import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { GuideSection } from "@/components/sections/GuideSection";
import { ServicesSection } from "@/components/sections/Services";
import { PlanSection } from "@/components/sections/PlanSection";
import { StakesSection } from "@/components/sections/StakesSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { AreasSection } from "@/components/sections/Areas";
import { JsonLd, localBusinessSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Hero />
      <ProblemSection />
      <GuideSection />
      <ServicesSection />
      <PlanSection />
      <StakesSection />
      <GalleryPreview />
      <Testimonials />
      <AreasSection />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { EstimateForm } from "@/components/sections/EstimateForm";
import { Faq } from "@/components/sections/Faq";
import { Container } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneIcon, Mail, MapPin, Clock, ShieldCheck } from "@/components/ui/Icons";
import { faqs, serviceAreas, site } from "@/lib/site";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact & Request an Assessment",
  description:
    "Request an assessment from Tree Loving Care, or call (608) 615-7740. Thoughtful, arborist-led tree care across the Driftless Region of western Wisconsin, emergency service 24/7.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: PhoneIcon,
    label: "Call or text",
    value: site.phone,
    href: site.phoneHref,
    note: "Emergency? We answer 24/7.",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: site.address.full,
  },
  {
    icon: Clock,
    label: "Hours",
    value: site.hours,
  },
];

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.address.full,
  )}&output=embed`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Get in touch"
        title="Let's take a look at your trees."
        intro="Send us the details below or call directly. Most assessments are no-cost, and there's never any pressure to book."
        image="/photos/about/company-truck-jobsite.jpg"
        imageAlt="A Tree Loving Care truck on a job site"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <Reveal>
              <EstimateForm />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl bg-canopy p-7 text-cream">
                  <h2 className="font-display text-xl font-semibold">
                    Reach us directly
                  </h2>
                  <ul className="mt-5 flex flex-col gap-5">
                    {details.map((d) => {
                      const Icon = d.icon;
                      const content = (
                        <>
                          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf/15 text-leaf-bright">
                            <Icon className="size-5" />
                          </span>
                          <span>
                            <span className="block text-xs font-semibold uppercase tracking-wider text-cream/50">
                              {d.label}
                            </span>
                            <span className="font-display text-[1.05rem] font-medium text-cream">
                              {d.value}
                            </span>
                            {d.note && (
                              <span className="mt-0.5 block text-sm text-leaf-bright">
                                {d.note}
                              </span>
                            )}
                          </span>
                        </>
                      );
                      return (
                        <li key={d.label}>
                          {d.href ? (
                            <a
                              href={d.href}
                              className="flex items-start gap-4 transition-opacity hover:opacity-80"
                            >
                              {content}
                            </a>
                          ) : (
                            <div className="flex items-start gap-4">
                              {content}
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="rounded-3xl border border-bark/10 bg-cream p-7">
                  <ShieldCheck className="size-9 text-forest" />
                  <h3 className="font-display mt-3 text-lg font-semibold text-canopy">
                    What to expect
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    We'll get back to you to schedule a visit. A certified
                    arborist looks at the trees in question, listens to your
                    goals, and gives you clear recommendations, and, when
                    appropriate, a quote or proposal for the next step.
                  </p>
                  <p className="mt-4 text-sm text-stone">
                    <span className="font-semibold text-canopy">
                      Proudly serving:
                    </span>{" "}
                    {serviceAreas.map((a) => a.city).join(", ")} and nearby.
                  </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-bark/10">
                  <iframe
                    src={mapSrc}
                    title={`Map of ${site.name} in ${site.address.city}, WI`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Faq />
    </>
  );
}

/**
 * Service x town landing pages (Google Ads destinations + local SEO).
 * Route: /{track}/{town}/ (app/[track]/[town]/page.tsx).
 *
 * Each page = track copy (unique per service) + town copy (unique per town)
 * + a lead paragraph composed from both, so no two pages read the same.
 * Only towns inside the current Google Ads geo targets belong here. Sparta
 * and Holmen keep their /service-areas pages but are not targeted (Sept 2026).
 * Every fact must already be true elsewhere on the site: no prices, no
 * response-time promises beyond 24/7 storm service, no invented history.
 */
import { brand, faqs as siteFaqs, plan, site, testimonials, type ServiceIcon } from "@/lib/site";

export type LandingTown = {
  slug: string;
  city: string;
  county: string;
  /** what the place is, one clause, lowercase, follows the town name */
  setting: string;
  /** the trees and lots crews see there, noun phrase */
  trees: string;
  /** property and access character, noun phrase */
  access: string;
  /** distance from the Viroqua shop, qualitative, lowercase clause */
  reach: string;
  /** slugs of nearby landing towns, for cross-links */
  nearby: string[];
};

export const landingTowns: LandingTown[] = [
  {
    slug: "la-crosse",
    city: "La Crosse",
    county: "La Crosse County",
    setting: "a river city framed by bluffs",
    trees:
      "mature oaks, maples, and elms in established neighborhoods, plus bluff-side lots that drop away fast",
    access: "tight city lots, alleys, overhead service lines, and neighbors close on both sides",
    reach: "about a half hour from our Viroqua shop",
    nearby: ["onalaska", "west-salem", "stoddard", "coon-valley"],
  },
  {
    slug: "onalaska",
    city: "Onalaska",
    county: "La Crosse County",
    setting: "lakeside neighborhoods above Lake Onalaska",
    trees:
      "wooded subdivisions with big shade trees planted decades ago, and shoreline cottonwoods and willows",
    access: "sloped lots, decks and docks to protect, and driveways that don't fit a big truck",
    reach: "up the river from our shop, about a half hour",
    nearby: ["la-crosse", "west-salem", "coon-valley"],
  },
  {
    slug: "west-salem",
    city: "West Salem",
    county: "La Crosse County",
    setting: "a village surrounded by rural acreage",
    trees: "village-street maples and spruce, farm windbreaks, and fence-line oaks",
    access: "small yards in town and open country lots with long driveways",
    reach: "about a half hour from our Viroqua shop",
    nearby: ["la-crosse", "onalaska", "coon-valley"],
  },
  {
    slug: "viroqua",
    city: "Viroqua",
    county: "Vernon County",
    setting: "our home base and the Vernon County seat",
    trees: "old shade trees along residential streets, farmstead windbreaks, and woodlots on the ridges",
    access: "everything from small in-town lots to farms and hobby acreage",
    reach: "we're based right here at 102 Western Ave",
    nearby: ["westby", "la-farge", "coon-valley", "de-soto"],
  },
  {
    slug: "westby",
    city: "Westby",
    county: "Vernon County",
    setting: "a ridge-top town with deep Norwegian roots",
    trees: "mature street trees, church and school grounds, and farm shelterbelts on the ridge",
    access: "open, windy ridge sites where storm damage shows up first",
    reach: "just a few minutes up the road from our shop",
    nearby: ["viroqua", "coon-valley", "stoddard"],
  },
  {
    slug: "coon-valley",
    city: "Coon Valley",
    county: "Vernon County",
    setting: "a coulee village along Coon Creek",
    trees: "steep wooded hillsides, creek-bottom cottonwoods and box elders, and yards that back onto the woods",
    access: "narrow valley lots and slopes where equipment placement takes planning",
    reach: "a short drive from Viroqua",
    nearby: ["westby", "viroqua", "west-salem", "stoddard"],
  },
  {
    slug: "la-farge",
    city: "La Farge",
    county: "Vernon County",
    setting: "the gateway to the Kickapoo Valley Reserve",
    trees: "heavily wooded properties, river-bottom silver maples, and big oaks on the hillsides",
    access: "rural lots, long lanes, and trees that grew up close to older homes and outbuildings",
    reach: "a short drive east of Viroqua",
    nearby: ["viroqua", "gays-mills"],
  },
  {
    slug: "stoddard",
    city: "Stoddard",
    county: "Vernon County",
    setting: "a riverside village on the Mississippi",
    trees: "river-bluff oaks and hickories above town, and cottonwoods and willows near the water",
    access: "steep lots against the bluff, with the river on one side and the highway on the other",
    reach: "a short drive west of Viroqua",
    nearby: ["la-crosse", "coon-valley", "de-soto"],
  },
  {
    slug: "de-soto",
    city: "De Soto",
    county: "Vernon County",
    setting: "a Mississippi River village at the edge of Vernon County",
    trees: "bluff-side hardwoods and river-bottom trees that lean toward the water",
    access: "hillside homes with limited turnaround room and trees standing over roofs",
    reach: "a short drive from Viroqua",
    nearby: ["stoddard", "viroqua", "la-crosse"],
  },
  {
    slug: "gays-mills",
    city: "Gays Mills",
    county: "Crawford County",
    setting: "apple orchard country on the Kickapoo River",
    trees: "orchard-edge trees, river-bottom hardwoods, and shade trees around older homes",
    access: "hillside and floodplain lots, orchard rows, and rural driveways",
    reach: "a short drive south of Viroqua",
    nearby: ["la-farge", "viroqua"],
  },
];

export type LandingFaq = { q: string; a: string };

export type LandingTrack = {
  slug: string;
  /** H1: "{name} in {City}, Wisconsin" */
  name: string;
  short: string;
  /** existing service page this track feeds, used for the breadcrumb + hub link */
  hub: { href: string; label: string };
  icon: ServiceIcon;
  image: string;
  imageAlt: string;
  /** framed photo beside the lead copy */
  inset: string;
  /** full-width photo band mid-page */
  band: string;
  /** hero subtitle */
  promise: string;
  /** four short trust points under the lead copy */
  points: string[];
  lead: (t: LandingTown) => string;
  signals: { heading: (t: LandingTown) => string; items: string[] };
  callout: { heading: string; body: string };
  /** reviewer names from site testimonials, most relevant first */
  reviews: string[];
  faqs: (t: LandingTown) => LandingFaq[];
};

const RATING = `5.0 stars on Google, ${170} reviews`;
const siteFaq = (q: string) => siteFaqs.find((f) => f.q === q)!;

export const landingTracks: LandingTrack[] = [
  {
    slug: "tree-removal",
    name: "Tree Removal",
    short: "Tree Removal",
    hub: { href: "/services/tree-removal", label: "Tree Removal" },
    icon: "removal",
    image: "/photos/services/removal-2.jpg",
    imageAlt: "A Tree Loving Care climber dismantling a large tree in sections above a home",
    inset: "/photos/services/removal-1.jpg",
    band: "/photos/gallery/gallery-31.jpg",
    promise: "Safe, careful tree removal, with every option explained first.",
    points: ["ISA Certified Arborist on every job", "Fully insured", "No-cost first look", RATING],
    lead: (t) =>
      `Tree removal in ${t.city} means working around ${t.trees}. Expect ${t.access}. We plan the rigging and the drop zone before anyone climbs, take the tree down in sections when the property calls for it, and leave the site clean. If the tree can reasonably be saved, we'll say so first. If it needs to come down, we'll tell you why.`,
    signals: {
      heading: (t) => `When a tree in ${t.city} should come down`,
      items: [
        "It's dead, dying, or structurally compromised",
        "It presents a risk to your home, driveway, or people that you can't accept",
        "It's in the wrong place and has outgrown the space",
        "Storm damage left it leaning or split",
        "It's damaging a foundation, roof, or other trees",
        "The cost or risk of preserving it no longer makes sense",
      ],
    },
    callout: {
      heading: "Removal is never our default",
      body: "We remove trees when needed, but if a valuable tree can reasonably be preserved and made safer, we'll help you understand that option first. If removal is the best choice, we'll tell you clearly and explain why.",
    },
    reviews: ["Bernice Baker", "Joe and Carol Persons", "Vicki Mathes"],
    faqs: (t) => [
      {
        q: `How much does tree removal cost in ${t.city}?`,
        a: "It depends on the size of the tree, what's underneath it, how we can get equipment in, and whether you want the stump ground. We give a clear quote after a no-cost look at the tree, so you know the number before any work is scheduled.",
      },
      {
        q: "Do you remove trees close to houses?",
        a: "Yes. Removals near homes, garages, service lines, and landscaping are where careful rigging matters most. We take the tree down in sections and protect what's below it.",
      },
      {
        q: "Will you tell me if my tree doesn't need to come down?",
        a: "Yes. If pruning, a support system, or monitoring can make it safe, we'll recommend that instead, even though it means a smaller job for us.",
      },
      {
        q: "Is stump grinding included?",
        a: "Stump grinding is a separate service we offer with most removals. Tell us if you want the ground left ready to seed or replant and we'll include it in the quote.",
      },
      siteFaq("Are you licensed and insured?"),
    ],
  },
  {
    slug: "tree-trimming",
    name: "Tree Trimming & Pruning",
    short: "Trimming & Pruning",
    hub: { href: "/services/tree-pruning-trimming", label: "Tree Pruning & Trimming" },
    icon: "pruning",
    image: "/photos/gallery/gallery-27.jpg",
    imageAlt: "An arborist making a careful pruning cut in a mature shade tree",
    inset: "/photos/services/lift-1.jpg",
    band: "/photos/gallery/gallery-26.jpg",
    promise: "Pruning that makes trees safer and healthier, not just shorter.",
    points: ["ISA Certified Arborist-led cuts", "No topping, ever", "Fully insured", RATING],
    lead: (t) =>
      `Tree trimming in ${t.city} is mostly about ${t.trees}: limbs over roofs and driveways, deadwood, and trees that were never pruned when they were young. Every cut is made by or under an ISA Certified Arborist, based on how the tree will respond, so you get clearance and safety without the decay and weak regrowth that topping causes.`,
    signals: {
      heading: (t) => `Signs a ${t.city} tree needs pruning`,
      items: [
        "A limb is growing over your house, garage, or driveway",
        "Dead, damaged, or poorly attached branches",
        "A young tree with competing leaders or weak structure",
        "Storm damage that needs to be cleaned up properly",
        "A valuable mature tree you want to keep, made safer",
        "A tree too close to the roof or service lines",
      ],
    },
    callout: {
      heading: "What we won't do",
      body: "We do not top trees or lion-tail them, and we don't remove large limbs unnecessarily. Those shortcuts create big wounds, decay, and weak growth that fails later. The right cut today prevents a bigger problem tomorrow.",
    },
    reviews: ["Susan Cushing", "Daniel Solverson", "Joe and Carol Persons"],
    faqs: (t) => [
      {
        q: `When is the best time to trim trees in ${t.city}?`,
        a: "Most structural and clearance pruning can be done year-round, and the dormant season is often ideal for shade trees. Oaks are the exception: we avoid pruning oaks during the growing season because of oak wilt risk. We'll tell you the right window for your species.",
      },
      {
        q: "Do you trim trees near power lines?",
        a: "We prune around the service drop to your home with care. Work on utility-owned lines belongs to the utility, and we'll tell you when a call to them comes first.",
      },
      {
        q: "How much does tree trimming cost?",
        a: "It depends on the size of the tree, how much needs to come off, and access. We quote after a no-cost look, and we'll explain what the pruning is for, not just what it costs.",
      },
      {
        q: "Can pruning save a tree I was told to remove?",
        a: "Often, yes. Risk-reduction pruning, weight reduction, or a support system can make a valuable tree safe to keep. We'll give you an honest answer either way.",
      },
      siteFaq("Do you top trees?"),
    ],
  },
  {
    slug: "arborist",
    name: "ISA Certified Arborist",
    short: "Certified Arborist",
    hub: { href: "/services/consultations", label: "Consultations" },
    icon: "consultation",
    image: "/photos/services/assessment-1.jpg",
    imageAlt: "An ISA Certified Arborist inspecting a mature tree for signs of risk",
    inset: "/photos/about/owner-phone-call.jpg",
    band: "/photos/gallery/gallery-10.jpg",
    promise: "A certified arborist's honest read on your trees, before you spend a dollar.",
    points: [
      `${site.owner.name}, ${site.owner.credential}`,
      "Tree Risk Assessment qualified",
      "Veteran-operated",
      RATING,
    ],
    lead: (t) =>
      `Looking for an arborist in ${t.city}? Tree Loving Care is led by ${site.owner.name}, ${site.owner.credential}, and we work across ${t.county} every week. Around ${t.city} that means ${t.trees}. A consultation gives you a clear diagnosis and real options: prune, support, remove, plant, protect, or simply monitor.`,
    signals: {
      heading: (t) => `Why ${t.city} homeowners call an arborist`,
      items: [
        "A tree looks sick, thin, or is dropping branches",
        "Someone said a tree is unsafe and you want a second opinion",
        "Mushrooms, cavities, cracks, or a new lean",
        "You're planning construction or landscaping near valuable trees",
        "You need a written Tree Risk Assessment for insurance, real estate, or a higher-concern tree",
        "You'd rather understand your options than get a sales pitch",
      ],
    },
    callout: {
      heading: "Assessment first, then a plan",
      body: "Most first visits are no-cost. A certified arborist looks at the tree, the site, the soil, and what's around it, then explains what's happening in plain language. For higher-concern trees we offer formal written Tree Risk Assessment reports, and we'll tell you up front when that's a paid service.",
    },
    reviews: ["Kim Cortez", "Daniel Solverson", "Susan Cushing"],
    faqs: (t) => [
      siteFaq("What does “ISA Certified Arborist” actually mean?"),
      {
        q: `Is the arborist visit free in ${t.city}?`,
        a: "Most initial assessments are no-cost. A formal written Tree Risk Assessment is a paid service, and we tell you that before we start.",
      },
      {
        q: "Can an arborist tell if my tree is dying?",
        a: "Usually, yes. We look at the canopy, bark, root flare, soil, and site history to tell you whether the tree is declining, why, and what's realistic to do about it.",
      },
      siteFaq("Do you always recommend removal?"),
    ],
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    short: "Stump Grinding",
    hub: { href: "/services/stump-grinding", label: "Stump Grinding" },
    icon: "stump",
    image: "/photos/services/stump-1.jpg",
    imageAlt: "A ground-down stump leaving clean, level soil ready to reuse",
    inset: "/photos/services/chipping-1.jpg",
    band: "/photos/about/company-truck-jobsite.jpg",
    promise: "Finish the job and reclaim the space.",
    points: ["Clean, level finish", "Ready to seed or replant", "Fully insured", RATING],
    lead: (t) =>
      `Whether we removed the tree or someone else did, stump grinding in ${t.city} turns a tripping hazard and a mowing obstacle back into usable yard. Around ${t.city}, ${t.access} shape how we bring the grinder in, and we'll leave the area clean and ready to seed, mulch, or replant.`,
    signals: {
      heading: (t) => `Why ${t.city} homeowners grind stumps`,
      items: [
        "Make mowing easier and safer",
        "Remove a trip hazard in the yard",
        "Prepare the spot for a new tree or lawn",
        "Stop suckers and sprouts from an old stump",
        "Open up usable space",
        "Avoid working around a stump for years",
      ],
    },
    callout: {
      heading: "Part of a thoughtful plan for the space",
      body: "Stump grinding is the last step of a removal and the first step toward whatever comes next. If you're thinking about replanting, tell us: we'll grind to the right depth and can help you choose the right tree for the spot.",
    },
    reviews: ["Joe and Carol Persons", "Bernice Baker", "Kim Cortez"],
    faqs: () => [
      {
        q: "How deep do you grind?",
        a: "Deep enough to seed or sod over, and deeper when you plan to replant in the same spot. Tell us what you want the space for and we'll grind accordingly.",
      },
      {
        q: "Can you grind a stump from a tree you didn't remove?",
        a: "Yes. Old stumps, storm-damaged stumps, and stumps left by another company are all welcome.",
      },
      {
        q: "What happens to the grindings?",
        a: "We'll talk through what you'd like done with the grindings when we quote the job, from leaving them as fill and mulch to preparing the spot for new lawn.",
      },
      {
        q: "Do you need a lot of access?",
        a: "Less than a removal does. Stump grinders fit through most gates and around most landscaping, and we confirm access on the first visit.",
      },
    ],
  },
  {
    slug: "emergency-tree-service",
    name: "Emergency & Storm Tree Service",
    short: "Storm & Emergency",
    hub: { href: "/services/storm-emergency-tree-work", label: "Storm & Emergency Tree Work" },
    icon: "emergency",
    image: "/photos/services/emergency-1.jpg",
    imageAlt: "A Tree Loving Care crew clearing a storm-damaged tree",
    inset: "/photos/services/emergency-2.jpg",
    band: "/photos/gallery/gallery-29.jpg",
    promise: "24/7 response when a storm puts a tree on your home, car, or driveway.",
    points: ["24/7 emergency response", "ISA Certified Arborist judgment", "Fully insured", RATING],
    lead: (t) =>
      `When a storm hits ${t.city}, ${t.setting}, damage tends to show up in ${t.trees}. Call us any time: we'll make the scene safe, clear what's blocking access, and give you a calm, certified read on which trees can recover and which need to come down. We can also document the damage for your insurance conversation.`,
    signals: {
      heading: () => "Call right away if",
      items: [
        "A tree or limb is on your house, garage, or vehicle",
        "A tree is blocking your driveway or road access",
        "A large limb is hanging and hasn't fallen yet",
        "A tree is leaning after wind or saturated soil",
        "Split trunks or cracked unions after ice or wind",
        "Lines are involved (call the utility first, then us)",
      ],
    },
    callout: {
      heading: "Not every storm-damaged tree needs to come down",
      body: "But some do. We help you understand the difference, calmly, with the judgment that comes from doing this for a living, and we don't use the emergency to sell you work you don't need.",
    },
    reviews: ["Vicki Mathes", "Daniel Solverson", "Joe and Carol Persons"],
    faqs: () => [
      {
        q: "Do you really answer 24/7?",
        a: `Yes. Emergency service is 24/7. Call ${site.phone} and tell us what's on the ground and what's still hanging.`,
      },
      {
        q: "Will you work with my insurance?",
        a: "We document the damage and the work, which is what most insurance conversations need. We can't promise what your policy covers, so contact your carrier early.",
      },
      {
        q: "What should I do before you arrive?",
        a: "Stay away from the tree and anything it's touching, especially lines. Don't cut anything under tension. Take photos if it's safe to.",
      },
      {
        q: "Can the tree be saved after storm damage?",
        a: "Sometimes. Broken limbs can often be pruned properly and the tree will recover. A split trunk or major root failure usually can't. We'll tell you which one you have.",
      },
    ],
  },
  {
    slug: "tree-service",
    name: "Tree Service",
    short: "Tree Service",
    hub: { href: "/services", label: "Services" },
    icon: "consultation",
    image: "/photos/hero/hero-drone-rooftop-canopy.jpg",
    imageAlt: "Tree Loving Care crew working in a mature canopy above a home",
    inset: "/photos/about/team-four-crew-summer.jpg",
    band: "/photos/gallery/gallery-28.jpg",
    promise: "One certified crew for removal, trimming, stumps, storms, and planting.",
    points: ["ISA Certified Arborist-led", "Family-owned, veteran-operated", "Fully insured", RATING],
    lead: (t) =>
      `Searching for tree service near ${t.city}? Tree Loving Care is a family-owned, veteran-operated tree service based in Viroqua, ${t.reach}. We work on ${t.trees}, and every job is led by an ISA Certified Arborist, so you get one honest recommendation instead of a quote for whatever is easiest to sell.`,
    signals: {
      heading: (t) => `What we do in ${t.city}`,
      items: [
        "Tree removal, including hard-to-access trees near homes",
        "Tree trimming and structural pruning",
        "Stump grinding",
        "Storm and emergency tree work, 24/7",
        "Tree planting with a written watering plan and warranty",
        "Tree risk assessments, support systems, and consultations",
      ],
    },
    callout: {
      heading: brand.primaryLine,
      body: brand.supporting,
    },
    reviews: ["Kim Cortez", "Bernice Baker", "Joe and Carol Persons"],
    faqs: (t) => [
      {
        q: `Do you serve ${t.city}?`,
        a: `Yes. We're based in Viroqua and work across ${t.county} and the Driftless Region, ${t.reach}.`,
      },
      siteFaq("Is the first visit free?"),
      siteFaq("Are you licensed and insured?"),
      siteFaq("Do you always recommend removal?"),
    ],
  },
];

export const landingSteps = plan;

export function getTrack(slug: string) {
  return landingTracks.find((t) => t.slug === slug);
}

export function getTown(slug: string) {
  return landingTowns.find((t) => t.slug === slug);
}

export function landingPath(track: string, town: string) {
  return `/${track}/${town}`;
}

export function landingTitle(track: LandingTrack, town: LandingTown) {
  return `${track.name} in ${town.city}, WI`;
}

export function landingReviews(track: LandingTrack) {
  return track.reviews
    .map((name) => testimonials.find((r) => r.name === name))
    .filter((r): r is (typeof testimonials)[number] => Boolean(r));
}

/** Every generated route, for sitemap + static params. */
export const landingRoutes = landingTracks.flatMap((track) =>
  landingTowns.map((town) => ({ track: track.slug, town: town.slug })),
);

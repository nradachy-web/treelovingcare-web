/**
 * Tree Loving Care, single source of truth for site content.
 * Positioning (per owner Emlyn Jones, 2026): thoughtful, stewardship-led tree
 * care. The homeowner is the hero; TLC is the certified guide who looks beyond
 * the immediate concern and does not default to unnecessary removal.
 */

export const site = {
  name: "Tree Loving Care",
  legalName: "Tree Loving Care, LLC",
  url: "https://treelovingcarellc.com",
  description:
    "Thoughtful tree care for people who value trees. ISA Certified Arborist-led pruning, removal, planting, support systems, storm response, and tree risk assessment across the Driftless Region of western Wisconsin: Viroqua, La Crosse, and surrounding communities.",
  tagline: "Thoughtful tree care for people who value trees.",
  region: "the Driftless Region of western Wisconsin",
  regionShort: "the Driftless Region, WI",
  phone: "(608) 615-7740",
  phoneHref: "tel:+16086157740",
  email: "info@treelovingcarellc.com",
  address: {
    street: "102 Western Ave",
    city: "Viroqua",
    state: "WI",
    zip: "54665",
    full: "102 Western Ave, Viroqua, WI 54665",
  },
  hours: "Mon to Sat, 7am to 6pm · Emergency service 24/7",
  facebook: "https://www.facebook.com/Treelovingcarellc",
  owner: {
    name: "Emlyn Jones",
    title: "Owner & ISA Certified Arborist",
    credential: "ISA Certified Arborist · WI-1705A",
  },
  motto:
    "Strong trees are shaped by the environment around them and the stewardship behind them.",
} as const;

/** Core brand language, reused across the site. */
export const brand = {
  primaryLine: "Thoughtful tree care for people who value trees.",
  coreBelief:
    "Strong trees are shaped by the environment around them and the stewardship behind them.",
  supporting:
    "That is why we look beyond the immediate concern. We consider the tree, the site, the soil, the structure, the targets, and your long-term goals before recommending the next step.",
  audience:
    "We help homeowners, property owners, builders, and land stewards across the Driftless Region make better decisions about their trees.",
  /** Short, quotable lines for section accents. */
  lines: [
    "Pruning should reduce risk without sacrificing the health of the tree.",
    "Plant it right the first time, or pay for it twice.",
    "We remove trees when needed, but removal is not our default recommendation.",
    "Not every risky tree needs to come down. Not every tree should be saved.",
    "The right tree in the right place can become a legacy. The wrong tree in the wrong place can become a future removal.",
    "A tree can look fine after construction and still be set up for decline.",
    "Fair, thoughtful tree care, not cheap shortcuts.",
  ],
} as const;

/** Trust badges shown beneath the hero and in the footer. */
export const credentials = [
  { label: "ISA Certified Arborist", detail: "WI-1705A" },
  { label: "Tree Risk Assessment", detail: "Qualified assessor" },
  { label: "Veteran-Operated", detail: "Discipline & integrity" },
  { label: "Fully Insured", detail: "Licensed & registered" },
];

/** The 3-step plan, the spine of the homepage. Consultative, assessment-first. */
export const plan = [
  {
    step: "01",
    title: "Request an assessment",
    body: "Tell us what's going on. A certified arborist comes out, looks at the tree, the site, and what's around it, and listens to your goals, at no cost, with no pressure.",
  },
  {
    step: "02",
    title: "Get clear recommendations",
    body: "We explain what's actually happening in plain language and lay out your real options: prune, support, remove, plant, protect, or simply monitor, so you can decide with confidence.",
  },
  {
    step: "03",
    title: "Move forward, thoughtfully",
    body: "When you're ready, we provide a clear quote or proposal and do the work cleanly, protecting your property and the trees worth keeping.",
  },
];

/** A block of content on a service page, rendered in order. */
export type ServiceBlock =
  | {
      kind: "list";
      heading: string;
      intro?: string;
      items: string[];
      /** "warn" styles a "what we won't do / what we avoid" list. */
      tone?: "default" | "warn";
    }
  | { kind: "callout"; heading: string; body: string }
  | { kind: "prose"; heading: string; body: string[] }
  | { kind: "warranty"; heading: string; intro?: string; items: string[]; fineprint?: string };

export type ServiceTier = "main" | "specialty";

export type Service = {
  slug: string;
  name: string;
  /** short label for cards, footer, related links */
  short: string;
  tier: ServiceTier;
  /** one-line value promise, card copy + page-hero subtitle */
  promise: string;
  /** lead paragraph(s) for the service page */
  intro: string;
  /** flexible, ordered content blocks unique to each service */
  blocks: ServiceBlock[];
  /** who this service is the right fit for */
  bestFit?: string;
  /** closing outcome line, shown in the green result band */
  outcome?: string;
  icon: ServiceIcon;
  /** full path into /public/photos */
  image: string;
  /** descriptive alt text for the service photo */
  imageAlt: string;
  /** supporting photos: [framed lead image, full-width mid-page band] */
  gallery: string[];
};

export type ServiceIcon =
  | "removal"
  | "pruning"
  | "planting"
  | "stump"
  | "cabling"
  | "emergency"
  | "assessment"
  | "protection"
  | "consultation";

export const services: Service[] = [
  /* ----------------------------- MAIN SERVICES ----------------------------- */
  {
    slug: "tree-pruning-trimming",
    name: "Tree Pruning & Trimming",
    short: "Pruning & Trimming",
    tier: "main",
    promise: "Safer, healthier trees start with better pruning.",
    intro:
      "Tree pruning should do more than make a tree look neat. Done well, pruning improves structure, reduces risk, protects your home, and supports the long-term health of the tree. Done poorly, it creates large wounds, decay, weak structure, and future failure points. We focus on thoughtful pruning based on tree biology, structure, risk, and your goals for the property.",
    blocks: [
      {
        kind: "list",
        heading: "When homeowners usually call us",
        intro: "You may want a pruning assessment if:",
        items: [
          "A limb is growing over your house, garage, driveway, or outdoor living space",
          "A tree is too close to the roof or structure",
          "Someone told you the tree may be unsafe",
          "You're worried about storm damage",
          "The tree has dead, damaged, or poorly attached limbs",
          "You want to preserve a valuable tree instead of removing it",
          "You want to improve a young tree's structure before problems become expensive",
        ],
      },
      {
        kind: "callout",
        heading: "The mistake many homeowners make",
        body: "Many people assume the best solution is to remove the large limb they're worried about. Sometimes that's true. But often, removing a large limb creates a bigger long-term problem. Large pruning wounds can lead to decay, structural weakness, and early decline, especially when the cut is made low on the tree or without understanding how the tree will respond. The right cut today can prevent a much bigger problem tomorrow. The wrong cut can create one.",
      },
      {
        kind: "list",
        heading: "Our pruning approach",
        intro:
          "We look at the whole tree, not just the branch that caught your attention. Our recommendations may include:",
        items: [
          "Structural pruning",
          "Risk reduction pruning",
          "Deadwood removal",
          "Clearance pruning near homes, roofs, driveways, and walkways",
          "Weight reduction where appropriate",
          "Young tree pruning",
          "Pruning to preserve valuable mature trees",
        ],
      },
      {
        kind: "list",
        tone: "warn",
        heading: "What we won't do",
        items: [
          "We do not top trees",
          "We do not lion-tail trees",
          "We do not remove large limbs unnecessarily when doing so will increase future risk or shorten the life of the tree",
        ],
      },
    ],
    bestFit:
      "This service is best for homeowners who care about safety, tree health, and long-term property value, not just the cheapest way to “trim something back.”",
    outcome:
      "Trees that are safer, healthier, and shaped to grow strong for decades, pruned the way an arborist would.",
    icon: "pruning",
    image: "/photos/gallery/gallery-27.jpg",
    imageAlt: "An arborist making a careful pruning cut in a mature shade tree",
    gallery: ["/photos/services/lift-1.jpg", "/photos/gallery/gallery-26.jpg"],
  },
  {
    slug: "tree-removal",
    name: "Tree Removal",
    short: "Tree Removal",
    tier: "main",
    promise: "We remove trees when needed, but removal is never our default.",
    intro:
      "Tree removal is sometimes the right choice. A tree may be too far gone, too risky, in the wrong location, or no longer compatible with the property. When that's the case, we can remove it safely and thoughtfully. But removal is not our default recommendation. If a valuable tree can reasonably be preserved and made safer, we'll help you understand that option. If removal is the best choice, we'll tell you clearly and explain why.",
    blocks: [
      {
        kind: "prose",
        heading: "Tree removal with less impact to your property",
        body: [
          "Many removals require care, planning, and access solutions, especially when the tree is near a home, landscape, other trees, or tight spaces.",
          "One of our strengths is handling removals where heavy equipment access is difficult, or where protecting the surrounding property matters. Our goal is to remove the tree safely while limiting unnecessary damage to lawns, plantings, nearby trees, and the surrounding landscape.",
        ],
      },
      {
        kind: "list",
        heading: "Good reasons to remove a tree",
        intro: "Removal may be appropriate when:",
        items: [
          "The tree presents unacceptable risk",
          "The tree is severely declining or structurally compromised",
          "The tree is in the wrong location",
          "The tree is damaging or threatening property",
          "The tree has outgrown its space",
          "The tree cannot reasonably be preserved",
          "The cost or risk of preservation no longer makes sense",
        ],
      },
    ],
    bestFit:
      "We are not the cheapest tree removal company, and we are not trying to be. We're a good fit when you want clear guidance, thoughtful work, and a company that respects your property.",
    outcome:
      "The hazard is gone, your property is respected, and you understood every option before the saw ever started.",
    icon: "removal",
    image: "/photos/services/removal-2.jpg",
    imageAlt: "A Tree Loving Care climber dismantling a large tree in sections above a home",
    gallery: ["/photos/services/removal-1.jpg", "/photos/gallery/gallery-31.jpg"],
  },
  {
    slug: "tree-planting",
    name: "Tree Planting",
    short: "Tree Planting",
    tier: "main",
    promise: "Plant it right the first time, or pay for it twice.",
    intro:
      "A new tree should be one of the best long-term investments in your landscape. But many trees die early because they were planted too deep, selected poorly for the site, had root problems from the nursery, or never received proper watering and structural care during the first few years. We help homeowners choose, plant, and establish trees with a plan for long-term success.",
    blocks: [
      {
        kind: "list",
        heading: "Better trees start before planting day",
        intro: "We help you think through:",
        items: [
          "What kind of space you want to create",
          "How the tree will benefit your property",
          "Mature size and long-term fit",
          "Shade, beauty, privacy, fall color, and legacy value",
          "Species selection for the site",
          "Root quality and nursery stock concerns",
          "Proper planting depth",
          "Mulching and watering",
          "Future structural pruning needs",
        ],
      },
      {
        kind: "prose",
        heading: "Trees we often recommend",
        body: [
          "Maples are loved for their fall color and, depending on the species, can provide the faster growth rate many homeowners want.",
          "Smaller ornamental flowering trees can add seasonal beauty while staying lower maintenance in the right location.",
          "Oaks and other long-lived canopy trees are a powerful choice for homeowners who want to leave a legacy for future generations. Our specialty is helping establish and promote successful larger shade and canopy trees.",
        ],
      },
      {
        kind: "list",
        tone: "warn",
        heading: "What we're careful about",
        items: [
          "Fast-growing trees planted too close to homes, they often demand more proactive maintenance over time",
          "Non-native species, or species that haven't adapted well locally, they may need more care and still underperform",
          "We're not a shrub-focused company. Our strength is trees, canopy, shade, structure, and property value",
        ],
      },
      {
        kind: "list",
        heading: "What's included with professional tree planting",
        items: [
          "Tree selection based on site goals and conditions",
          "Professional installation to proper depth with visible root flare",
          "Water-in at installation",
          "Mulch ring",
          "Staking only if needed",
          "Basic cleanup related to planting work",
          "A complimentary written watering plan, customized to the installation",
        ],
      },
      {
        kind: "warranty",
        heading: "Planting warranty & establishment care",
        intro:
          "Most trees that die early fail because something went wrong in the first five years. Our goal is to help your new tree get established correctly when it matters most.",
        items: [
          "Every tree we plant includes a 1-year warranty when recommended care is followed",
          "Optional 5-Year Extended Warranty through our 5-Year Structural Pruning Program",
          "A minimum of three structural pruning visits within the first five years, timed by species, growth, and season",
        ],
        fineprint:
          "Following the written watering plan is required for any warranty claim. Standard warranties are subject to nursery terms and recommended care. Coverage excludes loss from insufficient watering, mower or string-trimmer damage, grade changes, trenching or excavation in the root zone, chemical injury, construction impacts, vandalism, vehicle or animal damage, and extreme events beyond reasonable control. Root zones must be protected from digging, stored materials, soil compaction, and drainage changes. The client provides safe access and a working water source at the time of planting.",
      },
    ],
    bestFit:
      "Best for homeowners planting for the long term, shade, beauty, and a legacy tree they want to get right the first time.",
    outcome:
      "The right tree, in the right place, planted and cared for so it thrives for generations instead of failing in five years.",
    icon: "planting",
    image: "/photos/gallery/gallery-33.jpg",
    imageAlt: "A healthy tree above the rolling green farmland of the Driftless Region",
    gallery: ["/photos/gallery/gallery-26.jpg", "/photos/gallery/gallery-28.jpg"],
  },
  {
    slug: "tree-support-systems",
    name: "Tree Support Systems",
    short: "Support Systems",
    tier: "main",
    promise: "Help valuable trees last longer and live safer.",
    intro:
      "Some mature trees are worth preserving, even when they have structural concerns. Tree support systems can reduce risk, support weak unions, and extend the life of older or valuable trees when removal is not the best or only option. For legacy trees, old shade trees, and meaningful trees in important places, support systems can be a practical way to preserve value while improving safety.",
    blocks: [
      {
        kind: "list",
        heading: "When support systems may help",
        intro: "A tree support system may be worth considering when:",
        items: [
          "A mature tree has a weak union",
          "Large limbs need supplemental support",
          "The tree has high value to the property",
          "Removal would be costly or undesirable",
          "The tree provides important shade, beauty, or history",
          "Risk can be reduced to an acceptable level with support and pruning",
        ],
      },
      {
        kind: "callout",
        heading: "An honest word on what they can do",
        body: "Support systems are not magic. They do not make every tree safe forever. But when used correctly, they can be part of a smart preservation plan, and we'll tell you honestly when support is, and isn't, the right call.",
      },
    ],
    bestFit:
      "Best for owners of a meaningful, mature tree who want to preserve it safely rather than lose it.",
    outcome:
      "A tree you'd hate to lose is reinforced, monitored, and standing strong, on purpose, not on luck.",
    icon: "cabling",
    image: "/photos/services/cabling-1.jpg",
    imageAlt: "A steel support cable installed high in a mature tree's canopy",
    gallery: ["/photos/gallery/gallery-34.jpg", "/photos/gallery/gallery-33.jpg"],
  },
  {
    slug: "storm-emergency-tree-work",
    name: "Storm & Emergency Tree Work",
    short: "Storm & Emergency",
    tier: "main",
    promise: "When storms damage trees, start with safety and clear judgment.",
    intro:
      "Storm-damaged trees can be stressful. Limbs may be broken, trees may be leaning, and it can be hard to know whether the tree can recover or needs to be removed. We help homeowners assess storm-damaged trees and choose the safest, most practical next step.",
    blocks: [
      {
        kind: "list",
        heading: "Storm work may include",
        items: [
          "Broken limb removal",
          "Hazard assessment",
          "Emergency clearance",
          "Pruning to reduce additional risk",
          "Tree removal when needed",
          "Preservation recommendations when the tree can recover",
        ],
      },
      {
        kind: "callout",
        heading: "Not every storm-damaged tree needs to come down",
        body: "But some do. We help you understand the difference, calmly, and with the judgment that comes from doing this for a living.",
      },
    ],
    bestFit:
      "Best for homeowners facing storm damage who want a calm, certified read on what's actually safe and what needs to happen next.",
    outcome:
      "The immediate danger is handled by people who do this for a living, and you know exactly which trees can be saved.",
    icon: "emergency",
    image: "/photos/services/emergency-1.jpg",
    imageAlt: "A Tree Loving Care crew clearing a storm-damaged tree",
    gallery: ["/photos/gallery/gallery-29.jpg", "/photos/services/emergency-2.jpg"],
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    short: "Stump Grinding",
    tier: "main",
    promise: "Finish the job and reclaim the space.",
    intro:
      "After a tree is removed, the stump can be left behind as a tripping hazard, a mowing obstacle, a pest concern, or an eyesore. Stump grinding cleans up the area and makes it easier to replant, reseed, or reuse the space. We offer stump grinding as part of a thoughtful plan for your landscape after removal.",
    blocks: [
      {
        kind: "list",
        heading: "Common reasons to grind a stump",
        items: [
          "Improve appearance",
          "Make mowing easier",
          "Reduce trip hazards",
          "Prepare for replanting",
          "Open up usable yard space",
          "Avoid working around an old stump for years",
        ],
      },
    ],
    bestFit:
      "Best for homeowners who just had a tree removed and want the ground clean, level, and ready to mow, replant, or reclaim.",
    outcome:
      "The stump is gone, the ground is ready to use again, and your yard finally feels finished.",
    icon: "stump",
    image: "/photos/services/stump-1.jpg",
    imageAlt: "A ground-down stump leaving clean, level soil ready to reuse",
    gallery: ["/photos/about/company-truck-jobsite.jpg", "/photos/services/chipping-1.jpg"],
  },

  /* --------------------------- SPECIALTY SERVICES -------------------------- */
  {
    slug: "tree-risk-assessment",
    name: "Tree Risk Assessments",
    short: "Risk Assessments",
    tier: "specialty",
    promise: "Clearer decision-making for trees with risk concerns.",
    intro:
      "Some trees need more than a quick opinion. If you're concerned about whether a tree may pose a risk, whether it should be removed, or whether it can be preserved with pruning, support, or monitoring, a Tree Risk Assessment can provide a clearer path forward. We offer assessments for homeowners, property owners, and decision-makers who want a better understanding of a tree's condition, risk factors, likely consequences, and practical options.",
    blocks: [
      {
        kind: "callout",
        heading: "An assessment is not a guarantee a tree is “safe”",
        body: "Trees are living organisms, and risk can never be completely eliminated. The purpose of an assessment is to help you make a better-informed decision.",
      },
      {
        kind: "list",
        heading: "A Tree Risk Assessment may help when",
        items: [
          "A tree is close to a home, driveway, sidewalk, play area, parking area, or valuable target",
          "You see cavities, cracks, decay, mushrooms, dead limbs, or significant lean",
          "A storm damaged the tree",
          "Someone told you the tree may be unsafe",
          "You're deciding between pruning, support, removal, or monitoring",
          "You need a more formal written report",
          "You own a valuable mature tree and want to reduce avoidable risk",
        ],
      },
      {
        kind: "prose",
        heading: "Verbal recommendations or formal written reports",
        body: [
          "Depending on the situation, we can provide verbal recommendations with follow-up guidance, or a more formal written Tree Risk Assessment report.",
          "Not every situation requires a formal report, sometimes a clear on-site conversation and practical recommendations are enough. Other times, written documentation helps with property owners, decision-makers, insurance conversations, real estate situations, construction planning, or higher-concern trees.",
          "We start by understanding the situation, the people making the decision, and the objectives that need to be met. From there, we recommend the right level of assessment and provide a quote or proposal.",
        ],
      },
    ],
    bestFit:
      "Best for owners and decision-makers who want a clear, defensible understanding of a tree's risk before they act.",
    outcome:
      "You finally know where you stand, which trees you can keep enjoying, and which ones to handle on your schedule, not the storm's.",
    icon: "assessment",
    image: "/photos/services/assessment-1.jpg",
    imageAlt: "An ISA Certified Arborist inspecting a mature tree for signs of risk",
    gallery: ["/photos/about/owner-phone-call.jpg", "/photos/gallery/gallery-10.jpg"],
  },
  {
    slug: "construction-tree-protection",
    name: "Construction Around Trees & Tree Protection Planning",
    short: "Tree Protection Planning",
    tier: "specialty",
    promise: "Protect valuable trees before construction damage happens.",
    intro:
      "Construction, grading, trenching, excavation, driveway work, landscaping, utility work, and equipment access can seriously damage trees, often before the damage is visible. A tree can look fine after construction and still be set up for decline. Roots can be cut, soil can be compacted, drainage can change, and trunks or root zones can be injured. Months or years later, the tree may begin to decline, lose branches, or become more vulnerable to pests, disease, drought stress, and structural problems.",
    blocks: [
      {
        kind: "callout",
        heading: "The best time to protect a tree is before the machines arrive",
        body: "If you're planning work near valuable trees, it's worth getting an arborist involved before the project begins. Once major roots are cut or soil is compacted, the options become more limited.",
      },
      {
        kind: "list",
        heading: "Tree Protection Planning can help with",
        items: [
          "Identifying trees worth preserving",
          "Understanding whether preservation is realistic",
          "Establishing tree protection zones",
          "Protecting critical root zones",
          "Planning access routes",
          "Reducing soil compaction",
          "Avoiding unnecessary root damage",
          "Managing grading, trenching, and excavation impacts",
          "Communicating tree protection needs with builders, landscapers, excavators, and other contractors",
          "Monitoring trees before, during, or after construction when appropriate",
        ],
      },
      {
        kind: "prose",
        heading: "For homeowners, builders, and project decision-makers",
        body: [
          "This service is for anyone who wants to preserve trees during construction or site work, from a homeowner planning a small landscape project to a builder or contractor working near mature trees.",
          "Every situation starts with a conversation and an assessment of the project context, the trees involved, and the objectives being pursued. From there, we provide recommendations, a quote, or a proposal for the appropriate level of support.",
        ],
      },
    ],
    bestFit:
      "Best for homeowners, builders, and contractors who want mature trees to survive a project, not quietly decline after it.",
    outcome:
      "The trees worth keeping are protected before the first machine shows up, instead of mourned years later.",
    icon: "protection",
    image: "/photos/about/company-truck-jobsite.jpg",
    imageAlt: "Tree Loving Care equipment at a work site near mature trees",
    gallery: ["/photos/services/assessment-1.jpg", "/photos/gallery/gallery-28.jpg"],
  },
  {
    slug: "consultations",
    name: "Consultations",
    short: "Consultations",
    tier: "specialty",
    promise: "Clear guidance before you make a tree decision.",
    intro:
      "Sometimes you don't need immediate tree work, you need an expert opinion. A consultation gives you a chance to walk through your concerns with a Certified Arborist, understand what's happening, and decide what next step makes the most sense. Consultations are often useful when you're unsure whether a tree needs pruning, removal, support, planting, monitoring, health care, or a more detailed Tree Risk Assessment.",
    blocks: [
      {
        kind: "list",
        heading: "A consultation can help with",
        items: [
          "General tree health questions",
          "Planting plans",
          "Species selection",
          "Young tree structure",
          "Long-term property planning",
          "Construction or landscape impacts",
          "Deciding whether a more detailed assessment is needed",
          "Understanding options before committing to tree work",
        ],
      },
      {
        kind: "prose",
        heading: "How it works",
        body: [
          "For the best outcome, we recommend being on site during the assessment. That lets us understand your goals, explain options clearly, and answer questions in real time.",
          "Most basic assessments take about 10 to 30 minutes, depending on the number of trees, site complexity, and the questions involved.",
        ],
      },
    ],
    bestFit:
      "Best for anyone who wants to understand their options, and make a confident decision, before committing to any tree work.",
    outcome:
      "You leave the conversation educated, confident, and clear on the next step that makes the most sense for you.",
    icon: "consultation",
    image: "/photos/about/owner-phone-call.jpg",
    imageAlt: "Tree Loving Care's owner talking through a tree question by phone",
    gallery: ["/photos/about/crewman-chainsaw-portrait.jpg", "/photos/about/team-four-crew-summer.jpg"],
  },
];

export const mainServices = services.filter((s) => s.tier === "main");
export const specialtyServices = services.filter((s) => s.tier === "specialty");

export type ServiceArea = {
  slug: string;
  city: string;
  county: string;
  blurb: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "viroqua",
    city: "Viroqua",
    county: "Vernon County",
    blurb:
      "Our home base. We know Viroqua's trees, soils, and storms because we live and work here every day.",
  },
  {
    slug: "la-crosse",
    city: "La Crosse",
    county: "La Crosse County",
    blurb:
      "From the river bluffs to established neighborhoods full of mature oaks and maples, La Crosse homeowners trust us to keep their trees safe and healthy.",
  },
  {
    slug: "onalaska",
    city: "Onalaska",
    county: "La Crosse County",
    blurb:
      "Lakeside lots and wooded yards in Onalaska get the same certified, thoughtful care and a spotless cleanup.",
  },
  {
    slug: "west-salem",
    city: "West Salem",
    county: "La Crosse County",
    blurb:
      "West Salem's village streets and rural acreages alike rely on us for honest, arborist-led tree care.",
  },
  {
    slug: "holmen",
    city: "Holmen",
    county: "La Crosse County",
    blurb:
      "Growing Holmen neighborhoods often have young trees that need the right structural pruning now to thrive later.",
  },
  {
    slug: "westby",
    city: "Westby",
    county: "Vernon County",
    blurb:
      "Just up the road from our shop, Westby homeowners get fast response and a crew that treats their yard like a neighbor's.",
  },
  {
    slug: "sparta",
    city: "Sparta",
    county: "Monroe County",
    blurb:
      "Sparta's mix of town lots and country property gets dependable removals, pruning, planting, and storm response.",
  },
  {
    slug: "la-farge",
    city: "La Farge",
    county: "Vernon County",
    blurb:
      "Tucked in the Kickapoo Valley, La Farge properties get certified care that respects the wooded character of the land.",
  },
  {
    slug: "stoddard",
    city: "Stoddard",
    county: "Vernon County",
    blurb:
      "Along the Mississippi, Stoddard's riverside lots and bluff trees get thoughtful, arborist-led attention.",
  },
  {
    slug: "gays-mills",
    city: "Gays Mills",
    county: "Crawford County",
    blurb:
      "Orchard country and Driftless hillsides, Gays Mills homeowners trust us with the trees that matter to them.",
  },
];

/** Google rating, pulled from the Google Business Profile. */
export const googleRating = { score: "5.0", count: 170 };

/** Real, verbatim 5-star reviews from the Google Business Profile. */
export const testimonials = [
  {
    quote:
      "I have nothing but praise for Emlyn and his crew. A large poplar came down in a storm and fell on my car. Emlyn was able to come the same day (Saturday) and carefully clear the tree from my car. They do excellent work and are wonderful to work with.",
    name: "Vicki Mathes",
    location: "Google review",
  },
  {
    quote:
      "Can't say enough good things about this company! Came out and reviewed my trees for free. Even sent me a follow up text with their recommendations! I would highly recommend them if you are looking for an honest company with which you would like to do business.",
    name: "Kim Cortez",
    location: "Google review",
  },
  {
    quote:
      "Emlyn, Jared and Mike are wonderful guys to work with. They skillfully removed a huge elm tree from my back yard. They have always come on time, been polite and courteous, and did an excellent job of cleaning up the mess. I would totally recommend Tree Loving Care.",
    name: "Bernice Baker",
    location: "Google review",
  },
  {
    quote:
      "Tree Loving Care was very prompt to come to my rescue to deal with broken branches hovering over my house. All the crew members are very friendly and very knowledgeable. They know what cuts are necessary to keep the rest of the tree healthy.",
    name: "Daniel Solverson",
    location: "Google review",
  },
  {
    quote:
      "Emlyn and his crew did a great job on our oak and fruit trees. They were prompt, left a perfectly clean ground when done and the trees look good. Most of all, they did not damage the trees doing the work and were careful about fences under the trees.",
    name: "Susan Cushing",
    location: "Google review",
  },
  {
    quote:
      "It was very refreshing to work with a company that has excellent communication, arrives when they say they will, and works continuously to get the job done. Emlyn and his crew do an exceptional job of cleaning up. We will definitely recommend Tree Loving Care.",
    name: "Joe and Carol Persons",
    location: "Google review",
  },
];

export const faqs = [
  {
    q: "Do you always recommend removal?",
    a: "No. Removal is never our default. If a valuable tree can reasonably be preserved and made safer with pruning, support, or monitoring, we'll help you understand that option. If removal truly is the best choice, we'll tell you clearly and explain why.",
  },
  {
    q: "Do you top trees?",
    a: "No. We do not top or lion-tail trees. Those practices create large wounds, decay, and weak, dangerous regrowth. We prune to standards based on tree biology, so the right cut today prevents a bigger problem tomorrow.",
  },
  {
    q: "Is the first visit free?",
    a: "Most initial assessments are no-cost. A certified arborist comes out, looks at the tree, the site, and what's around it, listens to your goals, and gives you clear recommendations. For higher-concern trees, a formal written Tree Risk Assessment may be a paid service, and we'll tell you that up front.",
  },
  {
    q: "Are you licensed and insured?",
    a: "We are fully insured and registered. Tree work carries real risk, and you should never let an uninsured crew on your property. We'll gladly provide proof of insurance.",
  },
  {
    q: "What does “ISA Certified Arborist” actually mean?",
    a: "It means our work is led by a professional tested and certified by the International Society of Arboriculture. Your trees are evaluated by someone trained in tree biology, structure, and safety, not just someone with a chainsaw.",
  },
  {
    q: "Do you offer a planting warranty?",
    a: "Yes. Every tree we plant includes a 1-year warranty when our recommended care is followed, plus an optional 5-Year Extended Warranty through our 5-Year Structural Pruning Program. Most trees that fail early do so in the first five years, so we focus on getting establishment right.",
  },
  {
    q: "Do you handle storm and emergency tree work?",
    a: "Yes, 24/7. If a tree is on your home, vehicle, or blocking access, call us any time. We'll make the scene safe, help you understand what can be saved, and document what you need for insurance.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the Driftless Region of western Wisconsin, Viroqua, La Crosse, Onalaska, West Salem, Holmen, Westby, Sparta, La Farge, Stoddard, Gays Mills, and the surrounding communities.",
  },
];

export const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

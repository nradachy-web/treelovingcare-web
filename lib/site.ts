/**
 * Tree Loving Care, single source of truth for site content.
 * Copy is written on the StoryBrand framework: the homeowner is the hero,
 * Tree Loving Care is the guide.
 */

export const site = {
  name: "Tree Loving Care",
  legalName: "Tree Loving Care, LLC",
  url: "https://treelovingcarellc.com",
  description:
    "Family-owned, veteran-operated tree care led by an ISA Certified Arborist. Tree removal, pruning, stump grinding and 24/7 emergency service across the La Crosse and Viroqua, Wisconsin area. Free estimates.",
  tagline: "Caring for the trees you love.",
  region: "the La Crosse & Viroqua, Wisconsin area",
  regionShort: "La Crosse & Viroqua, WI",
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
  motto: "A tree can be only as strong as the environment that surrounds and supports it.",
} as const;

/** Trust badges shown beneath the hero and in the footer. */
export const credentials = [
  { label: "ISA Certified Arborist", detail: "WI-1705A" },
  { label: "Veteran-Operated", detail: "Discipline & integrity" },
  { label: "Fully Insured", detail: "Licensed & registered" },
  { label: "100% Satisfaction", detail: "Guaranteed work" },
];

/** The 3-step plan, the spine of the StoryBrand homepage. */
export const plan = [
  {
    step: "01",
    title: "Request your free estimate",
    body: "Call or send a message. A certified arborist walks your property, listens to what you need, and looks at every tree in question, at no cost.",
  },
  {
    step: "02",
    title: "Get a clear, honest plan",
    body: "You receive a straightforward quote and an explanation you can actually understand. No pressure, no jargon, no surprises later.",
  },
  {
    step: "03",
    title: "We do the work, cleanly",
    body: "Our crew arrives on time, works safely, and treats your yard like our own. When we leave, the only thing different is the problem you called about.",
  },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  /** one-line value promise for cards */
  promise: string;
  /** hero/intro paragraph for the service page */
  intro: string;
  /** the homeowner's worry this service resolves */
  worry: string;
  /** what the work includes */
  includes: string[];
  /** the outcome the homeowner gets */
  outcome: string;
  icon: ServiceIcon;
  /** image key from public/photos/services */
  image: string;
};

export type ServiceIcon =
  | "removal"
  | "pruning"
  | "stump"
  | "cabling"
  | "emergency"
  | "assessment";

export const services: Service[] = [
  {
    slug: "tree-removal",
    name: "Tree Removal",
    short: "Tree Removal",
    promise: "Take down the tree that worries you, without taking down anything else.",
    intro:
      "When a tree is dead, dying, or leaning over the things you love, removing it is not a small decision. We make it a safe one. Every removal is planned by a certified arborist and executed by a crew trained to bring a tree down in control, limb by limb when the situation calls for it.",
    worry:
      "You look at that tree near the house, the power line, the kids' swing set, and you picture the worst. You shouldn't have to.",
    includes: [
      "On-site evaluation by an ISA Certified Arborist",
      "Rigging and sectional removal for tight or risky spaces",
      "Protection of your home, fences, gardens and lawn",
      "Complete cleanup, limbs, debris and sawdust hauled away",
      "Optional stump grinding to finish the job",
    ],
    outcome:
      "The hazard is gone, your property is untouched, and your yard is clean enough that you'd never know we were there, except the worry left with us.",
    icon: "removal",
    image: "removal-1.jpg",
  },
  {
    slug: "tree-trimming-pruning",
    name: "Tree Trimming & Pruning",
    short: "Trimming & Pruning",
    promise: "Healthier, safer, better-looking trees, pruned the way an arborist would.",
    intro:
      "Good pruning is the difference between a tree that thrives and a tree that slowly fails. We prune to a standard, not a guess, removing what's dead or dangerous, opening the canopy to light and air, and shaping each tree to grow strong for decades.",
    worry:
      "Overgrown limbs scrape the roof, block the view, and you can't tell which cuts will help the tree and which will hurt it.",
    includes: [
      "Crown cleaning, thinning, raising and reduction",
      "Deadwood and hazard-limb removal",
      "Clearance from roofs, siding, driveways and power lines",
      "Structural pruning for young and developing trees",
      "Cuts made to ISA standards, no topping, no harm",
    ],
    outcome:
      "Your trees look intentional instead of overgrown, more light reaches your yard, and every tree is set up to stay healthy and safe.",
    icon: "pruning",
    image: "pruning-1.jpg",
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    short: "Stump Grinding",
    promise: "Erase the leftover stump and reclaim your yard.",
    intro:
      "A stump is a trip hazard, a mower-killer, and an open invitation to pests and fungus. We grind it well below grade so you can reclaim the space, replant it, sod it, or simply enjoy a yard with nothing in the way.",
    worry:
      "That stump catches the mower, stubs every toe, and quietly turns into a home for carpenter ants and rot.",
    includes: [
      "Grinding 6 to 12 inches below grade",
      "Surface-root grinding where access allows",
      "Mulch left on site or hauled away, your choice",
      "Backfill-ready hole so you can replant or level",
      "Tidy cleanup of the surrounding lawn",
    ],
    outcome:
      "The stump is gone for good, the ground is ready to use again, and your yard finally feels finished.",
    icon: "stump",
    image: "stump-1.jpg",
  },
  {
    slug: "tree-cabling-bracing",
    name: "Tree Cabling & Bracing",
    short: "Cabling & Bracing",
    promise: "Support a tree worth saving instead of losing it.",
    intro:
      "Not every weak tree needs to come down. A tree with a split trunk, a heavy lean, or a vulnerable branch union can often be saved with the right hardware, installed in the right place. Cabling and bracing reduces strain and buys a beautiful, mature tree many more years.",
    worry:
      "There's a crack, a co-dominant fork, or a long heavy limb, and you're afraid the next storm decides its fate for you.",
    includes: [
      "Arborist assessment of structural weak points",
      "Steel cable installation high in the canopy",
      "Through-rod bracing for splits and weak unions",
      "A maintenance plan to monitor the tree over time",
      "An honest answer if support is not the right call",
    ],
    outcome:
      "A mature shade tree you'd hate to lose is reinforced, monitored, and standing strong, on purpose, not on luck.",
    icon: "cabling",
    image: "cabling-1.jpg",
  },
  {
    slug: "emergency-tree-service",
    name: "Emergency Tree Service",
    short: "Emergency Service",
    promise: "When a storm changes everything, we answer the phone.",
    intro:
      "Storms in our part of Wisconsin do not wait for business hours. When a tree comes down on your home, your driveway, or across your road, you need a calm, certified crew, fast. We respond around the clock to make the scene safe and get your life moving again.",
    worry:
      "A limb is through the roof, a trunk is across the drive, lines are tangled, and you have no idea who to call at 11pm.",
    includes: [
      "24/7 emergency response across our service area",
      "Safe removal of trees on homes, vehicles and structures",
      "Road and driveway clearing",
      "Coordination and documentation for insurance claims",
      "Hazard assessment of what's still standing",
    ],
    outcome:
      "The danger is handled by people who do this for a living, the mess is cleared, and you have what you need for your insurance company.",
    icon: "emergency",
    image: "emergency-1.jpg",
  },
  {
    slug: "tree-risk-assessment",
    name: "Tree Risk Assessment",
    short: "Risk Assessment",
    promise: "Know exactly which trees are safe, before a storm tells you.",
    intro:
      "Most tree failures give warning signs months in advance. A formal risk assessment by a certified arborist finds those signs while you still have options. We inspect the trees you're worried about, rate the real level of risk, and give you a clear, written plan, so you can act on facts instead of fear.",
    worry:
      "You have big, old trees near the house and you genuinely don't know if they're a treasure or a threat.",
    includes: [
      "Systematic inspection by an ISA Certified Arborist",
      "Evaluation of structure, decay, lean, soil and targets",
      "A written report with a clear risk rating per tree",
      "Prioritized recommendations, what to do and when",
      "Honest guidance: many trees simply pass",
    ],
    outcome:
      "You finally know where you stand. The trees that are fine, you keep enjoying. The ones that aren't, you handle on your schedule, not the storm's.",
    icon: "assessment",
    image: "assessment-1.jpg",
  },
];

export type ServiceArea = {
  slug: string;
  city: string;
  county: string;
  blurb: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "la-crosse",
    city: "La Crosse",
    county: "La Crosse County",
    blurb:
      "From the river bluffs to established neighborhoods full of mature oaks and maples, La Crosse homeowners trust us to keep their trees safe and beautiful.",
  },
  {
    slug: "viroqua",
    city: "Viroqua",
    county: "Vernon County",
    blurb:
      "Our home base. We know Viroqua's trees, soils and storms because we live and work here every day.",
  },
  {
    slug: "onalaska",
    city: "Onalaska",
    county: "La Crosse County",
    blurb:
      "Lakeside lots and wooded yards in Onalaska get the same certified care, careful work and a spotless cleanup.",
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
      "Sparta's mix of town lots and country property gets dependable removals, pruning and storm response.",
  },
];

/**
 * Testimonials. NOTE FOR LAUNCH: replace these with verified, attributed
 * reviews pulled from Google Business Profile / Facebook before going live.
 */
export const testimonials = [
  {
    quote:
      "They took down a huge silver maple that was leaning over our house. Professional from the first phone call, and you'd never know a crew was here, the yard was spotless.",
    name: "Homeowner",
    location: "La Crosse, WI",
  },
  {
    quote:
      "Honest is the word. Another company wanted to remove our oak; Tree Loving Care said it just needed pruning and cabling. Saved the tree and saved us money.",
    name: "Homeowner",
    location: "Viroqua, WI",
  },
  {
    quote:
      "A storm dropped a tree across our driveway at night. They answered, showed up, and had us cleared by morning. Calm, kind, and completely capable.",
    name: "Homeowner",
    location: "Westby, WI",
  },
];

export const faqs = [
  {
    q: "Do you really give free estimates?",
    a: "Yes. A certified arborist will come to your property, look at the trees you're concerned about, and give you an honest quote, at no cost and with no obligation.",
  },
  {
    q: "Are you licensed and insured?",
    a: "We are fully insured and registered. Tree work carries real risk, and you should never let an uninsured crew on your property. We'll gladly provide proof of insurance.",
  },
  {
    q: "What does \"ISA Certified Arborist\" actually mean?",
    a: "It means our work is led by a professional who has been tested and certified by the International Society of Arboriculture. Your trees are evaluated by someone trained in tree biology and safety, not just someone with a chainsaw.",
  },
  {
    q: "Do you handle emergency tree removal?",
    a: "Yes, 24/7. If a tree is on your home, vehicle, or blocking access, call us any time. We'll make the scene safe and help document everything for your insurance.",
  },
  {
    q: "Will you clean up afterward?",
    a: "Always. A complete cleanup is part of every job. Limbs, debris and sawdust are hauled away, and we leave your yard tidy.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve La Crosse, Viroqua, Onalaska, West Salem, Holmen, Westby, Sparta and the surrounding communities in western Wisconsin.",
  },
];

export const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

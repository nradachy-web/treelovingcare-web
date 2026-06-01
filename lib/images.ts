/**
 * Image registry. Paths point into /public/photos.
 * Real client photography, organized by the image pipeline (manifest.json).
 */

export const img = {
  // real client photography, drone view of mature canopy over Driftless-region rooftops
  hero: "/photos/hero/hero-drone-rooftop-canopy.jpg",
  heroAlt:
    "Mature tree canopy over homes in the Driftless Region of western Wisconsin",

  guide: "/photos/about/owner-portrait-red-wall.jpg",
  guideAlt: "A Tree Loving Care arborist on a job site with a clipboard",

  problem: "/photos/gallery/gallery-32.jpg",
  problemAlt: "A large bare tree leaning over a Wisconsin home",

  about: "/photos/about/team-four-crew-summer.jpg",
  aboutAlt: "The Tree Loving Care crew together on a summer job site",

  galleryPreview: [
    "/photos/gallery/gallery-15.jpg",
    "/photos/gallery/gallery-08.jpg",
    "/photos/gallery/gallery-32.jpg",
    "/photos/gallery/gallery-34.jpg",
    "/photos/gallery/gallery-21.jpg",
    "/photos/gallery/gallery-27.jpg",
  ],
} as const;

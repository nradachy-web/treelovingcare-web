/**
 * Image registry. Paths point into /public/photos.
 * Real client photography, organized by the image pipeline (manifest.json).
 */

export const img = {
  // hero, swapped to the AI-generated hero once produced; falls back to real photo
  hero: "/photos/hero/hero-home.jpg",
  heroAlt:
    "A grand, healthy shade tree beside a welcoming Wisconsin home at golden hour",

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

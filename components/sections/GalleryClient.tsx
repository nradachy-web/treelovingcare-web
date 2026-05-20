"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Close, ArrowRight } from "@/components/ui/Icons";
import { galleryImages } from "@/lib/gallery";

export function GalleryClient() {
  const [active, setActive] = useState<number | null>(null);
  const count = galleryImages.length;

  const close = useCallback(() => setActive(null), []);
  const go = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + count) % count)),
    [count],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, go]);

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
        {galleryImages.map((image, i) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              delay: (i % 8) * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative block w-full overflow-hidden rounded-2xl bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={image.tall ? 1067 : 600}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="h-auto w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 bg-canopy/0 transition-colors duration-300 group-hover:bg-canopy/15" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-canopy/95 p-4 backdrop-blur-sm sm:p-8"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-8 sm:top-8"
            >
              <Close className="size-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Previous"
              className="absolute left-3 grid size-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-8"
            >
              <ArrowRight className="size-6 rotate-180" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Next"
              className="absolute right-3 grid size-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-8"
            >
              <ArrowRight className="size-6" />
            </button>

            <motion.figure
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex max-h-full max-w-4xl flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={galleryImages[active].src}
                  alt={galleryImages[active].alt}
                  width={1600}
                  height={1067}
                  className="h-auto max-h-[78svh] w-auto object-contain"
                />
              </div>
              <figcaption className="max-w-xl text-center text-sm text-cream/70">
                {galleryImages[active].alt}
                <span className="ml-2 text-cream/40">
                  {active + 1} / {count}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

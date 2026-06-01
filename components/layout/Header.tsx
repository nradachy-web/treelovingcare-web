"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Menu, Close, PhoneIcon } from "@/components/ui/Icons";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        solid
          ? "bg-paper/95 backdrop-blur-md shadow-[0_1px_0_rgba(60,51,39,0.08),0_8px_30px_-18px_rgba(22,50,27,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Logo tone={solid ? "dark" : "light"} />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors duration-300 ${
                  solid
                    ? active
                      ? "text-forest"
                      : "text-bark hover:text-forest"
                    : active
                      ? "text-leaf-bright"
                      : "text-cream/85 hover:text-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={site.phoneHref}
            className={`hidden items-center gap-2 text-[0.95rem] font-semibold transition-colors md:inline-flex ${
              solid ? "text-canopy hover:text-forest" : "text-cream hover:text-leaf-bright"
            }`}
          >
            <PhoneIcon className="size-[1.05rem]" />
            {site.phone}
          </a>
          <span className="hidden sm:inline-flex">
            <ButtonLink href="/contact" variant="primary">
              Request an Assessment
            </ButtonLink>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`grid size-11 place-items-center rounded-full transition-colors lg:hidden ${
              solid
                ? "text-canopy hover:bg-canopy/[0.06]"
                : "text-cream hover:bg-cream/10"
            }`}
          >
            {open ? <Close className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-bark/10 bg-paper lg:hidden"
          >
            <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-5 sm:px-8">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3.5 text-lg font-medium text-bark hover:bg-cream"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-3 border-t border-bark/10 pt-5">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 px-4 text-lg font-semibold text-canopy"
                >
                  <PhoneIcon className="size-5" />
                  {site.phone}
                </a>
                <ButtonLink href="/contact" variant="primary" size="lg" withArrow>
                  Request an Assessment
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

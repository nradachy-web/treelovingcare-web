import { PhoneIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";

/**
 * Phone-width call bar for ad landing pages. Pure markup: the tel: link is
 * swapped by CallRail and tracked by CtaEvents like every other phone link.
 */
export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-canopy/10 bg-paper/95 px-4 pt-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={site.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-leaf px-3 py-3.5 text-[0.95rem] font-semibold text-canopy shadow-[0_8px_24px_-8px_rgba(121,179,90,0.7)] active:scale-[0.98]"
        >
          <PhoneIcon className="size-5 max-[359px]:hidden" />
          {site.phone}
        </a>
        <a
          href="#request"
          className="flex flex-none items-center justify-center whitespace-nowrap rounded-full border border-canopy/25 px-4 py-3.5 text-[0.95rem] font-semibold text-canopy active:scale-[0.98]"
        >
          Request a visit
        </a>
      </div>
    </div>
  );
}

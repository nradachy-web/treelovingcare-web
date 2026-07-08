"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sitewide CTA tracking for GA4 (G-GZZGKFVT07). One capture-phase listener:
 *  - phone_call_click: any tap on a tel: link (header, footer, buttons, body copy)
 *  - cta_click: any click on a link into /contact (the Request an Assessment CTAs)
 * generate_lead fires separately in EstimateForm on successful submit.
 * phone_call_click + generate_lead are the two meant for Google Ads import.
 */
export function CtaEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.("a");
      if (!a || typeof window.gtag !== "function") return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        window.gtag("event", "phone_call_click", {
          link_text: (a.textContent || "").trim().slice(0, 60),
          page_path: window.location.pathname,
        });
      } else if (/^\/contact(\/|#|\?|$)/.test(href)) {
        window.gtag("event", "cta_click", {
          cta: "request_an_assessment",
          link_text: (a.textContent || "").trim().slice(0, 60),
          page_path: window.location.pathname,
        });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}

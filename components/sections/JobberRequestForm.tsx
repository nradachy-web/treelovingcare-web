"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

// Emlyn's Jobber work-request embed (emailed 2026-07-08). Requests land
// directly in his Jobber pipeline instead of the email inbox.
const CLIENTHUB_ID = "f44b3b00-426e-4c57-bcbe-5d524a531928-472898";
const FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/f44b3b00-426e-4c57-bcbe-5d524a531928/public/work_request/embedded_work_request_form?form_id=472898";
const EMBED_CSS =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
const EMBED_JS =
  "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";

function hasGtagConfig(): boolean {
  const w = window as unknown as {
    gtag?: unknown;
    dataLayer?: ArrayLike<unknown>[];
  };
  if (typeof w.gtag !== "function" || !w.dataLayer) return false;
  return Array.from(w.dataLayer).some(
    (entry) => (entry as ArrayLike<unknown>)[0] === "config",
  );
}

export function JobberRequestForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("iframe")) return;

    if (!document.querySelector(`link[href="${EMBED_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = EMBED_CSS;
      link.media = "screen";
      document.head.appendChild(link);
    }

    let script: HTMLScriptElement | null = null;
    let waited = 0;
    let timer: number | undefined;

    const inject = () => {
      script = document.createElement("script");
      script.src = EMBED_JS;
      script.setAttribute("clienthub_id", CLIENTHUB_ID);
      script.setAttribute("form_url", FORM_URL);
      document.body.appendChild(script);
    };

    // The snippet reads window.dataLayer when it runs to pass the GA4
    // client_id/session_id into the iframe, unifying attribution. Give the
    // gtag config up to 3s to appear before injecting regardless.
    const waitForGtag = () => {
      if (hasGtagConfig() || waited >= 3000) {
        inject();
        return;
      }
      waited += 50;
      timer = window.setTimeout(waitForGtag, 50);
    };
    waitForGtag();

    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      script?.remove();
    };
  }, []);

  return (
    <div className="rounded-3xl border border-bark/10 bg-cream p-6 shadow-soft sm:p-8">
      <h2 className="font-display text-2xl font-semibold text-canopy">
        Request an assessment
      </h2>
      <p className="mt-1.5 text-sm text-stone">
        Tell us what&apos;s going on. Your request goes straight to our
        scheduling system, and we&apos;ll follow up to arrange a visit, no
        pressure, no obligation.
      </p>
      <div ref={containerRef} className="mt-6 min-h-[480px]">
        <div id={CLIENTHUB_ID} />
        <noscript>
          <p>
            Our online form needs JavaScript.{" "}
            <a href={FORM_URL}>Open the request form directly</a> or call us at{" "}
            <a href={site.phoneHref}>{site.phone}</a>.
          </p>
        </noscript>
      </div>
    </div>
  );
}

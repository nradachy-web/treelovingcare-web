"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Check, PhoneIcon } from "@/components/ui/Icons";
import { services, site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  ...services.map((s) => s.name),
  "Not sure / general inquiry",
];

const fieldClass =
  "w-full rounded-xl border border-bark/15 bg-paper px-4 py-3 text-bark placeholder:text-stone/60 transition-colors focus:border-moss focus:outline-2 focus:outline-offset-1 focus:outline-moss/40";

const labelClass = "mb-1.5 block text-sm font-semibold text-canopy";

export function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const callFallback = `Please call us at ${site.phone} and we'll take care of you right away.`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot: bail silently for bots
    if (String(fd.get("botcheck") ?? "")) {
      setStatus("success");
      form.reset();
      return;
    }

    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const location = String(fd.get("location") ?? "").trim();
    const service = String(fd.get("service") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const emergency = fd.get("emergency") === "on";

    if (name.length < 2) {
      setStatus("error");
      setError("Please enter your name.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setStatus("error");
      setError("Please enter a valid phone number.");
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setError(`Our online form isn't connected yet. ${callFallback}`);
      return;
    }

    const detail = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email && `Email: ${email}`,
      location && `Service address / town: ${location}`,
      `Service needed: ${service || "Not specified"}`,
      `Emergency: ${emergency ? "YES, needs urgent response" : "No"}`,
      "",
      "Message:",
      message || "(none provided)",
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: emergency
            ? `EMERGENCY assessment request: ${name}`
            : `New assessment request: ${name}`,
          from_name: `${site.name} Website`,
          name,
          email: email || site.email,
          phone,
          replyto: email || undefined,
          message: detail,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("success");
        form.reset();
        // GA4 lead event; window.gtag is loaded in the root layout. This is the
        // event Google Ads imports as a form conversion.
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
          "event",
          "generate_lead",
          { form: "request_an_assessment" }
        );
        return;
      }
      setStatus("error");
      setError(`Something went wrong sending your request. ${callFallback}`);
    } catch {
      setStatus("error");
      setError(`We couldn't send your request. ${callFallback}`);
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-3xl border border-bark/10 bg-paper p-10 text-center"
      >
        <span className="grid size-16 place-items-center rounded-full bg-leaf text-canopy">
          <Check className="size-9" strokeWidth={2.4} />
        </span>
        <h3 className="font-display mt-5 text-2xl font-semibold text-canopy">
          Thank you, your request is in.
        </h3>
        <p className="mt-2 max-w-sm text-stone">
          A member of our team will reach out shortly to schedule your
          assessment. If it's urgent, call us any time at{" "}
          <a href={site.phoneHref} className="font-semibold text-forest">
            {site.phone}
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-bark/10 bg-cream p-6 shadow-soft sm:p-8"
    >
      <h2 className="font-display text-2xl font-semibold text-canopy">
        Request an assessment
      </h2>
      <p className="mt-1.5 text-sm text-stone">
        Tell us what's going on. We'll follow up to schedule a visit, no
        pressure, no obligation.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-clay">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-clay">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
            placeholder="(608) 555-0123"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="location" className={labelClass}>
            Town or address
          </label>
          <input
            id="location"
            name="location"
            autoComplete="address-level2"
            className={fieldClass}
            placeholder="e.g. Viroqua, WI"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="service" className={labelClass}>
          What do you need?
        </label>
        <select id="service" name="service" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a service…
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelClass}>
          Tell us about your trees
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="A big maple is leaning toward the house and I'd like it looked at…"
        />
      </div>

      <label className="mt-4 flex items-start gap-3 rounded-xl bg-paper px-4 py-3.5">
        <input
          type="checkbox"
          name="emergency"
          className="mt-0.5 size-5 shrink-0 accent-clay"
        />
        <span className="text-sm leading-relaxed text-bark">
          This is an <strong>emergency</strong>, a tree is on a structure,
          vehicle, or blocking access.
        </span>
      </label>

      {/* honeypot */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      {status === "error" && (
        <p className="mt-4 rounded-xl bg-clay/10 px-4 py-3 text-sm text-clay">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          withArrow
          disabled={status === "submitting"}
          className="disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Send my request"}
        </Button>
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-forest"
        >
          <PhoneIcon className="size-4" />
          or call {site.phone}
        </a>
      </div>
      <p className="mt-3 text-xs text-stone">
        We'll only use your details to contact you about your assessment.
      </p>
    </form>
  );
}

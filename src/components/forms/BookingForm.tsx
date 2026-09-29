"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { IndiaLocationInput } from "@/components/forms/IndiaLocationInput";
import { whatsappHref } from "@/content/site";
import { cn } from "@/lib/utils";

const eventTypes = [
  "Corporate Event",
  "Award Ceremony",
  "Wedding",
  "Brand / Product Launch",
  "College / Institutional",
  "Live Show",
  "Other",
];

const languages = ["English", "Hindi", "English + Hindi"] as const;

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  audience: string;
  hostingLanguage: string;
  message: string;
};

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  eventLocation: "",
  audience: "",
  hostingLanguage: "English + Hindi",
  message: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildWhatsAppMessage(form: FormState) {
  const lines = [
    "Hi Amit, I’d like to book you as a stage host.",
    "",
    `Name: ${form.name.trim()}`,
    `Company / Organization: ${form.company.trim() || "—"}`,
    `Email: ${form.email.trim()}`,
    `Phone: ${form.phone.trim()}`,
    `Event type: ${form.eventType}`,
    `Event date: ${form.eventDate.trim() || "—"}`,
    `Event location: ${form.eventLocation.trim() || "—"}`,
    `Expected audience: ${form.audience.trim() || "—"}`,
    `Hosting language: ${form.hostingLanguage}`,
    "",
    "Message:",
    form.message.trim(),
  ];
  return lines.join("\n");
}

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const eventType = form.eventType.trim();
    const message = form.message.trim();

    if (!name || !email || !phone || !eventType || !message) {
      setStatus("error");
      setError("Please complete all required fields.");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setError("Enter a valid email address.");
      return;
    }

    const href = whatsappHref(buildWhatsAppMessage(form));
    if (!href) {
      setStatus("error");
      setError("WhatsApp is not configured. Please call or email instead.");
      return;
    }

    window.open(href, "_blank", "noopener,noreferrer");
    setStatus("success");
  }

  const field =
    "w-full rounded-[var(--radius-md)] border border-line-strong bg-[#FFFCFA] px-3 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-bronze";

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={field}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>
        <Field label="Company / Organization" htmlFor="company">
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={field}
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>
        <Field label="Phone" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={field}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Event Type" htmlFor="eventType" required>
          <select
            id="eventType"
            name="eventType"
            required
            className={field}
            value={form.eventType}
            onChange={(e) => update("eventType", e.target.value)}
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Event Date" htmlFor="eventDate">
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            className={field}
            value={form.eventDate}
            onChange={(e) => update("eventDate", e.target.value)}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Event Location" htmlFor="eventLocation">
          <IndiaLocationInput
            id="eventLocation"
            name="eventLocation"
            className={field}
            value={form.eventLocation}
            onChange={(value) => update("eventLocation", value)}
          />
        </Field>
        <Field label="Expected Audience" htmlFor="audience">
          <input
            id="audience"
            name="audience"
            className={field}
            placeholder="Approximate size"
            value={form.audience}
            onChange={(e) => update("audience", e.target.value)}
          />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-ink">
          Hosting Language
        </legend>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <label
              key={lang}
              className={cn(
                "inline-flex min-h-11 cursor-pointer items-center rounded-[var(--radius-md)] border px-4 text-sm transition-colors",
                form.hostingLanguage === lang
                  ? "border-bronze bg-bronze/10 text-ink"
                  : "border-line-strong text-ink-soft hover:border-ink",
              )}
            >
              <input
                type="radio"
                name="hostingLanguage"
                value={lang}
                className="sr-only"
                checked={form.hostingLanguage === lang}
                onChange={() => update("hostingLanguage", lang)}
              />
              {lang}
            </label>
          ))}
        </div>
      </fieldset>

      <Field label="Message" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(field, "resize-y")}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />
      </Field>

      {status === "success" ? (
        <p
          className="rounded-[var(--radius-md)] border border-line bg-paper px-4 py-3 text-sm text-ink-soft"
          role="status"
        >
          WhatsApp opened with your enquiry. Send the message there to reach Amit
          directly.
        </p>
      ) : null}
      {status === "error" && error ? (
        <p
          className="rounded-[var(--radius-md)] border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-900"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg">
        Send Booking Enquiry
      </Button>
      <p className="text-xs text-muted">
        Submitting opens WhatsApp with your details prefilled for{" "}
        <span className="text-ink-soft">+91 82922 36990</span>.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
        {required ? <span className="text-bronze"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

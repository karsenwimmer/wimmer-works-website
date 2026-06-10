"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "Interior Painting",
  "Exterior Painting",
  "New Wood Staining",
  "Wood Refinishing",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

export function QuoteForm({ source }: { source?: string }) {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your request.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks. Your quote request has been sent.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {source ? <input type="hidden" name="source" value={source} /> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-charcoal">
            Project type
          </span>
          <select
            name="projectType"
            required
            defaultValue=""
            className="h-12 w-full rounded-none border border-black/15 bg-white px-4 text-base text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          >
            <option value="" disabled>
              Select a service
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Field label="City / area" name="city" autoComplete="address-level2" required />

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-charcoal">
          Project details
        </span>
        <textarea
          name="details"
          required
          rows={6}
          className="w-full resize-y rounded-none border border-black/15 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          placeholder="Tell us what needs painting or staining, approximate size, timing, and any prep concerns."
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 items-center justify-center border border-gold bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-ink hover:border-ink disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Request Quote"}
        </button>
        {message ? (
          <p
            role="status"
            className={`text-sm ${
              status === "success" ? "text-green-700" : "text-red-700"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-charcoal">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="h-12 w-full rounded-none border border-black/15 bg-white px-4 text-base text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
      />
    </label>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { primaryInstagram } from "@/lib/socials";

const reasons = [
  "Brand collab",
  "Show booking",
  "Press / interview",
  "Just saying hi",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const reason = String(data.get("reason") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const text = [
      `Hi Dilli Aalaa,`,
      ``,
      message,
      ``,
      `— ${name}`,
      email,
      reason,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2 text-sm">
          <span className="text-muted">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="w-full rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-accent"
          />
        </label>
        <label className="block space-y-2 text-sm">
          <span className="text-muted">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-accent"
          />
        </label>
      </div>
      <label className="block space-y-2 text-sm">
        <span className="text-muted">What is this about?</span>
        <select
          required
          name="reason"
          defaultValue=""
          className="w-full rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-accent"
        >
          <option value="" disabled>
            Pick one
          </option>
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </label>
      <label className="block space-y-2 text-sm">
        <span className="text-muted">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full resize-y rounded-xl border border-line bg-background px-4 py-3 text-foreground outline-none focus:border-accent"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
        >
          Copy message
        </button>
        <a
          href={primaryInstagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-6 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Open Instagram
        </a>
      </div>
      {status === "copied" ? (
        <p className="text-sm text-accent">
          Message copied. Paste it into an Instagram DM to send it.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-chili">
          Could not copy automatically. Open Instagram and send the note from
          there.
        </p>
      ) : null}
    </form>
  );
}

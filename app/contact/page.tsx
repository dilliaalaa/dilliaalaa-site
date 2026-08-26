import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SocialGrid } from "@/components/social-grid";
import { primaryInstagram } from "@/lib/socials";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Dilli Aalaa for brand collabs, show bookings, and press. Fastest reply is Instagram.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="font-hindi text-lg font-semibold text-accent">संपर्क</p>
      <h1 className="mt-2 font-display text-[clamp(3.5rem,12vw,7rem)] leading-[0.85] tracking-wide">
        CONTACT
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
        Collabs, bookings, and press — send a note and drop it in a DM. The
        fastest way to reach Jaspreet is{" "}
        <a
          href={primaryInstagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          Instagram
        </a>
        .
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-line bg-card p-6 sm:p-8">
          <h2 className="font-display text-3xl tracking-wide">Write a note</h2>
          <p className="mt-2 mb-8 text-sm leading-6 text-muted">
            This copies your message so you can paste it into Instagram. No
            spam, no inbox we do not check.
          </p>
          <ContactForm />
        </div>
        <div>
          <h2 className="font-display text-3xl tracking-wide">All channels</h2>
          <p className="mt-2 mb-6 text-sm leading-6 text-muted">
            Same creator, every platform he is on.
          </p>
          <SocialGrid compact />
        </div>
      </div>
    </div>
  );
}

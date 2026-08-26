import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Dilli Aalaa at work@dilliaalaa.com for collabs, bookings, and press.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <p className="font-hindi text-lg font-semibold text-accent">संपर्क</p>
      <h1 className="mt-2 font-display text-[clamp(3.5rem,12vw,7rem)] leading-[0.85] tracking-wide">
        CONTACT
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
        For collabs, bookings, and press.
      </p>
      <a
        href="mailto:work@dilliaalaa.com"
        className="mt-10 inline-block font-display text-3xl tracking-wide text-accent underline decoration-accent/40 underline-offset-8 transition-colors hover:decoration-accent sm:text-5xl"
      >
        work@dilliaalaa.com
      </a>
    </div>
  );
}

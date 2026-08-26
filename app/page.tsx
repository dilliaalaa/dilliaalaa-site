import Image from "next/image";
import Link from "next/link";
import { SocialGrid } from "@/components/social-grid";
import { primaryInstagram, youtubeChannel } from "@/lib/socials";

export default function Home() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-5 pt-10 pb-16 sm:px-8 sm:pt-14 sm:pb-20">
        <p className="font-hindi text-xl font-semibold text-accent sm:text-2xl">
          दिल्ली आला
        </p>
        <h1 className="mt-2 font-display text-[clamp(4.75rem,18vw,11.5rem)] leading-[0.78] tracking-wide text-foreground">
          DILLI
          <br />
          AALAA
        </h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-muted">
              Jaspreet Singh · Comedian · Content creator
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-foreground/90 sm:text-xl">
              A comedian who talks the way Delhi talks. Observational, a little
              unhinged, and usually about something you were already thinking.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={primaryInstagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
            >
              Watch on Instagram
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Book / collab
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-card/40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              01
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-wide">
              The bit
            </h2>
            <p className="mt-3 leading-7 text-muted">
              Metro chaos, exam season, student life, and the odd truth bomb.
              He talks like a friend ranting in a room — then the punchline
              lands.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              02
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-wide">
              The city
            </h2>
            <p className="mt-3 leading-7 text-muted">
              Straight, sarcastic, very Delhi. The jokes travel because the
              situations do — from Shahdara to the group chat.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              03
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-wide">
              The work
            </h2>
            <p className="mt-3 leading-7 text-muted">
              Reels, long-form, and writing across Instagram, YouTube, and
              wherever the next joke wants to live.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              YouTube
            </p>
            <h2 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl">
              The channel
            </h2>
          </div>
          <a
            href={youtubeChannel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:underline"
          >
            youtube.com/@dilliaalaa ↗
          </a>
        </div>
        <a
          href={youtubeChannel.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl border border-line transition-opacity hover:opacity-90"
        >
          <Image
            src="/banner-wide.jpg"
            alt="Dilli Aalaa YouTube banner"
            width={2560}
            height={423}
            className="h-auto w-full"
          />
        </a>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              Follow
            </p>
            <h2 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl">
              Catch him here
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Same person, a few stages. Main Instagram first. Unlimited, YouTube,
            X, Facebook, and Snapchat if you want the rest.
          </p>
        </div>
        <SocialGrid />
      </section>

      <section className="bg-accent text-accent-ink">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="font-hindi text-lg font-semibold">बात करो</p>
            <h2 className="font-display text-4xl tracking-wide sm:text-5xl">
              Brands, shows, press
            </h2>
          </div>
          <Link
            href="/contact"
            className="rounded-full bg-accent-ink px-6 py-3 text-center text-sm font-semibold text-accent transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}

import { SocialIcon } from "@/components/social-icons";
import { socials } from "@/lib/socials";

export function SocialGrid({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <ul
      className={
        compact
          ? "grid gap-3"
          : "grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {socials.map((social) => (
        <li key={social.id}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-card p-5 transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
          >
            <SocialIcon
              id={social.id}
              className="h-8 w-8 shrink-0 text-accent transition-colors group-hover:text-accent-ink"
            />
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.18em] text-muted transition-colors group-hover:text-accent-ink/70">
                {social.name} · {social.note}
              </p>
              <p className="font-display text-xl tracking-wide sm:text-2xl">
                {social.handle}
              </p>
            </div>
            <span
              aria-hidden
              className="ml-auto text-xl text-muted transition-colors group-hover:text-accent-ink"
            >
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

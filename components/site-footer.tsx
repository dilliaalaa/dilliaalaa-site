import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { socials } from "@/lib/socials";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <BrandLogo showWordmark={false} />
          <div>
            <p className="font-display text-2xl tracking-wide text-foreground">
              DILLI AALAA
            </p>
            <p className="mt-0.5 text-sm text-muted">
              Jaspreet Singh · Comedy from Delhi
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              {social.note === "Unlimited" ? "Unlimited" : social.name}
            </a>
          ))}
          <Link href="/contact" className="text-muted hover:text-accent">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

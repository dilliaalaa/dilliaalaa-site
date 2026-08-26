import Image from "next/image";
import Link from "next/link";

export function BrandLogo({
  showWordmark = true,
  priority = false,
}: {
  showWordmark?: boolean;
  priority?: boolean;
}) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.jpg"
        alt="Dilli Aalaa"
        width={44}
        height={44}
        priority={priority}
        className="h-11 w-11 rounded-full object-cover ring-2 ring-accent"
      />
      {showWordmark ? (
        <span className="hidden leading-none sm:flex sm:flex-col">
          <span className="font-hindi text-sm font-semibold text-accent">
            दिल्ली आला
          </span>
          <span className="font-display text-2xl tracking-wide text-foreground">
            DILLI AALAA
          </span>
        </span>
      ) : null}
    </Link>
  );
}

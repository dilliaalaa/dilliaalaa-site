export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect
        x="2.5"
        y="6"
        width="19"
        height="12"
        rx="3.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M11 10.2 15 12l-4 1.8v-3.6Z" fill="currentColor" />
    </svg>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.7 4h2.8l-6.1 7 7.2 9h-5.6l-4.4-5.8L6 20H3.2l6.5-7.5L2.8 4h5.8l4 5.3L16.7 4Zm-1 14.4h1.5L8.4 5.5H6.7l9 12.9Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14.2 21v-7.4h2.5l.4-2.9h-2.9V8.8c0-.8.2-1.4 1.4-1.4h1.6V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2h-2.6v2.9H11V21h3.2Z" />
    </svg>
  );
}

export function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 4c2.8 0 4.8 2.1 4.8 5.1 0 1.2.1 1.9.6 2.3.3.3.7.4 1.1.6.3.1.6.3.6.6 0 .4-.5.7-1.1.9-.2.1-.3.2-.3.4 0 .5.6 1 1.4 1.4.3.1.4.3.4.5 0 .5-.7.7-1.4.8-.2 0-.4.1-.4.3 0 .6.6 1.4 1.5 2-.5.3-1.4.4-2.1.2-.5-.1-.8 0-1.1.3-1 1.1-2.3 1.6-4 1.6s-3-.5-4-1.6c-.3-.3-.6-.4-1.1-.3-.7.2-1.6 0-2.1-.2.9-.6 1.5-1.4 1.5-2 0-.2-.2-.3-.4-.3-.7-.1-1.4-.3-1.4-.8 0-.2.1-.4.4-.5.8-.4 1.4-.9 1.4-1.4 0-.2-.1-.3-.3-.4-.6-.2-1.1-.5-1.1-.9 0-.3.3-.5.6-.6.4-.2.8-.3 1.1-.6.5-.4.6-1.1.6-2.3C7.2 6.1 9.2 4 12 4Z" />
    </svg>
  );
}

const icons = {
  instagram: InstagramIcon,
  "instagram-2": InstagramIcon,
  youtube: YoutubeIcon,
  x: XIcon,
  facebook: FacebookIcon,
  snapchat: SnapchatIcon,
};

export function SocialIcon({
  id,
  className,
}: {
  id: keyof typeof icons;
  className?: string;
}) {
  const Icon = icons[id];
  return <Icon className={className} />;
}

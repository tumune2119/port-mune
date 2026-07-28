// SocialLinks renders the external profile buttons used throughout the portfolio.
// It maps over the shared social link data and chooses the correct icon for each
// platform so the page can show a consistent set of links.
import { socialLinks } from "@/data/socialLinks";

function getIcon(label: string) {
  switch (label) {
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
          <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.5 9.5h2.88V18H5.5zM10.5 9.5h2.76v1.15h.04c.38-.72 1.32-1.48 2.72-1.48 2.91 0 3.45 1.91 3.45 4.4V18h-2.88v-7.6c0-1.81-.03-4.14-2.52-4.14-2.53 0-2.92 1.97-2.92 4.01V18H10.5z" />
        </svg>
      );
    case "Dribbble":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 4.5c2.1 2.6 3.4 5.2 4.1 8.2" />
          <path d="M4.8 10c3.2-.2 6.5-.1 9.9 1.1" />
          <path d="M5.5 15.8c3.3-1.3 6.8-1.8 10.8-1.2" />
        </svg>
      );
    case "Behance":
      return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 8.5h3.5a2.5 2.5 0 1 1 0 5H8z" />
          <path d="M8 13.5h4.2a2.5 2.5 0 1 1 0 5H8z" />
          <path d="M15.2 11.5h4.8" />
          <path d="M16 8.5h4" />
        </svg>
      );
    default:
      return null;
  }
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={["flex flex-wrap gap-2", className].filter(Boolean).join(" ")}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/70 text-[color:var(--text-secondary)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
        >
          {getIcon(link.label)}
        </a>
      ))}
    </div>
  );
}

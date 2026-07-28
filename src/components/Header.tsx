import { ThemeMode } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-[60] px-3 pt-2 sm:px-4 sm:pt-3 lg:px-6 lg:pt-4">
      <div className="mx-auto flex w-full max-w-[72rem] items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-colors sm:px-6 dark:border-white/10 dark:bg-slate-900/30">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--surface-muted)] text-sm font-semibold tracking-[0.35em] text-[color:var(--accent)]">
            M
          </div>
          <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">
            MUNE
          </span>
        </a>

        <nav className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--text-secondary)] sm:gap-4" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-[color:var(--surface-muted)] hover:text-[color:var(--accent)]"
            >
              {item.label}
            </a>
          ))}

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <a
            href="/cv.pdf"
            download="cv.pdf"
            className="rounded-full bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(163,230,53,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] dark:text-slate-950"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}

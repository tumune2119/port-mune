import Link from "next/link";
import { ThemeMode } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="mb-10 flex flex-wrap items-center justify-between rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface)]/80 px-4 py-3 shadow-sm backdrop-blur transition-colors sm:px-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-600 dark:text-lime-400">
          Port-Mune
        </p>
      </div>
      <nav className="flex items-center gap-4 text-sm text-[color:var(--text-secondary)]">
        <Link href="/work" className="transition hover:text-[color:var(--accent)]">
          Work
        </Link>
        <Link href="/case-studies" className="transition hover:text-[color:var(--accent)]">
          Case Studies
        </Link>
        <Link href="/contact" className="transition hover:text-[color:var(--accent)]">
          Contact
        </Link>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </nav>
    </header>
  );
}

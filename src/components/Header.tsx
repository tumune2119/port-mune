"use client";

// The header component renders the sticky top navigation for the portfolio.
// It shows the brand mark, links to key sections, a theme toggle, and a mobile
// menu that opens and closes based on local component state.
import { useState } from "react";
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
  // Track whether the mobile navigation menu is currently open.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] px-3 pt-2 sm:px-4 sm:pt-3 lg:px-6 lg:pt-4">
      <div className="mx-auto w-full max-w-[72rem] rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl transition-colors sm:px-6 dark:border-white/10 dark:bg-slate-900/30">
        <div className="flex items-center justify-between gap-3">
          {/* Clicking the brand mark closes the mobile menu and jumps back to the home section. */}
          <a href="#home" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--surface-muted)] text-sm font-semibold tracking-[0.35em] text-[color:var(--accent)]">
              M
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[color:var(--accent)]">
              MUNE
            </span>
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Show the desktop navigation links only on larger screens. */}
            <div className="hidden items-center gap-2 text-sm text-[color:var(--text-secondary)] sm:flex sm:gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-[4px] px-3 py-1.5 transition hover:bg-[color:var(--surface-muted)] hover:text-[color:var(--accent)]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Render the theme toggle so the user can switch between light and dark modes. */}
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            {/* Provide a downloadable CV link for desktop users. */}
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="hidden rounded-[4px] bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(163,230,53,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] dark:text-slate-950 sm:inline-flex"
            >
              Download CV
            </a>

            {/* Show the hamburger button only on small screens to open the mobile menu. */}
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] text-[color:var(--text-secondary)] sm:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Render the mobile navigation only when the menu has been opened. */}
        {isOpen ? (
          <nav className="mt-3 flex flex-col gap-2 border-t border-[color:var(--border-color)] pt-3 text-sm text-[color:var(--text-secondary)] sm:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[4px] px-3 py-2 transition hover:bg-[color:var(--surface-muted)] hover:text-[color:var(--accent)]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/cv.pdf"
              download="cv.pdf"
              onClick={() => setIsOpen(false)}
              className="mt-1 rounded-[4px] bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(163,230,53,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] dark:text-slate-950"
            >
              Download CV
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

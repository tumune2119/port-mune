"use client";

import { ThemeMode } from "@/data/portfolio";

type ThemeToggleProps = {
  theme: ThemeMode;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={theme === "dark"}
      className={`relative inline-flex h-8 w-16 items-center rounded-full border px-1 transition-all duration-500 ${
        theme === "dark"
          ? "border-slate-700 bg-slate-800 shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]"
          : "border-slate-300 bg-slate-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]"
      }`}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 text-[10px] font-semibold text-slate-950 shadow-sm transition-transform duration-500 ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}

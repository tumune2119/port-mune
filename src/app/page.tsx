"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { CaseStudies } from "@/components/CaseStudies";
import { ContactSection } from "@/components/ContactSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ThemeMode } from "@/data/portfolio";

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as ThemeMode | null;
    const initialTheme = storedTheme ?? "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);

    document.documentElement.style.setProperty("--page-bg", theme === "dark" ? "#020617" : "#f8ffe8");
    document.documentElement.style.setProperty("--page-bg-accent", theme === "dark" ? "#111827" : "#f2fce8");
    document.documentElement.style.setProperty("--surface", theme === "dark" ? "#111827" : "#ffffff");
    document.documentElement.style.setProperty("--surface-muted", theme === "dark" ? "#1f2937" : "#f7fee7");
    document.documentElement.style.setProperty("--surface-strong", theme === "dark" ? "#0f172a" : "#ffffff");
    document.documentElement.style.setProperty("--text-primary", theme === "dark" ? "#f8fafc" : "#0f172a");
    document.documentElement.style.setProperty("--text-secondary", theme === "dark" ? "#cbd5e1" : "#475569");
    document.documentElement.style.setProperty("--border-color", theme === "dark" ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.08)");
    document.documentElement.style.setProperty("--accent", "#a3e635");
    document.documentElement.style.setProperty("--accent-strong", "#84cc16");
  }, [theme]);

  const toggleTheme = () => {
    setIsWiping(true);
    setTheme((current) => (current === "dark" ? "light" : "dark"));
    window.setTimeout(() => setIsWiping(false), 700);
  };

  const pageStyle: CSSProperties = {
    background: `radial-gradient(circle_at_top_left, rgba(163,230,53,0.16), transparent 35%), linear-gradient(135deg, var(--page-bg) 0%, var(--page-bg-accent) 45%, var(--page-bg) 100%)`,
    color: "var(--text-primary)",
  };

  return (
    <div className="relative min-h-screen overflow-hidden transition-colors duration-700" style={pageStyle}>
      <div
        className="pointer-events-none fixed inset-0 z-40 transition-[clip-path,opacity] duration-700"
        style={{
          opacity: isWiping ? 1 : 0,
          clipPath: isWiping ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)",
          background:
            theme === "dark"
              ? "linear-gradient(135deg, rgba(163,230,53,0.38), rgba(2,6,23,0.95))"
              : "linear-gradient(135deg, rgba(163,230,53,0.22), rgba(255,255,255,0.95))",
        }}
      />
      <main className="mx-auto flex max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <Hero />
        <FeaturedProjects />
        <CaseStudies />
        <ContactSection />
      </main>
    </div>
  );
}

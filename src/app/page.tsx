"use client";

// The home page is the main landing experience for the portfolio.
// It composes the header, hero section, project showcase, experience timeline,
// and contact area while also managing the light/dark theme state.
import { useEffect, useState, type CSSProperties } from "react";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeMode } from "@/data/portfolio";

export default function Home() {
  // Keep the current visual theme in state so the UI can react to user changes.
  const [theme, setTheme] = useState<ThemeMode>("dark");

  // Restore the saved theme from browser storage on the first render.
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as ThemeMode | null;
    const initialTheme = storedTheme ?? "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  // Apply the selected theme to the document and update the CSS variables used throughout the page.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);

    document.documentElement.style.setProperty("--page-bg", theme === "dark" ? "#01040d" : "#f4f8e6");
    document.documentElement.style.setProperty("--page-bg-accent", theme === "dark" ? "#0d1426" : "#edf6d8");
    document.documentElement.style.setProperty("--surface", theme === "dark" ? "#0d1426" : "#fdfef7");
    document.documentElement.style.setProperty("--surface-muted", theme === "dark" ? "#141d33" : "#f2f8df");
    document.documentElement.style.setProperty("--surface-strong", theme === "dark" ? "#111827" : "#fefdf8");
    document.documentElement.style.setProperty("--text-primary", theme === "dark" ? "#f8fafc" : "#0f172a");
    document.documentElement.style.setProperty("--text-secondary", theme === "dark" ? "#cbd5e1" : "#475569");
    document.documentElement.style.setProperty("--border-color", theme === "dark" ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.08)");
    document.documentElement.style.setProperty("--accent", theme === "dark" ? "#a3e635" : "#4d7c0f");
    document.documentElement.style.setProperty("--accent-strong", theme === "dark" ? "#84cc16" : "#3f6212");
  }, [theme]);

  // Toggle between light and dark mode when the user activates the theme switch.
  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  // Build the background styling for the page so the hero and sections feel immersive.
  const pageStyle: CSSProperties = {
    background: `radial-gradient(circle_at_top_left, rgba(163,230,53,0.16), transparent 35%), linear-gradient(135deg, var(--page-bg) 0%, var(--page-bg-accent) 45%, var(--page-bg) 100%)`,
    color: "var(--text-primary)",
  };

  return (
    <div className="relative min-h-screen overflow-hidden transition-colors duration-500" style={pageStyle}>
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pt-24 pb-8 sm:px-10 sm:pt-28 lg:px-16 lg:pt-30 lg:pb-12">
        {/* Render the sticky navigation and theme switch at the top of the page. */}
        <Header theme={theme} onToggleTheme={toggleTheme} />
        {/* Show the introductory hero section first to welcome visitors. */}
        <Hero />
        {/* Display the featured work cards and project details below the hero. */}
        <FeaturedProjects />
        {/* Show the professional journey in a timeline layout. */}
        <ExperienceTimeline />
        {/* Include the contact section so visitors can reach out. */}
        <ContactSection />

        {/* Add the footer with copyright information and social links. */}
        <footer className="mt-16 border-t border-[color:var(--border-color)] pt-6 text-sm text-[color:var(--text-secondary)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Tharindu Munasinghe. All rights reserved.</p>
            <SocialLinks />
          </div>
        </footer>
      </main>
    </div>
  );
}

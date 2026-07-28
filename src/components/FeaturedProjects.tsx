"use client";

// This component showcases featured projects and case studies in a visually rich layout.
// It renders cards for each project, and when a visitor selects one, it opens a
// modal with more detailed information such as outcomes, highlights, and tags.
import { useMemo, useState } from "react";
import { caseStudies, featuredProjects } from "@/data/portfolio";

const cardClassName = "rounded-2xl border border-white/20 bg-white/10 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/20";

type ModalItem = {
  title: string;
  category?: string;
  summary?: string;
  outcome?: string;
  details?: string[];
  highlights?: string[];
  tags?: string[];
  blurb?: string;
};

export function FeaturedProjects() {
  // Keep track of which project or case study is currently selected for the modal.
  const [activeItem, setActiveItem] = useState<ModalItem | null>(null);

  // Build the modal content only when an item is selected to avoid rendering empty UI.
  const modalContent = useMemo(() => {
    if (!activeItem) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm sm:items-center">
        {/* The modal overlay uses a centered panel with scrollable content for longer descriptions. */}
        <div className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-white/20 bg-[color:var(--surface)] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.45)] sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              {activeItem.category ? (
                <p className="text-sm font-medium text-[color:var(--accent)]">{activeItem.category}</p>
              ) : null}
              <h3 className="mt-2 text-2xl font-semibold text-[color:var(--text-primary)]">{activeItem.title}</h3>
            </div>
            {/* Allow the user to close the modal and return to the project grid. */}
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              aria-label="Close details"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] text-[color:var(--text-secondary)] transition hover:text-[color:var(--accent)]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
          </div>

          <p className="mt-5 text-sm leading-7 text-[color:var(--text-secondary)]">
            {activeItem.summary ?? activeItem.blurb}
          </p>

          {activeItem.outcome ? (
            <div className="mt-6 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">Outcome</p>
              <p className="mt-2 text-sm leading-7 text-[color:var(--text-primary)]">{activeItem.outcome}</p>
            </div>
          ) : null}

          {activeItem.highlights ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {activeItem.highlights.map((item) => (
                <span key={item} className="rounded-full border border-[color:var(--border-color)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">
                  {item}
                </span>
              ))}
            </div>
          ) : null}

          {activeItem.details ? (
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[color:var(--text-secondary)]">
              {activeItem.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {activeItem.tags ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {activeItem.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[color:var(--border-color)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }, [activeItem]);

  return (
    <section id="work" className="scroll-mt-28 mt-16 rounded-2xl border border-white/20 bg-white/10 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10 dark:border-white/10 dark:bg-slate-900/20">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--text-secondary)]">Work</p>
        <h2 className="mt-2 text-3xl font-semibold text-[color:var(--text-primary)]">
          A combined view of selected projects and the case studies that show how I think and build.
        </h2>
      </div>

      {/* Render the featured project cards first, using the data from the portfolio content file. */}
      <div className="mb-10 grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setActiveItem(project)}
            className="cursor-pointer text-left"
          >
            <article className={`${cardClassName} h-full cursor-pointer transition duration-300 hover:-translate-y-1`}>
              <div className="mb-6 h-36 rounded-2xl bg-[linear-gradient(135deg,_rgba(163,230,53,0.24),_rgba(250,204,21,0.16))]" />
              <p className="text-sm font-medium text-[color:var(--accent)]">{project.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-[color:var(--text-primary)]">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">{project.summary}</p>
              <p className="mt-4 text-sm font-medium text-[color:var(--text-primary)]">{project.outcome}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent)]">
                Learn more
                <svg viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </article>
          </button>
        ))}
      </div>

      {/* Render the case study cards in a second grid below the featured projects. */}
      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <button key={study.title} type="button" onClick={() => setActiveItem(study)} className="cursor-pointer text-left">
            <article className="h-full rounded-lg border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-6 transition duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">{study.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">{study.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[color:var(--border-color)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent)]">
                Learn more
                <svg viewBox="0 0 24 24" className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </article>
          </button>
        ))}
      </div>

      {modalContent}
    </section>
  );
}

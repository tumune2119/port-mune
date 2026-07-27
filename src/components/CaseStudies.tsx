import { caseStudies } from "@/data/portfolio";

export function CaseStudies() {
  return (
    <section id="case-studies" className="mt-16 rounded-[2rem] border border-[color:var(--border-color)] bg-[color:var(--surface-strong)] p-8 text-[color:var(--text-primary)] shadow-sm sm:p-10">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--text-secondary)]">
          Case studies
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-[color:var(--text-primary)]">
          A growing collection of product stories, design decisions, and polished front-end outcomes.
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <article key={study.title} className="rounded-[1.25rem] border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-6">
            <h3 className="text-xl font-semibold">{study.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">{study.blurb}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[color:var(--border-color)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--text-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

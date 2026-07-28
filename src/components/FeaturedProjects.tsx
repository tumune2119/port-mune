import { caseStudies, featuredProjects } from "@/data/portfolio";

const cardClassName = "rounded-2xl border border-white/20 bg-white/10 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-900/20";

export function FeaturedProjects() {
  return (
    <section id="work" className="scroll-mt-28 mt-16 rounded-2xl border border-white/20 bg-white/10 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10 dark:border-white/10 dark:bg-slate-900/20">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--text-secondary)]">Work</p>
        <h2 className="mt-2 text-3xl font-semibold text-[color:var(--text-primary)]">
          A combined view of selected projects and the case studies that show how I think and build.
        </h2>
      </div>

      <div className="mb-10 grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article key={project.title} className={cardClassName}>
            <div className="mb-6 h-36 rounded-2xl bg-[linear-gradient(135deg,_rgba(163,230,53,0.24),_rgba(250,204,21,0.16))]" />
            <p className="text-sm font-medium text-[color:var(--accent)]">{project.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-[color:var(--text-primary)]">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">{project.summary}</p>
            <p className="mt-4 text-sm font-medium text-[color:var(--text-primary)]">{project.outcome}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <article key={study.title} className="rounded-lg border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-6">
            <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">{study.title}</h3>
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

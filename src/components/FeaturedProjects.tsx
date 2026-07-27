import { featuredProjects } from "@/data/portfolio";

export function FeaturedProjects() {
  return (
    <section id="work" className="mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--text-secondary)]">
            Featured work
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[color:var(--text-primary)]">
            Selected projects that blend visual craft and thoughtful interaction.
          </h2>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <article key={project.title} className="rounded-[1.5rem] border border-[color:var(--border-color)] bg-[color:var(--surface)] p-6 shadow-sm transition-colors">
            <div className="mb-6 h-36 rounded-2xl bg-[linear-gradient(135deg,_rgba(163,230,53,0.24),_rgba(250,204,21,0.16))]" />
            <p className="text-sm font-medium text-[color:var(--accent)]">{project.category}</p>
            <h3 className="mt-2 text-xl font-semibold text-[color:var(--text-primary)]">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">{project.summary}</p>
            <p className="mt-4 text-sm font-medium text-[color:var(--text-primary)]">{project.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

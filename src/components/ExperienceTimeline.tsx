import { experienceMilestones } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-28 mt-16 rounded-2xl border border-white/20 bg-white/10 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10 dark:border-white/10 dark:bg-slate-900/20">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--text-secondary)]">
          Experience
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-[color:var(--text-primary)]">
          A playful timeline of the studies, roles, and milestones that shaped my craft.
        </h2>
      </div>

      <div className="relative space-y-6 before:absolute before:left-[0.9rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-[color:var(--accent)]/40 sm:before:left-6">
        {experienceMilestones.map((item, index) => (
          <div key={item.title} className="relative pl-8 sm:pl-12">
            <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--accent)]/40 bg-[color:var(--surface-muted)] text-sm font-semibold text-[color:var(--accent)] sm:left-2">
              {index + 1}
            </div>
            <div className="rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--accent)]">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-[color:var(--text-primary)]">{item.title}</h3>
                </div>
                <p className="text-sm text-[color:var(--text-secondary)]">{item.type}</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

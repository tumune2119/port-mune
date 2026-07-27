export function ContactSection() {
  return (
    <section id="contact" className="mt-16 rounded-[2rem] border border-[color:var(--border-color)] bg-[color:var(--surface)] p-8 shadow-sm transition-colors sm:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--text-secondary)]">
            Let’s build something memorable
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[color:var(--text-primary)]">
            Ready for a portfolio that feels as confident as your work?
          </h2>
        </div>
        <a
          href="mailto:hello@portmune.com"
          className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[color:var(--accent-strong)]"
        >
          hello@portmune.com
        </a>
      </div>
    </section>
  );
}

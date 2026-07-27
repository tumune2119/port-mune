export function Hero() {
  return (
    <section className="grid items-center gap-8 rounded-[2rem] border border-[color:var(--border-color)] bg-[color:var(--surface)]/80 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur transition-colors lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
      <div className="max-w-2xl">
        <p className="mb-4 inline-flex rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--surface-muted)] px-3 py-1 text-sm font-medium text-[color:var(--accent)]">
          Design • Front-End • Storytelling
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-5xl lg:text-6xl">
          I create thoughtful digital experiences that feel as good as they look.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-[color:var(--text-secondary)]">
          I’m a product-minded designer and front-end developer building polished interfaces, meaningful systems, and launch-ready stories for modern brands.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#case-studies"
            className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[color:var(--accent-strong)]"
          >
            Explore case studies
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[color:var(--border-color)] px-5 py-3 text-sm font-semibold text-[color:var(--text-secondary)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Let’s connect
          </a>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-[color:var(--border-color)] bg-[color:var(--surface-strong)] p-6 text-[color:var(--text-primary)]">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-[color:var(--text-secondary)]">Current focus</p>
            <p className="text-xl font-semibold">Portfolio in motion</p>
          </div>
          <div className="rounded-full bg-[color:var(--accent)]/20 px-3 py-1 text-sm text-[color:var(--accent)]">Available</div>
        </div>
        <div className="space-y-3 rounded-2xl bg-white/10 p-4">
          <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
            <span>Brand systems</span>
            <span className="text-sm text-[color:var(--accent)]">04</span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
            <span>Frontend builds</span>
            <span className="text-sm text-[color:var(--accent)]">12</span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
            <span>Case studies</span>
            <span className="text-sm text-[color:var(--accent)]">03</span>
          </div>
        </div>
      </div>
    </section>
  );
}

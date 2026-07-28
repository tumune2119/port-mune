// The hero section introduces the portfolio and establishes the first impression.
// It displays the main headline, supporting description, call-to-action links,
// and a small summary panel that highlights current focus areas.
const highlights = [
  { label: "Brand systems", value: "04" },
  { label: "Frontend builds", value: "12" },
  { label: "Case studies", value: "03" },
];

export function Hero() {
  return (
    <section id="home" className="scroll-mt-28 grid min-h-[calc(100vh-7.5rem)] items-center gap-8 rounded-2xl border border-white/20 bg-white/10 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors lg:grid-cols-[1.2fr_0.8fr] lg:p-12 dark:border-white/10 dark:bg-slate-900/20">
      {/* Left side: the introduction, headline, and main call-to-action buttons. */}
      <div className="max-w-2xl">
        <p className="mb-4 inline-flex rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--surface-muted)]/70 px-3 py-1 text-sm font-medium text-[color:var(--accent)]">
          Design • Front-End • Storytelling
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--text-primary)] sm:text-5xl lg:text-6xl">
          I create thoughtful digital experiences that feel as good as they look.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-[color:var(--text-secondary)]">
          I’m a product-minded designer and front-end developer building polished interfaces, meaningful systems, and launch-ready stories for modern brands.
        </p>
        {/* Show the main navigation buttons for deeper exploration and downloading the CV. */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#case-studies"
            className="rounded-[4px] bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(163,230,53,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] dark:text-slate-950"
          >
            Explore case studies
          </a>
          <a
            href="/cv.pdf"
            download="cv.pdf"
            className="rounded-[4px] border border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/70 px-5 py-3 text-sm font-semibold text-[color:var(--text-secondary)] shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right side: a summary panel that highlights what the portfolio is currently focused on. */}
      <div className="rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface-strong)] p-6 text-[color:var(--text-primary)]">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-[color:var(--text-secondary)]">Current focus</p>
            <p className="text-xl font-semibold">Portfolio in motion</p>
          </div>
          <div className="rounded-full bg-[color:var(--accent)]/20 px-3 py-1 text-sm text-[color:var(--accent)]">Available</div>
        </div>
        {/* Render the highlight metrics in a compact list for quick scanning. */}
        <div className="space-y-3 rounded-2xl bg-white/10 p-4">
          {highlights.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3">
              <span>{item.label}</span>
              <span className="text-sm text-[color:var(--accent)]">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

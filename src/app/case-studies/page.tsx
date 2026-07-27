import Link from "next/link";

const studies = [
  {
    title: "Designing trust in complex products",
    blurb: "A detailed walkthrough of simplifying dense information and making things feel effortless.",
  },
  {
    title: "Turning ideas into launch-ready experiences",
    blurb: "How product strategy, visuals, and front-end implementation came together in one flow.",
  },
  {
    title: "Building a portfolio that speaks for itself",
    blurb: "A case study on crafting a memorable narrative through thoughtful UI and interaction.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10 sm:px-10 lg:px-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Case Studies
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[color:var(--text-primary)]">
            Deep dives into process and outcomes.
          </h1>
        </div>
        <Link href="/" className="rounded-full border border-[color:var(--border-color)] px-4 py-2 text-sm font-medium text-[color:var(--text-secondary)] transition hover:text-[color:var(--accent)]">
          Back home
        </Link>
      </div>

      <div className="grid gap-5">
        {studies.map((study) => (
          <article key={study.title} className="rounded-[1.5rem] border border-[color:var(--border-color)] bg-[color:var(--surface)] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[color:var(--text-primary)]">{study.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">{study.blurb}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

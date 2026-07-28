import Link from "next/link";

const workItems = [
  {
    title: "Northstar Finance",
    blurb: "A dashboard refresh focused on reducing friction for high-volume finance teams.",
  },
  {
    title: "Lumen Studio",
    blurb: "A brand-led website experience built for storytelling, speed, and growth.",
  },
  {
    title: "Atlas Mobility",
    blurb: "A conversion-focused booking flow crafted to feel effortless and confident.",
  },
];

export default function WorkPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10 sm:px-10 lg:px-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Work
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[color:var(--text-primary)]">
            Selected projects and product thinking.
          </h1>
        </div>
        <Link href="/" className="rounded-2xl border border-[color:var(--border-color)] px-4 py-2 text-sm font-medium text-[color:var(--text-secondary)] transition hover:text-[color:var(--accent)]">
          Back home
        </Link>
      </div>

      <div className="grid gap-5">
        {workItems.map((item) => (
          <article key={item.title} className="rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface)] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[color:var(--text-primary)]">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">{item.blurb}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

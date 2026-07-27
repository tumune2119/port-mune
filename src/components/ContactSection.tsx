export function ContactSection() {
  return (
    <section id="contact" className="mt-16 rounded-[2rem] border border-[color:var(--border-color)] bg-[color:var(--surface)] p-8 shadow-sm transition-colors sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--text-secondary)]">
            Let’s build something memorable
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[color:var(--text-primary)]">
            Ready for a portfolio that feels as confident as your work?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-[color:var(--text-secondary)]">
            Reach out for collaborations, freelance work, or a conversation about your next product experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:hello@portmune.com"
              className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[color:var(--accent-strong)]"
            >
              Email me
            </a>
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="rounded-full border border-[color:var(--border-color)] px-5 py-3 text-sm font-semibold text-[color:var(--text-secondary)] transition hover:text-[color:var(--accent)]"
            >
              Download CV
            </a>
          </div>
        </div>

        <form action="https://formsubmit.co/hello@portmune.com" method="POST" className="space-y-4 rounded-[1.25rem] border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-5">
          <input type="hidden" name="_subject" value="New portfolio enquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <label className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-primary)] outline-none ring-0"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-primary)] outline-none ring-0"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[color:var(--text-primary)]" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--text-primary)] outline-none ring-0"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[color:var(--accent-strong)]"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

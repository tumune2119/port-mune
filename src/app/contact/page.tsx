import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-10 sm:px-10 lg:px-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--accent)]">
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[color:var(--text-primary)]">
            Let’s talk about your next idea.
          </h1>
        </div>
        <Link href="/" className="rounded-full border border-[color:var(--border-color)] px-4 py-2 text-sm font-medium text-[color:var(--text-secondary)] transition hover:text-[color:var(--accent)]">
          Back home
        </Link>
      </div>

      <section className="rounded-[2rem] border border-[color:var(--border-color)] bg-[color:var(--surface)] p-8 shadow-sm">
        <p className="max-w-2xl text-sm leading-7 text-[color:var(--text-secondary)]">
          Send a message and I&apos;ll get back to you about collaborations, freelance work, or product design conversations.
        </p>

        <form action="https://formsubmit.co/hello@portmune.com" method="POST" className="mt-8 space-y-4">
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
              className="w-full rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--text-primary)] outline-none"
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
              className="w-full rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--text-primary)] outline-none"
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
              rows={6}
              className="w-full rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--text-primary)] outline-none"
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
      </section>
    </main>
  );
}

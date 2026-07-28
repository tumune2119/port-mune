"use client";

// ContactSection handles the main contact experience on the homepage.
// It presents the call-to-action copy, renders social links, and manages the
// form submission flow so messages can be sent through EmailJS.
import { FormEvent, useRef, useState } from "react";
import { SocialLinks } from "@/components/SocialLinks";

export function ContactSection() {
  // Keep a direct reference to the form so its values can be read when submitting.
  const formRef = useRef<HTMLFormElement>(null);
  // Track the current state of the form submission so the UI can show loading or feedback messages.
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Send the form values to EmailJS after validating that the required environment variables exist.
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    const form = formRef.current;
    if (!form) {
      setStatus("error");
      return;
    }

    // Read the input values directly from the form before building the email payload.
    const formData = new FormData(form);
    const name = (formData.get("name") as string | null)?.toString().trim() ?? "";
    const email = (formData.get("email") as string | null)?.toString().trim() ?? "";
    const message = (formData.get("message") as string | null)?.toString().trim() ?? "";

    // Format the values into the structure expected by the EmailJS template.
    const templateParams = {
      name,
      email,
      message,
      from_name: name,
      from_email: email,
      reply_to: email,
      user_name: name,
      user_email: email,
    };

    try {
      // Dynamically import EmailJS so the contact form can send messages without blocking initial load.
      const emailjs = (await import("emailjs-com")).default;
      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 mt-16 rounded-2xl border border-white/20 bg-white/10 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors sm:p-10 dark:border-white/10 dark:bg-slate-900/20">
      {/* Split the contact area into a text column and a form column on larger screens. */}
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
          {/* Show the primary action buttons for email and CV download. */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:tumune2119@gmail.com"
              className="rounded-[4px] bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(163,230,53,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] dark:text-slate-950"
            >
              Email me
            </a>
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="rounded-[4px] border border-[color:var(--border-color)] bg-[color:var(--surface-strong)]/70 px-5 py-3 text-sm font-semibold text-[color:var(--text-secondary)] shadow-[0_6px_20px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Download CV
            </a>
          </div>

          {/* Render the social links below the intro copy for easy follow-up. */}
          <SocialLinks className="mt-6" />
        </div>

        {/* The form uses the submission handler above and shows success or error feedback. */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface-muted)] p-5">
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
            disabled={status === "sending"}
            className="rounded-[4px] bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70 dark:text-slate-950"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "success" && (
            <p className="text-sm text-[color:var(--accent)]">Your message has been sent successfully.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">Something went wrong. Please try again later.</p>
          )}
        </form>
      </div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-line bg-surface-soft px-3.5 py-3 text-sm text-ink transition-colors placeholder:text-ink-faint focus:border-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-accent-soft";

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="c-name"
            className="mb-1.5 block text-[12.5px] font-bold text-ink-soft"
          >
            Name
          </label>
          <input
            id="c-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="c-email"
            className="mb-1.5 block text-[12.5px] font-bold text-ink-soft"
          >
            Email
          </label>
          <input
            id="c-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="c-subject"
          className="mb-1.5 block text-[12.5px] font-bold text-ink-soft"
        >
          Subject
        </label>
        <input
          id="c-subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="What's this about?"
          className={inputClasses}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="c-message"
          className="mb-1.5 block text-[12.5px] font-bold text-ink-soft"
        >
          Message
        </label>
        <textarea
          id="c-message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me a bit more..."
          className={`${inputClasses} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_26px_-12px_rgba(37,99,235,0.55)] transition-all hover:-translate-y-0.5 hover:bg-accent-ink disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send size={16} />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="mt-3 text-[12.5px] text-ink-faint">
  {status === "success"
    ? "Message sent successfully! I'll get back to you soon."
    : status === "error"
    ? "Something went wrong. Please try again."
    : "I'll get back to you as soon as possible."}
</p>
    </form>
  );
}

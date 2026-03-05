"use client";

import { FormEvent, useState } from "react";
import { SendHorizontal } from "lucide-react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message")
        })
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-surface/85 p-6">
      <div className="grid gap-4">
        <label className="text-sm text-white/80" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-primary/50"
        />

        <label className="text-sm text-white/80" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-primary/50"
        />

        <label className="text-sm text-white/80" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-primary/50"
        />

        <button
          disabled={state === "sending"}
          type="submit"
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl border border-primary/40 bg-primary/15 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary transition hover:shadow-glow disabled:opacity-60"
        >
          <SendHorizontal className="h-4 w-4" />
          {state === "sending" ? "Transmitting..." : "Send Message"}
        </button>

        {state === "success" ? <p className="text-sm text-accent">Message sent successfully.</p> : null}
        {state === "error" ? <p className="text-sm text-red-400">Failed to send message. Try again.</p> : null}
      </div>
    </form>
  );
}

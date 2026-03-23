"use client";

import { FormEvent, useState } from "react";
import { SendHorizontal, Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

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
          message: formData.get("message"),
        }),
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

  const inputClasses =
    "w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(0,224,255,0.08)] focus:ring-0";

  return (
    <form
      onSubmit={handleSubmit}
      className="card-surface rounded-2xl p-6"
    >
      <div className="grid gap-5">
        <div>
          <label
            className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-white/50"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={inputClasses}
            aria-required="true"
          />
        </div>

        <div>
          <label
            className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-white/50"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
            aria-required="true"
          />
        </div>

        <div>
          <label
            className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-white/50"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tell me about your project..."
            className={inputClasses + " resize-none"}
            aria-required="true"
          />
        </div>

        <button
          disabled={state === "sending"}
          type="submit"
          className="mt-1 inline-flex w-fit items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:border-primary/60 hover:shadow-glow disabled:opacity-50"
        >
          {state === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Transmitting...
            </>
          ) : (
            <>
              <SendHorizontal className="h-4 w-4" />
              Send Message
            </>
          )}
        </button>

        {state === "success" ? (
          <div className="flex items-center gap-2 text-sm text-accent">
            <CheckCircle2 className="h-4 w-4" />
            Message sent successfully.
          </div>
        ) : null}
        {state === "error" ? (
          <p className="text-sm text-red-400">
            Failed to send message. Try again.
          </p>
        ) : null}
      </div>
    </form>
  );
}

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormInput } from "@/lib/validations";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({ resolver: zodResolver(contactFormSchema) });

  async function onSubmit(data: ContactFormInput) {
    setStatus("idle");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMessage(result?.error ?? "Something went wrong sending your message.");
        setStatus("error");
        return;
      }
      setStatus("success");
      reset();
    } catch {
      setErrorMessage("Couldn't reach the server — check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border-2 border-brand bg-brand-light p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand" />
        <h3 className="font-display text-xl font-semibold text-ink">Message sent successfully.</h3>
        <p className="max-w-sm text-sm text-ink-soft">
          Thanks for reaching out — we've received your message and will reply within one business day.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-2 text-sm font-semibold text-brand underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      {/* Honeypot — hidden from real users via CSS, bots often fill every field */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        {...register("website")}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} className="input" placeholder="Jane Doe" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" className="input" placeholder="jane@company.com" />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone (optional)" error={errors.phone?.message}>
          <input {...register("phone")} className="input" placeholder="+251 ..." />
        </Field>
        <Field label="Company (optional)" error={errors.company?.message}>
          <input {...register("company")} className="input" placeholder="Company name" />
        </Field>
      </div>
      <Field label="What are you interested in? (optional)" error={errors.service?.message}>
        <select {...register("service")} className="input" defaultValue="">
          <option value="">Select a service</option>
          <option>Software Development</option>
          <option>AI Solutions</option>
          <option>Website Development</option>
          <option>Mobile App Development</option>
          <option>UI/UX Design</option>
          <option>Custom Solutions</option>
        </select>
      </Field>
      <Field label="Tell us about your project" error={errors.message?.message}>
        <textarea {...register("message")} rows={5} className="input" placeholder="What are you building?" />
      </Field>

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-md border-2 border-red-300 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-none" />
          <div>
            <strong className="block font-semibold">Your message wasn&apos;t sent.</strong>
            {errorMessage}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-fit items-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark disabled:opacity-70"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? "Sending…" : "Send message"}
      </button>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid var(--border);
          background: var(--bg);
          border-radius: 8px;
          padding: 11px 14px;
          font-size: 14px;
          color: var(--ink);
          outline: none;
        }
        .input:focus {
          border-color: #1552f0;
        }
      `}</style>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

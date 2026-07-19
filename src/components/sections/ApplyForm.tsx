"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { jobApplicationSchema, type JobApplicationInput } from "@/lib/validations";
import type { JobData } from "@/data/jobs";

export function ApplyForm({ jobs }: { jobs: JobData[] }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JobApplicationInput>({ resolver: zodResolver(jobApplicationSchema) });

  async function onSubmit(data: JobApplicationInput) {
    setStatus("idle");
    const selectedTitle = (document.getElementById("position") as HTMLSelectElement)?.value;
    const payload = {
      ...data,
      coverLetter: selectedTitle
        ? `Applying for: ${selectedTitle}\n\n${data.coverLetter ?? ""}`
        : data.coverLetter,
    };
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-themed bg-surface p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand" />
        <h3 className="font-display text-lg font-semibold text-ink">Application received.</h3>
        <p className="max-w-sm text-sm text-ink-soft">Thanks for applying — we'll review it and follow up if there's a fit.</p>
        <button onClick={() => setStatus("idle")} className="mt-2 text-sm font-semibold text-brand">
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} className="absolute left-[-9999px] h-0 w-0 opacity-0" aria-hidden="true" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message}>
          <input {...register("fullName")} className="input" placeholder="Jane Doe" />
        </Field>
        <Field label="Email">
          <input {...register("email")} type="email" className="input" placeholder="jane@email.com" />
        </Field>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone (optional)">
          <input {...register("phone")} className="input" placeholder="+251 ..." />
        </Field>
        <Field label="Position">
          <select id="position" className="input" defaultValue="">
            <option value="">General application</option>
            {jobs.map((job) => (
              <option key={job.slug} value={job.title}>
                {job.title}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Resume link" error={errors.resumeUrl?.message}>
        <input {...register("resumeUrl")} className="input" placeholder="Link to your resume (Google Drive, LinkedIn, etc.)" />
      </Field>
      <Field label="Cover letter (optional)">
        <textarea {...register("coverLetter")} rows={4} className="input" placeholder="Anything you'd like us to know" />
      </Field>

      {status === "error" && <p className="text-sm text-red-500">Something went wrong — please try again.</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-fit items-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark disabled:opacity-70"
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? "Submitting…" : "Submit application"}
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

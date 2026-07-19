"use client";

import { useState } from "react";
import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { OrbitMark } from "@/components/ui/OrbitMark";
import { footerServiceLinks, footerProductLinks, footerCompanyLinks, footerResourceLinks } from "@/data/nav";

export function Footer() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (new FormData(form).get("email") as string) ?? "";
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="border-t border-themed bg-surface-2">
      <div className="mx-auto max-w-[1280px] px-5 pt-20 md:px-10">
        <div className="grid grid-cols-2 gap-10 pb-14 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
              <OrbitMark size={28} />
              Nucleus Labs
            </Link>
            <p className="mt-4 max-w-[280px] text-sm text-ink-soft">
              Software, AI, and digital products engineered at the core of your business.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-themed transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-themed transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-themed transition-colors hover:border-brand hover:bg-brand hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>

            <h4 className="mb-3 mt-7 font-mono text-[13px] uppercase tracking-wider text-ink-soft">Stay updated</h4>
            <form onSubmit={handleSubscribe} className="flex max-w-[280px] overflow-hidden rounded-sm border border-themed bg-surface">
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="w-full bg-transparent px-3.5 py-3 text-sm text-ink outline-none placeholder:text-ink-soft"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="whitespace-nowrap bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-70"
              >
                {status === "success" ? "✓" : status === "loading" ? "…" : "Join"}
              </button>
            </form>
            {status === "error" && <p className="mt-2 text-xs text-red-500">Something went wrong — try again.</p>}
          </div>

          <FooterColumn title="Services" links={footerServiceLinks} />
          <FooterColumn title="Products" links={footerProductLinks} />
          <FooterColumn title="Resources" links={footerResourceLinks} />
          <FooterColumn title="Company" links={footerCompanyLinks} />
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-themed py-6 md:flex-row">
          <p className="text-[13px] text-ink-soft">© {new Date().getFullYear()} Nucleus Labs. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[13px] text-ink-soft hover:text-brand">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[13px] text-ink-soft hover:text-brand">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 font-mono text-[13px] uppercase tracking-wider text-ink-soft">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-ink transition-colors hover:text-brand">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

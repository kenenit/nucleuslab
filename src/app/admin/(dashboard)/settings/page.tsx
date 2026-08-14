"use client";

import { useEffect, useState } from "react";
import { Save } from "lucide-react";

const emptyForm = {
  contactEmail: "", contactPhone: "", contactAddress: "", contactHours: "",
  socialLinkedin: "", socialTwitter: "", socialInstagram: "", socialFacebook: "",
  socialTiktok: "", socialYoutube: "", socialGithub: "", socialTelegram: "",
};

export default function AdminSettingsPage() {
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function load() {
    setLoading(true);
    setLoadError(null);
    try {
      const res = await fetch("/api/admin/settings");
      if (!res.ok) throw new Error();
      const data = await res.json();
      setForm({
        contactEmail: data.contactEmail ?? "",
        contactPhone: data.contactPhone ?? "",
        contactAddress: data.contactAddress ?? "",
        contactHours: data.contactHours ?? "",
        socialLinkedin: data.socialLinkedin ?? "",
        socialTwitter: data.socialTwitter ?? "",
        socialInstagram: data.socialInstagram ?? "",
        socialFacebook: data.socialFacebook ?? "",
        socialTiktok: data.socialTiktok ?? "",
        socialYoutube: data.socialYoutube ?? "",
        socialGithub: data.socialGithub ?? "",
        socialTelegram: data.socialTelegram ?? "",
      });
    } catch {
      setLoadError("Couldn't load settings — the database may be waking up. Try refreshing in a few seconds.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    await fetch("/api/admin/settings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  if (loading) {
    return <p className="text-sm text-ink-soft">Loading…</p>;
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="mb-1 font-display text-2xl font-semibold text-ink">Settings</h1>
        <p className="text-sm text-ink-soft">
          Contact details shown on the Contact page, and social links shown in the footer. Leave a social link blank
          to hide that icon.
        </p>
      </div>

      {loadError && (
        <div className="mb-5 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">{loadError}</div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <section className="rounded-lg border border-themed bg-surface p-6">
          <h2 className="mb-4 font-display text-base font-semibold text-ink">Contact info</h2>
          <div className="flex flex-col gap-4">
            <Field label="Contact email"><input required value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} className="input" /></Field>
            <Field label="Contact phone"><input value={form.contactPhone} onChange={(e) => setForm({ ...form, contactPhone: e.target.value })} className="input" /></Field>
            <Field label="Office / address">
              <input
                value={form.contactAddress}
                onChange={(e) => setForm({ ...form, contactAddress: e.target.value })}
                className="input"
                placeholder="We work remotely — no physical office right now."
              />
            </Field>
            <Field label="Hours"><input value={form.contactHours} onChange={(e) => setForm({ ...form, contactHours: e.target.value })} className="input" /></Field>
          </div>
        </section>

        <section className="rounded-lg border border-themed bg-surface p-6">
          <h2 className="mb-4 font-display text-base font-semibold text-ink">Footer social links</h2>
          <div className="flex flex-col gap-4">
            <Field label="LinkedIn"><input value={form.socialLinkedin} onChange={(e) => setForm({ ...form, socialLinkedin: e.target.value })} className="input" placeholder="https://linkedin.com/company/..." /></Field>
            <Field label="Twitter / X"><input value={form.socialTwitter} onChange={(e) => setForm({ ...form, socialTwitter: e.target.value })} className="input" placeholder="https://x.com/..." /></Field>
            <Field label="Instagram"><input value={form.socialInstagram} onChange={(e) => setForm({ ...form, socialInstagram: e.target.value })} className="input" placeholder="https://instagram.com/..." /></Field>
            <Field label="Facebook"><input value={form.socialFacebook} onChange={(e) => setForm({ ...form, socialFacebook: e.target.value })} className="input" placeholder="https://facebook.com/..." /></Field>
            <Field label="TikTok"><input value={form.socialTiktok} onChange={(e) => setForm({ ...form, socialTiktok: e.target.value })} className="input" placeholder="https://tiktok.com/@..." /></Field>
            <Field label="YouTube"><input value={form.socialYoutube} onChange={(e) => setForm({ ...form, socialYoutube: e.target.value })} className="input" placeholder="https://youtube.com/@..." /></Field>
            <Field label="GitHub"><input value={form.socialGithub} onChange={(e) => setForm({ ...form, socialGithub: e.target.value })} className="input" placeholder="https://github.com/..." /></Field>
            <Field label="Telegram"><input value={form.socialTelegram} onChange={(e) => setForm({ ...form, socialTelegram: e.target.value })} className="input" placeholder="https://t.me/..." /></Field>
          </div>
        </section>

        <button type="submit" disabled={saving} className="flex w-fit items-center gap-2 rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70">
          <Save className="h-4 w-4" />
          {saving ? "Saving…" : saved ? "Saved ✓" : "Save settings"}
        </button>
      </form>

      <style jsx global>{`
        .input { width: 100%; border: 1px solid var(--border); background: var(--bg); border-radius: 8px; padding: 10px 12px; font-size: 14px; color: var(--ink); outline: none; }
        .input:focus { border-color: #1552f0; }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}

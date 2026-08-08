"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, X, Star } from "lucide-react";
import { ImageUpload } from "@/components/admin/ImageUpload";

interface TestimonialRow {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string | null;
  company: string | null;
  avatarUrl: string | null;
  rating: number;
  featured: boolean;
  order: number;
  published: boolean;
}

const emptyForm = {
  quote: "", authorName: "", authorRole: "", company: "", avatarUrl: "",
  rating: 5, featured: false, order: 0, published: true,
};

export default function AdminTestimonialsPage() {
  const [rows, setRows] = useState<TestimonialRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    setLoadError(null);
    try {
      const res = await fetch("/api/admin/testimonials");
      if (!res.ok) throw new Error();
      setRows(await res.json());
    } catch {
      setLoadError("Couldn't load testimonials — the database may be waking up. Try refreshing in a few seconds.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function openCreate() {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
  }

  function openEdit(row: TestimonialRow) {
    setForm({
      quote: row.quote, authorName: row.authorName, authorRole: row.authorRole ?? "",
      company: row.company ?? "", avatarUrl: row.avatarUrl ?? "", rating: row.rating,
      featured: row.featured, order: row.order, published: row.published,
    });
    setEditingId(row.id);
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = { ...form, order: Number(form.order), rating: Number(form.rating) };

    if (editingId) {
      await fetch("/api/admin/testimonials", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, ...payload }),
      });
    } else {
      await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    setSaving(false);
    setShowForm(false);
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this testimonial? This can't be undone.")) return;
    await fetch("/api/admin/testimonials", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  return (
    <div>
      <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="mb-1 font-display text-2xl font-semibold text-ink">Testimonials</h1>
          <p className="text-sm text-ink-soft">
            Manage client quotes shown on the homepage and Testimonials page. While this list is empty, the site shows
            placeholder reviews — add real ones here and they'll replace the placeholders automatically.
          </p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 rounded-sm bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
          <Plus className="h-4 w-4" />
          Add testimonial
        </button>
      </div>

      {loadError && (
        <div className="mb-5 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">{loadError}</div>
      )}

      <div className="overflow-x-auto rounded-lg border border-themed bg-surface">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-themed bg-surface-2 text-ink-soft">
            <tr>
              <th className="px-5 py-3 font-medium">Author</th>
              <th className="px-5 py-3 font-medium">Quote</th>
              <th className="px-5 py-3 font-medium">Rating</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr><td colSpan={5} className="px-5 py-8 text-center text-ink-soft">Loading…</td></tr>
            )}
            {!loading && !loadError && rows.length === 0 && (
              <tr><td colSpan={5} className="px-5 py-8 text-center text-ink-soft">No testimonials yet — the site is showing placeholders. Add one above.</td></tr>
            )}
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-themed last:border-0">
                <td className="px-5 py-3.5 font-medium text-ink">{row.authorName}</td>
                <td className="max-w-xs truncate px-5 py-3.5 text-ink-soft">{row.quote}</td>
                <td className="px-5 py-3.5 text-ink-soft">{row.rating}/5</td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${row.published ? "bg-emerald-100 text-emerald-700" : "bg-surface-2 text-ink-soft"}`}>
                    {row.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => openEdit(row)} className="rounded-md p-2 text-ink-soft hover:bg-surface-2 hover:text-brand" aria-label={`Edit ${row.authorName}`}>
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(row.id)} className="rounded-md p-2 text-ink-soft hover:bg-surface-2 hover:text-red-500" aria-label={`Delete ${row.authorName}`}>
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 p-5">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-surface p-6 shadow-lg">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-ink">{editingId ? "Edit testimonial" : "Add testimonial"}</h2>
              <button onClick={() => setShowForm(false)} aria-label="Close" className="text-ink-soft"><X className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Field label="Quote"><textarea required rows={3} value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} className="input" /></Field>
              <Field label="Author name"><input required value={form.authorName} onChange={(e) => setForm({ ...form, authorName: e.target.value })} className="input" /></Field>
              <Field label="Author role (optional)"><input value={form.authorRole} onChange={(e) => setForm({ ...form, authorRole: e.target.value })} className="input" placeholder="Founder" /></Field>
              <Field label="Company (optional)"><input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="input" placeholder="Acme Inc." /></Field>
              <ImageUpload label="Avatar photo (optional)" value={form.avatarUrl} onChange={(url) => setForm({ ...form, avatarUrl: url })} />
              <Field label="Rating (1–5)">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button type="button" key={n} onClick={() => setForm({ ...form, rating: n })}>
                      <Star className={`h-5 w-5 ${n <= form.rating ? "fill-accent text-accent" : "text-ink-soft"}`} />
                    </button>
                  ))}
                </div>
              </Field>
              <div className="flex items-center gap-6">
                <Field label="Order"><input type="number" value={form.order} onChange={(e) => setForm({ ...form, order: Number(e.target.value) })} className="input w-24" /></Field>
                <label className="mt-6 flex items-center gap-2 text-sm text-ink">
                  <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} /> Featured
                </label>
                <label className="mt-6 flex items-center gap-2 text-sm text-ink">
                  <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} /> Published
                </label>
              </div>
              <button type="submit" disabled={saving} className="mt-2 rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70">
                {saving ? "Saving…" : editingId ? "Save changes" : "Add testimonial"}
              </button>
            </form>
          </div>
        </div>
      )}

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

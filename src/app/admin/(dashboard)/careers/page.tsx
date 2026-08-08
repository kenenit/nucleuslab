"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, X } from "lucide-react";

interface JobRow {
  id: string;
  slug: string;
  title: string;
  department: string | null;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  isInternship: boolean;
  published: boolean;
  order: number;
}

const emptyForm = {
  slug: "", title: "", department: "", type: "Full-time", location: "",
  description: "", requirements: "", isInternship: false, published: true, order: 0,
};

export default function AdminCareersPage() {
  const [rows, setRows] = useState<JobRow[]>([]);
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
      const res = await fetch("/api/admin/careers");
      if (!res.ok) throw new Error();
      setRows(await res.json());
    } catch {
      setLoadError("Couldn't load job listings — the database may be waking up. Try refreshing in a few seconds.");
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

  function openEdit(row: JobRow) {
    setForm({
      slug: row.slug, title: row.title, department: row.department ?? "", type: row.type,
      location: row.location, description: row.description, requirements: row.requirements.join("\n"),
      isInternship: row.isInternship, published: row.published, order: row.order,
    });
    setEditingId(row.id);
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...form,
      requirements: form.requirements.split("\n").map((s) => s.trim()).filter(Boolean),
      order: Number(form.order),
    };

    if (editingId) {
      await fetch("/api/admin/careers", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, ...payload }),
      });
    } else {
      await fetch("/api/admin/careers", {
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
    if (!confirm("Delete this job listing? This can't be undone.")) return;
    await fetch("/api/admin/careers", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-1 font-display text-2xl font-semibold text-ink">Careers</h1>
          <p className="text-sm text-ink-soft">Manage open roles shown on the Careers page.</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 rounded-sm bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
          <Plus className="h-4 w-4" />
          Add job listing
        </button>
      </div>

      {loadError && (
        <div className="mb-5 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">{loadError}</div>
      )}

      <div className="overflow-hidden rounded-lg border border-themed bg-surface">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-themed bg-surface-2 text-ink-soft">
            <tr>
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">Type</th>
              <th className="px-5 py-3 font-medium">Location</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr><td colSpan={5} className="px-5 py-8 text-center text-ink-soft">Loading…</td></tr>
            )}
            {!loading && !loadError && rows.length === 0 && (
              <tr><td colSpan={5} className="px-5 py-8 text-center text-ink-soft">No listings yet — the Careers page is showing default placeholder roles. Add one above.</td></tr>
            )}
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-themed last:border-0">
                <td className="px-5 py-3.5 font-medium text-ink">{row.title}</td>
                <td className="px-5 py-3.5 text-ink-soft">{row.type}</td>
                <td className="px-5 py-3.5 text-ink-soft">{row.location}</td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${row.published ? "bg-emerald-100 text-emerald-700" : "bg-surface-2 text-ink-soft"}`}>
                    {row.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => openEdit(row)} className="rounded-md p-2 text-ink-soft hover:bg-surface-2 hover:text-brand" aria-label={`Edit ${row.title}`}>
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(row.id)} className="rounded-md p-2 text-ink-soft hover:bg-surface-2 hover:text-red-500" aria-label={`Delete ${row.title}`}>
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
              <h2 className="font-display text-lg font-semibold text-ink">{editingId ? "Edit job listing" : "Add job listing"}</h2>
              <button onClick={() => setShowForm(false)} aria-label="Close" className="text-ink-soft"><X className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Field label="Title"><input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="input" /></Field>
              <Field label="Slug (URL-safe, unique)"><input required value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="input" /></Field>
              <Field label="Department (optional)"><input value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} className="input" placeholder="Engineering" /></Field>
              <Field label="Type"><input required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="input" placeholder="Full-time / Internship / Contract" /></Field>
              <Field label="Location"><input required value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="input" placeholder="Addis Ababa / Remote" /></Field>
              <Field label="Description"><textarea required rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="input" /></Field>
              <Field label="Requirements (one per line)"><textarea rows={3} value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} className="input" /></Field>
              <div className="flex items-center gap-6">
                <Field label="Order"><input type="number" value={form.order} onChange={(e) => setForm({ ...form, order: Number(e.target.value) })} className="input w-24" /></Field>
                <label className="mt-6 flex items-center gap-2 text-sm text-ink">
                  <input type="checkbox" checked={form.isInternship} onChange={(e) => setForm({ ...form, isInternship: e.target.checked })} /> Internship
                </label>
                <label className="mt-6 flex items-center gap-2 text-sm text-ink">
                  <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} /> Published
                </label>
              </div>
              <button type="submit" disabled={saving} className="mt-2 rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70">
                {saving ? "Saving…" : editingId ? "Save changes" : "Add job listing"}
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

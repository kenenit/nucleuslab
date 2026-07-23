"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, X } from "lucide-react";

interface BlogRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  category: string;
  tags: string[];
  published: boolean;
  publishedAt: string | null;
}

const categories = ["AI", "Technology", "Automation", "Software", "Business", "Innovation"];

const emptyForm = {
  slug: "", title: "", excerpt: "", content: "", coverImage: "",
  category: categories[0], tags: "", published: false,
};

export default function AdminBlogPage() {
  const [rows, setRows] = useState<BlogRow[]>([]);
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
      const res = await fetch("/api/admin/blog");
      if (!res.ok) throw new Error();
      setRows(await res.json());
    } catch {
      setLoadError("Couldn't load blog posts — the database may be waking up. Try refreshing in a few seconds.");
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

  function openEdit(row: BlogRow) {
    setForm({
      slug: row.slug, title: row.title, excerpt: row.excerpt, content: row.content,
      coverImage: row.coverImage ?? "", category: row.category, tags: row.tags.join(", "),
      published: row.published,
    });
    setEditingId(row.id);
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...form,
      tags: form.tags.split(",").map((s) => s.trim()).filter(Boolean),
    };

    if (editingId) {
      await fetch("/api/admin/blog", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, ...payload }),
      });
    } else {
      await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    setSaving(false);
    setShowForm(false);
    load();
  }

  async function togglePublish(row: BlogRow) {
    await fetch("/api/admin/blog", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: row.id, published: !row.published }),
    });
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this post? This can't be undone.")) return;
    await fetch("/api/admin/blog", {
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
          <h1 className="mb-1 font-display text-2xl font-semibold text-ink">Blog</h1>
          <p className="text-sm text-ink-soft">Create, edit, and publish posts shown on the Blog page.</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 rounded-sm bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
          <Plus className="h-4 w-4" />
          New post
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
              <th className="px-5 py-3 font-medium">Category</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr><td colSpan={4} className="px-5 py-8 text-center text-ink-soft">Loading…</td></tr>
            )}
            {!loading && !loadError && rows.length === 0 && (
              <tr><td colSpan={4} className="px-5 py-8 text-center text-ink-soft">No posts yet — write one above.</td></tr>
            )}
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-themed last:border-0">
                <td className="px-5 py-3.5 font-medium text-ink">{row.title}</td>
                <td className="px-5 py-3.5 text-ink-soft">{row.category}</td>
                <td className="px-5 py-3.5">
                  <button
                    onClick={() => togglePublish(row)}
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${row.published ? "bg-emerald-100 text-emerald-700" : "bg-surface-2 text-ink-soft"}`}
                  >
                    {row.published ? "Published" : "Draft — click to publish"}
                  </button>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-surface p-6 shadow-lg">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-ink">{editingId ? "Edit post" : "New post"}</h2>
              <button onClick={() => setShowForm(false)} aria-label="Close" className="text-ink-soft"><X className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Field label="Title"><input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="input" /></Field>
              <Field label="Slug (URL-safe, unique)"><input required value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="input" /></Field>
              <Field label="Category">
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="input">
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Excerpt (short summary shown on the blog grid)">
                <textarea required rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} className="input" />
              </Field>
              <Field label="Content (full post body)">
                <textarea required rows={8} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="input" />
              </Field>
              <Field label="Cover image URL (optional)">
                <input value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })} className="input" placeholder="https://..." />
              </Field>
              <Field label="Tags (comma-separated)">
                <input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} className="input" />
              </Field>
              <label className="flex items-center gap-2 text-sm text-ink">
                <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
                Published (visible on the live Blog page)
              </label>
              <button type="submit" disabled={saving} className="mt-2 rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70">
                {saving ? "Saving…" : editingId ? "Save changes" : "Create post"}
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

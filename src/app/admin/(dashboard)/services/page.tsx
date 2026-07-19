"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, X } from "lucide-react";

interface ServiceRow {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  benefits: string[];
  process: string[];
  technologies: string[];
  order: number;
  published: boolean;
}

const emptyForm = {
  slug: "",
  title: "",
  summary: "",
  description: "",
  benefits: "",
  process: "",
  technologies: "",
  order: 0,
  published: true,
};

export default function AdminServicesPage() {
  const [services, setServices] = useState<ServiceRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  async function loadServices() {
    setLoading(true);
    const res = await fetch("/api/admin/services");
    const data = await res.json();
    setServices(data);
    setLoading(false);
  }

  useEffect(() => {
    loadServices();
  }, []);

  function openCreate() {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
  }

  function openEdit(service: ServiceRow) {
    setForm({
      slug: service.slug,
      title: service.title,
      summary: service.summary,
      description: service.description,
      benefits: service.benefits.join("\n"),
      process: service.process.join("\n"),
      technologies: service.technologies.join(", "),
      order: service.order,
      published: service.published,
    });
    setEditingId(service.id);
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const payload = {
      slug: form.slug,
      title: form.title,
      summary: form.summary,
      description: form.description,
      benefits: form.benefits.split("\n").map((s) => s.trim()).filter(Boolean),
      process: form.process.split("\n").map((s) => s.trim()).filter(Boolean),
      technologies: form.technologies.split(",").map((s) => s.trim()).filter(Boolean),
      order: Number(form.order),
      published: form.published,
    };

    if (editingId) {
      await fetch("/api/admin/services", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, ...payload }),
      });
    } else {
      await fetch("/api/admin/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    setSaving(false);
    setShowForm(false);
    loadServices();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this service? This can't be undone.")) return;
    await fetch("/api/admin/services", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    loadServices();
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-1 font-display text-2xl font-semibold text-ink">Services</h1>
          <p className="text-sm text-ink-soft">Manage the six service lines shown on the site.</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 rounded-sm bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          <Plus className="h-4 w-4" />
          New service
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-themed bg-surface">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-themed bg-surface-2 text-ink-soft">
            <tr>
              <th className="px-5 py-3 font-medium">Title</th>
              <th className="px-5 py-3 font-medium">Slug</th>
              <th className="px-5 py-3 font-medium">Order</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-ink-soft">
                  Loading…
                </td>
              </tr>
            )}
            {!loading && services.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-ink-soft">
                  No services yet — run <code>npm run db:seed</code> or add one above.
                </td>
              </tr>
            )}
            {services.map((service) => (
              <tr key={service.id} className="border-b border-themed last:border-0">
                <td className="px-5 py-3.5 font-medium text-ink">{service.title}</td>
                <td className="px-5 py-3.5 font-mono text-xs text-ink-soft">{service.slug}</td>
                <td className="px-5 py-3.5 text-ink-soft">{service.order}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      service.published ? "bg-emerald-100 text-emerald-700" : "bg-surface-2 text-ink-soft"
                    }`}
                  >
                    {service.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => openEdit(service)}
                      className="rounded-md p-2 text-ink-soft hover:bg-surface-2 hover:text-brand"
                      aria-label={`Edit ${service.title}`}
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="rounded-md p-2 text-ink-soft hover:bg-surface-2 hover:text-red-500"
                      aria-label={`Delete ${service.title}`}
                    >
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
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-surface p-6 shadow-lg">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-ink">
                {editingId ? "Edit service" : "New service"}
              </h2>
              <button onClick={() => setShowForm(false)} aria-label="Close" className="text-ink-soft">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Field label="Title">
                <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="input" />
              </Field>
              <Field label="Slug (URL-safe, unique)">
                <input required value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className="input" />
              </Field>
              <Field label="Summary (one line)">
                <input required value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} className="input" />
              </Field>
              <Field label="Description">
                <textarea required rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="input" />
              </Field>
              <Field label="Benefits (one per line)">
                <textarea rows={3} value={form.benefits} onChange={(e) => setForm({ ...form, benefits: e.target.value })} className="input" />
              </Field>
              <Field label="Process steps (one per line)">
                <textarea rows={3} value={form.process} onChange={(e) => setForm({ ...form, process: e.target.value })} className="input" />
              </Field>
              <Field label="Technologies (comma-separated)">
                <input value={form.technologies} onChange={(e) => setForm({ ...form, technologies: e.target.value })} className="input" />
              </Field>
              <div className="flex items-center gap-3">
                <Field label="Order">
                  <input
                    type="number"
                    value={form.order}
                    onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
                    className="input w-24"
                  />
                </Field>
                <label className="mt-6 flex items-center gap-2 text-sm text-ink">
                  <input
                    type="checkbox"
                    checked={form.published}
                    onChange={(e) => setForm({ ...form, published: e.target.checked })}
                  />
                  Published
                </label>
              </div>
              <button
                type="submit"
                disabled={saving}
                className="mt-2 rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70"
              >
                {saving ? "Saving…" : editingId ? "Save changes" : "Create service"}
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid var(--border);
          background: var(--bg);
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 14px;
          color: var(--ink);
          outline: none;
        }
        .input:focus {
          border-color: #1552f0;
        }
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

"use client";

import { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, X } from "lucide-react";

interface TeamRow {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  photoUrl: string | null;
  linkedinUrl: string | null;
  isLeadership: boolean;
  order: number;
  published: boolean;
}

const emptyForm = {
  name: "",
  role: "",
  bio: "",
  photoUrl: "",
  linkedinUrl: "",
  isLeadership: false,
  order: 0,
  published: true,
};

export default function AdminTeamPage() {
  const [rows, setRows] = useState<TeamRow[]>([]);
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
      const res = await fetch("/api/admin/team");
      if (!res.ok) throw new Error();
      setRows(await res.json());
    } catch {
      setLoadError("Couldn't load team members — the database may be waking up. Try refreshing in a few seconds.");
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

  function openEdit(row: TeamRow) {
    setForm({
      name: row.name,
      role: row.role,
      bio: row.bio ?? "",
      photoUrl: row.photoUrl ?? "",
      linkedinUrl: row.linkedinUrl ?? "",
      isLeadership: row.isLeadership,
      order: row.order,
      published: row.published,
    });
    setEditingId(row.id);
    setShowForm(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = { ...form, order: Number(form.order) };

    if (editingId) {
      await fetch("/api/admin/team", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editingId, ...payload }),
      });
    } else {
      await fetch("/api/admin/team", {
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
    if (!confirm("Remove this team member? This can't be undone.")) return;
    await fetch("/api/admin/team", {
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
          <h1 className="mb-1 font-display text-2xl font-semibold text-ink">Team</h1>
          <p className="text-sm text-ink-soft">Manage leadership and team members shown on the Team page.</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 rounded-sm bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          <Plus className="h-4 w-4" />
          Add team member
        </button>
      </div>

      {loadError && (
        <div className="mb-5 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          {loadError}
        </div>
      )}

      <div className="overflow-hidden rounded-lg border border-themed bg-surface">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-themed bg-surface-2 text-ink-soft">
            <tr>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">Leadership</th>
              <th className="px-5 py-3 font-medium">Order</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={6} className="px-5 py-8 text-center text-ink-soft">Loading…</td>
              </tr>
            )}
            {!loading && !loadError && rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-8 text-center text-ink-soft">No team members yet — add one above.</td>
              </tr>
            )}
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-themed last:border-0">
                <td className="px-5 py-3.5 font-medium text-ink">{row.name}</td>
                <td className="px-5 py-3.5 text-ink-soft">{row.role}</td>
                <td className="px-5 py-3.5 text-ink-soft">{row.isLeadership ? "Yes" : "—"}</td>
                <td className="px-5 py-3.5 text-ink-soft">{row.order}</td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${row.published ? "bg-emerald-100 text-emerald-700" : "bg-surface-2 text-ink-soft"}`}>
                    {row.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => openEdit(row)} className="rounded-md p-2 text-ink-soft hover:bg-surface-2 hover:text-brand" aria-label={`Edit ${row.name}`}>
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(row.id)} className="rounded-md p-2 text-ink-soft hover:bg-surface-2 hover:text-red-500" aria-label={`Delete ${row.name}`}>
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
              <h2 className="font-display text-lg font-semibold text-ink">{editingId ? "Edit team member" : "Add team member"}</h2>
              <button onClick={() => setShowForm(false)} aria-label="Close" className="text-ink-soft"><X className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Field label="Name">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" />
              </Field>
              <Field label="Role">
                <input required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="input" />
              </Field>
              <Field label="Bio (optional)">
                <textarea rows={3} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} className="input" />
              </Field>
              <Field label="Photo URL (optional)">
                <input value={form.photoUrl} onChange={(e) => setForm({ ...form, photoUrl: e.target.value })} className="input" placeholder="https://..." />
              </Field>
              <Field label="LinkedIn URL (optional)">
                <input value={form.linkedinUrl} onChange={(e) => setForm({ ...form, linkedinUrl: e.target.value })} className="input" placeholder="https://linkedin.com/in/..." />
              </Field>
              <div className="flex items-center gap-6">
                <Field label="Order">
                  <input type="number" value={form.order} onChange={(e) => setForm({ ...form, order: Number(e.target.value) })} className="input w-24" />
                </Field>
                <label className="mt-6 flex items-center gap-2 text-sm text-ink">
                  <input type="checkbox" checked={form.isLeadership} onChange={(e) => setForm({ ...form, isLeadership: e.target.checked })} />
                  Leadership
                </label>
                <label className="mt-6 flex items-center gap-2 text-sm text-ink">
                  <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
                  Published
                </label>
              </div>
              <button type="submit" disabled={saving} className="mt-2 rounded-sm bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70">
                {saving ? "Saving…" : editingId ? "Save changes" : "Add team member"}
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

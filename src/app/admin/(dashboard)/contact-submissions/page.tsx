import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ContactSubmissionsPage() {
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <div>
      <h1 className="mb-1 font-display text-2xl font-semibold text-ink">Contact submissions</h1>
      <p className="mb-8 text-sm text-ink-soft">Messages sent through the site's contact form.</p>

      <div className="overflow-hidden rounded-lg border border-themed bg-surface">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-themed bg-surface-2 text-ink-soft">
            <tr>
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Service</th>
              <th className="px-5 py-3 font-medium">Message</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Received</th>
            </tr>
          </thead>
          <tbody>
            {submissions.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-8 text-center text-ink-soft">
                  No submissions yet.
                </td>
              </tr>
            )}
            {submissions.map((s) => (
              <tr key={s.id} className="border-b border-themed align-top last:border-0">
                <td className="px-5 py-3.5 font-medium text-ink">{s.name}</td>
                <td className="px-5 py-3.5 text-ink-soft">{s.email}</td>
                <td className="px-5 py-3.5 text-ink-soft">{s.service ?? "—"}</td>
                <td className="max-w-xs truncate px-5 py-3.5 text-ink-soft" title={s.message}>
                  {s.message}
                </td>
                <td className="px-5 py-3.5">
                  <span className="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink-soft">
                    {s.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-5 py-3.5 text-ink-soft">
                  {s.createdAt.toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-ink-soft">
        Read-only for now — wire up status updates (New → In Progress → Resolved) by extending{" "}
        <code>src/app/api/admin/services/route.ts</code>'s pattern for <code>ContactSubmission</code>.
      </p>
    </div>
  );
}

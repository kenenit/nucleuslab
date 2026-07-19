import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function NewsletterPage() {
  const subscribers = await prisma.newsletterSubscriber.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
  });
  const activeCount = subscribers.filter((s) => s.subscribed).length;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-1 font-display text-2xl font-semibold text-ink">Newsletter</h1>
          <p className="text-sm text-ink-soft">{activeCount} active subscriber{activeCount === 1 ? "" : "s"}.</p>
        </div>
        <a
          href="/api/admin/newsletter/export"
          className="rounded-sm border border-themed px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
        >
          Export CSV
        </a>
      </div>

      <div className="overflow-hidden rounded-lg border border-themed bg-surface">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-themed bg-surface-2 text-ink-soft">
            <tr>
              <th className="px-5 py-3 font-medium">Email</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length === 0 && (
              <tr>
                <td colSpan={3} className="px-5 py-8 text-center text-ink-soft">
                  No subscribers yet.
                </td>
              </tr>
            )}
            {subscribers.map((s) => (
              <tr key={s.id} className="border-b border-themed last:border-0">
                <td className="px-5 py-3.5 font-medium text-ink">{s.email}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      s.subscribed ? "bg-emerald-100 text-emerald-700" : "bg-surface-2 text-ink-soft"
                    }`}
                  >
                    {s.subscribed ? "Active" : "Unsubscribed"}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-ink-soft">{s.createdAt.toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-ink-soft">
        The "Export CSV" link is a placeholder — add a <code>/api/admin/newsletter/export</code> route that streams
        subscriber emails as CSV when you're ready to connect this to your email provider.
      </p>
    </div>
  );
}

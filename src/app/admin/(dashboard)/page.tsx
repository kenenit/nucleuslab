import { Layers, Mail, Send, FolderKanban, Package, Users } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { withRetry } from "@/lib/db-retry";

interface StatResult {
  value: number | null;
  failed: boolean;
}

async function safeCount(fn: () => Promise<number>): Promise<StatResult> {
  try {
    const value = await withRetry(fn);
    return { value, failed: false };
  } catch (err) {
    console.error("[admin overview] stat query failed", err);
    return { value: null, failed: true };
  }
}

async function getStats() {
  const [services, contactSubmissions, newsletterSubscribers, projects, products, team] = await Promise.all([
    safeCount(() => prisma.service.count()),
    safeCount(() => prisma.contactSubmission.count()),
    safeCount(() => prisma.newsletterSubscriber.count({ where: { subscribed: true } })),
    safeCount(() => prisma.project.count()),
    safeCount(() => prisma.product.count()),
    safeCount(() => prisma.teamMember.count()),
  ]);
  return { services, contactSubmissions, newsletterSubscribers, projects, products, team };
}

export default async function AdminOverviewPage() {
  const stats = await getStats();
  const anyFailed = Object.values(stats).some((s) => s.failed);

  const cards = [
    { label: "Services", stat: stats.services, icon: Layers, href: "/admin/services" },
    { label: "Products", stat: stats.products, icon: Package, href: "/admin/products" },
    { label: "Portfolio projects", stat: stats.projects, icon: FolderKanban, href: "/admin/portfolio" },
    { label: "Team members", stat: stats.team, icon: Users, href: "/admin/team" },
    { label: "Contact submissions", stat: stats.contactSubmissions, icon: Mail, href: "/admin/contact-submissions" },
    { label: "Newsletter subscribers", stat: stats.newsletterSubscribers, icon: Send, href: "/admin/newsletter" },
  ];

  return (
    <div>
      <h1 className="mb-1 font-display text-2xl font-semibold text-ink">Overview</h1>
      <p className="mb-8 text-sm text-ink-soft">A snapshot of what's happening on the site.</p>

      {anyFailed && (
        <div className="mb-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          Some stats couldn&apos;t load — this usually means the database was waking up from being idle
          (common on free-tier Postgres like Neon after a period of inactivity). Refresh the page in a few
          seconds; if it keeps happening, check your database provider&apos;s dashboard to confirm the
          instance isn&apos;t paused.
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <a
              key={card.label}
              href={card.href}
              className="rounded-lg border border-themed bg-surface p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-brand-light text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-display text-3xl font-bold text-ink">
                {card.stat.failed ? <span className="text-ink-soft">—</span> : card.stat.value}
              </div>
              <div className="mt-1 text-sm text-ink-soft">{card.label}</div>
            </a>
          );
        })}
      </div>

      <div className="mt-8 rounded-lg border border-themed bg-surface p-6">
        <h2 className="mb-2 text-sm font-semibold text-ink">What's scaffolded here</h2>
        <p className="text-sm text-ink-soft">
          Services, Products, Portfolio, Team, contact submissions, and newsletter subscribers all have full CRUD
          screens now. Testimonials, blog posts, and careers share the same Prisma schema (see{" "}
          <code>prisma/schema.prisma</code>) and API-route pattern (see{" "}
          <code>src/app/api/admin/services/route.ts</code>) — duplicate that pattern to add their management
          screens next.
        </p>
      </div>
    </div>
  );
}

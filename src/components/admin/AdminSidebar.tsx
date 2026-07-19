"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { LayoutDashboard, Layers, Package, FolderKanban, Users, Mail, Send, LogOut, ExternalLink } from "lucide-react";
import { OrbitMark } from "@/components/ui/OrbitMark";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/services", label: "Services", icon: Layers },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/portfolio", label: "Portfolio", icon: FolderKanban },
  { href: "/admin/team", label: "Team", icon: Users },
  { href: "/admin/contact-submissions", label: "Contact submissions", icon: Mail },
  { href: "/admin/newsletter", label: "Newsletter", icon: Send },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <aside className="flex w-64 flex-none flex-col border-r border-themed bg-surface p-5">
      <Link href="/admin" className="mb-8 flex items-center gap-2.5 px-1 font-display text-base font-bold text-ink">
        <OrbitMark size={26} />
        Nucleus Admin
      </Link>

      <nav className="flex flex-1 flex-col gap-1">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                active ? "bg-brand-light text-brand" : "text-ink-soft hover:bg-surface-2 hover:text-ink"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 flex flex-col gap-1 border-t border-themed pt-5">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface-2 hover:text-ink"
        >
          <ExternalLink className="h-4 w-4" />
          View site
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium text-ink-soft hover:bg-surface-2 hover:text-ink"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
        {session?.user?.email && (
          <p className="mt-2 truncate px-3 text-xs text-ink-soft">{session.user.email}</p>
        )}
      </div>
    </aside>
  );
}

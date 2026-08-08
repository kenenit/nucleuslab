"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { LayoutDashboard, Layers, Package, FolderKanban, Users, FileText, Mail, Send, LogOut, ExternalLink, Quote, Briefcase, Settings, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/services", label: "Services", icon: Layers },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/portfolio", label: "Portfolio", icon: FolderKanban },
  { href: "/admin/team", label: "Team", icon: Users },
  { href: "/admin/testimonials", label: "Testimonials", icon: Quote },
  { href: "/admin/careers", label: "Careers", icon: Briefcase },
  { href: "/admin/blog", label: "Blog", icon: FileText },
  { href: "/admin/contact-submissions", label: "Contact submissions", icon: Mail },
  { href: "/admin/newsletter", label: "Newsletter", icon: Send },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const sidebarContent = (
    <>
      <Link href="/admin" onClick={() => setOpen(false)} className="mb-8 flex items-center gap-2.5 px-1 font-display text-base font-bold text-ink">
        <Logo size={26} />
        Nucleus Admin
      </Link>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                active ? "bg-brand-light text-brand" : "text-ink-soft hover:bg-surface-2 hover:text-ink"
              )}
            >
              <Icon className="h-4 w-4 flex-none" />
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
    </>
  );

  return (
    <>
      {/* Mobile top bar — only visible below md, holds the hamburger toggle */}
      <div className="flex items-center justify-between border-b border-themed bg-surface p-4 md:hidden">
        <Link href="/admin" className="flex items-center gap-2 font-display text-sm font-bold text-ink">
          <Logo size={22} />
          Nucleus Admin
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="rounded-md p-2 text-ink-soft hover:bg-surface-2"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Desktop sidebar — always visible at md and up */}
      <aside className="hidden w-64 flex-none flex-col border-r border-themed bg-surface p-5 md:flex">
        {sidebarContent}
      </aside>

      {/* Mobile drawer — slides in over content, only rendered open on small screens */}
      {open && (
        <div className="fixed inset-0 z-[300] md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-hidden="true" />
          <aside className="relative flex h-full w-72 max-w-[85vw] flex-col bg-surface p-5 shadow-xl">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 rounded-md p-2 text-ink-soft hover:bg-surface-2"
            >
              <X className="h-5 w-5" />
            </button>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}

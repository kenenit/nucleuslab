import type { ReactNode } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface-2 md:flex-row">
      <AdminSidebar />
      <main className="flex-1 overflow-x-hidden p-4 md:p-6 lg:p-10">{children}</main>
    </div>
  );
}

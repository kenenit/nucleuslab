import type { ReactNode } from "react";
import { AdminSessionProvider } from "@/components/admin/AdminSessionProvider";

export const metadata = { title: "Admin — Nucleus Labs", robots: { index: false, follow: false } };

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminSessionProvider>{children}</AdminSessionProvider>;
}

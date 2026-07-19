import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "glass";
  className?: string;
  showArrow?: boolean;
}

export function Button({ href, children, variant = "primary", className, showArrow = true }: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-[15px] font-semibold whitespace-nowrap transition-all duration-300 ease-out";

  const variants: Record<string, string> = {
    primary:
      "bg-brand text-white shadow-sm hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[0_10px_34px_rgba(21,82,240,0.5)]",
    ghost:
      "border border-themed text-ink hover:border-brand hover:text-brand hover:-translate-y-0.5",
    glass:
      "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-accent",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

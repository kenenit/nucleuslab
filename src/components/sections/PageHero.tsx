import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  crumbLabel: string;
}

export function PageHero({ eyebrow, title, description, crumbLabel }: PageHeroProps) {
  return (
    <section
      data-hero
      className="relative isolate -mt-[76px] overflow-hidden pb-12 pt-[calc(76px+48px)] md:pb-20 md:pt-[calc(76px+72px)]"
      style={{
        background: "linear-gradient(165deg,#04060F 0%,#080D22 38%,#0E1C48 72%,#12275C 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute -inset-[15%] animate-grid-drift"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            WebkitMaskImage: "radial-gradient(circle at 62% 38%, black 0%, transparent 68%)",
            maskImage: "radial-gradient(circle at 62% 38%, black 0%, transparent 68%)",
          }}
        />
        <div
          className="absolute -right-24 -top-44 h-[560px] w-[560px] rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle,rgba(21,82,240,.5),transparent 70%)" }}
        />
        <div
          className="absolute -bottom-52 -left-28 h-[460px] w-[460px] rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle,rgba(47,213,200,.2),transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-10">
        <Reveal className="mb-5 flex items-center gap-2 font-mono text-[.78rem] text-[#8B97BE]">
          <Link href="/" className="text-[#B7C2E2] hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-white">{crumbLabel}</span>
        </Reveal>
        <Reveal delayMs={60}>
          <span className="font-mono text-xs uppercase tracking-[.14em] text-accent">{eyebrow}</span>
        </Reveal>
        <Reveal delayMs={100}>
          <h1 className="my-5 max-w-[820px] font-display text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[3.4rem]">
            {title}
          </h1>
        </Reveal>
        <Reveal delayMs={140}>
          <p className="max-w-[640px] text-lg text-[#B7C2E2]">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}

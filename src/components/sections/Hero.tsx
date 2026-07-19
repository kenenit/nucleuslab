import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      data-hero
      className="relative isolate -mt-[76px] overflow-hidden pb-14 pt-[calc(76px+56px)] md:pb-28 md:pt-[calc(76px+96px)]"
      style={{
        background: "linear-gradient(165deg,#04060F 0%,#080D22 38%,#0E1C48 72%,#12275C 100%)",
      }}
    >
      {/* Decorative background layers */}
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
        {[
          { top: "18%", left: "12%", delay: "-1s" },
          { top: "32%", left: "82%", delay: "-3.5s" },
          { top: "64%", left: "22%", delay: "-5s" },
          { top: "76%", left: "68%", delay: "-2s" },
          { top: "12%", left: "55%", delay: "-6.5s" },
          { top: "48%", left: "8%", delay: "-4s" },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute h-[3px] w-[3px] animate-[particleFloat_9s_ease-in-out_infinite] rounded-full bg-white/55"
            style={{
              top: p.top,
              left: p.left,
              animationDelay: p.delay,
              boxShadow: "0 0 8px rgba(120,160,255,.8)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[.14em] text-accent">
                ● SOFTWARE · AI · DIGITAL PRODUCTS
              </span>
            </Reveal>
            <Reveal delayMs={80}>
              <h1 className="my-5 font-display text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.4rem]">
                Build from
                <br />
                the core.
              </h1>
            </Reveal>
            <Reveal delayMs={140}>
              <p className="mb-8 max-w-[480px] text-lg text-[#B7C2E2]">
                Nucleus Labs designs and engineers the software, AI systems, and digital products companies build
                their operations on — from first prototype to production scale.
              </p>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="mb-12 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Start a project
                </Button>
                <Button href="/portfolio" variant="glass">
                  See our work
                </Button>
              </div>
            </Reveal>
            <Reveal delayMs={260}>
              <div className="flex flex-wrap gap-8">
                {[
                  ["6", "core service lines"],
                  ["3", "in-house products"],
                  ["10+", "industries served"],
                ].map(([num, label]) => (
                  <div key={label} className="font-mono text-[.78rem] text-[#8B97BE]">
                    <strong className="block font-display text-2xl font-semibold text-white">{num}</strong>
                    {label}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="relative mx-auto aspect-square w-full max-w-[460px]">
            <div className="absolute inset-[8%] rounded-[32px] border border-white/10 bg-white/[.035] shadow-[0_24px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl" />
            <svg viewBox="0 0 400 400" className="relative z-10 h-full w-full">
              <defs>
                <filter id="coreGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <ellipse
                cx="200" cy="200" rx="180" ry="80" transform="rotate(20 200 200)"
                fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="1.5"
                className="origin-center animate-spin-slow"
              />
              <ellipse
                cx="200" cy="200" rx="150" ry="150"
                fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="1.5"
                className="origin-center animate-spin-slow-reverse"
              />
              <ellipse
                cx="200" cy="200" rx="180" ry="80" transform="rotate(-40 200 200)"
                fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="1.5"
                className="origin-center animate-spin-slow"
              />
              <circle cx="200" cy="200" r="34" fill="#4C7CFF" filter="url(#coreGlow)" />
              <circle cx="370" cy="160" r="6" fill="#2FD5C8" />
              <circle cx="60" cy="250" r="5" fill="#4C7CFF" />
              <circle cx="260" cy="70" r="4" fill="#2FD5C8" />
            </svg>
            {[
              { label: "AI", style: { top: "8%", left: "2%" } },
              { label: "Web", style: { bottom: "14%", right: "0%" } },
              { label: "Mobile", style: { bottom: "2%", left: "18%" } },
            ].map((chip) => (
              <span
                key={chip.label}
                className="absolute z-20 animate-float rounded-full border border-white/15 bg-[#0E1634]/55 px-4 py-2 font-mono text-xs text-[#EAF0FF] shadow-lg backdrop-blur-md"
                style={chip.style}
              >
                {chip.label}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

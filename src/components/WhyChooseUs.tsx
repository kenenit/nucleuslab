import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  { title: "Full lifecycle, one team", body: "Consultation through maintenance and support — the same team owns the outcome end to end." },
  { title: "AI-native by default", body: "We design for intelligent features from the architecture stage, not as an afterthought." },
  { title: "Built to scale", body: "Clean, typed, documented code and infrastructure that grows with your business instead of against it." },
  { title: "Transparent process", body: "You always know what stage your project is in and what happens next — no black boxes." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface-2 py-16 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[.14em] text-brand">WHY NUCLEUS LABS</span>
            </Reveal>
            <Reveal delayMs={60}>
              <h2 className="my-5 font-display text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[2.85rem]">
                Engineering-first, from day one.
              </h2>
            </Reveal>
            <div className="flex flex-col gap-7">
              {reasons.map((reason, i) => (
                <Reveal key={reason.title} delayMs={i * 70} className="flex gap-4">
                  <span className="w-7 flex-none pt-0.5 font-mono text-[.8125rem] text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-lg font-semibold text-ink">{reason.title}</h3>
                    <p className="text-sm text-ink-soft">{reason.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delayMs={140} className="mx-auto w-full max-w-[440px]">
            <div
              className="relative flex aspect-square w-full items-center justify-center overflow-hidden"
              aria-label="Nucleus Labs engineering blueprint visualization"
            >
              <div
                className="absolute h-32 w-32 rounded-full bg-brand/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative h-[78%] w-[78%]">
                <div className="absolute inset-[18%] rounded-full border border-themed" aria-hidden="true" />
                <div className="absolute inset-[8%] rounded-full border border-themed" aria-hidden="true" />
                <div className="absolute inset-0 rounded-full border border-themed" aria-hidden="true" />

                <span className="absolute left-[22%] top-[4%] h-3 w-3 rounded-full bg-accent shadow-[0_0_16px_currentColor] animate-pulse" aria-hidden="true" />
                <span className="absolute left-[29%] top-[70%] h-3 w-3 rounded-full bg-brand shadow-[0_0_16px_currentColor] animate-pulse" aria-hidden="true" />
                <span className="absolute right-[7%] top-[49%] h-3 w-3 rounded-full bg-accent shadow-[0_0_16px_currentColor] animate-pulse" aria-hidden="true" />
                <span className="absolute right-[0%] top-[61%] h-3 w-3 rounded-full bg-brand shadow-[0_0_16px_currentColor] animate-pulse" aria-hidden="true" />

                <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-center shadow-[0_0_34px_rgba(37,99,235,0.28)]">
                  <span className="font-mono text-[11px] font-semibold uppercase leading-tight text-white">
                    Nucleus
                    <br />
                    Labs
                  </span>
                </div>

              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

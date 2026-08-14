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
            <div className="overflow-hidden rounded-lg border border-themed bg-surface shadow-lg">
              <div className="flex items-center gap-1.5 border-b border-themed px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-2 font-mono text-[11px] text-ink-soft">nucleus-labs — build log</span>
              </div>
              <div className="space-y-3 px-5 py-6 font-mono text-[13px] leading-relaxed">
                <p className="text-ink-soft">
                  <span className="text-brand">$</span> nucleus ship --project
                </p>
                {[
                  "full lifecycle ownership: on",
                  "ai-native architecture: on",
                  "typed & documented: on",
                  "status: visible to client",
                ].map((line) => (
                  <p key={line} className="flex items-center gap-2 text-ink">
                    <span className="text-accent">✓</span>
                    {line}
                  </p>
                ))}
                <p className="flex items-center gap-1.5 pt-1 text-ink-soft">
                  <span className="text-brand">$</span>
                  <span className="inline-block h-[14px] w-[7px] animate-pulse bg-brand" aria-hidden="true" />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

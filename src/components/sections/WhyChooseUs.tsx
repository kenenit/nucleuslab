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
        <div className="max-w-[640px]">
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
      </div>
    </section>
  );
}

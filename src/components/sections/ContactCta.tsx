import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

interface ContactCtaProps {
  title?: string;
  body?: string;
}

export function ContactCta({
  title = "Have a project in mind? Let's build it together.",
  body = "Tell us what you're building — we'll reply within one business day with next steps.",
}: ContactCtaProps) {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
      <Reveal
        className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-lg p-10 text-white md:flex-row md:items-center md:p-16"
        style={{ background: "linear-gradient(135deg,#1552F0,#0F3DBD)" }}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-[280px] w-[280px] rounded-full border border-white/20"
          aria-hidden="true"
        />
        <div>
          <h2 className="max-w-[520px] font-display text-[2rem] font-semibold leading-tight tracking-[-0.02em] md:text-[2.85rem]">
            {title}
          </h2>
          <p className="mt-3 max-w-[440px] text-white/80">{body}</p>
        </div>
        <Button href="/contact" variant="primary" className="!bg-white !text-brand-dark hover:!bg-surface-2">
          Get in touch
        </Button>
      </Reveal>
    </section>
  );
}

const industries = ["Restaurants", "Hotels", "Healthcare", "Education", "Retail", "NGOs"];

export function LogoStrip() {
  return (
    <div className="border-y border-themed py-10">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10">
        <p className="mb-5 text-center font-mono text-xs uppercase tracking-[.1em] text-ink-soft">
          Building for teams across industries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-55 md:gap-16">
          {industries.map((name) => (
            <span key={name} className="font-display text-[1.05rem] font-semibold text-ink-soft">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

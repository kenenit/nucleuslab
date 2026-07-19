import { PageHero } from "@/components/sections/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms governing use of the Nucleus Labs website and services.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title="Terms & Conditions"
        description="Placeholder terms — replace with counsel-reviewed terms before this site is deployed publicly."
        crumbLabel="Terms & Conditions"
      />
      <section className="mx-auto max-w-[760px] px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-ink-soft">
          <p className="text-xs font-mono text-ink-soft">Last updated: [date] — placeholder content, not legal advice.</p>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">1. Acceptance of terms</h2>
            <p>By using this website, you agree to these terms. If you don&apos;t agree, please don&apos;t use the site.</p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">2. Services</h2>
            <p>
              Nucleus Labs provides software development, AI solutions, and related digital services as described
              on this site. Specific project terms are governed by individual service agreements, not this page.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">3. Intellectual property</h2>
            <p>
              Content on this site — text, graphics, logos — is owned by Nucleus Labs unless otherwise noted, and
              may not be reproduced without permission.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">4. Limitation of liability</h2>
            <p>
              This website is provided &quot;as is&quot; without warranties of any kind. Nucleus Labs is not liable
              for damages arising from use of this site.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">5. Changes</h2>
            <p>We may update these terms from time to time; continued use of the site means you accept the changes.</p>
          </div>
        </div>
      </section>
    </>
  );
}

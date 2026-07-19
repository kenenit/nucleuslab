import { PageHero } from "@/components/sections/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Nucleus Labs collects, uses, and protects your information.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title="Privacy Policy"
        description="Placeholder policy — replace with counsel-reviewed terms before this site is deployed publicly."
        crumbLabel="Privacy Policy"
      />
      <section className="mx-auto max-w-[760px] px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-ink-soft">
          <p className="text-xs font-mono text-ink-soft">Last updated: [date] — placeholder content, not legal advice.</p>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">1. Information we collect</h2>
            <p>
              When you use our contact form, newsletter signup, or job application form, we collect the information
              you provide directly — such as your name, email, phone number, and message content.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">2. How we use it</h2>
            <p>
              We use this information to respond to inquiries, send newsletter updates (only if you subscribed),
              and evaluate job applications. We do not sell personal information to third parties.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">3. Data storage</h2>
            <p>
              Submitted information is stored in our database and retained only as long as necessary for the
              purpose it was collected for.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">4. Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any time by
              contacting us.
            </p>
          </div>
          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">5. Contact</h2>
            <p>Questions about this policy can be sent to hello@nucleuslabs.com.</p>
          </div>
        </div>
      </section>
    </>
  );
}

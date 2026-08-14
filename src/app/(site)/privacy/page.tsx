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
        description="How Nucleus Labs collects, uses, and protects your information."
        crumbLabel="Privacy Policy"
      />
      <section className="mx-auto max-w-[760px] px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-ink-soft">
          <p className="text-xs font-mono text-ink-soft">Effective Date: August 14, 2026</p>

          <p>
            Nucleus Labs (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is
            committed to protecting personal data in accordance with the Personal Data Protection Proclamation No.
            1321/2024 and other applicable laws of the Federal Democratic Republic of Ethiopia. This Privacy Policy
            explains what personal data we collect through this website (the &quot;Site&quot;), why we collect it,
            how it is used, shared, retained, and protected, and what rights you have.
          </p>
          <p>
            This Policy applies to visitors of the Site. It does not apply to information we may separately collect
            from clients or employees under a signed contract or employment agreement, which is governed by the
            terms of that contract.
          </p>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">1. Who We Are</h2>
            <p>
              Nucleus Labs is a technology company providing software development, AI solutions, website
              development, mobile app development, and related digital services, operating remotely with a team
              based in Addis Ababa, Ethiopia, and operating this Site as its corporate and marketing presence.
            </p>
            <p className="mt-2">
              Contact: NucleusLabs.et@gmail.com · +251 92 324 3132
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">
              2. What Personal Data We Collect and Why
            </h2>
            <p>
              We only collect personal data that you voluntarily provide to us through the following features of
              the Site. We do not require account registration and do not collect personal data from visitors who
              simply browse the Site.
            </p>

            <h3 className="mb-1 mt-4 font-display text-sm font-semibold text-ink">2.1 Contact Form</h3>
            <p>
              When you submit our contact form, we collect: your name, email address, phone number (optional),
              company name (optional), the service you&apos;re interested in (optional), and your message. We also
              record which page or call-to-action the inquiry came from, for our own internal tracking.
            </p>
            <p className="mt-1 italic">
              Purpose: to respond to your inquiry, evaluate whether we can help with your project, and follow up
              with you.
            </p>

            <h3 className="mb-1 mt-4 font-display text-sm font-semibold text-ink">2.2 Newsletter Subscription</h3>
            <p>
              When you subscribe to our newsletter, we collect your email address and record your subscription
              status (subscribed/unsubscribed).
            </p>
            <p className="mt-1 italic">
              Purpose: to send you updates from Nucleus Labs, if and only if you have subscribed. You may
              unsubscribe at any time (see Section 8).
            </p>

            <h3 className="mb-1 mt-4 font-display text-sm font-semibold text-ink">2.3 Job Applications</h3>
            <p>
              When you apply for a role through our careers page, we collect: your full name, email address, phone
              number (optional), a link to your resume (which you provide, e.g., a Google Drive or LinkedIn link —
              we do not host resume files ourselves), an optional cover letter, and the position you are applying
              for.
            </p>
            <p className="mt-1 italic">
              Purpose: to evaluate your application and contact you about the role. We do not use job application
              data for any other purpose.
            </p>

            <h3 className="mb-1 mt-4 font-display text-sm font-semibold text-ink">
              2.4 Technical / Anti-Abuse Data
            </h3>
            <p>
              To protect our forms from spam and abuse, we temporarily process your IP address at the time of
              submission to apply rate limits (e.g., blocking excessive submissions from the same source in a short
              period). This IP-based check is held briefly in server memory for this anti-spam purpose and is not
              stored in our database or linked to your other submissions.
            </p>

            <h3 className="mb-1 mt-4 font-display text-sm font-semibold text-ink">2.5 What We Do Not Collect</h3>
            <p>
              The Site does not use advertising or analytics tracking cookies, does not process payments, and does
              not require you to create a public account. A light/dark theme preference, if you set one, is stored
              only in your own browser (not sent to or stored by us) and is not personal data we control.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">3. Legal Basis for Processing</h2>
            <p>
              Under the Personal Data Protection Proclamation No. 1321/2024, we process your personal data on the
              following bases:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-ink">Consent</strong> — where you voluntarily submit a form (contact,
                newsletter, job application), your submission constitutes informed consent to the processing
                described in this Policy for that purpose.
              </li>
              <li>
                <strong className="text-ink">Legitimate interest</strong> — for anti-spam/rate-limiting processing
                of IP addresses, and for maintaining the security and integrity of the Site.
              </li>
              <li>
                <strong className="text-ink">Performance of pre-contractual steps</strong> — where you contact us
                about a potential project, to take steps at your request before entering into a service agreement.
              </li>
              <li>
                <strong className="text-ink">Recruitment-related processing</strong> — for job application data, to
                assess your suitability for the role you applied to.
              </li>
            </ul>
            <p className="mt-2">
              We do not process any special category / sensitive personal data (such as data about health,
              ethnicity, religion, or political opinion) through the Site&apos;s forms, and we ask that you do not
              include such information in your messages, cover letters, or resumes unless it is directly relevant
              and necessary (e.g., a disability accommodation request in a job application).
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">4. How We Share Your Data</h2>
            <p>We do not sell personal data. We share personal data only in the following circumstances:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-ink">Service providers (data processors)</strong> who host or support the
                Site on our behalf, currently including our hosting and file-storage provider (Vercel) and our
                database provider. These providers process data only on our instructions and only to the extent
                necessary to operate the Site.
              </li>
              <li>
                <strong className="text-ink">Internal staff</strong> — Nucleus Labs team members with access to our
                administrative dashboard, on a need-to-know basis (e.g., staff reviewing job applications or
                contact inquiries).
              </li>
              <li>
                <strong className="text-ink">Legal compliance</strong> — where disclosure is required by Ethiopian
                law, a valid court order, or a lawful request from the Ethiopian Communications Authority or another
                competent authority.
              </li>
              <li>
                <strong className="text-ink">Business transfers</strong> — if Nucleus Labs undergoes a merger,
                acquisition, or sale of assets, personal data may be transferred as part of that transaction,
                subject to equivalent protections.
              </li>
            </ul>
            <p className="mt-2">
              We do not use any third-party analytics, advertising, or social-media tracking service on the Site at
              this time. If this changes, this Policy will be updated before such a service is enabled.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">5. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary for the purpose it was collected, specifically:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-ink">Contact form submissions</strong> — retained while your inquiry is
                open and for a reasonable period afterward for our records, then deleted or anonymized.
              </li>
              <li>
                <strong className="text-ink">Newsletter subscriptions</strong> — retained for as long as you remain
                subscribed; if you unsubscribe, we retain a minimal record of the unsubscribe event to honor your
                request and avoid re-contacting you.
              </li>
              <li>
                <strong className="text-ink">Job applications</strong> — retained for the duration of the relevant
                hiring process and for a reasonable period afterward in case the role is reopened or for our
                internal recruitment records, then deleted.
              </li>
              <li>
                <strong className="text-ink">Rate-limiting IP data</strong> — held briefly in server memory and not
                persisted to our database.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">6. Data Security</h2>
            <p>
              We apply reasonable technical and organizational measures to protect personal data, consistent with
              the Personal Data Protection Proclamation No. 1321/2024 and the Computer Crime Proclamation No.
              958/2016, including: encrypted transmission (HTTPS) across the Site, hashed (not plain-text) storage
              of any administrative account passwords, role-based access limiting who on our team can view
              submitted data, and reliance on reputable infrastructure providers for hosting and storage.
            </p>
            <p className="mt-2">
              No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">
              7. Cookies and Similar Technologies
            </h2>
            <p>
              The Site does not use advertising, marketing, or third-party analytics cookies. The only cookie
              currently in use is a strictly necessary session cookie set when a Nucleus Labs staff member logs into
              the private administrative dashboard; this cookie is not set for ordinary visitors browsing the
              public Site and is not used to track visitors. Your theme (light/dark mode) preference, if set, is
              stored locally in your browser only and is never transmitted to us.
            </p>
            <p className="mt-2">
              If we introduce analytics or other non-essential cookies in the future, we will update this Policy
              and, where required by law, seek your consent first.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">8. Your Rights</h2>
            <p>
              Under the Personal Data Protection Proclamation No. 1321/2024, you have the right, in relation to
              your personal data, to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>be informed about how your data is processed (as set out in this Policy);</li>
              <li>request access to the personal data we hold about you;</li>
              <li>request correction of inaccurate or incomplete data;</li>
              <li>request erasure of your data, subject to any legal retention obligations;</li>
              <li>request restriction of processing in certain circumstances;</li>
              <li>
                object to processing, including for direct marketing (you can unsubscribe from our newsletter at
                any time using the link in any newsletter email, or by contacting us); and
              </li>
              <li>receive your data in a structured, commonly used format, where technically feasible.</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at NucleusLabs.et@gmail.com. We will respond within a
              reasonable time and in accordance with the Proclamation&apos;s requirements.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">9. Children&apos;s Data</h2>
            <p>
              The Site&apos;s forms are not directed at children. We do not knowingly collect personal data from
              children under the age of majority under Ethiopian law (18 years), except where a minor applies for
              an internship or role through the careers page with the knowledge and involvement of a parent or
              guardian, consistent with applicable labor law on minimum working age. If we become aware that we
              have inadvertently collected data from a child in violation of this Policy, we will delete it.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">10. Data Breach Notification</h2>
            <p>
              In the event of a personal data breach that poses a risk to your rights and freedoms, we will notify
              the Ethiopian Communications Authority and, where required, affected individuals, in accordance with
              the timelines and procedures under the Personal Data Protection Proclamation No. 1321/2024.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">11. Cross-Border Data Transfers</h2>
            <p>
              Because our hosting, file storage, and database infrastructure may be located outside Ethiopia, your
              personal data may be transferred to and processed in other countries. Where this occurs, we will only
              transfer personal data in accordance with the conditions set out in the Personal Data Protection
              Proclamation No. 1321/2024, which permit a transfer where: the recipient country or entity offers an
              adequate level of protection; you have given explicit, informed consent to the transfer; the transfer
              is otherwise necessary as permitted under the Proclamation; or the transfer is made from a register
              intended to provide information to the public.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">
              12. Complaints and Contact Information
            </h2>
            <p>
              If you have questions, concerns, or a complaint about how we handle your personal data, please
              contact us first at:
            </p>
            <p className="mt-2">
              Nucleus Labs
              <br />
              Remote — Addis Ababa, Ethiopia
              <br />
              Email: NucleusLabs.et@gmail.com
              <br />
              Phone: +251 92 324 3132
            </p>
            <p className="mt-2">
              If you are not satisfied with our response, you have the right to lodge a complaint with the
              Ethiopian Communications Authority, the supervisory authority responsible for enforcing the Personal
              Data Protection Proclamation No. 1321/2024.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our data practices, the
              Site, or applicable Ethiopian law. The effective date at the top of this page indicates when it was
              last revised. Material changes will be reflected here; we encourage you to review this Policy
              periodically.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

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
        description="Terms governing use of the Nucleus Labs website and services."
        crumbLabel="Terms & Conditions"
      />
      <section className="mx-auto max-w-[760px] px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-ink-soft">
          <p className="text-xs font-mono text-ink-soft">Effective Date: August 14, 2026</p>

          <p>
            These Terms & Conditions (&quot;Terms&quot;) govern access to and use of this website (the
            &quot;Site&quot;) and the services described on it, operated by Nucleus Labs, a business operating in
            the Federal Democratic Republic of Ethiopia (&quot;Nucleus Labs,&quot; &quot;we,&quot; &quot;us,&quot;
            or &quot;our&quot;).
          </p>
          <p>
            By accessing or using the Site, submitting the contact form, subscribing to our newsletter, or applying
            for a position through the Site, you (&quot;you&quot; or &quot;user&quot;) agree to be bound by these
            Terms. If you do not agree, please do not use the Site.
          </p>
          <p>
            These Terms should be read together with our Privacy Policy, which explains how we collect and use
            personal data.
          </p>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">
              1. About the Site and What It Is Not
            </h2>
            <p>
              The Site is a corporate and marketing website through which Nucleus Labs presents its software
              development, AI solutions, website development, mobile app development, and related digital
              services, showcases its portfolio and in-house products, publishes blog content, and accepts contact
              inquiries, newsletter sign-ups, and job applications.
            </p>
            <p className="mt-2">
              The Site does not offer e-commerce checkout, online payment processing, or user account registration
              for the general public. No goods or services are purchased or paid for directly through the Site. Any
              engagement for client services (e.g., a software development project) is governed by a separate,
              signed service agreement or statement of work between you and Nucleus Labs, not by these Terms alone.
            </p>
            <p className="mt-2">
              Nothing on the Site constitutes a binding offer to contract. Prices, timelines, service descriptions,
              and portfolio results shown on the Site are illustrative and may change without notice.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">2. Eligibility and Accounts</h2>
            <p>
              <strong className="text-ink">Public visitors.</strong> The Site does not require registration or an
              account to browse, submit the contact form, subscribe to the newsletter, or apply for a job. Any
              person may use these features, subject to Section 3.
            </p>
            <p className="mt-2">
              <strong className="text-ink">Minors.</strong> If you are under the age of majority under Ethiopian
              law (18 years), you may only use the Site&apos;s forms with the involvement of a parent or legal
              guardian, and only to the extent permitted for job applications by Ethiopian labor law regarding
              minimum working age.
            </p>
            <p className="mt-2">
              <strong className="text-ink">Staff/administrator accounts.</strong> Separately, Nucleus Labs
              maintains a private administrative login for its own staff to manage website content. This login is
              not available to the public, is not a &quot;user account&quot; in the consumer sense, and is
              governed internally by Nucleus Labs&apos; own access and confidentiality policies rather than by
              these Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">
              3. User Responsibilities and Prohibited Activities
            </h2>
            <p>When using the Site, you agree that you will not:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>submit false, misleading, or fraudulent information through any form on the Site;</li>
              <li>
                attempt to gain unauthorized access to the Site, its administrative areas, servers, or any
                connected database, in violation of the Computer Crime Proclamation No. 958/2016;
              </li>
              <li>
                interfere with, disrupt, or overburden the Site&apos;s infrastructure, including by circumventing
                the Site&apos;s automated anti-spam and rate-limiting protections;
              </li>
              <li>introduce viruses, malware, or other harmful code to the Site;</li>
              <li>
                scrape, harvest, or systematically extract content or data from the Site without our prior written
                consent;
              </li>
              <li>impersonate any person or entity, or misrepresent your affiliation with any person or entity;</li>
              <li>use the Site to transmit unlawful, defamatory, obscene, or infringing content; or</li>
              <li>
                use the job application form to submit an application for a position with no genuine intention of
                being considered for it.
              </li>
            </ul>
            <p className="mt-2">
              Violation of this Section may, in addition to any remedy under these Terms, expose you to criminal or
              civil liability under Ethiopian law, including under the Computer Crime Proclamation No. 958/2016.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">4. Services and Platform Rules</h2>
            <p>
              The Site presents information about Nucleus Labs&apos; service lines and in-house products. Engaging
              Nucleus Labs for any such service requires a separate written agreement, which will set out scope,
              fees, timelines, and deliverables and will govern in the event of any conflict with these Terms
              regarding that engagement.
            </p>
            <p className="mt-2">
              Content submitted through the contact form is reviewed by our team and used to respond to your
              inquiry. Submitting the form does not create any obligation on Nucleus Labs to accept a project or
              respond within a specific timeframe, though we aim to reply within a reasonable period.
            </p>
            <p className="mt-2">
              The careers section of the Site lists open roles as published by Nucleus Labs from time to time. A
              listing does not guarantee that the role remains open, and submission of an application does not
              guarantee an interview or offer of employment.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">5. Payments and Refunds</h2>
            <p>
              The Site itself does not process payments. Any fees for client services are agreed and invoiced
              separately under the relevant service agreement, and refund terms (if any) will be set out in that
              agreement rather than in these Terms.
            </p>
            <p className="mt-2">
              If, in the future, Nucleus Labs introduces paid features directly through the Site, this Section will
              be updated to describe applicable pricing, billing, and refund/cancellation terms in compliance with
              the Electronic Transactions Proclamation No. 1205/2020 and the Trade Competition and Consumer
              Protection Proclamation No. 813/2013.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">6. Intellectual Property</h2>
            <p>
              Unless otherwise indicated, all content on the Site — including text, graphics, logos, the Nucleus
              Labs name and marks, product names, images, portfolio case studies, and site design — is owned by or
              licensed to Nucleus Labs and is protected under the Copyright and Neighboring Rights Protection
              Proclamation No. 410/2004 (as amended by Proclamation No. 872/2014) and, where applicable, the
              Trademark Registration and Protection Proclamation No. 501/2006.
            </p>
            <p className="mt-2">
              You may view and download content from the Site for your own personal, non-commercial reference. You
              may not reproduce, distribute, modify, publicly display, or create derivative works from Site content
              for commercial purposes without our prior written permission.
            </p>
            <p className="mt-2">
              Client names, logos, and project details shown in our portfolio are displayed with permission or
              based on publicly available information; if you believe your organization&apos;s materials appear on
              the Site in error, please contact us using the details in Section 15.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">7. User-Generated Content</h2>
            <p>
              The Site does not currently host public comments, reviews, forums, or other content authored by
              visitors and displayed to other visitors.
            </p>
            <p className="mt-2">
              Information you submit through the contact form, newsletter sign-up, or job application form (such
              as your message, cover letter, or resume link) is not published on the Site. By submitting it, you
              confirm that you have the right to share it with us and that it does not infringe any third
              party&apos;s rights.
            </p>
            <p className="mt-2">
              Testimonials and case study content displayed on the Site are provided or approved by the relevant
              clients and are not user-generated content in the sense of being submitted directly by Site visitors.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">8. Third-Party Services and Links</h2>
            <p>
              The Site may link to third-party websites (for example, social media profiles, external portfolios,
              or a job applicant&apos;s resume hosted on Google Drive or LinkedIn). We do not control and are not
              responsible for the content, privacy practices, or availability of third-party sites.
            </p>
            <p className="mt-2">
              The Site is hosted and delivered using third-party infrastructure providers (currently Vercel, for
              hosting and file storage). These providers process data on our behalf as described in our Privacy
              Policy; they do not have an independent relationship with you under these Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">9. Suspension and Termination</h2>
            <p>
              We may, at our discretion and without prior notice, restrict, suspend, or block any user&apos;s
              access to the Site&apos;s interactive features (such as the contact form or newsletter) where we
              reasonably believe these Terms have been violated, including in cases of suspected spam, fraud, or
              abuse.
            </p>
            <p className="mt-2">
              We may modify, suspend, or discontinue all or part of the Site at any time, including specific
              features such as the newsletter or careers section, without liability to you.
            </p>
            <p className="mt-2">
              Sections of these Terms that by their nature should survive termination of your use of the Site —
              including Sections 6 (Intellectual Property), 10 (Disclaimers and Liability), 13 (Governing Law), and
              14 (Dispute Resolution) — will continue to apply.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">
              10. Disclaimers and Limitation of Liability
            </h2>
            <p>
              The Site and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To
              the maximum extent permitted under Ethiopian law, Nucleus Labs makes no warranties, express or
              implied, regarding the accuracy, completeness, reliability, or availability of the Site or its
              content.
            </p>
            <p className="mt-2">
              Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited under
              Ethiopian law, including liability arising from fraud or willful misconduct.
            </p>
            <p className="mt-2">
              Subject to the above, and to the fullest extent permitted by the Civil Code of Ethiopia and other
              applicable law, Nucleus Labs shall not be liable for any indirect, incidental, or consequential loss
              arising from your use of, or inability to use, the Site.
            </p>
            <p className="mt-2">
              This Section does not limit or exclude any liability Nucleus Labs may separately assume under a
              signed client service agreement, which is governed by its own terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">11. Force Majeure</h2>
            <p>
              Nucleus Labs shall not be liable for any failure or delay in performing its obligations under these
              Terms (including maintaining Site availability) where such failure or delay results from
              circumstances beyond its reasonable control, including but not limited to internet or
              telecommunications outages, power failures, acts of government, civil unrest, natural disasters, or
              failures of third-party hosting or infrastructure providers.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">12. Electronic Agreements</h2>
            <p>
              You agree that your use of the Site, including submitting any form on the Site, constitutes an
              electronic transaction and that any resulting communication or record has the same legal effect as a
              paper-based equivalent, in accordance with the Electronic Transactions Proclamation No. 1205/2020.
            </p>
            <p className="mt-2">
              Where a signature is required in connection with a separate service agreement, an electronic
              signature that meets the reliability criteria of the Electronic Signature Proclamation No. 1072/2018
              and the Electronic Transactions Proclamation No. 1205/2020 will be treated as legally valid and
              binding, unless the parties agree otherwise in writing.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">13. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Federal Democratic
              Republic of Ethiopia, including the Civil Code of Ethiopia, the Commercial Code of Ethiopia
              Proclamation No. 1243/2021, the Electronic Transactions Proclamation No. 1205/2020, and other
              applicable Ethiopian proclamations, regulations, and directives referenced in these Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">
              14. Dispute Resolution and Jurisdiction
            </h2>
            <p>
              If a dispute arises out of or relates to these Terms or your use of the Site, the parties will first
              attempt in good faith to resolve it informally by contacting Nucleus Labs using the details in
              Section 15.
            </p>
            <p className="mt-2">
              If the dispute is not resolved informally within a reasonable period, and where the dispute is
              commercial in nature, the parties may agree to submit it to arbitration or conciliation under the
              Arbitration and Conciliation Working Procedure Proclamation No. 1237/2021.
            </p>
            <p className="mt-2">
              Absent an agreement to arbitrate, the courts of the Federal Democratic Republic of Ethiopia, seated in
              Addis Ababa, shall have exclusive jurisdiction over any dispute arising out of or relating to these
              Terms, in accordance with the Federal Courts Proclamation No. 1234/2021.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-ink">
              15. Amendments and Contact Information
            </h2>
            <p>
              We may update these Terms from time to time to reflect changes in our services, the Site, or
              applicable Ethiopian law. The effective date at the top of this page indicates when the Terms were
              last revised. Continued use of the Site after an update constitutes acceptance of the revised Terms.
            </p>
            <p className="mt-2">For questions about these Terms, please contact us at:</p>
            <p className="mt-2">
              Nucleus Labs
              <br />
              Remote — Addis Ababa, Ethiopia
              <br />
              Email: NucleusLabs.et@gmail.com
              <br />
              Phone: +251 92 324 3132
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

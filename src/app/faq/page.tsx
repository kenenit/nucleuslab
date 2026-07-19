import { PageHero } from "@/components/sections/PageHero";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ContactCta } from "@/components/sections/ContactCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Common questions about working with Nucleus Labs.",
  path: "/faq",
});

const faqs = [
  { question: "How long does a typical project take?", answer: "It depends on scope — a website might take 3-6 weeks, a full product build 3-6 months. During the consultation stage, we give you a realistic timeline before any commitment is made." },
  { question: "Do you work with startups or only established companies?", answer: "Both. We work with early-stage startups building an MVP through to established businesses building internal tools — the process adapts, the quality standard doesn't." },
  { question: "What does the pricing structure look like?", answer: "Most engagements are scoped and quoted per project after the discovery call, though ongoing work (maintenance & support) is typically a monthly retainer. We'll always give you a number in writing before work starts." },
  { question: "Do you provide ongoing maintenance after launch?", answer: "Yes — maintenance & support is the final stage of our process, not an afterthought. We offer retainer plans for bug fixes, updates, and monitoring." },
  { question: "Can you work with our existing codebase or team?", answer: "Yes. We regularly integrate with existing systems and can work alongside an in-house team rather than replacing one." },
  { question: "What industries have you worked in?", answer: "Restaurants, hotels, healthcare, education, construction, manufacturing, retail, NGOs, startups, and corporate businesses — see the Industries page for more detail." },
  { question: "Do you sign NDAs?", answer: "Yes, happy to sign an NDA before any detailed discussion of your project." },
  { question: "How do I get started?", answer: "Reach out through the contact form with a brief description of what you're building — we typically reply within one business day to schedule a consultation." },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="COMMON QUESTIONS"
        title="Frequently asked questions."
        description="Answers to what people usually ask before starting a project with us."
        crumbLabel="FAQ"
      />
      <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-24">
        <FaqAccordion items={faqs} />
      </section>
      <ContactCta title="Still have a question?" body="Send it over — we'll get back to you within one business day." />
    </>
  );
}

import type { Metadata } from "next";

const SITE_NAME = "Nucleus Labs";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nucleuslabs.com";
const DEFAULT_DESCRIPTION =
  "We build innovative digital solutions that transform ideas into powerful technology. From startups to established businesses, Nucleus Labs delivers modern software, websites, and AI-powered solutions that drive growth and innovation.";

interface BuildMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  ogImage = "/og-default.png",
  noIndex = false,
}: BuildMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/nucleus-labs",
      "https://twitter.com/nucleuslabs",
      "https://www.instagram.com/nucleuslabs",
    ],
  };
}

export { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION };

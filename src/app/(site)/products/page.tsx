import { PageHero } from "@/components/sections/PageHero";
import { ProductBlock } from "@/components/sections/ProductBlock";
import { ContactCta } from "@/components/sections/ContactCta";
import { getProducts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description: "Biku Home Solution, Digital Menu, and Company Profile Website — Nucleus Labs' in-house products.",
  path: "/products",
});

export const revalidate = 60;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        eyebrow="OUR PRODUCTS"
        title="What we've built for ourselves."
        description="Products built and maintained by the same team that builds for clients — proof we use our own standards on our own work."
        crumbLabel="Products"
      />
      {products.map((product, i) => (
        <ProductBlock key={product.slug} product={product} reverse={i % 2 === 1} isLast={i === products.length - 1} />
      ))}
      <ContactCta />
    </>
  );
}

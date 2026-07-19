import { PageHero } from "@/components/sections/PageHero";
import { ProductBlock } from "@/components/sections/ProductBlock";
import { ContactCta } from "@/components/sections/ContactCta";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  description: "Biku Home Solution, Digital Menu, and Company Profile Website — Nucleus Labs' in-house products.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR PRODUCTS"
        title="What we've built for ourselves."
        description="Three in-house products, built and maintained by the same team that builds for clients — proof we use our own standards on our own work."
        crumbLabel="Products"
      />
      {products.map((product, i) => (
        <ProductBlock key={product.slug} product={product} reverse={i % 2 === 1} isLast={i === products.length - 1} />
      ))}
      <ContactCta />
    </>
  );
}

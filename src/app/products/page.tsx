import type { Metadata } from "next";
import ProductCard from "@/components/cards/ProductCard";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { products } from "@/data/products";
import type { ProductCategory } from "@/types/product";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Farmstead Poultry products including SASSO F1 chicks, day-old chicks, layers, fresh eggs, poultry feeds, and poultry equipment.",
};

const categories: ProductCategory[] = [
  "Chicks & Birds",
  "Layers",
  "Eggs",
  "Poultry Feeds",
  "Equipment",
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-[#FFFDF5] py-20 lg:py-28">
        <Container>
          <SectionHeader
            centered
            eyebrow="Farmstead Products"
            title="Browse chicks, layers, eggs, feeds, and poultry supplies."
            description="Farmstead Poultry is not using online checkout. View products and place your order or inquiry directly through WhatsApp."
          />
        </Container>
      </section>

      <section className="bg-white pb-20 lg:pb-28">
        <Container>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
                className="rounded-full border border-green-700/20 bg-green-50 px-5 py-2 text-sm font-black text-green-800 transition hover:bg-green-700 hover:text-white"
              >
                {category}
              </a>
            ))}
          </div>

          <div className="space-y-20">
            {categories.map((category) => {
              const categoryProducts = products.filter(
                (product) => product.category === category
              );

              if (categoryProducts.length === 0) return null;

              return (
                <div
                  key={category}
                  id={category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}
                  className="scroll-mt-32"
                >
                  <div className="mb-8 flex flex-col gap-3 border-b border-green-900/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">
                        Category
                      </p>
                      <h2 className="mt-2 text-3xl font-black text-slate-950">
                        {category}
                      </h2>
                    </div>

                    <p className="text-sm font-semibold text-slate-500">
                      {categoryProducts.length} product
                      {categoryProducts.length > 1 ? "s" : ""}
                    </p>
                  </div>

                  <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ProductCard from "@/components/cards/ProductCard";
import { featuredProducts } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Featured Products"
            title="Browse poultry products and order directly through WhatsApp."
            description="No complicated checkout. View the product you need and contact Farmstead Poultry instantly for availability and current pricing."
            className="mb-0"
          />

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-green-700 px-6 py-3 text-sm font-extrabold text-green-800 transition duration-300 hover:bg-green-700 hover:text-white"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
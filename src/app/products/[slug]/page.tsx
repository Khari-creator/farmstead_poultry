import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Container from "@/components/shared/Container";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import ProductCard from "@/components/cards/ProductCard";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";
import { productWhatsAppMessage } from "@/lib/whatsapp";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, product.category, 3);

  return (
    <>
      <section className="bg-[#FFFDF5] py-16 lg:py-24">
        <Container>
          <Link
            href="/products"
            className="mb-8 inline-flex items-center gap-2 text-sm font-black text-green-700 transition hover:text-green-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-green-100 p-3 shadow-2xl shadow-green-950/10">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  {product.image && /\.(mp4|webm)$/i.test(product.image) ? (
                      <video
                      src={product.image}
                      poster={product.image.replace(/\.(mp4|webm)$/i, ".jpg")}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  )}
                </div>
            </div>

            <div>
              <div className="mb-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-800">
                {product.category}
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                {product.description}
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-900/10 bg-white p-5">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-green-700">
                    Price
                  </p>
                  <p className="mt-2 text-xl font-black text-slate-950">
                    {product.priceLabel}
                  </p>
                </div>

                <div className="rounded-2xl border border-green-900/10 bg-white p-5">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-green-700">
                    Availability
                  </p>
                  <p className="mt-2 text-xl font-black text-slate-950">
                    {product.availability}
                  </p>
                </div>
              </div>

              <WhatsAppButton
                label="Order This Product"
                message={
                  product.whatsappMessage ??
                  productWhatsAppMessage(product.name)
                }
                className="mt-8"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-green-900/10 bg-[#FFFDF5] p-7">
            <h2 className="text-2xl font-black text-slate-950">
              Product Benefits
            </h2>

            <div className="mt-6 space-y-4">
              {product.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                  <p className="font-semibold leading-7 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-green-900/10 bg-[#F1F8E9] p-7">
            <h2 className="text-2xl font-black text-slate-950">
              Suitable For
            </h2>

            <div className="mt-6 space-y-4">
              {product.suitableFor.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                  <p className="font-semibold leading-7 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-[#FFFDF5] py-20 lg:py-28">
          <Container>
            <div className="mb-10">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-green-700">
                Related Products
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-950">
                You may also be interested in
              </h2>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
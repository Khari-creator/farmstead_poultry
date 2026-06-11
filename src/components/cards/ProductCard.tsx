"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Product } from "@/types/product";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { productWhatsAppMessage } from "@/lib/whatsapp";
import { motion } from "framer-motion";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const isVideo = !!product.image && /\.(mp4|webm)$/i.test(product.image);
  const poster = product.image?.replace(/\.(mp4|webm)$/i, ".jpg");
  return (
    <motion.article
      className="group overflow-hidden rounded-[2rem] border border-green-900/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-900/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-green-50">
          {isVideo ? (
            <video
              src={product.image}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          )}

          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-green-800 shadow-sm backdrop-blur">
            {product.category}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold text-green-700">
          <CheckCircle2 className="h-4 w-4" />
          <span>{product.availability}</span>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="text-xl font-black text-slate-950 transition group-hover:text-green-700">
            {product.name}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="text-sm font-black text-slate-900">
            {product.priceLabel}
          </p>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-sm font-black text-green-700 transition hover:text-green-900"
          >
            Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <WhatsAppButton
          label="Order on WhatsApp"
          message={product.whatsappMessage ?? productWhatsAppMessage(product.name)}
          className="mt-6 w-full"
        />
      </div>
    </motion.article>
  );
}
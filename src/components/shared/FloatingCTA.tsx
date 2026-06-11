"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="mx-4 mb-4 rounded-2xl bg-gradient-to-r from-green-700 to-green-500 px-4 py-3 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold">Need chicks or feeds?</p>
            <p className="text-xs opacity-90">Call or WhatsApp us for quick orders</p>
          </div>

          <Link
            href={`https://wa.me/${siteConfig.whatsapp}`}
            className="ml-3 rounded-lg bg-white/10 px-3 py-2 text-sm font-extrabold backdrop-blur transition hover:bg-white/20"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import {
  Bird,
  CircleDot,
  Egg,
  Home,
  Sprout,
  Users,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { Offer } from "@/data/offers";

const icons: Record<string, LucideIcon> = {
  Bird,
  Egg,
  CircleDot,
  Wheat,
  Home,
  Users,
  Sprout,
};

type OfferCardProps = {
  offer: Offer;
};

export default function OfferCard({ offer }: OfferCardProps) {
  const Icon = icons[offer.icon] ?? Sprout;

  return (
    <Link
      href={offer.href}
      className="group rounded-[2rem] border border-green-900/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl hover:shadow-green-900/10"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800 transition group-hover:bg-white/15 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="text-xl font-black text-slate-950 transition group-hover:text-white">
        {offer.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600 transition group-hover:text-green-50">
        {offer.description}
      </p>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-green-700 transition group-hover:text-yellow-300">
        Learn more
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
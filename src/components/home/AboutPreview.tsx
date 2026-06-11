import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/data/site";

const points = [
  "Healthy poultry products for farmers and households",
  "SASSO F1 chicks, layers, eggs, feeds, and mature birds",
  "Practical poultry support for new and existing farmers",
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-yellow-300/40 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] bg-green-100 p-3 shadow-2xl shadow-green-950/10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/about/farmstead-about.jpg"
                alt="Farmstead Poultry farm environment in Muhoroni"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 right-6 max-w-xs rounded-3xl bg-green-800 p-5 text-white shadow-xl">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
              <p className="text-sm font-semibold leading-6">
                {siteConfig.location}
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeader
            eyebrow="About Farmstead"
            title="A poultry brand built around healthy birds, fresh eggs, and farmer support."
            description="Farmstead Poultry is a Muhoroni-based poultry business serving farmers, families, and businesses with quality poultry products and practical guidance."
          />

          <div className="space-y-4">
            {points.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-green-900/10 bg-[#FFFDF5] p-5"
              >
                <p className="font-bold text-slate-800">{point}</p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-green-800"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
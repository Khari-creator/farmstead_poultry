import Link from "next/link";
import { CheckCircle2, Egg, ShieldCheck, Wheat } from "lucide-react";
import Container from "@/components/shared/Container";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const highlights = [
  {
    label: "Healthy Chicks",
    icon: ShieldCheck,
  },
  {
    label: "Fresh Eggs",
    icon: Egg,
  },
  {
    label: "Poultry Feeds",
    icon: Wheat,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF5]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#F1F8E9,transparent_35%),radial-gradient(circle_at_bottom_right,#FEF3C7,transparent_35%)]" />

      <Container className="relative grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-700/15 bg-white px-4 py-2 text-sm font-extrabold text-green-800 shadow-sm">
            <CheckCircle2 className="h-4 w-4 text-green-700" />
            Trusted poultry products in Muhoroni
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
            Healthy Chicks, Quality Eggs & Complete Poultry Solutions.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Farmstead Poultry supplies healthy SASSO F1 chicks, layers, fresh
            eggs, poultry feeds, brooding services, and practical poultry
            consultation for farmers, households, and businesses.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton label="Order on WhatsApp" />

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-green-700 px-6 py-3 text-sm font-extrabold text-green-800 transition duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:text-white"
            >
              View Products
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-green-900/10 bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-800">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="text-sm font-black text-slate-900">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-yellow-300/40 blur-3xl" />
          <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-green-400/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-3 shadow-2xl shadow-green-950/15">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-green-100">
              <video
                src="/images/hero/hero1video.mp4"
                poster="/images/hero/farmstead-hero.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-700">
                WhatsApp Orders
              </p>
              <p className="mt-2 text-2xl font-black text-slate-950">
                Chicks • Eggs • Feeds
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Easy inquiry and ordering directly through WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
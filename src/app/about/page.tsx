import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, MapPin, ShieldCheck, Sprout, Users } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Farmstead Poultry, a Muhoroni-based poultry business supplying healthy chicks, layers, eggs, poultry feeds, brooding services, and poultry consultation.",
};

const values = [
  {
    title: "Healthy Poultry",
    description:
      "We focus on supplying healthy chicks, birds, and poultry products customers can trust.",
    icon: ShieldCheck,
  },
  {
    title: "Farmer Support",
    description:
      "We support farmers with practical poultry knowledge on feeding, housing, brooding, and management.",
    icon: Users,
  },
  {
    title: "Quality Products",
    description:
      "From chicks and layers to eggs and feeds, our goal is to provide reliable poultry solutions.",
    icon: Sprout,
  },
];

const specializations = [
  "SASSO F1 chicks",
  "Day-old chicks",
  "Layers",
  "Fresh farm eggs",
  "Mature birds",
  "Poultry feeds",
  "Brooding services",
  "Poultry consultation",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#FFFDF5] py-20 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-green-700">
              About Farmstead Poultry
            </p>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A trusted poultry brand serving farmers, homes, and businesses.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Farmstead Poultry is a poultry business based in Muhoroni, Kisumu,
              supplying healthy chicks, SASSO F1 birds, layers, fresh eggs,
              poultry feeds, brooding services, and practical poultry
              consultation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton label="Talk to Farmstead" />

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center rounded-full border border-green-700 px-6 py-3 text-sm font-extrabold text-green-800 transition hover:bg-green-700 hover:text-white"
              >
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-yellow-300/40 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] bg-green-100 p-3 shadow-2xl shadow-green-950/10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/about/farmstead-about.jpg"
                  alt="Farmstead Poultry farm in Muhoroni"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title="Built around poultry products, practical farming support, and customer trust."
              description="Farmstead Poultry exists to help customers access healthy poultry products and dependable poultry guidance in a simple, direct, and farmer-friendly way."
            />

            <div className="rounded-[2rem] border border-green-900/10 bg-[#FFFDF5] p-7">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-green-700" />
                <div>
                  <h3 className="text-xl font-black text-slate-950">
                    Our Location
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {siteConfig.location}
                  </p>
                  <p className="mt-3 leading-7 text-slate-600">
                    We serve poultry customers, farmers, households, and
                    businesses around Muhoroni, Kisumu County, and surrounding
                    regions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[2rem] border border-green-900/10 bg-white p-7 shadow-sm"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-black text-slate-950">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#F1F8E9] py-20 lg:py-28">
        <Container>
          <SectionHeader
            centered
            eyebrow="What We Specialize In"
            title="Poultry products and services under one trusted local brand."
            description="Farmstead Poultry brings together chicks, eggs, feeds, layers, brooding, and consultation so customers can get more poultry support from one place."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specializations.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-green-900/10 bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-700" />
                <p className="font-black text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-20 text-white lg:py-28">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-yellow-300">
              Mission
            </p>
            <h2 className="mt-4 text-3xl font-black">
              To provide healthy poultry products and practical support.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Our mission is to supply healthy chicks, quality eggs, poultry
              feeds, and reliable poultry guidance to farmers, households, and
              businesses.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-yellow-300">
              Vision
            </p>
            <h2 className="mt-4 text-3xl font-black">
              To become a trusted poultry solutions provider in Kisumu and
              beyond.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              We aim to become a reliable poultry brand known for healthy birds,
              fresh eggs, quality feeds, and farmer-friendly service.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
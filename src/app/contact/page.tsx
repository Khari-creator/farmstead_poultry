import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import MapEmbed from "@/components/shared/MapEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Farmstead Poultry for SASSO F1 chicks, layers, fresh eggs, poultry feeds, brooding services, and poultry consultation in Muhoroni, Kisumu.",
};

const inquiryOptions = [
  "SASSO F1 Chicks",
  "Day Old Chicks",
  "Layers",
  "Fresh Eggs",
  "Poultry Feeds",
  "Brooding Services",
  "Poultry Consultation",
];

export default function ContactPage() {
  const message =
    "Hello Farmstead Poultry, I would like to inquire about your poultry products and services.";

  return (
    <>
      <section className="bg-[#FFFDF5] py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-green-700">
              Contact Farmstead
            </p>

            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Order, inquire, or visit Farmstead Poultry in Muhoroni.
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Contact Farmstead Poultry for chicks, layers, fresh eggs, poultry
              feeds, brooding services, and poultry farming consultation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton label="WhatsApp Us" message={message} />

              <Link
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center rounded-full border border-green-700 px-6 py-3 text-sm font-extrabold text-green-800 transition hover:bg-green-700 hover:text-white"
              >
                Call {siteConfig.phoneDisplay}
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-green-900/10 bg-white p-7 shadow-2xl shadow-green-950/10">
            <h2 className="text-2xl font-black text-slate-950">
              Quick Inquiry Options
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Select what you need and send an inquiry through WhatsApp.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {inquiryOptions.map((option) => (
                <Link
                  key={option}
                  href={createWhatsAppLink(
                    `Hello Farmstead Poultry, I would like to inquire about ${option}. Kindly share current availability and price.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-green-900/10 bg-[#F1F8E9] p-4 text-sm font-black text-green-900 transition hover:border-green-700 hover:bg-green-700 hover:text-white"
                >
                  {option}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Contact Details"
              title="Reach Farmstead Poultry directly."
              description="Use the phone number, email, WhatsApp, or visit the farm location."
            />

            <div className="space-y-4">
              <div className="flex gap-4 rounded-2xl border border-green-900/10 bg-[#FFFDF5] p-5">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-green-700" />
                <div>
                  <p className="font-black text-slate-950">Location</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {siteConfig.location}
                  </p>
                </div>
              </div>

              <Link
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex gap-4 rounded-2xl border border-green-900/10 bg-[#FFFDF5] p-5 transition hover:border-green-700"
              >
                <Phone className="mt-1 h-6 w-6 shrink-0 text-green-700" />
                <div>
                  <p className="font-black text-slate-950">Phone</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {siteConfig.phoneDisplay}
                  </p>
                </div>
              </Link>

              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex gap-4 rounded-2xl border border-green-900/10 bg-[#FFFDF5] p-5 transition hover:border-green-700"
              >
                <Mail className="mt-1 h-6 w-6 shrink-0 text-green-700" />
                <div>
                  <p className="font-black text-slate-950">Email</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {siteConfig.email}
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-green-900/10 bg-green-100 p-3 shadow-2xl shadow-green-950/10">
            <div className="rounded-[2rem] overflow-hidden">
              <MapEmbed query="Farmstead Poultry opposite Koru Mission Hospital Muhoroni Kisumu" height={520} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
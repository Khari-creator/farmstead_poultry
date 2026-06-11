import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { siteConfig } from "@/data/site";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import MapEmbed from "@/components/shared/MapEmbed";

export default function LocationSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Visit or Contact Us"
            title="Located in Muhoroni, ready to serve poultry customers and farmers."
            description="Customers can call, email, visit the farm location, or place inquiries directly through WhatsApp."
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

          <WhatsAppButton className="mt-8" />
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-green-900/10 bg-green-100 p-3 shadow-2xl shadow-green-950/10">
          <div className="rounded-[2rem] overflow-hidden">
            <MapEmbed query="Farmstead Poultry opposite Koru Mission Hospital Muhoroni Kisumu" height={420} />
          </div>
        </div>
      </Container>
    </section>
  );
}
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { productWhatsAppMessage } from "@/lib/whatsapp";

const benefits = [
  "Dual-purpose breed for meat and eggs",
  "Fast growth and strong body development",
  "Good disease resistance",
  "Efficient feed use",
  "Easy to manage with proper care",
  "Performs well in free-range systems",
];

export default function SassoSpotlight() {
  return (
    <section className="bg-[#FFFDF5] py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Breed Spotlight"
            title="SASSO F1 chicks for farmers who want both meat and egg potential."
            description="SASSO F1 is one of Farmstead Poultry’s key breeds, valued for adaptability, good growth, and dual-purpose production."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 rounded-2xl border border-green-900/10 bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                <p className="text-sm font-bold leading-6 text-slate-700">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <WhatsAppButton
            label="Inquire About SASSO F1"
            message={productWhatsAppMessage("SASSO F1 Chicks")}
            className="mt-8"
          />
        </div>

        <div className="relative">
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-yellow-300/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-green-100 p-3 shadow-2xl shadow-green-950/10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <video
                src="/images/products/sasso-f1-chicks.mp4"
                poster="/images/products/sasso-f1-chicks.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
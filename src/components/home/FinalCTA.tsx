import Container from "@/components/shared/Container";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className="bg-[#FFFDF5] py-20 lg:py-28">
      <Container>
        <div className="overflow-hidden rounded-[3rem] bg-green-800 px-6 py-16 text-center text-white shadow-2xl shadow-green-950/20 sm:px-10 lg:px-20">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-yellow-300">
            Ready to order?
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">
            Need chicks, eggs, feeds, layers, or poultry advice?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-green-50">
            Contact Farmstead Poultry today through WhatsApp or call directly
            for availability, prices, and product guidance.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton variant="light" label="Order on WhatsApp" />

            <Link
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white hover:text-green-900"
            >
              Call {siteConfig.phoneDisplay}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
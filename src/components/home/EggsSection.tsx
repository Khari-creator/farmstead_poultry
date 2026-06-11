import Image from "next/image";
import { Building2, Home, Hotel, School, ShoppingBasket } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { productWhatsAppMessage } from "@/lib/whatsapp";

const buyers = [
  { label: "Homes", icon: Home },
  { label: "Hotels", icon: Hotel },
  { label: "Schools", icon: School },
  { label: "Retail Shops", icon: ShoppingBasket },
  { label: "Institutions", icon: Building2 },
];

export default function EggsSection() {
  return (
    <section className="overflow-hidden bg-green-900 py-20 text-white lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white/10 p-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/products/fresh-eggs.jpg"
                alt="Fresh farm eggs from Farmstead Poultry"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeader
            eyebrow="Fresh Farm Eggs"
            title="Fresh eggs for families, shops, hotels, schools, and bulk buyers."
            description="Farmstead Poultry supplies fresh farm eggs for household consumption and business supply. Customers can inquire directly through WhatsApp for current availability."
            className="[&_h2]:text-white [&_p]:text-green-50"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {buyers.map((buyer) => {
              const Icon = buyer.icon;

              return (
                <div
                  key={buyer.label}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-300 text-green-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-black">{buyer.label}</p>
                </div>
              );
            })}
          </div>

          <WhatsAppButton
            label="Order Eggs on WhatsApp"
            message={productWhatsAppMessage("Fresh Farm Eggs")}
            variant="light"
            className="mt-8"
          />
        </div>
      </Container>
    </section>
  );
}
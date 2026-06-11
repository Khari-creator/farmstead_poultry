import { Wheat } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const feeds = [
  "Chick Mash",
  "Growers Mash",
  "Layers Mash",
  "Broiler Starter",
  "Broiler Finisher",
  "Feed Supplements",
];

export default function FeedsSection() {
  return (
    <section className="bg-[#F1F8E9] py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Poultry Feeds"
              title="Quality poultry feeds and nutrition support for better growth."
              description="Farmstead Poultry supports farmers with poultry feed products and practical feeding guidance for chicks, growers, layers, and broilers."
            />

            <WhatsAppButton
              label="Ask About Feeds"
              message="Hello Farmstead Poultry, I would like to inquire about poultry feeds available."
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {feeds.map((feed) => (
              <div
                key={feed}
                className="rounded-[2rem] border border-green-900/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                  <Wheat className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-black text-slate-950">{feed}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Available for farmers looking for suitable poultry nutrition
                  support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
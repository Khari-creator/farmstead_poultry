import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import OfferCard from "@/components/cards/OfferCard";
import { offers } from "@/data/offers";

export default function OffersSection() {
  return (
    <section className="bg-[#F1F8E9] py-20 lg:py-28">
      <Container>
        <SectionHeader
          centered
          eyebrow="What We Offer"
          title="Everything you need for poultry farming and poultry products."
          description="From chicks and layers to eggs, feeds, brooding, and poultry consultation, Farmstead Poultry brings multiple poultry solutions under one trusted brand."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </Container>
    </section>
  );
}
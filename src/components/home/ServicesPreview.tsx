import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeader
          centered
          eyebrow="Poultry Services"
          title="Support beyond selling chicks and feeds."
          description="Farmstead Poultry helps farmers make better poultry decisions through brooding support, feeding guidance, farm setup advice, and poultry consultation."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
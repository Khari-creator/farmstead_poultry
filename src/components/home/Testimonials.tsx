import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeader
          centered
          eyebrow="Customer Trust"
          title="Built on healthy products, practical support, and reliable service."
          description="Testimonials can later be replaced with real customer reviews, farmer names, and photos."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
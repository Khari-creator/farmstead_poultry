import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/cards/ServiceCard";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Farmstead Poultry services including brooding services, poultry consultation, feeding guidance, and farm setup advice.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#FFFDF5] py-20 lg:py-28">
        <Container>
          <SectionHeader
            centered
            eyebrow="Poultry Services"
            title="Practical support for farmers starting, growing, or improving poultry production."
            description="Farmstead Poultry offers more than poultry products. We support customers with brooding services, feeding guidance, poultry consultation, and farm setup advice."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="Service Details"
            title="Understand how each poultry service helps your farm."
            description="Each service is designed to help customers reduce mistakes, improve poultry care, and make better farming decisions."
          />

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className="grid gap-8 rounded-[2.5rem] border border-green-900/10 bg-[#FFFDF5] p-7 shadow-sm lg:grid-cols-[0.75fr_1.25fr] lg:p-10"
              >
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-green-700">
                    Service {index + 1}
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-slate-950">
                    {service.title}
                  </h2>
                  <p className="mt-5 leading-8 text-slate-600">
                    {service.description}
                  </p>

                  <WhatsAppButton
                    label="Inquire on WhatsApp"
                    message={service.whatsappMessage}
                    className="mt-7"
                  />
                </div>

                <div className="rounded-[2rem] bg-white p-6">
                  <h3 className="text-xl font-black text-slate-950">
                    Key Benefits
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                        <p className="text-sm font-semibold leading-7 text-slate-700">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-green-900 py-20 text-white lg:py-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-yellow-300">
              Need poultry support?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Talk to Farmstead Poultry before making your next poultry
              decision.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-green-50">
              Whether you are buying chicks, choosing feeds, setting up a
              poultry house, or managing layers, Farmstead can guide you.
            </p>

            <WhatsAppButton
              variant="light"
              label="Ask for Poultry Guidance"
              className="mt-8"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
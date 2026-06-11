import { HelpCircle } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  return (
    <section className="bg-[#F1F8E9] py-20 lg:py-28">
      <Container>
        <SectionHeader
          centered
          eyebrow="Frequently Asked Questions"
          title="Answers before customers contact Farmstead Poultry."
          description="These FAQs help visitors understand products, ordering, location, and services quickly."
        />

        <div className="mx-auto grid max-w-5xl gap-5">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-[2rem] border border-green-900/10 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-4">
                <HelpCircle className="mt-1 h-6 w-6 shrink-0 text-green-700" />

                <div>
                  <h3 className="text-lg font-black text-slate-950">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import { HeartHandshake, MapPin, ShieldCheck, Sparkles, Sprout, Users } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    title: "Healthy Birds",
    description: "We focus on supplying healthy poultry products customers can trust.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Breeds",
    description: "SASSO F1, layers, mature birds, and chicks for different farming goals.",
    icon: Sparkles,
  },
  {
    title: "Fresh Eggs",
    description: "Farm-fresh eggs for homes, shops, schools, hotels, and bulk buyers.",
    icon: HeartHandshake,
  },
  {
    title: "Farmer Support",
    description: "Guidance on feeding, housing, brooding, and poultry management.",
    icon: Users,
  },
  {
    title: "Poultry Feeds",
    description: "Feed products and nutrition support for better poultry growth.",
    icon: Sprout,
  },
  {
    title: "Muhoroni Location",
    description: "Conveniently located opposite Koru Mission Hospital in Muhoroni.",
    icon: MapPin,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-20 text-white lg:py-28">
      <Container>
        <SectionHeader
          centered
          eyebrow="Why Choose Us"
          title="A trusted poultry partner for products, support, and growth."
          description="Farmstead Poultry brings together quality poultry products and practical farmer support in one reliable local brand."
          className="[&_h2]:text-white [&_p]:text-slate-300"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300 text-slate-950">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-black">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
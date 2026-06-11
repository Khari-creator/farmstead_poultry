import { CheckCircle2 } from "lucide-react";
import Container from "@/components/shared/Container";

const trustItems = [
  "Healthy Birds",
  "Quality Breeds",
  "Fresh Eggs",
  "Poultry Feeds",
  "Farmer Support",
  "Muhoroni Based",
];

export default function TrustBar() {
  return (
    <section className="border-y border-green-900/10 bg-green-900 py-5">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 text-sm font-extrabold text-white"
            >
              <CheckCircle2 className="h-5 w-5 text-yellow-300" />
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
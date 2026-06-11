import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-[2rem] border border-green-900/10 bg-white p-7 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Quote className="h-8 w-8 text-green-700" />

        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>

      <p className="text-sm leading-7 text-slate-600">
        “{testimonial.message}”
      </p>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <h3 className="font-black text-slate-950">{testimonial.name}</h3>

        <p className="mt-1 text-sm font-semibold text-green-700">
          {testimonial.role ? `${testimonial.role} • ` : ""}
          {testimonial.location}
        </p>
      </div>
    </article>
  );
}
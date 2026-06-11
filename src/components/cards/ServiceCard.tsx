import {
    Home,
    Sprout,
    Users,
    Wheat,
    type LucideIcon,
  } from "lucide-react";
  import WhatsAppButton from "@/components/shared/WhatsAppButton";
  import type { Service } from "@/data/services";
  
  const icons: Record<string, LucideIcon> = {
    Home,
    Users,
    Wheat,
    Sprout,
  };
  
  type ServiceCardProps = {
    service: Service;
  };
  
  export default function ServiceCard({ service }: ServiceCardProps) {
    const Icon = icons[service.icon] ?? Sprout;
  
    return (
      <article className="rounded-[2rem] border border-green-900/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-900/10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800">
          <Icon className="h-7 w-7" />
        </div>
  
        <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
  
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {service.shortDescription}
        </p>
  
        <ul className="mt-5 space-y-3">
          {service.benefits.slice(0, 3).map((benefit) => (
            <li
              key={benefit}
              className="flex gap-2 text-sm font-semibold text-slate-700"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
              {benefit}
            </li>
          ))}
        </ul>
  
        <WhatsAppButton
          label="Inquire on WhatsApp"
          message={service.whatsappMessage}
          variant="outline"
          className="mt-7 w-full"
        />
      </article>
    );
  }
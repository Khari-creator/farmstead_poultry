import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { createWhatsAppLink, generalWhatsAppMessage } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  className?: string;
  variant?: "primary" | "light" | "outline";
};

export default function WhatsAppButton({
  message = generalWhatsAppMessage(),
  label = "Order on WhatsApp",
  className,
  variant = "primary",
}: WhatsAppButtonProps) {
  const variants = {
    primary:
      "bg-green-700 text-white shadow-lg shadow-green-900/20 hover:bg-green-800",
    light:
      "bg-white text-green-800 shadow-lg shadow-slate-900/10 hover:bg-green-50",
    outline:
      "border border-green-700 bg-transparent text-green-800 hover:bg-green-700 hover:text-white",
  };

  return (
    <Link
      href={createWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold transition duration-300 hover:-translate-y-0.5",
        variants[variant],
        className
      )}
    >
      <MessageCircle className="h-5 w-5" />
      {label}
    </Link>
  );
}
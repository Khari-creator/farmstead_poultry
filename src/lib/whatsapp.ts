import { siteConfig } from "@/data/site";

export function createWhatsAppLink(message: string): string {
  const cleanMessage = message.trim();

  if (!cleanMessage) {
    return `https://wa.me/${siteConfig.whatsapp}`;
  }

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    cleanMessage
  )}`;
}

export function generalWhatsAppMessage(): string {
  return "Hello Farmstead Poultry, I would like to inquire about your poultry products and services.";
}

export function productWhatsAppMessage(productName: string): string {
  return `Hello Farmstead Poultry, I am interested in ${productName}. Kindly share current availability and price.`;
}

export function serviceWhatsAppMessage(serviceName: string): string {
  return `Hello Farmstead Poultry, I would like to inquire about ${serviceName}. Kindly share more details.`;
}
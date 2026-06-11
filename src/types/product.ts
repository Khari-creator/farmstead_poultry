export type ProductCategory =
  | "Chicks & Birds"
  | "Layers"
  | "Eggs"
  | "Poultry Feeds"
  | "Equipment";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  image: string;
  images?: string[];
  priceLabel: string;
  availability: string;
  benefits: string[];
  suitableFor: string[];
  whatsappMessage?: string;
  featured?: boolean;
};
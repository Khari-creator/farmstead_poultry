import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "sasso-f1-chicks",
    name: "SASSO F1 Chicks",
    slug: "sasso-f1-chicks",
    category: "Chicks & Birds",
    shortDescription:
      "Healthy dual-purpose SASSO F1 chicks suitable for meat and egg production.",
    description:
      "SASSO F1 is a strong dual-purpose poultry breed known for fast growth, good adaptability, efficient feed use, and suitability for both meat and egg production.",
    image: "/images/products/sasso-f1-chicks.mp4",
    priceLabel: "Contact for current price",
    availability: "Available on request",
    benefits: [
      "Dual-purpose breed for meat and eggs",
      "Fast growth",
      "Disease resistant",
      "Efficient feed use",
      "Good for free-range systems",
    ],
    suitableFor: [
      "Small-scale farmers",
      "Commercial poultry farmers",
      "Free-range poultry systems",
      "Farmers targeting both meat and eggs",
    ],
    featured: true,
  },
  {
    id: "day-old-chicks",
    name: "Day Old Chicks",
    slug: "day-old-chicks",
    category: "Chicks & Birds",
    shortDescription:
      "Healthy day-old chicks for farmers starting or expanding poultry production.",
    description:
      "Farmstead Poultry supplies healthy day-old chicks for farmers who want to raise birds from the earliest stage with proper care and management.",
    image: "/images/products/day-old-chicks.mp4",
    priceLabel: "Contact for Current price",
    availability: "Subject to current stock",
    benefits: [
      "Affordable starting point",
      "Good for controlled brooding",
      "Suitable for farmers with brooding setup",
      "Easy to manage with proper guidance",
    ],
    suitableFor: [
      "New poultry farmers",
      "Farmers with brooding space",
      "Bulk chick buyers",
    ],
    featured: true,
  },
  {
    id: "layers",
    name: "Layers",
    slug: "layers",
    category: "Layers",
    shortDescription:
      "Quality layers for farmers focused on consistent egg production.",
    description:
      "Layers are ideal for farmers and businesses targeting regular egg production and steady poultry income.",
    image: "/images/products/layers.jpg",
    priceLabel: "Contact for current price",
    availability: "Available on request",
    benefits: [
      "Good for egg production",
      "Suitable for commercial poultry farming",
      "Supports regular income from eggs",
      "Best with proper feeding and housing",
    ],
    suitableFor: [
      "Egg production farmers",
      "Commercial poultry businesses",
      "Farmers supplying eggs to shops and institutions",
    ],
    featured: true,
  },
  {
    id: "fresh-eggs",
    name: "Fresh Farm Eggs",
    slug: "fresh-eggs",
    category: "Eggs",
    shortDescription:
      "Fresh farm eggs available for homes, shops, hotels, schools, and bulk buyers.",
    description:
      "Farmstead Poultry supplies fresh eggs suitable for household use, retail shops, hotels, restaurants, schools, and institutions.",
    image: "/images/products/fresh-eggs.jpg",
    priceLabel: "Contact for current price",
    availability: "Available depending on daily production",
    benefits: [
      "Fresh from the farm",
      "Suitable for home and business use",
      "Bulk orders available",
      "Easy WhatsApp ordering",
    ],
    suitableFor: [
      "Households",
      "Hotels",
      "Restaurants",
      "Schools",
      "Retail shops",
      "Bulk buyers",
    ],
    featured: true,
  },
  {
    id: "mature-birds",
    name: "Mature Birds",
    slug: "mature-birds",
    category: "Chicks & Birds",
    shortDescription:
      "Healthy mature birds available for meat, breeding, or farm expansion.",
    description:
      "Mature birds are available for customers who want ready-grown birds for meat, breeding, or poultry business expansion.",
    image: "/images/products/mature-birds.mp4",
    priceLabel: "Contact for current price",
    availability: "Available on request",
    benefits: [
      "Ready-grown birds",
      "Suitable for meat buyers",
      "Useful for farm expansion",
      "Reduces waiting time compared to chicks",
    ],
    suitableFor: [
      "Meat buyers",
      "Poultry farmers",
      "Hotels and restaurants",
      "Customers needing ready birds",
    ],
    featured: true,
  },
  {
    id: "suguna-feeds",
    name: "Broiler-Starter-Crumble",
    slug: "suguna-feeds",
    category: "Poultry Feeds",
    shortDescription:
      "High-quality starter feed for broiler chicks.",
    description:
      "Broiler-starter-crumble is a high-quality feed designed to support the early growth and development of broiler chicks, helping them reach their full potential during the critical starter phase.",
    image: "/images/products/broiler-starter.jpg",
    priceLabel: "Contact for current price",
    availability: "Available in Muhoroni",
    benefits: [
      "Supports early broiler growth",
      "Good for starter stage",
      "Helps develop strong birds",
    ],
    suitableFor: ["Broilers", "Meat bird farmers", "Starter-stage poultry"],
    featured: true,
  },
  {
    id: "chick-mash",
    name: "Chick Mash",
    slug: "chick-mash",
    category: "Poultry Feeds",
    shortDescription:
      "Starter feed for young chicks during early growth stages.",
    description:
      "Chick mash supports healthy early growth by providing young chicks with the nutrients they need during the delicate starting stage.",
    image: "/images/products/chick-mash.jpg",
    priceLabel: "Contact for current price",
    availability: "Available in Muhoroni",
    benefits: [
      "Supports early chick growth",
      "Suitable for brooding stage",
      "Helps improve chick development",
    ],
    suitableFor: ["Day-old chicks", "Young chicks", "Brooding farmers"],
    featured: true,
  },
  {
    id: "growers-mash",
    name: "Growers Mash",
    slug: "growers-mash",
    category: "Poultry Feeds",
    shortDescription:
      "Feed for growing birds after the starter stage.",
    description:
      "Growers mash is suitable for birds transitioning from chick stage toward maturity, supporting steady growth and development.",
    image: "/images/products/growers-mash.jpg",
    priceLabel: "Contact for current price",
    availability: "Available in Muhoroni",
    benefits: [
      "Supports steady bird growth",
      "Good after starter stage",
      "Suitable for growing poultry",
    ],
    suitableFor: ["Grower birds", "SASSO F1 growers", "Layer growers"],
    featured: true,
  },
  {
    id: "layers-mash",
    name: "Layers Mash",
    slug: "layers-mash",
    category: "Poultry Feeds",
    shortDescription:
      "Feed for laying birds to support egg production.",
    description:
      "Layers mash is suitable for birds in egg production and helps support consistent laying performance when combined with good management.",
    image: "/images/products/layers-mash.jpg",
    priceLabel: "Contact for current price",
    availability: "Available in Muhoroni",
    benefits: [
      "Supports egg production",
      "Suitable for laying birds",
      "Good for commercial egg farmers",
    ],
    suitableFor: ["Layers", "Egg production farmers", "Commercial poultry farms"],
  },
  {
    id: "broiler-starter",
    name: "Broiler Starter",
    slug: "broiler-starter",
    category: "Poultry Feeds",
    shortDescription:
      "Starter feed for broilers during early development.",
    description:
      "Broiler starter supports early growth for broiler birds and helps prepare them for strong development during the production cycle.",
    image: "/images/products/broiler-starter.jpg",
    priceLabel: "Contact for current price",
    availability: "Available in Muhoroni",
    benefits: [
      "Supports early broiler growth",
      "Good for starter stage",
      "Helps develop strong birds",
    ],
    suitableFor: ["Broilers", "Meat bird farmers", "Starter-stage poultry"],
  },
  {
    id: "feeders",
    name: "Poultry Feeders",
    slug: "poultry-feeders",
    category: "Equipment",
    shortDescription:
      "Practical poultry feeders for chicks and grown birds.",
    description:
      "Poultry feeders help reduce feed wastage and support cleaner feeding for chicks, growers, layers, and mature birds.",
    image: "/images/products/feeders.jpg",
    priceLabel: "Contact for current price",
    availability: "Available on request",
    benefits: [
      "Helps reduce feed wastage",
      "Keeps feeding organized",
      "Suitable for different poultry stages",
    ],
    suitableFor: ["Poultry farmers", "Brooding setups", "Layer farms"],
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(
  currentSlug: string,
  category: Product["category"],
  limit = 3
) {
  return products
    .filter((product) => product.slug !== currentSlug && product.category === category)
    .slice(0, limit);
}
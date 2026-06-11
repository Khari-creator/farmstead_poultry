import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/services",
    "/gallery",
    "/contact",
  ];

  const productRoutes = products.map((product) => `/products/${product.slug}`);

  const routes = [...staticRoutes, ...productRoutes];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/products") ? 0.8 : 0.7,
  }));
}
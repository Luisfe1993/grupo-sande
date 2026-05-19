import type { MetadataRoute } from "next";
import { productCategories } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gruposande.cl";
  const locales = ["", "/en"];

  const staticPages = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/empresas", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/productos", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/servicios", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/proyectos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/noticias", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contacto", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/cotizar", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terminos", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: locale === "" ? page.priority : page.priority * 0.9,
      });
    }

    for (const cat of productCategories) {
      entries.push({
        url: `${baseUrl}${locale}/productos/${cat.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: locale === "" ? 0.7 : 0.6,
      });
    }
  }

  return entries;
}

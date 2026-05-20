import type { MetadataRoute } from "next";
import { productCategories } from "@/data/products";
import { newsArticles } from "@/data/news";
import { blogPosts } from "@/data/blog";

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
    { path: "/crecimiento", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/trabaja-con-nosotros", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/mineria", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/construccion", priority: 0.9, changeFrequency: "monthly" as const },
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

    for (const article of newsArticles) {
      entries.push({
        url: `${baseUrl}${locale}/noticias/${article.id}`,
        lastModified: new Date(article.date),
        changeFrequency: "yearly",
        priority: locale === "" ? 0.6 : 0.5,
      });
    }

    for (const post of blogPosts) {
      entries.push({
        url: `${baseUrl}${locale}/blog/${post.id}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: locale === "" ? 0.7 : 0.6,
      });
    }
  }

  return entries;
}

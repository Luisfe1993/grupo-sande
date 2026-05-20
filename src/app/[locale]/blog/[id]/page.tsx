import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ChevronRight, Tag, User } from "lucide-react";
import { blogPosts, getBlogPost } from "@/data/blog";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const post = getBlogPost(id);
  if (!post) return {};
  const isEn = locale === "en";
  const title = (isEn && post.titleEn) || post.title;
  const description = (isEn && post.excerptEn) || post.excerpt;
  return {
    title,
    description,
    openGraph: { title: `${title} — Blog Grupo Sande`, description },
  };
}

const categoryColors: Record<string, string> = {
  "Guía Técnica": "bg-blue-100 text-blue-800",
  "Technical Guide": "bg-blue-100 text-blue-800",
  Industria: "bg-purple-100 text-purple-800",
  Industry: "bg-purple-100 text-purple-800",
  Seguridad: "bg-red-100 text-red-800",
  Safety: "bg-red-100 text-red-800",
  Tendencias: "bg-amber-100 text-amber-800",
  Trends: "bg-amber-100 text-amber-800",
  Normativa: "bg-teal-100 text-teal-800",
  Regulations: "bg-teal-100 text-teal-800",
  Eficiencia: "bg-green-100 text-green-800",
  Efficiency: "bg-green-100 text-green-800",
};

function formatDate(dateStr: string, locale: string) {
  return new Date(dateStr).toLocaleDateString(
    locale === "en" ? "en-US" : "es-CL",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

function lp(path: string, locale: Locale) {
  return locale === "en" ? `/en${path}` : path;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const isEn = lang === "en";
  const post = getBlogPost(id);
  if (!post) notFound();

  const title = (isEn && post.titleEn) || post.title;
  const content = (isEn && post.contentEn) || post.content;
  const category = (isEn && post.categoryEn) || post.category;
  const tags = (isEn && post.tagsEn) || post.tags;
  const authorRole = (isEn && post.authorRoleEn) || post.authorRole;

  const related = blogPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => {
      const aMatch = a.tags.filter((t) => post.tags.includes(t)).length;
      const bMatch = b.tags.filter((t) => post.tags.includes(t)).length;
      return bMatch - aMatch;
    })
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-1 text-sm text-gray-500">
            <Link
              href={lp("/", lang)}
              className="hover:text-blue-700 transition-colors"
            >
              {isEn ? "Home" : "Inicio"}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href={lp("/blog", lang)}
              className="hover:text-blue-700 transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gray-700 truncate max-w-[200px]">
              {title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  categoryColors[category] || "bg-gray-100 text-gray-700"
                }`}
              >
                {category}
              </span>
              <span className="text-sm text-gray-400 flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} min {isEn ? "read" : "de lectura"}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="text-gray-300">|</span>
              <span>{authorRole}</span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date, lang)}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-blockquote:border-blue-500 prose-blockquote:text-gray-600 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-gray-400" />
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Back */}
          <div className="mt-8">
            <Link
              href={lp("/blog", lang)}
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              {isEn ? "Back to Blog" : "Volver al Blog"}
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {isEn ? "Related Articles" : "Artículos Relacionados"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => {
                const rTitle = (isEn && r.titleEn) || r.title;
                const rCat = (isEn && r.categoryEn) || r.category;
                return (
                  <Link
                    key={r.id}
                    href={lp(`/blog/${r.id}`, lang)}
                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        categoryColors[rCat] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {rCat}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 mt-3 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                      {rTitle}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{formatDate(r.date, lang)}</span>
                      <span>{r.readTime} min</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

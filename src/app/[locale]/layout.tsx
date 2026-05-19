import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "es";

  return (
    <>
      <div lang={lang}>
        <Header locale={lang as Locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={lang as Locale} />
        <WhatsAppButton />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Grupo Sande — Soluciones Industriales para Chile",
    template: "%s | Grupo Sande",
  },
  description:
    "Grupo empresarial chileno con 85+ años de trayectoria. Herramientas industriales, fijaciones de calidad y tecnologías de automatización. Sande, Fijaciones Mamut y Sandiman.",
  metadataBase: new URL("https://gruposande.cl"),
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Grupo Sande",
    title: "Grupo Sande — Soluciones Industriales para Chile",
    description:
      "Grupo empresarial chileno con 85+ años de trayectoria. Herramientas industriales, fijaciones de calidad y tecnologías de automatización.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
